# Live DM Assistant — Runtime Workflow (PHASE 2c)

**What this is:** a **live, at-the-table companion** that *runs* a prepared one-shot with you, scene by
scene, so you're not flipping books mid-session. It walks a module built by the Session Creator (2a),
resolves the party (built by the Character Creator, 2b) against the rules, **conducts combat**, and keeps a
**running session-state file** you can pause and resume.

**How to invoke (Josh):** say *"run the session,"* *"let's play `<module>`,"* *"start the game,"* or *"be my
DM screen."* Claude then **reads this file and runs the live loop**.

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

1. **Load the module.** Read the prepped one-shot — either `../modules/<slug>.md` **or a module in its own
   folder** `../modules/<slug>/<slug>.md` (e.g. `../modules/the-weeping-grove/the-weeping-grove.md`; check
   the folder's `README.md` for which file to run). If the DM didn't name one, list what's in `../modules/`
   (files and folders) and ask which. Note the **quest, the Two Paths, the Key, the scene list +
   tags/cut-list, the party XP budget, the Showdown, and both Endings**.
2. **Load the party.** Read the relevant `../characters/*.md` packets — record each PC's **name, AC, HP,
   passive Perception, initiative (Dex) mod, save mods, and key resources** (spell slots, Second Wind, Lay
   on Hands, Rage, Channel Divinity, etc.). No packets yet? Ask for a one-line party list (name · AC · HP ·
   passive Perception · class) — or offer to build them first with `character-creator.md`.
3. **Open the state file.** Create `../sessions/<slug>-<YYYY-MM-DD>.md` from `../sessions/_TEMPLATE.md`,
   pre-filled with: the party table, the module's scene list (all ○ upcoming), the four **party XP budgets**,
   **Key = not found**, trending Ending = (undecided), and **current scene = Cold Open**.
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
> (6 reflavored **Wolves**, stat block inlined in the scene). When you reach it, **don't just resolve it —
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
2. **Roll initiative.** Ask each player for their d20 (add their init mod from the packet); roll each
   monster group once using the stat block's **Dex** mod (say what you rolled). Build the **initiative order**
   in the state file's **Combat tracker**.
3. **Set the stage (one line):** terrain, cover, elevation, light — "cover and elevation do more than +2 HP."
4. **Log HP.** Record every combatant's **current HP** (PCs from packets; each monster from its block) in the
   tracker. You'll decrement these as damage is reported — keep them current.
5. **Run each turn in initiative order:**
   - **Monster's turn:** pick a **target + action** per its role and intelligence (brute hunts the front,
     skirmisher flanks the backline, leader buffs/debuffs, beasts hit the nearest; smart foes focus-fire the
     healer, take cover, retreat). State it plainly: *"The skeleton shoots the wizard — **+4 to hit** vs AC,
     on a hit **1d6+2 = 5 piercing**."* Apply the result to tracked HP; note any condition.
   - **PC's turn:** announce whose turn, prompt the DM/player for the action, then resolve: an **attack** vs
     the monster's AC (ask for the d20 + their bonus), a **save** the monster makes vs the PC's **spell save
     DC**, etc. Subtract damage from the tracked monster HP; call it when one drops to 0.
6. **Conditions & concentration:** track them in state (prone, grappled, frightened, poisoned, stunned →
   `../quick-reference/conditions.md`; remind the caster to make a **Con save** when a concentrating PC takes
   damage — DC 10 or half the damage, whichever is higher).
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

## Data layer this workflow stands on (pull from, don't re-derive)
| Need | File |
|---|---|
| The prepped one-shot (scenes, NPCs, inlined stat blocks, Endings) | `../modules/<slug>.md` |
| The party (AC/HP/passive Perception/saves/resources) | `../characters/*.md` |
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

*Scope note: runs a **2a one-shot** (monsters CR 0–5) with a **2b level-1 party**. **Multi-session campaign
continuity** (recurring NPCs across sessions, faction clocks, level progression) is the planned **backlog
item 2d**; the session-state file here is a stepping stone toward it. CR 6+ monsters and spells L6–9 → look
up in the PDF.*
