'use strict';

/* ============================================================
   LIGHTWALL — original TRON-inspired tower defense
   Built as a one-shot benchmark run (grok-4.5-xhigh)
   ============================================================ */

const W = 960, H = 576, COLS = 20, ROWS = 12, CELL = 48;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const lerp = (a, b, t) => a + (b - a) * t;
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[(Math.random() * arr.length) | 0];

/* ---------- screens ---------- */
function show(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  $(id).classList.add('active');
  if (id === 'screen-splash') startSplash();
  else stopSplash();
}

/* ---------- tower defs ---------- */
const TOWERS = {
  disc: {
    key: 'disc', name: 'DISC NODE', color: '#3de7ff',
    cost: 80, dmg: 14, rate: 2.4, range: 150,
    shot: 'disc', desc: 'Rapid identity discs',
  },
  ribbon: {
    key: 'ribbon', name: 'LIGHT RIBBON', color: '#ffb347',
    cost: 140, dmg: 22, rate: 1.1, range: 130,
    shot: 'burst', splash: 70, desc: 'Splash light-wall burst',
  },
  recognizer: {
    key: 'recognizer', name: 'RECOGNIZER', color: '#9b6bff',
    cost: 180, dmg: 36, rate: 0.75, range: 160,
    shot: 'beam', slow: 0.55, slowT: 1.4, desc: 'Heavy slow beam',
  },
  bit: {
    key: 'bit', name: 'BIT RELAY', color: '#7dff9a',
    cost: 110, dmg: 0, rate: 0, range: 120,
    aura: true, slow: 0.62, desc: 'Aura slows nearby programs',
  },
  sailer: {
    key: 'sailer', name: 'SAILER LANCE', color: '#ff4d8d',
    cost: 220, dmg: 48, rate: 0.55, range: 240,
    shot: 'lance', pierce: 3, desc: 'Long-range pierce lance',
  },
};

/* ---------- enemy defs ---------- */
const ENEMIES = {
  bit:     { name: 'BIT',      hp: 28,  speed: 78,  armor: 0, color: '#3de7ff', r: 8,  reward: 7  },
  program: { name: 'PROGRAM',  hp: 70,  speed: 52,  armor: 0, color: '#ffb347', r: 12, reward: 12 },
  cycle:   { name: 'CYCLE',    hp: 55,  speed: 105, armor: 0, color: '#7dff9a', r: 11, reward: 14 },
  tank:    { name: 'TANK',     hp: 220, speed: 34,  armor: 6, color: '#9b6bff', r: 16, reward: 28 },
  iso:     { name: 'ISO',      hp: 160, speed: 68,  armor: 3, color: '#ff4d8d', r: 13, reward: 36 },
};

/* ---------- levels ---------- */
const LEVELS = [
  {
    name: 'SECTOR 01 — OUTLANDS',
    diff: 'EASY',
    desc: 'A single data corridor. Learn the lightwall.',
    energy: 240, lives: 20, waves: 8,
    path: [[-1, 2], [4, 2], [4, 8], [10, 8], [10, 3], [16, 3], [16, 7], [20, 7]],
    composition: (w) => composeWave(w, [
      ['bit', 4 + w], ['program', 3 + w],
      w > 3 ? ['cycle', w - 2] : null,
      w === 7 ? ['tank', 2] : null,
    ]),
  },
  {
    name: 'SECTOR 02 — ARENA',
    diff: 'MEDIUM',
    desc: 'Serpentine circuit. Cycles run hot.',
    energy: 280, lives: 16, waves: 10,
    path: [[-1, 1], [15, 1], [15, 5], [3, 5], [3, 9], [20, 9]],
    composition: (w) => composeWave(w, [
      ['program', 4 + w], ['cycle', 2 + Math.floor(w * 0.8)],
      ['bit', 3 + w], w > 4 ? ['tank', Math.floor(w / 3)] : null,
      w >= 8 ? ['iso', 1 + Math.floor((w - 8) / 2)] : null,
    ]),
  },
  {
    name: 'SECTOR 03 — CORE GATE',
    diff: 'HARD',
    desc: 'Tight bends. Elite ISOs breach the gate.',
    energy: 320, lives: 12, waves: 12,
    path: [[-1, 5], [5, 5], [5, 1], [12, 1], [12, 9], [6, 9], [6, 4], [17, 4], [17, 8], [20, 8]],
    composition: (w) => composeWave(w, [
      ['cycle', 3 + w], ['tank', 1 + Math.floor(w / 2)],
      ['program', 4 + w], ['iso', Math.max(0, w - 3)],
      ['bit', 6 + w],
    ]),
  },
];

function composeWave(waveIdx, specs) {
  const out = [];
  specs.filter(Boolean).forEach(([type, count]) => {
    for (let i = 0; i < count; i++) out.push(type);
  });
  // mild shuffle so packs aren't perfectly sorted
  for (let i = out.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* ---------- game state ---------- */
const G = {
  levelIdx: 0,
  energy: 0,
  lives: 0,
  wave: 0,
  running: false,
  spawning: false,
  spawnQueue: [],
  spawnTimer: 0,
  enemies: [],
  towers: [],
  shots: [],
  particles: [],
  selectedBuild: null,
  selectedTower: null,
  hover: null,
  speed: 1,
  pathCells: new Set(),
  pathPts: [],
  occupied: new Set(),
  won: false,
  lost: false,
  kills: 0,
  spent: 0,
  unlocked: 1,
};

function cellKey(c, r) { return c + ',' + r; }
function cellCenter(c, r) { return { x: c * CELL + CELL / 2, y: r * CELL + CELL / 2 }; }

function buildPath(level) {
  G.pathPts = [];
  G.pathCells = new Set();
  const pts = level.path;
  const pushPt = (c, r) => {
    if (c >= 0 && c < COLS && r >= 0 && r < ROWS) G.pathCells.add(cellKey(c, r));
    const p = cellCenter(c, r);
    const last = G.pathPts[G.pathPts.length - 1];
    // Skip consecutive duplicates at corners — zero-length segments permanently
    // stall slowed enemies (step never reaches d==0), so waves never finish.
    if (last && last.x === p.x && last.y === p.y) return;
    G.pathPts.push(p);
  };
  for (let i = 0; i < pts.length - 1; i++) {
    let [c0, r0] = pts[i];
    let [c1, r1] = pts[i + 1];
    const dc = Math.sign(c1 - c0);
    const dr = Math.sign(r1 - r0);
    let c = c0, r = r0;
    while (true) {
      pushPt(c, r);
      if (c === c1 && r === r1) break;
      c += dc; r += dr;
    }
  }
  // extend spawn/exit slightly off-grid for smoother entry/exit
  const first = G.pathPts[0];
  const last = G.pathPts[G.pathPts.length - 1];
  if (level.path[0][0] < 0) G.pathPts.unshift({ x: first.x - CELL, y: first.y });
  if (level.path[level.path.length - 1][0] >= COLS) {
    G.pathPts.push({ x: last.x + CELL, y: last.y });
  }
}

/* ---------- UI wiring ---------- */
$('btn-enter').onclick = () => show('screen-menu');
$('btn-play').onclick = () => startLevel(0);
$('btn-levels').onclick = () => { renderLevels(); show('screen-levels'); };
$('btn-howto').onclick = () => show('screen-howto');
$('btn-levels-back').onclick = () => show('screen-menu');
$('btn-howto-back').onclick = () => show('screen-menu');
$('btn-menu').onclick = () => { G.running = false; show('screen-menu'); };
$('btn-result-menu').onclick = () => show('screen-menu');
$('btn-retry').onclick = () => startLevel(G.levelIdx);
$('btn-next').onclick = () => startLevel(Math.min(G.levelIdx + 1, LEVELS.length - 1));
$('btn-speed').onclick = () => {
  G.speed = G.speed === 1 ? 2 : G.speed === 2 ? 3 : 1;
  $('btn-speed').textContent = '×' + G.speed;
};
$('btn-wave').onclick = () => beginWave();
$('btn-upgrade').onclick = () => upgradeSelected();
$('btn-sell').onclick = () => sellSelected();
$('btn-sheet-close').onclick = () => closeSheet();

function renderLevels() {
  const wrap = $('level-list');
  wrap.innerHTML = '';
  LEVELS.forEach((lv, i) => {
    const locked = i >= G.unlocked;
    const btn = document.createElement('button');
    btn.className = 'level-card' + (locked ? ' locked' : '');
    btn.innerHTML = `<h3>${lv.name}</h3><div class="diff">${lv.diff}</div><p>${lv.desc}</p>`;
    const mini = document.createElement('canvas');
    mini.width = 200; mini.height = 96;
    btn.appendChild(mini);
    drawMiniPath(mini, lv);
    if (!locked) btn.onclick = () => startLevel(i);
    wrap.appendChild(btn);
  });
}

function drawMiniPath(c, level) {
  const g = c.getContext('2d');
  g.fillStyle = '#02060d';
  g.fillRect(0, 0, c.width, c.height);
  const sx = c.width / COLS, sy = c.height / ROWS;
  g.strokeStyle = 'rgba(61,231,255,0.15)';
  g.lineWidth = 1;
  for (let x = 0; x <= COLS; x++) { g.beginPath(); g.moveTo(x * sx, 0); g.lineTo(x * sx, c.height); g.stroke(); }
  for (let y = 0; y <= ROWS; y++) { g.beginPath(); g.moveTo(0, y * sy); g.lineTo(c.width, y * sy); g.stroke(); }
  g.strokeStyle = '#3de7ff';
  g.lineWidth = 3;
  g.shadowColor = '#3de7ff';
  g.shadowBlur = 8;
  g.beginPath();
  level.path.forEach(([col, row], i) => {
    const x = (col + 0.5) * sx, y = (row + 0.5) * sy;
    if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
  });
  g.stroke();
}

function renderDock() {
  const dock = $('tower-dock');
  dock.innerHTML = '';
  Object.values(TOWERS).forEach((t) => {
    const el = document.createElement('button');
    el.className = 'dock-item' + (G.selectedBuild === t.key ? ' selected' : '') + (G.energy < t.cost ? ' poor' : '');
    const ic = document.createElement('canvas');
    ic.width = 40; ic.height = 40;
    drawTowerIcon(ic.getContext('2d'), t, 20, 20, 1);
    el.appendChild(ic);
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = t.name;
    el.appendChild(name);
    const cost = document.createElement('div');
    cost.className = 'cost';
    cost.textContent = t.cost + ' E';
    el.appendChild(cost);
    el.onclick = () => {
      G.selectedBuild = G.selectedBuild === t.key ? null : t.key;
      G.selectedTower = null;
      closeSheet();
      renderDock();
    };
    dock.appendChild(el);
  });
}

function drawTowerIcon(g, def, x, y, s) {
  g.save();
  g.translate(x, y);
  g.scale(s, s);
  g.strokeStyle = def.color;
  g.fillStyle = def.color + '33';
  g.lineWidth = 2;
  g.shadowColor = def.color;
  g.shadowBlur = 8;
  if (def.key === 'disc') {
    g.beginPath(); g.arc(0, 0, 10, 0, Math.PI * 2); g.fill(); g.stroke();
    g.beginPath(); g.arc(0, 0, 4, 0, Math.PI * 2); g.stroke();
  } else if (def.key === 'ribbon') {
    g.beginPath();
    g.moveTo(-10, 8); g.lineTo(0, -10); g.lineTo(10, 8); g.closePath();
    g.fill(); g.stroke();
  } else if (def.key === 'recognizer') {
    g.strokeRect(-11, -7, 22, 14);
    g.beginPath(); g.moveTo(-6, -7); g.lineTo(-6, -12); g.moveTo(6, -7); g.lineTo(6, -12); g.stroke();
  } else if (def.key === 'bit') {
    g.beginPath();
    g.moveTo(0, -10); g.lineTo(9, 0); g.lineTo(0, 10); g.lineTo(-9, 0); g.closePath();
    g.fill(); g.stroke();
  } else {
    g.beginPath(); g.moveTo(0, -11); g.lineTo(3, 0); g.lineTo(0, 11); g.lineTo(-3, 0); g.closePath();
    g.fill(); g.stroke();
  }
  g.restore();
}

function updateHud() {
  const lv = LEVELS[G.levelIdx];
  $('hud-sector').textContent = lv.name.split('—')[0].trim();
  $('hud-wave').textContent = `WAVE ${Math.min(G.wave, lv.waves)} / ${lv.waves}`;
  $('hud-energy').textContent = `ENERGY ${G.energy | 0}`;
  $('hud-lives').textContent = `CORE ${G.lives}`;
  $('btn-wave').disabled = G.spawning || G.enemies.length > 0 || G.wave >= lv.waves || G.won || G.lost;
  renderDock();
}

/* ---------- level lifecycle ---------- */
function startLevel(idx) {
  G.levelIdx = idx;
  const lv = LEVELS[idx];
  G.energy = lv.energy;
  G.lives = lv.lives;
  G.wave = 0;
  G.running = true;
  G.spawning = false;
  G.spawnQueue = [];
  G.enemies = [];
  G.towers = [];
  G.shots = [];
  G.particles = [];
  G.selectedBuild = null;
  G.selectedTower = null;
  G.hover = null;
  G.speed = 1;
  G.won = false;
  G.lost = false;
  G.kills = 0;
  G.spent = 0;
  G.occupied = new Set();
  $('btn-speed').textContent = '×1';
  buildPath(lv);
  closeSheet();
  show('screen-game');
  updateHud();
}

function beginWave() {
  if (G.spawning || G.enemies.length || G.wave >= LEVELS[G.levelIdx].waves) return;
  G.wave++;
  G.spawnQueue = LEVELS[G.levelIdx].composition(G.wave - 1).slice();
  G.spawning = true;
  G.spawnTimer = 0.15;
  updateHud();
}

function endCheck() {
  if (G.lost || G.won) return;
  if (G.lives <= 0) {
    G.lost = true;
    G.running = false;
    $('result-title').textContent = 'CORE BREACHED';
    $('result-title').style.color = '#ff4d8d';
    $('result-body').textContent = `Wave ${G.wave} · Kills ${G.kills} · Energy spent ${G.spent}`;
    $('btn-next').style.display = 'none';
    show('screen-result');
    return;
  }
  const lv = LEVELS[G.levelIdx];
  if (!G.spawning && !G.enemies.length && G.wave >= lv.waves) {
    G.won = true;
    G.running = false;
    G.unlocked = Math.max(G.unlocked, G.levelIdx + 2);
    $('result-title').textContent = 'SECTOR SECURE';
    $('result-title').style.color = '';
    $('result-body').textContent = `All ${lv.waves} waves cleared · Kills ${G.kills} · Energy spent ${G.spent}`;
    $('btn-next').style.display = G.levelIdx < LEVELS.length - 1 ? '' : 'none';
    show('screen-result');
  }
}

/* ---------- input ---------- */
function canvasPos(ev) {
  const rect = canvas.getBoundingClientRect();
  const x = (ev.clientX - rect.left) * (W / rect.width);
  const y = (ev.clientY - rect.top) * (H / rect.height);
  return { x, y, c: clamp((x / CELL) | 0, 0, COLS - 1), r: clamp((y / CELL) | 0, 0, ROWS - 1) };
}

canvas.addEventListener('mousemove', (ev) => {
  const p = canvasPos(ev);
  G.hover = p;
});
canvas.addEventListener('mouseleave', () => { G.hover = null; });
canvas.addEventListener('click', (ev) => {
  if (!G.running) return;
  const p = canvasPos(ev);
  const key = cellKey(p.c, p.r);
  const existing = G.towers.find((t) => t.c === p.c && t.r === p.r);
  if (existing) {
    G.selectedBuild = null;
    G.selectedTower = existing;
    openSheet(existing, ev.clientX, ev.clientY);
    renderDock();
    return;
  }
  if (G.selectedBuild) {
    placeTower(p.c, p.r, G.selectedBuild);
    return;
  }
  closeSheet();
  G.selectedTower = null;
});

function canBuild(c, r) {
  const key = cellKey(c, r);
  if (G.pathCells.has(key)) return false;
  if (G.occupied.has(key)) return false;
  if (c < 0 || r < 0 || c >= COLS || r >= ROWS) return false;
  return true;
}

function placeTower(c, r, type) {
  const def = TOWERS[type];
  if (!def || !canBuild(c, r) || G.energy < def.cost) return;
  G.energy -= def.cost;
  G.spent += def.cost;
  const pos = cellCenter(c, r);
  G.towers.push({
    c, r, x: pos.x, y: pos.y, type, level: 1,
    cooldown: 0, angle: 0, spent: def.cost,
  });
  G.occupied.add(cellKey(c, r));
  burst(pos.x, pos.y, def.color, 14);
  updateHud();
}

function openSheet(t, cx, cy) {
  const def = TOWERS[t.type];
  const upCost = upgradeCost(t);
  $('sheet-body').innerHTML =
    `<strong>${def.name}</strong>  L${t.level}<br>` +
    `DMG ${scaled(def.dmg, t)} · RNG ${scaled(def.range, t) | 0}` +
    (def.rate ? ` · ROF ${scaled(def.rate, t).toFixed(1)}` : '') +
    (def.aura ? '<br>AURA SLOW FIELD' : '') +
    `<br>Next upgrade: ${upCost} E`;
  $('btn-upgrade').disabled = G.energy < upCost || t.level >= 3;
  $('btn-upgrade').textContent = t.level >= 3 ? 'MAXED' : `UPGRADE (${upCost})`;
  const sheet = $('tower-sheet');
  sheet.classList.remove('hidden');
  const rect = canvas.getBoundingClientRect();
  const shell = canvas.parentElement.getBoundingClientRect();
  sheet.style.left = Math.min(cx - shell.left + 12, shell.width - 220) + 'px';
  sheet.style.top = Math.min(cy - shell.top + 12, shell.height - 140) + 'px';
}

function closeSheet() {
  $('tower-sheet').classList.add('hidden');
}

function upgradeCost(t) {
  return Math.floor(TOWERS[t.type].cost * (0.7 + t.level * 0.55));
}
function scaled(base, t) {
  if (!base) return 0;
  return base * (1 + (t.level - 1) * 0.35);
}

function upgradeSelected() {
  const t = G.selectedTower;
  if (!t || t.level >= 3) return;
  const cost = upgradeCost(t);
  if (G.energy < cost) return;
  G.energy -= cost;
  G.spent += cost;
  t.level++;
  t.spent += cost;
  burst(t.x, t.y, TOWERS[t.type].color, 18);
  const sheet = $('tower-sheet');
  const shell = canvas.parentElement.getBoundingClientRect();
  openSheet(t, shell.left + parseFloat(sheet.style.left || 0), shell.top + parseFloat(sheet.style.top || 0));
  updateHud();
}

function sellSelected() {
  const t = G.selectedTower;
  if (!t) return;
  const refund = Math.floor(t.spent * 0.6);
  G.energy += refund;
  G.occupied.delete(cellKey(t.c, t.r));
  G.towers = G.towers.filter((x) => x !== t);
  G.selectedTower = null;
  closeSheet();
  burst(t.x, t.y, '#ffffff', 10);
  updateHud();
}

/* ---------- combat ---------- */
function spawnEnemy(type) {
  const def = ENEMIES[type];
  const start = G.pathPts[0];
  G.enemies.push({
    type, x: start.x, y: start.y,
    hp: def.hp * (1 + G.wave * 0.08),
    maxHp: def.hp * (1 + G.wave * 0.08),
    speed: def.speed,
    armor: def.armor,
    r: def.r,
    color: def.color,
    pathIdx: 0,
    slow: 1,
    slowT: 0,
    dead: false,
  });
}

function nearestEnemy(tower, range) {
  let best = null, bestD = range;
  for (const e of G.enemies) {
    if (e.dead) continue;
    const d = dist(tower, e);
    if (d <= bestD) { bestD = d; best = e; }
  }
  return best;
}

function fire(tower, target) {
  const def = TOWERS[tower.type];
  const dmg = scaled(def.dmg, tower);
  const range = scaled(def.range, tower);
  if (def.shot === 'beam') {
    G.shots.push({
      kind: 'beam', x: tower.x, y: tower.y, tx: target.x, ty: target.y,
      life: 0.18, color: def.color, dmg, target, slow: def.slow, slowT: def.slowT,
    });
    damage(target, dmg);
    if (def.slow) applySlow(target, def.slow, def.slowT);
    return;
  }
  if (def.shot === 'burst') {
    G.shots.push({
      kind: 'burst', x: target.x, y: target.y, life: 0.28, color: def.color,
      radius: 0, maxR: def.splash * (1 + (tower.level - 1) * 0.15), dmg,
    });
    for (const e of G.enemies) {
      if (!e.dead && dist(target, e) <= def.splash * (1 + (tower.level - 1) * 0.15)) damage(e, dmg);
    }
    return;
  }
  if (def.shot === 'lance') {
    const ang = Math.atan2(target.y - tower.y, target.x - tower.x);
    G.shots.push({
      kind: 'lance', x: tower.x, y: tower.y, ang, life: 0.35, color: def.color,
      dmg, pierce: def.pierce + tower.level - 1, hit: new Set(), range,
    });
    return;
  }
  // disc
  G.shots.push({
    kind: 'disc', x: tower.x, y: tower.y, tx: target.x, ty: target.y,
    vx: 0, vy: 0, speed: 420, life: 1.4, color: def.color, dmg, target,
  });
  const ang = Math.atan2(target.y - tower.y, target.x - tower.x);
  G.shots[G.shots.length - 1].vx = Math.cos(ang) * 420;
  G.shots[G.shots.length - 1].vy = Math.sin(ang) * 420;
}

function applySlow(e, mul, t) {
  e.slow = Math.min(e.slow, mul);
  e.slowT = Math.max(e.slowT, t);
}

function damage(e, amount) {
  if (e.dead) return;
  const dealt = Math.max(1, amount - e.armor);
  e.hp -= dealt;
  burst(e.x, e.y, e.color, 4);
  if (e.hp <= 0) {
    e.dead = true;
    G.energy += ENEMIES[e.type].reward;
    G.kills++;
    burst(e.x, e.y, e.color, 20);
  }
}

function burst(x, y, color, n) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = rand(30, 140);
    G.particles.push({
      x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
      life: rand(0.25, 0.7), max: 0.7, color, size: rand(1.5, 3.5),
    });
  }
}

/* ---------- update ---------- */
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (G.running) update(dt * G.speed);
  draw();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

function update(dt) {
  // spawn
  if (G.spawning) {
    G.spawnTimer -= dt;
    if (G.spawnTimer <= 0) {
      if (G.spawnQueue.length) {
        spawnEnemy(G.spawnQueue.shift());
        G.spawnTimer = 0.42;
      } else {
        G.spawning = false;
        updateHud();
      }
    }
  }

  // enemies
  for (const e of G.enemies) {
    if (e.dead) continue;
    if (e.slowT > 0) {
      e.slowT -= dt;
      if (e.slowT <= 0) e.slow = 1;
    }
    let budget = e.speed * e.slow * dt;
    while (budget > 0 && !e.dead) {
      const target = G.pathPts[e.pathIdx + 1];
      if (!target) {
        e.dead = true;
        G.lives--;
        burst(e.x, e.y, '#ff4d8d', 16);
        break;
      }
      const dx = target.x - e.x, dy = target.y - e.y;
      const d = Math.hypot(dx, dy);
      // Skip degenerate / already-reached waypoints instead of stalling forever.
      if (d < 0.001) { e.pathIdx++; continue; }
      if (budget >= d) {
        e.x = target.x; e.y = target.y;
        e.pathIdx++;
        budget -= d;
      } else {
        e.x += (dx / d) * budget;
        e.y += (dy / d) * budget;
        budget = 0;
      }
    }
  }
  const before = G.enemies.length;
  G.enemies = G.enemies.filter((e) => !e.dead);
  // Re-enable START WAVE / refresh HUD when the last enemy of a wave dies.
  if (before !== G.enemies.length) updateHud();

  // towers
  for (const t of G.towers) {
    const def = TOWERS[t.type];
    const range = scaled(def.range, t);
    if (def.aura) {
      for (const e of G.enemies) {
        if (dist(t, e) <= range) applySlow(e, def.slow, 0.2);
      }
      continue;
    }
    t.cooldown = Math.max(0, t.cooldown - dt);
    const target = nearestEnemy(t, range);
    if (target) {
      // Always track while a target is in range (not only on the fire tick).
      t.angle = Math.atan2(target.y - t.y, target.x - t.x);
      if (t.cooldown <= 0 && def.rate > 0) {
        fire(t, target);
        t.cooldown = 1 / scaled(def.rate, t);
      }
    }
  }

  // shots
  for (const s of G.shots) {
    s.life -= dt;
    if (s.kind === 'disc') {
      s.x += s.vx * dt; s.y += s.vy * dt;
      for (const e of G.enemies) {
        if (!e.dead && dist(s, e) < e.r + 6) {
          damage(e, s.dmg);
          s.life = 0;
          break;
        }
      }
    } else if (s.kind === 'lance') {
      const len = s.range;
      const x2 = s.x + Math.cos(s.ang) * len;
      const y2 = s.y + Math.sin(s.ang) * len;
      for (const e of G.enemies) {
        if (e.dead || s.hit.has(e)) continue;
        if (pointSegDist(e.x, e.y, s.x, s.y, x2, y2) < e.r + 4) {
          damage(e, s.dmg);
          s.hit.add(e);
          if (s.hit.size >= s.pierce) { s.life = 0; break; }
        }
      }
    } else if (s.kind === 'burst') {
      s.radius = lerp(0, s.maxR, 1 - s.life / 0.28);
    }
  }
  G.shots = G.shots.filter((s) => s.life > 0);

  // Remove enemies killed by shots this frame so wave-clear / HUD update immediately.
  if (G.enemies.some((e) => e.dead)) {
    G.enemies = G.enemies.filter((e) => !e.dead);
    updateHud();
  }

  // particles
  for (const p of G.particles) {
    p.life -= dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vx *= 0.96; p.vy *= 0.96;
  }
  G.particles = G.particles.filter((p) => p.life > 0);

  endCheck();
}

function pointSegDist(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1;
  const l2 = dx * dx + dy * dy || 1;
  let t = ((px - x1) * dx + (py - y1) * dy) / l2;
  t = clamp(t, 0, 1);
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

/* ---------- draw ---------- */
function draw() {
  ctx.clearRect(0, 0, W, H);
  // floor
  const grd = ctx.createRadialGradient(W / 2, H / 2, 40, W / 2, H * 0.9, H);
  grd.addColorStop(0, '#071525');
  grd.addColorStop(1, '#02060d');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, W, H);

  // grid
  ctx.strokeStyle = 'rgba(61,231,255,0.07)';
  ctx.lineWidth = 1;
  for (let c = 0; c <= COLS; c++) {
    ctx.beginPath(); ctx.moveTo(c * CELL, 0); ctx.lineTo(c * CELL, H); ctx.stroke();
  }
  for (let r = 0; r <= ROWS; r++) {
    ctx.beginPath(); ctx.moveTo(0, r * CELL); ctx.lineTo(W, r * CELL); ctx.stroke();
  }

  // path glow
  if (G.pathPts.length) {
    ctx.save();
    ctx.strokeStyle = 'rgba(61,231,255,0.18)';
    ctx.lineWidth = CELL * 0.72;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.beginPath();
    G.pathPts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
    ctx.stroke();
    ctx.strokeStyle = '#3de7ff';
    ctx.shadowColor = '#3de7ff';
    ctx.shadowBlur = 12;
    ctx.lineWidth = 3;
    ctx.beginPath();
    G.pathPts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
    ctx.stroke();
    ctx.restore();
  }

  // hover / ghost
  if (G.hover && G.selectedBuild && G.running) {
    const ok = canBuild(G.hover.c, G.hover.r) && G.energy >= TOWERS[G.selectedBuild].cost;
    const def = TOWERS[G.selectedBuild];
    const pos = cellCenter(G.hover.c, G.hover.r);
    ctx.fillStyle = ok ? 'rgba(61,231,255,0.12)' : 'rgba(255,77,141,0.15)';
    ctx.fillRect(G.hover.c * CELL, G.hover.r * CELL, CELL, CELL);
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, scaled(def.range, { level: 1 }), 0, Math.PI * 2);
    ctx.strokeStyle = ok ? 'rgba(61,231,255,0.35)' : 'rgba(255,77,141,0.35)';
    ctx.stroke();
    drawTowerIcon(ctx, def, pos.x, pos.y, 1.1);
  }

  // towers
  for (const t of G.towers) {
    const def = TOWERS[t.type];
    if (G.selectedTower === t) {
      ctx.beginPath();
      ctx.arc(t.x, t.y, scaled(def.range, t), 0, Math.PI * 2);
      ctx.strokeStyle = def.color + '55';
      ctx.stroke();
    }
    if (def.aura) {
      ctx.beginPath();
      ctx.arc(t.x, t.y, scaled(def.range, t), 0, Math.PI * 2);
      ctx.strokeStyle = def.color + '22';
      ctx.fillStyle = def.color + '08';
      ctx.fill(); ctx.stroke();
    }
    drawTowerBody(t);
  }

  // enemies
  for (const e of G.enemies) drawEnemy(e);

  // shots
  for (const s of G.shots) drawShot(s);

  // particles
  for (const p of G.particles) {
    ctx.globalAlpha = clamp(p.life / p.max, 0, 1);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

function drawTowerBody(t) {
  const def = TOWERS[t.type];
  ctx.save();
  ctx.translate(t.x, t.y);
  ctx.rotate(t.angle || 0);
  // base
  ctx.strokeStyle = def.color;
  ctx.fillStyle = '#041018';
  ctx.lineWidth = 2;
  ctx.shadowColor = def.color;
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.moveTo(-14, 12); ctx.lineTo(-14, -6); ctx.lineTo(0, -14); ctx.lineTo(14, -6); ctx.lineTo(14, 12);
  ctx.closePath();
  ctx.fill(); ctx.stroke();
  // turret accent
  ctx.beginPath();
  ctx.moveTo(0, -2); ctx.lineTo(16, 0); ctx.lineTo(0, 2);
  ctx.strokeStyle = def.color;
  ctx.stroke();
  ctx.restore();
  // level pips
  for (let i = 0; i < t.level; i++) {
    ctx.fillStyle = def.color;
    ctx.fillRect(t.x - 8 + i * 7, t.y + 16, 5, 3);
  }
}

function drawEnemy(e) {
  const def = ENEMIES[e.type];
  ctx.save();
  ctx.translate(e.x, e.y);
  ctx.shadowColor = e.color;
  ctx.shadowBlur = 10;
  ctx.strokeStyle = e.color;
  ctx.fillStyle = e.color + '33';
  ctx.lineWidth = 2;
  if (e.type === 'bit') {
    ctx.beginPath();
    ctx.moveTo(0, -e.r); ctx.lineTo(e.r, 0); ctx.lineTo(0, e.r); ctx.lineTo(-e.r, 0);
    ctx.closePath(); ctx.fill(); ctx.stroke();
  } else if (e.type === 'cycle') {
    ctx.beginPath();
    ctx.moveTo(e.r + 4, 0); ctx.lineTo(-e.r, -e.r * 0.7); ctx.lineTo(-e.r * 0.4, 0); ctx.lineTo(-e.r, e.r * 0.7);
    ctx.closePath(); ctx.fill(); ctx.stroke();
  } else if (e.type === 'tank') {
    ctx.strokeRect(-e.r, -e.r * 0.7, e.r * 2, e.r * 1.4);
    ctx.fillRect(-e.r, -e.r * 0.7, e.r * 2, e.r * 1.4);
  } else if (e.type === 'iso') {
    ctx.beginPath(); ctx.arc(0, 0, e.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, e.r * 0.45, 0, Math.PI * 2); ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(-e.r, e.r * 0.6); ctx.lineTo(0, -e.r); ctx.lineTo(e.r, e.r * 0.6);
    ctx.closePath(); ctx.fill(); ctx.stroke();
  }
  ctx.restore();
  // hp bar
  const pct = clamp(e.hp / e.maxHp, 0, 1);
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.fillRect(e.x - 14, e.y - e.r - 10, 28, 4);
  ctx.fillStyle = pct > 0.4 ? e.color : '#ff4d8d';
  ctx.fillRect(e.x - 14, e.y - e.r - 10, 28 * pct, 4);
}

function drawShot(s) {
  ctx.save();
  ctx.strokeStyle = s.color;
  ctx.fillStyle = s.color;
  ctx.shadowColor = s.color;
  ctx.shadowBlur = 12;
  if (s.kind === 'disc') {
    ctx.beginPath(); ctx.arc(s.x, s.y, 5, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(s.x, s.y, 2, 0, Math.PI * 2); ctx.fill();
  } else if (s.kind === 'beam') {
    ctx.globalAlpha = clamp(s.life / 0.18, 0, 1);
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.tx, s.ty); ctx.stroke();
  } else if (s.kind === 'burst') {
    ctx.globalAlpha = clamp(s.life / 0.28, 0, 1) * 0.7;
    ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2); ctx.stroke();
  } else if (s.kind === 'lance') {
    ctx.globalAlpha = clamp(s.life / 0.35, 0, 1);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x + Math.cos(s.ang) * s.range, s.y + Math.sin(s.ang) * s.range);
    ctx.stroke();
  }
  ctx.restore();
}

/* ---------- splash animation ---------- */
let splashRaf = 0;
let splashRunning = false;
function startSplash() {
  if (splashRunning) return;
  splashRunning = true;
  const c = $('splash-canvas');
  const g = c.getContext('2d');
  const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);
  const lines = Array.from({ length: 18 }, () => ({
    x: Math.random(), y: Math.random(),
    spd: rand(0.05, 0.18), w: rand(40, 160), hue: pick(['#3de7ff', '#9b6bff', '#ff4d8d', '#7dff9a']),
  }));
  const tick = () => {
    if (!splashRunning) return;
    g.fillStyle = 'rgba(3,7,15,0.35)';
    g.fillRect(0, 0, c.width, c.height);
    // perspective grid
    g.save();
    g.strokeStyle = 'rgba(61,231,255,0.2)';
    g.beginPath();
    for (let i = 0; i < 16; i++) {
      const y = c.height * 0.55 + i * i * 1.8;
      g.moveTo(0, y); g.lineTo(c.width, y);
    }
    for (let i = -20; i <= 20; i++) {
      g.moveTo(c.width / 2, c.height * 0.52);
      g.lineTo(c.width / 2 + i * c.width * 0.08, c.height);
    }
    g.stroke();
    g.restore();
    lines.forEach((l) => {
      l.y += l.spd * 0.01;
      if (l.y > 1.1) { l.y = -0.1; l.x = Math.random(); }
      const x = l.x * c.width, y = l.y * c.height;
      g.strokeStyle = l.hue;
      g.shadowColor = l.hue;
      g.shadowBlur = 12;
      g.lineWidth = 2;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + l.w, y); g.stroke();
    });
    splashRaf = requestAnimationFrame(tick);
  };
  tick();
}
function stopSplash() {
  splashRunning = false;
  cancelAnimationFrame(splashRaf);
}

/* boot */
show('screen-splash');
