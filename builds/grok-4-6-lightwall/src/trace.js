import * as THREE from 'three';
import { WebGLPathTracer } from 'three-gpu-pathtracer';

function cloneMat(src) {
  if (src.userData && src.userData.skip) return null;
  if (src.isMeshStandardMaterial || src.isMeshPhysicalMaterial) return src.clone();
  const color = src.color ? src.color.clone() : new THREE.Color('#3de7ff');
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.4,
    roughness: 0.4,
    emissive: src.emissive ? src.emissive.clone() : (src.isMeshBasicMaterial ? color : new THREE.Color(0)),
    emissiveIntensity: src.emissiveIntensity ?? (src.isMeshBasicMaterial ? 1.2 : 1),
    transparent: !!src.transparent,
    opacity: src.opacity ?? 1,
    side: src.side ?? THREE.FrontSide,
  });
}

function snapshot(source) {
  source.updateMatrixWorld(true);
  const scene = new THREE.Scene();
  scene.background = source.background?.isColor ? source.background.clone() : new THREE.Color('#071018');
  source.traverse(obj => {
    if (obj.userData?.noPhoto) return;
    if (!obj.isMesh || !obj.geometry) return;
    const srcMat = obj.userData.photoMaterial || obj.material;
    const mats = Array.isArray(srcMat) ? srcMat.map(cloneMat) : cloneMat(srcMat);
    if (!mats || (Array.isArray(mats) && mats.some(m => !m))) return;
    const mesh = new THREE.Mesh(obj.geometry, mats);
    mesh.matrix.copy(obj.matrixWorld);
    mesh.matrixAutoUpdate = false;
    mesh.castShadow = true;
    scene.add(mesh);
  });
  const env = new THREE.HemisphereLight('#cfefff', '#182028', 1.4);
  scene.add(env);
  const sun = new THREE.DirectionalLight('#ffffff', 4);
  sun.position.set(-12, 28, 10);
  scene.add(sun);
  return scene;
}

export function createTrace(renderer, camera) {
  let tracer = null;
  let frozen = null;
  let active = false;
  try {
    tracer = new WebGLPathTracer(renderer);
    tracer.bounces = 5;
    tracer.transmissiveBounces = 2;
    tracer.renderToCanvas = true;
    tracer.rasterizeScene = false;
  } catch (err) {
    tracer = null;
  }

  return {
    get active() { return active; },
    async enter(worldScene) {
      if (!tracer) return { ok: false, reason: 'Path tracer failed to initialize. Frozen raster only.' };
      frozen = snapshot(worldScene);
      try {
        await tracer.setSceneAsync(frozen, camera);
      } catch (err) {
        try { tracer.setScene(frozen, camera); }
        catch (err2) { return { ok: false, reason: 'Could not build the trace scene.' }; }
      }
      tracer.reset();
      active = true;
      return { ok: true };
    },
    frame() {
      if (!active || !tracer) return 0;
      tracer.renderSample();
      return tracer.samples;
    },
    reset() { if (tracer && active) tracer.reset(); },
    save() {
      const a = document.createElement('a');
      a.download = `lightwall-trace-${Date.now()}.png`;
      a.href = renderer.domElement.toDataURL('image/png');
      a.click();
    },
    exit() {
      active = false;
      frozen = null;
    },
  };
}
