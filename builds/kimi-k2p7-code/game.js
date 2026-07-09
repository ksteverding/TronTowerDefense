'use strict';

/* ============================================================
   NEON SENTINEL — TRON-inspired tower defense
   Single-file static game. No external dependencies.
   ============================================================ */

const TILE = 32;
const COLS = 30;
const ROWS = 16;
const WIDTH = COLS * TILE;
const HEIGHT = ROWS * TILE;

const COLORS = {
  cyan: '#00f6ff',
  cyanDim: 'rgba(0,246,255,0.25)',
  magenta: '#ff2975',
  orange: '#ff9d00',
  purple: '#b967ff',
  lime: '#a6ff00',
  bg: '#03090e',
  panel: 'rgba(2,16,22,0.92)',
  grid: 'rgba(0,246,255,0.12)',
  path: 'rgba(0,246,255,0.15)',
  pathBorder: 'rgba(0,246,255,0.35)',
  white: '#eaffff',
};

const TOWERS = [
  {
    id: 'beam',
    name: 'BEAM NODE',
    key: 'B',
    cost: 60,
    color: COLORS.cyan,
    range: 120,
    damage: 18,
    cooldown: 0.6,
    projectileSpeed: 9,
    desc: 'Reliable single-target fire.',
    aoe: 0,
    slow: 0,
  },
  {
    id: 'pulse',
    name: 'PULSE CORE',
    key: 'P',
    cost: 110,
    color: COLORS.magenta,
    range: 110,
    damage: 22,
    cooldown: 1.2,
    projectileSpeed: 6,
    desc: 'Area blast on impact.',
    aoe: 70,
    slow: 0,
  },
  {
    id: 'glitch',
    name: 'GLITCH FIELD',
    key: 'G',
    cost: 90,
    color: COLORS.orange,
    range: 100,
    damage: 2,
    cooldown: 0.1,
    projectileSpeed: 0,
    desc: 'Slows nearby programs.',
    aoe: 0,
    slow: 0.45,
  },
  {
    id: 'sniper',
    name: 'SNIPER SPIRE',
    key: 'S',
    cost: 160,
    color: COLORS.purple,
    range: 220,
    damage: 95,
    cooldown: 2.0,
    projectileSpeed: 16,
    desc: 'Long range, high damage.',
    aoe: 0,
    slow: 0,
  },
  {
    id: 'relay',
    name: 'RELAY REPEATER',
    key: 'R',
    cost: 100,
    color: COLORS.lime,
    range: 85,
    damage: 7,
    cooldown: 0.18,
    projectileSpeed: 11,
    desc: 'Rapid low-damage shots.',
    aoe: 0,
    slow: 0,
  },
];

const ENEMIES = {
  probe:   { name: 'PROBE',   hp: 35,  speed: 1.6, reward: 8,  color: '#ff5e5e', radius: 6 },
  drone:   { name: 'DRONE',   hp: 70,  speed: 1.1, reward: 14, color: '#ff9d00', radius: 8 },
  tank:    { name: 'TANK',    hp: 200, speed: 0.6, reward: 28, color: '#b967ff', radius: 11 },
  surge:   { name: 'SURGE',   hp: 55,  speed: 2.4, reward: 16, color: '#00f6ff', radius: 6 },
  virus:   { name: 'VIRUS',   hp: 90,  speed: 0.9, reward: 20, color: '#a6ff00', radius: 9, healRadius: 60, heal: 1 },
};

const LEVELS = [
  {
    id: 1,
    name: 'SECTOR 01 — INPUT GATE',
    desc: 'A straightforward route. Learn the basics of node placement.',
    lives: 20,
    startEnergy: 180,
    path: [
      [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[5,4],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],
      [10,4],[10,3],[10,2],[11,2],[12,2],[13,2],[14,2],[15,2],[16,2],[17,2],[18,2],
      [18,3],[18,4],[18,5],[18,6],[18,7],[18,8],[18,9],[18,10],[19,10],[20,10],[21,10],
      [22,10],[23,10],[24,10],[25,10],[26,10],[27,10],[28,10],[29,10],[29,11],[29,12]
    ],
    waves: [
      [{ type: 'probe', count: 6, interval: 35 }],
      [{ type: 'probe', count: 10, interval: 30 }, { type: 'drone', count: 2, interval: 50 }],
      [{ type: 'drone', count: 6, interval: 40 }],
      [{ type: 'probe', count: 14, interval: 22 }, { type: 'tank', count: 1, interval: 100 }],
      [{ type: 'surge', count: 8, interval: 28 }, { type: 'drone', count: 4, interval: 55 }],
      [{ type: 'virus', count: 3, interval: 90 }, { type: 'drone', count: 8, interval: 45 }],
      [{ type: 'tank', count: 3, interval: 80 }, { type: 'probe', count: 18, interval: 18 }],
      [{ type: 'surge', count: 12, interval: 20 }, { type: 'tank', count: 2, interval: 70 }, { type: 'virus', count: 4, interval: 75 }],
    ],
  },
  {
    id: 2,
    name: 'SECTOR 02 — MEMORY LOOP',
    desc: 'A long winding loop with open build zones. Manage energy carefully.',
    lives: 18,
    startEnergy: 220,
    path: [
      [0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8],[8,7],[8,6],[8,5],[8,4],
      [8,3],[9,3],[10,3],[11,3],[12,3],[13,3],[14,3],[15,3],[16,3],[17,3],[18,3],[19,3],
      [20,3],[20,4],[20,5],[20,6],[20,7],[20,8],[20,9],[20,10],[20,11],[20,12],[19,12],
      [18,12],[17,12],[16,12],[15,12],[14,12],[13,12],[12,12],[11,12],[10,12],[9,12],
      [8,12],[7,12],[6,12],[5,12],[4,12],[3,12],[2,12],[1,12],[0,12]
    ],
    waves: [
      [{ type: 'drone', count: 8, interval: 35 }],
      [{ type: 'probe', count: 14, interval: 20 }, { type: 'surge', count: 4, interval: 45 }],
      [{ type: 'tank', count: 2, interval: 90 }, { type: 'drone', count: 8, interval: 40 }],
      [{ type: 'virus', count: 4, interval: 80 }, { type: 'drone', count: 10, interval: 35 }],
      [{ type: 'surge', count: 16, interval: 18 }],
      [{ type: 'tank', count: 4, interval: 70 }, { type: 'probe', count: 20, interval: 15 }],
      [{ type: 'virus', count: 6, interval: 60 }, { type: 'surge', count: 10, interval: 25 }, { type: 'tank', count: 2, interval: 85 }],
      [{ type: 'drone', count: 16, interval: 28 }, { type: 'tank', count: 3, interval: 65 }],
      [{ type: 'surge', count: 20, interval: 16 }, { type: 'virus', count: 6, interval: 55 }],
      [{ type: 'tank', count: 6, interval: 55 }, { type: 'virus', count: 8, interval: 50 }, { type: 'surge', count: 12, interval: 22 }],
    ],
  },
  {
    id: 3,
    name: 'SECTOR 03 — CORE DEFENSE',
    desc: 'The final sector. Tight chokepoints and relentless waves.',
    lives: 15,
    startEnergy: 260,
    path: [
      [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[8,2],[8,3],[8,4],[8,5],
      [9,5],[10,5],[11,5],[12,5],[13,5],[14,5],[15,5],[16,5],[17,5],[18,5],[19,5],
      [20,5],[20,6],[20,7],[20,8],[19,8],[18,8],[17,8],[16,8],[15,8],[14,8],[13,8],
      [12,8],[11,8],[10,8],[9,8],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
      [9,14],[10,14],[11,14],[12,14],[13,14],[14,14],[15,14],[16,14],[17,14],[18,14],
      [19,14],[20,14],[21,14],[22,14],[23,14],[24,14],[25,14],[26,14],[27,14],[28,14],[29,14]
    ],
    waves: [
      [{ type: 'drone', count: 10, interval: 30 }, { type: 'surge', count: 6, interval: 25 }],
      [{ type: 'tank', count: 3, interval: 75 }, { type: 'probe', count: 24, interval: 14 }],
      [{ type: 'virus', count: 5, interval: 70 }, { type: 'drone', count: 12, interval: 32 }],
      [{ type: 'surge', count: 18, interval: 16 }, { type: 'tank', count: 2, interval: 80 }],
      [{ type: 'virus', count: 8, interval: 55 }, { type: 'surge', count: 12, interval: 22 }],
      [{ type: 'tank', count: 5, interval: 65 }, { type: 'drone', count: 18, interval: 28 }, { type: 'virus', count: 4, interval: 75 }],
      [{ type: 'surge', count: 24, interval: 14 }, { type: 'tank', count: 3, interval: 70 }],
      [{ type: 'virus', count: 10, interval: 50 }, { type: 'surge', count: 16, interval: 20 }, { type: 'tank', count: 4, interval: 60 }],
      [{ type: 'tank', count: 7, interval: 55 }, { type: 'drone', count: 22, interval: 24 }],
      [{ type: 'surge', count: 28, interval: 12 }, { type: 'virus', count: 10, interval: 45 }, { type: 'tank', count: 5, interval: 60 }],
      [{ type: 'tank', count: 8, interval: 50 }, { type: 'drone', count: 26, interval: 20 }, { type: 'surge', count: 14, interval: 18 }],
      [{ type: 'tank', count: 10, interval: 45 }, { type: 'virus', count: 14, interval: 40 }, { type: 'surge', count: 20, interval: 15 }],
    ],
  },
];

const state = {
  screen: 'splash',
  level: null,
  levelIndex: 0,
  energy: 0,
  lives: 0,
  wave: 0,
  waveActive: false,
  spawnQueue: [],
  spawnTimer: 0,
  enemies: [],
  towers: [],
  projectiles: [],
  particles: [],
  selectedTowerId: null,
  selectedPlacedTower: null,
  hoveredCell: null,
  paused: false,
  speed: 1,
  frame: 0,
  lastTime: 0,
  gameOver: false,
  victory: false,
};

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

/* ============================================================
   SCREEN MANAGEMENT
   ============================================================ */

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  state.screen = id;
  if (id === 'levels') renderLevelCards();
}

function renderLevelCards() {
  const container = document.getElementById('level-cards');
  container.innerHTML = '';
  LEVELS.forEach((lvl, idx) => {
    const card = document.createElement('div');
    card.className = 'level-card';
    card.innerHTML = `
      <h3>SECTOR 0${lvl.id}</h3>
      <div class="level-meta">${lvl.waves.length} WAVES • ${lvl.lives} INTEGRITY</div>
      <div class="level-desc">${lvl.desc}</div>
    `;
    card.onclick = () => startLevel(idx);
    container.appendChild(card);
  });
}

function hideModal() {
  document.getElementById('modal').classList.remove('active');
}

function showModal(title, message, primaryText, primaryAction) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-message').textContent = message;
  const btn = document.getElementById('modal-primary');
  btn.textContent = primaryText || 'OK';
  btn.onclick = () => {
    hideModal();
    if (primaryAction) primaryAction();
  };
  document.getElementById('modal').classList.add('active');
}

function modalPrimary() {
  document.getElementById('modal-primary').click();
}

/* ============================================================
   LEVEL / GAME LIFECYCLE
   ============================================================ */

function startLevel(index) {
  const lvl = LEVELS[index];
  state.levelIndex = index;
  state.level = lvl;
  state.energy = lvl.startEnergy;
  state.lives = lvl.lives;
  state.wave = 0;
  state.waveActive = false;
  state.spawnQueue = [];
  state.spawnTimer = 0;
  state.enemies = [];
  state.towers = [];
  state.projectiles = [];
  state.particles = [];
  state.selectedTowerId = null;
  state.selectedPlacedTower = null;
  state.paused = false;
  state.speed = 1;
  state.gameOver = false;
  state.victory = false;
  updateHud();
  renderTowerList();
  updateInfo('Select a node, then click an empty grid cell to build.');
  document.getElementById('wave-status').textContent = 'Wave ready. Start when prepared.';
  document.getElementById('btn-start-wave').disabled = false;
  showScreen('game');
  requestAnimationFrame(loop);
}

function confirmExit() {
  showModal('ABORT RUN?', 'Return to sector select. Current progress will be lost.', 'EXIT', () => showScreen('levels'));
}

function winLevel() {
  state.victory = true;
  state.paused = true;
  showModal('SECTOR SECURED', `Sector 0${state.level.id} defended. All waves neutralized.`, 'NEXT SECTOR', () => {
    const next = state.levelIndex + 1;
    if (next < LEVELS.length) startLevel(next);
    else showScreen('menu');
  });
}

function loseLevel() {
  state.gameOver = true;
  state.paused = true;
  showModal('SYSTEM BREACH', 'The core has been compromised. Restart sector?', 'RETRY', () => startLevel(state.levelIndex));
}

/* ============================================================
   WAVE MANAGEMENT
   ============================================================ */

function startNextWave() {
  if (state.waveActive || state.victory || state.gameOver) return;
  if (state.wave >= state.level.waves.length) return;

  const wave = state.level.waves[state.wave];
  state.spawnQueue = [];
  let delay = 0;
  wave.forEach(group => {
    for (let i = 0; i < group.count; i++) {
      state.spawnQueue.push({ type: group.type, delay: delay });
      delay += group.interval;
    }
  });
  state.spawnTimer = 0;
  state.waveActive = true;
  state.wave += 1;
  document.getElementById('wave-status').textContent = 'Wave in progress...';
  document.getElementById('btn-start-wave').disabled = true;
  updateHud();
}

function endWave() {
  state.waveActive = false;
  document.getElementById('wave-status').textContent = 'Wave complete. Prepare next sector.';
  document.getElementById('btn-start-wave').disabled = false;
  if (state.wave >= state.level.waves.length) {
    winLevel();
  }
  updateHud();
}

/* ============================================================
   ENTITIES
   ============================================================ */

function spawnEnemy(type) {
  const template = ENEMIES[type];
  const start = state.level.path[0];
  const next = state.level.path[1];
  const startX = start[0] * TILE + TILE / 2;
  const startY = start[1] * TILE + TILE / 2;
  state.enemies.push({
    type,
    x: startX,
    y: startY,
    pathIndex: 0,
    progress: 0,
    hp: template.hp,
    maxHp: template.hp,
    speed: template.speed,
    baseSpeed: template.speed,
    reward: template.reward,
    color: template.color,
    radius: template.radius,
    healRadius: template.healRadius || 0,
    heal: template.heal || 0,
    slowTimer: 0,
    alive: true,
  });
}

function buildTower(c, r, towerId) {
  const tower = TOWERS.find(t => t.id === towerId);
  if (!tower) return false;
  if (state.energy < tower.cost) return false;
  if (cellIsPath(c, r)) return false;
  if (state.towers.some(t => t.c === c && t.r === r)) return false;

  state.energy -= tower.cost;
  state.towers.push({
    c, r,
    x: c * TILE + TILE / 2,
    y: r * TILE + TILE / 2,
    ...tower,
    level: 1,
    cooldown: 0,
    cooldownMax: tower.cooldown,
    totalSpent: tower.cost,
    kills: 0,
  });
  createParticles(tower.x, tower.y, tower.color, 12);
  updateHud();
  renderTowerList();
  return true;
}

function upgradeTower(tower) {
  const cost = Math.floor(tower.cost * 0.7 * tower.level);
  if (state.energy < cost) return;
  if (tower.level >= 4) return;
  state.energy -= cost;
  tower.level += 1;
  tower.totalSpent += cost;
  tower.damage *= 1.35;
  tower.range *= 1.12;
  if (tower.cooldownMax > 0.1) tower.cooldownMax *= 0.85;
  createParticles(tower.x, tower.y, tower.color, 16);
  updateHud();
  selectPlacedTower(tower);
}

function sellTower(tower) {
  const refund = Math.floor(tower.totalSpent * 0.6);
  state.energy += refund;
  state.towers = state.towers.filter(t => t !== tower);
  state.selectedPlacedTower = null;
  document.getElementById('selection-panel').style.display = 'none';
  createParticles(tower.x, tower.y, COLORS.orange, 14);
  updateHud();
  renderTowerList();
}

/* ============================================================
   GAME LOOP
   ============================================================ */

function loop(timestamp) {
  if (state.screen !== 'game') return;
  if (!state.lastTime) state.lastTime = timestamp;
  const dt = Math.min((timestamp - state.lastTime) / 1000, 0.05) || 0;
  state.lastTime = timestamp;
  const step = state.paused ? 0 : dt * state.speed;

  if (step > 0) {
    state.frame += 1;
    updateSpawning(step);
    updateEnemies(step);
    updateTowers(step);
    updateProjectiles(step);
    updateParticles(step);
  }

  draw();
  if (!state.victory && !state.gameOver) {
    requestAnimationFrame(loop);
  }
}

function updateSpawning(step) {
  if (!state.waveActive) return;

  if (state.spawnQueue.length === 0) {
    if (state.enemies.length === 0) endWave();
    return;
  }

  state.spawnTimer += step * 60;
  while (state.spawnQueue.length > 0 && state.spawnTimer >= state.spawnQueue[0].delay) {
    const item = state.spawnQueue.shift();
    spawnEnemy(item.type);
    if (state.spawnQueue.length > 0) {
      state.spawnTimer = Math.min(state.spawnTimer, state.spawnQueue[0].delay);
    }
  }
}

function updateEnemies(step) {
  const path = state.level.path;
  const alive = [];
  state.enemies.forEach(e => {
    if (!e.alive) return;

    let currentSpeed = e.speed;
    if (e.slowTimer > 0) {
      e.slowTimer -= step;
      currentSpeed *= 0.55;
    }

    const targetIndex = Math.min(e.pathIndex + 1, path.length - 1);
    const targetCell = path[targetIndex];
    const tx = targetCell[0] * TILE + TILE / 2;
    const ty = targetCell[1] * TILE + TILE / 2;
    const dx = tx - e.x;
    const dy = ty - e.y;
    const dist = Math.hypot(dx, dy);
    const move = currentSpeed * TILE * step;

    if (dist <= move) {
      e.x = tx;
      e.y = ty;
      e.pathIndex = targetIndex;
      if (e.pathIndex >= path.length - 1) {
        state.lives -= 1;
        createParticles(e.x, e.y, COLORS.magenta, 8);
        updateHud();
        if (state.lives <= 0) loseLevel();
        return;
      }
    } else {
      e.x += (dx / dist) * move;
      e.y += (dy / dist) * move;
    }

    alive.push(e);
  });
  state.enemies = alive;

  // Virus healing aura
  state.enemies.forEach(e => {
    if (e.healRadius > 0) {
      state.enemies.forEach(other => {
        if (other !== e && other.hp < other.maxHp) {
          const d = Math.hypot(other.x - e.x, other.y - e.y);
          if (d <= e.healRadius) {
            other.hp = Math.min(other.maxHp, other.hp + e.heal * step * 60);
          }
        }
      });
    }
  });
}

function updateTowers(step) {
  state.towers.forEach(t => {
    if (t.cooldown > 0) t.cooldown -= step;

    // Glitch field slow effect
    if (t.slow > 0) {
      state.enemies.forEach(e => {
        const d = Math.hypot(e.x - t.x, e.y - t.y);
        if (d <= t.range) {
          e.slowTimer = Math.max(e.slowTimer, 0.15);
        }
      });
      if (t.damage > 0 && t.cooldown <= 0) {
        state.enemies.forEach(e => {
          const d = Math.hypot(e.x - t.x, e.y - t.y);
          if (d <= t.range) {
            e.hp -= t.damage;
            if (e.hp <= 0) killEnemy(e, t);
          }
        });
        t.cooldown = t.cooldownMax;
      }
      return;
    }

    if (t.cooldown > 0) return;
    const target = findTarget(t);
    if (target) {
      fire(t, target);
      t.cooldown = t.cooldownMax;
    }
  });
}

function findTarget(tower) {
  let best = null;
  let bestProgress = -1;
  state.enemies.forEach(e => {
    const d = Math.hypot(e.x - tower.x, e.y - tower.y);
    if (d <= tower.range && e.pathIndex > bestProgress) {
      bestProgress = e.pathIndex;
      best = e;
    }
  });
  return best;
}

function fire(tower, target) {
  state.projectiles.push({
    x: tower.x,
    y: tower.y,
    target,
    speed: tower.projectileSpeed,
    damage: tower.damage,
    color: tower.color,
    aoe: tower.aoe,
    source: tower,
  });
}

function updateProjectiles(step) {
  const remaining = [];
  state.projectiles.forEach(p => {
    if (!p.target || !p.target.alive) {
      createParticles(p.x, p.y, p.color, 4);
      return;
    }
    const dx = p.target.x - p.x;
    const dy = p.target.y - p.y;
    const dist = Math.hypot(dx, dy);
    p.vx = (dx / dist) * p.speed;
    p.vy = (dy / dist) * p.speed;
    const move = p.speed * TILE * step;
    if (dist <= move) {
      hitEnemy(p.target, p.damage, p.source);
      if (p.aoe > 0) {
        state.enemies.forEach(e => {
          if (e !== p.target && e.alive) {
            const d = Math.hypot(e.x - p.target.x, e.y - p.target.y);
            if (d <= p.aoe) hitEnemy(e, p.damage * 0.6, p.source);
          }
        });
        createParticles(p.target.x, p.target.y, p.color, 16, 3);
      }
      return;
    }
    p.x += (dx / dist) * move;
    p.y += (dy / dist) * move;
    remaining.push(p);
  });
  state.projectiles = remaining;
}

function hitEnemy(enemy, damage, source) {
  enemy.hp -= damage;
  if (enemy.hp <= 0) killEnemy(enemy, source);
}

function killEnemy(enemy, source) {
  if (!enemy.alive) return;
  enemy.alive = false;
  state.energy += enemy.reward;
  createParticles(enemy.x, enemy.y, enemy.color, 14);
  if (source) {
    source.kills += 1;
  }
  updateHud();
}

function createParticles(x, y, color, count, spread = 2) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = (Math.random() * 1.5 + 0.3) * spread;
    state.particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 0.5 + Math.random() * 0.5,
      maxLife: 1,
      color,
      size: Math.random() * 2 + 1,
    });
  }
}

function updateParticles(step) {
  const remaining = [];
  state.particles.forEach(p => {
    p.x += p.vx * TILE * step;
    p.y += p.vy * TILE * step;
    p.life -= step;
    if (p.life > 0) remaining.push(p);
  });
  state.particles = remaining;
}

/* ============================================================
   RENDERING
   ============================================================ */

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  drawGrid();
  drawPath();
  drawTowers();
  drawEnemies();
  drawProjectiles();
  drawParticles();
  drawHover();
  drawSelection();
}

function drawGrid() {
  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let c = 0; c <= COLS; c++) {
    ctx.moveTo(c * TILE, 0);
    ctx.lineTo(c * TILE, HEIGHT);
  }
  for (let r = 0; r <= ROWS; r++) {
    ctx.moveTo(0, r * TILE);
    ctx.lineTo(WIDTH, r * TILE);
  }
  ctx.stroke();
}

function drawPath() {
  if (!state.level) return;
  ctx.fillStyle = COLORS.path;
  ctx.strokeStyle = COLORS.pathBorder;
  ctx.lineWidth = 2;
  ctx.beginPath();
  state.level.path.forEach(([c, r], i) => {
    const x = c * TILE + TILE / 2;
    const y = r * TILE + TILE / 2;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  state.level.path.forEach(([c, r], i) => {
    const x = c * TILE + TILE / 2;
    const y = r * TILE + TILE / 2;
    ctx.fillStyle = i === 0 ? COLORS.lime : (i === state.level.path.length - 1 ? COLORS.magenta : COLORS.path);
    ctx.beginPath();
    ctx.arc(x, y, i === 0 || i === state.level.path.length - 1 ? 6 : 4, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawTowers() {
  state.towers.forEach(t => {
    const pulse = 1 + Math.sin(state.frame * 0.1 + t.c * 0.5) * 0.08;
    ctx.save();
    ctx.translate(t.x, t.y);

    // Range indicator when selected or hovered
    if (state.selectedPlacedTower === t || (state.hoveredCell && state.hoveredCell.c === t.c && state.hoveredCell.r === t.r)) {
      ctx.strokeStyle = t.color + '44';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, t.range, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Base
    ctx.fillStyle = 'rgba(2, 6, 10, 0.8)';
    ctx.strokeStyle = t.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rect(-TILE * 0.4, -TILE * 0.4, TILE * 0.8, TILE * 0.8);
    ctx.fill();
    ctx.stroke();

    // Core
    ctx.fillStyle = t.color;
    ctx.shadowColor = t.color;
    ctx.shadowBlur = 14;
    ctx.beginPath();
    ctx.arc(0, 0, 6 * pulse * (1 + t.level * 0.1), 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Level pips
    ctx.fillStyle = COLORS.white;
    for (let i = 0; i < t.level; i++) {
      ctx.beginPath();
      ctx.arc(-10 + i * 7, 11, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  });
}

function drawEnemies() {
  state.enemies.forEach(e => {
    ctx.save();
    ctx.translate(e.x, e.y);

    // Health ring
    const hpPct = e.hp / e.maxHp;
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, e.radius + 4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = hpPct > 0.5 ? COLORS.lime : (hpPct > 0.25 ? COLORS.orange : COLORS.magenta);
    ctx.beginPath();
    ctx.arc(0, 0, e.radius + 4, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * hpPct);
    ctx.stroke();

    // Body
    ctx.fillStyle = e.color;
    ctx.shadowColor = e.color;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    if (e.type === 'tank') {
      ctx.rect(-e.radius, -e.radius, e.radius * 2, e.radius * 2);
    } else if (e.type === 'surge') {
      ctx.moveTo(0, -e.radius);
      ctx.lineTo(e.radius, e.radius);
      ctx.lineTo(-e.radius, e.radius);
      ctx.closePath();
    } else if (e.type === 'virus') {
      for (let i = 0; i < 6; i++) {
        const a = i * Math.PI / 3;
        const px = Math.cos(a) * e.radius;
        const py = Math.sin(a) * e.radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    } else {
      ctx.arc(0, 0, e.radius, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.shadowBlur = 0;

    // Heal aura for virus
    if (e.healRadius > 0) {
      ctx.strokeStyle = 'rgba(166,255,0,0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, e.healRadius, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
  });
}

function drawProjectiles() {
  state.projectiles.forEach(p => {
    ctx.strokeStyle = p.color;
    ctx.lineWidth = 2;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
    ctx.stroke();
    ctx.shadowBlur = 0;
  });
}

function drawParticles() {
  state.particles.forEach(p => {
    const alpha = Math.max(0, p.life / p.maxLife);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  });
}

function drawHover() {
  if (!state.hoveredCell) return;
  const { c, r } = state.hoveredCell;
  const x = c * TILE;
  const y = r * TILE;
  const tower = TOWERS.find(t => t.id === state.selectedTowerId);
  const placed = state.towers.find(t => t.c === c && t.r === r);

  if (tower && !placed && !cellIsPath(c, r)) {
    const canAfford = state.energy >= tower.cost;
    ctx.fillStyle = canAfford ? tower.color + '22' : COLORS.magenta + '22';
    ctx.strokeStyle = canAfford ? tower.color + '88' : COLORS.magenta + '88';
    ctx.lineWidth = 2;
    ctx.fillRect(x + 1, y + 1, TILE - 2, TILE - 2);
    ctx.strokeRect(x + 1, y + 1, TILE - 2, TILE - 2);

    ctx.strokeStyle = tower.color + '33';
    ctx.beginPath();
    ctx.arc(x + TILE / 2, y + TILE / 2, tower.range, 0, Math.PI * 2);
    ctx.stroke();
  } else if (placed) {
    ctx.fillStyle = COLORS.orange + '18';
    ctx.strokeStyle = COLORS.orange + '88';
    ctx.fillRect(x + 1, y + 1, TILE - 2, TILE - 2);
    ctx.strokeRect(x + 1, y + 1, TILE - 2, TILE - 2);
  }
}

function drawSelection() {
  if (!state.selectedPlacedTower) return;
  const t = state.selectedPlacedTower;
  const x = t.c * TILE;
  const y = t.r * TILE;
  ctx.strokeStyle = COLORS.white;
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.strokeRect(x + 2, y + 2, TILE - 4, TILE - 4);
  ctx.setLineDash([]);
}

/* ============================================================
   INPUT HANDLING
   ============================================================ */

function getCellFromMouse(evt) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const mx = (evt.clientX - rect.left) * scaleX;
  const my = (evt.clientY - rect.top) * scaleY;
  const c = Math.floor(mx / TILE);
  const r = Math.floor(my / TILE);
  return { c, r, x: mx, y: my };
}

canvas.addEventListener('mousemove', e => {
  state.hoveredCell = getCellFromMouse(e);
});

canvas.addEventListener('mouseleave', () => {
  state.hoveredCell = null;
});

canvas.addEventListener('click', e => {
  if (state.paused || state.victory || state.gameOver) return;
  const cell = getCellFromMouse(e);
  if (cell.c < 0 || cell.c >= COLS || cell.r < 0 || cell.r >= ROWS) return;

  const placed = state.towers.find(t => t.c === cell.c && t.r === cell.r);

  if (placed) {
    selectPlacedTower(placed);
    state.selectedTowerId = null;
    renderTowerList();
    return;
  }

  if (state.selectedTowerId) {
    const ok = buildTower(cell.c, cell.r, state.selectedTowerId);
    if (!ok) {
      const tower = TOWERS.find(t => t.id === state.selectedTowerId);
      updateInfo(ok ? 'Node constructed.' : tower && state.energy < tower.cost ? 'Insufficient energy.' : 'Invalid placement.');
    }
  }
});

canvas.addEventListener('contextmenu', e => {
  e.preventDefault();
  state.selectedTowerId = null;
  state.selectedPlacedTower = null;
  document.getElementById('selection-panel').style.display = 'none';
  renderTowerList();
});

function selectTower(id) {
  state.selectedTowerId = state.selectedTowerId === id ? null : id;
  state.selectedPlacedTower = null;
  document.getElementById('selection-panel').style.display = 'none';
  renderTowerList();
  const tower = TOWERS.find(t => t.id === id);
  if (tower) updateInfo(`${tower.name}: ${tower.desc} Cost: ${tower.cost} energy.`);
}

function selectPlacedTower(tower) {
  state.selectedPlacedTower = tower;
  const upgradeCost = Math.floor(tower.cost * 0.7 * tower.level);
  const canUpgrade = tower.level < 4 && state.energy >= upgradeCost;
  const sellValue = Math.floor(tower.totalSpent * 0.6);
  document.getElementById('selection-text').innerHTML = `
    <strong style="color:${tower.color}">${tower.name}</strong> (Lv ${tower.level})<br>
    Range: ${Math.floor(tower.range)}<br>
    Damage: ${Math.floor(tower.damage)}<br>
    Kills: ${tower.kills}<br>
    <br>
    Upgrade: ${canUpgrade ? upgradeCost : 'MAX'} energy<br>
    Sell: ${sellValue} energy
  `;
  document.getElementById('selection-panel').style.display = 'block';
}

function upgradeSelected() {
  if (state.selectedPlacedTower) upgradeTower(state.selectedPlacedTower);
}

function sellSelected() {
  if (state.selectedPlacedTower) sellTower(state.selectedPlacedTower);
}

function cellIsPath(c, r) {
  return state.level && state.level.path.some(p => p[0] === c && p[1] === r);
}

/* ============================================================
   UI UPDATES
   ============================================================ */

function updateHud() {
  if (!state.level) return;
  document.getElementById('hud-level').textContent = `0${state.level.id}`;
  document.getElementById('hud-wave').textContent = `${state.wave} / ${state.level.waves.length}`;
  document.getElementById('hud-energy').textContent = Math.floor(state.energy);
  document.getElementById('hud-lives').textContent = state.lives;
  document.getElementById('btn-pause').textContent = state.paused ? 'RESUME' : 'PAUSE';
  document.getElementById('btn-speed').textContent = state.speed + 'x';
  renderTowerList();
}

function renderTowerList() {
  const list = document.getElementById('tower-list');
  list.innerHTML = '';
  TOWERS.forEach(t => {
    const affordable = state.energy >= t.cost;
    const selected = state.selectedTowerId === t.id;
    const row = document.createElement('div');
    row.className = 'tower-row' + (selected ? ' selected' : '') + (affordable ? ' affordable' : ' unaffordable');
    row.innerHTML = `
      <div class="tower-icon" style="background:${t.color}">${t.key}</div>
      <div class="tower-info">
        <div class="name">${t.name}</div>
        <div class="cost">${t.cost} ENERGY</div>
        <div class="desc">${t.desc}</div>
      </div>
    `;
    row.onclick = () => selectTower(t.id);
    list.appendChild(row);
  });
}

function updateInfo(text) {
  document.getElementById('info-text').textContent = text;
}

function togglePause() {
  if (state.victory || state.gameOver) return;
  state.paused = !state.paused;
  if (!state.paused) {
    state.lastTime = performance.now();
    requestAnimationFrame(loop);
  }
  updateHud();
}

function toggleSpeed() {
  if (state.speed === 1) state.speed = 2;
  else if (state.speed === 2) state.speed = 3;
  else state.speed = 1;
  updateHud();
}

/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */

document.addEventListener('keydown', e => {
  if (state.screen !== 'game') return;
  const key = e.key.toLowerCase();
  const map = { b: 'beam', p: 'pulse', g: 'glitch', s: 'sniper', r: 'relay' };
  if (map[key]) selectTower(map[key]);
  if (key === ' ' || key === 'spacebar') {
    e.preventDefault();
    togglePause();
  }
  if (key === 'escape') {
    state.selectedTowerId = null;
    state.selectedPlacedTower = null;
    document.getElementById('selection-panel').style.display = 'none';
    renderTowerList();
  }
});

/* ============================================================
   INIT
   ============================================================ */

showScreen('splash');
