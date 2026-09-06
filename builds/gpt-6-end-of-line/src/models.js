import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// All assets are built from shared, physically lit geometry. Their small luminous
// inlays are actual surfaces, so they also illuminate a path-traced view.
const geometries = new Map();
const materials = new Map();
const colors = { pulse: '#46edff', arc: '#b396ff', cryo: '#8bebff', rail: '#ffcb62', mortar: '#ff7869' };
const TAU = Math.PI * 2;

function cached(key, create) {
  if (!geometries.has(key)) geometries.set(key, create());
  return geometries.get(key);
}

function material(key, options) {
  if (!materials.has(key)) materials.set(key, new THREE.MeshStandardMaterial(options));
  return materials.get(key);
}

const metal = material('metal', { color: '#192735', metalness: 0.83, roughness: 0.29 });
const armor = material('armor', { color: '#314555', metalness: 0.78, roughness: 0.32 });
const edge = material('edge', { color: '#71869a', metalness: 0.92, roughness: 0.2 });
const black = material('black', { color: '#07121b', metalness: 0.62, roughness: 0.51 });
const copper = material('copper', { color: '#b48c61', metalness: 0.9, roughness: 0.24 });
const white = material('ceramic', { color: '#a9c4cd', metalness: 0.35, roughness: 0.24 });

function glow(color, power = 2.4) {
  return material(`glow:${color}:${power}`, { color, emissive: color, emissiveIntensity: power, metalness: 0.45, roughness: 0.25 });
}

function bevel(w, h, d, b = 0.035) {
  b = Math.min(b, w / 5, h / 5, d / 5);
  return cached(`bevel:${w},${h},${d},${b}`, () => {
    const s = new THREE.Shape();
    const x = w / 2 - b, y = h / 2 - b;
    s.moveTo(-x, -y); s.lineTo(x, -y); s.lineTo(x, y); s.lineTo(-x, y); s.closePath();
    const g = new THREE.ExtrudeGeometry(s, { depth: d - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelSegments: 2, steps: 1 });
    g.translate(0, 0, -d / 2 + b);
    return g;
  });
}

function cylinder(top, bottom, height, segments = 12) {
  return cached(`cylinder:${top},${bottom},${height},${segments}`, () => new THREE.CylinderGeometry(top, bottom, height, segments));
}

function torus(radius, tube = 0.025, arc = TAU) {
  return cached(`torus:${radius},${tube},${arc}`, () => new THREE.TorusGeometry(radius, tube, 6, Math.max(12, Math.round(48 * arc / TAU)), arc));
}

function ico(radius, detail = 0) {
  return cached(`ico:${radius},${detail}`, () => new THREE.IcosahedronGeometry(radius, detail));
}

function mesh(parent, geometry, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geometry, mat);
  m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}

function box(p, w, h, d, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  return mesh(p, bevel(w, h, d), mat, x, y, z, rx, ry, rz);
}

function cyl(p, r, h, mat, x = 0, y = 0, z = 0, segments = 12, top = r) {
  return mesh(p, cylinder(top, r, h, segments), mat, x, y, z);
}

function ring(p, r, tube, mat, x = 0, y = 0, z = 0, rx = Math.PI / 2, ry = 0, rz = 0, arc = TAU) {
  return mesh(p, torus(r, tube, arc), mat, x, y, z, rx, ry, rz);
}

function group(p, x = 0, y = 0, z = 0) {
  const g = new THREE.Group(); g.position.set(x, y, z); p.add(g); return g;
}

function strut(p, from, to, r = 0.035, mat = edge, segments = 8) {
  const a = new THREE.Vector3(...from), b = new THREE.Vector3(...to);
  const length = a.distanceTo(b);
  const m = mesh(p, cylinder(r, r, Number(length.toFixed(5)), segments), mat);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.sub(a).normalize());
  return m;
}

function cable(p, points, mat, radius = 0.025) {
  const key = `cable:${JSON.stringify(points)}:${radius}`;
  const geo = cached(key, () => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(a => new THREE.Vector3(...a))), 16, radius, 5, false));
  return mesh(p, geo, mat);
}

function rotor(root, obj, axis = 'y', speed = 1) {
  obj.userData.axis = axis; obj.userData.speed = speed;
  root.userData.rotors.push(obj); return obj;
}

function setup() {
  const root = new THREE.Group();
  root.userData.rotors = []; root.userData.glows = [];
  return root;
}

function luminous(root, obj) { root.userData.glows.push(obj); return obj; }

// Collapse static siblings into one draw per material. Articulated groups remain
// intact, so turret aiming, rotor animation and armor/shield toggles stay local.
function batchStaticParts(root) {
  const protectedObjects = new Set(root.userData.rotors || []);
  root.traverse(object => {
    for (const [key, value] of Object.entries(object.userData)) {
      if (key === 'glows') continue;
      if (value?.isObject3D) protectedObjects.add(value);
      else if (Array.isArray(value)) for (const part of value) if (part?.isObject3D) protectedObjects.add(part);
    }
  });
  const replacements = new Map();
  function batch(object) {
    for (const child of [...object.children]) batch(child);
    if (!object.isGroup) return;
    const buckets = new Map();
    for (const part of object.children) {
      if (!part.isMesh || part.isInstancedMesh || part.children.length || protectedObjects.has(part) || Array.isArray(part.material)) continue;
      part.updateMatrix();
      const attributes = Object.keys(part.geometry.attributes).sort().join(',');
      const key = `${part.material.uuid}:${part.castShadow}:${part.receiveShadow}:${part.visible}:${part.layers.mask}:${part.renderOrder}:${part.frustumCulled}:${attributes}`;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(part);
    }
    for (const [bucketKey, parts] of buckets) {
      if (parts.length < 2) continue;
      const geometryKey = `merged:${bucketKey}:${parts.map(part => `${part.geometry.uuid}@${part.matrix.elements.join(',')}`).join('|')}`;
      const geometry = cached(geometryKey, () => {
        const baked = parts.map(part => {
          const g = part.geometry.index ? part.geometry.toNonIndexed() : part.geometry.clone();
          g.applyMatrix4(part.matrix);
          return g;
        });
        const result = mergeGeometries(baked, false);
        for (const g of baked) g.dispose();
        if (!result) throw new Error('Model geometry batching failed.');
        return result;
      });
      const first = parts[0];
      const combined = new THREE.Mesh(geometry, first.material);
      combined.name = `batched-${first.material.name || first.material.type}`;
      combined.castShadow = first.castShadow;
      combined.receiveShadow = first.receiveShadow;
      combined.visible = first.visible;
      combined.layers.mask = first.layers.mask;
      combined.renderOrder = first.renderOrder;
      combined.frustumCulled = first.frustumCulled;
      for (const part of parts) { object.remove(part); replacements.set(part, combined); }
      object.add(combined);
    }
  }
  batch(root);
  root.userData.glows = [...new Set(root.userData.glows.map(part => replacements.get(part) || part))];
  return root;
}

function muzzle(root, turret, x, y, z) {
  const point = new THREE.Object3D(); point.position.set(x, y, z); turret.add(point);
  root.userData.muzzle = point;
}

function towerBase(root, color, level) {
  const light = glow(color);
  cyl(root, 0.82, 0.14, black, 0, 0.07, 0, 8);
  cyl(root, 0.72, 0.16, armor, 0, 0.2, 0, 8, 0.64);
  ring(root, 0.63, 0.022, light, 0, 0.284);
  cyl(root, 0.41, 0.19, black, 0, 0.365, 0, 12);
  cyl(root, 0.45, 0.065, edge, 0, 0.44, 0, 12);
  cyl(root, 0.35, 0.23, metal, 0, 0.55, 0, 12, 0.29);
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + i * Math.PI / 2;
    const foot = group(root, Math.sin(a) * 0.56, 0.23, Math.cos(a) * 0.56);
    foot.rotation.y = a;
    box(foot, 0.22, 0.23, 0.45, armor);
    box(foot, 0.08, 0.035, 0.25, light, 0, 0.135, 0.055);
    cyl(foot, 0.042, 0.028, edge, 0, 0.138, -0.1, 6);
  }
  if (level >= 2) {
    for (let i = 0; i < 4; i++) {
      const a = i * Math.PI / 2;
      box(root, 0.15, 0.28, 0.22, metal, Math.sin(a) * 0.62, 0.43, Math.cos(a) * 0.62, 0, a);
      box(root, 0.045, 0.19, 0.03, light, Math.sin(a) * 0.74, 0.45, Math.cos(a) * 0.74, 0, a);
    }
  }
  if (level >= 3) {
    const halo = rotor(root, group(root, 0, 0.35), 'y', 0.18);
    for (let i = 0; i < 3; i++) ring(halo, 0.85, 0.023, light, 0, 0, 0, Math.PI / 2, 0, i * TAU / 3, 1.35);
  }
}

function pulse(root, t, color, level) {
  const light = glow(color);
  cyl(t, 0.3, 0.48, armor, 0, 0.04, 0, 12);
  box(t, 0.92, 0.38, 0.62, metal, 0, 0.3, -0.05);
  box(t, 0.53, 0.24, 0.62, armor, 0, 0.55, -0.1, 0.13);
  box(t, 0.29, 0.05, 0.23, light, 0, 0.69, -0.09);
  for (const sign of [-1, 1]) {
    box(t, 0.23, 0.32, 0.57, armor, sign * 0.4, 0.33, -0.08, 0, 0, sign * -0.1);
    const gun = group(t, sign * 0.26, 0.39, 0.36);
    const sleeve = cyl(gun, 0.105, 0.72, black); sleeve.rotation.x = Math.PI / 2;
    for (const z of [-0.28, 0.04, 0.29]) {
      const collar = cyl(gun, 0.131, 0.085, edge, 0, 0, z, 8); collar.rotation.x = Math.PI / 2;
    }
    box(gun, 0.055, 0.075, 0.57, light, 0, 0.105, 0);
    ring(gun, 0.079, 0.018, light, 0, 0, 0.38, 0);
    strut(t, [sign * 0.38, 0.03, -0.24], [sign * 0.4, 0.22, 0.25], 0.033, copper);
    for (let i = 0; i < 3; i++) box(t, 0.023, 0.11, 0.21, black, sign * 0.528, 0.33, -0.19 + i * 0.105);
  }
  const scanner = rotor(root, group(t, 0, 0.81, -0.2), 'y', 0.48);
  cyl(scanner, 0.05, 0.15, edge);
  box(scanner, 0.33, 0.1, 0.1, black, 0, 0.095);
  box(scanner, 0.24, 0.032, 0.016, light, 0, 0.095, 0.057);
  if (level > 1) for (const sign of [-1, 1]) {
    box(t, 0.16, 0.17, 0.39, white, sign * 0.57, 0.38, -0.17);
    box(t, 0.037, 0.055, 0.3, light, sign * 0.66, 0.39, -0.17);
  }
  muzzle(root, t, 0, 0.39, 0.78);
}

function arc(root, t, color, level) {
  const light = glow(color);
  cyl(t, 0.32, 0.6, black, 0, 0.25);
  for (let i = 0; i < 4; i++) cyl(t, 0.38 - i * 0.025, 0.06, i % 2 ? light : armor, 0, 0.12 + i * 0.17);
  const orb = group(t, 0, 1.08);
  luminous(root, mesh(orb, ico(0.19, 1), glow(color, 5)));
  for (let i = 0; i < 3; i++) {
    const frame = group(orb); frame.rotation.set(i * 0.85, i * 1.1, i * 0.65);
    const g = rotor(root, group(frame), i === 1 ? 'x' : 'z', i % 2 ? -0.9 : 0.62);
    ring(g, 0.36 + i * 0.105, 0.022, edge, 0, 0, 0, 0);
    ring(g, 0.36 + i * 0.105, 0.012, light, 0, 0, 0.027, 0, 0, 0, Math.PI * 0.65);
    box(g, 0.105, 0.19, 0.105, metal, 0.36 + i * 0.105, 0, 0);
  }
  for (const sign of [-1, 1]) {
    box(t, 0.21, 0.68, 0.34, armor, sign * 0.49, 0.43, 0, 0, 0, sign * -0.25);
    box(t, 0.12, 0.55, 0.2, metal, sign * 0.67, 1.02, 0, 0, 0, sign * 0.13);
    box(t, 0.15, 0.21, 0.25, edge, sign * 0.63, 1.39, 0);
    box(t, 0.042, 0.39, 0.042, light, sign * 0.65, 1.07, 0.114);
    cyl(t, 0.105, 0.25, copper, sign * 0.37, 0.47, -0.23, 8);
    cable(t, [[sign * 0.23, 0.23, -0.17], [sign * 0.57, 0.26, -0.35], [sign * 0.68, 0.85, -0.2]], light, 0.021);
    for (let j = 0; j < 3; j++) ring(t, 0.11, 0.018, black, sign * 0.37, 0.4 + j * 0.075, -0.23);
  }
  if (level > 1) {
    const halo = rotor(root, group(t, 0, 1.54), 'y', -0.4);
    ring(halo, 0.56, 0.025, light);
    for (let i = 0; i < 4; i++) box(halo, 0.14, 0.13, 0.14, metal, Math.sin(i * Math.PI / 2) * 0.56, 0, Math.cos(i * Math.PI / 2) * 0.56);
  }
  muzzle(root, t, 0, 1.08, 0);
}

function cryo(root, t, color, level) {
  const light = glow(color);
  cyl(t, 0.32, 0.4, armor, 0, 0.1);
  box(t, 0.74, 0.42, 0.67, metal, 0, 0.38, -0.06);
  const chamber = group(t, 0, 0.57, 0.2);
  const shell = cyl(chamber, 0.34, 0.5, armor); shell.rotation.x = Math.PI / 2;
  for (const z of [-0.26, 0.04, 0.28]) ring(chamber, 0.35, 0.035, z === 0.04 ? light : edge, 0, 0, z, 0);
  mesh(chamber, ico(0.19, 2), glow(color, 5), 0, 0, 0.3);
  const turbine = rotor(root, group(chamber, 0, 0, 0.35), 'z', -0.6);
  for (let i = 0; i < 8; i++) {
    const a = i * TAU / 8;
    box(turbine, 0.075, 0.19, 0.075, white, Math.sin(a) * 0.25, Math.cos(a) * 0.25, 0, 0, 0, -a - 0.45);
  }
  ring(chamber, 0.21, 0.014, light, 0, 0, 0.4, 0);
  for (const sign of [-1, 1]) {
    box(t, 0.19, 0.42, 0.66, white, sign * 0.48, 0.42, -0.13, 0, 0, sign * -0.12);
    for (let i = 0; i < 4; i++) box(t, 0.09, 0.3, 0.04, black, sign * 0.57, 0.42, -0.37 + i * 0.135);
    cyl(t, 0.095, 0.43, black, sign * 0.35, 0.62, -0.42, 10);
    cyl(t, 0.073, 0.3, light, sign * 0.35, 0.64, -0.42, 10);
    cyl(t, 0.11, 0.06, edge, sign * 0.35, 0.86, -0.42, 10);
    cable(t, [[sign * 0.35, 0.9, -0.42], [sign * 0.19, 1, -0.22], [sign * 0.15, 0.84, 0]], copper);
  }
  if (level > 1) {
    for (const sign of [-1, 1]) {
      box(t, 0.08, 0.42, 0.52, armor, sign * 0.7, 0.57, -0.18, 0, 0, sign * 0.2);
      box(t, 0.033, 0.34, 0.055, light, sign * 0.71, 0.63, 0.12, 0, 0, sign * 0.2);
    }
  }
  muzzle(root, t, 0, 0.57, 0.66);
}

function rail(root, t, color, level) {
  const light = glow(color);
  cyl(t, 0.33, 0.48, armor, 0, 0.05, 0, 8);
  box(t, 0.64, 0.39, 0.65, metal, 0, 0.28, -0.32);
  box(t, 0.41, 0.14, 0.65, armor, 0, 0.55, -0.31, -0.1);
  box(t, 0.21, 0.18, 1.71, black, 0, 0.32, 0.36);
  box(t, 0.09, 0.035, 1.56, light, 0, 0.424, 0.43);
  for (const sign of [-1, 1]) {
    box(t, 0.13, 0.18, 1.56, edge, sign * 0.18, 0.36, 0.44);
    box(t, 0.038, 0.04, 1.35, light, sign * 0.254, 0.36, 0.43);
    box(t, 0.16, 0.3, 0.46, armor, sign * 0.43, 0.24, -0.35);
    strut(t, [sign * 0.27, 0.05, -0.41], [sign * 0.27, 0.25, 0.47], 0.04, copper);
    for (let j = 0; j < 4; j++) box(t, 0.28, 0.3, 0.09, metal, sign * 0.2, 0.35, -0.02 + j * 0.34);
    cable(t, [[sign * 0.5, 0.29, -0.45], [sign * 0.58, 0.04, -0.15], [sign * 0.2, 0.15, 0.3]], light, 0.025);
  }
  box(t, 0.55, 0.27, 0.15, armor, 0, 0.35, 1.22);
  box(t, 0.16, 0.115, 0.018, black, 0, 0.35, 1.305);
  box(t, 0.09, 0.044, 0.022, light, 0, 0.35, 1.318);
  const scope = cyl(t, 0.075, 0.38, black, 0, 0.65, -0.27, 10); scope.rotation.x = Math.PI / 2;
  ring(t, 0.067, 0.011, light, 0, 0.65, -0.065, 0);
  if (level > 1) for (const sign of [-1, 1]) {
    box(t, 0.075, 0.35, 0.46, white, sign * 0.34, 0.59, -0.35, 0, 0, sign * -0.12);
    box(t, 0.035, 0.07, 0.4, light, sign * 0.37, 0.77, -0.35);
  }
  muzzle(root, t, 0, 0.35, 1.34);
}

function mortar(root, t, color, level) {
  const light = glow(color);
  cyl(t, 0.41, 0.45, metal, 0, 0.04, 0, 12);
  ring(t, 0.4, 0.025, light, 0, 0.2);
  box(t, 0.89, 0.29, 0.67, armor, 0, 0.27);
  const pod = group(t, 0, 0.53, 0); pod.rotation.x = -0.55;
  box(pod, 0.97, 0.75, 0.72, metal);
  box(pod, 1.06, 0.09, 0.8, armor, 0, 0.42);
  box(pod, 1.06, 0.09, 0.8, armor, 0, -0.42);
  for (const x of [-0.25, 0.25]) for (const y of [-0.2, 0.2]) {
    const cell = group(pod, x, y, 0.16);
    const tube = cyl(cell, 0.18, 0.5, black, 0, 0, 0, 8); tube.rotation.x = Math.PI / 2;
    ring(cell, 0.174, 0.03, edge, 0, 0, 0.25, 0);
    ring(cell, 0.135, 0.018, light, 0, 0, 0.264, 0);
    const rocket = mesh(cell, cylinder(0.02, 0.088, 0.16, 8), copper, 0, 0, 0.22, Math.PI / 2);
    rocket.rotation.x = Math.PI / 2;
  }
  for (const sign of [-1, 1]) {
    const joint = cyl(t, 0.17, 0.16, edge, sign * 0.55, 0.46, 0, 12); joint.rotation.z = Math.PI / 2;
    ring(t, 0.11, 0.018, light, sign * 0.64, 0.46, 0, 0, Math.PI / 2);
    strut(t, [sign * 0.37, 0.1, -0.3], [sign * 0.48, 0.73, -0.29], 0.042, copper);
    box(pod, 0.045, 0.54, 0.07, light, sign * 0.53, 0, 0.26);
    for (let j = 0; j < 3; j++) box(pod, 0.04, 0.055, 0.26, black, sign * 0.526, -0.15 + j * 0.15, -0.1);
  }
  if (level > 1) {
    box(pod, 0.77, 0.13, 0.72, armor, 0, 0.55);
    for (const sign of [-1, 1]) box(pod, 0.12, 0.17, 0.59, light, sign * 0.26, 0.56);
  }
  muzzle(root, t, 0, 0.85, 0.54);
}

/** Build a tower with a turret pivot and a +Z firing direction. */
export function createTower(type, level = 1, branch = null) {
  if (!colors[type]) type = 'pulse';
  const root = setup();
  root.name = `tower-${type}-${level}`;
  root.userData.type = type; root.userData.level = level; root.userData.branch = branch;
  const color = colors[type];
  towerBase(root, color, level);
  const turret = group(root, 0, type === 'arc' ? 0.63 : 0.82);
  root.userData.turret = turret;
  ({ pulse, arc, cryo, rail, mortar })[type](root, turret, color, level);
  if (branch) {
    // Separate branch silhouettes: offensive forks versus a defensive ring.
    const offensive = /power|damage|over|pierc|sniper|volt|shatter|burst|nova|barrage|assault|focus|a$|left/i.test(String(branch));
    const light = glow(color);
    if (offensive) {
      for (const s of [-1, 1]) {
        box(turret, 0.105, 0.34, 0.5, copper, s * 0.58, 0.65, -0.4, -0.18, 0, s * -0.18);
        box(turret, 0.034, 0.28, 0.045, light, s * 0.6, 0.69, -0.15, 0, 0, s * -0.18);
      }
    } else {
      const ringlet = rotor(root, group(root, 0, 0.67), 'y', 0.28);
      for (let i = 0; i < 4; i++) ring(ringlet, 0.76, 0.025, light, 0, 0, 0, Math.PI / 2, 0, i * Math.PI / 2, 1.12);
      for (const s of [-1, 1]) box(turret, 0.12, 0.4, 0.41, white, s * 0.61, 0.35, -0.28, 0, 0, s * 0.15);
    }
  }
  return batchStaticParts(root);
}

function cycle(root) {
  const light = glow('#ff7654', 4);
  for (const z of [-0.46, 0.46]) {
    const wheel = rotor(root, group(root, 0, 0.25, z), 'x', 6);
    const tire = cyl(wheel, 0.25, 0.13, black, 0, 0, 0, 16); tire.rotation.z = Math.PI / 2;
    for (const x of [-0.08, 0.08]) {
      ring(wheel, 0.211, 0.027, light, x, 0, 0, 0, Math.PI / 2);
      const hub = cyl(wheel, 0.084, 0.018, armor, x, 0, 0, 8); hub.rotation.z = Math.PI / 2;
      for (let i = 0; i < 3; i++) {
        const a = i * TAU / 3;
        strut(wheel, [x, 0, 0], [x, Math.sin(a) * 0.18, Math.cos(a) * 0.18], 0.022, metal);
      }
    }
  }
  box(root, 0.23, 0.25, 0.66, armor, 0, 0.31, -0.02, -0.1);
  box(root, 0.24, 0.12, 0.46, metal, 0, 0.5, 0.14, -0.27);
  box(root, 0.18, 0.18, 0.27, black, 0, 0.67, -0.03, -0.6);
  mesh(root, ico(0.123, 1), armor, 0, 0.77, 0.14);
  box(root, 0.145, 0.04, 0.06, light, 0, 0.79, 0.24);
  for (const s of [-1, 1]) {
    box(root, 0.045, 0.048, 0.57, light, s * 0.145, 0.39, -0.04);
    strut(root, [s * 0.16, 0.26, -0.44], [s * 0.17, 0.48, 0.15], 0.028, edge);
    strut(root, [s * 0.12, 0.57, 0.28], [s * 0.075, 0.68, -0.02], 0.035, black);
  }
  box(root, 0.14, 0.05, 0.05, light, 0, 0.39, 0.62);
  root.userData.body = root;
}

function drone(root) {
  const light = glow('#ff9c5d');
  const body = group(root, 0, 0.82); root.userData.body = body;
  box(body, 0.35, 0.23, 0.64, armor, 0, 0, 0.02, -0.08);
  box(body, 0.2, 0.13, 0.42, black, 0, 0.17, -0.04, -0.1);
  box(body, 0.25, 0.055, 0.06, light, 0, 0.03, 0.36);
  for (const s of [-1, 1]) {
    const wing = group(body, s * 0.43, 0, -0.13); wing.rotation.y = s * -0.38; wing.rotation.z = s * -0.15;
    box(wing, 0.63, 0.11, 0.34, metal);
    box(wing, 0.48, 0.035, 0.048, light, s * 0.035, 0.075, 0.12);
    box(wing, 0.24, 0.13, 0.46, armor, s * 0.28, -0.04, -0.06, 0.13);
    const fan = rotor(root, group(wing, s * 0.24, -0.08, -0.08), 'y', s * 4);
    ring(fan, 0.17, 0.036, edge);
    ring(fan, 0.133, 0.018, light, 0, -0.025);
    for (let i = 0; i < 3; i++) box(fan, 0.25, 0.02, 0.052, black, 0, 0, 0, 0, i * Math.PI / 3);
    strut(body, [s * 0.12, -0.1, -0.21], [s * 0.45, -0.26, -0.26], 0.029, edge);
  }
  box(body, 0.075, 0.1, 0.32, black, 0, -0.19, 0.23);
  box(body, 0.04, 0.046, 0.06, light, 0, -0.19, 0.42);
  mesh(body, ico(0.085, 1), light, 0, -0.19, -0.06);
}

function walker(root) {
  const light = glow('#ff5470');
  const body = group(root, 0, 0.63); root.userData.body = body;
  box(body, 0.61, 0.32, 0.8, metal);
  box(body, 0.47, 0.15, 0.59, armor, 0, 0.23, -0.04, -0.1);
  box(body, 0.33, 0.095, 0.17, black, 0, 0.37, 0.12);
  box(body, 0.3, 0.036, 0.04, light, 0, 0.37, 0.215);
  for (const s of [-1, 1]) for (const z of [-0.3, 0.3]) {
    const leg = group(root, s * 0.33, 0.56, z);
    const hip = cyl(leg, 0.12, 0.13, edge, 0, 0, 0, 8); hip.rotation.z = Math.PI / 2;
    strut(leg, [0, 0, 0], [s * 0.2, -0.08, z > 0 ? 0.13 : -0.13], 0.068, armor);
    strut(leg, [s * 0.2, -0.08, z > 0 ? 0.13 : -0.13], [s * 0.24, -0.45, z > 0 ? 0.19 : -0.19], 0.044, edge);
    box(leg, 0.17, 0.08, 0.28, black, s * 0.24, -0.49, z > 0 ? 0.19 : -0.19);
    box(leg, 0.08, 0.05, 0.14, light, s * 0.24, -0.443, z > 0 ? 0.22 : -0.16);
  }
  for (const s of [-1, 1]) {
    box(body, 0.09, 0.17, 0.62, armor, s * 0.35, 0.07);
    box(body, 0.027, 0.046, 0.48, light, s * 0.41, 0.1);
    for (let j = 0; j < 3; j++) box(body, 0.025, 0.09, 0.09, black, s * 0.406, -0.03, -0.2 + j * 0.17);
  }
}

function carrier(root) {
  const light = glow('#d586ff');
  const body = group(root, 0, 0.7); root.userData.body = body;
  cyl(body, 0.52, 0.3, metal, 0, 0, 0, 8, 0.42);
  cyl(body, 0.35, 0.21, armor, 0, 0.24, 0, 8, 0.24);
  mesh(body, ico(0.2, 1), light, 0, 0.43);
  const halo = rotor(root, group(body, 0, 0.5), 'y', -0.6);
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2;
    const p = group(body, Math.sin(a) * 0.46, 0, Math.cos(a) * 0.46); p.rotation.y = a;
    box(p, 0.3, 0.39, 0.27, armor, 0, 0.05, 0.12, -0.24);
    box(p, 0.22, 0.065, 0.035, light, 0, 0.17, 0.28);
    box(p, 0.35, 0.11, 0.5, black, 0, -0.3, 0.03);
    ring(p, 0.14, 0.025, light, 0, -0.37, 0.04);
    cyl(p, 0.11, 0.07, metal, 0, -0.3, 0.04, 8);
    strut(p, [0, -0.1, 0], [0, -0.25, -0.15], 0.043, copper);
    ring(halo, 0.55, 0.025, light, 0, 0, 0, Math.PI / 2, 0, a, 1.0);
  }
  ring(body, 0.42, 0.025, edge, 0, 0.15);
  ring(body, 0.66, 0.016, glow('#d586ff', 2), 0, 0.03, 0, 0, 0, 0, Math.PI);
  ring(body, 0.66, 0.016, glow('#d586ff', 2), 0, 0.03, 0, 0, Math.PI / 2, 0, Math.PI);
}

function boss(root) {
  const light = glow('#ff5140', 4.5);
  const core = group(root, 0, 0); root.userData.body = core;
  const armorPanels = group(core); root.userData.armorPanels = armorPanels;
  // The recognizer's negative space is intentional: a monumental inverted U,
  // a thin command visor, and two heavily articulated armored legs.
  box(core, 3.75, 0.68, 1.1, metal, 0, 3.25, 0);
  box(core, 3.2, 0.33, 1.25, armor, 0, 3.71, -0.04, 0.08);
  box(core, 2.5, 0.11, 0.07, light, 0, 3.42, 0.64);
  box(core, 1.35, 0.45, 0.86, black, 0, 2.88, 0.06);
  box(core, 0.86, 0.075, 0.06, light, 0, 2.98, 0.52);
  const exposedCore = group(core, 0, 2.88, 0.55);
  root.userData.exposedCore = exposedCore;
  exposedCore.visible = false;
  ring(exposedCore, 0.31, 0.043, copper, 0, 0, 0, 0);
  ring(exposedCore, 0.24, 0.019, glow('#ffba68', 2.6), 0, 0, 0.035, 0);
  mesh(exposedCore, ico(0.19, 1), glow('#fff0a2', 3.2), 0, 0, 0.1);
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2;
    strut(exposedCore, [Math.sin(a) * 0.19, Math.cos(a) * 0.19, 0.05], [Math.sin(a) * 0.37, Math.cos(a) * 0.37, -0.025], 0.027, edge);
  }
  for (const s of [-1, 1]) {
    box(core, 0.73, 1.13, 0.94, armor, s * 1.56, 2.8, 0, 0, 0, s * 0.1);
    box(armorPanels, 0.93, 0.21, 1.16, armor, s * 1.49, 3.49, 0.04, 0, 0, s * -0.09);
    box(armorPanels, 0.64, 0.11, 0.045, light, s * 1.49, 3.52, 0.646, 0, 0, s * -0.09);
    const knee = cyl(core, 0.32, 0.9, black, s * 1.66, 2.07, 0, 12); knee.rotation.z = Math.PI / 2;
    ring(core, 0.24, 0.035, light, s * 2.13, 2.07, 0, 0, Math.PI / 2);
    box(core, 0.62, 1.33, 0.8, metal, s * 1.78, 1.3, -0.1, 0.12, 0, s * 0.03);
    box(core, 0.9, 0.24, 1.44, black, s * 1.81, 0.21, 0.25);
    box(core, 0.79, 0.28, 1.02, armor, s * 1.81, 0.44, 0.2, -0.12);
    box(core, 0.67, 0.045, 0.12, light, s * 1.81, 0.37, 0.98);
    for (let j = 0; j < 4; j++) {
      box(armorPanels, 0.76, 0.18, 0.16, armor, s * 1.78, 0.82 + j * 0.29, 0.37, -0.12);
      box(armorPanels, 0.42, 0.035, 0.03, light, s * 1.78, 0.85 + j * 0.29, 0.466);
    }
    strut(core, [s * 1.34, 2.75, -0.44], [s * 1.36, 0.65, -0.36], 0.078, copper);
    strut(core, [s * 2.02, 2.62, -0.35], [s * 2.15, 0.72, -0.3], 0.07, edge);
    for (const z of [-0.43, 0.43]) {
      const engine = group(core, s * 1.49, 3.76, z);
      cyl(engine, 0.25, 0.34, black, 0, 0.04, 0, 12);
      ring(engine, 0.21, 0.03, light, 0, 0.23);
      cyl(engine, 0.12, 0.12, light, 0, 0.18, 0, 8);
    }
    for (let j = 0; j < 4; j++) box(core, 0.12, 0.26, 0.035, black, s * (0.87 + j * 0.2), 3.68, 0.615);
    cable(core, [[s * 0.69, 3.03, -0.54], [s * 1.03, 2.49, -0.68], [s * 1.49, 2.59, -0.47]], glow('#ff7a38', 2.5), 0.045);
  }
  const crown = rotor(root, group(core, 0, 4.08), 'y', 0.2);
  for (let i = 0; i < 4; i++) {
    ring(crown, 0.84, 0.045, edge, 0, 0, 0, Math.PI / 2, 0, i * Math.PI / 2, 1.05);
    ring(crown, 0.75, 0.018, light, 0, 0.02, 0, Math.PI / 2, 0, i * Math.PI / 2, 1.05);
  }
  mesh(crown, ico(0.24, 1), light, 0, 0.02);
  root.userData.muzzle = group(core, 0, 2.95, 0.64);
}

function containmentShield(root, type) {
  const color = type === 'boss' ? '#ff9869' : '#ba8dff';
  const key = `containment:${color}`;
  if (!materials.has(key)) {
    materials.set(key, new THREE.MeshPhysicalMaterial({
      color, emissive: color, emissiveIntensity: 0.3,
      metalness: 0.08, roughness: 0.19, clearcoat: 1,
      transparent: true, opacity: 0.06, depthWrite: false,
      side: THREE.DoubleSide,
    }));
  }
  const shield = group(root, 0, type === 'boss' ? 2.18 : 0.74);
  shield.name = `${type}-containment-shield`;
  root.userData.shield = shield;
  shield.scale.set(...(type === 'boss' ? [2.52, 2.31, 1.42] : [0.94, 0.78, 0.94]));
  const shellGeometry = cached('containment-sphere', () => new THREE.SphereGeometry(1, 24, 16));
  const shell = mesh(shield, shellGeometry, materials.get(key));
  shell.castShadow = false;
  shell.receiveShadow = false;
  const accent = glow(color, 1.25);
  for (let plane = 0; plane < 3; plane++) {
    const frame = group(shield);
    frame.rotation.set(plane === 1 ? Math.PI / 2 : 0, plane === 2 ? Math.PI / 2 : 0, 0);
    for (let i = 0; i < 3; i++) {
      const segment = ring(frame, 1.005, 0.008, accent, 0, 0, 0, 0, 0, i * TAU / 3 + plane * 0.31, 0.62);
      segment.castShadow = false;
    }
  }
}

export function createEnemy(type) {
  const root = setup(); root.name = `enemy-${type}`; root.userData.type = type;
  ({ cycle, drone, walker, carrier, boss }[type] || cycle)(root);
  if (type === 'carrier' || type === 'boss') containmentShield(root, type);
  return batchStaticParts(root);
}

/** A twelve-meter energy cathedral, with a clear and readable central core. */
export function createReactor() {
  const root = setup(); root.name = 'reactor';
  const light = glow('#53edff', 2.6), soft = glow('#7fa9ff', 1.5);
  cyl(root, 2.5, 0.35, black, 0, 0.175, 0, 12, 2.32);
  cyl(root, 2.16, 0.22, armor, 0, 0.46, 0, 12, 2.02);
  ring(root, 2.08, 0.035, light, 0, 0.585);
  cyl(root, 1.52, 0.7, metal, 0, 0.9, 0, 12, 1.36);
  cyl(root, 1.25, 0.2, edge, 0, 1.3, 0, 12);
  cyl(root, 0.65, 4.65, black, 0, 3.65, 0, 12, 0.47);
  cyl(root, 0.22, 7.6, light, 0, 5.1, 0, 12, 0.13);
  cyl(root, 0.075, 2.1, soft, 0, 9.74, 0, 8, 0.015);
  for (let i = 0; i < 6; i++) {
    const a = i * TAU / 6;
    const p = group(root, Math.sin(a) * 1.4, 0, Math.cos(a) * 1.4); p.rotation.y = a;
    box(p, 0.63, 0.72, 0.82, armor, 0, 0.87, 0.27);
    box(p, 0.23, 0.08, 0.63, light, 0, 1.27, 0.28);
    const blade = group(p, 0, 1.15, 0.06); blade.rotation.x = -0.12;
    mesh(blade, cylinder(0.13, 0.36, 5.5, 4), metal, 0, 2.75, 0, 0, Math.PI / 4);
    box(blade, 0.07, 4.8, 0.045, light, 0, 2.72, 0.23);
    box(blade, 0.24, 1.1, 0.36, armor, 0, 0.8, 0.1);
    box(blade, 0.21, 0.22, 0.26, edge, 0, 4.63, 0.04);
    strut(p, [0, 0.75, 0.66], [0, 4.42, -0.32], 0.065, edge);
    cable(p, [[0, 1.05, 0.48], [0.24, 2.18, 0.7], [0, 3.31, 0.12]], soft, 0.04);
    for (let j = 0; j < 3; j++) box(p, 0.21, 0.095, 0.1, black, 0, 0.68 + j * 0.17, 0.725);
  }
  for (let j = 0; j < 5; j++) {
    const y = 2.25 + j * 1.25, r = 0.8 + Math.sin(j * 0.8) * 0.38;
    const g = rotor(root, group(root, 0, y), 'y', (j % 2 ? -1 : 1) * (0.15 + j * 0.03));
    ring(g, r, 0.065, armor);
    ring(g, r - 0.1, 0.024, j % 2 ? soft : light, 0, 0.06);
    for (let i = 0; i < 3; i++) {
      const a = i * TAU / 3;
      box(g, 0.19, 0.3, 0.19, black, Math.sin(a) * r, 0, Math.cos(a) * r, 0, a);
      box(g, 0.07, 0.16, 0.07, light, Math.sin(a) * (r + 0.1), 0, Math.cos(a) * (r + 0.1), 0, a);
    }
  }
  const heart = rotor(root, group(root, 0, 7.45), 'y', 0.27);
  luminous(root, mesh(heart, ico(0.61, 1), light));
  ring(heart, 1.01, 0.045, edge, 0, 0, 0, 0, 0, Math.PI / 5);
  ring(heart, 0.89, 0.022, soft, 0, 0, 0, 0, Math.PI / 2.6);
  const crown = rotor(root, group(root, 0, 8.8), 'y', -0.11);
  crown.rotation.z = 0.11;
  for (let i = 0; i < 6; i++) {
    const a = i * TAU / 6;
    ring(crown, 2.05, 0.14, armor, 0, Math.sin(a) * 0.18, 0, Math.PI / 2, 0, a, 0.76);
    ring(crown, 1.87, 0.035, light, 0, Math.sin(a) * 0.18 - 0.035, 0, Math.PI / 2, 0, a, 0.76);
    box(crown, 0.19, 0.64, 0.34, black, Math.sin(a) * 2.05, Math.sin(a) * 0.18, Math.cos(a) * 2.05, 0, a);
  }
  const needle = rotor(root, group(root, 0, 10.45), 'y', 0.09);
  for (let i = 0; i < 3; i++) {
    const a = i * TAU / 3;
    const p = group(needle, Math.sin(a) * 0.48, 0, Math.cos(a) * 0.48); p.rotation.y = a;
    mesh(p, cylinder(0.018, 0.13, 1.9, 4), armor, 0, 0, 0, 0.16, Math.PI / 4);
    box(p, 0.036, 1.4, 0.025, light, 0, -0.12, 0.1, 0.16);
  }
  return batchStaticParts(root);
}

/** An armored, segmented vertical transit gate. The opening faces local +Z. */
export function createPortal() {
  const root = setup(); root.name = 'portal';
  const light = glow('#ffa667', 3), hot = glow('#ffddb5', 3.5);
  const frame = group(root, 0, 2.4);
  for (let i = 0; i < 6; i++) {
    const a = i * TAU / 6 + Math.PI / 6;
    const b = (i + 1) * TAU / 6 + Math.PI / 6;
    const from = [Math.cos(a) * 2.1, Math.sin(a) * 2.1, 0];
    const to = [Math.cos(b) * 2.1, Math.sin(b) * 2.1, 0];
    strut(frame, from, to, 0.2, armor, 6);
    strut(frame, [from[0] * 0.88, from[1] * 0.88, 0.17], [to[0] * 0.88, to[1] * 0.88, 0.17], 0.045, light, 6);
    const a2 = a + 0.035, b2 = b - 0.035;
    strut(frame, [Math.cos(a2) * 2.26, Math.sin(a2) * 2.26, -0.07], [Math.cos(b2) * 2.26, Math.sin(b2) * 2.26, -0.07], 0.041, edge, 6);
    const corner = group(frame, from[0], from[1], 0); corner.rotation.z = a;
    box(corner, 0.44, 0.49, 0.6, black);
    box(corner, 0.25, 0.32, 0.09, armor, 0, 0, 0.33);
    box(corner, 0.075, 0.19, 0.035, hot, 0, 0, 0.393);
  }
  for (const s of [-1, 1]) {
    box(root, 0.86, 0.3, 1.41, black, s * 2.1, 0.15);
    box(root, 0.6, 1.73, 0.76, armor, s * 2.1, 1.09, -0.06, 0, 0, s * 0.08);
    box(root, 0.13, 1.31, 0.07, light, s * 2.15, 1.14, 0.35, 0, 0, s * 0.08);
    box(root, 0.73, 0.23, 0.92, metal, s * 2.03, 1.96, -0.02);
    cyl(root, 0.14, 0.34, copper, s * 2.08, 2.24, -0.07, 8);
    for (let j = 0; j < 4; j++) box(root, 0.38, 0.06, 0.12, black, s * 2.1, 0.7 + j * 0.22, 0.375);
    strut(root, [s * 2.28, 0.31, -0.55], [s * 1.94, 2.06, -0.25], 0.08, edge);
  }
  const iris = rotor(root, group(frame, 0, 0, -0.04), 'z', 0.15);
  for (let i = 0; i < 3; i++) {
    ring(iris, 1.63, 0.021, light, 0, 0, 0, 0, 0, i * TAU / 3, 1.2);
    ring(iris, 1.56, 0.011, hot, 0, 0, 0.055, 0, 0, i * TAU / 3 + 0.13, 0.78);
  }
  root.userData.opening = group(root, 0, 2.4);
  return batchStaticParts(root);
}
