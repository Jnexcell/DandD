# DM Toolkit — NPC Generator

**Purpose:** spin up a believable NPC *fast, mid-session*, with a name, a face, a voice, a want, and the right stat block attached — so Josh can say "the party walks up to the dockmaster" and get a usable person back in one beat. This is a **generation scaffold**, not a rules transcription: it gives the process, original prompt menus, and pointers into the verified KB.

**Grounded in / pulls from:**
- `dungeon-masters-guide/04-npcs.md` — the full ten-element NPC framework, Loyalty rules, villain scheme/methods/weakness tables (DMG p.89–98). *That file is the rules source; this file is the at-the-table workflow.*
- `players-handbook/04-personality-and-background.md` + `players-handbook/races/*` — alignment, ideals/bonds/flaws framework, and per-race **sample names**.
- `monster-manual/stat-blocks/*` + `monster-manual/README.md` — the stat block to attach (see "Attach a stat block" below).
- `quick-reference/dm-toolkit/social-and-dialog.md` — once the NPC exists, run the conversation there.

---

## The two speeds of NPC creation

**Speed 1 — the walk-on (1 detail).** Most NPCs need exactly **one distinguishing trait** + a name. Roll/pick one face, one quirk, one want, done. Don't over-build a bartender. (DMG p.89.)

**Speed 2 — the recurring NPC (the 10-element profile).** For a patron, rival, or anyone the party will see again, fill the **ten elements** below. The full DMG random tables live in `04-npcs.md` (p.89–91); use the menus here to improvise when you don't want to flip.

> **Rule of thumb:** generate at Speed 1 by default. Promote an NPC to Speed 2 the moment the players latch onto them.

---

## Fast generator — pick one from each row (or roll a d8/d10)

### Face (one distinctive feature)
weathered & sun-creased · a long pale scar · mismatched eyes · missing teeth/finger · elaborate beard or braids · ash-stained hands · too-fine clothes gone shabby · a nervous tic in one eye · ritual tattoos · an old burn · jeweler-bright rings · a limp and a cane.

### Voice / mannerism (how they sound — feeds `social-and-dialog.md`)
clips every sentence short · talks in proverbs · over-explains · won't make eye contact · laughs at the wrong moments · whispers like it's all a secret · booming and back-slapping · fussy and precise · curses by odd gods · repeats your last word back · sing-song lilt · flat and bored.

### Want (the engine of the scene — what do they want *right now?*)
to be paid · to be left alone · to look important · to unload a rumor · to get a favor · to sell you something · to avoid blame · to protect someone · to settle a grudge · to find something they lost · to recruit you · to test you.

### Attitude toward the party (starting reaction — see `social-and-dialog.md`)
Hostile · Suspicious · Indifferent (default for strangers) · Curious · Friendly · Deferential. *Shift it by who's talking and how.*

### Secret / hook (optional — the reason they matter)
knows where the body is · is being blackmailed · owes the villain money · is the villain's informant · is hiding their real identity · saw something they shouldn't have · has the macguffin and doesn't know it · is not what they appear (disguise/shapechanger).

---

## The 10-element profile (recurring NPCs) — DMG p.89–91

Sentence each: **1** Occupation & history · **2** Appearance · **3** A high or low ability · **4** Talent · **5** Mannerism · **6** Interactions/attitude · **7** Useful knowledge (one thing they know that helps the PCs) · **8** Ideal · **9** Bond · **10** Flaw or secret.

- For **Ideal / Bond / Flaw**, reuse the PHB personality framework (`04-personality-and-background.md`) or the matching **background file** (`players-handbook/backgrounds/*`) — every background ships a trait/ideal/bond/flaw table you can lift an NPC straight out of. (An innkeeper = lift from `folk-hero.md` or `guild-artisan.md`; a corrupt official = `noble.md`; a street informant = `urchin.md` / `criminal.md`.)
- **PCs who learn an NPC's ideal/bond/flaw get leverage** in social interaction (DMG p.91; mechanics in `social-and-dialog.md`).
- The full d20 Appearance / d20 Talent / d20 Mannerism / d12 Interaction tables are in `04-npcs.md` → DMG p.89–91 if you want to roll randomly.

---

## Names — pull by race/culture

Fastest source: the **sample-names lists in `players-handbook/races/*`** (every race file has male/female/clan or family names, e.g. dwarf, elf, halfling, human ethnicities, dragonborn, gnome, tiefling). Grab one and modify a syllable.

Improv seeds when you need a name *now* and don't want to flip:

| Flavor | Seeds (mangle freely) |
|---|---|
| **Common/human** | Aldric, Bram, Cassia, Doran, Edda, Galen, Hilde, Joss, Mira, Nessa, Per, Rolf, Sela, Tomas, Wenna |
| **Dwarvish** | Borin, Dmagna, Thrain, Vondal, Helja, Krommir, Brunna |
| **Elvish** | Aelar, Sylvar, Naivara, Thessaly, Aramil, Lia, Quarion |
| **Halfling** | Pip, Lidda, Cade, Nedda, Wellby, Rosie, Milo |
| **Rough/criminal nickname** | Knuckles, the Weasel, One-Ear, Quill, Sister Coin, Old Mossback |
| **Gnomish/tinker** | Fonkin, Nim, Roondar, Bimpnottin, Zook |

(Per-race authentic lists: `players-handbook/races/<race>.md`.)

---

## Attach a stat block (only if it might fight)

An NPC needs combat stats **only when it poses a threat** (DMG p.89, 92). When it does, grab a ready-made NPC stat block — most are already transcribed in our `stat-blocks/` files (offset reminder: MM PDF is **+1**):

| Role | Stat block | Where |
|---|---|---|
| Townsfolk, peasant, child | **Commoner** (CR 0) | `stat-blocks/cr-0.md` |
| Town watch, soldier on duty | **Guard** (CR 1/8) | `stat-blocks/cr-1-8.md` |
| Street tough, enforcer | **Thug** (CR 1/2) | `stat-blocks/cr-1-2.md` |
| Highwayman, pirate crew | **Bandit** (CR 1/8) / **Bandit Captain** (CR 2) | `cr-1-8.md` / `cr-2.md` |
| Priest, temple acolyte | **Acolyte** (CR 1/4) / **Priest** (CR 2) | `cr-1-4.md` / `cr-2.md` |
| Cult leader / zealot | **Cultist** (CR 1/8) / **Cult Fanatic** (CR 2) | `cr-1-8.md` / `cr-2.md` |
| Local lord, merchant prince | **Noble** (CR 1/8) | `cr-1-8.md` |
| Knight, captain of the guard | **Knight** (CR 3) / **Veteran** (CR 3) | `cr-3.md` |
| Hedge wizard / court mage | **Mage** (CR 6 → MM PDF) / **Archmage** (CR 12 → PDF) | MM Appendix B, PDF p.348 / p.342 |
| Assassin, spy, scout | **Spy** (CR 1) / **Scout** (CR 1/2) / **Assassin** (CR 8 → PDF p.343) | `cr-1.md` / `cr-1-2.md` |
| Wilderness raider | **Berserker** (CR 2) / **Tribal Warrior** (CR 1/8) / **Druid** (CR 2) | `cr-2.md` / `cr-1-8.md` |
| Arena fighter, bodyguard | **Gladiator** (CR 5) | `cr-5.md` |

- **Reskin freely:** the *Guard* stat block runs equally well as a customs officer, a mercenary, or a cultist with a spear. Swap the flavor, keep the math.
- To **build a leveled or custom NPC** (and its CR), use `dungeon-masters-guide/09-dm-workshop.md` (NPC features / stat-block creation, DMG p.282) — and remember the **Death domain** & **Oathbreaker** villain options in `04-npcs.md` (DMG p.96–98).
- **Counts as a party member?** Any NPC traveling with the party earns a full XP share **and** must be added to encounter-difficulty math — see `encounters-and-monsters.md` / `04-npcs.md` (DMG p.92).

---

## Villains (the NPC that drives the adventure) — DMG p.94–98

For the BBEG, don't stop at a stat block. Give them: a **scheme** (what they're really after), **methods** (how they pursue it), and a **secret weakness** the PCs can discover and exploit. The full roll tables — d8 scheme + sub-tables, d20 methods, d8 weakness — are already in `dungeon-masters-guide/04-npcs.md` (DMG p.94–96). Quick spine:

1. **Scheme:** immortality / influence / magic / mayhem / passion / power / revenge / wealth.
2. **Method:** violence, coercion, politics, religion, theft, or magical mayhem.
3. **Weakness:** a hidden phylactery-equivalent, a true name, a special weapon, a prophecy, an old enemy's forgiveness, an unfulfilled bargain.
4. Give them an **ideal, a bond, and a flaw** (DMG p.91) — a villain the players *understand* is a villain they love to beat.

> A villain whose scheme the PCs can uncover **and** whose weakness they can exploit is "very gratifying for players" (DMG p.96). Plant clues to both.

---

## 30-second checklist (use this live)

1. **Name** (grab from a race file or the seed table).
2. **One face + one voice** (fast generator).
3. **What do they want right now?** (the want row) — that's the scene.
4. **Attitude** to the party (default Indifferent) → run the talk via `social-and-dialog.md`.
5. **Do they fight?** If yes, attach a stat block above. If no, skip stats entirely.
6. **(Only if recurring)** add a useful fact they know + an ideal/bond/flaw, and jot it for next time.
