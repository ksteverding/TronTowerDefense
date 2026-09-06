# TronTowerDefense
A fun little vibe coded tower defense game. My custom Benchmark for testing new models.

`main` opens on a **model-select splash screen** — a benchmark hub that lets you pick
which AI model's build of the game to boot. Selecting a model opens that model's own
game (its splash screen and full playable version).

## Layout

```
index.html / hub.js / style.css   ← model-select hub
builds/
  fable-5-low-effort/             ← Claude Fable 5 (GRID DEFENSE)
  grok-4-5-xhigh/                 ← Grok 4.5 (LIGHTWALL)
  glm-5-2-high/                   ← GLM 5.2 (CIRCUIT BREAKER)
  gpt-5-5-default/                ← GPT-5.5 (NEON CONDUIT)
  kimi-k2p7-code/                 ← Kimi K2.7 Code (NEON SENTINEL)
  gemini-3.1-pro-high/            ← Gemini 3.1 Pro (NEON GRID DEFENSE)
  gpt-6-end-of-line/             ← GPT-6 (END OF LINE, expanded custom brief)
```

Original benchmark runs also live on their own git branches/tags so attempts can
be diffed directly. The original prompt and separately identified custom briefs
are in [PROMPT.md](PROMPT.md). The benchmark rules and workflow are in
[BENCHMARK.md](BENCHMARK.md).

## Available builds

| Model | Model ID | Effort | Path | Branch / Tag |
|---|---|---|---|---|
| Claude Fable 5 | `claude-fable-5` | low | `builds/fable-5-low-effort/` | `fable-5-low-effort` |
| Grok 4.5 | `grok-4.5-xhigh` | xhigh | `builds/grok-4-5-xhigh/` | `grok-4-5-xhigh` |
| GLM 5.2 | `glm-5.2-high` | high | `builds/glm-5-2-high/` | `glm-5-2-high` |
| GPT-5.5 | `gpt-5.5-default` | default | `builds/gpt-5-5-default/` | `gpt-5.5-default` |
| Kimi K2.7 Code | `kimi-k2p7-code` | default | `builds/kimi-k2p7-code/` | `kimi-k2p7-code-default` |
| Gemini 3.1 Pro | `gemini-3.1-pro` | high | `builds/gemini-3.1-pro-high/` | `gemini-3.1-pro-high` |

## Custom builds

**[END OF LINE](builds/gpt-6-end-of-line/README.md)** — GPT-6, default effort,
2026-09-06. An expanded, iterated 3D brief with three terrain-rich sectors, five
upgradeable tower systems, energy links, active abilities, and a real path-traced
photo mode. This is outside the original single-shot benchmark and should not be
compared as an equivalent run. `gpt-6-end-of-line` identifies its directory; no
Git branch or tag is implied.

Open [the game](builds/gpt-6-end-of-line/index.html) directly or select it in the
hub. The checked-in JavaScript bundle runs offline, with system fonts when the
optional Google Fonts are unavailable. See its README for controls, rendering
details, development commands, and third-party licenses.

To add a new model to the hub: drop its files under `builds/<tag>/` and append an
entry to the `MODELS` array in `hub.js`.

To play: open `index.html` in a browser (fully static, no build step).
