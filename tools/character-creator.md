# Character Creation Helper — Workflow (PHASE 2b)

**What this is:** a guided, *draft-then-refine* workflow that walks a **player** through building a
**1st-level** D&D character and emits a personalized, at-the-table **character packet**. It leans entirely
on the verified PHB knowledge base — pull numbers from there, don't re-derive rules.

**How to invoke (Josh or a player):** say something like *"help me make a character,"* *"build a
character,"* or *"use the character creator."* Claude then **reads this file and executes it**: hand over
the chooser, intake the picks, guide the detail choices, compute the numbers, and save the packet to
`characters/<name>.md`.

> **For Claude — this file is an executable playbook.** Run the 5 steps in order: **Welcome & Chooser →
> Intake & guided choices → Compute → Emit → Refine**, using the data layer at the bottom. Output **one**
> packet file per character. Scope is **level 1 only** (higher levels + batch pre-gens are a later build).
> Use only spells we have built (**cantrips–5th**, in `players-handbook/spells/`); at level 1 a caster only
> needs cantrips + 1st-level spells, which are all present.

> **Cross-cutting design rule — welcoming to non-D&D players AND vets.** Serve a total first-timer and an
> experienced player at once, without talking down to either: explain jargon inline the first time
> (*"AC — Armor Class, how hard you are to hit"*), recommend defaults for newcomers, and keep confirmations
> fast for vets. The **packet you emit is layered** (clean numbers a vet scans + plain-language "what this
> does · when to use it" a newcomer reads) — the same artifact works for both.

---

## STEP 1 — Welcome & the Chooser

1. **Gauge experience (one quick question):** *"New to D&D, or experienced?"* Use the answer to set your
   verbosity for the rest of the build — newcomers get more explanation + recommendations; vets get terse
   confirmations. (This only changes how you talk; the emitted packet is the same.)
2. **Hand over the chooser.** Point the player to **`../characters/_CHOOSER.md`** (the reusable print-once
   worksheet) and have them **circle one** in each of: **Race · Class · Background · Ability-score method**,
   and jot a **name + a personality note**. The chooser explains every option in plain language so they can
   choose confidently. Accept choices stated verbally too — *"I want a sneaky wood-elf"* is enough; you can
   read them the relevant cards.
3. **Echo back the big-picks** in one line (*"Wood Elf Fighter, Soldier background, standard array, name
   'Lyra'"*) and move on. Don't wait for further confirmation unless something's contradictory (e.g. a class
   whose key ability the chosen method can't support — flag it, suggest a fix).

---

## STEP 2 — Intake & guided detail choices

With the big-picks locked, walk the player through the remaining choices their picks imply. Pull every
option list from the relevant KB file; offer a recommended pick for newcomers ("you pick" / "surprise me"
is always fine — choose for them and say why).

**2.1 Ability scores.** Assign by the chosen method, then **apply racial increases**:
- **Standard array** (default for new players): **15, 14, 13, 12, 10, 8** — assign to the six abilities.
- **27-point buy** or **4d6-drop-lowest** if they circled those (rules + costs in `01-creating-a-character.md`).
- **Then add the race's Ability Score Increase** from `02-races.md` / the `races/` file (base race + subrace).
- Steer the highest score to the class's **primary ability** (`03-classes.md`); record final scores **and**
  modifiers (mod = ⌊(score − 10) / 2⌋).

**2.2 Class choices at level 1** (open the `classes/<class>.md` file):
- **Skills** — choose the listed number from the class's skill list (most pick 2; rogue 4, bard 3, ranger 3).
- **Level-1 subclass where the class has one** — **Cleric** Divine Domain, **Sorcerer** Sorcerous Origin,
  **Warlock** Otherworldly Patron (others choose later, so skip at L1). Apply its 1st-level features (e.g.
  Life Domain → heavy-armor proficiency + always-prepared domain spells).
- **Fighting Style** — fighter (and any class that grants one at 1st).
- **Spells (casters only)** — pick **cantrips** and **1st-level spells** from the class's spell list in
  `classes/<class>.md` (and `spells/cantrips.md` / `spells/level-1.md` for what each does):
  - **Prepared casters** (Cleric, Druid) prepare *Wis-mod + level* spells daily from the whole list; record a
    starting loadout. Domain/circle spells are **always prepared** and don't count against the total.
  - **Known casters** (Bard, Sorcerer, Warlock, Wizard, Ranger) learn a fixed number — use the class table's
    "known"/"cantrips known" counts (Wizard: spellbook of **six** 1st-level spells, prepares *Int-mod + level*).
  - Cantrips are always available, never "prepared."

**2.3 Background** (open `backgrounds/<background>.md`): record its **2 skills**, any **tool/language**
grants, the **feature**, and the **equipment package**. If a background skill duplicates a class/race one,
pick a different skill of the same kind (PHB rule; note it).

**2.4 Equipment & AC.** Take the **class package + background package** (or, if they prefer, roll starting
gold and buy from `05-equipment.md` — one or the other, not both). Then **compute AC** from the armor table
in `05-equipment.md`:
- Light armor = base + full Dex; Medium = base + Dex (max +2); Heavy = flat value; **Shield +2**; no
  armor = 10 + Dex. (Key values: Leather 11+Dex, Studded 12+Dex, Scale mail 14+Dex[max2], Chain mail 16,
  Plate 18.) Honor armor proficiency (a domain may grant heavy armor).

**2.5 Personality.** Pick (or roll) a **personality trait, ideal, bond, and flaw** from the background's
tables, plus **alignment** and basic details. Newcomers: offer a quick suggestion that fits their concept.

---

## STEP 3 — Compute the character (the math core)

Fill every derived number; sanity-check each. Formula → source:

| Number | How | Source |
|---|---|---|
| **Ability modifiers** | ⌊(score−10)/2⌋, after racial ASIs | `01-creating-a-character.md` |
| **Proficiency bonus** | **+2** at level 1 | `03-classes.md` |
| **Hit Points** | **max Hit Die + Con mod** (+1/level if Hill Dwarf) | class file, `races/` |
| **Armor Class** | armor base + Dex (per category) + shield | `05-equipment.md` |
| **Initiative** | Dex mod | `09-combat.md` |
| **Speed** | race base | `races/` |
| **Saving throws** | mod (+prof on the class's **two** proficient saves) | class file |
| **Skill modifiers** | ability mod (+prof if proficient; ×2 for rogue/bard **Expertise**) | `07-using-ability-scores.md` |
| **Passive Perception** | **10 + Wis mod** (+prof if proficient in Perception) | `07-using-ability-scores.md` |
| **Attack bonus / damage** | per weapon: d20 + ability mod + prof; damage = die + ability mod (Str melee / Dex ranged / finesse choice; +Fighting Style) | `01-creating-a-character.md`, `05-equipment.md` |
| **Spell save DC** | **8 + prof + spellcasting-ability mod** | `10-spellcasting.md`, class file |
| **Spell attack** | **prof + spellcasting-ability mod** | `10-spellcasting.md` |
| **Spell slots / cantrips / prepared count** | class table (L1: 2 first-level slots, 3 cantrips for most full casters) | class file |
| **Languages** | race + background grants | `races/`, `backgrounds/`, `04-personality-and-background.md` |
| **Features** | every racial trait + every class L1 feature + background feature | `races/`, class file, `backgrounds/` |

---

## STEP 4 — Emit the packet

Write the character to **`characters/<name>.md`** (slug = kebab of the character name, e.g.
`lyra-shadowleaf.md`) using **`../characters/_TEMPLATE.md`**. Fill every section; for each **spell, racial
trait, class feature, and background feature**, write a one-line **"what it does · when to use it"** in plain
language (pull spell effects from `spells/`). Keep the layered format so a vet can scan the stat block and a
newcomer can read the glosses. End the packet with the **"How to play this character"** coaching block.

Then tell the player it's saved and give a 3–4 line summary (who they are, AC/HP, their signature move).

---

## STEP 5 — Refine

The player reacts (*"more of a tank," "swap to a different domain," "I'd rather use a rapier," "redo my
scores with point-buy"*). Edit the saved `characters/<name>.md` **in place**:
- When **scores/race/class** change → re-run the STEP 3 math (every dependent number: mods, HP, AC, saves,
  skills, DC, attacks).
- When **spells/equipment** change → update those sections + any number they feed (AC, attack lines).
- Keep the "How to play" block consistent with the final build.

---

## Data layer this workflow stands on (pull from, don't re-derive)
| Need | File |
|---|---|
| Build sequence · ability methods · derived-stat formulas | `players-handbook/01-creating-a-character.md` |
| Race options + ASIs/speed/traits | `players-handbook/02-races.md` + `players-handbook/races/*` |
| Class table (Hit Die, saves, primary, subclass level) | `players-handbook/03-classes.md` |
| Per-class features, skill lists, starting kit, spell lists | `players-handbook/classes/*` |
| Backgrounds (skills, feature, equipment, trait tables) | `players-handbook/04-personality-and-background.md` + `players-handbook/backgrounds/*` |
| Equipment · **armor/AC table** · packs · starting gold | `players-handbook/05-equipment.md` |
| Feats (if the DM allows them in place of an ASI — N/A at L1) | `players-handbook/06-customization-feats-multiclassing.md` |
| Spellcasting rules (slots, prepared vs known, concentration) | `players-handbook/10-spellcasting.md` |
| Spell descriptions (cantrips–5th; L1 needs cantrips + 1st) | `players-handbook/spells/*` |
| Skills by ability · passive checks | `players-handbook/07-using-ability-scores.md` |
| The chooser worksheet | `../characters/_CHOOSER.md` |
| Output structure | `../characters/_TEMPLATE.md` |

*Scope note: **level 1 only.** Planned follow-ups (tracked in `../PROGRESS.md`): **HTML** versions of the
chooser + a printable packet (the eventual print-and-circle goal); **levels 2–5** (subclass-at-3, ASIs,
multi-level slots); and a **batch pre-gen party** mode (generate N ready-to-play characters at once). 2a
(Session Creator) and 2c (live DM Assistant) are separate tools; a finished character packet here is the
kind of input the live assistant can reference at the table.*
