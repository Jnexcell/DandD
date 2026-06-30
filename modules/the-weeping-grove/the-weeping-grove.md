# The Weeping Grove — moved

> ⚠️ **This prose module file is retired.** The Weeping Grove's content now lives in **one place**:
> [`the-weeping-grove.data.js`](the-weeping-grove.data.js) — the single source of truth.
>
> It used to be duplicated: the same adventure was hand-maintained both here (prose) **and** inline
> in the DM screen, so edits had to be made twice and the two drifted. That duplication is gone.

## Where everything is now

| You want to… | Go to |
|---|---|
| **Edit the adventure** (scenes, read-aloud, DM notes, checks/DCs, stat blocks, clues, crown, endings) | **[`the-weeping-grove.data.js`](the-weeping-grove.data.js)** — edit the `MODULE` object. This is the only copy. |
| **Read / run it at the table** (full spoilers, trackers, combat, crown puzzle) | the **combined DM tool** — [`site/index.html`](site/index.html): a tabbed shell with the **DM screen** + the **Combat Cockpit** (see [`site/README.md`](site/README.md)). Both render entirely from the data file. |
| **Run or rehearse it with Claude** | say **"run the session"** or **"mock play"** → the DM Assistant (`../../tools/dm-assistant.md`) reads the data file. |

The data file is structured (`meta`, `statblocks`, `clues`, `crown`, `scenes[]`) so the DM Assistant
reads it natively and the DM screen renders it — one copy, two consumers.

*The old prose version remains in git history if you ever want to diff it.*
