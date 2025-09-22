(function () {
  const allRolesData = {
    "version": "2.0.0",
    "roles": [
      { "meta": { "id": 1, "name": "The Architect's Apprentice", "emoji": " रस्सी", "roleFamily": "developer", "version": "2.0" }, "identity": { "tagline": "junior backend dev, analytical, perfectionist, loves diagrams" }, "role": { "summary": "Participate fully, but also look for clusters of events/commands that could form an Aggregate.", "example": "Seeing \"Observation Registered\" and \"Photo Uploaded,\" suggest an \"Observation\" Aggregate." }, "superpower": "Spot natural Aggregate boundaries", "powers": { "normal": [{ "title": "Spot Aggregates (normal duty)", "description": "The Architect's Apprentice looks for natural clusters of events and commands that belong together. Their job is to spot when several stickies really represent a single domain concept." }], "special": [{ "id": "box-token", "icon": "🟨", "title": "Box Token (special, once per round)", "description": "Once per round, the Apprentice may **draw a box** around a cluster of stickies to propose an Aggregate. But before boxing, they must explain *why this cluster belongs together*.", "limit": { "per": "perRound", "count": 1 } }] }, "flavor": { "quote": "Structure is not a prison, it's freedom with walls.", "why": "Helps reveal bounded responsibilities" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 2, "name": "The Policy Prober", "emoji": "🔮", "roleFamily": "developer", "version": "2.0" }, "identity": { "tagline": "QA engineer, curious, persistent question-asker" }, "role": { "summary": "Storm normally, but also uncover implicit rules.", "example": "After \"Observation Shared,\" ask: \"What if it's a rare/sensitive species (e.g., endangered, breeding, or poaching-prone birds)?\" → policy: \"Blur location.\"" }, "superpower": "Sniff out hidden business rules", "powers": { "normal": [{ "title": "Probe for Hidden Rules (normal duty)", "description": "The Policy Prober's job is to **sniff out implicit rules**. They constantly ask: *'Whenever X happens, then what?'* When a rule emerges, they write it down as a lilac Policy sticky." }], "special": [{ "id": "whenever-then-token", "icon": "🟩", "title": "Whenever… Then… Token (special, unlimited but formalized)", "description": "Every time they add a Policy, they must **say it aloud in the format**: 'Whenever [Event], then [Rule].' This forces the group to agree the rule is explicit and valid.", "limit": { "per": "unlimited", "count": null } }] }, "flavor": { "quote": "The rule you don't see is the one that bites hardest.", "why": "Exposes policies driving behavior" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      {
        "meta": { "id": 3, "name": "The Command Constructor", "emoji": "📘", "roleFamily": "developer", "version": "2.0" },
        "identity": { "tagline": "detail-obsessed, playful but precise UX-to-dev" },
        "role": {
          "summary": "Add stickies like others, but ensure commands are clear.",
          "example": "Replace \"Check Photo\" with \"SubmitPhotoForIdentification.\""
        },
        "superpower": "Sharpen vague commands into precise ones",
        "powers": {
          "normal": [
            {
              "title": "Sharpening Commands (normal duty)",
              "description": "Commands must always be written as 'Verb + Noun'. The Command Constructor spots sloppy commands and fixes them."
            }
          ],
          "special": [
            {
              "id": "rewrite-token",
              "icon": "🟥",
              "title": "Rewrite Token (special, once per game)",
              "description": "Once per session, completely rename a fuzzy command.",
              "limit": { "per": "perSession", "count": 1 }
            },
            {
              "id": "convert-token",
              "icon": "🟥",
              "title": "Convert Token (special, once per game)",
              "description": "Once per session, fix queries written as commands by converting to Read Models.",
              "limit": { "per": "perSession", "count": 1 }
            }
          ]
        },
        "flavor": {
          "quote": "Say what you mean, mean what you say, or the code will misunderstand you.",
          "why": "Makes sure commands show clear intent and don’t mix with queries"
        },
        "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true }
      },
      { "meta": { "id": 4, "name": "The Error Explorer", "emoji": "💥", "roleFamily": "developer", "version": "2.0" }, "identity": { "tagline": "senior dev, pragmatic, sarcastic edge-case hunter" }, "role": { "summary": "Contribute normally, but always ask: \"What could go wrong?\"", "example": "After \"Payment Processed,\" ask: \"What if it fails?\" → \"Payment Failed.\"" }, "superpower": "Uncover non-happy paths and add Hotspots.", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "Murphy was an optimist.", "why": "Builds robust systems" }, "ui": { "badgeColor": "slate", "accent": "rose", "chips": true } },
      { "meta": { "id": 5, "name": "The Data Detective", "emoji": "🕵️‍♀️", "roleFamily": "developer", "version": "2.0" }, "identity": { "tagline": "data engineer, logical, patient puzzle-solver" }, "role": { "summary": "Storm fully, but also ask what data is needed for decisions.", "example": "Before \"Suggestion Accepted,\" propose \"AI Identification Details\" read model." }, "superpower": "Focus on information needs", "powers": { "normal": [{ "title": "Add Read Models (normal duty)", "description": "The Data Detective always asks: *'What information is needed here?'* When a decision requires info, they add a green Read Model sticky." }], "special": [{ "id": "question-mark-token", "icon": "🟩", "title": "Question Mark Token (special, unlimited use)", "description": "They may place a '?' mark on any sticky to trigger discussion: *'What info is needed here?'*", "limit": { "per": "unlimited", "count": null } }] }, "flavor": { "quote": "Without data, you're just another person with an opinion.", "why": "Connects decisions to queries" }, "ui": { "badgeColor": "slate", "accent": "sky", "chips": true } },
      { "meta": { "id": 6, "name": "The Boundary Builder", "emoji": "🚧", "roleFamily": "developer", "version": "2.0" }, "identity": { "tagline": "solution architect, diplomatic big-picture thinker" }, "role": { "summary": "Storm like others, but spot language shifts or ownership changes.", "example": "Split \"Observation Shared\" from \"Badge Earned\" → separate contexts." }, "superpower": "Look for potential Bounded Contexts. During <b>Bounded Context Discovery</b> this role takes the lead and has access to the bounded context cheatsheet.", "powers": { "normal": [{ "title": "Spot Boundaries (normal duty)", "description": "The Boundary Builder looks for shifts in language, ownership, or responsibility. When terms or actors change, they propose Bounded Contexts." }], "special": [{ "id": "dotted-line-token", "icon": "🟩", "title": "Dotted Line Token (special, unlimited but must justify)", "description": "They may **draw a dotted boundary line** around groups of stickies — but only if they explain why.", "limit": { "per": "unlimited", "count": null } }] }, "flavor": { "quote": "Good fences make good neighbors — and good software.", "why": "Prevents muddled models" }, "ui": { "badgeColor": "slate", "accent": "amber", "chips": true } },
      { "meta": { "id": 7, "name": "The Event Gardener", "emoji": "🌱", "roleFamily": "developer", "version": "2.0" }, "identity": { "tagline": "minimalist fullstack dev, tidy and thoughtful" }, "role": { "summary": "Place stickies, but also tidy vague or duplicate events.", "example": "Replace \"AI Output Generated\" with \"Bird Identification Suggested.\"" }, "superpower": "Maintain event clarity", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "Words are seeds. Plant them carefully.", "why": "Strengthens Ubiquitous Language" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 8, "name": "The Flow Mapper", "emoji": "🧩", "roleFamily": "developer", "version": "2.0" }, "identity": { "tagline": "energetic process geek, dramatic storyteller" }, "role": { "summary": "Storm fully, but also trace event flows.", "example": "Notice \"Subscription Expired\" has no follow-up → ask what's next." }, "superpower": "One per round they may take the lead the point out missing or wrong flows. ", "powers": { "normal": [{ "title": "Narrate Flows (normal duty)", "description": "The Flow Mapper traces event chains forward and backward. They keep the story continuous, checking for missing steps." }], "special": [{ "id": "narration-token", "icon": "🟨", "title": "Narration Token (special, once per round)", "description": "Once per round, they may **take the floor to narrate the whole timeline/story** aloud. This reveals breaks, loops, or missing events.", "limit": { "per": "perRound", "count": 1 } }] }, "flavor": { "quote": "A river without bends is just a pipe.", "why": "Ensures complete flow" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 9, "name": "The Storyteller", "emoji": "📖", "roleFamily": "domainExpert", "version": "2.0" }, "identity": { "tagline": "warm, chatty domain veteran" }, "role": { "summary": "Storm normally, but narrate in coherent past tense.", "example": "Narrate from \"App Downloaded\" to \"Observation Shared.\"" }, "superpower": "Keep events as a story. This role takes the lead during Explicit Walkthrough and tells the full story.", "powers": { "normal": [{ "title": "Tell the Story (normal duty)", "description": "The Storyteller phrases events in **past tense** and keeps the flow consistent." }], "special": [{ "id": "story-baton", "icon": "🔵", "title": "Story Baton (special, during walkthroughs)", "description": "The Storyteller holds the Story Baton (marker or card). Only the Baton-holder may narrate during walkthroughs. They can **pass the baton** to hand narration to others.", "limit": { "per": "duringPhase", "count": null } }] }, "flavor": { "quote": "Those who tell the story rule the storm.", "why": "Ensures chronological consistency" }, "ui": { "badgeColor": "slate", "accent": "sky", "chips": true } },
      { "meta": { "id": 10, "name": "The Problem Spotter", "emoji": "🚨", "roleFamily": "domainExpert", "version": "2.0" }, "identity": { "tagline": "operations manager, blunt but practical" }, "role": { "summary": "Storm broadly, but highlight pain points.", "example": "Add hotspot at \"Photo Uploaded\" → bad connectivity." }, "superpower": "Detect weak spots and add Hotspots.", "powers": { "normal": [{ "title": "Spot Problems (normal duty)", "description": "The Problem Spotter flags pain points with red Hotspots. They must frame issues as outcomes, not blame." }], "special": [{ "id": "hotspot-tokens", "icon": "🔵", "title": "Hotspot Tokens (special, limited use)", "description": "They have only a few red stickies (e.g., 3–5) to use in a session. They must choose the **most critical issues**.", "limit": { "per": "unlimited", "count": null } }] }, "flavor": { "quote": "A chain breaks at its weakest link — find it.", "why": "Surfaces bottlenecks and failures" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 11, "name": "The Opportunity Finder", "emoji": "💡", "roleFamily": "domainExpert", "version": "2.0" }, "identity": { "tagline": "optimistic product owner, future-focused" }, "role": { "summary": "Storm fully, but turn problems into ideas.", "example": "Suggest \"Offline Sync\" after hotspot on uploads." }, "superpower": "Turn pain into opportunity", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "Every crack is a doorway for light.", "why": "Encourages innovation" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 12, "name": "The Rule Revealer", "emoji": "📜", "roleFamily": "domainExpert", "version": "2.0" }, "identity": { "tagline": "compliance officer, calm but strict" }, "role": { "summary": "Contribute fully, but phrase hidden rules explicitly.", "example": "\"Whenever subscription expires, block premium but preserve history.\"" }, "superpower": "Reveal hidden rules", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "Rules are the skeleton of reality — ignore them, and things collapse.", "why": "Makes decision logic explicit" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      {
        "meta": { "id": 13, "name": "The Story Anchor", "emoji": "📚", "roleFamily": "domainExpert", "version": "2.0" },
        "identity": {
          "tagline": "biology + CS minor, passionate birdwatcher; carries the official app story and treats it as the single source of truth"
        },
        "role": {
          "summary": "Storm fully like everyone else and keep the model aligned with the Birdspot App Story. When the group invents features/rules, check the canon first: \"Is this in the story? If not, do we add it, or mark it as a future idea?\"",
          "example": "When someone adds \"Auto-publish identified photos,\" Iris points at the story: \"Canon says: validation may be required; rare/sensitive species get blurred unless user opts in.\" She then adds the correct policy and a hotspot if there's a conflict."
        },
        "superpower": "Canon recall. Instantly map story sentences to Events/Policies/Commands and correct gaps. This role has access to the official story cheatsheet.",
        "powers": {
          "normal": [
            {
              "title": "Keep Canon (normal duty)",
              "description": "The Story Anchor checks stickies against the official story. They ensure the model stays aligned with 'Het Verhaal van de App'."
            }
          ],
          "special": [
            {
              "id": "quote-canon",
              "icon": "🟥",
              "title": "Quote Canon (special, once per game)",
              "description": "Correct a sticky using ≤10 words directly quoted from the story.",
              "limit": { "per": "perSession", "count": 1 }
            },
            {
              "id": "add-canon-sticky",
              "icon": "🟥",
              "title": "Add Canon Sticky (special, once per game)",
              "description": "Add a missing event, command, or policy directly from the story.",
              "limit": { "per": "perSession", "count": 1 }
            },
            {
              "id": "tag-out-of-canon",
              "icon": "🟥",
              "title": "Tag Out-of-Canon (special, once per game)",
              "description": "Label a made-up sticky explicitly as 'not from story'.",
              "limit": { "per": "perSession", "count": 1 }
            }
          ]
        },
        "flavor": {
          "quote": "We don't guess the domain; we read it.",
          "why": "The story already encodes domain expectations. Treating it as canon avoids fantasy features, preserves ethical rules, and makes the model consistent and teachable"
        },
        "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true }
      },

      { "meta": { "id": 14, "name": "The Language Custodian", "emoji": "🗣️", "roleFamily": "domainExpert", "version": "2.0" }, "identity": { "tagline": "witty linguist-analyst, slightly pedantic" }, "role": { "summary": "Storm fully, but ensure consistent terminology.", "example": "Replace \"Observation Logged\" and \"Record Bird Sighting\" → \"Observation Registered.\"" }, "superpower": "Guard Ubiquitous Language", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "Words build worlds.", "why": "Prevents miscommunication" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 15, "name": "The Reality Checker", "emoji": "🛠️", "roleFamily": "domainExpert", "version": "2.0" }, "identity": { "tagline": "field worker, pragmatic, no-nonsense" }, "role": { "summary": "Storm broadly, but ground it in reality.", "example": "Point out poor forest internet makes \"Immediate Upload\" unrealistic." }, "superpower": "Compare model vs. real-world practice", "powers": { "normal": [{ "title": "Ground in Reality (normal duty)", "description": "The Reality Checker keeps the model practical. They call out unrealistic assumptions with real-world examples." }], "special": [{ "id": "veto-token", "icon": "🟨", "title": "Veto Token (special, once per round)", "description": "Once per round, they may **veto 1 sticky** as unrealistic. But they must justify it with a real-world story.", "limit": { "per": "perRound", "count": 1 } }] }, "flavor": { "quote": "Reality bats last.", "why": "Prevents fantasy design" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 16, "name": "The Persona Player", "emoji": "🎭", "roleFamily": "domainExpert", "version": "2.0" }, "identity": { "tagline": "intern, empathetic, playful roleplayer" }, "role": { "summary": "Storm fully, but roleplay stakeholders.", "example": "After \"Account Blocked,\" ask: \"Would the user get warned first?\"" }, "superpower": "See events from human eyes", "powers": { "normal": [{ "title": "Roleplay Stakeholders (normal duty)", "description": "The Persona Player steps into personas — user, admin, sponsor — to expose empathy and trade-offs." }], "special": [{ "id": "in-character-token", "icon": "🟨", "title": "In-Character Token (special, once per round)", "description": "Once per round, they must speak **only in-character** for a few minutes.", "limit": { "per": "perRound", "count": 1 } }] }, "flavor": { "quote": "Walk a mile in their shoes before coding their path.", "why": "Keeps user/stakeholder needs in view" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 17, "name": "The Detail Diver", "emoji": "🔍", "roleFamily": "domainExpert", "version": "2.0" }, "identity": { "tagline": "meticulous analyst, curious about edge cases" }, "role": { "summary": "Storm broadly, but investigate ambiguous spots.", "example": "Ask: \"What if two users upload the same photo?\"" }, "superpower": "Focus on edge cases", "powers": { "normal": [{ "title": "Investigate Edge Cases (normal duty)", "description": "The Detail Diver asks precise questions about timing, ownership, and rare scenarios. Micro-script: 1. When exactly does this occur? 2. Who owns the state/data? 3. What if two happen at once?" }], "special": [{ "id": "pause-token", "icon": "🟥", "title": "Pause Token (special, once per session)", "description": "Once per game, they may 'pause the storm' to deep-dive into a detail. Rule: Pause must end with either a clear decision OR a parking-lot note if unresolved.", "limit": { "per": "perSession", "count": 1 } }] }, "flavor": { "quote": "The devil isn't in the details — the truth is.", "why": "Captures details that change design" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 18, "name": "The Archivist", "emoji": "🗂️", "roleFamily": "domainExpert", "version": "2.0" }, "identity": { "tagline": "historian-type, methodical, loves archives" }, "role": { "summary": "Storm like others, but later cross-check against an archive list.", "example": "Mid-game, bring up \"User Registered\" missing from board." }, "superpower": "Compare to prepared \"event archive\". This role has access to the event library cheatsheet", "powers": { "normal": [{ "title": "Check Against Archive (normal duty)", "description": "The Archivist cross-checks the session against their small 'event archive' list. They ensure no critical events are forgotten." }], "special": [{ "id": "archive-unlock-token", "icon": "🔵", "title": "Archive Unlock Token (special, once per session)", "description": "After the **first Explicit Walkthrough only**, they may unlock the archive. They can then propose up to 5–10 missing events. Rule: each proposed event requires group discussion + approval before adding.", "limit": { "per": "perSession", "count": 1 } }] }, "flavor": { "quote": "History doesn't repeat, but it rhymes — check the record.", "why": "Ensures critical events aren't forgotten" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },

      { "meta": { "id": 1, "name": "The Navigator", "emoji": "🧭", "roleFamily": "moderator", "version": "2.0" }, "identity": { "tagline": "calm and collected, loves maps, pragmatic leader" }, "role": { "summary": "Keeps the group on track and oriented in the timeline when discussions drift", "example": "When talk jumps from \"Observation Shared\" back to \"User Registered,\" draw a simple timeline, park the tangent, and say: \"We’re currently in the review flow; let’s finish this step first.\"" }, "superpower": "Keeps the group on track and oriented in the timeline when discussions drift", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "If you don't know where you're going, every sticky will take you there.", "why": "" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 2, "name": "The Energizer", "emoji": "🔥", "roleFamily": "moderator", "version": "2.0" }, "identity": { "tagline": "high-energy, extroverted, thrives on group dynamics" }, "role": { "summary": "Brings fun and energy when the group slows down, injects games or energizers", "example": "Start a 2-minute \"Lightning Stickies\" round: everyone adds one Event they’re most sure about; quick stretch, then resume." }, "superpower": "Brings fun and energy when the group slows down, injects games or energizers", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "Storming without energy is just raining.", "why": "" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 3, "name": "The Questioner", "emoji": "🧐", "roleFamily": "moderator", "version": "2.0" }, "identity": { "tagline": "philosopher type, loves asking \"why\"" }, "role": { "summary": "Challenges assumptions, keeps asking deeper questions to reveal hidden truths", "example": "After \"Auto-ban after 3 flags,\" ask: \"Why 3? Who sets the threshold? What evidence triggers a review?\" → group adds policy \"Manual Review Required after 2 flags.\"" }, "superpower": "Challenges assumptions, keeps asking deeper questions to reveal hidden truths", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "Every answer is just the start of the next question.", "why": "" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 4, "name": "The Visualizer", "emoji": "🎨", "roleFamily": "moderator", "version": "2.0" }, "identity": { "tagline": "creative, sketchbook always at hand, loves visuals" }, "role": { "summary": "Draws diagrams, icons, or quick doodles to help the group see connections", "example": "Sketch a quick swimlane (User vs System) for \"Upload → Identify → Review\" and reveal the missing event \"Validation Requested.\"" }, "superpower": "Draws diagrams, icons, or quick doodles to help the group see connections", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "If you can't see it, you can't align on it.", "why": "" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 5, "name": "The Timekeeper", "emoji": "🕰️", "roleFamily": "moderator", "version": "2.0" }, "identity": { "tagline": "organized, punctual, disciplined" }, "role": { "summary": "Manages timeboxes and keeps the group moving forward without rushing too much", "example": "Set a 7-minute timebox for \"Rare/sensitive species flow\"; give a 2-minute warning; move unresolved points to the parking lot." }, "superpower": "Manages timeboxes and keeps the group moving forward without rushing too much", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "A storm without limits becomes a hurricane.", "why": "" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 6, "name": "The Joker", "emoji": "🤡", "roleFamily": "moderator", "version": "2.0" }, "identity": { "tagline": "comedian spirit, loves wordplay, breaks tension with humor" }, "role": { "summary": "Lightens up heated discussions, makes boring parts fun with jokes and exaggerations", "example": "During a tense debate, quip \"Let’s put the owl on trial\" and do a 60-second playful roleplay; everyone laughs, then refocuses." }, "superpower": "Lightens up heated discussions, makes boring parts fun with jokes and exaggerations", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "If we can laugh at it, we can fix it.", "why": "" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 7, "name": "The Diplomat", "emoji": "🤝", "roleFamily": "moderator", "version": "2.0" }, "identity": { "tagline": "empathetic, calm negotiator, mediator of conflicts" }, "role": { "summary": "Resolves tension between participants, makes sure all voices are heard", "example": "Notice two people talking past each other; summarize: \"I hear safety vs speed.\" Invite a quiet participant for balance, then propose a compromise." }, "superpower": "Resolves tension between participants, makes sure all voices are heard", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "Every voice adds a note to the storm's music.", "why": "" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } },
      { "meta": { "id": 8, "name": "The Sage", "emoji": "🧙", "roleFamily": "moderator", "version": "2.0" }, "identity": { "tagline": "wise, experienced, tells stories from past projects" }, "role": { "summary": "Shares wisdom at the right time, uses parables and metaphors to clarify complexity", "example": "Share a past lesson: \"We mixed up 'verification' and 'validation' once; it cost us weeks. Let’s rename this policy now to avoid that.\"" }, "superpower": "Shares wisdom at the right time, uses parables and metaphors to clarify complexity", "powers": { "normal": [], "special": [] }, "flavor": { "quote": "The storm passes, but the lessons remain.", "why": "" }, "ui": { "badgeColor": "slate", "accent": "emerald", "chips": true } }
    ]
  };




  const colors = {
    emerald: '145 60% 50%', sky: '195 80% 55%', rose: '345 80% 60%', amber: '40 90% 55%'
  };

  function createPersonaCard(personaData) {
    const card = document.createElement('article');
    card.className = "w-full bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-300 card-glow";

    const accentHsl = colors[personaData.ui.accent] || colors.emerald;
    card.style.setProperty('--accent-hsl', accentHsl);

    const normalPowersHTML = personaData.powers.normal.map(power => `
                <div class="bg-slate-100 p-5 rounded-xl">
                    <h3 class="font-semibold text-slate-800">${power.title}</h3>
                    <p class="mt-1 text-sm text-slate-600">${power.description}</p>
                </div>
            `).join('');

    const limitLabels = {
      perRound: 'per round',
      round: 'per round',
      perSession: 'per session',
      session: 'per session',
      perGame: 'per game',
      game: 'per game',
      duringPhase: 'during phase'
    };

    const specialPowersHTML = personaData.powers.special.map((power) => {
      const limit = power.limit || {};
      const normalizedLimit = limit.per ? (limitLabels[limit.per] || limit.per) : '';
      let limitText = '';
      if (limit.per === 'unlimited') {
        limitText = 'Unlimited use';
      } else if (normalizedLimit) {
        const limitPrefix = limit.count === null ? 'Unlimited' : `${limit.count}×`;
        limitText = `${limitPrefix} ${normalizedLimit}`;
      }
      const checkboxGroupLabel = `${power.title} usage tracker`;
      const checkboxGroupHtml = (() => {
        let prefixLabel = '';
        let checkboxLabels = [];
        if (limit.per === 'perRound') {
          prefixLabel = 'Rounds:';
          checkboxLabels = ['Round 1', 'Round 2', 'Round 3'];
        } else if (limit.per === 'perSession') {
          prefixLabel = 'Session:';
          const sessionCount = typeof limit.count === 'number' && limit.count > 0 ? limit.count : 1;
          if (sessionCount === 1) {
            checkboxLabels = [''];
          } else {
            checkboxLabels = Array.from({ length: sessionCount }, (_, idx) => `Session ${idx + 1}`);
          }
        } else if (limit.per === 'unlimited') {
          prefixLabel = 'Uses:';
          checkboxLabels = Array.from({ length: 8 }, () => '');
        } else {
          prefixLabel = 'Uses:';
          const fallbackCount = typeof limit.count === 'number' && limit.count > 0 ? limit.count : 4;
          checkboxLabels = Array.from({ length: fallbackCount }, (_, idx) => `Use ${idx + 1}`);
        }

        const checkboxItems = checkboxLabels.map((labelText, idx) => {
          const ariaLabel = labelText && labelText.trim().length > 0 ? labelText : `${power.title} use ${idx + 1}`;
          return `
                            <label class="inline-flex items-center gap-1 text-xs text-slate-500">
                                <input type="checkbox" aria-label="${ariaLabel}" class="h-5 w-5 border-2 border-slate-300 rounded-md accent-slate-600 focus:ring-0" />
                                ${labelText ? `<span>${labelText}</span>` : ''}
                            </label>
                        `;
        }).join('');

        return `
                        <div class="flex flex-wrap items-center gap-3 mt-3" role="group" aria-label="${checkboxGroupLabel}">
                            ${prefixLabel ? `<span class="text-xs uppercase tracking-wide text-slate-500 font-semibold">${prefixLabel}</span>` : ''}
                            ${checkboxItems}
                        </div>
                    `;
      })();

      return `
                <div class="flex items-start gap-3">
                    <div class="text-xl">${power.icon}</div>
                    <div>
                        <h4 class="font-semibold text-slate-800 text-sm">${power.title}</h4>
                        <p class="text-sm text-slate-600">${power.description}</p>
                        ${limitText ? `<p class="text-xs accent-text font-semibold mt-1 opacity-80">${limitText}</p>` : ''}
                        ${checkboxGroupHtml}
                    </div>
                </div>
                `;
    }).join('');

    const abilitiesHTML = `
                ${personaData.superpower ? `
                <div class="bg-slate-100 p-5 rounded-xl border-2 accent-border/50 flex flex-col justify-center">
                    <h2 class="text-sm font-semibold accent-text uppercase tracking-wider">Superpower</h2>
                    <p class="mt-2 text-slate-900 font-semibold text-lg">${personaData.superpower}</p>
                </div>` : ''}
                ${normalPowersHTML}
                ${specialPowersHTML ? `
                <div class="space-y-3 bg-slate-100 p-5 rounded-xl">
                    <h3 class="font-semibold text-slate-800">Special Moves</h3>
                    <div class="space-y-3">${specialPowersHTML}</div>
                </div>` : ''}
            `;

    card.innerHTML = `
                <header class="p-6 md:p-8">
                    <div class="flex items-start gap-5">
                        <div class="text-6xl md:text-7xl select-none -mt-1">${personaData.meta.emoji}</div>
                        <div class="flex-1">
                            <div class="flex justify-between items-center">
                                <h1 class="text-2xl md:text-3xl font-bold text-slate-900">${personaData.meta.name}</h1>
                                <div class="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full capitalize bg-slate-200">
                                    <span class="w-2 h-2 rounded-full accent-bg"></span>
                                    <span class="text-slate-700">${personaData.meta.roleFamily}</span>
                                </div>
                            </div>
                            <p class="text-slate-600 mt-1">${personaData.identity.tagline}</p>
                        </div>
                    </div>
                </header>

                <div class="p-6 md:p-8 border-y border-slate-200 space-y-8">
                    <section>
                        <div class="bg-slate-100 p-5 rounded-xl">
                            <h2 class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Primary Role</h2>
                            <p class="mt-2 text-slate-800 text-lg">${personaData.role.summary}</p>
                            ${personaData.role.example ? `<p class="mt-3 text-sm text-slate-600 font-mono p-3 bg-slate-200 rounded-md">${personaData.role.example}</p>` : ''}
                        </div>
                    </section>
                    ${abilitiesHTML.trim() ? `
                    <section>
                         <h2 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Abilities</h2>
                         <div class="space-y-4">${abilitiesHTML}</div>
                    </section>` : ''}
                </div>
                <footer class="p-6 md:p-8">
                    <blockquote class="text-center italic text-slate-600">“${personaData.flavor.quote}”</blockquote>
                    ${personaData.flavor.why ? `
                    <p class="text-center text-xs text-slate-500 mt-3 flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        <span>${personaData.flavor.why}</span>
                    </p>` : ''}
                </footer>
            `;
    return card;
  }

  function renderPersonaCards(targetContainer) {
    const container = targetContainer || document.getElementById('card-container');
    if (!container) {
      return;
    }
    container.innerHTML = '';
    allRolesData.roles.forEach(roleData => {
      const cardElement = createPersonaCard(roleData);
      container.appendChild(cardElement);
    });
  }

  window.renderPersonaCards = renderPersonaCards;

  const autoRender = () => renderPersonaCards();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoRender);
  } else {
    autoRender();
  }
})();
