# TASK: Combat Cockpit v2.2 — turn control, action/slot economy, ability tooltips, token names, read-aloud image fit

You are extending an existing, working **offline** D&D combat tool (the "Combat Cockpit"). Read this
whole file, then read `modules/the-weeping-grove/site/COCKPIT-V2-PLAN.md` (the v2 build + the jsdom
test recipe) before touching anything. Do **not** regress any v2 feature or any v2.1 change listed in
"Current baseline" below.

## Where things are (repo root: `/home/joshexcell/git/dnd`)
- `modules/the-weeping-grove/site/combat-cockpit.html` — **THE runtime.** Vendored React 18, the engine
  IIFE `window.TWGE` (READS the data file only), and the app precompiled to `React.createElement`
  (a `const h = React.createElement` alias is used for the hand-written components). **CSS lives ONLY here.**
- `modules/the-weeping-grove/site/combat-cockpit.src.jsx` — the readable **JSX mirror** of the app.
  ⚠️ **EDIT BOTH FILES and keep them in sync** (the `h(...)` form in the `.html`, JSX in the `.src.jsx`).
  No build step — they are maintained by hand.
- `modules/the-weeping-grove/the-weeping-grove.data.js` → `window.WEEPING_GROVE` — **SINGLE SOURCE OF
  TRUTH.** `statblocks` have `name, ac, hp/maxhp, speed, sil, ab{}, traits[], actions[]`. Monster
  **spellcasting lives in `traits[]`** (e.g. Cult Fanatic "Spellcasting": `… 1st (4 slots): command,
  inflict wounds, shield of faith; 2nd (3 slots): hold person, spiritual weapon`; Green Hag "Innate
  Spellcasting": `At will: dancing lights, minor illusion, vicious mockery`).
- `modules/the-weeping-grove/site/party.data.js` → `window.WEEPING_GROVE_PARTY` (5 PCs). Each PC has
  `portrait, speed, ac, maxhp, initMod, attacks[]`, `spell{ cantrips[], known[]|prepared[], slots{lvl:count},
  dc, atk }`, `features{race[],class[],background[]}`. Spell entries carry `name, lvl, castTime, range,
  concentration, roll, effect, when` — i.e. **full descriptions are available for PC spells/attacks.**

## Key components / helpers (names you'll edit — verify against the file before editing)
- `Cockpit` (root state + turn ops: `startFight`, `nextTurn`, `endFight`, `patchC`, `damage`, `heal`).
- `Initiative` + `InitRow` — the turn-order list (left panel). Turn order = `sortInit(combatants)`
  (init desc → dexmod → name). `st.turnId` = the active combatant id; `st.round` = round number.
  `nextTurn()` walks `sortInit` order and bumps `round` on wrap.
- `BoardView` — token render inside a **pan/zoom "world" layer** (`.ck-world`, scaled+translated);
  reach/Dash rings + 📏 ruler live in the world; chip drag-onto-target → `ResolvePopover`; chip-drop
  hit-testing uses `document.elementFromPoint(...).closest('[data-tokenid]')`.
- `BoardDetail` (`.ck-detail`, the **overlay** side panel) — renders the selected combatant's ability
  **chips** (drag onto a target), the per-token **actions bar** (Dash/Dodge/Disengage/Help/Hide →
  `c.actions{}`), conditions, and the stat block / PC kit.
- `ResolvePopover` — the drop popover; auto-rolls, auto-applies conditions, honors adv/dis from `advInfo`.
- `ReadAloud` — front face = scripted read-aloud + per-scene image (`.ck-ra-img`); back face = full DM notes.
- Ability normalizers: `abilitiesFor`, `pcAttackAbility`, `pcSpellAbility`, `monActionAbility`,
  `monSpellAbilities`, `parseCond`, `advInfo`. Each ability descriptor carries
  `{ name, kind:"attack"|"save"|"heal"|"utility", tohit, dmgExpr, dmgType, save{dc,ability}, healExpr,
  note, level?, cond, condOn }`. **`note` already holds the source text** (PC spell `effect`, PC attack
  `note/range`, monster action `act.t`) — useful for tooltips. Monster *spells* currently set `note` =
  the spell name only (no description exists in the data).
- Token markup (in `BoardView`, inside `.ck-world`): `.ck-tok` column = ring(s) → `.ck-tok-label`
  (circle: silhouette / portrait / `tokLabel(c)` letter) → `.ck-tok-hp` bar → `.ck-tok-hpn` number →
  `.ck-tok-conds` → `.ck-tok-acts` (active action badges) → `.ck-tok-down`.
- Combatant shape: `{ id, side:"pc"|"mon", mkey, slug, name, init, ac, maxhp, hp, dexmod, conds:[],
  deaths:{s,f}, x, y, actions:{} }`. State persists in `localStorage["twg-cockpit-v2"]`, merged over
  `DEFAULT`; `load()` migrates old saves; `withPositions` back-fills token x,y. **Add new per-combatant
  state on the combatant object and/or new root keys in `DEFAULT`, and migrate so old saves never crash.**

## Current baseline — v2.1 (just shipped; do NOT regress)
Pan + zoom board (`.ck-world` transform layer; wheel-zoom + drag-to-pan; +/−/reset controls; token
drag & ruler recompute against the world rect so they stay correct under zoom). Bigger default tokens;
PC **portrait clipped inside `.ck-tok-label`** so the HP bar + `.ck-tok-hpn` cur/max stay visible
(monsters keep the silhouette + letter label). **Monster spellcasting → draggable spell chips** parsed
from `traits[]` (`monSpellAbilities`). **Harvest Clock removed** (no candle tile / header clock-mini;
`clock` tolerated-but-unused in old saves). **Overlay detail panel** (`.ck-detail.open`, `.ck-board.has-detail`,
wider, larger type, 🗑 remove + ✕ close). New tracked condition **Paralyzed** + `SPELL_COND` name→condition
map (hold person → Paralyzed, etc.). **Per-scene read-aloud images auto-probe `img/scenes/<sceneId>.png`**
(files already placed for cold-open/scene1–4/showdown); an explicit path in `st.sceneImg[id]` (incl. `""` =
hidden) overrides the probe.

## HARD CONSTRAINTS (do not violate)
1. Offline, `file://`, **NO build step, NO new external/CDN/runtime deps** (only the vendored React).
2. Edit **BOTH** `combat-cockpit.html` and `combat-cockpit.src.jsx`; **CSS only in the `.html`.**
3. `the-weeping-grove.data.js` (+ `party.data.js`) stay the **single source of truth** — derive from
   them. If you need new per-creature data, **add a field to the data file**, don't hardcode in the HTML.
4. Persist new state in the existing `localStorage["twg-cockpit-v2"]` blob, spread over `DEFAULT`;
   **old saves must never crash.** Keep it compact/fast; respect `prefers-reduced-motion`.

## CHANGES REQUESTED (from the DM)

### 1) Let the DM control whose turn it is + reorder initiative
Today turn order is auto-derived (`sortInit`) and `Next turn ⏭` is the only way to advance. The DM wants
to **drive it manually**:
- **Set the active turn directly:** clicking a combatant (in the `Initiative` list, and/or its token)
  makes it the current turn — set `st.turnId` to that id **without** changing `st.round`. Make the
  affordance obvious (e.g. the row/▶ marker is clickable; show a clear "current turn" state).
- **Reorder initiative manually:** give each `InitRow` up/down controls (↑/↓) and/or drag-to-reorder so
  the DM can move a combatant earlier/later. The init number is already editable, but ties + manual
  intent need a real override. Recommended: add an explicit `seq`/`order` field that becomes the primary
  sort key when present (fall back to init → dexmod → name), so a manual reorder sticks and `nextTurn`
  follows the *displayed* order. Migrate safely (old combatants have no `seq`).
- Keep `nextTurn`/round-advance working off the (now possibly manual) order.

### 2) Track the action economy + spell-slot usage (both PCs and monsters)
Right now anyone can take unlimited actions/spells. Add lightweight, DM-overridable tracking:
- **Action economy per combatant, per turn:** Action, Bonus Action, Reaction (Movement optional). Mark
  them **used** when spent and **reset** at the start of that combatant's turn (when it becomes the
  active `turnId` via `nextTurn`/manual set). The DM must be able to toggle them by hand too.
- **Spell slots:** seed remaining slots from the **data** — PCs from `spell.slots{lvl:count}`; monsters
  by parsing the Spellcasting trait (`Nth (M slots)`, `At will` = unlimited, `N/day` = N uses). Decrement
  the matching level when a **leveled** spell chip resolves (cantrips / at-will don't consume). Provide a
  manual restore (short/long-rest reset) since this is a one-shot.
- **Visual:** show small **icon/pip indicators** of remaining/used — near the per-token **actions bar**
  in `BoardDetail` and/or on the token (where `.ck-tok-acts` badges live) and/or by the dice **log**.
  Keep it uncluttered and legible at table distance.
- Hooks: seed in `pcCombatant`/`monCombatant`; a `slotsFor(combatant)` derive-helper; decrement in the
  chip-apply / `ResolvePopover` path; reset in `nextTurn`/`startFight`; render in `BoardDetail` + token.
  New combatant fields (e.g. `econ:{action,bonus,reaction}`, `slots:{lvl:rem}`, `innate:{name:rem}`) +
  `DEFAULT`/migration. **Derive counts from the data file — don't hardcode spell lists.**

### 3) Click a spell/attack chip → tooltip with its full detail
Chips are currently drag-only. Add: a **click** (pointer down→up with no drag movement) on a PC or
monster ability chip opens a **tooltip/popover** showing that ability's detail — name, level/slot, range,
cast time, damage/`to hit`/save DC, concentration, and the **full effect/description text**.
- Distinguish click vs drag with the existing moved-threshold pattern (`Math.hypot(dx,dy) < ~5` = click).
- PC spells/attacks and monster **actions** have full text (`effect` / `note` / `act.t`) — render it.
  Monster **spells** only have the name in the data; show name + level + DC + derived kind (best effort),
  and if you want richer monster-spell text, **add it to the data file** (don't hardcode in the HTML).
- Consider threading the raw source object onto the ability descriptor (e.g. `ability.src = the spell/
  attack/action`) so the tooltip can show every field.

### 4) Show the combatant's NAME above each token (PCs and monsters)
Add a readable **name label above the token circle** (`.ck-tok-name`) for both sides, with a subtle
backdrop for legibility and sensible truncation for long names. It lives inside `.ck-world` so it scales
with zoom. Make sure it doesn't collide with the reach ring / conditions badges. (PCs: full name or first
name; monsters: the numbered name like "Wolf 3".) Both files + CSS.

### 5) Read-aloud image should FIT (stop cropping)
The scene images on the read-aloud front face (`.ck-ra-img`) get cut off — they're ~16:9 landscape
(~1408×768). Change the CSS so the **whole image shows** (e.g. `object-fit:contain`, a sensible
`max-height` like ~36–40vh, width auto / centered, preserve aspect ratio) and stays responsive. CSS in
the `.html` (and tweak the `ReadAloud` markup only if needed). Don't reintroduce a hard crop.

## General intent
Prefer **giving the DM controls** over guessing one perfect behavior. Keep the UI compact and
uncluttered. Everything offline, no build, both files in sync.

## VERIFICATION (no browser required)
- **Parse** every inline `<script>` in the `.html` + both data files with Node `vm.Script` (0 errors).
- **jsdom render smoke tests.** jsdom is installed only in the session scratchpad (`npm i jsdom` there,
  **not** a repo dep). jsdom won't fetch `../`, so **inline the two data `<script src>` tags** into the
  HTML string before mounting; **mock `window.confirm`**; **seed `localStorage["twg-cockpit-v2"]`** in
  `beforeParse`; use `runScripts:"dangerously"`, `pretendToBeVisual:true`. jsdom has **no layout**, so
  drive `getBoundingClientRect`/`elementFromPoint` **deterministically** (patch the `.ck-world` element's
  `getBoundingClientRect`; stub `document.elementFromPoint`). Top-level `function` declarations in the app
  script are reachable as `window.<name>` (e.g. `window.abilitiesFor`); top-level `const`s are not.
  Re-run the existing suites (board/HP/silhouette, movement+ruler under zoom, conditions adv/dis,
  read-aloud image, scene auto-load, monster spell chips, overlay detail) and ADD assertions for:
  1. clicking a combatant sets it as the active turn (`turnId`) without changing `round`; manual reorder
     changes the order `nextTurn` follows;
  2. an action/slot is consumed when spent and reset at turn start; the indicators reflect remaining;
  3. clicking an ability chip (no drag) opens the detail tooltip with the expected text;
  4. tokens render a `.ck-tok-name` with the combatant's name (PC and monster);
  5. `.ck-ra-img` uses contain-style fitting (assert the new CSS rule / class).

## DELIVERABLES
Edits to `combat-cockpit.html` + the `.src.jsx` mirror (in sync); any `TWGE`/parser additions (engine
READS data only); any **new data-file fields** needed (e.g. monster-spell descriptions, if you add the
tooltip text); updated `site/README.md`, root `CLAUDE.md`, and a new entry in `site/COCKPIT-V2-PLAN.md`'s
progress log; and a short **"what to click on the Mac to confirm"** list. **Commit only if the user asks.**
