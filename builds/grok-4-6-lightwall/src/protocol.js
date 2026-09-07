/** Combat, economy, waves. Renderer-free. */

import {
  GRID, SECTORS, TOWERS, UNITS, WALL_COST, SELL_RATE, SYNERGY_TILES,
  cellToWorld, worldToCell, terrainHeight, isGlass, gateAt, upgradeCost,
} from './sectors.js';
import { route, pathLength, wouldTrap, fillRoad, closestNode } from './lanes.js';

const THROW_CD = 18;
const OVERCLOCK_CD = 24;
const OVERCLOCK_DUR = 8;

const hypot3 = (a, b) => Math.hypot(a.x - b.x, (a.y || 0) - (b.y || 0), a.z - b.z);

function placeAlong(path, t) {
  const total = Math.max(0.001, pathLength(path));
  let dist = Math.max(0, Math.min(1, t)) * total;
  for (let i = 0; i < path.length - 1; i++) {
    const d = hypot3(path[i], path[i + 1]);
    if (d < 0.001) continue;
    if (dist <= d) {
      const f = dist / d;
      return {
        x: path[i].x + (path[i + 1].x - path[i].x) * f,
        y: path[i].y + (path[i + 1].y - path[i].y) * f,
        z: path[i].z + (path[i + 1].z - path[i].z) * f,
        seg: i,
      };
    }
    dist -= d;
  }
  const last = path[path.length - 1];
  return { x: last.x, y: last.y, z: last.z, seg: path.length - 2 };
}

function traveled(path, seg, x, y, z) {
  let d = 0;
  for (let i = 0; i < seg; i++) d += hypot3(path[i], path[i + 1]);
  if (path[seg]) d += Math.hypot(x - path[seg].x, (y || 0) - path[seg].y, z - path[seg].z);
  return d;
}

export class Protocol {
  constructor({ onEvent } = {}) {
    this.onEvent = typeof onEvent === 'function' ? onEvent : () => {};
    this.speed = 1;
    this.start(0);
  }

  _emit(type, payload = {}) {
    this.onEvent({ type, ...payload });
  }

  start(sectorIndex = 0) {
    this.sectorIndex = SECTORS[sectorIndex] ? sectorIndex : 0;
    this.sector = SECTORS[this.sectorIndex];
    this.energy = this.sector.initialEnergy;
    this.core = this.sector.lives;
    this.maxCore = this.sector.lives;
    this.wave = 0;
    this.totalWaves = this.sector.waves;
    this.state = 'ready';
    this.towers = [];
    this.units = [];
    this.shots = [];
    this.closed = new Set();
    this.walls = new Map();
    this.cooldowns = { throw: 0, overclock: 0 };
    this.overclock = 0;
    this.kills = 0;
    this._id = 1;
    this._spawnQ = [];
    this._spawnT = 0;
    this.roadCells = fillRoad(this.sector);
    this._refreshPath();
    return { ok: true };
  }

  _refreshPath() {
    this._path = route(this.sector, this.closed, this.sectorIndex);
  }

  currentPath() {
    return this._path;
  }

  groundHeight(x, z) {
    return terrainHeight(this.sectorIndex, x, z);
  }

  isRoad(col, row) {
    return this.roadCells.has(`${col},${row}`);
  }

  canBuild(col, row) {
    if (!Number.isInteger(col) || !Number.isInteger(row)) return false;
    if (col < 0 || row < 0 || col >= GRID.cols || row >= GRID.rows) return false;
    if (this.isRoad(col, row) || isGlass(this.sector, col, row) || gateAt(this.sector, col, row)) return false;
    if (this.towers.some(t => t.col === col && t.row === row)) return false;
    return true;
  }

  firstBuildPad() {
    for (let row = 0; row < GRID.rows; row++) {
      for (let col = 0; col < GRID.cols; col++) {
        if (this.canBuild(col, row)) return { col, row };
      }
    }
    return null;
  }

  nextBuildPad(from) {
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]];
    for (const [dc, dr] of dirs) {
      const col = from.col + dc;
      const row = from.row + dr;
      if (this.canBuild(col, row)) return { col, row };
    }
    for (let row = 0; row < GRID.rows; row++) {
      for (let col = 0; col < GRID.cols; col++) {
        if ((col !== from.col || row !== from.row) && this.canBuild(col, row)) return { col, row };
      }
    }
    return null;
  }

  build(type, col, row) {
    const def = TOWERS[type];
    if (!def) return { ok: false, reason: 'Unknown construct.' };
    if (this.state === 'win' || this.state === 'lose') return { ok: false, reason: 'Sector closed.' };
    if (!this.canBuild(col, row)) return { ok: false, reason: 'Pad occupied or off-grid.' };
    if (this.energy < def.cost) return { ok: false, reason: 'Insufficient energy.' };
    const { x, z } = cellToWorld(col, row);
    const y = this.groundHeight(x, z);
    const tower = {
      id: this._id++, type, col, row, x, y, z, level: 1, branch: null,
      cooldown: 0, angle: 0, spent: def.cost, kills: 0,
    };
    this.energy -= def.cost;
    this.towers.push(tower);
    this._emit('build', { tower });
    return { ok: true, tower };
  }

  upgrade(id, branch) {
    const tower = this.towers.find(t => t.id === id);
    if (!tower) return { ok: false, reason: 'No construct.' };
    if (tower.level >= 3) return { ok: false, reason: 'Maxed.' };
    if (tower.level === 1 && branch !== 'a' && branch !== 'b') return { ok: false, reason: 'Choose a branch.' };
    const cost = upgradeCost(tower.type, tower.level);
    if (this.energy < cost) return { ok: false, reason: 'Insufficient energy.' };
    this.energy -= cost;
    tower.spent += cost;
    if (tower.level === 1) tower.branch = branch;
    tower.level += 1;
    this._emit('upgrade', { tower });
    return { ok: true, tower };
  }

  sell(id) {
    const index = this.towers.findIndex(t => t.id === id);
    if (index < 0) return { ok: false, reason: 'No construct.' };
    const tower = this.towers[index];
    const refund = Math.round(tower.spent * SELL_RATE);
    this.energy += refund;
    this.towers.splice(index, 1);
    this._emit('sell', { tower, refund });
    return { ok: true, refund, spent: tower.spent, tower };
  }

  raiseWall(gateId) {
    if (!this.sector.gates[gateId]) return { ok: false, reason: 'Unknown gate.' };
    if (this.walls.has(gateId)) return { ok: false, reason: 'Already raised.' };
    if (this.energy < WALL_COST) return { ok: false, reason: 'Insufficient energy.' };
    const next = new Set(this.closed);
    next.add(gateId);
    const nodeIds = this.units.map(u => u.nodeId || closestNode(this.sector, u.x, u.z));
    if (wouldTrap(this.sector, next, nodeIds.length ? nodeIds : [this.sector.spawn])) {
      return { ok: false, reason: 'That wall would trap a program with no path.' };
    }
    this.energy -= WALL_COST;
    this.closed = next;
    const pad = this.sector.gates[gateId];
    const { x, z } = cellToWorld(pad.col, pad.row);
    const wall = { id: gateId, col: pad.col, row: pad.row, x, z, y: this.groundHeight(x, z), spent: WALL_COST };
    this.walls.set(gateId, wall);
    this._refreshPath();
    this._repathUnits();
    this._emit('reroute', { wall, gateId, raised: true });
    return { ok: true, wall };
  }

  dropWall(gateId) {
    const wall = this.walls.get(gateId);
    if (!wall) return { ok: false, reason: 'No wall.' };
    const refund = Math.round(WALL_COST * SELL_RATE);
    this.energy += refund;
    this.closed.delete(gateId);
    this.walls.delete(gateId);
    this._refreshPath();
    this._repathUnits();
    this._emit('reroute', { wall, gateId, raised: false, refund });
    return { ok: true, refund };
  }

  _repathUnits() {
    for (const unit of this.units) {
      const from = closestNode(this.sector, unit.x, unit.z);
      unit.path = route(this.sector, this.closed, this.sectorIndex, from);
      unit.nodeId = from;
      unit.seg = 0;
      const here = { x: unit.x, y: unit.y, z: unit.z };
      if (unit.path[0] && hypot3(here, unit.path[0]) > 0.05) unit.path = [here, ...unit.path];
    }
  }

  waveComposition(wave) {
    const w = Math.max(1, wave);
    const s = this.sectorIndex;
    const types = [];
    const push = (type, n) => { for (let i = 0; i < n; i++) types.push(type); };
    push('bit', 3 + w + s);
    push('program', 2 + Math.floor(w * 0.8));
    if (w > 2) push('cycle', w - 1);
    if (w > 4) push('tank', Math.floor(w / 3));
    if (w > 6) push('iso', Math.max(1, w - 6));
    if (w === this.totalWaves) types.push(this.sector.boss);
    return types;
  }

  preview() {
    return this.waveComposition(Math.min(this.wave + 1, this.totalWaves));
  }

  launchWave() {
    if (this.state === 'wave' && (this.units.length || this._spawnQ.length)) return { ok: false, reason: 'Wave in motion.' };
    if (this.state === 'win' || this.state === 'lose') return { ok: false, reason: 'Sector closed.' };
    if (this.wave >= this.totalWaves) return { ok: false, reason: 'No further waves.' };
    this.wave += 1;
    this.state = 'wave';
    this._spawnQ = this.waveComposition(this.wave).map((type, i) => ({ type, at: i * 0.38 }));
    this._spawnT = 0;
    this._emit('wave', { wave: this.wave, composition: this.waveComposition(this.wave) });
    return { ok: true };
  }

  forceSpawn(type) {
    this._spawn(type);
  }

  ability(kind, x = 0, z = 0) {
    if (kind === 'throw') {
      if (this.cooldowns.throw > 0) return { ok: false, reason: 'Identity disc recharging.' };
      this.cooldowns.throw = THROW_CD;
      const y = this.groundHeight(x, z) + 0.8;
      this.shots.push({
        kind: 'throw', x, y, z, vx: 0, vz: 0, bounce: 4, life: 2.4, dmg: 90, hit: new Set(),
      });
      this._emit('ability', { ability: 'throw', x, y, z });
      return { ok: true };
    }
    if (kind === 'overclock') {
      if (this.cooldowns.overclock > 0) return { ok: false, reason: 'Overclock recharging.' };
      this.cooldowns.overclock = OVERCLOCK_CD;
      this.overclock = OVERCLOCK_DUR;
      this._emit('ability', { ability: 'overclock' });
      return { ok: true };
    }
    return { ok: false, reason: 'Unknown ability.' };
  }

  setSpeed(n) {
    this.speed = n === 2 || n === 3 ? n : 1;
    return this.speed;
  }

  synergies(tower) {
    const near = other => Math.hypot(other.col - tower.col, other.row - tower.row) <= SYNERGY_TILES;
    const has = type => this.towers.some(t => t.id !== tower.id && t.type === type && near(t));
    const wallNear = [...this.walls.values()].some(w => Math.hypot(w.col - tower.col, w.row - tower.row) <= SYNERGY_TILES);
    return {
      shard: tower.type === 'disc' && has('ribbon') || tower.type === 'ribbon' && has('disc'),
      pierce: tower.type === 'disc' && has('sailer') || tower.type === 'sailer' && has('disc'),
      slowStack: tower.type === 'recognizer' && has('bit') || tower.type === 'bit' && has('recognizer'),
      wallPulse: tower.type === 'ribbon' && wallNear,
      wallRide: tower.type === 'sailer' && tower.branch === 'b' && this.walls.size > 0,
      rateShare: tower.type !== 'bit' && this.towers.some(t => t.type === 'bit' && t.branch === 'b' && near(t)),
    };
  }

  towerStats(tower) {
    const base = TOWERS[tower.type];
    const rank = tower.level - 1;
    const flags = this.synergies(tower);
    const heightBonus = 1 + Math.max(0, tower.y - this.groundHeight(tower.x, tower.z) + this._roadHeight(tower.x, tower.z)) * 0.08;
    const range = base.range * (1 + rank * 0.08) * heightBonus;
    let damage = base.damage * (1 + rank * 0.42) * (tower.branch === 'a' && tower.type !== 'bit' ? 1.18 : 1);
    let interval = base.interval * (1 - rank * 0.08);
    if (this.overclock > 0) interval /= 1.7;
    if (flags.rateShare) interval /= 1.12;
    const splash = (base.splash || 0) * (1 + (tower.branch === 'a' && tower.type === 'ribbon' ? 0.45 : 0) + rank * 0.12);
    return {
      ...base, range, damage, interval, splash, flags,
      pierce: (base.pierce || 0) + (flags.pierce ? 1 : 0) + (tower.branch === 'a' && tower.type === 'sailer' ? 1 : 0),
      slow: base.slow || 1,
    };
  }

  _roadHeight(x, z) {
    const path = this._path;
    if (!path.length) return this.groundHeight(x, z);
    let best = path[0];
    let bestD = Infinity;
    for (const p of path) {
      const d = Math.hypot(p.x - x, p.z - z);
      if (d < bestD) {
        bestD = d;
        best = p;
      }
    }
    return best.y;
  }

  tick(dt) {
    dt = Math.max(0, dt);
    while (dt > 0 && this.state !== 'win' && this.state !== 'lose') {
      const step = Math.min(0.05, dt);
      this._step(step);
      dt -= step;
    }
  }

  _step(dt) {
    this.cooldowns.throw = Math.max(0, this.cooldowns.throw - dt);
    this.cooldowns.overclock = Math.max(0, this.cooldowns.overclock - dt);
    this.overclock = Math.max(0, this.overclock - dt);
    this._spawnT += dt;
    while (this._spawnQ.length && this._spawnQ[0].at <= this._spawnT) {
      this._spawn(this._spawnQ.shift().type);
    }
    this._moveUnits(dt);
    this._bossLogic(dt);
    this._fire(dt);
    this._moveShots(dt);
    this.units = this.units.filter(u => !u.dead);
    this.shots = this.shots.filter(s => s.life > 0);
    this._endCheck();
  }

  _spawn(type) {
    const def = UNITS[type];
    if (!def) return;
    const path = this._path.map(p => ({ ...p }));
    const start = path[0];
    const scale = (1 + Math.max(0, this.wave - 1) * 0.1) * (1 + this.sectorIndex * 0.12);
    const hp = Math.round(def.hp * scale * (def.boss ? 0.85 + this.wave * 0.04 : 1));
    const unit = {
      id: this._id++, type, path, seg: 0, nodeId: this.sector.spawn,
      x: start.x, y: start.y, z: start.z,
      hp, maxHp: hp, shield: def.shield || 0, maxShield: def.shield || 0,
      speed: def.speed, armor: def.armor, bounty: def.bounty, leak: def.leak,
      size: def.size, color: def.color, boss: !!def.boss, hover: !!def.hover,
      summon: def.summon || null, summonT: 2.8, phase: def.shield ? 'shield' : 'exposed',
      slow: 1, slowT: 0, angle: 0, dead: false,
    };
    if (type === 'stalker') unit.discResist = true;
    Object.defineProperty(unit, 'pathT', {
      get: () => {
        const total = pathLength(unit.path);
        return total ? traveled(unit.path, unit.seg, unit.x, unit.y, unit.z) / total : 0;
      },
      set: t => {
        const p = placeAlong(unit.path, t);
        unit.x = p.x; unit.y = p.y; unit.z = p.z; unit.seg = p.seg;
      },
      enumerable: true,
    });
    this.units.push(unit);
    this._emit('spawn', { enemy: unit });
    return unit;
  }

  _moveUnits(dt) {
    for (const unit of this.units) {
      if (unit.dead) continue;
      if (unit.slowT > 0) {
        unit.slowT -= dt;
        if (unit.slowT <= 0) unit.slow = 1;
      }
      const def = UNITS[unit.type];
      let downhill = 1;
      const next = unit.path[unit.seg + 1];
      if (next && def.downhill && next.y < unit.y - 0.15) downhill = def.downhill;
      let budget = unit.speed * unit.slow * downhill * dt;
      while (budget > 0 && !unit.dead) {
        const target = unit.path[unit.seg + 1];
        if (!target) {
          this._leak(unit);
          break;
        }
        const d = hypot3(unit, target);
        if (d < 0.001) {
          unit.seg += 1;
          unit.nodeId = target.nodeId || unit.nodeId;
          continue;
        }
        if (budget >= d) {
          unit.x = target.x; unit.y = target.y; unit.z = target.z;
          unit.seg += 1;
          unit.nodeId = target.nodeId || unit.nodeId;
          budget -= d;
        } else {
          const f = budget / d;
          unit.x += (target.x - unit.x) * f;
          unit.y += (target.y - unit.y) * f;
          unit.z += (target.z - unit.z) * f;
          unit.angle = Math.atan2(target.x - unit.x, target.z - unit.z);
          budget = 0;
        }
      }
    }
  }

  _bossLogic(dt) {
    for (const unit of this.units) {
      if (!unit.boss || unit.dead) continue;
      if (unit.phase === 'shield' && unit.shield <= 0) {
        unit.phase = 'exposed';
        this._emit('bossPhase', { enemy: unit, phase: 'exposed' });
      }
      if (unit.hp < unit.maxHp * 0.35 && unit.phase !== 'enraged') {
        unit.phase = 'enraged';
        unit.speed *= 1.15;
        this._emit('bossPhase', { enemy: unit, phase: 'enraged' });
      }
      if (!unit.summon) continue;
      unit.summonT -= dt;
      if (unit.summonT > 0) continue;
      unit.summonT = unit.type === 'prime' ? 5.5 : 4.2;
      const n = unit.phase === 'enraged' ? 3 : 2;
      for (let i = 0; i < n; i++) {
        const child = this._spawn(unit.summon);
        if (!child) continue;
        child.x = unit.x + (i - 1) * 0.8;
        child.z = unit.z + 0.6;
        child.path = unit.path.slice(unit.seg);
        child.seg = 0;
        if (child.path[0] && hypot3(child, child.path[0]) > 0.05) child.path = [{ x: child.x, y: child.y, z: child.z }, ...child.path];
      }
    }
  }

  _leak(unit) {
    unit.dead = true;
    this.core = Math.max(0, this.core - unit.leak);
    this._emit('leak', { enemy: unit, leak: unit.leak });
    if (this.core <= 0) {
      this.state = 'lose';
      this._emit('lose', {});
    }
  }

  _fire(dt) {
    for (const tower of this.towers) {
      const stats = this.towerStats(tower);
      if (stats.aura) {
        for (const e of this.units) {
          if (!e.dead && Math.hypot(e.x - tower.x, e.z - tower.z) <= stats.range) {
            this._slow(e, stats.slow, 0.25);
            if (tower.branch === 'a') this._damage(e, (8 + tower.level * 4) * dt, tower);
          }
        }
        continue;
      }
      tower.cooldown = Math.max(0, tower.cooldown - dt);
      const target = this._nearest(tower, stats.range);
      if (!target) continue;
      tower.angle = Math.atan2(target.x - tower.x, target.z - tower.z);
      if (tower.cooldown > 0 || stats.interval <= 0) continue;
      tower.cooldown = stats.interval;
      this._shoot(tower, target, stats);
    }
  }

  _nearest(tower, range) {
    let best = null;
    let bestD = range;
    for (const e of this.units) {
      if (e.dead) continue;
      const d = Math.hypot(e.x - tower.x, e.z - tower.z);
      if (d <= bestD) {
        bestD = d;
        best = e;
      }
    }
    return best;
  }

  _shoot(tower, target, stats) {
    const from = { x: tower.x, y: tower.y + 0.9, z: tower.z };
    const to = { x: target.x, y: target.y + 0.5, z: target.z };
    if (stats.shot === 'burst') {
      this._emit('shot', { tower, weapon: tower.type, from, to, splash: stats.splash });
      for (const e of this.units) {
        if (!e.dead && Math.hypot(e.x - target.x, e.z - target.z) <= stats.splash) this._damage(e, stats.damage, tower);
      }
      if (stats.flags.wallPulse) {
        for (const e of this.units) {
          for (const w of this.walls.values()) {
            if (Math.hypot(e.x - w.x, e.z - w.z) < 3.2) this._damage(e, stats.damage * 0.35, tower);
          }
        }
      }
      return;
    }
    if (stats.shot === 'beam') {
      this._emit('shot', { tower, weapon: tower.type, from, to });
      this._damage(target, stats.damage, tower);
      this._slow(target, stats.slow, stats.slowT || 1.2);
      if (tower.branch === 'a') {
        const second = this.units.find(e => e !== target && !e.dead && Math.hypot(e.x - tower.x, e.z - tower.z) <= stats.range);
        if (second) this._damage(second, stats.damage * 0.7, tower);
      }
      if (tower.branch === 'b') {
        target.pull = 0.35;
        const pathPrev = target.path[target.seg];
        if (pathPrev) {
          target.x += (pathPrev.x - target.x) * 0.08;
          target.z += (pathPrev.z - target.z) * 0.08;
        }
      }
      return;
    }
    if (stats.shot === 'lance') {
      const ang = Math.atan2(target.z - tower.z, target.x - tower.x);
      const len = stats.range * (stats.flags.wallRide ? 1.25 : 1);
      this._emit('shot', { tower, weapon: tower.type, from, to: { x: from.x + Math.cos(ang) * len, y: from.y, z: from.z + Math.sin(ang) * len } });
      let hits = 0;
      for (const e of this.units) {
        if (e.dead) continue;
        const d = this._segDist(e.x, e.z, from.x, from.z, from.x + Math.cos(ang) * len, from.z + Math.sin(ang) * len);
        if (d < e.size + 0.35) {
          this._damage(e, stats.damage, tower);
          hits += 1;
          if (hits >= stats.pierce) break;
        }
      }
      return;
    }
    const charge = tower.branch === 'a' && tower.type === 'sailer' ? 1.35 : 1;
    const twin = tower.branch === 'a' && tower.type === 'disc';
    const ricochet = tower.branch === 'b' && tower.type === 'disc';
    this._emit('shot', { tower, weapon: tower.type, from, to });
    this.shots.push({
      kind: 'disc', x: from.x, y: from.y, z: from.z,
      tx: to.x, tz: to.z, speed: 18, dmg: stats.damage * charge, life: 1.6,
      target, tower, pierce: stats.flags.pierce ? 2 : 1, shard: stats.flags.shard, ricochet, hit: new Set(),
    });
    if (twin) {
      this.shots.push({
        kind: 'disc', x: from.x, y: from.y, z: from.z,
        tx: to.x + 0.7, tz: to.z - 0.7, speed: 18, dmg: stats.damage * 0.7, life: 1.6,
        target, tower, pierce: 1, shard: stats.flags.shard, hit: new Set(),
      });
    }
  }

  _moveShots(dt) {
    for (const s of this.shots) {
      s.life -= dt;
      if (s.kind === 'throw') {
        if (!s.aimed) {
          const t = this._nearest({ x: s.x, z: s.z }, 40) || { x: s.x + 4, z: s.z };
          const d = Math.hypot(t.x - s.x, t.z - s.z) || 1;
          s.vx = (t.x - s.x) / d * 16;
          s.vz = (t.z - s.z) / d * 16;
          s.aimed = true;
        }
        s.x += s.vx * dt;
        s.z += s.vz * dt;
        for (const e of this.units) {
          if (e.dead || s.hit.has(e.id)) continue;
          if (Math.hypot(e.x - s.x, e.z - s.z) < e.size + 0.7) {
            this._damage(e, s.dmg, null);
            s.hit.add(e.id);
            s.bounce -= 1;
            s.vx *= -0.6;
            s.vz *= -0.6;
            if (s.bounce <= 0) s.life = 0;
          }
        }
        continue;
      }
      if (s.kind !== 'disc') continue;
      const d = Math.hypot(s.tx - s.x, s.tz - s.z) || 1;
      const step = s.speed * dt;
      s.x += ((s.tx - s.x) / d) * step;
      s.z += ((s.tz - s.z) / d) * step;
      for (const e of this.units) {
        if (e.dead || s.hit.has(e.id)) continue;
        if (Math.hypot(e.x - s.x, e.z - s.z) < e.size + 0.45) {
          this._damage(e, s.dmg, s.tower);
          s.hit.add(e.id);
          if (s.shard) {
            for (const o of this.units) {
              if (!o.dead && o !== e && Math.hypot(o.x - e.x, o.z - e.z) < 2.2) this._damage(o, s.dmg * 0.4, s.tower);
            }
          }
          if (s.ricochet && s.hit.size < 3) {
            const nxt = this.units.find(o => !o.dead && !s.hit.has(o.id));
            if (nxt) {
              s.tx = nxt.x;
              s.tz = nxt.z;
              continue;
            }
          }
          if (s.hit.size >= (s.pierce || 1)) s.life = 0;
        }
      }
    }
  }

  _slow(e, mul, t) {
    const floor = 0.28;
    const value = Math.max(floor, mul);
    e.slow = Math.min(e.slow, value);
    e.slowT = Math.max(e.slowT, t);
  }

  _damage(e, amount, tower) {
    if (e.dead) return;
    let dealt = Math.max(1, amount - e.armor);
    if (e.discResist && (!e.slow || e.slow > 0.84) && tower && tower.type === 'disc') dealt *= 0.35;
    if (e.shield > 0) {
      const soak = Math.min(e.shield, dealt);
      e.shield -= soak;
      dealt -= soak;
    }
    e.hp -= dealt;
    if (tower) tower.kills += 0;
    if (e.hp <= 0) this._kill(e, tower);
  }

  _kill(e, tower) {
    e.dead = true;
    this.energy += e.bounty;
    this.kills += 1;
    if (tower) tower.kills += 1;
    this._emit('kill', { enemy: e, tower });
  }

  _segDist(px, pz, x1, z1, x2, z2) {
    const dx = x2 - x1;
    const dz = z2 - z1;
    const l2 = dx * dx + dz * dz || 1;
    let t = ((px - x1) * dx + (pz - z1) * dz) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * dx), pz - (z1 + t * dz));
  }

  _endCheck() {
    if (this.state === 'lose' || this.state === 'win') return;
    if (this.state === 'wave' && !this.units.length && !this._spawnQ.length) {
      this.state = this.wave >= this.totalWaves ? 'win' : 'ready';
      this._emit('waveClear', { wave: this.wave });
      if (this.state === 'win') this._emit('win', { kills: this.kills });
    }
  }
}

export { GRID, TOWERS, SECTORS, cellToWorld, worldToCell };
