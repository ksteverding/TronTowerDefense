import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { Simulation, TOWERS, SECTORS, GRID } from './simulation.js';
import { createTower, createEnemy } from './models.js';
import { createWorld } from './world.js';
import { Effects, Soundscape } from './effects.js';
import { PhotoMode } from './photo.js';

const $ = id => document.getElementById(id);
const money = n => Math.floor(n).toLocaleString('en-US');
const vec = p => new THREE.Vector3(p.x, p.y || 0, p.z);
const towerKeys = Object.keys(TOWERS);
let toastTimer, bannerTimer;
function toast(message) { $('toast').textContent = message; $('toast').classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('toast').classList.remove('visible'), 3400); }
function banner(title, description = '') { $('wave-banner').innerHTML = `<strong>${title}</strong><span>${description}</span>`; $('wave-banner').classList.add('visible'); clearTimeout(bannerTimer); bannerTimer = setTimeout(() => $('wave-banner').classList.remove('visible'), 3100); }

async function boot() {
  await new Promise(requestAnimationFrame);
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true });
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.16;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.info.autoReset = false;
  renderer.setClearColor('#050d17');
  renderer.domElement.setAttribute('aria-label', '3D battlefield. Select a defense with keys 1 to 5, then click an empty platform. Right-drag to orbit.');
  renderer.domElement.tabIndex = 0;
  $('viewport').appendChild(renderer.domElement);
  const camera = new THREE.PerspectiveCamera(43, innerWidth / innerHeight, .2, 360);
  camera.position.set(39, 36, 44);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1, 0); controls.enableDamping = true; controls.dampingFactor = .075;
  controls.minDistance = 6; controls.maxDistance = 110; controls.maxPolarAngle = Math.PI * .47; controls.minPolarAngle = .17;
  controls.mouseButtons = { LEFT: null, MIDDLE: THREE.MOUSE.PAN, RIGHT: THREE.MOUSE.ROTATE };
  controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
  controls.panSpeed = .8; controls.rotateSpeed = .65;

  const sky = document.createElement('canvas'); sky.width = 1024; sky.height = 512;
  const ctx = sky.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 512); gradient.addColorStop(0, '#466182'); gradient.addColorStop(.45, '#19384c'); gradient.addColorStop(.5, '#819dad'); gradient.addColorStop(.62, '#142b3c'); gradient.addColorStop(1, '#050912'); ctx.fillStyle = gradient; ctx.fillRect(0, 0, 1024, 512);
  ctx.fillStyle = '#bed7e0'; ctx.fillRect(135, 55, 90, 165); ctx.fillStyle = '#518393'; ctx.fillRect(710, 110, 190, 82);
  const env = new THREE.CanvasTexture(sky); env.mapping = THREE.EquirectangularReflectionMapping; env.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer), envTarget = pmrem.fromEquirectangular(env);
  scene.environment = envTarget.texture; scene.environmentIntensity = .65;
  const hemisphere = new THREE.HemisphereLight('#88cdec', '#12233a', 1.3); scene.add(hemisphere);
  const keyLight = new THREE.DirectionalLight('#c5eaff', 3.7); keyLight.position.set(-15, 36, 19); keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048); Object.assign(keyLight.shadow.camera, { left: -36, right: 36, top: 31, bottom: -31, near: .5, far: 95 }); keyLight.shadow.bias = -.0004; keyLight.shadow.normalBias = .045; scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight('#538eff', 2.2); rimLight.position.set(15, 18, -30); scene.add(rimLight);

  const target = new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType }); target.samples = 4;
  const composer = new EffectComposer(renderer, target); composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), .45, .5, 1.15); composer.addPass(bloom); composer.addPass(new OutputPass());
  const lens = new ShaderPass({ uniforms: { tDiffuse: { value: null }, amount: { value: .001 } }, vertexShader: 'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}', fragmentShader: `uniform sampler2D tDiffuse; uniform float amount; varying vec2 vUv;
    void main(){vec2 d=vUv-.5; vec2 shift=d*dot(d,d)*amount; vec3 c=texture2D(tDiffuse,vUv).rgb; c.r=texture2D(tDiffuse,vUv+shift).r;c.b=texture2D(tDiffuse,vUv-shift).b;float v=1.-smoothstep(.22,.83,length(d))*.28;gl_FragColor=vec4(c*v,1.);}` }); composer.addPass(lens);
  const effects = new Effects(scene), sound = new Soundscape(), photo = new PhotoMode(renderer, camera);
  let world, sectorIndex = 0, mode = 'menu', paused = false, speed = 1, buildType = null, selectedId = null, aimingNova = false, hover = null, ghost = null, cinematic = false, modalPaused = false, photoPreparing = false, savedPause = false;
  let frameTime = 0, uiTime = 0, fpsTime = 0, frames = 0, fps = 60, quality = 'ultra';
  const towerMeshes = new Map(), enemyMeshes = new Map(), healthBars = new Map();
  const links = new THREE.Group(); links.userData.noPhoto = true; scene.add(links);
  const range = new THREE.Group(); range.userData.noPhoto = true; scene.add(range);
  const pickGeometry = new THREE.PlaneGeometry(43.2, 28.8, 90, 60); pickGeometry.rotateX(-Math.PI / 2);
  const pickSurface = new THREE.Mesh(pickGeometry, new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide })); pickSurface.userData.noPhoto = true; scene.add(pickSurface);
  const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2(), pointerDown = { x: 0, y: 0, button: 0 };
  const barBackMat = new THREE.MeshBasicMaterial({ color: '#132333', transparent: true, opacity: .8, depthTest: false });
  const barHealthMat = new THREE.MeshBasicMaterial({ color: '#ff8b71', depthTest: false });
  const barShieldMat = new THREE.MeshBasicMaterial({ color: '#b89aff', depthTest: false });
  const barGeometry = new THREE.PlaneGeometry(1, .045);
  const sim = new Simulation({ onEvent: onEvent });

  function addTower(tower) {
    const previous = towerMeshes.get(tower.id); if (previous) scene.remove(previous);
    const model = createTower(tower.type, tower.level, tower.branch);
    model.position.set(tower.x, tower.y + .07, tower.z); model.userData.towerId = tower.id;
    scene.add(model); towerMeshes.set(tower.id, model); updateLinks();
  }
  function addEnemy(enemy) {
    const model = createEnemy(enemy.type); model.position.set(enemy.x, enemy.y + .1, enemy.z); model.rotation.y = enemy.angle;
    scene.add(model); enemyMeshes.set(enemy.id, model);
    const group = new THREE.Group(); group.userData.noPhoto = true;
    const background = new THREE.Mesh(barGeometry, barBackMat); background.scale.set(1.3, 2.3, 1); group.add(background);
    const hull = new THREE.Mesh(barGeometry, barHealthMat); hull.position.z = .01; group.add(hull);
    const shield = new THREE.Mesh(barGeometry, barShieldMat); shield.position.set(0, .07, .01); group.add(shield);
    if (enemy.isBoss) group.scale.setScalar(2.7);
    group.renderOrder = 20; scene.add(group); healthBars.set(enemy.id, { group, hull, shield });
  }
  function removeEnemy(enemy) { const m = enemyMeshes.get(enemy.id); if (m) scene.remove(m); enemyMeshes.delete(enemy.id); const bar = healthBars.get(enemy.id); if (bar) scene.remove(bar.group); healthBars.delete(enemy.id); }
  function onEvent(e) {
    if (e.type === 'build' || e.type === 'upgrade') {
      addTower(e.tower); effects.ring(new THREE.Vector3(e.tower.x, e.tower.y + .15, e.tower.z), TOWERS[e.tower.type].color, 2.1, .65);
      effects.burst(new THREE.Vector3(e.tower.x, e.tower.y + .4, e.tower.z), TOWERS[e.tower.type].color, 18, .55);
      if (mode === 'game') sound.play('build');
    }
    if (e.type === 'sell') { scene.remove(towerMeshes.get(e.tower.id)); towerMeshes.delete(e.tower.id); updateLinks(); }
    if (e.type === 'spawn') { addEnemy(e.enemy); if (e.enemy.isBoss && mode === 'game') { banner('RECOGNIZER INBOUND', 'Break its shield. Expose the reactor.'); sound.play('wave'); } }
    if (e.type === 'shot') {
      const model = towerMeshes.get(e.tower.id), from = vec(e.from), to = vec(e.to), color = TOWERS[e.weapon].color;
      if (model?.userData.turret) model.userData.turret.rotation.y = e.tower.angle;
      if (model?.userData.muzzle) { model.updateMatrixWorld(true); model.userData.muzzle.getWorldPosition(from); }
      if (e.weapon === 'arc') { let prev = from; for (const enemy of e.targets) { const next = new THREE.Vector3(enemy.x, enemy.y + .8, enemy.z); effects.lightning(prev, next, color); prev = next; } }
      else if (e.weapon === 'cryo') { effects.beam(from, to, color, .045, .17); effects.ring(to.clone().add(new THREE.Vector3(0, -.45, 0)), color, 2.9, .55); }
      else if (e.weapon === 'mortar') {
        let prev = from; for (let i = 1; i <= 12; i++) { const t = i / 12, next = from.clone().lerp(to, t); next.y += Math.sin(t * Math.PI) * 4; effects.beam(prev, next, color, .035, .2); prev = next; }
        effects.burst(to, color, 30, 1.1); effects.ring(to, color, 3.2);
      } else { effects.beam(from, to, color, e.weapon === 'rail' ? .065 : .028, e.weapon === 'rail' ? .2 : .08); effects.burst(to, color, 4, .35); }
      effects.flash(from, color, e.weapon === 'rail' ? 60 : 25); if (mode === 'game') sound.play(e.weapon === 'rail' ? 'rail' : 'shot');
    }
    if (e.type === 'kill') { effects.burst(new THREE.Vector3(e.enemy.x, e.enemy.y + .6, e.enemy.z), e.enemy.color, e.enemy.isBoss ? 130 : 16, e.enemy.isBoss ? 2.5 : .65); removeEnemy(e.enemy); if (mode === 'game') sound.play('kill'); }
    if (e.type === 'leak') { effects.ring(new THREE.Vector3(e.enemy.x, e.enemy.y + .5, e.enemy.z), '#ff5e52', 5); removeEnemy(e.enemy); if (mode === 'game') toast(`Core breach · ${e.enemy.leak} integrity lost`); }
    if (e.type === 'wave' && mode === 'game') { banner(`WAVE ${String(e.wave).padStart(2, '0')}`, e.wave % 5 === 0 ? 'Heavy signature detected. Ready your rail weapons.' : 'Hostile programs have entered the sector.'); sound.play('wave'); }
    if (e.type === 'waveClear' && mode === 'game') { banner('SECTOR STABILIZED', `Wave ${e.wave} cleared · +${e.reward} credits`); }
    if (e.type === 'ability') {
      if (e.ability === 'nova') {
        const p = new THREE.Vector3(e.x, sim.groundHeight(e.x, e.z) + .3, e.z);
        effects.ring(p, '#efffff', 8.5, 1.8); effects.ring(p, '#67eaff', 10, 1.5); effects.burst(p.clone().add(new THREE.Vector3(0, 2, 0)), '#8defff', 190, 3);
        effects.beam(p, p.clone().add(new THREE.Vector3(0, 45, 0)), '#bafcff', .42, .8); sound.play('nova');
      } else { sim.towers.forEach(t => effects.ring(new THREE.Vector3(t.x, t.y + .1, t.z), '#ffcb67', 2.6, .9)); banner('GRID OVERDRIVE', 'All defense systems accelerated for 9 seconds'); sound.play('wave'); }
    }
    if (e.type === 'bossPhase' && mode === 'game') { banner(e.phase === 'exposed' ? 'ARMOR BREACHED' : 'RECOGNIZER ENRAGED', e.phase === 'exposed' ? 'Reactor exposed. Concentrate fire.' : 'The enemy is accelerating toward your core.'); effects.burst(new THREE.Vector3(e.enemy.x, e.enemy.y + 2, e.enemy.z), '#ff9b4a', 50, 1.5); }
    if ((e.type === 'victory' || e.type === 'defeat') && mode === 'game') showResult(e.type);
  }

  function clearModels() {
    towerMeshes.forEach(m => scene.remove(m)); enemyMeshes.forEach(m => scene.remove(m)); healthBars.forEach(b => scene.remove(b.group)); towerMeshes.clear(); enemyMeshes.clear(); healthBars.clear(); effects.clear(); clearGroup(links); clearGroup(range); clearGhost();
  }
  function clearGroup(group) { for (const o of [...group.children]) { group.remove(o); o.geometry?.dispose(); if (o.material) o.material.dispose(); } }
  function loadSector(index, isDemo = false) {
    clearModels(); world?.dispose(); sim.start(index); sectorIndex = index;
    world = createWorld(scene, renderer, index);
    const a = pickGeometry.attributes.position;
    for (let i = 0; i < a.count; i++) a.setY(i, sim.groundHeight(a.getX(i), a.getZ(i)) + .1); a.needsUpdate = true; pickGeometry.computeVertexNormals(); pickGeometry.computeBoundingSphere();
    selectedId = null; buildType = null; hover = null; aimingNova = false; $('selection-panel').hidden = true;
    $('sector-name').textContent = SECTORS[index].name;
    if (isDemo) {
      sim.credits = 10000;
      const placements = [[5,4,'pulse'],[5,6,'arc'],[8,5,'cryo'],[12,4,'rail'],[12,7,'mortar'],[2,6,'pulse'],[15,4,'rail']];
      placements.forEach(([c,r,type]) => { const t = sim.build(type,c,r); if(t.ok && ['rail','arc'].includes(type)) sim.upgrade(t.tower.id,'power'); });
      sim.wave = 5; sim.startWave();
      // Begin with a living battlefield behind the title, not an empty board.
      for (let i = 0; i < 60; i++) sim.update(.1);
    }
    updateHUD(); applyQuality(quality);
  }
  function resetCamera(forMenu = mode === 'menu') {
    camera.position.set(forMenu ? 46 : 34, forMenu ? 30 : 40, forMenu ? 44 : 43); controls.target.set(0, 1, 0); controls.update();
    if (forMenu && innerWidth > 800) camera.setViewOffset(innerWidth, innerHeight, -innerWidth * .19, 0, innerWidth, innerHeight); else camera.clearViewOffset();
    camera.updateProjectionMatrix(); photo.updateCamera();
  }
  function startGame(index = sectorIndex) {
    if(photo.active||photoPreparing)leavePhoto();
    sound.start(); mode = 'game'; paused = false; modalPaused = false; speed = 1; cinematic = false;
    $('hero').hidden = true; $('hud').hidden = false; $('sector-modal').hidden = true; $('result-modal').hidden = true; $('settings-modal').hidden = true;
    loadSector(index); resetCamera(false); setBuild('pulse');
    toast('Choose an empty socket to deploy. Link different towers for faster fire.'); updateHUD();
  }
  function showMenu() {
    if (photo.active) leavePhoto(); mode = 'menu'; paused = false; modalPaused = false; cinematic = false;
    $('hud').hidden = true; $('hero').hidden = false; $('result-modal').hidden = true; $('settings-modal').hidden = true;
    loadSector(sectorIndex, true); resetCamera(true);
  }
  function setBuild(type) {
    if (photo.active || photoPreparing) return;
    buildType = type; selectedId = null; aimingNova = false; $('selection-panel').hidden = true;
    clearGhost(); clearGroup(range);
    document.querySelectorAll('[data-tower]').forEach(b => b.classList.toggle('selected', b.dataset.tower === type));
    if (type) {
      ghost = createTower(type); ghost.userData.noPhoto = true;
      ghost.traverse(o => { if (o.isMesh) { o.material = o.material.clone(); o.material.transparent = true; o.material.opacity = .36; o.material.depthWrite = false; o.castShadow = false; } });
      ghost.visible = false; scene.add(ghost);
    }
    updateHint(); updateHover();
  }
  function clearGhost() { if (ghost) { scene.remove(ghost); ghost.traverse(o => { if(o.isMesh) o.material.dispose(); }); ghost = null; } }
  function drawRange(x, z, radius, color) {
    clearGroup(range);
    const points = [];
    for (let i = 0; i <= 120; i++) { const angle = i / 120 * Math.PI * 2, px = x + Math.cos(angle) * radius, pz = z + Math.sin(angle) * radius; points.push(new THREE.Vector3(px, sim.groundHeight(px, pz) + .15, pz)); }
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineDashedMaterial({ color, dashSize: .25, gapSize: .13, transparent: true, opacity: .75, depthTest: false })); line.computeLineDistances(); line.renderOrder = 5; range.add(line);
    const corners = [[-1,-1],[1,-1],[1,1],[-1,1],[-1,-1]].map(([a,b]) => new THREE.Vector3(x+a*1.12,sim.groundHeight(x+a*1.12,z+b*1.12)+.15,z+b*1.12));
    const tile = new THREE.Line(new THREE.BufferGeometry().setFromPoints(corners), new THREE.LineBasicMaterial({ color, transparent: true, opacity: .95, depthTest: false })); range.add(tile);
  }
  function updateHover() {
    if (mode !== 'game' || photo.active) return;
    if (ghost) ghost.visible = !!hover;
    if (!hover) { if (!selectedId) clearGroup(range); return; }
    if (aimingNova) { drawRange(hover.x, hover.z, 8.5, '#dcfdff'); return; }
    if (buildType) {
      const {col,row} = sim.worldToCell(hover.x,hover.z), p = sim.cellToWorld(col,row), valid = sim.canBuild(col,row) && sim.credits >= TOWERS[buildType].cost;
      ghost.position.set(p.x,sim.groundHeight(p.x,p.z)+.08,p.z); ghost.visible = col>=0&&row>=0&&col<18&&row<12;
      drawRange(p.x,p.z,TOWERS[buildType].range,valid ? TOWERS[buildType].color : '#ff5b64');
    }
  }
  function updateLinks() {
    clearGroup(links);
    for (let i = 0; i < sim.towers.length; i++) for (let j = i + 1; j < sim.towers.length; j++) {
      const a = sim.towers[i], b = sim.towers[j];
      if (a.type === b.type || Math.hypot(a.x-b.x,a.z-b.z)>4.01) continue;
      const points = [];
      for (let k = 0; k <= 15; k++) { const t = k/15,x=a.x+(b.x-a.x)*t,z=a.z+(b.z-a.z)*t; points.push(new THREE.Vector3(x,sim.groundHeight(x,z)+.17+Math.sin(t*Math.PI)*.24,z)); }
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineDashedMaterial({color:'#b5edff',transparent:true,opacity:.5,dashSize:.13,gapSize:.07})); line.computeLineDistances();links.add(line);
    }
  }
  function selectTower(tower) {
    setBuild(null); selectedId = tower.id; $('selection-panel').hidden = false;
    drawRange(tower.x,tower.z,sim.getTowerStats(tower).range,TOWERS[tower.type].color); updateSelection();
  }
  function inspectTower(){
    const tower=sim.towers.find(t=>t.id===selectedId);if(!tower)return;
    cinematic=false;camera.clearViewOffset();controls.target.set(tower.x,tower.y+1.1,tower.z);
    camera.position.set(tower.x+8,tower.y+7,tower.z+10);controls.update();
    toast('Inspection view · Right-drag to orbit · Scroll closer · F returns to the full battlefield');
  }
  function updateSelection() {
    const tower = sim.towers.find(t => t.id===selectedId); if (!tower) { $('selection-panel').hidden=true;return; }
    const stats=sim.getTowerStats(tower);
    $('selected-name').textContent=TOWERS[tower.type].name; $('selected-level').textContent=`Evolution ${tower.level} / 3${tower.branch ? ' · '+tower.branch : ''}`;
    $('selected-description').textContent=TOWERS[tower.type].description;
    $('selected-stats').innerHTML=`<div><span>Damage</span><strong>${Math.round(stats.damage)}</strong></div><div><span>Range</span><strong>${stats.range.toFixed(1)} m</strong></div><div><span>Fire rate</span><strong>${(1/stats.interval).toFixed(1)} /s</strong></div><div><span>Eliminations</span><strong>${tower.kills}</strong></div>`;
    $('link-status').textContent=stats.links ? `${Math.min(stats.links,3)} active links · +${Math.min(stats.links,3)*10}% fire rate` : 'Place a different tower nearby to link +10% fire rate.';
    const max=tower.level>=3;
    $('upgrade-power').textContent=max?'Fully evolved':tower.branch?`Evolve to level 3 · ${stats.upgradeCost}`:`Power evolution · ${stats.upgradeCost}`;
    $('upgrade-utility').textContent=`Utility evolution · ${stats.upgradeCost}`;
    $('upgrade-power').disabled=max || sim.credits<stats.upgradeCost;
    $('upgrade-utility').disabled=max || sim.credits<stats.upgradeCost;
    $('upgrade-utility').hidden=!!tower.branch||max;
    $('upgrade-power').title='Increase damage. Later upgrades follow this branch.';
    $('upgrade-utility').title='Increase range and improve chains, splash, slowing, or piercing.';
    $('sell-button').textContent=`Dismantle · +${stats.sellValue}`;
  }
  function updateHint() {
    $('hint').textContent=aimingNova?'Select a target for orbital nova · Esc to cancel':buildType?`${TOWERS[buildType].name} · ${TOWERS[buildType].cost} credits · Click an empty socket · Esc to cancel`:'1–5 deploy · Right-drag orbit · Scroll zoom · Space wave / pause · Q nova · E overdrive · F reset view';
    renderer.domElement.style.cursor=buildType||aimingNova?'crosshair':'grab';
  }
  function updateHUD() {
    $('credits-value').textContent=money(sim.credits);$('wave-value').textContent=`${String(sim.wave).padStart(2,'0')} / ${sim.totalWaves}`;
    $('integrity-value').textContent=`${sim.integrity}%`;$('integrity-bar').style.width=`${sim.integrity}%`;$('integrity-bar').style.background=sim.integrity<35?'#ff6b5e':'';
    $('kills-value').textContent=money(sim.kills);$('pause-button').innerHTML=paused?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7Z"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>';$('pause-button').setAttribute('aria-label',paused?'Resume battle':'Pause battle');$('pause-button').setAttribute('aria-pressed',String(paused));$('speed-button').textContent=`${speed}×`;
    const next=sim.wave+1;
    $('wave-title').textContent=sim.state==='wave'?(paused?'Battle paused':`Wave ${sim.wave} in progress`):'Prepare your defenses';
    $('wave-description').textContent=sim.state==='wave'?`${sim.enemies.length} hostile programs on the route${sim.overdriveRemaining>0?' · OVERDRIVE ACTIVE':''}`:sim.wave===0?'Deploy towers beside the illuminated route. Different systems link when placed together.':`Next: wave ${next}. Reinforce weak points and evolve your towers.`;
    const isBoss=next%5===0||next===sim.totalWaves;
    $('wave-preview').textContent=sim.state==='wave'?(sim.enemies.some(e=>e.isBoss)?'RECOGNIZER · HEAVY SIGNATURE':'Protect the reactor at the end of the route.'):isBoss?'Incoming: Recognizer + armored escort':next<2?'Incoming: light cycles':next<3?'Incoming: light cycles + shielded drones':next<4?'Incoming: armored walkers':'Incoming: mixed formation + shield carriers';
    $('start-wave-button').textContent=sim.state==='wave'?'Wave in progress':`Launch wave ${next}  [Space]`;$('start-wave-button').disabled=sim.state!=='ready'||photo.active;
    document.querySelectorAll('[data-tower]').forEach(button=>{const type=button.dataset.tower;button.classList.toggle('unaffordable',sim.credits<TOWERS[type].cost);button.querySelector('[data-cost]').textContent=TOWERS[type].cost;button.querySelector('.tower-name').textContent=TOWERS[type].name;});
    $('nova-cooldown').textContent=sim.cooldowns.nova>0?`${Math.ceil(sim.cooldowns.nova)}s`:'Ready';
    $('overdrive-cooldown').textContent=sim.overdriveRemaining>0?`${Math.ceil(sim.overdriveRemaining)}s active`:sim.cooldowns.overdrive>0?`${Math.ceil(sim.cooldowns.overdrive)}s`:'Ready';
    $('nova-button').disabled=sim.state!=='wave'||sim.cooldowns.nova>0;$('overdrive-button').disabled=sim.state!=='wave'||sim.cooldowns.overdrive>0;
    $('nova-button').classList.toggle('selected',aimingNova);
    if(selectedId)updateSelection();
  }
  function action(result) { if(!result.ok)toast(result.reason);updateHUD();updateHover();return result.ok; }
  function togglePause(){if(mode!=='game'||photo.active||photoPreparing)return;paused=!paused;updateHUD();toast(paused?'Battle paused. Plan your next move.':'Battle resumed.');}
  function openModal(id){modalPaused=true;$(id).hidden=false;}
  function closeModal(id){$(id).hidden=true;modalPaused=false;}
  function armNova(){if(sim.state!=='wave'||sim.cooldowns.nova>0)return;setBuild(null);aimingNova=true;updateHint();updateHover();updateHUD();toast('Click the battlefield to call down orbital nova.');}
  function showResult(result){
    setBuild(null);paused=false;$('selection-panel').hidden=true;
    $('result-title').textContent=result==='victory'?'The light survives.':'End of line.';
    $('result-description').textContent=result==='victory'?`${SECTORS[sectorIndex].name} secured. Your defense held against every hostile program.`:'The reactor has fallen. Rebuild your network and hold the route.';
    $('result-stats').innerHTML=`<div><strong>${money(sim.score)}</strong><span>Score</span></div><div><strong>${sim.kills}</strong><span>Eliminations</span></div><div><strong>${sim.integrity}%</strong><span>Core integrity</span></div>`;
    $('next-sector-button').hidden=result!=='victory'||sectorIndex===2;
    $('result-modal').hidden=false;
    if(result==='victory')try{const key=`end-of-line-best-${sectorIndex}`;localStorage.setItem(key,String(Math.max(sim.score,Number(localStorage.getItem(key))||0)));}catch{}
  }
  function applyQuality(value){
    quality=value;const ratio=Math.min(devicePixelRatio||1,value==='ultra'?1.75:value==='high'?1.25:1);
    renderer.setPixelRatio(ratio);renderer.setSize(innerWidth,innerHeight);composer.setPixelRatio(ratio);composer.setSize(innerWidth,innerHeight);
    renderer.shadowMap.enabled=value!=='performance';const size=value==='ultra'?4096:2048;
    if(keyLight.shadow.mapSize.x!==size){keyLight.shadow.mapSize.set(size,size);keyLight.shadow.map?.dispose();keyLight.shadow.map=null;}
    if(world){world.abyss.visible=value!=='performance';const resolution=value==='ultra'?1536:768;world.abyss.getRenderTarget().setSize(resolution,resolution);}
    target.samples=value==='ultra'?4:2;
    try{localStorage.setItem('end-of-line-quality',value);}catch{}
  }
  async function enterPhoto(){
    if(photo.active||photoPreparing)return;
    if(!$('sector-modal').hidden||!$('result-modal').hidden){toast('Close the current menu before entering photo mode.');return;}
    photoPreparing=true;savedPause=paused;paused=true;modalPaused=false;cinematic=false;
    $('settings-modal').hidden=true;$('hero').hidden=true;$('hud').hidden=true;$('photo-hud').hidden=false;$('photo-samples').textContent='Preparing traced geometry…';
    range.visible=false;links.visible=false;if(ghost)ghost.visible=false;
    try{await photo.enter(scene);photoPreparing=false;if(photo.active)toast('Path tracing active. Hold the camera still to converge. Right-drag to orbit.');}
    catch(error){console.error('Photo mode:',error);photoPreparing=false;leavePhoto();toast('Path tracing could not initialize on this browser. Real-time rendering restored.');}
  }
  function leavePhoto(){photo.exit();photoPreparing=false;paused=savedPause;range.visible=true;links.visible=true;$('photo-hud').hidden=true;$('hud').hidden=mode!=='game';$('hero').hidden=mode!=='menu';updateHover();}

  function pick(event){
    const r=renderer.domElement.getBoundingClientRect();pointer.set((event.clientX-r.left)/r.width*2-1,-(event.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);
    const hits=raycaster.intersectObject(pickSurface);return hits[0]?.point||null;
  }
  renderer.domElement.addEventListener('pointerdown',event=>{pointerDown.x=event.clientX;pointerDown.y=event.clientY;pointerDown.button=event.button;});
  renderer.domElement.addEventListener('pointermove',event=>{hover=pick(event);updateHover();});
  renderer.domElement.addEventListener('pointerleave',()=>{hover=null;updateHover();});
  renderer.domElement.addEventListener('pointerup',event=>{
    if(mode!=='game'||photo.active||photoPreparing||modalPaused||pointerDown.button!==0||Math.hypot(event.clientX-pointerDown.x,event.clientY-pointerDown.y)>6)return;
    const p=pick(event);if(!p)return;
    if(aimingNova){action(sim.ability('nova',p.x,p.z));aimingNova=false;clearGroup(range);updateHint();return;}
    const {col,row}=sim.worldToCell(p.x,p.z),tower=sim.towers.find(t=>t.col===col&&t.row===row);
    if(tower){selectTower(tower);return;}
    if(buildType){action(sim.build(buildType,col,row));return;}
    setBuild(null);
  });
  renderer.domElement.addEventListener('contextmenu',event=>event.preventDefault());
  controls.addEventListener('change',()=>{if(photo.active)photo.updateCamera();});
  $('start-button').addEventListener('click',()=>startGame());
  $('sector-button').addEventListener('click',()=>openModal('sector-modal'));
  $('sector-modal-close').addEventListener('click',()=>closeModal('sector-modal'));
  document.querySelectorAll('[data-sector]').forEach(b=>b.addEventListener('click',()=>startGame(Number(b.dataset.sector))));
  $('menu-button').addEventListener('click',showMenu);
  $('start-wave-button').addEventListener('click',()=>{paused=false;action(sim.startWave());});
  document.querySelectorAll('[data-tower]').forEach(b=>b.addEventListener('click',()=>{sound.start();setBuild(buildType===b.dataset.tower?null:b.dataset.tower);}));
  $('pause-button').addEventListener('click',togglePause);$('speed-button').addEventListener('click',()=>{speed=speed===1?2:speed===2?3:1;updateHUD();});
  $('sound-button').addEventListener('click',()=>{sound.start();const enabled=sound.toggle();$('sound-button').style.opacity=enabled?'1':'.45';$('sound-button').title=enabled?'Sound on':'Sound off';$('sound-button').setAttribute('aria-pressed',String(enabled));});
  $('nova-button').addEventListener('click',armNova);$('overdrive-button').addEventListener('click',()=>action(sim.ability('overdrive')));
  $('close-selection').addEventListener('click',()=>setBuild(null));
  $('inspect-tower-button').addEventListener('click',inspectTower);
  $('upgrade-power').addEventListener('click',()=>{const t=sim.towers.find(t=>t.id===selectedId);if(t){action(sim.upgrade(t.id,t.branch||'power'));selectTower(t);}});
  $('upgrade-utility').addEventListener('click',()=>{const t=sim.towers.find(t=>t.id===selectedId);if(t){action(sim.upgrade(t.id,'utility'));selectTower(t);}});
  $('sell-button').addEventListener('click',()=>{action(sim.sell(selectedId));setBuild(null);});
  $('settings-button').addEventListener('click',()=>openModal('settings-modal'));$('settings-close').addEventListener('click',()=>closeModal('settings-modal'));
  $('quality-select').addEventListener('change',e=>applyQuality(e.target.value));$('bloom-input').addEventListener('input',e=>bloom.strength=Number(e.target.value));
  $('photo-button').addEventListener('click',enterPhoto);$('photo-exit').addEventListener('click',leavePhoto);
  $('photo-save').addEventListener('click',()=>{if(!photo.active)return;try{photo.render();renderer.domElement.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`end-of-line-${SECTORS[sectorIndex].id}-${Math.floor(photo.samples)}spp.png`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});}catch(error){console.error('Photo export:',error);leavePhoto();toast('Photo export failed. Real-time rendering restored.');}});
  $('reset-camera-button').addEventListener('click',()=>resetCamera());
  $('retry-button').addEventListener('click',()=>startGame());$('next-sector-button').addEventListener('click',()=>startGame((sectorIndex+1)%3));$('result-menu-button').addEventListener('click',showMenu);
  document.addEventListener('keydown',event=>{
    if(['INPUT','SELECT','TEXTAREA'].includes(event.target.tagName))return;
    if(event.key==='Escape'){
      if(photo.active||photoPreparing){leavePhoto();return;}
      for(const id of ['settings-modal','sector-modal'])if(!$(id).hidden){closeModal(id);return;}
      if(buildType||selectedId||aimingNova)setBuild(null);else if(mode==='game')togglePause();return;
    }
    if(!event.repeat&&event.key.toLowerCase()==='p'){event.preventDefault();enterPhoto();return;}
    if(photo.active||photoPreparing||modalPaused)return;
    if(event.key.toLowerCase()==='f'){resetCamera();return;}
    if(event.key.toLowerCase()==='r'&&mode==='game'){inspectTower();return;}
    if(mode!=='game')return;
    if(event.code==='Space'){event.preventDefault();if(!event.repeat){if(sim.state==='ready'){paused=false;action(sim.startWave());}else togglePause();}}
    if(towerKeys[Number(event.key)-1])setBuild(towerKeys[Number(event.key)-1]);
    if(event.key.toLowerCase()==='q')armNova();
    if(event.key.toLowerCase()==='e')action(sim.ability('overdrive'));
    if(event.key.toLowerCase()==='c'){cinematic=!cinematic;toast(cinematic?'Cinematic orbit enabled. Press C to stop.':'Tactical camera restored.');}
  });
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&mode==='game'&&!photo.active){paused=true;updateHUD();}});
  window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();applyQuality(quality);if(mode==='menu'&&innerWidth>800)camera.setViewOffset(innerWidth,innerHeight,-innerWidth*.19,0,innerWidth,innerHeight);else camera.clearViewOffset();photo.updateCamera();});
  renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();paused=true;$('error-panel').hidden=false;$('error-message').textContent='The graphics context was interrupted. Reload this page to restore the battlefield.';});

  function animate(now){
    requestAnimationFrame(animate);
    const elapsed=(now-frameTime)/1000||.016,dt=Math.min(.05,elapsed);frameTime=now;
    if(document.hidden)return;
    controls.autoRotate=(mode==='menu'||cinematic)&&!photo.active&&!photoPreparing&&!modalPaused;controls.autoRotateSpeed=mode==='menu'?.13:.55;
    controls.update(dt);
    if(photoPreparing)return;
    if(photo.active){try{photo.render();$('photo-samples').textContent=photo.isCompiling?'Compiling path-tracing shaders…':`${Math.floor(photo.samples)} samples · 5 light bounces · hold camera still`;}catch(error){console.error('Path tracing failed:',error);leavePhoto();toast('Path tracing interrupted. Real-time rendering restored.');}return;}
    const advancing=!paused&&!modalPaused;
    if(advancing)sim.update(dt*(mode==='menu'?1:speed));
    world.update(now/1000,dt,sim.integrity);effects.update(dt);
    if(mode==='menu'&&(sim.state==='ready'||sim.state==='defeat'||sim.state==='victory')){
      if(sim.state!=='ready'){loadSector(sectorIndex,true);}else{sim.integrity=100;sim.startWave();}
    }
    for(const tower of sim.towers){const model=towerMeshes.get(tower.id);if(!model)continue;if(model.userData.turret)model.userData.turret.rotation.y=tower.angle;
      if(advancing)for(const part of model.userData.rotors||[])part.rotation[part.userData.axis||'y']+=dt*(part.userData.speed||.3)*(sim.overdriveRemaining>0?2:1);
    }
    for(const enemy of sim.enemies){const model=enemyMeshes.get(enemy.id);if(!model)continue;model.position.set(enemy.x,enemy.y+.1,enemy.z);
      const dx=Math.sin(enemy.angle)*.3,dz=Math.cos(enemy.angle)*.3;
      const slope=enemy.type==='drone'?0:Math.atan2(sim.groundHeight(enemy.x+dx,enemy.z+dz)-sim.groundHeight(enemy.x-dx,enemy.z-dz),.6);
      model.rotation.set(-slope,enemy.angle,0,'YXZ');
      if(enemy.type==='drone')model.position.y+=Math.sin(sim.time*4+enemy.id)*.1;
      if(advancing)for(const part of model.userData.rotors||[])part.rotation[part.userData.axis||'y']+=dt*(part.userData.speed||2);
      if(model.userData.shield)model.userData.shield.visible=enemy.shield>0;
      if(model.userData.armorPanels)model.userData.armorPanels.visible=enemy.phase===1;
      if(model.userData.exposedCore){model.userData.exposedCore.visible=enemy.phase>1;model.userData.exposedCore.scale.setScalar(1+Math.sin(sim.time*(enemy.phase===3?14:5))*.07);}
      const bar=healthBars.get(enemy.id);if(bar){bar.group.position.copy(model.position).add(new THREE.Vector3(0,enemy.isBoss?4.8:enemy.type==='cycle'?1.25:2.3,0));bar.group.quaternion.copy(camera.quaternion);const fraction=Math.max(0,enemy.hp/enemy.maxHp);bar.hull.scale.x=fraction;bar.hull.position.x=(fraction-1)*.5;bar.shield.visible=enemy.shield>0;bar.shield.scale.x=enemy.maxShield?enemy.shield/enemy.maxShield:0;bar.group.visible=mode==='game'&&(enemy.hp<enemy.maxHp||enemy.isBoss||enemy.shield>0);}
      if(advancing&&enemy.type==='cycle'&&Math.random()<dt*20){const rear=new THREE.Vector3(0,.18,-.8).applyAxisAngle(new THREE.Vector3(0,1,0),enemy.angle).add(model.position);const rear2=rear.clone().add(new THREE.Vector3(-Math.sin(enemy.angle)*.7,0,-Math.cos(enemy.angle)*.7));effects.beam(rear,rear2,'#ff7844',.025,.24);}
    }
    renderer.info.reset();composer.render(dt);
    uiTime+=dt;fpsTime+=elapsed;frames++;
    if(uiTime>.15){uiTime=0;if(mode==='game')updateHUD();}
    if(fpsTime>1){fps=frames/fpsTime;frames=0;fpsTime=0;}
  }
  try{const saved=localStorage.getItem('end-of-line-quality');if(['ultra','high','performance'].includes(saved))quality=saved;}catch{}
  $('quality-select').value=quality;$('bloom-input').value=String(bloom.strength);
  loadSector(0,true);resetCamera(true);$('loading').hidden=true;
  updateHint();requestAnimationFrame(animate);
  // Read-only diagnostics support reproducible input and rendering verification.
  window.EOL={snapshot:()=>({...sim.getSnapshot(),mode,paused,selectedId,buildType,aimingNova,quality,photo:photo.active,samples:photo.samples,fps,drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles}),projectCell:(col,row)=>{const p=sim.cellToWorld(col,row);const v=new THREE.Vector3(p.x,sim.groundHeight(p.x,p.z)+.1,p.z).project(camera);return{x:(v.x+1)*innerWidth/2,y:(1-v.y)*innerHeight/2};}};
}

boot().catch(error=>{console.error('END OF LINE initialization failed',error);if($('loading'))$('loading').hidden=true;if($('error-panel')){$('error-panel').hidden=false;$('error-message').textContent=`The 3D renderer could not start: ${error.message}. Use a current Chrome or Edge browser with graphics acceleration enabled.`;}});
