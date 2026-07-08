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
```

Each run also lives on its own git branch/tag so any two attempts can be diffed
directly. The exact prompt given to every model is in [PROMPT.md](PROMPT.md), and
the rules / workflow for adding a new run are in [BENCHMARK.md](BENCHMARK.md).

## Available builds

| Model | Model ID | Effort | Path | Branch / Tag |
|---|---|---|---|---|
| Claude Fable 5 | `claude-fable-5` | low | `builds/fable-5-low-effort/` | `fable-5-low-effort` |
| Grok 4.5 | `grok-4.5-xhigh` | xhigh | `builds/grok-4-5-xhigh/` | `grok-4-5-xhigh` |
| GLM 5.2 | `glm-5.2-high` | high | `builds/glm-5-2-high/` | `glm-5-2-high` |
| GPT-5.5 | `gpt-5.5-default` | default | `builds/gpt-5-5-default/` | `gpt-5-5-default` |

To add a new model to the hub: drop its files under `builds/<tag>/` and append an
entry to the `MODELS` array in `hub.js`.

To play: open `index.html` in a browser (fully static, no build step).
