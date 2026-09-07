# LIGHTWALL 3D — Custom Grok 4.6 Design

Date: 2026-09-06
Model: Cursor Grok 4.6
Directory: `builds/grok-4-6-lightwall/`
Hub title: LIGHTWALL
Status: Design approved in conversation; awaiting spec review before implementation

This is a **custom iterated run**, not a single-shot benchmark result. The original 2D LIGHTWALL stays untouched as the 2026-07-08 Grok 4.5 benchmark.

## 1. Purpose

Rebuild LIGHTWALL as a 3D, cinematic tower defense that feels like a TRON tech demo: dense geometry, luminous materials, volumetric light, glass and water, and combat that uses the landscape.

Players defend the Grid by placing the original LIGHTWALL structures, raising light-walls to reroute programs onto longer exposed paths, and using active abilities against sector bosses.

Target machine: Intel Core i9-13900K + NVIDIA RTX 4090, desktop Chrome/Edge with WebGL2. Gameplay targets **60 fps**. True path tracing is a **frozen photo mode**, not the live battle renderer. Browsers cannot use RTX RT cores; photo mode uses a software GPU path tracer through WebGL2.

## 2. Non-goals

- Do not replace or edit `builds/grok-4-5-xhigh/`.
- Do not copy code, shaders, models, textures, UI markup, copy, or architecture from `builds/gpt-6-end-of-line/` or any other model’s game. Three.js, three-gpu-pathtracer, three-mesh-bvh, and esbuild may be used as libraries. Every game asset and every project file is original.
- Do not run live path tracing during combat.
- Do not depend on a server at play time. Open `index.html` (or the hub card) with a checked-in `game.js`.
- Do not use remote 3D models or image textures. Fonts from Google Fonts are optional; system fonts must work offline.

## 3. Hub and labeling

Keep the original hub card for Grok 4.5 / LIGHTWALL.

Add a **custom** card:

| Field | Value |
|---|---|
| id | `grok-4.6` |
| name | Grok 4.6 |
| title | LIGHTWALL |
| effort | default reasoning effort |
| date | 2026-09-06 |
| tag | `grok-4-6-lightwall` |
| custom | true |
| href | `builds/grok-4-6-lightwall/index.html` |

Update `hub.js`, `README.md`, and `PROMPT.md` so the run is described as an expanded custom brief with iteration, outside the original single-shot benchmark. Record rendering honestly: rasterized gameplay, path-traced photo mode, no RTX cores.

Splash and about copy credit **Grok 4.6** and keep a hub link (`../../index.html`).

## 4. Stack and layout

Playable output:

```
builds/grok-4-6-lightwall/
  index.html
  style.css
  game.js              ← checked-in esbuild bundle (IIFE, file:// safe)
  package.json
  package-lock.json
  README.md
  THIRD_PARTY_NOTICES.md
  src/
    boot.js            ← entry: renderer, loop, screen flow
    protocol.js        ← combat, economy, waves (no Three.js)
    lanes.js           ← routes, gates, path rebuild
    sectors.js         ← Outlands / Arena / Core Gate data
    constructs.js      ← original 3D towers, enemies, bosses, discs
    scape.js           ← original terrain, architecture, water, walls
    lumen.js           ← lights, post, volumetrics, quality tiers
    trace.js           ← frozen path-traced photo mode
    signal.js          ← HUD, menus, toasts, input map
    hum.js             ← Web Audio stings (build, wall, shot, leak, win)
    protocol.test.mjs  ← node:test, renderer-free
```

Pinned libraries: `three@0.185.1`, `three-gpu-pathtracer@0.0.24`, `three-mesh-bvh@0.9.10`, `esbuild@0.28.2`.

Scripts: `npm ci`, `npm run build`, `npm test`. Rebuild writes `game.js`. Tests do not boot WebGL.

## 5. Architecture

**Protocol** is the source of truth. It never imports Three.js. It exposes commands (`build`, `raiseWall`, `dropWall`, `upgrade`, `sell`, `ability`, `launchWave`, `setSpeed`, `tick`) and emits events (`build`, `upgrade`, `sell`, `spawn`, `shot`, `kill`, `leak`, `reroute`, `wave`, `waveClear`, `ability`, `bossPhase`, `win`, `lose`).

**Lumen / constructs / scape** subscribe to events and keep meshes in sync. Visuals interpolate; combat steps with a clamped `dt` (max 50 ms) times battle speed (1× / 2× / 3×).

**Lanes** own a directed graph per sector: default corridor plus detour edges. Each **gate** is an edge that can be closed by a light-wall. Closing a gate rebuilds every living program’s remaining path from its current waypoint. Programs never freeze on a zero-length segment (the original 2D stall bug). If a close would trap a unit with no legal path, the command fails and the wall is not spent.

**Boot** owns the WebGL renderer, camera, resize, quality, pause, and photo-mode handoff. Photo mode snapshots the visible world into a tracer scene; combat is frozen until exit.

Boundaries:

- `protocol.js` / `lanes.js` / `sectors.js`: pure data and rules.
- `constructs.js` / `scape.js`: geometry and materials only.
- `lumen.js`: camera, lights, composer, quality.
- `signal.js`: DOM only.
- `trace.js`: photo mode only; battle loop must run if tracer init fails.

## 6. Rendering

Live battle: Three.js **WebGL2** rasterization, ACES filmic tone mapping, physically based metals and glass, high-resolution shadows, many **emissive meshes** (not fake sprites), bloom, a custom volumetric-light pass, and sector-specific reflections.

Quality presets (default Ultra on this hardware):

| Preset | Intent |
|---|---|
| Ultra | Native pixel ratio cap 1.5, 4k shadow map, full volumetrics, glass reflections, dense scape |
| High | Pixel ratio 1.25, 2k shadows, lighter volumetrics |
| Performance | Pixel ratio 1, 1k shadows, reflections off, thinner scape instances |

All presets must remain readable and playable. Ultra is the “wow” target at 1080p–1440p on a 4090.

Photo mode (`P`): freeze, accumulate path-traced samples, save PNG, Esc returns. Camera motion resets accumulation. First-entry shader compile may hitch; show a short status. If the tracer cannot start, stay in a frozen raster view and say so. Do not describe this as RTX hardware ray tracing.

Original visual language (not another game’s biomes): cyan / white / black Grid, amber energy, violet recognizer light, rose ISO accent. Every luminous inlay is real geometry so photo mode sees the same lights.

## 7. Maps

Three sectors, evolved from the 2D originals. Build grid is 18×12 tiles; each tile is 2.5 world units. Paths are 3D polylines with height. Towers on higher pads gain range (8% per world-unit of height above the local road). Light cycles gain speed on downhill segments. Waterfall spray slows units.

### 7.1 Outlands — Sector 01, Easy, 10 waves, 20 core, 280 energy

Black-stone canyon and cyan grid plateaus. A metal causeway is the **default** floor route. A high ramp is the **detour**: longer, more tower angles, slower through ion-fall spray. Surfaces: sand-grid, riveted causeway, glass-bottom canyon (not buildable). Two gates: canyon mouth and lower fork.

Boss wave 10: **Grid Stalker** — heavy armored crawler that shrugs small discs unless slowed.

### 7.2 Arena — Sector 02, Medium, 12 waves, 16 core, 320 energy

Circular disc stadium. **Inner ring** is the fast default. **Outer balcony** is the detour: ramps, pylon energy-falls, glass floor over a light abyss. Surfaces: glass, chrome risers, light-strip track. Three gates on inner-ring tunnels.

Boss wave 12: **Arena Recognizer** — hovering, high profile, sailers and high pads matter; periodically drops a bit swarm.

### 7.3 Core Gate — Sector 03, Hard, 14 waves, 12 core, 360 energy

Stacked machine city climbing toward a luminous gate. **Lower service trench** is the short default (fast, cramped). **Ceremonial ramps** are the detour: exposed, waterfall curtains on both flanks, killboxes on landings. Surfaces: wet glass, obsidian armor, glowing conduit. Two gates on trench mouths.

Boss wave 14: **ISO Prime** — shield phase, then exposed core; summons cycles. Final wave is a siege, not a single unit.

Each sector has a 3D camera home, fog/palette, and a short briefing. Sector cards use original SVG diagrams and that sector’s palette, not screenshots or assets from other builds.

## 8. Combat

Currency is **ENERGY**. Leak is **CORE** lives. Speed is 1× / 2× / 3×. Waves launch on demand; a preview lists incoming types.

### 8.1 Towers (keys 1–5)

Same names as 2D LIGHTWALL, rebuilt as detailed 3D constructs. Level 1 is the base kit. The upgrade to level 2 spends energy and locks a **permanent unique branch** (A or B). Level 3 spends again and only strengthens that branch. Costs stay in the original ballpark (disc cheapest, sailer dearest).

| Key | Name | Role | Branch A | Branch B |
|---|---|---|---|---|
| 1 | Disc Node | Rapid identity discs | Twin discs | Ricochet |
| 2 | Light Ribbon | Ring burst / splash | Wider detonation | Trail left on the road |
| 3 | Recognizer | Heavy slow beam | Dual beam | Vacuum pull |
| 4 | Bit Relay | Slow aura | Chip damage in aura | Fire-rate share to nearby towers |
| 5 | Sailer Lance | Long pierce | Charge shot | Wall-ride (follows a raised light-wall) |

Sell refunds 55% of energy spent on that construct. Cannot build on road tiles, gates, glass, or occupied pads.

### 8.2 Light-walls (key 6)

Not a damage tower. Built only on **gate pads**. Energy cost 80. Every labeled gate may be raised independently; energy is the only cap. Raising closes that graph edge and rebuilds paths. Dropping (decom) reopens the lane and refunds 55%. Visual: extruded TRON light-wall that actually lights the canyon/stadium.

### 8.3 Synergies

Computed from distinct types within 3 tiles:

- Disc + Ribbon: discs shard into ribbon fragments on hit.
- Disc + Sailer: discs gain pierce.
- Recognizer + Bit: slows stack down to a floor (never freeze forever).
- Ribbon + raised wall: nearby detonations pulse the wall.
- Sailer (wall-ride) + raised wall: lance rides the wall mesh.
- Bit (fire-rate branch) + any: fire-rate share for towers inside the aura.

### 8.4 Abilities

| Key | Name | Effect | Cooldown |
|---|---|---|---|
| Q | Identity Throw | Player-aimed bouncing disc, high damage | 18 s |
| E | Grid Overclock | Fire rate + wall brightness for 8 s | 24 s |

### 8.5 Programs

BIT, PROGRAM, CYCLE, TANK, ISO — same roster as 2D, with 3D models (cycles leave fading ribbons). HP scales by wave and sector. Tanks have armor; discs deal at least 1. Bosses as in §7.

No maze-from-empty-field: only authored routes plus gate detours.

## 9. UI and controls

Fullscreen 3D viewport. HUD overlay (sector, wave, energy, core, speed, wave button, abort). Bottom dock for six build options. Selection sheet: name, level, branch buttons, decom. Mission panel: briefing + wave preview. Settings: quality, bloom, photo mode, camera help. Result: sector secure / core collapsed, next / retry / menu.

| Input | Action |
|---|---|
| Left click | Build, select, confirm throw |
| 1–5 | Tower type |
| 6 | Light-wall |
| Space | Launch wave or pause/resume |
| Q / E | Abilities |
| Esc | Cancel / close / exit photo |
| Right-drag | Orbit |
| Middle-drag | Pan |
| Scroll | Zoom |
| F | Reset camera |
| C | Cinematic orbit |
| P | Photo mode |
| R | Inspect selected construct (close orbit) |

Splash is a 3D Grid flyover, then a simple menu: Initiate Defense, Select Sector, Operator Briefing. Keyboard focus must reach canvas after start.

## 10. Data flow

1. `signal` maps input → protocol command.
2. Protocol validates, mutates state, emits events.
3. `scape` / `constructs` spawn or remove meshes; `lumen` plays shots/bursts.
4. Each frame: protocol `tick(dt * speed)` unless paused or in photo mode; then render.
5. UI reads protocol getters only (energy, core, hover legality, preview).

Pause stops protocol ticks and abilities; camera still orbits. Photo mode also freezes ticks.

## 11. Errors and degradation

- No WebGL2: error panel + hub link. Do not white-screen.
- Context lost: message to reload.
- Photo tracer failure: frozen raster + status, battle still resumable.
- Google Fonts blocked: CSS font stack continues.
- `file://` : bundled `game.js`, no module CDN for code. Optional fonts may fail; game must not.

## 12. Testing and verification

Node (`protocol.test.mjs`):

- Path rebuild when a gate closes and opens.
- Units mid-route continue from current waypoint; never stall on duplicate points.
- Illegal trap-close rejected.
- Build / upgrade / sell / energy / core leak / win / lose.
- Synergy flags and ability cooldowns.
- Wave composition includes the sector boss on the final wave.

Browser (before calling the work complete):

- Hub card boots the custom build; hub link returns.
- All three sectors: place every tower, raise and drop a wall, watch a visible reroute, fire both abilities, finish at least one early wave, trigger a boss spawn (debug or play).
- Photo mode enter / save / exit.
- Quality presets change without crashing.
- No console errors on the happy path.

Local hardware may be slower than a 4090; Ultra is authored for that card. Do not claim measured 4090 fps unless measured there.

## 13. Success criteria

The custom LIGHTWALL is a **wow** 3D TRON defense: you can orbit detailed constructs, see light-walls change the fight, read three distinct landscapes (ramps, waterfalls, mixed surfaces), and freeze a path-traced still. It is recognizably LIGHTWALL, not a reskin of any other hub game. Original 2D LIGHTWALL remains playable from the hub.
