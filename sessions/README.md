# Sessions — live game state

This folder holds **running session-state files** kept by the Live DM Assistant
(`../tools/dm-assistant.md`) while you actually play. Each file is the **single source of truth** for one
play-through of a one-shot — where the party is, everyone's current HP and resources, NPC dispositions, the
live combat tracker, clocks, the Key, choices made, and a timestamped log — so you can **pause and resume
exactly where you left off**.

## How to run a session

Say **"run the session"** (or *"let's play `<module>`"*). The assistant:

1. **Loads the module** you built with the Session Creator (`../modules/<slug>.md`).
2. **Loads the party** from their character packets (`../characters/*.md`) — so it can set DCs against your
   PCs' real numbers, resolve their actions, and track their HP.
3. **Opens a state file here** (`<slug>-<date>.md`, from [`_TEMPLATE.md`](_TEMPLATE.md)) and runs the game:
   it surfaces each scene's "control panel" (read-aloud, NPCs, DCs, avenues), **conducts combat** turn by
   turn (initiative, monster HP, tactics, conditions, morale), generates NPC dialog on demand, and rolls
   with off-script player ideas — updating the state file the whole way.

See [`../tools/dm-assistant.md`](../tools/dm-assistant.md) for the full runtime workflow.

## Pause & resume

Stop any time — the state file already holds everything. To pick back up, say *"run the session"* again; the
assistant reads the saved state + the module and continues from the **current scene** (rehydrating the
combat tracker if you paused mid-fight). At the end, the **Session log** doubles as a recap.

## Scope

Runs a **2a one-shot** (monsters CR 0–5, where the KB has stat blocks) with a **2b level-1 party**.
Multi-session **campaign continuity** (recurring NPCs, faction clocks, level progression across sessions) is
the planned follow-up — **backlog item 2d** in `../PROGRESS.md`; the state file here is a stepping stone
toward it. CR 6+ monsters and spells L6–9 → look them up in the PDF.
