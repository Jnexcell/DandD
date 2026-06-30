# START HERE — Combat Cockpit (cold-start handoff for any agent)

You're about to work on the **Combat Cockpit**, an **offline** (`file://`) React DM tool for the D&D
one-shot *The Weeping Grove*. This file is **self-contained**: read it top to bottom, then read the two
runtime files before touching anything. It's evergreen — not tied to one task. **Put your actual job in
the "YOUR TASK" box at the bottom** (or pick from the candidate menu).

> Ground truth is the code, not this doc. **Verify every name/shape against the files before editing** —
> the cockpit changes often and a description here may have drifted.

## Repo + where things are (repo root: `/home/joshexcell/git/dnd`)
- `modules/the-weeping-grove/site/combat-cockpit.html` — **THE runtime.** One file: vendored React 18,
  the engine IIFE `window.TWGE` (READS the data only), all **CSS** (`<style>`), and the app precompiled
  to `React.createElement`. A `const h = React.createElement` alias is defined for hand-written markup,
  so new markup can be written compactly as `h("div", {...}, ...)`.
- `modules/the-weeping-grove/site/combat-cockpit.src.jsx` — the readable **JSX mirror** of the app.
  ⚠️ **NO BUILD STEP. Edit BOTH files and keep them in sync:** the `h(...)`/`React.createElement` form in
  the `.html` AND the JSX in the `.src.jsx`. **CSS lives ONLY in the `.html`.**
- `modules/the-weeping-grove/the-weeping-grove.data.js` → `window.WEEPING_GROVE` (a.k.a. `MODULE`) —
  **SINGLE SOURCE OF TRUTH** for the adventure. `statblocks[key]` = `{ name, sil, cr, xp, ac, hp/maxhp,
  speed, ab{}, skills, senses, langs, traits[], actions[] }`. **Monster spellcasting lives in
  `traits[]`** as prose (e.g. Cult Fanatic *"Spellcasting": "… 1st (4 slots): command, inflict wounds,
  shield of faith; 2nd (3 slots): hold person, spiritual weapon"*; Green Hag *"Innate Spellcasting": "At
  will: dancing lights, minor illusion, vicious mockery"*).
- `modules/the-weeping-grove/site/party.data.js` → `window.WEEPING_GROVE_PARTY` (5 PCs). Each PC:
  `slug, name, portrait, speed, ac, maxhp, initMod, attacks[]{name,use,range,bonus,dmg,note},
  spell{ cantrips[], known[]|prepared[], slots{lvl:count}, dc, atk }, features{race[],class[],background[]}`.
  Spell entries: `{ name, lvl ("cantrip"|number), castTime, range, duration, concentration, roll, effect,
  when }` — **full descriptions exist for PC spells/attacks.**
- Other files here: `index.html` (redirect → cockpit), `character-builder.html` (player-facing),
  `dm-screen.html` (retired/dead), `COCKPIT-V2-PLAN.md` (build + progress log — append an entry when you
  ship), `COCKPIT-V2.2-PROMPT.md` (the v2.2 task brief — **already shipped/consumed**, kept for history),
  `img/scenes/<sceneId>.png` (per-scene read-aloud art).

## HARD CONSTRAINTS (do not violate)
1. **Offline, `file://`, no build step, no new external/CDN/runtime deps** (only the vendored React).
2. **Edit BOTH** `combat-cockpit.html` and `combat-cockpit.src.jsx`; keep them in sync. **CSS only in the
   `.html`.** (Engine `renderSB`/`sceneEnemies` and all CSS are html-only and have no JSX mirror.)
3. **The data files are the single source of truth — derive from them.** If you need new per-creature
   info (e.g. real monster-spell descriptions), **add a field to the data file**, don't hardcode it in
   the HTML.
4. Persist new state inside the existing `localStorage["twg-cockpit-v2"]` blob, spread over `DEFAULT`,
   and **migrate so old saves never crash** (back-fill in `load()`/`withPositions`, never clobber a
   running fight's live values). Keep it compact/fast; respect `prefers-reduced-motion`.
5. **Commit only if the user asks.**

## App map (names to verify against the file)
- **`Cockpit`** — root. State `st` (from `load()`, merged over `DEFAULT`, persisted on every change).
  `up(patch)` = setState merge (object or `s =>` fn). Ops: `addMonster/addPC/addParty`, `patchC(id,patch)`,
  `removeC`, `damage/heal`. **Turn flow:** `startFight`, `endFight`, `nextTurn`, `setTurn(id)` (manual
  active turn, round unchanged), `reorder(id,dir)` (↑/↓ → bakes `seq`), `resetEconFor(list,id)` (clears
  econ at turn start). `maybeLoadFight` effect on `[beat, effVersion]` auto-loads a scene's enemies.
- **`Initiative` / `InitRow`** — left panel. Order = `sortInit(combatants)`: **a manual `seq` override
  wins when present** (sparse-safe), else `init desc → dexmod → name`. Row name is a clickable button
  (`onSetTurn`); `.ck-seqbtn` ↑/↓ call `onReorder`. `st.turnId` = active id; `st.round` = round (active
  highlight only shows when `round > 0`).
- **`BoardView`** — tokens inside a pan/zoom **`.ck-world`** layer (scaled+translated). Token tap = select
  + (mid-fight) `onSetTurn`; drag uses a `<5px` moved threshold. Chip drag → `ResolvePopover`; chip
  **click** (same `<5px` threshold) → `AbilityTip`. Drop hit-test = `document.elementFromPoint(...)
  .closest('[data-tokenid]')`. Reach/Dash rings + 📏 ruler live in the world.
- **`BoardDetail`** (`.ck-detail` overlay) — selected combatant's **ability chips** (drag onto a target /
  click for detail), per-token **actions bar** (Dash/Dodge/Disengage/Help/Hide → `c.actions{}`),
  **action-economy** A/B/R toggles, **spell-slot** pips + `↺ rest`, conditions, stat block / PC kit.
- **`ResolvePopover`** — drop popover. Auto-rolls (`E.d20`/`E.rollExpr`) or manual; applies damage/heal;
  auto-applies the imposed condition; honors adv/dis from `advInfo`; **`spend()`** marks the source's
  Action used + decrements the matching slot/innate (via `spendOf`).
- **`AbilityTip`** — read-only chip tooltip (level/cast/range/to-hit/dmg/save/conc/condition + effect
  text), driven off `ability.src` (the raw spell/attack/action) with derived-field fallback.
- **`ReadAloud`** — front face = scripted read-aloud + per-scene image (`.ck-ra-img`, `object-fit:contain`);
  back face = full DM scene reference (`E.expandSB` + `collapsify` + `applyVer`).
- **`DiceTray`**, **`HUD`** (clues→Key + add-to-fight roster), **`PCDetail`**, **`PCAdd`**.

### Ability descriptors (`abilitiesFor(c)`)
`pcAttackAbility / pcSpellAbility / monActionAbility / monSpellAbilities` each return:
`{ name, kind:"attack"|"save"|"heal"|"utility", tohit, dmgExpr, dmgType, save{dc,ability}, healExpr,
note, level?, slotLevel?, cond, condOn, src }`. `note` holds source text (PC `effect`, PC attack
`note/range`, monster `act.t`). **`src` = the raw object for the tooltip.** Monster *spells* are
**name-only in the data** → `src:null` (tooltip shows derived fields + a "no stat-block text" note;
richer text means **adding a data field**). Helpers: `parseCond`, `advInfo(ability,target,source)`.

### Economy helpers (v2.2)
`emptyEcon()`, `ECON`, `pcCasting(pc)`, `monsterCasting(sb)` (parses `Nth (M slots)` / `N/day [each]`;
At-will/cantrip untracked), `slotsFor(c)`, `hasCasting(c)`, `spendOf(ability)` →
`{kind:"slot",lvl}|{kind:"innate",key}|null`. `tokName(c)` (name above the token), `tokLabel(c)`.

### Combatant shape
`{ id, side:"pc"|"mon", mkey, slug, name, init, ac, maxhp, hp, dexmod, conds:[], deaths:{s,f}, x, y,
actions:{}, econ:{action,bonus,reaction}, slots:{lvl:rem}, innate:{name:rem}, seq? }`. State persists in
`localStorage["twg-cockpit-v2"]` merged over `DEFAULT`; `load()` migrates; `withPositions` back-fills
`x,y` + `econ`/`slots`/`innate` (never clobbering existing values); `seq` stays sparse (set only on
reorder). **Add new per-combatant state on the combatant and/or new root keys in `DEFAULT`, and migrate.**

### Token markup (in `.ck-world`)
`.ck-tok` column → `.ck-tok-name` (above the circle) → rings → `.ck-tok-label` (sil / portrait /
`tokLabel`) → `.ck-tok-hp` bar → `.ck-tok-hpn` → `.ck-tok-conds` → `.ck-tok-acts` → `.ck-tok-econ`
(active-token A/B/R pips) → `.ck-tok-down`.

## Current baseline (shipped — do NOT regress)
- **v2:** retired the separate DM screen; scene fights auto-load (`TWGE.sceneEnemies`, A/B aware, party
  kept); silhouettes by `sil`; conditions math + `advInfo`; movement rings + ruler + actions bar;
  read-aloud room + per-scene image; full scene reference in the DM-notes flip.
- **v2.1:** pan + zoom board (`.ck-world` transform; wheel-zoom + drag-pan; +/−/reset); bigger tokens;
  PC portrait clipped in `.ck-tok-label`; monster spellcasting → draggable chips (`monSpellAbilities`);
  overlay detail panel; **Paralyzed** condition + `SPELL_COND` map; scene-image auto-probe.
- **v2.2 (latest):** manual turn control + ↑/↓ initiative reorder (`seq`); per-combatant action economy
  (A/B/R, reset at turn start) + spell-slot/innate tracking seeded from the data and decremented on
  leveled-spell resolve, with `↺ rest`; click-a-chip detail tooltip (`AbilityTip`, via `ability.src`);
  names above tokens (`.ck-tok-name`); read-aloud image fits whole (`object-fit:contain`).

## VERIFICATION (no browser; this exact recipe is known-good)
Use the **session scratchpad** for deps (`npm i jsdom @babel/parser` there — **not** repo deps).
1. **Parse** every inline `<script>` (those *without* `src=`) in the `.html` + both data files with Node
   `vm.Script` → expect 0 errors. **Validate the `.src.jsx`** with `@babel/parser` (`plugins:["jsx"]`).
2. **jsdom render/interaction:** jsdom can't fetch `../`, so **inline the two data `<script src>` tags**
   into the HTML string before mounting. In `beforeParse`: set `window.confirm = () => true`, **seed
   `localStorage["twg-cockpit-v2"]`**, stub `getBoundingClientRect` (deterministic box) + `elementFromPoint`.
   Mount with `runScripts:"dangerously", pretendToBeVisual:true, url:"http://localhost/"`; poll for
   `#app .ck`. **Top-level `function` decls are reachable as `window.<name>`** (e.g. `window.sortInit`,
   `window.slotsFor`, `window.spendOf`, `window.abilitiesFor`, `window.withPositions`); top-level `const`s
   are not. App state is in `localStorage` after each change. Trigger `onClick` with `el.click()`; trigger
   pointer flows with `new window.MouseEvent("pointerdown"/"pointermove"/"pointerup", {bubbles:true,
   clientX, clientY, button:0})`.
3. **Don't regress:** re-assert tokens render (HP/silhouette/name), monster spell chips, overlay detail,
   scene auto-load, conditions adv/dis, read-aloud image, plus whatever your change touches.
*(A prior `run.cjs` harness with 63 green assertions across all of the above lived in the scratchpad —
re-create it from this recipe; it is not a repo file.)*

## DELIVERABLES (every change)
Edits to `combat-cockpit.html` + the `.src.jsx` mirror (in sync); any `TWGE`/parser additions (engine
READS data only); any **new data-file fields** you needed; updated `site/README.md`, root `dnd/CLAUDE.md`,
and a new entry in `site/COCKPIT-V2-PLAN.md`'s progress log; and a short **"what to click on the Mac to
confirm"** list. Keep the UI compact, prefer **giving the DM controls** over guessing one perfect
behavior. **Commit only if the user asks.**

---

## YOUR TASK
<!-- Replace this block with the actual job. Be specific about behavior + UI. -->
> _(none yet — describe what to build/fix, or pick from the menu below)_

### Candidate next tasks (a menu, not a spec)
- **Richer monster-spell text.** Add a `spells`/`spellText` field to caster statblocks so chips +
  `AbilityTip` show real descriptions (today monster spells are name-only). Data-file change + tooltip.
- **Concentration tracking.** When a concentration spell resolves, auto-mark the caster **Concentrating**;
  prompt/drop it on damage or a failed Con save; one concentration spell at a time.
- **Bonus-action / reaction awareness.** Map known bonus-action spells (healing word, spiritual weapon,
  misty step…) so `spend()` marks **Bonus** instead of Action; reaction prompt for opportunity attacks.
- **Drag-to-reorder initiative.** Pointer drag in the `InitRow` list (today it's ↑/↓ only), reusing the
  `seq`-bake from `reorder`.
- **Interactive Crown puzzle tracker** (Scene 4) — currently folded into the DM-notes flip; make it a real
  widget if wanted.
- **On-board "add" menu** for when the HUD is hidden (`<1080px`), so party/monsters can be added from the
  board.
- **Temp HP / resistances / lair actions / group-initiative** for identical monsters.

> Want me to specialize this into a concrete task brief (like `COCKPIT-V2.2-PROMPT.md`) for one of the
> above, or for something you have in mind? Tell me the goal and I'll fill in the YOUR TASK box.
