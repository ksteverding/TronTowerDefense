import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { GRID, SECTORS, cellToWorld, terrainHeight, isGlass, gateAt } from './sectors.js';
import { fillRoad, route } from './lanes.js';
import { mergeGroup, createReactor, createPortal, createWall } from './constructs.js';

const waterVert = `
varying vec2 vUv; varying vec3 vW;
void main(){
  vUv = uv;
  vec4 w = modelMatrix * vec4(position,1.0);
  vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;

const ionFrag = `
uniform float time; uniform vec3 tint; varying vec2 vUv;
void main(){
  float band = abs(sin(vUv.x * 42.0 + time * 3.1));
  float fall = fract(vUv.y * 9.0 - time * 1.7);
  float spark = pow(1.0 - abs(fall - 0.5) * 2.0, 6.0) * pow(band, 3.0);
  float veil = pow(vUv.y, 0.35) * (1.0 - vUv.y);
  float a = (0.15 + spark * 0.9) * veil * 1.4;
  gl_FragColor = vec4(tint * (0.4 + spark * 2.2), a);
}`;

const curtainFrag = `
uniform float time; uniform vec3 tint; varying vec2 vUv;
void main(){
  float n = sin(vUv.x * 28.0 + sin(vUv.y * 11.0 + time) * 2.0);
  float sheets = pow(0.5 + 0.5 * n, 4.0);
  float rain = pow(fract(vUv.y * 14.0 + time * 2.2 + vUv.x * 3.0), 8.0);
  float edge = smoothstep(0.0, 0.08, vUv.x) * (1.0 - smoothstep(0.92, 1.0, vUv.x));
  float a = edge * (0.22 + sheets * 0.45 + rain * 0.5);
  gl_FragColor = vec4(tint * (0.6 + rain * 1.8 + sheets), a);
}`;

function metal(color, roughness = 0.4, metalness = 0.72) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}
function emit(color, intensity = 2.4) {
  return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: 0.3, metalness: 0.35 });
}

export function createScape(scene, renderer, sectorIndex, quality = 'ultra') {
  const sector = SECTORS[sectorIndex];
  const dense = quality !== 'performance';
  const root = new THREE.Group();
  const statics = new THREE.Group();
  const pads = [];
  const animated = [];
  const gates = new Map();
  root.add(statics);
  scene.add(root);

  const palettes = [
    { sky: '#071018', fog: '#0a1822', rock: '#15222c', ground: '#101c26', glow: '#3de7ff', water: '#5ce6ff' },
    { sky: '#0a1018', fog: '#101820', rock: '#1a2430', ground: '#121a22', glow: '#ffb347', water: '#9b6bff' },
    { sky: '#100814', fog: '#1a0c18', rock: '#241820', ground: '#1a1218', glow: '#ff4d8d', water: '#7dffee' },
  ];
  const pal = palettes[sectorIndex];
  scene.background = new THREE.Color(pal.sky);
  scene.fog = new THREE.FogExp2(pal.fog, 0.007);
  const rock = metal(pal.rock, 0.62, 0.35);
  const ground = metal('#243848', 0.52, 0.42);
  const trim = emit(pal.glow, 2.1);
  const roadMat = new THREE.MeshPhysicalMaterial({ color: '#0a1520', metalness: 0.82, roughness: 0.16, clearcoat: 0.8, clearcoatRoughness: 0.12 });
  const glassMat = new THREE.MeshPhysicalMaterial({ color: '#7ec8d8', metalness: 0.2, roughness: 0.08, transmission: 0.6, thickness: 0.4, transparent: true, opacity: 0.7 });
  const boxG = new THREE.BoxGeometry(1, 1, 1);

  const hAt = (x, z) => terrainHeight(sectorIndex, x, z);
  const road = fillRoad(sector);
  const defaultPath = route(sector, new Set(), sectorIndex);

  function box(parent, mat, x, y, z, w, h, d, rx = 0, ry = 0) {
    const m = new THREE.Mesh(boxG, mat);
    m.position.set(x, y, z);
    m.scale.set(w, h, d);
    m.rotation.set(rx, ry, 0);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }

  for (let row = 0; row < GRID.rows; row++) {
    for (let col = 0; col < GRID.cols; col++) {
      const { x, z } = cellToWorld(col, row);
      const y = hAt(x, z);
      const key = `${col},${row}`;
      const onRoad = road.has(key);
      const glassCell = isGlass(sector, col, row);
      const gate = gateAt(sector, col, row);
      if (glassCell) {
        box(statics, glassMat, x, y - 0.04, z, 2.35, 0.08, 2.35);
        continue;
      }
      if (onRoad) {
        box(statics, roadMat, x, y, z, 2.45, 0.1, 2.45);
        box(statics, trim, x, y + 0.06, z, 0.12, 0.03, 2.2);
        continue;
      }
      box(statics, ground, x, y - 0.04, z, 2.42, 0.1, 2.42);
      if (gate) {
        const slot = box(statics, emit('#ffb347', 1.4), x, y + 0.08, z, 1.6, 0.1, 1.6);
        slot.userData.gateId = gate;
        const pick = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.4, 2.2), new THREE.MeshBasicMaterial({ visible: false }));
        pick.position.set(x, y + 1.2, z);
        pick.userData = { kind: 'gate', gateId: gate, col, row };
        root.add(pick);
        pads.push(pick);
        const wall = createWall(2.3, 2.4);
        wall.position.set(x, y, z);
        wall.visible = false;
        wall.userData.gateId = gate;
        root.add(wall);
        gates.set(gate, wall);
      } else {
        const pick = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.4, 2.2), new THREE.MeshBasicMaterial({ visible: false }));
        pick.position.set(x, y + 1.2, z);
        pick.userData = { kind: 'pad', col, row };
        root.add(pick);
        pads.push(pick);
        box(statics, emit(pal.glow, 0.55), x, y + 0.04, z, 0.35, 0.04, 0.35);
      }
    }
  }

  for (let i = 1; i < defaultPath.length; i++) {
    const a = defaultPath[i - 1];
    const b = defaultPath[i];
    const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 + 0.18, z: (a.z + b.z) / 2 };
    const len = Math.hypot(b.x - a.x, b.z - a.z);
    const strip = box(statics, emit(pal.glow, 1.8), mid.x, mid.y, mid.z, 0.16, 0.04, len + 0.2);
    strip.rotation.y = Math.atan2(b.x - a.x, b.z - a.z);
  }

  const spawn = defaultPath[0];
  const core = defaultPath[defaultPath.length - 1];
  const portal = createPortal();
  portal.position.set(spawn.x - 2.2, spawn.y, spawn.z);
  portal.lookAt(spawn.x + 4, spawn.y, spawn.z);
  root.add(portal);
  const reactor = createReactor();
  reactor.position.set(core.x + 2.4, core.y, core.z);
  root.add(reactor);

  // Backdrop only — never between the camera and the 18×12 playfield.
  const playX = GRID.cols * GRID.tile * 0.5 + 2;
  const playZ = GRID.rows * GRID.tile * 0.5 + 2;
  const tooClose = (x, z) => Math.hypot(x, z) < 40 || (Math.abs(x) < playX && Math.abs(z) < playZ);
  const rim = (i, n, radius, jitter = 0) => {
    const a = (i / n) * Math.PI * 2 + 0.18;
    return {
      x: Math.cos(a) * radius + ((i * 13) % 7 - 3) * jitter,
      z: Math.sin(a) * radius + ((i * 9) % 5 - 2) * jitter,
    };
  };

  if (sectorIndex === 0) {
    const n = dense ? 14 : 8;
    for (let i = 0; i < n; i++) {
      const p = rim(i, n, 48, 0.4);
      if (tooClose(p.x, p.z) || p.z > -12) continue;
      const tall = 6 + (i % 5) * 1.8;
      box(statics, rock, p.x, tall / 2 - 1.2, p.z, 4 + (i % 3), tall, 3.4 + (i % 2));
      if (i % 2 === 0) box(statics, trim, p.x, tall - 0.6, p.z, 0.12, tall * 0.45, 0.12);
    }
    addFall(root, animated, -36, -30, 7, pal.water, ionFrag, 10);
    addFall(root, animated, 36, -28, 5, pal.water, ionFrag, 8);
    ramp(statics, rock, trim, cellToWorld(2, 4), cellToWorld(2, 1), hAt);
  } else if (sectorIndex === 1) {
    const ringR = 42;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(ringR, 0.35, 8, 48), trim);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 1.8;
    statics.add(ring);
    for (let i = 0; i < 12; i++) {
      const a = i / 12 * Math.PI * 2;
      const px = Math.cos(a) * ringR;
      const pz = Math.sin(a) * ringR;
      if (pz > -10) continue;
      box(statics, rock, px, 3.4, pz, 1.2, 6.2, 1.2);
      box(statics, trim, px, 6.6, pz, 0.18, 0.9, 0.18);
      if (i % 3 === 0) addFall(root, animated, px, pz, 2.8, pal.water, curtainFrag, 7, a + Math.PI / 2);
    }
    if (quality !== 'performance') {
      const mirror = new Reflector(new THREE.CircleGeometry(11, 48), {
        clipBias: 0.003, textureWidth: 1024, textureHeight: 1024, color: 0x1a3040,
      });
      mirror.rotation.x = -Math.PI / 2;
      mirror.position.y = 0.15;
      root.add(mirror);
    }
  } else {
    const n = dense ? 16 : 10;
    for (let i = 0; i < n; i++) {
      const p = rim(i, n, 46, 0.35);
      if (tooClose(p.x, p.z) || p.z > -12) continue;
      const floors = 2 + (i % 3);
      for (let f = 0; f < floors; f++) {
        box(statics, rock, p.x, 1.2 + f * 2.1, p.z, 3.8, 1.9, 3.2);
        if (f === floors - 1) box(statics, trim, p.x, 2.1 + f * 2.1, p.z, 3.9, 0.08, 3.3);
      }
    }
    addFall(root, animated, -34, -32, 4.5, pal.water, curtainFrag, 12, 0);
    addFall(root, animated, 34, -32, 4.5, pal.water, curtainFrag, 12, Math.PI);
    box(statics, metal('#2a1a22', 0.3, 0.8), core.x + 6.5, core.y + 3.4, core.z, 1.1, 6.4, 5.2);
    box(statics, emit('#ff4d8d', 3), core.x + 6.5, core.y + 6.6, core.z, 1.2, 0.16, 5.3);
  }

  const floor = new THREE.Mesh(new THREE.CircleGeometry(90, 48), metal('#15222c', 0.82, 0.18));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.6;
  floor.receiveShadow = true;
  statics.add(floor);

  const pickPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(80, 60),
    new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide }),
  );
  pickPlane.rotation.x = -Math.PI / 2;
  pickPlane.position.y = 0.4;
  pickPlane.userData.kind = 'ground';
  pickPlane.userData.noPhoto = true;
  root.add(pickPlane);
  pads.push(pickPlane);
  mergeGroup(statics);

  function setClosed(closed) {
    for (const [id, wall] of gates) wall.visible = closed.has(id);
  }

  function dispose() {
    scene.remove(root);
    root.traverse(o => {
      if (o.geometry) o.geometry.dispose();
    });
  }

  return { root, pads, animated, gates, setClosed, dispose, height: hAt };
}

function addFall(root, animated, x, z, width, tint, frag, drop = 10, rot = 0) {
  const mat = new THREE.ShaderMaterial({
    vertexShader: waterVert,
    fragmentShader: frag,
    uniforms: { time: { value: 0 }, tint: { value: new THREE.Color(tint) } },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, drop, 1, 8), mat);
  mesh.position.set(x, drop / 2 - 0.4, z);
  mesh.rotation.y = rot;
  mesh.userData.photoMaterial = new THREE.MeshStandardMaterial({
    color: tint, emissive: tint, emissiveIntensity: 1.8, roughness: 0.2, metalness: 0.1, side: THREE.DoubleSide,
  });
  root.add(mesh);
  animated.push(mat);
}

function ramp(statics, rock, trim, from, to, hAt) {
  const steps = 6;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = from.x + (to.x - from.x) * t;
    const z = from.z + (to.z - from.z) * t;
    const y = hAt(x, z);
    const m = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.18, 1.1), rock);
    m.position.set(x, y, z);
    m.castShadow = true;
    statics.add(m);
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.04, 1.1), trim);
    s.position.set(x, y + 0.12, z);
    statics.add(s);
  }
}
