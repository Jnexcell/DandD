# Build a tactical battle board into the Weeping Grove Combat Cockpit

> Hand this whole file to a coding agent. It is self-contained.

## Mission
Evolve the **Combat Cockpit** of "The Weeping Grove" D&D tool from a list-based combat tracker
into an **interactive tactical battle board**: tokens for every PC and enemy on a movable map,
each showing HP / conditions / abilities, with **drag-an-ability-onto-a-target** to apply
damage. Also fold the **full DM scene reference** (currently only on the separate DM Screen)
into the cockpit's "DM notes" flip so the cockpit becomes the one screen you run combat from.

The DM (a beginner) runs this off a MacBook, offline, at the table. The cockpit is loved for being
**compact and fast** — preserve that. Add capability without making it cluttered or slow.

## Where everything is
Repo: a D&D 5e knowledge base. The tool lives in `modules/the-weeping-grove/site/`:
- `index.html` — thin tab **shell**, hosts two iframes: `dm-screen.html` and `combat-cockpit.html`.
  Cross-frame `postMessage` contract (documented in `site/README.md`): `twg-tab`, `twg-chrome`,
  `twg-combat-load` (DM screen → shell → cockpit: preloads the scene's enemies + party),
  `twg-cockpit-ready` (cockpit → shell on mount).
- **`combat-cockpit.html`** — THE FILE YOU'RE EDITING. React 18 is **vendored inline** (offline).
  The app is **JSX precompiled to `React.createElement`** and pretty-printed inside a `<script>`.
- **`combat-cockpit.src.jsx`** — the readable JSX **mirror** of that app. ⚠️ **There is no build
  step.** You must hand-edit the inline `React.createElement` in the `.html` AND keep `.src.jsx`
  in sync (write new components in `React.createElement` form in the html; a `const h =
  React.createElement` alias already exists for compactness).
- `the-weeping-grove.data.js` → `window.WEEPING_GROVE` (`MODULE`): the **single source of truth**
  for the adventure (`statblocks`, `scenes[]`, `clues`, `crown`). **Never duplicate adventure
  content** — derive from this.
- `site/party.data.js` → `window.WEEPING_GROVE_PARTY`: the 5 PCs. Loaded by the cockpit already.

### Data shapes you'll use
- **PC** (`PARTY[i]`): `slug, name, player, race, cls, background, level, ac, maxhp, speed,
  initMod, passivePerc, scores{}, mods{}, saves{}, portrait`,
  `attacks:[{name,use,range,bonus,dmg,note}]`,
  `spell:{ability,dc,atk,slots{},cantrips:[…],known:[…]}` (each spell:
  `{name,lvl,castTime,range,duration,concentration,roll,effect,when}`),
  `features:{race:[…],class:[…],background:[…]}` (each `{n,use,t,when}`).
- **Monster** (`MODULE.statblocks[key]`): `name, cr, ac, hp, maxhp, speed, ab{}, traits[],
  actions:[{n,t}], rf` (reflavor), `usage`, resist/imm/vuln/condimm.
- **Engine** `window.TWGE`: `monsters()` (combat-ready monster view incl. `attacks` parsed via
  `parseAttack`), `beats()` (per-scene `{id,name,icon,ra[],notes[]}`), `d20(mod,mode)`,
  `rollExpr("2d8+4",{crit})`, `rollDie(n)`, `parseAttack(name,text)`, `toNum`.
- **Cockpit combatant** (in app state, persisted to `localStorage["twg-cockpit-v2"]`):
  `{id, side:'pc'|'mon', mkey, slug, name, init, ac, maxhp, hp, dexmod, conds:[], deaths:{s,f}}`.

### Cockpit components (current) — build ON these, don't rewrite
- `Cockpit` (root state), `Header` (round/turn/clock), `Initiative`→`InitRow` (HP bar, ±damage/heal,
  death saves, condition chips, and a **PC "abilities & spells" expander** showing `PCDetail`),
  `CenterColumn`→`ReadAloud` (flip: front = read-aloud, back = "DM notes" from `E.beats().notes`)
  + `DiceTray` (rolls the active monster's attacks; manual/auto roll modes), `HUD` (candle clock,
  clue→Key, roster: add monster / "Add party (5)" / manual PC add). `PCDetail`/`buildLoadState`/
  `pcCombatant`/`monCombatant` helpers already exist.

## Hard constraints (do not violate)
1. **Offline, `file://`, no build step, no new external/CDN deps.** Only the already-vendored React.
2. **Edit both** `combat-cockpit.html` (the runtime, precompiled createElement) **and**
   `combat-cockpit.src.jsx` (the mirror).
3. **Data file stays the single source of truth.** New views derive from `MODULE`/`PARTY`.
4. **Don't break** existing features: initiative order, HP/damage, death saves, conditions, dice
   tray, clock, clue→Key, the `twg-combat-load` preload, read-aloud flip.
5. Keep it **compact and fast** — that's why the DM prefers the cockpit. Tasteful, table-readable.
6. Persist new state (token positions, etc.) in the existing `localStorage` blob; migrate safely so
   old saves don't crash (the loader merges over `DEFAULT`).

## Features to build (use plan mode; phase the work)

### Phase 1 — Full DM scene reference in the "DM notes" flip
Today the DM-notes back-face only pulls top-level `.zone.dm-only/.callout.dm-only` from the scene.
Make it show the **full scene** the DM Screen shows: setup notes, the encounter/budget, **the
skill checks (with DCs + hit/miss read-aloud)**, **inlined stat blocks** (expand `{{SB:id|n}}`
placeholders — see `expandSB`/`renderSB` in `dm-screen.html`), run-the-fight tactics, the crown
puzzle text, avenues/bypass/exit. Render the scene `body` HTML with collapsible sections (reuse the
DM Screen's `.zone/.beat-sec` collapsible pattern and styles) so it's scannable, not a wall. Respect
the Showdown's Version A/B. Tie the visible scene to the cockpit (the read-aloud nav already steps
scenes; the DM notes should follow the same scene). Don't duplicate content — render from `MODULE`.

### Phase 2 — Tactical token board
Add a **board view** (new center area, or a toggle between board / read-aloud — your call, keep it
compact). For every combatant in state, render a **draggable token**:
- shows name (or initial/portrait for PCs), a **HP bar + current/max**, side color (pc vs mon),
  **condition icons**, and a "down/dead" state at 0 HP.
- **drag to move/place** on the board; persist `x,y` per combatant in state. New combatants drop in
  a sensible default spot; allow re-placing. Optional faint grid background.
- **click/tap a token → selects it** and surfaces its detail in a side panel: for a **PC**, their
  attacks + spells + abilities (reuse `PCDetail`); for a **monster**, its stat block (AC/HP/traits/
  actions + parsed attacks).
- the board and the existing initiative list stay in sync (same combatant objects; HP/conditions
  reflect both ways). Active-turn token is highlighted.

### Phase 3 — Drag-an-ability-onto-a-target (the core interaction)
From a selected PC's attacks/spells (and a monster's actions), make each ability a **draggable
chip**. **Drop it on a target token** →
- open a tiny inline popover to **enter the roll** (the d20 to-hit and/or the damage), OR auto-roll
  using the ability's numbers (PC attack `bonus`/`dmg`; monster action parsed by `E.parseAttack`;
  use `E.d20`/`E.rollExpr`). Show hit/miss vs the target's AC when there's an attack roll.
- **apply the result to the target's HP** (reuse the existing `damage(id,amt)`/`heal`), and **log
  it** to the existing dice-tray log (so there's a combat history).
- handle the common cases: melee/ranged attack (to-hit vs AC, then damage), **save-based** abilities
  (announce "DC X, ABILITY save" — the player rolls; let the DM mark pass/fail and apply
  half/none), **healing**, and **applying a condition** (e.g. drag a condition chip onto a token).
- keep the existing manual dice tray as a fallback for anything ad-hoc.

Use whatever interaction tech is robust offline — **pointer events are safer than HTML5
drag-and-drop** for token dragging + drop targeting on a board; pick one and be consistent.

## Acceptance criteria
- Cockpit still loads offline (`file://`), preload via `twg-combat-load` still yields 5 PCs + the
  scene's enemies, and all existing features work.
- DM-notes flip shows the full scene (checks w/ DCs, stat blocks, tactics, avenues) for the current
  scene, Showdown A/B aware.
- Every combatant appears as a movable token with live HP bar + conditions; tokens persist position
  across reload; clicking one shows its abilities (PC) or stat block (monster).
- Dragging a PC attack onto an enemy token, entering/auto-rolling damage, reduces that enemy's HP
  and writes a log line; works the other way (monster → PC) too.
- `combat-cockpit.html` and `combat-cockpit.src.jsx` stay in sync; no new external deps.

## Verification (do this — a browser isn't required)
- **Syntax:** parse every inline `<script>` and the data files (e.g. Node `vm.Script`).
- **Headless smoke test with jsdom** (it CAN render this vendored React 18 app): load
  `combat-cockpit.html` (inline the two `<script src=…>` data files since jsdom won't fetch `../`),
  mock `window.parent.postMessage`, mount, then dispatch a `MessageEvent("message",{data:{type:
  "twg-combat-load",enemies:[{key:"wolf",count:8}],addParty:true}})`. Assert the roster, the tokens
  render with HP bars, selecting a token shows abilities, and a simulated ability-drop reduces the
  target's HP and logs it. (A prior agent used exactly this jsdom pattern successfully.)
- Then describe the manual click-through for the DM to confirm on the Mac.

## Deliverables
Edits to `combat-cockpit.html` (+ `combat-cockpit.src.jsx` mirror), any needed `TWGE` engine
additions (it only READS `MODULE`), updated `site/README.md` notes, and a short summary of what to
click to try it. Commit only if asked.
