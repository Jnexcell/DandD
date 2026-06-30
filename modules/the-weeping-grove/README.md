# The Weeping Grove — one-shot (its own folder)

A run-ready **level-3, 5-player, ~3–4 hour** forest mystery-adventure built with the Session Creator
(`../../tools/session-creator.md`) on the MMOS framework. It lives in its own folder so you can **tweak
pieces as you go** and drop **handouts, maps, and clue cards** alongside it.

## Files
- **[`the-weeping-grove.data.js`](the-weeping-grove.data.js)** — **the module — the single source of truth.** All content lives here as one `MODULE` object: `meta`, `statblocks`, `clues`, `crown`, and `scenes[]` (overview → cold open → 4 modular scenes → the Showdown with two versions → endings + hooks). **Edit the adventure here, nowhere else.** The DM screen renders from it and the DM Assistant reads it.
- **[`site/`](site/)** — the **combined DM web app** (run it at the table). Open **[`site/index.html`](site/index.html)** — a thin **tab shell** with two tabs that both render from the data file:
  - **DM Screen** (`site/dm-screen.html`) — full spoilers, stat blocks, the crown puzzle, read-aloud/Player View, Quick Ref, live trackers (clues→Key, clock, party HP, a glance combat tracker + dock). **Run \| Prep** toggle (Run = read-aloud + a tight "what you need now" strip; Prep = the full scroll), and **click a PC / monster / combat row to look it up** (the Inspector drawer).
  - **Combat Cockpit** (`site/combat-cockpit.html`) — offline React combat screen: initiative, HP/damage, death saves, conditions, a dice tray that rolls monster attacks from their stat blocks, flip read-aloud, candle-clock + clue→Key HUD. **The DM Screen's ⚔ Combat pre-loads it** with the scene's enemies + the 5 PCs, and **each PC row expands to its attacks/spells/abilities**.
  - Also here: `site/character-builder.html` (player-facing builder), `site/combat-cockpit.src.jsx` (readable JSX source of the cockpit), and **[`site/README.md`](site/README.md)** (structure + how to iterate). *(Single canonical copy — the old duplicate top-level `the-weeping-grove/` tree was removed.)*
- **[`the-weeping-grove.md`](the-weeping-grove.md)** — a short **stub** (the prose module is retired; it was a duplicate of the data file).
- *(add as you prep: `handouts/`, `map.md`, `mother-sere.md`, etc.)*

## Run it live
Say **"run the session"** (or *"let's play The Weeping Grove"*). The **DM Assistant**
(`../../tools/dm-assistant.md`) loads **`modules/the-weeping-grove/the-weeping-grove.data.js`**, walks the
scenes, conducts combat, and tracks live state in `../../sessions/`. Build the party first with the **Character
Creator** (`../../tools/character-creator.md`) if you haven't. Want to rehearse first? Say **"mock play"**.

## At a glance
- **Quest:** stop whatever is taking travelers on the Briar Road through the Mournwood.
- **The twist (Key):** the "monster" is the grove's wronged **Guardian**; the real villains are the
  **Withering**, a death-cult harvesting heartwood for **Mother Sere's** immortality rite —
  and they seeded the "beast" rumor so heroes would kill the Guardian for them.
- **Two Paths:** the road (fast, tragic) vs. the drag-marks off-trail (slower, the Key, a heroic finish).
- **Difficulty (5×L3):** Easy 375 / Med 750 / Hard 1,125 / **Deadly 2,000**. Fights: Bramble-Pack (8 wolves → Medium),
  Harvesters' Camp (+1 Thug → Hard), the Showdown (Deadly — Version A adds thorn-spawn, Version B adds the Overseer).

## Tweak freely
Everything's editable in place. If you change an encounter, re-check its budget line against
`../../quick-reference/encounter-building.md`. Reflavor notes (Guardian = Shambling Mound, Mother Sere =
Green Hag, Bramble-Wolves = Wolves) change the *fiction only* — the inlined mechanics stay as written.
