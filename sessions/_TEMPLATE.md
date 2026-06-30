<!--
  SESSION STATE TEMPLATE — the running, pause/resume game state the Live DM Assistant keeps (PHASE 2c).
  Created + updated live by tools/dm-assistant.md as a session is played. Replace <...> placeholders.
  ONE source of truth: update the moment anything changes (scene, HP, condition, attitude, the Key, XP).
  On resume, read this + the module and continue from "Current scene".
-->

# Session: <Module Title> — <YYYY-MM-DD>

- **Module:** `../modules/<slug>/<slug>.data.js` (or prose `../modules/<slug>.md`)  ·  **Status:** <in progress / paused / complete>
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
| <Name> | <player> | <n> | <c>/<m> | <n> | <±> | <e.g. L1 slots 1/2 · Rage 0/3> | <none> |
| <Name> | <player> | <n> | <c>/<m> | <n> | <±> | <…> | <…> |

*Full saves/skills/spells live in each PC's sheet `../characters/<name>/<name>.html` (the `CHARACTER` object) — pull as needed.*

---

## 🃏 Party combat card *(built at SETUP from each `CHARACTER` — what each hero does on their turn)*

| PC | Init | AC | Save mods | Attacks (to-hit · dmg · cost) | Spell DC / slots | Signature / key resource |
|---|:--:|:--:|---|---|---|---|
| <Name> | <±> | <n> | <STR ±·DEX ±·CON ±·INT ±·WIS ±·CHA ±> | <Weapon +x, NdM · Action> | <DC n · L1 _/_ , L2 _/_> | <e.g. Rage 0/3 · Reckless Attack> |

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

| Init | Combatant | Side | HP (cur/max) | Conditions / concentration (+ until when) |
|:--:|---|---|:--:|---|
| <n> | <Name> | PC | <c>/<m> | <none — e.g. "raging (2 rds left)" · "concentrating: Faerie Fire"> |
| <n> | <Monster #1> | enemy | <c>/<m> | <e.g. "paralyzed by hold person — re-save Wis DC 11 end of turn"> |
| <n> | <Monster #2> | enemy | <c>/<m> | <none> |

- **Concentration watch:** <who holds what spell — drop it on a failed Con save (DC 10 / half damage) when hit>.
- **Reactions used this round:** <PC/monster — one each per round>.
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
