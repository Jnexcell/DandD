# Spellcasting

The rules of magic (not the spell list): what a spell is, spell levels and slots, casting at higher levels, cantrips and rituals, the spellcasting ability and its formulas, components and foci, casting time, range, duration and concentration, targets, areas of effect, the schools of magic, and casting in armor.

**Source:** PHB Chapter 10, "Spellcasting" (printed pages 201–206). For *how to read a spell entry* see also `11-spells.md`; for the spell lists themselves see `spells/`.

---

## What is a spell?

A spell is a discrete magical effect — a single shaping of magical energy into a specific, limited expression, usually completed in seconds. Spells can serve as tools, weapons, or wards: they deal or undo damage, impose or remove conditions, drain or restore life, and more. Every spellcaster follows the same casting rules regardless of class or source (PHB p.201).

## Spell level

Every spell has a level from **0 to 9**, a rough indicator of power (PHB p.201).

- **Cantrips** are level **0** — simple spells cast at will.
- Level **1** spells (like *magic missile*) are modest; level **9** (*wish*) is earth-shaking.
- Spell level and **character level don't match up directly**: a character typically must be **17th level** to cast a 9th-level spell, not 9th.

## Known vs. prepared spells

Before casting, a caster must have the spell **fixed in mind** (or accessible in a magic item) (PHB p.201).

- **Known spells:** some classes (e.g., bards, sorcerers) and many monsters have a fixed list always ready.
- **Prepared spells:** others (e.g., clerics, wizards) choose which spells to ready, a process that varies by class.

Either way, the **number** a caster can have ready at once depends on character level.

## Spell slots

A caster can cast only a limited number of spells before resting, tracked by **spell slots**. Each spellcasting class (except the warlock) lists how many slots of each level it has per character level (PHB p.201).

- Casting a spell **expends a slot of that spell's level or higher**. A low-level spell can fill a higher slot, but a high-level spell needs a slot of at least its own level (a 9th-level spell needs a 9th-level slot).
- **Finishing a long rest restores all expended spell slots.**
- Some features let a creature cast certain spells **without** using slots.

### Casting at a higher level (upcasting) (PHB p.201)

When you cast a spell using a slot **higher** than the spell's level, the spell takes on that higher level for that casting. Some spells (e.g., *magic missile*, *cure wounds*) have **stronger effects at higher levels**, as noted in their "At Higher Levels" text. Spells without such text simply fill the larger slot with no extra benefit.

## Cantrips

A **cantrip** is a level-0 spell cast **at will** — no slot expended and no preparation needed. Practice has fixed it permanently in the caster's mind (PHB p.201).

## Rituals

A spell tagged **ritual** can be cast normally or as a ritual (PHB p.201–202).

- The ritual version takes **10 minutes longer** to cast and **expends no spell slot** — meaning it **can't be upcast**.
- To cast a spell as a ritual you need a feature granting the ability (clerics, druids, and wizards have one), and you must have the spell prepared or known — unless your ritual feature says otherwise (the wizard's does).

---

## The spellcasting ability

Your **spellcasting ability** is set by your class (Intelligence for wizards; Wisdom for clerics and druids; Charisma for bards, paladins, sorcerers, and warlocks). Its modifier drives the two key formulas (PHB p.205):

- **Spell save DC = 8 + your proficiency bonus + your spellcasting ability modifier** (+ any special modifiers).
- **Spell attack bonus = your proficiency bonus + your spellcasting ability modifier.**

Most spell attacks are ranged; remember you have **disadvantage** on a ranged spell attack while within 5 feet of a hostile creature that can see you and isn't incapacitated.

### Casting in armor (PHB p.201)

Because of the mental focus and precise gestures spellcasting demands, **you must be proficient with the armor you are wearing to cast a spell.** Wearing armor you lack proficiency with leaves you too distracted and physically hampered to cast at all — it doesn't impose disadvantage or a penalty, it simply **prevents casting**. (This is why, e.g., a wizard in plate can't cast even though nothing about the spell itself changed.) Note this is *separate* from the somatic-component free-hand rule below — both must be satisfied.

---

## Components

A spell's **components** are the physical requirements to cast it. Each spell lists which it needs; if you can't provide one, you can't cast the spell (PHB p.203).

- **Verbal (V):** mystic words with precise sounds. A creature that is **gagged** or in an area of **silence** can't cast a spell with a verbal component.
- **Somatic (S):** gestures. You need **at least one free hand** to perform them.
- **Material (M):** specific objects, listed in parentheses. You can use a **component pouch** or a **spellcasting focus** in place of materials that have **no listed cost**. But if a material has a **gp cost**, you must have that exact component. If a material is **consumed by the spell**, you must supply it **for each casting**. You need a free hand to access materials, but it can be the same hand used for somatic gestures.

**What counts as a spellcasting focus (Chapter 5, p.150–151):** a **component pouch** is a small belt pouch holding the assorted bits costless components require. A **spellcasting focus** is a single object that stands in for them — an **arcane focus** (orb, crystal, rod, staff, wand) for arcane casters, a **druidic focus** (sprig of mistletoe, totem, wooden staff, yew wand) for druids/rangers, or a **holy symbol** (amulet, emblem, or one embedded/borne on a shield) for clerics/paladins. Which one a class may use is set by that class's Spellcasting feature. A focus or pouch **never** substitutes for a component with a listed gp cost or one the spell consumes — those you must physically have.

> **The one-free-hand problem (comes up constantly at the table):** a spell with both **S** and **M** needs a free hand — the *same* hand can perform the somatic gesture and fish out/hold the material/focus. But a character holding a weapon in one hand and a shield in the other has **no free hand**, so they can't cast an S+M spell unless they stow or drop something (or have a feat like War Caster that waives the somatic-hand requirement). A spell that is **V only** (no S, no M) can be cast with both hands full.

---

## Casting time

Most spells take **1 action**, but some take a **bonus action**, a **reaction**, or **minutes/hours** (PHB p.202).

- **Bonus action spell:** cast it with your bonus action on your turn (if you haven't used your bonus action yet). On a turn you cast a bonus-action spell, the **only other spell you can cast is a cantrip with a casting time of 1 action**.
- **Reaction spell:** cast in response to a trigger the spell specifies, using your reaction.
- **Longer casting times** (minutes/hours, including rituals): you must spend your **action each turn** casting it and **maintain concentration** the whole time. If concentration breaks, the spell fails (but you don't expend a slot) and you'd have to start over.

---

## Range (PHB p.202–203)

Every spell has a **range** — how far from you the target (or an area's point of origin) can be:

- **A distance in feet** (e.g., 60 feet, 120 feet): the target must be within that distance when you cast.
- **Touch:** you can affect only a creature or object you physically touch.
- **Self:** the spell affects only **you** (e.g., *shield*). Spells that create a **cone or line originating from you** also have a range of **Self** — written like "**Self (15-foot cone)**" or "**Self (30-foot line)**" — meaning the effect's origin point is you, but the area reaches out from there.
- **Sight / Unlimited / Special:** a few spells use other ranges, spelled out in the entry.

Once a spell is cast, **its effects aren't limited by its range** unless the description says otherwise — e.g., you can cast *dominate person* on a target within range, then the dominated creature can wander beyond that range and remain affected.

---

## Duration and concentration

A spell's **duration** is how long it lasts — rounds, minutes, hours, years, "until dispelled," or **instantaneous** (the effect happens and can't be undone because the magic existed only for an instant) (PHB p.203).

### Concentration (PHB p.203)

Some spells require **concentration** to keep their magic active; this is noted in the Duration entry. You can hold concentration on **only one spell at a time**, and you can end it at any time (no action). Normal activity (moving, attacking) doesn't break it. Concentration ends if:

- **You cast another spell that requires concentration** — the first spell ends (you can't concentrate on two at once).
- **You take damage** — make a **Constitution saving throw** to keep concentrating. The **DC equals 10, or half the damage taken, whichever is higher**. Roll a separate save for each source of damage in the same instant.
- **You are incapacitated or you die.**

The DM may also call for a **DC 10 Constitution save** to maintain concentration in hazardous environments (e.g., a wave crashing over you on a storm-tossed ship).

---

## Targets and clear path

A spell affects the **targets** its description names — creatures, objects, or a point of origin for an area (PHB p.204).

- You need a **clear path** to a target, so it can't be behind **total cover**.
- If you place an area of effect at a point you can't see and an obstruction is between you and it, the point of origin forms on the **near side** of the obstruction.
- If a spell targets a creature of your choice, you can usually choose **yourself**, unless the spell requires a hostile creature or specifically someone other than you.

---

## Areas of effect

A spell's area typically takes one of **five shapes**, each with a **point of origin** from which the effect expands in straight lines (PHB p.204–205):

| Shape | Defined by | Point of origin included? |
|---|---|---|
| **Cone** | Length; width at any point equals its distance from the origin | No (unless you choose) |
| **Cube** | Length of each side; origin lies on a face | No (unless you choose) |
| **Cylinder** | Radius + height; origin is the center of the circular base | Yes |
| **Line** | Length and width | No (unless you choose) |
| **Sphere** | Radius extending from the origin | Yes |

To affect a location, an unblocked straight line must reach it from the origin; **total cover** blocks these lines.

> **Combining effects (PHB p.205):** Effects of *different* spells add together while their durations overlap. Effects of the **same** spell cast more than once **don't** stack — only the most potent (e.g., the highest bonus) applies. Two *bless* spells on one target grant the benefit only once.

---

## The schools of magic (PHB p.203)

Every spell belongs to one of **eight schools**, a classification scholars (especially wizards) apply to all magic. The schools **have no rules of their own** — but several features and effects *refer* to them (a wizard's subschool specialization, an *abjuration* counter, "you can't cast **enchantment** spells here," etc.), so the tag matters.

| School | What it does |
|---|---|
| **Abjuration** | Protective magic — barriers, wards, negating effects, banishing creatures (some have aggressive uses). |
| **Conjuration** | Transporting/creating — summon creatures or objects, teleport, conjure effects out of nothing. |
| **Divination** | Revealing information — secrets, glimpses of the future, hidden things, truth behind illusions. |
| **Enchantment** | Affecting minds — charm, influence, or control a creature's behavior. |
| **Evocation** | Channeling raw energy — blasts of fire/lightning and the like, or positive energy to heal. |
| **Illusion** | Deceiving the senses or mind — false sights/sounds, or images planted directly in a mind. |
| **Necromancy** | Life and death energies — drain life, grant extra vitality, create or restore the dead. (Animating undead is an evil act.) |
| **Transmutation** | Changing properties — transform a creature/object, enhance an ally, animate an object. |

> The school is printed in each spell's header block. This file lists the **rules of magic**; for *how to read that header block* (level, school, casting time, range, components, duration) see `11-spells.md`.

---

## Common questions

**Q: What's my spell save DC and spell attack bonus?**
A: Save DC = **8 + proficiency bonus + spellcasting ability modifier**. Attack bonus = **proficiency bonus + spellcasting ability modifier** (PHB p.205).

**Q: Can I concentrate on two spells at once?**
A: No. Casting a second concentration spell ends the first. You can hold only one (PHB p.203).

**Q: I took 9 damage while concentrating — what's the save DC?**
A: DC 10 (half of 9 is 4, rounded down, which is less than 10, so the minimum 10 applies). The DC is 10 or half the damage, whichever is higher (PHB p.203).

**Q: Do I need to buy material components?**
A: Not for materials with no listed cost — a component pouch or focus covers those. But components with a gp cost (or that are consumed) must be supplied specifically, every time they're consumed (PHB p.203).

**Q: I cast a bonus-action spell. Can I also cast a leveled spell with my action?**
A: No. On a turn you cast a spell with a bonus action, the only other spell you can cast is a **cantrip with a 1-action casting time** (PHB p.202).

**Q: If I cast a 1st-level spell using a 3rd-level slot, what happens?**
A: It's cast as a 3rd-level spell. If the spell has an "At Higher Levels" entry, it gets stronger; otherwise it just consumes the bigger slot with no extra effect (PHB p.201).

**Q: A spell says range "Self" — how can it hit enemies?**
A: "Self" means the spell *originates from you*. Many area spells (e.g., *burning hands*) read "Self (15-foot cone)": you're the origin point, and the cone/line/burst reaches out from you to catch others. A pure-Self spell like *shield* affects only you (PHB p.202–203).

**Q: I'm holding a weapon and a shield — can I still cast?**
A: Only if the spell needs **no free hand** — i.e., it's Verbal-only (no somatic, no material). Any spell with a somatic component needs a free hand for the gesture, and a spell with a material component needs a free hand to access it (the same hand can do both). With both hands occupied you must stow/drop something, or have a feature like War Caster (PHB p.203).

**Q: Can I target something behind a wall?**
A: No — you need a **clear path** to the target, so it can't be behind **total cover**. If you aim an *area* at an unseen point with an obstruction in the way, the area's point of origin forms on the **near side** of that obstruction (PHB p.204).

**Q: Does the school of magic do anything on its own?**
A: Not by itself — schools are descriptive. But many features reference them (wizard specialization, "creatures immune to enchantment," counters to abjuration, etc.), so the printed school still matters (PHB p.203).
