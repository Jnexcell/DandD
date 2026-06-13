<!--
  SESSION STATE TEMPLATE — the running, pause/resume game state the Live DM Assistant keeps (PHASE 2c).
  Created + updated live by tools/dm-assistant.md as a session is played. Replace <...> placeholders.
  ONE source of truth: update the moment anything changes (scene, HP, condition, attitude, the Key, XP).
  On resume, read this + the module and continue from "Current scene".
-->

# Session: <Module Title> — <YYYY-MM-DD>

- **Module:** [`../modules/<slug>.md`](../modules/<slug>.md)  ·  **Status:** <in progress / paused / complete>
- **Quest (as players heard it):** <…>

---

## ▶ Now *(where we are — read this first on resume)*

- **Current scene:** <Scene N — title>  ·  **Real-time elapsed / clock:** <~Xh / time-pressure status>
- **Trending ending:** <A Adequate (no Key) / B Ballsy (has Key) — undecided>
- **Next likely beat:** <what's set up to happen next>
- **In combat?** <no / YES → see Combat tracker>

---

## 🧑‍🤝‍🧑 Party

| PC | Player | AC | HP (cur/max) | Pass.Perc | Init | Key resources (used/total) | Conditions |
|---|---|:--:|:--:|:--:|:--:|---|---|
| <Name> | <player> | <n> | <c>/<m> | <n> | <±> | <e.g. L1 slots 1/2 · Second Wind 0/1> | <none> |
| <Name> | <player> | <n> | <c>/<m> | <n> | <±> | <…> | <…> |

*Saves/skills live in each PC's packet `../characters/<name>.md` — pull as needed.*

---

## 🗺️ Scene log / module map

*Status: ✅ done · ▶ current · ⬡ skipped (modular, cut) · ○ upcoming.*

| # | Scene | Tag | Status | Outcome (one line) |
|---|---|---|:--:|---|
| 0 | Cold open | ★ | <○> | <…> |
| 1 | <title> | <★/⬡> | <○> | <…> |
| 2 | <title> | <⬡> | <○> | <…> |
| … | <title> | <…> | <○> | <…> |
| ★ | The Showdown | ★ | <○> | <…> |

---

## 🔑 The Key & choices

- **The Key:** <not found / FOUND — where & when>.
- **Major choices made:** <e.g. spared the cultist · sided with the steward>.
- **Ending tracked toward:** <A / B — and why>.

---

## 🎭 NPC dispositions

| NPC | Attitude | Notes (revealed / promised / owed) |
|---|---|---|
| <Name> | <hostile / indifferent / friendly> | <what they told the party; any deal> |

---

## ⚔️ Combat tracker *(active fight only — archive to the Session log when it ends)*

- **Fight:** <which encounter>  ·  **Round:** <n>  ·  **Stage:** <terrain / cover / light / who had surprise>
- **Initiative order:**

| Init | Combatant | Side | HP (cur/max) | Conditions / concentration |
|:--:|---|---|:--:|---|
| <n> | <Name> | PC | <c>/<m> | <none> |
| <n> | <Monster #1> | enemy | <c>/<m> | <none> |
| <n> | <Monster #2> | enemy | <c>/<m> | <none> |

- **Morale watch:** <trigger not yet hit / triggered → result>.

---

## ⏳ Clocks *(ticking threats)*

| Clock | What happens when it fills | Progress |
|---|---|---|
| <e.g. ritual completes> | <consequence> | <◔ / ◑ / ◕ / ● / n of m> |

---

## 💰 Loot & XP ledger

- **Treasure / items found:** <coin, gear, magic items (cite `../dungeon-masters-guide/07-treasure-and-magic-items.md`)>.
- **XP awarded (base):** <running total · per-PC share>.

---

## 📓 Session log *(timestamped — the resume trail + post-session recap)*

- `<HH:MM>` — <what happened>.
- `<HH:MM>` — <…>.
