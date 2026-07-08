# Benchmark Prompt

Every model is given the exact same prompt below, in a single turn, and the result
is committed as-is (no follow-up fixes or iteration on the game itself).

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
