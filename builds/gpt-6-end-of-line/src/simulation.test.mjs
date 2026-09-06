import test from 'node:test';
import assert from 'node:assert/strict';
import { GRID, SECTORS, Simulation, TOWERS, terrainHeight, isTerrainBuildable } from './simulation.js';

function enemyAt(sim, type, x, z) {
  sim._spawn(type);
  const enemy = sim.enemies.at(-1);
  Object.assign(enemy, { x, z, y: sim.groundHeight(x, z) });
  return enemy;
}

function finishWave(sim, useAbilities = false) {
  let elapsed = 0;
  while (sim.state === 'wave' && elapsed < 240) {
    sim.update(0.25);
    elapsed += 0.25;
    const boss = sim.enemies.find(enemy => enemy.isBoss);
    if (useAbilities && boss && boss.progress > 15) {
      if (sim.cooldowns.overdrive === 0) sim.ability('overdrive');
      if (sim.cooldowns.nova === 0) sim.ability('nova', boss.x, boss.z);
    }
  }
  assert.notEqual(sim.state, 'wave', 'Wave must reach a terminal or ready state.');
}

test('all sector roads exclude construction and elevated world coordinates round-trip', () => {
  const sim = new Simulation();
  for (let sectorIndex = 0; sectorIndex < SECTORS.length; sectorIndex++) {
    sim.start(sectorIndex);
    for (const [col, row] of sim.sector.path) assert.equal(sim.canBuild(col, row), false);
    for (let row = 0; row < GRID.rows; row++) for (let col = 0; col < GRID.cols; col++) {
      const { x, z } = sim.cellToWorld(col, row);
      assert.deepEqual(sim.worldToCell(x, z), { col, row });
      assert.equal(sim.groundHeight(x, z), terrainHeight(sectorIndex, x, z));
    }
    const tower = sim.build('pulse', 6, 0).tower;
    assert.equal(tower.y, sim.groundHeight(tower.x, tower.z));
    sim.startWave(); sim.update(0.05);
    const enemy = sim.enemies[0];
    assert.equal(enemy.y, sim.groundHeight(enemy.x, enemy.z));
  }
});

test('canyon and lava occupy real nonbuildable terrain while route bridges remain traversable', () => {
  const sim = new Simulation();
  sim.start(1);
  for (let col = 8; col <= 10; col++) for (let row = 0; row < GRID.rows; row++) {
    assert.equal(isTerrainBuildable(1, col, row), false);
    assert.equal(sim.canBuild(col, row), false);
    assert.equal(sim.build('pulse', col, row).ok, false);
  }
  assert.equal(sim.isRoad(9, 2), true, 'The bridge remains part of the enemy route.');
  assert.equal(sim.canBuild(7, 5), false, 'Left-bank route is still reserved.');
  assert.equal(sim.canBuild(6, 5), true);
  assert.equal(sim.canBuild(11, 5), true);
  sim.start(2);
  for (let row = 0; row < GRID.rows; row++) for (let col = 0; col < GRID.cols; col++) {
    const lava = (col <= 2 && row >= 8) || (col >= 14 && row <= 1);
    assert.equal(isTerrainBuildable(2, col, row), !lava);
    if (lava) {
      assert.equal(sim.canBuild(col, row), false);
      assert.equal(sim.isRoad(col, row), false, 'Lava pools never erase the route.');
    }
    assert.equal(isTerrainBuildable(0, col, row), true, 'City retains its complete engineering deck.');
  }
});

test('construction validates currency, road tiles, bounds and occupied cells', () => {
  const sim = new Simulation();
  assert.equal(sim.build('unknown', 1, 1).ok, false);
  assert.equal(sim.build('pulse', -1, 0).ok, false);
  assert.equal(sim.build('pulse', 4, 5).ok, false);
  const result = sim.build('pulse', 5, 4);
  assert.equal(result.ok, true);
  assert.equal(sim.credits, 420 - TOWERS.pulse.cost);
  assert.equal(sim.build('pulse', 5, 4).ok, false);
  sim.credits = 0;
  assert.equal(sim.build('pulse', 0, 0).ok, false);
  assert.equal(sim.towers.length, 1);
});

test('evolution branches are permanent and sales return 70% of actual investment', () => {
  const sim = new Simulation();
  const { tower } = sim.build('pulse', 5, 4);
  const before = sim.getTowerStats(tower);
  assert.equal(sim.upgrade(tower.id).ok, false);
  assert.equal(sim.upgrade(tower.id, 'utility').ok, true);
  assert.equal(sim.upgrade(tower.id, 'power').ok, false);
  assert.equal(sim.getTowerStats(tower).range > before.range, true);
  assert.equal(sim.upgrade(tower.id, 'utility').ok, true);
  assert.equal(sim.upgrade(tower.id, 'utility').ok, false);
  assert.equal(tower.level, 3);
  const creditsBefore = sim.credits;
  const refund = Math.floor(tower.spent * 0.7);
  assert.deepEqual(sim.sell(tower.id), { ok: true, refund });
  assert.equal(sim.credits, creditsBefore + refund);
  assert.equal(sim.sell(tower.id).ok, false);
});

test('neighboring different tower types create links and selling removes the buff', () => {
  const sim = new Simulation();
  const pulse = sim.build('pulse', 5, 4).tower;
  const unlinkedInterval = sim.getTowerStats(pulse).interval;
  const otherPulse = sim.build('pulse', 5, 5).tower;
  assert.equal(sim.getTowerStats(pulse).links, 0);
  const cryo = sim.build('cryo', 6, 4).tower;
  assert.equal(sim.getTowerStats(pulse).links, 1);
  assert.ok(sim.getTowerStats(pulse).interval < unlinkedInterval);
  assert.equal(sim.getTowerStats(otherPulse).links, 1);
  sim.sell(cryo.id);
  assert.equal(sim.getTowerStats(pulse).interval, unlinkedInterval);
});

test('cryo slows a group and arc has a measurable damage synergy with chilled enemies', () => {
  const sim = new Simulation();
  const cryo = sim.build('cryo', 5, 4).tower;
  const arc = sim.build('arc', 5, 5).tower;
  const primary = enemyAt(sim, 'walker', cryo.x + 3, cryo.z);
  const neighbor = enemyAt(sim, 'walker', primary.x + 1, primary.z);
  sim._fire(cryo, primary, sim.getTowerStats(cryo));
  assert.ok(primary.slow < 1 && neighbor.slow < 1);
  const chilledHp = primary.hp;
  sim._fire(arc, primary, sim.getTowerStats(arc));
  const chilledDamage = chilledHp - primary.hp;
  primary.slow = 1;
  const warmHp = primary.hp;
  sim._fire(arc, primary, sim.getTowerStats(arc));
  assert.ok(Math.abs(chilledDamage / (warmHp - primary.hp) - 1.45) < 1e-9);
  assert.ok(neighbor.hp < neighbor.maxHp, 'Chain also hits the nearby enemy.');
});

test('rail pierces multiple armored enemies, while mortar splashes a cluster', () => {
  const sim = new Simulation();
  const rail = sim.build('rail', 5, 4).tower;
  const a = enemyAt(sim, 'walker', rail.x + 3, rail.z);
  const b = enemyAt(sim, 'walker', rail.x + 5, rail.z);
  sim._fire(rail, a, sim.getTowerStats(rail));
  assert.equal(a.maxHp - a.hp, TOWERS.rail.damage);
  assert.equal(b.maxHp - b.hp, TOWERS.rail.damage);
  const mortar = sim.build('mortar', 6, 5).tower;
  const hpA = a.hp, hpB = b.hp;
  sim._fire(mortar, a, sim.getTowerStats(mortar));
  assert.ok(a.hp < hpA && b.hp < hpB);
});

test('shield damage does not hurt hull until depleted and boss phases occur exactly once', () => {
  const events = [];
  const sim = new Simulation({ onEvent: event => events.push(event) });
  sim.wave = 5;
  const boss = enemyAt(sim, 'boss', 0, 0);
  sim._damage(boss, 100);
  assert.equal(boss.hp, boss.maxHp);
  assert.equal(boss.shield, boss.maxShield - 100);
  sim._damage(boss, boss.shield);
  assert.equal(boss.phase, 2);
  const baseSpeed = boss.speed;
  sim._damage(boss, boss.maxHp * 0.6, { armorPierce: true });
  assert.equal(boss.phase, 3);
  assert.ok(boss.speed > baseSpeed);
  const creditsBefore = sim.credits;
  sim._damage(boss, 100000);
  sim._damage(boss, 100000);
  assert.equal(sim.credits, creditsBefore + boss.bounty);
  assert.equal(sim.kills, 1);
  assert.deepEqual(events.filter(e => e.type === 'bossPhase').map(e => e.phase), ['exposed', 'enraged']);
  assert.equal(events.filter(e => e.type === 'kill').length, 1);
});

test('abilities damage an aimed area, enforce cooldowns and temporarily accelerate fire', () => {
  const sim = new Simulation();
  const tower = sim.build('pulse', 5, 4).tower;
  assert.equal(sim.ability('nova', 0, 0).ok, false);
  sim.startWave();
  const close = enemyAt(sim, 'walker', 0, 0);
  const far = enemyAt(sim, 'walker', 19, 0);
  assert.equal(sim.ability('nova', Number.NaN, 0).ok, false);
  assert.equal(sim.ability('nova', 0, 0).ok, true);
  assert.equal(close.hp, 0);
  assert.equal(far.hp, far.maxHp);
  assert.equal(sim.ability('nova', 0, 0).ok, false);
  const interval = sim.getTowerStats(tower).interval;
  assert.equal(sim.ability('overdrive').ok, true);
  assert.ok(sim.getTowerStats(tower).interval < interval);
  assert.equal(sim.ability('overdrive').ok, false);
  sim.update(5); sim.update(5);
  assert.equal(sim.overdriveRemaining, 0);
  assert.equal(sim.getTowerStats(tower).interval, interval);
  assert.ok(sim.cooldowns.nova > 31 && sim.cooldowns.nova < 33);
});

test('an undefended route leaks mass, gives defeat once, and stops the simulation', () => {
  const events = [];
  const sim = new Simulation({ onEvent: e => events.push(e.type) });
  while (sim.state !== 'defeat') {
    assert.equal(sim.startWave().ok, true);
    finishWave(sim);
  }
  assert.equal(sim.integrity, 0);
  assert.equal(sim.kills, 0);
  assert.equal(events.filter(e => e === 'defeat').length, 1);
  const time = sim.time;
  sim.update(5);
  assert.equal(sim.time, time);
  assert.equal(sim.build('pulse', 0, 0).ok, false);
});

test('a full first-sector campaign is winnable with only earned credits and no duplicate rewards', () => {
  const events = [];
  const sim = new Simulation({ onEvent: e => events.push(e.type) });
  for (const [type, col, row] of [['pulse', 5, 4], ['arc', 5, 5], ['cryo', 5, 6]]) assert.equal(sim.build(type, col, row).ok, true);
  const plan = [['rail', 8, 5], ['mortar', 8, 6], ['arc', 10, 5], ['cryo', 10, 4], ['pulse', 10, 3], ['rail', 13, 4], ['mortar', 13, 5]];
  for (let wave = 1; wave <= sim.totalWaves; wave++) {
    while (plan.length) {
      const [type, col, row] = plan[0];
      if (!sim.build(type, col, row).ok) break;
      plan.shift();
    }
    if (!plan.length) for (const tower of sim.towers) if (tower.level < 3) sim.upgrade(tower.id, tower.branch || 'power');
    assert.equal(sim.startWave().ok, true);
    assert.equal(sim.startWave().ok, false);
    finishWave(sim, true);
    assert.notEqual(sim.state, 'defeat');
    assert.ok(sim.credits >= 0);
  }
  assert.equal(sim.state, 'victory');
  assert.ok(sim.integrity > 0);
  assert.ok(sim.kills > 150);
  assert.equal(events.filter(e => e === 'waveClear').length, 10);
  assert.equal(events.filter(e => e === 'victory').length, 1);
  assert.equal(events.filter(e => e === 'kill').length, sim.kills);
  const finalCredits = sim.credits;
  sim.update(5);
  assert.equal(sim.credits, finalCredits);
});

for (const { sectorIndex, layout } of [
  { sectorIndex: 1, layout: [['pulse', 5, 4], ['arc', 5, 5], ['cryo', 5, 6], ['rail', 11, 5], ['mortar', 11, 6], ['arc', 13, 6], ['cryo', 13, 5], ['pulse', 11, 7], ['rail', 14, 4], ['mortar', 11, 3]] },
  { sectorIndex: 2, layout: [['pulse', 6, 2], ['arc', 6, 3], ['cryo', 6, 4], ['rail', 9, 5], ['mortar', 9, 7], ['arc', 10, 8], ['cryo', 10, 9], ['pulse', 11, 7], ['rail', 14, 6], ['mortar', 14, 5]] },
]) {
  test(`${SECTORS[sectorIndex].name} remains winnable after terrain restrictions using earned credits`, () => {
    const events = [];
    const sim = new Simulation({ onEvent: event => events.push(event) });
    sim.start(sectorIndex);
    const plan = [...layout];
    for (const [, col, row] of plan) assert.equal(sim.canBuild(col, row), true, `Planned cell ${col},${row} must be valid terrain.`);
    for (let wave = 1; wave <= sim.totalWaves; wave++) {
      while (plan.length) {
        const [type, col, row] = plan[0];
        if (!sim.build(type, col, row).ok) break;
        plan.shift();
      }
      if (!plan.length) for (const tower of sim.towers) {
        if (tower.level < 3) sim.upgrade(tower.id, tower.branch || (tower.type === 'cryo' ? 'utility' : 'power'));
      }
      assert.equal(sim.startWave().ok, true);
      finishWave(sim, true);
      assert.notEqual(sim.state, 'defeat');
      assert.ok(sim.credits >= 0, 'Expansion and upgrades never spend unearned currency.');
    }
    assert.equal(sim.state, 'victory');
    assert.ok(sim.integrity > 0);
    assert.equal(sim.towers.length, layout.length);
    assert.equal(events.filter(event => event.type === 'waveClear').length, sim.totalWaves);
    assert.equal(events.filter(event => event.type === 'spawn' && event.enemy.isBoss).length, 3);
  });
}

test('restarting clears all combat state and resets deterministic wave schedules', () => {
  const sim = new Simulation();
  sim.build('pulse', 5, 4);
  sim.startWave(); sim.update(1); sim.ability('overdrive');
  sim.start(1);
  assert.equal(sim.towers.length, 0);
  assert.equal(sim.enemies.length, 0);
  assert.equal(sim.wave, 0);
  assert.equal(sim.time, 0);
  assert.equal(sim.cooldowns.overdrive, 0);
  assert.equal(sim.credits, SECTORS[1].initialCredits);
  assert.equal(sim.totalWaves, 12);
  const peer = new Simulation(); peer.start(1);
  sim.startWave(); peer.startWave(); sim.update(3); peer.update(3);
  assert.deepEqual(sim.enemies, peer.enemies);
});
