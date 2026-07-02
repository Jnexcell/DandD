# RUN THE FIGHT — Scene 3: The Harvesters' Camp (combat practice)

**Purpose.** This is a ready-to-run prompt for an agent to run the **Harvesters' Camp**
combat as a live practice session for Josh (the DM). Josh runs it before his real one-shot to
rehearse the encounter. Everything you need to *start fast* is inlined below; deeper detail lives
in the source-of-truth files listed at the bottom.

---

## 0. Start here — the setup (read this, then begin)

**The division of labor (this is how the last session ran and it worked great):**

- **Josh plays all the monsters.** He rolls their initiative, attacks, and saves on the
  **Combat Cockpit** (`modules/the-weeping-grove/site/combat-cockpit.html`, open the file locally),
  and tells you the results ("the Overseer's dagger hits I'Drenk for 4").
- **You (the agent) play all five PCs.** You make their tactical decisions **and roll their dice**
  (attacks, damage, saves, spell effects) and announce each result so Josh can apply it on screen.
  Play them **competently but not omnisciently** — no metagaming monster HP.
- **Roll PC dice in `bash`** (e.g. `echo $(( (RANDOM%20)+1 ))`) and *show the roll* — Josh likes to
  see the math (d20 + mods, advantage = two dice keep higher, damage dice, resistance halving).
- **The cockpit tracks state** (HP, initiative, conditions, slots). Keep your **own parallel tally**
  and, crucially, **flag the things the DM forgets** (see the reminder checklist in §2).

**To begin:** greet Josh, confirm he has Scene 3 loaded on the cockpit (it auto-places the Overseer +
4 Cultists + Thug), read the **opener** (§5) to set the scene, then **roll the party's initiative**
(mods in §3) and ask him to roll the monsters'. Go.

---

## 1. The turn loop

1. Announce whose turn it is (initiative order).
2. If it's a **PC**, you decide + roll their action, state the result, and immediately call out any
   knock-on rolls (a save the target owes, a concentration check, resistance halving).
3. If it's a **monster**, hand it to Josh: remind him of that monster's attack line + any save DC it
   forces, and roll the **PCs'** saves when they're targeted.
4. Update HP for both sides; note anyone dropped / concentration broken / condition applied.

---

## 2. The reminder checklist — call these out EVERY relevant attack (this is the whole point)

These are the exact things that got missed last session. Be the safety net:

- **Ranged-in-melee → disadvantage.** A ranged attack/spell (bow, Eldritch Blast, Produce Flame,
  crossbow) made while a hostile is within 5 ft is at **disadvantage**. Flag it.
- **Pack Tactics / adjacency advantage.** The **Thug** has Pack Tactics → **advantage** if a Cultist
  is within 5 ft of his target. (Cultists/Overseer do **not** have it.)
- **Saves that must happen.** When an attack/spell forces a save, say the DC out loud and roll it:
  - *Prone riders* (none native to this camp, but Ol' Moe's bite / a shove force **DC 11 STR**).
  - *hold person* → **Wis save DC 11**, fail = **Paralyzed** (melee within 5 ft auto-crits;
    re-save at end of each of the held PC's turns).
  - *sacred flame* → **Dex save DC 11** (ignores cover), 1d8 radiant.
  - *command* → **Wis save DC 11** or obey a one-word order ("flee"/"grovel"/"drop").
  - *Still hazard* → any hit **on the still** sprays scalding sap: adjacent creatures **DC 13 Dex
    or 1d6 fire**.
- **Concentration.** When a creature **concentrating** on a spell takes damage → **CON save, DC 10
  or half the damage taken (whichever is higher)**; fail = the spell drops.
  - The **Overseer** concentrates on *hold person / spiritual weapon / shield of faith* — announce
    his concentration save when he's hit; breaking it **frees a paralyzed PC**. Reward "focus the
    caster."
  - Watch PC concentration too: **Alary** (Entangle/Faerie Fire/Moonbeam/Barkskin), **I'Drenk**
    (Bless/Bane/Hunter's Mark/Shield of Faith), **Jarlaxle** (Hunter's Mark/Faerie Fire),
    **Douglas** (Hex/Shatter is *not* conc.).
- **Resistances.** If a target has damage resistance, **halve** the (physical) damage before
  applying. (No PC rages here unless Alary/others buff — but keep the habit.)
- **Buffs are multi-target.** *Bless* covers **up to 3** creatures (+1d4 to their attack rolls AND
  saves); *Bane* debuffs up to 3 enemies (−1d4). Track who's under each and apply the die.

---

## 3. Initiative

- **You roll the 5 PCs** with these mods: **Jarlaxle +3 · Tuf +2 · Alary +1 · Douglas +1 · I'Drenk +1.**
- **Josh rolls the monsters:** **Overseer +2 · Cultists +1 (one group roll) · Thug +0.**

---

## 4. The Party — quick reference (all level 3)

| PC (player) | Class | AC | HP | Speed | Prone save (STR) | Concentration (CON) |
|---|---|---|---|---|---|---|
| **Tuf** (Bee) | Barbarian / Berserker | 14 | **42** | 25 | **+4**, *adv while Raging* | +4 (can't conc. — martial) |
| **I'Drenk** (Ethan) | Paladin / Vengeance | **19** | 36 | 30 | +3 | +2 |
| **Jarlaxle** (Liam) | Ranger / Beast Master | 15 | 30 | 30 | +2 | **+0 (fragile!)** |
| **Alary** (Mackenzie) | Druid / Land (Forest) | 14 | 30 | 30 | +1 | +2 |
| **Douglas** (Richard) | Warlock / Great Old One | 12 | 30 | 30 | +1 | +2 |

**Toolkits (what they actually do):**

- **Tuf** — Battleaxe (2H) **+4, 1d10+2** (→ **1d10+4** while Raging). Handaxe thrown +4, 1d6+2 (no
  Rage bonus). **Rage** (bonus, 3/rest): resist B/P/S, +2 melee dmg, adv on STR. **Reckless Attack**
  (advantage on her STR attacks; attacks vs her get advantage too). **Frenzy** (bonus, while raging:
  one extra melee attack; exhaustion when rage ends). Gnome Cunning: **adv on INT/WIS/CHA saves vs
  magic** (great vs *hold person* / *command* — those are Wis saves → she rolls with advantage).
- **I'Drenk** — Longsword **+5, 1d8+3**; **Divine Smite** (+2d8 radiant, 3d8 vs undead/fiend, per
  slot; **3× L1 slots**; decided after a hit, no action). Javelin +5, 1d6+3. **Channel Divinity ·
  Vow of Enmity** (bonus, advantage vs one target, 1/rest). **Lay on Hands** 15-HP pool. Spells
  (DC 12): **Bless**, Shield of Faith, Cure Wounds, Bane, Hunter's Mark. **Relentless Endurance**
  (1/long: a killing blow drops him to 1 HP instead of 0).
- **Jarlaxle** — Longbow **+7, 1d8+3** (Archery style baked in). Shortsword +5, 1d6+3. **Ol' Moe**
  (mastiff: AC 14, HP 12, Bite **+5, 1d6+3**, DC 11 STR or prone) — commanding Moe to attack **costs
  Jarlaxle's action** (so it's bow OR Moe at L3). **Hunter's Mark** (+1d6 to *his* hits). **Faerie
  Fire** (Drow, 1/long, DEX save DC 11 — team opener, everyone hits the lit foe with advantage).
  ⚠ **Sunlight Sensitivity:** disadvantage on attacks in *direct sunlight* — the camp clearing is
  open sky, so **if the fight is in daylight, his bow is at disadvantage** unless he's in shade/smoke.
- **Alary** — Produce Flame **+5, 1d8 fire** (ranged spell atk). Scimitar +3, 1d6+1. Spells (DC 13;
  **4× L1, 2× L2**): Cure Wounds, **Healing Word** (bonus, 60 ft), Entangle, Faerie Fire,
  **Thunderwave** (2d8, CON DC 13, push 10), **Moonbeam** (2d10, slide the beam), Barkskin, Spider
  Climb. **Wild Shape** 2/rest (Wolf: AC 13, 11 HP, Bite +4 2d4+2; a second health bar).
- **Douglas** — **Eldritch Blast +5, 1d10+3 force**, range **240 ft**, ignores ½/¾ cover
  (Spell Sniper); **Repelling Blast** shoves 10 ft on a hit. **Hex** (bonus, +1d6 necrotic on his
  hits). Spells (DC 13, **2× L2 slots, short-rest recharge**): **Shatter** (3d8 thunder, 10-ft radius,
  CON DC 13 — great on the cultist cluster, mind friendly fire), Misty Step (bonus escape),
  Dissonant Whispers. Chill Touch / Vicious Mockery (Wis DC 13 → target's next attack at disadvantage).

---

## 5. The scene opener (read aloud to set the fight)

> The trees simply *stop*. A raw clearing opens where a stand of ancient oaks once stood — now a
> field of **stumps**, each weeping pale sap into a catch-bucket, the cuts still bright. The reek
> hits next: resin, woodsmoke, and under it something sweetly rotten. At the centre, robed figures
> tend a crude copper **still** that drips a slow, glowing **green ichor** into iron crates — every
> crate branded with a **withered crown**. A harder-eyed man in stained vestments turns at your
> approach, hand drifting to the dagger at his belt. *"Pilgrims?"* His mouth twists. *"No. The
> Mother said hunters would come. She didn't say they'd be fool enough to come **here**."*

He bluffs, then fights (Avenues: a straight fight, stealth a crate, or pose as buyers — Deception
DC 15). **This is a Hard encounter — a real fight, not a warmup.**

---

## 6. The enemies (inline stat blocks)

### 🔥 Harvest Overseer — Cult Fanatic · CR 2 · **AC 13 · HP 33 · speed 30 · init +2**
- STR 11(+0) DEX 14(+2) CON 12(+1) INT 10(+0) WIS 13(+1) CHA 14(+2). **Dark Devotion** (adv vs
  charm/fright).
- **Multiattack:** two **Dagger** attacks, **+4, 1d4+2** piercing (melee or thrown 20/60).
- **Spellcasting** (Wis, **save DC 11**, **+3 to hit**):
  - Cantrips: *light, **sacred flame** (Dex DC 11, 1d8 radiant, ignores cover), thaumaturgy.*
  - 1st (4 slots): ***command**, **inflict wounds** (melee spell **+3, 3d10 necrotic** — his scariest
    hit), **shield of faith** (+2 AC, concentration).*
  - 2nd (3 slots): ***hold person** (Wis DC 11, paralyze, concentration), **spiritual weapon** (bonus
    action, +3, **1d8+1 force**, flies to a backline caster).*
- **Tactics:** stays back. Opens **hold person** on the party's heaviest hitter + **shield of faith**
  on self; **spiritual weapon** every turn at a caster; **inflict wounds** if a PC reaches him,
  else **sacred flame** / **command** ("flee"/"grovel"). **He inflicts, never heals.**

### 🗡 Cultist ×4 · CR 1/8 · **AC 12 · HP 9 · speed 30 · init +1 (group)**
- **Scimitar +3, 1d6+1** slashing. **Dark Devotion** (adv vs charm/fright). Fodder-with-conviction:
  screen the Overseer and the still. No tricks.

### 🪓 Thug ×1 · CR 1/2 · **AC 11 · HP 32 · speed 30 · init +0**
- **Multiattack:** two **Mace, +4, 1d6+2** bludgeoning; **or Heavy Crossbow, +2, 1d10** piercing
  (range 100/400 — opens on a backline caster/archer before closing). **Pack Tactics** (adv if a
  Cultist is within 5 ft of his target). 32 HP — soaks a round the cultists can't.

### ⚠ Terrain & hazard
- **Catch-buckets** everywhere = **difficult terrain** (footing for chargers).
- **The still** is a hazard: any **hit on the still** sprays scalding sap → adjacent creatures make
  **DC 13 Dex save or 1d6 fire.** (A clever PC can weaponize it.)

### 🏳 Morale
- When the **Overseer falls** *or* the **Cultists drop to 2**, survivors **break and beg/flee**.
  **Say yes to capturing one** — that's the payoff (Clue 3: the rite, the timing, Mother Sere at the
  grove). Don't grind the last fodder.

**Budget:** 650 base ×2 (6 monsters) = **1,300 adjusted → Hard** for the party of 5. Too easy?
Thug holds a round longer / add a 2nd Thug. Too hard? Cultists break early.

---

## 7. Lessons from last session (say these when they come up)

- **Dice sizes.** `d4` maxes at **4** (not 6/7); `2d4+2` (a dagger/wolf bite) tops out at 10.
  Point Josh at the cockpit's **dice tray / drag-the-attack-onto-target**, which rolls the *right*
  dice straight from the stat block.
- **A natural 20 on a *saving throw* is NOT an auto-success** (only *attack rolls* auto-crit on 20).
  A low-DC save can still fail on a 20 if the total misses — and here most DCs are 11–13, so it
  rarely matters, but call it correctly.
- **Ties go to the attacker:** you hit if the total **meets or beats** the AC.
- **Prone** on a PC = disadvantage on their own attacks, and melee attackers get advantage vs them;
  standing up costs half their move.

---

## 8. Source of truth (read for anything not inlined here)

- **Party:** `modules/the-weeping-grove/site/party.data.js` (`window.WEEPING_GROVE_PARTY`) — full
  sheets, every spell, Wild Shape forms.
- **Module / this scene:** `modules/the-weeping-grove/the-weeping-grove.data.js` (`MODULE`) — the
  `scenes[]` entry `id:"scene3"` holds the read-aloud, DM notes, round-by-round tactics, clues, and
  Avenues; `statblocks{}` holds every monster (`fanatic`, `cultist`, `thug`).
- **The screen:** `modules/the-weeping-grove/site/combat-cockpit.html` — open locally (works on
  `file://`). Navigating to **Scene 3 · Harvesters' Camp** auto-loads this roster.
- **Rules lookups:** the D&D 5e KB at the repo root (`CLAUDE.md` topic index → `quick-reference/`,
  `players-handbook/`, etc.).
