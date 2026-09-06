# END OF LINE

A city of light. A war for its last heartbeat.

An original 3D tower defense built by GPT-6 from an expanded custom brief, with
follow-up decisions and iteration. It is **outside the repository's original
single-shot benchmark**. The target is a capable desktop browser and GPU; the
requested reference machine has an RTX 4090. No measured RTX performance is
claimed. See [the brief](../../PROMPT.md#custom-runs).

## Play

Open `index.html` directly, or choose **GPT-6 / END OF LINE** in the repository's
model hub. The title screen's **Model hub** link returns to the repository's
build selector. No installation or server is required to play: `game.js` is a
checked-in bundle. All geometry and visual textures are generated locally.
Optional Rajdhani and Space Grotesk fonts load from Google Fonts when online;
system fonts keep the game usable offline. A browser with WebGL2 is required.

Defend the reactor through three sectors: **Ion Causeway** has rising city
causeways; **Cataract Divide** has canyon terraces, reservoirs, and luminous
waterfalls; **Obsidian Caldera** has volcanic ramps, black-glass surfaces, and
molten channels. They contain 10, 12, and 14 waves respectively.

Select a tower, then click an empty tile off the enemy route. Towers have three
evolution levels and a permanent power or utility branch. Different tower types
within link range accelerate each other. Cryo improves arc damage; rail rounds
ignore armor; artillery punishes clustered formations. Use the wave preview to
prepare for light cycles, drones, armored walkers, shield carriers, and bosses.

| Key | Tower | Cost | Role |
|---|---|---:|---|
| 1 | Pulse repeater | 90 | Rapid fire |
| 2 | Arc conductor | 140 | Chain lightning, shield damage |
| 3 | Cryo reactor | 110 | Area slowing, arc synergy |
| 4 | Rail accelerator | 180 | Long-range armor piercing |
| 5 | Solar artillery | 160 | Area bombardment |

Click a placed tower to inspect, upgrade, or salvage it. The two core abilities
provide a targeted nova and a temporary defense-wide overdrive.

| Control | Action |
|---|---|
| Left click | Build, select a tower, or confirm a nova target |
| 1–5 | Select tower type |
| Space | Launch the next wave, or pause/resume combat |
| Q | Aim core nova; click to fire |
| E | Activate overdrive |
| Esc | Cancel the current action or close a panel |
| Right-drag | Orbit camera |
| Middle-drag | Pan camera |
| Scroll | Zoom |
| F | Reset camera |
| C | Toggle cinematic camera orbit |
| R | Inspect the selected tower in 3D |
| P | Enter path-traced photo mode; Esc returns to battle |

## Light and rendering

Gameplay uses Three.js WebGL2 rasterization, physically shaded metal and emissive
surfaces, shadows, bloom, and planar reflections. These effects are not described
as ray tracing. Graphics settings provide Ultra, High, and Performance tiers.

Photo mode, available through **P** or Settings, freezes the battle and uses
`three-gpu-pathtracer` for actual five-bounce path tracing on the GPU. It traces
geometry and accumulates samples over time; keep the camera still for a cleaner
image, then use **Save image**. Moving the camera restarts accumulation. This is
software GPU path tracing through WebGL2, **not access to RTX RT cores**. Busy
scenes and high resolutions take longer to resolve, and shader compilation can
take time on first entry. Return to battle to resume real-time rendering.

## Development

From this directory, using Node.js and npm:

```sh
npm ci
npm run build
npm test
```

Dependencies are pinned in `package.json` and `package-lock.json`. The build uses
esbuild to bundle `src/main.js` and its dependencies into a classic `game.js`
script so direct file opening works. Rebuild after changing source modules.
Tests exercise the renderer-independent combat simulation.

Source responsibilities: `main.js` connects input and UI, `simulation.js` runs
combat and economy, `world.js` builds terrain and architecture, `models.js`
constructs units and towers, `effects.js` handles combat effects, and `photo.js`
prepares a frozen path-traced scene. HTML and CSS define the interface.

Models, terrain, sector illustrations, and generated textures are original
procedural work. Runtime libraries and their exact license texts are listed in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Fonts remain optional external
resources; no remote image or model assets are required.
