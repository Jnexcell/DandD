# Dungeon Master's Guide — Folder Index

This folder is the **DMG (D&D 5e, 2014 rules)** — the **DM's toolbox**: world-building, adventure and encounter creation, NPCs, environments/traps, treasure and magic items, running-the-game rulings, and optional/variant rules. Where the PHB tells the players how to play, the DMG tells you how to *run* it and how to make the calls the rules leave open.

For the whole knowledge base and how to answer a rules question, see the root router **`../CLAUDE.md`**. For build status, see **`../PROGRESS.md`**.

---

## Chapter map

| Ch. | Title | Printed pages | What's here / when you'd reach for it |
|---|---|---|---|
| 1 | A World of Your Own | 9–42 | World-building: gods, a planes overview, settlements, languages, factions, campaign events, tiers of play. *(Setting prep, not session rules.)* |
| 2 | Creating a Multiverse | 43–70 | The planes of existence in depth — planar travel, Astral/Ethereal, Feywild, Shadowfell, Inner/Outer planes. *(Reach for it when planar travel comes up.)* |
| 3 | Creating Adventures | 71–88 | Adventure structure, types, complications. **Encounter building / XP budget lives here (Creating Encounters p.81–85).** |
| 4 | Creating Nonplayer Characters | 89–98 | NPC design, party members, contacts, hirelings, **villains** and villainous class options; quick stat tweaks. |
| 5 | Adventure Environments | 99–124 | Dungeons, wilderness, settlements, unusual environments, and **traps & hazards (Traps p.120)**. |
| 6 | Between Adventures | 125–132 | Linking adventures, campaign tracking, recurring expenses, **downtime activities**. |
| 7 | Treasure | 133–234 | Random treasure tables, **magic items A–Z (p.135+)**, sentient items (p.214), **artifacts (p.219)**, other rewards. *(Largest chapter — the loot reference.)* |
| 8 | Running the Game | 235–262 | The rulings chapter: table rules, **using ability scores & DCs (p.237–238)**, exploration, **social interaction (p.244)**, objects, combat/chases, **diseases (p.256), poisons (p.257), madness (p.258)**, awarding XP. |
| 9 | Dungeon Master's Workshop | 263–289 | **Optional & variant rules**: ability options, adventuring/combat variants, resting variants, then design procedures — creating monsters (p.273) / spells (p.283) / magic items (p.284) / character options (p.285). |
| App. A | Random Dungeons | 283–301* | Roll-up tables for generating a dungeon on the fly. |
| App. B | Monster Lists | 302–309 | Monsters grouped by environment and by challenge rating. |
| App. C | Maps | 310–315 | Sample maps you can drop into play. |
| App. D | Dungeon Master Inspiration | 316 | Recommended reading; Index follows on p.317. |

\* The TOC lists Appendix A starting at p.290 (its first sub-entries), with Appendix B at p.302; the appendix block runs from the end of Chapter 9 (~p.283) through the index (p.317). Cite by the printed page you actually land on.

---

## DMG page offset (citations)

The DMG PDF has a **constant offset of 0 — physical PDF page = printed page.** Cite as `(DMG p.X)`, and the `@@@ PAGE physical=N @@@` tag value in the text dump *is* the printed page. (Contrast: the PHB drifts and the MM is +1.)

**Locate by heading, not arithmetic** — to find content in the dump:

```bash
grep -n -i "<keyword>" ~/git/dnd/.build/dmg.txt
```

The table of contents sits near the top of the dump (CONTENTS, ~lines 116–227); chapter page numbers above were verified against it.

---

## Build status

**All DMG chapter summaries are built and verified** (2026-06-08): `01-02-world-building.md`,
`03-creating-adventures.md`, `04-npcs.md`, `05-adventure-environments.md`, `06-between-adventures.md`,
`07-treasure-and-magic-items.md`, `08-running-the-game.md`, `09-dm-workshop.md`, and `appendices.md`.
These are structured summaries with page citations — for the full text of anything (complete magic-item
descriptions, full random-treasure/dungeon tables, full d100 personality/madness tables), go to the source:

- the PDF — `pdftotext -f <page> -l <page> "Dungeon Master's Guide.pdf" -` (offset 0, so page = printed page), or
- the page-tagged dump — `grep` `.build/dmg.txt` as above.

Two source tables are OCR-garbled and were reconstructed/caveated — verify on a clean PDF if precision
matters: the **Maintenance Costs** hireling columns (`06-between-adventures.md`, DMG p.127) and the
**Spell Scroll** per-level save-DC table (`07-treasure-and-magic-items.md`, values are canonical).

---

## Already covered in quick-reference

Some of the most-asked DMG content is already distilled into cheat sheets — start there:

| Topic | File | DMG page |
|---|---|---|
| **Building encounters** — XP thresholds, multipliers, adventuring-day budget | `../quick-reference/encounter-building.md` | p.81–85 (procedure p.82) |
| **Difficulty Classes** — typical DCs for setting a check | `../quick-reference/difficulty-classes.md` | p.238 |
| **New-DM / one-shot tips** — rulings vs. rules, pacing, table & safety practices | `../quick-reference/new-dm-one-shot-tips.md` | p.235–240 |

---

## Conventions for files added here

Match the PHB folder style:

- **H1 title + one-line summary + a `**Source:**` line** citing the chapter and printed pages.
- Inline citations like `(DMG p.82)`.
- Rules **rewritten** from the OCR text — not raw OCR paste, and **not** large verbatim copyrighted text (no full magic-item descriptions or stat blocks; those point back to the PDF / `.build/dmg.txt`).
- A short "Common questions" FAQ where it helps.
