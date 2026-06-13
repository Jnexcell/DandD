# DMG Appendices — Orientation

What the four DMG appendices are *for* and where to find them: a roll-up system for generating dungeons (A), monster lists sorted by environment and CR for stocking encounters (B), sample maps (C), and a recommended-reading list (D). This is a pointer file — it explains each appendix and links the source; it does **not** reproduce the large generation tables or monster lists.

**Source:** DMG Appendices A–D (printed pages 290–316), followed by the Index (p.317). The appendix block sits at the back of the book after Chapter 9.

> **Citations:** the DMG PDF has a **constant offset of 0** — physical page = printed page, and the `@@@ PAGE physical=N @@@` tag in `.build/dmg.txt` *is* the printed page. Cite as `(DMG p.X)`.

---

## At a glance

| App. | Title | Printed pages | What it's for |
|---|---|---|---|
| A | Random Dungeons | 290–301 | Step-by-step tables to generate a dungeon on the fly, room by room. |
| B | Monster Lists | 302–309 | Every *Monster Manual* monster sorted by **environment** and by **challenge rating** — an encounter-stocking aid. |
| C | Maps | 310–315 | A handful of finished sample maps to drop into play. |
| D | Dungeon Master Inspiration | 316 | A recommended-reading / inspirational-sources list (the DMG's "Appendix N"). |

The **Index** follows on p.317.

---

## Appendix A — Random Dungeons (DMG p.290–301)

A self-contained system of tables that **generates a dungeon as you go**, one feature at a time. You roll for a piece of the map, draw it, then roll for what connects to it, repeating until you decide to stop. The tables are *iterative*: each result spawns the next set of rolls (DMG p.290).

**When to reach for it:** improvising when the party goes somewhere you didn't prep, building a quick site between sessions, solo or prep-light play, or just kicking loose a fresh layout when your imagination stalls. Because it can sprawl past a single sheet of graph paper, the appendix tells you to set size limits up front and curtail anything that runs off the page edge (DMG p.290).

**The process** (each step has its own table; roll or pick):

1. **Starting area** (DMG p.290) — roll a chamber or set of corridors at the entrance, then choose one of its doors/passages as the dungeon's way in.
2. **Passages** (DMG p.290–291) — roll repeatedly to extend corridors, add branches and side passages, and determine passage width, until a passage hits a door or chamber.
3. **Doors** (DMG p.291) — determine door type and what lies **beyond a door** (including secret doors).
4. **Chambers** (DMG p.291) — roll a chamber's size and shape, plus how many exits it has.
5. **Stairs** (DMG p.291) — where vertical features lead.
6. **Connecting areas** (DMG p.292) — how passages tie back into the growing map.
7. **Stocking a dungeon** (DMG p.292–301) — flesh out each chamber: its **purpose**, **current state** (intact, ruined, etc.), and **contents** (a dominant inhabitant, allied/random creatures, treasure, hazards, tricks, obstacles), plus **dungeon dressing** for atmospheric detail.

The Dungeon Chamber Contents step distinguishes a **dominant inhabitant** (the creature controlling the area), its **pets/allies**, and **random creatures** just passing through — and it points back to Chapter 3's random-encounter guidance for the wandering kind (DMG p.296).

> The actual generation tables are large and live only in the PDF / `.build/dmg.txt` (p.290–301). This file is the orientation; consult the source when you sit down to roll one up.

---

## Appendix B — Monster Lists (DMG p.302–309)

A reference that sorts the *Monster Manual* roster two ways so you can quickly find appropriate creatures when **stocking encounters** — for Appendix A's dungeons, for random-encounter tables, or for any "what lives here?" decision. The lists deliberately omit monsters that don't customarily inhabit ordinary environments (e.g., angels and demons) (DMG p.302).

**Monsters by Environment (DMG p.302–305).** Within each environment, creatures are grouped by challenge rating. The eleven environment categories (verified against the dump):

- Arctic
- Coastal
- Desert
- Forest
- Grassland
- Hill
- Mountain
- Swamp
- Underdark
- Underwater
- Urban

**Monsters by Challenge Rating (DMG p.305–309).** The same roster sorted purely by CR (from CR 0 upward) — the companion to the encounter-building math, which tells you to "pick monsters whose adjusted XP lands in your budget" and then points here to find them by CR (see Chapter 3 / [`03-creating-adventures.md`](03-creating-adventures.md)).

### Cross-link: the Monster Manual indexes (already built)

The knowledge base already has fuller, searchable indexes of the MM roster. For most lookups, start with these rather than re-deriving Appendix B's lists:

- **By challenge rating:** [`../monster-manual/monsters-by-cr.md`](../monster-manual/monsters-by-cr.md) — pick a creature to fit an encounter's XP budget.
- **By creature type:** [`../monster-manual/monsters-by-type.md`](../monster-manual/monsters-by-type.md) — beasts, fiends, undead, etc.
- **Alphabetical / find one:** [`../monster-manual/monster-index.md`](../monster-manual/monster-index.md) — locate a specific stat block.

Appendix B's distinctive value over those is the **environment** axis — it's the quickest place to answer "what could plausibly show up in a swamp / the Underdark / a city?" The full lists themselves are in the PDF / `.build/dmg.txt` (p.302–309).

---

## Appendix C — Maps (DMG p.310–315)

A small gallery of **finished sample maps** you can repurpose directly into play (multi-floor buildings, dungeons, and the like; scaled at one square = 5 feet). The appendix's own advice: drawing a good map is fun but time-consuming, so unless you need something specific, repurpose an existing map — published adventures and the Internet are rich sources, and these samples are here to be used freely (DMG p.310).

These are images; there's nothing to summarize in prose. View them in the PDF (p.310–315).

---

## Appendix D — Dungeon Master Inspiration (DMG p.316)

The DMG's **recommended-reading and inspirational-sources list** — its equivalent of *AD&D*'s famous "Appendix N." It's a curated (not exhaustive) set of titles on storytelling, writing, game design, mapmaking, history, and the hobby's own history, picked by playtesters and the D&D creative team, intended to help you become a better storyteller, writer, performer, and mapmaker (DMG p.316). It points to **Appendix E of the *Player's Handbook*** for more inspirational *reading* (fiction).

The list is a bibliography of third-party works; consult the PDF (p.316) for the full set of titles. The book's **Index** begins immediately after, on p.317.

---

## Common questions

**Q: I need a dungeon right now and prepped nothing — what do I use?**
A: Appendix A (DMG p.290–301). Roll a starting area, then iteratively roll passages, doors, chambers, and stairs, and stock each room from the Stocking a Dungeon tables. Set a size limit first so it doesn't run away from you.

**Q: Where do I find monsters that fit a particular terrain?**
A: Appendix B's **Monsters by Environment** lists (DMG p.302–305) — arctic, coastal, desert, forest, grassland, hill, mountain, swamp, Underdark, underwater, urban. For type/CR/alphabetical lookups, use the MM indexes: [`../monster-manual/monsters-by-cr.md`](../monster-manual/monsters-by-cr.md), [`../monster-manual/monsters-by-type.md`](../monster-manual/monsters-by-type.md), [`../monster-manual/monster-index.md`](../monster-manual/monster-index.md).

**Q: How does Appendix B connect to building an encounter?**
A: Chapter 3's encounter math gives you an XP budget; Appendix B's **Monsters by Challenge Rating** (DMG p.305–309) is where you shop for creatures whose CR/XP fits that budget. See [`03-creating-adventures.md`](03-creating-adventures.md) and [`../quick-reference/encounter-building.md`](../quick-reference/encounter-building.md).

**Q: Are there ready-made battle maps?**
A: Yes — Appendix C (DMG p.310–315) has a few sample maps at 5-feet-per-square. They're images; grab them from the PDF.

**Q: Is there a recommended-reading list, like Gygax's Appendix N?**
A: Appendix D (DMG p.316). It also cross-references the PHB's Appendix E for fiction.

**Q: These big generation tables aren't reproduced here — where are they?**
A: By design. The full Random Dungeon tables (p.290–301) and Monster Lists (p.302–309) live in the PDF / `.build/dmg.txt`; this file orients you to what each appendix does and where to find it.
