# D&D 5e Rules Reference — Claude Router

This folder is a **Dungeon Master's rules-lookup knowledge base** for **D&D 5e (2014 core rules)**.
Use it to answer rules questions fast — both questions players ask and DM rulings — for Josh's
one-shot. The three core rulebooks are broken down into per-book markdown summaries with page
citations back to the PDFs (the PDFs remain the source of truth).

## How to answer a rules question

1. **Check the Topic Index below** to find the right file, and read it.
2. **`quick-reference/`** has the most-asked rules as tight cheat sheets — start there for combat,
   conditions, death saves, DCs, and encounter building.
3. **If a topic isn't covered yet** (see "Build status" below), read the source PDF directly:
   `pdftotext -f <physical> -l <physical> "<Book>.pdf" -`. For the PHB the printed→physical offset
   drifts, so find the page by grepping the text dump instead:
   `grep -n -i "<keyword>" .build/phb.txt` (regenerate `.build/` per `PROGRESS.md` if missing).
4. **Always cite book + printed page**, e.g. *(PHB p.195)*.
5. **Distinguish hard rules from DM discretion** — flag judgment calls.
6. **OCR caveat:** the PDFs are scans with minor OCR errors; rely on the cleaned markdown, and
   sanity-check numbers against the PDF when it matters.

## Page-offset table (printed → physical PDF page)

| Book | PDF file | Offset | Notes |
|------|----------|--------|-------|
| PHB  | `Player's Handbook.pdf` | **drifts** | No constant offset — find by heading via `.build/phb.txt` |
| DMG  | `Dungeon Master's Guide.pdf` | **0** | physical = printed |
| MM   | `Monster Manual.pdf` | **+1** | physical = printed + 1 |

## Topic → file index

### Combat & actions
| Topic | File | Page |
|-------|------|------|
| Turn structure, initiative, surprise | `players-handbook/09-combat.md` | PHB 189 |
| Actions (Attack, Dash, Dodge, Disengage, Help, Hide, Ready, Search, Use Object) | `quick-reference/actions-in-combat.md` · `players-handbook/09-combat.md` | PHB 192 |
| Bonus actions, reactions, **opportunity attacks** | `players-handbook/09-combat.md` | PHB 190, 195 |
| **Grappling & shoving** | `players-handbook/09-combat.md` | PHB 195 |
| **Cover** (half +2, three-quarters +5, total) | `players-handbook/09-combat.md` | PHB 196 |
| Movement, difficult terrain, prone, squeezing | `players-handbook/09-combat.md` | PHB 190–192 |
| Attack rolls, advantage, unseen attackers, ranged-in-melee | `players-handbook/09-combat.md` | PHB 193–195 |
| Two-weapon fighting | `players-handbook/09-combat.md` · `players-handbook/05-equipment.md` | PHB 195 |
| Mounted & underwater combat | `players-handbook/09-combat.md` | PHB 198 |

### Damage, healing & death
| Topic | File | Page |
|-------|------|------|
| Damage rolls, **critical hits**, resistance/vulnerability | `players-handbook/09-combat.md` | PHB 196–197 |
| Dropping to 0 HP, **death saving throws**, instant death | `quick-reference/death-and-dying.md` · `players-handbook/09-combat.md` | PHB 197 |
| Stabilizing, knocking out, temporary HP | `quick-reference/death-and-dying.md` | PHB 197–198 |

### Conditions
| Topic | File | Page |
|-------|------|------|
| The 14 conditions (blinded, grappled, prone, restrained, stunned…) | `quick-reference/conditions.md` | PHB 290 |
| **Exhaustion** (6 levels) | `quick-reference/conditions.md` | PHB 291 |

### Ability checks, skills & saves
| Topic | File | Page |
|-------|------|------|
| Ability checks, **Difficulty Classes**, advantage/disadvantage | `quick-reference/difficulty-classes.md` · `players-handbook/07-using-ability-scores.md` | PHB 173–174 |
| Skills by ability, passive checks, group checks, contests | `players-handbook/07-using-ability-scores.md` | PHB 174–179 |
| Saving throws | `players-handbook/07-using-ability-scores.md` | PHB 179 |

### Adventuring
| Topic | File | Page |
|-------|------|------|
| Travel pace, journeys, difficult terrain | `players-handbook/08-adventuring.md` | PHB 182 |
| **Resting** (short/long rest, Hit Dice) | `players-handbook/08-adventuring.md` | PHB 186 |
| Vision & light (obscured, darkvision) | `players-handbook/08-adventuring.md` | PHB 183 |
| Falling, suffocation, food & water | `players-handbook/08-adventuring.md` | PHB 183–185 |
| Jumping, climbing, swimming | `players-handbook/08-adventuring.md` | PHB 182 |

### Magic
| Topic | File | Page |
|-------|------|------|
| Spellcasting rules: slots, components, upcasting, rituals | `players-handbook/10-spellcasting.md` | PHB 201 |
| **Concentration** | `players-handbook/10-spellcasting.md` | PHB 203 |
| Spell save DC / spell attack bonus | `players-handbook/10-spellcasting.md` | PHB 205 |
| Schools of magic; how to read a spell entry | `players-handbook/11-spells.md` | PHB 203, 207 |
| Individual spell descriptions | `players-handbook/spells/` — **cantrips + L1–L5 built** (`cantrips.md`, `level-1.md` … `level-5.md`, `spell-index.md`); **L6–L9 ⚠️ deferred** (use PDF) | PHB 211+ |

### Character building
| Topic | File | Page |
|-------|------|------|
| **Make a character** (guided Character Creation Helper — say *"help me make a character"*; circle the chooser, get a full level-1 packet, beginner-friendly) | `tools/character-creator.md` → `characters/_CHOOSER.md` → `characters/` | — |
| Creating a character, ability scores, point buy, standard array | `players-handbook/01-creating-a-character.md` | PHB 11–13 |
| Leveling, XP, proficiency bonus | `players-handbook/01-creating-a-character.md` | PHB 15 |
| **Races** (all 9 + subraces) | `players-handbook/02-races.md` | PHB 17 |
| Classes overview (hit die, saves, casters) | `players-handbook/03-classes.md` | PHB 45 |
| Per-class detail (full features + subclasses) | `players-handbook/classes/` — **all 12 classes built** | PHB 46+ |
| Backgrounds, alignment, inspiration, languages | `players-handbook/04-personality-and-background.md` (overview/index) + `players-handbook/backgrounds/` (**all 13**, full feature/equipment/variant + trait-ideal-bond-flaw tables) | PHB 121 |
| Equipment, **armor & AC**, weapons, packs, encumbrance | `players-handbook/05-equipment.md` | PHB 143 |
| **Feats** (full list) & multiclassing | `players-handbook/06-customization-feats-multiclassing.md` | PHB 163 |
| Gods & pantheons, planes overview, common creature stat refs | `players-handbook/appendices.md` | PHB 293+ |

### Running the game (DM)
| Topic | File | Page |
|-------|------|------|
| **DM RUN-THE-GAME TOOLKIT** (generate NPCs / encounters / traps & puzzles / room descriptions / scenes & avenues / NPC dialog *live at the table*) | `quick-reference/dm-toolkit/` (`npc-generator.md`, `encounters-and-monsters.md`, `traps-puzzles-hazards.md`, `environments-and-dressing.md`, `scenes-goals-and-avenues.md`, `social-and-dialog.md`) | — |
| **Building encounters** (XP thresholds, multipliers, adventuring day) | `quick-reference/encounter-building.md` · `dungeon-masters-guide/03-creating-adventures.md` | DMG 82 |
| New-DM tips, rulings vs. rules, pacing, safety tools | `quick-reference/new-dm-one-shot-tips.md` | DMG 235 |
| **Designing a one-shot** (Pointy Hat's MMOS — quest, two paths, the key, modular encounters, showdown, endings, hook) | `quick-reference/one-shot-formula-mmos.md` | — |
| **Build a full run-ready one-shot module** (Session/Module Creator — say *"build me a one-shot"*; auto-scales encounters, inlines stat blocks, outputs to `modules/`) | `tools/session-creator.md` → `modules/` | — |
| **Run a live session** (DM Assistant — say *"run the session"*; walks a module scene-by-scene, conducts combat turn by turn, tracks live state in `sessions/`, pause/resume) | `tools/dm-assistant.md` → `sessions/` | — |
| Creating adventures (location vs. event, encounters, random encounters) | `dungeon-masters-guide/03-creating-adventures.md` | DMG 71 |
| **NPCs & villains** (design, Loyalty, Death Domain / Oathbreaker) | `dungeon-masters-guide/04-npcs.md` | DMG 89 |
| **Traps & hazards** (Trap save DCs, Damage Severity by level, sample traps) | `dungeon-masters-guide/05-adventure-environments.md` | DMG 99 |
| Downtime / between adventures (crafting, magic-item creation, carousing, business) | `dungeon-masters-guide/06-between-adventures.md` | DMG 125 |
| **Treasure & magic items** (treasure rules, rarity, attunement, ~220-item index) | `dungeon-masters-guide/07-treasure-and-magic-items.md` | DMG 133 |
| **Running the game**: DCs, social interaction, chases, **disease / poison / madness** | `dungeon-masters-guide/08-running-the-game.md` | DMG 235 |
| Optional / variant rules (flanking, hero points, lingering injuries, rest variants) | `dungeon-masters-guide/09-dm-workshop.md` | DMG 263 |
| World-building & the planes of existence | `dungeon-masters-guide/01-02-world-building.md` | DMG 9, 43 |
| DMG appendices (random dungeons, monster lists by environment/CR) | `dungeon-masters-guide/appendices.md` | DMG 290 |
| **Monsters**: find one by name / CR / type; how to read a stat block | `monster-manual/` (`monster-index.md`, `monsters-by-cr.md`, `monsters-by-type.md`, `README.md`) | MM 12+ |
| **Monster stat blocks** (AC/HP/abilities/traits/actions) | `monster-manual/stat-blocks/` — **CR 0–2 complete (every MM monster); CR 3–5 common monsters** (278 blocks, `cr-0.md`…`cr-5.md`). CR 6+ → MM PDF (offset **+1**) | MM 12+ |

## Layout

- `players-handbook/` — PHB by chapter (+ `classes/` all 12, `races/` all 9, `backgrounds/` all 13, `spells/` cantrips–L5, `appendices.md`)
- `dungeon-masters-guide/` — DMG: README + all 9 chapters + `appendices.md` *(fully built)*
- `monster-manual/` — MM **indexes** (alphabetical, by CR, by type) + `README.md` primer + **`stat-blocks/`** (full mechanical stat blocks in our own format; **CR 0–2 exhaustive, CR 3–5 common monsters**). CR 6+ → look the page up in the MM PDF (offset +1)
- `quick-reference/` — cross-book cheat sheets for the most-asked rules + **`dm-toolkit/`** (6 generation scaffolds to improvise NPCs / encounters / traps & puzzles / room descriptions / scenes & avenues / dialog live)
- `tools/` — **PHASE 2 tools** built on top of the KB. `session-creator.md` = the Session/Module Creator (say *"build me a one-shot"*); `character-creator.md` = the Character Creation Helper (say *"help me make a character"*); `dm-assistant.md` = the **live DM Assistant** that runs a session (say *"run the session"*)
- `modules/` — **generated one-shot modules** (ready-to-run sessions from the Session Creator) + `_TEMPLATE.md` + `README.md`. *(The Session Creator outputs prose `modules/<slug>.md`. **The Weeping Grove is special:** its content lives in `modules/the-weeping-grove/the-weeping-grove.data.js` — a structured `MODULE` object that is the **single source of truth** the DM screen renders from and the DM Assistant reads. The old prose `the-weeping-grove.md` is a retired stub.)*
- `characters/` — **generated level-1 character packets** (from the Character Creation Helper) + `_CHOOSER.md` (the print-once "circle your character" worksheet) + `_TEMPLATE.md` + `README.md`
- `sessions/` — **live session-state files** (kept by the DM Assistant while you play; pause/resume) + `_TEMPLATE.md` + `README.md`
- `PROGRESS.md` — build tracker / resume guide (see "Build status" below)
- `.build/` — regenerable page-tagged text dumps of each PDF (for live lookups) — **gitignored** (copyrighted text)
- **Web / hosting:** `index.html` (repo root) is a **redirect to the Party page** `characters/index.html`
  (the public **home** — a roster linking each hero's finished sheet, e.g. `characters/alary-fern/`). The
  **character builder** now lives at `modules/the-weeping-grove/site/character-builder.html`; the **DM tool** is the
  **Combat Cockpit** — now the single, self-sufficient DM screen — at `modules/the-weeping-grove/site/combat-cockpit.html`
  (`site/index.html` just redirects to it). The old vanilla-JS DM screen (`site/dm-screen.html`) is **retired** (no
  longer linked). Published via **GitHub Pages** — see the next section.

## Player-facing web pages, hosting & source control

This project is **version-controlled and published with GitHub Pages** so players can build a character from a
link, and so the work is backed up.

### Git / remote
- **Repo root** = this folder (`dnd/`). **Remote:** `https://github.com/Jnexcell/DandD.git` · branch **`main`**.
- **NEVER commit (gitignored, see `.gitignore`):** the source rulebook **PDFs** (`*.pdf`) and their text dumps
  (**`.build/`**). They are **WotC-copyrighted** — they stay on local disk only. Regenerate `.build/` per
  `PROGRESS.md` if needed. Everything else (the markdown KB, the module, the HTML) is safe to publish.
- **To update the live site:** `git add -A && git commit -m "…" && git push` → Pages redeploys in ~1 min.
  End commit messages with the `Co-Authored-By: Claude …` trailer.
- **Auth here:** no `gh` CLI and no SSH key are set up; push over **HTTPS with a fine-grained PAT**
  (Repository → Contents: Read and write) used as the password (username `Jnexcell`). `gh auth login` would
  need `gh` installed (sudo).

### GitHub Pages (the live site)
- **Settings → Pages → Deploy from a branch → `main` / `/ (root)`.**
- **Player link (share this one): https://jnexcell.github.io/DandD/** → redirects to the **Party page**
  (`…/DandD/characters/`), the public home. From there a big **"Build your character"** button opens the
  **builder** (`…/DandD/modules/the-weeping-grove/site/character-builder.html`), which carries the quest hook in
  its Welcome step and has a **"← The Party"** back button. Each hero card links to that player's sheet
  (`characters/<name>/<name>.html`).

### The HTML pages
- **`index.html`** (repo root) is now a **tiny redirect** to `characters/` (the Party home) — it is **no longer**
  the builder, and the old byte-identical pairing is retired. The **interactive player character builder**,
  *"The Weeping Grove — Build Your Hero"* (the click-through equivalent of `characters/_CHOOSER.md`), lives at
  **`modules/the-weeping-grove/site/character-builder.html`**. **`characters/index.html`** is the Party roster
  (home); per-player finished sheets are generated at `characters/<name>/<name>.html` from the self-contained
  `characters/character-sheet-template.html` (edit its one `CHARACTER` object; the engine derives every number).
  - **Flavor-first & beginner-friendly.** 7-step flow (Welcome → Race → Class → Background → Ability Scores →
    Personality → Finish). Race / Class / Background cards show **personality & feel** ("what kind of character
    you're making"), **not** stats. The rules data (ability bonuses, speed, Hit Die, skills, features) still lives
    in the code and still flows to the DM in the export — it's just **hidden from the player's view**. Official
    names are never reworded; only the descriptive subtext is friendly/flavor.
  - **Ability scores auto-fill** to suit the chosen class + race (race bonuses applied live; bonus picks for
    Variant Human / Half-Elf assigned automatically and RAW-correctly) and stay **fully editable** — the Standard
    Array / Point Buy / Dice / Manual tabs remain as the edit path.
  - Captures name, alignment, a free-form **Backstory** wall-of-text (its own field under Alignment), and the
    trait/ideal/bond/flaw. **Autosaves** to the device (`localStorage`, key `weeping-grove-character-v2`).
  - **Export = Copy to clipboard** (primary) **+ Download `.md`** (fallback); the player pastes it into their own
    email/message to the DM. *(The old mailto **Email** button, the **DM's-email** field, and **Print/Save PDF**
    were removed as unreliable/pointless on a static site — there is **no** hardcoded `DM_EMAIL`.)*
  - Its Markdown output is the **intake** for `tools/character-creator.md` — it deliberately stops at
    level-1-style picks + raw scores; **the DM runs the Character Creator to do the full math and level the hero
    to 3.**
- **`modules/the-weeping-grove/site/combat-cockpit.html`** — the offline **DM tool** (DM-only, full spoilers): the
  **Combat Cockpit**, now the single, self-sufficient DM screen (React + ReactDOM vendored inline; works on
  `file://`). `site/index.html` just redirects to it. It **renders from `../the-weeping-grove.data.js`** (the single
  source of truth — to change the adventure, **edit the data file, not the HTML**; add new per-creature data, e.g. the
  silhouette `sil` type, as a statblock field):
  - Initiative, HP/damage, death saves, conditions; a dice tray that rolls monster attacks from stat blocks; the
    candle-clock + clue→Key HUD. Loads `site/party.data.js` (the 5 PCs); each PC's attacks/spells/features show as
    reference (players roll their own).
  - **Each scene sets up its own fight**: navigating to a scene auto-loads its enemies (`TWGE.sceneEnemies`, A/B
    aware), keeps the party (HP/conds/positions), replaces the prior scene's monsters. (Replaces the old DM-screen
    `twg-combat-load` hand-off — the cockpit derives it itself.)
  - A **tactical token board** (compact tokens with a **name label above each**, creature silhouettes, legible HP,
    movement reach/Dash rings, a 5-ft distance ruler, a per-token actions bar), **drag-an-ability-onto-a-target** with
    auto-applied conditions and auto adv/disadvantage (with a visible reason), a flip **DM-notes** face = the full
    scene reference, and a roomier read-aloud face with a per-scene local image (fits whole, no crop).
  - **DM turn control + economy (v2.2):** click a combatant's initiative row or token to make it the current turn
    (round unchanged); **↑/↓ reorder** the initiative via a manual `seq` that `nextTurn` follows; per-combatant
    **action economy** (Action/Bonus/Reaction, reset each turn) and **spell slots** seeded from the data (PC
    `spell.slots`; monster Spellcasting trait — `(M slots)` / `At will` / `N/day`) that auto-decrement when a leveled
    spell resolves, with a manual rest. **Click an ability chip** (vs drag) for a full-detail tooltip.
  - **Party link + rests + loot (v2.3):** a **🎭 The Party →** header button opens the player roster
    (`characters/index.html`) in a new tab (the roster shows a **← Combat Cockpit** return link *only* when
    arrived from the cockpit, via a `#cockpit` hash — players never see it); **🛌 Short / 🌙 Long** party-wide
    rests (Long = full HP + all slots + cleared economy/death saves; Short = clear economy + restore Warlock
    pact slots + a DM-entered heal); and a **🎁 Loot** overlay — a per-scene give/given checklist of thematic
    level-3 rewards driven by `loot:[…]` arrays on the scene objects in the data file (the give state persists
    in the save as `lootGiven`).
  - The engine `window.TWGE` (READS `MODULE` only) and the app live in the one `.html`; its readable JSX mirror is
    `site/combat-cockpit.src.jsx` — **edit both** the inline `React.createElement` app and the `.src.jsx` mirror (no
    build step; CSS lives only in the `.html`).
  The old vanilla-JS **DM screen** (`site/dm-screen.html`) is **retired** — no longer linked (kept as a dead file,
  safe to delete). **Single canonical copy** — the old duplicate top-level `the-weeping-grove/` tree was removed.
  ⚠️ **Reachable on the public Pages site** at `…/DandD/modules/the-weeping-grove/site/` — do **not** share that URL
  with players. (For true privacy later: move it off the published path or to a separate private deploy.)

## Build status (what's done vs. not)

**Done & verified** (full KB end-to-end verified 2026-06-12 — links, counts, and citation spot-checks all clean):
- All **PHB** chapter overview files + README + `appendices.md` (conditions, gods, planes, creature stats).
- All **12 PHB classes** (`classes/` — full features by level + every subclass + each caster's cantrip–L5 spell list + flavor).
- All **9 races** (`races/` — full traits, subraces, names, lore) and all **13 backgrounds** (`backgrounds/` — feature, equipment, variants + trait/ideal/bond/flaw tables); `02-races.md` & `04-personality-and-background.md` are overview/index files into those folders.
- **Spells** (`spells/`): `spell-index.md` + **cantrips through level-5** (full mechanical detail).
- **All quick-reference** cheat sheets (6 rules sheets + the one-shot MMOS framework) **plus the `dm-toolkit/`** — 6 live-generation scaffolds (NPCs, encounters, traps/puzzles, environments, scenes/avenues, social/dialog).
- **Entire DMG** (`dungeon-masters-guide/`): README + all 9 chapters + appendices — world-building, creating
  adventures, NPCs, environments/traps, downtime, treasure & magic items, running-the-game, DM workshop.
- **Monster Manual indexes** (alphabetical, by CR, by type, stat-block primer).
- **Monster stat blocks CR 0–5** (`monster-manual/stat-blocks/`, 278 blocks) — content-verified (AC/HP/abilities/
  traits/actions in our own format). **CR 0–2 is exhaustive** (every MM monster; counts match canonical totals).
  **CR 3–5 covers the common monsters** (curated subset, not every MM monster).

**Not built yet — fall back to the PDF (`pdftotext` / grep `.build/`):**
- **Spell descriptions L6–L9** (`spells/level-6..9.md`) — deferred; cantrips through L5 are done.
- **Monster stat blocks CR 6+** — only CR 0–5 are transcribed. For CR 6 and up, look the monster up in the MM PDF
  (offset **+1**) or grep `.build/mm.txt`. (Some CR 3–5 monsters are also not yet transcribed — see `PROGRESS.md`.)

See `PROGRESS.md` for the full checklist and how to resume the build.
