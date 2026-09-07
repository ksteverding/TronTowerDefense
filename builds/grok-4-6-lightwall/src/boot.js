import * as THREE from 'three';
import { Protocol } from './protocol.js';
import { TOWERS, SECTORS, cellToWorld, worldToCell, gateAt, isGlass } from './sectors.js';
import { createScape } from './scape.js';
import { createTower, createProgram, createBoss, createDisc, pulseConstructs } from './constructs.js';
import { createLumen } from './lumen.js';
import { createSignal } from './signal.js';
import { createHum } from './hum.js';
import { createTrace } from './trace.js';

const $ = id => document.getElementById(id);

async function boot() {
  const ui = createSignal();
  const hum = createHum();
  let lumen;
  try {
    lumen = createLumen($('viewport'));
  } catch (err) {
    $('loading').hidden = true;
    $('screen-error').hidden = false;
    $('screen-error').classList.add('active');
    $('error-message').textContent = err.message || 'WebGL2 is required.';
    return;
  }

  const proto = new Protocol({ onEvent });
  const trace = createTrace(lumen.renderer, lumen.camera);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const clock = new THREE.Clock();
  const towerMeshes = new Map();
  const unitMeshes = new Map();
  const shotMeshes = [];
  const bars = new Map();
  let scape = null;
  let mode = 'splash';
  let paused = false;
  let buildKey = 'disc';
  let selected = null;
  let hover = null;
  let aimingThrow = false;
  let cinematic = false;
  let inspect = null;
  const ghost = createTower('disc');
  ghost.traverse(o => { if (o.isMesh) { o.material = o.material.clone(); o.material.transparent = true; o.material.opacity = 0.45; o.material.depthWrite = false; } });
  ghost.visible = false;
  lumen.scene.add(ghost);
  const rangeRing = new THREE.Mesh(new THREE.RingGeometry(1, 1.06, 48), new THREE.MeshBasicMaterial({ color: '#3de7ff', transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false }));
  rangeRing.rotation.x = -Math.PI / 2;
  rangeRing.visible = false;
  rangeRing.userData.noPhoto = true;
  lumen.scene.add(rangeRing);

  function clearEntities() {
    for (const m of towerMeshes.values()) lumen.scene.remove(m);
    for (const m of unitMeshes.values()) lumen.scene.remove(m);
    for (const b of bars.values()) lumen.scene.remove(b.g);
    towerMeshes.clear();
    unitMeshes.clear();
    bars.clear();
  }

  function loadWorld(index) {
    if (scape) scape.dispose();
    clearEntities();
    scape = createScape(lumen.scene, lumen.renderer, index, lumen.quality());
    proto.start(index);
    lumen.home(index);
    ui.mission(index);
    ui.preview(proto.preview());
    ui.hud(proto);
    ui.sheet(proto, null);
    selected = null;
    scape.setClosed(proto.closed);
  }

  function onEvent(e) {
    if (e.type === 'build' || e.type === 'upgrade') {
      const prev = towerMeshes.get(e.tower.id);
      if (prev) lumen.scene.remove(prev);
      const mesh = createTower(e.tower.type, e.tower.level, e.tower.branch);
      mesh.position.set(e.tower.x, e.tower.y, e.tower.z);
      mesh.userData.towerId = e.tower.id;
      lumen.scene.add(mesh);
      towerMeshes.set(e.tower.id, mesh);
      if (mode === 'game') hum.play('build');
    }
    if (e.type === 'sell') {
      const m = towerMeshes.get(e.tower.id);
      if (m) lumen.scene.remove(m);
      towerMeshes.delete(e.tower.id);
    }
    if (e.type === 'spawn') {
      const model = e.enemy.boss ? createBoss(e.enemy.type) : createProgram(e.enemy.type);
      model.position.set(e.enemy.x, e.enemy.y, e.enemy.z);
      lumen.scene.add(model);
      unitMeshes.set(e.enemy.id, model);
      const g = new THREE.Group();
      g.userData.noPhoto = true;
      const back = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.08), new THREE.MeshBasicMaterial({ color: '#041018', depthTest: false }));
      const hp = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.05), new THREE.MeshBasicMaterial({ color: '#ff4d8d', depthTest: false }));
      hp.position.z = 0.01;
      g.add(back, hp);
      g.renderOrder = 20;
      lumen.scene.add(g);
      bars.set(e.enemy.id, { g, hp });
      if (e.enemy.boss && mode === 'game') ui.banner(e.enemy.type === 'stalker' ? 'GRID STALKER' : e.enemy.type === 'arenaBoss' ? 'RECOGNIZER INBOUND' : 'ISO PRIME', 'Break it before it reaches the core.');
    }
    if (e.type === 'kill' || e.type === 'leak') {
      const m = unitMeshes.get(e.enemy.id);
      if (m) lumen.scene.remove(m);
      unitMeshes.delete(e.enemy.id);
      const b = bars.get(e.enemy.id);
      if (b) lumen.scene.remove(b.g);
      bars.delete(e.enemy.id);
      if (mode === 'game') hum.play(e.type === 'kill' ? 'kill' : 'leak');
    }
    if (e.type === 'shot' && mode === 'game') {
      const disc = createDisc();
      disc.position.copy(e.from);
      disc.userData.life = 0.18;
      lumen.scene.add(disc);
      shotMeshes.push(disc);
      hum.play(e.weapon === 'sailer' ? 'rail' : 'shot');
    }
    if (e.type === 'reroute') {
      scape?.setClosed(proto.closed);
      if (mode === 'game') {
        hum.play('wall');
        ui.toast(e.raised ? 'LIGHT-WALL RAISED · LANE SEALED' : 'WALL DROPPED · LANE OPEN');
      }
    }
    if (e.type === 'wave' && mode === 'game') {
      ui.banner(`WAVE ${String(e.wave).padStart(2, '0')}`, 'Programs on the ribbon.');
      hum.play('wave');
    }
    if (e.type === 'waveClear' && mode === 'game') ui.banner('SECTOR STABILIZED', `Wave ${e.wave} cleared`);
    if (e.type === 'ability' && mode === 'game') hum.play(e.ability === 'throw' ? 'throw' : 'wave');
    if (e.type === 'win') {
      $('result-title').textContent = 'SECTOR SECURE';
      $('result-body').textContent = `${SECTORS[proto.sectorIndex].name} holds · ${proto.kills} derezzed`;
      $('btn-next').style.display = proto.sectorIndex < 2 ? '' : 'none';
      ui.show('screen-result');
      $('hud').hidden = true;
      mode = 'menu';
      hum.play('win');
    }
    if (e.type === 'lose') {
      $('result-title').textContent = 'CORE COLLAPSED';
      $('result-body').textContent = 'The intrusion reached the core.';
      $('btn-next').style.display = 'none';
      ui.show('screen-result');
      $('hud').hidden = true;
      mode = 'menu';
    }
    ui.hud(proto);
  }

  function enterGame(index) {
    loadWorld(index);
    mode = 'game';
    paused = false;
    ui.show('hud');
    $('hud').hidden = false;
    document.querySelectorAll('.overlay').forEach(s => { s.classList.remove('active'); s.hidden = true; });
    ui.preview(proto.preview());
    ui.selectBuild(buildKey);
    lumen.renderer.domElement.focus();
  }

  function pick(ev) {
    const rect = lumen.renderer.domElement.getBoundingClientRect();
    pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, lumen.camera);
    const hits = scape ? raycaster.intersectObjects(scape.pads, false) : [];
    const hit = hits[0];
    if (!hit) return null;
    if (hit.object.userData.kind === 'ground') {
      const cell = worldToCell(hit.point.x, hit.point.z);
      const gid = gateAt(proto.sector, cell.col, cell.row);
      const kind = gid ? 'gate' : (proto.isRoad(cell.col, cell.row) || isGlass(proto.sector, cell.col, cell.row) ? 'road' : 'pad');
      return { point: hit.point, object: { userData: { kind, gateId: gid, col: cell.col, row: cell.row } } };
    }
    return hit;
  }

  function worldFromEvent(ev) {
    const hit = pick(ev);
    if (hit) return hit.point;
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const out = new THREE.Vector3();
    raycaster.setFromCamera(pointer, lumen.camera);
    raycaster.ray.intersectPlane(plane, out);
    return out;
  }

  lumen.renderer.domElement.addEventListener('pointermove', ev => {
    if (mode !== 'game' || !scape) return;
    const hit = pick(ev);
    hover = hit?.object.userData || null;
    ghost.visible = false;
    rangeRing.visible = false;
    if (!hover || aimingThrow) return;
    if (buildKey === 'wall' && hover.kind === 'gate') {
      ghost.visible = false;
      rangeRing.visible = true;
      rangeRing.position.set(hover.col != null ? cellToWorld(hover.col, hover.row).x : 0, hit.point.y + 0.2, cellToWorld(hover.col, hover.row).z);
      rangeRing.scale.setScalar(2);
    } else if (buildKey && buildKey !== 'wall' && hover.kind === 'pad' && proto.canBuild(hover.col, hover.row)) {
      const { x, z } = cellToWorld(hover.col, hover.row);
      const y = proto.groundHeight(x, z);
      ghost.visible = true;
      ghost.position.set(x, y, z);
      const def = TOWERS[buildKey];
      rangeRing.visible = true;
      rangeRing.position.set(x, y + 0.15, z);
      rangeRing.scale.setScalar(def.range);
    }
  });

  let down = { x: 0, y: 0, b: 0 };
  const camHeld = new Set();
  lumen.renderer.domElement.addEventListener('pointerdown', ev => {
    down = { x: ev.clientX, y: ev.clientY, b: ev.button };
    if (ev.button === 0 || ev.button === 2) cinematic = false;
  });
  lumen.renderer.domElement.addEventListener('pointerup', ev => {
    if (mode !== 'game' || ev.button !== 0) return;
    if (Math.hypot(ev.clientX - down.x, ev.clientY - down.y) > 6) return;
    const w = worldFromEvent(ev);
    if (aimingThrow) {
      proto.ability('throw', w.x, w.z);
      aimingThrow = false;
      ui.toast('IDENTITY DISC AWAY');
      return;
    }
    const hit = pick(ev);
    if (!hit) return;
    const data = hit.object.userData;
    const occ = proto.towers.find(t => t.col === data.col && t.row === data.row);
    if (occ) {
      selected = occ.id;
      ui.sheet(proto, occ);
      return;
    }
    if (buildKey === 'wall' && data.kind === 'gate') {
      if (proto.walls.has(data.gateId)) {
        const r = proto.dropWall(data.gateId);
        if (!r.ok) ui.toast(r.reason);
      } else {
        const r = proto.raiseWall(data.gateId);
        if (!r.ok) ui.toast(r.reason);
      }
      return;
    }
    if (buildKey && buildKey !== 'wall' && data.kind === 'pad') {
      const r = proto.build(buildKey, data.col, data.row);
      if (!r.ok) ui.toast(r.reason);
      else { selected = r.tower.id; ui.sheet(proto, r.tower); }
    }
  });

  addEventListener('keydown', ev => {
    if (mode === 'game' && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(ev.key)) {
      camHeld.add(ev.key);
      cinematic = false;
      ev.preventDefault();
    }
    if (ev.repeat) return;
    if (ev.key === 'Escape') {
      if (trace.active) { exitPhoto(); return; }
      aimingThrow = false;
      selected = null;
      ui.sheet(proto, null);
      $('settings').hidden = true;
      return;
    }
    if (mode !== 'game') return;
    const map = { Digit1: 'disc', Digit2: 'ribbon', Digit3: 'recognizer', Digit4: 'bit', Digit5: 'sailer', Digit6: 'wall' };
    if (map[ev.code]) { buildKey = map[ev.code]; ui.selectBuild(buildKey); }
    if (ev.code === 'Space') {
      ev.preventDefault();
      if (proto.state === 'ready') { proto.launchWave(); ui.preview(proto.preview()); }
      else paused = !paused;
    }
    if (ev.key === 'q' || ev.key === 'Q') aimingThrow = true;
    if (ev.key === 'e' || ev.key === 'E') proto.ability('overclock');
    if (ev.key === 'p' || ev.key === 'P') enterPhoto();
    if (ev.key === 'f' || ev.key === 'F') lumen.home(proto.sectorIndex);
    if (ev.key === 'c' || ev.key === 'C') cinematic = !cinematic;
    if (ev.key === 'r' || ev.key === 'R') {
      const t = proto.towers.find(x => x.id === selected);
      if (t) {
        inspect = t;
        lumen.camera.position.set(t.x + 4.5, t.y + 3.2, t.z + 4.5);
        lumen.controls.target.set(t.x, t.y + 0.8, t.z);
      }
    }
  });
  addEventListener('keyup', ev => camHeld.delete(ev.key));

  $('btn-enter').onclick = () => ui.show('screen-menu');
  $('btn-play').onclick = () => enterGame(0);
  $('btn-levels').onclick = () => ui.show('screen-levels');
  $('btn-howto').onclick = () => ui.show('screen-howto');
  $('btn-levels-back').onclick = () => ui.show('screen-menu');
  $('btn-howto-back').onclick = () => ui.show('screen-menu');
  document.querySelectorAll('.sector-card').forEach(btn => {
    btn.onclick = () => enterGame(Number(btn.dataset.sector));
  });
  $('btn-wave').onclick = () => { proto.launchWave(); ui.preview(proto.preview()); };
  $('btn-pause').onclick = () => { paused = !paused; };
  $('btn-speed').onclick = () => {
    const n = proto.speed === 1 ? 2 : proto.speed === 2 ? 3 : 1;
    proto.setSpeed(n);
    $('btn-speed').textContent = n + '×';
  };
  $('btn-sound').onclick = () => { $('btn-sound').textContent = hum.toggle() ? 'MUTE' : '♪'; };
  $('btn-settings').onclick = () => { $('settings').hidden = false; $('settings').classList.add('active'); };
  $('btn-settings-close').onclick = () => { $('settings').hidden = true; $('settings').classList.remove('active'); };
  $('btn-abort').onclick = () => { mode = 'menu'; ui.show('screen-menu'); };
  $('btn-throw').onclick = () => { aimingThrow = true; ui.toast('AIM THE DISC · CLICK GROUND'); };
  $('btn-overclock').onclick = () => proto.ability('overclock');
  $('tower-dock').onclick = ev => {
    const btn = ev.target.closest('.dock-item');
    if (!btn) return;
    buildKey = btn.dataset.tower;
    ui.selectBuild(buildKey);
  };
  $('btn-branch-a').onclick = () => { const t = proto.towers.find(x => x.id === selected); if (t) { const r = proto.upgrade(t.id, 'a'); if (!r.ok) ui.toast(r.reason); else ui.sheet(proto, r.tower); } };
  $('btn-branch-b').onclick = () => { const t = proto.towers.find(x => x.id === selected); if (t) { const r = proto.upgrade(t.id, 'b'); if (!r.ok) ui.toast(r.reason); else ui.sheet(proto, r.tower); } };
  $('btn-upgrade').onclick = () => { const t = proto.towers.find(x => x.id === selected); if (t) { const r = proto.upgrade(t.id, t.branch); if (!r.ok) ui.toast(r.reason); else ui.sheet(proto, r.tower); } };
  $('btn-sell').onclick = () => {
    const t = proto.towers.find(x => x.id === selected);
    if (!t) return;
    if (t) proto.sell(t.id);
    selected = null;
    ui.sheet(proto, null);
  };
  $('btn-sheet-close').onclick = () => { selected = null; ui.sheet(proto, null); };
  $('btn-inspect').onclick = () => {
    const t = proto.towers.find(x => x.id === selected);
    if (!t) return;
    lumen.camera.position.set(t.x + 4.5, t.y + 3.2, t.z + 4.5);
    lumen.controls.target.set(t.x, t.y + 0.8, t.z);
  };
  $('quality-select').onchange = ev => {
    lumen.applyQuality(ev.target.value);
    const blooms = { ultra: 0.55, high: 0.4, performance: 0.22 };
    $('bloom-input').value = String(blooms[ev.target.value] ?? 0.55);
    if (scape) {
      scape.dispose();
      scape = createScape(lumen.scene, lumen.renderer, proto.sectorIndex, lumen.quality());
      scape.setClosed(proto.closed);
    }
  };
  $('bloom-input').oninput = ev => lumen.setBloom(Number(ev.target.value));
  $('btn-photo').onclick = enterPhoto;
  $('btn-cam-reset').onclick = () => { cinematic = false; lumen.home(proto.sectorIndex); };
  $('btn-cam-top-settings').onclick = () => { cinematic = false; lumen.overhead(); };
  $('btn-hud-home').onclick = () => { cinematic = false; lumen.home(proto.sectorIndex); };
  $('btn-cam-top').onclick = () => { cinematic = false; lumen.overhead(); };
  $('btn-orbit-ccw').onclick = () => { cinematic = false; lumen.orbit(0.45); };
  $('btn-orbit-cw').onclick = () => { cinematic = false; lumen.orbit(-0.45); };
  $('photo-save').onclick = () => trace.save();
  $('photo-exit').onclick = exitPhoto;
  $('btn-next').onclick = () => enterGame(Math.min(proto.sectorIndex + 1, 2));
  $('btn-retry').onclick = () => enterGame(proto.sectorIndex);
  $('btn-result-menu').onclick = () => ui.show('screen-menu');

  function closeSettings() {
    $('settings').hidden = true;
    $('settings').classList.remove('active');
  }

  async function enterPhoto() {
    if (mode !== 'game') return;
    closeSettings();
    paused = true;
    $('photo-hud').hidden = false;
    ui.toast('Compiling path tracer…');
    const result = await trace.enter(lumen.scene);
    if (!result.ok) {
      ui.toast(result.reason);
      $('photo-samples').textContent = 'RASTER FREEZE';
      return;
    }
    ui.toast('PATH TRACE ACCUMULATING');
    mode = 'photo';
  }
  function exitPhoto() {
    trace.exit();
    $('photo-hud').hidden = true;
    mode = 'game';
    paused = false;
  }

  loadWorld(0);
  ui.hideLoading();
  ui.selectBuild('disc');

  function frame() {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, clock.getDelta());
    const t = clock.elapsedTime;
    if (mode === 'game' && camHeld.size) {
      const spin = dt * 1.35;
      const tilt = dt * 0.8;
      if (camHeld.has('ArrowLeft')) lumen.orbit(spin);
      if (camHeld.has('ArrowRight')) lumen.orbit(-spin);
      if (camHeld.has('ArrowUp')) lumen.orbit(0, -tilt);
      if (camHeld.has('ArrowDown')) lumen.orbit(0, tilt);
    }
    if (cinematic && mode !== 'photo') {
      const r = 12;
      lumen.camera.position.x = Math.cos(t * 0.12) * r;
      lumen.camera.position.y = 42;
      lumen.camera.position.z = Math.sin(t * 0.12) * r;
      lumen.controls.target.set(0, 1.4, 0);
    }
    if (scape) scape.animated.forEach(m => { m.uniforms.time.value = t; });
    for (const mesh of towerMeshes.values()) pulseConstructs(mesh, t);
    if (mode === 'photo' && trace.active) {
      const samples = trace.frame();
      $('photo-samples').textContent = `${Math.floor(samples)} samples`;
      return;
    }
    if (mode === 'game' && !paused) proto.tick(dt * proto.speed);
    for (const u of proto.units) {
      const m = unitMeshes.get(u.id);
      if (!m) continue;
      m.position.set(u.x, u.y + (u.hover ? 1.2 + Math.sin(t * 2) * 0.15 : 0), u.z);
      m.rotation.y = u.angle || 0;
      const b = bars.get(u.id);
      if (b) {
        b.g.position.set(u.x, u.y + u.size + 1.1, u.z);
        b.g.lookAt(lumen.camera.position);
        b.hp.scale.x = Math.max(0.05, u.hp / u.maxHp);
      }
    }
    for (const s of shotMeshes) {
      s.userData.life -= dt;
      s.rotation.y += dt * 8;
    }
    for (let i = shotMeshes.length - 1; i >= 0; i--) {
      if (shotMeshes[i].userData.life <= 0) {
        lumen.scene.remove(shotMeshes[i]);
        shotMeshes.splice(i, 1);
      }
    }
    if (selected) {
      const t = proto.towers.find(x => x.id === selected);
      const mesh = t && towerMeshes.get(t.id);
      if (mesh) mesh.rotation.y = t.angle || mesh.rotation.y;
    }
    for (const tw of proto.towers) {
      const mesh = towerMeshes.get(tw.id);
      if (mesh?.userData.turret) mesh.userData.turret.rotation.y = tw.angle || 0;
    }
    lumen.render(dt, { photo: false });
    if (mode === 'game') ui.hud(proto);
  }
  requestAnimationFrame(frame);
}

boot();
