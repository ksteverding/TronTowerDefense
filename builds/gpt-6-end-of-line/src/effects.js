import * as THREE from 'three';

const up = new THREE.Vector3(0, 1, 0);
const cylinder = new THREE.CylinderGeometry(1, 1, 1, 6);
const ringGeo = new THREE.TorusGeometry(1, .018, 4, 64);
export class Effects {
  constructor(scene) {
    this.scene = scene; this.particles = []; this.trails = []; this.rings = []; this.flashes = []; this.capacity = 1400;
    this.mesh = new THREE.InstancedMesh(new THREE.OctahedronGeometry(1, 0), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .9, blending: THREE.AdditiveBlending, depthWrite: false }), this.capacity);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); this.mesh.frustumCulled = false; this.mesh.count = 0; this.mesh.userData.noPhoto = true; scene.add(this.mesh);
    this.dummy = new THREE.Object3D();
    for (let i = 0; i < 6; i++) { const light = new THREE.PointLight(0xffffff, 0, 12, 2); scene.add(light); this.flashes.push({ light, life: 0, power: 0 }); }
  }
  burst(position, color = '#69e7ff', count = 22, power = 1) {
    const c = new THREE.Color(color);
    for (let i = 0; i < count && this.particles.length < this.capacity; i++) {
      const angle = Math.random() * Math.PI * 2, speed = (1 + Math.random() * 5) * power;
      this.particles.push({ x: position.x, y: position.y, z: position.z, vx: Math.cos(angle) * speed, vy: (1 + Math.random() * 5) * power, vz: Math.sin(angle) * speed, life: .4 + Math.random() * .7, max: 1.1, size: .025 + Math.random() * .07 * power, color: c });
    }
    this.flash(position, color, 50 * power);
  }
  flash(position, color, power = 40) {
    const item = this.flashes.reduce((a, b) => a.life < b.life ? a : b);
    item.light.position.copy(position); item.light.color.set(color); item.life = .22; item.power = power;
  }
  beam(from, to, color, width = .045, life = .12) {
    const delta = to.clone().sub(from), material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .95, blending: THREE.AdditiveBlending, depthWrite: false });
    const obj = new THREE.Mesh(cylinder, material); obj.position.copy(from).lerp(to, .5); obj.quaternion.setFromUnitVectors(up, delta.clone().normalize()); obj.scale.set(width, delta.length(), width);
    this.scene.add(obj); this.trails.push({ obj, life, max: life });
  }
  lightning(from, to, color = '#b89bff') {
    let prev = from.clone(); const steps = Math.ceil(from.distanceTo(to) / .6);
    for (let i = 1; i <= steps; i++) {
      const p = from.clone().lerp(to, i / steps);
      if (i < steps) { p.x += (Math.random() - .5) * .65; p.y += (Math.random() - .5) * .65; p.z += (Math.random() - .5) * .65; }
      this.beam(prev, p, color, .028, .15); prev = p;
    }
  }
  ring(position, color, radius = 3, life = .65) {
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .9, blending: THREE.AdditiveBlending, depthWrite: false });
    const obj = new THREE.Mesh(ringGeo, mat); obj.rotation.x = -Math.PI / 2; obj.position.copy(position); obj.userData.noPhoto = true; this.scene.add(obj);
    this.rings.push({ obj, life, max: life, radius });
  }
  update(dt) {
    this.particles = this.particles.filter(p => {
      p.life -= dt; if (p.life <= 0) return false;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt; p.vy -= dt * 6; p.vx *= Math.exp(-dt * 1.4); p.vz *= Math.exp(-dt * 1.4); return true;
    });
    this.particles.forEach((p, i) => { this.dummy.position.set(p.x, p.y, p.z); this.dummy.scale.setScalar(p.size * Math.min(1, p.life * 4)); this.dummy.updateMatrix(); this.mesh.setMatrixAt(i, this.dummy.matrix); this.mesh.setColorAt(i, p.color); });
    this.mesh.count = this.particles.length; this.mesh.instanceMatrix.needsUpdate = true; if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
    this.trails = this.trails.filter(item => { item.life -= dt; if (item.life <= 0) { this.scene.remove(item.obj); item.obj.material.dispose(); return false; } item.obj.material.opacity = item.life / item.max; return true; });
    this.rings = this.rings.filter(item => { item.life -= dt; if (item.life <= 0) { this.scene.remove(item.obj); item.obj.material.dispose(); return false; } const t = 1 - item.life / item.max; item.obj.scale.setScalar(Math.max(.01, item.radius * (1 - (1 - t) ** 3))); item.obj.material.opacity = (1 - t) ** 2; return true; });
    this.flashes.forEach(f => { f.life = Math.max(0, f.life - dt); f.light.intensity = f.power * f.life / .22; });
  }
  clear() { this.particles = []; this.update(10); }
}

export class Soundscape {
  constructor() { this.enabled = true; this.ctx = null; this.lastShot = 0; }
  start() {
    if (this.ctx) { this.ctx.resume(); return; }
    try {
      const Context = window.AudioContext || window.webkitAudioContext; this.ctx = new Context();
      this.master = this.ctx.createGain(); this.master.gain.value = this.enabled ? .22 : 0; this.master.connect(this.ctx.destination);
      // Quiet harmonic machinery, with an eight-step pulse beneath the action.
      this.drone = this.ctx.createGain(); this.drone.gain.value = .055; this.drone.connect(this.master);
      [55, 82.4069, 110.15].forEach((frequency, i) => { const oscillator = this.ctx.createOscillator(); oscillator.type = i ? 'sine' : 'triangle'; oscillator.frequency.value = frequency; oscillator.connect(this.drone); oscillator.start(); });
      this.timer = setInterval(() => { if (!this.enabled || document.hidden) return; const notes = [220, 0, 329.63, 0, 293.66, 0, 164.81, 0]; this.step = ((this.step || 0) + 1) % 8; if (notes[this.step]) this.tone(notes[this.step], .26, .035, 'sine'); }, 320);
    } catch { this.enabled = false; }
  }
  toggle() { this.enabled = !this.enabled; if (this.master) this.master.gain.setTargetAtTime(this.enabled ? .22 : 0, this.ctx.currentTime, .1); return this.enabled; }
  tone(freq, duration, volume = .15, type = 'sine', end = freq * .5) {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime, o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, end), t + duration);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(volume, t + .008); g.gain.exponentialRampToValueAtTime(.0001, t + duration);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + duration + .03);
  }
  play(type) {
    if (type === 'shot') { if (!this.ctx || this.ctx.currentTime - this.lastShot < .09) return; this.lastShot = this.ctx.currentTime; this.tone(500, .1, .045, 'triangle', 100); }
    if (type === 'build') { this.tone(260, .3, .2, 'sine', 1040); }
    if (type === 'kill') this.tone(95, .18, .12, 'sawtooth', 24);
    if (type === 'wave') { this.tone(110, .8, .2, 'sawtooth', 165); setTimeout(() => this.tone(220, .5, .1, 'sine', 330), 180); }
    if (type === 'nova') { this.tone(45, 1.4, .5, 'sawtooth', 22); this.tone(1100, 1.6, .12, 'sine', 45); }
    if (type === 'rail') this.tone(1800, .23, .09, 'sawtooth', 60);
  }
}
