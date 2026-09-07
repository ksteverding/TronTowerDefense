/** LIGHTWALL 3D — authored sector data. No renderer imports. */

export const GRID = Object.freeze({ cols: 18, rows: 12, tile: 2.5 });

export function cellToWorld(col, row) {
  return {
    x: (col - (GRID.cols - 1) / 2) * GRID.tile,
    z: (row - (GRID.rows - 1) / 2) * GRID.tile,
  };
}

export function worldToCell(x, z) {
  return {
    col: Math.round(x / GRID.tile + (GRID.cols - 1) / 2),
    row: Math.round(z / GRID.tile + (GRID.rows - 1) / 2),
  };
}

const smoothstep = (a, b, x) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export function terrainHeight(sectorIndex, x, z) {
  const row = z / GRID.tile + (GRID.rows - 1) / 2;
  const col = x / GRID.tile + (GRID.cols - 1) / 2;
  if (sectorIndex === 0) return 0.12 + smoothstep(4.2, 0.6, row) * 0.4;
  if (sectorIndex === 1) {
    const dx = col - 8.5;
    const dz = row - 5.5;
    const ring = Math.hypot(dx, dz);
    return 0.12 + smoothstep(3.2, 6.4, ring) * 0.28;
  }
  return 0.12 + smoothstep(-1, 16, col) * 0.22 + smoothstep(7.5, 1.2, row) * 0.22;
}

export const TOWERS = Object.freeze({
  disc: { key: 'disc', name: 'Disc Node', cost: 80, color: '#3de7ff', damage: 16, interval: 0.42, range: 7.8, shot: 'disc' },
  ribbon: { key: 'ribbon', name: 'Light Ribbon', cost: 140, color: '#ffb347', damage: 22, interval: 0.95, range: 6.6, splash: 3.4, shot: 'burst' },
  recognizer: { key: 'recognizer', name: 'Recognizer', cost: 180, color: '#9b6bff', damage: 36, interval: 1.33, range: 8.2, slow: 0.55, slowT: 1.4, shot: 'beam' },
  bit: { key: 'bit', name: 'Bit Relay', cost: 110, color: '#7dff9a', damage: 0, interval: 0, range: 6.2, aura: true, slow: 0.62 },
  sailer: { key: 'sailer', name: 'Sailer Lance', cost: 220, color: '#ff4d8d', damage: 52, interval: 1.82, range: 12.2, pierce: 3, shot: 'lance' },
});

export const WALL_COST = 80;
export const SELL_RATE = 0.55;
export const SYNERGY_TILES = 3;

export const UNITS = Object.freeze({
  bit: { name: 'BIT', hp: 28, speed: 3.6, armor: 0, bounty: 7, leak: 1, size: 0.38, color: '#3de7ff' },
  program: { name: 'PROGRAM', hp: 70, speed: 2.45, armor: 0, bounty: 12, leak: 1, size: 0.52, color: '#ffb347' },
  cycle: { name: 'CYCLE', hp: 55, speed: 4.85, armor: 0, bounty: 14, leak: 1, size: 0.48, color: '#7dff9a', downhill: 1.28 },
  tank: { name: 'TANK', hp: 220, speed: 1.55, armor: 6, bounty: 28, leak: 2, size: 0.72, color: '#9b6bff' },
  iso: { name: 'ISO', hp: 160, speed: 3.15, armor: 3, bounty: 36, leak: 2, size: 0.58, color: '#ff4d8d' },
  stalker: { name: 'GRID STALKER', hp: 1480, speed: 1.18, armor: 14, bounty: 160, leak: 8, size: 1.85, color: '#d7c39a', boss: true },
  arenaBoss: { name: 'ARENA RECOGNIZER', hp: 1680, speed: 1.06, armor: 5, bounty: 180, leak: 10, size: 2.15, color: '#c9a6ff', boss: true, hover: true, summon: 'bit' },
  prime: { name: 'ISO PRIME', hp: 2100, speed: 0.98, armor: 7, bounty: 220, leak: 12, size: 2.35, color: '#ff6ea8', boss: true, shield: 820, summon: 'cycle' },
});

function node(col, row, extra = {}) {
  const { x, z } = cellToWorld(col, row);
  return { col, row, x, z, y: 0, ...extra };
}

function graph(id, name, subtitle, waves, energy, core, color, nodes, edges, gates, glass, briefing) {
  const nodeMap = {};
  for (const [key, n] of Object.entries(nodes)) nodeMap[key] = n;
  return {
    id, name, subtitle, waves, initialEnergy: energy, lives: core, color, briefing,
    spawn: 'spawn', coreNode: 'core',
    nodes: nodeMap,
    edges,
    gates,
    glass,
    boss: id === 'outlands' ? 'stalker' : id === 'arena' ? 'arenaBoss' : 'prime',
  };
}

const outlands = graph(
  'outlands', 'Outlands', 'SECTOR 01 — LEARN THE WALL', 10, 280, 20, '#3de7ff',
  {
    spawn: node(-1, 4),
    approach: node(2, 4),
    lowA: node(5, 4),
    lowB: node(5, 8),
    join: node(12, 8),
    exit: node(12, 4),
    core: node(18, 4),
    highA: node(2, 1),
    highB: node(16, 1),
    highC: node(16, 10),
    highD: node(12, 10),
    mid: node(10, 10),
  },
  [
    { from: 'spawn', to: 'approach' },
    { from: 'approach', to: 'lowA', gate: 'mouth' },
    { from: 'approach', to: 'highA' },
    { from: 'lowA', to: 'lowB', gate: 'fork' },
    { from: 'lowA', to: 'mid' },
    { from: 'mid', to: 'join' },
    { from: 'lowB', to: 'join' },
    { from: 'join', to: 'exit' },
    { from: 'exit', to: 'core' },
    { from: 'highA', to: 'highB' },
    { from: 'highB', to: 'highC' },
    { from: 'highC', to: 'highD' },
    { from: 'highD', to: 'join' },
  ],
  { mouth: { col: 3, row: 2 }, fork: { col: 7, row: 7 } },
  ['6,10', '7,10', '8,10', '9,10', '10,10', '7,11', '8,11', '9,11'],
  'A canyon causeway. Raise the mouth wall and force programs onto the high ion ramp.',
);

const arena = graph(
  'arena', 'Arena', 'SECTOR 02 — THE CIRCUIT', 12, 320, 16, '#ffb347',
  {
    spawn: node(-1, 5),
    in1: node(3, 5),
    in2: node(3, 2),
    in3: node(9, 2),
    in4: node(9, 8),
    join: node(14, 5),
    core: node(18, 5),
    out1: node(3, 0),
    out2: node(16, 0),
    out3: node(16, 11),
    out4: node(14, 11),
  },
  [
    { from: 'spawn', to: 'in1' },
    { from: 'in1', to: 'in2', gate: 'inner0' },
    { from: 'in1', to: 'out1' },
    { from: 'in2', to: 'in3', gate: 'inner1' },
    { from: 'in2', to: 'out1' },
    { from: 'in3', to: 'in4', gate: 'inner2' },
    { from: 'in3', to: 'out2' },
    { from: 'in4', to: 'join' },
    { from: 'out1', to: 'out2' },
    { from: 'out2', to: 'out3' },
    { from: 'out3', to: 'out4' },
    { from: 'out4', to: 'join' },
    { from: 'join', to: 'core' },
  ],
  { inner0: { col: 1, row: 3 }, inner1: { col: 6, row: 1 }, inner2: { col: 11, row: 9 } },
  ['7,5', '8,5', '9,5', '7,6', '8,6', '9,6', '8,4', '8,7'],
  'Inner ring is fast. Seal the tunnels and send cycles onto the glass balcony.',
);

const coreGate = graph(
  'core-gate', 'Core Gate', 'SECTOR 03 — LAST LIGHT', 14, 360, 12, '#ff4d8d',
  {
    spawn: node(-1, 6),
    trenchA: node(3, 6),
    trenchB: node(3, 9),
    trenchC: node(10, 9),
    join: node(14, 6),
    core: node(18, 6),
    rampA: node(3, 1),
    rampB: node(9, 1),
    rampC: node(14, 2),
  },
  [
    { from: 'spawn', to: 'trenchA' },
    { from: 'trenchA', to: 'trenchB', gate: 'trench0' },
    { from: 'trenchA', to: 'rampA' },
    { from: 'trenchB', to: 'trenchC', gate: 'trench1' },
    { from: 'trenchB', to: 'rampB' },
    { from: 'trenchC', to: 'join' },
    { from: 'rampA', to: 'rampB' },
    { from: 'rampB', to: 'rampC' },
    { from: 'rampC', to: 'join' },
    { from: 'join', to: 'core' },
  ],
  { trench0: { col: 1, row: 8 }, trench1: { col: 6, row: 10 } },
  ['15,1', '16,1', '16,2', '4,3', '5,3'],
  'The trench is short. Raise the walls and make them climb the ceremonial ramps.',
);

export const SECTORS = Object.freeze([outlands, arena, coreGate]);

export function isGlass(sector, col, row) {
  return sector.glass.includes(`${col},${row}`);
}

export function gateAt(sector, col, row) {
  for (const [id, pad] of Object.entries(sector.gates)) {
    if (pad.col === col && pad.row === row) return id;
  }
  return null;
}

export function upgradeCost(type, fromLevel) {
  return Math.floor(TOWERS[type].cost * (0.7 + fromLevel * 0.55));
}
