//list
const category1 = {
    categoryname: "Emergent",
    categorydefinition: "Systems allow for unpredictable and surprising situations",
    categoryelements: [
        {
            categoryelement: "Player and AI are both subject to the same predictable environmental rules and constraints",
            elementtooltip: "Player can steal a guard's key and lock them out of an area, AI and player can fall victim to environmental traps / hazards, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Player can dynamically control individual systems",
            elementtooltip: "Possession, mind control, hacked security robot, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Environments or environmental elements can be altered by player action",
            elementtooltip: "Breaking down a door, blasting a hole in a wall, breaking a pillar to collapse a ceiling, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Dynamic physics object interaction",
            elementtooltip: "Non-inventory objects can be pushed, picked up, stacked, thrown, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "AI responds dynamically to player actions",
            elementtooltip: "Something other than direct attack - e.g., turn toward, move to investigate, call for help, take cover, run and hide, trigger security system, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "AI responds dynamically to environmental changes",
            elementtooltip: "Lights being left on, doors being left open, blood on the floor, items being left in their path, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "AI responds to dynamic, unscripted physics interaction",
            elementtooltip: "Paths can be blocked by furniture; NPCs can damaged by thrown objects, knocked over, kicked off a cliff, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Player may subvert / avoid required gameplay",
            elementtooltip: "To do things the developer did not intend but also doesn't strictly prohibit, e.g., Deus Ex: Ion Storm expected bosses to be killed, however player can distract them, then simply run past to avoid a fight, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Player controlled mechanics can be used for unintended purposes",
            elementtooltip: "E.g., in Dishonored: the player can cast possession on a nearby AI while falling to avoid fall damage",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Weapons, inventory items or objects can be combined or used in conjunction for unusual or unintended purposes",
            elementtooltip: "E.g., in Dishonored: using freeze time, spring razors can be attached to fired bolts",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
    ],
};
const category2 = {
    categoryname: "Non-Linear",
    categorydefinition: "Design that allows for multiple paths or outcomes",
    categoryelements: [
        {
            categoryelement: "Missions / levels have non-linear objectives",
            elementtooltip: "In-game objectives can be completed in any order",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Story is non-linear",
            elementtooltip: "Missions / levels can be completed in any order",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Open-ended / non-linear level design",
            elementtooltip: "Required areas can be accessed through a variety of means e.g., assault, stealth, stacking physics objects, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Non-combat tools or abilities can be used to bypass physical obstacles",
            elementtooltip: "Rope arrows, Blink, leg augmentation, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Non-item physics objects can be used to bypass physical obstacles",
            elementtooltip: "Crate stacking, plank placement to climb, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Restricted areas can be accessed through intended means",
            elementtooltip: "Keys, levers, switches, access codes, passwords, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Restricted areas can be accessed through subversion mechanics",
            elementtooltip: "Lockpicking, hacking, destroying a door, sabotage, drugging, social engineering, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Backtracking",
            elementtooltip: "Ability to return to previously explored levels or areas after moving past them. E.g., Bioshock",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
    ],
};
const category3 = {
    categoryname: "Reactive Plot",
    categorydefinition: "The game responds dynamically to actions or decisions",
    categoryelements: [
        {
            categoryelement: "Player actions and decisions don't meaningfully alter plot or objectives",
            elementtooltip: "Binary choices are present, but don't have meaningful effects or consequences on gameplay or plot",
            checkbox: false, radio: true, value: 1, groupname: "decisionsradio"
        },
        {
            categoryelement: "Player actions and decisions somewhat alter plot or objectives",
            elementtooltip: "Actions and decisions have meaningful effects or consequences, but do not lead to significant differences between playthroughs",
            checkbox: false, radio: true, value: 2, groupname: "decisionsradio"
        },
        {
            categoryelement: "Player actions and decisions significantly alter plot or objectives",
            elementtooltip: "A true branching narrative: actions and decisions will cause major divergence in plot or level content which leads to large differences between playthroughs",
            checkbox: false, radio: true, value: 3, groupname: "decisionsradio"
        },
        {
            categoryelement: "Player actions and decisions have measurable consequences not related directly to the player",
            elementtooltip: "The world is affected by the player even if the player is not directly affected; e.g., in Dishonored: murder and its effect on the rat plague",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Two endings",
            elementtooltip: "Binary, predetermined endings; e.g., 'the good ending' and 'the bad ending'",
            radio: true, checkbox: false, value: 1, groupname: "endingsradio",
        },
        {
            categoryelement: "Multiple endings based on endgame decisions",
            elementtooltip: "More than 2 endings based on player actions and decisions in the endgame; e.g., in Deus Ex: three endings based on which faction the player sides with at the end of the game",
            radio: true, checkbox: false, value: 2, groupname: "endingsradio",
        },
        {
            categoryelement: "Multiple endings based on actions and decisions made throughout the game",
            elementtooltip:
                "More than 2 endings based on player actions and decisions throughout the playthrough; e.g., in The Stanley Parable: multiple possible endings based on the player's decisions and exploration of the game's environment",
            radio: true, checkbox: false, value: 3, groupname: "endingsradio",
        },
    ],
};
const category4 = {
    categoryname: "Interactive",
    categorydefinition: "Game world and mechanics that immerse the player",
    categoryelements: [
        {
            categoryelement: "Interactive environments",
            elementtooltip: "Objects in the world are functional e.g., working light switches, windows which can be opened and closed",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Discoverable world-building",
            elementtooltip: "Non-forced methods to expand the lore e.g., notes, newspapers, radio broadcasts",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Upgradable equipment",
            elementtooltip: "Player controlled weapons, items, tools, etc which can be altered to suit a situation",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Item Persistence",
            elementtooltip: "Dropped items remain present in the world forever",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Persistent inventory",
            elementtooltip: "Player's full inventory is kept between missions / areas / levels",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Inventory management",
            elementtooltip: "Player's inventory of weapons / items / tools is limited in size and must be physically managed",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Loot",
            elementtooltip: "Objects of value can be discovered and used to benefit the player e.g., money, jewelery, trophies",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Condition and wear",
            elementtooltip: "Repeated use of items affects their stats or causes them to degrade",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Attack no one",
            elementtooltip: "Player can choose to play as a pacifist and is not forced to attack or kill",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Attack everyone",
            elementtooltip: "All AI can be attacked and will respond appropriately",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
    ],
};
const category5 = {
    categoryname: "Exploration",
    categorydefinition: "Player is encouraged to explore the world and its secrets",
    categoryelements: [
        {
            categoryelement: "Play spaces have non-required side areas / passages",
            elementtooltip: "Paths that are not required to complete the game, but encourage exploration",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Exploration is materially rewarding",
            elementtooltip: "Player gains experience points, discovers items, resources, information, lore, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Exploration reveals novel methods to approach objectives",
            elementtooltip: "Discovering alternate paths, strategies, and solutions through exploration",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Scripted climbing / mantling in predetermined locations",
            elementtooltip: "Predefined locations where the player can climb or mantle",
            checkbox: false, radio: true, value: 1, groupname: "climbradio"
        },
        {
            categoryelement: "Unscripted climbing or mantling in most or all areas",
            elementtooltip: "Player can climb or mantle on most surfaces in the game",
            checkbox: false, radio: true, value: 2, groupname: "climbradio"
        },
        {
            categoryelement: "Platforming / parkour can be used to reach passages / areas",
            elementtooltip: "Player can use parkour mechanics to reach hidden areas",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Destruction can be used to reach passages / areas",
            elementtooltip: "Player can destroy walls or surfaces to reveal hidden areas",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Secret areas",
            elementtooltip: "Hidden areas that reward exploration with unique items or secrets",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Secret levels",
            elementtooltip: "Hidden levels that can only be accessed through exploration",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Easter eggs",
            elementtooltip: "References, jokes, or messages hidden by the developers",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
    ],
};
const category6 = {
    categoryname: "Aggressive combat",
    categorydefinition: "Direct combat with weapons, fast reflexes and decisions",
    categoryelements: [
        {
            categoryelement: "Kicking / punching",
            elementtooltip: "Using physical attacks to directly damage opponents",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Projectile weapons",
            elementtooltip: "Using ranged weapons to deal damage to opponents",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Melee weapons",
            elementtooltip: "Using close-range weapons to deal damage to opponents",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Magic / powers / abilities",
            elementtooltip: "Using supernatural or extraordinary powers to deal damage to opponents",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Throwables",
            elementtooltip: "Using throwable items to deal damage to opponents",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Multiple ammunition types",
            elementtooltip: "Using different types of ammunition to deal damage to opponents",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Shields / armor",
            elementtooltip: "Using protective gear to reduce damage taken from opponents",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Location based damage",
            elementtooltip: "Dealing more damage by hitting specific areas on an opponent's body",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Controllable recoil",
            elementtooltip: "Player can control the amount of recoil on an automatic weapon by mouse correction",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Bullet / arrow drop",
            elementtooltip: "Requiring player to adjust aim based on the distance and trajectory of a shot",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
    ],
};
const category7 = {
    categoryname: "Strategic Combat",
    categorydefinition: "Indirect combat which rewards thinking and planning",
    categoryelements: [
        {
            categoryelement: "Non-lethal combat",
            elementtooltip: "Allows players to subdue enemies without killing them",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Indirect combat",
            elementtooltip: "Players can cause damage without immediate risk to themselves",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Stealth backstabs / takedowns",
            elementtooltip: "Allows players to take out enemies silently and without detection",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Suppressed or quiet weapons / ammunition",
            elementtooltip: "Weapons that make minimal noise when fired, such as silenced pistols, bows and arrows, or tranquilizer darts",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Subduing weapons / items",
            elementtooltip: "Weapons or items that stun or incapacitate enemies, such as pepper spray or stun guns",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Proximity activated traps",
            elementtooltip: "Traps that are triggered by the enemy's proximity, which can be player-controlled",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Remote activated traps",
            elementtooltip: "Traps that are triggered remotely, which can be player-controlled",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Security system traps",
            elementtooltip: "Allows players to hack into and control turrets, robots, etc to take out enemies",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Static / environmental traps / hazards",
            elementtooltip: "Level elements which can damage enemies, such as spike pits/walls, falling logs, Indiana Jones-style dart/boulder traps, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Ability to take a hostage / human shield",
            elementtooltip: "Allows players to take a hostage to use as a human shield, causing NPCs to react with restraint",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
    ],
};
const category8 = {
    categoryname: "Stealth",
    categorydefinition: "Rewards sneaking and avoidance over direct confrontation",
    categoryelements: [
        {
            categoryelement: "Danger can be escaped by hiding",
            elementtooltip: "Does not include running far away",
            radio: true, checkbox: false,
            value: 1,
			groupname: "stealthradio",
        },
        {
            categoryelement: "Stealth play is viable throughout",
            elementtooltip: "Combat / detection can always be avoided by a stealthy playstyle",
            radio: true, checkbox: false,
            value: 2,
			groupname: "stealthradio",
        },
        {
            categoryelement: "Stealth is the intended method of progression",
            elementtooltip: "A stealthy approach is the only viable playstyle",
            radio: true, checkbox: false,
            value: 3,
			groupname: "stealthradio",
        },
        {
            categoryelement: "Presence of non-AI security systems which alert enemies when triggered",
            elementtooltip: "Cameras, tripwires, alarms, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Ability to hide evidence of player interference",
            elementtooltip: "Conceal bodies, clean up blood, pick up spent cartridges, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Distraction / diversion mechanics",
            elementtooltip: "",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Light / shadow detection system",
            elementtooltip: "Player can hide in dark areas without using cover",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Noise detection system",
            elementtooltip: "Player can be detected based on the noise they make",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Smell detection system",
            elementtooltip: "Player can be detected based on how they smell",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Equippable disguises can be used for infiltration",
            elementtooltip: "Player can use disguises to avoid detection in restricted areas",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
    ],
};
const category9 = {
    categoryname: "Role Play",
    categorydefinition: "Systems focused on character development and progression",
    categoryelements: [
        {
            categoryelement: "Character creation",
            elementtooltip: "e.g., gender / body appearance / backstory",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Aesthetic appearence customization",
            elementtooltip: "e.g., choose clothing / accessories which don't affect gameplay",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Player must choose a character class",
            elementtooltip: "Players must choose a character class (e.g., warrior, mage, rogue) that determines their abilities and playstyle",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Wearables with stat modifiers",
            elementtooltip: "Players can equip wearable items that modify their character's stats (e.g. a coat that provides +2 warmth and +1 noise)",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Powers / Abilities",
            elementtooltip: "Activatable non-combat abilities e.g., double jump, increased strength",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "XP",
            elementtooltip: "Players earn experience points completing tasks",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Selectable skills / perks",
            elementtooltip: "Players can choose specific skills or perks to improve their character's abilities as they level up",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Skill checks",
            elementtooltip: "Players must have a certain level of a specific skill (e.g. level 3 hacker) to pass certain obstacles or access certain areas",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Crafting",
            elementtooltip: "Players can gather materials and craft new items / equipment / consumables",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Party management",
            elementtooltip: "Players can recruit and manage a party of allies, giving orders and dismissing members as needed",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
    ],
};
const category10 = {
    categoryname: "Social",
    categorydefinition: "Emphasizes social interactions and relationships",
    categoryelements: [
        {
            categoryelement: "Choice of multiple dialogue options",
            elementtooltip: "Player is presented with a variety of responses to choose from when interacting with NPCs",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Social spaces inhabited by interactive NPCs",
            elementtooltip: "Non-hostile environments where NPCs are present and can be interacted with in various ways",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Interactions with NPCs meaningfully benefit the player",
            elementtooltip: "NPCs can offer the player different types of information and assistance including combat support, new objectives, hints, resources, lore, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "NPCs observe and react to player actions while in their presence",
            elementtooltip: "Non-player characters will respond to the player's actions when they are nearby",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "NPCs respond dynamically to other NPCs",
            elementtooltip: "NPCs will react to the actions of other NPCs in the game. E.g., in Dark Messiah: when an orc injures a fellow orc, they will fight to the death",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "NPCs behavior or dialog adjusts based on player decisions, notoriety, or actions",
            elementtooltip: "NPC interactions will change based on the player's decisions, actions, or reputation in the game world",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Dialog options affect world, gameplay or story",
            elementtooltip: "Dialog decisions made during a conversation with an NPC will have an impact on the game after the conversation has ended",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Branching conversation trees",
            elementtooltip: "Conversations branch and the player must choose one of several dialog options to continue, these choices affect subsequent dialog. E.g., choosing a dialog option will limit how a conversation can progress -- not all dialog options in a conversation can be explored in one playthough",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
		{
            categoryelement: "Conversations use machine learning to adjust dynamically",
            elementtooltip: "Machine learning is utilized to create unique and unscripted NPC conversations",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
    ],
};
const category11 = {
    categoryname: "Puzzle",
    categorydefinition: "Use logic and problem-solving to overcome obstacles",
    categoryelements: [
        {
            categoryelement: "Puzzles are present but are optional",
            elementtooltip: "The game includes some puzzles, but they are not required for progression or can be avoided by other means",
            checkbox: false, radio: true, value: 1, groupname: "puzzleradio"
        },
        {
            categoryelement: "Some puzzle solving is required",
            elementtooltip: "The game includes occasional puzzles which are required for progression, but they are not a main componenent of the game",
            checkbox: false, radio: true, value: 2, groupname: "puzzleradio"
        },
        {
            categoryelement: "Puzzles are a main component of the game",
            elementtooltip: "The gameplay is designed around solving puzzles, e.g., Portal, Ctrl Alt Ego, etc",
            checkbox: false, radio: true, value: 3, groupname: "puzzleradio"
        },
        {
            categoryelement: "Hacking, locks, access codes, levers, switches, explosives, etc",
            elementtooltip: "Progression by manipulating static game mechanics or systems. E.g., picking a lock or finding a key, blowing up a door or wall, etc",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Physics puzzles",
            elementtooltip: "Puzzles which require manipulation of the game's physics system, e.g., in Neverlooted Dungeon: pressure plates must have objects placed on them to be activated",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
		{
            categoryelement: "Tool, gadget, ability puzzles",
            elementtooltip: "Thoughtful or creative use of a tool or ability to progress through an area. E.g., in Prey: the G.L.O.O. cannon, in Dishonored: possession",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
		{
            categoryelement: "Platforming puzzles",
            elementtooltip: "Jumping and skill-based movement are used to navigate otherwise inaccessable areas",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Room puzzles",
            elementtooltip: "Areas are designed to be 'solved' strategically using one or more methods. E.g., Portal",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Riddles and logic puzzles",
            elementtooltip: "Puzzles which require logic to solve. E.g., in Dishonored 2: the Jindosh lock",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
    ],
};
const category12 = {
    categoryname: "Randomization",
    categorydefinition: "Presence of RNG, procedural generation, chance elements",
    categoryelements: [
        {
            categoryelement: "Randomization of item placement / loot / codes / weapons",
            elementtooltip: "Items, loot, codes, or weapons are randomly placed in the game world, giving players a different experience each time they play",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Randomization of AI / interactive systems placement",
            elementtooltip: "AI enemies or interactive systems are randomly placed in the game world, providing a different challenge each time the game is played",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Randomization of pre-designed room placement",
            elementtooltip: "Pre-made rooms in the game are randomly arranged, creating a unique layout each time the game is played",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Procedurally generated areas",
            elementtooltip: "The game world is generated using procedural algorithms, resulting in a unique experience for each playthrough",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Dice rolls",
            elementtooltip: "Random chance elements are used in the game, such as rolling dice to determine the outcome of certain events",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Areas must be completed in one sitting",
            elementtooltip: "Players must complete the game's areas in one playthrough, without the ability to save or create checkpoints",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Permadeath",
            elementtooltip: "Players are forced to start over from the beginning of the game if they die",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Permadeath with persistent body and inventory",
            elementtooltip: "Player loses everything upon death, but the dead body can be found and looted",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
        {
            categoryelement: "Turn-based movement or actions",
            elementtooltip: "Player takes turns moving or performing actions",
            checkbox: true, radio: false, value: 1, groupname: "chkbx"
        },
    ],
};