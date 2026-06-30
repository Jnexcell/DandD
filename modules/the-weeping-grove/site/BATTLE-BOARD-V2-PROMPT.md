# Combat Cockpit v2 — make the battle board the whole tool

> Hand this file to a coding agent. It is self-contained. **Read the "Confirm first" section
> and ask the user those questions before writing code** — several requests conflict with the
> project's hard constraints and need a decision.

## Context (what already exists — v1 is done)
The **Combat Cockpit** (`modules/the-weeping-grove/site/combat-cockpit.html`, an offline React 18
app precompiled to `React.createElement`, mirrored in `combat-cockpit.src.jsx`) was just upgraded
from a list tracker into a **tactical battle board**:
- A center **`📖 Read ⟷ 🗺 Board`** toggle. The board shows every combatant as a **pointer-drag
  token** (HP bar + cur/max, side colour, condition icons, down/dead state, gold active-turn ring),
  with a right-docked detail panel (PC `PCDetail` / monster `TWGE.renderSB`).
- **Drag-an-ability-onto-a-target**: ability/condition chips → drop on a token → a resolve popover
  (auto-roll via `TWGE.d20`/`rollExpr`, or manual) applies damage/heal/condition and logs it.
- The read-aloud card's **DM-notes flip** now renders the **full scene reference** (inlined stat
  blocks via `{{SB:id|n}}` → `TWGE.expandSB`/`renderSB`, collapsible zones/checks, Showdown A/B).
- Enemies are currently preloaded **from the DM Screen** via `postMessage` `twg-combat-load`
  (payload `{enemies:[{key,count}], addParty}`) → `buildLoadState`.

The user has been running it and wants the cockpit to become the **one and only** screen.

## Where everything is
- **`combat-cockpit.html`** — THE runtime. React 18 vendored inline; the app is JSX precompiled to
  `React.createElement` (a `const h = React.createElement` alias exists for compact hand-written
  components). **No build step.**
- **`combat-cockpit.src.jsx`** — the readable JSX **mirror** of the app. ⚠️ **Edit BOTH** and keep
  them in sync (write new components in `h(...)` form in the `.html`, JSX in the `.src.jsx`).
- **`index.html`** — thin tab **shell**: two iframes (`dm-screen.html`, `combat-cockpit.html`) +
  `postMessage` contract (`twg-tab`, `twg-chrome`, `twg-combat-load`, `twg-cockpit-ready`),
  documented in `site/README.md`.
- **`dm-screen.html`** — the vanilla-JS DM Screen (**to be retired — see task 1**). Note its
  `sceneEnemies(beatId)` (derives `{{SB:id|n}}`, Showdown-A/B-scoped) and `renderPCSheet` — you'll
  reuse the idea of `sceneEnemies` for task 9.
- **`../the-weeping-grove.data.js`** → `window.WEEPING_GROVE` (`MODULE`): single source of truth —
  `statblocks{}`, `scenes[]` (each with `readAloud:[{label,text}]`, `body` HTML, `play`, `icon`,
  `name`), `clues`, `crown`. **Never duplicate adventure content — derive from this.**
- **`party.data.js`** → `window.WEEPING_GROVE_PARTY`: the 5 PCs (`slug,name,ac,maxhp,speed,initMod,
  portrait, attacks[], spell{}, features{}`…). PCs already have a `portrait` URL/path and `speed`.

### Cockpit engine `window.TWGE` (READS `MODULE` only)
`monsters()` (combat view incl. parsed `attacks`), `beats()` (per playable scene `{id,name,icon,
type,time,ra,notes,body,hasVer}`), `d20(mod,mode)`, `rollExpr("2d8+4",{crit})`, `rollDie(n)`,
`parseAttack(name,text)`, `renderSB(id,{open,count})`, `expandSB(html)`, `toNum`.

### Cockpit components/helpers (build ON these)
`Cockpit` (root state), `Header`, `Initiative`→`InitRow`, `CenterColumn` (Read/Board toggle, scene
nav, version A/B), `ReadAloud` (flip; back face = full scene via ref+`collapsify`/`applyVer`),
`DiceTray` (shared `log`/`onLog` lifted to root), `BoardView` + `BoardDetail` + `ResolvePopover`,
`HUD` (candle clock, clues→Key, roster add), `PCDetail`. Helpers: `placeDefault`/`withPositions`
(token x,y as fractions), `abilitiesFor`/`pcAttackAbility`/`pcSpellAbility`/`monActionAbility`,
`condIcon`/`COND_ICON`.

### Cockpit state (persisted `localStorage["twg-cockpit-v2"]`, merged over `DEFAULT`)
`{round, turnId, combatants:[{id,side:'pc'|'mon',mkey,slug,name,init,ac,maxhp,hp,dexmod,conds:[],
deaths:{s,f}, x, y}], clock, clues[5], beat, roll:'me'|'app', view:'read'|'board', selId, version,
versionTouched}`. Migrate new fields safely (loader spreads over `DEFAULT`; `withPositions`
back-fills `x,y`). The combat **log is in-memory only**.

## Hard constraints (do not violate)
1. **Offline, `file://`, no build step, no new external/CDN runtime deps.** Only the vendored React.
2. **Edit both** `combat-cockpit.html` **and** `combat-cockpit.src.jsx`.
3. **`the-weeping-grove.data.js` stays the single source of truth.** New views derive from it; if you
   add per-creature data (e.g. an image path), add a field to the data file, don't hardcode in HTML.
4. Don't break existing features: initiative/HP/death saves/conditions, dice tray, clock, clue→Key,
   read-aloud flip + full scene reference, the token board + drag-ability.
5. **Keep it compact and fast** — that's why the DM loves it. Tasteful, table-readable on a MacBook.
6. Persist new state in the existing blob; migrate so old saves never crash.
7. **Copyright:** the repo gitignores the WotC PDFs on purpose. **Do not commit copyrighted art**
   (e.g. Monster Manual images). See task 5.

---

## ⚠️ Confirm first (ask the user before building)
1. **DM Screen removal scope.** The DM Screen (`dm-screen.html`) is to be removed. But it has a few
   things the cockpit doesn't yet replicate — confirm which to **port into the cockpit** vs. **drop**:
   the **Crown puzzle** interactive tracker (Scene 4), **Player View** (clean read-aloud full-screen
   for turning the laptop to players — currently the `twg-chrome` hide), the **Inspector** (it's now
   covered by the board detail panel), **Quick Ref**, and **nav of non-play beats** (Overview,
   Endings, Stat-block/Trackers appendices — the cockpit only navs `play` scenes). Also: should
   `index.html` stop being a tab shell and **load the cockpit directly** (or the cockpit become the
   entry point), and should `dm-screen.html` be **deleted** or kept as a dead file?
2. **Enemy images (offline + copyright).** "Look online" conflicts with offline + no external deps +
   no copyrighted art. Pick one: (a) **vendor license-safe images** (CC0/AI-generated thematic art)
   into `site/img/monsters/<key>.*`, referenced by a new `img:` field per statblock in the data file;
   (b) **AI-generate** a small set now and commit them; (c) **stylized icons/silhouettes** per
   creature type (no bitmaps). Which? (PCs already have `portrait`.)
3. **AI image in read-aloud.** Offline means the DM supplies the image. Pick: (a) **file-picker/paste
   → store as a data URL** in localStorage keyed by scene (simple, but watch the ~5–10 MB quota —
   downscale on import); (b) **point at a local file path** the DM drops in `site/img/scenes/`. Which?
4. **Auto-load scene fights (task 9).** When you nav to a combat scene, should enemies load
   **automatically** or via a one-tap **"Set up this fight"**? And when swapping (wolves → cult):
   **keep the party + positions and replace only the previous scene's monsters**, or ask each time?
   (Never silently wipe an in-progress fight — confirm if `round > 0`.)
5. **Distance/grid units.** Confirm **1 grid cell = 5 ft**, board default size (it's being halved —
   see task 2), and the diagonal rule (**PHB default: every square = 5 ft / Chebyshev**, vs. 5-10-5).

---

## Tasks

### 1) Remove the now-redundant DM Screen
Per the decision in "Confirm first #1": retire `dm-screen.html` (and its tab in `index.html`),
making the cockpit the sole screen. Port any agreed-keep features into the cockpit first (likely the
**Crown puzzle tracker** and a **Player View** clean-read-aloud mode). Update `site/README.md` and
the repo's `CLAUDE.md` notes that reference the two-tab tool. **The cockpit must no longer depend on
`twg-combat-load` from the DM screen** — it derives scene enemies itself (task 9).

### 2) Halve the board size
The board/tokens are too big. Roughly **halve the token footprint** (currently ~42 px circle / 60 px
cell; `.ck-tok*` CSS) and tighten the grid so more of the map fits. **Keep HP and labels legible**
at the smaller size (see task 6). Tie the grid scale to task 7 (1 cell = 5 ft).

### 3) Easy add-to-board for PCs and enemies
Make adding combatants effortless **from the board itself** (the HUD roster may be going away with
the DM Screen). Provide an on-board "add" affordance: **+ Party** (the 5 PCs), the module's
**monsters** (from `TWGE.monsters()` / `MON_ORDER`), and a manual add. New tokens drop into a sensible
spot (`placeDefault`) and are immediately draggable.

### 4) Movement: distance tool + actions (Dash/"sprint")
- Treat the grid as **5 ft/cell**. Each combatant has a **speed** (PC `speed`; monster `statblock.speed`
  → parse the number, e.g. "40 ft." → 40; fall back to 30). Store/derive movement in feet.
- **Movement range:** when a token is selected/active, show a faint **reach ring** = speed (and a
  second ring for **Dash** = ×2). 
- **Distance tool:** a ruler — click-drag on the board (or token→point) to measure distance in **ft**
  (respect the diagonal rule from "Confirm first #5"), shown as a live label.
- **Actions bar** for the active token: **Dash** (doubles the move ring), **Dodge**, **Disengage**,
  **Help**, **Hide** — toggles that are **visible on the token** and feed task 7 (e.g. Dodge →
  attacks against it have disadvantage). Keep it compact.

### 5) Enemy images
Per "Confirm first #2", give monster tokens artwork. Whatever the source, it must be **local/offline**
and **not copyrighted MM art**. Add an `img:` path to each statblock in the data file (single source
of truth) and render it in the token (like PCs' `portrait`) and in `renderSB`. Provide a graceful
fallback (the current type+number label / a silhouette) when an image is missing or fails to load.

### 6) PC (and all) health on the token
Make current/max HP **clearly visible on every token** even after the size reduction — e.g. a crisp
numeric `cur/max` with the colour-banded bar, and a clear **bloodied/down/dead** treatment. (Partly
exists; the ask is legibility + prominence at the smaller size.)

### 7) Abilities auto-apply conditions, and conditions change the math (visible to the DM)
- **Auto-apply conditions from abilities.** When a save/attack ability that imposes a condition
  resolves, **set that condition on the target automatically.** Parse the condition from the ability
  text (statblock action / spell effect commonly says "knocked **prone**", "**restrained**",
  "**grappled**", "**stunned**", "**frightened**", "**poisoned**", "**blinded**"). For save-based
  ones, apply on a **failed** save (the popover already has Failed/Saved buttons).
- **Conditions change subsequent rolls, and SHOW why.** Add a small rules map so the resolve popover
  **auto-sets advantage/disadvantage** and movement effects based on the attacker's and target's
  conditions/actions, with a one-line explanation. At minimum:
  - **prone:** melee attacks vs it = advantage; ranged vs it = disadvantage; its attacks = disadvantage;
    standing costs half movement.
  - **restrained:** attacks vs it = advantage; its attacks = disadvantage; Dex saves disadvantage; speed 0.
  - **grappled:** speed 0. **stunned/paralyzed (if added):** incapacitated; attacks vs it = advantage;
    auto-fail Str/Dex saves. **blinded:** attacks vs it = advantage; its attacks = disadvantage.
  - **frightened:** disadvantage on attacks/checks (while source in view); can't move closer to source.
  - **poisoned:** disadvantage on attacks and ability checks. **Dodge (action):** attacks vs it = disadvantage.
  - The popover should display e.g. *"target is Prone → advantage (melee)"* and pre-pick the
    `adv/normal/dis` mode for the auto-roll (DM can override).

### 8) Expand & enrich the read-aloud
- Give the **read-aloud front face more room and presence** (it's the thing read to players). Make it
  **verbose** — bigger type, generous layout, optional per-scene "extra detail" prose. *(If "verbose"
  means richer narration text, that's content in `MODULE.scenes[].readAloud`/`body` — confirm whether
  to expand the prose in the data file or just the UI room.)*
- Add a **per-scene image slot** so the DM can attach an **AI-generated atmosphere image** (per
  "Confirm first #3"). Render it prominently in the read-aloud face; persist the association.

### 9) Each scene sets up its own fight (auto-add enemies on scene change)
Moving the scene (the read-aloud/board nav) should **set up that scene's combatants**. The beats
already carry `.body` and `.hasVer` — **port the DM screen's `sceneEnemies(body, version)`** (derive
`[{key,count}]` from `{{SB:id|n}}`, scoping the Showdown to the active A/B) into `TWGE` or the
cockpit, then reuse `buildLoadState`. Per "Confirm first #4": on entering a combat scene, load its
enemies (auto or one-tap), **keep the party + their positions**, and swap out the previous scene's
monsters (confirm before discarding an in-progress fight). Going wolves → cult should just work.

### 10) Modern, polished look (inspiration: cult-ui, morphin, magicui)
Those are React component libraries — **you cannot import them** (offline / no deps). **Emulate the
aesthetic with hand-written CSS + the vendored React**: animated/gradient "shimmer" borders, soft
glassmorphism panels, spring-y token motion and hover/drop micro-interactions, tasteful transitions
on HP changes / condition application / active-turn handoff. Keep it **fast and uncluttered** — motion
should aid readability at the table, not slow it down. Respect `prefers-reduced-motion`.

## Acceptance criteria
- Cockpit still loads offline (`file://`); all v1 features still work; old saves migrate.
- The DM Screen is gone (or fully folded in) and the cockpit is self-sufficient — no dependence on
  `twg-combat-load`; navigating to a combat scene sets up that scene's enemies (keeping the party).
- Board/tokens are ~half the size and still legible; PCs' and enemies' HP is clear on the token; enemy
  tokens show (offline, license-safe) art with a graceful fallback.
- Adding party/enemies to the board is one or two taps. A distance ruler + movement/Dash rings work
  in feet on a 5-ft grid; an action bar (Dash/Dodge/…) is visible per token.
- Dropping an ability that imposes a condition auto-applies it; conditions/actions then auto-set
  advantage/disadvantage (and movement effects) in the resolve popover, with a visible reason.
- Read-aloud is more spacious/verbose and supports a per-scene DM-supplied image.
- `combat-cockpit.html` and `.src.jsx` stay in sync; no new external deps; data file remains SoT.

## Verification (a browser isn't required)
- **Syntax:** parse every inline `<script>` + the data files with Node `vm.Script`.
- **Headless smoke test with jsdom** (it renders this vendored React 18 app): inline the two
  `<script src="../…">`/`party.data.js` tags (jsdom won't fetch `../`), mock `window.parent`, mount,
  then exercise: scene-nav auto-loads the right enemies; tokens render with HP + art fallback;
  selecting a token shows its kit; a simulated ability-drop that imposes a condition reduces HP, adds
  the condition, and a follow-up attack vs that target is flagged advantage; a distance measurement
  returns the expected ft. (jsdom has no layout — drive `elementFromPoint`/`getBoundingClientRect`
  deterministically as the v1 tests did.)
- Then describe the manual click-through for the DM to confirm on the Mac.

## Deliverables
Edits to `combat-cockpit.html` (+ `.src.jsx` mirror), any `TWGE` additions (it only READS `MODULE`),
new `img:` fields/assets per the image decisions, removal/retirement of the DM Screen, updated
`site/README.md` (+ the repo `CLAUDE.md` notes about the now-single-screen tool), and a short summary
of what to click. Commit only if asked.

---

> Notes for the next agent on the v1 codebase you're extending:
> - The board's drag uses **pointer events** (not HTML5 DnD) with `setPointerCapture` + (for chip
>   drops) `document.elementFromPoint(...).closest('[data-tokenid]')`. Keep that approach.
> - Ability normalization already exists (`abilitiesFor`, `pcAttackAbility`, `pcSpellAbility`,
>   `monActionAbility`) and is heuristic — extend it to also extract **imposed conditions** and the
>   **save** to roll against; the `ResolvePopover` is where adv/dis + auto-condition should land.
> - Token positions are **fractions [0..1]** (`placeDefault`/`withPositions`) so they survive resize;
>   keep that when you halve the board and add the grid/measurement.
> - The full scene reference + Showdown A/B (`collapsify`, `applyVer`, `version`/`versionTouched`,
>   `BEATS[i].body`/`.hasVer`) are the pieces to reuse for "each scene sets up its fight."
