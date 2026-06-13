# DM Toolkit — Encounters & Monsters

**Purpose:** pick and run a fight *fast* — "the party kicks in the door, what's in here and is it a fair fight?" Gives the build-to-budget procedure (linked, not re-copied), a **what-lives-here** quick-pick by environment for the one-shot range (CR 0–5), party-role mixing, simple tactics, and the morale rule. Everything points at the verified KB.

**Grounded in / pulls from:**
- `quick-reference/encounter-building.md` — XP thresholds, the encounter multiplier, the adventuring day (DMG p.82–85). **The math lives there; don't re-derive it.**
- `monster-manual/monsters-by-cr.md` / `monsters-by-type.md` / `monster-index.md` — find a creature by CR / type / name.
- `monster-manual/stat-blocks/cr-0.md … cr-5.md` — the actual stat blocks (CR 0–2 exhaustive, CR 3–5 common monsters). **CR 6+ → MM PDF (offset +1).**
- `dungeon-masters-guide/appendices.md` — DMG Appendix B "Monsters by Environment" (DMG p.302–305) is the authoritative environment source.
- `dungeon-masters-guide/09-dm-workshop.md` — the optional **Morale** rule (DMG p.273).

---

## Build-to-budget in 5 steps (DMG p.82 — full tables in `encounter-building.md`)

1. **Party budget:** sum each PC's Easy/Medium/Hard/Deadly thresholds → four numbers (reusable all session).
2. **Pick monsters** whose **base XP** total you'll then adjust.
3. **Multiply** total base XP by the count-based multiplier (1 →×1, 2 →×1.5, 3–6 →×2, 7–10 →×2.5, 11–14 →×3, 15+ →×4). *Adjust for party size: <3 PCs bump up a row, 6+ PCs drop a row.*
4. **Compare** adjusted XP to the budget → that's the difficulty.
5. **Award** players the **base** (un-multiplied) XP.

> **One-shot tuning:** for a 3–4 hour one-shot, aim most fights at **Medium–Hard**, and make the climax **Deadly** (the multiplier on a few extra bodies gets you there cheaply). Remember NPC party members count toward the budget *and* earn a share (DMG p.92; `npc-generator.md`).

---

## What lives here? — environment quick-pick (CR 0–5)

Curated, commonly-used picks per terrain (CRs verified against `monsters-by-cr.md`). The **full** environment lists are DMG Appendix B (p.302–305); for type/CR/name lookups use the MM indexes. Anything **CR 6+** → MM PDF.

| Environment | Low (CR 0–1/2) | Mid (CR 1–2) | Tougher (CR 3–5) |
|---|---|---|---|
| **Arctic** | Wolf 1/4 · Ice Mephit 1/2 | Polar Bear 2 · Saber-Toothed Tiger 2 · Berserker 2 | Winter Wolf 3 · Yeti 3 |
| **Coastal / Underwater** | Merfolk 1/8 · Reef Shark 1/2 · Sahuagin 1/2 | Giant Octopus 1 · Merrow 2 · Plesiosaurus 2 · Sahuagin Priestess 2 | Giant Crocodile 5 |
| **Desert** | Jackal 0 · Vulture 0 · Hyena 0 · Gnoll 1/2 | Lion 1 · Giant Hyena 1 · Giant Vulture 1 | Giant Scorpion 3 |
| **Forest** | Wolf 1/4 · Panther 1/4 · Giant Owl 1/4 · Twig Blight 1/8 · Ape 1/2 | Giant Spider 1 · Brown Bear 1 · Awakened Tree 2 · Giant Boar 2 | Werewolf 3 |
| **Grassland** | Jackal 0 · Bandit 1/8 · Gnoll 1/2 | Lion 1 · Giant Eagle 1 · Scarecrow 1 · Gnoll Pack Lord 2 | Veteran 3 |
| **Hill** | Black Bear 1/2 · Hobgoblin 1/2 · Orc 1/2 | Brown Bear 1 · Half-Ogre 1 · Dire Wolf 1 · Ogre 2 | Werewolf 3 |
| **Mountain** | Orc 1/2 | Giant Eagle 1 · Gargoyle 2 · Orog 2 | Hook Horror 3 · Yeti 3 |
| **Swamp** | Giant Frog 1/4 · Bullywug 1/4 · Giant Lizard 1/4 · Crocodile 1/2 · Lizardfolk 1/2 | Ghoul 1 · Will-o'-Wisp 2 | Giant Crocodile 5 |
| **Underdark** | Grimlock 1/4 · Darkmantle 1/2 · Gray Ooze 1/2 · Rust Monster 1/2 | Giant Spider 1 · Carrion Crawler 2 · Grick 2 · Gelatinous Cube 2 · Quaggoth 2 | Hook Horror 3 · Phase Spider 3 |
| **Urban** | Commoner 0 · Guard 1/8 · Bandit 1/8 · Cultist 1/8 · Noble 1/8 · Acolyte 1/4 · Thug 1/2 | Spy 1 · Bandit Captain 2 · Cult Fanatic 2 · Priest 2 · Wererat 2 | Veteran 3 · Doppelganger 3 |

*(Undead/fiend "intruders" — Skeleton 1/4, Zombie 1/4, Ghoul 1, Specter 1, Shadow 1/2, Ghost 4 — fit almost any haunted/ruined site regardless of terrain.)*

---

## Build a *group*, not a pile — combat roles

A memorable fight mixes jobs so the action economy isn't flat. Assign each monster a role:

| Role | Does | Example MM picks |
|---|---|---|
| **Brute** | Soaks hits, hits hard, holds the front | Ogre, Bear, Orc, Berserker, Half-Ogre |
| **Skirmisher** | Fast, flanks, harries the backline | Wolf, Panther, Goblin, Wererat |
| **Artillery** | Ranged damage from cover | Bandit/archer, Spy, Sahuagin, Goblin with shortbow |
| **Lurker / ambusher** | Surprise, burst, then hide | Giant Spider, Phase Spider, Darkmantle, Doppelganger |
| **Controller** | Locks down PCs (grapple, restrain, area) | Gelatinous Cube, Carrion Crawler, Will-o'-Wisp, Ghoul (paralysis) |
| **Leader / caster** | Buffs allies, debuffs PCs, the "kill this first" | Cult Fanatic, Priest, Bandit Captain, Gnoll Pack Lord, Sahuagin Priestess |
| **Minions / swarm** | Cheap bodies that trigger the multiplier | Kobold, Cultist, Commoner, Swarm of Rats |

**Recipe that almost always plays well:** 1 leader + 1–2 brutes + a couple of skirmishers/artillery, on interesting terrain. The leader gives the fight a brain; the minions make the multiplier (and the threat) climb.

---

## Simple tactics (so monsters don't just walk forward)

- **Use terrain:** archers on a ledge, brutes in the choke, lurkers in the dark. Cover and elevation do more than +2 HP ever will.
- **Focus fire** the obvious threat or the healer; gang up for advantage where it fits the creature's intelligence.
- **Unintelligent** creatures (beasts, oozes) act on instinct — hunt the nearest/weakest, no clever combos. **Smart** creatures (NPCs, fiends, leaders) retreat, parley, take hostages, and protect their leader.
- **Pack hunters** (wolves, gnolls, kobolds) seek **advantage** by surrounding; many have pack-tactics traits — keep them adjacent to a target.
- **Open with the surprise** if they earned it (Stealth vs. passive Perception) — a round of free actions swings a fight hard.

---

## Morale — when do monsters break? (optional rule, DMG p.273 → `09-dm-workshop.md`)

By default monsters fight to the death, which gets grindy and unrealistic. Optional rule: call for a **DC 10 Wisdom saving throw** to keep fighting when a triggering condition hits —

- the creature is **surprised**,
- it drops to **half HP for the first time**,
- its **leader is downed**, or
- the **group is cut to half its numbers**.

**Fail →** it flees (or **surrenders** if escape is impossible). Against overwhelming odds the DM can impose **disadvantage** or an automatic fail. Smart enemies that break can become prisoners (info!) or recurring foes.

---

## 30-second checklist (use this live)

1. **Budget** known? (party thresholds from `encounter-building.md`).
2. **Terrain** → pull 2–4 picks from the environment table.
3. **Assign roles** (leader + brutes + skirmishers); count bodies for the multiplier.
4. **Grab stat blocks** from `stat-blocks/` (CR 0–5) or the MM PDF (CR 6+, offset +1).
5. **Set the stage:** cover, elevation, light, surprise.
6. **Decide the morale trigger** in advance so you're not improvising when they break.
