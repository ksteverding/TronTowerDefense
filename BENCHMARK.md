# Benchmark Instructions

How to add a new model run to this benchmark. These instructions are written for
the LLM/agent performing the run — follow them exactly so results stay comparable.

## Rules

1. **One prompt, one shot.** Use the exact prompt from [PROMPT.md](PROMPT.md),
   verbatim, in a single turn. No follow-up refinement of the game itself.
   Fixing your own runtime errors *within the same turn* (e.g. verifying in a
   browser and correcting a crash before finishing) is allowed; new feature
   requests or design feedback from the user are not.
2. **Don't look at other solutions.** Do not read `game.js`, `index.html`,
   `style.css`, or any other model's branch before or during the run. Start
   from an empty working directory (see workflow below).
3. **Self-contained output.** The result must run by opening `index.html` in a
   browser — static files only, no build step, no server-side code. External
   CDN assets (fonts, textures) are allowed per the prompt.
4. **Honest labeling.** Record the exact model ID, the reasoning-effort setting,
   and the date. If the effort setting is unknown, write `default`.

## Workflow for a new run

Branch naming: `<model>-<effort>`, lowercase, hyphenated — e.g. `fable-5-low-effort`,
`gpt-6-medium`, `gemini-4-pro-default`.

```bash
# 1. Start from the empty baseline so no previous solution is visible
git checkout --orphan <model>-<effort>
git rm -rf --cached . && git clean -fdx -e .git

# 2. Restore only the benchmark docs
git checkout main -- README.md LICENSE PROMPT.md BENCHMARK.md

# 3. Give the model the prompt from PROMPT.md and let it work in this directory

# 4. Commit the result
git add -A
git commit -m "Benchmark run: <model> at <effort> effort"

# 5. Tag and push
git tag -a <model>-<effort> -m "<model> at <effort> reasoning effort, <YYYY-MM-DD>"
git push -u origin <model>-<effort> --tags
```

## After the run

1. Switch back to `main` and add a row to the results table in
   [PROMPT.md](PROMPT.md): model, model ID, effort, branch/tag, date.
2. Push `main`.
3. Do **not** merge run branches into `main`. `main` holds the docs plus one
   showcase version (currently the Fable 5 low-effort run).

## Evaluation criteria (for human comparison)

When comparing branches, judge each run on:

- **Completeness** — splash screen, menu, multiple levels, multiple tower types,
  multiple enemy types, win/lose conditions.
- **Correctness** — no console errors; towers fire, enemies path, economy works.
- **Visual quality** — how convincingly TRON-styled and polished it looks.
- **Gameplay** — balance, upgrade/sell mechanics, wave pacing, speed controls.
- **Code quality** — readability and structure of the generated code.
