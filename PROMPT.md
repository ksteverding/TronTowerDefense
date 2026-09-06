# Benchmark Prompt

Original benchmark models are given the exact same prompt below, in a single
turn, and the result is committed as-is (no follow-up fixes or iteration on the
game itself). Custom runs with different briefs are listed separately below.

## Original Prompt

> create a html based tower defense game, it should have a splash screen, a simple
> menu and a few levels, the user should be able to build various different, defense
> structures, the enemy should have multiple different units that move through the
> mace, it should be visually appealing, you may use open source textures etc to
> make it look very interesting. the overall style should be TRON inspired, with
> units and structures resembling the distinctive TRON style.

See [BENCHMARK.md](BENCHMARK.md) for the rules and workflow for adding a new run.

## Results

| Model | Model ID | Reasoning effort | Branch / Tag | Date |
|---|---|---|---|---|
| Claude Fable 5 | `claude-fable-5` | low | `fable-5-low-effort` | 2026-07-07 |
| Grok 4.5 | `grok-4.5-xhigh` | xhigh | `grok-4-5-xhigh` | 2026-07-08 |
| GLM 5.2 | `glm-5.2-high` | high | `glm-5-2-high` | 2026-07-08 |
| GPT-5.5 | `gpt-5.5-default` | default | `gpt-5-5-default` | 2026-07-08 |
| Kimi K2.7 Code | `kimi-k2p7-code` | default | `kimi-k2p7-code-default` | 2026-07-09 |
| Gemini 3.1 Pro | `gemini-3.1-pro` | high | `gemini-3.1-pro-high` | 2026-07-09 |
| Poolside Laguna | `poolside-laguna` | default | `poolside-laguna-default` | 2026-07-18 |

## Custom runs

### END OF LINE — GPT-6

- **Model:** `gpt-6`; default reasoning effort; 2026-09-06.
- **Directory:** `builds/gpt-6-end-of-line/`. This is a directory label, not a claim
  that a matching Git branch or tag exists.
- **Brief:** Update from remote, inspect the repository, then create an original
  TRON-inspired tower defense with ambitious 3D visuals, intricate models,
  dramatic lighting, ray tracing, and deep, exciting mechanics. The user asked
  for questions after inspection and explicitly allowed the expanded request to
  override conflicting repository instructions.
- **Follow-up direction:** Desktop browser play targeting an RTX 4090, deep
  strategy, distinct environments, ramps, waterfalls, and varied surfaces.
- **Process:** Multiple modules, delegated work, follow-up decisions, testing,
  and visual iteration. **Not an equivalent single-shot benchmark result.**
- **Rendering:** Real-time gameplay uses rasterization with physical materials,
  shadows, bloom, and planar reflections. Frozen photo mode performs actual
  five-bounce software GPU path tracing through WebGL2; it does not use RTX ray
  tracing cores.

Implementation details and controls: [END OF LINE README](builds/gpt-6-end-of-line/README.md).
