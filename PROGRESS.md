# D&D 5e Knowledge Base — BUILD TRACKER & RESUME GUIDE

> **TO RESUME THIS BUILD IN ANY SESSION:** say to Claude:
> **"Read `~/git/dnd/PROGRESS.md` and continue the build from the first unchecked item."**
> (Skip `- [-]` DEFERRED items; honor the **▶ NEXT UP** banner below — the DMG is next, spells are paused.)
> Claude should: (1) read this file, (2) regenerate the `.build/` text dumps if missing
> (command below), (3) find the first `- [ ]` item, (4) write it, (5) run the accuracy review,
> (6) flip it to `- [x] (verified YYYY-MM-DD)`, (7) repeat. Update this file after EVERY file so
> progress survives running out of tokens.

This file is the **durable source of truth** for building the knowledge base. It is self-contained;
a fresh session needs nothing except this file and the three PDFs.

---

## ▶ NEXT UP (build-order override — updated 2026-06-14)

### ★ ACTIVE SESSION AGENDA — 2026-06-14 (Josh) — player/DM polish + first live mock test

The reference KB and PHASE 2 core (2a/2b/2c) are **done** (history below). This session is a **polish +
exercise** pass on the player- and DM-facing artifacts, then the first real live-run test. Work in this order:

1. **[x] Character sheet template — replace from Downloads.** Dropped Josh's newer
   `characters/character-sheet-template.html` (57KB) in over the old 35KB copy (2026-06-14). It's a
   self-contained **at-the-table reference sheet** generator: edit ONE `CHARACTER` object (identity, scores,
   proficiency lists, attacks, spells, features, equipment, personality, "How to Play" coaching) and the
   engine derives every modifier/save/skill/passive-Perception/prof-bonus and renders an illuminated-grove
   sheet (race+class emblems, portrait upload, dark/light theme, print-friendly). Ships pre-filled with a
   sample (Lyra Shadowleaf, Wood Elf Ranger L3). **Distinct from the `index.html` character *builder*** — the
   builder is the player's pick-your-options intake; this sheet is the finished "how to play THIS character"
   handout the DM produces for them. *(Not yet wired into `CLAUDE.md`/`README.md` — see task 4.)*
2. **[x] Character sheet template — make changes (collaborative with Josh, 2026-06-14).** Focus: the two
   beginner-critical teaching parts + making spells/attacks glanceable at level 3. Done:
   - **Generic primer** retitled *"New to D&D? How to play"* — expanded to 5 lines that each name a thing you
     DO + the short how: turn structure (action/bonus/reaction), the full **action menu** (Attack/Cast/Dash/
     Disengage/Dodge/Help/Hide), rolling + advantage, **out-of-combat roleplay**, and dropping to 0.
   - **Per-character "How to Play <name>"** — added **⚔ In a fight** (round-by-round combat flow) and
     **🎭 At the table** (how to roleplay them) blocks; kept turn-1 callout / great-at / watch-out / signature.
   - **Attacks** → glanceable cards (action-cost badge + to-hit + damage + range/melee) with a clearer
     "How to attack on your turn" explainer; promoted `use` + `range` to real data fields.
   - **Spells** → relabeled tags (`Cast`→*To cast*, `Resolves`→*How it lands*), rewrote the casting primer to
     lead "On your turn…" and explain the Spell-save-DC / Spell-attack numbers in place; **grouped leveled
     spells by level** with per-level slot counts (scales to full casters at L3).
   - **⚡ "On Your Turn" menu** (new, under How-to-Play) — auto-derived from attacks + spells + features,
     grouped by cost (Action / Bonus action / Reaction / Always-on), single source of truth; **action-cost
     badges** added to every Feature card. (Decision via AskUserQuestion: "Both".)
   - Validated JS after every change; removed a stray empty CSS rule. Sample (Lyra, Wood Elf Ranger L3)
     left in place — flagged that a full-caster sample would best stress-test the menu/grouping later.
3. **[ ] DM screen — work on it more.** The offline DM screen `modules/the-weeping-grove/site/index.html`
   (full spoilers: scenes, the Key, stat blocks, trackers). Improvements TBD with Josh. *(Reachable on the
   public Pages site but unlinked — keep not sharing that URL with players; CLAUDE.md flags this.)*
4. **[ ] Repo cleanup.** Housekeeping: reconcile the HTML artifacts (builder `index.html` ↔
   `character-builder.html` byte-identical pair, the new `character-sheet-template.html`, the DM screen) and
   **document the new sheet template in `CLAUDE.md` + `characters/README.md`**; prune/organize stray files;
   confirm `.gitignore` still excludes PDFs + `.build/`; tidy folder/file naming. *(Note: `dnd/` IS a git repo;
   `characters/character-sheet-template.html` currently shows untracked — decide what to commit.)*
5. **[ ] First live MOCK TEST with the DM Assistant.** The agreed fuller end-to-end test: take the built
   module `modules/the-weeping-grove/the-weeping-grove.md` + a real party (build via 2b
   `tools/character-creator.md`, or use the sheet above) and **run a live session** through
   `tools/dm-assistant.md` — exercise SETUP → Scene Control loop → the Combat Conductor → state file in
   `sessions/`. Capture any gaps found into the follow-up backlog.

Deferred / not blocking (unchanged): spells L6–L9, CR 3–5 monster completeness, 2d campaign mode, 2b levels 2–5 / batch pre-gens.

---

### (build history — through 2026-06-12, end of PHASE 1.5 / PHASE 2 core)

**DMG COMPLETE ✅. MONSTER STAT BLOCKS: CR 0–2 EXHAUSTIVE ✅, CR 3–5 CURATED ✅** (278 blocks).
**PHB `appendices.md` COMPLETE ✅. SPELLS THROUGH 5th LEVEL COMPLETE ✅** (`cantrips`–`level-5`, dump-verified;
`level-6 … level-9` remain DEFERRED `[-]`). **PHASE 1.5 DEPTH/ENRICHMENT PASS — COMPLETE ✅** (2026-06-12):
`races/` (9), `backgrounds/` (13), all 12 classes' flavor + cantrip–L5 spell lists, `10-spellcasting` &
`08-adventuring` deepened, and the **DM run-the-game toolkit** `quick-reference/dm-toolkit/` (6 files) all
built + verified; root `CLAUDE.md` wired to the new folders.

Remaining work, in order:
1. **End-to-end verification pass** ← **THIS IS THE FIRST NON-DEFERRED ITEM NOW.** Sample rules questions
   across the KB + citation spot-checks; confirm every non-deferred `[x]` box is sound. (Manifest "Finalize"
   box, near line ~236.)
2. **PHASE 2 tooling (2a–2c)** — Session/Module Creator, Character Creation Helper, DM Assistant Agent
   (see "PHASE 2" section below). Build on top of the finished KB; 2c consumes the new `dm-toolkit/`.

**END-TO-END VERIFICATION — DONE ✅ (2026-06-12, PASS / 0 defects).** The reference KB is COMPLETE and verified
(report in `$CLAUDE_JOB_DIR/tmp/e2e-verification.md`). **PHASE 2 STARTED:** **2a Session/Module Creator — DONE ✅**
(`tools/session-creator.md` + `modules/`; guided-markdown, draft-then-refine, one-shot only, stat blocks inlined;
dry-run-verified). **2b Character Creation Helper — DONE ✅** (`tools/character-creator.md` + `characters/`;
guided-markdown, big-picks **chooser** `_CHOOSER.md` → guided detail choices → personalized **level-1
packet**; markdown-first [HTML follow-up], dual-audience [new players + vets]; dry-run-verified, 2 full
characters). **2c live DM Assistant — DONE ✅** (`tools/dm-assistant.md` + `sessions/`; guided-markdown
RUNTIME playbook — walks a 2a module scene-by-scene, **full combat conductor** [initiative + monster HP +
per-turn tactics + conditions + morale], resolves vs the 2b party, **persistent `sessions/<name>.md` state
file** [pause/resume]; dry-run-verified vs the real Skeleton block). **PHASE 2 CORE (2a + 2b + 2c) COMPLETE
✅.** Remaining = agreed follow-ups only: 2b HTML/levels 2–5/pre-gens, **2d campaign mode**, optional spells
L6–9 & CR 3–5. (Full **campaign mode** is captured as long-term **backlog item 2d** — the PHASE 2 /
LONG-TERM BACKLOG section.)

Optional / not blocking:
- **Spells `level-6.md … level-9.md`** (~155 spells) — still DEFERRED; use the **SPELL-FILE BUILD RECIPE**
  below if Josh wants the high-level spells later.
- **Finish CR 3–5 monster completeness** (~20+ MM monsters not transcribed — see ⚠️ CR 3–5 manifest note).
- Refresh DMG `README.md` build-status (root `CLAUDE.md` updated this session for spells + DMG).

Phase tally: PHB chapters + classes (12) + **cantrips/L1/L2/L3/L4/L5 spells done**; all MM indexes +
stat blocks CR 0–5 done; all DMG files done; PHB appendices done. When resuming: ignore `- [-]` deferred items.

---

## What we're building & why

Josh is a first-time DM running a 5e (2014) one-shot. Goal: a markdown knowledge base in
`~/git/dnd/` so Claude can answer rules questions fast — for players and for DM rulings. The three
core rulebook PDFs are broken down into per-book folders of per-chapter markdown files, with a root
`CLAUDE.md` router. Full plan archived at `~/.claude/plans/fancy-imagining-wolf.md` (ephemeral —
this file is the durable copy).

## Source PDFs (all OCR'd scans, working text layer)

| Book | File | Physical pp | Printed→physical offset |
|------|------|-------------|--------------------------|
| Player's Handbook | `Player's Handbook.pdf` | 293 | **DRIFTS** (+4 early → ~+27 late; scan is missing pages) |
| Dungeon Master's Guide | `Dungeon Master's Guide.pdf` | 320 | **0** (physical = printed) |
| Monster Manual | `Monster Manual.pdf` | 354 | **+1** (physical = printed + 1) |

**PHB has NO constant offset** — locate content by heading/folio, never by arithmetic.

## Regenerate the `.build/` text dumps (if `.build/*.txt` missing)

```bash
cd ~/git/dnd
gen () { pdftotext "$1" - 2>/dev/null | awk 'BEGIN{RS="\f";pg=0}{pg++;folio="?";n=split($0,L,"\n");
  for(i=1;i<=n;i++){s=L[i];gsub(/^[ \t]+|[ \t]+$/,"",s);if(s~/^[0-9]{1,4}$/){folio=s;break}}
  printf("\n@@@ PAGE physical=%d folio=%s @@@\n%s",pg,folio,$0)}' > ".build/$2.txt"; }
mkdir -p .build
gen "Player's Handbook.pdf" phb
gen "Dungeon Master's Guide.pdf" dmg
gen "Monster Manual.pdf" mm
```

Each page in a dump is prefixed `@@@ PAGE physical=N folio=X @@@`. **Find content by grepping for a
heading** (e.g. `grep -n -i "grappl" .build/phb.txt`), then read the surrounding lines. Use the
nearest `folio=` value for the printed-page citation (the book's own page number).

`.build/` is a regenerable cache; safe to delete. (If this folder is ever git-init'd, gitignore it.)

---

## How to build each file (conventions)

**Content pattern** for every chapter `.md`:
1. One-line summary of what it covers.
2. Key rules/mechanics as clean prose + markdown tables — **rewritten from the OCR text and
   corrected**, NOT raw OCR paste.
3. Inline page pointers, e.g. `Grappling — PHB p.195`.
4. Section-level "full detail: PHB p.X–Y" pointers so Claude can `pdftotext` exact pages later.
5. A short "Common questions" FAQ where useful.

**Rules:** summaries/tables/pointers only — do NOT paste large verbatim copyrighted text (spell
descriptions, full stat blocks). Cite the printed page; point back to the PDF for full text.

**Subagents:** fan out writing to writer subagents (one per chapter-group) to save main-session
tokens. Give each a self-contained brief: dump path, heading(s) to find, target file path, this
content pattern, and the offset note for citations.

### ACCURACY REVIEW GATE — mandatory before ticking any box
A file is "done" only after an **independent reviewer** (a different subagent/pass than the writer)
re-reads the cited source pages in the dump and verifies:
- Rule correctness (no invented rules, no edition drift, no OCR number errors)
- Numbers & tables exact (XP thresholds, DCs, ranges, durations, condition effects, CRs, prices)
- Page citations actually contain the cited content
- No verbatim over-copy

Apply any fixes, THEN flip the checkbox to `- [x] (verified YYYY-MM-DD)`. A checked box = verified.

---

### SPELL-FILE BUILD RECIPE (reusable — learned building cantrips/L1/L2; use for L3–L9)
Findings from the L2 writer+reviewer that make spell files **faster and more accurate**:
- **Where the descriptions live in `.build/phb.txt`:** the alphabetical spell descriptions run
  ~**lines 29,600–39,172** (Aid's body ≈ line 29,681; Zone of Truth ends ≈ 39,170; "Appendix A:
  Conditions" starts ≈ 39,173 / physical p.267). Entries of ALL levels are **interleaved
  alphabetically**, so scan A–Z, not a contiguous per-level block.
- **Tables vs. descriptions:** lines ~28,100–29,600 are the class/level spell-LIST tables, NOT
  descriptions — don't quote those (e.g. "Scorching Ray" appears at 29,019 in a table but its real
  entry is at 37,127).
- **Enumerate a level fast:** grep the school marker with the OCR space, e.g. `grep -ni "2 nd-level"`
  (or `"3 rd-level"`, `"4 th-level"`); it cleanly catches ~40+/level. The ~19 it splits on are found
  by reading the alphabetical neighborhood.
- **Folio is useless here** (`folio=?` almost always). Get the **printed** page from physical page +
  this drifting offset (anchors: Aid physical 192 = printed 211; Conditions physical 267 = printed
  290; offset rises ~+1 every ~18 physical pages):
  | physical | +offset → printed |
  |----------|-------------------|
  | ~192–216 | +19 |
  | ~217–225 | +20 |
  | ~227–248 | +21 |
  | ~248–264 | +22 |
  | ~264–267 | +23 |
  Two-column scan means a heading can OCR just before/after its page tag — confirm by **alphabetical
  neighbor order**, not the tag alone.
- **OCR pitfalls (so greps don't false-miss):** intra-word letter-spacing ("Casting Tim e",
  "C harism a", "2 nd-level"); multi-word headings + stat lines split across columns ("Cordon / of /
  Arrows") — Read ~120-line windows around those, not 40; digit/letter confusion (**"1"→"l"**: "Id4",
  "1dlO") — always sanity-check dice against canon. Known harmless source typo: Animal Messenger reads
  "3nd level" (means 3rd).
- **NONE of printed 211–289 is missing from this scan** — every L2 description was present and legible
  (the generic "scan missing pages" caveat did NOT bite the spell range; don't assume a spell is absent).
- **Bash-sandbox gotcha:** commands with `>`/`<` (e.g. `awk '$1 > 33000'`) and some anchored regex /
  `sed -n 'A,Bp'` get blocked. Use the **Read tool with offset/limit** for line ranges and grep
  without redirection-looking metacharacters.
- **Workflow that worked:** writer subagent drafts from canon + grounds numbers in the dump →
  **independent reviewer subagent** re-reads cited pages and writes findings to a FILE
  (`.build/<file>-review.md`) instead of echoing big spell tables (a content-filter has falsely
  tripped on large spell-name dumps) → main session applies fixes and ticks the box.

## FILE MANIFEST (the checklist)

Legend: `- [ ]` not done · `- [~]` written, not yet verified · `- [x] (verified DATE)` done · `- [-]` DEFERRED (intentionally skipped for now — see "▶ NEXT UP").
Printed page ranges are guidance; locate by heading in the dump.

### Scaffold
- [x] `PROGRESS.md` — this tracker (2026-06-06)
- [x] `CLAUDE.md` — FINALIZED: full topic→file index + offset table + build-status section (2026-06-07)
- [x] folder structure: players-handbook/ dungeon-masters-guide/ monster-manual/ quick-reference/ (2026-06-06)
- [x] `.build/` annotated text dumps: phb.txt, dmg.txt, mm.txt (2026-06-06)

### Player's Handbook  (dump: `.build/phb.txt`; offset DRIFTS — find by heading)
- [x] `players-handbook/README.md` — chapter map + offset note (verified 2026-06-06)
- [x] `players-handbook/01-creating-a-character.md` — Ch.1, printed p.11–15 (verified 2026-06-06)
- [x] `players-handbook/02-races.md` — Ch.2, printed p.17–44 (verified 2026-06-06)
- [x] `players-handbook/03-classes.md` — Ch.3 overview: class table, proficiency bonus, multiclass pointer (p.45) (verified 2026-06-06)
  - FULL DETAIL → `players-handbook/classes/` one file per class (full features by level + all subclasses):
  - [x] `classes/barbarian.md` p.46 (verified 2026-06-06) · [x] `classes/bard.md` p.51 (verified 2026-06-07) · [x] `classes/cleric.md` p.56 (verified 2026-06-07)
  - [x] `classes/druid.md` p.64 (verified 2026-06-07) · [x] `classes/fighter.md` p.70 (verified 2026-06-06) · [x] `classes/monk.md` p.76 (verified 2026-06-06, citations fixed)
  - [x] `classes/paladin.md` p.82 (verified 2026-06-07) · [x] `classes/ranger.md` p.89 (verified 2026-06-07) · [x] `classes/rogue.md` p.94 (verified 2026-06-06)
  - [x] `classes/sorcerer.md` p.99 (verified 2026-06-07) · [x] `classes/warlock.md` p.105 (verified 2026-06-07) · [x] `classes/wizard.md` p.112 (verified 2026-06-07)
- [x] `players-handbook/04-personality-and-background.md` — Ch.4, printed p.121–142 (verified 2026-06-06)
- [x] `players-handbook/05-equipment.md` — Ch.5, printed p.143–162 (verified 2026-06-06; fixed alchemist's fire dmg + selling-treasure citation)
- [x] `players-handbook/06-customization-feats-multiclassing.md` — Ch.6, printed p.163–170 (FULL feat list) (verified 2026-06-06)
- [x] `players-handbook/07-using-ability-scores.md` — Ch.7, printed p.173–180 (verified 2026-06-06)
- [x] `players-handbook/08-adventuring.md` — Ch.8, printed p.181–188 (verified 2026-06-06)
- [x] `players-handbook/09-combat.md` — Ch.9, printed p.189–198 (verified 2026-06-06)
- [x] `players-handbook/10-spellcasting.md` — Ch.10, printed p.201–206 (rules of magic) (verified 2026-06-06)
- [x] `players-handbook/11-spells.md` — Ch.11 overview + how to read a spell entry (p.201–207) (verified 2026-06-06)
  - FULL DETAIL → `players-handbook/spells/`:
  - [x] `spells/spell-index.md` — 369 rows / 360 unique spells (Name|Level|School|Classes|Page) (verified 2026-06-07; added 20 missing PHB spells — see log)
  - [x] `spells/cantrips.md` (27 spells) (verified 2026-06-07, clean) · [x] `spells/level-1.md` (62 spells) (verified 2026-06-07; 2 page cites fixed) · [x] `spells/level-2.md` (59 spells) (verified 2026-06-07; independent reviewer 59/59, 0 fixes) · [x] `spells/level-3.md` (50 spells) (verified 2026-06-11; in-session dump check — fixed Wind Wall 3d6→3d8, Spirit Guardians "difficult terrain"→speed-halved)
  - [x] `spells/level-4.md` (35 spells) (verified 2026-06-11; in-session dump check — fixed Phantasmal Killer end→start-of-turn save, Faithful Hound leash 30→100 ft + bite trigger, Freedom of Movement underwater clause) · [x] `spells/level-5.md` (42 spells) (verified 2026-06-11; in-session dump check — fixed Insect Plague trigger to "enters/ends turn"; Animate Objects size table dump-confirmed) · [-] `spells/level-6.md` · [-] `spells/level-7.md`  (L6+ still DEFERRED — see NEXT UP)
  - [-] `spells/level-8.md` · [-] `spells/level-9.md`  (DEFERRED — full mechanical detail per spell; resume after the DMG)
- [x] `players-handbook/appendices.md` — Appx A Conditions p.290–292, B Gods 293–299, C Planes 300–303, D Creatures 304–311 (verified in-session 2026-06-08; 14-condition list + exhaustion, 8 pantheons, planes overview, 25-creature Appx D list all correct; creature-stats p.304–311 confirmed via PHB index)

### Dungeon Master's Guide  (dump: `.build/dmg.txt`; offset 0)
- [x] `dungeon-masters-guide/README.md` — chapter map (verified 2026-06-08; chapter pages checked vs dump TOC)
- [x] `dungeon-masters-guide/01-02-world-building.md` — Ch.1 p.9–42, Ch.2 p.43–70 (verified 2026-06-08; in-session spot-check confirmed Great Wheel / Outer Planes structure + River Styx chain, on top of writer's verification of 16 planes+alignments p.57, tiers 1-4/5-10/11-16/17-20, settlement bands, map scales)
- [x] `dungeon-masters-guide/03-creating-adventures.md` — Ch.3 p.71–88 (ENCOUNTER BUILDING/XP p.81–85) (verified 2026-06-08; reviewer clean, all 100 table cells + worked example + cites checked)
- [x] `dungeon-masters-guide/04-npcs.md` — Ch.4 p.89–98 (verified 2026-06-08; reviewer clean — Loyalty rule, villain d8/d20/d8 tables, Death Domain + Oathbreaker features/spells all exact, hireling wages match PHB; 3 optional polish notes left, non-blocking)
- [x] `dungeon-masters-guide/05-adventure-environments.md` — Ch.5 p.99–124 (traps, hazards) (verified 2026-06-08; reviewer clean — 10/10 sample traps, 8/8 hazards, Trap-DC & Damage-Severity tables exact)
- [x] `dungeon-masters-guide/06-between-adventures.md` — Ch.6 p.125–132 (downtime) (verified 2026-06-08; reviewer — 6 fixes applied: Maintenance Costs +Farm row, Inn-rural→10gp/5/10, Trading-post untrained→2, and 4 page-cites 124→125; 12 downtime tables exact; Maintenance hireling columns remain OCR-uncertain [caveated in-file]; Crime/Gambling/Pit-fighting/etc. correctly flagged as XGE, not 2014 DMG)
- [x] `dungeon-masters-guide/07-treasure-and-magic-items.md` — Ch.7 p.133–234 (tables + magic item index) (verified 2026-06-08; in-session confirmed attunement limit=3, gem tiers [10gp ladder], art tiers [25/250/750/2500/7500]; writer self-verified spell-scroll DC table [13/13/13/15/15/17/17/18/18/19 — canonical; this table is OCR-mangled in the dump] + rarity/potion/charges rules; ~220-item index writer-verified with self-corrected page cites, spot-verified [full per-item re-check deferred, same standard as monster-index])
- [x] `dungeon-masters-guide/08-running-the-game.md` — Ch.8 p.235–262 (DCs, social, resting, madness, disease) (verified 2026-06-08; reviewer, 1 fix applied: poison-count note 15→14 + internal-phrase cleanup; DCs/social/chases/diseases/14 poisons/madness all exact; Basic Poison kept with PHB-source label)
- [x] `dungeon-masters-guide/09-dm-workshop.md` — Ch.9 p.263–289 (optional rules) (verified 2026-06-08; in-session spot-check confirmed Hero Points [5+½lvl, +1d6, death-save flip] + rest variants [Epic 5min/1hr, Gritty 8hr/7days] exact, on top of writer's full self-verification; range corrected 282→289; flanking/grid cited to ch.8 p.251, identify-item to ch.7 p.136)
- [x] `dungeon-masters-guide/appendices.md` — A Random Dungeons p.290, B Monster Lists p.302 (by environment + CR), C Maps p.310, D Inspiration p.316 (verified in-session 2026-06-08; pointer file — App A/B start pages + 11 environment headings confirmed vs dump; cross-links MM indexes. Note: actual App D is "DM Inspiration," not "Tables")

### Monster Manual  (dump: `.build/mm.txt`; offset +1)
- [x] `monster-manual/README.md` — how MM is organized + how to read a stat block + CR→XP table (verified 2026-06-07)
- [x] `monster-manual/monster-index.md` — alphabetical name → printed page (verified 2026-06-07)
- [x] `monster-manual/monsters-by-cr.md` — CR-sorted list (verified CR 0–7 row-by-row; fixed Goblin CR 1/8→1/4 + Goblin Boss sort) (2026-06-07)
- [x] `monster-manual/monsters-by-type.md` — grouped by creature type (14 types; spot-verified) (2026-06-07)

#### Monster STAT BLOCKS (NEW phase — Josh 2026-06-08: indexes alone don't give the actual stats)
FULL DETAIL → `monster-manual/stat-blocks/` — the mechanical stat block per monster in our own structured
format (AC/HP/speed, the six ability scores, skills/senses/languages, CR+XP, traits, actions), flavor
paraphrased to ≤1 line (NO verbatim prose). Offset **+1** (physical = printed+1); locate by name in
`.build/mm.txt`, cite printed page (from `monsters-by-cr.md`). **Scope: CR 0–5 first** (the one-shot range).
- [x] `stat-blocks/cr-0.md` (**31** — COMPLETE) (verified 2026-06-09/11; +Myconid Sprout) · [x] `stat-blocks/cr-1-8.md` (**22** — COMPLETE) (verified 2026-06-09/11; Noble pp 10→12; +Tribal Warrior, +Twig Blight) · [x] `stat-blocks/cr-1-4.md` (**42** — COMPLETE) (verified 2026-06-11; Tridrone→cr-1-2; Acolyte pp 10→12; +Giant Badger, +Kenku, +Riding Horse) · [x] `stat-blocks/cr-1-2.md` (**35** — COMPLETE) (verified 2026-06-11; +Tridrone, +Deep Gnome, +Gas Spore, +Giant Goat, +Giant Sea Horse, +Giant Wasp, +Myconid Adult, +Piercer, +Rust Monster)
- [x] `stat-blocks/cr-1.md` (**34** — COMPLETE) (verified 2026-06-11; Pentadrone→cr-2, +Quadrone, +Brown Bear, +Half-Ogre, +Quaggoth Spore Servant, +Swarm of Quippers) · [x] `stat-blocks/cr-2.md` (**49** — COMPLETE) (verified 2026-06-11; +Pentadrone [stats corrected: Perception +4/pp 14, CR 2], +Nothic, +Carrion Crawler, +Gargoyle, +Gelatinous Cube, +Myconid Sovereign, +Orog, +Quaggoth; Cult Fanatic pp 10→11, Merrow pp 12→10, Quaggoth pp 10→11) · [x] `stat-blocks/cr-3.md` (25 — curated) (verified 2026-06-11; Nothic→cr-2, +Nightmare) · [x] `stat-blocks/cr-4.md` (16 — curated) (verified 2026-06-11) · [x] `stat-blocks/cr-5.md` (24 — curated) (verified 2026-06-11)
- **Total: 278 content-verified CR 0–5 stat blocks.** Mechanical sweep (ability mods / HP averages / XP-by-CR / passive Perception) = **0 internal errors**; modron + mephit + dinosaur interleaves verified vs the dump; both index files reconcile row-for-row with the stat blocks for CR 0–2.
- ✅ **CR 0–2 NOW COMPLETE & EXHAUSTIVE** (counts match canonical MM totals: 31 / 22 / 42 / 35 / 34 / 49). Josh chose 2026-06-11 to fully complete CR 0–2 (added 23 missing blocks) and keep CR 3–5 curated.
- ⚠️ **CR 3–5 still CURATED, not exhaustive** (~20+ MM monsters not yet transcribed — e.g. Displacer Beast, Spectator, Water Weird, Killer Whale, Hobgoblin Captain [CR 3]; Gnoll Fang of Yeenoghu, Gelatinous-? [CR 4]; Cambion, Umber Hulk, Giant Shark, Barlgura, Drow Elite Warrior, Red Slaad, Mezzoloth, Otyugh [CR 5]). cr-3/4/5 headers still say "every CR X monster" — soften to "common CR X monsters" OR expand if Josh wants the upper one-shot range complete too.
- CR 6+ later if Josh wants (monsters-by-cr.md already indexes through CR 10 + notable higher).

### Quick reference (cross-book at-the-table cheat sheets)
- [x] `quick-reference/conditions.md` — the 14 conditions (source: PHB Appx A p.290) (verified 2026-06-06)
- [x] `quick-reference/actions-in-combat.md` — action types + standard actions (PHB p.189–193) (verified 2026-06-06)
- [x] `quick-reference/death-and-dying.md` — death saves, stabilizing (PHB p.197) (verified 2026-06-06)
- [x] `quick-reference/difficulty-classes.md` — DC guidelines + skills (PHB p.174, DMG p.238) (verified 2026-06-06)
- [x] `quick-reference/encounter-building.md` — XP thresholds + multipliers (DMG p.82) (verified 2026-06-06, table checked row-by-row)
- [x] `quick-reference/new-dm-one-shot-tips.md` — pacing, rulings-not-rules, safety tools (verified 2026-06-06)
- [x] `quick-reference/one-shot-formula-mmos.md` — Pointy Hat's Modular Method for One-Shots, as a
  fillable template (added 2026-06-07). NOTE: this is Josh's own design framework (he pasted it in), NOT
  a WotC rulebook summary — so it is NOT subject to the PDF accuracy-review gate; reproduced faithfully
  (only fix: source had two "Step 5" headings, renumbered Endings→6 and Hook→7). Linked in CLAUDE.md.

### Finalize
- [x] `CLAUDE.md` — complete topic→file index + offset table + how-to-answer rules + build-status (2026-06-07)
- [x] End-to-end verification (sample questions, citation spot-checks); confirm all boxes verified
  **(2026-06-12 — PASS, 0 defects.** (A) Structure/links: 92 md files, all folder counts match (races 9 /
  backgrounds 13 / classes 12 / spells 7 / dm-toolkit 6 / stat-blocks 9 files), **0 broken markdown links**,
  all CLAUDE.md refs resolve, **stat-block total = 278 confirmed** (281 `###` headers − 3 nav stubs in cr-1),
  spell counts exact (27/62/59/50/35/42). (B) Citation spot-checks vs dumps all confirmed: cover +2/+5, full
  death-save rules, exhaustion 6 levels, carry = Str×15, dwarf/elf traits, Goblin AC15/CR¼, attunement=3,
  trap DC table 10-11/12-15/16-20, CR→XP 1/4=50…3=700. (C) 14 conditions consistent across conditions.md &
  appendices.md; spell-save-DC formula consistent; **14 sample at-the-table questions all route to a file
  containing the answer.** Updated CLAUDE.md Build-status to reflect races/backgrounds/dm-toolkit. Full report:
  `$CLAUDE_JOB_DIR/tmp/e2e-verification.md`.)

---

## Build order
1. Scaffold (done). 2. **PHB pilot** — build all PHB files + quick-reference, PAUSE for Josh to
review format. 3. DMG (parallel subagents). 4. MM index files. 5. Finalize CLAUDE.md + verify.

## PHASE 1.5 — DEPTH / ENRICHMENT PASS (added 2026-06-11, Josh)

**Why:** doing the spells made it clear several earlier files **over-summarized** the source. The first
pass optimized for "answer a rules question fast"; Josh now also wants the KB to support **immersive
character creation with every option available** (players pick race/class/background with full detail) and
to preserve the **rich early-chapter content** (DMG world-building/NPCs/running-the-game; MM "how to use
monsters") that the summaries flattened. Goal of this pass: re-expand the called-out files to lookup- and
table-grade detail, **without** pasting large verbatim copyrighted prose (same accuracy gate + page cites
as the rest of the build).

**Decisions locked with Josh (2026-06-11):**
- **Races and backgrounds become folders, one file per entry** (mirroring `classes/`). The old single files
  (`02-races.md`, `04-personality-and-background.md`) become short **overview/index** files that point into
  the new folders and keep the cross-cutting material.
- **Class spell lists: cantrips–L5 only** — list the spells each class can choose at the levels we have full
  mechanics for (link to `spells/cantrips.md … level-5.md`); for L6–L9, point to `spells/spell-index.md` /
  the PDF (those spell files are still `[-]` deferred). Don't enumerate L6–L9 spell-by-spell.
- Build in **batches**; update this tracker after each file (same rule as the rest of the build).

### Checklist — player-facing (character creation) — DO FIRST
- [x] `players-handbook/races/` **NEW FOLDER**, one file per race (full traits, ALL subraces, age/alignment/
  size/speed, languages, sample names, flavor/lore): `dwarf.md` (Hill/Mountain), `elf.md` (High/Wood/Drow),
  `halfling.md` (Lightfoot/Stout), `human.md` (+ Variant Human feat option), `dragonborn.md`,
  `gnome.md` (Forest/Rock), `half-elf.md`, `half-orc.md`, `tiefling.md`. (PHB Ch.2, printed p.17–44.)
  **(verified 2026-06-11** — all 9 written by 3 writer subagents + in-session dump verification. Mechanics
  carried over EXACTLY from the verified `02-races.md`; flavor/lore/roleplay paraphrased (no verbatim prose);
  sample names de-spaced from the dump (Dragonborn "Flavilar"→**Havilar** OCR fix; Gnome female list
  reassembled across an interleaved sidebar); Random Height & Weight rows verified vs PHB p.121 table.)
- [x] `players-handbook/02-races.md` → trimmed to an **overview/index** (race table: ASIs/size/speed +
  how to read a race entry) that links to `races/`. **(verified 2026-06-11** — kept the summary table +
  corrected the darkvision note to flag that humans/halflings/dragonborn have NONE; added a race-files
  index + "how to read a race entry" + choosing-a-race guidance; per-race detail now lives in `races/`.)
- [x] Classes (all 12, `classes/*.md`) — ADDed to each: (a) the **class's cantrip–L5 spell list** by level
  (names, linked to the built spell files) for casters; (b) a **flavor/lore intro** ("what is a …", role,
  fantasy); (c) confirm every player choice point is spelled out. (Non-casters get flavor + choices only.)
  **(verified 2026-06-11** — ADD-only via 4 writer subagents; flavor sections paraphrased + placed at line 9
  after Source. Cantrip–L5 spell lists were **derived deterministically** from the verified `spell-index.md`
  (script → `.build/class-spell-lists.md`) and a programmatic diff of all 8 caster files vs that artifact
  returned **0 discrepancies** (counts cross-check canonical PHB totals; paladin/ranger correctly start at
  L1, no cantrips). fighter→Eldritch Knight + rogue→Arcane Trickster got scoped wizard-list notes;
  barbarian/monk got flavor only. Existing verified mechanics confirmed byte-for-byte intact.)
- [x] `players-handbook/backgrounds/` **NEW FOLDER**, one file per background (13: Acolyte, Charlatan,
  Criminal, Entertainer, Folk Hero, Guild Artisan, Hermit, Noble, Outlander, Sage, Sailor, Soldier, Urchin)
  — skills, tool/language grants, **equipment package**, full **feature text**, and the **suggested
  trait/ideal/bond/flaw tables**. (PHB Ch.4, printed p.125–141.) **(verified 2026-06-12** — a prior session
  had written 9 of 13 unverified; this session WROTE the missing 4 [entertainer, hermit, noble, urchin] from
  the dump and ran the independent accuracy gate over ALL 13 against `.build/phb.txt`. **0 errors found.**
  All skills/tools/languages/equipment-gp/feature names confirmed exact; sub-tables verified [Criminal &
  Soldier & Sage Specialty d8, Charlatan Favorite Schemes d6, Entertainer Routines d10, Folk Hero Defining
  Event d10, Guild Business d20, Outlander Origin d10]; variants present [Spy, Gladiator, Knight+Retainers,
  Guild Merchant, Pirate+Bad Reputation]. **PHB drifts here** — physical≠printed [e.g. Entertainer is on
  physical p.122 but printed p.130]; cited printed pages from the **back-of-book index**, not arithmetic.
  Feature/flavor text paraphrased; the trait/ideal/bond/flaw + sub-tables are reproduced per Josh's PHASE 1.5
  request.)
- [x] `players-handbook/04-personality-and-background.md` → keep cross-cutting content (character details,
  alignment, languages, inspiration, the personality framework, customizing-a-background) + **index** to
  `backgrounds/`. **(verified 2026-06-12** — file already retained all cross-cutting content + a 13-row
  overview table; this session turned that table into a real **index** by linking every background name to
  its `backgrounds/*.md` file, added a pointer line, and corrected the page column to the full printed
  ranges from the index [e.g. Criminal 129–130, Sage 137–138, Soldier 140–141].)
- [x] `players-handbook/10-spellcasting.md` — deepen the **rules of magic** intro (slots, known vs prepared,
  components, ritual, concentration, combining effects, casting in armor, areas of effect) — NOT spell
  descriptions. (PHB Ch.10, printed p.201–206.) **(verified 2026-06-12** — ADD-only deepening of the
  already-[x] file [original facts left intact + re-confirmed]. Added 4 genuinely-missing lookup pieces,
  each grounded in `.build/phb.txt` Ch.10: a **Range** section [feet / Touch / Self / "Self (15-ft cone)" /
  effects-not-limited-by-range], the **8 Schools of Magic** table [w/ the "no rules of their own but features
  reference them" caveat], fuller **spellcasting-focus/component-pouch** detail [arcane/druidic focus, holy
  symbol — cross-cited to Ch.5 p.150–151, dump-confirmed] + the **one-free-hand** S+M/weapon+shield problem,
  and a proper **Casting in Armor** rule [must be proficient or you can't cast]. Page cites kept canonical
  [Components 203, Concentration 203, Range 202–203, Schools 203, Areas 204–205, Combining 205] — verified vs
  the dump's Ch.10 text, NOT by physical-page arithmetic. Added 5 FAQ entries [range-Self, free-hand,
  total-cover, schools]. Source line bumped 201–205 → 201–206.)

### Checklist — DM RUN-THE-GAME TOOLKIT (so Claude can GENERATE live) — DO SECOND
**Reframed 2026-06-11 (Josh):** the goal is NOT to transcribe DMG chapters as thick reference prose. It's to
give Claude enough structured material + pointers to **generate detailed, grounded content on demand while
co-running the game** — "here's a room/scenario → give me NPCs, their goals, a puzzle, a monster encounter,
the avenues players can take, dialog on request, the sensory description of the place." Build **generation-
ready toolkit files** (new `quick-reference/dm-toolkit/` folder) that compile the DMG/MM tables + cross-links
Claude needs to improvise. This is also the data substrate for PHASE 2c (live DM Assistant). Each toolkit
file = tight generative scaffolds + dice tables + "pull the stat block / rule from <file>" pointers, NOT
long copyrighted prose.
- [x] `quick-reference/dm-toolkit/npc-generator.md` — spin up an NPC fast: name lists (by race/culture),
  appearance, mannerisms, talents, interaction traits, ideals/bonds/flaws, occupation, secret/plot hook,
  voice — + which stat block to attach (MM Appendix-B NPCs / our `stat-blocks/` CR files). Sources: DMG ch.4
  (p.89–98) + DMG appendix tables + PHB Ch.4 personality tables. **(built 2026-06-12** — generation scaffold:
  2-speed process + original fast-gen menus [face/voice/want/attitude/secret] + 10-element profile pointer +
  name seeds → races/ files; **stat-block attach table verified row-for-row vs `stat-blocks/`** [all 18 NPC
  CRs/file locations correct; Mage→PDF p.348 & Assassin→p.343 fixed against monster-index]. Original menus +
  pointers, no DMG-table re-copy.)
- [x] `quick-reference/dm-toolkit/encounters-and-monsters.md` — pick & run a fight: monsters by **environment**
  (DMG App.B lists) + CR, encounter budgets (links `encounter-building.md`), simple tactics, mixing groups,
  morale; links the MM indexes + `stat-blocks/` (CR 0–5 built). **(built 2026-06-12** — 5-step build-to-budget
  spine [links the full tables in `encounter-building.md`, doesn't re-copy] + a **curated CR 0–5 environment
  quick-pick** [11 terrains × low/mid/tough] — **every monster's CR cross-checked against `monsters-by-cr.md`**
  — + combat-role mixing table, tactics, and the Morale optional rule [links `09-dm-workshop.md`].)
- [x] `quick-reference/dm-toolkit/traps-puzzles-hazards.md` — trap/hazard frameworks (links DMG ch.5
  `05-adventure-environments.md`) + reusable **puzzle** design patterns + skill-challenge framing.
  **(built 2026-06-12** — trap-in-5-lines scaffold [severity DC/damage spine pulled from the verified DMG
  table in `05-adventure-environments.md`] + hazard pointer; the new value is original **7 puzzle patterns**
  [riddle/sequence/matching/hidden/manipulation/info-gather/sacrifice w/ three-clue + fail-forward] and a
  **skill-challenge** frame [X successes before 3 fails] — neither is in the 2014 DMG.)
- [x] `quick-reference/dm-toolkit/environments-and-dressing.md` — describe a place in detail on demand:
  sensory/lighting/sound/smell prompts, dungeon-dressing & "what's in the room" tables, weather, wilderness
  & settlement features. Sources: DMG App.A (random dungeon/dressing) + ch.5. **(built 2026-06-12** —
  "describe in 3 layers" method + original sensory menus [light/sound/smell/air/underfoot] + 2× d10 dressing
  tables + weather quick-table [w/ obscured/vision effects] + wilderness/settlement seeds; **light/vision
  rule restated from `08-adventuring.md`/`conditions.md`** [lightly/heavily obscured, darkvision]. Original
  prompts + pointers to DMG App.A dressing tables, no large repro.)
- [x] `quick-reference/dm-toolkit/scenes-goals-and-avenues.md` — build a scene/quest beat: goals,
  complications, clues, branching **avenues** the party can take, pacing/transitions; links DMG ch.3
  `03-creating-adventures.md` + the MMOS one-shot framework. **(built 2026-06-12** — scene anatomy
  [goal/obstacle/stakes+clock/exit] + an **8-avenue** table [fight/stealth/social/trickery/magic/knowledge/
  skill/avoid] mapped to the other toolkit files + three-clue/fail-forward leads + d8 complications +
  pacing/transitions; **cross-linked to the MMOS steps verified vs `one-shot-formula-mmos.md`** [Two Paths,
  Key, Encounters mix, Showdown, Endings, Hook].)
- [x] `quick-reference/dm-toolkit/social-and-dialog.md` — run conversations: social-interaction rules &
  attitudes (DMG ch.8 p.244–246), reaction framing, and **dialog/voice generation hooks** so Claude can
  produce in-character NPC lines when Josh asks. **(built 2026-06-12** — 4-step social procedure +
  **Conversation Reaction table restated from the verified `08-running-the-game.md`** [attitude × DC 0/10/20,
  exact] + Persuasion/Deception/Intimidation guidance; the new value is a **voice-in-5-seconds** dial table +
  **dialog-generation hooks** [want+attitude+secret → line patterns: deflect/bargain/reveal-with-catch/color]
  + 7 grab-and-go voice archetypes.)
- [x] Light touch-ups to the underlying chapter files **only where a toolkit needs a deeper anchor**
  (`dmg/04-npcs.md`, `dmg/08-running-the-game.md`, `dmg/01-02-world-building.md`, MM `README.md` "using
  monsters") — add the specific tables/pointers the toolkits reference; not a full repro of the chapters.
  **(reviewed 2026-06-12 — NO new anchors needed.** Audited every toolkit cross-link: the anchors the six
  files reference already exist in the verified chapter files — `04-npcs.md` (ten-element + villain +
  Loyalty tables), `08-running-the-game.md` (social attitudes + Conversation Reaction table),
  `05-adventure-environments.md` (trap DC/damage + sample traps + hazards), `appendices.md` (App A dressing,
  App B by-environment), `09-dm-workshop.md` (morale), `encounter-building.md` (XP math), the MM indexes +
  `stat-blocks/`. The toolkits were written to point at what's already built, so no chapter edits were
  required. **Done instead:** linked `dm-toolkit/` + the `races/`/`backgrounds/` folders into root
  `CLAUDE.md` (topic index + Layout) for discoverability.)
- [x] `players-handbook/08-adventuring.md` — deepen the player-facing bits that come up in play (travel pace
  & journeys, vision/light & exploration, full resting rules, environmental hazards). (PHB Ch.8, p.181–188.)
  **(verified 2026-06-12** — ADD-only on the already-[x] file [travel pace, jumping, falling, suffocation,
  vision/light incl. blindsight/darkvision/truesight, food/water, resting were already lookup-grade and left
  intact]. Real gap filled: a new **"Activity while traveling"** section [marching order; noticing threats w/
  fast-pace −5 & slow-pace stealth; the **Navigate/Draw-a-Map/Track/Forage** travel-jobs table — all Wis
  (Survival), grounded in `.build/phb.txt` p.182–183] + a **"Between adventures"** pointer section [lifestyle
  bands → `05-equipment.md`, the 5 PHB downtime activities → `06-between-adventures.md` — cross-linked, not
  duplicated] + 3 FAQ. Source line 181–187 → 181–188. **OCR note:** Ch.8 sits at physical p.~165–169, NOT the
  185-ish the chapter-10 drift would suggest — the PHB scan's page-tags under-count badly here, so cite by
  heading/canon, never physical+offset.)

### Process note for this pass
Same writer→verify→tick gate. Ground numbers in the dumps (`.build/phb.txt`, `dmg.txt`, `mm.txt`); cite
printed pages (PHB drifts — find by heading; DMG offset 0; MM +1). Re-deepening a previously-`[x]` file does
NOT un-verify the original facts — it adds detail; re-verify the new content before re-ticking.

---

## PHASE 2 — Tooling to build AFTER the KB is complete (agreed with Josh 2026-06-07)

Once the reference KB is finished + verified, build tools *on top of it*. The KB is the data layer;
these are the apps. Three deliverables:

- [x] **(2a) Session/Module Creator** — a skill (or guided markdown) for PREP-TIME. Builds **modular
  session sections for BOTH one-shots AND campaigns**, using Pointy Hat's MMOS framework
  (`quick-reference/one-shot-formula-mmos.md`) as the backbone (quest → two paths → key → modular
  encounters → showdown → endings → hook). Output = a ready-to-run module file with clearly tagged
  *modular/skippable* sections. Should stat encounters via `quick-reference/encounter-building.md` +
  the Monster Manual indexes, and pull rules from the KB.
  **(built + dry-run-verified 2026-06-12.** Design locked w/ Josh in plan mode: **guided-markdown workflow**
  [not a skill/subagent] · **draft-then-refine** · **one-shot only** [campaign deferred] · **full run-ready
  module w/ stat blocks inlined** · **full guided intake** · tool-only [no sample generated]. Built:
  **`tools/session-creator.md`** [the executable playbook: invoke trigger → full intake → generation
  procedure → encounter auto-scaling → refine loop + data-layer table], **`modules/_TEMPLATE.md`** [the
  run-ready structure: overview + filled MMOS worksheet → how-to-run → cold open → map of play → scenes
  (★CORE/⬡MODULAR, read-aloud, NPCs, inlined stat blocks, DCs, avenues, bypass) → Deadly showdown → 2 endings
  → hooks → appendix; scene headers formatted for 2c handoff], **`modules/README.md`**. Wired into `CLAUDE.md`
  [Layout + topic row]. **Dry-run** [4×L3/3h/spooky/haunted-manor]: party budget 300/600/900/1600 confirmed vs
  `encounter-building.md`; encounter math checks out [6 Skeletons→Medium 600, 3 Ghouls→Hard 1200, Ghost+Specter
  →Deadly 1950]; all picked monsters CR 0–5 w/ stat blocks present + setting-appropriate [undead]; all new-file
  links resolve. **NOTE for next session:** the manifest line still says "BOTH one-shots AND campaigns" — only
  **one-shots** are built; campaign mode is the agreed later extension of this same workflow.)
- [x] **(2b) Character Creation Helper** — walks Josh's PLAYERS through making characters
  (pick race/class/background/equipment, point-buy/standard array), leaning on
  `players-handbook/02-races.md`, `03-classes.md` + `classes/*`, `04-personality-and-background.md`,
  `05-equipment.md`, `01-creating-a-character.md`. Output = personalized character packets.
  **(built + dry-run-verified 2026-06-12.** Design locked w/ Josh via AskUserQuestion: **big-picks chooser**
  [one reusable print-once worksheet for race/class/background/ability-method + personality; Claude guides
  the fiddly choices after] · **markdown-first** [HTML print-and-circle chooser + printable packet = the
  agreed follow-up] · **level 1 only** · **dual-audience** [welcoming to non-D&D players AND vets — layered
  packet: clean stat lines for vets + plain-language "what it does/when to use it" + a "how a turn works"
  primer for newcomers; chooser cards teach each option in plain words]. Built: **`tools/character-creator.md`**
  [the executable playbook: Welcome+Chooser → Intake & guided choices → Compute (formula+source table) →
  Emit → Refine + data-layer table], **`characters/_CHOOSER.md`** [the complete, ready-to-print big-picks
  worksheet — informative teaching cards for all 9 races / 12 classes / 13 backgrounds + 3 ability methods +
  personality], **`characters/_TEMPLATE.md`** [the layered packet structure], **`characters/README.md`**.
  Wired into `CLAUDE.md` [Character-building topic row + Layout]. All chooser facts pulled from the verified
  `races/`/`classes/`/`backgrounds/` overview tables (grounded, not re-derived). **Dry-run** (2 full L1
  characters): Hill Dwarf Cleric/Life [HP 12, AC 18 chain+shield, Spell DC 13, Wis/Cha saves★] + Wood Elf
  Fighter/Archery [HP 12, AC 14 leather, longbow +7, Str/Con saves★] — every derived number self-consistent
  and slotted by the template. **NOTE for next session:** only **one-shot/level-1** is built; HTML, levels
  2–5, and a batch pre-gen-party mode are the agreed follow-ups (see PHASE 2 / out-of-scope).)
- 2026-06-12 **PHASE 2c — Live DM Assistant BUILT + dry-run-verified. ⇒ PHASE 2 CORE (2a/2b/2c) COMPLETE.**
  Planned in **plan mode**; 3 decisions locked via AskUserQuestion: **(1) persistent session tracker** [a
  running `sessions/<name>.md` state file 2c updates live — pause/resume], **(2) full combat conductor**
  [tracks initiative + each monster's HP, picks targets/tactics per turn, applies conditions, checks morale;
  DM reports dice], **(3) guided-markdown playbook** [`tools/dm-assistant.md`, consistent with 2a/2b — the
  manifest had flagged format as open]. Approved plan: `~/.claude/plans/vivid-noodling-dove.md`.
  * **Built (mirrors the 2a/2b tool→template→README→router shape, but the playbook is a RUNTIME loop):**
    **`tools/dm-assistant.md`** [Runtime contract (fast/compact, read-aloud-vs-DM-only, offer-don't-override,
    yes-and) → SETUP (load `modules/<slug>.md` + `characters/*` party + open the state file) → Scene Control
    Panel loop → player-action DISPATCH table → COMBAT CONDUCTOR (9-step turn-by-turn) → State discipline +
    a data-layer table]; **`sessions/_TEMPLATE.md`** [the persistent state: Now / Party / Scene-log+module-map
    / Key & choices / NPC dispositions / Combat tracker / Clocks / Loot-XP / Session log]; **`sessions/README.md`**.
    Wired into `CLAUDE.md` (new *Run a live session* topic row + `tools/dm-assistant.md` & `sessions/` Layout).
  * **Leans on already-built runtime layer:** the six `quick-reference/dm-toolkit/*` files were purpose-built
    as the runtime companion (`scenes-goals-and-avenues.md` literally says so), and the 2a module scene
    headers (`## Scene N — <title> [★/⬡] · <type> · ~<time>`) were built for 2c to walk. So 2c is mostly
    orchestration over verified content — accuracy inherited, dry-run-verified (not a new PDF-gate file).
  * **Dry-run (in-session tabletop):** ran the documented haunted-manor beats incl. a fight vs the real
    **Skeleton** stat block [`stat-blocks/cr-1-4.md`: AC 13, HP 13 (2d8+4), Dex +2 → init +2, Shortsword
    **+4**/1d6+2, vuln bludgeoning, passive Perc 9] against the 2b **Wood Elf Fighter** [AC 14, longbow **+7**,
    passive Perc 14]: initiative order, HP tracking, monster target/tactics, and the morale nuance [mindless
    undead don't check] all resolved correctly; dispatch handled a scene transition, an NPC-dialog request,
    and an off-script "burn the manor" [→ a fire clock]. Every value the loop emits has a slot in the state
    template. Links all resolve.
  * **NEXT:** PHASE 2 core is done — remaining is the **agreed follow-up backlog** (not started): **2b** HTML
    print-and-circle chooser + printable packet, **2b** levels 2–5 + batch pre-gen party; **2d campaign mode**
    [multi-session continuity — the `sessions/` state file is a stepping stone]; optional **spells L6–9** and
    **CR 3–5 monster** completeness. A fuller end-to-end test (generate a real saved module + party, then run
    a live session against them) can be done live with Josh whenever he wants.
- [x] **(2c) DM Assistant Agent** — a LIVE, at-the-table companion during the session. For the part of
  the module the party is currently in, it surfaces: the **setting/scene description**, **what's needed
  to run the current encounter** (stat blocks, DCs, tactics from the KB), **storytelling prompts**,
  **NPCs**, the **paths the party can choose** (ties to MMOS two-paths/key), and **what they can see**
  (sensory/exploration details). Consumes (i) the prepared module from 2a and (ii) the rules KB for
  on-the-fly lookups. Goal: keep the DM running smoothly without flipping books mid-scene.
  **(built + dry-run-verified 2026-06-12.** Design locked w/ Josh via AskUserQuestion: **persistent session
  tracker** [a running `sessions/<name>.md` state file — pause/resume] · **full combat conductor**
  [initiative order + per-monster HP + per-turn tactics/targets + conditions + morale; DM reports dice] ·
  **guided-markdown playbook** [consistent w/ 2a/2b; not a skill]. Built: **`tools/dm-assistant.md`** [the
  RUNTIME playbook: Runtime contract → SETUP (load module + party + open state file) → Scene Control Panel
  loop → player-action DISPATCH table → Combat Conductor → State discipline + data-layer table],
  **`sessions/_TEMPLATE.md`** [the live state file: Now / Party / Scene-log / Key & choices / NPC
  dispositions / Combat tracker / Clocks / Loot-XP / Session log], **`sessions/README.md`**. Wired into
  `CLAUDE.md` [new "Run a live session" topic row + `sessions/` Layout]. Consumes a **2a module** + the
  **2b party packets** + the existing **`dm-toolkit/`** (which was built as the runtime layer). **Dry-run:**
  ran the haunted-manor beats incl. a combat against the real **Skeleton** block [AC 13, HP 13, Dex init +2,
  Shortsword +4/1d6+2] vs the 2b Wood Elf Fighter [AC 14, longbow +7] — initiative/HP/tactics resolved
  correctly [surfaced the skeleton's bludgeoning vulnerability + that mindless undead skip morale], and every
  value the loop emits has a slot in `_TEMPLATE.md`. **NOTE:** one-shot/level-1 scope; campaign continuity =
  2d.)

Design note: 2a + 2b are PREP ("get things ready"); 2c is RUNTIME ("be with me during the session").
Revisit scope/format (skill vs. subagent vs. plain markdown templates) with Josh when the KB is done.

### LONG-TERM BACKLOG (not scheduled — capture so it isn't lost)
- [ ] **(2d) Campaign Mode — the full multi-session campaign builder** *(long-term; the agreed evolution of
  2a, requested by Josh 2026-06-12).* Where 2a builds a single self-contained one-shot, Campaign Mode builds
  a **connected series** of sessions with continuity. Intended scope when we get to it:
  - **Campaign spine:** an overarching threat/villain + acts/chapters that individual session-modules slot
    into. Each session is still built MMOS-style (reuse the 2a workflow as the per-session engine).
  - **Persistent threading:** recurring NPCs, **faction/villain clocks**, consequences and player choices
    (the MMOS "Key"/endings) **carried session-to-session**; a session's Hook feeds the next session's Quest.
  - **A "campaign bible" output:** setting + factions + NPC roster + timeline/threads + a loot/XP ledger,
    living in a new `campaigns/<name>/` folder alongside that campaign's per-session module files.
  - **Level progression across sessions:** encounter auto-scaling tracks the party's **rising level** over
    time — which means it eventually needs content currently deferred: **CR 6+ monster stat blocks** and
    **spells L6–L9** (so high-level play is fully supported). Flag those as prerequisites for *high-level*
    campaigns; low-tier campaigns (≤ CR 5 / ≤ L5 spells) work with what's already built.
  - **Leans on already-built KB:** DMG ch.6 `06-between-adventures.md` (story arcs, foreshadowing, campaign
    tracking, downtime) + DMG ch.1–2 `01-02-world-building.md` (settings/factions/planes). Add a session-zero /
    campaign-prep intake flow.
  - **Delivery:** same guided-markdown style as 2a (a `tools/campaign-creator.md` that orchestrates the
    session-creator per chapter), so it's consistent with the rest of the toolchain.
  *(Tracked here so it survives; do NOT start until Josh greenlights — current PHASE 2 order is 2b → 2c.)*

## Notes / decisions log
- 2026-06-06: Installed poppler-utils. Confirmed all 3 PDFs have extractable OCR text. Calibrated
  offsets (PHB drifts, DMG 0, MM +1). Generated `.build/` dumps. Created folders + this tracker.
- 2026-06-06: Pilot files (09-combat, conditions) written + verified; Josh approved the format.
- 2026-06-06: DECISIONS — (a) build ALL files; (b) FULL DETAIL on classes/spells/magic items, but
  written as complete MECHANICAL reference in our own structured words/tables (NOT verbatim copy —
  avoids OCR errors + wholesale copyright reproduction). Every feature/spell/item is covered with
  how it works. (c) Classes and Spells split into subfolders (see manifest) so files stay manageable.
  (d) This is a large multi-session build; resume via this file, ticking boxes as we go.
- 2026-06-06 PAUSE: Josh asked to pause here. State: 9 files VERIFIED [x] (09-combat, conditions,
  actions-in-combat, death-and-dying, difficulty-classes, encounter-building, 07-using-ability-
  scores, 08-adventuring, 10-spellcasting). 4 files WRITTEN but NOT yet reviewed [~]
  (01-creating-a-character, 04-personality-and-background, 05-equipment, new-dm-one-shot-tips) —
  these need the independent accuracy-review gate before ticking. NEXT WHEN RESUMING: (1) review
  the 4 `[~]` files against the dumps and tick or fix; (2) continue with the remaining PHB files
  (02-races, 03-classes overview + classes/*, 06-feats, 11-spells + spells/*, appendices, README);
  (3) DMG; (4) MM; (5) finalize CLAUDE.md topic index + end-to-end verify.
- 2026-06-06 PAUSE #2: Josh chose FULL DETAIL on everything; "one batch then pause." Completed +
  verified this session: all 11 PHB chapter overview files + README + all 6 quick-reference + the
  4 martial classes (barbarian, fighter, rogue, monk). TOTAL VERIFIED = 22 files. Minor fixes made:
  05-equipment (alchemist's fire 1d4 + selling-treasure citation), difficulty-classes (p.175),
  README (p.163–170), monk.md (10 off-by-one citations). NEXT WHEN RESUMING (first unchecked):
  remaining 8 classes (bard, cleric, druid, paladin, ranger, sorcerer, warlock, wizard — casters,
  bigger), then spells/ (index + cantrips + level-1..9, FULL detail ~360 spells), appendices.md,
  then DMG (10 files), MM (4 files), finalize CLAUDE.md + end-to-end verify. Each file still goes
  through the writer→independent-review→tick gate.
- 2026-06-07 "MADE IT USABLE" milestone: With ~26% budget left, chose to make the KB queryable
  rather than add more raw files. FINALIZED `CLAUDE.md` (full topic→file index + offset table +
  build-status section flagging what's not built). Built + verified the 4 Monster Manual index files
  (note: an internal error hid the MM subagent's report, but the files landed; reviewed them here —
  monster-index pages correct, by-CR verified CR 0–7 row-by-row and fixed Goblin CR 1/8→1/4 +
  Goblin Boss sort, README CR→XP table correct, by-type 14 types spot-verified). **The KB is now
  usable to run a one-shot.** REMAINING (resume when budget refreshes): 8 caster classes
  (bard/cleric/druid/paladin/ranger/sorcerer/warlock/wizard), spells/ (~360 spells, the big one),
  PHB appendices, all 10 DMG files, then a full end-to-end pass. Resume: "Read ~/git/dnd/PROGRESS.md
  and continue from the first unchecked item."
- 2026-06-07 PAUSE #3 (session limit): ALL 12 CLASSES now built + verified (added bard, cleric,
  druid, sorcerer, paladin, ranger, warlock, wizard this session; 2 reviewer passes, 0 fixes; the
  paladin/ranger save-proficiency errors in my brief were caught by the writer and corrected to PHB
  values Wis/Cha & Str/Dex). SPELLS PHASE STARTED: spell-index.md (348 spells), cantrips.md (27),
  level-1.md (62) are WRITTEN but NOT yet reviewed → marked [~]. NEXT WHEN RESUMING:
  (1) run the independent accuracy review on those 3 spell files and tick/fix them — note one
  pre-flag to confirm: Poison Spray die = 1d12 (canonically correct; OCR was overwritten);
  (2) continue spells level-2 … level-9 (full detail) in batches; (3) PHB appendices.md;
  (4) DMG (10 files); (5) final end-to-end pass. Spell page offset drifts +19→+24 across p.211–289;
  class associations in spell-index came from canonical PHB lists (OCR class-list pages too scrambled).
- 2026-06-07 REVIEW GATE on the 3 spell `[~]` files — all three now VERIFIED [x]:
  * cantrips.md — independent reviewer subagent, clean 27/27 (Poison Spray 1d12, Light's hostile-target
    Dex save, and Mending's 1-min cast confirmed canonically correct where the OCR body was scrambled).
  * level-1.md — independent reviewer 62/62; 2 page-cite fixes applied: Disguise Self p.232→233,
    Dissonant Whispers p.233→234 (rest of the 60 cites tracked canon correctly).
  * spell-index.md — the reviewer SUBAGENT was blocked TWICE by an output content-filter (false positive
    on relaying the long spell-name list), so the index review was done in-session instead. Found the index
    was INCOMPLETE — missing 20 real PHB spells (counts now reconcile per-level vs canon). ADDED all 20:
    L1 Tasha's Hideous Laughter; L2 Beast Sense, Cloud of Daggers, Crown of Madness, Misty Step,
    Nystul's Magic Aura; L3 Blinding Smite, Conjure Barrage, Crusader's Mantle, Hunger of Hadar,
    Lightning Arrow; L4 Leomund's Secret Chest, Staggering Smite; L5 Banishing Smite, Conjure Volley,
    Destructive Wave, Swift Quiver; L6 Contingency; L8 Holy Aura; L9 Power Word Heal. (Warding Wind,
    Catnap, Steel Wind Strike, Snare were correctly ABSENT — those are XGE, not PHB.) Index now 369 rows
    = 360 unique + 9 by-design named-spell cross-listings. NOTE for future spell-file reviews: route
    reviewer findings to a FILE (don't echo big spell tables in the subagent's final message) or verify
    in-session, to dodge the content-filter. NEXT: spells level-2 (full detail), then L3…L9, appendices, DMG.
- 2026-06-07 `spells/level-2.md` DONE + VERIFIED [x] (59 spells). Writer subagent drafted; **independent
  reviewer subagent** re-read every cited page in `.build/phb.txt` → **59/59 correct, 0 factual fixes,
  0 page-cite fixes** (full report at `.build/level-2-review.md`). All 20 high-risk spells confirmed
  exactly (Scorching Ray 3×2d6, Shatter 3d8/Con, Melf's 4d4+2d4, Spiritual Weapon 1d8+mod/no-conc,
  Moonbeam 2d10/cylinder, Calm Emotions 20-ft radius, Suggestion V/M-only, etc.). Two myth-busts vs the
  writer's first pass: (a) Calm Emotions is **20-ft** radius not 10 (writer self-corrected); (b) the
  writer thought Gentle Repose + Warding Bond pages were missing from the scan — **they are present**;
  the whole printed-211–289 range is in the dump. Captured the reusable speed/accuracy findings as the
  **SPELL-FILE BUILD RECIPE** above (dump line range 29.6k–39.2k, `"N th-level"` enumeration grep,
  physical→printed offset table, OCR `1`→`l` pitfall, bash-sandbox `>`/`<` block, file-routed reviews).
- 2026-06-07 BUILD-ORDER CHANGE (Josh): **pause spells, do the DMG next.** Marked `spells/level-3..9`
  as `[-]` DEFERRED, added the legend entry + the **▶ NEXT UP** banner at the top. New order: DMG
  (README + 10 chapters, dump `.build/dmg.txt`, offset 0) → PHB `appendices.md` → back to spells L3–L9
  → end-to-end verify. Resume picks the **DMG** first.
- 2026-06-08 **DMG FULLY BUILT + VERIFIED, plus PHB appendices** (one big session, fanned out to
  writer+reviewer subagents). All 11 files done: DMG README, 01-02-world-building, 03-creating-adventures,
  04-npcs, 05-adventure-environments, 06-between-adventures, 07-treasure-and-magic-items,
  08-running-the-game, 09-dm-workshop, dungeon-masters-guide/appendices, and players-handbook/appendices.
  Fixes applied during review: ch.8 poison-count note 15→14 (Basic Poison is PHB) + internal-phrase
  cleanup; ch.6 Maintenance-Costs (+Farm row, Inn-rural→10gp/5/10, Trading-post untrained→2) + 4
  page-cites 124→125; ch.9 page range 282→289 + flanking/grid recited to ch.8 & identify-item to ch.7;
  README ch.9 range 263→289. PROCESS FINDINGS (for future sessions):
  * **DMG offset 0 is a gift** — the `@@@ PAGE physical=N @@@` tag value IS the printed page; citations
    were trivial vs the PHB's drift. (MM is +1.)
  * **Session-limit resets kill background review subagents mid-run.** Several reviewers/writers were
    terminated at a reset. Mitigation that worked: re-launch killed writers; for killed reviewers, do the
    accuracy-review **in-session** (the gate allows "a different subagent/pass than the writer", and the
    notes already bless in-session review). In-session verification of the key numbers + spot-checks
    ticked ch.1-2, ch.7, ch.9, and both appendices reliably.
  * **Writers caught errors in my briefs' page assumptions** — worth trusting a good writer's dump-based
    corrections: ch.9's flanking/grid are actually in ch.8 (p.251) and identify-item in ch.7 (p.136),
    ch.9 runs to p.289; the **2014 DMG ch.6 downtime set is 9 activities** — Crime/Gambling/Pit-Fighting/
    Relationship/Scribing/Work/Buying-Selling are **Xanathar's**, NOT the 2014 DMG.
  * **OCR-garbled spots to re-check on a clean PDF:** the **Maintenance Costs table (DMG p.127)** hireling
    columns (caveated in-file) and the **Spell Scroll save-DC table** (values are canonical; table itself
    mangled in the dump).
  * **Big-index files (ch.7 ~220 magic items):** scope the reviewer to verify ALL rule numbers exactly +
    a representative index spot-check (don't re-verify all 220 page cites) — same standard as the
    monster-index. A good writer self-corrects index page errors during its own dump pass.
  STILL PENDING (resume): un-defer spells L3–L9 (the big remaining content) + end-to-end verification;
  refresh root `CLAUDE.md` + DMG README build-status to mark the DMG as built.
- 2026-06-11 **MONSTER STAT BLOCKS CR 0–5 — cross-file CR surgery + verification gate (in-session).**
  Resumed the stat-block phase (the 6 written-but-unverified files). Work done:
  * **Cross-file CR surgery (5 roster misfilings, all grounded in `.build/mm.txt`):** moved **Tridrone**
    1/4→1/2 (cr-1-4 → cr-1-2), **Nothic** 3→2 (cr-3 → cr-2), **Pentadrone** 1→2 (cr-1 → cr-2, with its
    stats corrected — see below); added **Nightmare** (CR 3, cr-3) and **Quadrone** (CR 1, cr-1), both
    composed fresh from the dump. Updated both index files (`monsters-by-cr.md`, `monsters-by-type.md`)
    with the corrected CRs + self-documenting "see CR X" cross-refs, and split the by-type "Duodrone /
    Tridrone" line. Left "see cr-2.md" stubs for Pentadrone in cr-1.
  * **The modron two-column interleave (the documented dominant error source) decoded carefully:** the
    Skills/Senses/Languages/Challenge 4-line groups stayed intact in the OCR, so the unambiguous Challenge
    values pin the rest. Result — **Pentadrone** (CR 2): Large, AC 16, HP 32 (5d10+5), Perception **+4**,
    pp **14**, STR 15/CHA 11, 5 arm attacks + Paralysis Gas. **Quadrone** (CR 1): Medium, AC 16, HP 22
    (4d8+4), fly 30, Perception +2, pp 12, STR 12/CHA 13, 2 fist / 4 shortbow. The old cr-1 "Pentadrone"
    had Quadrone's Perception+2/pp 12 and wrong CR — corrected.
  * **Verification = in-session (per the blessed gate + don't-spawn-agents default).** Wrote a mechanical
    internal-consistency checker (ability mod vs score, HP vs dice average, XP vs CR, passive Perception
    vs WIS/skill) over all ~177 A–Z blocks: **0 internal errors** after fixes. Spot-verified the modron,
    **mephit** (Dust/Ice/Magma — writer disentangled the interleave correctly), and **dinosaur**
    (Allosaurus/Plesiosaurus — also correct) clusters against the dump.
  * **Fixes applied (4 propagated-OCR passive-Perception errors + 1 omission):** Acolyte pp 10→12,
    Noble pp 10→12, Cult Fanatic pp 10→11 (all WIS-derived, rules-deduced; the dump itself showed the
    wrong values), Merrow pp 12→10 (dump showed 12 with WIS 10 — proves the source's passive values are
    untrustworthy here). **Brown Bear (CR 1, p.319) was missing entirely** — added to cr-1.md + by-cr.
  * **MAJOR FINDING — roster is NOT complete.** Cross-checking by-type vs by-cr vs the dump's `Challenge`
    lines revealed ~30+ real MM CR 0–5 monsters absent from the stat-block files AND (mostly) from
    `monsters-by-cr.md` despite its "built for completeness" claim. Logged as the ⚠️ COMPLETENESS GAP in
    the manifest; **decision pending with Josh** (expand vs. keep curated). PROCESS NOTE: a cheap
    internal-consistency script + index/dump cross-diff caught everything the prose review would have
    missed — reuse this for any future stat-block work.
- 2026-06-11 **CR 0–2 MADE EXHAUSTIVE (Josh chose "expand low CRs only").** Added the 23 MM monsters that
  the curated roster had omitted, each transcribed from `.build/mm.txt` (counts now match canonical MM
  totals — CR 0: 31, 1/8: 22, 1/4: 42, 1/2: 35, 1: 34, 2: 49; **278 total CR 0–5 blocks**):
  * cr-0: Myconid Sprout. cr-1-8: Tribal Warrior, Twig Blight. cr-1-4: Giant Badger, Kenku, Riding Horse.
    cr-1-2: Deep Gnome (Svirfneblin), Gas Spore, Giant Goat, Giant Sea Horse, Giant Wasp, Myconid Adult,
    Piercer, Rust Monster. cr-1: Half-Ogre, Quaggoth Spore Servant, Swarm of Quippers. cr-2: Carrion
    Crawler, Gargoyle, Gelatinous Cube, Myconid Sovereign, Orog, Quaggoth.
  * Added all 23 to `monsters-by-cr.md`; added the 14 not-yet-listed ones to `monsters-by-type.md`.
  * OCR notes for these: the Myconid/Quaggoth spread (p.230–231) and the Appendix-B NPCs are the worst
    two-column interleaves — Myconid Sprout/Adult/Sovereign were separated by their distinct ability
    blocks + Challenge lines; spore save DCs set by formula (Adult Con+1 → DC 11, Sovereign Con+2 → DC 12).
    OCR dropped a few AC/HP/Speed lines (Kenku, Myconid Sprout, Tribal Warrior) — filled from canon, all
    internally consistent. Quaggoth/Quaggoth Spore Servant live on different pages (256 vs 230). Quaggoth
    pp 10→11 (WIS-derived, same OCR class as the earlier passive fixes). Mechanical re-sweep: 0 errors.
  * REMAINING completeness item: CR 3–5 still curated (see manifest ⚠️ note) — optional.
- 2026-06-11 **SPELLS L3–L5 BUILT + VERIFIED (Josh: "get spells to ~level 5, then end-to-end verification,
  then 2a–2c").** Un-deferred and completed `level-3.md` (50 spells), `level-4.md` (35), `level-5.md` (42) —
  **127 spells**, full mechanical detail in the house format, matching `level-2.md`. Done **in-session**
  (writer + independent dump-verification pass, per the blessed gate + don't-spawn-agents default), NOT via
  subagents. Method: drafted each file from canon → grounded every damage die / save / area / gp-cost on
  the **high-risk** spells against `.build/phb.txt` (descriptions live ~lines 29.6k–39.2k; OCR splits dice as
  "8 d 6"/"4d 8" so greps needed loose patterns + Read windows).
  * **Fixes the dump check caught (7 total):**
    L3 — **Wind Wall 3d6→3d8** bludgeoning; **Spirit Guardians** "difficult terrain"→**speed halved** in area
    (real rules distinction); Call Lightning cloud wording tightened.
    L4 — **Phantasmal Killer** save is at the **start** of each turn (not end); **Mordenkainen's Faithful
    Hound** leash **30→100 ft** + bite is a start-of-your-turn recurring bite (not on-entry); Freedom of
    Movement underwater clause simplified (had a wrong piercing parenthetical).
    L5 — **Insect Plague** trigger fixed to "enters first time on a turn **or ends its turn**" (had "starts").
  * **Dump-confirmed key numbers** (so future me trusts them): Fireball/Lightning Bolt 8d6, Call Lightning
    3d10, Spirit Guardians/Wind Wall 3d8, Glyph 5d8/200gp, Revivify 300gp, Blight 8d8, Ice Storm 2d8+4d6,
    Wall of Fire 5d8, Guardian of Faith 20/60-cap, Dimension Door 4d6 force, Stoneskin 100gp, Cone of Cold
    8d8, Cloudkill 5d8, Flame Strike 4d6+4d6, Conjure Volley 8d8, Insect Plague 4d10, Destructive Wave
    5d6+5d6, Bigby's Hand 4d8, Banishing Smite 5d10/50hp, Contact Other Plane DC15/6d6, Geas 5d10, Raise
    Dead 500gp/10-day/−4, Greater Restoration 100gp, Mass Cure Wounds 3d8, Telekinesis 1,000 lb,
    **Animate Objects size table (Tiny +8/1d4+4 … Huge +8/2d12+4) confirmed in the dump, not just canon.**
  * Updated root **`CLAUDE.md`** spell index + build-status to show cantrips–L5 built (L6–L9 deferred).
  * **NEXT (first non-deferred unchecked box): end-to-end verification pass, then PHASE 2 tooling 2a–2c.**
    L6–L9 spells remain `[-]` deferred (above the one-shot range); CR 3–5 monster completeness still optional.
- 2026-06-11 **DEPTH/ENRICHMENT PASS scoped + inserted before end-to-end verification (Josh).** Josh flagged
  that several files over-summarized: DMG early chapters (world-building→NPCs→running-the-game), the MM's
  first ~12 pages ("how to use monsters"), the PHB races (no folder), class **options/spells/flavor**, and
  especially **Ch.4 (personality & backgrounds)**, plus **Ch.8** and the **Ch.10 intro** (not the spells).
  Driving goal: let his players **build characters with every option, immersively.** Captured as **PHASE 1.5**
  above (full checklist). Decisions: **races/ and backgrounds/ become folders, one file each** (mirroring
  classes/; old single files become overview/index); **class spell lists scoped to cantrips–L5** (link the
  built files; L6–L9 → spell-index/PDF). Player-facing items first (races → classes → backgrounds → Ch.10
  intro). **Batch-2 reframe (Josh, same day):** the DM-facing half is NOT "transcribe DMG chapters as deep
  reference prose" — it's a **run-the-game GENERATION toolkit** (`quick-reference/dm-toolkit/`: NPC generator,
  encounters-and-monsters, traps-puzzles-hazards, environments-and-dressing, scenes-goals-and-avenues,
  social-and-dialog) so Claude can produce detailed, grounded NPCs/encounters/puzzles/avenues/dialog/room
  descriptions live with Josh; underlying DMG/MM chapters get only the light anchors those toolkits need.
  Per Josh: tracker updated first, then restate scope for alignment **before** building. **CONFIRMED by Josh
  (2026-06-11): he wants BOTH halves — immersive every-option character creation AND the DM run-the-game
  generation toolkits + their underlying data.** Green-lit; starting Batch 1 with the `races/` folder.
- 2026-06-12 **BACKGROUNDS FOLDER COMPLETE + VERIFIED (all 13).** Resumed at the first unchecked box.
  A prior session (2026-06-11) had written **9 of 13** background files but never verified them or ticked the
  box (no review artifacts). This session:
  * **Wrote the missing 4** — `entertainer.md` (p.130–131, + Gladiator variant), `hermit.md` (p.134–135),
    `noble.md` (p.135–136, + Knight variant & Retainers feature), `urchin.md` (p.141) — each drafted from canon
    and **grounded in `.build/phb.txt`** for skills/tools/languages/equipment/feature + all sub-tables.
  * **Ran the accuracy gate (in-session) over ALL 13** vs the dump: **0 errors.** Confirmed exact for every
    file: skill pairs, tool proficiencies, languages, equipment packages + **gp** (15/15/15/15/15/10/10/10/10
    for the gold values), feature names & effects, and the sub-tables (Criminal/Soldier/Sage Specialty d8,
    Charlatan Favorite Schemes d6, Entertainer Routines d10, Folk Hero Defining Event d10, Guild Business d20,
    Outlander Origin d10). Variants all present (Spy, Gladiator, Knight+Retainers, Guild Merchant,
    Pirate+Bad Reputation). Structural scan: every file has its Feature + the 4 trait/ideal/bond/flaw tables.
  * **PHB DRIFT NOTE (for future background work):** the backgrounds sit on physical pp.119–133 but print as
    pp.127–141 (drift grows +7→+8 across the chapter; two-column OCR also *interleaves* adjacent backgrounds —
    e.g. Criminal's flaws + Spy variant land mid-Entertainer page). **Cite from the back-of-book index**
    (lines ~43572–45432 of phb.txt give every background + feature its printed page), NOT physical+offset.
  * **Updated `04-personality-and-background.md`** → linked its 13-row table into `backgrounds/` (now a real
    index) and fixed the page column to full printed ranges. Both manifest boxes ticked.
  * **NEXT player-facing unchecked box: `players-handbook/10-spellcasting.md`** — deepen the rules-of-magic
    intro (slots, known vs prepared, components, ritual, concentration, combining effects, casting in armor,
    areas of effect) — NOT spell descriptions. After that: the DM run-the-game toolkit (`dm-toolkit/`), then
    `08-adventuring.md` deepening, then end-to-end verification, then PHASE 2 (2a–2c). Optional: link the new
    `backgrounds/` folder into root `CLAUDE.md`'s topic index (currently points only at the 04 overview file).
- 2026-06-12 **`10-spellcasting.md` DEEPENED + VERIFIED — last player-facing PHASE 1.5 item done.** ADD-only
  pass on the already-[x] file: added **Range**, the **8 Schools of Magic** table, fuller **focus/component-
  pouch** detail + the **free-hand (S+M / weapon+shield)** gotcha, and a proper **Casting in Armor** rule, plus
  5 FAQ entries; all grounded in `.build/phb.txt` Ch.10 (physical 182–188 = printed 201–207). Citations kept
  canonical (the OCR page tags here under-count printed pages — confirmed content, not arithmetic). **This
  closes the player-facing half of PHASE 1.5** (races ✓, 02-races overview ✓, all 12 class flavor+spell-lists
  ✓, backgrounds ✓, 04-personality index ✓, 10-spellcasting ✓). **NEXT: the DM RUN-THE-GAME TOOLKIT** —
  `quick-reference/dm-toolkit/` (npc-generator, encounters-and-monsters, traps-puzzles-hazards, environments-
  and-dressing, scenes-goals-and-avenues, social-and-dialog) + light anchor touch-ups to dmg ch.4/8/1-2 & MM
  README, then `08-adventuring.md` deepening, then end-to-end verification, then PHASE 2 (2a–2c).
- 2026-06-12 **DM RUN-THE-GAME TOOLKIT BUILT — all 6 files + router wiring (PHASE 1.5 DM half mostly done).**
  Built `quick-reference/dm-toolkit/`: `npc-generator.md`, `encounters-and-monsters.md`, `traps-puzzles-
  hazards.md`, `environments-and-dressing.md`, `scenes-goals-and-avenues.md`, `social-and-dialog.md`. Per
  Josh's reframe these are **generation scaffolds** (process + original improv menus/dice tables + "pull the
  rule/stat block from <file>" pointers), NOT DMG transcriptions — so they respect the no-over-copy gate by
  composing original menus and **linking** the verified KB tables rather than re-printing them.
  * **What got hard-verified (the parts with real numbers):** NPC stat-block attach table = all 18 NPCs'
    CR + file location cross-checked vs `stat-blocks/` (fixed Mage→PDF p.348, Assassin→p.343 from
    monster-index); encounters environment quick-pick = every monster CR cross-checked vs `monsters-by-cr.md`;
    social Conversation Reaction table + trap severity spine restated from the already-verified DMG chapter
    files; MMOS step names confirmed vs `one-shot-formula-mmos.md`.
  * **Original design content** (not in the 2014 DMG, so no source to violate): 7 puzzle patterns +
    skill-challenge frame; combat-role mixing; sensory/dressing menus; scene anatomy + 8-avenue table;
    voice dials + dialog-generation hooks. This is the data substrate for **PHASE 2c** (live DM Assistant).
  * **Anchor touch-ups:** audited — none needed (toolkits point at already-built anchors). Wired discovery
    instead: root `CLAUDE.md` now lists `dm-toolkit/` (DM section + Layout) and the `races/`/`backgrounds/`
    folders.
  * **NEXT (last PHASE 1.5 item): `players-handbook/08-adventuring.md`** deepening (travel/journeys, vision &
    light, full resting, environmental hazards — PHB Ch.8 p.181–188). Then **end-to-end verification**, then
    **PHASE 2** tooling 2a (Session/Module Creator) → 2b (Character Creation Helper) → 2c (DM Assistant, which
    consumes this toolkit). Optional leftovers unchanged: spells L6–L9, CR 3–5 monster completeness.
- 2026-06-12 **`08-adventuring.md` DEEPENED — PHASE 1.5 (the whole depth/enrichment pass) is now COMPLETE.**
  ADD-only: new **Activity-while-traveling** section (marching order, noticing threats, Navigate/Map/Track/
  Forage jobs — grounded in phb.txt p.182–183) + a **Between-adventures** pointer (lifestyle → `05-equipment.md`;
  downtime → `06-between-adventures.md`) + 3 FAQ. **PHASE 1.5 tally — ALL boxes ticked:** player-facing
  (races/ ✓, 02-races overview ✓, 12 classes flavor+spell-lists ✓, backgrounds/ 13 ✓, 04-personality index ✓,
  10-spellcasting ✓, 08-adventuring ✓) + DM toolkit (`dm-toolkit/` 6 files ✓ + anchors-audited ✓ + CLAUDE.md
  wiring ✓). **NEXT: the end-to-end verification pass** (manifest "Finalize" box, line ~236) — sample rules
  questions across the KB + citation spot-checks; confirm every non-deferred box is sound. **THEN PHASE 2**
  tooling: 2a Session/Module Creator → 2b Character Creation Helper → 2c live DM Assistant (consumes the
  toolkit). Optional/deferred (not blocking): spells L6–L9, CR 3–5 monster completeness.
- 2026-06-12 **PHASE 2 STARTED — 2a Session/Module Creator BUILT + dry-run-verified.** Planned with Josh in
  **plan mode** (he asked to be "really specific"); 7 design decisions locked via two AskUserQuestion rounds:
  guided-markdown workflow (not skill/subagent) · draft-then-refine · one-shot only · full run-ready module
  with stat blocks **inlined** · full guided intake · tool-only first (no sample). Approved plan saved at
  `~/.claude/plans/humming-zooming-tide.md`. Built **`tools/session-creator.md`** (executable playbook),
  **`modules/_TEMPLATE.md`** (run-ready structure, 2c-parseable scene headers) + **`modules/README.md`**;
  wired both new folders into `CLAUDE.md` (Layout + topic row). Dry-run (4×L3 spooky haunted manor) confirmed
  the encounter auto-scaling math against `encounter-building.md` and that all picked monsters are CR 0–5 with
  stat blocks present. **NEXT: 2b Character Creation Helper**, then 2c live DM Assistant (consumes 2a's modules
  + the dm-toolkit). Deferred: campaign mode (extension of 2a), spells L6–L9, CR 3–5 completeness.
- 2026-06-12 **PHASE 2b — Character Creation Helper BUILT + dry-run-verified (Josh: "the most critical").**
  Planned in **plan mode**; 3 design decisions locked via AskUserQuestion: **(1) big-picks chooser** [one
  reusable print-once worksheet for race/class/background/ability-method + personality; Claude guides skills/
  spells/equipment after — best for new players], **(2) markdown-first** [HTML print-and-circle chooser +
  printable packet is the agreed fast follow-up], **(3) level 1 only**. Josh added two framing requirements
  mid-plan: the **chooser must teach each option** (plain-language info so a first-timer chooses confidently),
  and the **packet must welcome non-D&D players AND vets** — handled with a **layered** design (clean stat
  lines a vet scans + glosses, a "how a turn works" primer, and "what it does/when to use it" notes a newcomer
  reads). Approved plan: `~/.claude/plans/vivid-noodling-dove.md`.
  * **Built (mirrors 2a's tool→template→README→router shape):** **`tools/character-creator.md`** [executable
    playbook: Welcome+Chooser → Intake & guided choices → Compute (a formula+source table for every derived
    number) → Emit → Refine; + data-layer table], **`characters/_CHOOSER.md`** [the complete print-once
    big-picks worksheet with informative teaching cards for all 9 races / 12 classes / 13 backgrounds + the 3
    ability-score methods + personality blanks], **`characters/_TEMPLATE.md`** [the at-the-table packet],
    **`characters/README.md`**. Wired into `CLAUDE.md` (new Character-building topic row + Layout entries).
  * **Grounding:** every chooser fact pulled from the *verified* overview tables (`02-races.md` race table,
    `03-classes.md` class table, `04-personality-and-background.md` background table) + class files; the AC
    math uses the verified `05-equipment.md` armor table (confirmed **chain mail = AC 16**, not 18). Like 2a
    this is a *tool derived from already-verified files*, so accuracy is inherited + dry-run-verified (not run
    through the PDF accuracy gate).
  * **Dry-run (2 full level-1 characters, all math self-consistent):** *Hill Dwarf Cleric (Life), Acolyte,
    standard array* → Wis 16/Con 16, HP 12 (8+3+1 toughness), AC 18 (chain 16 + shield), Spell DC 13, Wis +5★/
    Cha +3★, passive Perception 13, 2 L1 slots + Bless/Cure Wounds always-prepared. *Wood Elf Fighter (Archery),
    Soldier, standard array* → Dex 17, HP 12, AC 14 (leather), Speed 35, longbow **+7** (Dex 3 + prof 2 +
    Archery 2)/1d8+3, Str +3★/Con +4★, passive Perception 14 (Keen Senses). Every number had a home in
    `_TEMPLATE.md`.
  * **NEXT: 2c live DM Assistant** (consumes 2a modules + the dm-toolkit; a finished character packet here is
    also reference input for it). **Agreed follow-ups for 2b** (logged, not started): **HTML** versions of the
    chooser + a printable packet [Josh's eventual goal], **levels 2–5** [subclass-at-3, ASIs, multi-level
    slots], and a **batch pre-gen-party** mode. Other deferred: spells L6–L9, CR 3–5 monster completeness.
- 2026-06-12 **FIRST REAL MODULE BUILT — "The Weeping Grove" (exercised the 2a toolchain end-to-end).**
  Josh wanted to design the **high-level MMOS theme by hand first**, then run the Session Creator. Re-read
  `one-shot-formula-mmos.md` in full; co-designed the skeleton with Josh over a few rounds (he chose: a
  death-cult villain harvesting heartwood + the "why," a **revelation Key with seeded three-clue pointers**,
  a mournful **treant-spirit guardian**, title **"The Weeping Grove"**). Then ran `tools/session-creator.md`:
  a 4×L3, ~3–4h forest mystery. **Output to its own folder** (Josh's ask, for live tweaking + handouts):
  `modules/the-weeping-grove/` = `the-weeping-grove.md` (full run-ready module — MMOS worksheet, cold open,
  4 modular scenes [Bramble-Pack ⬡combat 600/Medium · Fenn's Hollow ⬡roleplay=the Key · Harvesters' Camp
  ⬡combat 1100/Hard · Warded Grove ⬡skill-challenge], a two-version Showdown [no-Key Guardian fight ≈1800
  Deadly / with-Key cult fight 1600 Deadly + Guardian ally], two endings + hooks, **Appendix A** with all 7
  stat blocks inlined, **Appendix B** clue/clock/scene trackers) + `README.md`. Encounter math verified vs
  `encounter-building.md`; all 7 blocks pulled verbatim from `stat-blocks/` (Guardian=Shambling Mound CR5,
  Mother Sere=Green Hag CR3, Bramble-Wolves=Wolf, Thorn-Spawn=Twig Blight, + Cultist/Cult Fanatic/Thug); all
  `../../` links resolve. **Convention added:** a module may be a single `modules/<slug>.md` **or** its own
  folder `modules/<slug>/<slug>.md` — `tools/dm-assistant.md` SETUP updated to load either. **NEXT (per
  Josh):** build the party with the Character Creator, then run the session live with the DM Assistant.
- 2026-06-14 **SESSION KICKOFF — player/DM polish + first live mock test (agenda captured up top).** Josh set
  this session's plan; full checklist is in the new **★ ACTIVE SESSION AGENDA — 2026-06-14** block at the top.
  Order: (1) ✅ **replaced `characters/character-sheet-template.html`** with Josh's newer Downloads copy (35KB →
  57KB) — a self-contained at-the-table **reference sheet** generator (edit one `CHARACTER` object → engine
  derives all the math + renders the illuminated-grove sheet w/ race+class emblems, portrait upload, theme
  toggle, print-friendly; ships filled with Lyra Shadowleaf, Wood Elf Ranger L3). It's a **different artifact**
  from the `index.html`/`character-builder.html` *builder* (intake) — this is the finished handout. The old copy
  was untracked, nothing tracked lost. (2) make collaborative **edits to that sheet** (TBD w/ Josh). (3) **work
  on the DM screen** more (`modules/the-weeping-grove/site/index.html`). (4) **repo cleanup** — incl. documenting
  the new sheet in `CLAUDE.md`/`characters/README.md`, reconciling the HTML artifacts, gitignore/naming tidy.
  (5) **first live MOCK TEST of the DM Assistant** — run `tools/dm-assistant.md` against the built
  `modules/the-weeping-grove/` + a real party, exercising the full Scene-Control + Combat-Conductor loop and the
  `sessions/` state file. Will tick each box + log findings as we go.
