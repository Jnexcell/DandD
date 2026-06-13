# Spells

Overview of the spells chapter — how the PHB organizes spells, how to read a spell entry, and the eight schools of magic. The full spell descriptions live in the `spells/` folder, not here.

**Source:** PHB Chapter 11, "Spells" (begins printed page 207 / physical PDF page 188). The schools of magic are defined in Chapter 10 (printed p.203).

---

## How spells are organized in the PHB

The chapter opens with the **spell lists of the spellcasting classes** — one list per class (Bard, Cleric, Druid, Paladin, Ranger, Sorcerer, Warlock, Wizard), grouped by spell level, telling you which spells each class can learn (PHB p.207). After the lists comes the bulk of the chapter: the **spell descriptions, presented in alphabetical order by spell name** (PHB p.207). So to look a spell up you go straight to its name; to see what a class can cast, you use that class's list.

---

## How to read a spell entry

Every spell description follows the same layout (PHB p.201–203):

| Line | What it tells you |
|---|---|
| **Name** | The spell's name (entries are alphabetical). |
| **Level & school** | E.g., "3rd-level evocation." Cantrips read "evocation cantrip." The level sets which slot you need; the school (below) is mostly flavor but some rules key off it. |
| **Casting Time** | Usually 1 action; some are a bonus action, a reaction (with a stated trigger), or minutes/hours. Reaction spells say what triggers them. |
| **Range / Area** | The distance (Self, Touch, a number of feet, Sight, Unlimited) and, if relevant, the area shape (cone, cube, cylinder, line, sphere). |
| **Components** | **V** (verbal), **S** (somatic), **M** (material). Material components are listed in parentheses; a gp cost or "which the spell consumes" means you must supply that specific item. |
| **Duration** | How long it lasts: Instantaneous, a number of rounds/minutes/hours, "until dispelled," etc. A duration beginning with **"Concentration, up to …"** means the spell requires concentration (you can hold only one such spell at a time). |
| **Description** | What the spell does — the body text, including any saving throw, attack roll, or damage. |
| **At Higher Levels** | If present, the extra effect you get by casting the spell using a spell slot **higher than its base level** (upcasting). Spells with no such line gain nothing from a bigger slot. Cantrips instead scale with **character level**, noted in their text. |

For the mechanics behind all of this — slots, upcasting, ritual casting, concentration saves, the spell save DC and attack formulas — see **`10-spellcasting.md`**.

---

## The eight schools of magic

Academies group every spell into one of eight schools. The schools are mostly descriptive — they have no rules of their own — but some features and items reference them (e.g., a Wizard's Arcane Tradition) (PHB p.203).

| School | In one line |
|---|---|
| **Abjuration** | Protective magic — barriers, wards, negating effects, banishing creatures. |
| **Conjuration** | Transporting, summoning, or teleporting objects and creatures; creating things from nothing. |
| **Divination** | Revealing information — secrets, the future, hidden things, truth behind illusions. |
| **Enchantment** | Affecting minds — charming, compelling, or controlling a creature's behavior. |
| **Evocation** | Channeling raw magical energy — blasts of fire/lightning, or healing energy. |
| **Illusion** | Deceiving the senses or mind — false images, phantom sounds, or implanted memories. |
| **Necromancy** | Manipulating life and death — draining life, creating undead, restoring the dead. |
| **Transmutation** | Changing the properties of a creature, object, or environment. |

---

## Pointers

- **Rules of magic** (slots, components, concentration, save DCs) → `10-spellcasting.md`.
- **Spell index** (every spell: name, level, school, classes, casting time, range, components, duration, page) → `spells/spell-index.md`.
- **Full spell detail by level** → `spells/level-N.md` (and `spells/cantrips.md` for level-0 spells).
