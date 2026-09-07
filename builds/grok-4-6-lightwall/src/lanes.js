/** Lane graph: default corridors, gated detours, trap checks. */

import { terrainHeight, cellToWorld } from './sectors.js';

export function pathLength(points) {
  let length = 0;
  for (let i = 1; i < points.length; i++) {
    length += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y, points[i].z - points[i - 1].z);
  }
  return length;
}

function neighbors(graph, from, closed) {
  return graph.edges.filter(e => e.from === from && !(e.gate && closed.has(e.gate)));
}

export function canReach(graph, from, to, closed) {
  const seen = new Set([from]);
  const q = [from];
  while (q.length) {
    const id = q.shift();
    if (id === to) return true;
    for (const edge of neighbors(graph, id, closed)) {
      if (seen.has(edge.to)) continue;
      seen.add(edge.to);
      q.push(edge.to);
    }
  }
  return false;
}

function coreId(graph) {
  return graph.coreNode || graph.core;
}

export function wouldTrap(graph, closed, nodeIds) {
  const starts = nodeIds && nodeIds.length ? nodeIds : [graph.spawn];
  const goal = coreId(graph);
  return starts.some(id => !canReach(graph, id, goal, closed));
}

export function nodePath(graph, from, closed) {
  const prev = new Map([[from, null]]);
  const q = [from];
  while (q.length) {
    const id = q.shift();
    if (id === coreId(graph)) break;
    for (const edge of neighbors(graph, id, closed)) {
      if (prev.has(edge.to)) continue;
      prev.set(edge.to, id);
      q.push(edge.to);
    }
  }
  const goal = coreId(graph);
  if (!prev.has(goal)) return null;
  const ids = [];
  for (let id = goal; id; id = prev.get(id)) ids.push(id);
  ids.reverse();
  return ids;
}

function pointFor(graph, nodeId, sectorIndex) {
  const n = graph.nodes[nodeId];
  const { x, z } = n.x != null ? n : cellToWorld(n.col, n.row);
  const y = terrainHeight(sectorIndex, x, z);
  return { x, y, z, nodeId, col: n.col, row: n.row };
}

function dedupe(points) {
  const out = [];
  for (const p of points) {
    const last = out[out.length - 1];
    if (last && Math.hypot(p.x - last.x, p.y - last.y, p.z - last.z) < 0.001) continue;
    out.push(p);
  }
  return out;
}

export function route(graph, closed, sectorIndex = 0, from = graph.spawn) {
  const ids = nodePath(graph, from, closed);
  if (!ids) return [];
  return dedupe(ids.map(id => pointFor(graph, id, sectorIndex)));
}

export function fillRoad(graph) {
  const cells = new Set();
  const walk = (a, b) => {
    const dc = Math.sign(b.col - a.col);
    const dr = Math.sign(b.row - a.row);
    let c = a.col;
    let r = a.row;
    while (true) {
      if (c >= 0 && r >= 0 && c < 18 && r < 12) cells.add(`${c},${r}`);
      if (c === b.col && r === b.row) break;
      if (c !== b.col) c += dc;
      else r += dr;
    }
  };
  for (const edge of graph.edges) {
    walk(graph.nodes[edge.from], graph.nodes[edge.to]);
  }
  return cells;
}

export function closestNode(graph, x, z) {
  let best = graph.spawn;
  let bestD = Infinity;
  for (const [id, n] of Object.entries(graph.nodes)) {
    const d = Math.hypot(n.x - x, n.z - z);
    if (d < bestD) {
      bestD = d;
      best = id;
    }
  }
  return best;
}
