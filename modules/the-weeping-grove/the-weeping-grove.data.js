/* ============================================================
   THE WEEPING GROVE — module content (SINGLE SOURCE OF TRUTH)
   ------------------------------------------------------------
   This file is the ONE copy of the adventure. Both consumers read it:
     • the offline DM screen (site/index.html) renders from it, and
     • the DM Assistant (tools/dm-assistant.md) reads it to run/rehearse the game.
   Edit the adventure HERE — nowhere else. (The old prose the-weeping-grove.md
   is retired; see that stub.)

   Shape:
     meta          — quick facts the assistant wants up front
     statblocks{}  — clean stat-block data (rendered by the screen, read by the assistant)
     clues[]       — the 5 clues / the Key
     crown[]       — Scene 4 crown-puzzle leaves (+ crownTrayOrder)
     scenes[]      — play order; each: {id,nav,icon,name,play,tag,type,time,subtitle,
                     readAloud:[{label,text}], body} where body is semantic HTML.
                     Stat blocks inside a body appear as  {{SB:wolf}}  or  {{SB:cultist|4}}
                     placeholders (the screen expands them via renderSB()).
   ============================================================ */
(function () {
const MODULE = {
  meta: {
    title: "The Weeping Grove",
    slug: "the-weeping-grove",
    system: "D&D 5e (2014)",
    partySize: 5,
    level: 3,
    lengthHours: "3–4",
    pitch: "Travelers keep vanishing on the old forest road; the village hires you to kill the beast responsible — but the woods are mourning, not hunting, and the real predator walks on two legs.",
    keyLogic: "The Key = the truth that the 'monster' is the grove's wronged Guardian (Sorrowroot) and the real villains are the Withering death-cult. Obtained from Clue 3 (a heart-sap crate at the camp) OR Clue 4 (Fenn's testimony/journal). Having it flips trending Ending A->B and unlocks Showdown Version B.",
    clock: "The Great Harvest completes at dusk on the third day (an invisible clock; dawdling advances the Showdown into the rite's final moments).",
    endings: "No Key -> Version A / Ending A (fight the grieving Guardian). Key -> Version B / Ending B (turn the Guardian on the cult, stop Mother Sere).",
    statblockNote: "All 7 stat blocks (CR 0-5) are inlined in `statblocks`. CR 6+ / spells L6-9 -> MM PDF."
  },
  statblocks: {
  wolf:{
    name:"Wolf", sil:"beast", rf:"reflavor: Bramble-Wolf — Scene 1", cr:"1/4", xp:50, src:"MM p.341",
    usage:"Scene 1 · Showdown is unrelated", ac:"13 (natural armor)", hp:"11 (2d8 + 2)", maxhp:11, speed:"40 ft.",
    ab:{STR:["12","+1"],DEX:["15","+2"],CON:["12","+1"],INT:["3","−4"],WIS:["12","+1"],CHA:["6","−2"]},
    skills:"Perception +3, Stealth +4", senses:"passive Perception 13", langs:"—",
    traits:[
      {n:"Keen Hearing and Smell",t:"Advantage on Wisdom (Perception) checks relying on hearing or smell."},
      {n:"Pack Tactics",t:"Advantage on an attack roll if at least one ally is within 5 ft. of the target and not incapacitated."}
    ],
    actions:[
      {n:"Bite",t:"<i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one target. <i>Hit:</i> 7 (2d4 + 2) piercing. If the target is a creature, <b>DC 11 Strength save</b> or be knocked prone."}
    ]
  },
  cultist:{
    name:"Cultist", sil:"humanoid", rf:"Scenes 3 & Showdown B", cr:"1/8", xp:25, src:"MM p.345",
    usage:"Scene 3 · Showdown B", ac:"12 (leather armor)", hp:"9 (2d8)", maxhp:9, speed:"30 ft.",
    ab:{STR:["11","+0"],DEX:["12","+1"],CON:["10","+0"],INT:["10","+0"],WIS:["11","+0"],CHA:["10","+0"]},
    skills:"Deception +2, Religion +2", senses:"passive Perception 10", langs:"any one (usually Common)",
    traits:[{n:"Dark Devotion",t:"Advantage on saving throws against being charmed or frightened."}],
    actions:[{n:"Scimitar",t:"<i>Melee Weapon Attack:</i> +3 to hit, reach 5 ft., one creature. <i>Hit:</i> 4 (1d6 + 1) slashing."}]
  },
  fanatic:{
    name:"Cult Fanatic", sil:"humanoid", rf:"reflavor: Harvest Overseer — Scene 3; optional Showdown B lieutenant", cr:"2", xp:450, src:"MM p.345",
    usage:"Scene 3 · Showdown B (optional)", ac:"13 (leather armor)", hp:"33 (6d8 + 6)", maxhp:33, speed:"30 ft.",
    ab:{STR:["11","+0"],DEX:["14","+2"],CON:["12","+1"],INT:["10","+0"],WIS:["13","+1"],CHA:["14","+2"]},
    skills:"Deception +4, Persuasion +4, Religion +2", senses:"passive Perception 11", langs:"any one (usually Common)",
    traits:[
      {n:"Dark Devotion",t:"Advantage on saving throws against being charmed or frightened."},
      {n:"Spellcasting",t:"4th-level spellcaster (Wis, <b>save DC 11</b>, +3 to hit). Cantrips: <i>light, sacred flame, thaumaturgy</i>; 1st (4 slots): <i>command, inflict wounds, shield of faith</i>; 2nd (3 slots): <i>hold person, spiritual weapon</i>."}
    ],
    actions:[
      {n:"Multiattack",t:"The fanatic makes two melee attacks."},
      {n:"Dagger",t:"<i>Melee or Ranged Weapon Attack:</i> +4 to hit, reach 5 ft. or range 20/60 ft., one creature. <i>Hit:</i> 4 (1d4 + 2) piercing."}
    ]
  },
  thug:{
    name:"Thug", sil:"humanoid", rf:"optional hired poacher-muscle — Scene 3", cr:"1/2", xp:100, src:"MM p.350",
    usage:"Scene 3 (optional)", ac:"11 (leather armor)", hp:"32 (5d8 + 10)", maxhp:32, speed:"30 ft.",
    ab:{STR:["15","+2"],DEX:["11","+0"],CON:["14","+2"],INT:["10","+0"],WIS:["10","+0"],CHA:["11","+0"]},
    skills:"Intimidation +2", senses:"passive Perception 10", langs:"any one (usually Common)",
    traits:[{n:"Pack Tactics",t:"Advantage on an attack roll if an ally is within 5 ft. of the target and not incapacitated."}],
    actions:[
      {n:"Multiattack",t:"The thug makes two melee attacks."},
      {n:"Mace",t:"<i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one creature. <i>Hit:</i> 5 (1d6 + 2) bludgeoning."},
      {n:"Heavy Crossbow",t:"<i>Ranged Weapon Attack:</i> +2 to hit, range 100/400 ft., one target. <i>Hit:</i> 5 (1d10) piercing."}
    ]
  },
  twig:{
    name:"Twig Blight", sil:"plant", rf:"reflavor: Thorn-Spawn — Showdown A", cr:"1/8", xp:25, src:"MM p.32",
    usage:"Showdown A (minions)", ac:"13 (natural armor)", hp:"4 (1d6 + 1)", maxhp:4, speed:"20 ft.",
    ab:{STR:["6","−2"],DEX:["13","+1"],CON:["12","+1"],INT:["4","−3"],WIS:["8","−1"],CHA:["3","−4"]},
    skills:"Stealth +3", vuln:"fire", condimm:"blinded, deafened",
    senses:"blindsight 60 ft. (blind beyond), passive Perception 9", langs:"understands Common but can't speak",
    traits:[{n:"False Appearance",t:"While motionless, indistinguishable from a dead shrub."}],
    actions:[{n:"Claws",t:"<i>Melee Weapon Attack:</i> +3 to hit, reach 5 ft., one target. <i>Hit:</i> 3 (1d4 + 1) piercing."}]
  },
  hag:{
    name:"Green Hag", sil:"fey", rf:"reflavor: Mother Sere, the withered prophet — Showdown B", cr:"3", xp:700, src:"MM p.177",
    usage:"Showdown B (boss)", ac:"17 (natural armor)", hp:"82 (11d8 + 33)", maxhp:82, speed:"30 ft.",
    ab:{STR:["18","+4"],DEX:["12","+1"],CON:["16","+3"],INT:["13","+1"],WIS:["14","+2"],CHA:["14","+2"]},
    skills:"Arcana +3, Deception +4, Perception +4, Stealth +3", senses:"darkvision 60 ft., passive Perception 14", langs:"Common, Draconic, Sylvan",
    traits:[
      {n:"Amphibious",t:"Can breathe air and water."},
      {n:"Innate Spellcasting",t:"Cha (save DC 12), no material components. At will: <i>dancing lights, minor illusion, vicious mockery</i>."},
      {n:"Mimicry",t:"Mimics animal sounds and humanoid voices. A listener can tell they are imitations with a successful DC 14 Wisdom (Insight) check."}
    ],
    actions:[
      {n:"Claws",t:"<i>Melee Weapon Attack:</i> +6 to hit, reach 5 ft., one target. <i>Hit:</i> 13 (2d8 + 4) slashing."},
      {n:"Illusory Appearance",t:"Covers herself and anything she wears/carries with a magical illusion making her look like another ugly creature of her general size (DC 20 Investigation to discern by physical inspection)."},
      {n:"Invisible Passage",t:"Magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible she leaves no physical evidence of passage."}
    ]
  },
  mound:{
    name:"Shambling Mound", sil:"plant", rf:"reflavor: the Guardian — “Sorrowroot,” the grieving treant-spirit — Showdown", cr:"5", xp:1800, src:"MM p.270",
    usage:"Showdown — BOSS in A · ALLY in B", ac:"15 (natural armor)", hp:"136 (16d10 + 48)", maxhp:136, speed:"20 ft., swim 20 ft.",
    ab:{STR:["18","+4"],DEX:["8","−1"],CON:["16","+3"],INT:["5","−3"],WIS:["10","+0"],CHA:["5","−3"]},
    skills:"Stealth +2", resist:"cold, fire", imm:"lightning", condimm:"blinded, deafened, exhaustion",
    senses:"blindsight 60 ft. (blind beyond), passive Perception 10",
    langs:"— (narratively, it speaks the old tongue of the wood — see Showdown read-aloud)",
    traits:[{n:"Lightning Absorption",t:"Whenever it is subjected to lightning damage, it takes no damage and instead <b>regains a number of hit points equal to the lightning damage dealt</b>."}],
    actions:[
      {n:"Multiattack",t:"Two <b>Slams</b>. If both hit a Medium-or-smaller target, the target is <b>grappled (escape DC 14)</b> and the mound uses <b>Engulf</b> on it."},
      {n:"Slam",t:"<i>Melee Weapon Attack:</i> +7 to hit, reach 5 ft., one target. <i>Hit:</i> 13 (2d8 + 4) bludgeoning."},
      {n:"Engulf",t:"The mound engulfs a Medium-or-smaller creature grappled by it. The engulfed target is <b>blinded, restrained, and unable to breathe</b>, and must make a <b>DC 14 Con save</b> at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. It moves with the mound; only one creature at a time."}
    ]
  }
  },
  clues: [
  {n:1, t:"Victims all <b>harmed the wood</b> (cut / hunted / hauled).", where:"Cold Open (cart) · Greywater records"},
  {n:2, t:"<b>No beast</b> — roots, sap, thorns, abandoned axes.", where:"Cold Open · Scene 1"},
  {n:3, t:"Heart-sap crates + the <b>withered-crown brand</b> (proof).", where:"Scene 3 (camp)"},
  {n:4, t:"<b>Fenn's testimony / journal</b> — the cult, Mother Sere, the rite.", where:"Scene 2 (Fenn)"},
  {n:5, t:"The <b>Guardian pleads</b> + the vision (fail-safe).", where:"Showdown"}
  ],
  crown: [
  {id:"green",   g:"🌿", r:"ᚇ", t:"Dair · Oak",        n:"The Living Crown",  desc:"Oak (Dair) — the heart, the crown. The wood green and whole."},
  {id:"gift",    g:"🍞", r:"ᚉ", t:"Coll · Hazel",      n:"The Keepers' Gift", desc:"Hazel (Coll) — wisdom. Robed wardens leave bread at its roots."},
  {id:"axes",    g:"🪓", r:"ᚎ", t:"Straif · Blackthorn", n:"The Axe-Bearers",  desc:"Blackthorn (Straif) — thorns, the wood's own hand. Takers are dragged into the earth."},
  {id:"theft",   g:"👑", r:"ᚔ", t:"Iodhadh · Yew",     n:"The Stolen Crown",  desc:"Yew (Iodhadh) — death & the undying. Grey-robes cut the crown away, branded and withered.", key:true},
  {id:"weeping", g:"💧", r:"ᚄ", t:"Saille · Willow",   n:"The Weeping",       desc:"Willow (Saille) — grief. The tree alone, crown broken and fallen, weeping sap."}
  ],
  crownTrayOrder: ["axes","weeping","green","theft","gift"],
  scenes: [
    { id:"overview", nav:"Overview", icon:"📋", name:"Overview", play:false, body:`
<p class="subtitle">“Travelers keep vanishing on the old forest road; the village hires you to kill the beast responsible — but the woods are <i>mourning</i>, not hunting, and the real predator walks on two legs.”</p>
<div class="zone">
  <h4>📜 At a glance</h4>
  <dl class="kv">
    <dt>Quest (told up front)</dt><dd>Find what's taking travelers on the <b>Briar Road</b> through the <b>Mournwood</b>, and stop it — make the road safe again.</dd>
    <dt>Party</dt><dd>5 PCs · level 3</dd>
    <dt>Length</dt><dd>~3–4 hours (4 scenes + showdown)</dd>
    <dt>Tone</dt><dd>Mystery + heroic adventure (a tragic twist underneath)</dd>
    <dt>Setting</dt><dd>The Mournwood — wilderness forest road (the “Briar Road”)</dd>
    <dt>Party XP budget</dt><dd>Easy 375 / Medium 750 / Hard 1,125 / <b>Deadly 2,000</b> · Adventuring-day ≈ 6,000</dd>
  </dl>
</div>
<div class="callout"><b>⚠ Content & safety.</b> A grieving, wronged guardian; a death-cult harvesting a sacred grove; an undeath/immortality rite. No on-screen cruelty to children or animals. Run an <b>X-card / lines &amp; veils</b> check at session zero.</div>
<div class="zone secret">
  <h4><span class="dm-tag">THE KEY</span> The twist</h4>
  <p>The “monster” is the grove's wronged <b>Guardian</b> (<b>Sorrowroot</b>), taking only those who desecrated it. The true villains are the <b>Withering</b>, a death-cult felling the grove to distill <b>heart-sap</b> for <b>Mother Sere's</b> immortality rite — and they <i>seeded the “beast” rumor</i> so heroes would kill the Guardian for them. <i>Proof: Fenn's testimony + a crate of heart-sap.</i></p>
</div>
<div class="zone">
  <h4>🧭 The two paths</h4>
  <dl class="kv">
    <dt>Path of Least Resistance</dt><dd>Stay on the road → reach the grove where the “beast” lairs → confront it. Fewer truths, a tragic boss. <span class="pill">→ Ending A</span></dd>
    <dt>Path Least Traveled On</dt><dd>Follow the drag-marks off-trail → <b>Fenn's Hollow</b> &amp; the <b>Harvesters' Camp</b> → learn the truth (the Key). A heroic finish. <span class="pill">→ Ending B</span></dd>
  </dl>
  <p><b>Choosing the detour over the direct route is the meaningful choice.</b> Both paths funnel through Scene 4 to the grove.</p>
</div>
<div class="zone">
  <h4>🗺️ Map of play</h4>
  <p><b>Road:</b> Cold Open → <b>S1 Bramble-Pack</b> → <b>S4 Warded Grove</b> → <b>Showdown</b> <i>(no Key → Guardian fight → Ending A)</i>.</p>
  <p><b>Off-trail:</b> Cold Open → <b>S2 Fenn</b> and/or <b>S3 Camp</b> → <i>Key + proof</i> → <b>S4 Warded Grove</b> → <b>Showdown</b> <i>(with Key → cult fight + Guardian ally → Ending B)</i>.</p>
</div>
<div class="zone">
  <h4>⏱️ How to run this</h4>
  <ul>
    <li><b>Clock:</b> the cult finishes the <b>Great Harvest at dusk on the third day</b> — an invisible clock. Dawdle and the rite nears completion; if fast, the Showdown is a fight to <i>stop</i> it; if slow, a fight <i>during</i> its final moments. (Track it in the Tools rail.)</li>
    <li><b>Tags:</b> <span class="badge core">★ CORE</span> scenes always run (Cold Open + Showdown); <span class="badge modular">⬡ MODULAR</span> scenes are skippable — each has a <b>Bypass</b>.</li>
    <li><b>Cut-list (in order):</b> Scene 4 (→ one Nature check) → Scene 1 → Scene 3. <b>Never cut the Showdown.</b> Cutting <b>Scene 2 (Fenn)</b> removes the clearest route to the Key — only do it for a party racing straight up the road (Ending A's path).</li>
    <li><b>Seed the truth (three-clue rule):</b> clues 1–2 on the direct path, 3–4 on the side path, and the <b>Guardian pleads</b> at the Showdown (clue 5) so even a kill-first party gets one last chance to flip.</li>
  </ul>
</div>`
    },

/* ---------- COLD OPEN ---------- */
    { id:"cold-open", nav:"Cold Open", icon:"🎬", name:"Cold Open", play:true, tag:"CORE", type:"framing", time:"~10 min (or ~20 with the village)",
  readAloud:[
    {label:"🎬 Cold Open — the scene at a glance (your eyes only)", text:`<p style="opacity:.7"><i>Not read aloud — your orientation before you start.</i></p>
      <p><b>Two jobs:</b> hand the party the <b>quest</b> (find what's taking people on the Briar Road — stop it), and set up the <b>choice</b> — the <b>road</b> (the obvious hunt → Scene 1) vs. the <b>drag-marks</b> off-trail (the truth → Fenn &amp; the camp).</p>
      <p><b>Mood:</b> a failing river-village and a too-quiet wood — green light, no birdsong, sweet rot under everything.</p>
      <p><b>How to open:</b> in <b>Greywater</b> (meet the quest-givers; best for new players) or <b>cold on the road</b> at the wrecked cart (faster). Either way you end at <b>the fork</b>, where they pick a direction — that's your cue to move on.</p>`},
    {label:"🎲 Rules of the Table — say it (~3 min)", text:`<p>“Quick table stuff before we start:</p>
      <ol>
        <li><b>One night, one story.</b> A self-contained adventure with a single goal — find what's taking people on the road, and stop it. We'll reach a real ending tonight.</li>
        <li><b>I'll keep things moving.</b> Describe something clever and it'll usually just <b>work</b>. When something's unclear I'll make a quick call so we can play on.</li>
        <li><b>One voice at a time — and everyone gets a moment.</b> Watch out for each other's spotlight. I'll be rolling [in the open / behind the screen] tonight.</li>
        <li><b>Safety first.</b> If anything gets uncomfortable, say <b>‘X’</b> or tap the table and we move past it — no explanation needed. Fair warning: this one gets dark (grief, a death-cult, an old guardian pushed past breaking). Anything you'd rather keep off the table?</li>
        <li><b>Tone.</b> Mystery and heroics with a sad streak — a haunted forest, not a dungeon crawl.</li>
        <li><b>Inspiration — I reward you for playing your character.</b> Lean hard into who your hero is — the brave, the funny, the truly <i>in-character</i> choice, especially when it costs you something — and I'll hand you <b>Inspiration</b>. Spend it any time to <b>reroll a die you just rolled</b> (an attack, a save, a check) and take the better of the two. Hold one at a time, so use it and earn it again. Fastest way to earn it: play to the <b>personality on your sheet</b> — your trait, ideal, bond, and flaw — and stay <b>curious</b>.</li>
      </ol>`},
    {label:"🧭 How to Play — for anyone new (say it; point at a sheet as you go)", text:`<p>“Never done this? The whole game is a conversation, and your sheet does most of the remembering for you.</p>
      <p><b>The loop.</b> I describe what's around you → you tell me what your character <i>does</i> → if the outcome's in doubt, you roll a 20-sided die and add a number from your sheet → I tell you what happens. That's the whole game, over and over.</p>
      <p><b>You can try anything.</b> Your sheet is a <i>toolbox, not a menu</i> — if you can describe it (climb, sneak, search, bluff, swing), you can attempt it.</p>
      <p><b>Where the numbers live on your sheet:</b></p>
      <ul>
        <li><b>Top of the page:</b> your <b>AC</b> (how hard you are to hit), <b>HP</b> (how much you can take before you drop), <b>Initiative</b> (turn-order number), and <b>Speed</b>.</li>
        <li><b>Ability Scores</b> — six big numbers; the smaller number <i>under</i> each is your <b>modifier</b>, the thing you actually add to a roll. The gold-edged ones are your trained <b>saves</b>.</li>
        <li><b>Skills</b> — roll one when I ask (a <b>Perception</b> check to notice something, <b>Persuasion</b> to win someone over).</li>
        <li><b>Attacks</b> — each shows a <b>‘to hit’</b> number and a <b>damage</b> die.</li>
        <li><b>🔮 Spellcasting</b> (if you cast): <b>cantrips are free and unlimited</b>; <b>leveled spells cost a slot</b> — you only get a few, so spend them well; your <b>Spell Save DC</b> is the number enemies roll against when your spell hits them.</li>
        <li><b>⚡ On Your Turn</b> — a box that lists everything you can do, sorted into <b>Action / Bonus action / Reaction</b>. When you freeze up, read it.</li>
      </ul>
      <p><b>Resting &amp; your resources.</b> Spell slots, Rage, and most once-per-rest abilities come back when you <b>rest</b> — and tonight you'll get <b>one short rest</b> and <b>one long rest</b>. A <b>short rest</b> is a breather (spend Hit Dice to heal; some abilities recharge); a <b>long rest</b> brings you all the way back — full HP and all spell slots. So don't hoard your big spells and signature moves — spend them, you'll get them back. I'll tell you when there's a safe moment to rest.</p>
      <p><b>What I do with your rolls</b> — you roll and tell me the total; I'm holding the secret target number, so you never need to know it:</p>
      <ul>
        <li><b>Attacking?</b> Roll d20 + your ‘to hit’; if it beats their armor, roll <b>damage</b>.</li>
        <li><b>Something hits you, or a spell catches you?</b> I'll call a <b>save</b> (“Dexterity save!”) — you roll d20 + that save.</li>
        <li><b>You cast a spell that forces a save?</b> <i>They</i> roll against your <b>Spell Save DC</b> — just tell me the DC.</li>
        <li><b>Natural 20</b> = the best version of what you tried; <b>natural 1</b> = the worst.</li>
      </ul>
      <p><b>In a fight, keep your turn simple:</b> move a little, do <b>one</b> main thing (swing / cast / shove / Help a friend), done. I'll coach you the first couple of rounds.”</p>`},
    {label:"🔍 Be curious — the habit that wins the night (say it, and mean it)", text:`<p>“Most important thing I'll tell you all night: <b>be curious</b>. This is a mystery wearing a monster's mask, and it rewards the players who poke at the world.</p>
      <ul>
        <li><b>Ask questions.</b> ‘What do I smell? What's <i>wrong</i> here? Have I seen this before?’ — I'll almost always tell you something real.</li>
        <li><b>Look closer.</b> Search the cart, read the tracks, pick the thing up, examine the body. The clues are out there waiting to be found.</li>
        <li><b>Talk to everyone.</b> The grieving brother, the strange pilgrim, the old woman in the woods — each holds a piece of the truth.</li>
        <li><b>Question the obvious.</b> You were <i>hired</i> to kill a beast — that doesn't make the story you were told the <i>true</i> one. The party that stops to ask ‘wait — why?’ earns the real ending.</li>
      </ul>
      <p>Curiosity is never punished at this table — and the curious, in-character moments are exactly how you earn <b>Inspiration</b> to reroll a bad die. When in doubt: <b>look closer, or ask</b>.</p>
      <p>Sound good? Then tell me who your character is in a sentence — and we'll begin.”</p>`},
    {label:"📖 Arriving in Greywater — the village (optional opening; skip to the road if you open cold)", text:`The Briar Road spills out of the trees, turns to mud, and there at the river's edge crouches <b>Greywater</b> — a double handful of timber houses, a mill with its wheel gone still, one muddy square. The kind of place that lives or dies by the road; right now the road is killing it. The market should be loud with the day's last trade — instead half the stalls are shuttered, and the folk minding the rest keep glancing at the treeline. A mother pulls her child indoors as you pass. The air is woodsmoke, river-rot, and wet wool.<br><br>Word of your coming has run ahead of you. By the time you reach the meeting-hall, two people are already waiting on its step — a lean, grey-templed woman with a reeve's iron chain and her arms crossed, and beside her a man a head taller and twice as broad, turning a wool cap over and over in raw, red-rimmed hands.<br><br>“You're the ones come about the road,” the woman says — not a question. “Good. Ask what you need. Then make it safe.”`},
    {label:"📖 Reeve Maelis Carrow — the quest (practical · weary · blunt · counts coin on her fingers)", text:`<i>She ran caravans up and down this road for thirty years, until she'd buried enough drivers to hang up the whip for a reeve's chain no one else would take. She doesn't waste words, and she doesn't waste hope.</i><br>“Here's the whole of it. Folk who go up the Briar Road stop coming back. No bodies. No bandits, no ransom — they walk into the Mournwood and the wood just… <i>keeps</i> them. The trade's dying with them, and when the trade dies, so does Greywater.” She turns up a worn purse. “There's <b>a hundred and fifty gold</b> in here, and trail supplies besides — scraped from a coffer that's mostly cobwebs. Find what's taking my people. Put it down. Make my road safe. I know the <i>what</i>. Don't ask me the <i>why</i> — that's what I'm paying you for.”`},
    {label:"📖 Tomas the Cooper — Clue 1, the lead (grieving · desperate · hopeful · can't finish a sentence about her)", text:`<i>The big man waits until the reeve is done, then steps in close and drops his voice, as if the news might break if he says it too loud. His hands never stop working the cap.</i><br>“You'll be going up the road, then. My sister — <b>Wren</b>. I raised her myself, after our ma passed; she's barely twenty.” His jaw works. “Six days gone now. She only went up for ash staves — for the cooperage, for <i>me</i> — and she'd no quarrel with a living soul, you understand? She isn't the sort that anything would <i>want</i> to…” He can't land it. “She only went to <b>cut a few staves</b>. If you find her — if there's <i>any</i> chance — please.”<br><span style="opacity:.65">(DM: Wren went in to <i>take</i> from the wood, so she's almost certainly one the <b>Guardian</b> took, not the cult — <b>Ending B can bring her home; Ending A leaves her bones</b>. Play the grief, not the clue — he has no idea he's giving you anything.)</span>`},
    {label:"📖 Brother Aldous — the misdirection (mild · pious · helpful · DM-ONLY: the cult's plant)", text:`<i>A soft-spoken pilgrim in road-worn grey drifts over as you talk — sandals, a wooden holy symbol, a kindly crinkle at the eyes. He sets a blessing-hand on a shoulder; up close, his robes smell of sap, and something sweetly rotten underneath.</i><br>“Forgive the intrusion — a grievous business, this. I've prayed over it more nights than I can count.” A sorrowful smile. “My counsel, for what it's worth? Put the poor <b>beast</b> down swiftly, and be gone. And don't go <i>disturbing</i> the deep wood — some old graves are best left shut. Oh —” as though it's an afterthought “— and pay no mind to <b>mad old Fenn</b>, out past the fork. A sad creature. She'll only fill your heads with forest-spook and slow good blades like yours.”<br><span style="opacity:.65">(DM: his <b>tell</b> is steering them <i>off</i> Fenn — a sharp party hears “go straight to her.” Plant it, don't oversell it. Clocking him is an early thread, not proof on its own.)</span>`},
    {label:"📖 On the road — the vanishing site (open here if you skip the village)", text:`The Briar Road narrows and the Mournwood closes over it like a tongue drawn into a dark mouth. The last of the afternoon comes down green and thin through the canopy — and somewhere back along the way, you realize, the birds stopped. No insects. No wind. Just your own footsteps and the creak of leather. An overturned handcart lies half off the road, one wheel still turning, slow and lazy, as if it gave up only moments ago. There's no blood — no struggle you can name — only a deep, sweet smell of cut sap and wet earth, and a single iron hatchet sunk to the haft in the dirt, its owner nowhere.<br><span style="opacity:.65">(DM: the cold-open image — let it sit, then turn them loose. The cart hides a lead; the load and the ground each reward a closer look. The fork comes after.)</span>`},
    {label:"📖 Search the cart — the oak figure → the lead to Fenn (auto, no roll)", text:`Under the bench, wedged where a hand could find it in the dark: a <b>small oak figure</b>, knife-whittled and rubbed smooth by a worried thumb — a tiny tree with a face. With it, a scrap of birch-bark scratched in charcoal: <i>“staves cut — then trade w/ old <b>Fenn</b>, the herb-wife past the fork. She knows the safe ways in, and what the wood won't suffer touched.”</i> The drag-marks bend off the road the <b>same way the note points.</b><br><span style="opacity:.65">(DM: free, the moment anyone checks the bench — the nudge toward the detour: a <i>named person the victims trusted</i>, not a random trail. Returning the figure to Fenn later earns goodwill — advantage on her trust check.)</span>`},
    {label:"📖 Read the cart — the victim pattern (Clue 1 · Insight/Investigation DC 12, on a hit)", text:`“It's a woodcutter's load — fresh ash staves, bundled snares, a billhook. You think back on the reeve's list of the lost: a trapper, two cutters, a charcoal-burner. Every one of them came into this wood to <b>take</b> something from it.”<br><span style="opacity:.65">(DM: miss? Hand it over later anyway — don't gate the truth.)</span>`},
    {label:"📖 Read the ground — no beast (Clue 2 · Survival/Nature DC 13, on a hit)", text:`“You crouch over the sign. No blood. No tracks of any beast you can name, no drag of a kill. Instead the earth is <b>churned</b> — root-scars gouged deep, thorn-scratches raked across the cart, a slick of sweet sap gone tacky. Whatever took the driver didn't hunt them. It pulled them <b>down</b> — roots and all.”<br><span style="opacity:.65">(DM: the seed the whole mystery grows from.)</span>`},
    {label:"📖 The fork — the choice that launches the night (read once they've worked the site)", text:`Where the cart lies, the road forks. The worn ruts bend on through the trees — the obvious way, the way a hunt would go. But a fainter trail peels off to the left, the ferns crushed flat in a wide swath, as if something heavy were <i>dragged</i> into the deep wood. And far off — deeper in than either path seems to reach — two things catch the failing light: a thin thread of <b>smoke</b> rising from somewhere off the trail, and beyond it, a <b>hollow that glows faintly green</b>, as though the wood itself were holding a candle. Both lie somewhere down the road ahead. So — which way?<br><span style="opacity:.65">(DM: the launch point. <b>Road</b> → Scene 1, Bramble-Pack. <b>Drag-marks</b> → Scene 2, Fenn. The moment they pick, the Cold Open is over — jump to that scene.)</span>`}
  ],
  body:`
<div class="zone dm-only">
  <h4>🏘️ Opening in Greywater <span class="badge modular">⬡ MODULAR · recommended for new players</span></h4>
  <p>Lets players meet the quest-givers, ask questions, pick up first threads. Short on time? Skip it — the quest was given above the table — and open on the road.</p>
  <div class="ra reveal"><span class="ra-label">Read aloud — the village</span>(Full read-aloud is on the read face — 📖 <i>Arriving in Greywater</i>, then the reeve, Tomas &amp; Aldous.) In short: a dying river-village; the reeve and the grieving cooper wait on the meeting-hall step.</div>
</div>

<div class="npc dm-only">
  <h5>Reeve Maelis Carrow <span class="pill">quest-giver</span></h5>
  <div class="wvt"><span><b>Want:</b> the Briar Road safe, trade moving</span><span><b>Voice:</b> practical, weary, blunt</span><span><b>Tell:</b> counts coin on her fingers as she talks</span></div>
  <p>Former caravan-master who quit the roads, settled in Greywater, then took the reeve's chain because no one else would. Scrapes the <b>bounty (150 gp + trail supplies)</b> from a near-empty coffer. Knows the <i>what</i>, never the <i>why</i>.</p>
</div>
<div class="npc dm-only">
  <h5>Tomas the Cooper <span class="pill">Clue 1</span></h5>
  <div class="wvt"><span><b>Want:</b> his sister Wren back</span><span><b>Voice:</b> grieving, desperate, hopeful</span><span><b>Tell:</b> can't finish a sentence about her</span></div>
  <p>Raised his younger sister <b>Wren</b> himself. Six days ago she went up the Briar Road for staves and never came home. <i>Unknowingly gives Clue 1:</i> “She only went in to cut staves — she'd no quarrel with a soul…”</p>
  <div class="callout"><b>🔗 Payoff:</b> Wren <i>took</i> from the wood, so she's almost certainly one the <b>Guardian</b> took, not the cult. The grove holds the recently-taken in root and soil: <b>Ending B</b> can send <b>Wren home</b>; <b>Ending A</b> leaves her among the lost.</div>
</div>
<div class="npc dm-only" style="border-left-color:var(--danger)">
  <h5>Brother Aldous <span class="dm-tag">DM-ONLY: CULT PLANT</span></h5>
  <div class="wvt"><span><b>Want:</b> keep Greywater believing in “the beast”</span><span><b>Voice:</b> mild, pious, helpful</span><span><b>Tell:</b> his blessings smell faintly of sap and rot</span></div>
  <p>A scout for <b>the Withering</b>, steering hired blades into killing the Guardian so the Harvest finishes unopposed. <i>Urges:</i> “Put the poor beast down quickly, and don't go disturbing the deep wood — some graves are best left shut. And pay no mind to <b>mad old Fenn</b> out past the fork; she'll only fill your heads with forest-spook and slow your blades.” Steering them <i>away</i> from Fenn is the tell — a sharp party hears “go straight to her.” Clocking him is an <i>early</i> thread to the truth — not proof on its own.</p>
</div>

<div class="zone dm-only">
  <h4>🍺 Word around Greywater — rumors (pick what fits, or roll d6)</h4>
  <p style="font-size:.85rem;color:var(--muted)">Each line is what a villager <b>says</b>; the italic column is for your eyes only.</p>
  <table class="tbl">
    <tr><th>d6</th><th>A villager says…</th><th>(DM only — what it points to)</th></tr>
    <tr><td>1</td><td>“Only folk who went in to <b>cut or hunt</b> have gone missing — never a pilgrim, never a child.”</td><td class="dmonly">Clue 1 — true: the wood takes only those who harm it.</td></tr>
    <tr><td>2</td><td>“It's a <b>great beast</b> — a thorn-wolf big as a horse, they say.”</td><td class="dmonly">The cover story — half-true: bramble-wolves (S1) are real, not the cause.</td></tr>
    <tr><td>3</td><td>“Old <b>Fenn</b> still keeps her hut past the fork. Daft as a coot, but she knows that wood.”</td><td class="dmonly">→ Scene 2: Fenn is the clearest route to the Key.</td></tr>
    <tr><td>4</td><td>“<b>Grey-robed strangers</b> bought the old logging rights — cart <i>something</i> out at night.”</td><td class="dmonly">True: the Withering's harvest crew (Scene 3).</td></tr>
    <tr><td>5</td><td>“Folk used to leave <b>bread at the standing stones</b> each spring. Kept the wood kind.”</td><td class="dmonly">Lore — the grove and its Guardian.</td></tr>
    <tr><td>6</td><td>“The <b>cutting's been worse this year</b> than ever. The wood feels… <i>angry</i>.”</td><td class="dmonly">Thematic — true.</td></tr>
  </table>
</div>

<div class="zone dm-only">
  <h4>🌲 Investigate the cart — launch the Two Paths</h4>
  <p>Let them investigate, then choose: <b>follow the road</b> (→ Scene 1) or <b>follow the drag-marks</b> off-trail (→ Scene 2/3).</p>

  <div class="callout"><b>🪝 The pull off the road — point them at Fenn (so the detour isn't a coin-flip).</b> The road is the <i>obvious</i> hunt; left to themselves players take it. Plant a concrete, <b>personal</b> reason to turn aside instead — found free on the cart, no roll, the moment anyone looks in the bench:
    <div class="ra reveal" style="margin-top:.4rem"><span class="ra-label">Read — what's tucked in the cart (auto, the hook to Scene 2)</span>Under the bench, wedged where a hand could find it in the dark: a <b>small oak figure</b>, knife-whittled and rubbed smooth by a worried thumb — a tiny tree with a face. With it, a scrap of birch-bark scratched in charcoal: <i>“staves cut — then trade w/ old <b>Fenn</b>, the herb-wife past the fork. She knows the safe ways in, and what the wood won't suffer touched.”</i> The drag-marks bend off the road the <i>same</i> way the note points.</div>
    <p style="margin:.4rem 0 0">Now the side-trail isn't “a faint trail, who knows” — it's <b>a named person the victims trusted, who knows this wood, the way the bodies went.</b> Three pulls reinforce it: the figure is a <i>victim's</i> keepsake (matches the line of carvings in Fenn's hut — returning it warms her, +on the trust check); <b>rumor d6=3</b> already names Fenn; and <b>Brother Aldous</b> (the cult plant) goes out of his way to wave them <i>off</i> her — which a sharp party reads as a signpost. <i>(If they pocket the figure and march up the road anyway, that's a real choice → Ending A; but most tables will want to find the woman who “knows the safe ways in.”)</i></p>
  </div>

  <div class="check">
    <div class="ck-head"><span class="ck-name">Clue 1 — the victim pattern</span> <span class="dc">DC 12</span> <span class="pill">Wis (Insight) / Int (Investigation)</span></div>
    <div class="hit"><b>On a hit, read:</b> <span class="q">“It's a woodcutter's load — fresh ash staves, bundled snares, a billhook. You think back on the reeve's list of the lost: a trapper, two cutters, a charcoal-burner. Every one of them came into this wood to <b>take</b> something from it.”</span></div>
    <div class="miss"><b>On a miss:</b> <span class="q">“It's a hauler's cart, nothing stranger — though the more you look, the more the load nags at you.”</span> (Try another angle, or it resurfaces later.) Or just hand it over from the cargo.</div>
  </div>
  <div class="check">
    <div class="ck-head"><span class="ck-name">Clue 2 — no beast</span> <span class="dc">DC 13</span> <span class="pill">Wis (Survival) / Int (Nature)</span></div>
    <div class="hit"><b>On a hit, read:</b> <span class="q">“You crouch over the sign. No blood. No tracks of any beast you can name, no drag of a kill. Instead the earth is <b>churned</b> — root-scars gouged deep, thorn-scratches raked across the cart, a slick of sweet sap gone tacky. Whatever took the driver didn't hunt them. It pulled them <b>down</b> — roots and all.”</span></div>
    <div class="miss"><b>On a miss:</b> <span class="q">“The ground's a torn-up mess you can't quite read — but it sits wrong for any animal you know.”</span></div>
  </div>
  <div class="check">
    <div class="ck-head"><span class="ck-name">Scout the fork</span> <span class="dc">DC 15</span> <span class="pill">Wis (Survival)</span></div>
    <div class="hit"><b>On a hit:</b> the drag-trail and a faint thread of woodsmoke run the same way off-trail — <b>someone is camped in the deep wood</b> (the Harvesters' Camp, Scene 3).</div>
  </div>
  <p class="lbl">Avenues from the fork</p>
  <p><span class="pill">the road — fast, the obvious hunt</span><span class="pill">the drag-marks — slower, the truth</span><span class="pill">scout first (above)</span></p>
</div>`
    },

/* ---------- SCENE 1 ---------- */
    { id:"scene1", nav:"Scene 1 · Bramble-Pack", icon:"🐺", name:"Scene 1 — The Bramble-Pack", play:true, tag:"MODULAR", type:"combat", time:"~15 min",
  subtitle:"Path of Least Resistance — on the road, deeper in.",
  loot:[
    {id:"s1-potion", name:"Potion of Healing",  rarity:"common",  qty:2, note:"In a vanished traveler's wrecked cart. Bonus action to drink; regain 2d4+2 HP."},
    {id:"s1-locket", name:"Thornsilver Locket", rarity:"trinket", qty:1, note:"A victim's keepsake (~25 gp). Returning it to Fenn (Scene 2) earns goodwill."},
    {id:"s1-purse",  name:"Travelers' purse",   rarity:"coin",    qty:1, note:"~30 gp in mixed coin from the dead on the road."}
  ],
  readAloud:[
    {label:"🎬 Scene 1 — the scene at a glance (your eyes only)", text:`<p style="opacity:.7"><i>Not read aloud — your orientation for the scene. They took the road at the fork.</i></p>
      <p>Likely the party's <b>first fight</b>. Ordinary wolves the wounded wood has <b>seized and maddened</b> — the forest lashing out at anyone on the harm-road. They fight to <b>herd, not kill</b>: they never finish a downed PC, and the wood “lets them go” early.</p>
      <p><b>Keep it short.</b> Let them feel a round or two of teeth, then end it — after ~2 rounds, or the moment they retreat, calm the pack, land solid hits, or drop it to ~2. <b>Don't grind all eight down</b>; the point is the <i>wrongness</i>, not attrition.</p>
      <p><b>Clues:</b> reinforces <b>Clue 2</b> (it's the wood, not a beast) and nods Clue 1. Full run-the-fight detail is on the DM-notes face.</p>`},
    {label:"📖 The pack on the road (the encounter opens)", text:`You've walked the road maybe an hour, the ruts narrowing as the old trees lean closer overhead, when the wood goes wrong. You hear them before you see them — a low, ragged panting, more sob than snarl. Then they come slinking from the brush on every side: wolves, eight of them — but no wolves were ever like <i>these</i>. Thorned vines have grown <i>through</i> their hides, knotting in the fur; their eyes weep a slow amber sap, like tears; and they move stiff and wrong, as though something behind them were driving them on against their will. They don't circle to feed. They fan out to <b>herd</b> — to push you back the way you came.<br><span style="opacity:.65">(DM: the Scene 1 image — the green-eyed, sap-weeping pack. Roll initiative — group <b>+2</b>, suggested <b>14</b>. Let round 1 feel dangerous, then watch for the player who tries to read or calm them → next beat.)</span>`},
    {label:"📖 Read the pack — they're driven, not hunting (Animal Handling / Nature DC 15, on a hit)", text:`“You catch it between heartbeats — the way they flinch from their own thorns, the sap running down their muzzles like tears, the cringe in them even as they lunge. These aren't hunting you. Something behind them is driving them, and it's hurting them to do it. They don't want your throats — they want you to turn back.”<br><span style="opacity:.65">(DM: on a hit, DC 15. A PC who then lowers weapons or gives ground ends the fight without a kill — and it reinforces Clue 2: the wood, not a beast.)</span>`},
    {label:"📖 The wood lets them go — the fight ends (read after ~2 rounds, a retreat, or a calm)", text:`All at once the fight goes out of them. The thorns that drove the pack seem to <i>loosen</i> — the wolves shudder, whine low in their throats, and slink backward into the green dark, leaving only flattened ferns and the smell of sap. Whatever was holding their leash has decided you've been pushed back far enough.<br><span style="opacity:.65">(DM: read after ~2 rounds, a retreat, a calm, or once the pack's down to 2–3 — don't grind all eight. Then move them onward → next beat.)</span>`},
    {label:"📖 Onward — the ridge (read as they move on)", text:`You climb on, and the road lifts toward a low ridge. Through a gap in the canopy the land opens ahead: deeper in, a hollow glows a faint, sourceless <b>green</b>, as though something down there were lit from within. And off to one side, nearer, a thin grey thread of <b>woodsmoke</b> climbs above the trees — someone is camped in the deep wood.<br><span style="opacity:.65">(DM: the green hollow is the grove → <b>Scene 4</b>, the warded ring (the road party's path to the Showdown). The smoke is the harvesters' camp → <b>Scene 3</b> — a last chance for a curious party to pick up the truth before the grove, if they detour.)</span>`}
  ],
  body:`
<div class="zone dm-only">
  <h4>🎭 Setup / DM notes</h4>
  <p>Ordinary wolves the wounded wood has seized and maddened — the forest lashing out at intruders on the harm-road. <b>They fight to herd, not to kill:</b> a clever party notices the wolves break off if the party <i>retreats</i> or shows they mean the grove no harm. <i>(Reinforces Clue 2.)</i></p>
  <p><b>🔎 Clues here:</b> reinforces <b>Clue 2</b> (it's the <i>wood</i>, not a beast) and nods <b>Clue 1</b> (it drives back those who came to cut).</p>
</div>
<div class="callout dm-only"><b>▸ First fight — keep it short.</b> Likely the party's first taste of combat: let them feel a round or two of teeth, then end it. After about <b>2 rounds</b> — or the moment they retreat, land a couple of solid hits, or calm the pack — the wood <i>lets them go.</i> <b>Don't grind all eight wolves to zero;</b> the point is the <i>wrongness</i>, not attrition.</div>

<details class="sb dm-only">
  <summary><span class="sb-name">🎲 Combat at the table — the rolls on both sides</span> <span class="sb-quick">read once · applies to every fight</span></summary>
  <div class="sb-body">
    <p style="margin-top:0"><b>The core loop.</b> Roll initiative (d20 + Dex mod). For monster groups, <b>one roll for the whole group</b> keeps it fast — each fight's init bar pre-prints a number you can just use. Go highest → lowest. On a turn: <b>Move + one Action</b> (＋ maybe a Bonus Action, and one Reaction before your next turn).</p>
    <hr>
    <p class="lbl">What YOU (the DM) roll</p>
    <ul style="margin:.2rem 0 .5rem 1.1rem; font-size:.9rem">
      <li><b>Monster attack:</b> d20 ＋ the attack bonus on the stat block <b>vs. the target PC's AC</b>. Meet or beat = hit → roll the listed damage dice. <i>Ask every player their AC up front and jot it on your tracker.</i></li>
      <li><b>Nat 20 = crit</b> (roll the damage dice <i>twice</i>); nat 1 = miss.</li>
      <li><b>You do NOT roll the PCs' saves — they do.</b> When a monster forces a save you just <b>announce the ability ＋ the DC</b> ("Strength save, DC 11") and the player rolls.</li>
      <li><b>Advantage / disadvantage:</b> roll 2d20, take higher (adv) / lower (dis). They don't stack — any amount = one die. (Wolves' & the Thug's <i>Pack Tactics</i> grant the monster advantage when an ally is within 5 ft. of its target.)</li>
    </ul>
    <p class="lbl">What the PLAYERS roll (have these numbers ready)</p>
    <ul style="margin:.2rem 0 .5rem 1.1rem; font-size:.9rem">
      <li><b>Their attacks:</b> d20 ＋ their bonus <b>vs. the monster's AC</b> (top of each stat block). Tell them the AC, or just call hit/miss.</li>
      <li><b>Saving throws you call for</b> — each fight below lists which monster effects force which save.</li>
      <li><b>Ability checks</b> when they try something off-menu — you set a DC (Easy 10 · Medium 15 · Hard 20) and they roll.</li>
    </ul>
    <p class="lbl">The action menu — what players will try, and your instant ruling</p>
    <table class="tbl">
      <tr><th>They say…</th><th>You do…</th></tr>
      <tr><td>"I attack"</td><td>They roll vs. the monster's AC; on a hit, they roll damage.</td></tr>
      <tr><td>"I cast a [save] spell"</td><td><b>The target rolls the save vs. the caster's spell DC</b> (the player tells you the DC). Attack-roll spells/cantrips: they roll vs. AC instead.</td></tr>
      <tr><td>"I grapple / shove"</td><td>Contest — their <b>Athletics</b> vs. the target's <b>Athletics or Acrobatics</b> (defender's choice). Win = grappled (speed 0) or shoved 5 ft. / knocked prone.</td></tr>
      <tr><td>Target is <b>prone</b></td><td>Melee attacks vs. it have <b>advantage</b>; its attacks have disadvantage; standing costs half its move.</td></tr>
      <tr><td>"I Dodge"</td><td>Attacks vs. them have disadvantage; they get advantage on Dex saves — until their next turn.</td></tr>
      <tr><td>"I Disengage"</td><td>No opportunity attacks for leaving melee this turn.</td></tr>
      <tr><td>"I Dash"</td><td>Double their movement this turn.</td></tr>
      <tr><td>"I Help"</td><td>One ally gets <b>advantage</b> on their next attack/check (the helper spends their action).</td></tr>
      <tr><td>"I Hide"</td><td>Stealth vs. enemies' passive Perception; if hidden, their first attack has advantage and reveals them.</td></tr>
      <tr><td>"I Ready…"</td><td>They name a trigger now; it fires later as their <b>Reaction</b>.</td></tr>
      <tr><td>"Can I [clever thing]?"</td><td>Usually yes, with a roll — pick the ability ＋ a DC and keep it moving. Lean toward yes.</td></tr>
    </table>
    <hr>
    <p style="margin:.2rem 0;font-size:.9rem"><b>Opportunity attack (reaction):</b> when a creature leaves another's reach without Disengaging, the other may spend its Reaction on <b>one melee attack</b>. One reaction per round, each side.</p>
    <p style="margin:.2rem 0;font-size:.9rem"><b>Concentration:</b> a caster (PC or monster) holding a concentration spell who takes damage makes a <b>Con save, DC 10 or half the damage taken, whichever is higher</b> — fail drops the spell. Call for it <i>every</i> time the held caster is hit. <i>(Big one this module: it's how the party breaks the Overseer's </i>hold person<i>.)</i></p>
    <p style="margin:.2rem 0;font-size:.9rem"><b>At 0 HP:</b> a PC drops, and on each of their turns rolls a <b>death save</b> (d20 — 10+ success, under = fail; <b>3 successes = stable, 3 fails = dead; nat 20 = up at 1 HP; nat 1 = two fails</b>). Taking damage while down = an auto-fail (a crit = two). Any healing wakes them.</p>
  </div>
</details>

<div class="zone dm-only">
  <h4>⚔️ Encounter — Medium</h4>
  <div class="budget"><b>Budget check:</b> 8 Wolves ×50 = 400 base ×2.5 (7–10 band) = <b>1,000 adjusted → Medium.</b> <span class="pill">Party 375 / 750 / 1,125 / 2,000</span></div>
  <p class="lbl">Roster &amp; tactics</p>
  <p>8 <b>Wolves</b> (reflavor: <i>bramble-wolves</i>). <b>Pack Tactics</b> — gang up for advantage; <b>Keen Hearing &amp; Smell</b> makes surprise hard. Focus the frontline, knock prone (Bite rider), drive PCs <i>back toward the road's edge</i>.</p>
  <p><b>Morale (end it in ~2 rounds):</b> as forest-puppets they don't flee for self-preservation, but the wood “lets them go” early — after ~2 rounds, or the moment the party turns to leave, lands solid hits, calms them, or the pack drops to <b>2</b>, the vines go slack and survivors melt into the wood.</p>
</div>

<div class="dm-only">{{SB:wolf|8}}</div>

<div class="runfight dm-only">
  <h4>🎬 Run the fight — round by round</h4>
  <div class="initline">
    <span class="ini"><b>Init +2</b> <span class="die">(roll once for the pack — group initiative keeps it fast)</span></span>
    <span class="ini">Suggested fixed init: <b>14</b></span>
    <span class="ini">No surprise if a PC made <b>Survival DC 13</b> at the fork</span>
  </div>
  <div class="turns">
    <div class="turn-card">
      <h5>🐺 Bramble-Wolves ×8 <span class="pri">Target: whoever pushes deepest in</span></h5>
      <ol>
        <li><b>Move &amp; gang up.</b> 40 ft. speed — get two wolves adjacent to one PC so <b>Pack Tactics</b> gives both <b>advantage</b>.</li>
        <li><b>Bite</b> +4 (reach 5 ft.): <b>7 (2d4+2) piercing</b>, then <b>DC 11 Str save or knocked prone</b>. A prone PC = easy pickings for the next wolf.</li>
        <li><b>Herd, don't kill.</b> They body-block and shove PCs <i>back toward the road</i> — they <b>never finish a downed PC</b> (the wood wants them gone, not dead).</li>
      </ol>
    </div>
  </div>
  <div class="rounds">
    <div class="rd"><b>Round 1</b> Lunge from the brush. Knock the lead PC prone, snarl, press. Let it feel dangerous.</div>
    <div class="rd"><b>Round 2</b> The wood begins to "let go." If they retreat, land a couple of solid hits, calm the pack, or drop it to 3 — <b>end it now.</b></div>
    <div class="rd"><b>End</b> Vines go slack, survivors melt into the trees. Don't grind all eight down.</div>
  </div>
  <div class="attable">
    <p class="lbl">🎲 At the table — the rolls, both sides</p>
    <div class="turns">
      <div class="turn-card q-you">
        <h5>🎲 You roll <span class="pri">the pack's dice</span></h5>
        <ul>
          <li><b>Bite:</b> d20 <b>+4</b> vs. the PC's AC → <b>2d4+2</b> piercing. Then call <b>"Strength save, DC 11"</b> — the PC rolls; fail = knocked prone.</li>
          <li><b>Pack Tactics:</b> a 2nd wolf within 5 ft. of your target → roll that bite with <b>advantage</b> (2d20, take higher).</li>
          <li>That's the whole kit — no other saves to impose.</li>
        </ul>
      </div>
      <div class="turn-card q-exp">
        <h5>🎯 Expect from the party <span class="pri">first-fight instincts</span></h5>
        <ul>
          <li><b>Attacks vs. AC 13</b> — it's low, they'll land plenty; let them feel competent.</li>
          <li>Someone <b>Helps</b>, <b>Shoves</b> a wolf prone (their Athletics vs. wolf's Athletics +1 / Acrobatics +2), or drops a save spell → <b>the wolf rolls the save vs. their DC.</b></li>
          <li>Watch for the player who tries to <b>calm / read</b> the pack — that's the check just below; lean into it.</li>
        </ul>
      </div>
      <div class="turn-card q-rx">
        <h5>🔁 How to react <span class="pri">keep it ~2 rounds</span></h5>
        <ul>
          <li>A wolf has <b>11 HP</b> — most PC hits drop one. <b>Don't track all eight;</b> narrate them peeling off as they fall.</li>
          <li>Retreat, a calmed pack, or two solid hits → <b>the wood "lets go"</b> (read on). Don't grind to zero.</li>
          <li>Dice spike and a PC drops? Wolves <b>don't finish the downed</b> — they herd. Scare, don't kill.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="ra reveal"><span class="ra-label">Read — the wood lets them go (the fight ends)</span>All at once the fight goes out of them. The thorns that drove the pack seem to <i>loosen</i> — the wolves shudder, whine low in their throats, and slink backward into the green dark, leaving only flattened ferns and the smell of sap. Whatever was holding their leash has decided you've been pushed back far enough.</div>
</div>

<div class="zone dm-only">
  <h4>🤝 Reading the pack — the calming check</h4>
  <div class="check">
    <div class="ck-head"><span class="ck-name">Calm / scatter the pack</span> <span class="dc">DC 15</span> <span class="pill">Animal Handling / Nature</span></div>
    <div class="hit"><b>On a hit, read:</b> <span class="q">“You catch it between heartbeats — the way they flinch from their own thorns, the sap running down their muzzles like tears, the cringe in them even as they lunge. These aren't hunting you. Something behind them is driving them, and it's hurting them to do it. They don't want your throats — they want you to turn back.”</span> <i>(A PC who then lowers weapons or gives ground ends the fight without a kill.)</i></div>
    <div class="miss"><b>On a miss:</b> <span class="q">“They're frothing and wrong, and past the snarling you can't get a read on them — best keep your guard up.”</span> (No penalty; another PC can try next round.)</div>
  </div>
</div>

<div class="zone dm-only">
  <h4>↔️ Avenues · Bypass · Exit</h4>
  <p class="lbl">Avenues</p>
  <p><span class="pill">fight</span><span class="pill">Survival DC 13 — spot the ambush, gain surprise / avoid it</span><span class="pill">Animal Handling/Nature DC 15 — calm them</span><span class="pill">simply retreat ends it</span></p>
  <p class="lbl">Bypass ⬡</p>
  <p>If cut: a single tense moment — a wolf or two lunge, a <b>Survival DC 13</b> scatters them, the party reads Clue 2 off the thorns and sap.</p>
  <p class="lbl">Exit / lead</p>
  <p>The road climbs toward a ridge; through the trees they glimpse <b>smoke</b> (the camp, Scene 3) and beyond, a <b>green-glowing hollow</b> (the grove, Scene 4).</p>
</div>`
    },

/* ---------- SCENE 2 ---------- */
    { id:"scene2", nav:"Scene 2 · Fenn's Hollow", icon:"🛖", name:"Scene 2 — Fenn's Hollow", play:true, tag:"MODULAR", type:"roleplay", time:"~30 min",
  subtitle:"Path Least Traveled On — follow the drag-marks / smoke off-trail. This is the clearest route to the Key.",
  readAloud:[
    {label:"🎬 Scene 2 — the scene at a glance (your eyes only)", text:`<p style="opacity:.7"><i>Not read aloud — your orientation. They followed the drag-marks off the road.</i></p>
      <p><b>Fenn</b> is the last living <b>grove-warden</b> and old friend to the guardian, <b>Sorrowroot</b> — she knows the whole truth and won't trust killers. This is the <b>clearest route to the Key</b>.</p>
      <p><b>She reads sincerity and specifics, not the word “save.”</b> A glib “we're here to save it!” lands hollow; an honest “we were hired to kill it, but something's wrong” wins her. Reward the truth over the right word.</p>
      <p>If a PC <b>produces or returns the oak figure</b> from the cart (or cites the note that named her): <b>advantage</b> on the trust check, and she thaws faster.</p>
      <p><b>Outcomes:</b> win her trust → the <b>full Key</b> + the “go to the grove unarmed and grieve” method. Lie to her → she flees (journal only = partial Key). Full conversation logic + DCs are on the DM-notes face.</p>`},
    {label:"📖 Fenn on her step (the opener)", text:`The drag-trail winds deeper than you'd think a body could be hauled, and ends at a <b>sod-roofed hut grown half into a living oak</b> — its low door hung with bundles of drying herbs, little bone charms, and small skulls that turn in the breeze. On the step sits an old woman with a carving knife and a piece of pale heartwood, whittling, not looking up. <i>(In her hands: a small oak figure with a face — the twin of the one from the cart.)</i> “You smell of the road,” she says, before anyone speaks. “Of axes. And of coin. Greywater sent you to kill the thing in my wood — don't trouble yourself denying it.” The knife never stops moving. At last she lifts her eyes to yours, pale and sharp. “So tell me true — and spare me the kind word you think I want to hear: when you find what's been taking folk off that road… what will you <i>do</i>? Lie to me, and the wood will know.”<br><span style="opacity:.65">(DM: don't let it land as a yes/no — let her press, next beat. Reward honesty over the word “save.” The returned oak figure = advantage and a faster thaw.)</span>`},
    {label:"📖 Fenn presses — her follow-up probes (pick 1–2; she reads sincerity, not the word “save”)", text:`<i>Don't let her question land as a yes/no — press for a real answer:</i><br>• “There's a man in Greywater waiting on his sister Wren. When you find what took her — do you <b>swing</b> first, or do you <b>look</b> first?”<br>• “The reeve put a price on its head. Is that the whole of why you're here, or is there more to you than coin?”<br>• “Say it <i>is</i> a monster. Say it's been killing folk. What then — your mercy, or your blade?”<br>• “What did you see by that cart? Tell me, and I'll know whether you've eyes worth trusting.”<br><span style="opacity:.65">(DM: treat her as passive Insight 13 — press a hollow answer, reward a specific/honest one. This sets the DC 15 trust check; advantage/disadvantage per the table on the DM-notes face.)</span>`},
    {label:"📖 If they win her trust → the Key (read, low and steady)", text:`“Then hear it true. The thing on the road is no beast — it's <b>Sorrowroot</b>, the old heart of this wood, and it takes only those who come to <b>wound</b> it. The grey-robes — the <b>Withering</b> — have been felling the heartwood for months, boiling it down to <b>heart-sap</b> so their <b>Mother Sere</b> will never die. They started the beast-tale themselves: they want hired swords to put my friend down, so none are left to guard the grove when they take the last of it. <b>Dusk, the third day, they finish.</b> If you mean to save it — go to the grove <i>unarmed</i>, and <i>grieve</i> with it. It will know.”<br><span style="opacity:.65">(DM: sets Clue 4 = the full Key → flips to Ending B / Showdown Version B, and unlocks the “approach unarmed → reach the Guardian with no roll” prize.)</span>`},
    {label:"📖 If they lie or threaten — she closes (read)", text:`The knife stops. For the first time she looks <i>old</i>, and afraid. “You smell too much of axes,” she says — or, if you lied to her: “…and the wood <b>knows</b> a false tongue.” She's up and gone into the green before you've finished, quick as a girl, leaving only the door swinging and the herb-smell. <span style="opacity:.65">(She leaves the hut — her journal is still inside: Clue 4, the gist of the truth, but not the live ally or the unarmed approach. Deception miss = no retry; flag the risk before a player commits to lying.)</span>`},
    {label:"📖 Onward — where Fenn sends them (read the branch that applies)", text:`<b>Trusted:</b> Fenn rises, and for a moment the years fall off her. “Then go — up through the green dark, to the ring of standing stones, and the grove beyond. Unarmed. And remember: it is grieving, not hunting.”<br><b>Without her trust:</b> she's gone into the trees, and you're left with more doubt than answers — but the drag-trail runs on, deeper in, toward that thin thread of smoke.<br><span style="opacity:.65">(DM: trusted → the grove, <b>Scene 4</b> → Showdown; she lives, Ending B hook. Untrusted/journal → the drag-trail leads on to the camp, <b>Scene 3</b>.)</span>`}
  ],
  body:`
<div class="zone dm-only">
  <h4>🎭 Setup / DM notes</h4>
  <p><b>Fenn</b> is the last living <b>grove-warden</b> — keeper of the grove and old friend to its guardian, <b>Sorrowroot</b>. She knows everything: Sorrowroot is no beast and takes only those who harm the grove; the <b>Withering</b> has been felling the heartwood for months to brew <b>heart-sap</b> for <b>Mother Sere's</b> rite. She's terrified and grief-stricken and won't trust killers.</p>
  <p><b>🔗 Why they came (the cart hook pays off here):</b> the victims traded with Fenn for the safe ways in — that's the note on the cart, and the <b>little oak figure</b> from the bench is <i>hers</i> (she whittles them; the same carving she keeps in her hands this whole scene). A party that <b>produces or returns the figure</b> — or repeats what the note said about her — shows they listened to the dead instead of just the bounty: hand them <b>advantage</b> on the trust check (same as having found Clue 1/2), and she thaws a little faster. If they came on Aldous's “go straight past her” instead, note the irony — they took the cult's own misdirection as a lead.</p>
  <p><b>🔎 Clues here:</b> <b>Clue 4 = the Key</b> — Fenn's testimony, or her journal.</p>
</div>
<div class="npc dm-only">
  <h5>Fenn — the grove-warden</h5>
  <div class="wvt"><span><b>Want:</b> the grove and her old friend saved</span><span><b>Voice:</b> slow, plain, weighs every word</span><span><b>Tell:</b> keeps carving the same little oak figure; won't meet your eyes at “harvest”</span></div>
  <p>Greywater-born, she left for the wood sixty years ago to apprentice to the old grove-warden. <b>Sorrowroot is the only family she has left</b>, and she's watched grief turn her oldest friend into the thing the village calls a monster.</p>
</div>

<div class="zone dm-only">
  <h4>🗣️ How the conversation runs</h4>
  <div class="callout"><b>▸ "Cut or save?" is not a magic-word test — don't let it play like one.</b> Fenn isn't scoring the word <i>save</i>. She has buried every friend she had; she reads <b>sincerity and specifics</b>, not vocabulary. A glib "oh, we're here to <i>save</i> it!" with nothing behind it should land as <b>hollow</b> — she's heard kind words from axe-men before. And the <i>honest</i> answer is often <b>not</b> "save" at all: the party really was hired to kill a beast, and right now they may still believe that's all it is. <b>Reward the truth over the right word.</b> A party that admits the bounty but shows doubt — or says "we don't know yet; tell us what's really out there" — earns her faster than one performing the keyword.</div>
  <p><b>Step 1 — Her test (free, no roll). Don't tee up a yes/no — make them commit.</b> She asks her open question (the read-aloud), then <b>presses with a follow-up</b> to get under any glib answer. The answers set the trust-check modifier below. Pick 1–2 probes that fit who's talking:</p>
  <ul style="margin:.2rem 0 .5rem 1.1rem; font-size:.92rem">
    <li>"There's a man in Greywater waiting on his sister Wren. When you find what took her — do you swing first, or do you <i>look</i> first?"</li>
    <li>"The reeve put a price on its head. Is that the whole of why you're here, or is there more to you than coin?"</li>
    <li>"Say it <i>is</i> a monster. Say it's been killing folk. What then — your mercy, or your blade?"</li>
    <li>"What did you see by that cart? Tell me, and I'll know whether you've eyes worth trusting." <i>(rewards a party that found Clue 1/2)</i></li>
  </ul>
  <p class="lbl">📖 Read her — what opens her · what's hollow · what closes her</p>
  <table class="tbl">
    <tr><th>If the party…</th><th>How Fenn reads it (your eyes only)</th><th>Effect on the trust check</th></tr>
    <tr><td>Names what they actually <b>saw</b> (Clue 1/2 — the churned roots, the victim pattern) and shows real doubt about the "beast"</td><td class="dmonly">These have eyes <i>and</i> a conscience. They already half-know the wood's truth.</td><td><b>Advantage</b></td></tr>
    <tr><td><b>Honestly</b> admits "we were hired to kill it — but something about that story is wrong"</td><td class="dmonly">Honesty she can <i>use.</i> She'd take a truthful doubter over a smooth talker any day.</td><td><b>Advantage / leans open</b> — even without the word "save"</td></tr>
    <tr><td>Performs the keyword — "we're here to <b>save</b> it!" — with nothing behind it</td><td class="dmonly">Hollow. Press them with a probe; if they can't back it up, it's just noise.</td><td><b>No bonus</b> — flat DC 15 (and see her read, below)</td></tr>
    <tr><td>Talks bounty/reward, threatens, or keeps weapons bared</td><td class="dmonly">Another sword sent to do the cult's work for them. The door starts to close.</td><td><b>Disadvantage</b></td></tr>
    <tr><td><b>Lies</b> to her face (false promise, invented story)</td><td class="dmonly"><b>The wood knows.</b> This is the Deception line in Step 2 — roll her read against it.</td><td>Deception miss → <b>turns hostile, flees</b> (journal only)</td></tr>
  </table>
  <p style="font-size:.88rem;color:var(--muted);margin:.35rem 0 0">Fenn reads people keenly — treat her as <b>passive Insight 13</b>, or roll it in the open against a hollow/performed answer. The aim isn't to "gotcha" anyone: it's that <i>specific, honest</i> talk should beat a magic word, so the scene rewards real roleplay instead of a coin-flip "save."</p>

  <div class="check">
    <div class="ck-head"><span class="ck-name">Step 2 — The trust check → the Key</span> <span class="dc">DC 15</span> <span class="pill">Persuasion / Insight / Deception</span></div>
    <p style="margin:.3rem 0"><b>Advantage</b> if they've found <b>Clue 1 or 2</b> and <i>say so</i>, <b>or</b> they produce / return her <b>oak figure</b> from the cart (or cite the note that named her). · <b>Disadvantage</b> if they brag about the bounty, threaten, or wave weapons.</p>
    <div class="hit"><b>On a hit → sets Clue 4 (the full Key). Read:</b>
      <div class="ra reveal" style="margin-top:.4rem"><span class="ra-label">Fenn, low and steady</span>“Then hear it true. The thing on the road is no beast — it's <b>Sorrowroot</b>, the old heart of this wood, and it takes only those who come to <b>wound</b> it. The grey-robes — the <b>Withering</b> — have been felling the heartwood for months, boiling it down to <b>heart-sap</b> so their <b>Mother Sere</b> will never die. They started the beast-tale themselves: they want hired swords to put my friend down, so none are left to guard the grove when they take the last of it. <b>Dusk, the third day, they finish.</b> If you mean to save it — go to the grove <i>unarmed</i>, and <i>grieve</i> with it. It will know.”</div>
    </div>
    <div class="miss"><b>On a miss → fail forward (never a dead end):</b>
      <ul style="margin:.3rem 0 0">
        <li><i>Persuasion / Insight miss:</i> she closes the door — “You smell too much of axes.” The <b>journal</b> (Step 4) is still there. <b>Retry only with new leverage</b> — bring <b>proof</b> (a heart-sap crate = Clue 3) or cite an unmentioned Clue 1/2 — then <b>one</b> more DC 15 attempt, at advantage.</li>
        <li><i>Deception miss:</i> <b>the wood knows.</b> She catches the lie, turns hostile, flees deeper — <b>journal only, no retry.</b> Flag this risk to a player <i>before</i> they commit to lying.</li>
      </ul>
    </div>
  </div>

  <div class="check">
    <div class="ck-head"><span class="ck-name">Step 3 — The threat route (alternative)</span> <span class="dc hard">DC 20</span> <span class="pill">Intimidation</span></div>
    <div class="miss" style="border-left-color:var(--warn)">Even on a <b>hit</b> → only <b>fragments</b> (no “go unarmed” method); attitude flips <b>hostile</b>, she warns them the cult is <i>using</i> them, then <b>flees</b> (journal → Clue 4 still gettable). On a <b>miss</b> → she clams up and flees; journal only.</div>
  </div>

  <div class="check">
    <div class="ck-head"><span class="ck-name">Step 4 — Fenn's journal — Bypass ⬡</span> <span class="dc">DC 15</span> <span class="pill">Investigation (search the hut)</span></div>
    <p style="margin:.3rem 0">Finds the journal = <b>Clue 4</b> — the gist (the felling, the heart-sap, “they mean for heroes to slay my friend so none can stop the Harvest”) but <b>not</b> the live ally or the unarmed-approach method. Auto-handed over if Fenn flees. Use this if the scene is cut.</p>
  </div>
</div>

<div class="zone secret">
  <h4><span class="dm-tag">RECORD IN TRACKER</span> 🔑 What gets set / triggered</h4>
  <ul>
    <li><b>Clue 4 = the Key</b> from any of: winning her trust (full Key + grove-approach method), the journal, or even her hostile fragments (partial).</li>
    <li><b>Key = found</b> → flips trending <b>Ending A → B</b> and unlocks <b>Showdown Version B</b> (fight the cult; Sorrowroot fights as your ally).</li>
    <li>The <b>“go unarmed and grieving”</b> line is the trust-route's exclusive prize: at the Showdown a PC who approaches Sorrowroot <i>without attacking</i> reaches it <b>automatically — no roll</b>. A journal-only party still gets Version B but must <i>earn</i> that moment live.</li>
    <li><b>Fenn's fate flag:</b> trusted → she lives and returns in Ending B's hook; threatened or ignored → she flees deeper into the wood.</li>
  </ul>
</div>
<div class="zone dm-only"><h4>↪️ Exit / lead</h4><p>Fenn points them to <b>the grove</b> (Scene 4 → Showdown) and begs them not to harm the guardian — or, without trust, they leave with doubt and the journal, and the drag-trail still leads on to <b>the camp (Scene 3)</b>.</p></div>`
    },

/* ---------- SCENE 3 ---------- */
    { id:"scene3", nav:"Scene 3 · Harvesters' Camp", icon:"⛺", name:"Scene 3 — The Harvesters' Camp", play:true, tag:"MODULAR", type:"combat", time:"~40 min",
  subtitle:"Path Least Traveled On — the cult's work-camp; the physical proof for Ending B.",
  loot:[
    {id:"s3-scroll", name:"Spell Scroll: Lesser Restoration", rarity:"uncommon", qty:1, note:"From the Harvest Overseer's kit. Ends a disease or one effect of the cult's withering on a touched ally (2nd-level spell)."},
    {id:"s3-potion", name:"Potion of Greater Healing",        rarity:"uncommon", qty:1, note:"The overseer's emergency draught. Regain 4d4+4 HP."},
    {id:"s3-sickle", name:"Harvest-Sickle, +1",               rarity:"uncommon", qty:1, note:"The overseer's consecrated harvesting blade (treat as a +1 scimitar/sickle): +1 to attack and damage rolls."},
    {id:"s3-coin",   name:"Cult coin & supplies",             rarity:"coin",     qty:1, note:"~50 gp, trail rations, and a tally confirming the village's 150 gp bounty."}
  ],
  readAloud:[
    {label:"🎬 Scene 3 — the scene at a glance (your eyes only)", text:`<p style="opacity:.7"><i>Not read aloud — your orientation. They followed the drag-trail / the smoke off-trail (or detoured here from the Scene 1 ridge).</i></p>
      <p>The <b>Withering's harvest-camp</b>, where they distill <b>heart-sap</b> for Mother Sere's rite — and it holds the <b>proof (Clue 3)</b>: a crate of heart-sap + the withered-crown brand, plus a captive who confirms it aloud.</p>
      <p><b>Encounter — Hard:</b> Harvest Overseer (Cult Fanatic) + 4 Cultists + Thug. The overseer hangs back, opens <b>hold person</b>, and <b>inflicts — never heals</b>; cultists screen the still; the thug holds the line. <b>Still hazard:</b> a hit on it → DC 13 Dex or 1d6 fire.</p>
      <p><b>Morale:</b> overseer down or cultists to 2 → they break and beg — <b>capture one, it's a goldmine</b>. Avenues: fight, stealth a crate, or pose as buyers (Deception DC 15). Full fight detail on the DM-notes face.</p>`},
    {label:"📖 The clearing & the overseer (the opener)", text:`The trees simply <i>stop</i>. A raw clearing opens where a stand of ancient oaks once stood — now a field of <b>stumps</b>, each weeping pale sap into a catch-bucket, the cuts still bright. The reek hits next: resin, woodsmoke, and under it something sweetly rotten. At the centre, robed figures tend a crude copper <b>still</b> that drips a slow, glowing <b>green ichor</b> into iron crates — and every crate wears the same brand: a <b>withered crown</b>, a ring of dead, leafless branches. A harder-eyed man in stained vestments turns at your approach, a hand drifting to the dagger at his belt. “Pilgrims?” His mouth twists. “No. The Mother said hunters would come. She didn't say they'd be fool enough to come <i>here</i>.”<br><span style="opacity:.65">(DM: the Scene 3 image — stumps in buckets, the green still, branded crates. He bluffs, then fights. Mind the still hazard and his opening hold person on your heaviest hitter.)</span>`},
    {label:"📖 The camp breaks — a captured cultist (read when the overseer drops / cultists hit 2)", text:`The fight goes out of them the moment the overseer drops. The last grey-robe throws down a sap-slick blade and presses into the dirt, hands over his head. “Please — please, I only carry the crates,” he babbles, eyes darting to the green-lit hollow uphill. “It's all up at the grove. Whatever you want to know — just don't put me in the ground.”<br><span style="opacity:.65">(DM: that kneeling cultist is your capture → Clue 3 intel, next beat. Don't grind the last fodder.)</span>`},
    {label:"📖 A captured cultist talks (Clue 3 · Intimidation / Persuasion DC 13)", text:`“Please — I only carry crates! The Mother's at the grove, finishing the <b>Great Harvest</b> — by <b>dusk on the third day</b> she drinks the last of it and never dies. The thing in the wood? We <b>made</b> that story. We needed it dead before the harvest was done, so we sent for hunters. You. You were meant to do it for us.”<br><span style="opacity:.65">(DM: the spoken half of Clue 3 — the rite, the dusk deadline, and that the cult invented the beast and hired the party. Miss = he clams up, but his eyes flick to the grove.)</span>`},
    {label:"📖 Crack a crate / read the brand → Clue 3, the proof (auto)", text:`Inside the iron crate, glass vials nest in straw, each full of that slow green light — <b>heart-sap</b>, thick as honey and faintly <i>pulsing.</i> Every crate, every tool, every grey robe wears the same mark: a <b>withered crown.</b> Whatever's been taking folk on the road, <i>this</i> is what they died to hide — someone is bleeding the wood dry on purpose, and they wanted a “beast” blamed for it.<br><span style="opacity:.65">(DM: the physical half of Clue 3 — a stealth party can grab a crate with no fight. Optional Nature/Arcana/Religion DC 13 names it: the wood's life distilled to cheat death.)</span>`},
    {label:"📖 Onward — to the grove (read as they move on)", text:`Every loaded cart, every brand, every word from the kneeling cultist points the same way: <b>up</b> — toward that green-lit hollow on the rise, where <b>Mother Sere</b> means to finish the Great Harvest at dusk.<br><span style="opacity:.65">(DM: leads to the grove → <b>Scene 4</b> (the warded ring) → Showdown. They now hold the Key, Clue 3 → Ending B / Version B.)</span>`}
  ],
  body:`
<div class="zone dm-only">
  <h4>🎭 Setup / DM notes</h4>
  <p>The <b>Withering's</b> harvest-crew, distilling <b>heart-sap</b> (concentrated grove life-force) for Mother Sere's immortality rite. The <b>overseer</b> (Cult Fanatic) bluffs, then fights; the <b>cultists</b> defend the still and crates. <b>A crate of heart-sap + the withered-crown brand is undeniable proof</b> (Clue 3) that the “beast” story is a cover.</p>
  <p><b>🔎 Clues here:</b> <b>Clue 3 = the proof</b> — a heart-sap crate + the withered-crown brand; a captured cultist confirms it aloud.</p>
</div>
<div class="callout dm-only"><b>🔗 Links:</b> the brand's <b>withered crown</b> is the grove's own leaf-crown (carved on the Scene 4 standing stones) — stolen and killed; <b>Mother Sere</b> wears its dead-branch form at the Showdown. The <b>heart-sap</b> in these crates is the same glowing sap she drinks to finish the rite.</div>

<div class="zone dm-only">
  <h4>⚔️ Encounter — Hard</h4>
  <div class="budget"><b>Budget check:</b> 1 Cult Fanatic (450) + 4 Cultists (4×25=100) + 1 Thug (100) = 650 base ×2 (6 monsters, 3–6 band) = <b>1,300 adjusted → Hard.</b> <i>Rescaled for 5 PCs — the Thug is now baseline. Even tougher? Add a 2nd Thug.</i></div>
  <p class="lbl">Roster &amp; tactics</p>
  <p>The <b>Cult Fanatic</b> overseer hangs back, opens with <b>hold person</b> on the heaviest hitter and <b>spiritual weapon</b>, uses <b>command (“flee”/“grovel”)</b> — he <i>inflicts</i>, never heals. The <b>Cultists</b> swarm and protect the still; the <b>Thug</b> holds the frontline and plinks casters/archers with his heavy crossbow.</p>
  <p><b>Terrain:</b> catch-buckets (difficult footing); the still is a hazard — a hit on it sprays scalding sap, <b>DC 13 Dex or 1d6 fire</b>.</p>
  <p><b>Morale:</b> when the overseer falls or cultists drop to <b>2</b>, survivors break and beg/flee — <b>a captured cultist is a goldmine</b> (the rite, the timing, Mother Sere at the grove).</p>
</div>

<div class="dm-only">
  {{SB:fanatic|1}}
  {{SB:cultist|4}}
  {{SB:thug}}
</div>

<div class="runfight dm-only">
  <h4>🎬 Run the fight — round by round</h4>
  <div class="initline">
    <span class="ini">Overseer <b>init +2</b></span>
    <span class="ini">Cultists <b>init +1</b> <span class="die">(one group roll)</span></span>
    <span class="ini">Thug <b>init +0</b></span>
    <span class="ini">⚠ Still hazard: a hit on it sprays scalding sap — <b>DC 13 Dex or 1d6 fire</b></span>
  </div>
  <div class="turns">
    <div class="turn-card">
      <h5>🔥 Harvest Overseer <span class="pri">Stays back · targets the strongest melee PC</span></h5>
      <ol>
        <li><b>Opens with</b> <i>hold person</i> on the party's heaviest hitter — <b>Wis save DC 11</b> or paralyzed (melee within 5 ft. auto-crits). Same turn, bonus action: <i>shield of faith</i> on self (+2 AC) or it's already up.</li>
        <li><b>Bonus action each turn:</b> <i>spiritual weapon</i> — floating blade, +3, <b>1d8+1 force</b>, flies to a backline caster.</li>
        <li><b>If a PC closes:</b> <i>inflict wounds</i> — melee spell +3, <b>3d10 necrotic</b> (his scariest hit). Otherwise <i>sacred flame</i> at range (Dex DC 11, 1d8, ignores cover) or <i>command</i> "flee"/"grovel" to peel someone off.</li>
        <li><b>He inflicts, never heals.</b> Dark Devotion = adv. vs. charm/fright.</li>
      </ol>
    </div>
    <div class="turn-card">
      <h5>🗡 Cultists ×4 <span class="pri">Screen the overseer &amp; the still</span></h5>
      <ul>
        <li><b>Scimitar</b> +3, <b>4 (1d6+1) slashing.</b> Form a wall between the party and the overseer / the crates.</li>
        <li>Fight in the catch-bucket clutter (difficult footing for chargers). No clever tricks — they're fodder with conviction.</li>
      </ul>
    </div>
    <div class="turn-card">
      <h5>🪓 Thug <span class="pri">Frontline muscle · ranged threat</span></h5>
      <ul>
        <li><b>Heavy Crossbow</b> +2, <b>5 (1d10) piercing</b> at range 100/400 — opens on a backline caster/archer before closing.</li>
        <li><b>Multiattack: two Mace</b> +4, <b>5 (1d6+2) bludgeoning</b> in melee. <b>Pack Tactics</b> — adv. if a cultist is adjacent to his target. 32 HP — he soaks a round the cultists can't.</li>
      </ul>
    </div>
  </div>
  <div class="rounds">
    <div class="rd"><b>Round 1</b> Overseer Holds the tank &amp; raises the blade; cultists line up at the still; the Thug opens with a crossbow bolt at a caster.</div>
    <div class="rd"><b>Rounds 2–3</b> Inflict wounds on anyone who reaches him; Command to split the party; cultists swarm.</div>
    <div class="rd"><b>Break</b> Overseer down <i>or</i> cultists cut to 2 → survivors beg/flee. <b>Capture one</b> → Clue 3 spills out.</div>
  </div>
  <div class="attable">
    <p class="lbl">🎲 At the table — the rolls, both sides</p>
    <div class="turns">
      <div class="turn-card q-you">
        <h5>🎲 You roll <span class="pri">cult dice & DCs</span></h5>
        <ul>
          <li><b>Overseer:</b> <i>hold person</i> → <b>"Wisdom save, DC 11"</b> (fail = paralyzed; melee within 5 ft. auto-crits, re-save at end of each of its turns). <i>inflict wounds</i> = spell attack d20 <b>+3</b> vs. AC → <b>3d10</b>. <i>sacred flame</i> → <b>"Dex save, DC 11"</b>, ignores cover. <i>spiritual weapon</i> +3 → 1d8+1 (bonus action).</li>
          <li><b>Cultists:</b> Scimitar <b>+3</b> → 1d6+1. <b>Thug:</b> two Maces <b>+4</b> → 1d6+2 (adv. via Pack Tactics if a cultist's adjacent), or Heavy Crossbow <b>+2</b> → 1d10.</li>
          <li><b>Still hazard:</b> a hit on the still → <b>"Dex save, DC 13"</b> for adjacent creatures → 1d6 fire.</li>
        </ul>
      </div>
      <div class="turn-card q-exp">
        <h5>🎯 Expect from the party <span class="pri">a real fight now</span></h5>
        <ul>
          <li><b>Attacks vs.</b> Cultist AC 12 · Overseer AC 13 · Thug AC 11.</li>
          <li>A held PC can't be freed by allies pulling — only a save or the caster losing concentration ends it. Expect them to <b>pile onto the Overseer</b> to break it. Reward that read.</li>
          <li>Crowd-control, smashing the still, sneaking a crate, or trying to <b>capture</b> a cultist. Say yes to capture — it's the payoff (Clue 3).</li>
        </ul>
      </div>
      <div class="turn-card q-rx">
        <h5>🔁 How to react <span class="pri">concentration & morale</span></h5>
        <ul>
          <li><b>Overseer concentrating</b> (hold person / spiritual weapon / shield of faith) takes damage → roll his <b>Con save, DC 10 or half the damage</b>; fail drops the spell (frees the held PC). Announce it — it makes "focus the caster" feel smart.</li>
          <li><b>Morale:</b> Overseer down <i>or</i> cultists cut to 2 → survivors beg / flee. Don't fight to the last fodder.</li>
          <li>Too easy vs. 5 PCs? Thug holds a round longer, or add a 2nd Thug. Too hard? Cultists break early.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="ra reveal"><span class="ra-label">Read — the camp breaks (a captured cultist)</span>The fight goes out of them the moment the overseer drops. The last grey-robe throws down a sap-slick blade and presses into the dirt, hands over his head. "Please — please, I only carry the crates," he babbles, eyes darting to the green-lit hollow uphill. "It's all up at the grove. Whatever you want to know — just don't put me in the ground."</div>
</div>

<div class="zone dm-only">
  <h4>📜 Clue 3 — the proof</h4>
  <div class="ra reveal"><span class="ra-label">Cracking a crate / reading the brand — automatic, sets Clue 3</span>“Inside the iron crate, glass vials nest in straw, each full of that slow green light — <b>heart-sap</b>, thick as honey and faintly <i>pulsing.</i> Every crate, every tool, every grey robe wears the same mark: a <b>withered crown.</b> Whatever's been taking folk on the road, <i>this</i> is what they died to hide — someone is bleeding the wood dry on purpose, and they wanted a ‘beast’ blamed for it.”</div>
  <div class="check">
    <div class="ck-head"><span class="ck-name">What it is (optional)</span> <span class="dc easy">DC 13</span> <span class="pill">Nature / Arcana / Religion</span></div>
    <div class="hit"><b>Hit, read:</b> <span class="q">“This is the wood's own life, distilled — heartwood's vital force boiled down. Drink enough and you might cheat death itself. No wonder they'd burn a forest for it.”</span></div>
    <div class="miss"><b>Miss:</b> <span class="q">“It reeks of sap and something sweetly wrong — you can't name the magic, but your gut says it shouldn't exist.”</span></div>
  </div>
  <div class="check">
    <div class="ck-head"><span class="ck-name">A captured / cornered cultist</span> <span class="dc easy">DC 13</span> <span class="pill">Intimidation / Persuasion</span></div>
    <div class="hit"><b>Hit, read (cultist, babbling):</b> <span class="q">“Please — I only carry crates! The Mother's at the grove, finishing the <b>Great Harvest</b> — by <b>dusk on the third day</b> she drinks the last of it and never dies. The thing in the wood? We <b>made</b> that story. We needed it dead before the harvest was done, so we sent for hunters. You. You were meant to do it for us.”</span></div>
    <div class="miss"><b>Miss / clams up:</b> they spit and say nothing — but their eyes flick to the grove, and every loaded cart points the same way.</div>
  </div>
</div>

<div class="zone dm-only">
  <h4>↔️ Avenues · Bypass · Exit</h4>
  <p class="lbl">Avenues</p>
  <p><span class="pill">fight</span><span class="pill">Stealth past to steal a crate (vs passive Perception 10/11)</span><span class="pill">pose as buyers/initiates — Deception DC 15</span><span class="pill">sabotage the still (Clue 3 + a distraction)</span></p>
  <p class="lbl">Bypass ⬡</p>
  <p>If cut: the camp is found <i>already struck</i> — stumps, a dropped crate of heart-sap, and a dying/captured cultist who gasps the truth (Clue 3 handed over free).</p>
  <p class="lbl">Exit / lead</p>
  <p>The crates' brand + a cultist's words point to <b>the grove</b>, where <b>Mother Sere</b> performs the <b>Great Harvest</b> at dusk (Scene 4 → Showdown).</p>
</div>`
    },

/* ---------- SCENE 4 ---------- */
    { id:"scene4", nav:"Scene 4 · Warded Grove", icon:"🗿", name:"Scene 4 — The Warded Grove", play:true, tag:"MODULAR", type:"exploration / puzzle", time:"~30 min",
  subtitle:"Both paths funnel here — the approach to the Showdown.",
  loot:[
    {id:"s4-charm",  name:"Heartwood Charm",   rarity:"uncommon", qty:1, note:"Hidden in the warded hollow, revealed by setting the stone Crown right. While held: advantage on saves vs. charmed and frightened, and 1/day cast barkskin on yourself (AC 16, no concentration)."},
    {id:"s4-potion", name:"Potion of Healing", rarity:"common",   qty:1, note:"An old offering left in the hollow. Regain 2d4+2 HP."}
  ],
  readAloud:[
    {label:"🎬 Scene 4 — the scene at a glance (your eyes only)", text:`<p style="opacity:.7"><i>Not read aloud — your orientation. Both paths funnel here, the approach to the Showdown.</i></p>
      <p>A <b>fey-warded</b> grove; crossing it is a <b>skill challenge / rune-riddle</b> (the Weeping Crown). The carvings reveal the <b>guardian's nature</b> (an old, grieving protector that takes only those who wound the wood) and reinforce Clue 1/2 — but old stone can't name the modern cult, so this is <b>not the full Key</b>.</p>
      <p><b>Never a dead end:</b> a stuck party always gets through — only the <b>edge</b> is at stake (a free surprise round, or advantage reaching the guardian; the full 5-leaf crown, with the Key, makes them “recognized”). The rite-clock keeps ticking while they puzzle.</p>
      <p>Cipher, run-steps, and the full solution are on the DM-notes face. <b>Solution: Oak 1 · Hazel 2 · Blackthorn 3 · Yew 4 · Willow 5.</b></p>`},
    {label:"📖 The warded ring (the arrival)", text:`The air thickens, sweet and grievous, and the world stops behaving. Ahead, a ring of <b>standing stones</b> leans around the oldest trees you have ever seen — and the way between them <i>shifts</i>: a path doubles back on itself, a fallen log becomes a yawning ravine, birdsong loops like a stuck bell, and faint music drifts with no source. Old <b>fey wards</b> still guard this place, tangled now with the wood's grief. Each leaning stone is cut with a single deep, antler-straight <b>tree-rune</b>; on the nearest, worn carvings catch the green light — a great tree <b>crowned in leaves</b>, a procession of small robed keepers, and, over and over, others laid into the earth. At the centre, a <b>stone crown of five leaves</b> lies toppled and scattered in the moss, its ward humming wrong.<br><span style="opacity:.65">(DM: the Scene 4 image. Crossing is the rune-riddle below — reinforces Clue 1/2 and the guardian's nature, not the full Key.)</span>`},
    {label:"📖 The crown speaks — the riddle's challenge (read)", text:`“Read me true, axe-bearer. I will <b>name</b> you nothing — not a tree, not a number. My stones speak only in the old <b>kennings</b>, and never in the order grief fell. Read the wood-runes, learn what each leaf means, weigh my five stones against one another, and lay each leaf where it belongs. Lay them wrong, and the wood will turn you in circles till you do.”`},
    {label:"📖 The game, in plain terms (say to the table — so no one's lost)", text:`<p>“Let me lay the puzzle out plainly, so you know exactly what you're solving. In front of you is the grove's broken crown — <b>five stone leaves</b>, fallen out of order. Your goal: <b>lay the five leaves back on the crown in the right order, first to last.</b> You work out two things:</p>
      <p><b>1) What each leaf is.</b> Every leaf is carved with a <b>rune</b> — a letter from an old tree-alphabet. Read the runes and you'll know which leaf is which. Here's the key:</p>
      <ul style="list-style:none;padding-left:.4rem;margin:.3rem 0">
        <li>ᚇ <b>Oak</b> — the heart, the crown</li>
        <li>ᚉ <b>Hazel</b> — wisdom, the keepers</li>
        <li>ᚎ <b>Blackthorn</b> — thorns, the wood's hand</li>
        <li>ᚔ <b>Yew</b> — death &amp; the undying</li>
        <li>ᚄ <b>Willow</b> — grief, the weeping</li>
      </ul>
      <p>So your five leaves are <b>the heart, the keepers, the wood's hand, the undying,</b> and <b>the weeping.</b></p>
      <p><b>2) What order they go in.</b> The <b>five standing stones</b> around you each murmur one clue about the order — but they never name a tree or a number, and they're shuffled. Match each clue to a leaf, chain the clues together, and the order falls out.</p>
      <p>Talk it through out loud — as you settle on a leaf, I'll set it on the crown, and you can move them until it's right. Get all five and the crown greens and the way opens; get it wrong and the wood turns you in circles to try again.”</p>
      <span style="opacity:.65">(DM: read/paraphrase this so nobody's lost — it's the point of this beat. Give the rune key as a prop (default), or withhold it for a harder puzzle. They reason aloud; you place the leaves on the crown. Solution + per-roll handling on the DM-notes face.)</span>`},
    {label:"📖 The five stones — your five ordering clues (read slowly; each stone = one clue about the order)", text:`Five voices that are the whole grove at once sigh through the branches, one from each leaning stone. <b>Not one names a tree</b> — each speaks only the kenning its rune carries, and they do not answer in order:<br>• “Last of all, and <i>alone</i>, comes the <b>weeping</b> — it cannot fall until the whole tale is already told.”<br>• “The <b>keeper</b> never leaves the heart's side. It stands the very <i>next</i> after the root of all, and no grief is laid between them.”<br>• “The <b>heart</b> wakes first of all, for nothing green takes root before it.”<br>• “The <b>undying</b> reaches in to steal back what the thorns dragged down. Its theft comes <i>after</i> the wood's hand — yet it is <i>not</i> the last to be laid.”<br>• “The wood's own <b>hand</b> wakes only once the keepers are gone. It answers the keeper at once, with <i>none</i> set between.”<br><span style="opacity:.65">(DM: each stone is one ordering clue. Reward correct reasoning with no die. Solution: <b>Oak 1 · Hazel 2 · Blackthorn 3 · Yew 4 · Willow 5</b>.)</span>`},
    {label:"📖 When they solve it — the carvings come clear (read on success)", text:`“The worn carvings come clear as you pass. A great tree with a grieving face, <b>crowned in living leaves</b>, sheltering generation upon generation of small robed keepers who leave bread at its roots. Then others: figures who come bearing <b>axes</b> — and are <b>pulled down into the earth.</b> Last of all the tree stands alone, weeping, its branches bare and its <b>leaf-crown broken and fallen.</b> This is no beast's den. It is a <b>grave-keeper</b>, old as the wood, and it strikes only those who <i>wound</i> it.”<br><span style="opacity:.65">(DM: read on success — the crown greens, the ward opens, and they cross surefooted, forewarned, and earn the edge. 3 failures → the “hard way” (1d6 psychic, off-balance, no edge) on the DM-notes face.)</span>`},
    {label:"📖 Onward — into the grove (read as they cross)", text:`Beyond the last stone the wards fall away, and the grove itself opens before you — the green-lit heart of the wood, and whatever waits at its centre.<br><span style="opacity:.65">(DM: straight into the Showdown — carry over the edge (surprise round / advantage / “recognized” if they hold the Key + the full crown).)</span>`}
  ],
  body:`
<div class="zone dm-only">
  <h4>🎭 Setup / DM notes</h4>
  <p>A <b>fey-warded</b> grove approach — illusion and shifting paths protect the sacred heart. Crossing it is a <b>skill challenge</b>; the standing-stone carvings hold the grove's <i>ancient</i> story.</p>
  <p><b>🔎 Clues here:</b> <i>no new numbered clue</i> — the carving <b>reinforces Clue 1/2</b> and reveals the guardian's nature (a nudge toward mercy, <b>not</b> the Key).</p>
</div>
<div class="callout dm-only"><b>▸ What the carvings are (and aren't).</b> They reveal the <b>guardian's nature</b> — an old, grieving protector that takes only those who <i>harm</i> the wood. But they're cut in <b>old stone, so they can't show the modern Withering cult.</b> They <b>reinforce</b> the truth; they are <b>not the full Key.</b> A party with no Clue 3 or 4 still arrives <b>without the Key → Version A / Ending A.</b></div>

<div class="zone">
  <h4>🧩 The Weeping Crown — the rune-riddle at the warded ring</h4>
  <p>At the heart of the standing stones lies the grove's broken emblem: a <b>stone crown of five leaves</b>, toppled and scattered, its ward humming wrong. Each fallen leaf bears a single deep-cut <b>tree-rune</b> (Ogham — the old wood-alphabet) and a worn scene the years have all but erased; ringing them, <b>five leaning stones</b> each murmur a line of the grove's grief. The leaves don't announce themselves — the party must <b>read the runes</b> to know which leaf is which, then <b>weigh the five stones</b> to find their order. Lay them right and the crown greens, the ward opens, and the wood marks you as one who <i>understands</i>.</p>
  <div class="crown-verse">“Read me true, axe-bearer. I will <b>name</b> you nothing — not a tree, not a number. My stones speak only in the old <b>kennings</b>, and never in the order grief fell. <b>Read the wood-runes, learn what each leaf means, weigh my five stones against one another,</b> and lay each leaf where it belongs. Lay them wrong, and the wood will turn you in circles till you do.”</div>

  <div class="rune-cipher">
    <div class="rune-cipher-lbl">🪶 The wood-runes carved round the ring — the cipher (show or read to the players)</div>
    <div class="rune-row">
      <div class="rune-cell"><span class="rune-glyph">ᚇ</span><b>Dair</b> · Oak<br><span class="rune-q">the heart · the crown</span></div>
      <div class="rune-cell"><span class="rune-glyph">ᚉ</span><b>Coll</b> · Hazel<br><span class="rune-q">wisdom · the keepers</span></div>
      <div class="rune-cell"><span class="rune-glyph">ᚎ</span><b>Straif</b> · Blackthorn<br><span class="rune-q">thorns · the wood's hand</span></div>
      <div class="rune-cell"><span class="rune-glyph">ᚔ</span><b>Iodhadh</b> · Yew<br><span class="rune-q">death &amp; the undying</span></div>
      <div class="rune-cell"><span class="rune-glyph">ᚄ</span><b>Saille</b> · Willow<br><span class="rune-q">grief · weeping</span></div>
    </div>
  </div>

  <div class="ra reveal"><span class="ra-label">Read — the five stones speak (the riddle)</span>As you step into the ring the carvings <i>stir,</i> and five voices that are the whole grove at once sigh through the branches, one from each leaning stone. <b>Not one names a tree</b> — each speaks only the kenning its rune carries, and they do not answer in order:
    <ol class="stone-riddle">
      <li>“Last of all, and <i>alone</i>, comes the <b>weeping</b> — it cannot fall until the whole tale is already told.”</li>
      <li>“The <b>keeper</b> never leaves the heart's side. It stands the very <i>next</i> after the root of all, and no grief is laid between them.”</li>
      <li>“The <b>heart</b> wakes first of all, for nothing green takes root before it.”</li>
      <li>“The <b>undying</b> reaches in to steal back what the thorns dragged down. Its theft comes <i>after</i> the wood's hand — yet it is <i>not</i> the last to be laid.”</li>
      <li>“The wood's own <b>hand</b> wakes only once the keepers are gone. It answers the keeper at once, with <i>none</i> set between.”</li>
    </ol>
    <i style="opacity:.8">(To read a stone you must first know which leaf it means — match each kenning to a rune, and the rune to its tree.)</i>
  </div>
  <p style="font-size:.85rem;color:var(--muted);margin:.4rem 0 0">Tap a fallen leaf to set it on the crown; tap a placed leaf to take it back; nudge it with ◀ ▶. The crown checks itself — when it's whole, the ward opens. <span class="dm-only">(Drive it with the skill challenge below — each success decodes a rune or seats a leaf — or just let the players reason it out and click.)</span></p>
  <div id="crownPuz"></div>
</div>

<div class="zone secret dm-only">
  <h4><span class="dm-tag">DM — SOLUTION &amp; THE CROWN'S KEY LEAF</span> 🔑 How the rune-riddle solves</h4>
  <p><b>Step 1 — decode the runes</b> (which leaf is which). Each Ogham rune names a tree, and the tree names the scene:</p>
  <table class="tbl">
    <tr><th>Rune</th><th>Tree</th><th>The leaf it marks</th></tr>
    <tr><td style="text-align:center;font-size:1.3rem">ᚇ <span style="font-size:.8rem">Dair</span></td><td>Oak</td><td>🌿 <b>The Living Crown</b> — the great tree crowned in living leaves, the wood green and whole.</td></tr>
    <tr><td style="text-align:center;font-size:1.3rem">ᚉ <span style="font-size:.8rem">Coll</span></td><td>Hazel</td><td>🍞 <b>The Keepers' Gift</b> — robed wardens (the grove-wardens <b>before Fenn</b>) leave bread at its roots.</td></tr>
    <tr><td style="text-align:center;font-size:1.3rem">ᚎ <span style="font-size:.8rem">Straif</span></td><td>Blackthorn</td><td>🪓 <b>The Axe-Bearers</b> — those who come to <i>take</i> are dragged into the earth <i>(Clues 1 &amp; 2 — it strikes only those who wound it).</i></td></tr>
    <tr><td style="text-align:center;font-size:1.3rem"><span class="leaf-key">ᚔ <span style="font-size:.8rem">Iodhadh</span></span></td><td>Yew <span class="pill">death &amp; the undying</span></td><td><span class="leaf-key">👑 <b>The Stolen Crown</b></span> — grey-robes cut the crown away, branded and withered, to buy a life that never ends. <b>The Key leaf.</b></td></tr>
    <tr><td style="text-align:center;font-size:1.3rem">ᚄ <span style="font-size:.8rem">Saille</span></td><td>Willow</td><td>💧 <b>The Weeping</b> — the tree alone, crown broken and fallen, bleeding sap. <i>(Now.)</i></td></tr>
  </table>
  <p><b>Step 2 — decode the kennings, then chain the stones.</b> The stones never name a tree or a number — each speaks only a <i>kenning</i> the rune-cipher decodes: <b>heart → Oak, keeper → Hazel, wood's-hand → Blackthorn, undying → Yew, weeping → Willow.</b> Map those, then chain the constraints (note the stones are read out <i>shuffled</i>, not in answer order — that's the trap the old verse fell into):</p>
  <ol style="margin:.2rem 0 .4rem">
    <li>“The <b>heart</b> wakes first” → <b>Oak = 1st.</b></li>
    <li>“The <b>keeper</b> stands the very next after the heart, none between” → <b>Hazel = 2nd</b> (immediately after Oak).</li>
    <li>“The wood's <b>hand</b> answers the keeper at once, none between” → <b>Blackthorn = 3rd</b> (immediately after Hazel).</li>
    <li>“Last of all, alone, the <b>weeping</b>” → <b>Willow = 5th.</b></li>
    <li>“The <b>undying's</b> theft comes after the hand, yet <i>not</i> last” → the only slot left is <b>Yew = 4th.</b></li>
  </ol>
  <p style="font-size:.85rem;color:var(--muted);margin:.1rem 0 .3rem"><b>Why it's hard now:</b> three layers stack — decode 5 Ogham runes, translate 5 kennings to those trees, then chain two “immediately-after” links off the heart and resolve Yew by “after-but-not-last.” No stone hands out a bare position for Hazel, Blackthorn or Yew. If your table is flying, also withhold the cipher (Layer 1 below) so they must crack the runes cold.</p>
  <p style="margin:.2rem 0"><b>→ Solution: ᚇ🌿 Oak (1) · ᚉ🍞 Hazel (2) · ᚎ🪓 Blackthorn (3) · <span class="leaf-key">ᚔ👑 Yew (4)</span> · ᚄ💧 Willow (5).</b></p>
  <div class="callout"><b>The 4th leaf is the Key in puzzle form.</b> The <span class="leaf-key">Yew / Stolen-Crown</span> leaf — Stone 5's "that one … steal the crown away" — is the one a party <b>cannot truly read without the Key</b> (Clue 3 or 4): old stone can't name the modern cult, and the Yew's double meaning (<i>death</i> &amp; <i>the undying</i>) is exactly Mother Sere's rite. So:
    <ul style="margin:.4rem 0 0">
      <li><b>No Key:</b> the structure still hands them slot 4 <i>by elimination</i> — but its carving stays a <b>cracked, unreadable stone.</b> They seat the four <i>grief</i> leaves, the ward opens, and a <b>visible gap</b> remains where the truth should be. Let it nag — it pays off at Mother Sere's dead-branch crown.</li>
      <li><b>With the Key:</b> the Yew leaf is readable. Complete all five and the grove <b>recognizes</b> them — the same emblem now seen <i>living → branded → worn dead.</i></li>
    </ul>
  </div>
  <p style="font-size:.85rem;color:var(--muted)">The crown reads the live <b>clue tracker</b>: tick Clue 3 or 4 and the Yew (stolen-crown) leaf unlocks automatically. The "💡 DM: reveal the order" button on the crown gives you the full answer at the table.</p>
</div>

<div class="zone dm-only">
  <h4>🎲 How to run the rune-riddle (drives the crown)</h4>
  <p>Run it as a <b>two-layer skill challenge</b> — <i>decode</i>, then <i>deduce</i> — so it rewards heads <b>and</b> dice. It is <b>modular &amp; never a dead end</b> (MMOS): a stuck party always gets through — only the <b>edge</b> is at stake, and the rite-clock keeps ticking while they puzzle.</p>
  <ol>
    <li><b>Name the goal &amp; stakes:</b> read the crown right and cross with the grove's blessing — or be turned in circles and stumble in <i>off-balance</i> (and the rite ticks on).</li>
    <li><b>Layer 1 — read the runes</b> (which leaf is which). <b>History / Arcana / Nature / Investigation DC 15.</b> Each success identifies a leaf's tree (hand them one rune from the cipher). A natural reader — druid, ranger, an elf or Outlander — may get one free.</li>
    <li><b>Layer 2 — weigh the stones</b> (the order). <b>Insight / Investigation / Religion DC 15.</b> Each success locks one stone's clue → seats or rules out a leaf. <b>Reward reasoning over rolls:</b> if a player <i>argues the logic correctly out loud</i>, that beat seats the leaf with no die.</li>
    <li><b>Narrate every roll:</b> a hit reads a rune or seats a leaf (click it into place); a miss = a looping path, a false floor, birdsong that resets, a leaf laid wrong.</li>
    <li><b>Resolve:</b> the <b>four grief leaves seated</b> → the ward opens (the crown checks itself). <b>Or 3 failures</b> → through the <i>hard</i> way, off-balance (no edge). <b>Never a dead end.</b></li>
  </ol>
  <p style="font-size:.85rem;color:var(--muted)">Holding the <b>Key</b> (Clue 3/4)? The <span class="leaf-key">Yew / stolen-crown</span> leaf is also readable — a 5th success (or a beat of recognition) seats it for the full, <i>recognized</i> crown.</p>
  <div class="callout"><b>🪶 Dial the difficulty.</b> <b>Harder (your 5-player table wants a real head-scratcher):</b> hand them the rune cipher + the five stone-lines as a prop and make them solve it <i>cold</i> — no Layer-1 rolls — or withhold the cipher entirely so they must crack the Ogham runes first, or hide the “heart wakes first” anchor-stone behind a <b>Perception DC 15</b> (moss-grown) so they must derive the start from the adjacency chains alone. <b>Easier / short on time:</b> give the cipher free, run only Layer 2, or skip to the single <b>Nature/Arcana DC 15</b> bypass below. <i>(Two-clue tip from forest-puzzle lore: leave a little redundancy so the table lands ~70% of the time — the heart-first and weeping-last anchors plus the two adjacency stones <b>over-determine</b> the middle, so a party that misreads one stone can still recover the order.)</i></div>
  <p class="lbl">Skill avenues — DC 15 each</p>
  <p><span class="pill">History / Arcana — read the Ogham runes</span><span class="pill">Nature / Survival — name the trees · true ground from illusion</span><span class="pill">Insight / Religion — weigh the grief-riddle</span><span class="pill">Investigation / Perception — find &amp; read the worn stone-lines</span><span class="pill">Athletics / Acrobatics — clear a ravine / grasping roots</span></p>
</div>

<div class="zone dm-only">
  <h4>✅ Outcome — 4 successes (they cross)</h4>
  <p>They reach the grove <b>surefooted and forewarned</b>, and the stones tell it plainly.</p>
  <div class="ra reveal"><span class="ra-label">Read</span>“The worn carvings come clear as you pass. A great tree with a grieving face, <b>crowned in living leaves</b>, sheltering generation upon generation of small robed keepers who leave bread at its roots. Then others: figures who come bearing <b>axes</b> — and are <b>pulled down into the earth.</b> Last of all the tree stands alone, weeping, its branches bare and its <b>leaf-crown broken and fallen.</b> This is no beast's den. It is a <b>grave-keeper</b>, old as the wood, and it strikes only those who <i>wound</i> it.”</div>
</div>
<div class="callout danger dm-only"><b>🔗 DM-only — the crown links the scenes.</b> The tree's <b>living leaf-crown</b> is the grove's own emblem. A party that has seen the <b>Scene 3 crates</b> (the <i>withered</i>-crown brand) — or who later sees <b>Mother Sere's crown of dead branches</b> at the Showdown — can realize the Withering <b>stole the grove's crown and killed it:</b> the same symbol in three stages — <i>living → branded → worn dead.</i> Not a standalone Key. The carved <b>robed keepers</b> are the line of <b>grove-wardens before Fenn</b> — she is the last of them.</div>

<div class="zone secret">
  <h4><span class="dm-tag">REWARD</span> ⭐ The edge — when the ward opens (4-leaf crown)</h4>
  <p>The party may <b>act first at the Showdown</b> (a free surprise round <i>before</i> initiative), <b>or</b> take <b>advantage on their first attempt to reach / plead with the guardian.</b></p>
  <p style="margin-top:.4rem"><b>👑 Recognized (full 5-leaf crown — needs the Key):</b> the grove knows them. Grant <b>both</b> edges <i>and</i> the Guardian's plea lands warmer — a PC who lays down arms reaches Sorrowroot with no roll even on the journal-only path.</p>
</div>
<div class="zone dm-only">
  <h4>❌ Outcome — 3 failures (the hard way)</h4>
  <p>The wards turn on them — <b>1d6 psychic</b> each (grief made manifest), the carvings stay a blur, and they spill into the Showdown <b>off-balance</b> (no edge; the rite/guardian is already mid-action).</p>
  <p class="lbl">Bypass ⬡</p>
  <p>A single <b>Nature or Arcana DC 15</b> walks the party through and gives the gist — the <b>guardian's nature only</b>, not the cult.</p>
  <p class="lbl">Exit / lead</p>
  <p>Beyond the stones, the <b>grove itself</b> — and the Showdown.</p>
</div>`
    },

/* ---------- SHOWDOWN ---------- */
    { id:"showdown", nav:"Showdown", icon:"🌳", name:"The Showdown — The Weeping Grove", play:true, tag:"CORE", type:"climax", time:"~45–60 min",
  loot:[
    {id:"sd-ring",      name:"Ring of Mind Shielding",  rarity:"uncommon", qty:1, note:"Mother Sere's ring — how she hid her schemes from divination. Immune to mind-reading; can hide your thoughts and alignment at will."},
    {id:"sd-hoard",     name:"Mother Sere's hoard",     rarity:"coin",     qty:1, note:"2× Potion of Healing, a 100 gp gemstone, and ~80 gp in coin."},
    {id:"sd-sprig",     name:"Sprig of the Sorrowroot", rarity:"uncommon", qty:1, note:"Ending B (the Guardian saved) — its grateful gift. 1/day cast goodberry; while you carry it you can't be surprised in a natural forest."},
    {id:"sd-heartwood", name:"Sorrowroot Heartwood",    rarity:"trophy",   qty:1, note:"Ending A (the Guardian slain) — a sorrowful trophy of living heartwood. One free casting of speak with plants; prized druidic crafting wood."}
  ],
  readAloud:[
    {label:"🎬 The Showdown — the scene at a glance (your eyes only)", text:`<p style="opacity:.7"><i>Not read aloud — your orientation. They cross from Scene 4 into the grove's heart, the Great Harvest at its climax.</i></p>
      <p><b>The Key decides who you fight</b> — same mechanics, different flavor:</p>
      <p>• <b>No Key → Version A:</b> the party fights the grieving Guardian itself (Deadly; your biggest TPK risk — it grapples + Engulfs, <b>heals from lightning</b>, resists cold &amp; fire).<br>• <b>Key → Version B:</b> the party turns the Guardian on the cult — Mother Sere + cultists are the enemy, the Guardian fights as your <b>ally</b> (Deadly but heroic; 3-round rite clock).</p>
      <p><b>Clue 5 = the Guardian's plea + vision</b> is the fail-safe: whatever path they took, it speaks first and any PC may try to reach it — even a kill-first party gets one last chance to flip. Pick the version live on the DM-notes face (it follows the clue tracker). Carry over any edge from Scene 4.</p>`},
    {label:"📖 The grove at the climax (the opener)", text:`The grove opens like a wound. At its heart the greatest tree of all has half torn <i>itself</i> from the earth — bark gnarled into a vast, grieving face set with too many sorrowful eyes, its roots dragging up soil churned with cut stumps and pale bones. Around its feet, robed figures chant over a fire of cold <b>green flame</b>; and beside it a withered woman in a <b>crown of dead branches</b> lifts a vial of glowing sap to her lips. The great tree turns its slow, sorrowing face toward you. <i>“Another axe,”</i> it says, in a voice like splitting heartwood. <i>“Have you come to cut me too?”</i><br><span style="opacity:.65">(DM: the Showdown image — the many-eyed grieving treant, the green ritual fire, Mother Sere drinking the vial, bones at the roots. The Guardian speaks first — the vision &amp; plea, next beat.)</span>`},
    {label:"📖 Before initiative — the Guardian's vision & plea (Clue 5, the fail-safe — read whatever path they took)", text:`The tree's sorrow washes over you as a <i>seeing:</i> this grove green and singing, small keepers leaving bread at its roots — then the axes come, the green goes grey, and one by one its children are laid in the earth. The vision breaks. <i>“I was the keeping-place of this wood. I took only those who came to <b>wound</b> it. Now they bleed my heart into their vials and send me killers wearing the faces of heroes. If you too have come for my heartwood — strike; I am so tired. But if you have eyes to see who truly holds the axe… lay down your blade, and help me.”</i><br><span style="opacity:.65">(DM: read whatever path they took — the vision, then the plea (Clue 5). With the Key or naming the cult → Version B (next beat); without → it attacks, Version A. With Fenn's full Key, a PC who lays down arms reaches it automatically — no roll.)</span>`},
    {label:"📖 If they have the Key / name the cult — the Guardian turns to wrath → Version B (read)", text:`Its grief hardens into something older and colder, and it turns its great head toward the woman in the crown of dead branches. <i>“Then I am not alone. Stand with me — and we will end the ones who did this.”</i><br><span style="opacity:.65">(DM: → Version B. The Guardian becomes your ally and focuses Mother Sere; cultists + Mother Sere are the enemy. Switch the DM-notes face to Ver B.)</span>`},
    {label:"📖 If they don't reach it — it attacks → Version A (read)", text:`The slow eyes find only more armed strangers, and the last hope goes out of them. <i>“…Another axe. So be it.”</i> Its roots tear free of the earth with a sound like a forest falling.<br><span style="opacity:.65">(DM: → Version A (fight the Guardian). The flip stays open every round — lowering weapons or Persuasion DC 20 turns it to Version B. Mind the TPK valves on the DM-notes face.)</span>`},
    {label:"📖 When it ends — to the ending that fits (your eyes only)", text:`<p style="opacity:.7"><i>Not read aloud.</i> When the last enemy falls, go to the <b>Endings</b> beat and read the one that fits:</p>
      <p>• <b>Version A</b> (Guardian slain, no Key) → <b>Ending A</b> + Wren's bones.<br>• <b>Version B</b> (Mother Sere falls, Key) → <b>Ending B</b> + Wren comes home.</p>
      <p>Then close the night on the <b>hook</b>.</p>`}
  ],
  body:`
<div class="zone dm-only">
  <h4>🎭 Setup</h4>
  <p>The <b>Great Harvest</b> at its climax: <b>Mother Sere</b> is about to complete her immortality rite, and the grove's <b>Guardian</b> stands maddened with grief. <b>The Key decides who you fight.</b> Keep the mechanics the same; change the flavor.</p>
  <p><b>🔎 Clues here:</b> <b>Clue 5 = the Guardian's plea + vision</b> — the fail-safe: even a kill-first party gets one last chance to flip.</p>
</div>
<div class="callout dm-only"><b>🔗 Links:</b> Mother Sere's <b>crown of dead branches</b> = the grove's leaf-crown (S4) withered into the cult's brand (S3) — <i>living → branded → worn dead.</i> The <b>vial of glowing sap</b> is the <b>heart-sap</b> distilled at the camp. The <b>Guardian</b> is <b>Sorrowroot</b> — the oak figure Fenn keeps whittling.</p></div>

<div class="zone secret">
  <h4><span class="dm-tag">CLUE 5 · FAIL-SAFE</span> Before initiative — the Guardian pleads</h4>
  <p>Whatever path they took, the Guardian — <b>Sorrowroot</b> — <i>speaks first</i> and shows a <b>vision</b> (free action). <b>Any PC may try to reach it</b> — Persuasion/Insight, or simply lowering weapons.</p>
  <div class="ra reveal"><span class="ra-label">Read — the vision, then the plea (Clue 5)</span>The tree's sorrow washes over you as a <i>seeing:</i> this grove green and singing, small keepers leaving bread at its roots — then the axes come, the green goes grey, and one by one its children are laid in the earth. The vision breaks. <i>“I was the keeping-place of this wood. I took only those who came to <b>wound</b> it. Now they bleed my heart into their vials and send me killers wearing the faces of heroes. If you too have come for my heartwood — strike; I am so tired. But if you have eyes to see who truly holds the axe… lay down your blade, and help me.”</i></div>
  <p style="margin-top:.5rem"><b>If the party has the Key</b> (Fenn's truth <i>or</i> the heart-sap proof; S4's carvings reinforce but don't supply it alone) → they name the real enemy. Grief turns to <b>wrath at the cult</b> → <b>Version B.</b> Read: <i>“Then I am not alone. Stand with me — and we will end the ones who did this.”</i> <i>(With Fenn's full Key, a PC who simply lays down arms and grieves reaches the Guardian <b>automatically — no roll</b>.)</i></p>
  <p><b>If they don't</b> → the Guardian, seeing only more armed strangers, attacks → <b>Version A.</b> Read: <i>“…Another axe. So be it.”</i> Its roots tear free. <i>(A lone PC can still attempt <b>DC 20 Persuasion</b> to flip it mid-fight.)</i></p>
</div>

<div class="dm-only">
  <p class="lbl">Pick the version live (set by the clue tracker)</p>
  <div class="ver-toggle" role="group" aria-label="Showdown version">
    <button data-ver="A" id="verA">⚔ Version A — “The Beast” (no Key)</button>
    <button data-ver="B" id="verB">🤝 Version B — “The True Harvest” (has Key)</button>
  </div>
  <div class="ver-hint" id="verHint"></div>

  <div class="ver-block" data-verblock="A">
    <div class="zone">
      <h4>Version A — “The Beast” (no Key) · Deadly</h4>
      <p>The party fights the <b>Guardian</b> itself. Tragic: they “win the quest” by killing the grove's wounded protector; the cult slips away to finish elsewhere.</p>
      <div class="budget"><b>Budget check:</b> Guardian (Shambling Mound, 1,800) + 6 thorn-spawn (Twig Blights, 25 ea — <i>ignored for the multiplier</i>) ≈ <b>1,950 adjusted → Deadly</b> (5-PC Deadly = 2,000). <i>Rescaled for 5: extra thorn-spawn fix the action economy vs a lone boss.</i></div>
      <p><b>Tactics:</b> the Guardian <b>grapples + Engulfs</b> the heaviest-armored PC (rooting them in living wood), slams the rest; thorn-spawn harry the backline. <b>Immune to lightning (absorbs it), resists cold &amp; fire</b> — note this before a caster wastes a <i>fireball</i>. It fights with grief, not malice: if reduced low it <i>keens</i> and gives one more chance to stop (a final <b>Persuasion DC 20</b> can still flip to Version B).</p>
    </div>
    <div class="callout danger"><b>▸ Running Version A safely — your biggest TPK risk.</b> A near-solo CR 5 Engulfer (~1,950 with 6 thorn-spawn, vs the 2,000 Deadly line for 5 PCs) that can take a PC out of the fight. Keeping it survivable is by design:
      <ul style="margin:.4rem 0 0">
        <li><b>Grief, not bloodlust.</b> It doesn't chase fleeing PCs or finish the downed; it grapples and Engulfs to <b>stop</b> them, keening the whole time.</li>
        <li><b>Engulf has an exit.</b> Only <b>one</b> creature at a time; <b>escape DC 14</b>, or free them by dropping it low. A PC at 0 HP inside it still makes <b>death saves</b>.</li>
        <li><b>The flip is always open.</b> Any round, lowering weapons or a <b>DC 20 Persuasion</b> ends it into Version B (Sorrowroot becomes an ally).</li>
        <li><b>Dial it live (both ways).</b> Boss dropping too fast vs 5 PCs? Give it <b>+20–25 HP (≈160)</b> or a bonus-action <b>“grasping roots”</b> (grapple a 2nd PC, no damage). Table on the ropes? Cut a thorn-spawn or two, or Engulf-and-<i>hold</i> a downed PC “in the roots” (no damage) instead of crushing.</li>
      </ul>
    </div>
    {{SB:mound}}
    {{SB:twig|6}}
    <div class="runfight">
      <h4>🎬 Run Version A — the grieving Guardian</h4>
      <div class="initline">
        <span class="ini">Sorrowroot <b>init −1</b> <span class="die">(slow — the party usually acts first; good, give them agency)</span></span>
        <span class="ini">Thorn-spawn <b>init +1</b></span>
        <span class="ini">⚡ <b>Heals</b> from lightning · resists cold &amp; fire — say so before a caster wastes a spell</span>
      </div>
      <div class="turns">
        <div class="turn-card">
          <h5>🌳 Sorrowroot, the Guardian <span class="pri">Grapples the heaviest-armored PC</span></h5>
          <ol>
            <li><b>Multiattack:</b> two <b>Slams</b> +7, <b>13 (2d8+4)</b> each. If <i>both</i> hit a Medium-or-smaller target → <b>grappled (escape DC 14)</b> and it <b>Engulfs</b> them.</li>
            <li><b>Engulf:</b> target is <b>blinded, restrained, can't breathe</b> — <b>DC 14 Con</b> at the start of the mound's turns or <b>2d8+4</b>. One PC at a time; it moves with the mound.</li>
            <li><b>Grief, not malice.</b> It doesn't chase fleers or finish the downed — it grapples to <b>stop</b> "the axes," keening the whole time. A PC at 0 inside it still rolls death saves.</li>
          </ol>
        </div>
      </div>
      <div class="rounds">
        <div class="rd"><b>Round 1</b> Roots tear free. It grabs the tank and Engulfs; thorn-spawn harry the backline.</div>
        <div class="rd"><b>Rounds 2+</b> Slam the casters, hold the engulfed PC (escape DC 14). Mind the lightning heal.</div>
        <div class="rd"><b>If it drops low</b> It <i>keens</i> — offer one more chance: lowering weapons or <b>Persuasion DC 20</b> flips to Version B (it stops, becomes an ally).</div>
      </div>
      <div class="attable">
        <p class="lbl">🎲 At the table — the rolls, both sides</p>
        <div class="turns">
          <div class="turn-card q-you">
            <h5>🎲 You roll <span class="pri">the Guardian's dice</span></h5>
            <ul>
              <li><b>Two Slams:</b> d20 <b>+7</b> each vs. AC → 2d8+4. <b>Both hit one Medium-or-smaller PC</b> → grappled (escape DC 14) ＋ <b>Engulf.</b></li>
              <li><b>Engulf:</b> at the start of each of its turns the engulfed PC makes <b>"Con save, DC 14"</b> → 2d8+4 on a fail. One PC at a time.</li>
              <li>No spells, no saves to impose — it's a brute. <b>Say the resistances aloud</b> before a caster commits.</li>
            </ul>
          </div>
          <div class="turn-card q-exp">
            <h5>🎯 Expect from the party <span class="pri">and what trips them</span></h5>
            <ul>
              <li><b>Attacks vs. AC 15</b>; it has <b>136 HP</b> — this is a grind, by design.</li>
              <li><b>Lightning heals it; it resists cold & fire</b> — a caster <i>will</i> ask. Tell them straight (or via a Nature/Arcana check) so no one wastes a <i>fireball</i>.</li>
              <li><b>Freeing the engulfed PC:</b> the trapped PC spends an action on <b>escape DC 14</b> (Athletics/Acrobatics), or allies drop it low. Expect panic — point out the exit.</li>
              <li>Someone may try to <b>talk it down</b> — that's the flip, always open.</li>
            </ul>
          </div>
          <div class="turn-card q-rx">
            <h5>🔁 How to react <span class="pri">your TPK valve</span></h5>
            <ul>
              <li>It <b>doesn't finish the downed or chase fleers</b> — it grapples to <i>stop</i> the axes. A PC at 0 inside it still rolls death saves.</li>
              <li><b>Dropping too fast?</b> +20–25 HP, or bonus-action "grasping roots" (grapple a 2nd PC, no damage). <b>On the ropes?</b> Cut thorn-spawn, or Engulf-and-<i>hold</i> (no damage).</li>
              <li><b>The flip is live every round:</b> lowering weapons or <b>Persuasion DC 20</b> → Version B; it becomes an ally.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="callout danger" style="margin-top:.6rem"><b>🛟 Pressure valves (this is your TPK risk):</b> the flip is open <b>every round</b>; cut a thorn-spawn or two; or have it Engulf-and-<i>hold</i> a downed PC "in the roots" (no damage) if the table's on the ropes.</div>
    </div>
  </div>

  <div class="ver-block" data-verblock="B">
    <div class="zone">
      <h4>Version B — “The True Harvest” (has the Key) · Deadly</h4>
      <p>The party turns the Guardian on the cult. <b>Mother Sere, her Harvest Overseer + cultists</b> are the enemy; the <b>Guardian fights as the party's ally</b> (DM runs it; it focuses Mother Sere).</p>
      <div class="budget"><b>Budget check (enemies only):</b> Mother Sere (Green Hag, 700) + Harvest Overseer (Cult Fanatic, 450) + 4 Cultists (100) = 1,250 base ×2 (6 monsters) = <b>2,500 adjusted → Deadly+</b>, brought back to a winnable, heroic Deadly by the <b>Guardian ally</b>. <i>Rescaled for 5 — the Overseer joins by default; if he fell at Scene 3, use 6 Cultists instead.</i></div>
      <p><b>Tactics:</b> <b>Mother Sere</b> opens with <b>Invisible Passage</b> and <b>Illusory Appearance</b> (she may look like a frightened captive — let a PC's Insight or the Guardian's senses cut through), strikes with <b>Claws (2d8+4)</b>, uses <b>vicious mockery / minor illusion</b> to split the party; cultists screen her and tend the green fire (the rite — a <b>clock: 3 rounds to completion</b> unless disrupted; smashing the fire/vial sets it back). The <b>Guardian</b> grapples and Engulfs Mother Sere if it can. <b>Morale:</b> cultists break when she falls.</p>
    </div>
    {{SB:hag}}
    {{SB:fanatic|1}}
    {{SB:cultist|4}}
    {{SB:mound}}
    <div class="runfight">
      <h4>🎬 Run Version B — Mother Sere &amp; the rite</h4>
      <div class="initline">
        <span class="ini">Mother Sere <b>init +1</b></span>
        <span class="ini">Overseer (if alive) <b>init +2</b></span>
        <span class="ini">Cultists <b>init +1</b></span>
        <span class="ini">Sorrowroot (ally) <b>init −1</b> <span class="die">(you run it — it focuses Sere)</span></span>
      </div>
      <div class="callout danger" style="margin:.4rem 0"><b>⏳ The rite clock — 3 rounds.</b> The green fire completes Mother Sere's Harvest at the end of <b>round 3</b> unless disrupted. <b>Smashing the fire or the vial</b> (an object — AC 12, or a clean action) sets it back a round. Track it in the Tools rail clock or on the table.</div>
      <div class="turns">
        <div class="turn-card">
          <h5>👑 Mother Sere (Green Hag) <span class="pri">Hides, splits the party, drinks the rite</span></h5>
          <ol>
            <li><b>Opens hidden:</b> <i>Invisible Passage</i> (invisible until she attacks/casts) and/or <i>Illusory Appearance</i> — she may pose as a <b>frightened captive.</b> See through with <b>Insight DC 14</b> (mimicry) or <b>Investigation DC 20</b>; the <b>Guardian's blindsight ignores it.</b></li>
            <li><b>Claws</b> +6, <b>13 (2d8+4) slashing</b> — strikes a caster, then vanishes again next turn.</li>
            <li><b>Control:</b> <i>vicious mockery</i> (Wis DC 12, 1d4 psychic + disadv. on its next attack) &amp; <i>minor illusion</i> to fracture the party and guard the fire.</li>
          </ol>
        </div>
        <div class="turn-card">
          <h5>🤝 Sorrowroot — your ally <span class="pri">DM runs it · focuses Mother Sere</span></h5>
          <ul>
            <li>Wades to Sere and tries to <b>grapple + Engulf</b> her (escape DC 14) — its blindsight cuts her illusions. Pull it back if it outshines the players; it's their win to land.</li>
          </ul>
        </div>
        <div class="turn-card">
          <h5>🗡 Cultists ×4 <span class="pri">Screen Sere · tend the green fire</span></h5>
          <ul><li><b>Scimitar</b> +3, 4 (1d6+1). They feed the rite and body-block the fire. <b>Morale:</b> they break when Sere falls.</li></ul>
        </div>
      </div>
      <div class="rounds">
        <div class="rd"><b>Round 1</b> Sere hidden/illusory; cultists feed the fire (<b>clock 1</b>). Guardian crashes toward her.</div>
        <div class="rd"><b>Round 2</b> <b>Clock 2.</b> Sere claws a caster &amp; mocks; reward anyone who smashes the fire/vial (−1 clock).</div>
        <div class="rd"><b>Round 3</b> <b>Clock 3 = rite completes</b> unless disrupted — drop her or break the fire <i>now.</i> When Sere falls, the rite shatters.</div>
      </div>
      <div class="attable">
        <p class="lbl">🎲 At the table — the rolls, both sides</p>
        <div class="turns">
          <div class="turn-card q-you">
            <h5>🎲 You roll <span class="pri">Sere, cult & the ally</span></h5>
            <ul>
              <li><b>Mother Sere — Claws:</b> d20 <b>+6</b> vs. AC → 2d8+4. <i>vicious mockery</i> → <b>"Wisdom save, DC 12"</b> (fail = 1d4 psychic ＋ disadv. on her target's next attack).</li>
              <li><b>Cultists:</b> Scimitar <b>+3</b> → 1d6+1. <b>Overseer (if alive):</b> spells as Scene 3 (hold person Wis DC 11; inflict wounds +3 → 3d10; sacred flame Dex DC 11).</li>
              <li><b>Sorrowroot (you run the ally):</b> Slams +7 → 2d8+4; tries to grapple ＋ Engulf Sere (escape DC 14). Keep it on Sere so it doesn't steal the players' kills.</li>
            </ul>
          </div>
          <div class="turn-card q-exp">
            <h5>🎯 Expect from the party <span class="pri">see-through & smash</span></h5>
            <ul>
              <li><b>Finding Sere:</b> she opens invisible / posing as a captive. <b>Insight DC 14</b> (Mimicry) or <b>Investigation DC 20</b> sees through it; the Guardian's blindsight ignores it — let a PC's check or the ally out her.</li>
              <li><b>Attacks vs.</b> Sere AC 17 (high — they'll miss; that's the boss) · Cultist AC 12.</li>
              <li>Expect them to <b>smash the green fire / vial</b> to beat the clock — say yes (AC 12 object, or one clean action) → −1 round.</li>
            </ul>
          </div>
          <div class="turn-card q-rx">
            <h5>🔁 How to react <span class="pri">run the clock</span></h5>
            <ul>
              <li><b>Rite clock (3 rounds):</b> tick it up at the END of each round on the Tools rail / table. Round 3 completes it <i>unless</i> Sere falls or the fire's broken. Make the ticks loud — that's the tension.</li>
              <li><b>Concentration:</b> Overseer holding a spell takes damage → Con save DC 10 / half. Sere's invisibility ends the instant she attacks or casts.</li>
              <li><b>Morale:</b> cultists break when Sere falls; when she drops, the rite shatters — cue the ending.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="zone">
    <h4>↔️ Avenues (either version)</h4>
    <p><span class="pill">straight fight</span><span class="pill">disrupt the rite — smash the green fire/vial (shortens Version B)</span><span class="pill">turn the guardian with words / the Key</span><span class="pill">use the grove — cover, standing stones, lured Engulf</span></p>
  </div>
</div>`
    },

/* ---------- ENDINGS & HOOKS ---------- */
    { id:"endings", nav:"Endings & Hooks", icon:"🏁", name:"Endings & Hooks", play:true,
  readAloud:[
    {label:"🏁 Endings & Hooks — at a glance (your eyes only)", text:`<p style="opacity:.7"><i>Not read aloud — read the ending that matches the outcome, then its Wren beat, then the closing hook.</i></p>
      <p><b>No Key (Guardian slain) → Ending A</b> — the hollow victory: the quest is “won,” but the grove keeps dying and Mother Sere lives. <b>Key (Mother Sere falls) → Ending B</b> — the wood heals and marks the party friends of the wood.</p>
      <p>Each has a <b>Wren</b> payoff (A: only bones; B: she comes home to Tomas). Close on the <b>hook</b> for the version they got.</p>`},
    {label:"📖 Ending A — the hollow victory (no Key)", text:`The great tree shudders, groans like a felled mast, and goes still. The road falls quiet. Back in Greywater the reeve counts the bounty into your hands — and won't quite meet your eyes. Behind you the grove keeps dying; somewhere the heart-sap carts still roll out under the trees, and a withered woman lifts a vial to her lips and does not die. You did what you were hired to do.`},
    {label:"📖 Ending A — Wren (read when they collect the bounty)", text:`When they come to dig for Wren, the roots give up only bones. Tomas has a body to bury now, not a sister. He thanks you all the same — which is somehow worse.`},
    {label:"📖 Ending B — the wood heals (has the Key)", text:`Mother Sere falls, and the green fire gutters out. The grief goes out of the great tree all at once; its roots sink slowly back into the earth, and where they pass, the grey wood flushes faintly green again. It turns its sorrowing face to you one last time — not an axe after all — and marks you, somehow, as <b>friends of the wood.</b> The surviving grey-robes scatter into the trees. The road is safe, because the truth was.`},
    {label:"📖 Ending B — Wren comes home", text:`As the grief lifts, the soil at the grove's heart loosens and opens — and gives back those it only lately took. Among them, blinking and earth-streaked and alive: <b>Wren.</b> Her homecoming to Tomas is the first good thing Greywater has had in a long season.`},
    {label:"📖 Hook — tease what comes next (read to close the night)", text:`<b>If Ending A:</b> weeks on, the vanishings begin again on a <i>different</i> road — and a robed envoy of the Withering arrives in Greywater to “thank” the famous beast-slayers… and offer them work.<br><b>If Ending B:</b> the grateful Guardian — or Fenn — brings word that the Withering tends <b>three more groves</b> deeper in the wilds, each with its own bound guardian and withered prophet. The wood asks you to finish what you started.<br><span style="opacity:.65">(DM: read the matching hook to close the night — it seeds the next adventure.)</span>`}
  ],
  body:`
<div class="zone dm-only">
  <h4>Ending A — Adequate <span class="pill">no Key</span></h4>
  <p>The Guardian falls. The Briar Road goes quiet, Greywater pays the bounty — but the grove keeps dying, the heart-sap carts still roll out of the wood, and somewhere Mother Sere drinks to her long life. A hollow victory the players will <i>feel</i>. <i>(Quest complete, the obvious way.)</i></p>
  <div class="callout"><b>🔗 Wren (Tomas's sister):</b> with the Guardian dead, what it took stays taken — the roots give up only bones. <b>Tomas gets a body to bury, not a sister.</b> Let that land when they collect the bounty.</div>
</div>
<div class="zone dm-only">
  <h4>Ending B — Ballsy <span class="pill">requires the Key</span></h4>
  <p>Mother Sere falls, the rite breaks, and the Guardian — grief spent — sinks its roots back into the earth and <b>begins to heal the grove</b>. It marks the party as friends of the wood. The cult's surviving harvesters scatter. The road is safe <i>because the truth was.</i></p>
  <div class="callout"><b>🔗 Wren:</b> as the grief lifts, the grove <b>loosens its grip on the recently-taken</b> — the soil opens and the still-living are given back, <b>Wren among them.</b> Her homecoming to Tomas pays off the Cold Open. <i>(DM's call how many return; keep the oldest taken as graves.)</i></div>
</div>
<div class="zone dm-only">
  <h4>🪝 Hooks</h4>
  <p><b>If Ending A →</b> weeks later the vanishings begin again on a <i>different</i> road — the cult has other groves — and a robed envoy of the Withering arrives in Greywater to “thank” the famous beast-slayers… and offer them work.</p>
  <p><b>If Ending B →</b> the grateful Guardian (or Fenn) brings word that the Withering tends <b>three more groves</b> deeper in the wilds, each with its own bound guardian and withered prophet. The wood asks the party to finish what they started.</p>
</div>`
    },

/* ---------- STAT BLOCKS (Appendix A) ---------- */
    { id:"statblocks", nav:"Stat Blocks", icon:"📕", name:"Appendix A — Stat Blocks", play:false, body:`
<p class="subtitle">All seven inlined once. Reflavor notes change the <i>fiction only</i> — the mechanics are unchanged. Collapsed by default; click to expand, or use the buttons.</p>
<div class="sb-toolbar">
  <button class="btn" id="sbExpand">Expand all</button>
  <button class="btn ghost" id="sbCollapse">Collapse all</button>
</div>
<div id="sbAll">
  {{SB:wolf}}
  {{SB:cultist}}
  {{SB:fanatic}}
  {{SB:thug}}
  {{SB:twig}}
  {{SB:hag}}
  {{SB:mound}}
</div>`
    },

/* ---------- TRACKERS (Appendix B) — main panel: scene board + session ---------- */
    { id:"trackers", nav:"Trackers", icon:"🎛", name:"Appendix B — Trackers", play:false, body:`
<p class="subtitle">Your live tools ride in the <b>🎛 Tools rail</b> at the right — always reachable while you play. Below: the scene board and session controls.</p>
<div class="zone">
  <h4>🎛 What's in the rail</h4>
  <ul>
    <li><b>🔎 Clue tracker → the Key.</b> Tick clues; the banner flips to Version B / Ending B when the Key lands (Clue 3 or 4). <i>This also unlocks the Crown's 5th leaf in Scene 4.</i></li>
    <li><b>⏳ The clock.</b> Step the Great Harvest from Day 1 to dusk on Day 3.</li>
    <li><b>❤️ Party HP.</b> Name, <b>AC</b>, current/max HP, <b>temp HP</b> (damage eats temp first), quick ±buttons, and <b>death-save pips</b> that appear at 0 HP (3 ✓ = stable, 3 ✕ = dead; healing clears them).</li>
    <li><b>⚔️ Combat tracker.</b> Add PCs &amp; monsters (quick-add buttons, or ＋ from any stat block), set initiative, then <b>▶ Start combat</b> → <b>⏭ Next turn</b> walks the order and counts <b>rounds</b>; the active combatant is highlighted.</li>
    <li><b>🧭 Scene status.</b> Mark each beat current / done / skipped.</li>
  </ul>
</div>
<div class="zone">
  <h4>🧭 Scene progress</h4>
  <p style="font-size:.85rem;color:var(--muted)">Mark each beat done / current / skipped — the nav and the headers reflect it.</p>
  <div class="sb-board" id="sceneBoardMain"></div>
</div>
<div class="zone">
  <h4>⏳ The clock — the Great Harvest</h4>
  <p>Completes <b>dusk, day 3</b>. Track time loosely; dawdling advances the Showdown into the rite's final moments (Version B gains the 3-round ritual clock). Advance it in the Tools rail.</p>
</div>
<div class="zone secret">
  <h4><span class="dm-tag">CARE</span> ♻️ Reset</h4>
  <p>Clears every tracker (clues, clock, party HP, combat, scene status, showdown version) and starts a fresh session. Read-aloud and theme preferences are kept.</p>
  <button class="btn danger" id="resetBtn">Reset session</button>
</div>`
    },
  ],
};
if (typeof window !== 'undefined') window.WEEPING_GROVE = MODULE;
if (typeof module !== 'undefined' && module.exports) module.exports = MODULE;
})();
