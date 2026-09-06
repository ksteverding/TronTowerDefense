import * as THREE from 'three';
import { WebGLPathTracer, GradientEquirectTexture } from 'three-gpu-pathtracer';

const nextPaint = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

function setWorldTransform(object, matrix) {
  object.matrixAutoUpdate = false;
  object.matrix.copy(matrix);
  object.matrix.decompose(object.position, object.quaternion, object.scale);
  object.matrixWorld.copy(matrix);
}

/**
 * Flatten a frozen scene into ordinary PBR meshes. Geometry and textures remain
 * owned by the game; only the snapshot's materials and environment are owned here.
 */
function snapshotScene(source, camera) {
  source.updateMatrixWorld(true);
  const scene = new THREE.Scene();
  scene.background = source.background?.isColor ? source.background.clone() : new THREE.Color('#030b15');
  scene.backgroundIntensity = source.backgroundIntensity ?? 1;
  scene.environmentIntensity = 1.2;
  const ownedMaterials = new Set();
  const clonedMaterials = new Map();
  const instanceMatrix = new THREE.Matrix4();
  const worldMatrix = new THREE.Matrix4();
  const instanceColor = new THREE.Color();

  function cloneMaterial(original, tint = null) {
    const key = `${original.uuid}:${tint ? `${tint.r},${tint.g},${tint.b}` : ''}`;
    if (clonedMaterials.has(key)) return clonedMaterials.get(key);
    let result;
    if (original.isMeshStandardMaterial || original.isMeshPhysicalMaterial) {
      result = original.clone();
    } else {
      const color = original.color?.clone() || new THREE.Color('#315269');
      result = new THREE.MeshStandardMaterial({
        color,
        metalness: 0,
        roughness: original.shininess ? Math.max(0.12, Math.sqrt(2 / (original.shininess + 2))) : 0.65,
        emissive: original.isMeshBasicMaterial ? color : (original.emissive || new THREE.Color(0)),
        emissiveIntensity: original.isMeshBasicMaterial ? 1 : (original.emissiveIntensity ?? 1),
        map: original.map || null,
        emissiveMap: original.isMeshBasicMaterial ? (original.map || null) : (original.emissiveMap || null),
        normalMap: original.normalMap || null,
        alphaMap: original.alphaMap || null,
        alphaTest: original.alphaTest || 0,
        opacity: original.opacity ?? 1,
        transparent: original.transparent || false,
        side: original.side ?? THREE.FrontSide,
        vertexColors: original.vertexColors || false,
      });
    }
    if (tint) result.color.multiply(tint);
    if (original.visible === false) {
      result.transparent = true;
      result.opacity = 0;
    }
    result.name = `photo:${original.name || original.type}`;
    clonedMaterials.set(key, result);
    ownedMaterials.add(result);
    return result;
  }

  function meshMaterial(sourceMaterial, tint) {
    return Array.isArray(sourceMaterial) ? sourceMaterial.map(m => cloneMaterial(m, tint)) : cloneMaterial(sourceMaterial, tint);
  }

  function appendMesh(original, matrix, tint = null) {
    const sourceMaterial = original.userData.photoMaterial || original.material;
    if (!sourceMaterial || !original.geometry?.attributes.position) return;
    const copy = new THREE.Mesh(original.geometry, meshMaterial(sourceMaterial, tint));
    copy.name = original.name;
    copy.castShadow = original.castShadow;
    copy.receiveShadow = original.receiveShadow;
    copy.frustumCulled = original.frustumCulled;
    copy.layers.mask = original.layers.mask;
    setWorldTransform(copy, matrix);
    scene.add(copy);
  }

  function appendLight(original) {
    if (!(original.isPointLight || original.isSpotLight || original.isDirectionalLight || original.isRectAreaLight)) return;
    const copy = original.clone(false);
    setWorldTransform(copy, original.matrixWorld);
    if (original.target) {
      original.target.updateWorldMatrix(true, false);
      copy.target = new THREE.Object3D();
      setWorldTransform(copy.target, original.target.matrixWorld);
      scene.add(copy.target);
    }
    // The ray tracer resolves occlusion itself. Raster shadow maps would allocate
    // duplicate shadow resources while its shader compilation preview is shown.
    copy.castShadow = false;
    scene.add(copy);
  }

  function visit(object, inheritedVisible = true) {
    const visible = inheritedVisible && object.visible && !object.userData.noPhoto;
    if (!visible) return;
    const onCameraLayer = (camera.layers.mask & object.layers.mask) !== 0;
    if (onCameraLayer && object.isMesh && !object.isPoints && !object.isLine) {
      if (object.isInstancedMesh) {
        for (let i = 0; i < object.count; i++) {
          object.getMatrixAt(i, instanceMatrix);
          worldMatrix.multiplyMatrices(object.matrixWorld, instanceMatrix);
          if (object.instanceColor) object.getColorAt(i, instanceColor);
          appendMesh(object, worldMatrix, object.instanceColor ? instanceColor : null);
        }
      } else {
        appendMesh(object, object.matrixWorld);
      }
    } else if (onCameraLayer && object.isLight) {
      appendLight(object);
    }
    for (const child of object.children) visit(child, visible);
  }

  try {
    visit(source);
    scene.updateMatrixWorld(true);
    return { scene, ownedMaterials };
  } catch (error) {
    for (const material of ownedMaterials) material.dispose();
    throw error;
  }
}

/** Genuine progressive, multiple-bounce path tracing of a frozen game state. */
export class PhotoMode {
  constructor(renderer, camera) {
    this.renderer = renderer;
    this.camera = camera;
    this.tracer = null;
    this.snapshot = null;
    this.environment = null;
    this.ownedMaterials = new Set();
    this._active = false;
    this._preparing = false;
    this._generation = 0;
    this._shaderError = null;
    this._previousShaderError = null;
    this._shaderErrorHook = null;
  }

  get active() { return this._active; }
  get samples() { return this._active && this.tracer ? this.tracer.samples : 0; }
  get isCompiling() { return this._active && Boolean(this.tracer?.isCompiling); }
  get status() {
    if (this._preparing) return 'preparing';
    if (!this._active) return 'inactive';
    return this.isCompiling ? 'compiling' : 'accumulating';
  }

  async enter(scene) {
    if (this._active || this._preparing || this.snapshot) this.exit();
    const generation = ++this._generation;
    this._preparing = true;
    this._shaderError = null;
    await nextPaint();
    if (generation !== this._generation) return;

    try {
      const result = snapshotScene(scene, this.camera);
      this.snapshot = result.scene;
      this.ownedMaterials = result.ownedMaterials;
      this.environment = new GradientEquirectTexture(256);
      this.environment.topColor.setRGB(0.6, 0.8, 1.1);
      this.environment.bottomColor.setRGB(0.1, 0.15, 0.2);
      this.environment.exponent = 2;
      this.environment.update();
      this.snapshot.environment = this.environment;

      // Keep one renderer between sessions: its GPU targets and sampling state
      // can be reused, while each frozen scene is released independently.
      if (!this.tracer) {
        this.tracer = new WebGLPathTracer(this.renderer);
        this.tracer.bounces = 5;
        this.tracer.transmissiveBounces = 3;
        this.tracer.filterGlossyFactor = 0.5;
        this.tracer.tiles.set(3, 3);
        this.tracer.renderScale = 0.75;
        this.tracer.dynamicLowRes = true;
        this.tracer.lowResScale = 0.25;
        this.tracer.minSamples = 1;
        this.tracer.renderDelay = 0;
        this.tracer.fadeDuration = 200;
        this.tracer.textureSize.set(512, 512);
      }

      this._installShaderErrorHook();
      this.camera.updateMatrixWorld(true);
      this.tracer.setScene(this.snapshot, this.camera);
      if (this._shaderError) throw this._shaderError;
      this.renderer.setRenderTarget(null);
      this._active = true;
      this._preparing = false;
    } catch (error) {
      this.exit();
      throw error;
    }
  }

  render() {
    if (!this._active || !this.tracer) return;
    try {
      if (this._shaderError) throw this._shaderError;
      this.renderer.setRenderTarget(null);
      this.tracer.renderSample();
      if (this._shaderError) throw this._shaderError;
    } catch (error) {
      this.exit();
      throw error;
    }
  }

  updateCamera() {
    if (!this._active || !this.tracer) return;
    this.camera.updateMatrixWorld(true);
    this.tracer.updateCamera();
  }

  _installShaderErrorHook() {
    const debug = this.renderer.debug;
    if (!debug) return;
    this._previousShaderError = debug.onShaderError;
    this._shaderErrorHook = (gl, program, vertex, fragment) => {
      const logs = [gl.getProgramInfoLog(program), gl.getShaderInfoLog(vertex), gl.getShaderInfoLog(fragment)].filter(Boolean).join('\n');
      this._shaderError = new Error(`Path tracing shader compilation failed. ${logs.slice(0, 1800)}`);
      if (this._previousShaderError) this._previousShaderError(gl, program, vertex, fragment);
    };
    debug.onShaderError = this._shaderErrorHook;
  }

  exit() {
    ++this._generation;
    this._active = false;
    this._preparing = false;
    if (this.renderer.debug?.onShaderError === this._shaderErrorHook) {
      this.renderer.debug.onShaderError = this._previousShaderError;
    }
    this._shaderErrorHook = null;
    this._previousShaderError = null;
    this._shaderError = null;

    if (this.tracer && this.snapshot) {
      // setScene also releases the generator's references to the frozen meshes;
      // geometry owned by the game is never disposed here.
      try {
        this.tracer.setScene(new THREE.Scene(), this.camera);
      } catch (error) {
        console.warn('Could not clear the photo scene; it will be replaced on next entry.', error);
      }
    }
    for (const material of this.ownedMaterials) material.dispose();
    this.ownedMaterials.clear();
    this.environment?.dispose();
    this.environment = null;
    this.snapshot?.clear();
    this.snapshot = null;
    this.renderer.setRenderTarget(null);
  }
}
