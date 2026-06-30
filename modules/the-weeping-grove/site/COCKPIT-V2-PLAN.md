# Combat Cockpit v2 — implementation plan & handoff

> Working doc for the build described in the v2 spec. **Decisions are locked (below).**
> Delete this file once v2 ships. Files live under
> `modules/the-weeping-grove/site/`. **Edit `combat-cockpit.html` AND `combat-cockpit.src.jsx`
> together, every change.** No build step; offline `file://`; only vendored React.

## Locked decisions (from the user)
1. **DM Screen retirement.** Port the **Crown puzzle tracker** (Scene 4) as a real interactive
   feature. Everything else from the DM Screen (Player View text, Quick Ref, Overview / Endings /
   stat-block & tracker appendices) gets **folded into the existing DM-notes flip / full-scene
   reference**, not rebuilt as separate screens. Inspector is already covered by the board detail
   panel — drop it. Then **`index.html` loads `combat-cockpit.html` directly** (cockpit is the entry
   point) and **`dm-screen.html` is deleted** after porting. Cockpit must not depend on
   `twg-combat-load` anymore.
2. **Enemy token art = CSS/SVG silhouettes by creature type.** No bitmaps, no copyright, fully
   offline. Graceful fallback = current type+number label.
3. **Read-aloud atmosphere image = local file path** under `site/img/scenes/`. Persist the
   per-scene path association in cockpit state. (Convention: default-probe `img/scenes/<sceneId>.*`.)
4. **Scene fights auto-load** on scene change, **preserving PC HP / conditions / death saves /
   positions** from the prior scene. Replace only the previous scene's monsters. **Confirm before
   discarding live enemies** when `round > 0`.
5. **Grid = 1 cell / 5 ft; PHB diagonal (Chebyshev, every square 5 ft).**

## Hard constraints (do not violate)
Offline / `file://` / no build / no new external deps (vendored React only) · edit both HTML + src.jsx ·
`the-weeping-grove.data.js` stays single source of truth · don't break v1 · keep compact/fast ·
persist new state in `localStorage["twg-cockpit-v2"]` merged over `DEFAULT`, migrate so old saves
never crash · no copyrighted art committed.

## Task → where to touch (use existing names; verify against file before editing)
1. **Retire DM Screen.** Crown tracker: new compact component, surfaced in the read-aloud DM-notes
   flip (and/or HUD). Fold Player View / Quick Ref / non-play beats into the flip's full-scene
   reference. Rewrite `index.html` to load the cockpit directly; delete `dm-screen.html`; update
   `README.md` + repo `CLAUDE.md`. Remove `twg-combat-load` dependence (task 9 replaces it).
2. **Halve board size.** `.ck-tok*` CSS: ~42px circle → ~22px, 60px cell → ~30px. Keep HP/labels
   legible (task 6). Tie grid to 5ft/cell (task 7). Positions are fractions [0..1] — keep.
3. **Easy add-to-board.** On-board add affordance: **+ Party** (5 PCs), **monsters**
   (`TWGE.monsters()` / `MON_ORDER`), manual add. Drop via `placeDefault`, immediately draggable.
   (HUD roster may go away with DM Screen — move add onto the board.)
4. **Movement.** Speed: PC `speed`; monster parse `statblock.speed` ("40 ft."→40), fallback 30.
   Selected/active token: faint **reach ring** (=speed) + **Dash ring** (×2). **Distance ruler**
   click-drag → ft (Chebyshev). **Actions bar**: Dash/Dodge/Disengage/Help/Hide toggles, shown on
   token, feeding task 7 (Dodge → attacks vs it disadvantage). Store movement in feet.
5. **Enemy art.** Add a silhouette key per statblock in the data file (single source of truth) —
   e.g. `silhouette`/type field — render CSS/SVG silhouette in token + `renderSB`; label fallback.
6. **HP on every token.** Crisp numeric `cur/max` + colour-banded bar; clear bloodied/down/dead
   treatment, legible at half size.
7. **Conditions math (visible).** Extend `abilitiesFor`/`pcAttackAbility`/`pcSpellAbility`/
   `monActionAbility` to also extract **imposed condition** + **save** to roll. `ResolvePopover`:
   on failed save (or on-hit) auto-set the condition; add a **rules map** that auto-picks
   adv/normal/dis + movement effects from attacker/target conds & actions, with a one-line reason
   (e.g. "target is Prone → advantage (melee)"). DM can override. Rules per spec §7 (prone,
   restrained, grappled, stunned/paralyzed, blinded, frightened, poisoned, Dodge).
8. **Read-aloud.** More room/presence on the front face (bigger type, generous layout). Per-scene
   image slot via local file path (decision 3), persisted. "Verbose" prose = open question: expand
   `MODULE.scenes[].readAloud`/`body` (content) vs just UI room — default to UI room unless told.
9. **Auto scene fights.** Port DM screen's `sceneEnemies(body, version)` (derive `[{key,count}]`
   from `{{SB:id|n}}`, Showdown A/B scoped via `version`/`versionTouched`/`.hasVer`) into `TWGE` or
   cockpit; reuse `buildLoadState`. On scene nav: auto-load enemies, **keep party + positions + PC
   hp/conds/deaths**, swap prev monsters, confirm if `round>0` with live enemies.
10. **Polish.** Hand-written CSS: shimmer/gradient borders, glassmorphism panels, springy token
    motion, transitions on HP change / condition apply / turn handoff. Respect
    `prefers-reduced-motion`. Stay fast/uncluttered.

## State additions (persist in the v2 blob; spread over DEFAULT; migrate)
Per-combatant: `actions:{dash,dodge,disengage,help,hide}` (or a set), movement already derivable.
Root/scene: `sceneImg:{[sceneId]:path}`, crown-puzzle state, `lastSceneEnemies`/scene-fight bookkeeping.
Back-fill all new fields in the loader and `withPositions`.

## Verification (no browser needed)
- Parse every inline `<script>` + data files with Node `vm.Script`.
- jsdom headless smoke (inline the `../` script tags; mock `window.parent`; mount Cockpit), then:
  scene-nav auto-loads correct enemies + preserves PC hp; tokens render HP + silhouette fallback;
  selecting a token shows its kit; ability-drop imposing a condition reduces HP + adds condition +
  next attack vs target flagged advantage; distance measurement returns expected ft.
- Reuse v1 deterministic `elementFromPoint`/`getBoundingClientRect` driving (jsdom has no layout).

## Suggested phase order (each phase = self-contained, keeps v1 working, commit-able)
A. Plumbing: state migration + `sceneEnemies`/auto-load (task 9) + drop `twg-combat-load` dep.
B. Board: halve size (2) + HP legibility (6) + silhouettes (5) + on-board add (3).
C. Movement: speed/rings/ruler/actions bar (4) feeding (7).
D. Conditions math + auto-apply in ResolvePopover (7).
E. Read-aloud room + image (8) + Crown tracker & DM-notes fold (1).
F. Retire dm-screen.html + rewrite index.html + docs (1). Polish pass (10) throughout.
Run Node syntax parse + jsdom smoke after each phase. Commit only when asked.

## Progress log
- **2026-06-29 — data groundwork for task 5 done.** Added a compact `sil:` (silhouette type) field
  to all 7 statblocks in `the-weeping-grove.data.js`: wolf=beast, cultist/fanatic/thug=humanoid,
  twig/mound=plant, hag=fey. Purely additive — the cockpit doesn't read it yet, so v1 is unchanged.
  Verified with `node vm.Script` (parses; all 7 have `sil`). Silhouette categories to render later:
  **beast, humanoid, plant, fey** (+ label fallback). Not committed.
- **2026-06-29 — Phase B board overhaul DONE & verified (tasks 2, 5, 6).** Halved tokens (60→34px
  width, 42→24px circle) + tightened grid (32→26px). Added `SIL_SVG` silhouettes (beast/humanoid/
  plant/fey) rendered faint behind the token label (PCs keep portraits) and in `renderSB` header;
  letter+number label remains the fallback. HP: bigger contrast numeric `cur/max`, `bloodied` class
  + ring at ≤50%, down/dead colouring. jsdom smoke (`scratchpad/smoke.js`): 14 assertions green.
- **2026-06-29 — Phase A scene-fights DONE & verified (task 9).** Added `TWGE.sceneEnemies(beat,ver)`
  (ports DM-screen logic; A/B verblock scoped). New state `fightSig` ("<beat>:<ver>"); migrated
  safely so upgraded saves don't disturb a running fight. `maybeLoadFight` effect on `[beat,version]`
  auto-loads a scene's enemies, **keeps the party** (hp/conds/death saves/positions), replaces prior
  monsters, confirms if `round>0` with living enemies. Cockpit no longer DEPENDS on `twg-combat-load`
  (the listener still exists; remove during task 1). jsdom (`scratchpad/task9.js`): 8 assertions green
  (Scene1→wolf×8, Scene3→cult, Showdown A=mound+twig vs B=hag/fanatic/cultist/mound; wounded PC kept).
- **2026-06-29 — task 7 conditions math DONE & verified.** `parseCond` extracts an imposed condition
  + trigger (hit/failed-save) from ability text; threaded `cond`/`condOn` into pc-attack/pc-spell/
  mon-action abilities. `advInfo(ability,target,source)` = rules map → adv/dis + human reasons
  (prone melee/ranged, restrained, stunned, blinded, target Dodging, attacker prone/restrained/
  frightened/poisoned/blinded, adv+dis cancel). `ResolvePopover` now takes `source`+`onPatch`,
  pre-picks the roll mode (DM-overridable 3-button seg), auto-rolls via `E.d20(mod,mode)`, shows
  reasons + a save hint, and auto-applies the condition on hit / failed save. CSS: `.ck-pop-adv/
  -mode/-why`. jsdom (`scratchpad/task7.js`): 13 assertions green; smoke + task9 still green.
- **2026-06-29 — task 4 movement DONE & verified.** Grid `CELL_PX=26` = 5 ft. `speedOf(c)` (PC
  `speed` number / monster statblock string via `toNum`, fallback 30). `ftBetween` = Chebyshev ft
  (PHB diagonals). Reach ring (speed) + Dash ring (×2, only when Dash active) drawn around the
  active/selected token. Distance ruler: 📏 toggle on the surface → drag on empty board draws an SVG
  line + live ft label (tokens still drag normally; button/token guarded). Per-token actions bar in
  BoardDetail (Dash/Dodge/Disengage/Help/Hide) → `c.actions{}`; active actions show as token badges;
  **Dodge feeds `advInfo`** (attacks vs it → disadvantage). CSS: `.ck-ring`, `.ck-ruler-*`,
  `.ck-actbar/.ck-actbtn`, `.ck-tok-acts`. jsdom (`scratchpad/task4.js`): 12 assertions green; all
  four suites (smoke/task4/task7/task9) green together.
- **2026-06-29 — task 8 read-aloud DONE & verified.** Front face bumped for presence (body 19→21px,
  line-height 1.62, blocks 16→20px). New state `sceneImg:{[sceneId]:localPath}`; ReadAloud takes
  `img`+`onImg`, renders a prominent `.ck-ra-img` (with onError-hide fallback) and a compact path
  control (`img/scenes/<scene>.jpg`), persisted per scene id. Offline (local path). jsdom
  (`scratchpad/task8.js`): 5 assertions green; all suites green.
- **2026-06-29 — task 1 (retire DM screen) DONE.** `index.html` is now a tiny redirect to
  `combat-cockpit.html` (cockpit = sole entry). Removed the Header "← DM screen" link + the dead
  tab-shell click handler script + `.ck-backlink` CSS (cockpit now 4 inline scripts). Crown puzzle =
  surfaced via the DM-notes flip (scene4 body), per "most goes under dm-notes" — not rebuilt as a
  drag tracker. `dm-screen.html` left as a **dead, unlinked file** (NOT deleted — reversible; delete
  on explicit say-so). Updated `site/README.md` + root `CLAUDE.md` to single-screen. Cockpit keeps a
  harmless dead `twg-combat-load` listener (no longer depended on).
- **2026-06-29 — task 3 (easy add) = already satisfied.** Kept the HUD roster (+ Add party / monster
  buttons / manual add) AND task-9 auto-load → adding party/enemies is one tap (or automatic). No new
  on-board UI added (avoids clutter; HUD hides <1080px but the table MacBook is wide).
- **2026-06-29 — task 10 (polish) DONE.** CSS-only (html): glass blur on detail/dice panels, springy
  token motion (cubic-bezier, off while dragging), hover lift, HP-bar width transitions, active-turn
  pulse, condition/action badge pop-in, popover slide-in — all wrapped in
  `@media (prefers-reduced-motion: no-preference)` with a `reduce` off-switch.
- **ALL 10 TASKS COMPLETE & VERIFIED.** Parse clean; 5 jsdom suites green (smoke/task4/task7/task8/
  task9). `.html`/`.src.jsx` parity confirmed (CSS + engine `renderSB`/`sceneEnemies` are html-only).
  Not committed. Remaining polish ideas if wanted: interactive Crown drag-tracker; on-board add menu
  for when the HUD is hidden; downscale-on-import data-URL images (we chose local paths instead).

## v2.2 — turn control, action/slot economy, ability tooltips, token names, RA image fit
- **2026-06-29 — v2.2 (all 5 DM requests) DONE & VERIFIED.** See `COCKPIT-V2.2-PROMPT.md`.
  1. **Manual turn + reorder.** `sortInit` now honours an optional `seq` override (sparse-safe: seq'd
     combatants sort first by seq, the rest fall back to init→dex→name). Clicking an `InitRow` name
     (now a reset `<button>`) or a **token** (mid-fight, via `endToken`→`onSetTurn`) sets `st.turnId`
     **without** changing `round`. New `reorder(id,dir)` (↑/↓ `.ck-seqbtn`) moves within the displayed
     order then **bakes `seq` into all** combatants so it sticks; `nextTurn` follows it.
  2. **Action/slot economy.** New per-combatant `econ:{action,bonus,reaction}`, `slots:{lvl:rem}`,
     `innate:{name:rem}`. `slotsFor` derive-helper: `pcCasting` (from `spell.slots`) + `monsterCasting`
     (parses `Nth (M slots)` / `N/day each` from the trait text; At-will/cantrip untracked). Seeded in
     `pcCombatant`/`monCombatant`; **back-filled in `withPositions`** without clobbering a running
     fight. `econ` resets at turn start (`startFight`/`nextTurn`/manual `setTurn` via `resetEconFor`).
     `ResolvePopover.spend()` marks the source's Action used + decrements the matching slot/innate
     (`spendOf`) on resolve. UI: A/B/R toggles + slot pips + `↺ rest` in `BoardDetail`; A/B/R pips on
     the active token.
  3. **Chip click→tooltip.** Chip pointer flow split click vs drag with the existing `<5px` threshold;
     click opens `AbilityTip` (level/cast/range/to-hit/dmg/save/conc/condition + effect text). Threaded
     `ability.src` = the raw spell/attack/action; monster spells (name-only in data) show derived
     fields + a "no stat-block text" note.
  4. **Token names.** `.ck-tok-name` above the circle inside `.ck-world` (scales with zoom), backdrop +
     truncation; PC = first name, monster = numbered name.
  5. **Read-aloud image fit.** `.ck-ra-img` → `object-fit:contain; width:auto; max-width:100%;
     max-height:38vh; margin:0 auto` — whole ~16:9 art shows, no crop.
  - **Verify:** `node vm.Script` on all 4 inline `<script>`s + both data files = 0 errors; `.src.jsx`
    parses as valid JSX (`@babel/parser`). jsdom harness (scratchpad `run.cjs`) = **63 assertions
    green** across helpers, render smoke (incl. prior board/HP/silhouette, monster spell chips, overlay
    detail, scene auto-load non-regression) and click-driven #1–#3/#2-reset. Not committed.
