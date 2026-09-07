import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Protocol } from './protocol.js';
import { SECTORS, TOWERS, GRID, cellToWorld } from './sectors.js';
import { route, pathLength, wouldTrap } from './lanes.js';

test('Outlands starts with 280 energy and 20 core', () => {
  const p = new Protocol();
  p.start(0);
  assert.equal(p.energy, 280);
  assert.equal(p.core, 20);
  assert.equal(p.totalWaves, 10);
  assert.equal(SECTORS[0].id, 'outlands');
});

test('rejects building on the default road', () => {
  const p = new Protocol();
  p.start(0);
  const road = [...p.roadCells][2];
  const [col, row] = road.split(',').map(Number);
  const result = p.build('disc', col, row);
  assert.equal(result.ok, false);
});

test('places a disc node and deducts 80 energy', () => {
  const p = new Protocol();
  p.start(0);
  const pad = p.firstBuildPad();
  const result = p.build('disc', pad.col, pad.row);
  assert.equal(result.ok, true);
  assert.equal(p.energy, 280 - TOWERS.disc.cost);
  assert.equal(p.towers.length, 1);
});

test('raising the mouth wall lengthens the remaining route', () => {
  const p = new Protocol();
  p.start(0);
  const before = pathLength(p.currentPath());
  const raised = p.raiseWall('mouth');
  assert.equal(raised.ok, true);
  const after = pathLength(p.currentPath());
  assert.ok(after > before + 4, `detour should be longer (${before} -> ${after})`);
});

test('dropping a wall restores the shorter default route', () => {
  const p = new Protocol();
  p.start(0);
  const base = pathLength(p.currentPath());
  p.raiseWall('mouth');
  p.dropWall('mouth');
  assert.ok(Math.abs(pathLength(p.currentPath()) - base) < 0.01);
});

test('trap close is rejected when a unit has no remaining path', () => {
  const graph = {
    spawn: 'a',
    core: 'c',
    nodes: {
      a: { col: 0, row: 0, y: 0 },
      b: { col: 2, row: 0, y: 0 },
      c: { col: 4, row: 0, y: 0 },
    },
    edges: [
      { from: 'a', to: 'b', gate: null },
      { from: 'b', to: 'c', gate: 'seal' },
    ],
  };
  assert.equal(wouldTrap(graph, new Set(['seal']), ['b']), true);
  assert.equal(wouldTrap(graph, new Set(['seal']), ['a']), true);
  assert.equal(wouldTrap(graph, new Set(), ['a']), false);
});

test('upgrade to level 2 requires a branch and sells refund 55%', () => {
  const p = new Protocol();
  p.start(0);
  const pad = p.firstBuildPad();
  const built = p.build('disc', pad.col, pad.row);
  const denied = p.upgrade(built.tower.id);
  assert.equal(denied.ok, false);
  const up = p.upgrade(built.tower.id, 'a');
  assert.equal(up.ok, true);
  assert.equal(p.towers[0].level, 2);
  assert.equal(p.towers[0].branch, 'a');
  const spent = built.tower.spent + up.tower.spent - TOWERS.disc.cost;
  const before = p.energy;
  const sold = p.sell(built.tower.id);
  assert.equal(sold.ok, true);
  assert.equal(p.towers.length, 0);
  assert.equal(p.energy, before + Math.round(sold.refund));
  assert.equal(sold.refund, Math.round(sold.spent * 0.55));
});

test('Outlands wave 10 includes the Grid Stalker', () => {
  const p = new Protocol();
  p.start(0);
  const composition = p.waveComposition(10);
  assert.ok(composition.includes('stalker'));
});

test('tick moves a program along the path and leaking costs core', () => {
  const p = new Protocol();
  p.start(0);
  p.launchWave();
  assert.equal(p.state, 'wave');
  for (let i = 0; i < 8000 && p.core === 20; i++) p.tick(0.05);
  assert.ok(p.core < 20 || p.kills > 0 || p.units.length > 0);
  const p2 = new Protocol();
  p2.start(0);
  p2.forceSpawn('bit');
  const start = { x: p2.units[0].x, z: p2.units[0].z };
  p2.tick(0.5);
  assert.ok(Math.hypot(p2.units[0].x - start.x, p2.units[0].z - start.z) > 0.2);
  const p3 = new Protocol();
  p3.start(0);
  p3.forceSpawn('bit');
  p3.units[0].pathT = 0.999;
  p3.tick(0.05);
  assert.equal(p3.core, 19);
});

test('abilities spend cooldown and overclock shortens fire interval', () => {
  const p = new Protocol();
  p.start(0);
  const pad = p.firstBuildPad();
  p.build('disc', pad.col, pad.row);
  const world = cellToWorld(pad.col, pad.row);
  const throwResult = p.ability('throw', world.x, world.z);
  assert.equal(throwResult.ok, true);
  assert.ok(p.cooldowns.throw > 17);
  const again = p.ability('throw', world.x, world.z);
  assert.equal(again.ok, false);
  const statsBefore = p.towerStats(p.towers[0]);
  p.ability('overclock');
  const statsAfter = p.towerStats(p.towers[0]);
  assert.ok(statsAfter.interval < statsBefore.interval);
});

test('disc next to ribbon marks shard synergy', () => {
  const p = new Protocol();
  p.start(0);
  const a = p.firstBuildPad();
  const b = p.nextBuildPad(a);
  p.build('disc', a.col, a.row);
  p.build('ribbon', b.col, b.row);
  const flags = p.synergies(p.towers[0]);
  assert.equal(flags.shard, true);
});

test('grid constants match the spec', () => {
  assert.equal(GRID.cols, 18);
  assert.equal(GRID.rows, 12);
  assert.equal(GRID.tile, 2.5);
});

test('route never contains duplicate consecutive points', () => {
  for (let i = 0; i < SECTORS.length; i++) {
    const path = route(SECTORS[i], new Set());
    for (let n = 1; n < path.length; n++) {
      const d = Math.hypot(path[n].x - path[n - 1].x, path[n].z - path[n - 1].z);
      assert.ok(d > 0.001, `degenerate segment in sector ${i}`);
    }
  }
});
