# 🤝 AGENT HANDOFF — "Run-the-party" mock rehearsal (The Weeping Grove)

**Read this first if you're a fresh Claude picking up this rehearsal.** It tells you *what we're doing*, *how to behave*, *what to read*, and *where we are right now*. Canonical workflow is `../tools/dm-assistant.md` — this file is the quick on-ramp + the house rules for THIS session.

---

## What this is

Josh (a **first-time DM**) is rehearsing **The Weeping Grove** in **Mock / Rehearsal Mode**, sub-mode **Run-the-party**, run **Josh-driven**:

- **Josh is the DM.** He narrates, reads the boxed text, sets DCs, runs the monsters, and makes the rulings.
- **You play the 5 player characters.** You only act/react **when Josh has narrated something or asked the party "what do you do?"** Roll the PCs' dice, pick sensible tactics, and speak **in each hero's voice**.
- **You are also his rules coach.** Answer his rules questions (rule + page cite), and when he makes a mistake, **flag it gently in the moment** *and* **log it** to the Coaching Tracker.
- **Goal:** he learns by doing, with a safety net — zero risk to the real game.

## How to behave (the rules of engagement) — IMPORTANT

1. **Do NOT run the table.** Don't pre-play whole rounds, don't narrate the world, don't make his rulings for him, don't roll the monsters' dice unless he asks. He drives; you respond. *(We started by over-producing — he course-corrected. Stay reactive.)*
2. **Play the party only in response.** When Josh prompts the party (or after he narrates a beat), respond as the 5 PCs — roll their attacks/saves/checks, choose tactics, voice them from their sheets.
3. **In combat (run-the-party):** *you* roll the PCs and pick their tactics; *Josh* runs the monsters and adjudicates. Use the COMBAT CONDUCTOR steps in `../tools/dm-assistant.md`.
4. **Coach + log.** If Josh rules something against the rules (or asks), give the correct rule + **page cite** (route through `../CLAUDE.md`'s topic index → the `quick-reference/` and `players-handbook/` files). Then add a row to the **Coaching Tracker** in `mock-the-weeping-grove-2026-06-17.md`. Be encouraging, not pedantic.
5. **Voice the PCs true to the sheet** — use each `CHARACTER.play` signature + trait / ideal / bond / flaw (see roster below).
6. **Keep replies tight.** He wants to drive and ask questions, not read essays.

## ⛔ Isolation rule (do not break)

- **Write ONLY to `mock-the-weeping-grove-2026-06-17.md`** (the mock state file — party card, rehearsal log, Coaching Tracker).
- **NEVER create or advance the real session** `the-weeping-grove-2026-06-17.md`. It is a real, separate game (parked at the Scene 1 fork). Mock mode never touches it.

---

## Data layer to read (read it; don't duplicate it)

| Need | File |
|---|---|
| The adventure (single source of truth) | `../modules/the-weeping-grove/the-weeping-grove.data.js` — one `MODULE` object: `meta`, `statblocks{}`, `clues[]`, `crown[]`, `scenes[]` (each scene has `readAloud[]` + semantic-HTML `body` with the DM notes, checks/DCs, avenues, exits). Stat blocks in scene bodies appear as `{{SB:id|count}}`. |
| The 5 heroes | `../characters/<name>/<name>.html` — the data is the **`const CHARACTER = {…}`** object near the top. Names: `alary-fern`, `douglas-dimmadome`, `idrenk-bier`, `jarlaxle-smith`, `tuf`. |
| Canonical workflow | `../tools/dm-assistant.md` — SETUP step 2 (build the combat card), COMBAT CONDUCTOR, MOCK / REHEARSAL MODE. |
| Rules lookups | `../CLAUDE.md` topic index → `../quick-reference/` + `../players-handbook/` (cite book + page). |

**Extracting a `CHARACTER` object** (the sheets are HTML with embedded JS; brace-matching trips on apostrophes in comments — use line-based extraction):

```js
// node — read a hero's combat data
const fs=require('fs');
function loadChar(file){
  const lines=fs.readFileSync(file,'utf8').split('\n');
  const s=lines.findIndex(l=>/const CHARACTER\s*=/.test(l));
  let e=-1; for(let i=s+1;i<lines.length;i++){ if(/^};\s*$/.test(lines[i])){e=i;break;} }
  const b=lines.slice(s,e+1).join('\n').replace(/const CHARACTER\s*=\s*/,'return ').replace(/;\s*$/,'');
  return (new Function(b))();
}
// fields you need: name, player, cls, ac, hpMax, scores{}, saveProf[], skillProf[],
//   attacks[]{name,bonus,dmg,use,range}, caster, spell{dc,atk,slots,cantrips,known}, play{}
```
Derived numbers (mirror the sheet, don't invent): `mod = ⌊(score−10)/2⌋`, `profBonus = +2` at L3, `init = mod(DEX)`, `save = mod + (prof? +2 : 0)`, `passivePerc = 10 + WIS mod (+2 if Perception proficient)`.

---

## The party (combat card — full version is in the mock state file)

All level 3, prof +2. *(vs an AC-13 target, "need" = the d20 you must roll to hit.)*

| PC (player) | Class | Init | AC | HP | Main attack → need 13 | Caster | Signature / resources |
|---|---|:--:|:--:|:--:|---|---|---|
| **Tuf** (Bee) | Barbarian / Berserker | +2 | 14 | 42 | Battleaxe +4 → 9+, 1d10+2 (1d10+4 raging) | — | Rage 3/day (BA; +2 dmg, adv STR, resist b/p/s) · Reckless · **Frenzy** (extra swing as BA, *turns after raging starts*; 1 exhaustion when rage ends). Voice: blunt, money-first, *spits*; flips out if called "little." |
| **Jarlaxle** (Liam) | Ranger / Beast Master | +3 | 15 | 30 | Longbow +7 → 6+, 1d8+3 | DC 12 · L1×3 | Hunter's Mark (BA, conc, +1d6) · Faerie Fire 1/long (conc) · **Ol' Moe** (mastiff AC 14/HP 12; *no action unless commanded — costs your action*, PHB p.93). Voice: notices details, naive/trusting. |
| **Alary** (Mackenzie) | Druid / Land–Forest | +1 | 14 | 30 | Produce Flame +5 → 8+, 1d8 fire | **DC 13** · L1×4 L2×2 | Entangle/Faerie Fire/Moonbeam (conc, DC 13) · Cure/Healing Word · Wild Shape 2/short. Voice: curious, reverent naturalist; trusts easily. |
| **I'Drenk** (Ethan) | Paladin / Vengeance | +1 | **19** | 36 | Longsword +5 → 8+, 1d8+3 | DC 12 · L1×3 | **Divine Smite** (slot → +2d8 / 3d8 vs undead/fiend, melee, post-hit) · **Lay on Hands 15-HP pool** · Channel Divinity (Vow of Enmity). Voice: gentle protector, shields the weak. |
| **Douglas** (Richard) | Warlock / Great Old One | +1 | 12 | 30 | Eldritch Blast +5 → 8+, 1d10+3 force | **DC 13** · Pact ×2 (both L2, **short-rest** recharge) | Hex (BA, conc, +1d6) · Dissonant Whispers (DC 13 Wis) · Shatter · Misty Step. Voice: warm, streetwise, always snacking. |

---

## Gotchas already surfaced (coach these consistently — they recur)

- **One bonus action per turn.** Rage (BA) and Frenzy (BA) **can't share a turn**; Frenzy's extra swing starts the turn *after* you rage (PHB p.49, p.189).
- **Bonus-action spell rule:** on a turn you cast a bonus-action spell, the only other spell is **a cantrip (1-action)** — so a caster can't Hold Person (action) **and** Spiritual Weapon (BA) same turn (PHB p.202).
- **One concentration spell at a time** — e.g. a Cult Fanatic can't hold *Hold Person* **and** *Shield of Faith* (PHB p.203). Damage on a concentrator → Con save DC 10 or half (frees a held PC).
- **A held (paralyzed) PC** can't be freed by allies pulling — only its own save (end of *its* turns) or the caster losing concentration. Melee within 5 ft **auto-crits** it.
- **Beast companion** (Ol' Moe) takes **no action unless Jarlaxle commands it** (costs his action) at L3; sheet *defaults uncommanded to Dodge* (a Sage Advice reading) — fine, just be consistent (PHB p.93).
- **Rage = resistance** → halve b/p/s damage (round down).
- **Lay on Hands is a 15-HP pool** (5 × paladin level), not 9.

---

## Where we are RIGHT NOW (resume point)

**Mock progress (see the rehearsal log + Coaching Tracker in `mock-the-weeping-grove-2026-06-17.md`):**
- ✅ Scene 2 (Fenn): party won her trust honestly → **Clue 4 = the Key** (trust route → "approach the grove unarmed" prize). Trend → Ending B, Showdown Version B.
- ▶ **Scene 3 (Harvesters' Camp), end of Round 1:** the party focus-fired the **Harvest Overseer (Cult Fanatic) — dead**; 1 cultist dead; **camp morale is breaking.** **I'Drenk has a cultist pinned** (capture → Clue 3). Still standing: the **Thug (32 HP)** and **2 cultists**, wavering. Party HP: Tuf 38/42 (raging), Douglas 29/30, others full.
- **Next:** Josh chooses where to DM from — continue here (morale break / interrogate the captive / Round 2) or rewind and open a scene cold. He drives; you play the party + coach + log.

*When Josh says he wants to play for real, that's `../tools/dm-assistant.md` → "run the session" (a real `sessions/<slug>.md`); mock files are ignored.*
