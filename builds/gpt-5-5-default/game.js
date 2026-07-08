'use strict';

const CELL = 60, COLS = 15, ROWS = 10, W = 900, H = 600;
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const ambient = document.getElementById('ambient');
const actx = ambient.getContext('2d');

const $ = id => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const lerp = (a, b, t) => a + (b - a) * t;

const COLORS = {
  ray: '#29f3ff', split: '#ffb000', quake: '#ff3f9f',
  frost: '#73ff77', rail: '#b989ff'
};

const TOWERS = {
  ray: { name: 'RAY', cost: 65, color: COLORS.ray, range: 145, dmg: 12, rate: 2.6, kind: 'bolt', desc: 'Fast emitter' },
  split: { name: 'SPLIT', cost: 135, color: COLORS.split, range: 130, dmg: 16, rate: 1.05, kind: 'chain', chains: 3, desc: 'Forked arc' },
  quake: { name: 'QUAKE', cost: 125, color: COLORS.quake, range: 120, dmg: 24, rate: 0.82, kind: 'splash', splash: 64, desc: 'Pulse blast' },
  frost: { name: 'FROST', cost: 105, color: COLORS.frost, range: 115, dmg: 0, rate: 0, kind: 'aura', slow: 0.52, desc: 'Slow field' },
  rail: { name: 'RAIL', cost: 210, color: COLORS.rail, range: 255, dmg: 55, rate: 0.52, kind: 'pierce', pierce: 3, desc: 'Piercing shot' },
};

const ENEMIES = {
  bit: { name: 'BIT', hp: 28, speed: 86, armor: 0, reward: 6, size: 8, color: '#29f3ff' },
  runner: { name: 'RUNNER', hp: 64, speed: 62, armor: 0, reward: 10, size: 11, color: '#ffb000' },
  shell: { name: 'SHELL', hp: 210, speed: 36, armor: 6, reward: 26, size: 15, color: '#b989ff' },
  phantom: { name: 'PHANTOM', hp: 115, speed: 96, armor: 2, reward: 18, size: 12, color: '#73ff77' },
  overseer: { name: 'OVERSEER', hp: 520, speed: 32, armor: 4, reward: 75, size: 22, color: '#ff3f9f' },
};

const LEVELS = [
  {
    title: 'CIRCUIT 01 - INPUT BUS', diff: 'TRAINING', energy: 245, core: 20, waves: 8,
    desc: 'A single folded conduit with roomy build space.',
    path: [[-1, 2], [3, 2], [3, 7], [8, 7], [8, 3], [12, 3], [12, 8], [15, 8]],
    wave(n) { return pack([['bit', 5 + n], ['runner', 3 + n], n > 3 && ['phantom', n - 2], n === 7 && ['shell', 2]]); },
  },
  {
    title: 'CIRCUIT 02 - MIRROR TRACE', diff: 'MEDIUM', energy: 285, core: 16, waves: 10,
    desc: 'A long mirrored route where fast programs outrun lazy defenses.',
    path: [[-1, 1], [13, 1], [13, 4], [1, 4], [1, 8], [15, 8]],
    wave(n) { return pack([['runner', 5 + n], ['phantom', 2 + Math.floor(n / 2)], ['bit', 4 + n], n > 4 && ['shell', Math.floor(n / 3)], n >= 8 && ['overseer', 1]]); },
  },
  {
    title: 'CIRCUIT 03 - CORE RING', diff: 'HARD', energy: 330, core: 12, waves: 12,
    desc: 'Layered turns around the core. Heavy programs arrive in columns.',
    path: [[-1, 5], [4, 5], [4, 1], [10, 1], [10, 8], [5, 8], [5, 3], [13, 3], [13, 7], [15, 7]],
    wave(n) { return pack([['phantom', 2 + n], ['shell', 1 + Math.floor(n / 2)], ['runner', 4 + n], ['bit', 7 + n], n > 4 && ['overseer', Math.floor((n - 3) / 3)]]); },
  },
];

function pack(specs) {
  const out = [];
  specs.filter(Boolean).forEach(([type, count]) => {
    for (let i = 0; i < count; i++) out.push(type);
  });
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const G = {
  level: 0, energy: 0, core: 0, wave: 0, unlocked: 1,
  path: [], pathCells: new Set(), occupied: new Set(),
  enemies: [], towers: [], shots: [], particles: [], texts: [],
  selected: null, tower: null, hover: null,
  spawning: false, queue: [], timer: 0, running: false, over: false,
  kills: 0, spent: 0, speed: 1,
};

function screen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

function cell(c, r) { return { x: c * CELL + CELL / 2, y: r * CELL + CELL / 2 }; }
function key(c, r) { return `${c},${r}`; }

function makePath(level) {
  G.path = level.path.map(([c, r]) => cell(c, r));
  G.pathCells = new Set();
  for (let i = 0; i < level.path.length - 1; i++) {
    let [c, r] = level.path[i];
    const [c2, r2] = level.path[i + 1];
    const dc = Math.sign(c2 - c), dr = Math.sign(r2 - r);
    while (true) {
      if (c >= 0 && c < COLS && r >= 0 && r < ROWS) G.pathCells.add(key(c, r));
      if (c === c2 && r === r2) break;
      c += dc; r += dr;
    }
  }
}

function bootLevel(i) {
  const l = LEVELS[i];
  G.level = i; G.energy = l.energy; G.core = l.core; G.wave = 0;
  G.enemies = []; G.towers = []; G.shots = []; G.particles = []; G.texts = [];
  G.selected = null; G.tower = null; G.hover = null; G.queue = [];
  G.occupied = new Set(); G.spawning = false; G.timer = 0; G.running = true; G.over = false;
  G.kills = 0; G.spent = 0; G.speed = 1; $('speed').textContent = 'x1';
  makePath(l);
  closePop();
  screen('game-screen');
  hud();
}

function hud() {
  const l = LEVELS[G.level];
  $('hud-level').textContent = l.title.split(' - ')[0];
  $('hud-wave').textContent = `WAVE ${Math.min(G.wave, l.waves)}/${l.waves}`;
  $('hud-power').textContent = `POWER ${Math.floor(G.energy)}`;
  $('hud-core').textContent = `CORE ${G.core}`;
  $('wave').disabled = G.spawning || G.enemies.length > 0 || G.wave >= l.waves || G.over;
  dock();
}

function launchWave() {
  const l = LEVELS[G.level];
  if (G.spawning || G.enemies.length || G.wave >= l.waves) return;
  G.wave++;
  G.queue = l.wave(G.wave - 1);
  G.timer = 0.2;
  G.spawning = true;
  hud();
}

function spawn(type) {
  const d = ENEMIES[type], p = G.path[0], scale = 1 + G.wave * 0.08 + G.level * 0.12;
  G.enemies.push({
    type, x: p.x, y: p.y, hp: d.hp * scale, max: d.hp * scale,
    speed: d.speed, armor: d.armor, reward: d.reward, size: d.size, color: d.color,
    pi: 0, slow: 1, slowT: 0, dead: false,
  });
}

function canBuild(c, r) {
  const k = key(c, r);
  return c >= 0 && c < COLS && r >= 0 && r < ROWS && !G.pathCells.has(k) && !G.occupied.has(k);
}

function place(c, r, type) {
  const d = TOWERS[type];
  if (!d || !canBuild(c, r) || G.energy < d.cost) return;
  const p = cell(c, r);
  G.energy -= d.cost; G.spent += d.cost; G.occupied.add(key(c, r));
  G.towers.push({ type, c, r, x: p.x, y: p.y, lvl: 1, cd: 0, angle: 0, spent: d.cost });
  puff(p.x, p.y, d.color, 18);
  hud();
}

function stats(t) {
  const d = TOWERS[t.type], m = 1 + (t.lvl - 1) * 0.38;
  return { ...d, range: d.range * (1 + (t.lvl - 1) * 0.18), dmg: d.dmg * m, rate: d.rate * (1 + (t.lvl - 1) * 0.22) };
}

function target(t, s) {
  let best = null, prog = -1;
  for (const e of G.enemies) {
    if (e.dead || dist(t, e) > s.range) continue;
    const p = e.pi + dist(e, G.path[e.pi]) / CELL;
    if (p > prog) { prog = p; best = e; }
  }
  return best;
}

function shoot(t, e, s) {
  if (s.kind === 'bolt') {
    const a = Math.atan2(e.y - t.y, e.x - t.x);
    G.shots.push({ kind: 'bolt', x: t.x, y: t.y, vx: Math.cos(a) * 480, vy: Math.sin(a) * 480, color: s.color, dmg: s.dmg, life: 1.2 });
  } else if (s.kind === 'chain') {
    const pts = [{ x: t.x, y: t.y }], seen = new Set();
    let cur = e, dmg = s.dmg;
    for (let i = 0; cur && i < s.chains; i++) {
      seen.add(cur); pts.push({ x: cur.x, y: cur.y }); hurt(cur, dmg); dmg *= 0.72;
      let next = null, bd = 115;
      for (const other of G.enemies) {
        if (other.dead || seen.has(other)) continue;
        const d = dist(cur, other); if (d < bd) { bd = d; next = other; }
      }
      cur = next;
    }
    G.shots.push({ kind: 'chain', pts, color: s.color, life: 0.15 });
  } else if (s.kind === 'splash') {
    G.shots.push({ kind: 'ring', x: e.x, y: e.y, r: 0, max: s.splash, color: s.color, life: 0.28 });
    G.enemies.forEach(o => { if (!o.dead && dist(e, o) <= s.splash) hurt(o, s.dmg); });
  } else if (s.kind === 'pierce') {
    G.shots.push({ kind: 'rail', x: t.x, y: t.y, a: Math.atan2(e.y - t.y, e.x - t.x), range: s.range, color: s.color, dmg: s.dmg, pierce: s.pierce, seen: new Set(), life: 0.3 });
  }
}

function hurt(e, amount) {
  if (e.dead) return;
  e.hp -= Math.max(1, amount - e.armor);
  if (e.hp <= 0) {
    e.dead = true;
    G.energy += e.reward; G.kills++;
    G.texts.push({ x: e.x, y: e.y - 14, txt: `+${e.reward}`, life: 0.8, color: '#ffb000' });
    puff(e.x, e.y, e.color, 22);
  }
}

function update(dt) {
  if (G.spawning) {
    G.timer -= dt;
    if (G.timer <= 0) {
      if (G.queue.length) { spawn(G.queue.shift()); G.timer = 0.42; }
      else { G.spawning = false; hud(); }
    }
  }

  for (const e of G.enemies) {
    if (e.dead) continue;
    if (e.slowT > 0) { e.slowT -= dt; if (e.slowT <= 0) e.slow = 1; }
    let move = e.speed * e.slow * dt;
    while (move > 0 && !e.dead) {
      const next = G.path[e.pi + 1];
      if (!next) { e.dead = true; G.core--; puff(e.x, e.y, '#ff3f9f', 18); break; }
      const d = Math.hypot(next.x - e.x, next.y - e.y);
      if (d < 0.001) { e.pi++; continue; }
      if (move >= d) { e.x = next.x; e.y = next.y; e.pi++; move -= d; }
      else { e.x += (next.x - e.x) / d * move; e.y += (next.y - e.y) / d * move; move = 0; }
    }
  }
  if (G.enemies.some(e => e.dead)) { G.enemies = G.enemies.filter(e => !e.dead); hud(); }

  for (const t of G.towers) {
    const s = stats(t);
    if (s.kind === 'aura') {
      G.enemies.forEach(e => { if (dist(t, e) <= s.range) { e.slow = Math.min(e.slow, s.slow); e.slowT = 0.25; } });
      continue;
    }
    t.cd = Math.max(0, t.cd - dt);
    const e = target(t, s);
    if (e) {
      t.angle = Math.atan2(e.y - t.y, e.x - t.x);
      if (t.cd <= 0) { shoot(t, e, s); t.cd = 1 / s.rate; }
    }
  }

  for (const s of G.shots) {
    s.life -= dt;
    if (s.kind === 'bolt') {
      s.x += s.vx * dt; s.y += s.vy * dt;
      for (const e of G.enemies) if (!e.dead && dist(s, e) <= e.size + 4) { hurt(e, s.dmg); s.life = 0; break; }
    } else if (s.kind === 'rail') {
      const x2 = s.x + Math.cos(s.a) * s.range, y2 = s.y + Math.sin(s.a) * s.range;
      for (const e of G.enemies) if (!e.dead && !s.seen.has(e) && seg(e.x, e.y, s.x, s.y, x2, y2) < e.size + 3) {
        s.seen.add(e); hurt(e, s.dmg); if (s.seen.size >= s.pierce) s.life = 0;
      }
    } else if (s.kind === 'ring') {
      s.r = lerp(0, s.max, 1 - s.life / 0.28);
    }
  }
  G.shots = G.shots.filter(s => s.life > 0);

  for (const p of G.particles) { p.life -= dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.96; p.vy *= 0.96; }
  G.particles = G.particles.filter(p => p.life > 0);
  for (const f of G.texts) { f.life -= dt; f.y -= 28 * dt; }
  G.texts = G.texts.filter(f => f.life > 0);

  finishCheck();
}

function seg(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1, l = dx * dx + dy * dy || 1;
  const t = clamp(((px - x1) * dx + (py - y1) * dy) / l, 0, 1);
  return Math.hypot(px - (x1 + dx * t), py - (y1 + dy * t));
}

function finishCheck() {
  if (G.over) return;
  if (G.core <= 0) return end(false);
  const l = LEVELS[G.level];
  if (!G.spawning && !G.enemies.length && G.wave >= l.waves) return end(true);
}

function end(win) {
  G.over = true; G.running = false;
  if (win) G.unlocked = Math.max(G.unlocked, G.level + 2);
  $('result-title').textContent = win ? 'CIRCUIT HELD' : 'CORE LOST';
  $('result-title').className = win ? '' : 'fail';
  $('result-text').textContent = `Wave ${G.wave} / Kills ${G.kills} / Power spent ${G.spent}`;
  $('next').style.display = win && G.level < LEVELS.length - 1 ? 'block' : 'none';
  screen('result');
}

function puff(x, y, color, n) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, sp = 35 + Math.random() * 120;
    G.particles.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, color, life: 0.25 + Math.random() * 0.45, max: 0.7, r: 1.5 + Math.random() * 2.5 });
  }
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  const bg = ctx.createRadialGradient(W / 2, H / 2, 30, W / 2, H / 2, H);
  bg.addColorStop(0, '#07172b'); bg.addColorStop(1, '#020812');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(41,243,255,0.07)';
  for (let x = 0; x <= W; x += CELL) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
  for (let y = 0; y <= H; y += CELL) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

  if (G.path.length) {
    ctx.save();
    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.strokeStyle = 'rgba(41,243,255,0.16)'; ctx.lineWidth = CELL * 0.68;
    pathStroke();
    ctx.strokeStyle = '#29f3ff'; ctx.shadowColor = '#29f3ff'; ctx.shadowBlur = 12; ctx.lineWidth = 3;
    pathStroke();
    ctx.restore();
  }

  if (G.hover && G.selected) {
    const t = TOWERS[G.selected], c = cell(G.hover.c, G.hover.r), ok = canBuild(G.hover.c, G.hover.r) && G.energy >= t.cost;
    ctx.fillStyle = ok ? 'rgba(41,243,255,0.13)' : 'rgba(255,63,159,0.15)';
    ctx.fillRect(G.hover.c * CELL, G.hover.r * CELL, CELL, CELL);
    ctx.strokeStyle = ok ? 'rgba(41,243,255,0.35)' : 'rgba(255,63,159,0.35)';
    ctx.beginPath(); ctx.arc(c.x, c.y, t.range, 0, Math.PI * 2); ctx.stroke();
    icon(ctx, t, c.x, c.y, 1.1);
  }

  G.towers.forEach(drawTower);
  G.enemies.forEach(drawEnemy);
  G.shots.forEach(drawShot);
  G.particles.forEach(p => { ctx.globalAlpha = clamp(p.life / p.max, 0, 1); ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1; });
  G.texts.forEach(f => { ctx.globalAlpha = clamp(f.life / 0.8, 0, 1); ctx.fillStyle = f.color; ctx.font = '13px Electrolize'; ctx.textAlign = 'center'; ctx.fillText(f.txt, f.x, f.y); ctx.globalAlpha = 1; });
}

function pathStroke() {
  ctx.beginPath();
  G.path.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
  ctx.stroke();
}

function drawTower(t) {
  const s = stats(t);
  if (G.tower === t) { ctx.strokeStyle = s.color + '77'; ctx.beginPath(); ctx.arc(t.x, t.y, s.range, 0, Math.PI * 2); ctx.stroke(); }
  if (s.kind === 'aura') { ctx.fillStyle = s.color + '0f'; ctx.strokeStyle = s.color + '33'; ctx.beginPath(); ctx.arc(t.x, t.y, s.range, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }
  ctx.save(); ctx.translate(t.x, t.y); ctx.rotate(t.angle); ctx.strokeStyle = s.color; ctx.fillStyle = '#061225'; ctx.shadowColor = s.color; ctx.shadowBlur = 10; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(-14, 12); ctx.lineTo(-14, -8); ctx.lineTo(0, -16); ctx.lineTo(14, -8); ctx.lineTo(14, 12); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(18, 0); ctx.stroke();
  ctx.restore();
  for (let i = 0; i < t.lvl; i++) { ctx.fillStyle = s.color; ctx.fillRect(t.x - 8 + i * 7, t.y + 17, 5, 3); }
}

function drawEnemy(e) {
  ctx.save(); ctx.translate(e.x, e.y); ctx.strokeStyle = e.color; ctx.fillStyle = e.color + '35'; ctx.shadowColor = e.color; ctx.shadowBlur = 9; ctx.lineWidth = 2;
  if (e.type === 'bit') { ctx.beginPath(); ctx.moveTo(0, -e.size); ctx.lineTo(e.size, 0); ctx.lineTo(0, e.size); ctx.lineTo(-e.size, 0); ctx.closePath(); }
  else if (e.type === 'shell') { ctx.rect(-e.size, -e.size * 0.75, e.size * 2, e.size * 1.5); }
  else if (e.type === 'overseer') { ctx.arc(0, 0, e.size, 0, Math.PI * 2); }
  else { ctx.beginPath(); ctx.moveTo(-e.size, e.size * 0.7); ctx.lineTo(0, -e.size); ctx.lineTo(e.size, e.size * 0.7); ctx.closePath(); }
  ctx.fill(); ctx.stroke(); ctx.restore();
  const pct = clamp(e.hp / e.max, 0, 1);
  ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(e.x - 14, e.y - e.size - 11, 28, 4);
  ctx.fillStyle = pct < 0.35 ? '#ff3f9f' : e.color; ctx.fillRect(e.x - 14, e.y - e.size - 11, 28 * pct, 4);
}

function drawShot(s) {
  ctx.save(); ctx.strokeStyle = s.color; ctx.fillStyle = s.color; ctx.shadowColor = s.color; ctx.shadowBlur = 10;
  if (s.kind === 'bolt') { ctx.beginPath(); ctx.arc(s.x, s.y, 4, 0, Math.PI * 2); ctx.stroke(); }
  else if (s.kind === 'chain') { ctx.globalAlpha = clamp(s.life / 0.15, 0, 1); ctx.lineWidth = 2; ctx.beginPath(); s.pts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.stroke(); }
  else if (s.kind === 'ring') { ctx.globalAlpha = clamp(s.life / 0.28, 0, 1); ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.stroke(); }
  else if (s.kind === 'rail') { ctx.globalAlpha = clamp(s.life / 0.3, 0, 1); ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x + Math.cos(s.a) * s.range, s.y + Math.sin(s.a) * s.range); ctx.stroke(); }
  ctx.restore();
}

function icon(c, t, x, y, scale = 1) {
  c.save(); c.translate(x, y); c.scale(scale, scale); c.strokeStyle = t.color; c.fillStyle = t.color + '33'; c.shadowColor = t.color; c.shadowBlur = 8; c.lineWidth = 2;
  if (t.kind === 'bolt') { c.beginPath(); c.arc(0, 0, 10, 0, Math.PI * 2); c.stroke(); c.beginPath(); c.arc(0, 0, 4, 0, Math.PI * 2); c.fill(); }
  else if (t.kind === 'chain') { c.beginPath(); c.moveTo(-10, 0); c.lineTo(-3, -8); c.lineTo(4, 0); c.lineTo(10, -8); c.stroke(); }
  else if (t.kind === 'splash') { c.beginPath(); c.arc(0, 0, 11, 0, Math.PI * 2); c.stroke(); c.beginPath(); c.arc(0, 0, 6, 0, Math.PI * 2); c.stroke(); }
  else if (t.kind === 'aura') { c.strokeRect(-10, -10, 20, 20); c.beginPath(); c.moveTo(-7, 0); c.lineTo(7, 0); c.moveTo(0, -7); c.lineTo(0, 7); c.stroke(); }
  else { c.beginPath(); c.moveTo(0, -12); c.lineTo(5, 0); c.lineTo(0, 12); c.lineTo(-5, 0); c.closePath(); c.stroke(); }
  c.restore();
}

function dock() {
  const d = $('dock'); d.innerHTML = '';
  Object.entries(TOWERS).forEach(([k, t]) => {
    const b = document.createElement('button');
    b.className = 'dock-item' + (G.selected === k ? ' selected' : '') + (G.energy < t.cost ? ' poor' : '');
    const cv = document.createElement('canvas'); cv.width = cv.height = 40; icon(cv.getContext('2d'), t, 20, 20);
    b.appendChild(cv);
    b.insertAdjacentHTML('beforeend', `<div class="name">${t.name}</div><div class="cost">${t.cost}</div>`);
    b.onclick = () => { G.selected = G.selected === k ? null : k; G.tower = null; closePop(); hud(); };
    d.appendChild(b);
  });
}

function levelCards() {
  const box = $('level-list'); box.innerHTML = '';
  LEVELS.forEach((l, i) => {
    const b = document.createElement('button'); b.className = 'card';
    b.innerHTML = `<h3>${l.title}</h3><div class="difficulty">${l.diff} / ${l.waves} WAVES</div><p>${l.desc}</p>`;
    const cv = document.createElement('canvas'); cv.width = 210; cv.height = 120; b.appendChild(cv); mini(cv, l);
    b.onclick = () => bootLevel(i);
    box.appendChild(b);
  });
}

function mini(cv, l) {
  const c = cv.getContext('2d'), sx = cv.width / COLS, sy = cv.height / ROWS;
  c.fillStyle = '#020812'; c.fillRect(0, 0, cv.width, cv.height);
  c.strokeStyle = 'rgba(41,243,255,0.13)';
  for (let x = 0; x <= COLS; x++) { c.beginPath(); c.moveTo(x * sx, 0); c.lineTo(x * sx, cv.height); c.stroke(); }
  for (let y = 0; y <= ROWS; y++) { c.beginPath(); c.moveTo(0, y * sy); c.lineTo(cv.width, y * sy); c.stroke(); }
  c.strokeStyle = '#29f3ff'; c.lineWidth = 3; c.shadowColor = '#29f3ff'; c.shadowBlur = 7; c.beginPath();
  l.path.forEach(([cx, cy], i) => { const x = (cx + 0.5) * sx, y = (cy + 0.5) * sy; i ? c.lineTo(x, y) : c.moveTo(x, y); });
  c.stroke();
}

function openPop(t, ev) {
  G.tower = t;
  const s = stats(t), cost = Math.floor(TOWERS[t.type].cost * (0.7 + t.lvl * 0.55));
  $('tower-info').innerHTML = `<b style="color:${s.color}">${s.name} L${t.lvl}</b><br>DMG ${Math.round(s.dmg)} / RNG ${Math.round(s.range)}<br>${s.desc}<br>UPGRADE ${cost}`;
  $('upgrade').disabled = G.energy < cost || t.lvl >= 3;
  const pop = $('tower-pop'), rect = canvas.parentElement.getBoundingClientRect();
  pop.style.left = `${Math.min(ev.clientX - rect.left + 12, rect.width - 225)}px`;
  pop.style.top = `${Math.min(ev.clientY - rect.top + 12, rect.height - 135)}px`;
  pop.classList.remove('hidden');
}
function closePop() { $('tower-pop').classList.add('hidden'); }

function pos(ev) {
  const r = canvas.getBoundingClientRect(), x = (ev.clientX - r.left) * (W / r.width), y = (ev.clientY - r.top) * (H / r.height);
  return { x, y, c: clamp(Math.floor(x / CELL), 0, COLS - 1), r: clamp(Math.floor(y / CELL), 0, ROWS - 1) };
}

canvas.onmousemove = ev => G.hover = pos(ev);
canvas.onmouseleave = () => G.hover = null;
canvas.onclick = ev => {
  if (!G.running || G.over) return;
  const p = pos(ev), t = G.towers.find(o => o.c === p.c && o.r === p.r);
  if (t) { G.selected = null; openPop(t, ev); hud(); return; }
  closePop(); G.tower = null;
  if (G.selected) place(p.c, p.r, G.selected);
};

$('enter').onclick = () => screen('menu');
$('play').onclick = () => bootLevel(0);
$('levels').onclick = () => { levelCards(); screen('level-screen'); };
$('help').onclick = () => screen('help-screen');
$('level-back').onclick = () => screen('menu');
$('help-back').onclick = () => screen('menu');
$('quit').onclick = () => { G.running = false; screen('menu'); };
$('wave').onclick = launchWave;
$('retry').onclick = () => bootLevel(G.level);
$('next').onclick = () => bootLevel(Math.min(G.level + 1, LEVELS.length - 1));
$('result-menu').onclick = () => screen('menu');
$('speed').onclick = () => { G.speed = G.speed === 1 ? 2 : G.speed === 2 ? 3 : 1; $('speed').textContent = `x${G.speed}`; };
$('upgrade').onclick = () => {
  const t = G.tower; if (!t || t.lvl >= 3) return;
  const cost = Math.floor(TOWERS[t.type].cost * (0.7 + t.lvl * 0.55));
  if (G.energy < cost) return;
  G.energy -= cost; G.spent += cost; t.spent += cost; t.lvl++; puff(t.x, t.y, TOWERS[t.type].color, 16); closePop(); hud();
};
$('sell').onclick = () => {
  const t = G.tower; if (!t) return;
  G.energy += Math.floor(t.spent * 0.6); G.occupied.delete(key(t.c, t.r)); G.towers = G.towers.filter(o => o !== t); G.tower = null; closePop(); hud();
};

let last = performance.now();
function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (G.running && !G.over) update(dt * G.speed);
  draw();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

function ambientLoop() {
  ambient.width = innerWidth; ambient.height = innerHeight;
  actx.clearRect(0, 0, ambient.width, ambient.height);
  actx.strokeStyle = 'rgba(41,243,255,0.08)';
  for (let y = 0; y < ambient.height; y += 48) { actx.beginPath(); actx.moveTo(0, y); actx.lineTo(ambient.width, y); actx.stroke(); }
  for (let x = 0; x < ambient.width; x += 48) { actx.beginPath(); actx.moveTo(x, 0); actx.lineTo(x, ambient.height); actx.stroke(); }
  const t = performance.now() / 1000;
  for (let i = 0; i < 16; i++) {
    const y = (i * 71 + t * (25 + i * 2)) % ambient.height;
    actx.strokeStyle = i % 3 ? 'rgba(41,243,255,0.35)' : 'rgba(255,63,159,0.28)';
    actx.beginPath(); actx.moveTo((i * 137) % ambient.width, y); actx.lineTo(((i * 137) % ambient.width) + 140, y); actx.stroke();
  }
  requestAnimationFrame(ambientLoop);
}
requestAnimationFrame(ambientLoop);
