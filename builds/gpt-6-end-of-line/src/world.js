import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { GRID, SECTORS, terrainHeight, isTerrainBuildable } from './simulation.js';
import { createReactor, createPortal } from './models.js';

const TAU = Math.PI * 2;
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
function rng(seed) { return () => { seed = (Math.imul(seed, 1664525) + 1013904223) | 0; return (seed >>> 0) / 4294967296; }; }
function metal(color, roughness = .38, metalness = .75) { return new THREE.MeshStandardMaterial({ color, roughness, metalness }); }
function glow(color, intensity = 3) { return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: .3, metalness: .25 }); }
function box(parent, material, x, y, z, w, h, d, rz = 0) {
  const mesh = new THREE.Mesh(boxGeometry, material);
  mesh.position.set(x, y, z); mesh.scale.set(w, h, d); mesh.rotation.z = rz;
  parent.add(mesh); return mesh;
}
function mesh(parent, geometry, material, x = 0, y = 0, z = 0) {
  const item = new THREE.Mesh(geometry, material); item.position.set(x, y, z); parent.add(item); return item;
}
function batch(group) {
  group.updateMatrixWorld(true);
  const buckets = new Map();
  group.traverse(o => {
    if (!o.isMesh) return;
    if (!buckets.has(o.material)) buckets.set(o.material, []);
    let g = o.geometry.clone().applyMatrix4(o.matrixWorld);
    if (g.index) { const flat = g.toNonIndexed(); g.dispose(); g = flat; }
    for (const key of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(key)) g.deleteAttribute(key);
    buckets.get(o.material).push(g);
  });
  group.clear();
  for (const [material, geometries] of buckets) {
    const merged = mergeGeometries(geometries, false);
    geometries.forEach(g => g.dispose());
    if (!merged) continue;
    const result = new THREE.Mesh(merged, material);
    result.castShadow = true; result.receiveShadow = true; group.add(result);
  }
}

const waterVertex = `varying vec2 vUv; varying vec3 vWorld;
void main(){vUv=uv; vec4 w=modelMatrix*vec4(position,1.);vWorld=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`;
const waterFragment = `uniform float time; uniform vec3 tint; varying vec2 vUv; varying vec3 vWorld;
float hash(float n){return fract(sin(n*127.1)*43758.5453);}
void main(){
 float streak=pow(.5+.5*sin(vUv.x*185.+sin(vUv.x*49.)*7.+time*2.),7.);
 float flow=pow(.5+.5*sin(vUv.y*56.+time*8.+vUv.x*38.),12.);
 float edges=smoothstep(0.,.08,vUv.x)*(1.-smoothstep(.92,1.,vUv.x));
 float foam=pow(vUv.y,8.)*.4+pow(1.-vUv.y,12.)*.8;
 float light=.12+streak*.8+flow*.3+foam;
 gl_FragColor=vec4(tint*light*2.8,edges*(.35+light*.45));
}`;
const lavaFragment = `uniform float time; varying vec2 vUv; varying vec3 vWorld;
void main(){
 vec2 p=vWorld.xz;float veins=abs(sin(p.x*1.8+sin(p.y*1.7+time*.13)))*abs(sin(p.y*2.6+cos(p.x*1.25-time*.1)));
 float fissure=1.-smoothstep(.025,.14,veins);float pulse=.78+.22*sin(time*1.4+p.x*.7+p.y*.4);
 vec3 crust=vec3(.065,.018,.013);vec3 heat=mix(vec3(1.5,.12,.015),vec3(3.2,1.1,.13),pow(fissure,3.));
 gl_FragColor=vec4(mix(crust,heat*pulse,fissure),1.);
}`;

export function createWorld(scene, renderer, sectorIndex = 0) {
  const sector = SECTORS[sectorIndex], random = rng(2107 + sectorIndex * 771);
  const height = (x, z) => terrainHeight(sectorIndex, x, z);
  const root = new THREE.Group(), staticWorld = new THREE.Group(), animated = [];
  root.add(staticWorld); scene.add(root);
  const palette = [
    { glow: '#49e5ff', secondary: '#327eae', rock: '#182d3b', surface: '#162431', sky: '#050d17', fog: '#081824' },
    { glow: '#69ffe4', secondary: '#2379c4', rock: '#213747', surface: '#243946', sky: '#06151e', fog: '#123443' },
    { glow: '#ff8a48', secondary: '#c33549', rock: '#282630', surface: '#302b34', sky: '#140c19', fog: '#291326' },
  ][sectorIndex];
  scene.background = new THREE.Color(palette.sky);
  scene.fog = new THREE.FogExp2(palette.fog, .0085);
  const steel = metal(palette.surface), side = metal(palette.rock, .68, .4);
  const dark = metal('#0b131e', .32, .7), silver = metal('#597582', .28, .86);
  const trim = glow(palette.glow, 2.2), dim = glow(palette.secondary, .65), orange = glow('#ff8741', 3);
  const broadTrim = glow(palette.glow, 1.05);
  const roadMat = new THREE.MeshPhysicalMaterial({ color: '#0a1b24', metalness: .75, roughness: .2, clearcoat: 1, clearcoatRoughness: .12 });
  const tileMaterials = [steel, metal(palette.surface, .44), metal(palette.rock, .53)];
  const h = GRID.tile / 2;

  // The board is actual height-varying geometry, with supporting geology below it.
  for (let row = 0; row < GRID.rows; row++) for (let col = 0; col < GRID.cols; col++) {
    if (!isTerrainBuildable(sectorIndex, col, row)) continue;
    const x = (col - 8.5) * GRID.tile, z = (row - 5.5) * GRID.tile, y = height(x, z);
    const geo = new THREE.PlaneGeometry(GRID.tile - .065, GRID.tile - .065, 2, 2);
    geo.rotateX(-Math.PI / 2);
    const attr = geo.attributes.position;
    for (let i = 0; i < attr.count; i++) attr.setY(i, height(x + attr.getX(i), z + attr.getZ(i)));
    geo.computeVertexNormals(); mesh(staticWorld, geo, tileMaterials[Math.floor(random() * 3)], x, 0, z);
    if (row === 0 || row === 11 || col === 0 || col === 17 || (sectorIndex === 1 && (col === 7 || col === 11))) {
      const low = Math.min(height(x-h,z-h),height(x+h,z-h),height(x-h,z+h),height(x+h,z+h))-.04;
      box(staticWorld, side, x, (low - 6) / 2, z, 2.34, low + 6, 2.34);
      const innerBank = sectorIndex === 1 && (col === 7 || col === 11);
      const edgeX = col === 0 || (innerBank && col === 11) ? x - h + .08 : col === 17 || (innerBank && col === 7) ? x + h - .08 : x;
      const edgeZ = row === 0 ? z - h + .08 : row === 11 ? z + h - .08 : z;
      box(staticWorld, trim, edgeX, height(edgeX, edgeZ) + .06, edgeZ, col === 0 || col === 17 || innerBank ? .045 : 2.34, .055, row === 0 || row === 11 ? .045 : 2.34);
      if ((col + row) % 2 === 0) {
        box(staticWorld, dark, x, low - 1.3, z, 2.1, 1.8, 2.48);
        box(staticWorld, dim, x, low - .75, z + (row === 0 ? -1.255 : 1.255), 1.65, .07, .045);
      }
    }
  }
  if (sectorIndex === 1) {
    // Two genuinely separate land masses, with no hidden slab closing the gorge.
    box(staticWorld, side, -12, -4.8, 0, 19.2, 2, 28.8);
    box(staticWorld, side, 13.2, -4.8, 0, 16.8, 2, 28.8);
    for (const bank of [-1, 1]) for (let i = 0; i < 16; i++) {
      const z = -14.2 + i * 1.9, x = bank < 0 ? -3.1 : 5.5;
      const top = Math.min(height(x - .95, z), height(x + .95, z)) - .2 - random() * .25;
      const cliff = mesh(staticWorld, new THREE.CylinderGeometry(.65 + random() * .2, .9 + random() * .4, top + 10.8, 5), side, x, (top - 10.8) / 2, z);
      cliff.rotation.y = random() * Math.PI;
      mesh(staticWorld, new THREE.CylinderGeometry(.35, .7, 4 + random() * 3, 5), dark, x + bank * .15, -7, z + .5).rotation.z = bank * .12;
    }
    const bridgeZ = (2 - 5.5) * GRID.tile;
    for (const sideSign of [-1, 1]) {
      const archPoints = [];
      for (let i = 0; i <= 16; i++) {
        const t = i / 16, x = -3.5 + t * 9.4;
        const y = height(x, bridgeZ) - 2.9 + Math.sin(t * Math.PI) * 2.45;
        archPoints.push(new THREE.Vector3(x, y, bridgeZ + sideSign * 1.3));
        if (i % 2 === 0) {
          const top = height(x, bridgeZ) - .12;
          box(staticWorld, silver, x, (y + top) / 2, bridgeZ + sideSign * 1.3, .095, top - y, .095);
          box(staticWorld, dark, x, top + .42, bridgeZ + sideSign * 1.3, .075, .85, .075);
        }
      }
      mesh(staticWorld, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(archPoints), 36, .14, 7, false), silver);
      const railPoints = archPoints.map(p => new THREE.Vector3(p.x, height(p.x, bridgeZ) + .68, p.z));
      mesh(staticWorld, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(railPoints), 24, .045, 5, false), broadTrim);
    }
  } else box(staticWorld, side, 0, -4.8, 0, 43.2, 2, 28.8);
  // Fine corner sockets make all legal terrain readable without filling it with UI.
  for (let row = 0; row < 12; row++) for (let col = 0; col < 18; col++) {
    if (!isTerrainBuildable(sectorIndex, col, row)) continue;
    const x = (col - 8.5) * 2.4, z = (row - 5.5) * 2.4;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const px = x + sx * .79, pz = z + sz * .79;
      box(staticWorld, dim, px, height(px, pz) + .025, pz, .25, .018, .035);
      box(staticWorld, dim, px + sx * .11, height(px, pz) + .025, pz - sz * .1, .03, .018, .23);
    }
  }
  const worldPath = sector.path.map(([c, r]) => new THREE.Vector3((c - 8.5) * 2.4, 0, (r - 5.5) * 2.4));
  const roadPoints = [];
  for (let s = 0; s < worldPath.length - 1; s++) {
    const a = worldPath[s], b = worldPath[s + 1], d = a.distanceTo(b), steps = Math.ceil(d / .6);
    const dir = b.clone().sub(a).normalize(), perpendicular = new THREE.Vector3(-dir.z, 0, dir.x);
    for (let j = 0; j < steps; j++) {
      const p = a.clone().lerp(b, j / steps), next = a.clone().lerp(b, (j + 1) / steps);
      const pos = [], uv = [];
      const vertices = [p.clone().addScaledVector(perpendicular, -1.1), p.clone().addScaledVector(perpendicular, 1.1), next.clone().addScaledVector(perpendicular, -1.1), next.clone().addScaledVector(perpendicular, 1.1)];
      for (const v of vertices) pos.push(v.x, height(v.x, v.z) + .065, v.z);
      uv.push(0, 0, 1, 0, 0, 1, 1, 1);
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setIndex([0, 1, 2, 1, 3, 2]); geo.computeVertexNormals(); mesh(staticWorld, geo, roadMat);
      for (const sign of [-1, 1]) {
        const v = p.clone().addScaledVector(perpendicular, 1.055 * sign), q = next.clone().addScaledVector(perpendicular, 1.055 * sign);
        v.y = height(v.x, v.z) + .11; q.y = height(q.x, q.z) + .11;
        const edge = mesh(staticWorld, new THREE.CylinderGeometry(.025, .025, v.distanceTo(q), 4), trim);
        edge.position.copy(v).lerp(q, .5); edge.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), q.sub(v).normalize());
      }
      if (j % 5 === 0) {
        const v = p.clone().lerp(next, .5); v.y = height(v.x, v.z) + .1;
        const arrow = mesh(staticWorld, new THREE.ConeGeometry(.16, .45, 3), dim, v.x, v.y, v.z);
        arrow.rotation.x = Math.PI / 2; arrow.rotation.z = Math.atan2(-dir.x, dir.z);
        arrow.scale.z = .1;
      }
      roadPoints.push(new THREE.Vector3(p.x, height(p.x, p.z) + .2, p.z));
    }
  }
  // Suspended structural pylons, cables and armoured service gantries.
  for (const x of [-18, -9, 0, 9, 18]) for (const z of [-17.2, 17.2]) {
    const y = height(x, z), pylon = mesh(staticWorld, new THREE.CylinderGeometry(.6, 1.5, 13, 6), dark, x, -5, z);
    box(staticWorld, silver, x, y - 1, z, 1.5, 1.5, 1.5);
    box(staticWorld, broadTrim, x, y - .2, z, 1.65, .1, 1.65);
    box(staticWorld, dark, x, y + 1, z, .35, 2.5, .35);
    box(staticWorld, trim, x, y + 1.4, z, .08, .85, .42);
    for (let k = 0; k < 3; k++) mesh(staticWorld, new THREE.TorusGeometry(.67 + k * .09, .035, 4, 12), dim, x, -k * 1.4 - 2, z).rotation.x = Math.PI / 2;
  }
  // Far city is geometric architecture, merged by material into a handful of draws.
  for (let i = 0; i < 86; i++) {
    const a = random() * TAU, radius = 49 + random() * 100;
    const x = Math.cos(a) * radius, z = Math.sin(a) * radius;
    if (z > 14 && Math.abs(x) < 53) continue;
    const w = 2 + random() * 6, d = 3 + random() * 6, bh = 9 + random() ** 2 * 62;
    box(staticWorld, dark, x, bh / 2 - 9, z, w, bh, d);
    box(staticWorld, side, x + w * .13, bh / 2 - 5, z, w * .43, bh + 5, d * .55);
    box(staticWorld, dim, x - w / 2 - .025, bh / 2 - 9, z + d / 2, .045, bh * .92, .045);
    box(staticWorld, i % 9 === 0 ? orange : trim, x + w / 2, bh / 2 - 9, z - d / 2, .06, bh * .7, .055);
    for (let k = 1; k < bh / 2; k++) {
      if (random() < .25) continue;
      box(staticWorld, dim, x, k * 2 - 9, z + d / 2 + .015, w * .8, .08, .02);
      if (k % 4 === 0) box(staticWorld, steel, x, k * 2 - 9.4, z, w * 1.12, .24, d * 1.1);
    }
    if (i % 5 === 0) {
      mesh(staticWorld, new THREE.CylinderGeometry(.035, .09, 6, 5), silver, x, bh - 6, z);
      mesh(staticWorld, new THREE.SphereGeometry(.15, 6, 4), orange, x, bh - 3, z);
    }
  }
  // Distant broken orbital rings add scale and a silhouette beyond the city.
  for (let i = 0; i < 3; i++) {
    const orbit = mesh(staticWorld, new THREE.TorusGeometry(22 + i * .9, i === 0 ? .3 : .075, 6, 150, Math.PI * 1.63), i === 1 ? trim : dark, -38, 20, -75);
    orbit.rotation.set(.1, -.3, -.4);
  }
  const crystals = new THREE.Group(); staticWorld.add(crystals);
  if (sectorIndex > 0) {
    // Rock faces and crystalline strata surround the playable engineering deck.
    for (let i = 0; i < 75; i++) {
      const x = (random() - .5) * 64, z = (random() - .5) * 46;
      if (Math.abs(x) < 23 && Math.abs(z) < 15) continue;
      const tall = 3 + random() * 11;
      const rock = mesh(crystals, new THREE.CylinderGeometry(.5 + random() * 1.5, 1 + random() * 2, tall, sectorIndex === 2 ? 5 : 6), side, x, -3 + tall / 2, z);
      rock.rotation.z = (random() - .5) * .25;
      if (i % 3 === 0) {
        const shard = mesh(crystals, new THREE.ConeGeometry(.3 + random() * .5, 2 + random() * 3, 5), sectorIndex === 2 ? orange : trim, x, tall - 1, z);
        shard.rotation.z = (random() - .5) * .5;
      }
    }
  }
  for (const point of [worldPath[0], worldPath.at(-1)]) {
    const end = point === worldPath.at(-1), x = point.x + (end ? 1.2 : -.25), y = height(x, point.z);
    const landing = mesh(staticWorld, new THREE.CylinderGeometry(end ? 4 : 2.8, end ? 3.5 : 2.4, .7, 8), dark, x, y - .35, point.z);
    mesh(staticWorld, new THREE.TorusGeometry(end ? 3.85 : 2.6, .055, 5, 8), trim, x, y + .035, point.z).rotation.x = Math.PI / 2;
    box(staticWorld, dark, point.x + (end ? -1.4 : 1.4), y - .25, point.z, 4, .5, 2.3);
  }
  const lavaPools = [{ x: -18, z: 9.6, width: 7.2, depth: 9.6 }, { x: 16.8, z: -12, width: 9.6, depth: 4.8 }];
  if (sectorIndex === 2) {
    for (const pool of lavaPools) for (let i = 0; i < 18; i++) {
      const along = random() - .5;
      const x = pool.x + (i % 2 ? along * (pool.width - 1.2) : (i % 4 ? -1 : 1) * (pool.width / 2 - .65));
      const z = pool.z + (i % 2 ? (i % 4 === 1 ? -1 : 1) * (pool.depth / 2 - .65) : along * (pool.depth - 1.2));
      const tall = .65 + random() * 2.8;
      const rock = mesh(staticWorld, new THREE.CylinderGeometry(.15 + random() * .35, .6 + random() * .35, tall, 5), side, x, height(x,z) + tall / 2 - .45, z);
      rock.rotation.set((random()-.5)*.25, random()*TAU, (random()-.5)*.3);
      if (i % 5 === 0) mesh(staticWorld, new THREE.ConeGeometry(.13, tall * .7, 4), orange, x + .1, height(x,z) + tall * .25, z + .15);
    }
  }
  batch(staticWorld);

  const reactor = createReactor();
  const last = worldPath.at(-1); reactor.position.set(last.x + 1.2, height(last.x, last.z), last.z);
  root.add(reactor);
  const portal = createPortal(), first = worldPath[0];
  portal.position.set(first.x - .25, height(first.x, first.z), first.z); portal.rotation.y = Math.PI / 2;
  root.add(portal);

  const waterfallMaterials = [], lavaMaterials = [];
  const waterLocations = sectorIndex === 1 ? [[-1.8, -8.5, 7, Math.PI / 2], [-1.8, 8, 8, Math.PI / 2], [4.15, 1, 9, -Math.PI / 2], [4.15, -11.3, 5, -Math.PI / 2], [-8, 14.7, 6], [13, 14.7, 5], [-28, -20, 8]] : sectorIndex === 0 ? [[-17, -14.6, 2], [6, 14.6, 2]] : [[-11, 14.6, 2], [13, -14.7, 3]];
  for (const [x, z, width, rotation = 0] of waterLocations) {
    const top = height(x, z) + .05, drop = sectorIndex === 1 ? top + 10.75 : 12 + random() * 5;
    const material = new THREE.ShaderMaterial({ vertexShader: waterVertex, fragmentShader: waterFragment, uniforms: { time: { value: 0 }, tint: { value: new THREE.Color(sectorIndex === 2 ? '#ff5b21' : '#39c6f2') } }, transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const fall = mesh(root, new THREE.PlaneGeometry(width, drop, 1, 1), material, x, top - drop / 2, z);
    fall.rotation.y = rotation;
    fall.userData.photoMaterial = new THREE.MeshPhysicalMaterial({ color: sectorIndex === 2 ? '#a62c13' : '#178899', emissive: sectorIndex === 2 ? '#ff4515' : '#27c9ef', emissiveIntensity: 1.6, roughness: .17, metalness: .15, side: THREE.DoubleSide });
    waterfallMaterials.push(material);
    const mist = mesh(root, new THREE.PlaneGeometry(width * 1.5, 2), new THREE.MeshBasicMaterial({ color: palette.glow, transparent: true, opacity: .09, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }), x, top - drop + 1, z);
    mist.rotation.y = rotation;
    mist.userData.noPhoto = true;
  }
  if (sectorIndex === 1) {
    const riverMat = new THREE.MeshPhysicalMaterial({ color: '#065f9c', emissive: '#0366a2', emissiveIntensity: .52, metalness: .45, roughness: .15, clearcoat: 1 });
    const river = mesh(root, new THREE.PlaneGeometry(7.2, 100, 1, 1), riverMat, 1.2, -10.74, 0);
    river.rotation.x = -Math.PI / 2;
    // Flow lines remain visible through the opening and continue past both ends.
    for (let i = 0; i < 5; i++) {
      const line = mesh(root, new THREE.PlaneGeometry(.035 + i * .008, 100), glow('#2cbbdd', .8), -1.4 + i * 1.25, -10.70, 0);
      line.rotation.x = -Math.PI / 2;
    }
    const riverLight = new THREE.PointLight('#199cff', 140, 27, 2); riverLight.position.set(1.2, -5, 4); root.add(riverLight);
  }
  if (sectorIndex === 2) for (const pool of lavaPools) {
    const material = new THREE.ShaderMaterial({ vertexShader: waterVertex, fragmentShader: lavaFragment, uniforms: { time: { value: 0 } }, side: THREE.DoubleSide });
    const geometry = new THREE.PlaneGeometry(pool.width, pool.depth, 12, 12); geometry.rotateX(-Math.PI / 2);
    const positions = geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) positions.setY(i, height(pool.x + positions.getX(i), pool.z + positions.getZ(i)) - .42);
    geometry.computeVertexNormals();
    const lava = mesh(root, geometry, material, pool.x, 0, pool.z);
    lava.userData.photoMaterial = new THREE.MeshStandardMaterial({ color: '#6e1908', emissive: '#ff5b12', emissiveIntensity: 1.7, metalness: .3, roughness: .24, side: THREE.DoubleSide });
    lavaMaterials.push(material);
    const heat = new THREE.PointLight('#ff5b13', 70, 17, 2); heat.position.set(pool.x, height(pool.x, pool.z) + 1, pool.z); root.add(heat);
  }
  const abyss = new Reflector(new THREE.PlaneGeometry(350, 350), { clipBias: .003, textureWidth: 1024, textureHeight: 1024, color: sectorIndex === 2 ? 0x332127 : 0x273e4d, multisample: 0 });
  abyss.rotation.x = -Math.PI / 2; abyss.position.y = -11; root.add(abyss);
  abyss.userData.photoMaterial = new THREE.MeshPhysicalMaterial({ color: palette.rock, metalness: .85, roughness: .17, clearcoat: 1 });

  // Flecks and drifting aerial traffic, kept clear of the tactical silhouettes.
  const particles = new Float32Array(330 * 3);
  for (let i = 0; i < 330; i++) { particles[i * 3] = (random() - .5) * 170; particles[i * 3 + 1] = random() * 64; particles[i * 3 + 2] = (random() - .5) * 170; }
  const particlesGeo = new THREE.BufferGeometry(); particlesGeo.setAttribute('position', new THREE.BufferAttribute(particles, 3));
  const particlesMesh = new THREE.Points(particlesGeo, new THREE.PointsMaterial({ color: palette.glow, size: .08, transparent: true, opacity: .65, depthWrite: false })); root.add(particlesMesh);
  const traffic = new THREE.Group(); root.add(traffic);
  for (let i = 0; i < 14; i++) {
    const ship = new THREE.Group();
    box(ship, dark, 0, 0, 0, .45, .25, 2.8); box(ship, trim, 0, 0, 1.5, .3, .13, 1.8);
    ship.position.set((random() - .5) * 150, 8 + random() * 20, -25 - random() * 100); traffic.add(ship);
    animated.push({ object: ship, speed: 2 + random() * 5 });
  }
  const ring = mesh(root, new THREE.TorusGeometry(3.1, .025, 5, 80), trim, reactor.position.x, reactor.position.y + .07, reactor.position.z);
  ring.rotation.x = Math.PI / 2;
  const reactorLight = new THREE.PointLight('#56e6ff', 180, 30, 2); reactorLight.position.copy(reactor.position).add(new THREE.Vector3(0, 5, 0)); root.add(reactorLight);
  const gateLight = new THREE.PointLight('#ff792f', 120, 22, 2); gateLight.position.copy(portal.position).add(new THREE.Vector3(0, 3, 0)); root.add(gateLight);
  const fill = new THREE.PointLight(palette.glow, 65, 42, 2); fill.position.set(-6, 10, 8); root.add(fill);

  return {
    root, reactor, portal, height, palette, roadPoints, abyss,
    update(time, dt, integrity = 100) {
      waterfallMaterials.forEach(m => m.uniforms.time.value = time);
      lavaMaterials.forEach(m => m.uniforms.time.value = time);
      particlesMesh.rotation.y = time * .006;
      for (const item of animated) { item.object.position.x += dt * item.speed; if (item.object.position.x > 95) item.object.position.x = -95; }
      for (const model of [reactor, portal]) for (const part of model.userData.rotors || []) part.rotation[part.userData.axis || 'y'] += dt * (part.userData.speed || .2);
      reactorLight.intensity = 170 + Math.sin(time * 2) * 15 + (integrity < 30 ? Math.sin(time * 14) * 80 : 0);
      if (integrity < 30) reactorLight.color.set('#ff6948'); else reactorLight.color.set('#56e6ff');
    },
    dispose() {
      scene.remove(root); root.remove(reactor, portal);
      abyss.getRenderTarget().dispose();
      const geometries = new Set(), materials = new Set();
      root.traverse(o => { if (o.geometry && o.geometry !== boxGeometry) geometries.add(o.geometry); if (o.material) { (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => materials.add(m)); } if (o.userData.photoMaterial) materials.add(o.userData.photoMaterial); });
      geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose());
    },
  };
}
