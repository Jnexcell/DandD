# Player's Handbook — Folder Index

This folder is the **PHB (D&D 5e, 2014 rules) broken into per-chapter markdown summaries** with page citations back to the PDF. Each file rewrites the rules as clean prose + tables (not a verbatim copy) so a DM can answer questions fast. The PDF (`../Player's Handbook.pdf`) remains the source of truth.

For the whole knowledge base and how to answer a rules question, see the root router **`../CLAUDE.md`**. For build status, see **`../PROGRESS.md`**.

---

## Chapter map

| File | Topic | PHB printed pages |
|---|---|---|
| `01-creating-a-character.md` | How to build a character, step by step | 11–15 |
| `02-races.md` | The playable races and subraces | 17–44 |
| `03-classes.md` | Classes overview (class table, how classes work) | 45–120 |
| `classes/` | Full per-class detail (one file per class, all subclasses) | 46–120 |
| `04-personality-and-background.md` | Alignment, backgrounds, bonds/ideals/flaws | 121–142 |
| `05-equipment.md` | Coinage, armor, weapons, gear, tools, mounts | 143–162 |
| `06-customization-feats-multiclassing.md` | Multiclassing and the full feat list (optional rules) | 163–170 |
| `07-using-ability-scores.md` | The six abilities, checks, skills, passive checks | 173–179 |
| `08-adventuring.md` | Time, movement, environment, resting, between adventures | 181–187 |
| `09-combat.md` | Turn structure, actions, attacks, cover, damage, death | 189–198 |
| `10-spellcasting.md` | Rules of magic: slots, components, concentration | 201–206 |
| `11-spells.md` | Spells overview + how to read a spell entry | 207 (chapter) |
| `spells/` | Spell index + full spell detail by level (`spell-index.md`, `cantrips.md`, `level-1.md` … `level-9.md`) | 207–289 |
| `appendices.md` | A: Conditions; B: Gods; C: Planes; D: Creature stats | 290–317 |

Chapter 11 "Spells" begins on **printed page 207** (physical PDF page 188); the spell descriptions run alphabetically through roughly printed page 289. Appendix A (Conditions) is printed p.290–292.

---

## PHB page-offset drift (important for citations)

The PHB PDF is a **293-page scan of the 320-page printed book** — the scan is missing pages, so **there is no constant printed→physical offset**. The drift grows from about **+4 in the early chapters to ~+27 in the late chapters**. (For comparison, the DMG offset is 0 and the MM offset is +1; only the PHB drifts.)

**Therefore: always cite by the printed page, and locate content by heading, never by arithmetic.** To find a page in the text dump:

```bash
grep -n -i "<keyword>" ~/git/dnd/.build/phb.txt   # find the line
```

Each page in the dump is tagged `@@@ PAGE physical=N folio=X @@@`; use the nearest `folio=` (the book's own printed page number) for the citation. Note that many class and spell pages were not OCR'd with a folio number (`folio=?`), so cite from the printed page ranges in the table above when the folio is missing.

---

## Conventions in these files

- **H1 title + one-line summary + a `**Source:**` line** citing the chapter and printed pages.
- Inline citations like `(PHB p.195)`.
- Rules rewritten and corrected from the OCR text — **not** raw OCR paste, and **not** large verbatim copyrighted text (no full spell descriptions or stat blocks here; those point back to the PDF / the `spells/` and `classes/` detail files).
- A short "Common questions" FAQ where it helps.
