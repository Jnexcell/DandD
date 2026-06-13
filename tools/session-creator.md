# Session/Module Creator — Workflow (PHASE 2a)

**What this is:** a guided, *draft-then-refine* workflow for turning a short brief into a complete,
**ready-to-run one-shot module**. It's built on Pointy Hat's **MMOS** framework and auto-scales every
encounter to the party using the rules KB.

**How to invoke (Josh):** say something like *"build me a one-shot,"* *"make me a session,"* or
*"use the session creator."* Claude then **reads this file and executes it**: ask the intake questions,
draft the whole module in one pass, save it to `modules/<slug>.md`, then refine on your notes.

> **For Claude:** this file is an executable playbook. Run the 4 steps in order — **Intake → Generate →
> Emit → Refine** — using the data layer listed at the bottom. Output **one** module file per session.
> Scope is **one-shot only** (campaign mode not yet built). Use only monsters we have stat blocks for
> (**CR 0–5**, in `monster-manual/stat-blocks/`); if a brief demands something tougher, say so and either
> reflavor a CR-5 block or point to the MM PDF (offset +1).

---

## STEP 1 — Intake (ask these, then draft)

Ask Josh all of the following up front (full guided intake). Accept "you pick" / "surprise me" for any
creative field and fill it yourself. Keep it to one message; don't interrogate.

1. **Party** — how many PCs, and what level? (Classes too, if known — lets me tailor avenues to their kit.)
2. **Length** — how many hours? (≈ scene budget: 2h → cut to ~3 scenes + showdown; 3–4h → the full
   2 combat / 1 roleplay / 1 exploration + showdown; 5h+ → add one modular scene.)
3. **Tone / genre** — spooky, heroic, comedic, gritty, mystery, heist, horror, fairy-tale…?
4. **Setting / locale** — tavern, manor, dungeon, wilderness, city, ship, planar…? (Drives the monster
   environment list and the read-aloud.) "You pick" is fine.
5. **Premise / theme seed** — one line if you have one ("a wedding goes wrong," "something in the mine"),
   or "surprise me."
6. **Must-haves** *(optional)* — a specific monster, NPC, or set-piece you want in it.
7. **Safety lines / limits** *(optional)* — content to avoid (lines & veils). I'll honor these throughout.

Then **echo back a one-line brief** ("4 PCs, level 3, ~3 hrs, spooky, haunted manor, surprise-me premise,
no body horror") and start drafting. Don't wait for further confirmation unless something's contradictory.

---

## STEP 2 — Generate (the procedure Claude runs)

### 2.1 Compute the party's XP budget — *do this first, it gates every fight*
From `quick-reference/encounter-building.md`:
- Look up each PC's **Easy / Medium / Hard / Deadly** threshold for its level and **sum across the party** →
  four party budgets. Record them; they're reused for every encounter.
- **Party-size rule** for the multiplier later: **<3 PCs** → bump the count-multiplier up one row;
  **6+ PCs** → drop it one row.
- Also note the party's **Adventuring-Day XP** total (same file) — the whole module's fights should sum to
  roughly this, no more.

### 2.2 Build the MMOS spine from the brief
Work `quick-reference/one-shot-formula-mmos.md` end to end:
- **Quest** (Step 1) — the goal, stated as the players will hear it up front (Step 0).
- **Path of Least Resistance** (Step 2) — the obvious, direct route to the quest.
- **Path Least Traveled On** (Step 2) — the meandering route; at its end sits…
- **The Key** (Step 3) — an object or revelation that **recontextualizes the quest** and unlocks Ending B.
- **Encounters** (Step 4) — default mix **2 combat / 1 roleplay / 1 exploration-or-puzzle**; bulk on the
  direct path, **≥1** on the Path Least Traveled On. Everything here is **⬡ MODULAR** with a bypass.
- **Showdown** (Step 5) — the climax; the **only ★ CORE (non-modular)** encounter. Deadly-tuned.
- **Endings** (Step 6) — **A "Adequate"** (no Key) and **B "Ballsy"** (requires the Key); keep mechanics
  similar, change the flavor by Key.
- **Hook** (Step 7) — one per ending, dependent on the party's choices.

### 2.3 Stat every combat — encounter auto-scaling *(the mechanical core)*
For each fight (incl. the Showdown):
1. **Pick a target band** — most combats **Medium–Hard**; the **Showdown = Deadly**.
2. **Pick setting-appropriate monsters** from the environment quick-pick in
   `quick-reference/dm-toolkit/encounters-and-monsters.md`, restricted to **CR 0–5** (what we have stat
   blocks for). Favor a *group*: a leader + brutes + skirmishers reads better than one slab.
3. **Do the math** — base XP total (sum each monster's XP) **× the count multiplier**
   (1→×1 · 2→×1.5 · 3–6→×2 · 7–10→×2.5 · 11–14→×3 · 15+→×4; apply the party-size row shift from 2.1).
   Confirm the **adjusted** XP lands at/above the target band's threshold and below the next one.
4. **Verify against the day** — the combats + Showdown together shouldn't blow past the Adventuring-Day XP.
5. **Inline the full stat block** for each chosen monster — copy it **verbatim from
   `monster-manual/stat-blocks/cr-X.md`** into the scene (Josh chose full inlining for at-table speed).
   Add 1–2 lines of tactics + a morale trigger (`encounters-and-monsters.md`).

> **Show your work in the module:** under each fight, print the budget line, e.g.
> *"Party budget (4×L3): Easy 300 / Med 600 / Hard 900 / Deadly 1,600. This fight: 6 goblins ×50 = 300 base
> ×2 (3–6) = 600 adjusted → **Medium**."* So Josh can retune at a glance.

### 2.4 Build the non-combat beats — use the DM toolkit
- **NPCs** → `dm-toolkit/npc-generator.md` (name · face · voice · want · secret; attach a stat block only if
  they might fight). **Roleplay scene** → `dm-toolkit/social-and-dialog.md` (attitude + Conversation
  Reaction DCs + dialog hooks).
- **Exploration / puzzle** → `dm-toolkit/traps-puzzles-hazards.md` (a puzzle pattern or a skill challenge,
  X successes before 3 fails). Trap stats from `dungeon-masters-guide/05-adventure-environments.md`.
- **Read-aloud + sensory dressing** → `dm-toolkit/environments-and-dressing.md` ("describe in 3 layers").
- **Scene goals / branching avenues** → `dm-toolkit/scenes-goals-and-avenues.md`.
- **All DCs** come from `quick-reference/difficulty-classes.md` (Easy 10 / Med 15 / Hard 20 / etc.).

### 2.5 Tag, bypass, and respect safety
- Tag each scene **★ CORE** or **⬡ MODULAR**. Only the Showdown (and the cold open) are CORE.
- Every ⬡ MODULAR scene needs a **Bypass** line — how to cut it for time while still handing the party
  anything they need to proceed (per MMOS Step 4).
- Apply the **safety lines** from intake: drop or reflavor flagged content; note any session-zero tools.

---

## STEP 3 — Emit the module

Write the module to **`modules/<slug>.md`** (slug = short kebab title, e.g. `the-weeping-manor.md`) using
the structure in **`../modules/_TEMPLATE.md`**. Hit every section, keep scene headers in the exact format
`## Scene N — <title>  [★ CORE | ⬡ MODULAR] · <type> · ~<time>` (the future live DM Assistant, 2c, walks
these). Fill the **MMOS one-page worksheet** in the overview. Then tell Josh it's saved and give a 3–4 line
summary (quest, the Key, scene count, where the difficulty sits).

---

## STEP 4 — Refine

Josh will react ("swap the boss for something scarier," "make scene 2 harder," "cut the puzzle," "darker
tone"). Edit the saved `modules/<slug>.md` **in place**:
- When an **encounter changes**, re-run the 2.3 math and update the printed budget line + the inlined stat
  block(s).
- When a **scene is cut/added**, fix the cut-list and any "Exit/lead" that pointed at it.
- Keep the MMOS spine coherent (don't orphan the Key or an Ending).

---

## Data layer this workflow stands on (pull from, don't re-derive)
| Need | File |
|---|---|
| MMOS steps + worksheet | `quick-reference/one-shot-formula-mmos.md` |
| XP thresholds · multipliers · adventuring day | `quick-reference/encounter-building.md` |
| DC ladder for checks/puzzles/social | `quick-reference/difficulty-classes.md` |
| Monsters by environment + roles + morale | `quick-reference/dm-toolkit/encounters-and-monsters.md` |
| NPC generation | `quick-reference/dm-toolkit/npc-generator.md` |
| Social scene + dialog | `quick-reference/dm-toolkit/social-and-dialog.md` |
| Puzzles / traps / skill challenges | `quick-reference/dm-toolkit/traps-puzzles-hazards.md` |
| Read-aloud + dressing | `quick-reference/dm-toolkit/environments-and-dressing.md` |
| Scene goals + avenues | `quick-reference/dm-toolkit/scenes-goals-and-avenues.md` |
| Full monster stat blocks (CR 0–5) | `monster-manual/stat-blocks/cr-0.md … cr-5.md`, index `monster-manual/monsters-by-cr.md` |
| Pacing + safety tools | `quick-reference/new-dm-one-shot-tips.md` |
| Output structure | `../modules/_TEMPLATE.md` |

*Scope note: one-shot only; CR 0–5 monsters. **Campaign mode** (multi-session arcs, recurring NPCs, threaded
plots, level progression) is the planned long-term evolution of this tool — tracked as **backlog item 2d** in
`../PROGRESS.md` (a future `tools/campaign-creator.md` would orchestrate this per-session engine across
chapters). 2b (character creator) and 2c (live assistant) are separate builds. The module structure here is
designed so 2c can consume it later.*
