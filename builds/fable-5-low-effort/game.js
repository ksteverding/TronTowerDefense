/* ============================================================
   GRID DEFENSE — TRON-inspired tower defense
   ============================================================ */
'use strict';

const CELL = 64, COLS = 15, ROWS = 10;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/* ---------- utils ---------- */
const $ = id => document.getElementById(id);
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const lerp = (a, b, t) => a + (b - a) * t;
const rand = (a, b) => a + Math.random() * (b - a);

/* ---------- levels (grid paths defined as waypoint cell coords) ---------- */
const LEVELS = [
  {
    name: 'SECTOR 01 — OUTLANDS',
    diff: 'EASY',
    desc: 'A single winding data-path. Ideal training grounds.',
    startEnergy: 220, lives: 20, waves: 8,
    path: [[-1,2],[3,2],[3,7],[7,7],[7,2],[11,2],[11,6],[15,6]],
  },
  {
    name: 'SECTOR 02 — THE CIRCUIT',
    diff: 'MEDIUM',
    desc: 'A serpentine route. Programs move fast here.',
    startEnergy: 260, lives: 15, waves: 10,
    path: [[-1,1],[13,1],[13,4],[1,4],[1,8],[15,8]],
  },
  {
    name: 'SECTOR 03 — CORE ACCESS',
    diff: 'HARD',
    desc: 'Short path to the core. Heavies inbound. Good luck, program.',
    startEnergy: 300, lives: 10, waves: 12,
    path: [[-1,5],[2,5],[2,2],[6,2],[6,8],[10,8],[10,3],[13,3],[13,6],[15,6]],
  },
];

/* ---------- tower definitions ---------- */
const TOWERS = {
  beam: {
    name: 'BEAM', color: '#00f6ff', cost: 60,
    range: 150, dmg: 12, rate: 0.35, proj: 'beam',
    desc: 'Rapid light-beam emitter',
  },
  pulse: {
    name: 'PULSE', color: '#ff9d00', cost: 110,
    range: 130, dmg: 26, rate: 1.1, proj: 'pulse', splash: 60,
    desc: 'Explosive energy pulses',
  },
  tesla: {
    name: 'TESLA', color: '#b967ff', cost: 160,
    range: 120, dmg: 18, rate: 0.8, proj: 'chain', chains: 3,
    desc: 'Arcs between programs',
  },
  disc: {
    name: 'DISC', color: '#ff2975', cost: 200,
    range: 280, dmg: 70, rate: 1.8, proj: 'disc',
    desc: 'Long-range identity disc',
  },
};

/* ---------- enemy definitions ---------- */
const ENEMIES = {
  bit:     { name: 'BIT',     hp: 40,  speed: 70,  reward: 8,  color: '#00f6ff', size: 10, shape: 'bit' },
  cycle:   { name: 'CYCLE',   hp: 65,  speed: 120, reward: 12, color: '#ffe94a', size: 12, shape: 'cycle' },
  tank:    { name: 'TANK',    hp: 320, speed: 38,  reward: 30, color: '#ff9d00', size: 17, shape: 'tank' },
  seeker:  { name: 'SEEKER',  hp: 110, speed: 85,  reward: 16, color: '#b967ff', size: 12, shape: 'seeker' },
  guardian:{ name: 'GUARDIAN',hp: 1400,speed: 30,  reward: 150,color: '#ff2975', size: 24, shape: 'guardian' },
};

/* wave generator: returns list of {type, count, gap} groups for wave n */
function waveSpec(levelIdx, n) {
  const groups = [];
  const s = 1 + levelIdx * 0.35;                 // level difficulty scale
  const hpScale = (1 + n * 0.18) * s;
  groups.push({ type: 'bit', count: 5 + n * 2, gap: 0.8 });
  if (n >= 2) groups.push({ type: 'cycle', count: n, gap: 0.55 });
  if (n >= 3) groups.push({ type: 'seeker', count: Math.floor(n / 1.5), gap: 0.9 });
  if (n >= 4) groups.push({ type: 'tank', count: Math.floor(n / 2), gap: 1.6 });
  if (n % 6 === 0) groups.push({ type: 'guardian', count: Math.floor(n / 6), gap: 3 });
  return { groups, hpScale };
}

/* ============================================================
   GAME STATE
   ============================================================ */
const G = {
  levelIdx: 0, level: null,
  pathPx: [], pathCells: new Set(),
  towers: [], enemies: [], projectiles: [], particles: [], floats: [],
  energy: 0, lives: 0, wave: 0, waveActive: false,
  spawnQueue: [], spawnTimer: 0,
  selectedBuild: null, selectedTower: null,
  hoverCell: null,
  speed: 1, running: false, over: false,
  kills: 0,
  unlocked: parseInt(localStorage.getItem('gd_unlocked') || '1'),
  time: 0,
};

/* expand waypoints to pixel path + occupied cells */
function buildPath(level) {
  G.pathPx = level.path.map(([c, r]) => ({ x: c * CELL + CELL / 2, y: r * CELL + CELL / 2 }));
  G.pathCells = new Set();
  for (let i = 0; i < level.path.length - 1; i++) {
    let [c1, r1] = level.path[i], [c2, r2] = level.path[i + 1];
    const dc = Math.sign(c2 - c1), dr = Math.sign(r2 - r1);
    let c = c1, r = r1;
    while (true) {
      if (c >= 0 && c < COLS && r >= 0 && r < ROWS) G.pathCells.add(c + ',' + r);
      if (c === c2 && r === r2) break;
      c += dc; r += dr;
    }
  }
}

/* ============================================================
   SCREEN MANAGEMENT
   ============================================================ */
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('visible'));
  $(id).classList.add('visible');
}

$('splash').addEventListener('click', () => show('menu'));
$('btn-hub').addEventListener('click', (ev) => ev.stopPropagation());
$('btn-play').onclick = () => { renderLevelCards(); show('levelselect'); };
$('btn-howto').onclick = () => show('howto');
$('btn-back-menu').onclick = () => show('menu');
$('btn-back-howto').onclick = () => show('menu');
$('btn-quit').onclick = () => { G.running = false; show('menu'); };
$('btn-end-menu').onclick = () => show('menu');
$('btn-retry').onclick = () => startLevel(G.levelIdx);
$('btn-next').onclick = () => startLevel(G.levelIdx + 1);
$('btn-speed').onclick = () => {
  G.speed = G.speed === 1 ? 2 : G.speed === 2 ? 3 : 1;
  $('btn-speed').textContent = '×' + G.speed;
};
$('btn-startwave').onclick = startWave;

/* level select cards with mini path preview */
function renderLevelCards() {
  const wrap = $('level-cards');
  wrap.innerHTML = '';
  LEVELS.forEach((lv, i) => {
    const locked = i + 1 > G.unlocked;
    const card = document.createElement('div');
    card.className = 'level-card' + (locked ? ' locked' : '');
    card.innerHTML = `<h3>${locked ? '🔒 ' : ''}SECTOR 0${i + 1}</h3>
      <div class="lc-diff">${lv.diff} // ${lv.waves} WAVES</div>
      <canvas width="188" height="125"></canvas>
      <div class="lc-desc">${lv.desc}</div>`;
    const mc = card.querySelector('canvas').getContext('2d');
    mc.fillStyle = '#02090e'; mc.fillRect(0, 0, 188, 125);
    mc.strokeStyle = 'rgba(0,246,255,0.15)';
    for (let x = 0; x <= COLS; x++) { mc.beginPath(); mc.moveTo(x * 188 / COLS, 0); mc.lineTo(x * 188 / COLS, 125); mc.stroke(); }
    for (let y = 0; y <= ROWS; y++) { mc.beginPath(); mc.moveTo(0, y * 125 / ROWS); mc.lineTo(188, y * 125 / ROWS); mc.stroke(); }
    mc.strokeStyle = '#00f6ff'; mc.lineWidth = 3; mc.shadowColor = '#00f6ff'; mc.shadowBlur = 6;
    mc.beginPath();
    lv.path.forEach(([c, r], j) => {
      const x = (c + 0.5) * 188 / COLS, y = (r + 0.5) * 125 / ROWS;
      j ? mc.lineTo(x, y) : mc.moveTo(x, y);
    });
    mc.stroke();
    if (!locked) card.onclick = () => startLevel(i);
    wrap.appendChild(card);
  });
}

/* ============================================================
   BUILD BAR
   ============================================================ */
function renderBuildBar() {
  const bar = $('build-bar');
  bar.innerHTML = '';
  Object.entries(TOWERS).forEach(([key, t]) => {
    const el = document.createElement('div');
    el.className = 'build-item';
    el.dataset.key = key;
    el.innerHTML = `<canvas width="44" height="44"></canvas>
      <span class="bi-name" style="color:${t.color}">${t.name}</span>
      <span class="bi-cost">⚡${t.cost}</span>`;
    const c = el.querySelector('canvas').getContext('2d');
    drawTowerIcon(c, key, 22, 22, 15);
    el.onclick = () => {
      G.selectedTower = null; hidePopup();
      G.selectedBuild = G.selectedBuild === key ? null : key;
      updateBuildBar();
    };
    bar.appendChild(el);
  });
}
function updateBuildBar() {
  document.querySelectorAll('.build-item').forEach(el => {
    el.classList.toggle('selected', el.dataset.key === G.selectedBuild);
    el.classList.toggle('unaffordable', TOWERS[el.dataset.key].cost > G.energy);
  });
}

/* ============================================================
   START / END LEVEL
   ============================================================ */
function startLevel(idx) {
  if (idx >= LEVELS.length) { show('menu'); return; }
  G.levelIdx = idx;
  G.level = LEVELS[idx];
  buildPath(G.level);
  G.towers = []; G.enemies = []; G.projectiles = []; G.particles = []; G.floats = [];
  G.energy = G.level.startEnergy;
  G.lives = G.level.lives;
  G.wave = 0; G.waveActive = false; G.spawnQueue = [];
  G.selectedBuild = null; G.selectedTower = null;
  G.kills = 0; G.over = false; G.speed = 1;
  $('btn-speed').textContent = '×1';
  $('btn-startwave').disabled = false;
  renderBuildBar(); updateHUD(); hidePopup();
  show('game');
  if (!G.running) { G.running = true; last = performance.now(); requestAnimationFrame(loop); }
  else G.running = true;
}

function endLevel(win) {
  G.over = true; G.running = false;
  const t = $('end-title');
  t.textContent = win ? 'SECTOR CLEARED' : 'DEREZZED';
  t.classList.toggle('fail', !win);
  $('end-stats').innerHTML =
    `PROGRAMS DEREZZED: ${G.kills}<br>WAVES SURVIVED: ${G.wave}${win ? '/' + G.level.waves : ''}<br>CORE INTEGRITY: ${Math.max(0, G.lives)}/${G.level.lives}`;
  const canNext = win && G.levelIdx + 1 < LEVELS.length;
  $('btn-next').style.display = canNext ? '' : 'none';
  if (win && G.levelIdx + 2 > G.unlocked) {
    G.unlocked = G.levelIdx + 2;
    localStorage.setItem('gd_unlocked', G.unlocked);
  }
  setTimeout(() => show('endoverlay'), win ? 600 : 900);
}

/* ============================================================
   WAVES
   ============================================================ */
function startWave() {
  if (G.waveActive || G.over) return;
  G.wave++;
  G.waveActive = true;
  $('btn-startwave').disabled = true;
  const spec = waveSpec(G.levelIdx, G.wave);
  G.spawnQueue = [];
  let t = 0;
  spec.groups.forEach(g => {
    for (let i = 0; i < g.count; i++) {
      G.spawnQueue.push({ at: t, type: g.type, hpScale: spec.hpScale });
      t += g.gap;
    }
    t += 1.5;
  });
  G.spawnTimer = 0;
  updateHUD();
}

function spawnEnemy(type, hpScale) {
  const def = ENEMIES[type];
  G.enemies.push({
    def, type,
    hp: def.hp * hpScale, maxHp: def.hp * hpScale,
    speed: def.speed,
    x: G.pathPx[0].x, y: G.pathPx[0].y,
    seg: 0, segT: 0,
    dead: false, finished: false,
    wob: Math.random() * Math.PI * 2,
  });
}

/* ============================================================
   UPDATE
   ============================================================ */
function update(dt) {
  G.time += dt;

  /* spawning */
  if (G.waveActive) {
    G.spawnTimer += dt;
    while (G.spawnQueue.length && G.spawnQueue[0].at <= G.spawnTimer) {
      const s = G.spawnQueue.shift();
      spawnEnemy(s.type, s.hpScale);
    }
    if (!G.spawnQueue.length && !G.enemies.length) {
      G.waveActive = false;
      if (G.wave >= G.level.waves) { endLevel(true); return; }
      G.energy += 40 + G.wave * 5;      // wave clear bonus
      $('btn-startwave').disabled = false;
      updateHUD();
    }
  }

  /* enemies walk path */
  for (const e of G.enemies) {
    let move = e.speed * dt;
    while (move > 0 && e.seg < G.pathPx.length - 1) {
      const a = G.pathPx[e.seg], b = G.pathPx[e.seg + 1];
      const segLen = dist(a, b);
      const remain = (1 - e.segT) * segLen;
      if (move < remain) {
        e.segT += move / segLen; move = 0;
      } else {
        move -= remain; e.seg++; e.segT = 0;
      }
    }
    if (e.seg >= G.pathPx.length - 1) { e.finished = true; continue; }
    const a = G.pathPx[e.seg], b = G.pathPx[e.seg + 1];
    e.x = lerp(a.x, b.x, e.segT);
    e.y = lerp(a.y, b.y, e.segT);
    e.wob += dt * 6;
  }
  /* leaks */
  for (const e of G.enemies) {
    if (e.finished) {
      G.lives--;
      spawnBurst(e.x, e.y, '#ff2975', 14);
      if (G.lives <= 0) { updateHUD(); endLevel(false); return; }
    }
  }
  G.enemies = G.enemies.filter(e => !e.finished && !e.dead);

  /* towers fire */
  for (const t of G.towers) {
    t.cd -= dt;
    t.anim += dt;
    if (t.cd > 0) continue;
    const def = t.def;
    let target = null, best = -1;
    for (const e of G.enemies) {
      const d = dist(t, e);
      if (d <= t.range) {
        const prog = e.seg + e.segT;      // furthest along path
        if (prog > best) { best = prog; target = e; }
      }
    }
    if (!target) continue;
    t.cd = t.rate;
    t.angle = Math.atan2(target.y - t.y, target.x - t.x);
    fire(t, target);
  }

  /* projectiles */
  for (const p of G.projectiles) {
    p.life -= dt;
    if (p.kind === 'beam' || p.kind === 'chain') {
      if (p.life <= 0) p.dead = true;
      continue;
    }
    // homing projectiles
    if (p.target && !p.target.dead && !p.target.finished) {
      p.tx = p.target.x; p.ty = p.target.y;
    }
    const d = Math.hypot(p.tx - p.x, p.ty - p.y);
    const step = p.speed * dt;
    if (d <= step || p.life <= 0) {
      p.x = p.tx; p.y = p.ty; p.dead = true;
      hit(p);
    } else {
      p.x += (p.tx - p.x) / d * step;
      p.y += (p.ty - p.y) / d * step;
      p.rot = (p.rot || 0) + dt * 20;
    }
  }
  G.projectiles = G.projectiles.filter(p => !p.dead);

  /* particles & floating text */
  for (const pt of G.particles) {
    pt.x += pt.vx * dt; pt.y += pt.vy * dt;
    pt.vx *= 0.94; pt.vy *= 0.94;
    pt.life -= dt;
  }
  G.particles = G.particles.filter(p => p.life > 0);
  for (const f of G.floats) { f.y -= 28 * dt; f.life -= dt; }
  G.floats = G.floats.filter(f => f.life > 0);
}

function fire(t, target) {
  const def = t.def;
  if (def.proj === 'beam') {
    G.projectiles.push({ kind: 'beam', x: t.x, y: t.y, tx: target.x, ty: target.y, color: def.color, life: 0.08 });
    damage(target, t.dmg);
  } else if (def.proj === 'chain') {
    // chain lightning: jump to nearest others
    let cur = target, hitSet = new Set([cur]);
    const pts = [{ x: t.x, y: t.y }, { x: cur.x, y: cur.y }];
    damage(cur, t.dmg);
    for (let i = 1; i < def.chains; i++) {
      let next = null, bd = 110;
      for (const e of G.enemies) {
        if (e.dead || hitSet.has(e)) continue;
        const d = dist(cur, e);
        if (d < bd) { bd = d; next = e; }
      }
      if (!next) break;
      hitSet.add(next);
      pts.push({ x: next.x, y: next.y });
      damage(next, t.dmg * Math.pow(0.7, i));
      cur = next;
    }
    G.projectiles.push({ kind: 'chain', pts, color: def.color, life: 0.13 });
  } else {
    G.projectiles.push({
      kind: def.proj, x: t.x, y: t.y, tx: target.x, ty: target.y,
      target, speed: def.proj === 'disc' ? 520 : 340,
      dmg: t.dmg, splash: def.splash || 0, color: def.color, life: 2,
    });
  }
}

function hit(p) {
  spawnBurst(p.x, p.y, p.color, p.splash ? 16 : 6);
  if (p.splash) {
    for (const e of G.enemies) {
      if (!e.dead && dist(p, e) <= p.splash) damage(e, p.dmg);
    }
  } else if (p.target && !p.target.dead) {
    damage(p.target, p.dmg);
  }
}

function damage(e, dmg) {
  if (e.dead) return;
  e.hp -= dmg;
  if (e.hp <= 0) {
    e.dead = true;
    G.kills++;
    G.energy += e.def.reward;
    spawnBurst(e.x, e.y, e.def.color, 18);
    G.floats.push({ x: e.x, y: e.y - 12, text: '+' + e.def.reward, color: '#ff9d00', life: 0.9 });
    updateHUD();
  }
}

function spawnBurst(x, y, color, n) {
  for (let i = 0; i < n; i++) {
    const a = rand(0, Math.PI * 2), sp = rand(40, 220);
    G.particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, color, life: rand(0.25, 0.6), size: rand(1.5, 3.5) });
  }
}

/* ============================================================
   RENDERING
   ============================================================ */
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  /* background grid */
  ctx.strokeStyle = 'rgba(0,246,255,0.07)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= COLS; x++) { ctx.beginPath(); ctx.moveTo(x * CELL, 0); ctx.lineTo(x * CELL, ROWS * CELL); ctx.stroke(); }
  for (let y = 0; y <= ROWS; y++) { ctx.beginPath(); ctx.moveTo(0, y * CELL); ctx.lineTo(COLS * CELL, y * CELL); ctx.stroke(); }

  /* path glow */
  ctx.save();
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.strokeStyle = 'rgba(0,60,70,0.9)';
  ctx.lineWidth = 40;
  tracePath(); ctx.stroke();
  ctx.strokeStyle = 'rgba(0,246,255,0.16)';
  ctx.lineWidth = 40;
  tracePath(); ctx.stroke();
  ctx.strokeStyle = 'rgba(0,246,255,0.7)';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#00f6ff'; ctx.shadowBlur = 10;
  tracePath(); ctx.stroke();
  /* animated flow dashes */
  ctx.strokeStyle = 'rgba(180,255,255,0.5)';
  ctx.lineWidth = 3;
  ctx.setLineDash([6, 34]);
  ctx.lineDashOffset = -G.time * 60;
  tracePath(); ctx.stroke();
  ctx.restore();

  /* core marker at path end */
  const end = G.pathPx[G.pathPx.length - 1];
  ctx.save();
  ctx.translate(Math.min(end.x, COLS * CELL - 14), end.y);
  const pu = 1 + 0.12 * Math.sin(G.time * 4);
  ctx.strokeStyle = '#ff2975'; ctx.shadowColor = '#ff2975'; ctx.shadowBlur = 16; ctx.lineWidth = 2.5;
  ctx.rotate(G.time);
  ctx.strokeRect(-12 * pu, -12 * pu, 24 * pu, 24 * pu);
  ctx.rotate(Math.PI / 4);
  ctx.strokeRect(-12 * pu, -12 * pu, 24 * pu, 24 * pu);
  ctx.restore();

  /* build hover preview */
  if (G.selectedBuild && G.hoverCell) {
    const [c, r] = G.hoverCell;
    const ok = canBuild(c, r);
    const def = TOWERS[G.selectedBuild];
    ctx.save();
    ctx.globalAlpha = 0.45;
    ctx.fillStyle = ok ? 'rgba(0,246,255,0.2)' : 'rgba(255,41,117,0.25)';
    ctx.fillRect(c * CELL, r * CELL, CELL, CELL);
    if (ok) {
      drawTowerIcon(ctx, G.selectedBuild, c * CELL + CELL / 2, r * CELL + CELL / 2, 20);
      ctx.strokeStyle = def.color;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.arc(c * CELL + CELL / 2, r * CELL + CELL / 2, def.range, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  }

  /* towers */
  for (const t of G.towers) drawTower(t);

  /* range ring for selected tower */
  if (G.selectedTower) {
    const t = G.selectedTower;
    ctx.save();
    ctx.strokeStyle = t.def.color;
    ctx.globalAlpha = 0.5;
    ctx.setLineDash([6, 6]);
    ctx.beginPath(); ctx.arc(t.x, t.y, t.range, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();
  }

  /* enemies */
  for (const e of G.enemies) drawEnemy(e);

  /* projectiles */
  for (const p of G.projectiles) drawProjectile(p);

  /* particles */
  for (const pt of G.particles) {
    ctx.save();
    ctx.globalAlpha = Math.min(1, pt.life * 3);
    ctx.fillStyle = pt.color;
    ctx.shadowColor = pt.color; ctx.shadowBlur = 8;
    ctx.fillRect(pt.x - pt.size / 2, pt.y - pt.size / 2, pt.size, pt.size);
    ctx.restore();
  }

  /* floating text */
  ctx.save();
  ctx.font = 'bold 13px Orbitron, sans-serif';
  ctx.textAlign = 'center';
  for (const f of G.floats) {
    ctx.globalAlpha = Math.min(1, f.life * 2);
    ctx.fillStyle = f.color;
    ctx.shadowColor = f.color; ctx.shadowBlur = 6;
    ctx.fillText(f.text, f.x, f.y);
  }
  ctx.restore();

  /* wave incoming banner */
  if (!G.waveActive && !G.over && G.wave < G.level.waves) {
    ctx.save();
    ctx.font = '900 20px Orbitron, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(0,246,255,' + (0.5 + 0.3 * Math.sin(G.time * 3)) + ')';
    ctx.shadowColor = '#00f6ff'; ctx.shadowBlur = 12;
    ctx.fillText(G.wave === 0 ? 'BUILD DEFENSES — START WAVE WHEN READY' : 'WAVE CLEARED — PRESS START WAVE', canvas.width / 2, 36);
    ctx.restore();
  }
}

function tracePath() {
  ctx.beginPath();
  G.pathPx.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
}

/* --- tower drawing (used for map, icons, previews) --- */
function drawTowerIcon(c, key, x, y, s, angle = -Math.PI / 2, anim = 0) {
  const col = TOWERS[key].color;
  c.save();
  c.translate(x, y);
  c.strokeStyle = col; c.fillStyle = col;
  c.shadowColor = col; c.shadowBlur = 10;
  c.lineWidth = 2;

  // hex base
  c.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = Math.PI / 3 * i + Math.PI / 6;
    const px = Math.cos(a) * s, py = Math.sin(a) * s;
    i ? c.lineTo(px, py) : c.moveTo(px, py);
  }
  c.closePath();
  c.stroke();
  c.save(); c.globalAlpha = 0.12; c.fill(); c.restore();

  c.rotate(angle);
  if (key === 'beam') {
    c.fillRect(0, -2.5, s * 0.95, 5);
    c.beginPath(); c.arc(0, 0, s * 0.38, 0, Math.PI * 2); c.stroke();
  } else if (key === 'pulse') {
    c.beginPath(); c.arc(0, 0, s * 0.45, 0, Math.PI * 2); c.stroke();
    c.beginPath(); c.arc(0, 0, s * 0.45 * (0.4 + 0.25 * Math.sin(anim * 5)), 0, Math.PI * 2); c.fill();
    c.fillRect(s * 0.3, -4, s * 0.55, 8);
  } else if (key === 'tesla') {
    c.beginPath();
    c.moveTo(-s * 0.3, -s * 0.45); c.lineTo(s * 0.15, -s * 0.05);
    c.lineTo(-s * 0.1, 0.05 * s); c.lineTo(s * 0.35, s * 0.45);
    c.stroke();
    c.beginPath(); c.arc(0, 0, s * 0.55, 0, Math.PI * 2); c.stroke();
  } else if (key === 'disc') {
    c.rotate(anim * 3);
    c.beginPath(); c.arc(0, 0, s * 0.55, 0, Math.PI * 2); c.stroke();
    c.beginPath(); c.arc(0, 0, s * 0.28, 0, Math.PI * 2); c.stroke();
    for (let i = 0; i < 4; i++) {
      c.rotate(Math.PI / 2);
      c.fillRect(s * 0.28, -1.5, s * 0.27, 3);
    }
  }
  c.restore();
}

function drawTower(t) {
  drawTowerIcon(ctx, t.key, t.x, t.y, 20 + t.lvl * 2, t.angle, t.anim);
  // level pips
  ctx.save();
  ctx.fillStyle = '#fff';
  ctx.shadowColor = t.def.color; ctx.shadowBlur = 6;
  for (let i = 0; i < t.lvl; i++) ctx.fillRect(t.x - 10 + i * 8, t.y + 24, 5, 3);
  ctx.restore();
}

/* --- enemy drawing --- */
function drawEnemy(e) {
  const { color, size, shape } = e.def;
  ctx.save();
  ctx.translate(e.x, e.y);
  ctx.strokeStyle = color; ctx.fillStyle = color;
  ctx.shadowColor = color; ctx.shadowBlur = 12;
  ctx.lineWidth = 2;

  const a = G.pathPx[e.seg], b = G.pathPx[Math.min(e.seg + 1, G.pathPx.length - 1)];
  const heading = Math.atan2(b.y - a.y, b.x - a.x);

  if (shape === 'bit') {
    ctx.rotate(e.wob);
    const s = size * (0.85 + 0.15 * Math.sin(e.wob * 2));
    ctx.beginPath();
    ctx.moveTo(0, -s); ctx.lineTo(s, 0); ctx.lineTo(0, s); ctx.lineTo(-s, 0);
    ctx.closePath(); ctx.stroke();
    ctx.globalAlpha = 0.25; ctx.fill();
  } else if (shape === 'cycle') {
    ctx.rotate(heading);
    ctx.beginPath();
    ctx.moveTo(size * 1.3, 0); ctx.lineTo(-size, -size * 0.6);
    ctx.lineTo(-size * 0.5, 0); ctx.lineTo(-size, size * 0.6);
    ctx.closePath(); ctx.stroke();
    ctx.globalAlpha = 0.25; ctx.fill();
    // light trail
    ctx.globalAlpha = 0.5;
    ctx.beginPath(); ctx.moveTo(-size, 0); ctx.lineTo(-size * 2.4, 0); ctx.stroke();
  } else if (shape === 'tank') {
    ctx.rotate(heading);
    ctx.strokeRect(-size, -size * 0.7, size * 2, size * 1.4);
    ctx.globalAlpha = 0.2; ctx.fillRect(-size, -size * 0.7, size * 2, size * 1.4);
    ctx.globalAlpha = 1;
    ctx.beginPath(); ctx.arc(0, 0, size * 0.45, 0, Math.PI * 2); ctx.stroke();
    ctx.fillRect(0, -2, size * 1.3, 4);
  } else if (shape === 'seeker') {
    ctx.rotate(e.wob * 1.5);
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
      const ang = i * Math.PI * 2 / 3;
      const px = Math.cos(ang) * size, py = Math.sin(ang) * size;
      i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
    }
    ctx.closePath(); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, size * 0.35, 0, Math.PI * 2); ctx.fill();
  } else if (shape === 'guardian') {
    ctx.rotate(e.wob * 0.5);
    for (let ring = 0; ring < 2; ring++) {
      const s = size * (1 - ring * 0.4);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const ang = Math.PI / 3 * i + ring * 0.5;
        const px = Math.cos(ang) * s, py = Math.sin(ang) * s;
        i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
      }
      ctx.closePath(); ctx.stroke();
    }
    ctx.globalAlpha = 0.2;
    ctx.beginPath(); ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();

  /* hp bar */
  if (e.hp < e.maxHp) {
    const w = size * 2.2;
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(e.x - w / 2, e.y - size - 10, w, 4);
    const pct = e.hp / e.maxHp;
    ctx.fillStyle = pct > 0.5 ? '#00f6ff' : pct > 0.25 ? '#ff9d00' : '#ff2975';
    ctx.shadowColor = ctx.fillStyle; ctx.shadowBlur = 4;
    ctx.fillRect(e.x - w / 2, e.y - size - 10, w * pct, 4);
    ctx.restore();
  }
}

/* --- projectile drawing --- */
function drawProjectile(p) {
  ctx.save();
  ctx.strokeStyle = p.color; ctx.fillStyle = p.color;
  ctx.shadowColor = p.color; ctx.shadowBlur = 12;
  if (p.kind === 'beam') {
    ctx.lineWidth = 3;
    ctx.globalAlpha = Math.min(1, p.life * 15);
    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.tx, p.ty); ctx.stroke();
    ctx.lineWidth = 1; ctx.strokeStyle = '#fff';
    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.tx, p.ty); ctx.stroke();
  } else if (p.kind === 'chain') {
    ctx.lineWidth = 2.5;
    ctx.globalAlpha = Math.min(1, p.life * 10);
    ctx.beginPath();
    for (let i = 0; i < p.pts.length - 1; i++) {
      const a = p.pts[i], b = p.pts[i + 1];
      ctx.moveTo(a.x, a.y);
      const mx = (a.x + b.x) / 2 + rand(-9, 9), my = (a.y + b.y) / 2 + rand(-9, 9);
      ctx.lineTo(mx, my); ctx.lineTo(b.x, b.y);
    }
    ctx.stroke();
  } else if (p.kind === 'disc') {
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot || 0);
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.stroke();
    ctx.fillRect(-8, -1.5, 16, 3);
    ctx.fillRect(-1.5, -8, 3, 16);
  } else {
    ctx.beginPath(); ctx.arc(p.x, p.y, 5.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}

/* ============================================================
   INPUT — building & selecting
   ============================================================ */
function canvasCell(ev) {
  const r = canvas.getBoundingClientRect();
  const x = (ev.clientX - r.left) * (canvas.width / r.width);
  const y = (ev.clientY - r.top) * (canvas.height / r.height);
  return { x, y, c: Math.floor(x / CELL), r: Math.floor(y / CELL) };
}

function canBuild(c, r) {
  if (c < 0 || c >= COLS || r < 0 || r >= ROWS) return false;
  if (G.pathCells.has(c + ',' + r)) return false;
  return !G.towers.some(t => t.c === c && t.r === r);
}

canvas.addEventListener('mousemove', ev => {
  const { c, r } = canvasCell(ev);
  G.hoverCell = [c, r];
});
canvas.addEventListener('mouseleave', () => G.hoverCell = null);

canvas.addEventListener('click', ev => {
  if (G.over) return;
  const { c, r } = canvasCell(ev);
  // clicking an existing tower selects it
  const t = G.towers.find(t => t.c === c && t.r === r);
  if (t) {
    G.selectedTower = t;
    G.selectedBuild = null;
    updateBuildBar();
    showPopup(t, ev);
    return;
  }
  hidePopup(); G.selectedTower = null;
  // build
  if (G.selectedBuild && canBuild(c, r)) {
    const def = TOWERS[G.selectedBuild];
    if (G.energy >= def.cost) {
      G.energy -= def.cost;
      G.towers.push({
        key: G.selectedBuild, def,
        c, r, x: c * CELL + CELL / 2, y: r * CELL + CELL / 2,
        lvl: 1, spent: def.cost,
        range: def.range, dmg: def.dmg, rate: def.rate,
        cd: 0, angle: -Math.PI / 2, anim: 0,
      });
      spawnBurst(c * CELL + CELL / 2, r * CELL + CELL / 2, def.color, 12);
      updateHUD();
    } else {
      G.floats.push({ x: c * CELL + CELL / 2, y: r * CELL + CELL / 2, text: 'LOW ENERGY', color: '#ff2975', life: 1 });
    }
  }
});

/* tower popup (upgrade/sell) */
function upgradeCost(t) { return Math.floor(t.def.cost * 0.8 * t.lvl); }
function sellValue(t) { return Math.floor(t.spent * 0.6); }

function showPopup(t, ev) {
  const pop = $('tower-popup');
  pop.classList.remove('hidden');
  refreshPopup(t);
  const px = Math.min(window.innerWidth - 210, ev.clientX + 14);
  const py = Math.min(window.innerHeight - 180, ev.clientY - 20);
  pop.style.left = px + 'px';
  pop.style.top = py + 'px';
}
function refreshPopup(t) {
  const maxed = t.lvl >= 4;
  $('popup-info').innerHTML =
    `<b style="color:${t.def.color}">${t.def.name} — LVL ${t.lvl}</b><br>
     DMG ${Math.round(t.dmg)} · RNG ${Math.round(t.range)}<br>
     RATE ${t.rate.toFixed(2)}s`;
  const up = $('btn-upgrade');
  up.textContent = maxed ? 'MAX LEVEL' : `UPGRADE ⚡${upgradeCost(t)}`;
  up.disabled = maxed || G.energy < upgradeCost(t);
  $('btn-sell').textContent = `SELL ⚡${sellValue(t)}`;
}
function hidePopup() { $('tower-popup').classList.add('hidden'); }

$('btn-upgrade').onclick = () => {
  const t = G.selectedTower;
  if (!t || t.lvl >= 4) return;
  const cost = upgradeCost(t);
  if (G.energy < cost) return;
  G.energy -= cost;
  t.spent += cost;
  t.lvl++;
  t.dmg *= 1.45;
  t.range *= 1.12;
  t.rate *= 0.88;
  spawnBurst(t.x, t.y, '#fff', 14);
  updateHUD(); refreshPopup(t);
};
$('btn-sell').onclick = () => {
  const t = G.selectedTower;
  if (!t) return;
  G.energy += sellValue(t);
  G.towers = G.towers.filter(x => x !== t);
  spawnBurst(t.x, t.y, t.def.color, 16);
  G.selectedTower = null;
  hidePopup(); updateHUD();
};

/* ============================================================
   HUD & LOOP
   ============================================================ */
function updateHUD() {
  $('hud-level').textContent = 'SECTOR ' + (G.levelIdx + 1);
  $('hud-wave').textContent = `WAVE ${G.wave}/${G.level.waves}`;
  $('hud-energy').textContent = '⚡ ' + Math.floor(G.energy);
  $('hud-lives').textContent = '♥ ' + Math.max(0, G.lives);
  updateBuildBar();
}

let last = 0;
function loop(now) {
  if (!G.running) return;
  let dt = Math.min((now - last) / 1000, 0.05);
  last = now;
  for (let i = 0; i < G.speed; i++) update(dt);
  draw();
  requestAnimationFrame(loop);
}
