'use strict';

/* ============================================================
   CIRCUIT BREAKER — original TRON-inspired tower defense
   Benchmark run: glm-5.2-high (one shot from PROMPT.md)
   ============================================================ */

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
canvas.width = 960; canvas.height = 576;
const W = canvas.width, H = canvas.height;
const CELL = 48, COLS = 20, ROWS = 12;

const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const lerp = (a, b, t) => a + (b - a) * t;
const rand = (a, b) => a + Math.random() * (b - a);

/* ---------- tower defs ---------- */
const TOWERS = {
  node:    { name: 'NODE',    color: '#36e3ff', cost: 70,  dmg: 12, rate: 3.0, range: 140, proj: 'bolt',  desc: 'Rapid trace fire' },
  arc:     { name: 'ARC',     color: '#ffae3d', cost: 130, dmg: 16, rate: 1.0, range: 120, proj: 'chain', chains: 3, desc: 'Chains between foes' },
  pulse:   { name: 'PULSE',   color: '#ff3d8b', cost: 120, dmg: 22, rate: 0.9, range: 110, proj: 'pulse', splash: 60, desc: 'Area detonation' },
  lance:   { name: 'LANCE',   color: '#a98bff', cost: 200, dmg: 50, rate: 0.5, range: 240, proj: 'lance', pierce: 3, desc: 'Long-range pierce' },
  barrier: { name: 'BARRIER', color: '#5dff9b', cost: 100, dmg: 0,  rate: 0,   range: 100, aura: true, slow: 0.5, desc: 'Slowing field' },
};

/* ---------- enemy defs ---------- */
const ENEMIES = {
  wisp:   { name: 'WISP',   hp: 32,  speed: 82, armor: 0, reward: 6,  r: 8,  color: '#36e3ff' },
  drone:  { name: 'DRONE',  hp: 72,  speed: 50, armor: 0, reward: 11, r: 12, color: '#ffae3d' },
  bug:    { name: 'BUG',    hp: 46,  speed: 72, armor: 0, reward: 9,  r: 10, color: '#5dff9b' },
  sentry: { name: 'SENTRY', hp: 210, speed: 38, armor: 5, reward: 26, r: 15, color: '#a98bff' },
  mcp:    { name: 'MCP',    hp: 150, speed: 62, armor: 3, reward: 34, r: 13, color: '#ff5566' },
};

/* ---------- levels ---------- */
const LEVELS = [
  {
    name: 'SECTOR 01 — OUTERMESH', diff: 'EASY',
    desc: 'A single winding trace. Calibrate your breakers.',
    energy: 240, lives: 20, waves: 8,
    path: [[-1, 2], [4, 2], [4, 8], [10, 8], [10, 3], [16, 3], [16, 7], [20, 7]],
    wave: (n) => mix(n, [['wisp', 4 + n], ['drone', 3 + n], n > 3 ? ['bug', n - 2] : null, n === 7 ? ['sentry', 2] : null]),
  },
  {
    name: 'SECTOR 02 — DATAGRID', diff: 'MEDIUM',
    desc: 'Serpentine circuit. Bugs swarm in force.',
    energy: 280, lives: 16, waves: 10,
    path: [[-1, 1], [15, 1], [15, 5], [3, 5], [3, 9], [20, 9]],
    wave: (n) => mix(n, [['drone', 4 + n], ['bug', 3 + n], n > 4 ? ['sentry', Math.floor(n / 3)] : null, n >= 8 ? ['mcp', 1 + Math.floor((n - 8) / 2)] : null]),
  },
  {
    name: 'SECTOR 03 — CORE NODE', diff: 'HARD',
    desc: 'Tight bends. MCP elites breach the core.',
    energy: 320, lives: 12, waves: 12,
    path: [[-1, 6], [5, 6], [5, 1], [12, 1], [12, 9], [6, 9], [6, 4], [17, 4], [17, 7], [20, 7]],
    wave: (n) => mix(n, [['bug', 5 + n], ['sentry', 1 + Math.floor(n / 2)], ['drone', 4 + n], ['mcp', Math.max(0, n - 3)], ['wisp', 6 + n]]),
  },
];

function mix(n, specs) {
  const out = [];
  specs.filter(Boolean).forEach(([t, c]) => { for (let i = 0; i < c; i++) out.push(t); });
  for (let i = out.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* ---------- state ---------- */
const G = {
  levelIdx: 0, energy: 0, lives: 0, wave: 0,
  running: false, spawning: false, spawnQueue: [], spawnGap: 0,
  enemies: [], towers: [], shots: [], particles: [], floats: [],
  selectedBuild: null, selectedTower: null, hover: null,
  speed: 1, won: false, lost: false, kills: 0, spent: 0,
  unlocked: 1, pathPx: [], pathCells: new Set(), occupied: new Set(),
};

function cellCenter(c, r) { return { x: c * CELL + CELL / 2, y: r * CELL + CELL / 2 }; }
function cellKey(c, r) { return c + ',' + r; }

/* Build pixel path directly from waypoints (no per-cell expansion -> no dup points),
   and separately mark occupied path cells. */
function buildPath(level) {
  G.pathPx = level.path.map(([c, r]) => cellCenter(c, r));
  G.pathCells = new Set();
  for (let i = 0; i < level.path.length - 1; i++) {
    let [c1, r1] = level.path[i], [c2, r2] = level.path[i + 1];
    const dc = Math.sign(c2 - c1), dr = Math.sign(r2 - r1);
    let c = c1, r = r1;
    while (true) {
      if (c >= 0 && c < COLS && r >= 0 && r < ROWS) G.pathCells.add(cellKey(c, r));
      if (c === c2 && r === r2) break;
      c += dc; r += dr;
    }
  }
}

/* ---------- screens ---------- */
function show(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('on'));
  $(id).classList.add('on');
}

$('b-enter').onclick = () => show('s-menu');
$('b-play').onclick = () => startLevel(0);
$('b-sectors').onclick = () => { renderSectors(); show('s-sectors'); };
$('b-help').onclick = () => show('s-help');
$('b-sectors-back').onclick = () => show('s-menu');
$('b-help-back').onclick = () => show('s-menu');
$('b-abort').onclick = () => { G.running = false; show('s-menu'); };
$('b-result-menu').onclick = () => show('s-menu');
$('b-retry').onclick = () => startLevel(G.levelIdx);
$('b-next').onclick = () => startLevel(Math.min(G.levelIdx + 1, LEVELS.length - 1));
$('b-speed').onclick = () => {
  G.speed = G.speed === 1 ? 2 : G.speed === 2 ? 3 : 1;
  $('b-speed').textContent = '×' + G.speed;
};
$('b-launch').onclick = launchWave;
$('b-up').onclick = upgradeSelected;
$('b-recycle').onclick = recycleSelected;
$('b-sheet-close').onclick = () => closeSheet();

/* ---------- sectors + dock ---------- */
function renderSectors() {
  const wrap = $('sector-list');
  wrap.innerHTML = '';
  LEVELS.forEach((lv, i) => {
    const locked = i >= G.unlocked;
    const card = document.createElement('button');
    card.className = 'sec-card' + (locked ? ' locked' : '');
    card.innerHTML = `<h3>${lv.name}</h3><div class="d">${lv.diff} · ${lv.waves} WAVES</div><p>${lv.desc}</p>`;
    const mini = document.createElement('canvas');
    mini.width = 200; mini.height = 96;
    drawMini(mini, lv);
    card.appendChild(mini);
    if (!locked) card.onclick = () => startLevel(i);
    wrap.appendChild(card);
  });
}

function drawMini(c, lv) {
  const g = c.getContext('2d');
  g.fillStyle = '#02060d'; g.fillRect(0, 0, c.width, c.height);
  const sx = c.width / COLS, sy = c.height / ROWS;
  g.strokeStyle = 'rgba(54,227,255,0.12)'; g.lineWidth = 1;
  for (let x = 0; x <= COLS; x++) { g.beginPath(); g.moveTo(x * sx, 0); g.lineTo(x * sx, c.height); g.stroke(); }
  for (let y = 0; y <= ROWS; y++) { g.beginPath(); g.moveTo(0, y * sy); g.lineTo(c.width, y * sy); g.stroke(); }
  g.strokeStyle = '#36e3ff'; g.lineWidth = 3; g.shadowColor = '#36e3ff'; g.shadowBlur = 8;
  g.beginPath();
  lv.path.forEach(([col, row], i) => {
    const x = (col + 0.5) * sx, y = (row + 0.5) * sy;
    i ? g.lineTo(x, y) : g.moveTo(x, y);
  });
  g.stroke();
}

function renderDock() {
  const dock = $('dock');
  dock.innerHTML = '';
  Object.values(TOWERS).forEach((t) => {
    const el = document.createElement('button');
    el.className = 'dock-item' + (G.selectedBuild === t.name.toLowerCase() ? ' sel' : '') + (G.energy < t.cost ? ' poor' : '');
    const ic = document.createElement('canvas');
    ic.width = 40; ic.height = 40;
    drawTowerIcon(ic.getContext('2d'), t, 20, 20);
    el.appendChild(ic);
    const nm = document.createElement('div'); nm.className = 'nm'; nm.textContent = t.name; el.appendChild(nm);
    const ct = document.createElement('div'); ct.className = 'ct'; ct.textContent = t.cost + ' P'; el.appendChild(ct);
    el.onclick = () => { G.selectedBuild = G.selectedBuild === t.name.toLowerCase() ? null : t.name.toLowerCase(); G.selectedTower = null; closeSheet(); renderDock(); };
    dock.appendChild(el);
  });
}

function drawTowerIcon(g, def, x, y) {
  g.save(); g.translate(x, y);
  g.strokeStyle = def.color; g.fillStyle = def.color + '33';
  g.lineWidth = 2; g.shadowColor = def.color; g.shadowBlur = 8;
  const k = def.name.toLowerCase();
  if (k === 'node') { g.beginPath(); g.arc(0, 0, 10, 0, Math.PI * 2); g.fill(); g.stroke(); g.beginPath(); g.arc(0, 0, 4, 0, Math.PI * 2); g.stroke(); }
  else if (k === 'arc') { g.beginPath(); for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; const r = i % 2 ? 4 : 10; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); } g.closePath(); g.fill(); g.stroke(); }
  else if (k === 'pulse') { g.beginPath(); g.arc(0, 0, 11, 0, Math.PI * 2); g.stroke(); g.beginPath(); g.arc(0, 0, 6, 0, Math.PI * 2); g.fill(); g.stroke(); }
  else if (k === 'lance') { g.beginPath(); g.moveTo(0, -12); g.lineTo(4, 0); g.lineTo(0, 12); g.lineTo(-4, 0); g.closePath(); g.fill(); g.stroke(); }
  else { g.strokeRect(-10, -10, 20, 20); g.beginPath(); g.moveTo(-6, -6); g.lineTo(6, 6); g.moveTo(6, -6); g.lineTo(-6, 6); g.stroke(); }
  g.restore();
}

function updateHud() {
  const lv = LEVELS[G.levelIdx];
  $('h-sector').textContent = lv.name.split('—')[0].trim();
  $('h-wave').textContent = `WAVE ${Math.min(G.wave, lv.waves)}/${lv.waves}`;
  $('h-energy').textContent = `PWR ${G.energy | 0}`;
  $('h-core').textContent = `CORE ${G.lives}`;
  $('b-launch').disabled = G.spawning || G.enemies.length > 0 || G.wave >= lv.waves || G.won || G.lost;
  renderDock();
}

/* ---------- lifecycle ---------- */
function startLevel(idx) {
  G.levelIdx = idx;
  const lv = LEVELS[idx];
  G.energy = lv.energy; G.lives = lv.lives; G.wave = 0;
  G.running = true; G.spawning = false; G.spawnQueue = []; G.spawnGap = 0;
  G.enemies = []; G.towers = []; G.shots = []; G.particles = []; G.floats = [];
  G.selectedBuild = null; G.selectedTower = null; G.hover = null;
  G.speed = 1; G.won = false; G.lost = false; G.kills = 0; G.spent = 0;
  G.occupied = new Set();
  $('b-speed').textContent = '×1';
  buildPath(lv);
  closeSheet();
  show('s-game');
  updateHud();
}

function launchWave() {
  if (G.spawning || G.enemies.length || G.wave >= LEVELS[G.levelIdx].waves) return;
  G.wave++;
  G.spawnQueue = LEVELS[G.levelIdx].wave(G.wave - 1).slice();
  G.spawning = true;
  G.spawnGap = 0.4;
  updateHud();
}

function endCheck() {
  if (G.lost || G.won) return;
  if (G.lives <= 0) {
    G.lost = true; G.running = false;
    $('r-title').textContent = 'CORE BREACHED'; $('r-title').style.color = '#ff5566';
    $('r-body').textContent = `Wave ${G.wave} · Kills ${G.kills} · PWR spent ${G.spent}`;
    $('b-next').style.display = 'none';
    show('s-result'); return;
  }
  const lv = LEVELS[G.levelIdx];
  if (!G.spawning && !G.enemies.length && G.wave >= lv.waves) {
    G.won = true; G.running = false;
    G.unlocked = Math.max(G.unlocked, G.levelIdx + 2);
    $('r-title').textContent = 'SECTOR HELD'; $('r-title').style.color = '';
    $('r-body').textContent = `All ${lv.waves} waves cleared · Kills ${G.kills} · PWR spent ${G.spent}`;
    $('b-next').style.display = G.levelIdx < LEVELS.length - 1 ? '' : 'none';
    show('s-result');
  }
}

/* ---------- input ---------- */
function boardPos(ev) {
  const r = canvas.getBoundingClientRect();
  const x = (ev.clientX - r.left) * (W / r.width);
  const y = (ev.clientY - r.top) * (H / r.height);
  return { x, y, c: clamp((x / CELL) | 0, 0, COLS - 1), r: clamp((y / CELL) | 0, 0, ROWS - 1) };
}
canvas.addEventListener('mousemove', (ev) => { G.hover = boardPos(ev); });
canvas.addEventListener('mouseleave', () => { G.hover = null; });
canvas.addEventListener('click', (ev) => {
  if (!G.running) return;
  const p = boardPos(ev);
  const existing = G.towers.find((t) => t.c === p.c && t.r === p.r);
  if (existing) { G.selectedBuild = null; G.selectedTower = existing; openSheet(existing, ev.clientX, ev.clientY); renderDock(); return; }
  if (G.selectedBuild) { placeTower(p.c, p.r, G.selectedBuild); return; }
  closeSheet(); G.selectedTower = null;
});

function canBuild(c, r) {
  const k = cellKey(c, r);
  return c >= 0 && r >= 0 && c < COLS && r < ROWS && !G.pathCells.has(k) && !G.occupied.has(k);
}

function placeTower(c, r, name) {
  const def = TOWERS[name];
  if (!def || !canBuild(c, r) || G.energy < def.cost) return;
  G.energy -= def.cost; G.spent += def.cost;
  const p = cellCenter(c, r);
  G.towers.push({ c, r, x: p.x, y: p.y, name: name, def, level: 1, cd: 0, angle: 0, spent: def.cost });
  G.occupied.add(cellKey(c, r));
  burst(p.x, p.y, def.color, 14);
  updateHud();
}

function scaled(base, t) { return base ? base * (1 + (t.level - 1) * 0.35) : 0; }
function upCost(t) { return Math.floor(t.def.cost * (0.7 + t.level * 0.55)); }

function openSheet(t, cx, cy) {
  const def = t.def;
  const up = upCost(t);
  $('sheet-info').innerHTML =
    `<b style="color:${def.color}">${def.name}</b>  L${t.level}<br>` +
    `DMG ${scaled(def.dmg, t) | 0} · RNG ${scaled(def.range, t) | 0}` +
    (def.rate ? ` · ROF ${scaled(def.rate, t).toFixed(1)}` : '') +
    (def.aura ? '<br>SLOW FIELD' : '') +
    `<br>Upgrade: ${up} P`;
  $('b-up').disabled = G.energy < up || t.level >= 3;
  $('b-up').textContent = t.level >= 3 ? 'MAX' : `UPGRADE (${up})`;
  const sheet = $('sheet');
  sheet.classList.remove('hidden');
  const shell = canvas.parentElement.getBoundingClientRect();
  sheet.style.left = Math.min(cx - shell.left + 12, shell.width - 220) + 'px';
  sheet.style.top = Math.min(cy - shell.top + 12, shell.height - 140) + 'px';
}
function closeSheet() { $('sheet').classList.add('hidden'); }

function upgradeSelected() {
  const t = G.selectedTower;
  if (!t || t.level >= 3) return;
  const cost = upCost(t);
  if (G.energy < cost) return;
  G.energy -= cost; G.spent += cost; t.level++; t.spent += cost;
  burst(t.x, t.y, t.def.color, 18);
  const sheet = $('sheet');
  const shell = canvas.parentElement.getBoundingClientRect();
  openSheet(t, shell.left + parseFloat(sheet.style.left || 0), shell.top + parseFloat(sheet.style.top || 0));
  updateHud();
}

function recycleSelected() {
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
  const start = G.pathPx[0];
  G.enemies.push({
    type, x: start.x, y: start.y,
    hp: def.hp * (1 + G.wave * 0.08), maxHp: def.hp * (1 + G.wave * 0.08),
    speed: def.speed, armor: def.armor, r: def.r, color: def.color,
    pi: 0, slow: 1, slowT: 0, dead: false,
  });
}

function nearest(tower, range) {
  let best = null, bestProg = -1;
  for (const e of G.enemies) {
    if (e.dead) continue;
    if (dist(tower, e) <= range) {
      const prog = e.pi + (e.x === G.pathPx[e.pi] && e.y === G.pathPx[e.pi] ? 0 : 0.5);
      if (prog > bestProg) { bestProg = prog; best = e; }
    }
  }
  return best;
}

function fire(t, target) {
  const def = t.def;
  const dmg = scaled(def.dmg, t);
  const range = scaled(def.range, t);
  if (def.proj === 'bolt') {
    G.shots.push({ kind: 'bolt', x: t.x, y: t.y, tx: target.x, ty: target.y, speed: 460, dmg, color: def.color, life: 1.2, target });
    const a = Math.atan2(target.y - t.y, target.x - t.x);
    const s = G.shots[G.shots.length - 1];
    s.vx = Math.cos(a) * 460; s.vy = Math.sin(a) * 460;
  } else if (def.proj === 'chain') {
    let cur = target; const hit = new Set([cur]); const pts = [{ x: t.x, y: t.y }, { x: cur.x, y: cur.y }];
    damage(cur, dmg);
    for (let i = 1; i < def.chains; i++) {
      let next = null, bd = 120;
      for (const e of G.enemies) { if (e.dead || hit.has(e)) continue; const d = dist(cur, e); if (d < bd) { bd = d; next = e; } }
      if (!next) break;
      hit.add(next); pts.push({ x: next.x, y: next.y });
      damage(next, dmg * Math.pow(0.7, i));
      cur = next;
    }
    G.shots.push({ kind: 'chain', pts, color: def.color, life: 0.14 });
  } else if (def.proj === 'pulse') {
    G.shots.push({ kind: 'pulse', x: target.x, y: target.y, life: 0.3, color: def.color, r: 0, maxR: def.splash * (1 + (t.level - 1) * 0.15), dmg });
    for (const e of G.enemies) { if (!e.dead && dist(target, e) <= def.splash * (1 + (t.level - 1) * 0.15)) damage(e, dmg); }
  } else if (def.proj === 'lance') {
    const a = Math.atan2(target.y - t.y, target.x - t.x);
    G.shots.push({ kind: 'lance', x: t.x, y: t.y, ang: a, life: 0.32, color: def.color, dmg, pierce: def.pierce + t.level - 1, hit: new Set(), range });
  }
}

function applySlow(e, mul, t) { e.slow = Math.min(e.slow, mul); e.slowT = Math.max(e.slowT, t); }

function damage(e, amount) {
  if (e.dead) return;
  const dealt = Math.max(1, amount - e.armor);
  e.hp -= dealt;
  burst(e.x, e.y, e.color, 3);
  if (e.hp <= 0) {
    e.dead = true; G.energy += ENEMIES[e.type].reward; G.kills++;
    burst(e.x, e.y, e.color, 18);
    G.floats.push({ x: e.x, y: e.y - 10, text: '+' + ENEMIES[e.type].reward, color: '#ffae3d', life: 0.8 });
  }
}

function burst(x, y, color, n) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, sp = rand(30, 140);
    G.particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: rand(0.25, 0.65), max: 0.65, color, size: rand(1.5, 3.5) });
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
  if (G.spawning) {
    G.spawnGap -= dt;
    if (G.spawnGap <= 0) {
      if (G.spawnQueue.length) { spawnEnemy(G.spawnQueue.shift()); G.spawnGap = 0.4; }
      else { G.spawning = false; updateHud(); }
    }
  }

  // enemies move along path with budget (safe across waypoints)
  for (const e of G.enemies) {
    if (e.dead) continue;
    if (e.slowT > 0) { e.slowT -= dt; if (e.slowT <= 0) e.slow = 1; }
    let budget = e.speed * e.slow * dt;
    while (budget > 0 && !e.dead) {
      const nxt = G.pathPx[e.pi + 1];
      if (!nxt) { e.dead = true; G.lives--; burst(e.x, e.y, '#ff5566', 14); break; }
      const dx = nxt.x - e.x, dy = nxt.y - e.y, d = Math.hypot(dx, dy);
      if (d < 0.001) { e.pi++; continue; }
      if (budget >= d) { e.x = nxt.x; e.y = nxt.y; e.pi++; budget -= d; }
      else { e.x += (dx / d) * budget; e.y += (dy / d) * budget; budget = 0; }
    }
  }
  if (G.enemies.some((e) => e.dead)) { G.enemies = G.enemies.filter((e) => !e.dead); updateHud(); }

  // towers
  for (const t of G.towers) {
    const def = t.def;
    const range = scaled(def.range, t);
    if (def.aura) {
      for (const e of G.enemies) { if (dist(t, e) <= range) applySlow(e, def.slow, 0.2); }
      continue;
    }
    t.cd = Math.max(0, t.cd - dt);
    const target = nearest(t, range);
    if (target) {
      t.angle = Math.atan2(target.y - t.y, target.x - t.x);
      if (t.cd <= 0 && def.rate > 0) { fire(t, target); t.cd = 1 / scaled(def.rate, t); }
    }
  }

  // shots
  for (const s of G.shots) {
    s.life -= dt;
    if (s.kind === 'bolt') {
      s.x += s.vx * dt; s.y += s.vy * dt;
      for (const e of G.enemies) { if (!e.dead && dist(s, e) < e.r + 6) { damage(e, s.dmg); s.life = 0; break; } }
    } else if (s.kind === 'lance') {
      const x2 = s.x + Math.cos(s.ang) * s.range, y2 = s.y + Math.sin(s.ang) * s.range;
      for (const e of G.enemies) {
        if (e.dead || s.hit.has(e)) continue;
        if (segDist(e.x, e.y, s.x, s.y, x2, y2) < e.r + 4) {
          damage(e, s.dmg); s.hit.add(e);
          if (s.hit.size >= s.pierce) { s.life = 0; break; }
        }
      }
    } else if (s.kind === 'pulse') {
      s.r = lerp(0, s.maxR, 1 - s.life / 0.3);
    }
  }
  G.shots = G.shots.filter((s) => s.life > 0);

  // particles + floats
  for (const p of G.particles) { p.life -= dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.96; p.vy *= 0.96; }
  G.particles = G.particles.filter((p) => p.life > 0);
  for (const f of G.floats) { f.y -= 26 * dt; f.life -= dt; }
  G.floats = G.floats.filter((f) => f.life > 0);

  endCheck();
}

function segDist(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1, l2 = dx * dx + dy * dy || 1;
  let t = ((px - x1) * dx + (py - y1) * dy) / l2; t = clamp(t, 0, 1);
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

/* ---------- draw ---------- */
function draw() {
  ctx.clearRect(0, 0, W, H);
  const grd = ctx.createRadialGradient(W / 2, H * 0.85, 40, W / 2, H / 2, H);
  grd.addColorStop(0, '#07182a'); grd.addColorStop(1, '#02060d');
  ctx.fillStyle = grd; ctx.fillRect(0, 0, W, H);

  // circuit grid + nodes
  ctx.strokeStyle = 'rgba(54,227,255,0.06)'; ctx.lineWidth = 1;
  for (let c = 0; c <= COLS; c++) { ctx.beginPath(); ctx.moveTo(c * CELL, 0); ctx.lineTo(c * CELL, H); ctx.stroke(); }
  for (let r = 0; r <= ROWS; r++) { ctx.beginPath(); ctx.moveTo(0, r * CELL); ctx.lineTo(W, r * CELL); ctx.stroke(); }
  ctx.fillStyle = 'rgba(54,227,255,0.12)';
  for (let c = 0; c <= COLS; c += 2) for (let r = 0; r <= ROWS; r += 2) { ctx.beginPath(); ctx.arc(c * CELL, r * CELL, 1.5, 0, Math.PI * 2); ctx.fill(); }

  // path
  if (G.pathPx.length) {
    ctx.save();
    ctx.strokeStyle = 'rgba(54,227,255,0.16)'; ctx.lineWidth = CELL * 0.7; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath(); G.pathPx.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.stroke();
    ctx.strokeStyle = '#36e3ff'; ctx.shadowColor = '#36e3ff'; ctx.shadowBlur = 12; ctx.lineWidth = 3;
    ctx.beginPath(); G.pathPx.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.stroke();
    ctx.restore();
  }

  // hover ghost
  if (G.hover && G.selectedBuild && G.running) {
    const def = TOWERS[G.selectedBuild];
    const ok = canBuild(G.hover.c, G.hover.r) && G.energy >= def.cost;
    const p = cellCenter(G.hover.c, G.hover.r);
    ctx.fillStyle = ok ? 'rgba(54,227,255,0.12)' : 'rgba(255,85,102,0.15)';
    ctx.fillRect(G.hover.c * CELL, G.hover.r * CELL, CELL, CELL);
    ctx.beginPath(); ctx.arc(p.x, p.y, scaled(def.range, { level: 1 }), 0, Math.PI * 2);
    ctx.strokeStyle = ok ? 'rgba(54,227,255,0.35)' : 'rgba(255,85,102,0.35)'; ctx.stroke();
    drawTowerIcon(ctx, def, p.x, p.y);
  }

  // towers
  for (const t of G.towers) {
    const def = t.def;
    if (G.selectedTower === t) { ctx.beginPath(); ctx.arc(t.x, t.y, scaled(def.range, t), 0, Math.PI * 2); ctx.strokeStyle = def.color + '55'; ctx.stroke(); }
    if (def.aura) { ctx.beginPath(); ctx.arc(t.x, t.y, scaled(def.range, t), 0, Math.PI * 2); ctx.strokeStyle = def.color + '22'; ctx.fillStyle = def.color + '08'; ctx.fill(); ctx.stroke(); }
    drawTowerBody(t);
  }

  for (const e of G.enemies) drawEnemy(e);
  for (const s of G.shots) drawShot(s);
  for (const p of G.particles) { ctx.globalAlpha = clamp(p.life / p.max, 0, 1); ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1; }
  for (const f of G.floats) { ctx.globalAlpha = clamp(f.life / 0.8, 0, 1); ctx.fillStyle = f.color; ctx.font = '12px "Share Tech Mono"'; ctx.textAlign = 'center'; ctx.fillText(f.text, f.x, f.y); ctx.globalAlpha = 1; }
}

function drawTowerBody(t) {
  const def = t.def;
  ctx.save(); ctx.translate(t.x, t.y); ctx.rotate(t.angle || 0);
  ctx.strokeStyle = def.color; ctx.fillStyle = '#041018'; ctx.lineWidth = 2;
  ctx.shadowColor = def.color; ctx.shadowBlur = 10;
  ctx.beginPath(); ctx.moveTo(-13, 11); ctx.lineTo(-13, -6); ctx.lineTo(0, -13); ctx.lineTo(13, -6); ctx.lineTo(13, 11); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, -2); ctx.lineTo(15, 0); ctx.lineTo(0, 2); ctx.stroke();
  ctx.restore();
  for (let i = 0; i < t.level; i++) { ctx.fillStyle = def.color; ctx.fillRect(t.x - 8 + i * 7, t.y + 16, 5, 3); }
}

function drawEnemy(e) {
  ctx.save(); ctx.translate(e.x, e.y);
  ctx.shadowColor = e.color; ctx.shadowBlur = 10;
  ctx.strokeStyle = e.color; ctx.fillStyle = e.color + '33'; ctx.lineWidth = 2;
  if (e.type === 'wisp') { ctx.beginPath(); ctx.moveTo(0, -e.r); ctx.lineTo(e.r, 0); ctx.lineTo(0, e.r); ctx.lineTo(-e.r, 0); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  else if (e.type === 'bug') { ctx.beginPath(); for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; ctx.lineTo(Math.cos(a) * e.r, Math.sin(a) * e.r); } ctx.closePath(); ctx.fill(); ctx.stroke(); }
  else if (e.type === 'sentry') { ctx.strokeRect(-e.r, -e.r * 0.7, e.r * 2, e.r * 1.4); ctx.fillRect(-e.r, -e.r * 0.7, e.r * 2, e.r * 1.4); }
  else if (e.type === 'mcp') { ctx.beginPath(); ctx.arc(0, 0, e.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(0, 0, e.r * 0.45, 0, Math.PI * 2); ctx.stroke(); }
  else { ctx.beginPath(); ctx.moveTo(-e.r, e.r * 0.6); ctx.lineTo(0, -e.r); ctx.lineTo(e.r, e.r * 0.6); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  ctx.restore();
  const pct = clamp(e.hp / e.maxHp, 0, 1);
  ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(e.x - 13, e.y - e.r - 9, 26, 4);
  ctx.fillStyle = pct > 0.4 ? e.color : '#ff5566'; ctx.fillRect(e.x - 13, e.y - e.r - 9, 26 * pct, 4);
}

function drawShot(s) {
  ctx.save(); ctx.strokeStyle = s.color; ctx.fillStyle = s.color; ctx.shadowColor = s.color; ctx.shadowBlur = 12;
  if (s.kind === 'bolt') { ctx.beginPath(); ctx.arc(s.x, s.y, 4, 0, Math.PI * 2); ctx.stroke(); ctx.beginPath(); ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2); ctx.fill(); }
  else if (s.kind === 'chain') { ctx.globalAlpha = clamp(s.life / 0.14, 0, 1); ctx.lineWidth = 2; ctx.beginPath(); s.pts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.stroke(); }
  else if (s.kind === 'pulse') { ctx.globalAlpha = clamp(s.life / 0.3, 0, 1) * 0.7; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.stroke(); }
  else if (s.kind === 'lance') { ctx.globalAlpha = clamp(s.life / 0.32, 0, 1); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x + Math.cos(s.ang) * s.range, s.y + Math.sin(s.ang) * s.range); ctx.stroke(); }
  ctx.restore();
}

/* ---------- bg animation (circuit traces) ---------- */
const bg = document.getElementById('bg');
const bgx = bg.getContext('2d');
let bgRaf = 0, bgOn = false, traces = [];
function resizeBg() { bg.width = innerWidth; bg.height = innerHeight; seedTraces(); }
function seedTraces() {
  traces = [];
  for (let i = 0; i < 14; i++) traces.push(newTrace());
}
function newTrace() {
  const horiz = Math.random() < 0.5;
  return { horiz, pos: Math.random(), off: 0, spd: rand(0.04, 0.12), len: rand(0.05, 0.18), hue: ['#36e3ff', '#a98bff', '#ff3d8b', '#5dff9b'][(Math.random() * 4) | 0] };
}
function bgTick() {
  if (!bgOn) return;
  bgx.fillStyle = 'rgba(2,5,11,0.35)'; bgx.fillRect(0, 0, bg.width, bg.height);
  for (const t of traces) {
    t.off += t.spd * 0.01;
    if (t.off > 1.2) { Object.assign(t, newTrace()); t.off = -0.2; }
    const a = clamp(1 - Math.abs(t.off - 0.5) * 1.4, 0, 1);
    bgx.globalAlpha = a * 0.7;
    bgx.strokeStyle = t.hue; bgx.shadowColor = t.hue; bgx.shadowBlur = 10; bgx.lineWidth = 2;
    bgx.beginPath();
    if (t.horiz) { const y = t.pos * bg.height; bgx.moveTo(t.off * bg.width, y); bgx.lineTo((t.off + t.len) * bg.width, y); }
    else { const x = t.pos * bg.width; bgx.moveTo(x, t.off * bg.height); bgx.lineTo(x, (t.off + t.len) * bg.height); }
    bgx.stroke();
  }
  bgx.globalAlpha = 1;
  bgRaf = requestAnimationFrame(bgTick);
}
addEventListener('resize', resizeBg);
resizeBg();
function startBg() { if (!bgOn) { bgOn = true; bgTick(); } }
function stopBg() { bgOn = false; cancelAnimationFrame(bgRaf); }
// run bg only on splash/menu screens
const origShow = show;
show = function (id) { origShow(id); (id === 's-splash' || id === 's-menu' || id === 's-sectors' || id === 's-help') ? startBg() : stopBg(); };

/* boot */
show('s-splash');
