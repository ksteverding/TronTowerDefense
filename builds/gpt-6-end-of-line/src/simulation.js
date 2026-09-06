/** END OF LINE — deterministic, renderer-independent combat simulation. */
export const GRID = Object.freeze({ cols: 18, rows: 12, tile: 2.4 });

export const TOWERS = Object.freeze({
  pulse: { label: '01', name: 'Pulse repeater', cost: 90, color: '#45f5ff', range: 6.8, damage: 15, interval: 0.42, description: 'Rapid plasma fire. A dependable front line against light cycles.' },
  arc: { label: '02', name: 'Arc conductor', cost: 140, color: '#ad8bff', range: 6.6, damage: 25, interval: 0.95, description: 'Lightning chains through enemies. Deals 45% more damage to chilled targets and drains shields.' },
  cryo: { label: '03', name: 'Cryo reactor', cost: 110, color: '#8cffe2', range: 5.8, damage: 10, interval: 1.2, description: 'Freezes a cluster of enemies, slowing movement and amplifying arc damage.' },
  rail: { label: '04', name: 'Rail accelerator', cost: 180, color: '#ffdc83', range: 11.8, damage: 100, interval: 2.3, description: 'Long-range piercing rounds ignore armor and strike enemies in a line.' },
  mortar: { label: '05', name: 'Solar artillery', cost: 160, color: '#ff8a5c', range: 10.2, damage: 65, interval: 2.35, description: 'Explosive solar shells devastate packed formations with splash damage.' },
});

export const SECTORS = Object.freeze([
  { id: 'causeway', name: 'Ion Causeway', subtitle: 'THE MACHINE CITY', description: 'A rising defense platform above the electric heart of a colossal machine city.', waves: 10, initialCredits: 420, color: '#45f5ff', path: [[-1, 3], [4, 3], [4, 8], [9, 8], [9, 2], [14, 2], [14, 6], [18, 6]] },
  { id: 'cataract', name: 'Cataract Divide', subtitle: 'THE FALLING OCEAN', description: 'Climb the canyon terraces between luminous waterfalls and deep blue reservoirs.', waves: 12, initialCredits: 460, color: '#539cff', path: [[-1, 3], [3, 3], [3, 9], [7, 9], [7, 2], [12, 2], [12, 8], [15, 8], [15, 6], [18, 6]] },
  { id: 'caldera', name: 'Obsidian Caldera', subtitle: 'THE MOLTEN CORE', description: 'Defend volcanic ridges where black glass, molten rivers, and crimson machinery converge.', waves: 14, initialCredits: 500, color: '#ff704f', path: [[-1, 3], [3, 3], [3, 1], [8, 1], [8, 6], [5, 6], [5, 10], [12, 10], [12, 4], [16, 4], [16, 6], [18, 6]] },
]);

const smoothstep = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
export function terrainHeight(sectorIndex, x, z) {
  if (sectorIndex === 1) return 0.3 + smoothstep(-12, -6, x) * 3.8 - smoothstep(4, 10, x) * 2.4;
  if (sectorIndex === 2) return 0.3 + smoothstep(-11, -3, z) * 2.6 - smoothstep(4, 11, z) * 1.9 + smoothstep(-7, 4, x) * 1.8;
  return 0.3 + smoothstep(-6, 5, x) * 1.8;
}

/** Physical terrain availability; route cells are excluded separately by Simulation. */
export function isTerrainBuildable(sectorIndex, col, row) {
  if (!Number.isInteger(col) || !Number.isInteger(row) || col < 0 || row < 0 || col >= GRID.cols || row >= GRID.rows) return false;
  if (sectorIndex === 1 && col >= 8 && col <= 10) return false;
  if (sectorIndex === 2 && ((col <= 2 && row >= 8) || (col >= 14 && row <= 1))) return false;
  return true;
}

const UNITS = {
  cycle: { hp: 52, shield: 0, speed: 3.7, armor: 0, bounty: 8, leak: 3, size: 0.7, color: '#ff5d86' },
  drone: { hp: 75, shield: 22, speed: 2.75, armor: 0, bounty: 11, leak: 4, size: 0.85, color: '#f6a5ff' },
  walker: { hp: 210, shield: 0, speed: 1.5, armor: 0.36, bounty: 20, leak: 9, size: 1.2, color: '#ff9565' },
  carrier: { hp: 145, shield: 115, speed: 1.85, armor: 0.14, bounty: 22, leak: 7, size: 1.1, color: '#e298ff' },
  boss: { hp: 1800, shield: 750, speed: 1.08, armor: 0.24, bounty: 180, leak: 35, size: 2.5, color: '#ff436c' },
};

const sqDistance = (a, b) => (a.x - b.x) ** 2 + (a.z - b.z) ** 2;
const fail = reason => ({ ok: false, reason });

export class Simulation {
  constructor({ onEvent } = {}) {
    this.onEvent = typeof onEvent === 'function' ? onEvent : () => {};
    this.start(0);
  }

  start(sectorIndex = 0) {
    this.sectorIndex = Number.isInteger(sectorIndex) && SECTORS[sectorIndex] ? sectorIndex : 0;
    this.sector = SECTORS[this.sectorIndex];
    this.state = 'ready';
    this.credits = this.sector.initialCredits;
    this.integrity = this.maxIntegrity = 100;
    this.wave = 0;
    this.totalWaves = this.sector.waves;
    this.score = this.kills = this.time = 0;
    this.enemies = [];
    this.towers = [];
    this.cooldowns = { nova: 0, overdrive: 0 };
    this.overdriveRemaining = 0;
    this._nextId = 1;
    this._spawnQueue = [];
    this._waveTime = 0;
    this._roadCells = new Set();
    this._path = this.sector.path.map(([col, row]) => this.cellToWorld(col, row));
    this._segments = [];
    this.pathLength = 0;
    for (let i = 1; i < this._path.length; i++) {
      const from = this._path[i - 1], to = this._path[i];
      const length = Math.hypot(to.x - from.x, to.z - from.z);
      this._segments.push({ from, to, length, start: this.pathLength });
      this.pathLength += length;
      const [ac, ar] = this.sector.path[i - 1], [bc, br] = this.sector.path[i];
      const steps = Math.max(Math.abs(bc - ac), Math.abs(br - ar));
      for (let j = 0; j <= steps; j++) this._roadCells.add(`${ac + Math.sign(bc - ac) * j},${ar + Math.sign(br - ar) * j}`);
    }
    return { ok: true };
  }

  cellToWorld(col, row) { return { x: (col - (GRID.cols - 1) / 2) * GRID.tile, z: (row - (GRID.rows - 1) / 2) * GRID.tile }; }
  worldToCell(x, z) { return { col: Math.round(x / GRID.tile + (GRID.cols - 1) / 2), row: Math.round(z / GRID.tile + (GRID.rows - 1) / 2) }; }
  groundHeight(x, z) { return terrainHeight(this.sectorIndex, x, z); }
  isRoad(col, row) { return this._roadCells.has(`${col},${row}`); }

  canBuild(col, row) {
    return (this.state === 'ready' || this.state === 'wave') && isTerrainBuildable(this.sectorIndex, col, row) && !this.isRoad(col, row) && !this.towers.some(t => t.col === col && t.row === row);
  }

  build(type, col, row) {
    if (!Object.hasOwn(TOWERS, type)) return fail('Unknown defense system.');
    if (!this.canBuild(col, row)) return fail('Choose an empty platform tile off the enemy route.');
    if (this.credits < TOWERS[type].cost) return fail('Insufficient credits.');
    const { x, z } = this.cellToWorld(col, row);
    const tower = { id: this._nextId++, type, col, row, x, z, y: this.groundHeight(x, z), level: 1, branch: null, cooldown: 0, angle: 0, spent: TOWERS[type].cost, kills: 0, damageDealt: 0 };
    this.credits -= tower.spent;
    this.towers.push(tower);
    this._emit('build', { tower });
    return { ok: true, tower };
  }

  getTowerStats(tower) {
    const base = TOWERS[tower.type];
    const rank = tower.level - 1;
    const power = tower.branch === 'power';
    const utility = tower.branch === 'utility';
    const links = this.towers.filter(t => t.id !== tower.id && t.type !== tower.type && sqDistance(t, tower) <= 16.01).length;
    const rateBuff = 1 + Math.min(3, links) * 0.1;
    return {
      ...base,
      level: tower.level,
      branch: tower.branch,
      links,
      range: base.range * (1 + rank * 0.08) * (utility ? 1 + rank * 0.1 : 1),
      damage: base.damage * (1 + rank * 0.45) * (power ? 1 + rank * 0.18 : 1),
      interval: base.interval * (1 - rank * 0.08) / rateBuff / (this.overdriveRemaining > 0 ? 1.7 : 1),
      chains: 3 + (utility ? rank : 0),
      splash: 3.2 + (utility ? rank * 0.65 : 0),
      slowFactor: Math.max(0.24, 0.52 - (utility ? rank * 0.12 : rank * 0.035)),
      slowDuration: 2.9 + rank * 0.4,
      pierce: 3 + (utility ? rank * 2 : rank),
      upgradeCost: tower.level < 3 ? Math.round(base.cost * (0.75 + tower.level * 0.45) / 5) * 5 : null,
      sellValue: Math.floor(tower.spent * 0.7),
    };
  }

  upgrade(id, branch) {
    if (this.state !== 'ready' && this.state !== 'wave') return fail('The operation has ended.');
    const tower = this.towers.find(t => t.id === id);
    if (!tower) return fail('Defense system not found.');
    if (tower.level >= 3) return fail('Maximum evolution reached.');
    if (tower.level === 1 && branch !== 'power' && branch !== 'utility') return fail('Choose the power or utility evolution.');
    if (tower.level > 1 && branch && branch !== tower.branch) return fail('An evolution path cannot be changed.');
    const { upgradeCost } = this.getTowerStats(tower);
    if (this.credits < upgradeCost) return fail('Insufficient credits.');
    this.credits -= upgradeCost;
    tower.spent += upgradeCost;
    if (tower.level === 1) tower.branch = branch;
    tower.level++;
    this._emit('upgrade', { tower });
    return { ok: true, tower };
  }

  sell(id) {
    if (this.state !== 'ready' && this.state !== 'wave') return fail('The operation has ended.');
    const index = this.towers.findIndex(t => t.id === id);
    if (index === -1) return fail('Defense system not found.');
    const tower = this.towers[index];
    const refund = this.getTowerStats(tower).sellValue;
    this.credits += refund;
    this.towers.splice(index, 1);
    this._emit('sell', { tower, refund });
    return { ok: true, refund };
  }

  startWave() {
    if (this.state !== 'ready') return fail('Finish the current wave first.');
    if (this.wave >= this.totalWaves) return fail('All waves are complete.');
    this.wave++;
    this.state = 'wave';
    this._waveTime = 0;
    this._spawnQueue = [];
    const count = 8 + this.wave * 2 + this.sectorIndex * 2;
    for (let i = 0; i < count; i++) {
      let type = 'cycle';
      if (this.wave >= 2 && i % 4 === 2) type = 'drone';
      if (this.wave >= 3 && i % 6 === 4) type = 'walker';
      if (this.wave >= 4 && i % 7 === 5) type = 'carrier';
      if (this.wave >= 7 && i % 8 === 1) type = 'walker';
      this._spawnQueue.push({ at: i * Math.max(0.38, 0.92 - this.wave * 0.035), type });
    }
    if (this.wave % 5 === 0 || this.wave === this.totalWaves) this._spawnQueue.push({ at: count * 0.45, type: 'boss' });
    this._spawnQueue.sort((a, b) => a.at - b.at);
    this._emit('wave', { wave: this.wave, count: this._spawnQueue.length });
    return { ok: true, wave: this.wave };
  }

  ability(type, x = 0, z = 0) {
    if (this.state !== 'wave') return fail('Abilities are available during combat.');
    if (type !== 'nova' && type !== 'overdrive') return fail('Unknown ability.');
    if (this.cooldowns[type] > 0) return fail(`Recharging: ${Math.ceil(this.cooldowns[type])}s.`);
    if (type === 'nova' && (!Number.isFinite(x) || !Number.isFinite(z))) return fail('Choose a valid target.');
    this.cooldowns[type] = type === 'nova' ? 42 : 55;
    this._emit('ability', { ability: type, x, z });
    if (type === 'overdrive') this.overdriveRemaining = 9;
    else {
      for (const enemy of this.enemies) if (enemy.hp > 0 && sqDistance(enemy, { x, z }) <= 8.5 ** 2) {
        enemy.slow = Math.min(enemy.slow, 0.22);
        enemy.slowRemaining = Math.max(enemy.slowRemaining, 2.5);
        this._damage(enemy, 250 + this.wave * 22, { armorPierce: true, shieldMultiplier: 1.6 });
      }
      this.enemies = this.enemies.filter(e => e.hp > 0);
    }
    return { ok: true };
  }

  update(dt) {
    if (!Number.isFinite(dt) || dt <= 0 || this.state === 'victory' || this.state === 'defeat') return;
    // Bounded substeps keep targeting, slowing and high game speeds consistent.
    let remaining = Math.min(dt, 5);
    while (remaining > 0.000001) {
      const step = Math.min(remaining, 0.05);
      remaining -= step;
      this._step(step);
      if (this.state === 'victory' || this.state === 'defeat') break;
    }
  }

  _step(dt) {
    this.time += dt;
    this.cooldowns.nova = Math.max(0, this.cooldowns.nova - dt);
    this.cooldowns.overdrive = Math.max(0, this.cooldowns.overdrive - dt);
    this.overdriveRemaining = Math.max(0, this.overdriveRemaining - dt);
    if (this.state !== 'wave') return;
    this._waveTime += dt;
    while (this._spawnQueue.length && this._spawnQueue[0].at <= this._waveTime) this._spawn(this._spawnQueue.shift().type);
    for (const enemy of this.enemies) {
      if (enemy.hp <= 0) continue;
      enemy.slowRemaining = Math.max(0, enemy.slowRemaining - dt);
      if (!enemy.slowRemaining) enemy.slow = 1;
      enemy.progress += enemy.speed * enemy.slow * dt;
      this._positionEnemy(enemy);
      if (enemy.progress >= this.pathLength) {
        enemy.hp = 0;
        enemy.leaked = true;
        this.integrity = Math.max(0, this.integrity - enemy.leak);
        this._emit('leak', { enemy });
        if (this.integrity <= 0) {
          this.state = 'defeat';
          this._emit('defeat', {});
          return;
        }
      }
      if (enemy.type === 'carrier' && enemy.hp > 0) {
        enemy.auraCooldown -= dt;
        if (enemy.auraCooldown <= 0) {
          enemy.auraCooldown = 1.2;
          for (const ally of this.enemies) if (ally.hp > 0 && ally.maxShield > 0 && !ally.isBoss && sqDistance(enemy, ally) < 5 ** 2) ally.shield = Math.min(ally.maxShield, ally.shield + 9);
        }
      }
    }
    for (const tower of this.towers) {
      tower.cooldown = Math.max(0, tower.cooldown - dt);
      const stats = this.getTowerStats(tower);
      const candidates = this.enemies.filter(e => e.hp > 0 && sqDistance(e, tower) <= stats.range ** 2).sort((a, b) => b.progress - a.progress);
      if (!candidates.length) continue;
      const target = candidates[0];
      tower.angle = Math.atan2(target.x - tower.x, target.z - tower.z);
      tower.targetId = target.id;
      if (tower.cooldown > 0) continue;
      tower.cooldown = stats.interval;
      this._fire(tower, target, stats);
    }
    this.enemies = this.enemies.filter(e => e.hp > 0);
    if (!this.enemies.length && !this._spawnQueue.length && this.state === 'wave') {
      const reward = 48 + this.wave * 8 + this.sectorIndex * 6;
      this.credits += reward;
      this.score += reward * 5;
      this.state = this.wave === this.totalWaves ? 'victory' : 'ready';
      this._emit('waveClear', { wave: this.wave, reward });
      if (this.state === 'victory') this._emit('victory', { score: this.score });
    }
  }

  _spawn(type) {
    const unit = UNITS[type];
    const scale = (1 + (this.wave - 1) * 0.115) * (1 + this.sectorIndex * 0.15);
    const bossScale = type === 'boss' ? 0.74 + this.wave * 0.045 : 1;
    const enemy = {
      id: this._nextId++, type, x: this._path[0].x, z: this._path[0].z, y: 0, angle: 0,
      hp: Math.round(unit.hp * scale * bossScale), maxHp: Math.round(unit.hp * scale * bossScale),
      shield: Math.round(unit.shield * scale), maxShield: Math.round(unit.shield * scale),
      progress: 0, speed: unit.speed * (1 + (this.wave - 1) * 0.012), slow: 1, slowRemaining: 0,
      color: unit.color, size: unit.size, isBoss: type === 'boss', armor: unit.armor,
      bounty: Math.round(unit.bounty * (1 + (this.wave - 1) * 0.025)), leak: unit.leak, phase: 1, auraCooldown: 1.2,
    };
    this._positionEnemy(enemy);
    this.enemies.push(enemy);
    this._emit('spawn', { enemy });
  }

  _positionEnemy(enemy) {
    const segment = this._segments.find(s => enemy.progress < s.start + s.length) || this._segments[this._segments.length - 1];
    const t = Math.min(1, Math.max(0, (enemy.progress - segment.start) / segment.length));
    enemy.x = segment.from.x + (segment.to.x - segment.from.x) * t;
    enemy.z = segment.from.z + (segment.to.z - segment.from.z) * t;
    enemy.y = this.groundHeight(enemy.x, enemy.z);
    enemy.angle = Math.atan2(segment.to.x - segment.from.x, segment.to.z - segment.from.z);
  }

  _fire(tower, target, stats) {
    let targets = [target];
    if (tower.type === 'arc') {
      while (targets.length < stats.chains) {
        const last = targets[targets.length - 1];
        const next = this.enemies.filter(e => e.hp > 0 && !targets.includes(e) && sqDistance(e, last) < 5.4 ** 2).sort((a, b) => sqDistance(a, last) - sqDistance(b, last))[0];
        if (!next) break;
        targets.push(next);
      }
    } else if (tower.type === 'mortar' || tower.type === 'cryo') {
      const radius = tower.type === 'cryo' ? stats.splash * 0.86 : stats.splash;
      targets = this.enemies.filter(e => e.hp > 0 && sqDistance(e, target) <= radius ** 2);
    } else if (tower.type === 'rail') {
      const dx = target.x - tower.x, dz = target.z - tower.z, length = Math.hypot(dx, dz) || 1;
      targets = this.enemies.filter(enemy => {
        if (enemy.hp <= 0) return false;
        const ex = enemy.x - tower.x, ez = enemy.z - tower.z;
        const along = (ex * dx + ez * dz) / length;
        const across = Math.abs(ex * dz - ez * dx) / length;
        return along >= 0 && along <= stats.range && across <= 0.8 + enemy.size * 0.25;
      }).sort((a, b) => sqDistance(a, tower) - sqDistance(b, tower)).slice(0, stats.pierce);
    }
    this._emit('shot', { tower, targets: [...targets], from: { x: tower.x, y: tower.y + 2, z: tower.z }, to: { x: target.x, y: target.y + 0.6, z: target.z }, weapon: tower.type });
    for (let i = 0; i < targets.length; i++) {
      const enemy = targets[i];
      if (tower.type === 'cryo') {
        enemy.slow = Math.min(enemy.slow, stats.slowFactor);
        enemy.slowRemaining = Math.max(enemy.slowRemaining, stats.slowDuration);
      }
      const damage = stats.damage * (tower.type === 'arc' ? (enemy.slow < 1 ? 1.45 : 1) * 0.84 ** i : 1);
      this._damage(enemy, damage, { tower, armorPierce: tower.type === 'rail', shieldMultiplier: tower.type === 'arc' ? 1.7 : 1 });
    }
  }

  _damage(enemy, amount, { tower, armorPierce = false, shieldMultiplier = 1 } = {}) {
    if (enemy.hp <= 0) return;
    const hpBefore = enemy.hp, shieldBefore = enemy.shield;
    if (enemy.shield > 0) {
      const absorbed = Math.min(enemy.shield, amount * shieldMultiplier);
      enemy.shield -= absorbed;
      amount -= absorbed / shieldMultiplier;
    }
    enemy.hp = Math.max(0, enemy.hp - Math.max(0, amount) * (armorPierce ? 1 : 1 - enemy.armor));
    if (tower) tower.damageDealt += hpBefore - enemy.hp + shieldBefore - enemy.shield;
    if (enemy.isBoss && shieldBefore > 0 && enemy.shield <= 0 && enemy.phase === 1) {
      enemy.phase = 2;
      enemy.armor *= 0.5;
      this._emit('bossPhase', { enemy, phase: 'exposed' });
    }
    if (enemy.isBoss && enemy.hp > 0 && enemy.hp < enemy.maxHp * 0.45 && enemy.phase < 3) {
      enemy.phase = 3;
      enemy.speed *= 1.4;
      enemy.color = '#ffbf70';
      this._emit('bossPhase', { enemy, phase: 'enraged' });
    }
    if (enemy.hp <= 0) {
      this.credits += enemy.bounty;
      this.kills++;
      this.score += enemy.bounty * (enemy.isBoss ? 20 : 10);
      if (tower) tower.kills++;
      this._emit('kill', { enemy, tower });
    }
  }

  getSnapshot() {
    return {
      state: this.state, sector: this.sector, sectorIndex: this.sectorIndex,
      credits: this.credits, integrity: this.integrity, maxIntegrity: this.maxIntegrity,
      wave: this.wave, totalWaves: this.totalWaves, score: this.score, kills: this.kills,
      enemies: this.enemies, towers: this.towers, time: this.time,
      cooldowns: { ...this.cooldowns }, overdriveRemaining: this.overdriveRemaining,
      incoming: this._spawnQueue.length,
    };
  }

  _emit(type, payload) { this.onEvent({ type, ...payload }); }
}
