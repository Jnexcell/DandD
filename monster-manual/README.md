# Monster Manual — Folder Index

This folder is the **Monster Manual (D&D 5e, 2014 rules) turned into lookup indexes** — find a monster fast by name, by Challenge Rating, or by creature type, then read its full stat block in the PDF (`../Monster Manual.pdf`). These are factual indexes (name / page / CR / type), **not** rewrites of the stat blocks themselves; the PDF remains the source of truth.

For the whole knowledge base and how to answer a rules question, see the root router **`../CLAUDE.md`**. For build status, see **`../PROGRESS.md`**.

---

## Files in this folder

| File | Use it to… |
|---|---|
| `monster-index.md` | Find **where a monster is** — alphabetical Name → printed MM page. The primary "where do I find X?" lookup. |
| `monsters-by-cr.md` | Pick a monster for an encounter by **Challenge Rating** (ascending). Complete for CR 0–10; spottier above. |
| `monsters-by-type.md` | Browse monsters by **creature type** (Aberration, Beast, Dragon, Fiend, Undead, …) with CR + page. |
| `README.md` | This file: how the MM is organized + how to read a stat block. |

---

## How the Monster Manual is organized

1. **Monsters A–Z** (printed pp.12–316). The bulk of the book: monster entries in alphabetical order. Related creatures are often grouped under one heading — e.g. all the **Dragons** sit together (pp.86–118) by color and age category, all the **Demons** under "Demons" (pp.50–65), all the **Giants** under "Giants" (pp.149–156). So an entry's alphabetical position is by its *group* name (look up "Pit Fiend" under **Devils**, "Balor" under **Demons**, "Hill Giant" under **Giants**).
2. **Appendix A: Miscellaneous Creatures** (pp.317–341). The "beasts/animals" appendix — ordinary and giant animals (bears, wolves, snakes, giant spiders), plus a few low-CR non-beasts (axe beak, blink dog, swarms, worg, winter wolf). This is where most **Beast**-type stat blocks live.
3. **Appendix B: Nonplayer Characters** (pp.342–350). Generic humanoid NPC stat blocks — acolyte, bandit, guard, knight, mage, priest, thug, etc. — usable for human and nonhuman NPCs alike.
4. **Index of Stat Blocks** (p.351). The book's own back-of-book index.

> **Page-offset reminder:** The MM PDF offset is **+1** — `physical PDF page = printed page + 1` (so printed p.50 = physical PDF page 51). All citations in these files use the **printed** page. To open a printed page in the PDF: `pdftotext -f <printed+1> -l <printed+1> "Monster Manual.pdf" -`. To grep the text dump: `grep -n -i "<name>" ../.build/mm.txt` (pages are tagged `@@@ PAGE physical=N`; printed = N − 1).

---

## How to read a stat block

A stat block is read top to bottom in this order (MM pp.7–11 describe each part):

**Header**
- **Name** — the creature's name (in small caps in the book).
- **Size + Type + (Tags), Alignment** — the line just under the name, e.g. *Large dragon (chromatic), chaotic evil* or *Medium humanoid (any race), any alignment*. **Size** is Tiny / Small / Medium / Large / Huge / Gargantuan. **Type** is one of the 14 creature types (see `monsters-by-type.md`). **Tags** in parentheses (e.g. `(goblinoid)`, `(demon)`, `(shapechanger)`) carry no rules of their own but other effects may reference them. **Alignment** is the default — change it freely.

**Defenses & movement**
- **Armor Class (AC)** — with the source in parentheses (e.g. *17 (natural armor)*, *15 (chain shirt, shield)*).
- **Hit Points** — average, then the Hit Dice expression, e.g. *45 (6d10 + 12)*. Hit Die size is set by creature size (Tiny d4, Small d6, Medium d8, Large d10, Huge d12, Gargantuan d20); the Constitution modifier × number of dice is added in.
- **Speed** — walking speed, plus any **burrow / climb / fly / swim** speeds (and *hover* if it can).

**Ability scores**
- The six abilities — **STR, DEX, CON, INT, WIS, CHA** — each with its score and modifier, e.g. *18 (+4)*.

**Proficiencies & defenses (only shown when the creature has them)**
- **Saving Throws** — bonuses for saves the creature is proficient in (ability modifier + proficiency bonus).
- **Skills** — skill-check bonuses (sometimes doubled proficiency for expertise).
- **Damage Vulnerabilities / Resistances / Immunities** — damage types it takes double / half / no damage from.
- **Condition Immunities** — conditions that can't affect it (e.g. charmed, frightened, poisoned).
- **Senses** — special senses with ranges (**darkvision**, **blindsight**, **tremorsense**, **truesight**) plus **passive Perception** (always listed). "Blind beyond this radius" is noted where it applies.
- **Languages** — languages it speaks/understands; `—` means none. May note **telepathy** with a range.

**Threat rating**
- **Challenge** — the challenge rating followed by the XP award, e.g. *Challenge 5 (1,800 XP)*. CR also sets the creature's **proficiency bonus** (see table below). CR 0 monsters are worth **0 or 10 XP** (0 if they have no effective attacks).

**Abilities (in this order)**
- **Traits** — passive/always-on features (e.g. *Amphibious*, *Pack Tactics*, *Magic Resistance*, *Innate Spellcasting*, *Spellcasting*, *Legendary Resistance*). They appear after Challenge and before Actions.
- **Actions** — what it can do with its action: **Multiattack**, melee/ranged attacks (with *Hit:* damage), special attacks. Some have **Recharge X–Y** or **X/Day** usage limits.
- **Reactions** — special things it can do with its reaction (absent if it has none).
- **Legendary Actions** — only for **legendary creatures**: a pool of extra actions usable at the end of *other* creatures' turns, refreshed at the start of its turn.
- **Lair Actions / Regional Effects** — for legendary creatures encountered **in their lair**: lair actions trigger on **initiative count 20** (losing ties); regional effects shape the surrounding area and fade when the creature dies.

---

## CR → Proficiency Bonus & XP reference

From the *Proficiency Bonus by Challenge Rating* and *Experience Points by Challenge Rating* tables (MM pp.8–9). Use this to sanity-check a stat block's save/skill bonuses and to total XP for encounter budgets (the DMG explains XP budgets).

| CR | Prof. Bonus | XP |
|---|---|---|
| 0 | +2 | 0 or 10 |
| 1/8 | +2 | 25 |
| 1/4 | +2 | 50 |
| 1/2 | +2 | 100 |
| 1 | +2 | 200 |
| 2 | +2 | 450 |
| 3 | +2 | 700 |
| 4 | +2 | 1,100 |
| 5 | +3 | 1,800 |
| 6 | +3 | 2,300 |
| 7 | +3 | 2,900 |
| 8 | +3 | 3,900 |
| 9 | +4 | 5,000 |
| 10 | +4 | 5,900 |
| 11 | +4 | 7,200 |
| 12 | +4 | 8,400 |
| 13 | +5 | 10,000 |
| 14 | +5 | 11,500 |
| 15 | +5 | 13,000 |
| 16 | +5 | 15,000 |
| 17 | +6 | 18,000 |
| 18 | +6 | 20,000 |
| 19 | +6 | 22,000 |
| 20 | +6 | 25,000 |
| 21 | +7 | 33,000 |
| 22 | +7 | 41,000 |
| 23 | +7 | 50,000 |
| 24 | +7 | 62,000 |
| 25 | +8 | 75,000 |
| 26 | +8 | 90,000 |
| 27 | +8 | 105,000 |
| 28 | +8 | 120,000 |
| 29 | +9 | 135,000 |
| 30 | +9 | 155,000 |

**Proficiency bonus pattern:** +2 for CR 0–4, then +1 for every 4 CR (+3 at 5–8, +4 at 9–12, +5 at 13–16, +6 at 17–20, +7 at 21–24, +8 at 25–28, +9 at 29–30).
