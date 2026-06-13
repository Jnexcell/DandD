# Races — Overview & Index

The nine PHB player races at a glance, plus how to read a race entry. **Full per-race detail —
every trait, all subraces, sample names, flavor/lore, roleplay hooks, and the Random Height & Weight
row — now lives in the [`races/`](races/) folder, one file per race.** Use this page to compare
options quickly, then open the race file for the build.

**Source:** PHB Chapter 2, "Races" (printed pages 17–44).

---

## Race files

| Race | File | Subraces |
|------|------|----------|
| Dwarf | [`races/dwarf.md`](races/dwarf.md) | Hill, Mountain |
| Elf | [`races/elf.md`](races/elf.md) | High, Wood, Drow (Dark Elf) |
| Halfling | [`races/halfling.md`](races/halfling.md) | Lightfoot, Stout |
| Human | [`races/human.md`](races/human.md) | — (+ Variant Human option) |
| Dragonborn | [`races/dragonborn.md`](races/dragonborn.md) | — (10 draconic ancestries) |
| Gnome | [`races/gnome.md`](races/gnome.md) | Forest, Rock |
| Half-Elf | [`races/half-elf.md`](races/half-elf.md) | — |
| Half-Orc | [`races/half-orc.md`](races/half-orc.md) | — |
| Tiefling | [`races/tiefling.md`](races/tiefling.md) | — |

---

## Summary table

| Race | Ability Score Increase | Size (height) | Speed | Signature traits |
|------|------------------------|---------------|-------|------------------|
| Dwarf | Con +2 | Medium (4–5 ft) | 25 ft (not slowed by heavy armor) | Darkvision 60, dwarven resilience, stonecunning |
| └ Hill Dwarf | + Wis +1 | — | — | Dwarven toughness (+1 HP/level) |
| └ Mountain Dwarf | + Str +2 | — | — | Light & medium armor proficiency |
| Elf | Dex +2 | Medium (5–6+ ft) | 30 ft | Darkvision 60, fey ancestry, trance, keen senses |
| └ High Elf | + Int +1 | — | — | Weapon training, wizard cantrip, extra language |
| └ Wood Elf | + Wis +1 | — | 35 ft | Mask of the wild, weapon training |
| └ Drow (Dark Elf) | + Cha +1 | — | — | Superior darkvision 120, drow magic, sunlight sensitivity |
| Halfling | Dex +2 | Small (~3 ft) | 25 ft | Lucky, brave, halfling nimbleness |
| └ Lightfoot | + Cha +1 | — | — | Naturally stealthy |
| └ Stout | + Con +1 | — | — | Stout resilience (poison) |
| Human | All +1 | Medium (5–6+ ft) | 30 ft | Extra language |
| └ Variant Human | +1 to two abilities | — | — | One skill, one feat (replaces standard +1-to-all) |
| Dragonborn | Str +2, Cha +1 | Medium (6+ ft) | 30 ft | Draconic ancestry, breath weapon, damage resistance |
| Gnome | Int +2 | Small (3–4 ft) | 25 ft | Darkvision 60, gnome cunning |
| └ Forest Gnome | + Dex +1 | — | — | Minor illusion, speak with small beasts |
| └ Rock Gnome | + Con +1 | — | — | Artificer's lore, tinker |
| Half-Elf | Cha +2, +1 to two others | Medium (5–6 ft) | 30 ft | Darkvision 60, fey ancestry, skill versatility |
| Half-Orc | Str +2, Con +1 | Medium (5–6+ ft) | 30 ft | Darkvision 60, relentless endurance, savage attacks |
| Tiefling | Int +1, Cha +2 | Medium (~human) | 30 ft | Darkvision 60, hellish resistance, infernal legacy |

> **Darkvision (60 ft)** is shared by most of these races: within 60 feet you see in dim light as if
> it were bright light, and in darkness as if it were dim light (in gray shades only). Drow have a
> 120-foot range. **Humans, halflings, and dragonborn have NO darkvision** (PHB p.18, 21, 35, 38, 40, 42).

---

## How to read a race entry

Each `races/` file lays a race out in the same order:

- **Flavor & lore** — who the race is, their culture and outlook, and why you'd play one (paraphrased; the PDF is the source).
- **Quick traits** — a scannable recap of the headline numbers.
- **Racial traits** — the full mechanical package every member of the race gets:
  - **Ability Score Increase** — added on top of your rolled/bought scores.
  - **Age / Alignment / Size** — flavor + your size category (most are Medium; halflings and gnomes are Small).
  - **Speed** — base walking speed.
  - **Darkvision** — most races have 60 ft; a few have none (see note above); drow have 120 ft.
  - **Named traits** — the race's special abilities (resistances, proficiencies, innate spells, etc.).
  - **Languages** — what you can speak/read/write; some races grant a bonus language of choice.
- **Subraces** — if the race has them, pick exactly one; it adds a further ASI and features.
- **Names** — sample name lists to pick or riff on.
- **Random Height & Weight** — optional dice rolls to fix your character's exact build (PHB p.121).
- **Roleplay hooks** — prompts to bring the character to life at the table.

**Choosing a race:** your race sets ability bonuses (steer them toward your class's key ability),
your size, your speed, and a handful of always-on traits. It pairs with your **class** (what you
*do*) and your **[background](04-personality-and-background.md)** (where you came from) to make a
complete character — see [`01-creating-a-character.md`](01-creating-a-character.md) for the full
build sequence.

---

## Common questions

**Q: How many ability score increases do I get from my race?**
A: Your base race grants one set (e.g., Dwarf Con +2), and your **subrace** adds another (e.g., Hill
Dwarf Wis +1). Apply both. Human is the exception — standard human is +1 to all six, and Variant
Human is +1 to two of your choice instead (PHB p.17).

**Q: Do I have to take a subrace?**
A: If your race has subraces (dwarf, elf, halfling, gnome), **yes** — pick one; it's part of the
race. Dragonborn instead pick a **draconic ancestry**, and humans may optionally use the **Variant
Human** rules. Half-elf, half-orc, and tiefling have no subraces in the core PHB.

**Q: Which races don't have darkvision?**
A: **Humans, halflings, and dragonborn.** Everyone else in this chapter sees 60 ft in the dark
(drow see 120 ft) (PHB p.18–42).

**Q: Where did the detailed per-race rules go?**
A: Into the [`races/`](races/) folder — one file per race with every trait, all subraces, names,
height/weight, and roleplay guidance. This page is the quick comparison/index.
