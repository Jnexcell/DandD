# The Weeping Grove — `site/` (the DM-facing web app)

This folder is the **run-at-the-table DM tool** for The Weeping Grove, plus the player-facing
character builder. The **Combat Cockpit is now the single, self-sufficient DM screen** — there is no
longer a separate DM-screen tab.

## Open this
**`index.html`** — the entry point. It now just forwards to **`combat-cockpit.html`** (the cockpit is
the whole tool). Works fully offline (`file://`); React + ReactDOM are vendored inline.

### What the cockpit does
- **Initiative / HP / death saves / conditions**, a **dice tray** that rolls monster attacks straight
  from their stat blocks, and the **candle-clock + clue→Key HUD**.
- **DM-driven turn order (v2.2).** Click any combatant — its **initiative-row name** or its **token**
  (mid-fight) — to make it the **current turn** without bumping the round. Each row has **↑/↓ reorder**
  buttons that bake a manual `seq` override into every combatant, so the order *sticks* and **`Next
  turn` follows the displayed list** (init/dex still the fallback when no `seq` is set).
- **Action economy + spell slots (v2.2).** Every combatant tracks **Action / Bonus / Reaction** (reset
  at the start of its turn, DM-toggleable; the active token shows compact A/B/R pips). **Spell slots are
  seeded from the data** — PCs from `spell.slots`, monsters by parsing the Spellcasting trait
  (`Nth (M slots)`, `At will` = unlimited, `N/day` = innate uses) — shown as **pips in the detail
  panel** and **decremented automatically when a leveled-spell chip resolves** (cantrips/at-will are
  free). A **↺ rest** button restores slots + economy.
- **Center column `📖 Read ⟷ 🗺 Board` toggle**; the dice tray + shared combat log stay pinned below.
- **Each scene sets up its own fight.** Navigating the read-aloud/board to a scene **auto-loads that
  scene's enemies** (derived from the `{{SB:id|n}}` placeholders in the beat body — Showdown respects
  the active **Version A/B**), **keeps the party** (HP / conditions / death saves / board positions),
  and replaces only the previous scene's monsters. Confirms before discarding an in-progress fight
  (`round > 0`) with living enemies. *(This replaces the old `twg-combat-load` hand-off from the DM
  screen — the cockpit derives it itself via `TWGE.sceneEnemies`.)*
- **Tactical token board** — compact, draggable tokens (pointer events): a **name label above the
  circle** (PC first name / numbered monster name, v2.2), side colour, PC initial/portrait or a
  **license-safe creature silhouette** (by statblock `sil` type) + type/number label fallback, a
  legible **HP bar + cur/max** with **bloodied / down / dead** treatment, condition + action badges, and
  a gold ring on the active turn. Positions persist as fractions.
- **Movement (5 ft / cell, PHB diagonals)** — selecting/active token shows a **reach ring** (its
  speed) and, when **Dash** is on, a doubled **Dash ring**. A **📏 distance ruler** (toggle, then drag
  on the board) measures in feet. A per-token **actions bar** (Dash/Dodge/Disengage/Help/Hide) shows
  active actions as token badges; **Dodge** feeds the attack math.
- **Drag-an-ability-onto-a-target** — drag an attack/spell/action (or a condition) chip from the
  selected token onto a target → a **resolve popover** auto-rolls (`TWGE.d20`/`rollExpr`) or takes a
  manual roll, applies damage/heal, **auto-applies the imposed condition** (on hit / on failed save),
  and **auto-picks advantage/disadvantage from the attacker's & target's conditions/actions with a
  one-line reason** (prone melee/ranged, restrained, stunned, blinded, frightened, poisoned, dodge —
  adv+dis cancel) — DM-overridable. Resolving spends the caster's Action + the matching spell slot.
- **Click a chip for detail (v2.2)** — a **click** (vs a drag — same `<5px` threshold) on any ability
  chip opens a **tooltip** with its full detail: level/slot, cast time, range, to-hit / damage / save
  DC, concentration, imposed condition, and the effect/description text. *(PC spells/attacks and monster
  actions carry full text in the data; monster spells are name-only, so the tooltip shows the derived
  fields and notes there's no stat-block text — add a data field for richer monster-spell text.)*
- **Full scene reference in the DM-notes flip** — the read-aloud card's back face renders the **whole
  scene** (derived from `MODULE`, not duplicated): setup, checks + DCs, **inlined stat blocks**
  (`{{SB:id|n}}`), run-the-fight tactics, the crown puzzle, avenues — collapsible, Showdown A/B aware.
- **Read-aloud front face** — roomier/larger type, plus a **per-scene atmosphere image**: point it at a
  local file (e.g. `img/scenes/scene1.jpg`); the path persists per scene (offline). The image now
  **fits whole** (`object-fit:contain`, ~38vh, centered) — the ~16:9 scene art no longer crops (v2.2).

**Persisted state** (`localStorage["twg-cockpit-v2"]`, old saves migrate via `{...DEFAULT, ...saved}` +
`withPositions`, which now also back-fills the v2.2 economy without clobbering a running fight):
round/turn, combatants (`x,y`, `conds`, `actions`, deaths, **`econ`, `slots`, `innate`, optional manual
`seq`**…), `clues`, `beat`, `view`, `selId`, `version`/`versionTouched`, `fightSig`, `sceneImg`. The
combat **log is in-memory only**.

Locally (WSL): `file://wsl.localhost/Ubuntu/home/joshexcell/git/dnd/modules/the-weeping-grove/site/index.html`
Published: `https://jnexcell.github.io/DandD/modules/the-weeping-grove/site/` — **DM-only, don't share with players.**

## The one rule: content lives in the data file
The cockpit renders from **`../the-weeping-grove.data.js`** — the single `MODULE` object that is the
**single source of truth** (also read by the DM Assistant). **To change the adventure, edit the data
file, not the HTML.** New per-creature data (e.g. the silhouette type `sil`) is a field on the
statblock, not hardcoded in the HTML.

## How to iterate
- **Change combat / the screen** → edit `combat-cockpit.html`. Its app is JSX precompiled to
  `React.createElement` (still readable); the cockpit **engine** (`window.TWGE`, READS `MODULE`) is in
  the same file. The nicer **JSX source** is `combat-cockpit.src.jsx` — **edit BOTH** the inline
  `React.createElement` app and the `.src.jsx` mirror (no build step). CSS lives only in the `.html`.
- **Change the entry** → `index.html` is a tiny redirect to the cockpit.
- **Verify without a browser** → see `COCKPIT-V2-PLAN.md`; headless jsdom smoke tests live in the
  session scratchpad (parse every inline `<script>` with `vm.Script`; mount the app and exercise it).

## Files
- `index.html` — entry point (redirects to the cockpit)
- `combat-cockpit.html` — the Combat Cockpit app (offline React) + engine — **THE tool**
- `combat-cockpit.src.jsx` — readable JSX mirror of the cockpit app (keep in sync with the `.html`)
- `dm-screen.html` — **retired** vanilla-JS DM screen (no longer linked; kept as a dead file, safe to delete)
- `character-builder.html` — player-facing character builder (links back to the Party page)
- `party.data.js` — generated party data (each PC's stats, attacks, spells & features), read by the
  cockpit (built by `../build-party.mjs`)
- `COCKPIT-V2-PLAN.md` — v2 build plan / progress log (delete once v2 fully ships)
