import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const TAU = Math.PI * 2;
const geos = new Map();
const mats = new Map();

function geo(key, make) {
  if (!geos.has(key)) geos.set(key, make());
  return geos.get(key);
}
function mat(key, opts) {
  if (!mats.has(key)) mats.set(key, new THREE.MeshStandardMaterial(opts));
  return mats.get(key);
}
function phys(key, opts) {
  if (!mats.has(key)) mats.set(key, new THREE.MeshPhysicalMaterial(opts));
  return mats.get(key);
}

const chrome = mat('chrome', { color: '#6f8898', metalness: 0.92, roughness: 0.18 });
const armor = mat('armor', { color: '#1a2a36', metalness: 0.78, roughness: 0.32 });
const voidMat = mat('void', { color: '#070d14', metalness: 0.55, roughness: 0.48 });
const glass = phys('glass', { color: '#8fd7e8', metalness: 0.15, roughness: 0.06, transmission: 0.55, thickness: 0.35, transparent: true, opacity: 0.85 });

function glow(color, power = 2.6) {
  return mat(`g:${color}:${power}`, { color, emissive: color, emissiveIntensity: power, metalness: 0.4, roughness: 0.28 });
}

function boxG(w, h, d) {
  return geo(`b:${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d));
}
function cylG(t, b, h, s = 12) {
  return geo(`c:${t},${b},${h},${s}`, () => new THREE.CylinderGeometry(t, b, h, s));
}
function torusG(r, t, a = TAU) {
  return geo(`t:${r},${t},${a}`, () => new THREE.TorusGeometry(r, t, 8, Math.max(12, Math.round(40 * a / TAU)), a));
}

function add(parent, geometry, material, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function grp(parent, x = 0, y = 0, z = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}

function pedestal(root, color) {
  add(root, cylG(0.55, 0.7, 0.18, 8), armor, 0, 0.09, 0);
  add(root, cylG(0.42, 0.5, 0.22, 8), voidMat, 0, 0.26, 0);
  add(root, torusG(0.48, 0.03), glow(color, 2.2), 0, 0.2, 0, Math.PI / 2);
}

export function createTower(type, level = 1, branch = null) {
  const root = new THREE.Group();
  const colors = { disc: '#3de7ff', ribbon: '#ffb347', recognizer: '#9b6bff', bit: '#7dff9a', sailer: '#ff4d8d' };
  const color = colors[type] || '#3de7ff';
  pedestal(root, color);
  const turret = grp(root, 0, 0.42, 0);
  root.userData.turret = turret;
  const scale = 1.25 + (level - 1) * 0.14;
  root.scale.setScalar(scale);

  if (type === 'disc') {
    add(turret, cylG(0.22, 0.28, 0.5, 8), chrome, 0, 0.28, 0);
    const disc = add(turret, geo('disc', () => new THREE.CylinderGeometry(0.48, 0.48, 0.05, 24)), glow(color, 3.4), 0, 0.58, 0);
    add(turret, torusG(0.48, 0.02), glow('#e8fbff', 4), 0, 0.58, 0);
    add(turret, boxG(0.08, 0.08, 0.7), chrome, 0, 0.58, 0.2);
    root.userData.spin = disc;
    root.userData.muzzle = add(turret, cylG(0.04, 0.04, 0.01, 8), glow(color, 5), 0, 0.58, 0.55);
  } else if (type === 'ribbon') {
    add(turret, boxG(0.55, 0.7, 0.22), armor, 0, 0.35, 0);
    add(turret, boxG(0.08, 0.9, 0.08), glow(color, 3.5), -0.22, 0.55, 0);
    add(turret, boxG(0.08, 0.9, 0.08), glow(color, 3.5), 0.22, 0.55, 0);
    const ribbon = add(turret, boxG(0.42, 0.04, 0.04), glow(color, 5), 0, 0.85, 0);
    root.userData.spin = ribbon;
    root.userData.muzzle = add(turret, cylG(0.06, 0.02, 0.2, 8), glow(color, 4), 0, 0.7, 0.2, Math.PI / 2);
  } else if (type === 'recognizer') {
    const body = grp(turret, 0, 1.15, 0);
    add(body, boxG(1.15, 0.18, 0.35), armor);
    add(body, boxG(0.18, 0.95, 0.22), armor, -0.48, -0.4, 0);
    add(body, boxG(0.18, 0.95, 0.22), armor, 0.48, -0.4, 0);
    add(body, boxG(0.7, 0.16, 0.28), glow(color, 2.8), 0, -0.02, 0.04);
    add(body, cylG(0.12, 0.12, 0.2, 8), glow('#e8fbff', 5), 0, -0.08, 0.22, Math.PI / 2);
    root.userData.muzzle = add(body, cylG(0.05, 0.05, 0.01), glow(color, 6), 0, -0.55, 0.1);
    root.userData.hover = body;
  } else if (type === 'bit') {
    const bit = add(turret, geo('oct', () => new THREE.OctahedronGeometry(0.32, 0)), glow(color, 3.8), 0, 0.62, 0);
    add(turret, torusG(0.38, 0.025), chrome, 0, 0.4, 0, Math.PI / 2);
    add(turret, torusG(0.5, 0.015, Math.PI), glow(color, 2), 0, 0.62, 0, Math.PI / 2);
    root.userData.spin = bit;
    root.userData.muzzle = bit;
  } else if (type === 'sailer') {
    add(turret, boxG(0.35, 0.28, 0.7), armor, 0, 0.28, 0.1);
    add(turret, boxG(0.12, 0.12, 1.35), chrome, 0, 0.42, 0.55);
    add(turret, boxG(0.02, 0.02, 1.35), glow(color, 5), 0, 0.49, 0.55);
    const sail = add(turret, geo('sail', () => {
      const s = new THREE.Shape();
      s.moveTo(0, 0); s.lineTo(0.55, 0.15); s.lineTo(0.55, 0.85); s.lineTo(0, 0.55); s.closePath();
      return new THREE.ExtrudeGeometry(s, { depth: 0.03, bevelEnabled: false });
    }), glow(color, 1.6), 0.12, 0.2, -0.1, 0, -0.4, 0);
    add(turret, sail.geometry, glow(color, 1.6), -0.15, 0.2, -0.1, 0, 0.4, Math.PI);
    root.userData.muzzle = add(turret, cylG(0.05, 0.03, 0.08, 8), glow('#fff', 6), 0, 0.42, 1.28, Math.PI / 2);
  }

  if (branch === 'a') add(root, cylG(0.08, 0.08, 0.16, 6), glow('#ffb347', 3), 0.4, 0.18, 0.4);
  if (branch === 'b') add(root, cylG(0.08, 0.08, 0.16, 6), glow('#7dff9a', 3), -0.4, 0.18, 0.4);
  for (let i = 0; i < level; i++) add(root, boxG(0.08, 0.04, 0.08), glow(color, 2), -0.16 + i * 0.16, 0.02, 0.52);
  return root;
}

export function createProgram(type) {
  const root = new THREE.Group();
  const c = { bit: '#3de7ff', program: '#ffb347', cycle: '#7dff9a', tank: '#9b6bff', iso: '#ff4d8d' }[type] || '#3de7ff';
  if (type === 'bit') {
    add(root, geo('bit', () => new THREE.TetrahedronGeometry(0.28, 0)), glow(c, 3.2), 0, 0.3, 0);
  } else if (type === 'cycle') {
    add(root, cylG(0.16, 0.16, 0.06, 16), glow(c, 3), 0, 0.16, 0.28, Math.PI / 2);
    add(root, cylG(0.16, 0.16, 0.06, 16), glow(c, 3), 0, 0.16, -0.32, Math.PI / 2);
    add(root, boxG(0.18, 0.14, 0.7), armor, 0, 0.22, 0);
    add(root, boxG(0.5, 0.02, 0.12), glow(c, 4), 0, 0.14, 0.02);
    const rider = add(root, boxG(0.16, 0.28, 0.16), chrome, 0, 0.42, -0.05);
    root.userData.trail = rider;
  } else if (type === 'tank') {
    add(root, boxG(0.9, 0.38, 1.15), armor, 0, 0.32, 0);
    add(root, boxG(0.7, 0.22, 0.5), chrome, 0, 0.58, -0.1);
    add(root, boxG(0.94, 0.05, 1.2), glow(c, 2.2), 0, 0.14, 0);
    add(root, cylG(0.08, 0.08, 0.4, 8), glow(c, 4), 0.28, 0.55, 0.4, Math.PI / 2);
  } else if (type === 'iso') {
    add(root, cylG(0.12, 0.18, 0.5, 6), chrome, 0, 0.45, 0);
    add(root, geo('isohead', () => new THREE.IcosahedronGeometry(0.16, 0)), glow(c, 3.5), 0, 0.82, 0);
    add(root, boxG(0.42, 0.06, 0.08), glow(c, 2.5), 0, 0.55, 0);
  } else {
    add(root, boxG(0.32, 0.55, 0.22), armor, 0, 0.4, 0);
    add(root, cylG(0.12, 0.12, 0.16, 6), glow(c, 2.8), 0, 0.78, 0);
    add(root, boxG(0.5, 0.05, 0.12), glow(c, 2), 0, 0.28, 0);
  }
  return root;
}

export function createBoss(type) {
  const root = new THREE.Group();
  if (type === 'stalker') {
    add(root, boxG(1.6, 0.7, 2.8), armor, 0, 0.7, 0);
    add(root, boxG(1.1, 0.45, 1.2), chrome, 0, 1.15, 0.4);
    for (const x of [-0.7, 0.7]) {
      add(root, cylG(0.16, 0.22, 0.7, 8), voidMat, x, 0.35, 0.8);
      add(root, cylG(0.16, 0.22, 0.7, 8), voidMat, x, 0.35, -0.8);
    }
    add(root, boxG(1.65, 0.08, 2.85), glow('#d7c39a', 2.4), 0, 0.38, 0);
    add(root, cylG(0.2, 0.12, 0.8, 8), glow('#ffb347', 4), 0, 0.9, 1.5, Math.PI / 2);
  } else if (type === 'arenaBoss') {
    add(root, boxG(3.4, 0.35, 0.7), armor, 0, 2.4, 0);
    add(root, boxG(0.4, 2.3, 0.45), armor, -1.5, 1.2, 0);
    add(root, boxG(0.4, 2.3, 0.45), armor, 1.5, 1.2, 0);
    add(root, boxG(2.2, 0.28, 0.5), glow('#9b6bff', 3), 0, 2.4, 0.1);
    add(root, boxG(0.8, 0.4, 0.8), glow('#e8fbff', 4), 0, 2.15, 0.35);
    root.userData.hover = true;
  } else {
    add(root, cylG(0.35, 0.7, 2.2, 8), chrome, 0, 1.3, 0);
    add(root, geo('prime', () => new THREE.OctahedronGeometry(0.7, 0)), glow('#ff6ea8', 3.6), 0, 2.6, 0);
    add(root, torusG(0.9, 0.04), glow('#3de7ff', 3), 0, 1.6, 0, Math.PI / 2);
    add(root, torusG(1.15, 0.03), glow('#ff4d8d', 2.5), 0, 2.1, 0, Math.PI / 2, 0.4);
    add(root, boxG(1.8, 0.08, 0.08), glow('#ff4d8d', 3), 0, 1.1, 0);
  }
  return root;
}

export function createWall(width = 2.4, height = 2.2) {
  const root = new THREE.Group();
  add(root, boxG(0.12, height, width), glow('#3de7ff', 4.5), 0, height / 2, 0);
  add(root, boxG(0.18, 0.12, width + 0.1), chrome, 0, 0.06, 0);
  add(root, boxG(0.18, 0.12, width + 0.1), chrome, 0, height, 0);
  add(root, cylG(0.08, 0.08, height, 8), armor, 0, height / 2, -width / 2);
  add(root, cylG(0.08, 0.08, height, 8), armor, 0, height / 2, width / 2);
  return root;
}

export function createDisc() {
  const g = new THREE.Group();
  add(g, geo('idisc', () => new THREE.CylinderGeometry(0.22, 0.22, 0.04, 24)), glow('#3de7ff', 5));
  add(g, torusG(0.22, 0.015), glow('#e8fbff', 6), 0, 0, 0);
  return g;
}

export function createReactor() {
  const g = new THREE.Group();
  add(g, cylG(1.1, 1.4, 0.4, 8), armor, 0, 0.2, 0);
  add(g, cylG(0.55, 0.7, 1.6, 8), chrome, 0, 1.15, 0);
  add(g, cylG(0.35, 0.35, 0.2, 16), glow('#3de7ff', 6), 0, 2.05, 0);
  add(g, torusG(0.7, 0.05), glow('#ffb347', 3), 0, 1.4, 0, Math.PI / 2);
  return g;
}

export function createPortal() {
  const g = new THREE.Group();
  add(g, torusG(1.15, 0.08), glow('#ff4d8d', 3.5), 0, 1.2, 0, 0, 0, Math.PI / 2);
  add(g, cylG(0.9, 0.9, 0.05, 24), glow('#3de7ff', 2.2), 0, 1.2, 0, 0, 0, Math.PI / 2);
  add(g, boxG(0.2, 1.4, 0.2), armor, -1.05, 0.7, 0);
  add(g, boxG(0.2, 1.4, 0.2), armor, 1.05, 0.7, 0);
  return g;
}

export function pulseConstructs(root, time) {
  root.traverse(o => {
    if (o.userData.spin) o.userData.spin.rotation.y = time * 2.4;
    if (o.userData.hover) o.position.y = Math.sin(time * 1.6) * 0.08;
  });
}

export function mergeGroup(group) {
  group.updateMatrixWorld(true);
  const buckets = new Map();
  group.traverse(o => {
    if (!o.isMesh) return;
    if (!buckets.has(o.material)) buckets.set(o.material, []);
    let g = o.geometry.clone().applyMatrix4(o.matrixWorld);
    if (g.index) {
      const flat = g.toNonIndexed();
      g.dispose();
      g = flat;
    }
    buckets.get(o.material).push(g);
  });
  group.clear();
  for (const [material, list] of buckets) {
    const merged = mergeGeometries(list, false);
    list.forEach(g => g.dispose());
    if (!merged) continue;
    const mesh = new THREE.Mesh(merged, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
}
