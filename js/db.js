const DB = [
    // =========================================================================
    // ACT 1: OGHAM
    // =========================================================================
    {
        act: "Act 1: Ogham",
        levels: "1-15",
        zones: [
            {
                name: "The Riverbank",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Very High",
                    text: "Linear layout. Head North. The Boss is always at the end.",
                    speedrun: "Ignore everything, run straight North."
                },
                steps: [
                    { 
                        id: "a1-z1-boss", 
                        icon: "boss", 
                        text: "Kill The Bloated Miller",
                        bossData: {
                            name: "Bloated Miller",
                            dmg: ["phys"],
                            tips: ["Dodge when he bloats (explosion incoming).", "Easy to kite."]
                        }
                    },
                    { id: "a1-z1-town", icon: "town", text: "Enter Clearfell Encampment" }
                ]
            },
            {
                name: "Clearfell Encampment",
                type: "town",
                icon: "town",
                steps: [
                    { id: "a1-z2-talk", icon: "npc", text: "Talk to Renly, Una & Finn" },
                    { id: "a1-z2-exit", icon: "exit", text: "Exit to Clearfell" }
                ]
            },
            {
                name: "Clearfell",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Very High",
                    text: "Static layout. Boss is always North. Mysterious Campsite spawns on the sides.",
                    speedrun: "Head straight North for the Boss (+10% Cold Res)."
                },
                steps: [
                    { id: "a1-z3-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a1-z3-boss", 
                        icon: "boss", 
                        text: "Kill Beira of the Rotten Pack", 
                        perm: true, 
                        note: "Reward: +10% Cold Res",
                        bossData: {
                            name: "Beira",
                            dmg: ["cold", "phys"],
                            tips: [
                                "Phase 2 at 80%: Summons wolves.",
                                "Frost Swell: Move away when you see the ice ring.",
                                "Use Sapphire Flasks if available."
                            ]
                        }
                    },
                    { 
                        id: "a1-z3-opt", 
                        icon: "util", 
                        text: "Find Mysterious Campsite", 
                        opt: true, 
                        note: "Reward: Uncut Support Gem (Lvl 1)" 
                    },
                    { id: "a1-z3-exit", icon: "exit", text: "Find exit to The Grelwood" }
                ]
            },
            {
                name: "Mud Burrow",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: { confidence: "High", text: "Linear. Usually ignored in speedruns." },
                steps: [
                    { 
                        id: "a1-z4-boss", 
                        icon: "boss", 
                        text: "Kill The Devourer", 
                        opt: true, 
                        note: "Reward: Uncut Support Gem",
                        bossData: {
                            name: "The Devourer",
                            dmg: ["chaos", "phys"],
                            tips: ["Watch out for Chaos vomit.", "Use Dodge Roll i-frames when he submerges."]
                        }
                    }
                ]
            },
            {
                name: "The Grelwood",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "Diamond Pattern. 4 POIs in a rhombus shape.",
                    speedrun: "Find the exit to Red Vale first."
                },
                steps: [
                    { id: "a1-z5-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a1-z5-boss1", 
                        icon: "boss", 
                        text: "Kill The Brambleghast", 
                        opt: true,
                        bossData: {
                            name: "Brambleghast",
                            dmg: ["phys", "cold"],
                            tips: ["Volatile Slam: If he plants arms, run far away (One-shot)."]
                        }
                    },
                    { 
                        id: "a1-z5-boss2", 
                        icon: "boss", 
                        text: "Kill Areagne, Forgotten Witch", 
                        opt: true, 
                        note: "Inside Witch Hut. Reward: Flasks",
                        bossData: {
                            name: "Areagne",
                            dmg: ["cold"],
                            tips: ["Teleports frequently.", "Watch for cold degens."]
                        }
                    },
                    { id: "a1-z5-quest", icon: "quest", text: "Find Tree of Souls" },
                    { id: "a1-z5-exit", icon: "exit", text: "Find exit to The Red Vale" }
                ]
            },
            {
                name: "The Red Vale",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Low",
                    text: "Circular pattern. Rust Altars are spread out.",
                    speedrun: "Follow a general loop pattern."
                },
                steps: [
                    { id: "a1-z6-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a1-z6-item", icon: "item", text: "Interact with 3 Obelisks of Rust" },
                    { 
                        id: "a1-z6-boss", 
                        icon: "boss", 
                        text: "Kill The Rust King",
                        bossData: {
                            name: "Rust King",
                            dmg: ["phys"],
                            tips: ["Shard Whip: Slashes twice.", "Sword Scatter: Fires swords outwards."]
                        }
                    },
                    { id: "a1-z6-town", icon: "town", text: "Return to Town, get Runic Spikes" },
                    { id: "a1-z6-quest", icon: "quest", text: "Return to Grelwood Tree of Souls", note: "Use Spikes to open Grim Tangle" }
                ]
            },
            {
                name: "The Grim Tangle",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Average",
                    text: "Exit is usually opposite to the entrance (Top->Bottom or Bottom->Top).",
                    speedrun: "Skip Una's song by respawning at checkpoint."
                },
                steps: [
                    { id: "a1-z7-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a1-z7-boss", 
                        icon: "boss", 
                        text: "Kill The Rotten Druid", 
                        opt: true,
                        bossData: {
                            name: "Rotten Druid",
                            dmg: ["phys", "chaos"],
                            tips: ["Rock Smash: Dodge when he throws his arm down.", "Interrupt his vine channel."]
                        }
                    },
                    { id: "a1-z7-exit", icon: "exit", text: "Find Cemetery of the Eternals" }
                ]
            },
            {
                name: "Cemetery of the Eternals",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Low",
                    text: "Locate Tomb & Mausoleum. Often one spawns along the same wall as Lachlann's arena.",
                    speedrun: "Hug one wall to find a Tomb, then check the other side."
                },
                steps: [
                    { id: "a1-z8-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a1-z8-npc", icon: "npc", text: "Talk to Lachlann the Lost" },
                    { id: "a1-z8-exit1", icon: "exit", text: "Find Tomb of the Consort" },
                    { id: "a1-z8-exit2", icon: "exit", text: "Find Mausoleum of the Praetor" }
                ]
            },
            {
                name: "Tomb & Mausoleum",
                type: "zone",
                icon: "boss",
                sub: true,
                steps: [
                    { 
                        id: "a1-z9-boss1", 
                        icon: "boss", 
                        text: "Kill Asinia, the Praetor's Consort", 
                        note: "Inside Tomb",
                        bossData: {
                            name: "Asinia",
                            dmg: ["phys"],
                            tips: ["Death Runes: Move out of the 4 circles.", "Bone Storm: Burst the wall to escape."]
                        }
                    },
                    { 
                        id: "a1-z9-boss2", 
                        icon: "boss", 
                        text: "Kill Draven, the Eternal Praetor", 
                        note: "Inside Mausoleum",
                        bossData: {
                            name: "Draven",
                            dmg: ["phys", "fire"],
                            tips: ["Perishing Sunder: Dodge the line slam.", "Avoid spirits on graves (summons Knights)."]
                        }
                    }
                ]
            },
            {
                name: "Return to Cemetery",
                type: "zone",
                icon: "boss",
                steps: [
                    { 
                        id: "a1-z10-boss", 
                        icon: "boss", 
                        text: "Kill Lachlann of Endless Lament",
                        bossData: {
                            name: "Lachlann",
                            dmg: ["phys", "cold"],
                            tips: ["Earthquake: Huge cone slam (One-shot potential).", "Spirit Barrage: Hinders and chills."]
                        }
                    },
                    { id: "a1-z10-exit", icon: "exit", text: "Enter Hunting Grounds" }
                ]
            },
            {
                name: "Hunting Grounds",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "POIs in corners. Avoid the middle.",
                    speedrun: "Follow edges. Crowbell has a narrow funnel entrance."
                },
                steps: [
                    { id: "a1-z11-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a1-z11-boss", 
                        icon: "boss", 
                        text: "Kill The Crowbell", 
                        perm: true, 
                        note: "Reward: +2 Passive Skill Points",
                        bossData: {
                            name: "Crowbell",
                            dmg: ["phys"],
                            tips: ["Listen for 'Avoid' sound cues.", "Play defensively, hit only after he attacks."]
                        }
                    },
                    { id: "a1-z11-exit", icon: "exit", text: "Find exit to Freythorn" }
                ]
            },
            {
                name: "Freythorn",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: {
                    confidence: "Low",
                    text: "Loop layout. Boss usually opposite entrance.",
                    speedrun: "In boss arena, black swirls point to missing Rituals."
                },
                steps: [
                    { id: "a1-z12-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a1-z12-quest", icon: "quest", text: "Complete 3 Ritual Altars" },
                    { 
                        id: "a1-z12-boss", 
                        icon: "boss", 
                        text: "Kill The King in the Mists", 
                        perm: true, 
                        note: "Reward: +30 Spirit",
                        bossData: {
                            name: "King in Mists",
                            dmg: ["phys", "chaos"],
                            tips: ["Purple Debuff: Keep moving.", "Red Debuff: Stand still.", "Very tough fight."]
                        }
                    }
                ]
            },
            {
                name: "Ogham Farmlands",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Very High",
                    text: "Exit is opposite to entrance. Lute is behind a hut/cart combo.",
                    speedrun: "Head opposite direction. Find Lute. Find Exit."
                },
                steps: [
                    { id: "a1-z13-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a1-z13-item", 
                        icon: "item", 
                        text: "Find Una's Lute", 
                        perm: true, 
                        note: "Deliver to Una. Reward: +2 Passive Points" 
                    },
                    { id: "a1-z13-exit", icon: "exit", text: "Find exit to Ogham Village" }
                ]
            },
            {
                name: "Ogham Village",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Very High",
                    text: "Executioner is always North.",
                    speedrun: "Hug right wall and head North."
                },
                steps: [
                    { id: "a1-z14-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a1-z14-item", icon: "item", text: "Find Smithing Tools", note: "Unlocks Salvaging Bench" },
                    { 
                        id: "a1-z14-boss", 
                        icon: "boss", 
                        text: "Kill The Executioner",
                        bossData: {
                            name: "Executioner",
                            dmg: ["phys", "fire"],
                            tips: ["Execution Sentence: Red axe glow = Big Explosion.", "Guillotine: Falling blade from sky."]
                        }
                    }
                ]
            },
            {
                name: "The Manor Ramparts",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Very High",
                    text: "U-shaped pattern. Follow the U.",
                    speedrun: "If U goes down, exit is Northeast. If U goes up, exit is Northwest."
                },
                steps: [
                    { id: "a1-z15-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a1-z15-opt", icon: "util", text: "Find Gallows", opt: true, note: "Reward: Uncut Support Gem" },
                    { id: "a1-z15-exit", icon: "exit", text: "Enter Ogham Manor" }
                ]
            },
            {
                name: "Ogham Manor",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "Floor 1: Candlemass is Northeast/Northwest. Floor 2: Opposite direction of entry.",
                    speedrun: "Kill Candlemass -> Floor 2 -> Floor 3 -> Boss."
                },
                steps: [
                    { id: "a1-z16-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a1-z16-boss1", 
                        icon: "boss", 
                        text: "Kill Candlemass, the Living Rite", 
                        perm: true, 
                        note: "Reward: +20 Max Life",
                        bossData: {
                            name: "Candlemass",
                            dmg: ["phys", "fire"],
                            tips: ["Flame Slash: Fake out then fireball.", "Leap Slam: Fiery AoE."]
                        }
                    },
                    { 
                        id: "a1-z16-boss2", 
                        icon: "boss", 
                        text: "Kill Count Geonor (Act Boss)",
                        bossData: {
                            name: "Count Geonor",
                            dmg: ["phys", "cold"],
                            tips: ["Phase 2 (Wolf): Fog phase -> Dodge lunges.", "Watch for arena-wide AoE."]
                        }
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // ACT 2: VASTIRI
    // =========================================================================
    {
        act: "Act 2: Vastiri",
        levels: "16-28",
        zones: [
            {
                name: "Vastiri Outskirts",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Medium",
                    text: "Follow the 'lean' of the town entrance (Left or Right).",
                    speedrun: "Hug the wall corresponding to the town's lean."
                },
                steps: [
                    { id: "a2-z1-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a2-z1-boss", 
                        icon: "boss", 
                        text: "Kill Rathbreaker",
                        bossData: {
                            name: "Rathbreaker",
                            dmg: ["phys"],
                            tips: ["Avoid cliffs (spearmen).", "Rectangular javelin barrage."]
                        }
                    },
                    { id: "a2-z1-town", icon: "town", text: "Enter The Ardura Caravan" }
                ]
            },
            {
                name: "The Ardura Caravan",
                type: "town",
                icon: "town",
                steps: [
                    { id: "a2-z2-npc", icon: "npc", text: "Talk to Sekhema Asala & Hooded One" },
                    { id: "a2-z2-item", icon: "item", text: "Use Desert Map to Mawdun Quarry" }
                ]
            },
            {
                name: "Mawdun Quarry",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "S-shape or Z-shape. Follow bridges.",
                    speedrun: "Hug a wall and follow bridges."
                },
                steps: [
                    { id: "a2-z3-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a2-z3-exit", icon: "exit", text: "Find exit to Mawdun Mine" }
                ]
            },
            {
                name: "Mawdun Mine",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Very High",
                    text: "Diamond shape. Start bottom, Boss top.",
                    speedrun: "Keep moving North/Up."
                },
                steps: [
                    { id: "a2-z4-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a2-z4-boss", 
                        icon: "boss", 
                        text: "Kill Rudja, the Dread Engineer",
                        bossData: {
                            name: "Rudja",
                            dmg: ["phys", "fire"],
                            tips: ["Oil Grenade: Slows + Fire Exposure.", "Explosive Grenades: Detonate after delay."]
                        }
                    },
                    { id: "a2-z4-npc", icon: "npc", text: "Free Risu" }
                ]
            },
            {
                name: "Traitor's Passage",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Low",
                    text: "Follow Yellow Paper Seals to find Balbala.",
                    speedrun: "Follow seals for Ascendancy item."
                },
                steps: [
                    { id: "a2-z5-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a2-z5-boss", 
                        icon: "boss", 
                        text: "Kill Balbala, the Traitor", 
                        note: "Get Djinn Barya (Ascendancy)",
                        bossData: {
                            name: "Balbala",
                            dmg: ["phys", "fire", "chaos"],
                            tips: ["Hide and Seek: Find her in the gas.", "Golden Barya: Don't let the shadow spawn."]
                        }
                    },
                    { id: "a2-z5-exit", icon: "exit", text: "Find exit to Halani Gates" }
                ]
            },
            {
                name: "The Halani Gates",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Very High",
                    text: "Narrow funnel. Head opposite direction of entry.",
                    speedrun: "Follow bridges."
                },
                steps: [
                    { id: "a2-z6-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a2-z6-boss", 
                        icon: "boss", 
                        text: "Kill Jamanra, the Risen King",
                        bossData: {
                            name: "Jamanra",
                            dmg: ["phys", "light", "fire"],
                            tips: ["Flameblast: Stand in the small circle near sword.", "Obsidian Storm: Avoid tornado."]
                        }
                    }
                ]
            },
            {
                name: "Keth",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Medium",
                    text: "Square layout. Kabala is on the corners.",
                    speedrun: "Run outside edges to find Venom Pit."
                },
                steps: [
                    { id: "a2-z7-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a2-z7-boss", 
                        icon: "boss", 
                        text: "Kill Kabala, Constrictor Queen", 
                        perm: true, 
                        note: "Reward: +2 Passive Points",
                        bossData: {
                            name: "Kabala",
                            dmg: ["phys"],
                            tips: ["Bone Cage: Find the opening or break a wall.", "Death Nova: Explosive projectiles."]
                        }
                    },
                    { id: "a2-z7-item", icon: "item", text: "Find Kabala Clan Relic" },
                    { id: "a2-z7-exit", icon: "exit", text: "Find exit to The Lost City" }
                ]
            },
            {
                name: "The Lost City",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Medium",
                    text: "Two rectangles separated by a V-Bridge.",
                    speedrun: "Find V-Bridge -> Cross -> Find Exit on far wall."
                },
                steps: [
                    { id: "a2-z8-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a2-z8-exit", icon: "exit", text: "Find exit to Buried Shrines" }
                ]
            },
            {
                name: "Buried Shrines",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: {
                    confidence: "High",
                    text: "Boss tile looks like a Crown.",
                    speedrun: "Look for Crown tile."
                },
                steps: [
                    { id: "a2-z9-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a2-z9-opt", icon: "util", text: "Elemental Offering Event", opt: true, note: "Reward: Res Ring" },
                    { 
                        id: "a2-z9-boss", 
                        icon: "boss", 
                        text: "Kill Azarian, the Forsaken Son", 
                        note: "Get Essence of Water",
                        bossData: {
                            name: "Azarian",
                            dmg: ["phys", "fire"],
                            tips: ["Infernal Cyclone: Time your dodges.", "Arena shrinks with fire."]
                        }
                    }
                ]
            },
            {
                name: "Mastodon Badlands",
                type: "zone",
                icon: "exit",
                layout: { confidence: "Low", text: "Hug a wall." },
                steps: [
                    { id: "a2-z10-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a2-z10-exit", icon: "exit", text: "Find exit to The Bone Pits" }
                ]
            },
            {
                name: "The Bone Pits",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: { confidence: "High", text: "Boss room is in line with entrance." },
                steps: [
                    { id: "a2-z11-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a2-z11-item", 
                        icon: "item", 
                        text: "Find Sun Clan Relic", 
                        note: "Random drop from enemies (Green text)" 
                    },
                    { 
                        id: "a2-z11-boss", 
                        icon: "boss", 
                        text: "Kill Iktab & Ekbab", 
                        note: "Loot Horn",
                        bossData: {
                            name: "Iktab & Ekbab",
                            dmg: ["phys", "light", "fire"],
                            tips: ["Kill Iktab first (Lightning).", "Ekbab (Steed) is easier to deal with enraged."]
                        }
                    }
                ]
            },
            {
                name: "Valley of the Titans",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Medium",
                    text: "Run outside edges to find 3 Seals.",
                    speedrun: "Find Seals -> Titan Grotto."
                },
                steps: [
                    { id: "a2-z12-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a2-z12-item", 
                        icon: "item", 
                        text: "Place Relics at Altar", 
                        perm: true, 
                        note: "Choose Buff: Charm Charges or Duration" 
                    },
                    { id: "a2-z12-exit", icon: "exit", text: "Enter Titan Grotto" }
                ]
            },
            {
                name: "Titan Grotto",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: {
                    confidence: "Medium",
                    text: "Square with winding corridors. Boss on opposite side.",
                    speedrun: "Head to opposite wall."
                },
                steps: [
                    { id: "a2-z13-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a2-z13-boss", 
                        icon: "boss", 
                        text: "Kill Zalmarath, the Colossus",
                        bossData: {
                            name: "Zalmarath",
                            dmg: ["phys", "fire"],
                            tips: ["Decimation Beam: Stand behind the dagger.", "Phase 2: 12 o'clock or 3 o'clock position."]
                        }
                    }
                ]
            },
            {
                name: "Deshar",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Medium",
                    text: "Two square sections. Letter is at base of a building.",
                    speedrun: "Check building bases for Letter."
                },
                steps: [
                    { id: "a2-z14-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a2-z14-item", 
                        icon: "item", 
                        text: "Find Final Letter", 
                        perm: true, 
                        note: "Deliver to Shambrin. Reward: +2 Passive Points" 
                    },
                    { id: "a2-z14-exit", icon: "exit", text: "Find Path of Mourning" }
                ]
            },
            {
                name: "Spires of Deshar",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: {
                    confidence: "Medium",
                    text: "Tor Gul is opposite entrance. Sisters Shrine is G-shaped tile.",
                    speedrun: "Find Tor Gul first."
                },
                steps: [
                    { id: "a2-z15-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a2-z15-util", 
                        icon: "util", 
                        text: "Find Sisters of Garukhan Shrine", 
                        perm: true, 
                        note: "Reward: +10% Lightning Res" 
                    },
                    { 
                        id: "a2-z15-boss", 
                        icon: "boss", 
                        text: "Kill Tor Gul, the Defiler",
                        bossData: {
                            name: "Tor Gul",
                            dmg: ["phys", "fire", "chaos"],
                            tips: ["Flame Breath: Creates burning ground.", "Toxic Spew: Summons skeletons."]
                        }
                    }
                ]
            },
            {
                name: "The Dreadnought",
                type: "zone",
                icon: "exit",
                layout: { confidence: "High", text: "Linear. Keep moving forward." },
                steps: [
                    { id: "a2-z16-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a2-z16-boss", 
                        icon: "boss", 
                        text: "Kill Jamanra, the Abomination (Act Boss)",
                        bossData: {
                            name: "Jamanra Abomination",
                            dmg: ["phys", "light", "fire"],
                            tips: [
                                "Phase 2: Sunder has long wind-up.",
                                "Avoid Lightning Pylons.",
                                "Sandstorm: Hide behind Sekhema Asala's shield immediately.",
                                "Kill zombies quickly during Sandstorm to avoid overwhelm."
                            ]
                        }
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // ACT 3: UTZAAL
    // =========================================================================
    {
        act: "Act 3: Utzaal",
        levels: "29-42",
        zones: [
            {
                name: "Sandswept Marsh",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "Large rectangle. Exit opposite entrance.",
                    speedrun: "Find Azak Campfire for Jeweller's Orb."
                },
                steps: [
                    { id: "a3-z1-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a3-z1-boss", 
                        icon: "boss", 
                        text: "Kill Rootdredge", 
                        opt: true, 
                        note: "Reward: Lvl 9 Uncut Skill Gem",
                        bossData: {
                            name: "Rootdredge",
                            dmg: ["phys", "fire"],
                            tips: ["Corpse Missile: Dodge homing zombies."]
                        }
                    },
                    { id: "a3-z1-util", icon: "util", text: "Find Orok Campfire", opt: true, note: "Reward: Lesser Jeweller's Orb" },
                    { id: "a3-z1-town", icon: "town", text: "Enter Ziggurat Encampment" }
                ]
            },
            {
                name: "Ziggurat Encampment",
                type: "town",
                icon: "town",
                steps: [
                    { id: "a3-z2-npc", icon: "npc", text: "Talk to Alva & Oswald" },
                    { id: "a3-z2-exit", icon: "exit", text: "Exit to Jungle Ruins" }
                ]
            },
            {
                name: "Jungle Ruins",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Medium",
                    text: "Silverfist usually in top third. Venom Crypts along walls.",
                    speedrun: "Run along walls to find Crypts/Silverfist."
                },
                steps: [
                    { id: "a3-z3-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a3-z3-boss", 
                        icon: "boss", 
                        text: "Kill Mighty Silverfist", 
                        perm: true, 
                        note: "Reward: +2 Passive Points",
                        bossData: {
                            name: "Silverfist",
                            dmg: ["phys"],
                            tips: ["Hard hitting physical.", "Wait for openings."]
                        }
                    },
                    { id: "a3-z3-exit", icon: "exit", text: "Find Venom Crypts" }
                ]
            },
            {
                name: "The Venom Crypts",
                type: "zone",
                icon: "exit",
                sub: true,
                steps: [
                    { 
                        id: "a3-z4-item", 
                        icon: "item", 
                        text: "Find Venom Vial", 
                        perm: true, 
                        note: "Deliver to Servi. WARNING: Permanent Choice (Stun/Ailment/Mana)" 
                    }
                ]
            },
            {
                name: "Infested Barrens",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Medium",
                    text: "Run outside edges to find Azak Bog and Matlan Waterways.",
                    speedrun: "Tag checkpoints, do Azak Bog."
                },
                steps: [
                    { id: "a3-z5-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a3-z5-exit", icon: "exit", text: "Find The Azak Bog" }
                ]
            },
            {
                name: "The Azak Bog",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: {
                    confidence: "Medium",
                    text: "Ignagduk spawns in Top-Right quadrant.",
                    speedrun: "Head Top-Right."
                },
                steps: [
                    { id: "a3-z6-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a3-z6-boss", 
                        icon: "boss", 
                        text: "Kill Ignagduk, the Bog Witch", 
                        perm: true, 
                        note: "Reward: +30 Spirit",
                        bossData: {
                            name: "Ignagduk",
                            dmg: ["phys", "fire"],
                            tips: ["Infernal Corridor: V-shaped flame. Stand behind her.", "Do Flameskin Ritual for Fire Res."]
                        }
                    }
                ]
            },
            {
                name: "Chimeral Wetlands",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Medium",
                    text: "Machinarium entrance faces West/Left.",
                    speedrun: "Hug outside wall."
                },
                steps: [
                    { id: "a3-z7-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a3-z7-boss", 
                        icon: "boss", 
                        text: "Kill Xyclucian, the Chimera",
                        bossData: {
                            name: "Xyclucian",
                            dmg: ["phys", "light", "fire", "cold", "chaos"],
                            tips: ["Hide behind pillars for ranged attacks.", "Break pillar when he perches."]
                        }
                    },
                    { id: "a3-z7-exit", icon: "exit", text: "Enter Jiquani's Machinarium" }
                ]
            },
            {
                name: "Jiquani's Machinarium",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: {
                    confidence: "Medium",
                    text: "Find Small Soul Cores to open doors.",
                    speedrun: "Check side rooms for Cores."
                },
                steps: [
                    { id: "a3-z8-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a3-z8-boss", 
                        icon: "boss", 
                        text: "Kill Blackjaw, the Remnant", 
                        perm: true, 
                        note: "Reward: +10% Fire Res",
                        bossData: {
                            name: "Blackjaw",
                            dmg: ["phys", "fire"],
                            tips: ["Molten Lacerate: Fire projectiles + heavy strike."]
                        }
                    },
                    { id: "a3-z8-exit", icon: "exit", text: "Enter Jiquani's Sanctum" }
                ]
            },
            {
                name: "Jiquani's Sanctum",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: {
                    confidence: "High",
                    text: "Mirrored layout. Generators at back end.",
                    speedrun: "Respawn at checkpoint trick for Soul Cores."
                },
                steps: [
                    { id: "a3-z9-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a3-z9-boss", 
                        icon: "boss", 
                        text: "Kill Zicoatl, Warden of the Core", 
                        note: "Loot Large Soul Core",
                        bossData: {
                            name: "Zicoatl",
                            dmg: ["phys", "light"],
                            tips: ["Pyramid Slam: Stand outside the triangle corners.", "Lightning Conduit: Avoid connecting fonts."]
                        }
                    }
                ]
            },
            {
                name: "The Matlan Waterways",
                type: "zone",
                icon: "exit",
                layout: { confidence: "High", text: "Pull levers to lower water." },
                steps: [
                    { id: "a3-z10-item", icon: "item", text: "Use Large Soul Core to enter" },
                    { id: "a3-z10-exit", icon: "exit", text: "Find The Drowned City" }
                ]
            },
            {
                name: "The Drowned City",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Medium",
                    text: "Two large blocks. Molten Vault in bottom corner or right side.",
                    speedrun: "Find Molten Vault first."
                },
                steps: [
                    { id: "a3-z11-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a3-z11-exit", icon: "exit", text: "Find The Molten Vault" }
                ]
            },
            {
                name: "The Molten Vault",
                type: "zone",
                icon: "exit",
                sub: true,
                steps: [
                    { id: "a3-z12-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a3-z12-boss", 
                        icon: "boss", 
                        text: "Kill Mektul, the Forgemaster", 
                        note: "Unlocks Reforging Bench",
                        bossData: {
                            name: "Mektul",
                            dmg: ["phys", "fire"],
                            tips: ["Time limit: 4 mins before gold covers floor.", "Charged Slam: Straight line attack."]
                        }
                    }
                ]
            },
            {
                name: "Apex of Filth",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "Follow Lore Book direction. Boss at top wall.",
                    speedrun: "Head towards Lore Book."
                },
                steps: [
                    { id: "a3-z13-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a3-z13-boss", 
                        icon: "boss", 
                        text: "Kill Queen of Filth",
                        bossData: {
                            name: "Queen of Filth",
                            dmg: ["phys", "chaos"],
                            tips: ["Clear mushrooms to make space.", "Flattening Slam: Wind up slam."]
                        }
                    }
                ]
            },
            {
                name: "Temple of Kopec",
                type: "zone",
                icon: "exit",
                layout: { confidence: "High", text: "Triangle layout. Exit in one corner." },
                steps: [
                    { 
                        id: "a3-z14-boss", 
                        icon: "boss", 
                        text: "Kill Ketzuli, High Priest of the Sun",
                        bossData: {
                            name: "Ketzuli",
                            dmg: ["fire"],
                            tips: ["Stay in shade.", "Enrage Dash: Wait for him to stop."]
                        }
                    },
                    { id: "a3-z14-exit", icon: "exit", text: "Enter Utzaal (Past)" }
                ]
            },
            {
                name: "Utzaal (Past)",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "Same as Drowned City. Viper is where ambush was.",
                    speedrun: "Follow flat stone blocks."
                },
                steps: [
                    { id: "a3-z15-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a3-z15-boss", 
                        icon: "boss", 
                        text: "Kill Viper Napuatzi",
                        bossData: {
                            name: "Viper Napuatzi",
                            dmg: ["phys", "light", "chaos"],
                            tips: ["Arena shrinks.", "Meteors: Very hard to dodge, save flasks."]
                        }
                    },
                    { id: "a3-z15-exit", icon: "exit", text: "Enter Aggorat" }
                ]
            },
            {
                name: "Aggorat",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "Worship Platform -> Arch -> Turn Up.",
                    speedrun: "Follow the 'Atziri' chants."
                },
                steps: [
                    { id: "a3-z16-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a3-z16-item", 
                        icon: "item", 
                        text: "Sacrifice Heart at Altar", 
                        perm: true, 
                        note: "Reward: +2 Passive Points" 
                    },
                    { id: "a3-z16-exit", icon: "exit", text: "Enter Black Chambers" }
                ]
            },
            {
                name: "The Black Chambers",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "3 sections separated by bridges. Boss opposite entrance.",
                    speedrun: "Stay in middle, follow bridges."
                },
                steps: [
                    { id: "a3-z17-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a3-z17-boss", 
                        icon: "boss", 
                        text: "Kill Doryani, Royal Thaumaturge (Act Boss)",
                        bossData: {
                            name: "Doryani",
                            dmg: ["phys", "light", "cold", "fire"],
                            tips: ["Phase 2: Rotating laser altar.", "Phase 3 (Mech): Detached legs fire lasers."]
                        }
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // ACT 4: NGAMAKANUI
    // =========================================================================
    {
        act: "Act 4: Ngamakanui",
        levels: "43-54",
        zones: [
            {
                name: "Kingsmarch",
                type: "town",
                icon: "town",
                steps: [
                    { id: "a4-z1-npc", icon: "npc", text: "Talk to Makoru to Sail" }
                ]
            },
            {
                name: "Kedge Bay",
                type: "zone",
                icon: "exit",
                layout: { confidence: "High", text: "Linear. Just cross to the other side." },
                steps: [
                    { id: "a4-z4-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a4-z4-exit", icon: "exit", text: "Find Journey's End" }
                ]
            },
            {
                name: "Journey's End",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: { confidence: "Medium", text: "Long and winding. Map pushes you correct way." },
                steps: [
                    { id: "a4-z5-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a4-z5-boss1", 
                        icon: "boss", 
                        text: "Kill Captain Hartlin",
                        bossData: {
                            name: "Hartlin",
                            dmg: ["phys", "cold"],
                            tips: ["Anchor Slam: Dodge the spectral anchor.", "Cannon Barrage: Sequence fire."]
                        }
                    },
                    { 
                        id: "a4-z5-boss2", 
                        icon: "boss", 
                        text: "Kill Omniphobia, Fear Manifest", 
                        perm: true, 
                        note: "Reward: +2 Passive Points",
                        bossData: {
                            name: "Omniphobia",
                            dmg: ["phys", "chaos"],
                            tips: ["Surprise boss (Freya Hartlin)."]
                        }
                    }
                ]
            },
            // CRITICAL PATH: Shrike Island -> Free Matiki
            {
                name: "Shrike Island",
                type: "zone",
                icon: "exit",
                layout: { confidence: "High", text: "Extremely linear. Follow the road." },
                steps: [
                    { id: "a4-z10-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a4-z10-boss", 
                        icon: "boss", 
                        text: "Kill Scourge of the Skies",
                        bossData: {
                            name: "Scourge",
                            dmg: ["phys"],
                            tips: ["Visceral Slam: Leaves phys degen.", "Rain of Viscera: Keep moving."]
                        }
                    },
                    { 
                        id: "a4-z10-npc", 
                        icon: "npc", 
                        text: "Free Matiki (Prisoner)", 
                        note: "REQUIRED to unlock Eye of Hinekora." 
                    }
                ]
            },
            // UNLOCKED: Eye of Hinekora
            {
                name: "Eye of Hinekora",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "Snake-like funnel. 3 Challenge rooms.",
                    speedrun: "After 3rd room, split path: Silent Hall vs Halls of Dead."
                },
                steps: [
                    { id: "a4-z6-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a4-z6-util", 
                        icon: "util", 
                        text: "Find Silent Hall", 
                        perm: true, 
                        note: "Reward: +5% Max Mana" 
                    },
                    { id: "a4-z6-exit", icon: "exit", text: "Find Halls of the Dead" }
                ]
            },
            {
                name: "Halls of the Dead",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: {
                    confidence: "Medium",
                    text: "Rectangle. Totems in corners.",
                    speedrun: "Hug left wall to find Totems."
                },
                steps: [
                    { id: "a4-z7-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a4-z7-quest", 
                        icon: "quest", 
                        text: "Complete 3 Tests", 
                        perm: true, 
                        note: "WARNING: Permanent Stat/Res Choice (Tattoos)" 
                    },
                    { 
                        id: "a4-z7-boss", 
                        icon: "boss", 
                        text: "Kill Yama the White", 
                        perm: true, 
                        note: "Reward: +2 Passive Points",
                        bossData: {
                            name: "Yama",
                            dmg: ["phys", "chaos"],
                            tips: ["Monkey Business: Dispel clones on pillars.", "Guessing Game: Find safe zone clone."]
                        }
                    },
                    { id: "a4-z7-exit", icon: "exit", text: "Enter Trial of the Ancestors" }
                ]
            },
            // SIDE AREAS
            {
                name: "Isle of Kin",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "Medium",
                    text: "Opposite direction of dock. Primal Arena at back wall.",
                    speedrun: "Head opposite dock."
                },
                steps: [
                    { id: "a4-z2-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a4-z2-boss", 
                        icon: "boss", 
                        text: "Kill The Blind Beast",
                        bossData: {
                            name: "Blind Beast",
                            dmg: ["phys", "light"],
                            tips: ["Fulminating Fissure: Detonates fissures.", "Hasted below 50%."]
                        }
                    },
                    { id: "a4-z2-exit", icon: "exit", text: "Find Volcanic Warrens" }
                ]
            },
            {
                name: "Volcanic Warrens",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: { confidence: "Low", text: "Winding. Boss opposite entrance." },
                steps: [
                    { id: "a4-z3-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a4-z3-boss", 
                        icon: "boss", 
                        text: "Kill Krutog, Lord of Kin",
                        bossData: {
                            name: "Krutog",
                            dmg: ["phys", "light"],
                            tips: ["Corpse Toss: Explosions overlap.", "Sulphite Breath: Wide arc."]
                        }
                    }
                ]
            },
            {
                name: "Whakapanu Island",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "Complex. Diamond/Circular. Boss opposite side.",
                    speedrun: "Find Singing Caverns."
                },
                steps: [
                    { id: "a4-z8-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a4-z8-boss", 
                        icon: "boss", 
                        text: "Kill Great White One", 
                        opt: true, 
                        note: "Reward: Shark Fin (Not worth it)" 
                    },
                    { id: "a4-z8-exit", icon: "exit", text: "Find Singing Caverns" }
                ]
            },
            {
                name: "Singing Caverns",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: {
                    confidence: "High",
                    text: "Circular/Diamond. Boss opposite side.",
                    speedrun: "Find Beckoning Clam (Amulet) -> Boss."
                },
                steps: [
                    { id: "a4-z9-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a4-z9-util", icon: "util", text: "Find Beckoning Clam", opt: true, note: "Reward: Rare Amulet" },
                    { 
                        id: "a4-z9-boss", 
                        icon: "boss", 
                        text: "Kill Diamora, Song of Death",
                        bossData: {
                            name: "Diamora",
                            dmg: ["phys", "cold"],
                            tips: ["Siren Song: Avoid beam (Petrification).", "Submerge: Stand near entrance."]
                        }
                    }
                ]
            },
            {
                name: "Abandoned Prison",
                type: "zone",
                icon: "exit",
                layout: { confidence: "Low", text: "Complex. 4 variants." },
                steps: [
                    { id: "a4-z11-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a4-z11-util", 
                        icon: "util", 
                        text: "Find Goddess of Justice", 
                        perm: true, 
                        note: "Choice: Life or Mana Flask Recovery" 
                    },
                    { id: "a4-z11-exit", icon: "exit", text: "Find Solitary Confinement" }
                ]
            },
            {
                name: "Solitary Confinement",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: { confidence: "High", text: "Hug the wall with crashing waves." },
                steps: [
                    { id: "a4-z12-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a4-z12-boss", 
                        icon: "boss", 
                        text: "Kill The Prisoner",
                        bossData: {
                            name: "The Prisoner",
                            dmg: ["phys", "cold"],
                            tips: ["Regeneration: Use Ballista to stop healing.", "Blood Phase at 25%."]
                        }
                    }
                ]
            },
            {
                name: "Arastas",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "Hug top wall out of town for Bells.",
                    speedrun: "Get Bells (Currency) -> Torvian."
                },
                steps: [
                    { id: "a4-z13-wp", icon: "wp", text: "Activate Waypoint" },
                    { id: "a4-z13-util", icon: "util", text: "Loot Golden Bells", opt: true, note: "Reward: Exalted/Regal Orbs" },
                    { 
                        id: "a4-z13-boss", 
                        icon: "boss", 
                        text: "Kill Torvian, Hand of the Saviour",
                        bossData: {
                            name: "Torvian",
                            dmg: ["phys", "fire"],
                            tips: ["Rock Toss: Aim at casters on platforms.", "Beam of Order: Rotates counter-clockwise."]
                        }
                    },
                    { id: "a4-z13-exit", icon: "exit", text: "Find The Excavation" }
                ]
            },
            {
                name: "The Excavation",
                type: "zone",
                icon: "exit",
                sub: true,
                layout: {
                    confidence: "Medium",
                    text: "Two blocks connected by square. Hug a wall.",
                    speedrun: "Hug wall."
                },
                steps: [
                    { id: "a4-z14-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a4-z14-boss", 
                        icon: "boss", 
                        text: "Kill Benedictus, First Herald of Utopia",
                        bossData: {
                            name: "Benedictus",
                            dmg: ["phys", "fire", "light"],
                            tips: ["Earthen Maze: Find glowing openings.", "Meteor Strike: Dodge huge rock."]
                        }
                    }
                ]
            },
            {
                name: "Heart of the Tribe",
                type: "zone",
                icon: "exit",
                layout: {
                    confidence: "High",
                    text: "Head North. If checkpoint, go opposite.",
                    speedrun: "Head North."
                },
                steps: [
                    { id: "a4-z15-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "a4-z15-boss", 
                        icon: "boss", 
                        text: "Kill Tavakai, the Chieftain (Act Boss)",
                        bossData: {
                            name: "Tavakai",
                            dmg: ["phys", "fire", "cold", "light"],
                            tips: ["Jade Slam: Run away.", "Invoke Ancestors: Various elemental effects."]
                        }
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // INTERLUDES
    // =========================================================================
    {
        act: "Interludes",
        levels: "55-65+",
        zones: [
            {
                name: "Wolvenhold",
                type: "zone",
                icon: "boss",
                steps: [
                    { id: "int-z1-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "int-z1-boss", 
                        icon: "boss", 
                        text: "Kill Oswin, the Dread Warden", 
                        perm: true, 
                        note: "Reward: +2 Passive Skill Points",
                        bossData: {
                            name: "Oswin",
                            dmg: ["phys", "cold"],
                            tips: ["Similar to Azarian."]
                        }
                    }
                ]
            },
            {
                name: "The Khari Crossing",
                type: "zone",
                icon: "exit",
                steps: [
                    { id: "int-z2-util", icon: "util", text: "Find Molten Shrine", perm: true, note: "Reward: +5% Max Life" },
                    { 
                        id: "int-z2-boss", 
                        icon: "boss", 
                        text: "Kill Akthi & Anundr", 
                        perm: true, 
                        note: "Reward: +2 Passive Skill Points" 
                    }
                ]
            },
            {
                name: "Qimah",
                type: "zone",
                icon: "quest",
                steps: [
                    { id: "int-z3-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "int-z3-util", 
                        icon: "util", 
                        text: "Find Seven Pillars", 
                        perm: true, 
                        note: "Choose Bonus (Swappable)" 
                    }
                ]
            },
            {
                name: "Kriar Village",
                type: "zone",
                icon: "boss",
                steps: [
                    { id: "int-z4-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "int-z4-boss", 
                        icon: "boss", 
                        text: "Kill Lythara, the Wayward Spear", 
                        perm: true, 
                        note: "Reward: +40 Spirit",
                        bossData: {
                            name: "Lythara",
                            dmg: ["phys", "fire", "cold", "light", "chaos"],
                            tips: ["Damage check. Kill quickly before Wisps empower her."]
                        }
                    }
                ]
            },
            {
                name: "Howling Caves",
                type: "zone",
                icon: "boss",
                steps: [
                    { id: "int-z5-wp", icon: "wp", text: "Activate Waypoint" },
                    { 
                        id: "int-z5-boss", 
                        icon: "boss", 
                        text: "Kill The Abominable Yeti", 
                        perm: true, 
                        note: "Reward: +2 Passive Skill Points",
                        bossData: {
                            name: "Yeti",
                            dmg: ["phys", "cold"],
                            tips: ["Similar to Silverfist."]
                        }
                    }
                ]
            },
            {
                name: "End of Interludes",
                type: "town",
                icon: "town",
                steps: [
                    {
                        id: "int-final-reward",
                        icon: "npc",
                        text: "Talk to The Hooded One in Kingsmarch",
                        perm: true,
                        note: "Quest: Siege of Oriath. Reward: +2 Passive Points"
                    }
                ]
            }
        ]
    }
];
