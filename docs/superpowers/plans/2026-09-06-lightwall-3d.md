# LIGHTWALL 3D Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship an original cinematic 3D LIGHTWALL tower defense as a custom Grok 4.6 hub entry, without touching the 2D benchmark or copying any other build.

**Architecture:** Pure `Protocol` owns combat, economy, and gated lane graphs. Three.js `boot`/`lumen`/`scape`/`constructs` subscribe to protocol events. Photo mode freezes combat and path-traces a snapshot. Playable output is a checked-in IIFE `game.js`.

**Tech Stack:** Three.js 0.185.1, three-gpu-pathtracer 0.0.24, three-mesh-bvh 0.9.10, esbuild 0.28.2, node:test, WebGL2, original HTML/CSS.

**Spec:** `docs/superpowers/specs/2026-09-06-lightwall-3d-design.md`

**Do not:** edit `builds/grok-4-5-xhigh/`, copy `builds/gpt-6-end-of-line/`, live-path-trace combat, or commit unless the user asks.

---

## File map

Create under `builds/grok-4-6-lightwall/`:

| File | Responsibility |
|---|---|
| `package.json` / lock | pinned deps, `build` and `test` scripts |
| `src/sectors.js` | GRID, TOWERS, UNITS, SECTORS, height, glass, gates |
| `src/lanes.js` | waypoint graph, path rebuild, trap detection |
| `src/protocol.js` | Simulation: build, walls, combat, abilities, waves |
| `src/protocol.test.mjs` | node:test coverage from spec §12 |
| `src/constructs.js` | 3D towers, programs, bosses, discs, walls |
| `src/scape.js` | three landscapes, water, ramps, architecture |
| `src/lumen.js` | renderer helpers, bloom, volumetrics, quality |
| `src/trace.js` | frozen path-traced photo mode |
| `src/signal.js` | DOM HUD/menus |
| `src/hum.js` | Web Audio stings |
| `src/boot.js` | entry: loop, input, wiring |
| `index.html` `style.css` | original LIGHTWALL chrome |
| `game.js` | esbuild bundle |
| `README.md` `THIRD_PARTY_NOTICES.md` | play + licenses |

Modify: `hub.js`, `README.md`, `PROMPT.md`.

---

## Locked constants

```
GRID = { cols: 18, rows: 12, tile: 2.5 }
cellToWorld(col, row) => { x: (col - 8.5) * 2.5, z: (row - 5.5) * 2.5 }
WALL_COST = 80
SELL_RATE = 0.55
SYNERGY_TILES = 3
THROW_CD = 18, OVERCLOCK_CD = 24, OVERCLOCK_DUR = 8
speed: 1 | 2 | 3
dt clamp 0.05
```

Tower keys: `disc` `ribbon` `recognizer` `bit` `sailer`. Wall is not a tower.

Branches lock at the level-2 upgrade: `a` or `b`.

---

### Task 1: Scaffold and failing protocol tests

**Files:**
- Create: `builds/grok-4-6-lightwall/package.json`
- Create: `builds/grok-4-6-lightwall/src/protocol.test.mjs`

- [ ] **Step 1:** Add package.json with scripts `"build": "esbuild src/boot.js --bundle --format=iife --target=es2022 --outfile=game.js --legal-comments=eof"` and `"test": "node --test src/protocol.test.mjs"`, type module, the four pinned deps/devDeps.

- [ ] **Step 2:** Write tests that import `{ Protocol }` from `./protocol.js` and cover: start Outlands energy 280 / core 20; reject build on road; place disc and deduct 80; raiseWall closes default edge and remaining path is longer; dropWall restores; trap close rejected if a unit would have no path; upgrade to 2 requires branch `a` or `b`; sell refunds 55%; launchWave 10 includes `stalker`; tick moves units; leak decrements core; ability throw/overclock cooldowns; synergy disc+ribbon sets shard flag.

- [ ] **Step 3:** Run `npm test` in that directory. Expected: FAIL (module not found).

- [ ] **Step 4:** Do not commit unless asked.

---

### Task 2: sectors + lanes + protocol until tests pass

**Files:**
- Create: `builds/grok-4-6-lightwall/src/sectors.js`
- Create: `builds/grok-4-6-lightwall/src/lanes.js`
- Create: `builds/grok-4-6-lightwall/src/protocol.js`

- [ ] **Step 1:** Author three sector graphs. Each graph has spawn, core, default edges, detour edges, and named gates (`mouth`,`fork` / `inner0`,`inner1`,`inner2` / `trench0`,`trench1`). `route(sector, closedSet)` returns a 3D polyline. `wouldTrap(sector, closedSet, units)` is true only when some unit cannot reach core.

- [ ] **Step 2:** Implement `Protocol` with the command/event API from the spec. Combat: nearest-in-range, disc projectile, ribbon splash, recognizer beam+slow, bit aura, sailer pierce; bosses per final wave; Identity Throw as a bouncing disc from a world point; Overclock shortens intervals.

- [ ] **Step 3:** `npm test` PASS.

---

### Task 3: Original HTML/CSS shell

**Files:**
- Create: `builds/grok-4-6-lightwall/index.html`
- Create: `builds/grok-4-6-lightwall/style.css`

Tone: 1982 Grid terminal — black void, cyan hairlines, amber ENERGY, Audiowide + Exo 2 (same family as 2D LIGHTWALL, not Space Grotesk). Fullscreen `#viewport`, splash/menu/sector/briefing/hud/photo/result/error. Hub link `../../index.html`.

---

### Task 4: Constructs (original 3D models)

**Files:**
- Create: `builds/grok-4-6-lightwall/src/constructs.js`

`createTower(type, level, branch)`, `createProgram(type)`, `createBoss(type)`, `createWall(length, height)`, `createDisc()`. Beveled metal, real emissive inlays, recognizer as inverted-U flyer, light cycle as two-wheel ribbon bike. No primitives-only blobs.

---

### Task 5: Scape (three maps)

**Files:**
- Create: `builds/grok-4-6-lightwall/src/scape.js`

`createScape(scene, renderer, sectorIndex)` returns `{ root, animated, dispose, height(x,z) }`. Outlands canyon+ramps+ion falls; Arena ring+glass abyss+pylon falls; Core Gate stacked city+water curtains. Build pads, road, gate slots, glass non-buildable. Original waterfall shader (flow on V, foam, additive).

---

### Task 6: Lumen + boot wiring

**Files:**
- Create: `builds/grok-4-6-lightwall/src/lumen.js`
- Create: `builds/grok-4-6-lightwall/src/signal.js`
- Create: `builds/grok-4-6-lightwall/src/hum.js`
- Create: `builds/grok-4-6-lightwall/src/boot.js`

WebGL2, ACES, shadows, bloom, custom volumetric pass, quality Ultra/High/Performance. Orbit (right), pan (middle), zoom, F reset, C cinematic. Map all spec keys. Ghost build, range rings, shots, health bars.

---

### Task 7: Photo mode

**Files:**
- Create: `builds/grok-4-6-lightwall/src/trace.js`

Freeze protocol. Snapshot PBR meshes into `WebGLPathTracer`. Accumulate, save PNG, Esc exits. Failure → frozen raster + message.

---

### Task 8: Bundle, hub, docs, verify

**Files:**
- Create: README, notices, `game.js` bundle
- Modify: `hub.js`, `README.md`, `PROMPT.md`

- [ ] `npm ci && npm test && npm run build`
- [ ] Browser: hub → custom card, three sectors, wall reroute, abilities, photo, hub back. No console errors.

---

## Coverage vs spec

| Spec | Task |
|---|---|
| Hub card, no 2D overwrite, no copy | 8 |
| Protocol, lanes, events | 1–2 |
| Rendering + quality + photo | 6–7 |
| Three maps + ramps/water/surfaces | 5 |
| Towers, walls, synergies, abilities, bosses | 2 + 4 |
| UI/controls | 3 + 6 |
| Errors | 3 + 6 + 7 |
| Tests | 1–2, 8 |
