# Characters — generated character packets

This folder holds **ready-to-play level-1 character packets** produced by the Character Creation Helper
(`../tools/character-creator.md`). Each file is a self-contained sheet a player can take to the table —
core stats, skills, attacks, spells, and every racial/class/background feature **explained in plain
language** (what it does, when to use it), plus a "how to play this character" game plan.

**Welcoming to non-D&D players and veterans alike:** every packet is *layered* — clean stat lines a
veteran can scan at a glance, with plain-language glosses and a short "how a turn works" primer beside them
for first-timers.

## How to make one

Say **"help me make a character"** (or *"use the character creator"*). The flow:

1. **The Chooser** — you circle the big picks on [`_CHOOSER.md`](_CHOOSER.md), the reusable print-once
   worksheet: **Race · Class · Background · ability-score method**, plus a name + personality. Every option
   is explained so a newcomer can choose confidently. (Hand the same sheet to every player.)
2. **Guided choices** — Claude walks you through the detail picks your big choices imply (skills, spells,
   equipment, fighting style / domain), pulling every option from the verified rules KB.
3. **Your packet** — Claude does all the math and saves your character here as `<name>.md`, then refines it
   on your notes.

See [`../tools/character-creator.md`](../tools/character-creator.md) for the full workflow.

## What's in a packet

Built from [`_TEMPLATE.md`](_TEMPLATE.md): header → core stats (AC, HP, speed, initiative, passive
Perception) → ability scores & saves → skills → proficiencies & languages → attacks → spellcasting (if a
caster; each spell with a one-line "what it does") → features & traits (each explained) → equipment & coin
→ personality → a "how a turn works" primer → a "how to play this character" game plan → a leveling-up
pointer.

## Scope

**Level 1 only**, using the spells the KB has built (cantrips–5th level — a level-1 caster only needs
cantrips + 1st-level spells, all present). Planned follow-ups (see `../PROGRESS.md`): an **HTML**
print-and-circle chooser + printable packet, **levels 2–5**, and a **batch pre-gen party** mode.
