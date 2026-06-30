# Live DM Assistant — Runtime Workflow (PHASE 2c)

**What this is:** a **live, at-the-table companion** that *runs* a prepared one-shot with you, scene by
scene, so you're not flipping books mid-session. It walks a module built by the Session Creator (2a),
resolves the party (built by the Character Creator, 2b) against the rules, **conducts combat**, and keeps a
**running session-state file** you can pause and resume.

**How to invoke (Josh):** say *"run the session,"* *"let's play `<module>`,"* *"start the game,"* or *"be my
DM screen."* Claude then **reads this file and runs the live loop**.

**To rehearse instead of playing for real:** say *"mock play,"* *"rehearse the session,"* or *"show me what
can happen"* → see **[Mock / Rehearsal Mode](#-mock--rehearsal-mode--practice-without-touching-a-real-session)**
below. Mock mode lets Josh practice (and see every branch) **without** advancing a real session.

> **For Claude — this is an executable RUNTIME playbook (not a prep pipeline).** Run **SETUP** once, then
> the **SCENE LOOP** + **DISPATCH** for the rest of the session, dropping into the **COMBAT CONDUCTOR** for
> fights. Persist everything to `../sessions/<slug>.md` so the game survives a pause.

> ## Runtime contract — how to behave at the table (read this first)
> - **Be fast and compact.** The DM is live with players waiting. Surface only the **current beat** — never
>   dump the whole module or a wall of text. Short panels, then stop and wait.
> - **Separate "read-aloud" from "DM-only."** Put boxed read-aloud text the DM can read to players in a
>   quote block; keep secrets, DCs, and twists clearly labeled **DM-only**. **Never leak hidden info.**
> - **Offer, don't override.** Suggest the call (the DC, the monster's move, the ruling); the **DM decides**.
> - **Say "yes-and / no-but."** When players do something unprepped, make it work (maybe at a cost) — improvise
>   with the dm-toolkit, then **seed back** toward a prepped lead. The two paths are a floor, not a ceiling.
> - **Keep the dice with the table.** You don't roll for the players; ask for their rolls. You *may* roll for
>   monsters (and say so) or ask the DM to — match the DM's preference.
> - **Track state relentlessly.** Every HP change, condition, attitude shift, and choice goes into the state
>   file the moment it happens.

---

## SETUP — start of session (do once)

1. **Load the module.** Read the prepped one-shot. A module is **one of two formats** — check the folder's
   `README.md`:
   - **Structured data** `../modules/<slug>/<slug>.data.js` — a single `MODULE` object (this is **The Weeping
     Grove**: `../modules/the-weeping-grove/the-weeping-grove.data.js`). Read it directly: `meta` (quest, the
     Key logic, the clock, the Endings condition), `statblocks{}` (every monster, clean stats), `clues[]`,
     `crown[]`, and `scenes[]` (each with `readAloud[]`, semantic-HTML `body`, tag, type, time). The scene
     `body` holds the read-aloud, DM-only notes, checks+DCs, NPCs, avenues, bypass, and exit — read it straight.
   - **Prose** `../modules/<slug>.md` (the Session Creator's default output).
   If the DM didn't name one, list what's in `../modules/` (files and folders) and ask which. Note the
   **quest, the Two Paths, the Key, the scene list + tags/cut-list, the party XP budget, the Showdown, and
   both Endings**.
2. **Load the party → build the Party Combat Card.** Read each hero's sheet
   `../characters/<name>/<name>.html` — the data is the **`const CHARACTER = {…}`** object near the top (the
   five heroes: `alary-fern`, `douglas-dimmadome`, `idrenk-bier`, `jarlaxle-smith`, `tuf`). From each
   `CHARACTER`, distil a **combat card** the table will lean on every fight:
   - **`ac`, `hpMax`**, **initiative = the DEX modifier** (`mod(DEX) = ⌊(DEX−10)/2⌋`), **passive Perception =
     10 + Perception bonus**, and **save mods** (`mod + prof(2 at L3)` for each `saveProf`).
   - **Attacks** — straight from `CHARACTER.attacks[]`: each `name · use (action cost) · range · bonus (to-hit)
     · dmg`. (e.g. Alary: *Produce Flame +5, 1d8 fire, Action, 30 ft*.)
   - **Spellcasting** (if `caster:true`): `spell.dc` (save DC), `spell.atk`, and **`spell.slots`** by level,
     plus the cantrips/known list — so you can tell a caster what they can still afford.
   - **Key resources** to track as used/total: Rage (Tuf), Pact-magic slots & short-rest recharge (Douglas),
     Lay on Hands pool + Channel Divinity (I'Drenk), Wild Shape, the Ranger's companion **Ol' Moe** (Jarlaxle),
     etc. — read these out of `CHARACTER.features` / `play`.
   Mirror the sheet's own math (`mod`, `profBonus = 2 + ⌊(level−1)/4⌋`, `saveBonus`, `skillBonus`) — **don't
   invent numbers**. No sheets yet? Ask for a one-line party list (name · AC · HP · passive Perception · class)
   — or offer to build them with `character-creator.md`.
3. **Open the state file.** Create `../sessions/<slug>-<YYYY-MM-DD>.md` from `../sessions/_TEMPLATE.md`,
   pre-filled with: the **Party table + the 🃏 Party Combat Card** (from step 2), the module's scene list (all
   ○ upcoming), the four **party XP budgets**, **Key = not found**, trending Ending = (undecided), and
   **current scene = Cold Open**.
4. **Ready briefing (3 lines):** the one-line pitch, the **quest as the players hear it**, and *"say 'begin'
   to run the cold open."* Then wait.

---

## THE SCENE LOOP — the "Scene Control Panel"

When the party enters a scene (starting with the Cold Open), pull that scene from the module and present a
**tight control panel** — then **stop and wait** for the DM. Don't pre-empt the players' choices.

> **▸ New-DM coaching mode (Josh is a first-time DM — help him run *every* scene, not just the fights).**
> Walk him through each beat of the whole session, scene by scene:
> - **Open each scene** by handing him the **read-aloud** to deliver (clearly boxed) and keeping the
>   **DM-only** setup, clues, and twists separate — tell him plainly *what to say* vs *what to hold back.*
> - **Surface the scene's tools every time:** its **🔎 Clues here** (what to seed + the read-aloud lines),
>   its **avenues**, its **Bypass** (if short on time), and its **exit/lead** to the next beat — so he's
>   never left wondering "what now?"
> - **Prompt, don't assume:** after the panel, ask *"what do the players do?"* and wait. When they act,
>   route through **DISPATCH** — dropping into **check-coaching** for a roll or the **COMBAT CONDUCTOR**
>   (first-fight coaching) for a fight.
> - **Keep him oriented every transition:** name the **current scene**, the **clock** (Great Harvest, dusk
>   day 3), whether the **Key** is found yet, and which **Ending** is trending.
> - **Offer the next step** at each scene's end (*"the road to Scene 1, or the drag-marks to Scene 2 —
>   which way?"*), and honor the **cut-list** if time runs short (drop ⬡ scenes; never the Showdown).

> **▶ Scene N — `<title>`**  ` [★ CORE | ⬡ MODULAR] · <type> · ~<time> `  *(tag from the module)*
>
> **Read aloud** *(deliver to players):*
> > <the scene's boxed sensory text — first impression + a sound + a smell + the light; end on a prompt>
>
> **DM-only — what's really here:** <the setup/secret; what the party can learn>.
> **NPCs here:** <Name — want · voice tell>  *(say "talk to <NPC>" for live dialog)*.
> **They can see / sense:** <one line; say "describe it" for the full 3-layer sensory pass>.
> **If it's a fight:** <roster preview> — say **"roll initiative"** to run it.
> **Checks & DCs:** <the skill checks this scene invites — skill · DC · what success/failure does>.
> **Avenues (ways through):** <2+ — fight / stealth / talk / trick / magic / lore / skill / avoid>.
> **Exit / leads:** <what points to the next beat — three-clue reminder for must-finds>.
> **Clock / cut:** <time pressure, and whether this ⬡ scene can be cut if running long>.

Keep it tight; expand any line **on request** (pull the detail from the dm-toolkit / KB). Update the state
file: mark this scene **▶ current**, prior scene **✅ done** with a one-line outcome.

---

## DISPATCH — when the DM tells you what the players do

| DM says… | You do |
|---|---|
| *"they go to X" / "next scene" / "they take the <path>"* | Set **current scene** in state; present that scene's panel. Choosing the detour over the direct route **is** the meaningful MMOS choice — note it. |
| *"they talk to / question <NPC>"* | Generate **in-character dialog** via `../quick-reference/dm-toolkit/social-and-dialog.md` (want + attitude + secret → lines: deflect / bargain / reveal-with-a-catch). Set/adjust the NPC's **attitude** in state; for a real ask, call **Persuasion/Deception/Intimidation** vs the Conversation-Reaction DC. |
| *"they attack" / "roll initiative" / combat starts* | Go to the **COMBAT CONDUCTOR** below. |
| *"they try to <X>"* | Find the matching **avenue** (`scenes-goals-and-avenues.md`), name the **skill + DC** (`../quick-reference/difficulty-classes.md`: Easy 10 / Med 15 / Hard 20), ask the right PC to roll, resolve vs **their** modifier. On a miss, **fail forward** (cost time / resources / a complication — never a dead end). |
| *"what's the rule for <X>?"* | Quick KB lookup — route through `../CLAUDE.md`'s topic index (conditions, cover, grappling, resting, death saves, a spell). Give the ruling + the page cite, flag DM discretion. |
| *players do something unprepped / go off-map* | **Yes-and / no-but.** Improvise with the dm-toolkit (`npc-generator.md`, `encounters-and-monsters.md`, `traps-puzzles-hazards.md`, `environments-and-dressing.md`), keep the **spine** coherent, and bread-crumb back toward a prepped lead or the Showdown. |
| *"they found <the Key>" / a big choice* | Record it in state (**Key = found**, or the choice) — this **flips the trending Ending** (A Adequate → B Ballsy). |
| *"the scene's dragging" / it stalls* | Drop a **complication** (the d8 in `scenes-goals-and-avenues.md`): a noise, an arrival, the clock ticks audibly. |
| *"we're short on time" / "wrap it up"* | Consult the **cut-list**; drop ⬡ MODULAR scenes and head for the **Showdown** (never cut that). Track the clock against the Endings. |
| *"let's stop here" / pause* | Flush the state file (it already has everything), give a 3-line "where we are / next up," and tell them how to resume (*"run the session"* → you reload state + module). |

> **▸ Check-coaching mode (Josh is a new DM — coach the rolls, especially the table's first few).** When a
> player tries something with an uncertain, interesting outcome, **walk Josh through the roll instead of just
> announcing it** — and the *first* time each session, go slow, using the real character sheet:
> 1. **Should this even be a roll?** Coach the new-DM instinct *not* to over-roll: if a good idea just works,
>    say **yes** (no roll); if failure costs nothing, no roll. Roll only when **both** success and failure are
>    live and interesting (`../quick-reference/dm-toolkit/scenes-goals-and-avenues.md`).
> 2. **Name the check + DC out loud.** Use the module's **pre-set DC** if it has one (e.g. **Scene 2's trust
>    check — Persuasion/Insight/Deception DC 15**); otherwise pick from the ladder — **Easy 10 / Medium 15 /
>    Hard 20** (`../quick-reference/difficulty-classes.md`) — and say which **ability + skill** it is and *why.*
> 3. **Resolve against _that PC's_ number.** Tell Josh the modifier from the packet and what they need:
>    *"Persuasion is **Charisma** — the bard's is **+5**, so they roll **d20 + 5** and want **15 or better.**"*
>    Apply any **advantage/disadvantage the module flags** (Scene 2: *adv.* if they cite Clue 1/2, *disadv.* if
>    they wave weapons) → roll **2d20**, keep the higher/lower.
> 4. **On a miss, fail forward** — name the cost or complication the module gives (e.g. Scene 2's two miss
>    branches), never a dead end. Then the first time, **check in:** *"that's how a check works — keep coaching
>    them, or call them at speed?"*

---

## COMBAT CONDUCTOR — run the fight turn by turn

You **run the fight**; the DM (and players) report dice. Drive it from the inlined stat block in the module
(or pull from `../monster-manual/stat-blocks/`). Tactics from
`../quick-reference/dm-toolkit/encounters-and-monsters.md`.

> **▸ First-fight coaching mode (Josh is a new DM — turn the table's first combat into a lesson).** The
> first fight of a session is a *teaching* fight. In **The Weeping Grove** that's **Scene 1, the Bramble-Pack**
> (8 reflavored **Wolves**, `statblocks.wolf` in the data file). When you reach it, **don't just resolve it —
> walk Josh through how a round actually flows, using the real party** (`../characters/`):
> 1. **Before initiative:** give a 30-second *"how a turn works"* primer — on your turn you get a **move** +
>    one **action** (Attack / Cast a Spell / Dash / Dodge / Disengage / Help / Hide / Ready…) + maybe a **bonus
>    action**; *advantage/disadvantage* = roll **2d20**, keep the higher/lower. Then show the **initiative
>    order with each PC's name + their mod**.
> 2. **On a wolf's turn, say the _why_ the first time** (not just the result): *"Two wolves are next to the
>    fighter, so **Pack Tactics** gives them **advantage** — I roll 2d20 and take the higher; that's **+4 to
>    hit** vs his AC [read it from his packet]…"* and spell out the **prone rider** — *"on a hit he makes a
>    **DC 11 Str save** or is knocked **prone**, and prone gives melee attackers advantage on him."*
> 3. **On a PC's turn,** name the options in plain language (attack / move / Dodge / Help an ally / a spell /
>    something clever) and tell Josh **the number they need to beat** *before* they roll.
> 4. Narrate **one full round** start-to-finish, then **check in:** *"that's a round — want to keep this
>    teaching pace, or run the rest at speed?"* Honor the scene's **"first fight — keep it short, ~2 rounds"**
>    note so the lesson lands without a slog.

1. **Surprise?** If a side earned it (Stealth vs the others' passive Perception), they get a free round.
2. **Roll initiative.** Ask each player for their d20 (add their init mod **from the combat card** = their DEX
   mod); roll each monster group once using the stat block's **Dex** mod (say what you rolled). Build the
   **initiative order** in the state file's **Combat tracker**, highest → lowest, and announce it with each
   PC's name + mod so the table knows the turn order.
3. **Set the stage (one line):** terrain, cover, elevation, light — "cover and elevation do more than +2 HP."
4. **Log HP.** Record every combatant's **current HP** (PCs from packets; each monster from its block) in the
   tracker. You'll decrement these as damage is reported — keep them current.
5. **Run each turn in initiative order:**
   - **Monster's turn:** pick a **target + action** per its role and intelligence (brute hunts the front,
     skirmisher flanks the backline, leader buffs/debuffs, beasts hit the nearest; smart foes focus-fire the
     healer, take cover, retreat). State it plainly: *"The skeleton shoots the wizard — **+4 to hit** vs AC,
     on a hit **1d6+2 = 5 piercing**."* Apply the result to tracked HP; note any condition.
   - **PC's turn → present *what this character can do* (from their combat card).** Announce whose turn it is,
     then lay out **their** menu in plain language so a new player isn't stuck — pulled straight from the sheet,
     not generic advice:
     - **Action:** their listed **attacks** (`name · +to-hit · dmg`) and, for casters, the **spells they can
       still afford** given remaining `slots` (name → what it does, save *vs their DC* or spell attack
       *+atk*), plus standard actions (Dash / Dodge / Disengage / Help / Hide / Ready / Shove / Grapple).
     - **Bonus action:** what *they* have (Healing Word, Rage, a second weapon, Cunning Action, Spiritual
       Weapon move…) — only list what's on their sheet.
     - **Reaction:** Opportunity Attack, and any class reaction (Hellish Rebuke, a shield, etc.).
     - Flag a **signature move** (`CHARACTER.play.signature`) the first time. Then resolve: an **attack** vs the
       monster's AC (ask for d20 + their bonus), or a **save the monster makes vs the PC's spell save DC**, etc.
       Subtract damage from tracked monster HP; **decrement the resource** they spent (a slot, a Rage, a Lay-on-
       Hands pool) on the combat card; call it when a monster drops to 0.
6. **Conditions, durations & concentration — track every one on the tracker.** For each combatant note the
   condition, **who/what caused it, and when it ends** (e.g. *paralyzed by hold person — re-save Wis DC 11 at
   end of its turns*; *raging — 3 more rounds*; *restrained by Entangle — STR DC 13 to break*;
   *engulfed — Con DC 14 each turn, escape DC 14*). Surface a combatant's **active conditions at the top of
   its turn** so nobody forgets them. Mechanics → `../quick-reference/conditions.md`. **Concentration:** record
   *who is concentrating on what* (one spell each); whenever that caster takes damage, call a **Con save (DC 10
   or half the damage, whichever is higher)** — on a fail the spell **drops** and its effect ends (un-paralyze,
   un-restrain, etc.). This is how the party breaks the Overseer's *hold person* — make it feel earned.
7. **Death saves:** if a PC hits 0 HP, run **death saving throws** (`../quick-reference/death-and-dying.md`)
   and surface stabilize/heal options. Don't kill quietly — flag it so the table can react.
8. **Morale (optional):** at a trigger — first time at **half HP**, **leader downed**, or **group cut to
   half** — a smart enemy makes a **DC 10 Wis save** or **flees/surrenders** (`09-dm-workshop.md`). Offer it;
   the DM decides.
9. **End of fight:** award the **base** (un-multiplied) XP to the ledger, update party **HP / spent
   resources** in state, archive the combat tracker, and return to the **scene panel** + its exit/leads.

---

## STATE DISCIPLINE — keep `../sessions/<slug>.md` live

Update the state file **the moment** anything changes: scene transitions, HP/condition changes, NPC attitude
shifts, the Key found, a choice made, a resource spent, XP/loot gained. The file is the single source of
truth — on **resume**, read it + the module and continue from **current scene** (rehydrate the combat tracker
if you paused mid-fight). At session end, the **Session log** doubles as a recap.

---

## 🎭 MOCK / REHEARSAL MODE — practice without touching a real session

**Purpose:** let Josh **gain experience of everything that *can* happen across every scene** — practice DMing,
run combat, and explore the branch-space — **before** game night, with zero risk to a real game.

**Ground rules for every mock mode:**
- **Same data layer as a live game:** the module `MODULE` (`…/the-weeping-grove.data.js`) + the 5 hero sheets
  (`…/characters/<name>/<name>.html`). Build the **Party Combat Card** (SETUP step 2) just like a real session.
- **Write ONLY to a mock state file** `../sessions/mock-<slug>-<YYYY-MM-DD>.md`, headed **"MOCK — practice
  only, not a real session."** **Never** create or advance a real `sessions/<slug>.md` in mock mode.
- On entry, if Josh didn't say which, **offer the three modes** below and ask which (or "a bit of each").

### 1. Run-the-party *(Josh DMs; Claude plays all 5 heroes)*
Josh sits in the DM seat; **Claude controls the whole party** from their sheets — rolling their dice, picking
sensible tactics, and reacting/speaking **in character** (use each `CHARACTER.play` voice + trait/ideal/bond/
flaw). Present each scene panel as normal, let Josh narrate and adjudicate, and respond *as the party would*.
After every decision, check, or fight, **flag the road not taken**: *"they talked Fenn around — they could
instead have searched for the journal (Investigation DC 15), threatened her (Intimidation DC 20 → she flees),
or lied (Deception DC 15 → the wood knows). Here's how each would've gone."* So Josh feels the branches live.
Run combat through the **COMBAT CONDUCTOR** (Claude rolls the PCs too here).

### 2. Auto-demo playthrough *(Claude runs both sides, narrating + teaching)*
Claude plays **both the party and the world**, running a **full sample session start → finish** down a path
Josh picks (*the road* / *the drag-marks* / *"surprise me"*). Narrate it like an actual-play: read-aloud, the
party's choices and rolls, **combat round-by-round**, the Key beat, the Showdown **version that results**, and
the ending. **Pause to teach** whenever a rule surfaces — a save, **concentration**, a **death save**, the
**rite clock**, advantage, a tricky ruling — explain it + *why*, then continue. Close with a "what happened &
why" recap so Josh sees a complete arc. Great for *"just show me a whole game once."*

### 3. Branch-explorer *(a tour of one scene's full possibility space — no dice)*
Josh names a scene (or *"all of them"*). From the structured scene data, lay out **everything that can happen
there**: every **avenue**, every **check** (skill · DC · on-hit / on-miss outcome), the **clue(s)** it can set,
the **bypass**, and the **exit/leads** — plus how to adjudicate each and the common **off-script** moves to
expect. For combats: the roster + each monster's tactics, the **morale** trigger, the **TPK valves**, and every
way the fight can end (win / flee / talk-down / the Showdown **flip**). A static reference tour — *"here's the
whole map of this scene, and what you'd do for each."*

*When Josh is ready to play for real, say "run the session" — that starts a real `sessions/<slug>.md` from
scratch (mock files are ignored).*

---

## Data layer this workflow stands on (pull from, don't re-derive)
| Need | File |
|---|---|
| The prepped one-shot (scenes, NPCs, stat blocks, clues, crown, Endings) | structured `../modules/<slug>/<slug>.data.js` (the `MODULE` object — **The Weeping Grove**) **or** prose `../modules/<slug>.md` |
| The party — combat card (AC/HP/init/saves/attacks/spell DC & slots/resources) | each hero's `../characters/<name>/<name>.html` → the `const CHARACTER = {…}` object |
| Run a scene · avenues · leads · complications · pacing | `../quick-reference/dm-toolkit/scenes-goals-and-avenues.md` |
| Pick/run a fight · monster roles · tactics · morale | `../quick-reference/dm-toolkit/encounters-and-monsters.md` |
| NPC dialog & voices on demand · reaction DCs | `../quick-reference/dm-toolkit/social-and-dialog.md` |
| NPC generation (for off-script people) | `../quick-reference/dm-toolkit/npc-generator.md` |
| Room/sensory description on demand | `../quick-reference/dm-toolkit/environments-and-dressing.md` |
| Traps / puzzles / skill challenges | `../quick-reference/dm-toolkit/traps-puzzles-hazards.md` |
| DC ladder for any check | `../quick-reference/difficulty-classes.md` |
| Conditions · death & dying · standard actions | `../quick-reference/conditions.md` · `death-and-dying.md` · `actions-in-combat.md` |
| Monster stat blocks (CR 0–5; CR 6+ → MM PDF +1) | `../monster-manual/stat-blocks/*` |
| XP budgets / adventuring day | `../quick-reference/encounter-building.md` |
| Any other rules question | `../CLAUDE.md` (topic index) |
| Live state structure | `../sessions/_TEMPLATE.md` |

*Scope note: runs a **2a one-shot** (monsters CR 0–5) with a **2b party** (The Weeping Grove's is **5 × level
3**). **Multi-session campaign
continuity** (recurring NPCs across sessions, faction clocks, level progression) is the planned **backlog
item 2d**; the session-state file here is a stepping stone toward it. CR 6+ monsters and spells L6–9 → look
up in the PDF.*
