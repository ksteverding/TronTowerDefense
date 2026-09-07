# LIGHTWALL (Grok 4.6)

A 3D TRON tower defense. Custom iterated run, not a single-shot benchmark.
The original 2D LIGHTWALL remains at `builds/grok-4-5-xhigh/`.

Target: desktop Chrome/Edge, WebGL2, a high-end GPU (authored for an RTX 4090).
Gameplay is rasterized at 60 fps. Photo mode path-traces a frozen scene in
software on the GPU through WebGL2. It does **not** use RTX ray-tracing cores.

## Play

Open `index.html` or choose **Grok 4.6 / LIGHTWALL** in the hub. `game.js` is a
checked-in bundle. Optional Audiowide and Exo 2 load from Google Fonts; system
fonts work offline.

Sectors: **Outlands** (canyon + ion ramp), **Arena** (inner ring vs glass balcony),
**Core Gate** (trench vs ceremonial ramps). Raise light-walls on amber gate pads
to seal a lane and force the detour.

| Key | Construct |
|---|---|
| 1 | Disc Node |
| 2 | Light Ribbon |
| 3 | Recognizer |
| 4 | Bit Relay |
| 5 | Sailer Lance |
| 6 | Light-wall (gate only) |

Q identity throw · E overclock · Space wave/pause · drag to orbit · arrows orbit · F reset · P photo mode.
Upgrade to level 2 picks a unique branch. Distinct types within 3 tiles synergize.

## Develop

```sh
npm ci
npm test
npm run build
```

Source: `protocol.js` combat, `lanes.js` gates, `scape.js` terrain, `constructs.js`
models, `lumen.js` lighting, `trace.js` photo mode, `boot.js` loop.

Licenses: [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
