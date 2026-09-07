import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

const volumetric = {
  uniforms: { tDiffuse: { value: null }, amount: { value: 0.55 }, time: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float amount; uniform float time; varying vec2 vUv;
    void main(){
      vec2 c = vec2(0.52, 0.62);
      vec2 d = vUv - c;
      vec3 col = texture2D(tDiffuse, vUv).rgb;
      vec3 shaft = vec3(0.0);
      for (int i = 0; i < 12; i++) {
        float t = float(i) / 12.0;
        vec2 p = vUv - d * t * 0.28;
        shaft += texture2D(tDiffuse, p).rgb * (1.0 - t) * 0.08;
      }
      float flicker = 0.85 + 0.15 * sin(time * 3.2);
      float vig = 1.0 - smoothstep(0.35, 1.05, length(d)) * 0.35;
      gl_FragColor = vec4((col + shaft * amount * flicker) * vig, 1.0);
    }`,
};

export function createLumen(host) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true });
  if (!renderer.capabilities.isWebGL2) {
    renderer.dispose();
    throw new Error('WebGL2 is required.');
  }
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor('#071018');
  renderer.domElement.tabIndex = 0;
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(46, innerWidth / innerHeight, 0.2, 280);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
  controls.minDistance = 12;
  controls.maxDistance = 56;
  controls.maxPolarAngle = Math.PI * 0.48;
  controls.minPolarAngle = 0.12;
  controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.PAN, RIGHT: THREE.MOUSE.ROTATE };
  controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };

  const hemi = new THREE.HemisphereLight('#9fd7ea', '#121820', 0.85);
  scene.add(hemi);
  const key = new THREE.DirectionalLight('#d7f4ff', 3.4);
  key.position.set(-18, 34, 16);
  key.castShadow = true;
  Object.assign(key.shadow.camera, { left: -38, right: 38, top: 28, bottom: -28, near: 0.5, far: 90 });
  key.shadow.bias = -0.00035;
  key.shadow.normalBias = 0.04;
  scene.add(key);
  const rim = new THREE.DirectionalLight('#3de7ff', 1.6);
  rim.position.set(22, 12, -24);
  scene.add(rim);
  const fill = new THREE.PointLight('#ffb347', 18, 42, 2);
  fill.position.set(0, 8, 0);
  scene.add(fill);

  const target = new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType });
  target.samples = 4;
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.55, 0.4, 1.05);
  composer.addPass(bloom);
  const volume = new ShaderPass(volumetric);
  composer.addPass(volume);
  composer.addPass(new OutputPass());

  let quality = 'ultra';
  const homes = [
    { pos: new THREE.Vector3(0, 42, 12), target: new THREE.Vector3(0, 0.6, 0) },
    { pos: new THREE.Vector3(0, 44, 11), target: new THREE.Vector3(0, 0.8, 0) },
    { pos: new THREE.Vector3(3, 42, 12), target: new THREE.Vector3(2, 1.0, 0) },
  ];

  function home(sectorIndex) {
    const h = homes[sectorIndex] || homes[0];
    camera.position.copy(h.pos);
    controls.target.copy(h.target);
    controls.update();
  }

  function orbit(yaw = 0, polarDelta = 0) {
    const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
    if (yaw) offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    if (polarDelta) {
      const sph = new THREE.Spherical().setFromVector3(offset);
      sph.makeSafe();
      sph.phi = THREE.MathUtils.clamp(
        sph.phi + polarDelta,
        controls.minPolarAngle + 0.02,
        controls.maxPolarAngle - 0.02,
      );
      offset.setFromSpherical(sph);
    }
    camera.position.copy(controls.target).add(offset);
    controls.update();
  }

  function overhead() {
    const t = controls.target;
    camera.position.set(t.x, 46, t.z + 6);
    controls.update();
  }

  function applyQuality(name) {
    quality = name;
    const map = { ultra: { pr: 1.5, shadow: 4096, bloom: 0.28, vol: 0.1 }, high: { pr: 1.25, shadow: 2048, bloom: 0.2, vol: 0.06 }, performance: { pr: 1, shadow: 1024, bloom: 0.12, vol: 0 } };
    const q = map[name] || map.ultra;
    renderer.setPixelRatio(Math.min(devicePixelRatio, q.pr));
    key.shadow.mapSize.set(q.shadow, q.shadow);
    key.shadow.map?.dispose();
    key.shadow.map = null;
    bloom.strength = q.bloom;
    volume.uniforms.amount.value = q.vol;
    volume.enabled = q.vol > 0.01;
    resize();
  }

  function resize() {
    const w = innerWidth;
    const h = innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    composer.setSize(w, h);
  }

  function render(dt, { photo = false } = {}) {
    controls.update();
    volume.uniforms.time.value += dt;
    if (!photo) composer.render();
  }

  applyQuality('ultra');
  home(0);
  addEventListener('resize', resize);

  return {
    renderer, scene, camera, controls, bloom, key, quality: () => quality,
    applyQuality, home, orbit, overhead, resize, render,
    setBloom: v => { bloom.strength = v; },
  };
}
