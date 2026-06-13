# Adventure Environments

Where adventures happen — dungeons, wilderness, settlements, and unusual locales — plus the at-the-table mechanics that make them dangerous. The load-bearing parts for a DM are **traps** and **hazards**: how to detect, disarm, and resolve them, with exact save DCs, attack bonuses, and damage dice.

**Source:** DMG Chapter 5, "Adventure Environments" (printed pages 99–124).

> **At the table, jump to [Traps](#traps-dmg-p120123) and [Dungeon hazards](#dungeon-hazards-dmg-p105) below — those are the sections with numbers you'll actually roll against.**

---

## Dungeons (DMG p.99–104)

Most D&D adventures revolve around a **dungeon**: great halls and tombs, monster lairs, death-trap labyrinths, mile-deep natural caverns, ruined castles. Within a dungeon the party is constrained by walls and doors, so the DM can predict where they'll go — far harder in open wilderness.

### Designing a dungeon (DMG p.99–102)

The chapter offers a series of d20/d100 inspiration tables (roll or pick) to give a dungeon a coherent identity. The method matters more than the table contents:

- **Location** (DMG p.99) — where it sits (beneath a city, in a glacier, underwater, an Exotic-Location sub-table for stranger sites).
- **Creator** (DMG p.99–100) — who built it shapes its look (a beholder's disintegration ray leaves unnaturally smooth walls; amphibious kuo-toa and aboleths use water to seal their inner lair). Includes sub-tables for cults, NPC alignment, and NPC class.
- **Purpose** (DMG p.101) — death trap, lair, maze, mine, planar gate, stronghold, temple/shrine, tomb, treasure vault.
- **History** (DMG p.101) — the key event(s) that turned the site into a dungeon (abandoned, conquered, cursed, overrun by planar creatures, etc.).
- **Inhabitants, factions, and ecology** (DMG p.101–102) — a living dungeon is an ecosystem with predators, prey, and competing intelligent factions the party can ally with or play against. Vary encounter difficulty throughout rather than ramping it room by room, which turns a dungeon into a grind.

**Mapping** (DMG p.102): each graph square = a 10-ft. × 10-ft. area (subdivide to 5 ft. for minis). Use asymmetry, think in three dimensions (stairs, ledges, pits), add wear and tear, multiple entrances, and secret doors/rooms. Appendix A has random-dungeon generation tables.

### Dungeon features (DMG p.102–104)

- **Walls** — masonry, hewn rock, water- or lava-smoothed stone, or (aboveground) wood. May hide secret doors.
- **Doors** — *Stuck doors* open on a successful **Strength check**; *locked doors* can be picked (**Dexterity check** with thieves' tools), forced (**Strength check**), smashed (deal enough damage), or opened with *knock*; *barred doors* have no lock to pick but open freely from the barred side (an action to lift the bar). DCs and object stats come from **Chapter 8** ("Running the Game").
- **Secret doors** — detected with **passive Wisdom (Perception)** in passing, or an active **Wisdom (Perception)** check; opening one may need an **Intelligence (Investigation)** check. Set DCs per Chapter 8.
- **Concealed doors** — ordinary doors hidden by mundane means (a tapestry, plaster, a rug over a trapdoor). Usually no check to find — just look in the right place — but passive Perception may notice the disturbance.
- **Portcullises** — raised/lowered by winch (an action); lifting one or bending its bars by force is a **Strength check** (DC per Chapter 8).

### Darkness, light, and vision (DMG p.104–105)

**Darkness is the default** inside an underground complex or aboveground ruin. Even darkvision races use fire for warmth, cooking, and defense, but many dungeon creatures need neither — adventurers must bring their own light into tombs and lightless caverns. A torch or lantern that helps the party see a short distance is itself visible to other creatures from far off, so light sources **attract monsters** (and dungeon features that shed light draw the party). The chapter also notes stifling **air quality** and **sound** that echoes far down enclosed passages.

The actual vision/light mechanics (bright vs. dim vs. darkness, lightly/heavily obscured, darkvision, blindsight) live in the PHB — see [`../players-handbook/08-adventuring.md`](../players-handbook/08-adventuring.md) (PHB p.183).

*Full detail: DMG p.99–104.*

---

## Dungeon hazards (DMG p.105)

Hazards work functionally like traps. **Detecting:** no check is needed to spot a hazard unless it's hidden; a hazard that looks benign (a slime or mold patch) can be correctly identified with an **Intelligence (Nature)** check (DC per Chapter 8). **Severity:** gauge a hazard's deadliness by comparing its damage to the party's level on the [Damage Severity by Level table](#damage-severity-by-level-dmg-p121).

The four classic dungeon hazards (DMG p.105):

| Hazard | Area | Save / check | Effect (exact) |
|---|---|---|---|
| **Brown mold** | 10-ft. square; temp within 30 ft. always frigid | **DC 12 Con** save (within 5 ft., first time on turn / start of turn) | 22 (4d10) cold, half on save. Immune to fire — fire within 5 ft. makes it expand to a 10-ft. square; any **cold** damage destroys it instantly. |
| **Green slime** | 5-ft. square; blindsight 30 ft.; drops on movement below | **DC 10 Dex** save to avoid the drop (only if aware of it) | 5 (1d10) acid on contact, repeating at the start of each turn until scraped/destroyed. Deals 11 (2d10) acid/round to wood or metal (destroys nonmagical tools/weapons used to scrape it). Destroyed by sunlight, *cure disease*, or any cold/fire/radiant damage. |
| **Webs** (giant spider) | Difficult terrain | **DC 12 Dex** save (entering first time on turn / start of turn) or **restrained**; escape with **DC 12 Str (Athletics) or Dex (Acrobatics)** | Each 10-ft. cube of web: AC 10, 15 HP, vulnerable to fire, immune to bludgeoning/piercing/psychic. |
| **Yellow mold** | 5-ft. square; ejects spores in a 10-ft. cube if touched | **DC 15 Con** save | On fail: 11 (2d10) poison and **poisoned 1 min.** (5 (1d10) poison at start of each turn). Repeat save at end of each turn to end. Sunlight or any fire damage destroys a patch instantly. |

> Several **wilderness hazards** are mechanically similar and just as useful in a dungeon-adjacent setting (DMG p.110):

| Hazard | Save / check | Effect (exact) |
|---|---|---|
| **Quicksand** | escape: **Str check, DC = 10 + feet sunk**; pull another out: **Str check, DC = 5 + feet sunk** | 10-ft. square, ~10 ft. deep. On entering, sink **1d4 + 1 ft.** and become **restrained**; sink another **1d4 ft.** at the start of each turn. Fully submerged → can't breathe (suffocation rules). |
| **Razorvine** | **DC 10 Dex** save (direct contact, first time on a turn) | 5 (1d10) slashing on fail. A 10-ft.-high, 10-ft.-wide, 5-ft.-thick wall/hedge: AC 11, 25 HP, immune to bludgeoning/piercing/psychic. |
| **Frigid water** | **DC 10 Con** save each extra minute (resistance/immunity to cold, or cold-water-adapted, auto-succeeds) | Immerse safely for minutes = Con score; after that, each further minute risks **1 level of exhaustion** on a failed save. |
| **Desecrated ground** | undetectable by normal senses; *detect evil and good* reveals it | Undead on it have **advantage on all saving throws**. Purified by holy water (10-ft. square) or *hallow*. |

*Full detail: DMG p.105 (dungeon hazards) and p.110 (wilderness hazards). The chapter also covers slippery ice, thin ice, and others — see DMG p.110.*

---

## Wilderness and other environments (DMG p.106–119)

Brief pointers only — nothing large reproduced here:

- **Wilderness** (DMG p.106–109): two approaches to running it, plus tables for terrain, weather, and points of interest. Sub-rules cover **travel**, **getting lost** (a Wisdom (Survival) check vs. a DC by terrain), **foraging**, and **visibility outdoors**.
- **Weather, extreme cold/heat, high altitude, and strong wind** (DMG p.109–110): exhaustion/save effects for harsh conditions.
- **Settlements** (DMG p.112–117): building towns and cities, random urban encounters, and notable NPC/shop tables.
- **Unusual environments** (DMG p.116–119): underwater, the planes, traps and chases in non-standard spaces.

For travel pace, vision outdoors, and the survival mechanics that overlap with this section, use [`../players-handbook/08-adventuring.md`](../players-handbook/08-adventuring.md) (PHB p.182–185).

*Full detail: DMG p.106–119.*

---

## Traps (DMG p.120–123)

A trap can be **mechanical** (pits, arrow traps, falling blocks, whirling blades, flooding rooms) or **magical** — either a **magical device trap** (initiates a spell effect when triggered) or a **spell trap** (*glyph of warding*, *symbol*, and the like).

### Traps in play (DMG p.120–121)

- **Triggering** — most traps fire when a creature goes somewhere or touches something: a pressure plate, false floor, trip wire, doorknob, wrong key. Magic traps often trigger on entering an area or touching an object, sometimes with a password that prevents activation.
- **Detecting** — the trap's description gives the check and DC. A character **actively looking** makes a **Wisdom (Perception)** check vs. the trap's DC; otherwise compare each PC's **passive Wisdom (Perception)** to the DC to see who notices it in passing. Any character can use **Intelligence (Arcana)** to detect or disarm a **magic** trap (same DCs), and *dispel magic* can disable most magic traps (the trap gives the DC).
- **Disabling** — once detected, an **Intelligence (Investigation)** check may deduce *what to do*, followed by a **Dexterity check with thieves' tools** to perform the sabotage.
- **DM judgment** — don't let die rolls override clever play. If an action clearly reveals the trap (lifting a rug off a pressure plate), no check is required; smart bypasses (propping a shield, opening a chest at a distance with a rod) should work even though the trap still "triggers."

### Trap Save DCs and Attack Bonuses (DMG p.121)

Pick a severity band, then use it for the trap's save DC **or** its attack bonus:

| Trap Danger | Save DC | Attack Bonus |
|---|---|---|
| **Setback** | 10–11 | +3 to +5 |
| **Dangerous** | 12–15 | +6 to +8 |
| **Deadly** | 16–20 | +9 to +12 |

A **setback** trap is unlikely to seriously harm characters of the indicated level; a **dangerous** trap is likely to seriously injure (and possibly kill); a **deadly** trap is likely to kill.

### Damage Severity by Level (DMG p.121)

Cross-reference the party's level band with the severity to pick the damage dice (this same table also appears in Chapter 8, DMG p.249):

| Character Level | Setback | Dangerous | Deadly |
|---|---|---|---|
| 1st–4th | 1d10 | 2d10 | 4d10 |
| 5th–10th | 2d10 | 4d10 | 10d10 |
| 11th–16th | 4d10 | 10d10 | 18d10 |
| 17th–20th | 10d10 | 18d10 | 24d10 |

### Complex traps (DMG p.121–122)

A **complex trap** acts like a standard trap but, once activated, **rolls initiative** (its description gives an initiative bonus) and takes an action **each round** — making successive attacks, or producing an effect that changes over time (e.g., a room that floods one level higher per round). It can still be detected, disabled, or bypassed normally. This turns a trap into something closer to a combat encounter.

### Sample traps (DMG p.122–123)

Summaries in our own words; numbers are exact from the DMG.

| Trap | Type | Detect | Disarm / bypass | Save / attack & damage |
|---|---|---|---|---|
| **Collapsing Roof** | Mechanical | Spot trip wire DC 10 | DC 15 Dex (thieves' tools) cuts the wire (disadvantage with an edged weapon/tool, no kit); or knock over a wedged beam (action) to trigger it | **DC 15 Dex** save under the unstable section: 22 (4d10) bludgeoning, half on save; area becomes difficult terrain (rubble) |
| **Falling Net** | Mechanical | Spot trip wire & net DC 10 | DC 15 Dex (thieves' tools) breaks the wire (disadvantage with edged weapon, no kit) | Covers 10-ft. square; trapped creatures **restrained**, and those failing a **DC 10 Str** save are knocked **prone**. Free a creature: **DC 10 Str** check (action), or deal 5 slashing to the net (AC 10, 20 HP) to cut a 5-ft. section |
| **Fire-Breathing Statue** | Magic | Spot pressure plate & scorch marks DC 15; *detect magic* shows evocation aura | Wedge a spike under the plate; or *dispel magic* (DC 13) destroys it | Triggers at >20 lb. on the plate → 30-ft. cone of fire; **DC 13 Dex** save: 22 (4d10) fire, half on save |
| **Pit — Simple** | Mechanical | Spot DC 10 (camouflaged cloth over a hole) | — | Step on the cloth → fall; falling damage by depth (usually 10 ft.) |
| **Pit — Hidden** | Mechanical | DC 15 Wis (Perception) notices the lack of foot traffic; DC 15 Int (Investigation) confirms it's a cover | Wedge a spike to block the cover, or *arcane lock* it shut | Cover swings open like a trapdoor → fall (usually 10 or 20 ft. deep) |
| **Pit — Locking** | Mechanical | As Hidden Pit | Pry cover open: **DC 20 Str**; or smash it; from inside, **DC 15 Dex** (thieves' tools) disables the spring (if reachable and visible) | Spring-loaded cover snaps shut, trapping the victim |
| **Pit — Spiked** | Mechanical | As the underlying pit (simple/hidden/locking) | As underlying pit | Extra **11 (2d10) piercing** from spikes on top of falling damage. Poisoned version adds **DC 13 Con** save: 22 (4d10) poison, half on save |
| **Poison Darts** | Mechanical | Spot dart holes DC 15; DC 15 Int (Investigation) finds the pressure plate | Wedge a spike under the plate; stuff the holes with cloth/wax | Triggers at >20 lb. → 4 darts, each a **ranged attack at +8** vs. a random target within 10 ft. (vision irrelevant): hit deals 2 (1d4) piercing, then **DC 15 Con** save or 11 (2d10) poison (half on save) |
| **Poison Needle** | Mechanical | DC 20 Int (Investigation) spots lock alterations | **DC 15 Dex** (thieves' tools) removes the needle; failing to pick the lock triggers it | Opening without the key → needle springs out: 1 piercing + 11 (2d10) poison, and **DC 15 Con** save or **poisoned 1 hour** |
| **Rolling Sphere** | Mechanical | DC 15 Wis (Perception) spots trapdoor & plate; DC 15 Int (Investigation) finds either | Wedge a spike under the plate | Triggers at ≥20 lb. → 10-ft. stone sphere rolls **initiative +8**, moves 60 ft./turn straight; entering its space (or it entering yours): **DC 15 Dex** save or 55 (10d10) bludgeoning + knocked prone. Slow it: **DC 20 Str** (action, –15 ft. speed; stops at 0) |
| **Sphere of Annihilation** | Magic | DC 20 Int (Arcana) reveals the sphere in the carved mouth | *Dispel magic* (DC 18) removes the luring enchantment (the sphere itself can't be moved or controlled) | A 2-ft. sphere of annihilation set in a stone face's mouth — any matter entering is instantly obliterated. Optional enchantment compels specified creatures to crawl in (like *antipathy/sympathy*'s sympathy effect) |

*Full detail: DMG p.120–123.*

---

## Common questions

**Q: A trap's description gives a save DC *or* an attack bonus — how do I pick the number?**
A: Choose a severity band for the party's level, then read the matching value off the [Trap Save DCs and Attack Bonuses table](#trap-save-dcs-and-attack-bonuses-dmg-p121) (Setback / Dangerous / Deadly) and the damage off the [Damage Severity by Level table](#damage-severity-by-level-dmg-p121) (DMG p.121).

**Q: Passive Perception vs. an active search — which detects a trap?**
A: Either. Compare each PC's **passive Wisdom (Perception)** to the trap's DC to see who notices it while just walking by; a character who **actively searches** rolls a **Wisdom (Perception)** check vs. the DC instead (DMG p.121).

**Q: How do I disarm a trap once it's found?**
A: Usually an **Intelligence (Investigation)** check to work out what to do, then a **Dexterity check with thieves' tools** to do it. For magic traps, **Intelligence (Arcana)** detects/disarms (same DC) and *dispel magic* can disable most of them (DMG p.120–121).

**Q: The players cleverly avoid a trap without a check — do I still roll?**
A: No — don't let dice override good play. If an action clearly reveals or bypasses the trap, let it work; the trap may still "trigger" but hit nothing (e.g., needles fire into a propped shield) (DMG p.121).

**Q: What's a "complex" trap?**
A: One that rolls initiative and takes an action every round after activating — successive attacks or an escalating effect like a flooding room. Otherwise it's detected and disabled normally (DMG p.121–122).

**Q: Is a slime/mold patch automatically obvious?**
A: A hazard is spotted with no check unless hidden, but identifying a benign-looking one (slime, mold) takes an **Intelligence (Nature)** check (DC per Chapter 8). Gauge its lethality with the Damage Severity by Level table (DMG p.105).

**Q: Do dungeons start lit?**
A: No — **darkness is the default** underground and in aboveground ruins. Inhabited dungeons may have light, but the party usually brings its own, which attracts monsters. Vision/light rules are in the PHB ([`../players-handbook/08-adventuring.md`](../players-handbook/08-adventuring.md), PHB p.183) (DMG p.104–105).
