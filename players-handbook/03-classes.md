# Classes

Overview of the 12 character classes and how class mechanics work — the class table, hit points, proficiency bonus, ability score improvements, and subclasses. Full per-class features live in the `classes/` folder.

**Source:** PHB Chapter 3, "Classes" (printed pages 45–120). Page-offset drifts — locate a class by heading in `.build/phb.txt`.

---

## The 12 classes at a glance

Each class has two saving throw proficiencies (one "strong" and one secondary), a Hit Die, a primary ability, and a spellcasting nature. Saving throws and Hit Dice below are taken directly from each class's "Proficiencies" block in the PHB.

| Class | Primary ability | Hit Die | Saving throws | Spellcaster | Role (one line) |
|---|---|---|---|---|---|
| Barbarian | Strength | d12 | Strength, Constitution | None | Raging melee bruiser; huge HP, Reckless Attack, damage resistance while raging |
| Bard | Charisma | d8 | Dexterity, Charisma | Full | Versatile face/support; Bardic Inspiration, jack-of-all-trades, broad spell list |
| Cleric | Wisdom | d8 | Wisdom, Charisma | Full | Divine healer/buffer; Channel Divinity, domain shapes combat vs. support |
| Druid | Wisdom | d8 | Intelligence, Wisdom | Full | Nature caster + Wild Shape; battlefield control and shapeshifting |
| Fighter | Strength or Dexterity | d10 | Strength, Constitution | None* | Weapon master; extra attacks, Action Surge, Second Wind, most ASIs |
| Monk | Dexterity & Wisdom | d8 | Strength, Dexterity | None | Unarmored martial artist; ki-fueled flurries, mobility, stunning strikes |
| Paladin | Strength & Charisma | d10 | Wisdom, Charisma | Half | Holy warrior; Divine Smite, auras, Lay on Hands, oath powers |
| Ranger | Dexterity & Wisdom | d10 | Strength, Dexterity | Half | Wilderness skirmisher; favored enemy, extra attacks, nature spells |
| Rogue | Dexterity | d8 | Dexterity, Intelligence | None* | Skill/stealth expert; Sneak Attack, Cunning Action, expertise, evasion |
| Sorcerer | Charisma | d6 | Constitution, Charisma | Full | Innate blaster; Metamagic + sorcery points bend spells on the fly |
| Warlock | Charisma | d8 | Wisdom, Charisma | Pact | Pact caster; few but always-max-level slots refreshed on a short rest, invocations |
| Wizard | Intelligence | d6 | Intelligence, Wisdom | Full | Scholarly caster; largest spell list, spellbook, ritual mastery, Arcane Recovery |

\* Fighter and Rogue are non-casters by default but gain limited spellcasting via the Eldritch Knight and Arcane Trickster subclasses respectively.

**Note on "full/half/third/pact":**
- **Full** casters (Bard, Cleric, Druid, Sorcerer, Wizard) reach 9th-level spells around 17th character level.
- **Half** casters (Paladin, Ranger) start casting at 2nd level and top out at 5th-level spells.
- **Third** casters are the Eldritch Knight (Fighter) and Arcane Trickster (Rogue) subclasses — they top out at 4th-level spells.
- **Pact magic** (Warlock) is its own system: a small number of spell slots, all cast at the same (highest available) level, regained on a **short or long rest** (PHB p.107).

---

## How classes work

### Levels and class features (PHB p.45)
A character gains class features by advancing in level (1–20). Each class's table lists, by level, the new features gained, spell slots (for casters), and the proficiency bonus. Gaining a level grants more hit points and, usually, one or more new features.

### Hit points and Hit Dice (PHB p.12, 45)
- At **1st level** your maximum HP = your class's max Hit Die value + your Constitution modifier.
- At each level after 1st, add **one roll (or the fixed average) of your class Hit Die + your Constitution modifier**. The fixed average per die is half + 1 (d6 → 4, d8 → 5, d10 → 6, d12 → 7).
- Your **number of Hit Dice equals your character level**; you spend them to heal during a short rest (PHB p.186).

### Proficiency bonus (PHB p.45)
A single bonus tied to character (not class) level, added to attack rolls, ability checks, and saving throws you're proficient in, and to spell save DC/attack. It scales: **+2 at levels 1–4, +3 at 5–8, +4 at 9–12, +5 at 13–16, +6 at 17–20.**

### Ability Score Improvements (ASI) (PHB p.45 and each class table)
Most classes gain an ASI at **levels 4, 8, 12, 16, and 19** — raise one score by 2 or two scores by 1 (no score above 20), or take a feat instead (feats are optional, PHB Ch.6 p.165). **Fighters get extra ASIs at 6 and 14**, and **Rogues get an extra ASI at 10** — these two classes have more ASIs than the others.

### Subclasses / archetypes
Every class chooses a subclass (the PHB calls them by various names — Primal Path, Bard College, Divine Domain, etc.) that grants a thread of extra features at set levels. The choice level varies by class:

| Class | Subclass name | Chosen at level |
|---|---|---|
| Barbarian | Primal Path | 3 |
| Bard | Bard College | 3 |
| Cleric | Divine Domain | **1** |
| Druid | Druid Circle | 2 |
| Fighter | Martial Archetype | 3 |
| Monk | Monastic Tradition | 3 |
| Paladin | Sacred Oath | 3 |
| Ranger | Ranger Archetype | 3 |
| Rogue | Roguish Archetype | 3 |
| Sorcerer | Sorcerous Origin | **1** |
| Warlock | Otherworldly Patron | **1** |
| Wizard | Arcane Tradition | 2 |

Cleric, Sorcerer, and Warlock pick at 1st level; Druid and Wizard at 2nd; everyone else at 3rd.

### Starting equipment (PHB p.45)
At 1st level you take the **equipment package** listed in your class (plus your background's gear). Alternatively, you may **roll starting gold** by class and buy gear from Chapter 5 — but you can do one or the other, not both. Multiclassed characters use the standard equipment only when they take their first class.

### Multiclassing
Gaining levels in more than one class is an **optional rule** in Chapter 6 (p.163), with its own ability-score prerequisites and proficiency rules — not part of the basic class chapter.

---

## Full per-class detail → `classes/` folder

Each class has its own file with the complete feature-by-level breakdown and every subclass:
`classes/barbarian.md`, `classes/bard.md`, `classes/cleric.md`, `classes/druid.md`, `classes/fighter.md`, `classes/monk.md`, `classes/paladin.md`, `classes/ranger.md`, `classes/rogue.md`, `classes/sorcerer.md`, `classes/warlock.md`, `classes/wizard.md`.

For the rules of casting (slots, concentration, components), see `10-spellcasting.md`. For the spell lists and descriptions, see `11-spells.md` and the `spells/` folder.
