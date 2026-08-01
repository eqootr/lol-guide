const CHAMPIONS = [
  {
    "id": "Aatrox",
    "name": "Aatrox",
    "title": "the Darkin Blade",
    "roles": [
      "Fighter"
    ],
    "difficulty": 4,
    "blurb": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
    "passive": {
      "name": "Deathbringer Stance",
      "text": "Periodically, Aatrox's next basic attack deals bonus magic damage and heals him, based on the target's max health."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "The Darkin Blade",
        "text": "Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
        "dmg": "70 + 90% AD physical damage",
        "cd": "14 → 6s"
      },
      {
        "key": "W",
        "name": "Infernal Chains",
        "text": "Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
        "dmg": "70 + 40% AD magic damage",
        "cd": "20 → 12s"
      },
      {
        "key": "E",
        "name": "Umbral Dash",
        "text": "Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
        "cd": "9 → 5s"
      },
      {
        "key": "R",
        "name": "World Ender",
        "text": "Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended.",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Garen",
        "id": 86,
        "winPrc": 25,
        "games": 8
      },
      "weak": [
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 25,
          "games": 8
        },
        {
          "name": "Shen",
          "id": 98,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Pantheon",
          "id": 80,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Sett",
          "id": 875,
          "winPrc": 83,
          "games": 6
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 71,
          "games": 7
        },
        {
          "name": "Riven",
          "id": 92,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "B",
      "winPrc": 50,
      "pickRate": 2.56,
      "games": 109,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6631,
          "name": "Stridebreaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Ahri",
    "name": "Ahri",
    "title": "the Nine-Tailed Fox",
    "roles": [
      "Mage",
      "Assassin"
    ],
    "difficulty": 5,
    "blurb": "Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward...",
    "passive": {
      "name": "Essence Theft",
      "text": "After killing 9 minions or monsters, Ahri heals. After taking down an enemy champion, Ahri heals for a greater amount."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Orb of Deception",
        "text": "Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back.",
        "dmg": "140 + 50% AP mixed damage",
        "cost": "Mana 55/65/75/85/95",
        "cd": "7s"
      },
      {
        "key": "W",
        "name": "Fox-Fire",
        "text": "Ahri gains a brief burst of Move Speed and releases three fox-fires, that lock onto and attack nearby enemies.",
        "dmg": "120 + 40% AP magic damage",
        "cost": "Mana 30",
        "cd": "10 → 6s"
      },
      {
        "key": "E",
        "name": "Charm",
        "text": "Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement abilities and causing them to walk harmlessly towards her.",
        "dmg": "240 + 85% AP magic damage",
        "cost": "Mana 60",
        "cd": "12s"
      },
      {
        "key": "R",
        "name": "Spirit Rush",
        "text": "Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown, and gains additional recasts when taking down enemy champions.",
        "dmg": "120 + 35% AP magic damage",
        "cost": "Mana 100",
        "cd": "130/115/100s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 47,
      "pickRate": 5.01,
      "games": 213,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3118,
          "name": "Malignance"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 67,
              "winPrc": 50
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 33,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 100,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8106,
              "name": "Ultimate Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Akali",
        "id": 84,
        "winPrc": 11,
        "games": 9
      },
      "weak": [
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 11,
          "games": 9
        },
        {
          "name": "Locke",
          "id": 805,
          "winPrc": 14,
          "games": 7
        },
        {
          "name": "Irelia",
          "id": 39,
          "winPrc": 20,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 88,
          "games": 8
        },
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Katarina",
          "id": 55,
          "winPrc": 75,
          "games": 8
        }
      ]
    }
  },
  {
    "id": "Akali",
    "name": "Akali",
    "title": "the Rogue Assassin",
    "roles": [
      "Assassin"
    ],
    "difficulty": 7,
    "blurb": "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one...",
    "passive": {
      "name": "Assassin's Mark",
      "text": "Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next Attack with bonus range and damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Five Point Strike",
        "text": "Akali throws out five kunai, dealing damage based on her bonus Attack Damage and Ability Power and slowing.",
        "dmg": "145 + 65% AD + 60% AP magic damage",
        "cost": "Energy 110/100/90/80/70",
        "cd": "1.5s"
      },
      {
        "key": "W",
        "name": "Twilight Shroud",
        "text": "Akali drops a cover of smoke and briefly gains Move Speed. While inside the shroud, Akali becomes invisible and unable to be selected by enemy spells and attacks. Attacking or using abilities will briefly reveal her.",
        "cd": "20 → 16s"
      },
      {
        "key": "E",
        "name": "Shuriken Flip",
        "text": "Flip backward and fire a shuriken forward, dealing magic damage. The first enemy or smoke cloud hit is marked. Re-cast to dash to the marked target, dealing additional damage.",
        "dmg": "105 + 30% AD + 33% AP magic damage",
        "cost": "Energy 30",
        "cd": "16 → 10s"
      },
      {
        "key": "R",
        "name": "Perfect Execution",
        "text": "Akali leaps in a direction, damaging enemies she strikes. Re-cast: Akali dashes in a direction, executing all enemies she strikes.",
        "dmg": "330 + 50% bonus AD + 30% AP magic damage",
        "cd": "120/90/60s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "S+",
      "winPrc": 52,
      "pickRate": 3.41,
      "games": 145,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3146,
          "name": "Hextech Gunblade"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 88,
              "winPrc": 57
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 13,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 67,
              "winPrc": 100
            },
            {
              "id": 3165,
              "name": "Morellonomicon",
              "pct": 33,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 4646,
              "name": "Stormsurge",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 50,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8106,
              "name": "Ultimate Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8451,
              "name": "Overgrowth"
            },
            {
              "id": 8444,
              "name": "Second Wind"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Diana",
        "id": 131,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Diana",
          "id": 131,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Irelia",
          "id": 39,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Galio",
          "id": 3,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Locke",
          "id": 805,
          "winPrc": 89,
          "games": 9
        },
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 89,
          "games": 9
        },
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 83,
          "games": 6
        }
      ]
    }
  },
  {
    "id": "Akshan",
    "name": "Akshan",
    "title": "the Rogue Sentinel",
    "roles": [
      "Marksman",
      "Assassin"
    ],
    "difficulty": 0,
    "blurb": "Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they...",
    "passive": {
      "name": "Dirty Fighting",
      "text": "Every three hits from Akshan's Attacks and Abilities deals bonus damage and grants him a Shield if the target was a champion. When Akshan Attacks, he fires an additional Attack for reduced damage. If he cancels the additional Attack, he instead gains Move Speed."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Avengerang",
        "text": "Akshan throws a boomerang that deals damage going out and coming back, extending its range each time it hits an enemy.",
        "dmg": "85 + 80% AD physical damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "8 → 5s"
      },
      {
        "key": "W",
        "name": "Going Rogue",
        "text": "Akshan passively marks enemy champions as Scoundrels when they kill his ally champions. If Akshan kills a Scoundrel, he resurrects the allies they killed, gains bonus gold, and clears all marks. When activated, Akshan enters camouflage and gains Move Speed and Mana Regen while moving towards Scoundrels. Akshan loses the camouflage quickly while he is not in brush or near terrain.",
        "cost": "Mana 40/30/20/10/0",
        "cd": "18 → 2s"
      },
      {
        "key": "E",
        "name": "Heroic Swing",
        "text": "Akshan fires a grappling hook into terrain then swings around it, repeatedly firing at the nearest enemy while swinging. He can jump off early or gets knocked off when colliding with champions or terrain.",
        "dmg": "75× + 15% AD + 1+ 0.3 per 100% bonus attack speed physical damage",
        "cost": "Mana 70",
        "cd": "18 → 12s"
      },
      {
        "key": "R",
        "name": "Comeuppance",
        "text": "Akshan locks onto an enemy champion and starts storing bullets. When released, he fires all stored bullets, dealing damage based on missing health to the first champion, minion, or structure hit.",
        "dmg": "0[25 / 30 / 35 / 40 / 45 ] × [1 + 00 ",
        "cost": "Mana 100",
        "cd": "100/85/70s"
      }
    ],
    "counters": {
      "best": {
        "name": "Syndra",
        "id": 134,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Syndra",
          "id": 134,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 31,
      "pickRate": 0.68,
      "games": 29,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 2523,
          "name": "Hexoptics C44"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3046,
          "name": "Phantom Dancer"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 70,
              "winPrc": null
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 30,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Alistar",
    "name": "Alistar",
    "title": "the Minotaur",
    "roles": [
      "Tank",
      "Support"
    ],
    "difficulty": 7,
    "blurb": "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly...",
    "passive": {
      "name": "Triumphant Roar",
      "text": "Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself all nearby allied champions."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Pulverize",
        "text": "Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air.",
        "dmg": "220 + 80% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "14 → 10s"
      },
      {
        "key": "W",
        "name": "Headbutt",
        "text": "Alistar rams a target with his head, dealing damage and knocking the target back.",
        "dmg": "275 + 100% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Trample",
        "text": "Alistar tramples nearby enemy units, ignoring unit collision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.",
        "dmg": "20 + 7% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "12 → 10s"
      },
      {
        "key": "R",
        "name": "Unbreakable Will",
        "text": "Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.",
        "dmg": "75%",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Pantheon",
        "id": 80,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Pantheon",
          "id": 80,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Seraphine",
          "id": 147,
          "winPrc": 33,
          "games": 6
        },
        {
          "name": "Lulu",
          "id": 117,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Leona",
          "id": 89,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Karma",
          "id": 43,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "C",
      "winPrc": 48,
      "pickRate": 1.58,
      "games": 66,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3190,
          "name": "Locket of the Iron Solari"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3109,
          "name": "Knight's Vow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3050,
              "name": "Zeke's Convergence",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3107,
              "name": "Redemption",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3002,
              "name": "Trailblazer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8439,
            "name": "Aftershock"
          },
          "minors": [
            {
              "id": 8401,
              "name": "Shield Bash"
            },
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Ambessa",
    "name": "Ambessa",
    "title": "Matriarch of War",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 10,
    "blurb": "All who know the name Medarda respect and fear the family's leader, Ambessa. As a Noxian general, she embodies a deadly combination of ruthless strength and fearless resolve in battle. Her role as matriarch is no different, requiring great cunning to...",
    "passive": {
      "name": "Drakehound's Step",
      "text": "Entering an attack or movement command while casting an ability will cause Ambessa to dash a short distance once the ability is cast, granting her next attack bonus range, damage, and attack speed, and refunding energy."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Cunning Sweep / Sundering Slam",
        "text": "Ambessa sweeps her twin drakehounds in a semicircle in front of her, dealing bonus damage to enemies hit by the blades. Striking an enemy will transform the next cast of this ability for a short period of time, causing her to slam her twin drakehounds down in a line in front of her, dealing bonus damage to the first enemy hit.",
        "dmg": [
          "Cunning Sweep: 60 + 30% bonus AD + 3% (+ 1.5% per 100 bonus AD) of the target's maximum health physical damage",
          "Sundering Slam: 75 + 45% bonus AD + 3% (+ 2% per 100 bonus AD) of the target's maximum health physical damage"
        ],
        "cost": "Energy 70",
        "cd": "14 → 10s"
      },
      {
        "key": "W",
        "name": "Repudiation",
        "text": "Ambessa gains a shield, briefly braces herself, and then slams the ground to damage nearby enemies. If she blocked any non-minion damage while bracing herself, this ability will deal increased damage.",
        "dmg": "150 + 50% bonus AD physical damage",
        "cost": "Energy 70",
        "cd": "18 → 14s"
      },
      {
        "key": "E",
        "name": "Lacerate",
        "text": "Ambessa whips her twin drakehounds around herself, damaging and slowing nearby enemies. Initiating Drakehound's Step from this ability causes her to strike a second time at the end of its dash.",
        "dmg": "120 + 60% bonus AD physical damage",
        "cost": "Energy 70",
        "cd": "13 → 9s"
      },
      {
        "key": "R",
        "name": "Public Execution",
        "text": "Ambessa blinks to the farthest enemy champion in a line of her choosing and suppresses them upon her arrival. She then slams the enemy into the ground where they take damage and are stunned.",
        "dmg": "350 + 80% bonus AD physical damage",
        "cd": "130/115/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Garen",
        "id": 86,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Tryndamere",
          "id": 23,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Fiora",
          "id": 114,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Malphite",
          "id": 54,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 41,
      "pickRate": 1.43,
      "games": 61,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6631,
          "name": "Stridebreaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Amumu",
    "name": "Amumu",
    "title": "the Sad Mummy",
    "roles": [
      "Tank",
      "Support"
    ],
    "difficulty": 3,
    "blurb": "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe...",
    "passive": {
      "name": "Cursed Touch",
      "text": "Amumu's basic attacks Curse his enemies, causing them to take bonus true damage from incoming magic damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Bandage Toss",
        "text": "Amumu tosses a sticky bandage at a target, stunning and damaging the target while he pulls himself to them.",
        "dmg": "170 + 85% AP magic damage",
        "cost": "Mana 45/50/55/60/65",
        "cd": "3s"
      },
      {
        "key": "W",
        "name": "Despair",
        "text": "Overcome by anguish, nearby enemies lose a percentage of their maximum Health each second and have their Curses refreshed.",
        "dmg": "5 + 1% (+ 0.25% per 100 AP) of target's max HP magic damage",
        "cost": "Mana/sec 8",
        "cd": "1s"
      },
      {
        "key": "E",
        "name": "Tantrum",
        "text": "Permanently reduces the physical damage Amumu would take. Amumu can unleash his rage, dealing damage to surrounding enemies. Each time Amumu is hit, the cooldown on Tantrum is reduced.",
        "dmg": "185 + 50% AP magic damage",
        "cost": "Mana 35",
        "cd": "9 → 5s"
      },
      {
        "key": "R",
        "name": "Curse of the Sad Mummy",
        "text": "Amumu entangles surrounding enemy units in bandages, applying his Curse, damaging and stunning them.",
        "dmg": "400 + 80% AP magic damage",
        "cost": "Mana 100/150/200",
        "cd": "150/125/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Bel'Veth",
        "id": 200,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Bel'Veth",
          "id": 200,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Jarvan IV",
          "id": 59,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Nocturne",
          "id": 56,
          "winPrc": 83,
          "games": 6
        },
        {
          "name": "Warwick",
          "id": 19,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "A",
      "winPrc": 55,
      "pickRate": 1.14,
      "games": 49,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Anivia",
    "name": "Anivia",
    "title": "the Cryophoenix",
    "roles": [
      "Mage"
    ],
    "difficulty": 10,
    "blurb": "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland...",
    "passive": {
      "name": "Rebirth",
      "text": "Upon taking fatal damage, Anivia reverts to an egg and is reborn with full health."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Flash Frost",
        "text": "Anivia brings her wings together and summons a sphere of ice that flies towards her opponents, chilling and damaging anyone in its path. When the sphere explodes it does moderate damage in a radius, stunning anyone in the area.",
        "dmg": "130 + 25% AP magic damage",
        "cost": "Mana 80/85/90/95/100",
        "cd": "12 → 8s"
      },
      {
        "key": "W",
        "name": "Crystallize",
        "text": "Anivia condenses the moisture in the air into an impassable wall of ice to block all movement. The wall only lasts a short duration before it melts.",
        "cost": "Mana 70",
        "cd": "17s"
      },
      {
        "key": "E",
        "name": "Frostbite",
        "text": "With a flap of her wings, Anivia blasts a freezing gust of wind at her target, dealing damage. If the target was recently hit by Flash Frost or damaged by a fully formed Glacial Storm, the damage they take is doubled.",
        "dmg": "150 + 55% AP magic damage",
        "cost": "Mana 50",
        "cd": "4s"
      },
      {
        "key": "R",
        "name": "Glacial Storm",
        "text": "Anivia summons a driving rain of ice and hail to damage her enemies and slow their advance.",
        "dmg": "30 + 6.25% AP magic damage",
        "cost": "Health 60",
        "cd": "4/3/2s"
      }
    ],
    "counters": {
      "best": {
        "name": "Malzahar",
        "id": 90,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Katarina",
          "id": 55,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Locke",
          "id": 805,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "A",
      "winPrc": 52,
      "pickRate": 1.03,
      "games": 44,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Annie",
    "name": "Annie",
    "title": "the Dark Child",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 6,
    "blurb": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable...",
    "passive": {
      "name": "Pyromania",
      "text": "After casting 4 spells, Annie's next offensive spell will stun the target. Annie begins the game and respawns with Pyromania available."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Disintegrate",
        "text": "Annie hurls a Mana infused fireball, dealing damage and refunding the Mana cost if it destroys the target.",
        "dmg": "240 + 80% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "4s"
      },
      {
        "key": "W",
        "name": "Incinerate",
        "text": "Annie casts a blazing cone of fire, dealing damage to all enemies in the area.",
        "dmg": "270 + 85% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "7s"
      },
      {
        "key": "E",
        "name": "Molten Shield",
        "text": "Grants Annie or an ally a shield, a burst of Move Speed, and damages enemies who strike her with attacks or spells.",
        "dmg": "65 + 40% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "12 → 10s"
      },
      {
        "key": "R",
        "name": "Summon: Tibbers",
        "text": "Annie wills her bear Tibbers to life, dealing damage to units in the area. Tibbers can attack and also burns enemies that stand near him.",
        "dmg": "Tibbers",
        "cost": "Mana 100",
        "cd": "130/115/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yasuo",
        "id": 157,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Yasuo",
          "id": 157,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Galio",
          "id": 3,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Fizz",
          "id": 105,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 42,
      "pickRate": 1.13,
      "games": 48,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Aphelios",
    "name": "Aphelios",
    "title": "the Weapon of the Faithful",
    "roles": [
      "Marksman"
    ],
    "difficulty": 10,
    "blurb": "Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by...",
    "passive": {
      "name": "The Hitman and the Seer",
      "text": "Aphelios wields 5 Lunari Weapons made by his sister Alune. He has access to two at a time: one main-hand and one off-hand. Each weapon has a unique Basic Attack and Ability. Attacks and abilities consume a weapon's ammo. When out of ammo, Aphelios discards the weapon and Alune summons the next of the 5."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Weapon Abilites",
        "text": "Aphelios has 5 different activated abilities, based on his main-hand weapon: Calibrum (Rifle): Long range shot that marks its target for a long-range follow-up attack. Severum (Scythe Pistol): Run fast while attacking nearby enemies with both weapons. Gravitum (Cannon): Root all enemies slowed by this weapon. Infernum (Flamethrower): Blast enemies in a cone and attack them with your off-hand weapon. Crescendum (Chakram): Deploy a sentry that shoots your off-hand weapon.",
        "cost": "Mana 10",
        "cd": "10 → 8s"
      },
      {
        "key": "W",
        "name": "Phase",
        "text": "Aphelios swaps his main-hand gun with his off-hand gun, replacing his basic attack and activated ability.",
        "cd": "0.8s"
      },
      {
        "key": "E",
        "name": "Weapon Queue System",
        "text": "Aphelios has no third ability. This slot shows the next weapon Alune will give him. Weapon order begins fixed but may change over game time -- when a weapon is out of ammo it goes to the end of the order."
      },
      {
        "key": "R",
        "name": "Moonlight Vigil",
        "text": "Fire a concentrated blast of moonlight that explodes on enemy champions. Applies the unique effect of Aphelios' main-hand gun.",
        "cost": "Mana 100",
        "cd": "120/110/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Samira",
        "id": 360,
        "winPrc": 17,
        "games": 6
      },
      "weak": [
        {
          "name": "Samira",
          "id": 360,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Caitlyn",
          "id": 51,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Tristana",
          "id": 18,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Miss Fortune",
          "id": 21,
          "winPrc": 89,
          "games": 9
        },
        {
          "name": "Syndra",
          "id": 134,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Jinx",
          "id": 222,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "A",
      "winPrc": 54,
      "pickRate": 1.65,
      "games": 71,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 2523,
          "name": "Hexoptics C44"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3046,
          "name": "Phantom Dancer"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 70,
              "winPrc": null
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 30,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Ashe",
    "name": "Ashe",
    "title": "the Frost Archer",
    "roles": [
      "Marksman",
      "Support"
    ],
    "difficulty": 4,
    "blurb": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice...",
    "passive": {
      "name": "Frost Shot",
      "text": "Ashe's attacks slow their target, causing her to deal increased damage to these targets. Ashe's critical strikes deal no bonus damage but apply an empowered slow to the target."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Ranger's Focus",
        "text": "Ashe builds up Focus by attacking. At maximum Focus, Ashe can cast Ranger's Focus to consume all stacks of Focus, temporarily increasing her Attack Speed and transforming her basic attack into a powerful flurry attack for the duration.",
        "dmg": "28% AD physical damage",
        "cost": "Mana 30"
      },
      {
        "key": "W",
        "name": "Volley",
        "text": "Ashe fires arrows in a cone for increased damage. Also applies Frost Shot.",
        "dmg": "200 + 110% bonus AD physical damage",
        "cost": "Mana 75/70/65/60/55",
        "cd": "18 → 4s"
      },
      {
        "key": "E",
        "name": "Hawkshot",
        "text": "Ashe sends her Hawk Spirit on a scouting mission anywhere on the map.",
        "cost": "Charge 1",
        "cd": "5s"
      },
      {
        "key": "R",
        "name": "Enchanted Crystal Arrow",
        "text": "Ashe fires a missile of ice in a straight line. If the arrow collides with an enemy Champion, it deals damage and stuns the Champion, stunning for longer the farther arrow has traveled. In addition, surrounding enemy units take damage and are slowed.",
        "dmg": "600 + 120% AP magic damage",
        "cost": "Mana 100",
        "cd": "100/80/60s"
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "S",
      "winPrc": 52,
      "pickRate": 4.01,
      "games": 172,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 2523,
          "name": "Hexoptics C44"
        },
        {
          "id": 3046,
          "name": "Phantom Dancer"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 88,
              "winPrc": 14
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 13,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 50,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 100,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "Optional",
          "options": [
            {
              "id": 3072,
              "name": "Bloodthirster",
              "pct": 100,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8017,
              "name": "Cut Down"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8410,
              "name": "Approach Velocity"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5011,
            "name": "Health"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Seraphine",
        "id": 147,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Seraphine",
          "id": 147,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Ezreal",
          "id": 81,
          "winPrc": 25,
          "games": 8
        },
        {
          "name": "Aphelios",
          "id": 523,
          "winPrc": 29,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Tristana",
          "id": 18,
          "winPrc": 86,
          "games": 7
        },
        {
          "name": "Ziggs",
          "id": 115,
          "winPrc": 86,
          "games": 7
        },
        {
          "name": "Mel",
          "id": 800,
          "winPrc": 80,
          "games": 5
        }
      ]
    }
  },
  {
    "id": "AurelionSol",
    "name": "Aurelion Sol",
    "title": "The Star Forger",
    "roles": [
      "Mage"
    ],
    "difficulty": 7,
    "blurb": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his...",
    "passive": {
      "name": "Cosmic Creator",
      "text": "Aurelion Sol's damaging Abilities break down enemies into stacks of Stardust , which permanently improves each of his abilities."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Breath of Light",
        "text": "Aurelion Sol channels his dragon breath for a few seconds, damaging the first enemy hit and splashing reduced damage onto nearby enemies. Each second the breath is channeled directly at an enemy will deal bonus damage, which is improved by the amount of Stardust that's been collected. This ability collects Stardust if the target is a champion.",
        "dmg": "13.13 + 6.88% AP magic damage",
        "cost": "Health 8.75/10/11.25/12.5/13.75",
        "cd": "3s"
      },
      {
        "key": "W",
        "name": "Astral Flight",
        "text": "Aurelion Sol flies over terrain in a targeted direction. While in this state, he can cast other abilities. Breath of Light no longer has a cooldown or maximum channel duration and deals increased damage while flying. Astral Flight's remaining cooldown is reduced whenever an enemy champion dies after being recently damaged by Aurelion Sol. Stardust increases Astral Flight's maximum range.",
        "dmg": "112%",
        "cost": "Mana 50/55/60/65/70",
        "cd": "22 → 16s"
      },
      {
        "key": "E",
        "name": "Singularity",
        "text": "Aurelion Sol summons a black hole, damaging enemies and slowly pulling them toward its center. This ability grants Stardust each time an enemy dies within the black hole and for each second an enemy champion is caught inside it. The center of the black hole executes enemies who are below a certain percentage of their maximum health. Stardust increases Singularity's area as well as the execution threshold.",
        "dmg": "7.5 + 3% AP magic damage",
        "cost": "Mana 90",
        "cd": "12s"
      },
      {
        "key": "R",
        "name": "Falling Star / The Skies Descend",
        "text": "Falling Star: Aurelion Sol crashes a star into the earth. This impact deals magic damage and stuns enemies while also granting Stardust for each enemy champion it hits. Gathering enough Stardust transforms Aurelion Sol's next Falling Star into The Skies Descend. The Skies Descend: Aurelion Sol drags a giant star down from the heavens with an increased impact zone and increased damage, knocking up enemies rather than stunning them. A shockwave then spreads from the edge of the impact zone, which damages and slows the enemies it hits. Stardust increases the impact area of both Falling Star and The Skies Descend.",
        "dmg": [
          "Falling Star: 350 + 75% AP magic damage",
          "The Skies Descend: 315 + 67.5% AP magic damage"
        ],
        "cost": "Mana 100",
        "cd": "120/110/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Syndra",
        "id": 134,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Syndra",
          "id": 134,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 0.96,
      "games": 41,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Aurora",
    "name": "Aurora",
    "title": "the Witch Between Worlds",
    "roles": [
      "Mage",
      "Assassin"
    ],
    "difficulty": 5,
    "blurb": "From the moment she was born, Aurora navigated life with a unique ability to move between the spirit and material realms. Determined to learn more about the spirit realm's inhabitants, she left her home to further her research and happened upon a...",
    "passive": {
      "name": "Spirit Abjuration",
      "text": "Aurora's spells and attacks exorcise spirits from the enemies she damages. Exorcised spirits follow Aurora around and heal her."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Twofold Hex",
        "text": "Aurora sends out a missile that curses any enemies it hits. She can then recast the ability to draw active curses back toward herself, damaging foes who are hit along the way.",
        "dmg": "145 + 40% AP magic damage",
        "cost": "Mana 60",
        "cd": "9 → 7s"
      },
      {
        "key": "W",
        "name": "Across the Veil",
        "text": "Aurora leaps in a direction of her choosing, entering the spirit realm upon landing, becoming invisible, and gaining Move Speed for a short duration of time.",
        "cost": "Mana 80",
        "cd": "22 → 18s"
      },
      {
        "key": "E",
        "name": "The Weirding",
        "text": "Aurora converges the realms, sending out a blast of spirit magic that damages and slows enemies before Aurora hops backward to safety.",
        "dmg": "230 + 70% AP magic damage",
        "cost": "Mana 80",
        "cd": "15 → 11s"
      },
      {
        "key": "R",
        "name": "Between Worlds",
        "text": "Aurora leaps in a direction of her choosing, releasing a shockwave that damages and slows any enemies it hits. Afterward, she creates an area that slows enemies within it and allows Aurora to teleport from one side of the area to the other.",
        "dmg": "375 + 60% AP magic damage",
        "cost": "Mana 100",
        "cd": "140/120/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yasuo",
        "id": 157,
        "winPrc": 40,
        "games": 5
      },
      "weak": [
        {
          "name": "Yasuo",
          "id": 157,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "A",
      "winPrc": 53,
      "pickRate": 1.06,
      "games": 45,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3146,
          "name": "Hextech Gunblade"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3100,
              "name": "Lich Bane",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Azir",
    "name": "Azir",
    "title": "the Emperor of the Sands",
    "roles": [
      "Mage",
      "Marksman"
    ],
    "difficulty": 9,
    "blurb": "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended...",
    "passive": {
      "name": "Shurima's Legacy",
      "text": "Azir can summon the Disc of the Sun from the ruins of allied or enemy turrets."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Conquering Sands",
        "text": "Azir sends all Sand Soldiers towards a location. Sand Soldiers deal magic damage to enemies they pass through and apply a slow for 1 second.",
        "dmg": "140 + 35% AP magic damage",
        "cost": "Mana 70/80/90/100/110",
        "cd": "14 → 6s"
      },
      {
        "key": "W",
        "name": "Arise!",
        "text": "Azir summons a Sand Soldier to attack nearby targets for him, replacing his basic attack against targets within the soldier's range. Their attacks deal magic damage to enemies in a line.",
        "dmg": "45 + 60% AP magic damage",
        "cost": "Mana 40/35/30/25/20",
        "cd": "1.5s"
      },
      {
        "key": "E",
        "name": "Shifting Sands",
        "text": "Azir shields himself briefly and dashes to one of his Sand Soldiers, damaging enemies. If he hits an enemy champion, he instantly readies a new Sand Soldier for deployment and halts his dash.",
        "dmg": "220 + 40% AP magic damage",
        "cost": "Mana 60",
        "cd": "22 → 16s"
      },
      {
        "key": "R",
        "name": "Emperor's Divide",
        "text": "Azir summons a wall of soldiers which charge forward, knocking back and damaging enemies.",
        "dmg": "600 + 75% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/105/90s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 0.38,
      "games": 16,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Bard",
    "name": "Bard",
    "title": "the Wandering Caretaker",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 9,
    "blurb": "A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic...",
    "passive": {
      "name": "Traveler's Call",
      "text": "Meeps: Bard attracts lesser spirits that assist with his basic attacks to deal extra magic damage. When Bard has collected enough Chimes , his meeps will also deal damage in an area and slow enemies hit. Chimes: Ancient chimes randomly appear for Bard to collect. These grant experience, restore mana, and provide out of combat Move Speed."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Cosmic Binding",
        "text": "Bard fires a missile which will slow the first enemy struck, and continue onward. If it strikes a wall, it will stun the initial target; if it strikes another enemy, it will stun them both.",
        "dmg": "240 + 80% AP magic damage",
        "cost": "Mana 60",
        "cd": "11 → 7s"
      },
      {
        "key": "W",
        "name": "Caretaker's Shrine",
        "text": "Reveals a Health shrine which powers up over a short time, disappearing after healing and speeding up the first ally that touches it.",
        "cost": "Mana 70"
      },
      {
        "key": "E",
        "name": "Magical Journey",
        "text": "Bard opens a portal in nearby terrain. Allies and enemies alike can take a one-way trip through that terrain by moving into the portal.",
        "cost": "Mana 30",
        "cd": "22 → 16s"
      },
      {
        "key": "R",
        "name": "Tempered Fate",
        "text": "Bard sends spirit energy arcing to a location, putting all champions, minions, monsters, and turrets hit into stasis for a brief time.",
        "cost": "Mana 100",
        "cd": "110/95/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Lulu",
        "id": 117,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Lulu",
          "id": 117,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Blitzcrank",
          "id": 53,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Senna",
          "id": 235,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Soraka",
          "id": 16,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Nautilus",
          "id": 111,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "D",
      "winPrc": 37,
      "pickRate": 1.29,
      "games": 54,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Belveth",
    "name": "Bel'Veth",
    "title": "the Empress of the Void",
    "roles": [
      "Fighter"
    ],
    "difficulty": 10,
    "blurb": "A nightmarish empress created from the raw material of an entire devoured city, Bel'Veth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from...",
    "passive": {
      "name": "Death in Lavender",
      "text": "Bel'Veth gains permanent attack speed stacks after taking down large minions and monsters and champions. She also gains temporary bonus attack speed after using an ability."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Void Surge",
        "text": "Bel'Veth dashes in a chosen direction and damages all enemies she passes through.",
        "dmg": "30 + 100% AD physical damage",
        "cd": "1s"
      },
      {
        "key": "W",
        "name": "Above and Below",
        "text": "Bel'Veth slams her tail to the ground, damaging, knocking up, and slowing her enemies.",
        "dmg": "230 + 100% bonus AD + 125% AP magic damage",
        "cd": "12 → 8s"
      },
      {
        "key": "E",
        "name": "Royal Maelstrom",
        "text": "Bel'Veth roots herself in place, channeling a storm of slashes around her that targets the lowest-health enemy and grants her lifesteal and damage reduction.",
        "dmg": "55% physical damage",
        "cd": "20 → 16s"
      },
      {
        "key": "R",
        "name": "Endless Banquet",
        "text": "Bel'Veth consumes Void coral remnants, transforming into her true form and increasing her max health, attack range, and attack speed. Consuming the Void coral remnants of a Void epic monster will grant her the power to summon Void remora.",
        "dmg": "250 + 100% AP + 25% of target's missing HP true damage",
        "cd": "1s"
      }
    ],
    "counters": {
      "best": {
        "name": "Rammus",
        "id": 33,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Rammus",
          "id": 33,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Talon",
          "id": 91,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Lee Sin",
          "id": 64,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Nocturne",
          "id": 56,
          "winPrc": 83,
          "games": 6
        },
        {
          "name": "Diana",
          "id": 131,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "S+",
      "winPrc": 53,
      "pickRate": 2.47,
      "games": 106,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Blitzcrank",
    "name": "Blitzcrank",
    "title": "the Great Steam Golem",
    "roles": [
      "Tank",
      "Support"
    ],
    "difficulty": 4,
    "blurb": "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump...",
    "passive": {
      "name": "Mana Barrier",
      "text": "Blitzcrank gains a shield based on their mana when dropping to low health."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Rocket Grab",
        "text": "Blitzcrank fires their right hand to grab an opponent on its path, dealing damage and dragging it back to them.",
        "dmg": "310 + 120% AP magic damage",
        "cost": "Mana 100",
        "cd": "20 → 16s"
      },
      {
        "key": "W",
        "name": "Overdrive",
        "text": "Blitzcrank super charges themself to get dramatically increased Move and Attack Speed. They are temporarily slowed after the effect ends.",
        "cost": "Mana 75",
        "cd": "15s"
      },
      {
        "key": "E",
        "name": "Power Fist",
        "text": "Blitzcrank charges up their fist to make the next attack deal double damage and pop their target up in the air.",
        "cost": "Mana 25",
        "cd": "9 → 5s"
      },
      {
        "key": "R",
        "name": "Static Field",
        "text": "Enemies attacked by Blitzcrank are marked and take lightning damage after 1 second. Additionally, Blitzcrank can activate this ability to remove nearby enemies' shields, damage them, and silence them briefly.",
        "dmg": "150 + 50% AP + 2% maximum mana magic damage",
        "cost": "Mana 100",
        "cd": "60/40/20s"
      }
    ],
    "counters": {
      "best": {
        "name": "Maokai",
        "id": 57,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Maokai",
          "id": 57,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Leona",
          "id": 89,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Pantheon",
          "id": 80,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Lulu",
          "id": 117,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Nami",
          "id": 267,
          "winPrc": 78,
          "games": 9
        },
        {
          "name": "Vel'Koz",
          "id": 161,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "S+",
      "winPrc": 55,
      "pickRate": 2.82,
      "games": 118,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3190,
          "name": "Locket of the Iron Solari"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3109,
          "name": "Knight's Vow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3050,
              "name": "Zeke's Convergence",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3107,
              "name": "Redemption",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3002,
              "name": "Trailblazer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8439,
            "name": "Aftershock"
          },
          "minors": [
            {
              "id": 8401,
              "name": "Shield Bash"
            },
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Brand",
    "name": "Brand",
    "title": "the Burning Vengeance",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 4,
    "blurb": "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the...",
    "passive": {
      "name": "Blaze",
      "text": "Brand's spells light his targets ablaze, dealing damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion or large monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Sear",
        "text": "Brand launches a ball of fire forward that deals magic damage. If the target is ablaze, Sear will stun the target.",
        "dmg": "190 + 65% AP magic damage",
        "cost": "Mana 70",
        "cd": "8 → 6s"
      },
      {
        "key": "W",
        "name": "Pillar of Flame",
        "text": "After a short delay, Brand creates a Pillar of Flame at a target area, dealing magic damage to enemy units within the area. Units that are ablaze take an additional 25% damage.",
        "dmg": "255 + 60% AP magic damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "10 → 8s"
      },
      {
        "key": "E",
        "name": "Conflagration",
        "text": "Brand conjures a powerful blast at his target that spreads to nearby enemies, dealing magic damage. If the target is ablaze, Conflagration's spread is doubled.",
        "dmg": "155 + 60% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "13 → 9s"
      },
      {
        "key": "R",
        "name": "Pyroclasm",
        "text": "Brand unleashes a devastating torrent of fire that bounces up to 5 times off of Brand and nearby enemies, dealing magic damage to enemies each time bounce. Bounces prioritize stacking Blaze to max on Champions. If a target is ablaze, Pyroclasm will briefly slow them.",
        "dmg": "250 + 25% AP magic damage",
        "cost": "Mana 100",
        "cd": "110/100/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Morgana",
        "id": 25,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Morgana",
          "id": 25,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Pyke",
          "id": 555,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Soraka",
          "id": 16,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Leona",
          "id": 89,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Braum",
          "id": 201,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "B",
      "winPrc": 49,
      "pickRate": 1.7,
      "games": 71,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4005,
          "name": "Imperial Mandate"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 6653,
          "name": "Liandry's Torment"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4645,
              "name": "Shadowflame",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Braum",
    "name": "Braum",
    "title": "the Heart of the Freljord",
    "roles": [
      "Tank",
      "Support"
    ],
    "difficulty": 3,
    "blurb": "Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into...",
    "passive": {
      "name": "Concussive Blows",
      "text": "Braum's basic attacks apply Concussive Blows. Once the first stack is applied, ally basic attacks also stack Concussive Blows. Upon reaching 4 stacks, the target is stunned and takes magic damage. For the next few seconds they cannot receive new stacks, but take bonus magic damage from Braum's attacks."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Winter's Bite",
        "text": "Braum propels freezing ice from his shield, slowing and dealing magic damage. Applies a stack of Concussive Blows .",
        "dmg": "275 + 2.5% of Braum's maximum health magic damage",
        "cost": "Mana 45/50/55/60/65",
        "cd": "8 → 6s"
      },
      {
        "key": "W",
        "name": "Stand Behind Me",
        "text": "Braum leaps to a target allied champion or minion. On arrival, Braum and the ally gain Armor and Magic Resist for a few seconds.",
        "cost": "Mana 40",
        "cd": "12 → 8s"
      },
      {
        "key": "E",
        "name": "Unbreakable",
        "text": "Braum raises his shield in a direction for several seconds, intercepting all projectiles causing them to hit him and be destroyed. He negates the damage of the first attack completely and reduces the damage of all subsequent attacks from this direction.",
        "dmg": "55%",
        "cost": "Mana 30/35/40/45/50",
        "cd": "16 → 8s"
      },
      {
        "key": "R",
        "name": "Glacial Fissure",
        "text": "Braum slams the ground, knocking up enemies nearby and in a line in front of him. A fissure is left along the line that slows enemies.",
        "dmg": "450 + 60% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Swain",
        "id": 50,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Swain",
          "id": 50,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Senna",
          "id": 235,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Morgana",
          "id": 25,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Janna",
          "id": 40,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "D",
      "winPrc": 41,
      "pickRate": 1.96,
      "games": 82,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3190,
          "name": "Locket of the Iron Solari"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3109,
          "name": "Knight's Vow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3050,
              "name": "Zeke's Convergence",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3107,
              "name": "Redemption",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3002,
              "name": "Trailblazer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8439,
            "name": "Aftershock"
          },
          "minors": [
            {
              "id": 8401,
              "name": "Shield Bash"
            },
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Briar",
    "name": "Briar",
    "title": "the Restrained Hunger",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 3,
    "blurb": "A failed experiment by the Black Rose, Briar's uncontrollable bloodlust required a special pillory to focus her frenzied mind. After years of confinement, this living weapon broke free from her restraints and unleashed herself into the world. Now she's...",
    "passive": {
      "name": "Crimson Curse",
      "text": "Briar's attacks and abilities apply a stacking bleed that heals her for a portion of the damage it deals. Perpetually hungry, she gains increased healing based on her missing Health, but lacks innate Health Regeneration."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Head Rush",
        "text": "Briar leaps to a unit and hits enemies with The Heel Wheel (of Pain), stunning them and breaking their Armor.",
        "dmg": "180 + 80% bonus AD + 60% AP magic damage",
        "cost": "Health 6",
        "cd": "13 → 9s"
      },
      {
        "key": "W",
        "name": "Blood Frenzy / Snack Attack",
        "text": "Briar leaps forward and shatters her pillory, entering a Blood Frenzy that causes her to relentlessly pursue the nearest enemy (prioritizing champions). While frenzied, she gains increased Attack Speed and Move Speed, and her attacks deal damage in an area around her target. Briar can reactivate this ability while frenzied to take a CHOMP out of her target on her next attack, dealing additional damage based on their missing Health, and healing Briar based on the damage she deals.",
        "dmg": [
          "Blood Frenzy: 100% AD physical damage",
          "Snack Attack: 65 + 5% AD + 9% (+ 2.5% per 100 bonus AD) of the target's missing health physical damage"
        ],
        "cost": "Health 6",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Chilling Scream",
        "text": "Briar refocuses her mind, removing Blood Frenzy and channeling energy into a powerful scream that damages and slows enemies. While charging, she takes reduced damage and heals for a portion of her max Health. A fully charged scream knocks foes back, dealing additional damage and stunning those who collide with a wall.",
        "dmg": "220 + 100% bonus AD + 100% AP magic damage",
        "cost": "Health 6",
        "cd": "16s"
      },
      {
        "key": "R",
        "name": "Certain Death",
        "text": "Briar kicks her pillory's hemolith gemstone, marking the first champion it hits as her prey. She then beelines straight to them, fearing other surrounding enemies upon arriving at her target, and enters a state of complete hemomania. She will pursue her prey until death, gaining the benefits of Blood Frenzy as well as additional Armor, Magic Resistance, Life Steal, and Move Speed.",
        "dmg": "350 + 50% bonus AD + 120% AP magic damage",
        "cost": "Health 6",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Nasus",
        "id": 75,
        "winPrc": 14,
        "games": 7
      },
      "weak": [
        {
          "name": "Nasus",
          "id": 75,
          "winPrc": 14,
          "games": 7
        },
        {
          "name": "Bel'Veth",
          "id": 200,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Xin Zhao",
          "id": 5,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Volibear",
          "id": 106,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Jayce",
          "id": 126,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 46,
      "pickRate": 3.31,
      "games": 142,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Caitlyn",
    "name": "Caitlyn",
    "title": "the Sheriff of Piltover",
    "roles": [
      "Marksman"
    ],
    "difficulty": 6,
    "blurb": "Renowned as its finest peacekeeper, Caitlyn Kiramman is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she...",
    "passive": {
      "name": "Headshot",
      "text": "Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Piltover Peacemaker",
        "text": "Caitlyn revs up her rifle for 1 second to unleash a penetrating shot that deals physical damage (deals less damage to subsequent targets).",
        "dmg": "210 + 205% AD physical damage",
        "cost": "Mana 55/60/65/70/75",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Yordle Snap Trap",
        "text": "Caitlyn sets a trap that, when sprung, reveals and immobilizes the enemy champion for 1.5 seconds, granting Caitlyn an empowered Headshot.",
        "dmg": "215 + 30% bonus AD",
        "cost": "Mana 20",
        "cd": "0.5s"
      },
      {
        "key": "E",
        "name": "90 Caliber Net",
        "text": "Caitlyn fires a heavy net to slow her target. The recoil knocks Caitlyn back.",
        "dmg": "280 + 80% AP magic damage",
        "cost": "Mana 75",
        "cd": "16 → 8s"
      },
      {
        "key": "R",
        "name": "Ace in the Hole",
        "text": "Caitlyn takes time to line up the perfect shot, dealing massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.",
        "dmg": "650 + 100% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "90s"
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "B",
      "winPrc": 49,
      "pickRate": 8.43,
      "games": 362,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 2523,
          "name": "Hexoptics C44"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3031,
          "name": "Infinity Edge"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 67,
              "winPrc": 75
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 33,
              "winPrc": 25
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": 33
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": 50
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 67,
              "winPrc": 50
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 33,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "Optional",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 100,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8233,
              "name": "Absolute Focus"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Sivir",
        "id": 15,
        "winPrc": 14,
        "games": 7
      },
      "weak": [
        {
          "name": "Sivir",
          "id": 15,
          "winPrc": 14,
          "games": 7
        },
        {
          "name": "Veigar",
          "id": 45,
          "winPrc": 20,
          "games": 10
        },
        {
          "name": "Kog'Maw",
          "id": 96,
          "winPrc": 20,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Yunara",
          "id": 804,
          "winPrc": 86,
          "games": 7
        },
        {
          "name": "Mel",
          "id": 800,
          "winPrc": 75,
          "games": 12
        },
        {
          "name": "Aphelios",
          "id": 523,
          "winPrc": 75,
          "games": 4
        }
      ]
    }
  },
  {
    "id": "Camille",
    "name": "Camille",
    "title": "the Steel Shadow",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 4,
    "blurb": "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy...",
    "passive": {
      "name": "Adaptive Defenses",
      "text": "Basic attacks on champions grant a shield equal to a percentage of Camille's maximum health against their damage type (Physical or Magic) for a brief duration."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Precision Protocol",
        "text": "Camille's next attack deals bonus damage and grants bonus Move Speed. This spell can be recast for a short period of time, doing significantly increased bonus damage if Camille delays a period of time between the two attacks.",
        "dmg": "40% AD mixed damage",
        "cost": "Mana 25",
        "cd": "9 → 5s"
      },
      {
        "key": "W",
        "name": "Tactical Sweep",
        "text": "Camille blasts in a cone after a delay, dealing damage. Enemies in the outer half are slowed and take extra damage, while also healing Camille.",
        "dmg": "150 + 60% bonus AD physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "17 → 11s"
      },
      {
        "key": "E",
        "name": "Hookshot",
        "text": "Camille pulls herself to a wall, leaping off and knocking up enemy champions upon landing.",
        "dmg": "Wall Dive: 180 + 75% bonus AD physical damage",
        "cost": "Mana 70",
        "cd": "16 → 12s"
      },
      {
        "key": "R",
        "name": "The Hextech Ultimatum",
        "text": "Camille dashes to target champion, anchoring them to the area. She also deals bonus magic damage to the target with her basic attacks.",
        "dmg": "8% of target's current health magic damage",
        "cost": "Mana 100",
        "cd": "140/115/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yuumi",
        "id": 350,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Yuumi",
          "id": 350,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Blitzcrank",
          "id": 53,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Janna",
          "id": 40,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Lulu",
          "id": 117,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Senna",
          "id": 235,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Poppy",
          "id": 78,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "D",
      "winPrc": 48,
      "pickRate": 2.7,
      "games": 113,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3179,
          "name": "Umbral Glaive"
        },
        {
          "id": 3009,
          "name": "Boots of Swiftness"
        },
        {
          "id": 3142,
          "name": "Youmuu's Ghostblade"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6676,
              "name": "The Collector",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 9923,
            "name": "Hail of Blades"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Cassiopeia",
    "name": "Cassiopeia",
    "title": "the Serpent's Embrace",
    "roles": [
      "Mage"
    ],
    "difficulty": 10,
    "blurb": "Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was...",
    "passive": {
      "name": "Serpentine Grace",
      "text": "All Move Speed bonuses are more effective on Cassiopeia."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Noxious Blast",
        "text": "Cassiopeia blasts an area with Poison after a brief delay, granting her increased Move Speed if she hits an enemy champion.",
        "dmg": "215 + 65% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "3.5s"
      },
      {
        "key": "W",
        "name": "Miasma",
        "text": "Cassiopeia releases several clouds of poison, slowing, grounding, and lightly damaging enemies that pass through them. Grounded enemies cannot use Movement abilities.",
        "dmg": "40 + 10% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "24 → 16s"
      },
      {
        "key": "E",
        "name": "Twin Fang",
        "text": "Cassiopeia lets loose an attack that deals increased damage to Poisoned targets and heals her for a percentage of the damage dealt. If the target dies from this attack, Cassiopeia regains Mana.",
        "dmg": "100 + 55% AP magic damage",
        "cost": "Mana 40",
        "cd": "0.75s"
      },
      {
        "key": "R",
        "name": "Petrifying Gaze",
        "text": "Cassiopeia releases a swirl of magical energy from her eyes, stunning any enemies in front of her that are facing her and slowing any others with their back turned.",
        "dmg": "350 + 50% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 57,
      "pickRate": 0.54,
      "games": 23,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Chogath",
    "name": "Cho'Gath",
    "title": "the Terror of the Void",
    "roles": [
      "Tank",
      "Mage"
    ],
    "difficulty": 5,
    "blurb": "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts...",
    "passive": {
      "name": "Carnivore",
      "text": "Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Rupture",
        "text": "Ruptures the ground at target location, popping enemy units into the air, dealing damage and slowing them.",
        "dmg": "320 + 100% AP magic damage",
        "cost": "Mana 50",
        "cd": "6s"
      },
      {
        "key": "W",
        "name": "Feral Scream",
        "text": "Cho'Gath unleashes a terrible scream at enemies in a cone, dealing magic damage and Silencing enemies for a few seconds.",
        "dmg": "280 + 70% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "11 → 9s"
      },
      {
        "key": "E",
        "name": "Vorpal Spikes",
        "text": "Cho'Gath's attacks release deadly spikes, dealing damage and slowing all enemy units in front of him.",
        "dmg": "100 + 30% AP + 3.5% (+ 0.5% per Feast stack) of target's max HP magic damage",
        "cost": "Mana 30",
        "cd": "8 → 4s"
      },
      {
        "key": "R",
        "name": "Feast",
        "text": "Devours an enemy unit, dealing a high amount of true damage. If the target is killed, Cho'Gath grows, gaining maximum Health.",
        "dmg": "650 + 50% AP + 10% bonus health true damage",
        "cost": "Mana 100",
        "cd": "80/70/60s"
      }
    ],
    "counters": {
      "best": {
        "name": "Mordekaiser",
        "id": 82,
        "winPrc": 40,
        "games": 5
      },
      "weak": [
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 1.48,
      "games": 63,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Corki",
    "name": "Corki",
    "title": "the Daring Bombardier",
    "roles": [
      "Marksman",
      "Mage"
    ],
    "difficulty": 6,
    "blurb": "The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He...",
    "passive": {
      "name": "Hextech Munitions",
      "text": "A percentage of Corki's basic attack damage is dealt as bonus true damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Phosphorus Bomb",
        "text": "Corki fires a flash bomb at a target location, dealing magic damage to enemies in the area. This attack additionally reveals units in the area for a duration.",
        "dmg": "270 + 120% bonus AD + 100% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "9 → 7s"
      },
      {
        "key": "W",
        "name": "Valkyrie",
        "text": "Corki flies a short distance, dropping bombs that create a trail of fire that damages opponents who remain in it.",
        "dmg": "100 + 40% bonus AD + 30% AP magic damage",
        "cost": "Mana 80/85/90/95/100",
        "cd": "20 → 12s"
      },
      {
        "key": "E",
        "name": "Gatling Gun",
        "text": "Corki's gatling gun rapidly fires in a cone in front of him, dealing damage and reducing enemy Armor and Magic Resist.",
        "dmg": "17.5 + 15% bonus AD physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "12s"
      },
      {
        "key": "R",
        "name": "Missile Barrage",
        "text": "Corki fires a missile toward his target location that explodes on impact, dealing damage to enemies in an area. Corki stores missiles over time, up to a maximum. Every 3rd missile fired will be a Big One, dealing extra damage.",
        "dmg": "250 + 80% bonus AD physical damage",
        "cost": "Health 35",
        "cd": "2s"
      }
    ],
    "counters": {
      "best": null,
      "weak": [],
      "strong": []
    },
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 41,
      "pickRate": 0.51,
      "games": 22,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1055,
          "name": "Doran's Blade"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3009,
          "name": "Boots of Swiftness"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8021,
            "name": "Fleet Footwork"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Darius",
    "name": "Darius",
    "title": "the Hand of Noxus",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 2,
    "blurb": "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that...",
    "passive": {
      "name": "Hemorrhage",
      "text": "Darius' attacks and damaging abilities cause enemies to bleed for physical damage over 5 seconds, stacking up to 5 times. Darius enrages and gains massive Attack Damage when his target reaches max stacks."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Decimate",
        "text": "Darius winds up and swings his axe in a wide circle. Enemies struck by the blade take more damage than those struck by the handle. Darius heals based on enemy champions and large monsters hit by the blade.",
        "dmg": "170 + 140% AD physical damage",
        "cost": "Mana 25/30/35/40/45",
        "cd": "9 → 5s"
      },
      {
        "key": "W",
        "name": "Crippling Strike",
        "text": "Darius's next attack strikes an enemy's crucial artery. As they bleed out, their Move Speed is slowed.",
        "dmg": "60% AD physical damage",
        "cost": "Mana 40",
        "cd": "5s"
      },
      {
        "key": "E",
        "name": "Apprehend",
        "text": "Darius hones his axe, passively causing his physical damage to ignore a percentage of his target's Armor. When activated, Darius sweeps up his enemies with his axe's hook and pulls them to him.",
        "cost": "Mana 70/60/50/40/30",
        "cd": "26 → 16s"
      },
      {
        "key": "R",
        "name": "Noxian Guillotine",
        "text": "Darius leaps to an enemy champion and strikes a lethal blow, dealing true damage. This damage is increased for each stack of Hemorrhage on the target. If Noxian Guillotine is a killing blow, its cooldown is refreshed for a brief duration.",
        "dmg": "375 + 75% bonus AD true damage",
        "cost": "Mana 100/0",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Renekton",
        "id": 58,
        "winPrc": 17,
        "games": 6
      },
      "weak": [
        {
          "name": "Renekton",
          "id": 58,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 33,
          "games": 6
        },
        {
          "name": "Dr. Mundo",
          "id": 36,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Zaahen",
          "id": 904,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Teemo",
          "id": 17,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Heimerdinger",
          "id": 74,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "S+",
      "winPrc": 54,
      "pickRate": 4.49,
      "games": 191,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Diana",
    "name": "Diana",
    "title": "Scorn of the Moon",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 4,
    "blurb": "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued...",
    "passive": {
      "name": "Moonsilver Blade",
      "text": "Every third strike cleaves nearby enemies for an additional magic damage. After casting a spell, Diana gains Attack Speed for 5 seconds."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Crescent Strike",
        "text": "Unleashes a bolt of lunar energy in an arc dealing magic damage. Afflicts enemies struck with Moonlight, revealing them if they are not stealthed for 3 seconds.",
        "dmg": "210 + 70% AP magic damage",
        "cost": "Mana 50",
        "cd": "8 → 6s"
      },
      {
        "key": "W",
        "name": "Pale Cascade",
        "text": "Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength.",
        "dmg": "68 + 18% AP magic damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "15 → 9s"
      },
      {
        "key": "E",
        "name": "Lunar Rush",
        "text": "Becomes the living embodiment of the vengeful moon, dashing to an enemy and dealing magic damage. Lunar Rush has no cooldown when used to dash to an enemy afflicted with Moonlight. All other enemies will have the Moonlight debuff removed regardless of whether they were the target of Lunar Rush.",
        "dmg": "130 + 60% AP magic damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "22 → 14s"
      },
      {
        "key": "R",
        "name": "Moonfall",
        "text": "Diana reveals and draws in all nearby enemies and slows them. If Diana pulls in one or more enemy champions, the moonlight crashes down onto her after a short delay, dealing magic damage in an area around her, increased for each target beyond the first pulled.",
        "dmg": "400 + 60% AP magic damage",
        "cost": "Mana 100",
        "cd": "100/90/80s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 47,
      "pickRate": 2.07,
      "games": 88,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4646,
          "name": "Stormsurge"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 86,
              "winPrc": 50
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 14,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3165,
              "name": "Morellonomicon",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 50,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3165,
              "name": "Morellonomicon",
              "pct": 100,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8401,
              "name": "Shield Bash"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Katarina",
        "id": 55,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Katarina",
          "id": 55,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Viktor",
          "id": 112,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Zed",
          "id": 238,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 71,
          "games": 7
        },
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 67,
          "games": 3
        }
      ]
    }
  },
  {
    "id": "DrMundo",
    "name": "Dr. Mundo",
    "title": "the Madman of Zaun",
    "roles": [
      "Tank",
      "Fighter"
    ],
    "difficulty": 5,
    "blurb": "Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After \"curing\" the...",
    "passive": {
      "name": "Goes Where He Pleases",
      "text": "Dr. Mundo resists the first Immobilizing effect that hits him, instead losing Health and dropping a chemical cannister nearby. Dr. Mundo can pick it up by walking over it, restoring Health and reducing this Ability's Cooldown. Dr. Mundo also has significantly increased Health regeneration."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Infected Bonesaw",
        "text": "Dr. Mundo throws an infected bonesaw, dealing damage to the first enemy hit based on their current health and slowing them.",
        "dmg": "30% of target's current health magic damage",
        "cost": "Health 50/60/70/80/90",
        "cd": "4s"
      },
      {
        "key": "W",
        "name": "Heart Zapper",
        "text": "Dr. Mundo electrocutes himself, dealing persistent damage to nearby enemies and storing a portion of damage he takes. At the end of the duration or on Recast, Dr. Mundo deals a burst of damage to nearby enemies. If the burst hit an enemy, he heals a percentage of the stored damage.",
        "dmg": "80 + 7% bonus health magic damage",
        "cost": "Health 8",
        "cd": "17 → 15s"
      },
      {
        "key": "E",
        "name": "Blunt Force Trauma",
        "text": "Passive - Dr. Mundo gains bonus Attack Damage, increasing based on his max Health. Active - Dr. Mundo slams his “medical” bag into an enemy, dealing additional damage based on his missing Health. If the enemy dies they are swatted away, dealing damage to enemies they pass through.",
        "dmg": "45 + 7% bonus health physical damage",
        "cost": "Health 10/25/40/55/70",
        "cd": "9 → 6s"
      },
      {
        "key": "R",
        "name": "Maximum Dosage",
        "text": "Dr. Mundo pumps himself with chemicals, instantly healing a percent of his missing Health. He then gains Move Speed and regenerates a portion of his maximum Health over a long duration.",
        "cd": "120s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yone",
        "id": 777,
        "winPrc": 40,
        "games": 5
      },
      "weak": [
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Jax",
          "id": 24,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Kayle",
          "id": 10,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Darius",
          "id": 122,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "S+",
      "winPrc": 57,
      "pickRate": 2.19,
      "games": 93,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Draven",
    "name": "Draven",
    "title": "the Glorious Executioner",
    "roles": [
      "Marksman"
    ],
    "difficulty": 8,
    "blurb": "In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and...",
    "passive": {
      "name": "League of Draven",
      "text": "Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Spinning Axe",
        "text": "Draven's next attack will deal bonus physical damage. This axe will ricochet off the target high up into the air. If Draven catches it, he automatically readies another Spinning Axe. Draven can have two Spinning Axes at once.",
        "dmg": "60 + 115% bonus AD physical damage",
        "cost": "Mana 45",
        "cd": "12 → 8s"
      },
      {
        "key": "W",
        "name": "Blood Rush",
        "text": "Draven gains increased Move Speed and Attack Speed. The Move Speed bonus decreases rapidly over its duration. Catching a Spinning Axe will refresh the cooldown of Blood Rush.",
        "cost": "Mana 40/35/30/25/20",
        "cd": "12s"
      },
      {
        "key": "E",
        "name": "Stand Aside",
        "text": "Draven throws his axes, dealing physical damage to targets hit and knocking them aside. Targets hit are slowed.",
        "dmg": "215 + 50% bonus AD physical damage",
        "cost": "Mana 70",
        "cd": "18 → 14s"
      },
      {
        "key": "R",
        "name": "Whirling Death",
        "text": "Draven hurls two massive axes to deal physical damage to each unit struck. Whirling Death slowly reverses direction and returns to Draven after striking an enemy champion. Draven may also activate this ability while the axes are in flight to cause it to return early. Deals less damage for each unit hit and resets when the axes reverse direction. Executes enemies who have less health than Draven's number of Adoration stacks.",
        "dmg": "375 + 150% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "100/90/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Jinx",
        "id": 222,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Jinx",
          "id": 222,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Kai'Sa",
          "id": 145,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Ezreal",
          "id": 81,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Yunara",
          "id": 804,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "A",
      "winPrc": 58,
      "pickRate": 1.77,
      "games": 76,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 2523,
          "name": "Hexoptics C44"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3046,
          "name": "Phantom Dancer"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 70,
              "winPrc": null
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 30,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Ekko",
    "name": "Ekko",
    "title": "the Boy Who Shattered Time",
    "roles": [
      "Assassin",
      "Mage"
    ],
    "difficulty": 8,
    "blurb": "A prodigy from the rough streets of Zaun, Ekko is able to manipulate time to twist any situation to his advantage. He uses his own invention, the Z-Drive, to explore the branching possibilities of reality, crafting the perfect moment to seemingly...",
    "passive": {
      "name": "Z-Drive Resonance",
      "text": "Every third attack or damaging spell on the same target deals bonus magic damage, and grants Ekko a burst of speed if the target is a champion."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Timewinder",
        "text": "Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return.",
        "dmg": "140 + 30% AP magic damage",
        "cost": "Mana 50/60/70/80/90",
        "cd": "9 → 7s"
      },
      {
        "key": "W",
        "name": "Parallel Convergence",
        "text": "Ekko's basic attacks deal bonus magic damage to low health enemies. He can cast Parallel Convergence to split the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and stuns enemies by suspending them in time.",
        "cost": "Mana 30/35/40/45/50",
        "cd": "22 → 14s"
      },
      {
        "key": "E",
        "name": "Phase Dive",
        "text": "Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target.",
        "dmg": "150 + 40% AP magic damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "9 → 7s"
      },
      {
        "key": "R",
        "name": "Chronobreak",
        "text": "Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage.",
        "dmg": "500 + 175% AP magic damage",
        "cost": "Mana 100",
        "cd": "110/80/50s"
      }
    ],
    "counters": {
      "best": {
        "name": "Sylas",
        "id": 517,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Zed",
          "id": 238,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Riven",
          "id": 92,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Xerath",
          "id": 101,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Vladimir",
          "id": 8,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "A",
      "winPrc": 51,
      "pickRate": 1.93,
      "games": 82,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3146,
          "name": "Hextech Gunblade"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3100,
              "name": "Lich Bane",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Elise",
    "name": "Elise",
    "title": "the Spider Queen",
    "roles": [
      "Assassin",
      "Mage"
    ],
    "difficulty": 9,
    "blurb": "Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly...",
    "passive": {
      "name": "Spider Queen",
      "text": "Human Form: When Elise's abilities hit an enemy, she gains a dormant Spiderling. Spider Form: Basic attacks deal bonus magic damage and restore health to Elise."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Neurotoxin / Venomous Bite",
        "text": "Human Form: Deals damage based upon how high the target's Health is. Spider Form: Lunges at an enemy and deals damage based upon how low their Health is.",
        "dmg": [
          "Neurotoxin: 160 + 4% (+ 3% per 100 AP) of target's current health magic damage",
          "Venomous Bite: 170 + 8% (+ 3% per 100 AP) of target's missing HP magic damage"
        ],
        "cost": "Mana 80/85/90/95/100",
        "cd": "6s"
      },
      {
        "key": "W",
        "name": "Volatile Spiderling / Skittering Frenzy",
        "text": "Human Form: Releases a venom-gorged Spiderling that explodes when it nears a target. Spider Form: Elise and her Spiderlings gain Attack Speed.",
        "dmg": "Volatile Spiderling: 220 + 75% AP magic damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "12s"
      },
      {
        "key": "E",
        "name": "Cocoon / Rappel",
        "text": "Human Form: Stuns the first enemy unit hit and reveals them if they are not stealthed. Spider Form: Elise and her Spiderlings ascend into the air and then descend upon target enemy. After descending on an enemy target, Elise's bonus damage and healing from Spider Queen is increased.",
        "cost": "Mana 50",
        "cd": "12 → 10s"
      },
      {
        "key": "R",
        "name": "Spider Form",
        "text": "Transforms into a menacing spider, reducing her attack range in exchange for Move Speed, new abilities, and a Spiderling swarm that will attack her foes.",
        "cd": "3s"
      }
    ],
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 50,
      "pickRate": 0.42,
      "games": 18,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3146,
          "name": "Hextech Gunblade"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3100,
              "name": "Lich Bane",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Evelynn",
    "name": "Evelynn",
    "title": "Agony's Embrace",
    "roles": [
      "Assassin",
      "Mage"
    ],
    "difficulty": 10,
    "blurb": "Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynn's true form is unleashed. She then subjects her victim...",
    "passive": {
      "name": "Demon Shade",
      "text": "When out of combat, Evelynn enters Demon Shade. Demon Shade heals Evelynn when she is low on health and grants Camouflage after level 6."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Hate Spike",
        "text": "Evelynn strikes out with her Lasher, dealing damage to the first unit hit. Then, Evelynn can shoot a line of spikes at nearby foes a few times.",
        "dmg": "45 + 25% AP magic damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "4s"
      },
      {
        "key": "W",
        "name": "Allure",
        "text": "Evelynn curses her target, causing her next attack or spell after a delay to charm her target and reduce their magic resist.",
        "dmg": "450 + 60% AP magic damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "15 → 11s"
      },
      {
        "key": "E",
        "name": "Whiplash",
        "text": "Evelynn whips her target with her Lasher, dealing damage. She then gains Move Speed for a short duration.",
        "dmg": [
          "Whiplash: 180 + 3% (+ 1.5% per 100 AP) of target's max HP magic damage",
          "Empowered Whiplash: 240 + 4% (+ 2.5% per 100 AP) of target's max HP magic damage"
        ],
        "cost": "Mana 40/45/50/55/60",
        "cd": "8s"
      },
      {
        "key": "R",
        "name": "Last Caress",
        "text": "Evelynn briefly goes untargetable and decimates the area in front of her before warping backwards a long distance.",
        "dmg": "375 + 75% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Nocturne",
        "id": 56,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Nocturne",
          "id": 56,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Graves",
          "id": 104,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 38,
      "pickRate": 1.17,
      "games": 50,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3146,
          "name": "Hextech Gunblade"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3100,
              "name": "Lich Bane",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Ezreal",
    "name": "Ezreal",
    "title": "the Prodigal Explorer",
    "roles": [
      "Marksman",
      "Mage"
    ],
    "difficulty": 7,
    "blurb": "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way...",
    "passive": {
      "name": "Rising Spell Force",
      "text": "Ezreal gains increasing Attack Speed each time he successfully hits a spell, stacking up to 5 times."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Mystic Shot",
        "text": "Ezreal fires a damaging bolt of energy which reduces all of his cooldowns slightly if it strikes an enemy unit.",
        "dmg": "120 + 130% AD + 15% AP physical damage",
        "cost": "Mana 28/31/34/37/40",
        "cd": "5.5 → 4.5s"
      },
      {
        "key": "W",
        "name": "Essence Flux",
        "text": "Ezreal fires an orb that sticks to the first champion or objective hit. If Ezreal hits an enemy with the orb, it detonates and deals damage.",
        "dmg": "300 + 100% bonus AD + 90% AP magic damage",
        "cost": "Mana 50",
        "cd": "8s"
      },
      {
        "key": "E",
        "name": "Arcane Shift",
        "text": "Ezreal teleports to a target nearby location and fires a homing bolt which strikes the nearest enemy unit. Prioritizes enemies stuck with Essence Flux.",
        "dmg": "280 + 50% bonus AD + 75% AP magic damage",
        "cost": "Mana 70",
        "cd": "26 → 14s"
      },
      {
        "key": "R",
        "name": "Trueshot Barrage",
        "text": "Ezreal winds up before firing a powerful barrage of energy that deals massive damage to each unit it passes through (damage is reduced for minions and non-epic monsters).",
        "dmg": "750 + 100% bonus AD + 90% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/105/90s"
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 45,
      "pickRate": 5.22,
      "games": 224,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3078,
          "name": "Trinity Force"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3004,
          "name": "Manamune"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3161,
              "name": "Spear of Shojin",
              "pct": 57,
              "winPrc": 75
            },
            {
              "id": 2517,
              "name": "Endless Hunger",
              "pct": 43,
              "winPrc": 67
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3161,
              "name": "Spear of Shojin",
              "pct": 67,
              "winPrc": 50
            },
            {
              "id": 3156,
              "name": "Maw of Malmortius",
              "pct": 33,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 6694,
              "name": "Serylda's Grudge",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8304,
              "name": "Magical Footwear"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Kai'Sa",
        "id": 145,
        "winPrc": 28,
        "games": 25
      },
      "weak": [
        {
          "name": "Kai'Sa",
          "id": 145,
          "winPrc": 28,
          "games": 25
        },
        {
          "name": "Miss Fortune",
          "id": 21,
          "winPrc": 29,
          "games": 17
        },
        {
          "name": "Draven",
          "id": 119,
          "winPrc": 33,
          "games": 6
        }
      ],
      "strong": [
        {
          "name": "Ashe",
          "id": 22,
          "winPrc": 75,
          "games": 8
        },
        {
          "name": "Hwei",
          "id": 910,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Mel",
          "id": 800,
          "winPrc": 67,
          "games": 3
        }
      ]
    }
  },
  {
    "id": "Fiddlesticks",
    "name": "Fiddlesticks",
    "title": "the Ancient Fear",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 9,
    "blurb": "Something has awoken in Runeterra. Something ancient. Something terrible. The ageless horror known as Fiddlesticks stalks the edges of mortal society, drawn to areas thick with paranoia where it feeds upon terrorized victims. Wielding a jagged scythe...",
    "passive": {
      "name": "A Harmless Scarecrow",
      "text": "Fiddlesticks' trinket is replaced by scarecrow effigies."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Terrify",
        "text": "Fiddlesticks damaging enemies with spells while unseen or targeting an enemy with Terrify's activation strikes a target unit with fear, causing it to flee in terror for a duration.",
        "dmg": "9% of target's current health + 2% per 100 AP magic damage",
        "cost": "Mana 65",
        "cd": "15 → 13s"
      },
      {
        "key": "W",
        "name": "Bountiful Harvest",
        "text": "Fiddlesticks drains health from nearby enemies, dealing bonus execute damage at the end of the duration.",
        "dmg": "180 + 35% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "10 → 8s"
      },
      {
        "key": "E",
        "name": "Reap",
        "text": "Fiddlesticks slashes an area with its scythe, slowing all enemies hit and silencing enemies hit in the center of the slash.",
        "dmg": "210 + 50% AP magic damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "10 → 6s"
      },
      {
        "key": "R",
        "name": "Crowstorm",
        "text": "A murder of crows flock wildly around Fiddlesticks, dealing damage per second to all enemy units in the area.",
        "dmg": "87.5 + 12.5% AP magic damage",
        "cost": "Mana 100",
        "cd": "140/110/80s"
      }
    ],
    "counters": {
      "best": null,
      "weak": [],
      "strong": [
        {
          "name": "Vi",
          "id": 254,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 55,
      "pickRate": 0.89,
      "games": 38,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Fiora",
    "name": "Fiora",
    "title": "the Grand Duelist",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 3,
    "blurb": "The most feared duelist in all Valoran, Fiora is as renowned for her brusque manner and cunning mind as she is for the speed of her bluesteel rapier. Born to House Laurent in the kingdom of Demacia, Fiora took control of the family from her father in...",
    "passive": {
      "name": "Duelist's Dance",
      "text": "Fiora has revealed a Vital on this Champion. If she hits the Vital, she restores Health and gains Move Speed."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Lunge",
        "text": "Fiora lunges in a direction and stabs a nearby enemy, dealing physical damage and applying on-hit effects.",
        "dmg": "110 + 110% bonus AD physical damage",
        "cost": "Mana 20",
        "cd": "13 → 6s"
      },
      {
        "key": "W",
        "name": "Riposte",
        "text": "Fiora parries all incoming damage and disables for a short time, then stabs in a direction. This stab slows the first enemy champion hit, or stuns them if Fiora blocked an immobilizing effect with this ability.",
        "dmg": "270 + 100% AP magic damage",
        "cost": "Mana 50",
        "cd": "24 → 16s"
      },
      {
        "key": "E",
        "name": "Bladework",
        "text": "Fiora has increased attack speed for the next two attacks. The first attack slows the target, and the second attack will critically strike.",
        "dmg": "200% physical damage",
        "cost": "Mana 40",
        "cd": "11 → 7s"
      },
      {
        "key": "R",
        "name": "Grand Challenge",
        "text": "Fiora reveals all four Vitals on an enemy champion and gains Move Speed while near them. If Fiora hits all four Vitals or if the target dies after she has hit at least one, Fiora and her allies in the area are healed over the next few seconds.",
        "cost": "Mana 100",
        "cd": "110/90/70s"
      }
    ],
    "counters": {
      "best": {
        "name": "Sett",
        "id": 875,
        "winPrc": 14,
        "games": 7
      },
      "weak": [
        {
          "name": "Sett",
          "id": 875,
          "winPrc": 14,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Ambessa",
          "id": 799,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Malphite",
          "id": 54,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "A",
      "winPrc": 53,
      "pickRate": 1.6,
      "games": 68,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Fizz",
    "name": "Fizz",
    "title": "the Tidal Trickster",
    "roles": [
      "Assassin",
      "Fighter"
    ],
    "difficulty": 6,
    "blurb": "Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales...",
    "passive": {
      "name": "Nimble Fighter",
      "text": "Fizz can move through units and takes a flat amount of reduced damage from all sources"
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Urchin Strike",
        "text": "Fizz dashes through his target, dealing magic damage and applying on hit effects.",
        "dmg": "70 + 55% AP mixed damage",
        "cost": "Mana 50",
        "cd": "8 → 6s"
      },
      {
        "key": "W",
        "name": "Seastone Trident",
        "text": "Fizz's attacks bleed his enemies, dealing magic damage over several seconds. Fizz can empower his next attack to deal bonus damage and empower his further attacks for a short time.",
        "dmg": "60 + 30% AP magic damage",
        "cost": "Mana 30/40/50/60/70",
        "cd": "7 → 5s"
      },
      {
        "key": "E",
        "name": "Playful / Trickster",
        "text": "Fizz hops into the air, landing gracefully upon his spear and becoming untargetable. From this position, Fizz can either slam the ground or choose to jump again before smashing back down.",
        "dmg": "Playful: 280 + 90% AP magic damage",
        "cost": "Mana 75/80/85/90/95",
        "cd": "16 → 8s"
      },
      {
        "key": "R",
        "name": "Chum the Waters",
        "text": "Fizz tosses a fish in a direction that attaches to any champion that touches it, slowing the target. After a short delay, a shark erupts from the ground, knocking up the target and knocking any nearby enemies aside. All enemies hit are dealt magic damage and slowed.",
        "dmg": "350 + 80% AP magic damage",
        "cost": "Mana 100",
        "cd": "100/85/70s"
      }
    ],
    "counters": {
      "best": {
        "name": "Irelia",
        "id": 39,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Irelia",
          "id": 39,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Annie",
          "id": 1,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Hwei",
          "id": 910,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Zed",
          "id": 238,
          "winPrc": 71,
          "games": 7
        },
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Lux",
          "id": 99,
          "winPrc": 67,
          "games": 6
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "B",
      "winPrc": 50,
      "pickRate": 2.42,
      "games": 103,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3146,
          "name": "Hextech Gunblade"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3100,
              "name": "Lich Bane",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Galio",
    "name": "Galio",
    "title": "the Colossus",
    "roles": [
      "Tank",
      "Mage"
    ],
    "difficulty": 5,
    "blurb": "Outside the gleaming city of Demacia, the stone colossus Galio keeps vigilant watch. Built as a bulwark against enemy mages, he often stands motionless for decades until the presence of powerful magic stirs him to life. Once activated, Galio makes the...",
    "passive": {
      "name": "Colossal Smash",
      "text": "Every few seconds, Galio's next basic attack deals bonus magic damage in an area."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Winds of War",
        "text": "Galio fires two windblasts that converge into a large tornado that deals damage over time.",
        "dmg": "210 + 70% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "11 → 7s"
      },
      {
        "key": "W",
        "name": "Shield of Durand",
        "text": "Galio charges a defensive stance, moving slowly. Upon releasing the charge, Galio will taunt and damage nearby enemies.",
        "dmg": "45% + 4% per 100 AP + 8% per 100 bonus magic resistance + 1% per 100 bonus health magic damage",
        "cost": "Mana 50",
        "cd": "18 → 14s"
      },
      {
        "key": "E",
        "name": "Justice Punch",
        "text": "Galio will briefly step back and charge, knocking up the first enemy champion he encounters.",
        "dmg": "250 + 90% AP magic damage",
        "cost": "Mana 50",
        "cd": "11 → 7s"
      },
      {
        "key": "R",
        "name": "Hero's Entrance",
        "text": "Galio designates an ally's position as his landing spot, granting all allies in the area a magic shield. After a delay Galio smashes down location, knocking up nearby enemies.",
        "dmg": "350 + 70% AP magic damage",
        "cost": "Mana 100",
        "cd": "180/160/140s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yasuo",
        "id": 157,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Yasuo",
          "id": 157,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 43,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Annie",
          "id": 1,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "A",
      "winPrc": 50,
      "pickRate": 1.98,
      "games": 84,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Gangplank",
    "name": "Gangplank",
    "title": "the Saltwater Scourge",
    "roles": [
      "Fighter"
    ],
    "difficulty": 9,
    "blurb": "As unpredictable as he is brutal, the dethroned reaver king Gangplank is feared far and wide. Once, he ruled the port city of Bilgewater, and while his reign is over, there are those who believe this has only made him more dangerous. Gangplank would see...",
    "passive": {
      "name": "Trial by Fire",
      "text": "Every few seconds, Gangplank's melee strike will set his opponent on fire."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Parrrley",
        "text": "Shoots target, plundering Gold for each enemy unit killed.",
        "dmg": "130 + 100% AD physical damage",
        "cost": "Mana 55/50/45/40/35",
        "cd": "4.5s"
      },
      {
        "key": "W",
        "name": "Remove Scurvy",
        "text": "Eats citrus to cure crowd control effects and restore Health.",
        "cost": "Mana 60/70/80/90/100",
        "cd": "22 → 14s"
      },
      {
        "key": "E",
        "name": "Powder Keg",
        "text": "Gangplank uncovers a powder keg at target location. If he attacks it, it explodes, spreading the attack's damage to enemies in the area, slowing them.",
        "dmg": "195 physical damage",
        "cost": "Charge 1",
        "cd": "0.5s"
      },
      {
        "key": "R",
        "name": "Cannon Barrage",
        "text": "Gangplank signals his ship to bombard an area, slowing and damaging enemies.",
        "dmg": "100 + 10% AP magic damage",
        "cost": "Mana 100",
        "cd": "170/150/130s"
      }
    ],
    "counters": {
      "best": {
        "name": "Garen",
        "id": 86,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Teemo",
          "id": 17,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Illaoi",
          "id": 420,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Tryndamere",
          "id": 23,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "A",
      "winPrc": 50,
      "pickRate": 2.16,
      "games": 92,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6631,
          "name": "Stridebreaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Garen",
    "name": "Garen",
    "title": "The Might of Demacia",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 5,
    "blurb": "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its...",
    "passive": {
      "name": "Perseverance",
      "text": "If Garen has not recently been struck by damage or enemy abilities, he regenerates a percentage of his total health each second."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Decisive Strike",
        "text": "Garen gains a burst of Move Speed, breaking free of all slows affecting him. His next attack strikes a vital area of his foe, dealing bonus damage and silencing them.",
        "dmg": "150 + 50% AD physical damage",
        "cd": "8s"
      },
      {
        "key": "W",
        "name": "Courage",
        "text": "Garen passively increases his Armor and Magic Resist by killing enemies. He may also activate this ability to give him a shield and tenacity for a brief moment followed by a lesser amount of damage reduction for a longer duration.",
        "cd": "23 → 15s"
      },
      {
        "key": "E",
        "name": "Judgment",
        "text": "Garen rapidly spins his sword around his body, dealing physical damage to nearby enemies.",
        "dmg": "20 + 40% AD physical damage",
        "cd": "9s"
      },
      {
        "key": "R",
        "name": "Demacian Justice",
        "text": "Garen calls upon the might of Demacia to attempt to execute an enemy champion.",
        "dmg": "450 + 35% of target's missing HP true damage",
        "cd": "120/100/80s"
      }
    ],
    "build": {
      "role": "Top",
      "tier": "S+",
      "winPrc": 57,
      "pickRate": 4.05,
      "games": 172,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 6631,
          "name": "Stridebreaker"
        },
        {
          "id": 3046,
          "name": "Phantom Dancer"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 67,
              "winPrc": 100
            },
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 33,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 100,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3053,
              "name": "Sterak's Gage",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9105,
              "name": "Legend: Haste"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8224,
              "name": "Axiom Arcanist"
            },
            {
              "id": 8234,
              "name": "Celerity"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Renekton",
        "id": 58,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Renekton",
          "id": 58,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Cho'Gath",
          "id": 31,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Sett",
          "id": 875,
          "winPrc": 33,
          "games": 6
        }
      ],
      "strong": [
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 86,
          "games": 7
        },
        {
          "name": "Ambessa",
          "id": 799,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Tryndamere",
          "id": 23,
          "winPrc": 80,
          "games": 5
        }
      ]
    }
  },
  {
    "id": "Gnar",
    "name": "Gnar",
    "title": "the Missing Link",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 8,
    "blurb": "Gnar is a primeval yordle whose playful antics can erupt into a toddler's outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed...",
    "passive": {
      "name": "Rage Gene",
      "text": "While in combat Gnar generates Rage. At maximum Rage his next ability will transform him into Mega Gnar, granting increased survivability and access to new spells."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Boomerang Throw / Boulder Toss",
        "text": "Gnar throws a boomerang that damages and slows enemies it hits before returning to him. If he catches the boomerang its cooldown is reduced. Mega Gnar instead throws a boulder that stops on the first unit hit, damaging and slowing everything nearby. It can then be picked up to reduce the cooldown.",
        "dmg": [
          "Boomerang Throw: 165 + 125% AD physical damage",
          "Boulder Toss: 225 + 140% AD physical damage"
        ],
        "cd": "20 → 10s"
      },
      {
        "key": "W",
        "name": "Hyper / Wallop",
        "text": "Gnar's attacks and spells hype him up, dealing bonus damage and granting him Move Speed. Mega Gnar is too enraged to be hyper and instead can rear up on his hind legs and smash down on the area in front of him, stunning enemies in an area.",
        "dmg": [
          "Hyper: 40 + 14% of target's max HP + 100% AP magic damage",
          "Wallop: 165 + 100% AD physical damage"
        ],
        "cd": "7s"
      },
      {
        "key": "E",
        "name": "Hop / Crunch",
        "text": "Gnar leaps to a location and bounces off the head of any unit he lands on, traveling further. Mega Gnar is too large to bounce and instead lands with earth-shattering force, dealing damage in an area around him.",
        "dmg": [
          "Hop: 190 + 6% maximum health physical damage",
          "Crunch: 220 + 6% of his maximum health physical damage"
        ],
        "cd": "22 → 12s"
      },
      {
        "key": "R",
        "name": "GNAR!",
        "text": "Mega Gnar throws everything around him in a chosen direction, dealing damage and slowing them. Any enemy that hits a wall is stunned and takes bonus damage.",
        "dmg": "400 + 50% bonus AD + 100% AP physical damage",
        "cd": "90/60/30s"
      }
    ],
    "counters": {
      "best": null,
      "weak": [],
      "strong": [
        {
          "name": "Nasus",
          "id": 75,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Malphite",
          "id": 54,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 1.39,
      "games": 59,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Gragas",
    "name": "Gragas",
    "title": "the Rabble Rouser",
    "roles": [
      "Fighter",
      "Mage"
    ],
    "difficulty": 5,
    "blurb": "Equal parts jolly and imposing, Gragas is a massive, rowdy brewmaster who's always on the lookout for new ways to raise everyone's spirits. Hailing from parts unknown, he searches for ingredients among the unblemished wastes of the Freljord to help him...",
    "passive": {
      "name": "Happy Hour",
      "text": "Gragas periodically heals upon using a skill."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Barrel Roll",
        "text": "Gragas rolls his cask to a location, which can be activated to explode or will explode on its own after 4 seconds. The potency of the explosion increases over time. Enemies struck by the blast have their Move Speed slowed.",
        "dmg": "240 + 80% AP magic damage",
        "cost": "Mana 80",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Drunken Rage",
        "text": "Gragas samples his latest brew for 1 second. After finishing, he becomes boisterous and belligerent, dealing magic damage to all nearby enemies on his next basic attack and reducing damage received.",
        "dmg": "18% + 4% per 100 AP magic damage",
        "cost": "Mana 30",
        "cd": "5s"
      },
      {
        "key": "E",
        "name": "Body Slam",
        "text": "Gragas charges to a location and collides with the first enemy unit he comes across, dealing damage to all nearby enemy units and stunning them.",
        "dmg": "260 + 60% AP magic damage",
        "cost": "Mana 50",
        "cd": "14 → 12s"
      },
      {
        "key": "R",
        "name": "Explosive Cask",
        "text": "Gragas hurls his cask to a location, dealing damage and knocking back enemies caught in the blast radius.",
        "dmg": "400 + 80% AP magic damage",
        "cost": "Mana 100",
        "cd": "100/85/70s"
      }
    ],
    "counters": {
      "best": {
        "name": "Garen",
        "id": 86,
        "winPrc": 40,
        "games": 5
      },
      "weak": [
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 46,
      "pickRate": 0.66,
      "games": 28,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4633,
          "name": "Riftmaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3116,
          "name": "Rylai's Crystal Scepter"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6665,
              "name": "Jak'Sho, The Protean",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9101,
              "name": "Absorb Life"
            },
            {
              "id": 9105,
              "name": "Legend: Haste"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Graves",
    "name": "Graves",
    "title": "the Outlaw",
    "roles": [
      "Marksman"
    ],
    "difficulty": 3,
    "blurb": "Malcolm Graves is a renowned mercenary, gambler, and thief—a wanted man in every city and empire he has visited. Even though he has an explosive temper, he possesses a strict sense of criminal honor, often enforced at the business end of his...",
    "passive": {
      "name": "New Destiny",
      "text": "Graves' shotgun has some unique properties. He must reload when he runs out of ammo. Attacks fire 4 bullets, which cannot pass through units. Non-champions struck by multiple bullets are knocked back."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "End of the Line",
        "text": "Graves fires an explosive shell that detonates after 1 second, or after colliding with terrain.",
        "dmg": "125 + 80% bonus AD physical damage",
        "cost": "Mana 80",
        "cd": "13 → 6s"
      },
      {
        "key": "W",
        "name": "Smoke Screen",
        "text": "Graves fires a smoke canister at the target area creating a cloud of smoke that reduces sight range. Enemies caught in the initial impact are dealt magic damage and have their Move Speed reduced briefly.",
        "dmg": "260 + 60% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "26 → 18s"
      },
      {
        "key": "E",
        "name": "Quickdraw",
        "text": "Graves dashes forward gaining an Armor and Magic Resist boost for several seconds. If Graves dashes towards an enemy champion, gain two stacks of True Grit instead. Hitting enemies with basic attacks lowers the cooldown of this skill and refreshes the resistance boost.",
        "cost": "Mana 40",
        "cd": "16 → 12s"
      },
      {
        "key": "R",
        "name": "Collateral Damage",
        "text": "Graves fires an explosive shell dealing heavy damage to the first champion it hits. After hitting a champion or reaching the end of its range, the shell explodes dealing damage in a cone.",
        "dmg": "575 + 150% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "100/80/60s"
      }
    ],
    "build": {
      "role": "Jungle",
      "tier": "S+",
      "winPrc": 53,
      "pickRate": 4.55,
      "games": 195,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 50,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 67,
              "winPrc": 50
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 33,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 6673,
              "name": "Immortal Shieldbow",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 50,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8128,
            "name": "Dark Harvest"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Vi",
        "id": 254,
        "winPrc": 25,
        "games": 8
      },
      "weak": [
        {
          "name": "Vi",
          "id": 254,
          "winPrc": 25,
          "games": 8
        },
        {
          "name": "Jarvan IV",
          "id": 59,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Zac",
          "id": 154,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Master Yi",
          "id": 11,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Rammus",
          "id": 33,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Evelynn",
          "id": 28,
          "winPrc": 67,
          "games": 3
        }
      ]
    }
  },
  {
    "id": "Gwen",
    "name": "Gwen",
    "title": "The Hallowed Seamstress",
    "roles": [
      "Fighter"
    ],
    "difficulty": 5,
    "blurb": "A former doll transformed and brought to life by magic, Gwen wields the very tools that once created her. She carries the weight of her maker's love with every step, taking nothing for granted. At her command is the Hallowed Mist, an ancient and...",
    "passive": {
      "name": "A Thousand Cuts",
      "text": "Gwen's attacks deal bonus magic damage based on the targets health. She heals for a portion of the damage dealt to champions by this effect."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Snip Snip!",
        "text": "Gwen snips her scissors in a cone up to 6 times dealing magic damage. Gwen deals true damage to units in the center and applies her passive to them on each snip.",
        "dmg": "30 + 2% AP mixed damage",
        "cost": "Mana 40",
        "cd": "6.5 → 3.5s"
      },
      {
        "key": "W",
        "name": "Hallowed Mist",
        "text": "Gwen summons mist that protects her from enemies outside of it. She can only be targeted by enemies who enter the mist.",
        "cost": "Mana 60",
        "cd": "22 → 18s"
      },
      {
        "key": "E",
        "name": "Skip 'n Slash",
        "text": "Gwen dashes a short distance then gains Attack Speed, attack range, and magic damage On-Hit for a few seconds. If she hits an enemy during that time, this Ability's cooldown is partially refunded.",
        "dmg": "20 + 25% AP magic damage",
        "cost": "Mana 35",
        "cd": "12 → 8s"
      },
      {
        "key": "R",
        "name": "Needlework",
        "text": "Gwen hurls a needle that slows enemies hit, deals magic damage, and applies A Thousand Cuts to champions hit. This ability can be cast up to two more times, with each cast throwing additional needles and dealing more damage.",
        "dmg": "90 + 8% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Jax",
        "id": 24,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Jax",
          "id": 24,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Tryndamere",
          "id": 23,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Riven",
          "id": 92,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Yorick",
          "id": 83,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "A",
      "winPrc": 59,
      "pickRate": 1.08,
      "games": 46,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4633,
          "name": "Riftmaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3116,
          "name": "Rylai's Crystal Scepter"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6665,
              "name": "Jak'Sho, The Protean",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9101,
              "name": "Absorb Life"
            },
            {
              "id": 9105,
              "name": "Legend: Haste"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Hecarim",
    "name": "Hecarim",
    "title": "the Shadow of War",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 6,
    "blurb": "Hecarim is a spectral fusion of man and beast, cursed to ride down the souls of the living for all eternity. When the Blessed Isles fell into shadow, this proud knight was obliterated by the destructive energies of the Ruination, along with all his...",
    "passive": {
      "name": "Warpath",
      "text": "Hecarim gains Attack Damage equal to a percentage of his bonus Move Speed."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Rampage",
        "text": "Hecarim cleaves nearby enemies dealing physical damage. If Hecarim damages at least one enemy, he increases the damage and lowers the cooldown of subsequent Rampages.",
        "dmg": "160 + 90% bonus AD physical damage",
        "cost": "Mana 28/26/24/22/20",
        "cd": "4s"
      },
      {
        "key": "W",
        "name": "Spirit of Dread",
        "text": "Hecarim gains Armor and Magic Resist. Hecarim deals magic damage to nearby enemies, and gains Health equal to a percentage of any damage those enemies suffer.",
        "dmg": "60 + 20% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "14s"
      },
      {
        "key": "E",
        "name": "Devastating Charge",
        "text": "Hecarim gains increasing Move Speed and can move through units for a short duration. His next attack knocks the target back and deals additional physical damage based on the distance he has traveled since activating the ability.",
        "dmg": "90 + 50% bonus AD physical damage",
        "cost": "Mana 60",
        "cd": "20 → 16s"
      },
      {
        "key": "R",
        "name": "Onslaught of Shadows",
        "text": "Hecarim summons spectral riders and charges forward, dealing magic damage in a line. Hecarim creates a shockwave when he finishes his charge, causing nearby enemies to flee in terror.",
        "dmg": "350 + 100% AP magic damage",
        "cost": "Mana 100",
        "cd": "140/120/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Bel'Veth",
        "id": 200,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Bel'Veth",
          "id": 200,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Zac",
          "id": 154,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Lee Sin",
          "id": 64,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Kayn",
          "id": 141,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Nocturne",
          "id": 56,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Master Yi",
          "id": 11,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "A",
      "winPrc": 61,
      "pickRate": 1.84,
      "games": 79,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Heimerdinger",
    "name": "Heimerdinger",
    "title": "the Revered Inventor",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 8,
    "blurb": "The eccentric Professor Cecil B. Heimerdinger is one of the most innovative and esteemed inventors the world has ever known. As the longest serving member of the Council of Piltover, he saw the best and the worst of the city's unending desire for...",
    "passive": {
      "name": "Hextech Affinity",
      "text": "Gain Move Speed while near allied towers and turrets deployed by Heimerdinger."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "H-28 G Evolution Turret",
        "text": "Heimerdinger lays down a rapid-fire cannon turret equipped with a secondary pass-through beam attack (turrets deal half damage to towers).",
        "cost": "Mana 20",
        "cd": "1s"
      },
      {
        "key": "W",
        "name": "Hextech Micro-Rockets",
        "text": "Heimerdinger fires long-range rockets that converge on his cursor.",
        "dmg": [
          "Hextech Micro-Rockets: 140 + 55% AP magic damage",
          "Hextech Rocket Swarm: 225 + 45% AP magic damage"
        ],
        "cost": "Mana 50/60/70/80/90",
        "cd": "11 → 7s"
      },
      {
        "key": "E",
        "name": "CH-2 Electron Storm Grenade",
        "text": "Heimerdinger lobs a grenade at a location, dealing damage to enemy units, as well as stunning anyone directly hit and slowing surrounding units.",
        "dmg": [
          "CH-2 Electron Storm Grenade: 220 + 60% AP magic damage",
          "CH-3X Lightning Grenade: 300 + 60% AP magic damage"
        ],
        "cost": "Mana 85",
        "cd": "11s"
      },
      {
        "key": "R",
        "name": "UPGRADE!!!",
        "text": "Heimerdinger invents an upgrade, causing his next spell to have increased effects.",
        "cost": "Mana 100",
        "cd": "100 → 70s"
      }
    ],
    "counters": {
      "best": {
        "name": "Darius",
        "id": 122,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Darius",
          "id": 122,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Teemo",
          "id": 17,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Sett",
          "id": 875,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Aatrox",
          "id": 266,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 1.51,
      "games": 64,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Hwei",
    "name": "Hwei",
    "title": "the Visionary",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 9,
    "blurb": "Hwei is a brooding painter who creates brilliant art in order to confront Ionia's criminals and comfort their victims. Beneath his melancholy roils a torn, emotional mind—haunted by both the vibrant visions of his imagination and the gruesome memories...",
    "passive": {
      "name": "Signature of the Visionary",
      "text": "Hwei primes enemy champions he damages with his abilities for his signature finishing touch. Hitting an enemy with a second damaging spell completes his signature, leaving it beneath them. The signature detonates after a short delay, dealing magic damage to all enemies in range."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Subject: Disaster",
        "text": "Hwei envisions a series of disasters, allowing him to paint a devastating blow. This ability replaces Hwei's abilities with damaging abilities: Devastating Fire, Severing Bolt, and Molten Fissure.",
        "dmg": [
          "Devastating Fire: 170 + 70% AP + 7% of target's max HP magic damage",
          "Severing Bolt: 160 + 25% AP magic damage",
          "Molten Fissure: 100 + 30% AP magic damage"
        ],
        "cost": "Mana 80/90/100/110/120",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Subject: Serenity",
        "text": "Hwei envisions a series of serenities, allowing him to paint invigorating settings. This ability replaces Hwei's abilities with utility abilities: Fleeting Current, Pool of Reflection, and Stirring Lights.",
        "dmg": "Stirring Lights: 60 + 15% AP magic damage",
        "cost": "Mana 90/95/100/105/110",
        "cd": "18 → 16s"
      },
      {
        "key": "E",
        "name": "Subject: Torment",
        "text": "Hwei envisions a series of torments, allowing him to paint controlling visages. This ability replaces Hwei's abilities with crowd control abilities: Grim Visage, Gaze of the Abyss, and Crushing Maw.",
        "dmg": [
          "Grim Visage: 230 + 60% AP magic damage",
          "Gaze of the Abyss: 230 + 60% AP magic damage",
          "Crushing Maw: 230 + 60% AP magic damage"
        ],
        "cost": "Mana 50/55/60/65/70",
        "cd": "13 → 11s"
      },
      {
        "key": "R",
        "name": "Spiraling Despair",
        "text": "Hwei paints a vision of pure despair. The first enemy champion struck becomes the center of an expanding painting that slows and damages nearby enemies. The vision explodes after reaching its maximum size or when the champion dies.",
        "dmg": "Spiraling Despair: 450 + 80% AP magic damage",
        "cost": "Mana 100",
        "cd": "140/115/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yone",
        "id": 777,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Lissandra",
          "id": 127,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Fizz",
          "id": 105,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Yasuo",
          "id": 157,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 45,
      "pickRate": 1.79,
      "games": 76,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Illaoi",
    "name": "Illaoi",
    "title": "the Kraken Priestess",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 4,
    "blurb": "Illaoi's powerful physique is dwarfed only by her indomitable faith. As the prophet of the Great Kraken, she uses a huge, golden idol to rip her foes' spirits from their bodies and shatter their perception of reality. All who challenge the “Truth Bearer...",
    "passive": {
      "name": "Prophet of an Elder God",
      "text": "Illaoi and the Vessels she creates spawn Tentacles on nearby impassible terrain. Tentacles swing at spirits, Vessels , and victims of Illaoi's Harsh lesson. Tentacles deal physical damage to enemies hit, and will heal Illaoi if they damage a champion."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Tentacle Smash",
        "text": "Increases the damage dealt by Tentacles. When activated, Illaoi smashes down a Tentacle that deals physical damage.",
        "dmg": "30% physical damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Harsh Lesson",
        "text": "Illaoi leaps to her target, dealing physical damage and causing nearby Tentacles to also swing at the target.",
        "dmg": "5% of target's max HP + 4% per 100 AD physical damage",
        "cost": "Mana 30",
        "cd": "4s"
      },
      {
        "key": "E",
        "name": "Test of Spirit",
        "text": "Illaoi rips the spirit from a foe's body, forcing it to stand before her. Spirits echo a percentage of the damage they take to the original target. If killed, or if the target gets too far from the spirit, the target will become a Vessel and begin spawning Tentacles.",
        "dmg": "45% + 8% per 100 AD mixed damage",
        "cost": "Mana 35/40/45/50/55",
        "cd": "16 → 12s"
      },
      {
        "key": "R",
        "name": "Leap of Faith",
        "text": "Illaoi smashes her idol into the ground, dealing physical damage to nearby enemies. A Tentacle spawns for each enemy champion hit.",
        "dmg": "350 + 50% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "120/95/70s"
      }
    ],
    "counters": {
      "best": {
        "name": "Vayne",
        "id": 67,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Vayne",
          "id": 67,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Darius",
          "id": 122,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Gangplank",
          "id": 41,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "C",
      "winPrc": 49,
      "pickRate": 1.74,
      "games": 74,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Irelia",
    "name": "Irelia",
    "title": "the Blade Dancer",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 5,
    "blurb": "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of...",
    "passive": {
      "name": "Ionian Fervor",
      "text": "When Irelia strikes enemies with spells she gains stacking bonus Attack Speed. At maximum stacks she also gains bonus damage on hit."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Bladesurge",
        "text": "Irelia dashes forward to strike her target, healing herself. If the target is Marked or dies to Bladesurge, its cooldown refreshes.",
        "dmg": "85 + 70% AD physical damage",
        "cost": "Mana 15",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Defiant Dance",
        "text": "Irelia charges a strike that deals more damage as she charges. She takes reduced physical damage during the charge.",
        "dmg": "50 + 40% AD + 40% AP physical damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "20 → 12s"
      },
      {
        "key": "E",
        "name": "Flawless Duet",
        "text": "Irelia sends out two blades which converge on each other. Enemies caught in between are damaged, stunned and Marked.",
        "dmg": "230 + 80% AP magic damage",
        "cost": "Mana 50",
        "cd": "16 → 12s"
      },
      {
        "key": "R",
        "name": "Vanguard's Edge",
        "text": "Irelia fires a massive number of blades that explode outward upon hitting an enemy champion. Enemies hit by the blades are damaged and Marked. Afterwards the blades form a wall that will damage and slow enemies that walk through it.",
        "dmg": "275 + 70% AP magic damage",
        "cost": "Mana 100",
        "cd": "125/105/85s"
      }
    ],
    "counters": {
      "best": {
        "name": "Zed",
        "id": 238,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Zed",
          "id": 238,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Veigar",
          "id": 45,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Xerath",
          "id": 101,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Zoe",
          "id": 142,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "A",
      "winPrc": 55,
      "pickRate": 1.62,
      "games": 69,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Ivern",
    "name": "Ivern",
    "title": "the Green Father",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 7,
    "blurb": "Ivern Bramblefoot, known to many as the Green Father, is a peculiar half man, half tree who roams Runeterra's forests, cultivating life everywhere he goes. He knows the secrets of the natural world, and holds deep friendships with all things that grow...",
    "passive": {
      "name": "Friend of the Forest",
      "text": "Ivern cannot attack or be attacked by non-epic monsters. Ivern can create magical groves on jungle camps which grow over time. When the grove is fully grown, Ivern may free the monsters to receive gold and experience."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Rootcaller",
        "text": "Ivern conjures a vine, dealing damage and rooting enemy targets hit. Ivern's allies can dash to the rooted target.",
        "dmg": "260 + 70% AP magic damage",
        "cost": "Mana 60",
        "cd": "14 → 10s"
      },
      {
        "key": "W",
        "name": "Brushmaker",
        "text": "In brush, Ivern and his nearby allies attacks deal bonus magic damage. Ivern can activate this ability to create a patch of brush.",
        "dmg": "50 + 20% AP magic damage",
        "cost": "Mana 30",
        "cd": "0.5s"
      },
      {
        "key": "E",
        "name": "Triggerseed",
        "text": "Ivern places a shield on an ally which explodes after a short duration slowing and damaging enemies. The shield refreshes if it hits no enemies.",
        "dmg": "150 + 80% AP magic damage",
        "cost": "Mana 70",
        "cd": "11 → 7s"
      },
      {
        "key": "R",
        "name": "Daisy!",
        "text": "Ivern summons his Sentinel friend Daisy to fight with him. Re-cast command Daisy to attack or move.",
        "cost": "Mana 100",
        "cd": "140/130/120s"
      }
    ],
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 43,
      "pickRate": 0.33,
      "games": 14,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Janna",
    "name": "Janna",
    "title": "the Storm's Fury",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 7,
    "blurb": "Armed with the power of Runeterra's gales, Janna is a mysterious, elemental wind spirit who protects the dispossessed of Zaun. Some believe she was brought into existence by the pleas of Runeterra's sailors who prayed for fair winds as they navigated...",
    "passive": {
      "name": "Tailwind",
      "text": "Janna's allies gain Move Speed moving towards her. Janna deals a portion of bonus Move Speed as bonus magic damage on hit and with Zephyr."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Howling Gale",
        "text": "By creating a localized change in pressure and temperature, Janna is able to create a small storm that grows in size with time. She can activate the spell again to release the storm. On release this storm will fly towards the direction it was cast in, dealing damage and knocking away any enemies in its path.",
        "dmg": "195 + 50% AP magic damage",
        "cost": "Mana 90/95/100/105/110",
        "cd": "14s"
      },
      {
        "key": "W",
        "name": "Zephyr",
        "text": "Janna summons an air elemental that passively increases her Move Speed and enables her to pass through units. She may also activate this ability to deal damage and slow an enemy's Move Speed.",
        "dmg": "175 + 50% AP + 30% bonus movement speed magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "8 → 6s"
      },
      {
        "key": "E",
        "name": "Eye Of The Storm",
        "text": "Janna conjures a defensive gale that shields an ally champion or turret from incoming damage and increases their Attack Damage.",
        "cost": "Mana 70/75/80/85/90",
        "cd": "16 → 12s"
      },
      {
        "key": "R",
        "name": "Monsoon",
        "text": "Janna surrounds herself in a magical storm, throwing enemies back. After the storm has settled, soothing winds heal nearby allies while the ability is active.",
        "cost": "Mana 100",
        "cd": "130/115/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Senna",
        "id": 235,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Senna",
          "id": 235,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Braum",
          "id": 201,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Lulu",
          "id": 117,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Pyke",
          "id": 555,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Camille",
          "id": 164,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Swain",
          "id": 50,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "A",
      "winPrc": 50,
      "pickRate": 1.39,
      "games": 58,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "JarvanIV",
    "name": "Jarvan IV",
    "title": "the Exemplar of Demacia",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 5,
    "blurb": "Prince Jarvan, scion of the Lightshield dynasty, is heir apparent to the throne of Demacia. Raised to be a paragon of his nation's greatest virtues, he is forced to balance the heavy expectations placed upon him with his own desire to fight on the front...",
    "passive": {
      "name": "Martial Cadence",
      "text": "Jarvan's first basic attack on an enemy deals bonus physical damage based on their current Health. This effect cannot occur again on the same enemy for a few seconds."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Dragon Strike",
        "text": "Jarvan IV extends his lance, dealing physical damage and lowering the Armor of enemies in its path. Additionally, this will pull Jarvan to his Demacian Standard, knocking up enemies in his path.",
        "dmg": "250 + 145% bonus AD physical damage",
        "cost": "Mana 45/50/55/60/65",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Golden Aegis",
        "text": "Jarvan IV calls upon the ancient kings of Demacia to shield him from harm and slow surrounding enemies.",
        "cost": "Mana 30",
        "cd": "9s"
      },
      {
        "key": "E",
        "name": "Demacian Standard",
        "text": "Jarvan IV carries the pride of Demacia, passively granting him bonus Attack Speed. Activating Demacian Standard allows Jarvan IV to place a Demacian flag that deals magic damage on impact and grants Attack Speed to nearby allied champions.",
        "dmg": "240 + 80% AP magic damage",
        "cost": "Mana 55",
        "cd": "12 → 10s"
      },
      {
        "key": "R",
        "name": "Cataclysm",
        "text": "Jarvan IV heroically leaps into battle at a target with such force that he terraforms the surrounding area to create an arena around them. Nearby enemies are damaged at the moment of impact.",
        "dmg": "450 + 180% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "120/105/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Viego",
        "id": 234,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Viego",
          "id": 234,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Ekko",
          "id": 245,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Master Yi",
          "id": 11,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Graves",
          "id": 104,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Darius",
          "id": 122,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Amumu",
          "id": 32,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 46,
      "pickRate": 2.24,
      "games": 96,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Jax",
    "name": "Jax",
    "title": "Grandmaster at Arms",
    "roles": [
      "Fighter"
    ],
    "difficulty": 5,
    "blurb": "Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was laid low by its own hubris in unleashing the Void, Jax and his kind vowed to protect what little remained...",
    "passive": {
      "name": "Relentless Assault",
      "text": "Jax's consecutive basic attacks continuously increase his Attack Speed."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Leap Strike",
        "text": "Jax leaps toward a unit. If they are an enemy, he strikes them with his weapon.",
        "dmg": "225 + 100% bonus AD physical damage",
        "cost": "Mana 65",
        "cd": "8 → 6s"
      },
      {
        "key": "W",
        "name": "Empower",
        "text": "Jax charges his weapon with energy, causing his next attack to deal additional damage.",
        "dmg": "190 + 60% AP magic damage",
        "cost": "Mana 30",
        "cd": "7 → 3s"
      },
      {
        "key": "E",
        "name": "Counter Strike",
        "text": "Jax's combat prowess allows him to dodge all incoming attacks for a short duration and then quickly counterattack, stunning all surrounding enemies.",
        "dmg": "160 + 70% AP + 3.5% of target's max HP magic damage",
        "cost": "Mana 50/60/70/80/90",
        "cd": "17 → 9s"
      },
      {
        "key": "R",
        "name": "Grandmaster-at-Arms",
        "text": "Every third consecutive attack deals additional Magic Damage. Additionally, Jax can activate this ability to deal damage around himself and strengthen his resolve, increasing his Armor and Magic Resist for a short duration.",
        "dmg": "250 + 100% AP magic damage",
        "cost": "Mana 100",
        "cd": "110/100/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Dr. Mundo",
        "id": 36,
        "winPrc": 33,
        "games": 6
      },
      "weak": [
        {
          "name": "Dr. Mundo",
          "id": 36,
          "winPrc": 33,
          "games": 6
        },
        {
          "name": "Jayce",
          "id": 126,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Illaoi",
          "id": 420,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Pantheon",
          "id": 80,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Gwen",
          "id": 887,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 2.87,
      "games": 122,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Jayce",
    "name": "Jayce",
    "title": "the Defender of Tomorrow",
    "roles": [
      "Fighter",
      "Marksman"
    ],
    "difficulty": 7,
    "blurb": "Jayce Talis is a brilliant inventor who, along with his friend Viktor, made the first great discoveries in the field of hextech. Celebrated across Piltover, he tries to live up to his reputation as \"the Man of Progress,\" but often struggles with the...",
    "passive": {
      "name": "Hextech Capacitor",
      "text": "When Jayce swaps weapons he gains Move Speed for a short duration."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "To the Skies! / Shock Blast",
        "text": "Hammer Stance: Leaps to an enemy dealing physical damage and slowing enemies. Cannon Stance: Fires an orb of electricity that detonates upon hitting an enemy (or reaching the end of its path) dealing physical damage to all enemies hit.",
        "dmg": [
          "To the Skies!: 285 + 135% bonus AD physical damage",
          "Shock Blast: 310 + 140% bonus AD physical damage"
        ],
        "cost": "Mana 40",
        "cd": "16 → 6s"
      },
      {
        "key": "W",
        "name": "Lightning Field / Hyper Charge",
        "text": "Hammer Stance: Passive: Restores Mana per strike. Active: Creates a field of lightning damaging nearby enemies for several seconds. Cannon Stance: Gains a burst of energy, increasing Attack Speed to maximum for several attacks.",
        "dmg": [
          "Lightning Field: 110 + 25% AP magic damage",
          "Hyper Charge: 110% AD physical damage"
        ],
        "cost": "Mana 40",
        "cd": "10s"
      },
      {
        "key": "E",
        "name": "Thundering Blow / Acceleration Gate",
        "text": "Hammer Stance: Deals magic damage to an enemy and knocks them back a short distance. Cannon Stance: Deploys an Acceleration Gate increasing the Move Speed of all allied champions who pass through it. If Shock Blast is fired through the gate the missile speed, range, and damage will increase.",
        "dmg": "Thundering Blow: 22% of target's max HP + 100% bonus AD magic damage",
        "cost": "Mana 55",
        "cd": "20 → 10s"
      },
      {
        "key": "R",
        "name": "Mercury Cannon / Mercury Hammer",
        "text": "Hammer Stance: Transforms the Mercury Hammer into the Mercury Cannon gaining new abilities and increased range. The first attack in this form reduces the target's Armor and Magic Resist. Cannon Stance: Transforms the Mercury Cannon into the Mercury Hammer gaining new abilities and increasing Armor and Magic Resist. The first attack in this form deals additional magic damage.",
        "cd": "6s"
      }
    ],
    "counters": {
      "best": null,
      "weak": [],
      "strong": [
        {
          "name": "Malphite",
          "id": 54,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Jax",
          "id": 24,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "B",
      "winPrc": 49,
      "pickRate": 1.2,
      "games": 51,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6631,
          "name": "Stridebreaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Jhin",
    "name": "Jhin",
    "title": "the Virtuoso",
    "roles": [
      "Marksman",
      "Mage"
    ],
    "difficulty": 6,
    "blurb": "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia's ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin...",
    "passive": {
      "name": "Whisper",
      "text": "Jhin's hand cannon, Whisper, is a precise instrument designed to deal superior damage. It fires at a fixed rate and carries only four shots. Jhin imbues the final bullet with dark magics to critically strike and deal bonus execute damage. Whenever Whisper crits, it inspires Jhin with a burst of Move Speed."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Dancing Grenade",
        "text": "Jhin launches a magical cartridge at an enemy. It can hit up to four targets and gains damage each time it kills.",
        "dmg": "144 + 74% AD + 60% AP physical damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "7 → 5s"
      },
      {
        "key": "W",
        "name": "Deadly Flourish",
        "text": "Jhin brandishes his cane, firing a single shot with incredible range. It pierces through minions and monsters, but stops on the first champion hit. If the target was recently struck by Jhin's allies, lotus traps, or damaged by Jhin, they are rooted.",
        "dmg": "200 + 50% AD physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "12s"
      },
      {
        "key": "E",
        "name": "Captive Audience",
        "text": "Jhin places an invisible lotus trap that blooms when walked over. It slows nearby enemies before dealing damage with an explosion of serrated petals. Beauty in Death - When Jhin kills an enemy champion, a lotus trap will bloom near their corpse.",
        "dmg": "260 + 120% AD + 100% AP magic damage",
        "cost": "Mana 30",
        "cd": "2s"
      },
      {
        "key": "R",
        "name": "Curtain Call",
        "text": "Jhin channels, transforming Whisper into a shoulder-mounted mega-cannon. It is able to fire 4 super shots at extreme range that pierce through minions and monsters, but stop on the first champion impacted. Whisper cripples enemies hit, which slows them and deals execute damage. The 4th shot is perfectly crafted, epically powerful, and guaranteed to critically strike.",
        "dmg": "192 + 25% AD physical damage",
        "cost": "Mana 100",
        "cd": "120/105/90s"
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "C",
      "winPrc": 49,
      "pickRate": 6.69,
      "games": 287,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1055,
          "name": "Doran's Blade"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3009,
          "name": "Boots of Swiftness"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 88,
              "winPrc": 57
            },
            {
              "id": 2523,
              "name": "Hexoptics C44",
              "pct": 13,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 50,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8021,
            "name": "Fleet Footwork"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8234,
              "name": "Celerity"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Kog'Maw",
        "id": 96,
        "winPrc": 17,
        "games": 6
      },
      "weak": [
        {
          "name": "Kog'Maw",
          "id": 96,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Tristana",
          "id": 18,
          "winPrc": 27,
          "games": 11
        },
        {
          "name": "Ziggs",
          "id": 115,
          "winPrc": 29,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Twitch",
          "id": 29,
          "winPrc": 88,
          "games": 8
        },
        {
          "name": "Yunara",
          "id": 804,
          "winPrc": 88,
          "games": 8
        },
        {
          "name": "Syndra",
          "id": 134,
          "winPrc": 80,
          "games": 5
        }
      ]
    }
  },
  {
    "id": "Jinx",
    "name": "Jinx",
    "title": "the Loose Cannon",
    "roles": [
      "Marksman"
    ],
    "difficulty": 6,
    "blurb": "An unhinged and impulsive criminal from the undercity, Jinx is haunted by the consequences of her past—but that doesn't stop her from bringing her own chaotic brand of pandemonium to Piltover and Zaun. She uses her arsenal of DIY weapons to devastating...",
    "passive": {
      "name": "Get Excited!",
      "text": "Jinx receives massively increased Move Speed and Attack Speed whenever she helps kill or destroy an enemy champions epic jungle monster, or structure."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Switcheroo!",
        "text": "Jinx modifies her basic attacks by swapping between Pow-Pow, her minigun and Fishbones, her rocket launcher. Attacks with Pow-Pow grant Attack Speed, while attacks with Fishbones deal area of effect damage, gain increased range, but drain Mana and attack slower.",
        "cost": "Health 20",
        "cd": "0.9s"
      },
      {
        "key": "W",
        "name": "Zap!",
        "text": "Jinx uses Zapper, her shock pistol, to fire a blast that deals damage to the first enemy hit, slowing and revealing it.",
        "dmg": "210 + 140% AD physical damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "8 → 4s"
      },
      {
        "key": "E",
        "name": "Flame Chompers!",
        "text": "Jinx throws out a line of snare grenades that explode after 5 seconds, lighting enemies on fire. Flame Chompers will bite enemy champions who walk over them, rooting them in place.",
        "dmg": "270 + 100% AP magic damage",
        "cost": "Mana 90",
        "cd": "24 → 10s"
      },
      {
        "key": "R",
        "name": "Super Mega Death Rocket!",
        "text": "Jinx fires a super rocket across the map that gains damage as it travels. The rocket will explode upon colliding with an enemy champion, dealing damage to it and surrounding enemies based on their missing Health.",
        "dmg": "600 + 155% bonus AD + 35% of target's missing HP physical damage",
        "cost": "Mana 100",
        "cd": "85/65/45s"
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "S",
      "winPrc": 52,
      "pickRate": 4.94,
      "games": 212,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 2523,
          "name": "Hexoptics C44"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3046,
          "name": "Phantom Dancer"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 91,
              "winPrc": 70
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 9,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 67,
              "winPrc": 75
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 33,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3153,
              "name": "Blade of The Ruined King",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 50,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "Optional",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8017,
              "name": "Cut Down"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8321,
              "name": "Cash Back"
            },
            {
              "id": 8313,
              "name": "Triple Tonic"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5011,
            "name": "Health"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Nilah",
        "id": 895,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Nilah",
          "id": 895,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Senna",
          "id": 235,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Aphelios",
          "id": 523,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Vayne",
          "id": 67,
          "winPrc": 73,
          "games": 11
        },
        {
          "name": "Yunara",
          "id": 804,
          "winPrc": 71,
          "games": 7
        },
        {
          "name": "Viktor",
          "id": 112,
          "winPrc": 67,
          "games": 3
        }
      ]
    }
  },
  {
    "id": "KSante",
    "name": "K'Sante",
    "title": "the Pride of Nazumah",
    "roles": [
      "Tank",
      "Fighter"
    ],
    "difficulty": 9,
    "blurb": "Defiant and courageous, K'Sante battles colossal beasts and ruthless Ascended to protect his home of Nazumah, a coveted oasis amid the sands of Shurima. But after a falling-out with his former partner, K'Sante realizes that in order to become a warrior...",
    "passive": {
      "name": "Dauntless Instinct",
      "text": "K'Sante's Abilities mark targets to take more damage on his next Attack. When All Out, K'Sante deals more damage with all Attacks and Abilities."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Ntofo Strikes",
        "text": "K'Sante strikes, damaging and slowing enemies in a short line. On hit, grants a stack of Ntofo Strikes. At 2 stacks, K'Sante fires a shockwave that pulls enemies in. When All Out, cooldown is reduced.",
        "dmg": "190 + 40% bonus armor + 40% bonus magic resistance physical damage",
        "cost": "Mana 20",
        "cd": "3.5s"
      },
      {
        "key": "W",
        "name": "Path Maker",
        "text": "K'Sante charges up, taking reduced damage, then dashes, knocking back and stunning enemies. When All Out, deals increased damage and no longer knocks back or stuns.",
        "dmg": "165 + 8% (+ 2% per 100 bonus armor) (+ 2% per 100 bonus magic resistance) of target's max HP physical damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Footwork",
        "text": "K'Sante dashes and gains a shield. If targeting an ally, K'Sante dashes to the ally with increased range and both gain a shield. When All Out, cooldown is reduced and speed is increased.",
        "cost": "Mana 45/50/55/60/65",
        "cd": "10 → 8s"
      },
      {
        "key": "R",
        "name": "All Out",
        "text": "K'Sante knocks an enemy back, launching them through any wall in their path. Then, K'Sante goes All Out and dashes after them, gaining increased damage, healing, and transformed abilities at the cost of reduced defenses.",
        "dmg": "150 physical damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Mordekaiser",
        "id": 82,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Irelia",
          "id": 39,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 37,
      "pickRate": 1.15,
      "games": 49,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Kaisa",
    "name": "Kai'Sa",
    "title": "Daughter of the Void",
    "roles": [
      "Marksman",
      "Mage"
    ],
    "difficulty": 6,
    "blurb": "Claimed by the Void when she was only a child, Kai'Sa managed to survive through sheer tenacity and strength of will. Her experiences have made her a deadly hunter and, to some, the harbinger of a future they would rather not live to see. Having entered...",
    "passive": {
      "name": "Second Skin",
      "text": "Kai'Sa's basic attacks stack Plasma, dealing increasing bonus magic damage. Allies' immobilizing effects help stack Plasma. Additionally, Kai'Sa's item purchases upgrade her basic spells to have more powerful properties."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Icathian Rain",
        "text": "Kai'Sa shoots a swarm of missiles that seek out nearby targets. Living Weapon: Icathian Rain is upgraded to shoot more missiles.",
        "dmg": "100 + 55% bonus AD + 20% AP physical damage",
        "cost": "Mana 55",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Void Seeker",
        "text": "Kai'Sa shoots a long range missile, marking enemies with her passive. Living Weapon: Void Seeker is upgraded to apply more passive marks and reduce cooldown on champion hit.",
        "dmg": "130 + 130% AD + 45% AP magic damage",
        "cost": "Mana 55/60/65/70/75",
        "cd": "22 → 14s"
      },
      {
        "key": "E",
        "name": "Supercharge",
        "text": "Kai'Sa briefly increases her Move Speed, then increases her Attack Speed. Living Weapon: Supercharge is upgraded to briefly grant Invisibility.",
        "cost": "Mana 30",
        "cd": "16 → 10s"
      },
      {
        "key": "R",
        "name": "Killer Instinct",
        "text": "Kai'Sa dashes near an enemy champion.",
        "cost": "Mana 100",
        "cd": "120/90/60s"
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "B",
      "winPrc": 49,
      "pickRate": 8.01,
      "games": 344,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6672,
          "name": "Kraken Slayer"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3124,
          "name": "Guinsoo's Rageblade"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3115,
              "name": "Nashor's Tooth",
              "pct": 83,
              "winPrc": 40
            },
            {
              "id": 3302,
              "name": "Terminus",
              "pct": 17,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 75,
              "winPrc": 33
            },
            {
              "id": 3302,
              "name": "Terminus",
              "pct": 25,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 100,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "Optional",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 50,
              "winPrc": 0
            },
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 50,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 6
        },
        {
          "key": "W",
          "levels": 6
        },
        {
          "key": "E",
          "levels": 6
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8304,
              "name": "Magical Footwear"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Samira",
        "id": 360,
        "winPrc": 15,
        "games": 13
      },
      "weak": [
        {
          "name": "Samira",
          "id": 360,
          "winPrc": 15,
          "games": 13
        },
        {
          "name": "Viktor",
          "id": 112,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Kog'Maw",
          "id": 96,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Senna",
          "id": 235,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Ezreal",
          "id": 81,
          "winPrc": 72,
          "games": 25
        },
        {
          "name": "Twitch",
          "id": 29,
          "winPrc": 71,
          "games": 7
        }
      ]
    }
  },
  {
    "id": "Kalista",
    "name": "Kalista",
    "title": "the Spear of Vengeance",
    "roles": [
      "Marksman"
    ],
    "difficulty": 7,
    "blurb": "A specter of wrath and retribution, Kalista is the undying spirit of vengeance, an armored nightmare summoned from the Shadow Isles to hunt deceivers and traitors. The betrayed may cry out in blood to be avenged, but Kalista only answers those willing...",
    "passive": {
      "name": "Martial Poise",
      "text": "Enter a movement command while winding up Kalista's basic attack or Pierce to lunge a short distance when she launches her attack."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Pierce",
        "text": "Throw a fast moving spear that passes through enemies it kills.",
        "dmg": "270 + 105% AD physical damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "8s"
      },
      {
        "key": "W",
        "name": "Sentinel",
        "text": "Gain bonus damage when Kalista and her Oathsworn strike the same target. Activate to send a soul to scout out the path, revealing the area in front of it.",
        "dmg": "18% of target's max HP magic damage",
        "cd": "30s"
      },
      {
        "key": "E",
        "name": "Rend",
        "text": "Attacks impale their targets with spears. Activate to rip the spears out, slowing and dealing escalating damage.",
        "dmg": "45 + 70% AD + 20% AP physical damage",
        "cost": "Mana 30",
        "cd": "10 → 8s"
      },
      {
        "key": "R",
        "name": "Fate's Call",
        "text": "Kalista teleports the Oathsworn ally to herself. They gain the ability to dash toward a position, knocking enemy champions back.",
        "cost": "Mana 100",
        "cd": "160/140/120s"
      }
    ],
    "counters": {
      "best": null,
      "weak": [],
      "strong": [
        {
          "name": "Tristana",
          "id": 18,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Kai'Sa",
          "id": 145,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 58,
      "pickRate": 0.77,
      "games": 33,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6672,
          "name": "Kraken Slayer"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3124,
          "name": "Guinsoo's Rageblade"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3153,
              "name": "Blade of The Ruined King",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Karma",
    "name": "Karma",
    "title": "the Enlightened One",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 5,
    "blurb": "No mortal exemplifies the spiritual traditions of Ionia more than Karma. She is the living embodiment of an ancient soul reincarnated countless times, carrying all her accumulated memories into each new life, and blessed with power that few can...",
    "passive": {
      "name": "Gathering Fire",
      "text": "Karma's damaging abilities will reduce the cooldown of Mantra."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Inner Flame",
        "text": "Karma sends forth a ball of spirit energy that explodes and deals damage upon hitting an enemy unit. Mantra Bonus: In addition to the explosion, Mantra increases the destructive power of her Inner Flame, creating a cataclysm which deals damage after a short delay.",
        "dmg": [
          "Inner Flame: 260 + 70% AP magic damage",
          "Soulflare: 310 + 50% AP magic damage"
        ],
        "cost": "Mana 40/50/60/70/80",
        "cd": "9 → 5s"
      },
      {
        "key": "W",
        "name": "Focused Resolve",
        "text": "Karma creates a tether between herself and a targeted enemy, dealing damage and revealing them. If the tether is not broken, the enemy will be rooted and damaged again. Mantra Bonus: Karma strengthens the link, healing herself and extending the root duration.",
        "dmg": "Focused Resolve: 140 + 45% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "12s"
      },
      {
        "key": "E",
        "name": "Inspire",
        "text": "Karma summons a protective shield that absorbs incoming damage and increases the Move Speed of the protected ally. Mantra Bonus: Energy radiates out from her target, strengthening the initial shield and applying Inspire to nearby allied champions.",
        "cost": "Mana 50/55/60/65/70",
        "cd": "10 → 8s"
      },
      {
        "key": "R",
        "name": "Mantra",
        "text": "Karma empowers her next ability to do an additional effect. Mantra is available at level 1 and does not require a skill point.",
        "cd": "40/38/36/34s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yuumi",
        "id": 350,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Yuumi",
          "id": 350,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Pyke",
          "id": 555,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Leona",
          "id": 89,
          "winPrc": 33,
          "games": 6
        }
      ],
      "strong": [
        {
          "name": "Renata Glasc",
          "id": 888,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Seraphine",
          "id": 147,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "C",
      "winPrc": 48,
      "pickRate": 2.39,
      "games": 100,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Karthus",
    "name": "Karthus",
    "title": "the Deathsinger",
    "roles": [
      "Mage"
    ],
    "difficulty": 7,
    "blurb": "The harbinger of oblivion, Karthus is an undying spirit whose haunting songs are a prelude to the horror of his nightmarish appearance. The living fear the eternity of undeath, but Karthus sees only beauty and purity in its embrace, a perfect union of...",
    "passive": {
      "name": "Death Defied",
      "text": "Upon dying, Karthus enters a spirit form that allows him to continue casting spells."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Lay Waste",
        "text": "Karthus unleashes a delayed blast at a location, dealing damage to nearby enemies. Deals increased damage to isolated enemies.",
        "dmg": "116 + 35% AP magic damage",
        "cost": "Mana 20/25/30/35/40",
        "cd": "1s"
      },
      {
        "key": "W",
        "name": "Wall of Pain",
        "text": "Karthus creates a passable screen of leeching energy. Any enemy units that walk through the screen have their Move Speed and Magic Resist reduced for a period.",
        "cost": "Mana 70",
        "cd": "15s"
      },
      {
        "key": "E",
        "name": "Defile",
        "text": "Karthus passively steals energy from his victims, gaining Mana on each kill. Alternatively, Karthus can surround himself in the souls of his prey, dealing damage to nearby enemies, but quickly draining his own Mana.",
        "dmg": "27.5 + 5% AP magic damage",
        "cost": "Mana/sec 30/42/54/66/78",
        "cd": "0.5s"
      },
      {
        "key": "R",
        "name": "Requiem",
        "text": "After channeling for 3 seconds, Karthus deals damage to all enemy champions.",
        "dmg": "500 + 70% AP magic damage",
        "cost": "Mana 100",
        "cd": "200/180/160s"
      }
    ],
    "counters": {
      "best": {
        "name": "Jax",
        "id": 24,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Jax",
          "id": 24,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 43,
      "pickRate": 0.49,
      "games": 21,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Kassadin",
    "name": "Kassadin",
    "title": "the Void Walker",
    "roles": [
      "Assassin",
      "Mage"
    ],
    "difficulty": 8,
    "blurb": "Cutting a burning swath through the darkest places of the world, Kassadin knows his days are numbered. A widely traveled Shuriman guide and adventurer, he had chosen to raise a family among the peaceful southern tribes—until the day his village was...",
    "passive": {
      "name": "Void Stone",
      "text": "Kassadin takes reduced magic damage and ignores unit collision."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Null Sphere",
        "text": "Kassadin fires an orb of void energy at a target, dealing damage and interrupting channels. The excess energy forms around himself, granting a temporary shield that absorbs magic damage.",
        "dmg": "185 + 60% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "10 → 8s"
      },
      {
        "key": "W",
        "name": "Nether Blade",
        "text": "Passive: Kassadin's basic attacks deal bonus magic damage. Active: Kassadin's next basic attack deals significant bonus magic damage and restores Mana.",
        "dmg": "150 + 80% AP magic damage",
        "cost": "Mana 1",
        "cd": "7s"
      },
      {
        "key": "E",
        "name": "Force Pulse",
        "text": "Kassadin draws energy from spells cast in his vicinity. Upon charging up, Kassadin can use Force Pulse to damage and slow enemies in a cone in front of him.",
        "dmg": "180 + 65% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "21 → 17s"
      },
      {
        "key": "R",
        "name": "Riftwalk",
        "text": "Kassadin teleports to a nearby location dealing damage to nearby enemy units. Multiple Riftwalks in a short period of time cost additional Mana but also deal additional damage.",
        "dmg": "110 + 50% AP + 2% maximum mana magic damage",
        "cost": "Mana 40/160/640",
        "cd": "5/3.5/2s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yone",
        "id": 777,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Katarina",
          "id": 55,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 42,
      "pickRate": 0.85,
      "games": 36,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3146,
          "name": "Hextech Gunblade"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3100,
              "name": "Lich Bane",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Katarina",
    "name": "Katarina",
    "title": "the Sinister Blade",
    "roles": [
      "Assassin",
      "Mage"
    ],
    "difficulty": 8,
    "blurb": "Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven...",
    "passive": {
      "name": "Voracity",
      "text": "Whenever an enemy champion dies that Katarina has damaged recently, her remaining ability cooldowns are dramatically reduced. If Katarina picks up a Dagger , she uses it to slash through all nearby enemies, dealing magic damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Bouncing Blade",
        "text": "Katarina throws a Dagger at the target that then bounces to nearby enemies before ricocheting onto the ground.",
        "dmg": "220 + 40% AP magic damage",
        "cd": "11 → 7s"
      },
      {
        "key": "W",
        "name": "Preparation",
        "text": "Katarina gains a burst of Move Speed, tossing a Dagger into the air directly above herself.",
        "cd": "15 → 11s"
      },
      {
        "key": "E",
        "name": "Shunpo",
        "text": "Katarina blinks to the target, striking it if its an enemy, or striking the nearest enemy otherwise.",
        "dmg": "60 + 40% AD + 25% AP magic damage",
        "cd": "12 → 8s"
      },
      {
        "key": "R",
        "name": "Death Lotus",
        "text": "Katarina becomes a flurry of blades, dealing massive magic damage while she channels to the 3 nearest enemy champions.",
        "dmg": "16% bonus AD + 50% per 100% bonus attack speed magic damage",
        "cd": "75/60/45s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "S+",
      "winPrc": 52,
      "pickRate": 3.29,
      "games": 140,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1082,
          "name": "Dark Seal"
        },
        {
          "id": 2031,
          "name": "Refillable Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3100,
          "name": "Lich Bane"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 86,
              "winPrc": 33
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 14,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3041,
              "name": "Mejai's Soulstealer",
              "pct": 100,
              "winPrc": 67
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8014,
              "name": "Coup de Grace"
            },
            {
              "id": 9111,
              "name": "Triumph"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Yone",
        "id": 777,
        "winPrc": 17,
        "games": 6
      },
      "weak": [
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 25,
          "games": 8
        },
        {
          "name": "Viktor",
          "id": 112,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Diana",
          "id": 131,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Qiyana",
          "id": 246,
          "winPrc": 75,
          "games": 4
        }
      ]
    }
  },
  {
    "id": "Kayle",
    "name": "Kayle",
    "title": "the Righteous",
    "roles": [
      "Mage",
      "Marksman"
    ],
    "difficulty": 7,
    "blurb": "Born to a Targonian Aspect at the height of the Rune Wars, Kayle honored her mother's legacy by fighting for justice on wings of divine flame. She and her twin sister Morgana were the protectors of Demacia for many years—until Kayle became disillusioned...",
    "passive": {
      "name": "Divine Ascent",
      "text": "Kayle's attacks are empowered by the heavens as she levels up and spends skill points. Her wings are lit aflame as she progressively gains Attack Speed, Move Speed, Attack Range, and waves of fire on her attacks."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Radiant Blast",
        "text": "Kayle conjures a portal, summoning a celestial sword that pierces through enemies, slowing, damaging, and reducing the resistances of all hit.",
        "dmg": "220 + 60% bonus AD + 50% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "12 → 8s"
      },
      {
        "key": "W",
        "name": "Celestial Blessing",
        "text": "Blessed by the divine, Kayle heals and grants Move Speed to herself and the nearest ally.",
        "cost": "Mana 70/75/80/85/90",
        "cd": "15s"
      },
      {
        "key": "E",
        "name": "Starfire Spellblade",
        "text": "Passive: Kayle's celestial sword, Virtue, deals bonus magic damage to enemies she attacks. Active: Kayle's next attack smites her target with celestial fire, dealing bonus damage proportionate to their missing health.",
        "dmg": "35 + 10% bonus AD + 20% AP magic damage",
        "cd": "8 → 6s"
      },
      {
        "key": "R",
        "name": "Divine Judgment",
        "text": "Kayle makes an ally invulnerable and calls upon former Aspects of Justice to purify the area around her target with a holy rain of swords.",
        "dmg": "400 + 100% bonus AD + 70% AP magic damage",
        "cost": "Mana 100/50/0",
        "cd": "160/120/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Dr. Mundo",
        "id": 36,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Dr. Mundo",
          "id": 36,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Darius",
          "id": 122,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Urgot",
          "id": 6,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Jax",
          "id": 24,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Sett",
          "id": 875,
          "winPrc": 57,
          "games": 7
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "A",
      "winPrc": 58,
      "pickRate": 1.34,
      "games": 57,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Kayn",
    "name": "Kayn",
    "title": "the Shadow Reaper",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 8,
    "blurb": "A peerless practitioner of lethal shadow magic, Shieda Kayn battles to achieve his true destiny—to one day lead the Order of Shadow into a new era of Ionian supremacy. He wields the sentient darkin weapon Rhaast, undeterred by its creeping corruption of...",
    "passive": {
      "name": "The Darkin Scythe",
      "text": "Kayn wields an ancient weapon and fights Rhaast, the darkin within it, for control. Either the Darkin will triumph, or Kayn will master Rhaast and become the Shadow Assassin . Darkin: Heal for a percentage of spell damage dealt to champions. Shadow Assassin: For the first few seconds in combat with enemy champions, deal bonus damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Reaping Slash",
        "text": "Kayn dashes, then slashes. Both deal damage.",
        "dmg": "175 + 85% bonus AD physical damage",
        "cost": "Mana 50",
        "cd": "7 → 5s"
      },
      {
        "key": "W",
        "name": "Blade's Reach",
        "text": "Kayn damages and slows targets in a line.",
        "dmg": "265 + 110% bonus AD physical damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "13 → 9s"
      },
      {
        "key": "E",
        "name": "Shadow Step",
        "text": "Kayn can walk through terrain.",
        "cost": "Mana 90",
        "cd": "21 → 13s"
      },
      {
        "key": "R",
        "name": "Umbral Trespass",
        "text": "Kayn hides in an enemy's body, dealing massive damage when he bursts out.",
        "dmg": "350 + 150% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Hecarim",
        "id": 120,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Hecarim",
          "id": 120,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Talon",
          "id": 91,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Rengar",
          "id": 107,
          "winPrc": 20,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 70,
          "games": 10
        },
        {
          "name": "Graves",
          "id": 104,
          "winPrc": 67,
          "games": 9
        },
        {
          "name": "Nidalee",
          "id": 76,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 5.03,
      "games": 216,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Kennen",
    "name": "Kennen",
    "title": "the Heart of the Tempest",
    "roles": [
      "Mage"
    ],
    "difficulty": 4,
    "blurb": "More than just the lightning-quick enforcer of Ionian balance, Kennen is the only yordle member of the Kinkou. Despite his small, furry stature, he is eager to take on any threat with a whirling storm of shuriken and boundless enthusiasm. Alongside his...",
    "passive": {
      "name": "Mark of the Storm",
      "text": "Kennen stuns enemies he hits 3 times with his abilities."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Thundering Shuriken",
        "text": "Kennen throws a fast moving shuriken towards a location, causing damage and adding a Mark of the Storm to any opponent that it hits.",
        "dmg": "275 + 75% AP magic damage",
        "cost": "Energy 60/55/50/45/40",
        "cd": "7 → 4s"
      },
      {
        "key": "W",
        "name": "Electrical Surge",
        "text": "Kennen passively deals extra damage and adds a Mark of the Storm to his target every few attacks, and he can activate this ability to damage and add another Mark of the Storm to targets who are already marked.",
        "dmg": "170 + 80% AP magic damage",
        "cost": "Energy 40",
        "cd": "13 → 6s"
      },
      {
        "key": "E",
        "name": "Lightning Rush",
        "text": "Kennen morphs into a lightning form, enabling him to pass through units and apply a Mark of the Storm. Kennen gains Move Speed when entering this form, and attack speed when leaving it.",
        "dmg": "240 + 80% AP magic damage",
        "cost": "Energy 80",
        "cd": "10 → 6s"
      },
      {
        "key": "R",
        "name": "Slicing Maelstrom",
        "text": "Kennen summons a storm that strikes at nearby enemy champions for magical damage.",
        "dmg": "110 + 22.5% AP magic damage",
        "cd": "120/100/80s"
      }
    ],
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 43,
      "pickRate": 0.54,
      "games": 23,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Khazix",
    "name": "Kha'Zix",
    "title": "the Voidreaver",
    "roles": [
      "Assassin"
    ],
    "difficulty": 6,
    "blurb": "The Void grows, and the Void adapts—in none of its myriad spawn are these truths more apparent than Kha'Zix. Evolution drives the core of this mutating horror, born to survive and to slay the strong. Where it struggles to do so, it grows new, more...",
    "passive": {
      "name": "Unseen Threat",
      "text": "Nearby enemies that are Isolated from their allies are marked. Kha'Zix's abilities have interactions with Isolated targets. When Kha'Zix is not visible to the enemy team, he gains Unseen Threat, causing his next basic attack against an enemy champion to deal bonus magic damage and slow them for a few seconds."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Taste Their Fear",
        "text": "Deals physical damage to the target. Damage increased on Isolated targets. If he chooses to Evolve Reaper Claws , this refunds a percent of it's cooldown against Isolated targets. Kha'Zix also gains increased range on his basic attacks and Taste Their Fear.",
        "dmg": "Taste Their Fear: 180 + 110% bonus AD physical damage",
        "cost": "Mana 20",
        "cd": "4s"
      },
      {
        "key": "W",
        "name": "Void Spike",
        "text": "Kha'Zix fires exploding spikes that deal physical damage to enemies hit. Kha'Zix is healed if he is also within the explosion radius. If he chooses to Evolve Spike Racks , Void Spike now fires three spikes in a cone, slow enemies hit, and reveals enemy champions hit for 2 seconds. Isolated targets are slowed for extra.",
        "dmg": "Void Spike: 205 + 100% bonus AD physical damage",
        "cost": "Mana 55/60/65/70/75",
        "cd": "9s"
      },
      {
        "key": "E",
        "name": "Leap",
        "text": "Kha'Zix leaps to an area, dealing physical damage upon landing. If he chooses to Evolve Wings , Leap's range increases by 200 and the cooldown resets on champion kill or assist.",
        "dmg": "Leap: 205 + 40% bonus AD physical damage",
        "cost": "Mana 50",
        "cd": "20 → 12s"
      },
      {
        "key": "R",
        "name": "Void Assault",
        "text": "Each rank allows Kha'Zix to evolve one of his abilities, giving it a unique additional effect. When activated, Kha'Zix becomes Invisible , triggering Unseen Threat and increasing Move Speed. If he chooses to Evolve Adaptive Cloaking , Void Assault gains increased Invisibility duration, and an additional use.",
        "cost": "Mana 100",
        "cd": "100/85/70s"
      }
    ],
    "counters": {
      "best": {
        "name": "Warwick",
        "id": 19,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Warwick",
          "id": 19,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Briar",
          "id": 233,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Shaco",
          "id": 35,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Nocturne",
          "id": 56,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Graves",
          "id": 104,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Viego",
          "id": 234,
          "winPrc": 56,
          "games": 16
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 45,
      "pickRate": 1.98,
      "games": 85,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3142,
              "name": "Youmuu's Ghostblade",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6694,
              "name": "Serylda's Grudge",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8128,
            "name": "Dark Harvest"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Kindred",
    "name": "Kindred",
    "title": "The Eternal Hunters",
    "roles": [
      "Marksman"
    ],
    "difficulty": 4,
    "blurb": "Separate, but never parted, Kindred represents the twin essences of death. Lamb's bow offers a swift release from the mortal realm for those who accept their fate. Wolf hunts down those who run from their end, delivering violent finality within his...",
    "passive": {
      "name": "Mark of the Kindred",
      "text": "Kindred can mark targets to Hunt. Successfully completing a Hunt permanently empowers Kindred's basic abilities. Every 4 hunts completed also increases Kindred's basic attack range."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Dance of Arrows",
        "text": "Kindred tumbles and shoots up to three arrows at nearby targets.",
        "dmg": "140 + 75% bonus AD physical damage",
        "cost": "Mana 35",
        "cd": "9s"
      },
      {
        "key": "W",
        "name": "Wolf's Frenzy",
        "text": "Wolf enrages and attacks enemies around him. Lamb passively gains stacks by moving and attacking. When fully charged, Lamb's next attack restores health.",
        "dmg": "45 + 20% bonus AD + 20% AP + 1.5% (+ 1% per mark) of target's current health magic damage",
        "cost": "Mana 40",
        "cd": "18 → 14s"
      },
      {
        "key": "E",
        "name": "Mounting Dread",
        "text": "Lamb fires a carefully placed shot, slowing the target. If Lamb attacks the target two more times, her third attack instead directs Wolf to pounce on the enemy, savaging them for massive damage.",
        "dmg": "200 + 100% bonus AD + 5% (+ 0.5% per Mark) of target's missing HP physical damage",
        "cost": "Mana 50",
        "cd": "14 → 8s"
      },
      {
        "key": "R",
        "name": "Lamb's Respite",
        "text": "Lamb grants all living things inside a zone a respite from death. Until the effect ends, nothing can die. At the end, units are healed.",
        "cost": "Mana 100",
        "cd": "180/150/120s"
      }
    ],
    "counters": {
      "best": null,
      "weak": [],
      "strong": [
        {
          "name": "Graves",
          "id": 104,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "A",
      "winPrc": 59,
      "pickRate": 1.03,
      "games": 44,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3142,
              "name": "Youmuu's Ghostblade",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6694,
              "name": "Serylda's Grudge",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8128,
            "name": "Dark Harvest"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Kled",
    "name": "Kled",
    "title": "the Cantankerous Cavalier",
    "roles": [
      "Fighter"
    ],
    "difficulty": 7,
    "blurb": "A warrior as fearless as he is ornery, the yordle Kled embodies the furious bravado of Noxus. He is an icon beloved by the empire's soldiers, distrusted by its officers, and loathed by the nobility. Many claim Kled has fought in every campaign the...",
    "passive": {
      "name": "Skaarl, the Cowardly Lizard",
      "text": "Kled rides his trusty steed, Skaarl, who takes damage for him. When Skaarl's health depletes, Kled dismounts. While dismounted, Kled's abilities change and he deals less damage to champions. Kled can restore Skaarl's courage by fighting enemies. At maximum courage, Kled remounts with a portion of Skaarl's health."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Bear Trap on a Rope",
        "text": "Kled throws a bear trap that damages and hooks an enemy champion. If shackled for a short duration, the target takes additional physical damage and is yanked toward Kled. When dismounted, this ability is replaced by Pocket Pistol, a ranged gun blast that knocks back Kled and restores courage.",
        "dmg": [
          "Bear Trap on a Rope: 130 + 65% bonus AD physical damage",
          "Pocket Pistol: 95 + 80% bonus AD physical damage"
        ],
        "cost": "Charge 1",
        "cd": "11 → 7s"
      },
      {
        "key": "W",
        "name": "Violent Tendencies",
        "text": "Kled gains massive attack speed for four attacks. The fourth attack deals more damage.",
        "dmg": "60 + 6.5% (+ 5% per 100 bonus AD) of target's max HP physical damage",
        "cd": "11 → 5s"
      },
      {
        "key": "E",
        "name": "Jousting",
        "text": "Kled dashes, dealing physical damage and gaining a short burst of speed. Kled can cast this ability again to dash back through his initial target, dealing the same damage.",
        "dmg": "Jousting: 135 + 65% bonus AD physical damage",
        "cd": "13 → 9s"
      },
      {
        "key": "R",
        "name": "Chaaaaaaaarge!!!",
        "text": "Kled and Skaarl charge to a location, leaving a speed-granting trail behind them and gaining a shield. Skaarl locks onto and rams the first enemy champion encountered.",
        "dmg": "Chaaaaaaaarge!!!: 6% of target's max HP + 4% per 100 bonus AD physical damage",
        "cd": "140/125/110s"
      }
    ],
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 50,
      "pickRate": 0.47,
      "games": 20,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6631,
          "name": "Stridebreaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "KogMaw",
    "name": "Kog'Maw",
    "title": "the Mouth of the Abyss",
    "roles": [
      "Marksman",
      "Mage"
    ],
    "difficulty": 6,
    "blurb": "Belched forth from a rotting Void incursion deep in the wastelands of Icathia, Kog'Maw is an inquisitive yet putrid creature with a caustic, gaping mouth. This particular Void-spawn needs to gnaw and drool on anything within reach to truly understand it...",
    "passive": {
      "name": "Icathian Surprise",
      "text": "4 seconds after dying, Kogmaw explodes, dealing true damage to surrounding enemies."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Caustic Spittle",
        "text": "Kog'Maw launches a corrosive projectile which deals magic damage and corrodes the target's armor and magic resist for a short time. Kog'Maw also gains additional attack speed.",
        "dmg": "260 + 80% AP magic damage",
        "cost": "Mana 40",
        "cd": "7s"
      },
      {
        "key": "W",
        "name": "Bio-Arcane Barrage",
        "text": "Kog'Maw's attacks gain range and deal a percent of the target's maximum health as magic damage On-Hit.",
        "dmg": "6% of target's max HP + 1% per 100 AP magic damage",
        "cost": "Mana 40",
        "cd": "17s"
      },
      {
        "key": "E",
        "name": "Void Ooze",
        "text": "Kog'Maw launches a peculiar ooze which damages all enemies it passes through and leaves a trail which slows enemies who stand on it.",
        "dmg": "230 + 65% AP magic damage",
        "cost": "Mana 40/55/70/85/100",
        "cd": "12s"
      },
      {
        "key": "R",
        "name": "Living Artillery",
        "text": "Kog'Maw fires an artillery shell at a great distance dealing magic damage (increased significantly on low health enemies) and revealing non-stealthed targets. Additionally, multiple Living Artilleries in a short period of time cause them to cost additional Mana.",
        "dmg": "180 + 75% bonus AD + 35% AP magic damage",
        "cost": "Mana 40",
        "cd": "2/1.5/1s"
      }
    ],
    "counters": {
      "best": {
        "name": "Sivir",
        "id": 15,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Sivir",
          "id": 15,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Jhin",
          "id": 202,
          "winPrc": 83,
          "games": 6
        },
        {
          "name": "Caitlyn",
          "id": 51,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Kai'Sa",
          "id": 145,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "A",
      "winPrc": 60,
      "pickRate": 1.09,
      "games": 47,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6672,
          "name": "Kraken Slayer"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3124,
          "name": "Guinsoo's Rageblade"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3153,
              "name": "Blade of The Ruined King",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Leblanc",
    "name": "LeBlanc",
    "title": "the Deceiver",
    "roles": [
      "Assassin",
      "Mage"
    ],
    "difficulty": 9,
    "blurb": "Mysterious even to other members of the Black Rose cabal, LeBlanc is but one of many names for a pale woman who has manipulated people and events since the earliest days of Noxus. Using her magic to mirror herself, the sorceress can appear to anyone...",
    "passive": {
      "name": "Mirror Image",
      "text": "When LeBlanc drops below 40% Health, she becomes invisible for 1 second and creates a Mirror Image that deals no damage and lasts for up to 8 seconds."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Sigil of Malice",
        "text": "LeBlanc projects a sigil, dealing damage and marking the target for 3.5 seconds. Damaging the marked target with an ability detonates the sigil, dealing additional damage. If either part kills the target, Leblanc refunds the Mana cost and part of this spell's remaining Cooldown.",
        "dmg": "165 + 40% AP magic damage",
        "cost": "Mana 50",
        "cd": "6s"
      },
      {
        "key": "W",
        "name": "Distortion",
        "text": "LeBlanc dashes to a location, dealing damage to enemies near her destination. For the next 4 seconds, activate Distortion again to return LeBlanc to her starting location.",
        "dmg": "235 + 70% AP magic damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "15 → 10s"
      },
      {
        "key": "E",
        "name": "Ethereal Chains",
        "text": "LeBlanc launches a chain that shackles the first enemy hit. If the target remains shackled for 1.5 seconds, LeBlanc roots them and deals additional damage.",
        "dmg": "130 + 40% AP magic damage",
        "cost": "Mana 50",
        "cd": "14 → 11s"
      },
      {
        "key": "R",
        "name": "Mimic",
        "text": "LeBlanc casts a mimicked version of one of her basic spells.",
        "dmg": "450 + 75% AP magic damage",
        "cd": "50/40/30s"
      }
    ],
    "counters": {
      "best": {
        "name": "Xerath",
        "id": 101,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Xerath",
          "id": 101,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Vex",
          "id": 711,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Ekko",
          "id": 245,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Locke",
          "id": 805,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "A",
      "winPrc": 55,
      "pickRate": 1.88,
      "games": 80,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3146,
          "name": "Hextech Gunblade"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3100,
              "name": "Lich Bane",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "LeeSin",
    "name": "Lee Sin",
    "title": "the Blind Monk",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 6,
    "blurb": "A master of Ionia's ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge. Though he lost his sight many years ago, the warrior-monk has devoted his life to protecting his homeland...",
    "passive": {
      "name": "Flurry",
      "text": "After Lee Sin uses an ability, his next 2 basic attacks gain Attack Speed and return Energy."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Sonic Wave / Resonating Strike",
        "text": "Sonic Wave: Lee Sin projects a discordant wave of sound to locate his enemies, dealing physical damage to the first enemy it encounters. If Sonic Wave hits, Lee Sin can cast Resonating Strike for the next 3 seconds. Resonating Strike: Lee Sin dashes to the enemy hit by Sonic Wave, dealing physical damage based on the target's missing Health.",
        "dmg": [
          "Sonic Wave: 155 + 115% bonus AD physical damage",
          "Resonating Strike: 155 + 115% bonus AD physical damage"
        ],
        "cost": "Energy 50",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Safeguard / Iron Will",
        "text": "Safeguard: Lee Sin rushes to target ally, shielding himself from damage. If the ally is a champion, they are also shielded. After using Safeguard, Lee Sin can cast Iron Will. Iron Will: Lee Sin's intense training allows him to thrive in battle. Lee Sin gains Omnivamp.",
        "cost": "Energy 50",
        "cd": "12s"
      },
      {
        "key": "E",
        "name": "Tempest / Cripple",
        "text": "Tempest: Lee Sin smashes the ground, sending out a shockwave that deals magic damage and reveals enemy units hit. If Tempest hits an enemy, Lee Sin can cast cripple. Cripple: Lee Sin cripples nearby enemies damaged by Tempest, reducing their Move Speed. Move Speed recovers gradually over the duration.",
        "dmg": "Tempest: 135 + 100% AD magic damage",
        "cost": "Energy 50",
        "cd": "9s"
      },
      {
        "key": "R",
        "name": "Dragon's Rage",
        "text": "Lee Sin performs a powerful roundhouse kick launching his target back, dealing physical damage to the target and any enemies they collide with. Enemies the target collides with are knocked into the air for a short duration. This technique was taught to him by Jesse Perring, although Lee Sin does not kick players off the map.",
        "dmg": "625 + 200% bonus AD physical damage",
        "cd": "110/85/60s"
      }
    ],
    "build": {
      "role": "Jungle",
      "tier": "S+",
      "winPrc": 54,
      "pickRate": 4.41,
      "games": 189,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 80,
              "winPrc": 75
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 20,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3156,
              "name": "Maw of Malmortius",
              "pct": 50,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 50,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Shyvana",
        "id": 102,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Shyvana",
          "id": 102,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Udyr",
          "id": 77,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Lillia",
          "id": 876,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Diana",
          "id": 131,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Viego",
          "id": 234,
          "winPrc": 67,
          "games": 12
        }
      ]
    }
  },
  {
    "id": "Leona",
    "name": "Leona",
    "title": "the Radiant Dawn",
    "roles": [
      "Tank",
      "Support"
    ],
    "difficulty": 4,
    "blurb": "Imbued with the fire of the sun, Leona is a holy warrior of the Solari who defends Mount Targon with her Zenith Blade and the Shield of Daybreak. Her skin shimmers with starfire while her eyes burn with the power of the celestial Aspect within her...",
    "passive": {
      "name": "Sunlight",
      "text": "Damaging spells afflict enemies with Sunlight for 1.5 seconds. When allied Champions deal damage to those targets, they consume the Sunlight to deal additional magic damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Shield of Daybreak",
        "text": "Leona uses her shield to perform her next basic attack, dealing bonus magic damage and stunning the target.",
        "dmg": "110 + 30% AP magic damage",
        "cost": "Mana 30/35/40/45/50",
        "cd": "5s"
      },
      {
        "key": "W",
        "name": "Eclipse",
        "text": "Leona raises her shield to gain Damage Reduction, Armor, and Magic Resist. When the duration first ends, if there are nearby enemies, she will deal magic damage to them and prolong the duration of the effect.",
        "dmg": "175 + 40% AP magic damage",
        "cost": "Mana 60",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Zenith Blade",
        "text": "Leona projects a solar image of her sword, dealing magic damage to all enemies in a line. When the image fades, the last enemy champion struck will be briefly immobilized and Leona will dash to them.",
        "dmg": "210 + 40% AP magic damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "12 → 6s"
      },
      {
        "key": "R",
        "name": "Solar Flare",
        "text": "Leona calls down a beam of solar energy, dealing damage to enemies in an area. Enemies in the center of the area are stunned, while enemies on the outside are slowed.",
        "dmg": "300 + 80% AP magic damage",
        "cost": "Mana 100",
        "cd": "90/75/60s"
      }
    ],
    "counters": {
      "best": {
        "name": "Alistar",
        "id": 12,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Alistar",
          "id": 12,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Sona",
          "id": 37,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Nautilus",
          "id": 111,
          "winPrc": 31,
          "games": 13
        }
      ],
      "strong": [
        {
          "name": "Soraka",
          "id": 16,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Swain",
          "id": 50,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Blitzcrank",
          "id": 53,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "B",
      "winPrc": 49,
      "pickRate": 4.47,
      "games": 187,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3190,
          "name": "Locket of the Iron Solari"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3109,
          "name": "Knight's Vow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3050,
              "name": "Zeke's Convergence",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3107,
              "name": "Redemption",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3002,
              "name": "Trailblazer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8439,
            "name": "Aftershock"
          },
          "minors": [
            {
              "id": 8401,
              "name": "Shield Bash"
            },
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Lillia",
    "name": "Lillia",
    "title": "the Bashful Bloom",
    "roles": [
      "Fighter",
      "Mage"
    ],
    "difficulty": 8,
    "blurb": "Intensely shy, the fae fawn Lillia skittishly wanders Ionia's forests. Hiding just out of sight of mortals—whose mysterious natures have long captivated, but intimidated, her—Lillia hopes to discover why their dreams no longer reach the ancient Dreaming...",
    "passive": {
      "name": "Dream-Laden Bough",
      "text": "Hitting a champion or monster with a skill will deal additional max Health damage over time."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Blooming Blows",
        "text": "Passively, Lillia gains stacking Move Speed when hitting enemies with spells. She can activate this to deal magic damage to nearby enemies, dealing extra true damage on the edge.",
        "dmg": "75 + 35% AP mixed damage",
        "cost": "Mana 65",
        "cd": "6 → 4s"
      },
      {
        "key": "W",
        "name": "Watch Out! Eep!",
        "text": "Lillia deals damage in a nearby area, dealing heavy damage in the center.",
        "dmg": "160 + 35% AP magic damage",
        "cost": "Mana 50",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Swirlseed",
        "text": "Lillia hurls a seed that damages and slows those it lands on. If it doesn't hit anything, it will continue rolling until it hits a wall or target.",
        "dmg": "160 + 50% AP magic damage",
        "cost": "Mana 70",
        "cd": "12s"
      },
      {
        "key": "R",
        "name": "Lilting Lullaby",
        "text": "Lillia causes all enemies with Dream Dust on them to become Drowsy before falling asleep. Those enemies will take extra damage on being forcibly woken up.",
        "dmg": "200 + 40% AP magic damage",
        "cost": "Mana 50",
        "cd": "150/130/110s"
      }
    ],
    "counters": {
      "best": {
        "name": "Naafiri",
        "id": 950,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Warwick",
          "id": 19,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Nasus",
          "id": 75,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Viego",
          "id": 234,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "A",
      "winPrc": 57,
      "pickRate": 1.77,
      "games": 76,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4633,
          "name": "Riftmaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3116,
          "name": "Rylai's Crystal Scepter"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6665,
              "name": "Jak'Sho, The Protean",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9101,
              "name": "Absorb Life"
            },
            {
              "id": 9105,
              "name": "Legend: Haste"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Lissandra",
    "name": "Lissandra",
    "title": "the Ice Witch",
    "roles": [
      "Mage"
    ],
    "difficulty": 6,
    "blurb": "Lissandra's magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze—she impales and crushes those who oppose her. To the terrified denizens of the north, she is known only as ''The...",
    "passive": {
      "name": "Iceborn Subjugation",
      "text": "When an enemy champion dies near Lissandra they become a Frozen Thrall. Frozen Thralls slow nearby enemies and then, after a delay, shatter from the intense cold, dealing magic damage to nearby targets."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Ice Shard",
        "text": "Throws a spear of ice that shatters when it hits an enemy, dealing magic damage and slowing Move Speed. Shards pass through the target, dealing the same damage to other enemies hit.",
        "dmg": "220 + 75% AP magic damage",
        "cost": "Mana 55/60/65/70/75",
        "cd": "8 → 4s"
      },
      {
        "key": "W",
        "name": "Ring of Frost",
        "text": "Freezes nearby enemies in ice, dealing magic damage and rooting them.",
        "dmg": "210 + 70% AP magic damage",
        "cost": "Mana 40",
        "cd": "10 → 8s"
      },
      {
        "key": "E",
        "name": "Glacial Path",
        "text": "Lissandra creates an ice claw that deals magic damage. Reactivating this ability transports Lissandra to the claw's current location.",
        "dmg": "210 + 60% AP magic damage",
        "cost": "Mana 80/85/90/95/100",
        "cd": "24 → 12s"
      },
      {
        "key": "R",
        "name": "Frozen Tomb",
        "text": "If cast on an enemy champion, the target is frozen solid, stunning it. If cast on Lissandra, she encases herself in dark ice, healing herself while becoming untargetable and invulnerable. Dark ice then emanates from the target dealing magic damage to enemies and slowing Move Speed.",
        "dmg": "350 + 75% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Vex",
        "id": 711,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Vex",
          "id": 711,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Hwei",
          "id": 910,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Yasuo",
          "id": 157,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Qiyana",
          "id": 246,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Viktor",
          "id": 112,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "A",
      "winPrc": 52,
      "pickRate": 1.95,
      "games": 83,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Locke",
    "name": "Locke",
    "title": "the Ashen Exorcist",
    "roles": [
      "Assassin",
      "Mage"
    ],
    "difficulty": 5,
    "blurb": "A nail-slinging exorcist versed in forbidden rites, Corvin Locke is the progeny of Demacian occultists. Born into lies and hypocrisy, he learned young that demons aren't the cause of humanity's darkness, but the consequence. Now, Locke tears through...",
    "passive": {
      "name": "Silver Stake",
      "text": "Locke's attacks deal additional magic damage On-Hit, increased based on enemy missing Health."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Ritual Nails",
        "text": "Locke readies a set of Soul Nails to throw, dealing damage to and marking enemies hit. Locke can consume the marks to deal bonus damage with his attacks."
      },
      {
        "key": "W",
        "name": "Soul Ignition",
        "text": "Locke ignites his soul, gaining Attack Speed and Move Speed, and dealing damage to himself. At the end of the duration, Locke will heal back a portion of the damage he takes during the effect."
      },
      {
        "key": "E",
        "name": "Ashen Pursuit",
        "text": "Locke teleports to a location before dashing to attack his next target, dealing damage to enemies passed through."
      },
      {
        "key": "R",
        "name": "Purgatory",
        "text": "Locke throws a binding artifact that deals damage and potentially executes enemies hit. Locke gains additional power for sealing away enemy champions."
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 42,
      "pickRate": 3.22,
      "games": 137,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3100,
          "name": "Lich Bane"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 67,
              "winPrc": 25
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 33,
              "winPrc": 50
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 67,
              "winPrc": 100
            },
            {
              "id": 3041,
              "name": "Mejai's Soulstealer",
              "pct": 33,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 100,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8017,
              "name": "Cut Down"
            },
            {
              "id": 9111,
              "name": "Triumph"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5011,
            "name": "Health"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Akali",
        "id": 84,
        "winPrc": 11,
        "games": 9
      },
      "weak": [
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 11,
          "games": 9
        },
        {
          "name": "Zed",
          "id": 238,
          "winPrc": 25,
          "games": 8
        },
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 25,
          "games": 8
        }
      ],
      "strong": [
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 86,
          "games": 7
        },
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Xerath",
          "id": 101,
          "winPrc": 75,
          "games": 4
        }
      ]
    }
  },
  {
    "id": "Lucian",
    "name": "Lucian",
    "title": "the Purifier",
    "roles": [
      "Marksman",
      "Assassin"
    ],
    "difficulty": 6,
    "blurb": "Lucian, a Sentinel of Light, is a grim hunter of wraiths and specters, pursuing them relentlessly and annihilating them with his twin relic pistols. After the specter Thresh slew his wife, Lucian embarked on the path of vengeance—but even with her...",
    "passive": {
      "name": "Lightslinger",
      "text": "Whenever Lucian uses an ability, his next attack becomes a double-shot. When Lucian is healed or shielded by an ally, or when a nearby enemy Champion is immobilized, his next 2 basic attacks will deal bonus magic damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Piercing Light",
        "text": "Lucian shoots a bolt of piercing light through a target.",
        "dmg": "205 + 120% bonus AD physical damage",
        "cost": "Mana 48/56/64/72/80",
        "cd": "9 → 5s"
      },
      {
        "key": "W",
        "name": "Ardent Blaze",
        "text": "Lucian shoots a missile that explodes in a star shape, marking and briefly revealing enemies. Lucian gains Move Speed for attacking marked enemies.",
        "dmg": "215 + 90% AP magic damage",
        "cost": "Mana 60",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Relentless Pursuit",
        "text": "Lucian quickly dashes a short distance. Lightslinger attacks reduce Relentless Pursuit's cooldown.",
        "cost": "Mana 40/30/20/10/0",
        "cd": "16 → 14s"
      },
      {
        "key": "R",
        "name": "The Culling",
        "text": "Lucian unleashes a torrent of shots from his weapons.",
        "dmg": "45 + 25% AD + 15% AP physical damage",
        "cost": "Mana 100",
        "cd": "110/100/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Ziggs",
        "id": 115,
        "winPrc": 40,
        "games": 5
      },
      "weak": [
        {
          "name": "Ziggs",
          "id": 115,
          "winPrc": 40,
          "games": 5
        },
        {
          "name": "Samira",
          "id": 360,
          "winPrc": 40,
          "games": 5
        },
        {
          "name": "Jinx",
          "id": 222,
          "winPrc": 43,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Viktor",
          "id": 112,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Smolder",
          "id": 901,
          "winPrc": 71,
          "games": 7
        },
        {
          "name": "Caitlyn",
          "id": 51,
          "winPrc": 67,
          "games": 18
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "S+",
      "winPrc": 54,
      "pickRate": 3.12,
      "games": 134,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1055,
          "name": "Doran's Blade"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3009,
          "name": "Boots of Swiftness"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8021,
            "name": "Fleet Footwork"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Lulu",
    "name": "Lulu",
    "title": "the Fae Sorceress",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 5,
    "blurb": "The yordle mage Lulu is known for conjuring dreamlike illusions and fanciful creatures as she roams Runeterra with her fairy companion Pix. Lulu shapes reality on a whim, warping the fabric of the world, and what she views as the constraints of this...",
    "passive": {
      "name": "Pix, Faerie Companion",
      "text": "Pix fires magical bolts of energy whenever the champion he's following attacks another enemy unit. These bolts are homing, but can be intercepted by other units."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Glitterlance",
        "text": "Pix and Lulu each fire a bolt of magical energy that damages and heavily slows all enemies it hits.",
        "dmg": "200 + 50% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "7s"
      },
      {
        "key": "W",
        "name": "Whimsy",
        "text": "If cast on an ally, grants them Attack Speed and Move Speed for a short time. If cast on an enemy, turns them into an adorable critter that can't attack or cast spells.",
        "cost": "Mana 65",
        "cd": "18s"
      },
      {
        "key": "E",
        "name": "Help, Pix!",
        "text": "If cast on an ally, commands Pix to jump to an ally and shield them. He then follows them and aids their attacks. If cast on an enemy, commands Pix to jump to an enemy and damage them. He then follows them and grants you vision of that enemy.",
        "dmg": "240 + 50% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "8s"
      },
      {
        "key": "R",
        "name": "Wild Growth",
        "text": "Lulu enlarges an ally, knocking nearby enemies into the air and granting the ally a large amount of bonus health. For the next few seconds, that ally gains an aura that slows nearby enemies.",
        "cost": "Mana 100",
        "cd": "100/90/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Blitzcrank",
        "id": 53,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Blitzcrank",
          "id": 53,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Camille",
          "id": 164,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Leona",
          "id": 89,
          "winPrc": 29,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Bard",
          "id": 432,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Yuumi",
          "id": 350,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Zilean",
          "id": 26,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "S+",
      "winPrc": 52,
      "pickRate": 2.89,
      "games": 121,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Lux",
    "name": "Lux",
    "title": "the Lady of Luminosity",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 5,
    "blurb": "Luxanna Crownguard hails from Demacia, an insular realm where magical abilities are viewed with fear and suspicion. Able to bend light to her will, she grew up dreading discovery and exile, and was forced to keep her power secret, in order to preserve...",
    "passive": {
      "name": "Illumination",
      "text": "Lux's damaging spells charge the target with energy for a few seconds. Lux's next attack ignites the energy, dealing bonus magic damage (depending on Lux's level) to the target."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Light Binding",
        "text": "Lux releases a sphere of light that binds and deals damage to up to two enemy units.",
        "dmg": "240 + 65% AP magic damage",
        "cost": "Mana 50",
        "cd": "11 → 9s"
      },
      {
        "key": "W",
        "name": "Prismatic Barrier",
        "text": "Lux throws her wand and bends the light around any friendly target it touches, protecting them from enemy damage.",
        "cost": "Mana 60/65/70/75/80",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Lucent Singularity",
        "text": "Fires an anomaly of twisted light to an area, which slows nearby enemies. Lux can detonate it to damage enemies in the area of effect.",
        "dmg": "265 + 80% AP magic damage",
        "cost": "Mana 70/80/90/100/110",
        "cd": "10 → 8s"
      },
      {
        "key": "R",
        "name": "Final Spark",
        "text": "After gathering energy, Lux fires a beam of light that deals damage to all targets in the area. In addition, triggers Lux's passive ability and refreshes the Illumination debuff duration.",
        "dmg": "500 + 120% AP magic damage",
        "cost": "Mana 100",
        "cd": "60/50/40s"
      }
    ],
    "counters": {
      "best": {
        "name": "Pyke",
        "id": 555,
        "winPrc": 18,
        "games": 11
      },
      "weak": [
        {
          "name": "Pyke",
          "id": 555,
          "winPrc": 18,
          "games": 11
        },
        {
          "name": "Shaco",
          "id": 35,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Zyra",
          "id": 143,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Senna",
          "id": 235,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Rakan",
          "id": 497,
          "winPrc": 71,
          "games": 7
        },
        {
          "name": "Morgana",
          "id": 25,
          "winPrc": 71,
          "games": 17
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "S+",
      "winPrc": 53,
      "pickRate": 6.44,
      "games": 269,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4005,
          "name": "Imperial Mandate"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 6653,
          "name": "Liandry's Torment"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4645,
              "name": "Shadowflame",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Malphite",
    "name": "Malphite",
    "title": "Shard of the Monolith",
    "roles": [
      "Tank",
      "Mage"
    ],
    "difficulty": 2,
    "blurb": "A massive creature of living stone, Malphite struggles to impose blessed order on a chaotic world. Birthed as a servitor-shard to an otherworldly obelisk known as the Monolith, he used his tremendous elemental strength to maintain and protect his...",
    "passive": {
      "name": "Granite Shield",
      "text": "Malphite is shielded by a layer of rock which absorbs damage up to 10% of his maximum Health. If Malphite has not been hit for a few seconds, this effect recharges."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Seismic Shard",
        "text": "Malphite sends a shard of the earth through the ground at his foe, dealing damage upon impact and stealing Move Speed for 3 seconds.",
        "dmg": "270 + 60% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "8s"
      },
      {
        "key": "W",
        "name": "Thunderclap",
        "text": "Malphite attacks with such force that it creates a sonic boom. For the next few seconds, his attacks create aftershocks in front of him.",
        "dmg": "55 + 30% AP + 15% armor physical damage",
        "cost": "Mana 30/35/40/45/50",
        "cd": "10 → 8s"
      },
      {
        "key": "E",
        "name": "Ground Slam",
        "text": "Malphite slams the ground, sending out a shockwave that deals magic damage based on his Armor and reduces the Attack Speed of enemies for a short duration.",
        "dmg": "230 + 60% AP + 40% armor magic damage",
        "cost": "Mana 50",
        "cd": "7s"
      },
      {
        "key": "R",
        "name": "Unstoppable Force",
        "text": "Malphite launches himself to a location at high speed, damaging enemies and knocking them into the air.",
        "dmg": "400 + 90% AP magic damage",
        "cost": "Mana 100",
        "cd": "130/105/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Jayce",
        "id": 126,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Jayce",
          "id": 126,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Darius",
          "id": 122,
          "winPrc": 33,
          "games": 9
        },
        {
          "name": "Gnar",
          "id": 150,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Teemo",
          "id": 17,
          "winPrc": 75,
          "games": 8
        },
        {
          "name": "Sion",
          "id": 14,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Riven",
          "id": 92,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 48,
      "pickRate": 3.74,
      "games": 159,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Malzahar",
    "name": "Malzahar",
    "title": "the Prophet of the Void",
    "roles": [
      "Mage"
    ],
    "difficulty": 6,
    "blurb": "A zealous seer dedicated to the unification of all life, Malzahar truly believes the newly emergent Void to be the path to Runeterra's salvation. In the desert wastes of Shurima, he followed the voices that whispered in his mind, all the way to ancient...",
    "passive": {
      "name": "Void Shift",
      "text": "When he hasn't recently taken damage or been crowd controlled, Malzahar gains massive damage reduction and crowd control immunity, lingering for a short period after taking damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Call of the Void",
        "text": "Malzahar opens up two portals to the Void. After a short delay, they fire projectiles that deal Magic Damage and silence enemy champions.",
        "dmg": "210 + 55% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "6s"
      },
      {
        "key": "W",
        "name": "Void Swarm",
        "text": "Malzahar summons Voidlings to attack nearby enemies.",
        "dmg": "64.5 + 40% bonus AD + 20% AP magic damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "8s"
      },
      {
        "key": "E",
        "name": "Malefic Visions",
        "text": "Malzahar infects his target's mind with cruel visions of their demise, dealing damage over time. Using Malzahar's other spells on the target will refresh the visions. If the target dies while afflicted by the visions, they pass on to a nearby enemy unit and Malzahar gains Mana. Malzahar's Voidlings are attracted to affected units.",
        "dmg": "220 + 80% AP magic damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "11 → 7s"
      },
      {
        "key": "R",
        "name": "Nether Grasp",
        "text": "Malzahar channels the essence of the Void to suppress an enemy champion over a zone of damaging negative energy.",
        "dmg": "275 + 80% AP magic damage",
        "cost": "Mana 100",
        "cd": "140/110/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Syndra",
        "id": 134,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Syndra",
          "id": 134,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Locke",
          "id": 805,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "LeBlanc",
          "id": 7,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Yasuo",
          "id": 157,
          "winPrc": 93,
          "games": 14
        },
        {
          "name": "Mel",
          "id": 800,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "S+",
      "winPrc": 57,
      "pickRate": 3.74,
      "games": 159,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Maokai",
    "name": "Maokai",
    "title": "the Twisted Treant",
    "roles": [
      "Tank",
      "Support"
    ],
    "difficulty": 3,
    "blurb": "Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical cataclysm destroyed his home, surviving undeath only through the Waters of Life infused within his...",
    "passive": {
      "name": "Sap Magic",
      "text": "Maokai's basic attack also heals him and deals additional damage on a moderate cooldown. Each time Maokai casts a spell or is struck by an enemy's spell, this cooldown is reduced."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Bramble Smash",
        "text": "Maokai knocks back nearby enemies with a shockwave, dealing magic damage and slowing them.",
        "dmg": "245 + 4% of the target's maximum health + 40% AP magic damage",
        "cost": "Mana 40",
        "cd": "7 → 5s"
      },
      {
        "key": "W",
        "name": "Twisted Advance",
        "text": "Maokai contorts into a mass of moving roots, becoming untargetable and dashing to the target. Upon arrival, he roots the target.",
        "dmg": "160 + 40% AP magic damage",
        "cost": "Mana 60",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Sapling Toss",
        "text": "Maokai flings a sapling to the target area to stand guard. More effective in brush.",
        "dmg": "150 + 5% bonus health + 25% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "18 → 14s"
      },
      {
        "key": "R",
        "name": "Nature's Grasp",
        "text": "Maokai summons a colossal wall of brambles and thorns that slowly advances forwards, damaging and rooting any enemies in the path.",
        "dmg": "300 + 75% AP magic damage",
        "cost": "Mana 100",
        "cd": "130/110/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Camille",
        "id": 164,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Camille",
          "id": 164,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Pyke",
          "id": 555,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Blitzcrank",
          "id": 53,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Seraphine",
          "id": 147,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 0.93,
      "games": 39,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3190,
          "name": "Locket of the Iron Solari"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3109,
          "name": "Knight's Vow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3050,
              "name": "Zeke's Convergence",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3107,
              "name": "Redemption",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3002,
              "name": "Trailblazer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8439,
            "name": "Aftershock"
          },
          "minors": [
            {
              "id": 8401,
              "name": "Shield Bash"
            },
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "MasterYi",
    "name": "Master Yi",
    "title": "the Wuju Bladesman",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 4,
    "blurb": "Master Yi has tempered his body and sharpened his mind, so that thought and action have become almost as one. Though he chooses to enter into violence only as a last resort, the grace and speed of his blade ensures resolution is always swift. As one of...",
    "passive": {
      "name": "Double Strike",
      "text": "Every few consecutive basic attack, Master Yi strikes twice."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Alpha Strike",
        "text": "Master Yi teleports across the battlefield with blinding speed, dealing physical damage to multiple units in his path, while simultaneously becoming untargetable. Alpha Strike can critically strike and deals bonus physical damage to monsters. Basic attacks reduce Alpha Strike's cooldown.",
        "dmg": "150 + 50% AD physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "20 → 18s"
      },
      {
        "key": "W",
        "name": "Meditate",
        "text": "Master Yi rejuvenates his body by focus of mind, restoring Health and taking reduced damage for a short time. In addition, Master Yi will gain stacks of Double Strike and pause the remaining duration on Wuju Style and Highlander for each second he channels.",
        "dmg": "55%",
        "cost": "Mana/sec 40",
        "cd": "10s"
      },
      {
        "key": "E",
        "name": "Wuju Style",
        "text": "Grants bonus true damage on basic attacks.",
        "dmg": "40 + 35% bonus AD true damage",
        "cd": "14s"
      },
      {
        "key": "R",
        "name": "Highlander",
        "text": "Master Yi moves with unparalleled agility, temporarily increasing his Move Speed and Attack Speed as well as making him immune to all slowing effects. While active, Champion kills or assists extend Highlander's duration. Passively reduces cooldown for his other abilities on a kill or assist.",
        "cost": "Mana 100",
        "cd": "85s"
      }
    ],
    "counters": {
      "best": {
        "name": "Graves",
        "id": 104,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Graves",
          "id": 104,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Volibear",
          "id": 106,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Teemo",
          "id": 17,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Viego",
          "id": 234,
          "winPrc": 71,
          "games": 7
        },
        {
          "name": "Rengar",
          "id": 107,
          "winPrc": 71,
          "games": 7
        },
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "S",
      "winPrc": 52,
      "pickRate": 4.15,
      "games": 178,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6672,
          "name": "Kraken Slayer"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3124,
          "name": "Guinsoo's Rageblade"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3153,
              "name": "Blade of The Ruined King",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Mel",
    "name": "Mel",
    "title": "the Soul's Reflection",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 5,
    "blurb": "Mel Medarda is the presumed heir of the Medarda family, once one of the most powerful in Noxus. In appearance she is a graceful aristocrat, but beneath the surface lies a skilled politician who makes it her business to know everything about everyone she...",
    "passive": {
      "name": "Searing Brilliance",
      "text": "Whenever Mel uses an ability, she gains three bonus projectiles (up to nine maximum) on her next attack. When Mel deals damage through an ability or attack, she applies Overwhelm, which can stack infinitely. If the enemy is hit by Mel with enough Overwhelm damage, the stacks are consumed to execute the target."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Radiant Volley",
        "text": "Mel fires a barrage of projectiles that explode around a target location, dealing damage repeatedly to enemies within the area.",
        "dmg": "23 + 8.5% AP magic damage",
        "cost": "Mana 70/80/90/100/110",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Rebuttal",
        "text": "Mel forms a barrier around herself that reflects enemy projectiles back at the attacker, prevents her from taking damage, and grants her movement speed.",
        "dmg": "60% of the original damage + 5% per 100 AP magic damage",
        "cost": "Mana 80/60/40/20/0",
        "cd": "35 → 23s"
      },
      {
        "key": "E",
        "name": "Solar Snare",
        "text": "Mel fires a radiant orb forward, rooting those at its center while the area around it slows enemies and deals damage over time.",
        "dmg": "240 + 60% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "12 → 10s"
      },
      {
        "key": "R",
        "name": "Golden Eclipse",
        "text": "Mel strikes all enemies marked with Overwhelm regardless of their distance from her, dealing additional damage for each stack of Overwhelm. Ranks of Golden Eclipse increase Overwhelm's damage.",
        "dmg": "200 + 30% AP + 10(+ 3.5% AP) per Overwhelm stack on the target magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 45,
      "pickRate": 2.05,
      "games": 88,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 90,
              "winPrc": 44
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 10,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 86,
              "winPrc": 33
            },
            {
              "id": 2503,
              "name": "Blackfire Torch",
              "pct": 14,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 2503,
              "name": "Blackfire Torch",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 50,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8014,
              "name": "Coup de Grace"
            },
            {
              "id": 8009,
              "name": "Presence of Mind"
            }
          ]
        },
        "statShards": [
          {
            "id": 5007,
            "name": "Ability Haste"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Ashe",
        "id": 22,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Ashe",
          "id": 22,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Jhin",
          "id": 202,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Caitlyn",
          "id": 51,
          "winPrc": 25,
          "games": 12
        }
      ],
      "strong": [
        {
          "name": "Kai'Sa",
          "id": 145,
          "winPrc": 60,
          "games": 5
        },
        {
          "name": "Miss Fortune",
          "id": 21,
          "winPrc": 54,
          "games": 13
        }
      ]
    }
  },
  {
    "id": "Milio",
    "name": "Milio",
    "title": "The Gentle Flame",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 5,
    "blurb": "Milio is a warmhearted boy from Ixtal who has, despite his young age, mastered the fire axiom and discovered something new: soothing fire. With this newfound power, Milio plans to help his family escape their exile by joining the Yun Tal—just like his...",
    "passive": {
      "name": "Fired Up!",
      "text": "Milio's abilities enchant allies on touch, making their next damage deal a burst of extra damage and burn the target."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Ultra Mega Fire Kick",
        "text": "Kick a ball that knocks back an enemy. The ball launches upward on hit and falls toward the enemy, damaging and slowing enemies in the area upon impact.",
        "dmg": "320 + 120% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "10s"
      },
      {
        "key": "W",
        "name": "Cozy Campfire",
        "text": "Create an empowering zone that heals allies and increases attack range to those inside. The zone follows the ally nearest to the cast point.",
        "cost": "Mana 90/100/110/120/130",
        "cd": "29 → 21s"
      },
      {
        "key": "E",
        "name": "Warm Hugs",
        "text": "Milio tosses a shield to an ally, temporarily increasing their movement speed. This ability has 2 charges.",
        "cost": "Mana 50/60/70/80/90",
        "cd": "0.5s"
      },
      {
        "key": "R",
        "name": "Breath of Life",
        "text": "Milio unleashes a wave of soothing flames that heal and remove crowd control effects from allies in range.",
        "cost": "Mana 100",
        "cd": "160/145/130s"
      }
    ],
    "counters": {
      "best": {
        "name": "Lulu",
        "id": 117,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Lulu",
          "id": 117,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Sona",
          "id": 37,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Nautilus",
          "id": 111,
          "winPrc": 75,
          "games": 8
        },
        {
          "name": "Rell",
          "id": 526,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Senna",
          "id": 235,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "S+",
      "winPrc": 58,
      "pickRate": 2.11,
      "games": 88,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "MissFortune",
    "name": "Miss Fortune",
    "title": "the Bounty Hunter",
    "roles": [
      "Marksman",
      "Mage"
    ],
    "difficulty": 1,
    "blurb": "A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family—an act she brutally...",
    "passive": {
      "name": "Love Tap",
      "text": "Miss Fortune deals bonus physical damage whenever she basic attacks a new target."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Double Up",
        "text": "Miss Fortune fires a bullet at an enemy, damaging them and a target behind them. Both strikes can also apply Love Tap.",
        "dmg": "120 + 100% AD + 35% AP physical damage",
        "cost": "Mana 40",
        "cd": "7 → 3s"
      },
      {
        "key": "W",
        "name": "Strut",
        "text": "Miss Fortune passively gains Move Speed when not attacked. This ability can be activated to grant bonus Attack Speed for a short duration. While it's on cooldown, Love Taps reduce the remaining cooldown of Strut.",
        "cost": "Mana 45",
        "cd": "12s"
      },
      {
        "key": "E",
        "name": "Make It Rain",
        "text": "Miss Fortune reveals an area with a flurry of bullets, dealing waves of damage to opponents and slowing them.",
        "dmg": "23.75 + 15% AP magic damage",
        "cost": "Mana 80",
        "cd": "18 → 14s"
      },
      {
        "key": "R",
        "name": "Bullet Time",
        "text": "Miss Fortune channels a barrage of bullets into a cone in front of her, dealing large amounts of damage to enemies. Each wave of Bullet Time can critically strike",
        "dmg": "1350% AD + 450% AP physical damage",
        "cost": "Mana 100",
        "cd": "120/110/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Aphelios",
        "id": 523,
        "winPrc": 11,
        "games": 9
      },
      "weak": [
        {
          "name": "Aphelios",
          "id": 523,
          "winPrc": 11,
          "games": 9
        },
        {
          "name": "Veigar",
          "id": 45,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Seraphine",
          "id": 147,
          "winPrc": 20,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Xerath",
          "id": 101,
          "winPrc": 88,
          "games": 8
        },
        {
          "name": "Yasuo",
          "id": 157,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Nilah",
          "id": 895,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "C",
      "winPrc": 49,
      "pickRate": 8.43,
      "games": 362,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1055,
          "name": "Doran's Blade"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3009,
          "name": "Boots of Swiftness"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8021,
            "name": "Fleet Footwork"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Mordekaiser",
    "name": "Mordekaiser",
    "title": "the Iron Revenant",
    "roles": [
      "Fighter",
      "Mage"
    ],
    "difficulty": 4,
    "blurb": "Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch who uses his necromantic sorcery to bind souls into an eternity of servitude. Few now remain who remember his earlier conquests, or know the true extent of his powers—but...",
    "passive": {
      "name": "Darkness Rise",
      "text": "Mordekaiser gains a powerful damage aura and Move Speed after landing 3 attacks or spells against champions or monsters."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Obliterate",
        "text": "Mordekaiser smashes the ground with his mace dealing damage to each enemy struck. Damage is increased when hitting a single enemy.",
        "dmg": "45 + 70% AP magic damage",
        "cd": "8 → 4s"
      },
      {
        "key": "W",
        "name": "Indestructible",
        "text": "Mordekaiser stores damage he deals and takes to create a shield. He may consume the shield to heal.",
        "cd": "12 → 8s"
      },
      {
        "key": "E",
        "name": "Death's Grasp",
        "text": "Mordekaiser pulls all enemies in an area.",
        "dmg": "120 + 40% AP magic damage",
        "cd": "18 → 10s"
      },
      {
        "key": "R",
        "name": "Realm of Death",
        "text": "Mordekaiser drags his victim to a different dimension with him and steals a portion of their stats. If he kills them, he keeps the stats until the victim respawns.",
        "cd": "140/120/100s"
      }
    ],
    "build": {
      "role": "Top",
      "tier": "C",
      "winPrc": 48,
      "pickRate": 6.19,
      "games": 263,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3116,
          "name": "Rylai's Crystal Scepter"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 4633,
          "name": "Riftmaker"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 80,
              "winPrc": 38
            },
            {
              "id": 3075,
              "name": "Thornmail",
              "pct": 20,
              "winPrc": 50
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3075,
              "name": "Thornmail",
              "pct": 83,
              "winPrc": 40
            },
            {
              "id": 4645,
              "name": "Shadowflame",
              "pct": 17,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 67,
              "winPrc": 0
            },
            {
              "id": 3075,
              "name": "Thornmail",
              "pct": 33,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9105,
              "name": "Legend: Haste"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Garen",
        "id": 86,
        "winPrc": 14,
        "games": 7
      },
      "weak": [
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 14,
          "games": 7
        },
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Riven",
          "id": 92,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "K'Sante",
          "id": 897,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Yorick",
          "id": 83,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 75,
          "games": 4
        }
      ]
    }
  },
  {
    "id": "Morgana",
    "name": "Morgana",
    "title": "the Fallen",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 1,
    "blurb": "Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from...",
    "passive": {
      "name": "Soul Siphon",
      "text": "Morgana drains spirit from her enemies, healing as she deals damage to champions, large minions, and medium and larger jungler monsters."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Dark Binding",
        "text": "Morgana binds an enemy in place with dark magic, forcing them to feel the pain they've caused and dealing magic damage.",
        "dmg": "300 + 90% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "10s"
      },
      {
        "key": "W",
        "name": "Tormented Shadow",
        "text": "Morgana casts a cursed shadow on an area, damaging enemies who dare stand in her dark circle. They receive magic damage over time, which increases the lower health they are.",
        "dmg": "28 + 8.5% AP magic damage",
        "cost": "Mana 70/85/100/115/130",
        "cd": "12s"
      },
      {
        "key": "E",
        "name": "Black Shield",
        "text": "Morgana anoints an ally with a protective barrier of starfire, which absorbs magical damage and disabling effects until it is broken.",
        "cost": "Mana 80",
        "cd": "26 → 16s"
      },
      {
        "key": "R",
        "name": "Soul Shackles",
        "text": "Morgana unleashes the full force of her Celestial power as she unbinds her wings and hovers above the ground. She lashes chains of dark pain onto nearby enemy champions, gaining Move Speed. The chains slow and deal initial damage and, after a delay, stun those who are unable to break them.",
        "dmg": "350 + 80% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/110/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Braum",
        "id": 201,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Braum",
          "id": 201,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Lulu",
          "id": 117,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 29,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Nautilus",
          "id": 111,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Mel",
          "id": 800,
          "winPrc": 67,
          "games": 9
        },
        {
          "name": "Pyke",
          "id": 555,
          "winPrc": 67,
          "games": 6
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "C",
      "winPrc": 48,
      "pickRate": 3.66,
      "games": 153,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4005,
          "name": "Imperial Mandate"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 6653,
          "name": "Liandry's Torment"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4645,
              "name": "Shadowflame",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Naafiri",
    "name": "Naafiri",
    "title": "the Hound of a Hundred Bites",
    "roles": [
      "Assassin",
      "Fighter"
    ],
    "difficulty": 2,
    "blurb": "Across the sands of Shurima, a chorus of howls rings out. It is the call of the dune hounds, voracious predators who form packs and compete for the right to hunt in these barren lands. Among them, one pack stands above all, for they are driven not only...",
    "passive": {
      "name": "We Are More",
      "text": "Naafiri spawns packmates that attack the targets of her attacks and abilities."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Darkin Daggers",
        "text": "Naafiri hurls up to two daggers, each inflicting bleed, or each inflicting bonus damage if the target is already bleeding. Packmates leap to attack the first champion or monster hit by this skill.",
        "dmg": "55 + 20% bonus AD physical damage",
        "cost": "Mana 55/60/65/70/75",
        "cd": "9 → 7s"
      },
      {
        "key": "W",
        "name": "The Call of the Pack",
        "text": "Naafiri becomes Untargetable and empowers her pack, spawning additional packmates and gaining increased Move Speed and Attack Damage.",
        "cost": "Mana 60",
        "cd": "26 → 18s"
      },
      {
        "key": "E",
        "name": "Eviscerate",
        "text": "Naafiri dashes and damages enemies in an area around her, recalling her packmates and fully healing them.",
        "dmg": "55 + 40% bonus AD physical damage",
        "cost": "Mana 35",
        "cd": "11 → 7s"
      },
      {
        "key": "R",
        "name": "Hounds' Pursuit",
        "text": "Naafiri and her packmates dash at a champion, dealing damage. Naafiri reveals nearby enemies if she scores a takedown and can recast this Ability once. The second cast grants a shield.",
        "dmg": "350 + 120% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "110/95/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Lee Sin",
        "id": 64,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Lee Sin",
          "id": 64,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Bel'Veth",
          "id": 200,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Viego",
          "id": 234,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Udyr",
          "id": 77,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Talon",
          "id": 91,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 40,
      "pickRate": 2.14,
      "games": 92,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3142,
              "name": "Youmuu's Ghostblade",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6694,
              "name": "Serylda's Grudge",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8128,
            "name": "Dark Harvest"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Nami",
    "name": "Nami",
    "title": "the Tidecaller",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 5,
    "blurb": "A headstrong young vastaya of the seas, Nami was the first of the Marai tribe to leave the waves and venture onto dry land, when their ancient accord with the Targonians was broken. With no other option, she took it upon herself to complete the sacred...",
    "passive": {
      "name": "Surging Tides",
      "text": "When Nami's Abilities hit allied champions they gain Move Speed for a short duration."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Aqua Prison",
        "text": "Sends a bubble to a target area, dealing damage and stunning all enemies on impact.",
        "dmg": "310 + 50% AP magic damage",
        "cost": "Mana 60",
        "cd": "12 → 8s"
      },
      {
        "key": "W",
        "name": "Ebb and Flow",
        "text": "Unleashes a stream of water that bounces back and forth between allied and enemy champions, healing allies and damaging enemies.",
        "dmg": "200 + 50% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "10s"
      },
      {
        "key": "E",
        "name": "Tidecaller's Blessing",
        "text": "Empowers an allied champion for a short duration. The ally's basic attacks and spells deal bonus magic damage and slow the target.",
        "dmg": "60 + 20% AP magic damage",
        "cost": "Mana 55/60/65/70/75",
        "cd": "11s"
      },
      {
        "key": "R",
        "name": "Tidal Wave",
        "text": "Summons a massive Tidal Wave that knocks up, slows, and damages enemies. Allies hit gain double the effect of Surging Tides.",
        "dmg": "350 + 60% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/110/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Nautilus",
        "id": 111,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Nautilus",
          "id": 111,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Blitzcrank",
          "id": 53,
          "winPrc": 22,
          "games": 9
        },
        {
          "name": "Swain",
          "id": 50,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 80,
          "games": 10
        },
        {
          "name": "Sona",
          "id": 37,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Yuumi",
          "id": 350,
          "winPrc": 80,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "S+",
      "winPrc": 54,
      "pickRate": 3.47,
      "games": 145,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Nasus",
    "name": "Nasus",
    "title": "the Curator of the Sands",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 6,
    "blurb": "Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and peerless strategist whose wisdom guided the ancient...",
    "passive": {
      "name": "Soul Eater",
      "text": "Nasus drains his foe's spiritual energy, giving him bonus Life Steal."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Siphoning Strike",
        "text": "Nasus strikes his foe, dealing damage and increasing the power of his future Siphoning Strikes if he slays his target.",
        "dmg": "115 + 100% of Siphoning Strike stacks physical damage",
        "cost": "Mana 20",
        "cd": "7.5 → 3.5s"
      },
      {
        "key": "W",
        "name": "Wither",
        "text": "Nasus ages an enemy champion, decelerating their Move Speed and Attack Speed over time.",
        "cost": "Mana 80",
        "cd": "15 → 11s"
      },
      {
        "key": "E",
        "name": "Spirit Fire",
        "text": "Nasus unleashes a spirit flame at a location, dealing damage and reducing the Armor of enemies who stand on it.",
        "dmg": "170 + 60% AP magic damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "12s"
      },
      {
        "key": "R",
        "name": "Fury of the Sands",
        "text": "Nasus unleashes a mighty sandstorm that batters nearby enemies. While the storm rages, he gains increased Health, Attack Range, damages nearby enemies, has a reduced cooldown on Siphoning Strike, and gains bonus Armor and Magic Resistance.",
        "dmg": "2.5% of target's max HP + 0.5% per 100 AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Lillia",
        "id": 876,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Lillia",
          "id": 876,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Briar",
          "id": 233,
          "winPrc": 86,
          "games": 7
        },
        {
          "name": "Shaco",
          "id": 35,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Kayn",
          "id": 141,
          "winPrc": 67,
          "games": 6
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "S+",
      "winPrc": 61,
      "pickRate": 2.05,
      "games": 88,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Nautilus",
    "name": "Nautilus",
    "title": "the Titan of the Depths",
    "roles": [
      "Tank",
      "Support"
    ],
    "difficulty": 6,
    "blurb": "A lonely legend as old as the first piers sunk in Bilgewater, the armored goliath known as Nautilus roams the dark waters off the coast of the Blue Flame Isles. Driven by a forgotten betrayal, he strikes without warning, swinging his enormous anchor to...",
    "passive": {
      "name": "Staggering Blow",
      "text": "Nautilus' first Attack against a target deals increased physical damage and roots them briefly."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Dredge Line",
        "text": "Nautilus hurls his anchor forward. Colliding with an enemy pulls them and Nautilus together, dealing magic damage. Colliding with terrain pulls Nautilus towards it.",
        "dmg": "265 + 90% AP magic damage",
        "cost": "Mana 60",
        "cd": "14 → 10s"
      },
      {
        "key": "W",
        "name": "Titan's Wrath",
        "text": "Nautilus gains a temporary Shield. While it persists, his Attacks deal damage over time to his target and surrounding enemies.",
        "dmg": "70 + 40% AP magic damage",
        "cost": "Mana 60",
        "cd": "12s"
      },
      {
        "key": "E",
        "name": "Riptide",
        "text": "Nautilus creates three exploding waves around himself. Each explosion damages and slows enemies.",
        "dmg": "195 + 50% AP magic damage",
        "cost": "Mana 50/60/70/80/90",
        "cd": "7 → 5s"
      },
      {
        "key": "R",
        "name": "Depth Charge",
        "text": "Nautilus fires a shockwave into the earth that chases an opponent. This shockwave rips up the earth above it, knocking enemies into the air. When it reaches the opponent, the shockwave erupts, knocking his target into the air and stunning them.",
        "dmg": "225 + 40% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Milio",
        "id": 902,
        "winPrc": 25,
        "games": 8
      },
      "weak": [
        {
          "name": "Milio",
          "id": 902,
          "winPrc": 25,
          "games": 8
        },
        {
          "name": "Morgana",
          "id": 25,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 29,
          "games": 21
        }
      ],
      "strong": [
        {
          "name": "Xerath",
          "id": 101,
          "winPrc": 83,
          "games": 6
        },
        {
          "name": "Nami",
          "id": 267,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Poppy",
          "id": 78,
          "winPrc": 80,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "B",
      "winPrc": 50,
      "pickRate": 5.24,
      "games": 219,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3190,
          "name": "Locket of the Iron Solari"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3109,
          "name": "Knight's Vow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3050,
              "name": "Zeke's Convergence",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3107,
              "name": "Redemption",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3002,
              "name": "Trailblazer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8439,
            "name": "Aftershock"
          },
          "minors": [
            {
              "id": 8401,
              "name": "Shield Bash"
            },
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Neeko",
    "name": "Neeko",
    "title": "the Curious Chameleon",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 5,
    "blurb": "Hailing from a long lost tribe of vastaya, Neeko can blend into any crowd by borrowing the appearances of others, even absorbing something of their emotional state to tell friend from foe in an instant. No one is ever sure where—or who—Neeko might be...",
    "passive": {
      "name": "Inherent Glamour",
      "text": "Neeko can look like an ally champion or as other units on the map. Receiving immobilizing crowd control, casting damaging spells, damaging enemy towers as a non-champion, or your disguise taking damage equal to its healthbar breaks the disguise."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Blooming Burst",
        "text": "Neeko throws a seed dealing magic damage. The seed blooms again on hitting champions or killing units.",
        "dmg": "260 + 50% AP magic damage",
        "cost": "Mana 50/60/70/80/90",
        "cd": "9 → 7s"
      },
      {
        "key": "W",
        "name": "Shapesplitter",
        "text": "Neeko passively deals bonus magic damage every third attack, briefly increasing her move speed. Neeko can activate to send a clone in a direction and recast to change the direction of the clone.",
        "dmg": "180 + 60% AP magic damage",
        "cd": "16 → 12s"
      },
      {
        "key": "E",
        "name": "Tangle-Barbs",
        "text": "Neeko slings a tangle that damages and roots everything it passes through. If the tangle kills an enemy or passes through a champion, it becomes larger, faster, and roots for longer.",
        "dmg": "210 + 65% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "12 → 10s"
      },
      {
        "key": "R",
        "name": "Pop Blossom",
        "text": "After a short preparation, Neeko leaps into the air, knocking up all nearby enemies. Upon landing, nearby enemies are damaged and stunned. The preparation is hidden if Neeko is disguised.",
        "dmg": "550 + 120% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/105/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Soraka",
        "id": 16,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Soraka",
          "id": 16,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Seraphine",
          "id": 147,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Support",
      "tier": "A",
      "winPrc": 52,
      "pickRate": 1,
      "games": 42,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4005,
          "name": "Imperial Mandate"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 6653,
          "name": "Liandry's Torment"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4645,
              "name": "Shadowflame",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Nidalee",
    "name": "Nidalee",
    "title": "the Bestial Huntress",
    "roles": [
      "Assassin",
      "Mage"
    ],
    "difficulty": 8,
    "blurb": "Raised in the deepest jungle, Nidalee is a master tracker who can shapeshift into a ferocious cougar at will. Neither wholly woman nor beast, she viciously defends her territory from any and all trespassers, with carefully placed traps and deft spear...",
    "passive": {
      "name": "Prowl",
      "text": "Moving through brush increases Nidalee's Move Speed by 10% for 2 seconds, increased to 30% toward visible enemy champions within 1400 range. Hitting champions or monsters with Javelin Toss or Bushwhack triggers a Hunt , granting True Sight of them for 4 seconds. During this time, Nidalee gains 10% Move Speed (increased to 30% toward the Hunted target) and her Takedown and Pounce are enhanced against them."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Javelin Toss / Takedown",
        "text": "In human form, Nidalee throws a spiked javelin at her target that gains damage as it flies. As a cougar, her next attack will attempt to fatally wound her target, dealing more damage the less life they have.",
        "dmg": [
          "Javelin Toss: 150 + 50% AP magic damage",
          "Takedown: 80 + 75% AD + 40% AP magic damage"
        ],
        "cost": "Mana 50/55/60/65/70",
        "cd": "6s"
      },
      {
        "key": "W",
        "name": "Bushwhack / Pounce",
        "text": "In human form, Nidalee lays a trap for unwary opponents that, when sprung, damages and reveals its target. As a cougar, she jumps in a direction, dealing damage in an area where she lands.",
        "dmg": [
          "Bushwhack: 50 + 5% AP magic damage",
          "Pounce: 190 + 50% bonus AD + 30% AP magic damage"
        ],
        "cost": "Mana 30/35/40/45/50",
        "cd": "13 → 9s"
      },
      {
        "key": "E",
        "name": "Primal Surge / Swipe",
        "text": "In human form, Nidalee channels the spirit of the cougar to heal her allies and imbue them with Attack Speed for a short duration. As a cougar, she claws in a direction, dealing damage to enemies in front of her.",
        "dmg": "Swipe: 250 + 70% bonus AD + 40% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "12s"
      },
      {
        "key": "R",
        "name": "Aspect Of The Cougar",
        "text": "Nidalee transforms into a cougar, gaining new abilities.",
        "cd": "3s"
      }
    ],
    "counters": {
      "best": {
        "name": "Kayn",
        "id": 141,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Kayn",
          "id": 141,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Graves",
          "id": 104,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 41,
      "pickRate": 0.86,
      "games": 37,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3146,
          "name": "Hextech Gunblade"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3100,
              "name": "Lich Bane",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Nilah",
    "name": "Nilah",
    "title": "the Joy Unbound",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 10,
    "blurb": "Nilah is an ascetic warrior from a distant land, seeking the world's deadliest, most titanic opponents so that she might challenge and destroy them. Having won her power through an encounter with the long-imprisoned demon of joy, she has no emotions...",
    "passive": {
      "name": "Joy Unending",
      "text": "Nilah gains increased experience from last-hitting minions along with the ability to enhance and share nearby healing and shielding from her allies."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Formless Blade",
        "text": "With a snap of her whip-blade, Nilah damages any enemies she hits in a straight line in her chosen direction. This action extends her attack range for a short duration.",
        "dmg": "25 + 110% AD physical damage",
        "cost": "Mana 30",
        "cd": "4s"
      },
      {
        "key": "W",
        "name": "Jubilant Veil",
        "text": "Nilah envelops herself in mist, increasing her movement speed and allowing her to gracefully dodge all incoming attacks. Any allies she touches during the mist's duration will also gain this effect.",
        "cost": "Mana 60/45/30/15/0",
        "cd": "26 → 22s"
      },
      {
        "key": "E",
        "name": "Slipstream",
        "text": "Nilah enthusiastically dashes toward her target, dealing damage to any enemies she passes through on the way.",
        "dmg": "100 + 20% bonus AD physical damage",
        "cost": "Mana 30",
        "cd": "0.5s"
      },
      {
        "key": "R",
        "name": "Apotheosis",
        "text": "Twirling her whip-blade in joyful exuberance, Nilah deals damage to enemies around her before pulling them closer with her weapon.",
        "dmg": "35 + 10% bonus AD physical damage",
        "cost": "Mana 80",
        "cd": "110/95/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Miss Fortune",
        "id": 21,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Miss Fortune",
          "id": 21,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Caitlyn",
          "id": 51,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Jinx",
          "id": 222,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 52,
      "pickRate": 0.54,
      "games": 23,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 2523,
          "name": "Hexoptics C44"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3046,
          "name": "Phantom Dancer"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 70,
              "winPrc": null
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 30,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Nocturne",
    "name": "Nocturne",
    "title": "the Eternal Nightmare",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 4,
    "blurb": "A demonic amalgamation drawn from the nightmares that haunt every sentient mind, the thing known as Nocturne has become a primordial force of pure evil. It is liquidly chaotic in aspect, a faceless shadow with cold eyes and armed with wicked-looking...",
    "passive": {
      "name": "Umbra Blades",
      "text": "Every few seconds, Nocturne's next attack strikes surrounding enemies for bonus physical damage and heals himself. Nocturne's basic attacks reduce this cooldown."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Duskbringer",
        "text": "Nocturne throws a shadow blade that deals damage, leaves a Dusk Trail, and causes champions to leave a Dusk Trail. While on the trail, Nocturne can move through units and has increased Move Speed and Attack Damage.",
        "dmg": "245 + 85% bonus AD physical damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "8s"
      },
      {
        "key": "W",
        "name": "Shroud of Darkness",
        "text": "Nocturne empowers his blades, passively gaining Attack Speed. Activating Shroud of Darkness allows Nocturne to fade into the shadows, creating a magical barrier which blocks a single enemy ability and doubles his passive Attack Speed if successful.",
        "cost": "Mana 50",
        "cd": "20 → 12s"
      },
      {
        "key": "E",
        "name": "Unspeakable Horror",
        "text": "Nocturne plants a nightmare into his target's mind, dealing damage each second and applying fear to the target if they do not get out of range by the end of the duration.",
        "dmg": "260 + 100% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "15 → 11s"
      },
      {
        "key": "R",
        "name": "Paranoia",
        "text": "Nocturne reduces the sight radius of all enemy champions and removes their ally vision in the process. He can then launch himself at a nearby enemy champion.",
        "dmg": "400 + 120% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "140/115/90s"
      }
    ],
    "build": {
      "role": "Jungle",
      "tier": "A",
      "winPrc": 50,
      "pickRate": 4.66,
      "games": 200,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3073,
          "name": "Experimental Hexplate"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 6631,
          "name": "Stridebreaker"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 67,
              "winPrc": 50
            },
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 33,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 100,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 100,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "Optional",
          "options": [
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 100,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Domination",
          "treeId": 8100,
          "minors": [
            {
              "id": 8106,
              "name": "Ultimate Hunter"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Amumu",
        "id": 32,
        "winPrc": 17,
        "games": 6
      },
      "weak": [
        {
          "name": "Amumu",
          "id": 32,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Bel'Veth",
          "id": 200,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Hecarim",
          "id": 120,
          "winPrc": 20,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Evelynn",
          "id": 28,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Kayn",
          "id": 141,
          "winPrc": 71,
          "games": 14
        },
        {
          "name": "Udyr",
          "id": 77,
          "winPrc": 71,
          "games": 7
        }
      ]
    }
  },
  {
    "id": "Nunu",
    "name": "Nunu & Willump",
    "title": "the Boy and His Yeti",
    "roles": [
      "Tank",
      "Mage"
    ],
    "difficulty": 4,
    "blurb": "Once upon a time, there was a boy who wanted to prove he was a hero by slaying a fearsome monster—only to discover that the beast, a lonely and magical yeti, merely needed a friend. Bound together by ancient power and a shared love of snowballs, Nunu...",
    "passive": {
      "name": "Call of the Freljord",
      "text": "Nunu increases the attack speed and Move Speed of Willump and a nearby ally, and causes Willump's basic attacks to damage enemies around the target."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Consume",
        "text": "Willump takes a bite out of a minion, monster, or enemy champion, dealing damage and healing himself.",
        "dmg": "1200 mixed damage",
        "cost": "Mana 60",
        "cd": "12 → 8s"
      },
      {
        "key": "W",
        "name": "Biggest Snowball Ever!",
        "text": "Willump creates a snowball that grows in size and speed as he rolls it. The snowball damages and knocks up enemies.",
        "dmg": "72 + 30% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "14s"
      },
      {
        "key": "E",
        "name": "Snowball Barrage",
        "text": "Nunu throws multiple snowballs that damage enemies. When he's finished, Willump roots any champions or large monsters that were hit by a snowball.",
        "dmg": "60 + 80% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "14 → 10s"
      },
      {
        "key": "R",
        "name": "Absolute Zero",
        "text": "Nunu & Willump create a powerful blizzard in an area that slows enemies and deals massive damage at the end.",
        "dmg": "1275 + 300% AP magic damage",
        "cost": "Mana 100",
        "cd": "110/100/90s"
      }
    ],
    "counters": {
      "best": null,
      "weak": [],
      "strong": [
        {
          "name": "Nocturne",
          "id": 56,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 60,
      "pickRate": 0.82,
      "games": 35,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Olaf",
    "name": "Olaf",
    "title": "the Berserker",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 3,
    "blurb": "An unstoppable force of destruction, the axe-wielding Olaf wants nothing but to die in glorious combat. Hailing from the brutal Freljordian peninsula of Lokfar, he once received a prophecy foretelling his peaceful passing—a coward's fate, and a great...",
    "passive": {
      "name": "Berserker Rage",
      "text": "Olaf gains Attack Speed and Life Steal based on his missing Health."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Undertow",
        "text": "Olaf throws an axe into the ground at a target location, dealing damage to enemies it passes through and reducing their Armor and Move Speed. If Olaf picks up the axe, the ability's cooldown is reset.",
        "dmg": "260 + 100% bonus AD physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "9s"
      },
      {
        "key": "W",
        "name": "Tough It Out",
        "text": "Olaf's Attack Speed is increased and he gains a Shield.",
        "cost": "Mana 50",
        "cd": "16 → 12s"
      },
      {
        "key": "E",
        "name": "Reckless Swing",
        "text": "Olaf attacks with such force that it deals true damage to his target and himself, refunding the Health cost if he destroys the target.",
        "dmg": "250 + 50% AD true damage",
        "cost": "Health 21/34.5/48/61.5/75",
        "cd": "11 → 7s"
      },
      {
        "key": "R",
        "name": "Ragnarok",
        "text": "Olaf passively gains increased armor and magic resist. He can activate this ability to become immune to disables for as long as he keeps attacking.",
        "cost": "Mana 100",
        "cd": "100/90/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Teemo",
        "id": 17,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Teemo",
          "id": 17,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Illaoi",
          "id": 420,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 46,
          "games": 13
        }
      ],
      "strong": [
        {
          "name": "Ambessa",
          "id": 799,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Malphite",
          "id": 54,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 42,
      "pickRate": 1.67,
      "games": 71,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Orianna",
    "name": "Orianna",
    "title": "the Lady of Clockwork",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 7,
    "blurb": "Once a curious girl of flesh and blood, Orianna is now a technological marvel comprised entirely of clockwork. She became gravely ill after an accident in the lower districts of Zaun, and her failing body had to be replaced with exquisite artifice...",
    "passive": {
      "name": "Clockwork Windup",
      "text": "Orianna's Attacks deal additional magic damage. This damage increases the more Orianna Attacks the same target."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Command: Attack",
        "text": "Orianna commands her Ball to fire toward a target location, dealing magic damage to targets along the way (deals less damage to subsequent targets). Her Ball remains at the target location after.",
        "dmg": "Attack",
        "cost": "Mana 35",
        "cd": "6 → 3s"
      },
      {
        "key": "W",
        "name": "Command: Dissonance",
        "text": "Orianna commands her Ball to release a pulse of energy, dealing magic damage around it. This leaves a field behind that speeds up allies and slows enemies.",
        "dmg": "Dissonance",
        "cost": "Mana 60/65/70/75/80",
        "cd": "7s"
      },
      {
        "key": "E",
        "name": "Command: Protect",
        "text": "Orianna commands her Ball to attach to an allied champion, Shielding them and dealing magic damage to any enemies it passes through on the way. Additionally, the Ball grants additional Armor and Magic Resist to the champion it is attached to.",
        "dmg": "Protect",
        "cost": "Mana 60",
        "cd": "9s"
      },
      {
        "key": "R",
        "name": "Command: Shockwave",
        "text": "Orianna commands her Ball to unleash a shockwave, dealing magic damage and launching nearby enemies towards the Ball after a short delay.",
        "dmg": "Shockwave",
        "cost": "Mana 100",
        "cd": "110/95/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Syndra",
        "id": 134,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Syndra",
          "id": 134,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Xerath",
          "id": 101,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 53,
      "pickRate": 0.8,
      "games": 34,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Ornn",
    "name": "Ornn",
    "title": "The Fire below the Mountain",
    "roles": [
      "Tank"
    ],
    "difficulty": 5,
    "blurb": "Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home. There he stokes bubbling cauldrons of molten rock to purify ores and fashion...",
    "passive": {
      "name": "Living Forge",
      "text": "Ornn gains an additional bonus Armor and Magic Resist from all sources. Ornn can spend gold to forge non-consumable items anywhere. Additionally, he can create masterwork items for himself and for his allies."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Volcanic Rupture",
        "text": "Ornn slams the ground, sending out a fissure dealing damage and slowing enemies hit. After a small delay, a magma pillar forms at the end location.",
        "dmg": "120 + 110% AD physical damage",
        "cost": "Mana 45",
        "cd": "9 → 7s"
      },
      {
        "key": "W",
        "name": "Bellows Breath",
        "text": "Ornn advances, breathing fire. Enemies hit by the final gout of flame become Brittle.",
        "dmg": "16% of target's max HP magic damage",
        "cost": "Mana 45/50/55/60/65",
        "cd": "12 → 10s"
      },
      {
        "key": "E",
        "name": "Searing Charge",
        "text": "Ornn charges, dealing damage to enemies he passes through. If Ornn collides with terrain while charging, the impact creates a shockwave around him which deals damage and knocks up enemies.",
        "dmg": "260 + 40% bonus armor + 40% bonus magic resistance physical damage",
        "cost": "Mana 35/40/45/50/55",
        "cd": "14 → 12s"
      },
      {
        "key": "R",
        "name": "Call of the Forge God",
        "text": "Ornn summons a massive elemental at a location which travels toward him with increasing speed. Enemies run over by the elemental take damage, are slowed and are made Brittle. Ornn can recast the ability to charge into the elemental, redirecting it in the direction he hits it, causing the elemental to affect any enemies it runs over to be knocked up, dealing the same damage and re-applying Brittle.",
        "dmg": "225 + 20% AP magic damage",
        "cost": "Mana 100",
        "cd": "140/120/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Mordekaiser",
        "id": 82,
        "winPrc": 33,
        "games": 6
      },
      "weak": [
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 33,
          "games": 6
        },
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Sion",
          "id": 14,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Aatrox",
          "id": 266,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "A",
      "winPrc": 54,
      "pickRate": 1.43,
      "games": 61,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Pantheon",
    "name": "Pantheon",
    "title": "the Unbreakable Spear",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 4,
    "blurb": "Once an unwilling host to the Aspect of War, Atreus survived when the celestial power within him was slain, refusing to succumb to a blow that tore stars from the heavens. In time, he learned to embrace the power of his own mortality, and the stubborn...",
    "passive": {
      "name": "Mortal Will",
      "text": "Every few spells or attacks, Pantheon's next spell is empowered."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Comet Spear",
        "text": "Pantheon either thrusts his spear or throws his spear in the chosen direction.",
        "dmg": "190 + 115% bonus AD + 50% AP physical damage",
        "cost": "Mana 25",
        "cd": "11 → 8s"
      },
      {
        "key": "W",
        "name": "Shield Vault",
        "text": "Pantheon dashes to a target, damaging and stunning them.",
        "dmg": "8% of target's max HP + 1.5% per 100 AP + 0.4% per 100 Pantheon's bonus health physical damage",
        "cost": "Mana 55",
        "cd": "13 → 9s"
      },
      {
        "key": "E",
        "name": "Aegis Assault",
        "text": "Pantheon sets his shield, becoming invulnerable to damage from the front and striking repeatedly with his spear.",
        "dmg": "255 + 150% bonus AD physical damage",
        "cost": "Mana 80",
        "cd": "22 → 18s"
      },
      {
        "key": "R",
        "name": "Grand Starfall",
        "text": "Pantheon composes himself and then leaps into the air, landing at a chosen location as a comet.",
        "dmg": "700 + 100% AP mixed damage",
        "cost": "Mana 100",
        "cd": "180/165/150s"
      }
    ],
    "counters": {
      "best": {
        "name": "Pyke",
        "id": 555,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Pyke",
          "id": 555,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Soraka",
          "id": 16,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Janna",
          "id": 40,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Alistar",
          "id": 12,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Swain",
          "id": 50,
          "winPrc": 71,
          "games": 7
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "S+",
      "winPrc": 52,
      "pickRate": 2.3,
      "games": 96,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3179,
          "name": "Umbral Glaive"
        },
        {
          "id": 3009,
          "name": "Boots of Swiftness"
        },
        {
          "id": 3142,
          "name": "Youmuu's Ghostblade"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6676,
              "name": "The Collector",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 9923,
            "name": "Hail of Blades"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Poppy",
    "name": "Poppy",
    "title": "Keeper of the Hammer",
    "roles": [
      "Tank",
      "Fighter"
    ],
    "difficulty": 6,
    "blurb": "Runeterra has no shortage of valiant champions, but few are as tenacious as Poppy. Bearing the legendary hammer of Orlon, a weapon twice her size, this determined yordle has spent untold years searching in secret for the fabled “Hero of Demacia,” said...",
    "passive": {
      "name": "Iron Ambassador",
      "text": "Poppy throws her buckler that bounces off the target. Poppy can pick it up to gain a temporary shield."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Hammer Shock",
        "text": "Poppy swings her hammer, dealing damage and creating a zone that will slow enemies and explode after a delay.",
        "dmg": "130 + 100% bonus AD + 9% of target's max HP physical damage",
        "cost": "Mana 35/40/45/50/55",
        "cd": "8 → 4s"
      },
      {
        "key": "W",
        "name": "Steadfast Presence",
        "text": "Poppy passively gains Armor and Magic Resist. This bonus increases when she is low on Health. Poppy can activate Steadfast Presence to gain Move Speed and stop enemy dashes around her. If a dash is stopped, the enemy is slowed and grounded.",
        "dmg": "230 + 70% AP magic damage",
        "cost": "Mana 50",
        "cd": "20 → 12s"
      },
      {
        "key": "E",
        "name": "Heroic Charge",
        "text": "Poppy dashes to the target and pushes it back. If the target is pushed into a wall, it is stunned.",
        "dmg": "120 + 60% bonus AD physical damage",
        "cost": "Mana 70",
        "cd": "14 → 10s"
      },
      {
        "key": "R",
        "name": "Keeper's Verdict",
        "text": "Poppy channels a hammer strike that knocks enemies very far away.",
        "dmg": "200 + 45% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "140/120/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Nautilus",
        "id": 111,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Nautilus",
          "id": 111,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Camille",
          "id": 164,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Karma",
          "id": 43,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Braum",
          "id": 201,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "A",
      "winPrc": 56,
      "pickRate": 1.32,
      "games": 55,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3190,
          "name": "Locket of the Iron Solari"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3109,
          "name": "Knight's Vow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3050,
              "name": "Zeke's Convergence",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3107,
              "name": "Redemption",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3002,
              "name": "Trailblazer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8439,
            "name": "Aftershock"
          },
          "minors": [
            {
              "id": 8401,
              "name": "Shield Bash"
            },
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Pyke",
    "name": "Pyke",
    "title": "the Bloodharbor Ripper",
    "roles": [
      "Support",
      "Assassin"
    ],
    "difficulty": 7,
    "blurb": "A renowned harpooner from the slaughter docks of Bilgewater, Pyke should have met his death in the belly of a gigantic jaull-fish… and yet, he returned. Now, stalking the dank alleys and backways of his former hometown, he uses his new supernatural...",
    "passive": {
      "name": "Gift of the Drowned Ones",
      "text": "When Pyke is hidden from enemies, he regenerates damage that he has recently taken from champions. Pyke also cannot gain extra Maximum Health from any source, and instead gains Bonus AD."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Bone Skewer",
        "text": "Pyke either stabs an enemy in front of him or pulls an enemy towards him.",
        "dmg": "300 + 75% bonus AD physical damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "10 → 8s"
      },
      {
        "key": "W",
        "name": "Ghostwater Dive",
        "text": "Pyke enters Camouflage and gains significant Move Speed that decays over time.",
        "cost": "Mana 65",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Phantom Undertow",
        "text": "Pyke dashes and leaves behind a phantom that will return to him, stunning enemy champions along its path.",
        "dmg": "300 + 100% bonus AD physical damage",
        "cost": "Mana 65",
        "cd": "14 → 10s"
      },
      {
        "key": "R",
        "name": "Death From Below",
        "text": "Pyke blinks to and executes low health enemies, allowing him to cast this spell again and granting additional gold to an ally who assists.",
        "cost": "Mana 100",
        "cd": "100/85/70s"
      }
    ],
    "counters": {
      "best": {
        "name": "Rell",
        "id": 526,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Rell",
          "id": 526,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Morgana",
          "id": 25,
          "winPrc": 33,
          "games": 6
        },
        {
          "name": "Janna",
          "id": 40,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Lux",
          "id": 99,
          "winPrc": 82,
          "games": 11
        },
        {
          "name": "Mel",
          "id": 800,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Pantheon",
          "id": 80,
          "winPrc": 80,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "S+",
      "winPrc": 54,
      "pickRate": 3.71,
      "games": 155,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3179,
          "name": "Umbral Glaive"
        },
        {
          "id": 3009,
          "name": "Boots of Swiftness"
        },
        {
          "id": 3142,
          "name": "Youmuu's Ghostblade"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6676,
              "name": "The Collector",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 9923,
            "name": "Hail of Blades"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Qiyana",
    "name": "Qiyana",
    "title": "Empress of the Elements",
    "roles": [
      "Assassin"
    ],
    "difficulty": 8,
    "blurb": "In the jungle city of Ixaocan, Qiyana plots her own ruthless path to the high seat of the Yun Tal. Last in line to succeed her parents, she faces those who stand in her way with brash confidence and unprecedented mastery over elemental magic. With the...",
    "passive": {
      "name": "Royal Privilege",
      "text": "Qiyana's first basic attack or ability against each enemy deals bonus damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Elemental Wrath / Edge of Ixtal",
        "text": "Qiyana swings her weapon, dealing damage with a bonus effect based on her element.",
        "dmg": [
          "Edge of Ixtal: 180 + 90% bonus AD physical damage",
          "Elemental Wrath: 180 + 90% bonus AD physical damage"
        ],
        "cost": "Mana 35",
        "cd": "7s"
      },
      {
        "key": "W",
        "name": "Terrashape",
        "text": "Qiyana dashes to a location and enchants her weapon with an element. Her attacks and abilities deal bonus damage while her weapon is enchanted.",
        "dmg": "40 + 20% bonus AD + 45% AP magic damage",
        "cost": "Mana 25/30/35/40/45",
        "cd": "7s"
      },
      {
        "key": "E",
        "name": "Audacity",
        "text": "Qiyana dashes to an enemy, damaging them.",
        "dmg": "210 + 50% bonus AD physical damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "11 → 7s"
      },
      {
        "key": "R",
        "name": "Supreme Display of Talent",
        "text": "Qiyana sends out a shockwave that detonates whatever elements she hits with it, stunning and damaging nearby enemies.",
        "dmg": "300 + 125% bonus AD + 10% of target's max HP physical damage",
        "cost": "Mana 100",
        "cd": "120s"
      }
    ],
    "counters": {
      "best": {
        "name": "Graves",
        "id": 104,
        "winPrc": 40,
        "games": 5
      },
      "weak": [
        {
          "name": "Graves",
          "id": 104,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 61,
      "pickRate": 0.96,
      "games": 41,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3142,
              "name": "Youmuu's Ghostblade",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6694,
              "name": "Serylda's Grudge",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8128,
            "name": "Dark Harvest"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Quinn",
    "name": "Quinn",
    "title": "Demacia's Wings",
    "roles": [
      "Marksman",
      "Assassin"
    ],
    "difficulty": 5,
    "blurb": "Quinn is an elite ranger-knight of Demacia, who undertakes dangerous missions deep in enemy territory. She and her legendary eagle, Valor, share an unbreakable bond, and their foes are often slain before they realize they are fighting not one, but two...",
    "passive": {
      "name": "Harrier",
      "text": "Valor, Quinn's Demacian eagle, periodically marks enemies with Harrier. Quinn's first basic attack against Harrier targets will deal bonus physical damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Blinding Assault",
        "text": "Quinn calls Valor to mark an enemy and hinder its vision before damaging all enemies in the immediate area.",
        "dmg": "100 + 120% AD + 50% AP physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "11 → 9s"
      },
      {
        "key": "W",
        "name": "Heightened Senses",
        "text": "Passively grants Quinn Attack Speed and Move Speed after she attacks a Harrier target. Activate to have Valor reveal a large area nearby.",
        "cd": "50 → 30s"
      },
      {
        "key": "E",
        "name": "Vault",
        "text": "Quinn dashes to an enemy, dealing physical damage and slowing the target's Move Speed. Upon reaching the target, she leaps off the target, briefly interrupting it, and lands near her maximum Attack Range away from the target.",
        "dmg": "140 + 20% bonus AD physical damage",
        "cost": "Mana 50",
        "cd": "12 → 8s"
      },
      {
        "key": "R",
        "name": "Behind Enemy Lines",
        "text": "Quinn and Valor team up to fly around at great speed. Ending the ability casts Skystrike, which deals damage to nearby enemies and marks champions with Harrier.",
        "cost": "Mana 100/50/0",
        "cd": "3s"
      }
    ],
    "counters": {
      "best": {
        "name": "Kayn",
        "id": 141,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Kayn",
          "id": 141,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 40,
      "pickRate": 0.58,
      "games": 25,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3142,
              "name": "Youmuu's Ghostblade",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6694,
              "name": "Serylda's Grudge",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8128,
            "name": "Dark Harvest"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Rakan",
    "name": "Rakan",
    "title": "The Charmer",
    "roles": [
      "Support"
    ],
    "difficulty": 5,
    "blurb": "As mercurial as he is charming, Rakan is an infamous vastayan troublemaker and the greatest battle-dancer in Lhotlan tribal history. To the humans of the Ionian highlands, his name has long been synonymous with wild festivals, uncontrollable parties...",
    "passive": {
      "name": "Fey Feathers",
      "text": "Rakan periodically gains a shield."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Gleaming Quill",
        "text": "Flings a magical feather that deals magic damage. Striking a champion or epic monster enables Rakan to heal his allies.",
        "dmg": "250 + 70% AP magic damage",
        "cost": "Mana 45",
        "cd": "11 → 7s"
      },
      {
        "key": "W",
        "name": "Grand Entrance",
        "text": "Dashes to a location, knocking up nearby enemies on arrival.",
        "dmg": "270 + 80% AP magic damage",
        "cost": "Mana 50/60/70/80/90",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Battle Dance",
        "text": "Flies to an allied champion granting them a shield. Can be re-cast for free for a short duration.",
        "cost": "Mana 40/45/50/55/60",
        "cd": "20 → 12s"
      },
      {
        "key": "R",
        "name": "The Quickness",
        "text": "Gains Move Speed, charming and dealing magic damage to enemies touched.",
        "dmg": "300 + 50% AP magic damage",
        "cost": "Mana 100",
        "cd": "130/110/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Lux",
        "id": 99,
        "winPrc": 29,
        "games": 7
      },
      "weak": [
        {
          "name": "Lux",
          "id": 99,
          "winPrc": 29,
          "games": 7
        },
        {
          "name": "Blitzcrank",
          "id": 53,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Seraphine",
          "id": 147,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "C",
      "winPrc": 49,
      "pickRate": 1.03,
      "games": 43,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Rammus",
    "name": "Rammus",
    "title": "the Armordillo",
    "roles": [
      "Tank"
    ],
    "difficulty": 5,
    "blurb": "Idolized by many, dismissed by some, mystifying to all, the curious being Rammus is an enigma. Protected by a spiked shell, he inspires increasingly disparate theories on his origin wherever he goes—from demigod, to sacred oracle, to a mere beast...",
    "passive": {
      "name": "Spiked Shell",
      "text": "Rammus gains bonus Attack Damage scaling with his Armor and Magic Resistance."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Powerball",
        "text": "Rammus accelerates in a ball towards his enemies, dealing damage and slowing targets affected by the impact.",
        "dmg": "200 + 100% AP magic damage",
        "cost": "Mana 60",
        "cd": "12 → 6s"
      },
      {
        "key": "W",
        "name": "Defensive Ball Curl",
        "text": "Rammus goes into a defensive formation, vastly increasing his Armor and Magic Resistance, and returning damage to enemies that attack him.",
        "cost": "Mana 40",
        "cd": "7s"
      },
      {
        "key": "E",
        "name": "Frenzying Taunt",
        "text": "Rammus taunts an enemy champion or monster into a reckless assault against him.",
        "cost": "Mana 50",
        "cd": "12s"
      },
      {
        "key": "R",
        "name": "Soaring Slam",
        "text": "Rammus hops into the air and slams down at a target area, dealing magic damage and slowing enemies. If cast while Rammus is in Powerball, Rammus knocks up enemies near the center as well.",
        "dmg": "250 + 60% AP magic damage",
        "cost": "Mana 100",
        "cd": "90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Graves",
        "id": 104,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Graves",
          "id": 104,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Bel'Veth",
          "id": 200,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Briar",
          "id": 233,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 55,
      "pickRate": 0.89,
      "games": 38,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "RekSai",
    "name": "Rek'Sai",
    "title": "the Void Burrower",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 3,
    "blurb": "An apex predator, Rek'Sai is a merciless Void-spawn that tunnels beneath the ground to ambush and devour unsuspecting prey. Her insatiable hunger has laid waste to entire regions of the once-great empire of Shurima—merchants, traders, even armed...",
    "passive": {
      "name": "Fury of the Xer'Sai",
      "text": "Rek'Sai generates Fury by Attacking and hitting with basic Abilities. She consumes this Fury while Burrowed to restore health."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Queen's Wrath / Prey Seeker",
        "text": "Rek'Sai's next 3 basic attacks deal bonus Physical Damage to nearby enemies. While Burrowed, Rek'Sai launches a burst of void-charged earth that damages and reveals enemies hit.",
        "dmg": [
          "Queen's Wrath: 50% AD physical damage",
          "Prey Seeker: 170 + 25% bonus AD + 70% AP magic damage"
        ],
        "cd": "4 → 2s"
      },
      {
        "key": "W",
        "name": "Burrow / Un-burrow",
        "text": "Rek'Sai burrows into the ground, gaining new abilities and increased Move Speed. Her vision range is reduced and she cannot use basic attacks. While Burrowed, Rek'Sai may cast Unburrow to knock up and damage nearby enemies.",
        "dmg": "Unburrow: 130 + 80% AP magic damage",
        "cd": "4s"
      },
      {
        "key": "E",
        "name": "Furious Bite / Tunnel",
        "text": "Rek'Sai bites her target, dealing physical damage, or bonus true damage if she has max Fury. While Burrowed, Rek'Sai creates a re-usable, long lasting tunnel. Enemies can destroy it by standing on top of either entrance.",
        "dmg": "Furious Bite: 14% of target's max HP physical damage",
        "cd": "10s"
      },
      {
        "key": "R",
        "name": "Void Rush",
        "text": "Rek'Sai passively marks targets by damaging them. She can activate this ability to become briefly untargetable and lunge at a marked target for heavy damage based on their maximum health.",
        "dmg": "450 + 100% bonus AD + 35% of target's missing HP physical damage",
        "cd": "100/90/80s"
      }
    ],
    "counters": {
      "best": null,
      "weak": [],
      "strong": [
        {
          "name": "Viego",
          "id": 234,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 57,
      "pickRate": 0.54,
      "games": 23,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Rell",
    "name": "Rell",
    "title": "the Iron Maiden",
    "roles": [
      "Tank",
      "Support"
    ],
    "difficulty": 0,
    "blurb": "The product of brutal experimentation at the hands of the Black Rose, Rell is a defiant, living weapon determined to topple Noxus. Her childhood was one of misery and horror, enduring unspeakable procedures to perfect and weaponize her magical control...",
    "passive": {
      "name": "Break the Mold",
      "text": "Rell's Attacks and Abilities deal additional magic damage and steal Armor and Magic Resist on hit."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Shattering Strike",
        "text": "Rell deals magic damage to units in a line, breaking their shields and stunning them.",
        "dmg": "220 + 60% AP magic damage",
        "cost": "Mana 50",
        "cd": "11 → 9s"
      },
      {
        "key": "W",
        "name": "Ferromancy: Crash Down",
        "text": "Mounted: Rell Dismounts, crashing down in her armor, Knocking enemies up and gaining a large Shield. While dismounted, she gains Armor, Magic Resist, Attack Speed, and Attack Range, but is Slowed. Dismounted: Rell forms her Mount, gaining a burst of speed and Knocking Up the next enemy she attacks.",
        "dmg": [
          "Ferromancy: Crash Down: 180 + 60% AP magic damage",
          "Ferromancy: Mount Up: 70 + 40% AP magic damage"
        ],
        "cost": "Mana 40",
        "cd": "10s"
      },
      {
        "key": "E",
        "name": "Full Tilt",
        "text": "Passive: Rell gains out of combat Move Speed. Active: Rell and an ally gain ramping Move Speed, doubled toward enemies and each other. Her next Attack explodes, dealing magic damage.",
        "dmg": "7% of target's max HP + 3% per 100 AP magic damage",
        "cost": "Mana 40",
        "cd": "14 → 10s"
      },
      {
        "key": "R",
        "name": "Magnet Storm",
        "text": "Rell explodes in a magnetic fury, violently Pulling nearby enemies toward herself. Then Rell constantly Drags nearby enemies toward herself for a short while, dealing magic damage over time.",
        "dmg": "35 + 13.75% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Milio",
        "id": 902,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Milio",
          "id": 902,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Lulu",
          "id": 117,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Blitzcrank",
          "id": 53,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Pyke",
          "id": 555,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Nami",
          "id": 267,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "A",
      "winPrc": 51,
      "pickRate": 1.32,
      "games": 55,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3190,
          "name": "Locket of the Iron Solari"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3109,
          "name": "Knight's Vow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3050,
              "name": "Zeke's Convergence",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3107,
              "name": "Redemption",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3002,
              "name": "Trailblazer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8439,
            "name": "Aftershock"
          },
          "minors": [
            {
              "id": 8401,
              "name": "Shield Bash"
            },
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Renata",
    "name": "Renata Glasc",
    "title": "the Chem-Baroness",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 8,
    "blurb": "Renata Glasc rose from the ashes of her childhood home with nothing but her name and her parents' alchemical research. In the decades since, she has become Zaun's wealthiest chem-baron, a business magnate who built her power by tying everyone's...",
    "passive": {
      "name": "Leverage",
      "text": "Renata's Attacks deal bonus damage and mark enemies. Renata's allies can damage marked enemies to deal bonus damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Handshake",
        "text": "Renata sends out a missile rooting the first enemy hit, and can recast the ability to throw the unit in a direction.",
        "dmg": "260 + 80% AP magic damage",
        "cost": "Mana 80",
        "cd": "16s"
      },
      {
        "key": "W",
        "name": "Bailout",
        "text": "Renata buffs an allied champion to fight harder, delaying their death and potentially saving them if they get a takedown.",
        "cost": "Mana 80",
        "cd": "28 → 24s"
      },
      {
        "key": "E",
        "name": "Loyalty Program",
        "text": "Renata sends out a pair of chemtech missiles, shielding allies and damaging and slowing enemies hit.",
        "dmg": "185 + 55% AP magic damage",
        "cost": "Mana 70/80/90/100/110",
        "cd": "14 → 10s"
      },
      {
        "key": "R",
        "name": "Hostile Takeover",
        "text": "Renata sends out a wave of chemicals, causing any enemies hit to go Berserk.",
        "cost": "Mana 100",
        "cd": "150/130/110s"
      }
    ],
    "counters": {
      "best": {
        "name": "Karma",
        "id": 43,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Karma",
          "id": 43,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Support",
      "tier": "D",
      "winPrc": 63,
      "pickRate": 0.38,
      "games": 16,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Renekton",
    "name": "Renekton",
    "title": "the Butcher of the Sands",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 3,
    "blurb": "Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the nation's armies to countless victories. However, after the empire's fall, Renekton was entombed...",
    "passive": {
      "name": "Reign of Anger",
      "text": "Renekton's attacks generate Fury, increased when he is low on life. This Fury can empower his abilities with bonus effects."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Cull the Meek",
        "text": "Renekton swings his blade, dealing moderate physical damage to all targets around him, and heals for a small portion of the damage dealt. If he has more than 50 Fury, his damage and heal are increased.",
        "dmg": "180 + 100% bonus AD physical damage",
        "cd": "7s"
      },
      {
        "key": "W",
        "name": "Ruthless Predator",
        "text": "Renekton slashes his target twice, dealing moderate physical damage and stuns them for 0.75 seconds. If Renekton has more than 50 Fury, he slashes his target three times, destroying damage shields on the target, dealing high physical damage, and stunning them for 1.5 seconds.",
        "dmg": "130 + 150% AD physical damage",
        "cd": "16 → 8s"
      },
      {
        "key": "E",
        "name": "Slice and Dice",
        "text": "Renekton dashes, dealing damage to units along the way. Empowered, Renekton deals bonus damage and reduces the Armor of units hit.",
        "dmg": [
          "Slice: 160 + 90% bonus AD physical damage",
          "Dice: 320 + 180% bonus AD physical damage"
        ],
        "cd": "16 → 10s"
      },
      {
        "key": "R",
        "name": "Dominus",
        "text": "Renekton transforms into the Tyrant form, gaining bonus Health and dealing damage to enemies around him. While in this form, Renekton gains Fury periodically.",
        "dmg": "120 + 5% bonus AD + 5% AP magic damage",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yorick",
        "id": 83,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Yorick",
          "id": 83,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Teemo",
          "id": 17,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Jax",
          "id": 24,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Darius",
          "id": 122,
          "winPrc": 83,
          "games": 6
        },
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 67,
          "games": 6
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "S+",
      "winPrc": 57,
      "pickRate": 2.59,
      "games": 110,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Rengar",
    "name": "Rengar",
    "title": "the Pridestalker",
    "roles": [
      "Assassin",
      "Fighter"
    ],
    "difficulty": 8,
    "blurb": "Rengar is a ferocious vastayan trophy hunter who lives for the thrill of tracking down and killing dangerous creatures. He scours the world for the most fearsome beasts he can find, especially seeking any trace of Kha'Zix, the void creature who...",
    "passive": {
      "name": "Unseen Predator",
      "text": "While in Brush, Rengar leaps at his target with his basic attack. Rengar generates Ferocity whenever he casts an ability. At Max Ferocity, his next ability is empowered. Killing enemy champions awards trophies on Rengar's Bonetooth Necklace , granting bonus attack damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Savagery",
        "text": "Rengar's next Attack brutally stabs his target for bonus damage. Ferocity effect: deals increased damage and grants Attack Speed.",
        "dmg": "150 + 15% AD physical damage",
        "cd": "6 → 4s"
      },
      {
        "key": "W",
        "name": "Battle Roar",
        "text": "Rengar lets out a battle roar, damaging enemies and healing for some of the recent damage he has taken. Ferocity effect: additionally breaks crowd control effects.",
        "dmg": "170 + 80% AP magic damage",
        "cd": "16 → 10s"
      },
      {
        "key": "E",
        "name": "Bola Strike",
        "text": "Rengar throws a bola, slowing the first target hit for a short duration. Ferocity effect: roots the target.",
        "dmg": "235 + 80% bonus AD physical damage",
        "cd": "10s"
      },
      {
        "key": "R",
        "name": "Thrill of the Hunt",
        "text": "Rengar's predatory instincts take over, Camouflaging him and revealing the nearest enemy champion in a large radius around him. During Thrill of the Hunt, Rengar gains Move Speed and he can leap to the tracked enemy without being in brush, reducing their armor.",
        "cd": "110/100/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Master Yi",
        "id": 11,
        "winPrc": 29,
        "games": 7
      },
      "weak": [
        {
          "name": "Master Yi",
          "id": 11,
          "winPrc": 29,
          "games": 7
        },
        {
          "name": "Nocturne",
          "id": 56,
          "winPrc": 44,
          "games": 9
        }
      ],
      "strong": [
        {
          "name": "Kayn",
          "id": 141,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Diana",
          "id": 131,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Talon",
          "id": 91,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "A",
      "winPrc": 52,
      "pickRate": 1.98,
      "games": 85,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3142,
              "name": "Youmuu's Ghostblade",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6694,
              "name": "Serylda's Grudge",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8128,
            "name": "Dark Harvest"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Riven",
    "name": "Riven",
    "title": "the Exile",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 8,
    "blurb": "Once a swordmaster in the warhosts of Noxus, Riven is an expatriate in a land she previously tried to conquer. She rose through the ranks on the strength of her conviction and brutal efficiency, and was rewarded with a legendary runic blade and a...",
    "passive": {
      "name": "Runic Blade",
      "text": "Riven's abilities charge her blade, and her basic attacks expend charges to deal an additional damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Broken Wings",
        "text": "Riven lashes out in a series of strikes. This ability can be reactivated three times in a short time frame with the third hit knocking back nearby enemies.",
        "dmg": "165 + 85% bonus AD physical damage",
        "cd": "13s"
      },
      {
        "key": "W",
        "name": "Ki Burst",
        "text": "Riven emits a Ki Burst, damaging and stunning nearby enemies.",
        "dmg": "185 + 100% bonus AD physical damage",
        "cd": "11 → 7s"
      },
      {
        "key": "E",
        "name": "Valor",
        "text": "Riven steps forward a short distance and blocks incoming damage.",
        "cd": "10 → 6s"
      },
      {
        "key": "R",
        "name": "Blade of the Exile",
        "text": "Riven empowers her keepsake weapon with energy, and gains Attack Damage and Range. During this time, she also gains the ability to use Wind Slash, a powerful ranged attack, once.",
        "dmg": "Wind Slash: 200 + 60% bonus AD physical damage",
        "cd": "120/90/60s"
      }
    ],
    "counters": {
      "best": {
        "name": "Garen",
        "id": 86,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Gwen",
          "id": 887,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Gangplank",
          "id": 41,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 34,
      "pickRate": 1.25,
      "games": 53,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6631,
          "name": "Stridebreaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Rumble",
    "name": "Rumble",
    "title": "the Mechanized Menace",
    "roles": [
      "Fighter",
      "Mage"
    ],
    "difficulty": 10,
    "blurb": "Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff...",
    "passive": {
      "name": "Junkyard Titan",
      "text": "Every spell Rumble casts gives him Heat. When he reaches 50% Heat he reaches Danger Zone, granting all his basic abilities bonus effects. When he reaches 100% Heat, he starts Overheating, gaining bonus Attack Speed and granting his basic attacks bonus damage, but making him unable to cast spells for a few seconds."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Flamespitter",
        "text": "Rumble torches opponents in front of him, dealing magic damage in a cone for 3 seconds. While in Danger Zone this damage is increased.",
        "dmg": "180 + 110% AP + 10% of target's max HP magic damage",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Scrap Shield",
        "text": "Rumble pulls up a shield, protecting him from damage and granting him a quick burst of speed. While in Danger Zone, the shield strength and speed bonus is increased.",
        "cd": "6s"
      },
      {
        "key": "E",
        "name": "Electro Harpoon",
        "text": "Rumble launches a harpoon, electrocuting his target with magic damage, slowing their Move Speed, and reducing their Magic Resist. Rumble can carry 2 harpoons at a time. While in Danger Zone the damage and slow percentage is increased.",
        "dmg": "155 + 50% AP magic damage",
        "cd": "0.5s"
      },
      {
        "key": "R",
        "name": "The Equalizer",
        "text": "Rumble fires off a group of rockets, creating a wall of flames that damages and slows enemies.",
        "dmg": "140 + 17.5% AP magic damage",
        "cd": "130/105/80s"
      }
    ],
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 50,
      "pickRate": 0.71,
      "games": 30,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4633,
          "name": "Riftmaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3116,
          "name": "Rylai's Crystal Scepter"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6665,
              "name": "Jak'Sho, The Protean",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9101,
              "name": "Absorb Life"
            },
            {
              "id": 9105,
              "name": "Legend: Haste"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Ryze",
    "name": "Ryze",
    "title": "the Rune Mage",
    "roles": [
      "Mage"
    ],
    "difficulty": 7,
    "blurb": "Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with immense arcane power and a boundless constitution, he tirelessly hunts for World Runes—fragments...",
    "passive": {
      "name": "Arcane Mastery",
      "text": "Ryze's spells deal extra damage based on his Bonus Mana, and he gains a percentage increase to his maximum Mana based on his Ability Power."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Overload",
        "text": "Passively, Ryze's other basic abilities reset the cooldown of Overload and charge a rune. When Ryze casts Overload with 2 runes charged, he gains a brief burst of Move Speed. On cast, Ryze throws a charge of pure energy in a line, dealing damage to the first enemy struck. If the target has Flux on it, Overload deals extra damage and bounces to nearby enemies with Flux.",
        "dmg": "155 + 55% AP + 2% bonus mana magic damage",
        "cost": "Mana 40/38/36/34/32",
        "cd": "5s"
      },
      {
        "key": "W",
        "name": "Rune Prison",
        "text": "Ryze traps a target in a cage of runes, damaging them and slowing their movement. If the target has Flux on it, they are instead rooted.",
        "dmg": "200 + 70% AP + 4% bonus mana magic damage",
        "cost": "Mana 40/55/70/85/100",
        "cd": "11 → 9s"
      },
      {
        "key": "E",
        "name": "Spell Flux",
        "text": "Ryze releases an orb of pure magical power that damages an enemy and debuffs all nearby enemies. Ryze's spells have additional effects against the debuffed enemy.",
        "dmg": "180 + 50% AP + 2% bonus mana magic damage",
        "cost": "Mana 35/45/55/65/75",
        "cd": "3.5 → 2.5s"
      },
      {
        "key": "R",
        "name": "Realm Warp",
        "text": "Passively, Overload deals even more damage against targets with Flux. On cast, Ryze creates a portal to a nearby location. After a few seconds, allies standing near the portal are teleported to the target location.",
        "dmg": "100%",
        "cost": "Mana 100",
        "cd": "180/160/140s"
      }
    ],
    "counters": {
      "best": {
        "name": "LeBlanc",
        "id": 7,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "LeBlanc",
          "id": 7,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Viktor",
          "id": 112,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 1.06,
      "games": 45,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Samira",
    "name": "Samira",
    "title": "the Desert Rose",
    "roles": [
      "Marksman",
      "Assassin"
    ],
    "difficulty": 6,
    "blurb": "Samira stares death in the eye with unyielding confidence, seeking thrill wherever she goes. After her Shuriman home was destroyed as a child, Samira found her true calling in Noxus, where she built a reputation as a stylish daredevil taking on...",
    "passive": {
      "name": "Daredevil Impulse",
      "text": "Samira builds a combo by hitting attacks or abilities unique from the previous hit. Samira's attacks in melee range deal additional magic damage. Samira's attacks against enemies affected by Immobilizing effects will dash her to her attack range. If the enemy is Knocked Up, she also keeps them Knocked Up briefly."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Flair",
        "text": "Samira fires a shot or swings her sword, dealing damage. If cast during Wild Rush, strike all enemies in her path upon completion.",
        "dmg": "20 + 125% AD physical damage",
        "cost": "Mana 30",
        "cd": "6 → 2s"
      },
      {
        "key": "W",
        "name": "Blade Whirl",
        "text": "Samira slashes around her, damaging enemies and destroying enemy missiles.",
        "dmg": "80 + 60% bonus AD physical damage",
        "cost": "Mana 60",
        "cd": "30 → 22s"
      },
      {
        "key": "E",
        "name": "Wild Rush",
        "text": "Samira dashes through an enemy (including structures), slashing enemies she passes through and gaining Attack Speed. Killing an enemy champion refreshes this ability's cooldown.",
        "dmg": "90 + 20% bonus AD magic damage",
        "cost": "Mana 40",
        "cd": "20 → 12s"
      },
      {
        "key": "R",
        "name": "Inferno Trigger",
        "text": "Samira unleashes a torrent of shots from her weapons, wildly shooting all enemies surrounding her.",
        "dmg": "25 + 45% AD physical damage",
        "cost": "Cost 6",
        "cd": "5s"
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "S+",
      "winPrc": 56,
      "pickRate": 2.96,
      "games": 127,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1055,
          "name": "Doran's Blade"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6676,
          "name": "The Collector"
        },
        {
          "id": 3008,
          "name": "Gluttonous Greaves"
        },
        {
          "id": 3031,
          "name": "Infinity Edge"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 78,
              "winPrc": 86
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 22,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6673,
              "name": "Immortal Shieldbow",
              "pct": 88,
              "winPrc": 100
            },
            {
              "id": 3072,
              "name": "Bloodthirster",
              "pct": 13,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 2517,
              "name": "Endless Hunger",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3072,
              "name": "Bloodthirster",
              "pct": 50,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "Optional",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 4
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Domination",
          "treeId": 8100,
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Vayne",
        "id": 67,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Vayne",
          "id": 67,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Miss Fortune",
          "id": 21,
          "winPrc": 33,
          "games": 9
        },
        {
          "name": "Xayah",
          "id": 498,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Kai'Sa",
          "id": 145,
          "winPrc": 85,
          "games": 13
        },
        {
          "name": "Aphelios",
          "id": 523,
          "winPrc": 83,
          "games": 6
        },
        {
          "name": "Tristana",
          "id": 18,
          "winPrc": 80,
          "games": 5
        }
      ]
    }
  },
  {
    "id": "Sejuani",
    "name": "Sejuani",
    "title": "Fury of the North",
    "roles": [
      "Tank"
    ],
    "difficulty": 4,
    "blurb": "Sejuani is the brutal, unforgiving Iceborn warmother of the Winter's Claw, one of the most feared tribes of the Freljord. Her people's survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans...",
    "passive": {
      "name": "Fury of the North",
      "text": "After being out of combat, Sejuani gains Frost Armor which grants Armor and Magic Resist and immunity to slows. Frost Armor persists for a short time after Sejuani takes damage. Sejuani can damage a stunned enemy to shatter it, dealing massive magic damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Arctic Assault",
        "text": "Sejuani charges forward, knocking enemies into the air. The charge stops after hitting an enemy champion.",
        "dmg": "290 + 60% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "19 → 13s"
      },
      {
        "key": "W",
        "name": "Winter's Wrath",
        "text": "Sejuani swings her mace twice, dealing damage, slowing enemies and applying Frost stacks.",
        "dmg": "45 + 20% AP + 4% of her maximum health physical damage",
        "cost": "Mana 65",
        "cd": "9 → 5s"
      },
      {
        "key": "E",
        "name": "Permafrost",
        "text": "Sejuani freezes and stuns an enemy champion that has maximum Frost stacks.",
        "dmg": "255 + 60% AP magic damage",
        "cost": "Mana 20",
        "cd": "1.5s"
      },
      {
        "key": "R",
        "name": "Glacial Prison",
        "text": "Sejuani throws her bola that freezes and stuns the first champion hit and creates an ice storm that slows other enemies.",
        "dmg": "175 + 40% AP magic damage",
        "cost": "Mana 100",
        "cd": "130/110/90s"
      }
    ],
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 43,
      "pickRate": 0.65,
      "games": 28,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Senna",
    "name": "Senna",
    "title": "the Redeemer",
    "roles": [
      "Support",
      "Marksman"
    ],
    "difficulty": 7,
    "blurb": "Cursed from childhood to be haunted by the supernatural Black Mist, Senna joined a sacred order known as the Sentinels of Light, and fiercely fought back—only to be killed, her soul imprisoned in a lantern by the cruel specter Thresh. But refusing to...",
    "passive": {
      "name": "Absolution",
      "text": "When units die near Senna, their souls are periodically trapped by the Black Mist. Senna can attack these souls to free them, absorbing the Mist that held them in death. Mist fuels her Relic Cannon's power with increased Attack Damage, Attack Range, and Critical Strike Chance. Attacks from Senna's Relic Cannon take longer to fire, deal bonus damage, and briefly grant her a portion of her target's Move Speed."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Piercing Darkness",
        "text": "From the twin barrels of her Relic Cannon, Senna fires a unified beam of light and shadow through a target, healing allies and damaging enemies.",
        "dmg": "150 + 40% bonus AD physical damage",
        "cost": "Mana 70/80/90/100/110",
        "cd": "15s"
      },
      {
        "key": "W",
        "name": "Last Embrace",
        "text": "Senna sends forth a wave of Black Mist. If it hits an enemy it latches onto them hungrily, rooting them and everything nearby after a brief delay.",
        "dmg": "250 + 70% bonus AD physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "11s"
      },
      {
        "key": "E",
        "name": "Curse of the Black Mist",
        "text": "Senna draws the Mist she has stored in her weapon into a storm around her, embracing darkness and becoming a wraith within. Allies who enter the area are camouflaged and also appear as wraiths as the Mist shrouds them. Wraiths gain increased Move Speed, are unselectable, and hide their identities.",
        "cost": "Mana 70",
        "cd": "26 → 20s"
      },
      {
        "key": "R",
        "name": "Dawning Shadow",
        "text": "Senna calls upon the relic stones of fallen Sentinels, splitting her relic cannon into a holy array of shadow and light. She then fires a global beam that shields allies from harm, while damaging enemies caught in the center.",
        "dmg": "550 + 115% bonus AD + 70% AP physical damage",
        "cost": "Mana 100",
        "cd": "140/120/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Kai'Sa",
        "id": 145,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Kai'Sa",
          "id": 145,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Caitlyn",
          "id": 51,
          "winPrc": 33,
          "games": 6
        },
        {
          "name": "Lucian",
          "id": 236,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Vayne",
          "id": 67,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Jinx",
          "id": 222,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Xayah",
          "id": 498,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "A",
      "winPrc": 53,
      "pickRate": 1.54,
      "games": 66,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1120,
          "name": "Doran's Helm"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3087,
          "name": "Statikk Shiv"
        },
        {
          "id": 3009,
          "name": "Boots of Swiftness"
        },
        {
          "id": 3071,
          "name": "Black Cleaver"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 2523,
              "name": "Hexoptics C44",
              "pct": 75,
              "winPrc": 67
            },
            {
              "id": 3004,
              "name": "Manamune",
              "pct": 25,
              "winPrc": 50
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 75,
              "winPrc": 67
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 25,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8992,
            "name": "Deathfire Touch"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8234,
              "name": "Celerity"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8316,
              "name": "Jack Of All Trades"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5010,
            "name": "Move Speed"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Seraphine",
    "name": "Seraphine",
    "title": "the Starry-Eyed Songstress",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 0,
    "blurb": "Born in Piltover to Zaunite parents, Seraphine can hear the souls of others—the world sings to her, and she sings back. Though these sounds overwhelmed her in her youth, she now draws on them for inspiration, turning the chaos into a symphony. She...",
    "passive": {
      "name": "Stage Presence",
      "text": "Every third basic spell will cast twice from Seraphine. Additionally, casting spells near allies grants her bonus magic damage and range on her next basic attack."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "High Note",
        "text": "Seraphine deals damage in an area.",
        "dmg": "160 + 50% AP magic damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "8 → 6s"
      },
      {
        "key": "W",
        "name": "Surround Sound",
        "text": "Seraphine Shields and Hastes nearby allies. If she is already Shielded she will Heal nearby allies as well.",
        "cost": "Mana 70/75/80/85/90",
        "cd": "22s"
      },
      {
        "key": "E",
        "name": "Beat Drop",
        "text": "Seraphine deals damage and impairs the movement of enemies in a line.",
        "dmg": "190 + 50% AP magic damage",
        "cost": "Mana 60",
        "cd": "11 → 9s"
      },
      {
        "key": "R",
        "name": "Encore",
        "text": "Seraphine deals damage and charms enemies hit, refreshing the range with every allied or enemy champion hit.",
        "dmg": "250 + 40% AP magic damage",
        "cost": "Mana 100",
        "cd": "160/140/120s"
      }
    ],
    "counters": {
      "best": {
        "name": "Jinx",
        "id": 222,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Jinx",
          "id": 222,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Xerath",
          "id": 101,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Lucian",
          "id": 236,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Miss Fortune",
          "id": 21,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Ashe",
          "id": 22,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Syndra",
          "id": 134,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "A",
      "winPrc": 53,
      "pickRate": 1.75,
      "games": 75,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 2503,
          "name": "Blackfire Torch"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 3003,
          "name": "Archangel's Staff"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3116,
              "name": "Rylai's Crystal Scepter",
              "pct": 83,
              "winPrc": 60
            },
            {
              "id": 4005,
              "name": "Imperial Mandate",
              "pct": 17,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 4005,
              "name": "Imperial Mandate",
              "pct": 75,
              "winPrc": 67
            },
            {
              "id": 3116,
              "name": "Rylai's Crystal Scepter",
              "pct": 25,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 100,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "Optional",
          "options": [
            {
              "id": 3041,
              "name": "Mejai's Soulstealer",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8017,
              "name": "Cut Down"
            },
            {
              "id": 9105,
              "name": "Legend: Haste"
            }
          ]
        },
        "statShards": [
          {
            "id": 5007,
            "name": "Ability Haste"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5011,
            "name": "Health"
          }
        ]
      }
    }
  },
  {
    "id": "Sett",
    "name": "Sett",
    "title": "the Boss",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 2,
    "blurb": "A leader of Ionia's growing criminal underworld, Sett rose to prominence in the wake of the war with Noxus. Though he began as a humble challenger in the fighting pits of Navori, he quickly gained notoriety for his savage strength, and his ability to...",
    "passive": {
      "name": "Pit Grit",
      "text": "Sett's basic attacks alternate between left and right punch. Right punch is slightly stronger and faster. Sett also hates losing, gaining additional health regeneration based off of his missing health."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Knuckle Down",
        "text": "Sett's next two attacks deal additional damage based off of the target's max health. Sett also gains Move Speed while moving towards enemy champions.",
        "dmg": "50 + 1% (+ 1 / 1.5 / 2 / 2.5 / 3% per 100 AD) of target's max HP physical damage",
        "cd": "9 → 5s"
      },
      {
        "key": "W",
        "name": "Haymaker",
        "text": "Sett passively stores damage he takes as Grit. On cast, Sett expends all stored Grit to gain a shield and punch an area, dealing true damage in the center and physical damage on the sides.",
        "dmg": "160 + 25% (+ 25% per 100 bonus AD) of expended Grit mixed damage",
        "cost": "Grit 100",
        "cd": "18 → 12s"
      },
      {
        "key": "E",
        "name": "Facebreaker",
        "text": "Sett pulls in all enemies on opposite sides of him, dealing damage and stunning them. If enemies were only on one side, they are slowed instead of stunned.",
        "dmg": "130 + 60% AD physical damage",
        "cd": "16 → 10s"
      },
      {
        "key": "R",
        "name": "The Show Stopper",
        "text": "Sett carries an enemy champion through the air and slams them into the ground, dealing damage and slowing all enemies near where they land.",
        "dmg": "400 + 120% bonus AD + 60% of primary target's bonus health physical damage",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Aatrox",
        "id": 266,
        "winPrc": 17,
        "games": 6
      },
      "weak": [
        {
          "name": "Aatrox",
          "id": 266,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Volibear",
          "id": 106,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Heimerdinger",
          "id": 74,
          "winPrc": 33,
          "games": 6
        }
      ],
      "strong": [
        {
          "name": "Fiora",
          "id": 114,
          "winPrc": 86,
          "games": 7
        },
        {
          "name": "Pantheon",
          "id": 80,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Sion",
          "id": 14,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "S+",
      "winPrc": 54,
      "pickRate": 4.16,
      "games": 177,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Shaco",
    "name": "Shaco",
    "title": "the Demon Jester",
    "roles": [
      "Assassin"
    ],
    "difficulty": 9,
    "blurb": "Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls...",
    "passive": {
      "name": "Backstab",
      "text": "Shaco's basic attacks and Two-Shiv Poison deal additional damage when striking from behind."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Deceive",
        "text": "Shaco becomes Invisible and teleports to target location. His first attack while Invisible is empowered, dealing bonus damage and critically striking if he attacks from behind.",
        "dmg": "65 + 65% bonus AD physical damage",
        "cost": "Mana 40",
        "cd": "12 → 10s"
      },
      {
        "key": "W",
        "name": "Jack In The Box",
        "text": "Shaco creates a hidden animated Jack-in-the-Box. When triggered, it will fear and attack nearby enemies.",
        "dmg": "30 + 12% AP magic damage",
        "cost": "Mana 70/65/60/55/50",
        "cd": "15s"
      },
      {
        "key": "E",
        "name": "Two-Shiv Poison",
        "text": "Shaco's Shivs passively poison targets on hit, slowing their Move Speed. He can throw his Shivs to deal damage and poison the target. The thrown Shiv deals bonus damage if the target is below 30% health.",
        "dmg": "170 + 80% bonus AD + 60% AP magic damage",
        "cost": "Mana 75",
        "cd": "8s"
      },
      {
        "key": "R",
        "name": "Hallucinate",
        "text": "Shaco creates an illusion of himself near him, which can attack nearby enemies (Deals reduced damage to turrets). Upon death, it explodes, spawning three mini Jack in the Boxes and dealing damage to nearby enemies.",
        "dmg": "300 + 70% AP magic damage",
        "cost": "Mana 100",
        "cd": "100/90/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Nasus",
        "id": 75,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Nasus",
          "id": 75,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Rengar",
          "id": 107,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Lee Sin",
          "id": 64,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Briar",
          "id": 233,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Kha'Zix",
          "id": 121,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Aatrox",
          "id": 266,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 45,
      "pickRate": 2.73,
      "games": 117,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3142,
              "name": "Youmuu's Ghostblade",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6694,
              "name": "Serylda's Grudge",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8128,
            "name": "Dark Harvest"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Shen",
    "name": "Shen",
    "title": "the Eye of Twilight",
    "roles": [
      "Tank"
    ],
    "difficulty": 4,
    "blurb": "Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit...",
    "passive": {
      "name": "Ki Barrier",
      "text": "After casting a spell, Shen gets a shield. Affecting other champions reduces the cooldown of this effect."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Twilight Assault",
        "text": "Shen recalls his spirit blade to attack with it, dealing damage based on the target's max health. The attacks are greatly empowered if it collides with an enemy champion, and all collided enemies are slowed while running away from Shen.",
        "dmg": "40 + 4% (+ 1.5% per 100 AP) of target's max HP magic damage",
        "cost": "Energy 140/130/120/110/100",
        "cd": "8 → 5s"
      },
      {
        "key": "W",
        "name": "Spirit's Refuge",
        "text": "Attacks that would hit Shen or his allies near his spirit blade are blocked.",
        "cost": "Energy 40",
        "cd": "16 → 10s"
      },
      {
        "key": "E",
        "name": "Shadow Dash",
        "text": "Shen dashes in a direction, taunting enemies in his path.",
        "dmg": "160 + 15% bonus health physical damage",
        "cost": "Energy 150",
        "cd": "18 → 10s"
      },
      {
        "key": "R",
        "name": "Stand United",
        "text": "Shen shields target allied champion from incoming damage, and soon after teleports to their location.",
        "cd": "200/180/160s"
      }
    ],
    "counters": {
      "best": {
        "name": "Volibear",
        "id": 106,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Volibear",
          "id": 106,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Dr. Mundo",
          "id": 36,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Aatrox",
          "id": 266,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Malphite",
          "id": 54,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "A",
      "winPrc": 55,
      "pickRate": 1.72,
      "games": 73,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Shyvana",
    "name": "Shyvana",
    "title": "the Half-Dragon",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 4,
    "blurb": "Shyvana is a fearsome half-dragon warrior. Though she often appears humanoid, she also rules the skies as a dragon, incinerating her foes with fiery breath. Having saved the life of the crown prince Jarvan IV, Shyvana now serves uneasily in his royal...",
    "passive": {
      "name": "Scalemail",
      "text": "Takedowns on enemy champions, large minions, and large monsters grant Shyvana Scalemail stacks, improving her defenses."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Emberstrike",
        "text": "Shyvana's next attack strikes both the target and the surrounding area. This Ability can be recast. While in Dragon Form, it gains an additional recast, dealing massive damage to a single target.",
        "dmg": "100% AD + 25% AP physical damage",
        "cd": "8 → 6s"
      },
      {
        "key": "W",
        "name": "Inferno Aegis",
        "text": "Shyvana gains a shield, movement speed, and after a short delay, the area around her detonates. While in Dragon Form, the explosion will heal her if it strikes an enemy champion.",
        "dmg": "30 + 10% bonus AD magic damage",
        "cd": "12s"
      },
      {
        "key": "E",
        "name": "Molten Burst",
        "text": "Shyvana launches a fireball that explodes upon striking a large target and slows them. In Dragon Form, it passes through and explodes upon striking large enemies, leaving behind a trail of fire.",
        "dmg": "245 + 50% bonus AD + 70% AP magic damage",
        "cd": "12 → 8s"
      },
      {
        "key": "R",
        "name": "Dragon's Descent",
        "text": "Shyvana transforms into a Dragon and leaps forward causing enemies along her path to flee. While in Dragon form she becomes larger and her basic abilities are empowered.",
        "dmg": "350 + 100% AP magic damage",
        "cost": "Fury 2.5"
      }
    ],
    "counters": {
      "best": {
        "name": "Lillia",
        "id": 876,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Lillia",
          "id": 876,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Kayn",
          "id": 141,
          "winPrc": 38,
          "games": 8
        }
      ],
      "strong": [
        {
          "name": "Wukong",
          "id": 62,
          "winPrc": 83,
          "games": 6
        },
        {
          "name": "Warwick",
          "id": 19,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Lee Sin",
          "id": 64,
          "winPrc": 80,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "S+",
      "winPrc": 52,
      "pickRate": 2.4,
      "games": 103,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Singed",
    "name": "Singed",
    "title": "the Mad Chemist",
    "roles": [
      "Tank",
      "Mage"
    ],
    "difficulty": 5,
    "blurb": "Singed is a brilliant alchemist of dubious morality, whose experiments would turn the stomach of even the most cutthroat criminal. Selling his skills to the highest bidder, he cares little for how his noxious concoctions are used, with the ensuing chaos...",
    "passive": {
      "name": "Noxious Slipstream",
      "text": "Singed drafts off nearby champions, gaining a burst of Move Speed when passing them."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Poison Trail",
        "text": "Leaves a trail of poison behind Singed, dealing damage to enemies caught in the path.",
        "dmg": "15 + 10.63% AP magic damage",
        "cost": "Mana/sec 13",
        "cd": "1s"
      },
      {
        "key": "W",
        "name": "Mega Adhesive",
        "text": "Throws a vial of mega adhesive on the ground, slowing and grounding enemies who walk on it.",
        "cost": "Mana 60/70/80/90/100",
        "cd": "17 → 13s"
      },
      {
        "key": "E",
        "name": "Fling",
        "text": "Damages target enemy unit and flings them into the air behind Singed. If the target Singed flings lands in his Mega Adhesive, they are also rooted.",
        "dmg": "90 + 8% of target's max HP + 55% AP magic damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "10 → 8s"
      },
      {
        "key": "R",
        "name": "Insanity Potion",
        "text": "Singed drinks a potent brew of chemicals, granting him increased combat stats, and making his Poison Trail apply Grievous Wounds.",
        "cost": "Mana 100",
        "cd": "100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Garen",
        "id": 86,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Sett",
          "id": 875,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 43,
      "pickRate": 0.99,
      "games": 42,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Sion",
    "name": "Sion",
    "title": "The Undead Juggernaut",
    "roles": [
      "Tank",
      "Fighter"
    ],
    "difficulty": 5,
    "blurb": "A war hero from a bygone era, Sion was revered in Noxus for choking the life out of a Demacian king with his bare hands—but, denied oblivion, he was resurrected to serve his empire even in death. His indiscriminate slaughter claimed all who stood in his...",
    "passive": {
      "name": "Glory in Death",
      "text": "After being killed, Sion will temporarily reanimate with rapidly decaying Health. His attacks become very rapid, heal him, and deal bonus damage based on his target's maximum Health."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Decimating Smash",
        "text": "Sion charges a powerful swing in an area in front of himself that will deal damage to enemies when released. If he charges for enough time, enemies hit by the swing will also be knocked up and stunned.",
        "dmg": "191.67% physical damage",
        "cost": "Mana 45",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Soul Furnace",
        "text": "Sion shields himself and can reactivate after 3 seconds to deal Magic Damage to enemies nearby. When Sion kills enemies, he passively gains maximum Health.",
        "dmg": "140 + 40% AP + 14% of target's max HP magic damage",
        "cost": "Mana 65/70/75/80/85",
        "cd": "15 → 11s"
      },
      {
        "key": "E",
        "name": "Roar of the Slayer",
        "text": "Sion fires a short range shockwave that damages and slows and reduces the Armor of the first enemy hit. If the shockwave hits a minion or monster, it will be knocked back, damaging, slowing, and reducing the Armor of all enemies that it passes through.",
        "dmg": "205 + 55% AP magic damage",
        "cost": "Mana 35/40/45/50/55",
        "cd": "12 → 8s"
      },
      {
        "key": "R",
        "name": "Unstoppable Onslaught",
        "text": "Sion charges in a direction, ramping up speed over time. He can steer his charge slightly with the mouse cursor location. When he collides with an enemy he deals damage and knocks them up based on the distance he has charged.",
        "dmg": "450 + 40% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "140/100/60s"
      }
    ],
    "counters": {
      "best": {
        "name": "Garen",
        "id": 86,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Sett",
          "id": 875,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Ornn",
          "id": 516,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 1.39,
      "games": 59,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Sivir",
    "name": "Sivir",
    "title": "the Battle Mistress",
    "roles": [
      "Marksman"
    ],
    "difficulty": 4,
    "blurb": "Sivir is a renowned fortune hunter and mercenary captain who plies her trade in the deserts of Shurima. Armed with her legendary jeweled crossblade, she has fought and won countless battles for those who can afford her exorbitant price. Known for her...",
    "passive": {
      "name": "Fleet of Foot",
      "text": "Sivir gains a short burst of Move Speed when she attacks an enemy champion."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Boomerang Blade",
        "text": "Sivir hurls her crossblade like a boomerang, dealing damage each way.",
        "dmg": "160 + 100% bonus AD + 60% AP physical damage",
        "cost": "Mana 55/60/65/70/75",
        "cd": "10 → 8s"
      },
      {
        "key": "W",
        "name": "Ricochet",
        "text": "Sivir's next few basic attacks gain additional attack speed and bounce to nearby targets, dealing reduced damage while bouncing.",
        "dmg": "50% AD physical damage",
        "cost": "Mana 60",
        "cd": "12s"
      },
      {
        "key": "E",
        "name": "Spell Shield",
        "text": "Creates a magical barrier that blocks a single enemy ability cast on Sivir. She receives health and a burst of movement speed if a spell is blocked.",
        "cd": "24 → 18s"
      },
      {
        "key": "R",
        "name": "On The Hunt",
        "text": "Sivir leads her allies in battle, granting them a surge of Move Speed for a period of time. In addition, Sivir's attacks reduce her spell cooldowns.",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Xayah",
        "id": 498,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Xayah",
          "id": 498,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Caitlyn",
          "id": 51,
          "winPrc": 86,
          "games": 7
        },
        {
          "name": "Yunara",
          "id": 804,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Jhin",
          "id": 202,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "A",
      "winPrc": 64,
      "pickRate": 1.56,
      "games": 67,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 2523,
          "name": "Hexoptics C44"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3046,
          "name": "Phantom Dancer"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 70,
              "winPrc": null
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 30,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Skarner",
    "name": "Skarner",
    "title": "the Primordial Sovereign",
    "roles": [
      "Tank",
      "Fighter"
    ],
    "difficulty": 5,
    "blurb": "The ancient, colossal brackern Skarner is revered in Ixtal as one of the founding members of its ruling caste, the Yun Tal. Devoted to keeping his nation safe from the rest of the world, Skarner dwells in a chamber beneath Ixaocan where he can hear the...",
    "passive": {
      "name": "Threads of Vibration",
      "text": "Skarner's Attacks, Shattered Earth, Upheaval, and Impale, apply Quaking. At max stacks of Quaking, enemies take max Health magic damage over its duration."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Shattered Earth / Upheaval",
        "text": "Skarner rips a boulder from the earth that empowers his attacks and can be thrown as a powerful projectile.",
        "dmg": [
          "Shattered Earth: 50 + 80% bonus AD + 3% of his bonus health physical damage",
          "Upheaval: 50 + 80% bonus AD + 3% of his bonus health + 8% of target's max HP physical damage"
        ],
        "cost": "Mana 45",
        "cd": "13 → 7s"
      },
      {
        "key": "W",
        "name": "Seismic Bastion",
        "text": "Skarner gains a shield and creates an earthquake whose shockwave damages and slows foes.",
        "dmg": "130 + 80% AP",
        "cost": "Mana 60/65/70/75/80",
        "cd": "10 → 6s"
      },
      {
        "key": "E",
        "name": "Ixtal's Impact",
        "text": "Skarner charges forward and passes through terrain. If he collides with a champion or large monster, he'll slam them into the next wall he hits to damage and stun them.",
        "dmg": "150 + 6% of his maximum health physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "22 → 18s"
      },
      {
        "key": "R",
        "name": "Impale",
        "text": "Skarner's tails lash forward to suppress enemy champions. Once suppressed, the victims will be dragged along by Skarner as he moves around.",
        "dmg": "350 + 100% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/105/90s"
      }
    ],
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 20,
      "pickRate": 0.47,
      "games": 20,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Smolder",
    "name": "Smolder",
    "title": "the Fiery Fledgling",
    "roles": [
      "Marksman",
      "Mage"
    ],
    "difficulty": 6,
    "blurb": "Hidden amongst the craggy cliffs of the Noxian frontier, under the watchful eyes of his mother, a young dragon is learning what it means to be heir to the Camavoran imperial dragon lineage. Playful and eager to grow up, Smolder looks for any excuse to...",
    "passive": {
      "name": "Dragon Practice",
      "text": "Hitting champions with Abilities and killing enemies with Super Scorcher Breath grants a stack of Dragon Practice. Stacks increase the damage of Smolders basic Abilities."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Super Scorcher Breath",
        "text": "Smolder breathes fire on an enemy. As he gains more stacks, this ability becomes more powerful.",
        "dmg": "125 + 130% bonus AD mixed damage",
        "cost": "Mana 25",
        "cd": "5.5 → 3.5s"
      },
      {
        "key": "W",
        "name": "Achooo!",
        "text": "Smolder lets out an adorable flaming sneeze that explodes when hitting enemy champions.",
        "dmg": "100 + 60% bonus AD physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Flap, Flap, Flap",
        "text": "Smolder takes flight ignoring terrain and bombarding the lowest health enemy.",
        "dmg": "30 + 30% AD physical damage",
        "cost": "Mana 65",
        "cd": "24 → 16s"
      },
      {
        "key": "R",
        "name": "MMOOOMMMM!",
        "text": "Smolder calls his mom to breath fire from above, dealing extra damage and slowing enemies in the center of her fire.",
        "dmg": "400 + 110% bonus AD + 100% AP physical damage",
        "cost": "Mana 100",
        "cd": "120/110/100s"
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "S+",
      "winPrc": 54,
      "pickRate": 2.38,
      "games": 102,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1055,
          "name": "Doran's Blade"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3508,
          "name": "Essence Reaver"
        },
        {
          "id": 3008,
          "name": "Gluttonous Greaves"
        },
        {
          "id": 3071,
          "name": "Black Cleaver"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3161,
              "name": "Spear of Shojin",
              "pct": 70,
              "winPrc": 43
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 30,
              "winPrc": 33
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 57,
              "winPrc": 25
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 43,
              "winPrc": 67
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 67,
              "winPrc": 0
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 33,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "Optional",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8992,
            "name": "Deathfire Touch"
          },
          "minors": [
            {
              "id": 8275,
              "name": "Nimbus Cloak"
            },
            {
              "id": 8234,
              "name": "Celerity"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8316,
              "name": "Jack Of All Trades"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5010,
            "name": "Move Speed"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Lucian",
        "id": 236,
        "winPrc": 29,
        "games": 7
      },
      "weak": [
        {
          "name": "Lucian",
          "id": 236,
          "winPrc": 29,
          "games": 7
        },
        {
          "name": "Miss Fortune",
          "id": 21,
          "winPrc": 31,
          "games": 13
        },
        {
          "name": "Ezreal",
          "id": 81,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Twitch",
          "id": 29,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Mel",
          "id": 800,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Ashe",
          "id": 22,
          "winPrc": 67,
          "games": 3
        }
      ]
    }
  },
  {
    "id": "Sona",
    "name": "Sona",
    "title": "Maven of the Strings",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 4,
    "blurb": "Sona is Demacia's foremost virtuoso of the stringed etwahl, speaking only through her graceful chords and vibrant arias. This genteel manner has endeared her to the highborn, though others suspect her spellbinding melodies to actually emanate magic—a...",
    "passive": {
      "name": "Power Chord",
      "text": "Accelerando: Sona gains non-Ultimate ability haste permanently for her basic abilities as she uses her abilities well, up to a cap. Beyond that cap, further successful uses reduce her ultimate's remaining cooldown instead. Power Chord: Every few spell casts, Sona's next attack will deal bonus magic damage in addition to an additional effect based on what basic Ability Sona last activated."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Hymn of Valor",
        "text": "Sona plays the Hymn of Valor, sends out bolts of sound, dealing magic damage to two nearby enemies, prioritizing champions and monsters. Sona gains a temporary aura that grants allies tagged by the zone bonus damage on their next attack against enemies.",
        "dmg": "190 + 40% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "8s"
      },
      {
        "key": "W",
        "name": "Aria of Perseverance",
        "text": "Sona plays the Aria of Perseverance, sending out protective melodies, healing Sona and a nearby wounded ally. Sona gains a temporary aura that grants allies tagged by the zone a temporary shield.",
        "dmg": "105",
        "cost": "Mana 80/85/90/95/100",
        "cd": "10s"
      },
      {
        "key": "E",
        "name": "Song of Celerity",
        "text": "Sona plays the Song of Celerity, granting nearby allies bonus Move Speed. Sona gains a temporary aura that grants allied champions tagged by the zone bonus Move Speed.",
        "cost": "Mana 65",
        "cd": "14s"
      },
      {
        "key": "R",
        "name": "Crescendo",
        "text": "Sona plays her ultimate chord, stunning enemy champions and forcing them to dance and dealing magic damage to them.",
        "dmg": "350 + 50% AP magic damage",
        "cost": "Mana 100",
        "cd": "140/120/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Nami",
        "id": 267,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Nami",
          "id": 267,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Leona",
          "id": 89,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Lux",
          "id": 99,
          "winPrc": 71,
          "games": 7
        },
        {
          "name": "Nautilus",
          "id": 111,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "A",
      "winPrc": 59,
      "pickRate": 1.67,
      "games": 70,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Soraka",
    "name": "Soraka",
    "title": "the Starchild",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 3,
    "blurb": "A wanderer from the celestial dimensions beyond Mount Targon, Soraka gave up her immortality to protect the mortal races from their own more violent instincts. She endeavors to spread the virtues of compassion and mercy to everyone she meets—even...",
    "passive": {
      "name": "Salvation",
      "text": "Soraka runs faster towards nearby low health allies."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Starcall",
        "text": "A star falls from the sky at the target location dealing magic damage and slowing enemies. If an enemy champion is hit by Starcall, Soraka recovers Health.",
        "dmg": "225 + 35% AP magic damage",
        "cost": "Mana 45/50/55/60/65",
        "cd": "8 → 4s"
      },
      {
        "key": "W",
        "name": "Astral Infusion",
        "text": "Soraka sacrifices a portion of her own health to heal another friendly champion.",
        "cost": "Health 10",
        "cd": "6 → 2s"
      },
      {
        "key": "E",
        "name": "Equinox",
        "text": "Creates a zone at a location that silences all enemies inside. When the zone expires, all enemies still inside are rooted.",
        "dmg": "170 + 40% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "20 → 16s"
      },
      {
        "key": "R",
        "name": "Wish",
        "text": "Soraka fills her allies with hope, instantly restoring health to herself and all allied champions.",
        "cost": "Mana 100",
        "cd": "150/135/120s"
      }
    ],
    "counters": {
      "best": {
        "name": "Seraphine",
        "id": 147,
        "winPrc": 11,
        "games": 9
      },
      "weak": [
        {
          "name": "Seraphine",
          "id": 147,
          "winPrc": 11,
          "games": 9
        },
        {
          "name": "Leona",
          "id": 89,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Brand",
          "id": 63,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Swain",
          "id": 50,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Neeko",
          "id": 518,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Pantheon",
          "id": 80,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "D",
      "winPrc": 42,
      "pickRate": 2.42,
      "games": 101,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Swain",
    "name": "Swain",
    "title": "the Noxian Grand General",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 8,
    "blurb": "Jericho Swain is the visionary ruler of Noxus, an expansionist nation that reveres only strength. Though he was cast down and crippled in the Ionian wars, his left arm severed, he seized control of the empire with ruthless determination… and a new...",
    "passive": {
      "name": "Ravenous Flock",
      "text": "Swain's ravens collect Soul Fragments that heal him and permanently increase his maximum health."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Death's Hand",
        "text": "Swain unleashes several bolts of eldritch power that pierce through enemies. Enemies hit take more damage for each bolt they are struck by.",
        "dmg": "180 + 45% AP magic damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "7 → 3s"
      },
      {
        "key": "W",
        "name": "Vision of Empire",
        "text": "Swain opens a demon eye that deals damage and slows enemies. Champions hit are revealed and also grant Swain a Soul Fragment.",
        "dmg": "210 + 60% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "22 → 18s"
      },
      {
        "key": "E",
        "name": "Nevermove",
        "text": "Swain launches a wave of demonic power forward. It then returns to Swain and roots enemies it hits. Swain can then choose to pull all rooted champions closer. This ability has a shorter cooldown during Demonic Ascension.",
        "dmg": "240 + 70% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "12 → 10s"
      },
      {
        "key": "R",
        "name": "Demonic Ascension",
        "text": "Swain transforms into a demon and drains health from nearby enemy champions, minions, and neutral monsters. Swain can cast Demonflare to decimate and slow nearby enemies with a nova of soulfire. This form is indefinite as long as Swain drains enemy champions.",
        "dmg": [
          "Demonic Ascension: 17.5 + 2.5% AP magic damage",
          "Demonflare: 350 + 50% AP magic damage"
        ],
        "cost": "Mana 100",
        "cd": "120s"
      }
    ],
    "counters": {
      "best": {
        "name": "Leona",
        "id": 89,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Leona",
          "id": 89,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Soraka",
          "id": 16,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Pantheon",
          "id": 80,
          "winPrc": 29,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Braum",
          "id": 201,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Seraphine",
          "id": 147,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Nami",
          "id": 267,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "A",
      "winPrc": 55,
      "pickRate": 1.87,
      "games": 78,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4005,
          "name": "Imperial Mandate"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 6653,
          "name": "Liandry's Torment"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4645,
              "name": "Shadowflame",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Sylas",
    "name": "Sylas",
    "title": "the Unshackled",
    "roles": [
      "Mage",
      "Assassin"
    ],
    "difficulty": 5,
    "blurb": "Raised in one of Demacia's lesser quarters, Sylas of Dregbourne has come to symbolize the darker side of the Great City. As a boy, his ability to root out hidden sorcery caught the attention of the notorious mageseekers, who eventually imprisoned him...",
    "passive": {
      "name": "Petricite Burst",
      "text": "After casting a spell, Sylas stores a charge of Petricite Burst. Sylas's basic attacks will expend a charge and whirl his energized chains around him dealing bonus magic damage to enemies hit. While Sylas has a charge of Petricite Burst, he gains attack speed."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Chain Lash",
        "text": "Sylas lashes his chains out, intersecting at his targeted location dealing damage to and slowing enemies. After a delay, magical energy explodes from the intersection point dealing damage.",
        "dmg": "120 + 40% AP magic damage",
        "cost": "Mana 55",
        "cd": "10 → 6s"
      },
      {
        "key": "W",
        "name": "Kingslayer",
        "text": "Sylas lunges at an enemy with magical force dealing damage and healing himself against enemy champions.",
        "dmg": "215 + 60% AP magic damage",
        "cost": "Mana 50/60/70/80/90",
        "cd": "12 → 6s"
      },
      {
        "key": "E",
        "name": "Abscond / Abduct",
        "text": "Sylas dashes to a location. Sylas can recast the ability to throw his chains out, pulling himself to an enemy he hits.",
        "dmg": "Abduct: 280 + 80% AP magic damage",
        "cost": "Mana 65",
        "cd": "13 → 9s"
      },
      {
        "key": "R",
        "name": "Hijack",
        "text": "Sylas steals the enemy's ultimate ability and can cast it freely.",
        "cost": "Mana 75",
        "cd": "80/55/30s"
      }
    ],
    "counters": {
      "best": {
        "name": "Viego",
        "id": 234,
        "winPrc": 29,
        "games": 7
      },
      "weak": [
        {
          "name": "Viego",
          "id": 234,
          "winPrc": 29,
          "games": 7
        },
        {
          "name": "Wukong",
          "id": 62,
          "winPrc": 33,
          "games": 6
        },
        {
          "name": "Locke",
          "id": 805,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Briar",
          "id": 233,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Jax",
          "id": 24,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 47,
      "pickRate": 3.01,
      "games": 129,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3152,
          "name": "Hextech Rocketbelt"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4633,
          "name": "Riftmaker"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 80,
              "winPrc": 50
            },
            {
              "id": 4646,
              "name": "Stormsurge",
              "pct": 20,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 4645,
              "name": "Shadowflame",
              "pct": 50,
              "winPrc": 0
            },
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 50,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 100,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9105,
              "name": "Legend: Haste"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8347,
              "name": "Cosmic Insight"
            },
            {
              "id": 8304,
              "name": "Magical Footwear"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Syndra",
    "name": "Syndra",
    "title": "the Dark Sovereign",
    "roles": [
      "Mage"
    ],
    "difficulty": 8,
    "blurb": "Syndra is a fearsome Ionian mage with incredible power at her command. As a child, she disturbed the village elders with her reckless and wild magic. She was sent away to be taught greater control, but eventually discovered her supposed mentor was...",
    "passive": {
      "name": "Transcendent",
      "text": "Syndra collects Splinters of Wrath from gaining levels and damaging enemies which upgrade her abilities. Dark Sphere : Syndra can hold an additional charge Force of Will : Bonus true damage. Scatter the Weak : Increased width and slows all targets Unleashed Power : Executes low health targets"
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Dark Sphere",
        "text": "Syndra conjures a Dark Sphere dealing magic damage. The sphere remains and can be manipulated by her other powers.",
        "dmg": "215 + 60% AP magic damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "7s"
      },
      {
        "key": "W",
        "name": "Force of Will",
        "text": "Syndra picks up and throws a Dark Sphere or enemy minion dealing magic damage and slowing the Move Speed of enemies.",
        "dmg": "210 + 65% AP magic damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "12 → 8s"
      },
      {
        "key": "E",
        "name": "Scatter the Weak",
        "text": "Syndra knocks enemies and Dark Spheres back dealing magic damage. Enemies hit by Dark Spheres become stunned.",
        "dmg": "200 + 60% AP magic damage",
        "cost": "Mana 50",
        "cd": "17s"
      },
      {
        "key": "R",
        "name": "Unleashed Power",
        "text": "Syndra bombards an enemy Champion with all of her Dark Spheres.",
        "dmg": "170 + 20% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "S+",
      "winPrc": 55,
      "pickRate": 3.41,
      "games": 145,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 53,
              "winPrc": 75
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 47,
              "winPrc": 71
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 86,
              "winPrc": 83
            },
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 14,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Ahri",
        "id": 103,
        "winPrc": 29,
        "games": 7
      },
      "weak": [
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 29,
          "games": 7
        },
        {
          "name": "Locke",
          "id": 805,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Zed",
          "id": 238,
          "winPrc": 83,
          "games": 6
        },
        {
          "name": "Mel",
          "id": 800,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 80,
          "games": 5
        }
      ]
    }
  },
  {
    "id": "TahmKench",
    "name": "Tahm Kench",
    "title": "The River King",
    "roles": [
      "Tank",
      "Support"
    ],
    "difficulty": 5,
    "blurb": "Known by many names throughout history, the demon Tahm Kench travels the waterways of Runeterra, feeding his insatiable appetite with the misery of others. Though he may appear singularly charming and proud, he swaggers through the physical realm like a...",
    "passive": {
      "name": "An Acquired Taste",
      "text": "Tahm Kench puts the heft of his immense body behind his attacks, gaining extra damage based on his total health. Damaging enemy champions builds stacks of An Acquired Taste. At three stacks, he can use Devour on an enemy champion."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Tongue Lash",
        "text": "Tahm Kench lashes out with his tongue, damaging and slowing the first unit hit and healing himself if he strikes an enemy champion. Applies a stack of An Acquired Taste to enemy champions. If the champion already has 3 stacks of An Acquired Taste, they are stunned and the stacks are consumed.",
        "dmg": "255 + 100% AP + 1.5% AP per 100 bonus health + 4% bonus health magic damage",
        "cost": "Mana 50/46/42/38/34",
        "cd": "7 → 5s"
      },
      {
        "key": "W",
        "name": "Abyssal Dive",
        "text": "Dive down and then re-appear at target location, damaging and knocking up all enemies in an area.",
        "dmg": "240 + 150% AP magic damage",
        "cost": "Mana 60/75/90/105/120",
        "cd": "21 → 17s"
      },
      {
        "key": "E",
        "name": "Thick Skin",
        "text": "Passive: Tahm Kench stores a percent of the damage he takes and heals based on it while out of combat. Active: Convert all stored damage into a temporary shield.",
        "dmg": "47%",
        "cd": "3s"
      },
      {
        "key": "R",
        "name": "Devour",
        "text": "Tahm Kench devours a champion for a few seconds, dealing magic damage if they are an enemy, or shielding them if they are an ally.",
        "dmg": "Regurgitate: 400 + 15% (+ 7% per 100 AP) of the target's maximum health magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Thresh",
        "id": 412,
        "winPrc": 17,
        "games": 6
      },
      "weak": [
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Lulu",
          "id": 117,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Camille",
          "id": 164,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Support",
      "tier": "D",
      "winPrc": 38,
      "pickRate": 1.44,
      "games": 60,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3190,
          "name": "Locket of the Iron Solari"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3109,
          "name": "Knight's Vow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3050,
              "name": "Zeke's Convergence",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3107,
              "name": "Redemption",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3002,
              "name": "Trailblazer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8439,
            "name": "Aftershock"
          },
          "minors": [
            {
              "id": 8401,
              "name": "Shield Bash"
            },
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Taliyah",
    "name": "Taliyah",
    "title": "the Stoneweaver",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 5,
    "blurb": "Taliyah is a nomadic mage from Shurima, torn between teenage wonder and adult responsibility. She has crossed nearly all of Valoran on a journey to learn the true nature of her growing powers, though more recently she has returned to protect her tribe...",
    "passive": {
      "name": "Rock Surfing",
      "text": "Taliyah gains Move Speed near walls."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Threaded Volley",
        "text": "Taliyah throws a volley of rocks in a target direction, moving freely as she casts. This creates Worked Ground below her. If Taliyah casts Threaded Volley on Worked Ground, she consumes the ground to throw a stronger boulder that slows enemies.",
        "dmg": "130 + 50% AP magic damage",
        "cost": "Mana 65/70/75/80/85",
        "cd": "7 → 3s"
      },
      {
        "key": "W",
        "name": "Seismic Shove",
        "text": "Taliyah causes an area of ground to erupt and throws enemies within it in a direction of her choosing.",
        "cost": "Mana 40/30/20/10/0",
        "cd": "14 → 8s"
      },
      {
        "key": "E",
        "name": "Unraveled Earth",
        "text": "Taliyah creates a slowing minefield. If enemies dash through it or are knocked through it, the mines explode and stun them.",
        "dmg": "240 + 60% AP magic damage",
        "cost": "Mana 90/95/100/105/110",
        "cd": "14s"
      },
      {
        "key": "R",
        "name": "Weaver's Wall",
        "text": "Taliyah creates a very long wall and then surfs it.",
        "cost": "Mana 100",
        "cd": "180/150/120s"
      }
    ],
    "counters": {
      "best": {
        "name": "Viktor",
        "id": 112,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Viktor",
          "id": 112,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 35,
      "pickRate": 0.54,
      "games": 23,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Talon",
    "name": "Talon",
    "title": "the Blade's Shadow",
    "roles": [
      "Assassin"
    ],
    "difficulty": 7,
    "blurb": "Talon is the knife in the darkness, a merciless killer able to strike without warning and escape before any alarm is raised. He carved out a dangerous reputation on the brutal streets of Noxus, where he was forced to fight, kill, and steal to survive...",
    "passive": {
      "name": "Blade's End",
      "text": "Talon's spells Wound champions and large monsters, stacking up to 3 times. When Talon attacks a champion with 3 stacks of Wound, they bleed for heavy damage over time."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Noxian Diplomacy",
        "text": "Talon stabs the target unit. If they are within melee range, this attack deals critical damage. If they are outside melee range, Talon will leap at his target before stabbing them. Talon refunds some health and cooldown if this ability kills the target.",
        "dmg": "145 + 100% bonus AD physical damage",
        "cost": "Mana 40",
        "cd": "8 → 6s"
      },
      {
        "key": "W",
        "name": "Rake",
        "text": "Talon sends out a volley of daggers that then return back to him, dealing physical damage every time it passes through an enemy. The returning blades deal bonus damage and slow units hit.",
        "dmg": "90 + 40% bonus AD physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "9 → 7s"
      },
      {
        "key": "E",
        "name": "Assassin's Path",
        "text": "Talon vaults over any terrain or structure, up to a max distance. This ability has a low cooldown, but puts the used terrain on a long cooldown.",
        "cd": "2s"
      },
      {
        "key": "R",
        "name": "Shadow Assault",
        "text": "Talon disperses a ring of blades and becomes Invisible while gaining additional Move Speed. When Talon emerges from Invisibility, the blades converge on his location. Each time the blades move, Shadow Assault deals physical damage to enemies hit by at least one blade.",
        "dmg": "180 + 100% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "100/80/60s"
      }
    ],
    "counters": {
      "best": {
        "name": "Rengar",
        "id": 107,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Rengar",
          "id": 107,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Kayn",
          "id": 141,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Viego",
          "id": 234,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Bel'Veth",
          "id": 200,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "A",
      "winPrc": 60,
      "pickRate": 1.33,
      "games": 57,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6697,
          "name": "Hubris"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6676,
          "name": "The Collector"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3142,
              "name": "Youmuu's Ghostblade",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6694,
              "name": "Serylda's Grudge",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8128,
            "name": "Dark Harvest"
          },
          "minors": [
            {
              "id": 8143,
              "name": "Sudden Impact"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8135,
              "name": "Treasure Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Taric",
    "name": "Taric",
    "title": "the Shield of Valoran",
    "roles": [
      "Support",
      "Tank"
    ],
    "difficulty": 3,
    "blurb": "Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount Targon to find redemption, only to discover a...",
    "passive": {
      "name": "Bravado",
      "text": "Spellcasts empower Taric's next 2 basic attacks to deal bonus magic damage, reduce his spell cooldowns, and attack in quick succession."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Starlight's Touch",
        "text": "Heals nearby allied champions based on charges stored. Bravado-empowered attacks grant a charge of Starlight's Touch.",
        "cost": "Mana 60",
        "cd": "3s"
      },
      {
        "key": "W",
        "name": "Bastion",
        "text": "Passively increase the Armor of Taric and any allied champion with Bastion. Actively shields an ally and grants them Bastion for as long as they remain near Taric. Taric's spells also cast off the ally with Bastion.",
        "cost": "Mana 60",
        "cd": "15s"
      },
      {
        "key": "E",
        "name": "Dazzle",
        "text": "Taric readies a beam of starlight that, after a brief delay, deals magic damage and stuns enemies.",
        "dmg": "250 + 50% AP + 50% bonus armor magic damage",
        "cost": "Mana 40",
        "cd": "16 → 12s"
      },
      {
        "key": "R",
        "name": "Cosmic Radiance",
        "text": "Pulses cosmic energy onto nearby allied champions after a delay, making them invulnerable for a short duration.",
        "cost": "Mana 100",
        "cd": "180/150/120s"
      }
    ],
    "counters": {
      "best": {
        "name": "Seraphine",
        "id": 147,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Seraphine",
          "id": 147,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Support",
      "tier": "D",
      "winPrc": 50,
      "pickRate": 0.67,
      "games": 28,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3190,
          "name": "Locket of the Iron Solari"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3109,
          "name": "Knight's Vow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3050,
              "name": "Zeke's Convergence",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3107,
              "name": "Redemption",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3002,
              "name": "Trailblazer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8439,
            "name": "Aftershock"
          },
          "minors": [
            {
              "id": 8401,
              "name": "Shield Bash"
            },
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Teemo",
    "name": "Teemo",
    "title": "the Swift Scout",
    "roles": [
      "Marksman",
      "Mage"
    ],
    "difficulty": 6,
    "blurb": "Undeterred by even the most dangerous and threatening of obstacles, Teemo scouts the world with boundless enthusiasm and a cheerful spirit. A yordle with an unwavering sense of morality, he takes pride in following the Bandle Scout's Code, sometimes...",
    "passive": {
      "name": "Guerrilla Warfare",
      "text": "If Teemo stands still and takes no actions for a short duration, he becomes Invisible indefinitely. If he's in brush, Teemo can enter and maintain his Invisibility while moving. After leaving Invisibility, Teemo gains the Element of Surprise, increasing his Attack Speed for a few seconds."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Blinding Dart",
        "text": "Obscures an enemy's vision with a powerful venom, dealing damage to the target unit and blinding it for the duration.",
        "dmg": "260 + 70% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "7s"
      },
      {
        "key": "W",
        "name": "Move Quick",
        "text": "Teemo scampers around, passively increasing his Move Speed until he is struck by an enemy champion or turret. Teemo can sprint to gain bonus Move Speed that isn't stopped by being struck for a short time.",
        "cost": "Mana 40",
        "cd": "14s"
      },
      {
        "key": "E",
        "name": "Toxic Shot",
        "text": "Each of Teemo's attacks will poison the target On-Hit, dealing damage on impact and each second after for 4 seconds.",
        "dmg": "65 + 30% AP magic damage"
      },
      {
        "key": "R",
        "name": "Noxious Trap",
        "text": "Teemo throws an explosive poisonous trap using one of the mushrooms stored in his pack. If an enemy steps on the trap, it will release a poisonous cloud, slowing enemies and damaging them over time. If Teemo throws a mushroom onto another mushroom it will bounce, gaining additional range.",
        "dmg": "112.5 + 12.5% AP magic damage",
        "cost": "Mana 75/55/35",
        "cd": "0.25s"
      }
    ],
    "counters": {
      "best": {
        "name": "Darius",
        "id": 122,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Darius",
          "id": 122,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Malphite",
          "id": 54,
          "winPrc": 25,
          "games": 8
        },
        {
          "name": "Volibear",
          "id": 106,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Olaf",
          "id": 2,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Renekton",
          "id": 58,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Gangplank",
          "id": 41,
          "winPrc": 75,
          "games": 4
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "S+",
      "winPrc": 52,
      "pickRate": 3.55,
      "games": 151,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Thresh",
    "name": "Thresh",
    "title": "the Chain Warden",
    "roles": [
      "Support",
      "Tank"
    ],
    "difficulty": 7,
    "blurb": "Sadistic and cunning, Thresh is an ambitious and restless specter of the Shadow Isles. Once the custodian of countless arcane secrets, he was undone by a power greater than life or death, and now sustains himself by tormenting and breaking others with...",
    "passive": {
      "name": "Damnation",
      "text": "Thresh can harvest the souls of enemies that die near him, permanently granting him Armor and Ability Power."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Death Sentence",
        "text": "Thresh binds an enemy in chains and pulls them toward him. Activating this ability a second time pulls Thresh to the enemy.",
        "dmg": "300 + 90% AP magic damage",
        "cost": "Mana 70",
        "cd": "19 → 9s"
      },
      {
        "key": "W",
        "name": "Dark Passage",
        "text": "Thresh throws out a lantern that shields nearby allied Champions from damage. Allies can click the lantern to dash to Thresh.",
        "cost": "Mana 50/55/60/65/70",
        "cd": "21 → 17s"
      },
      {
        "key": "E",
        "name": "Flay",
        "text": "Thresh's attacks wind up, dealing more damage the longer he waits between attacks. When activated, Thresh sweeps his chain, knocking all enemies hit in the direction of the blow.",
        "dmg": "255 + 70% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "13 → 10s"
      },
      {
        "key": "R",
        "name": "The Box",
        "text": "A prison of walls that slow and deal damage if broken.",
        "dmg": "550 + 100% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Nami",
        "id": 267,
        "winPrc": 20,
        "games": 10
      },
      "weak": [
        {
          "name": "Nami",
          "id": 267,
          "winPrc": 20,
          "games": 10
        },
        {
          "name": "Rell",
          "id": 526,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Vel'Koz",
          "id": 161,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Tahm Kench",
          "id": 223,
          "winPrc": 83,
          "games": 6
        },
        {
          "name": "Braum",
          "id": 201,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Zyra",
          "id": 143,
          "winPrc": 80,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "S+",
      "winPrc": 55,
      "pickRate": 5.26,
      "games": 220,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3190,
          "name": "Locket of the Iron Solari"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3109,
          "name": "Knight's Vow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3050,
              "name": "Zeke's Convergence",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3107,
              "name": "Redemption",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3002,
              "name": "Trailblazer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8439,
            "name": "Aftershock"
          },
          "minors": [
            {
              "id": 8401,
              "name": "Shield Bash"
            },
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Tristana",
    "name": "Tristana",
    "title": "the Yordle Gunner",
    "roles": [
      "Marksman",
      "Assassin"
    ],
    "difficulty": 4,
    "blurb": "While many other yordles channel their energy into discovery, invention, or just plain mischief-making, Tristana was always inspired by the adventures of great warriors. She had heard much about Runeterra, its factions, and its wars, and believed her...",
    "passive": {
      "name": "Draw a Bead",
      "text": "Increases Tristana's Attack Range as she levels."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Rapid Fire",
        "text": "Tristana fires her weapon rapidly, increasing her Attack Speed for a short time.",
        "cost": "Mana 30/35/40/45/50",
        "cd": "20 → 16s"
      },
      {
        "key": "W",
        "name": "Rocket Jump",
        "text": "Tristana fires at the ground to propel her to a distant location, dealing damage and slowing surrounding units for a brief period where she lands.",
        "dmg": "210 + 100% bonus AD + 50% AP magic damage",
        "cost": "Mana 30/35/40/45/50",
        "cd": "22 → 14s"
      },
      {
        "key": "E",
        "name": "Explosive Charge",
        "text": "When Tristana kills a unit, her cannonballs burst into shrapnel, dealing damage to surrounding enemies. Can be activated to place a bomb on a target enemy that explodes after a short duration dealing damage to surrounding units.",
        "dmg": "105 + 25% AP physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "16 → 14s"
      },
      {
        "key": "R",
        "name": "Buster Shot",
        "text": "Tristana loads a massive cannonball into her weapon and fires it at an enemy unit. This deals Magic Damage and knocks the target back. If the target is carrying the Explosive Charge bomb, the bomb detonation radius is doubled.",
        "dmg": "325 + 70% bonus AD + 100% AP magic damage",
        "cost": "Mana 100",
        "cd": "100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Ashe",
        "id": 22,
        "winPrc": 14,
        "games": 7
      },
      "weak": [
        {
          "name": "Ashe",
          "id": 22,
          "winPrc": 14,
          "games": 7
        },
        {
          "name": "Samira",
          "id": 360,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Kai'Sa",
          "id": 145,
          "winPrc": 33,
          "games": 18
        }
      ],
      "strong": [
        {
          "name": "Varus",
          "id": 110,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Ziggs",
          "id": 115,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Jhin",
          "id": 202,
          "winPrc": 73,
          "games": 11
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 47,
      "pickRate": 4.15,
      "games": 178,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 2523,
          "name": "Hexoptics C44"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3046,
          "name": "Phantom Dancer"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 70,
              "winPrc": null
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 30,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Trundle",
    "name": "Trundle",
    "title": "the Troll King",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 5,
    "blurb": "Trundle is a hulking and devious troll with a particularly vicious streak, and there is nothing he cannot bludgeon into submission—not even the Freljord itself. Fiercely territorial, he chases down anyone foolish enough to enter his domain. Then, his...",
    "passive": {
      "name": "King's Tribute",
      "text": "When an enemy unit dies near Trundle, he heals for a percent of its maximum Health."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Chomp",
        "text": "Trundle bites his opponent, dealing damage, briefly slowing and sapping some of their Attack Damage.",
        "dmg": "90 + 55% AD physical damage",
        "cost": "Mana 20",
        "cd": "3.5s"
      },
      {
        "key": "W",
        "name": "Frozen Domain",
        "text": "Trundle turns target location into his domain, gaining Attack Speed, Move Speed, and increased healing from all sources while on it.",
        "cost": "Mana 40",
        "cd": "16 → 12s"
      },
      {
        "key": "E",
        "name": "Pillar of Ice",
        "text": "Trundle creates an ice pillar at target location, becoming impassable terrain and slowing all nearby enemy units.",
        "cost": "Mana 75",
        "cd": "21 → 15s"
      },
      {
        "key": "R",
        "name": "Subjugate",
        "text": "Trundle immediately steals a percent of his target's Health, Armor and Magic Resistance. Over the next 4 seconds the amount of Health, Armor, and Magic Resistance stolen is doubled.",
        "dmg": "30% of the target's maximum health + 2% per 100 AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yorick",
        "id": 83,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Yorick",
          "id": 83,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Dr. Mundo",
          "id": 36,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Darius",
          "id": 122,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": []
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 1.01,
      "games": 43,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Tryndamere",
    "name": "Tryndamere",
    "title": "the Barbarian King",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 5,
    "blurb": "Fueled by unbridled fury and rage, Tryndamere once carved his way through the Freljord, openly challenging the greatest warriors of the north to prepare himself for even darker days ahead. The wrathful barbarian has long sought revenge for the...",
    "passive": {
      "name": "Battle Fury",
      "text": "Tryndamere gains Fury for each attack, critical strike, and killing blow he makes. Fury passively increases his Critical Strike Chance and can be consumed with his Bloodlust spell."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Bloodlust",
        "text": "Tryndamere thrives on the thrills of combat, increasing his Attack Damage as he is more and more wounded. He can cast Bloodlust to consume his Fury and heal himself.",
        "cost": "Fury 100",
        "cd": "12s"
      },
      {
        "key": "W",
        "name": "Mocking Shout",
        "text": "Tryndamere lets out an insulting cry, decreasing surrounding champions' Attack Damage. Enemies with their backs turned to Tryndamere also have their Move Speed reduced.",
        "dmg": "80",
        "cd": "14s"
      },
      {
        "key": "E",
        "name": "Spinning Slash",
        "text": "Tryndamere slices toward a target unit, dealing damage to enemies in his path.",
        "dmg": "195 + 130% bonus AD + 80% AP physical damage",
        "cd": "12 → 8s"
      },
      {
        "key": "R",
        "name": "Undying Rage",
        "text": "Tryndamere's lust for battle becomes so strong that he is unable to die, no matter how wounded he becomes.",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Garen",
        "id": 86,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Garen",
          "id": 86,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 33,
          "games": 6
        },
        {
          "name": "Volibear",
          "id": 106,
          "winPrc": 33,
          "games": 6
        }
      ],
      "strong": [
        {
          "name": "Yasuo",
          "id": 157,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Ambessa",
          "id": 799,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Jax",
          "id": 24,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 43,
      "pickRate": 2.02,
      "games": 86,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "TwistedFate",
    "name": "Twisted Fate",
    "title": "the Card Master",
    "roles": [
      "Mage",
      "Marksman"
    ],
    "difficulty": 9,
    "blurb": "Twisted Fate is an infamous cardsharp and swindler who has gambled and charmed his way across much of the known world, earning the enmity and admiration of the rich and foolish alike. He rarely takes things seriously, greeting each day with a mocking...",
    "passive": {
      "name": "Loaded Dice",
      "text": "Upon killing a unit, Twisted Fate rolls his 'lucky' dice receiving 1 to 6 bonus gold."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Wild Cards",
        "text": "Twisted Fate throws three cards, dealing damage to each enemy unit they pass through.",
        "dmg": "240 + 50% bonus AD + 85% AP magic damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "6 → 5s"
      },
      {
        "key": "W",
        "name": "Pick a Card",
        "text": "Twisted Fate chooses a magic card from his deck, and uses that for his next attack, causing bonus effects.",
        "dmg": "120 + 100% AD + 100% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "6s"
      },
      {
        "key": "E",
        "name": "Stacked Deck",
        "text": "Every 4 attacks, Twisted Fate deals bonus damage. In addition, his Attack Speed is increased.",
        "dmg": "165 + 20% bonus AD + 40% AP magic damage"
      },
      {
        "key": "R",
        "name": "Destiny",
        "text": "Twisted Fate predicts the fortunes of his foes, revealing all enemy champions and enabling the use of Gate, which teleports Twisted Fate to any target location in 1.5 seconds.",
        "cost": "Mana 100",
        "cd": "180/150/120s"
      }
    ],
    "counters": {
      "best": null,
      "weak": [],
      "strong": [
        {
          "name": "Veigar",
          "id": 45,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Zed",
          "id": 238,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "A",
      "winPrc": 62,
      "pickRate": 1.67,
      "games": 71,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Twitch",
    "name": "Twitch",
    "title": "the Plague Rat",
    "roles": [
      "Marksman",
      "Assassin"
    ],
    "difficulty": 6,
    "blurb": "A Zaunite plague rat by birth, but a connoisseur of filth by passion, Twitch is not afraid to get his paws dirty. Aiming a chem-powered crossbow at the gilded heart of Piltover, he has vowed to show those in the city above just how filthy they really...",
    "passive": {
      "name": "Deadly Venom",
      "text": "Twitch's basic attacks infect the target On-Hit, dealing true damage each second."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Ambush",
        "text": "Twitch becomes Camouflaged for a short duration and gains Move Speed. When leaving Camouflage, Twitch gains Attack Speed for a short duration. When an enemy champion with Deadly Venom dies, Ambush's cooldown is reset.",
        "cost": "Mana 40",
        "cd": "16s"
      },
      {
        "key": "W",
        "name": "Venom Cask",
        "text": "Twitch hurls a cask of venom that explodes in an area, slowing targets and applying deadly venom to the target.",
        "cost": "Mana 70",
        "cd": "13 → 9s"
      },
      {
        "key": "E",
        "name": "Contaminate",
        "text": "Twitch wreaks further havoc on poisoned enemies with a blast of his vile diseases.",
        "dmg": "60 physical damage",
        "cost": "Mana 50/60/70/80/90",
        "cd": "12 → 8s"
      },
      {
        "key": "R",
        "name": "Spray and Pray",
        "text": "Twitch unleashes the full power of his crossbow, shooting bolts over a great distance that pierce all enemies caught in their path.",
        "cost": "Mana 100",
        "cd": "90s"
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 42,
      "pickRate": 2.17,
      "games": 93,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6676,
          "name": "The Collector"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 2512,
          "name": "Fiendhunter Bolts"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 67,
              "winPrc": 50
            },
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 33,
              "winPrc": 50
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 100,
              "winPrc": 75
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 50,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 4
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8017,
              "name": "Cut Down"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8224,
              "name": "Axiom Arcanist"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5011,
            "name": "Health"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Jhin",
        "id": 202,
        "winPrc": 13,
        "games": 8
      },
      "weak": [
        {
          "name": "Jhin",
          "id": 202,
          "winPrc": 13,
          "games": 8
        },
        {
          "name": "Smolder",
          "id": 901,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Kai'Sa",
          "id": 145,
          "winPrc": 29,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Jinx",
          "id": 222,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Ezreal",
          "id": 81,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Miss Fortune",
          "id": 21,
          "winPrc": 62,
          "games": 13
        }
      ]
    }
  },
  {
    "id": "Udyr",
    "name": "Udyr",
    "title": "the Spirit Walker",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 7,
    "blurb": "The most powerful spirit walker alive, Udyr communes with all the spirits of the Freljord, whether by empathically understanding their needs, or by channeling and transforming their ethereal energy into his own primal fighting style. He seeks balance...",
    "passive": {
      "name": "Bridge Between",
      "text": "Udyr has four basic Abilities that swap between Stances and can Recast an Ability to renew it with Ultimate benefits. Additionally, after using an Ability, Udyr's next two Attacks gain Attack Speed."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Wilding Claw",
        "text": "Udyr gains attack speed and his next two attacks deal bonus physical damage. Recast: Gain even more attack speed, and the next two attacks call lightning to strike the target.",
        "dmg": "8% of target's max HP + 4% per 100 bonus AD mixed damage",
        "cost": "Mana 20",
        "cd": "6s"
      },
      {
        "key": "W",
        "name": "Iron Mantle",
        "text": "Udyr gains a shield and his next two attacks heal him. Recast: Gain an even bigger shield and heal based on max health over the next couple seconds.",
        "cost": "Mana 40/39/38/37/36/35/34/33/32/31/30/29/28/27/26/25/24/23",
        "cd": "6s"
      },
      {
        "key": "E",
        "name": "Blazing Stampede",
        "text": "Udyr gains movement speed and his first attack against each target will Stun them. Recast: Gain even more movement speed and immunity to immobilizing effects for a couple seconds.",
        "cost": "Mana 40/39/38/37/36/35/34/33/32/31/30/29/28/27/26/25/24/23",
        "cd": "6s"
      },
      {
        "key": "R",
        "name": "Wingborne Storm",
        "text": "Udyr surrounds himself in a glacial storm, damaging and slowing nearby enemies. Recast: Empower and unleash the storm, causing it to track enemies and deal additional damage.",
        "dmg": "45 + 17.5% AP magic damage",
        "cost": "Mana 40/39/38/37/36/35/34/33/32/31/30/29/28/27/26/25/24/23",
        "cd": "6s"
      }
    ],
    "counters": {
      "best": {
        "name": "Warwick",
        "id": 19,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Warwick",
          "id": 19,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Nocturne",
          "id": 56,
          "winPrc": 29,
          "games": 7
        },
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Lee Sin",
          "id": 64,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 42,
      "pickRate": 1.17,
      "games": 50,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Urgot",
    "name": "Urgot",
    "title": "the Dreadnought",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 8,
    "blurb": "Once a powerful Noxian headsman, Urgot was betrayed by the empire for which he had killed so many. Bound in iron chains, he was forced to learn the true meaning of strength in the Dredge—a prison mine deep beneath Zaun. Emerging in a disaster that...",
    "passive": {
      "name": "Echoing Flames",
      "text": "Urgot's basic attacks and Purge periodically trigger blasts of flame from his legs, dealing physical damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Corrosive Charge",
        "text": "Fires an explosive charge at the target location, dealing physical damage and slowing enemies caught in the explosion.",
        "dmg": "205 + 70% AD physical damage",
        "cost": "Mana 70",
        "cd": "10 → 8s"
      },
      {
        "key": "W",
        "name": "Purge",
        "text": "Urgot slows himself while he unloads his weapon on nearby enemies. Prioritizes enemy champions Urgot has recently struck with other abilities and triggers Echoing Flames.",
        "dmg": "12 + 34% AD physical damage",
        "cost": "Mana 40/30/20/10/0",
        "cd": "12 → 0s"
      },
      {
        "key": "E",
        "name": "Disdain",
        "text": "Urgot charges in a direction, shielding himself and trampling non-champion enemies. If he catches an enemy champion, he will stop and hurl them out of his way.",
        "dmg": "210 + 100% bonus AD physical damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "16 → 14s"
      },
      {
        "key": "R",
        "name": "Fear Beyond Death",
        "text": "Urgot fires a chem-drill that impales the first enemy champion hit. If that champion falls below a health threshold, Urgot judges them weak and can execute them.",
        "dmg": "350 + 50% bonus AD mixed damage",
        "cost": "Mana 100",
        "cd": "100/85/70s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yone",
        "id": 777,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Kayle",
          "id": 10,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Yorick",
          "id": 83,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Malphite",
          "id": 54,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Darius",
          "id": 122,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "A",
      "winPrc": 60,
      "pickRate": 1.36,
      "games": 58,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Varus",
    "name": "Varus",
    "title": "the Arrow of Retribution",
    "roles": [
      "Marksman",
      "Mage"
    ],
    "difficulty": 2,
    "blurb": "One of the ancient darkin, Varus was a deadly killer who loved to torment his foes, driving them almost to insanity before delivering the killing arrow. He was imprisoned at the end of the Great Darkin War, but escaped centuries later in the remade...",
    "passive": {
      "name": "Living Vengeance",
      "text": "On kill or assist, Varus temporarily gains Attack Damage and Ability Power. This bonus is larger if the enemy is a champion."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Piercing Arrow",
        "text": "Varus readies and then fires a powerful shot that gains extra range and damage the longer he spends preparing to fire.",
        "dmg": "246.67 + 113.33% bonus AD physical damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "16 → 12s"
      },
      {
        "key": "W",
        "name": "Blighted Quiver",
        "text": "Passive: Varus' basic attacks deal bonus magic damage and apply Blight. Varus' other abilities detonate Blight, dealing magic damage based on the target's maximum Health. Active: Varus empowers his next Piercing Arrow.",
        "dmg": "30 + 35% AP magic damage",
        "cd": "40s"
      },
      {
        "key": "E",
        "name": "Hail of Arrows",
        "text": "Varus fires a hail of arrows that deal physical damage and desecrate the ground. Desecrated ground slows enemies' Move Speed and reduces their self healing and regeneration.",
        "dmg": "220 + 100% bonus AD magic damage",
        "cost": "Mana 90",
        "cd": "18 → 10s"
      },
      {
        "key": "R",
        "name": "Chain of Corruption",
        "text": "Varus flings out a damaging tendril of corruption that immobilizes the first enemy champion hit and then spreads towards nearby uninfected champions, immobilizing them too on contact.",
        "dmg": "350 + 100% AP magic damage",
        "cost": "Mana 100",
        "cd": "100/80/60s"
      }
    ],
    "counters": {
      "best": {
        "name": "Tristana",
        "id": 18,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Tristana",
          "id": 18,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Caitlyn",
          "id": 51,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Jhin",
          "id": 202,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Miss Fortune",
          "id": 21,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Ezreal",
          "id": 81,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 40,
      "pickRate": 1.16,
      "games": 50,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6672,
          "name": "Kraken Slayer"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3124,
          "name": "Guinsoo's Rageblade"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3153,
              "name": "Blade of The Ruined King",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Vayne",
    "name": "Vayne",
    "title": "the Night Hunter",
    "roles": [
      "Marksman",
      "Assassin"
    ],
    "difficulty": 8,
    "blurb": "Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family. Armed with a wrist-mounted crossbow and a heart full of vengeance, she is only truly happy when...",
    "passive": {
      "name": "Night Hunter",
      "text": "Vayne ruthlessly hunts evil-doers, gaining Move Speed when moving toward nearby enemy champions."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Tumble",
        "text": "Vayne tumbles, maneuvering to carefully place her next shot. Her next attack deals bonus damage.",
        "dmg": "115% AD + 50% AP physical damage",
        "cost": "Mana 30",
        "cd": "6 → 2s"
      },
      {
        "key": "W",
        "name": "Silver Bolts",
        "text": "Vayne tips her bolts with a rare metal, toxic to evil things. The third consecutive attack or ability against the same target deals a percentage of the target's max health as bonus true damage.",
        "dmg": "10% of target's max HP true damage"
      },
      {
        "key": "E",
        "name": "Condemn",
        "text": "Vayne draws a heavy crossbow from her back, and fires a huge bolt at her target, knocking them back and dealing damage. If they collide with terrain, they are impaled, dealing bonus damage and stunning them.",
        "dmg": "190 + 50% bonus AD physical damage",
        "cost": "Mana 90",
        "cd": "20 → 12s"
      },
      {
        "key": "R",
        "name": "Final Hour",
        "text": "Readying herself for an epic confrontation, Vayne gains increased Attack Damage, Invisibility during Tumble, reduced Tumble cooldown, and more bonus Move Speed from Night Hunter",
        "cost": "Mana 80",
        "cd": "100/85/70s"
      }
    ],
    "counters": {
      "best": {
        "name": "Ashe",
        "id": 22,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Ashe",
          "id": 22,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Senna",
          "id": 235,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Jinx",
          "id": 222,
          "winPrc": 27,
          "games": 11
        }
      ],
      "strong": [
        {
          "name": "Samira",
          "id": 360,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Jhin",
          "id": 202,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Mel",
          "id": 800,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 48,
      "pickRate": 2.63,
      "games": 113,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6672,
          "name": "Kraken Slayer"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3124,
          "name": "Guinsoo's Rageblade"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3153,
              "name": "Blade of The Ruined King",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3085,
              "name": "Runaan's Hurricane",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Veigar",
    "name": "Veigar",
    "title": "the Tiny Master of Evil",
    "roles": [
      "Mage"
    ],
    "difficulty": 7,
    "blurb": "An enthusiastic master of dark sorcery, Veigar has embraced powers that few mortals dare approach. As a free-spirited inhabitant of Bandle City, he longed to push beyond the limitations of yordle magic, and turned instead to arcane texts that had been...",
    "passive": {
      "name": "Phenomenal Evil Power",
      "text": "Veigar is the greatest Evil to ever strike at the hearts of Runeterra - and he's only getting bigger! Striking an enemy Champion with a spell or scoring a takedown grants Veigar permanently increased Ability Power."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Baleful Strike",
        "text": "Veigar unleashes a bolt of dark energy that deals magic damage to the first two enemies hit. Units killed by this bolt grant Veigar some ability power permanently.",
        "dmg": "240 + 70% AP magic damage",
        "cost": "Mana 30/35/40/45/50",
        "cd": "6 → 4s"
      },
      {
        "key": "W",
        "name": "Dark Matter",
        "text": "Veigar calls a great mass of dark matter to fall from the sky to the target location, dealing magic damage when it lands. Stacks of Phenomenal Evil reduce Dark Matter's cooldown.",
        "dmg": "305 + 100% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "8s"
      },
      {
        "key": "E",
        "name": "Event Horizon",
        "text": "Veigar twists the edges of space, creating a cage that Stuns enemies that pass through.",
        "cost": "Mana 70/75/80/85/90",
        "cd": "20 → 14s"
      },
      {
        "key": "R",
        "name": "Primordial Burst",
        "text": "Blasts target enemy champion, dealing a large amount of magic damage, increasing based on the target's missing health.",
        "dmg": "325 + 75% AP magic damage",
        "cost": "Mana 100",
        "cd": "100/80/60s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "S+",
      "winPrc": 52,
      "pickRate": 3.2,
      "games": 136,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6657,
          "name": "Rod of Ages"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 3003,
          "name": "Archangel's Staff"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 75,
              "winPrc": 67
            },
            {
              "id": 3041,
              "name": "Mejai's Soulstealer",
              "pct": 25,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 50,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 50,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "Optional",
          "options": [
            {
              "id": 3152,
              "name": "Hextech Rocketbelt",
              "pct": 100,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            }
          ]
        },
        "statShards": [
          {
            "id": 5007,
            "name": "Ability Haste"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Twisted Fate",
        "id": 4,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Twisted Fate",
          "id": 4,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 27,
          "games": 11
        },
        {
          "name": "Syndra",
          "id": 134,
          "winPrc": 33,
          "games": 6
        }
      ],
      "strong": [
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 67,
          "games": 9
        },
        {
          "name": "Mel",
          "id": 800,
          "winPrc": 67,
          "games": 3
        }
      ]
    }
  },
  {
    "id": "Velkoz",
    "name": "Vel'Koz",
    "title": "the Eye of the Void",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 8,
    "blurb": "It is unclear if Vel'Koz was the first Void-spawn to emerge on Runeterra, but there has certainly never been another to match his level of cruel, calculating sentience. While his kin devour or defile everything around them, he seeks instead to...",
    "passive": {
      "name": "Organic Deconstruction",
      "text": "Vel'Koz's abilities apply Organic Deconstruction to enemies on hit. If 3 stacks are accumulated, the enemy will take a burst of true damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Plasma Fission",
        "text": "Vel'Koz shoots a bolt of plasma that splits in two on reactivation or upon hitting an enemy. The bolt slows and damages on hit.",
        "dmg": "240 + 90% AP magic damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "7s"
      },
      {
        "key": "W",
        "name": "Void Rift",
        "text": "Vel'Koz opens a rift to the void that deals an initial burst of damage, then explodes for a second burst of damage after a delay.",
        "dmg": "110 + 20% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "1.5s"
      },
      {
        "key": "E",
        "name": "Tectonic Disruption",
        "text": "Vel'Koz causes an area to explode, knocking up enemies, and knocking close enemies slightly away.",
        "dmg": "190 + 30% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "14 → 12s"
      },
      {
        "key": "R",
        "name": "Life Form Disintegration Ray",
        "text": "Vel'Koz unleashes a channelled beam that follows the cursor for 2.5 seconds that deals magic damage. Organic Deconstruction Researches enemy champions causing them to take true damage instead.",
        "dmg": "61.54 + 9.62% AP mixed damage",
        "cost": "Mana 100",
        "cd": "100/90/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Blitzcrank",
        "id": 53,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Blitzcrank",
          "id": 53,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Leona",
          "id": 89,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Zyra",
          "id": 143,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Lux",
          "id": 99,
          "winPrc": 70,
          "games": 10
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "A",
      "winPrc": 51,
      "pickRate": 1.75,
      "games": 73,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4005,
          "name": "Imperial Mandate"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 6653,
          "name": "Liandry's Torment"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4645,
              "name": "Shadowflame",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Vex",
    "name": "Vex",
    "title": "the Gloomist",
    "roles": [
      "Mage"
    ],
    "difficulty": 0,
    "blurb": "In the black heart of the Shadow Isles, a lone yordle trudges through the spectral fog, content in its murky misery. With an endless supply of teen angst and a powerful shadow in tow, Vex lives in her own self-made slice of gloom, far from the revolting...",
    "passive": {
      "name": "Doom 'n Gloom",
      "text": "Vex periodically becomes empowered, causing her next basic Ability to fear enemies and interrupt dashes. Whenever a nearby enemy dashes, Vex applies a mark that can be consumed for bonus damage that also reduces the cooldown of her empowered state."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Mistral Bolt",
        "text": "Launch a damaging missile that accelerates mid-flight.",
        "dmg": "250 + 70% AP magic damage",
        "cost": "Mana 45/50/55/60/65",
        "cd": "8 → 4s"
      },
      {
        "key": "W",
        "name": "Personal Space",
        "text": "Gain a shield and damage nearby enemies.",
        "dmg": "240 + 30% AP magic damage",
        "cost": "Mana 75",
        "cd": "16 → 12s"
      },
      {
        "key": "E",
        "name": "Looming Darkness",
        "text": "Summon a damaging and slowing zone that applies Gloom to enemies.",
        "dmg": "130 + 60% AP magic damage",
        "cost": "Mana 70/80/90/100/110",
        "cd": "13s"
      },
      {
        "key": "R",
        "name": "Shadow Surge",
        "text": "Fire a missile that marks an enemy champion. Recast to dash to them and deal damage.",
        "dmg": "175 + 20% AP magic damage",
        "cost": "Mana 100",
        "cd": "140/120/100s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "S+",
      "winPrc": 53,
      "pickRate": 2.05,
      "games": 87,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 75,
              "winPrc": 67
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 25,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 50,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8106,
              "name": "Ultimate Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Heimerdinger",
        "id": 74,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Heimerdinger",
          "id": 74,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Diana",
          "id": 131,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Yasuo",
          "id": 157,
          "winPrc": 40,
          "games": 15
        }
      ],
      "strong": [
        {
          "name": "Lissandra",
          "id": 127,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Ekko",
          "id": 245,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 67,
          "games": 3
        }
      ]
    }
  },
  {
    "id": "Vi",
    "name": "Vi",
    "title": "the Piltover Enforcer",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 4,
    "blurb": "Raised on the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with very little respect for authority. She has always been a shrewd survivor, both from her youthful troublemaking topside and an unfairly long stint in Stillwater...",
    "passive": {
      "name": "Blast Shield",
      "text": "Vi charges a shield over time. The shield can be activated by hitting an enemy with an ability."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Vault Breaker",
        "text": "Vi charges her gauntlets and unleashes a vault shattering punch, carrying her forward. Enemies she hits are knocked back and receive a stack of Denting Blows.",
        "dmg": "145 + 80% bonus AD physical damage",
        "cost": "Mana 50/60/70/80/90",
        "cd": "12 → 6s"
      },
      {
        "key": "W",
        "name": "Denting Blows",
        "text": "Vi's punches break her opponent's Armor, dealing bonus damage and granting her Attack Speed.",
        "dmg": "10% of target's max HP + 2.86% per 100 bonus AD physical damage"
      },
      {
        "key": "E",
        "name": "Relentless Force",
        "text": "Vi's next attack blasts through her target, dealing damage to enemies behind it.",
        "dmg": "60 + 120% AD + 100% AP physical damage",
        "cost": "Mana 26/32/38/44/50",
        "cd": "1s"
      },
      {
        "key": "R",
        "name": "Cease and Desist",
        "text": "Vi runs down an enemy, knocking aside anyone in the way. When she reaches her target she knocks it into the air, jumps after it, and slams it back into the ground.",
        "dmg": "400 + 90% bonus AD physical damage",
        "cost": "Mana 100/125/150",
        "cd": "140/115/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Fiddlesticks",
        "id": 9,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Fiddlesticks",
          "id": 9,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Kayn",
          "id": 141,
          "winPrc": 36,
          "games": 11
        },
        {
          "name": "Lee Sin",
          "id": 64,
          "winPrc": 43,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Graves",
          "id": 104,
          "winPrc": 75,
          "games": 8
        },
        {
          "name": "Wukong",
          "id": 62,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "S",
      "winPrc": 51,
      "pickRate": 2.45,
      "games": 105,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Viego",
    "name": "Viego",
    "title": "The Ruined King",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 5,
    "blurb": "Once ruler of a long-lost kingdom, Viego perished over a thousand years ago when his attempt to bring his wife back from the dead triggered the magical catastrophe known as the Ruination. Transformed into a powerful, unliving specter tortured by an...",
    "passive": {
      "name": "Sovereign's Domination",
      "text": "Enemies who fall before Viego become wraiths. By attacking a wraith, Viego temporarily seizes control of the dead enemy's body, healing for a percentage of his target's max health and gaining access to their basic abilities and items. He replaces their Ultimate with a free cast of his own."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Blade of the Ruined King",
        "text": "Viego's spectral blade passively deals bonus percent current Health damage On-Hit and strikes twice vs. enemies he recently hit with an Ability, stealing Health. Viego can activate this Ability to thrust his zweihander forward, impaling enemies in front of him.",
        "dmg": "6% of target's current health physical damage",
        "cd": "5 → 3s"
      },
      {
        "key": "W",
        "name": "Spectral Maw",
        "text": "Viego charges up before dashing forward, releasing a ball of concentrated Black Mist that stuns the first enemy hit.",
        "dmg": "300 + 100% AP magic damage",
        "cd": "8s"
      },
      {
        "key": "E",
        "name": "Harrowed Path",
        "text": "Viego commands the Black Mist to haunt and surround a piece of terrain. Viego can hide in the Mist as a wraith, gaining camouflage, Move Speed, and Attack Speed.",
        "cd": "14 → 6s"
      },
      {
        "key": "R",
        "name": "Heartbreaker",
        "text": "Viego teleports to a nearby location and executes an enemy champion on arrival, piercing their heart and causing a destructive shockwave around them that knocks away their allies.",
        "dmg": "20% of target's missing HP + 5% per 100 bonus AD physical damage",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Naafiri",
        "id": 950,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Wukong",
          "id": 62,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Jax",
          "id": 24,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Jarvan IV",
          "id": 59,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 71,
          "games": 7
        },
        {
          "name": "Warwick",
          "id": 19,
          "winPrc": 67,
          "games": 6
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 45,
      "pickRate": 4.92,
      "games": 211,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Viktor",
    "name": "Viktor",
    "title": "the Herald of the Arcane",
    "roles": [
      "Mage"
    ],
    "difficulty": 9,
    "blurb": "The fully biomechanical evolution of his former self, Viktor has embraced his Glorious Evolution and become something of a messiah to his followers. He sacrificed his own humanity under the logic that eliminating emotion would thereby eliminate...",
    "passive": {
      "name": "Glorious Evolution",
      "text": "Viktor gains Hex Fragments whenever he kills an enemy. With every 100 Hex Fragments he obtains, Viktor permanently augments an active ability. After upgrading all of his basic abilities, he can gather 100 Hex Fragments to augment his ultimate ability."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Siphon Power",
        "text": "Viktor blasts an enemy unit with magic damage, which grants him a shield and empowers his next basic attack. Augment: Siphon Power's shield is increased by 60% and Viktor gains bonus move speed after casting the Ability.",
        "dmg": "120 + 40% AP magic damage",
        "cost": "Mana 45/50/55/60/65",
        "cd": "9 → 5s"
      },
      {
        "key": "W",
        "name": "Gravity Field",
        "text": "Viktor conjures a heavy gravitational field that slows enemies caught within its radius. Enemies who stay in the field for too long become stunned. Augment: Viktor's spells apply a slow to enemies.",
        "cost": "Mana 65",
        "cd": "17 → 13s"
      },
      {
        "key": "E",
        "name": "Hextech Ray",
        "text": "Viktor uses his biomechanical arm to fire a Hextech Ray that cuts across the field in a line, dealing damage to all enemies in its path. Augment: An explosion follows in the Hextech Ray's wake, dealing magic damage.",
        "dmg": "230 + 50% AP magic damage",
        "cost": "Mana 60/70/80/90/100",
        "cd": "12 → 8s"
      },
      {
        "key": "R",
        "name": "Arcane Storm",
        "text": "Viktor conjures an Arcane Storm on the field, dealing magic damage and interrupting enemy channels. The storm periodically does magic damage to all nearby enemies and can be redirected by Viktor. Augment: The Arcane Storm moves 25% faster, and whenever champions die after taking damage from it, the storm grows and increases in its duration.",
        "dmg": "250 + 50% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/100/80s"
      }
    ],
    "counters": {
      "best": {
        "name": "Ahri",
        "id": 103,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Lissandra",
          "id": 127,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "LeBlanc",
          "id": 7,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Katarina",
          "id": 55,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Diana",
          "id": 131,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 67,
          "games": 6
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "S+",
      "winPrc": 58,
      "pickRate": 3.08,
      "games": 131,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Vladimir",
    "name": "Vladimir",
    "title": "the Crimson Reaper",
    "roles": [
      "Mage",
      "Fighter"
    ],
    "difficulty": 7,
    "blurb": "A fiend with a thirst for mortal blood, Vladimir has influenced the affairs of Noxus since the empire's earliest days. In addition to unnaturally extending his life, his mastery of hemomancy allows him to control the minds and bodies of others as easily...",
    "passive": {
      "name": "Crimson Pact",
      "text": "Every 30 points of bonus Health gives Vladimir 1 Ability Power and every 1 point of Ability Power gives Vladimir 1.6 bonus Health (does not stack with itself)."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Transfusion",
        "text": "Vladimir steals life from the target enemy. When Vladimir's resource is full, Transfusion will benefit from massively increased damage and healing for a brief time.",
        "dmg": "160 + 60% AP magic damage",
        "cd": "9 → 4.6s"
      },
      {
        "key": "W",
        "name": "Sanguine Pool",
        "text": "Vladimir sinks into a pool of blood, becoming untargetable for 2 seconds. Additionally, enemies on the pool are slowed and Vladimir siphons life from them.",
        "dmg": "75 + 3.75% bonus health magic damage",
        "cost": "Health 15",
        "cd": "28 → 16s"
      },
      {
        "key": "E",
        "name": "Tides of Blood",
        "text": "Vladimir pays his own health to charge up a reservoir of blood which, when released, deals damage in the area around him but can be blocked by enemy units.",
        "dmg": "90 + 1.5% maximum health + 35% AP magic damage",
        "cost": "Health 2/4/6/8",
        "cd": "13 → 5s"
      },
      {
        "key": "R",
        "name": "Hemoplague",
        "text": "Vladimir infects an area with a virulent plague. Affected enemies take increased damage for the duration. After a few seconds, Hemoplague deals magic damage to infected enemies and heals Vladimir for each enemy Champion hit.",
        "dmg": "350 + 70% AP magic damage",
        "cd": "120s"
      }
    ],
    "counters": {
      "best": {
        "name": "Sylas",
        "id": 517,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Qiyana",
          "id": 246,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Syndra",
          "id": 134,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Locke",
          "id": 805,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 67,
          "games": 6
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "S+",
      "winPrc": 52,
      "pickRate": 2.02,
      "games": 86,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4633,
          "name": "Riftmaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3116,
          "name": "Rylai's Crystal Scepter"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6665,
              "name": "Jak'Sho, The Protean",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9101,
              "name": "Absorb Life"
            },
            {
              "id": 9105,
              "name": "Legend: Haste"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Volibear",
    "name": "Volibear",
    "title": "the Relentless Storm",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 3,
    "blurb": "To those who still revere him, the Volibear is the storm made manifest. Destructive, wild, and stubbornly resolute, he existed before mortals walked the Freljord's tundra, and is fiercely protective of the lands that he and his demi-god kin created...",
    "passive": {
      "name": "The Relentless Storm",
      "text": "Volibear's Attacks and abilities grant Attack Speed, and eventually cause his Attacks to deal bonus magic damage to nearby enemies."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Thundering Smash",
        "text": "Volibear gains speed towards enemies, Stunning and damaging the first one he Attacks.",
        "dmg": "90 + 120% bonus AD physical damage",
        "cost": "Mana 50",
        "cd": "14 → 10s"
      },
      {
        "key": "W",
        "name": "Frenzied Maul",
        "text": "Volibear damages an enemy, applying on-hit effects and marking them. Casting this ability again on the same target deals bonus damage and Heals Volibear.",
        "dmg": "105 + 100% AD + 6% of his bonus health physical damage",
        "cost": "Mana 30/35/40/45/50",
        "cd": "5s"
      },
      {
        "key": "E",
        "name": "Sky Splitter",
        "text": "Volibear summons a lightning bolt at a location, dealing damage and Slowing enemies while granting Volibear a Shield if he's inside the blast radius.",
        "dmg": "200 + 80% AP + 15% of target's max HP magic damage",
        "cost": "Mana 60",
        "cd": "14s"
      },
      {
        "key": "R",
        "name": "Stormbringer",
        "text": "Volibear leaps to a target location, Slowing and damaging enemies beneath him while gaining bonus Health. Enemy towers near his landing location become temporarily disabled.",
        "dmg": "700 + 250% bonus AD + 125% AP physical damage",
        "cost": "Mana 100",
        "cd": "160/135/110s"
      }
    ],
    "counters": {
      "best": {
        "name": "Illaoi",
        "id": 420,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Illaoi",
          "id": 420,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Teemo",
          "id": 17,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Sett",
          "id": 875,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Tryndamere",
          "id": 23,
          "winPrc": 67,
          "games": 6
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "A",
      "winPrc": 56,
      "pickRate": 1.98,
      "games": 84,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Warwick",
    "name": "Warwick",
    "title": "the Uncaged Wrath of Zaun",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 3,
    "blurb": "Warwick is a monster who hunts the gray alleys of Zaun. Transformed by agonizing experiments, his body is fused with an intricate system of chambers and pumps, machinery filling his veins with alchemical rage. He bursts from the shadows to prey upon...",
    "passive": {
      "name": "Eternal Hunger",
      "text": "Warwick's basic attacks deal bonus magic damage. If Warwick is below 50% health, he heals the same amount. If Warwick is below 25% health, this healing triples."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Jaws of the Beast",
        "text": "Warwick lunges forward and bites his target, dealing damage based on their maximum health and healing for damage dealt.",
        "dmg": "10% of target's max HP + 120% AD + 100% AP magic damage",
        "cost": "Mana 80/85/90/95/100",
        "cd": "8 → 6s"
      },
      {
        "key": "W",
        "name": "Blood Hunt",
        "text": "Warwick senses enemies below 50% health, gaining Move Speed toward and attack speed against them. When they fall below 25% health, he frenzies and these bonuses triple.",
        "cost": "Mana 55",
        "cd": "80 → 40s"
      },
      {
        "key": "E",
        "name": "Primal Howl",
        "text": "Warwick gains damage reduction for 2.5 seconds. At the end, or if re-activated, he howls, causing nearby enemies to flee for 1 second.",
        "dmg": "55%",
        "cost": "Mana 40",
        "cd": "15 → 11s"
      },
      {
        "key": "R",
        "name": "Infinite Duress",
        "text": "Warwick leaps in a direction (scaling with his bonus Move Speed), suppressing the first champion he collides with for 1.5 seconds.",
        "dmg": "525 + 167% bonus AD magic damage",
        "cost": "Mana 100",
        "cd": "110/90/70s"
      }
    ],
    "counters": {
      "best": {
        "name": "Shyvana",
        "id": 102,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Shyvana",
          "id": 102,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Lillia",
          "id": 876,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Viego",
          "id": 234,
          "winPrc": 33,
          "games": 6
        }
      ],
      "strong": [
        {
          "name": "Zac",
          "id": 154,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Udyr",
          "id": 77,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Kayn",
          "id": 141,
          "winPrc": 67,
          "games": 9
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "S+",
      "winPrc": 55,
      "pickRate": 3.82,
      "games": 164,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8242,
              "name": "Unflinching"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "MonkeyKing",
    "name": "Wukong",
    "title": "the Monkey King",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 3,
    "blurb": "Wukong is a vastayan trickster who uses his strength, agility, and intelligence to confuse his opponents and gain the upper hand. After finding a lifelong friend in the warrior known as Master Yi, Wukong became the last student of the ancient martial...",
    "passive": {
      "name": "Stone Skin",
      "text": "Wukong gains stacking armor and max health regeneration while fighting champions and monsters."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Crushing Blow",
        "text": "Wukong's next attack gains attack range, deals bonus damage, and reduces the target's armor for a few seconds.",
        "dmg": "120 + 55% bonus AD physical damage",
        "cost": "Mana 20",
        "cd": "8 → 6s"
      },
      {
        "key": "W",
        "name": "Warrior Trickster",
        "text": "Wukong becomes Invisible and dashes in a direction, leaving behind a clone that will attack nearby enemies.",
        "dmg": "55% physical damage",
        "cost": "Mana 60/55/50/45/40",
        "cd": "20 → 16s"
      },
      {
        "key": "E",
        "name": "Nimbus Strike",
        "text": "Wukong dashes to a targeted enemy and sends out images to attack enemies near his target, dealing damage to each enemy struck.",
        "dmg": "200 + 100% AP magic damage",
        "cost": "Mana 30/35/40/45/50",
        "cd": "10 → 7s"
      },
      {
        "key": "R",
        "name": "Cyclone",
        "text": "Wukong's extends his staff and spins it around repeatedly, gaining Move Speed. Enemies struck take damage and are knocked up.",
        "dmg": "2% of target's max HP + 34.38% AD physical damage",
        "cost": "Mana 100",
        "cd": "130/110/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Shyvana",
        "id": 102,
        "winPrc": 17,
        "games": 6
      },
      "weak": [
        {
          "name": "Shyvana",
          "id": 102,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Vi",
          "id": 254,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Rengar",
          "id": 107,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Viego",
          "id": 234,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Diana",
          "id": 131,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "A",
      "winPrc": 51,
      "pickRate": 2.26,
      "games": 97,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Xayah",
    "name": "Xayah",
    "title": "the Rebel",
    "roles": [
      "Marksman"
    ],
    "difficulty": 5,
    "blurb": "Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan, to...",
    "passive": {
      "name": "Clean Cuts",
      "text": "After using an ability, Xayah's next basic attacks will hit all targets along their path and leave a Feather ."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Double Daggers",
        "text": "Xayah throws two damaging daggers that also drop Feathers she can recall.",
        "dmg": "105 + 50% bonus AD physical damage",
        "cost": "Mana 50",
        "cd": "10 → 8s"
      },
      {
        "key": "W",
        "name": "Deadly Plumage",
        "text": "Xayah creates a storm of blades that increase her Attack Speed and damage while also granting her Move Speed if she attacks a champion.",
        "cost": "Mana 60/55/50/45/40",
        "cd": "20 → 16s"
      },
      {
        "key": "E",
        "name": "Bladecaller",
        "text": "Xayah calls back all her dropped Feathers dealing damage and rooting enemies.",
        "dmg": "95 + 60% bonus AD physical damage",
        "cost": "Mana 30",
        "cd": "12 → 8s"
      },
      {
        "key": "R",
        "name": "Featherstorm",
        "text": "Xayah leaps into the air becoming untargetable and throwing out a fan of daggers, dropping Feathers she can recall.",
        "dmg": "400 + 100% bonus AD physical damage",
        "cost": "Mana 100",
        "cd": "140/120/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Senna",
        "id": 235,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Senna",
          "id": 235,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Caitlyn",
          "id": 51,
          "winPrc": 33,
          "games": 3
        },
        {
          "name": "Kai'Sa",
          "id": 145,
          "winPrc": 42,
          "games": 12
        }
      ],
      "strong": [
        {
          "name": "Ziggs",
          "id": 115,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Sivir",
          "id": 15,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Samira",
          "id": 360,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "A",
      "winPrc": 50,
      "pickRate": 1.77,
      "games": 76,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 2523,
          "name": "Hexoptics C44"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3046,
          "name": "Phantom Dancer"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 70,
              "winPrc": null
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 30,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Xerath",
    "name": "Xerath",
    "title": "the Magus Ascendant",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 8,
    "blurb": "Xerath is an Ascended Magus of ancient Shurima, a being of arcane energy writhing in the broken shards of a magical sarcophagus. For millennia, he was trapped beneath the desert sands, but the rise of Shurima freed him from his ancient prison. Driven...",
    "passive": {
      "name": "Mana Surge",
      "text": "Xerath's basic attacks periodically restore Mana. Whenever Xerath kills a unit, this cooldown is reduced."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Arcanopulse",
        "text": "Fires a long-range beam of energy, dealing magic damage to all targets hit.",
        "dmg": "235 + 90% AP magic damage",
        "cost": "Mana 80/90/100/110/120",
        "cd": "9 → 5s"
      },
      {
        "key": "W",
        "name": "Eye of Destruction",
        "text": "Calls down a barrage of arcane energy, slowing and dealing magic damage to all enemies in an area. Targets in the middle receive additional damage and a stronger slow.",
        "dmg": "190 + 65% AP magic damage",
        "cost": "Mana 80/90/100/110/120",
        "cd": "14 → 10s"
      },
      {
        "key": "E",
        "name": "Shocking Orb",
        "text": "Deals magic damage to an enemy and stuns them.",
        "dmg": "190 + 45% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "13 → 11s"
      },
      {
        "key": "R",
        "name": "Rite of the Arcane",
        "text": "Xerath immobilizes himself and gains numerous long-range barrages.",
        "dmg": "270 + 45% AP magic damage",
        "cost": "Mana 100",
        "cd": "130/115/100s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 48,
      "pickRate": 2.47,
      "games": 105,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 90,
              "winPrc": 56
            },
            {
              "id": 3165,
              "name": "Morellonomicon",
              "pct": 10,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 67,
              "winPrc": 50
            },
            {
              "id": 4628,
              "name": "Horizon Focus",
              "pct": 33,
              "winPrc": 50
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 4628,
              "name": "Horizon Focus",
              "pct": 67,
              "winPrc": 50
            },
            {
              "id": 4646,
              "name": "Stormsurge",
              "pct": 33,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8014,
              "name": "Coup de Grace"
            },
            {
              "id": 8009,
              "name": "Presence of Mind"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Ekko",
        "id": 245,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Ekko",
          "id": 245,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Locke",
          "id": 805,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 78,
          "games": 9
        },
        {
          "name": "LeBlanc",
          "id": 7,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Naafiri",
          "id": 950,
          "winPrc": 67,
          "games": 3
        }
      ]
    }
  },
  {
    "id": "XinZhao",
    "name": "Xin Zhao",
    "title": "the Seneschal of Demacia",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 2,
    "blurb": "Xin Zhao is a resolute warrior loyal to the ruling Lightshield dynasty. Once condemned to the fighting pits of Noxus, he survived countless gladiatorial bouts, but after being freed by Demacian forces, he swore his life and allegiance to these brave...",
    "passive": {
      "name": "Determination",
      "text": "Every third attack deals bonus damage and heals Xin Zhao."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Three Talon Strike",
        "text": "Xin Zhao's next 3 standard attacks deal increased damage with the third attack knocking an opponent into the air.",
        "dmg": "80 + 40% bonus AD physical damage",
        "cost": "Mana 30",
        "cd": "7 → 5s"
      },
      {
        "key": "W",
        "name": "Wind Becomes Lightning",
        "text": "Xin Zhao slashes in front of himself with his spear, then thrusts it forward, slowing affected enemies and marking them as Challenged.",
        "dmg": "70 + 30% AD physical damage",
        "cost": "Mana 60/55/50/45/40",
        "cd": "12 → 8s"
      },
      {
        "key": "E",
        "name": "Audacious Charge",
        "text": "Xin Zhao charges to an enemy, gaining increased Attack Speed and dealing damage to all enemies in the area, slowing them briefly. This Ability gains increased range against Challenged targets.",
        "dmg": "150 + 60% AP magic damage",
        "cost": "Mana 50",
        "cd": "11s"
      },
      {
        "key": "R",
        "name": "Crescent Guard",
        "text": "Xin Zhao passively challenges an enemy he damaged recently. When activated, Xin Zhao deals damage to nearby enemies based on their current Health and knocks non-challenged targets back, becoming impervious to damage dealt by champions outside of the circle created.",
        "dmg": "275 + 100% bonus AD + 110% AP + 15% of target's current health physical damage",
        "cost": "Mana 100",
        "cd": "120/110/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Briar",
        "id": 233,
        "winPrc": 33,
        "games": 3
      },
      "weak": [
        {
          "name": "Briar",
          "id": 233,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Kha'Zix",
          "id": 121,
          "winPrc": 60,
          "games": 5
        },
        {
          "name": "Kayn",
          "id": 141,
          "winPrc": 60,
          "games": 5
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "D",
      "winPrc": 39,
      "pickRate": 1.49,
      "games": 64,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Yasuo",
    "name": "Yasuo",
    "title": "the Unforgiven",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 10,
    "blurb": "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self...",
    "passive": {
      "name": "Way of the Wanderer",
      "text": "Yasuo's Critical Strike Chance is increased. Additionally, Yasuo builds toward a shield whenever he is moving. The shield triggers when he takes damage from a champion or monster."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Steel Tempest",
        "text": "Thrusts forward, damaging all enemies in a line. On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Steel Tempest fires a whirlwind that knocks Airborne . Steel Tempest is treated as a basic attack and scales with all the same things.",
        "dmg": "120 + 105% AD physical damage",
        "cd": "4s"
      },
      {
        "key": "W",
        "name": "Wind Wall",
        "text": "Creates a moving wall that blocks all enemy projectiles for 4 seconds.",
        "cd": "25 → 17s"
      },
      {
        "key": "E",
        "name": "Sweeping Blade",
        "text": "Dashes through target enemy, dealing magic damage. Each cast increases subsequent dash's damage, up to a max amount. Cannot be re-cast on the same enemy for a few seconds. If Steel Tempest is cast while dashing, it will strike as a circle.",
        "dmg": "130 + 20% bonus AD + 60% AP magic damage",
        "cd": "0.5 → 0.1s"
      },
      {
        "key": "R",
        "name": "Last Breath",
        "text": "Blinks to an Airborne enemy champion, dealing physical damage and holding all Airborne enemies in the area in the air. Grants maximum Flow but resets all stacks of Gathering Storm. For a moderate time afterwards, Yasuo's critical strikes gain significant Bonus Armor Penetration.",
        "dmg": "500 + 150% bonus AD physical damage",
        "cd": "70/50/30s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 47,
      "pickRate": 6,
      "games": 255,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 71,
              "winPrc": 80
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 29,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 67,
              "winPrc": 50
            },
            {
              "id": 6672,
              "name": "Kraken Slayer",
              "pct": 33,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 50,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9101,
              "name": "Absorb Life"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Malzahar",
        "id": 90,
        "winPrc": 7,
        "games": 14
      },
      "weak": [
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 7,
          "games": 14
        },
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 33,
          "games": 12
        },
        {
          "name": "Talon",
          "id": 91,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Sylas",
          "id": 517,
          "winPrc": 69,
          "games": 13
        },
        {
          "name": "Katarina",
          "id": 55,
          "winPrc": 67,
          "games": 12
        },
        {
          "name": "Heimerdinger",
          "id": 74,
          "winPrc": 67,
          "games": 3
        }
      ]
    }
  },
  {
    "id": "Yone",
    "name": "Yone",
    "title": "the Unforgotten",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 8,
    "blurb": "In life, he was Yone—half-brother of Yasuo, and renowned student of his village's sword school. But upon his death at the hands of his brother, he found himself hunted by a malevolent entity of the spirit realm, and was forced to slay it with its own...",
    "passive": {
      "name": "Way of the Hunter",
      "text": "Yone deals magic damage with every second Attack. In addition, his critical strike chance is increased."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Mortal Steel",
        "text": "Thrusts forward, damaging all enemies in a line. On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Mortal Steel dashes Yone forward with a gust of wind knocking enemies Airborne.",
        "dmg": "120 + 105% AD physical damage",
        "cd": "4s"
      },
      {
        "key": "W",
        "name": "Spirit Cleave",
        "text": "Cleaves forward, damaging all enemies in a cone. Grants a shield to Yone, the value is increased by the number of champions hit by the swipe. Spirit Cleave's cooldown and cast time scale with attack speed.",
        "dmg": "25 + 6% of target's max HP mixed damage",
        "cd": "14s"
      },
      {
        "key": "E",
        "name": "Soul Unbound",
        "text": "Yone's spirit leaves his body behind, gaining Move Speed. When this ability ends, Yone's spirit is forced back to his body and he repeats a portion of the damage he dealt as a spirit.",
        "dmg": "35% of damage dealt true damage",
        "cd": "22 → 10s"
      },
      {
        "key": "R",
        "name": "Fate Sealed",
        "text": "Yone blinks behind the last champion in a line with a slash so powerful it pulls all enemies hit towards him.",
        "dmg": "300 + 40% bonus AD mixed damage",
        "cd": "120/100/80s"
      }
    ],
    "build": {
      "role": "Mid",
      "tier": "S+",
      "winPrc": 53,
      "pickRate": 3.88,
      "games": 165,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3153,
          "name": "Blade of The Ruined King"
        },
        {
          "id": 6673,
          "name": "Immortal Shieldbow"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 80,
              "winPrc": 50
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 20,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 67,
              "winPrc": 100
            },
            {
              "id": 3091,
              "name": "Wit's End",
              "pct": 33,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9101,
              "name": "Absorb Life"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8444,
              "name": "Second Wind"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Akali",
        "id": 84,
        "winPrc": 17,
        "games": 6
      },
      "weak": [
        {
          "name": "Akali",
          "id": 84,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Veigar",
          "id": 45,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 33,
          "games": 6
        }
      ],
      "strong": [
        {
          "name": "Katarina",
          "id": 55,
          "winPrc": 83,
          "games": 6
        },
        {
          "name": "Kassadin",
          "id": 38,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Xerath",
          "id": 101,
          "winPrc": 75,
          "games": 4
        }
      ]
    }
  },
  {
    "id": "Yorick",
    "name": "Yorick",
    "title": "Shepherd of Souls",
    "roles": [
      "Fighter",
      "Tank"
    ],
    "difficulty": 6,
    "blurb": "The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking wraiths that he gathers to him. Yorick's monstrous...",
    "passive": {
      "name": "Shepherd of Souls",
      "text": "The Cursed Horde: Yorick can summon Mist Walkers to swarm and attack nearby enemies."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Last Rites",
        "text": "Yorick deals bonus damage on his next attack and heals himself. If the target is a champion or large monster or if the target dies, a grave will be dug.",
        "dmg": "Last Rites: 130 + 50% AD physical damage",
        "cost": "Mana 20",
        "cd": "6 → 4s"
      },
      {
        "key": "W",
        "name": "Dark Procession",
        "text": "Yorick summons a destructible wall at target location that will block enemy movement.",
        "cost": "Mana 70",
        "cd": "20 → 12s"
      },
      {
        "key": "E",
        "name": "Mourning Mist",
        "text": "Yorick throws a globule of Black Mist that reduces armor, damages, slows and marks enemies. Summoned units gain move speed when moving towards marked targets.",
        "dmg": "8% of target's max HP + 3% per 100 AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "12 → 8s"
      },
      {
        "key": "R",
        "name": "Eulogy of the Isles",
        "text": "Yorick summons the Maiden of the Mist that causes Yorick's attacks against the Maiden's target to deal bonus damage. The Maiden will also automatically raise Walkers from dead enemies.",
        "cost": "Mana 100",
        "cd": "160/130/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Yone",
        "id": 777,
        "winPrc": 14,
        "games": 7
      },
      "weak": [
        {
          "name": "Yone",
          "id": 777,
          "winPrc": 14,
          "games": 7
        },
        {
          "name": "Mordekaiser",
          "id": 82,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Teemo",
          "id": 17,
          "winPrc": 29,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Renekton",
          "id": 58,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Zaahen",
          "id": 904,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Trundle",
          "id": 48,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 45,
      "pickRate": 2.07,
      "games": 88,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 3084,
          "name": "Heartsteel"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 3068,
          "name": "Sunfire Aegis"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4401,
              "name": "Force of Nature",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3065,
              "name": "Spirit Visage",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3110,
              "name": "Frozen Heart",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Resolve",
          "treeId": 8400,
          "keystone": {
            "id": 8437,
            "name": "Grasp of the Undying"
          },
          "minors": [
            {
              "id": 8446,
              "name": "Demolish"
            },
            {
              "id": 8429,
              "name": "Conditioning"
            },
            {
              "id": 8451,
              "name": "Overgrowth"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Yunara",
    "name": "Yunara",
    "title": "the Unbroken Faith",
    "roles": [
      "Marksman"
    ],
    "difficulty": 4,
    "blurb": "Unwavering in her devotion to Ionia, Yunara has spent centuries cloistered away in the spirit realm honing her skills with the Aion Er'na, a legendary Kinkou relic. Despite all she has sacrificed, Yunara's vow to rid the land of disharmony and strife...",
    "passive": {
      "name": "Vow of the First Lands",
      "text": "Yunara's Critical Strikes deal bonus magic damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Cultivation of Spirit",
        "text": "Yunara gains Attack Speed, bonus damage On-Hit, and her Attacks spread to nearby enemies."
      },
      {
        "key": "W",
        "name": "Arc of Judgment | Arc of Ruin",
        "text": "Yunara fires a spinning prayer bead that deals damage and slows enemies. While in her Transcendent State she instead fires off a laser that deals damage and slows enemies."
      },
      {
        "key": "E",
        "name": "Kanmei's Steps | Untouchable Shadow",
        "text": "Yunara gains Move Speed and becomes Ghosted. While in her Transcendent State she instead dashes in a direction."
      },
      {
        "key": "R",
        "name": "Transcend One's Self",
        "text": "Yunara enters a Transcendent State that upgrades her basic Abilities."
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 43,
      "pickRate": 2.14,
      "games": 92,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6672,
          "name": "Kraken Slayer"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 2512,
          "name": "Fiendhunter Bolts"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 80,
              "winPrc": 25
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 20,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 67,
              "winPrc": 0
            },
            {
              "id": 2523,
              "name": "Hexoptics C44",
              "pct": 33,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3139,
              "name": "Mercurial Scimitar",
              "pct": 50,
              "winPrc": 0
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8017,
              "name": "Cut Down"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8304,
              "name": "Magical Footwear"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5011,
            "name": "Health"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Jhin",
        "id": 202,
        "winPrc": 13,
        "games": 8
      },
      "weak": [
        {
          "name": "Jhin",
          "id": 202,
          "winPrc": 13,
          "games": 8
        },
        {
          "name": "Caitlyn",
          "id": 51,
          "winPrc": 14,
          "games": 7
        },
        {
          "name": "Jinx",
          "id": 222,
          "winPrc": 29,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Ziggs",
          "id": 115,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Ashe",
          "id": 22,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Miss Fortune",
          "id": 21,
          "winPrc": 60,
          "games": 10
        }
      ]
    }
  },
  {
    "id": "Yuumi",
    "name": "Yuumi",
    "title": "the Magical Cat",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 2,
    "blurb": "A magical cat from Bandle City, Yuumi was once the familiar of a yordle enchantress, Norra. When her master mysteriously disappeared, Yuumi became the Keeper of Norra's sentient Book of Thresholds, traveling through portals in its pages to search for...",
    "passive": {
      "name": "Feline Friendship",
      "text": "Periodically, when Yuumi strikes a champion with an attack or ability, she restores health to herself and the next ally she Attaches to. While Attached, Yuumi generates a special bond with her allies. The ally with the strongest bond enhances Yuumi's abilities while she is Attached to them."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Prowling Projectile",
        "text": "Yuumi fires a missile, dealing damage and slowing first target hit. It deals bonus damage and an enchanced slow if it takes at least 1.35 seconds to get to its target. While on her Best Friend, the slow is always enhanced and grants bonus On-Hit damage to her ally. While Attached, the missile can be controlled with your cursor for a brief period.",
        "dmg": "235 + 20% AP magic damage",
        "cost": "Mana 50/55/60/65/70/75",
        "cd": "6.5s"
      },
      {
        "key": "W",
        "name": "You and Me!",
        "text": "Yuumi dashes to a target ally, becoming untargetable from everything except turrets. While on her Best Friend, she gains Heal & Shield Power and grants her Ally On-Hit healing.",
        "cd": "10/5/0s"
      },
      {
        "key": "E",
        "name": "Zoomies",
        "text": "Shields Yuumi and boosts Move Speed and Attack Speed. If she's attached, she passes it to her ally instead.",
        "cost": "Mana 80/90/100/110/120",
        "cd": "10s"
      },
      {
        "key": "R",
        "name": "Final Chapter",
        "text": "Yuumi channels five waves that damage enemies and heal allies. Yuumi can move, attach, and cast Zoomies! while channeling. While on her Best Friend, this spell also follows her mouse.",
        "dmg": "175 + 25% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/110/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Nami",
        "id": 267,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Nami",
          "id": 267,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Lulu",
          "id": 117,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Lux",
          "id": 99,
          "winPrc": 43,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Karma",
          "id": 43,
          "winPrc": 80,
          "games": 5
        },
        {
          "name": "Camille",
          "id": 164,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Zyra",
          "id": 143,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "D",
      "winPrc": 47,
      "pickRate": 2.3,
      "games": 96,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6617,
          "name": "Moonstone Renewer"
        },
        {
          "id": 3158,
          "name": "Ionian Boots of Lucidity"
        },
        {
          "id": 3107,
          "name": "Redemption"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3504,
              "name": "Ardent Censer",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6616,
              "name": "Staff of Flowing Water",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 6621,
              "name": "Dawncore",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3222,
              "name": "Mikael's Blessing",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8214,
            "name": "Summon Aery"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Resolve",
          "treeId": 8400,
          "minors": [
            {
              "id": 8473,
              "name": "Bone Plating"
            },
            {
              "id": 8453,
              "name": "Revitalize"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5013,
            "name": "Tenacity and Slow Resist"
          }
        ]
      }
    }
  },
  {
    "id": "Zaahen",
    "name": "Zaahen",
    "title": "The Unsundered",
    "roles": [
      "Fighter",
      "Assassin"
    ],
    "difficulty": 2,
    "blurb": "A fallen god wielding both divine and profane power, Zaahen hunts his fellow Darkin while defying the corruption that threatens to consume him. Once willingly sealed within his glaive to stave off madness, he now walks free, noble in heart and vicious...",
    "passive": {
      "name": "Cultivation of War",
      "text": "Zaahen's attacks and abilities against enemy champions grant him stacks of Determination, gaining bonus Attack Damage per stack. When filled with Determination, Zaahen gains increased Attack Damage and can revive."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "The Darkin Glaive",
        "text": "Zaahen slashes twice on his next attack, dealing bonus damage and healing himself. Zaahen can recast this ability to have his next attack deal bonus damage and knock up his target."
      },
      {
        "key": "W",
        "name": "Dreaded Return",
        "text": "Zaahen stabs in a direction, damaging enemies hit, then pulls them toward him."
      },
      {
        "key": "E",
        "name": "Aureate Rush",
        "text": "Zaahen dashes to a location and slices around himself."
      },
      {
        "key": "R",
        "name": "Grim Deliverance",
        "text": "Zaahen rises then stabs downward, damaging enemies and healing for a portion of the damage dealt."
      }
    ],
    "counters": {
      "best": {
        "name": "Darius",
        "id": 122,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Darius",
          "id": 122,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Yorick",
          "id": 83,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Sett",
          "id": 875,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Teemo",
          "id": 17,
          "winPrc": 67,
          "games": 6
        },
        {
          "name": "Jax",
          "id": 24,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Top",
      "tier": "D",
      "winPrc": 48,
      "pickRate": 1.58,
      "games": 67,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1054,
          "name": "Doran's Shield"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6631,
          "name": "Stridebreaker"
        },
        {
          "id": 3047,
          "name": "Plated Steelcaps"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3742,
              "name": "Dead Man's Plate",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8236,
              "name": "Gathering Storm"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Zac",
    "name": "Zac",
    "title": "the Secret Weapon",
    "roles": [
      "Tank",
      "Fighter"
    ],
    "difficulty": 8,
    "blurb": "Zac is the product of a toxic spill that ran through a chemtech seam and pooled in an isolated cavern deep in Zaun's Sump. Despite such humble origins, Zac has grown from primordial ooze into a thinking being who dwells in the city's pipes, occasionally...",
    "passive": {
      "name": "Cell Division",
      "text": "Each time Zac hits an enemy with an ability, he sheds a chunk of himself that can be reabsorbed to restore Health. Upon taking fatal damage, Zac splits into 4 bloblets that attempt to recombine. If any bloblets remain, he will revive with an amount of Health depending on the Health of the surviving bloblets. Each bloblet has a percentage of Zac's maximum Health, Armor and Magic Resistance. This ability has a 5 minute cooldown."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Stretching Strikes",
        "text": "Zac stretches an arm, grabbing an enemy. Attacking a different enemy will cause him to throw both targets towards each other.",
        "dmg": "100 + 30% AP + 3% of Zac's maximum health magic damage",
        "cost": "Health 8",
        "cd": "14 → 8s"
      },
      {
        "key": "W",
        "name": "Unstable Matter",
        "text": "Zac explodes outward towards nearby enemies, dealing a percentage of their maximum health as magic damage.",
        "dmg": "80 + 8% (+ 3% per 100 AP) of target's max HP magic damage",
        "cost": "Health 4",
        "cd": "5s"
      },
      {
        "key": "E",
        "name": "Elastic Slingshot",
        "text": "Zac attaches his arms to the ground and stretches back, launching himself forward.",
        "dmg": "240 + 80% AP magic damage",
        "cost": "Health 4",
        "cd": "22 → 10s"
      },
      {
        "key": "R",
        "name": "Let's Bounce!",
        "text": "Zac bounces four times, knocking up enemies hit and slowing them.",
        "dmg": "280 + 40% AP magic damage",
        "cd": "120/105/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Warwick",
        "id": 19,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Warwick",
          "id": 19,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Briar",
          "id": 233,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Graves",
          "id": 104,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Master Yi",
          "id": 11,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Hecarim",
          "id": 120,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Jungle",
      "tier": "A",
      "winPrc": 55,
      "pickRate": 1.35,
      "games": 58,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 11,
          "name": "Smite"
        }
      ],
      "startingItems": [
        {
          "id": 1101,
          "name": "Scorchclaw Pup"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 6610,
          "name": "Sundered Sky"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6333,
              "name": "Death's Dance",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3071,
              "name": "Black Cleaver",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3033,
              "name": "Mortal Reminder",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8010,
            "name": "Conqueror"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9104,
              "name": "Legend: Alacrity"
            },
            {
              "id": 8299,
              "name": "Last Stand"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Zed",
    "name": "Zed",
    "title": "the Master of Shadows",
    "roles": [
      "Assassin"
    ],
    "difficulty": 7,
    "blurb": "Utterly ruthless and without mercy, Zed is the leader of the Order of Shadow, an organization he created with the intent of militarizing Ionia's magical and martial traditions to drive out Noxian invaders. During the war, desperation led him to unlock...",
    "passive": {
      "name": "Contempt for the Weak",
      "text": "Zed's basic attacks against low health targets deals bonus Magic Damage. This effect can only occur once every few seconds against the same enemy champion."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Razor Shuriken",
        "text": "Zed and his shadows throw their shurikens. Each shuriken deals damage to every enemy hit.",
        "dmg": "240 + 100% bonus AD physical damage",
        "cost": "Energy 75/70/65/60/55",
        "cd": "6s"
      },
      {
        "key": "W",
        "name": "Living Shadow",
        "text": "Passive: Zed gains energy whenever he and his shadows strike an enemy with the same ability. Energy can only be gained once per cast ability. Active: Zed's shadow dashes forward, remaining in place for a few seconds. Reactivating Living Shadow will cause Zed to switch positions with this shadow.",
        "cost": "Energy 40/35/30/25/20",
        "cd": "20 → 16s"
      },
      {
        "key": "E",
        "name": "Shadow Slash",
        "text": "Zed and his Shadows slash, dealing damage to nearby enemies. Enemies hit by a Shadow's slash are slowed.",
        "dmg": "170 + 80% bonus AD physical damage",
        "cost": "Energy 40",
        "cd": "5 → 3s"
      },
      {
        "key": "R",
        "name": "Death Mark",
        "text": "Zed becomes untargetable and dashes to an enemy champion, marking them. After 3 seconds the mark triggers, repeating a portion of all the damage Zed dealt to the target while they were marked.",
        "dmg": "100% AD + 55% of damage stored physical damage",
        "cd": "120/110/100s"
      }
    ],
    "counters": {
      "best": {
        "name": "Syndra",
        "id": 134,
        "winPrc": 17,
        "games": 6
      },
      "weak": [
        {
          "name": "Syndra",
          "id": 134,
          "winPrc": 17,
          "games": 6
        },
        {
          "name": "Malzahar",
          "id": 90,
          "winPrc": 29,
          "games": 7
        },
        {
          "name": "Fizz",
          "id": 105,
          "winPrc": 29,
          "games": 7
        }
      ],
      "strong": [
        {
          "name": "Locke",
          "id": 805,
          "winPrc": 75,
          "games": 8
        },
        {
          "name": "Ekko",
          "id": 245,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Irelia",
          "id": 39,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "B",
      "winPrc": 49,
      "pickRate": 3.88,
      "games": 165,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 1055,
          "name": "Doran's Blade"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6692,
          "name": "Eclipse"
        },
        {
          "id": 3111,
          "name": "Mercury's Treads"
        },
        {
          "id": 3142,
          "name": "Youmuu's Ghostblade"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 6676,
              "name": "The Collector",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6694,
              "name": "Serylda's Grudge",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3026,
              "name": "Guardian Angel",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3814,
              "name": "Edge of Night",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Domination",
          "treeId": 8100,
          "keystone": {
            "id": 8112,
            "name": "Electrocute"
          },
          "minors": [
            {
              "id": 8139,
              "name": "Taste of Blood"
            },
            {
              "id": 8140,
              "name": "Grisly Mementos"
            },
            {
              "id": 8105,
              "name": "Relentless Hunter"
            }
          ]
        },
        "secondary": {
          "tree": "Precision",
          "treeId": 8000,
          "minors": [
            {
              "id": 8009,
              "name": "Presence of Mind"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Zeri",
    "name": "Zeri",
    "title": "The Spark of Zaun",
    "roles": [
      "Marksman"
    ],
    "difficulty": 6,
    "blurb": "A headstrong, spirited young woman from Zaun's working-class, Zeri channels her electric magic to charge herself and her custom-crafted gun. Her volatile power mirrors her emotions, its sparks reflecting her lightning-fast approach to life. Deeply...",
    "passive": {
      "name": "Living Battery",
      "text": "Zeri's Attacks deal magic damage and are treated as Abilities. Moving and casting Burst Fire stores up energy in Zeri's Sparkpack. When fully charged her next Attack deals bonus damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Burst Fire",
        "text": "Burst Fire shoots a burst of 7 rounds that deal attack damage to the first enemy hit. This Ability is treated as an Attack.",
        "dmg": "23 + 120% AD physical damage",
        "cost": "Cost 0",
        "cd": "1s"
      },
      {
        "key": "W",
        "name": "Ultrashock Laser",
        "text": "Zeri fires an electric pulse that slows and damages the first enemy hit. If the pulse hits a wall it expands into a long range laser.",
        "dmg": "190 + 130% AD + 25% AP magic damage",
        "cost": "Mana 50/60/70/80/90",
        "cd": "12 → 8s"
      },
      {
        "key": "E",
        "name": "Spark Surge",
        "text": "Zeri dashes a short distance and energizes Burst Fire to pierce through enemies. She will vault and grind over any terrain she touches.",
        "dmg": "28 + 12% bonus AD + 20% AP",
        "cost": "Mana 90/85/80/75/70",
        "cd": "22 → 18s"
      },
      {
        "key": "R",
        "name": "Lightning Crash",
        "text": "Zeri discharges a nova of electricity and overcharges herself, gaining increased damage and stacking Move Speed that refreshes and gets stronger every time she hits an enemy champion. While overcharged, Burst fire becomes a faster triple shot that chains lightning between enemies.",
        "dmg": "375 + 85% bonus AD + 110% AP mixed damage",
        "cost": "Mana 100",
        "cd": "80/75/70s"
      }
    ],
    "counters": {
      "best": null,
      "weak": [],
      "strong": [
        {
          "name": "Caitlyn",
          "id": 51,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Ziggs",
          "id": 115,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Ashe",
          "id": 22,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 58,
      "pickRate": 0.93,
      "games": 40,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 21,
          "name": "Barrier"
        }
      ],
      "startingItems": [
        {
          "id": 1086,
          "name": "Doran's Bow"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 2523,
          "name": "Hexoptics C44"
        },
        {
          "id": 3006,
          "name": "Berserker's Greaves"
        },
        {
          "id": 3046,
          "name": "Phantom Dancer"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3031,
              "name": "Infinity Edge",
              "pct": 70,
              "winPrc": null
            },
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 30,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3036,
              "name": "Lord Dominik's Regards",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3094,
              "name": "Rapid Firecannon",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Precision",
          "treeId": 8000,
          "keystone": {
            "id": 8008,
            "name": "Lethal Tempo"
          },
          "minors": [
            {
              "id": 9111,
              "name": "Triumph"
            },
            {
              "id": 9103,
              "name": "Legend: Bloodline"
            },
            {
              "id": 8014,
              "name": "Coup de Grace"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            }
          ]
        },
        "statShards": [
          {
            "id": 5005,
            "name": "Attack Speed"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Ziggs",
    "name": "Ziggs",
    "title": "the Hexplosives Expert",
    "roles": [
      "Mage"
    ],
    "difficulty": 4,
    "blurb": "With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town...",
    "passive": {
      "name": "Short Fuse",
      "text": "Periodically, Ziggs' next basic attack deals bonus magic damage. This cooldown is reduced whenever Ziggs uses an ability."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Bouncing Bomb",
        "text": "Ziggs throws a bouncing bomb that deals magic damage.",
        "dmg": "285 + 65% AP magic damage",
        "cost": "Mana 50/55/60/65/70",
        "cd": "6 → 4s"
      },
      {
        "key": "W",
        "name": "Satchel Charge",
        "text": "Ziggs flings an explosive charge that detonates after a delay, or when this ability is activated again. The explosion deals magic damage to enemies, knocking them away. Ziggs is also knocked away, but takes no damage. Ziggs can use the Satchel to hexplode vulnerable enemy turrets.",
        "dmg": "210 + 50% AP magic damage",
        "cost": "Mana 80",
        "cd": "20 → 12s"
      },
      {
        "key": "E",
        "name": "Hexplosive Minefield",
        "text": "Ziggs scatters proximity mines that detonate on enemy contact, dealing magic damage and slowing. Successive mine detonations on the same target deal reduced damage.",
        "dmg": "190 + 30% AP magic damage",
        "cost": "Mana 70/80/90/100/110",
        "cd": "16s"
      },
      {
        "key": "R",
        "name": "Mega Inferno Bomb",
        "text": "Ziggs deploys his ultimate creation, the Mega Inferno Bomb, hurling it an enormous distance. Enemies in the primary blast zone take more damage than those farther away.",
        "dmg": "400 + 73.33% AP magic damage",
        "cost": "Mana 100",
        "cd": "120/95/70s"
      }
    ],
    "build": {
      "role": "Bot",
      "tier": "D",
      "winPrc": 43,
      "pickRate": 2.77,
      "games": 119,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 100,
              "winPrc": 50
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 75,
              "winPrc": 67
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 25,
              "winPrc": 0
            }
          ]
        },
        {
          "label": "6th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 50,
              "winPrc": 100
            },
            {
              "id": 3041,
              "name": "Mejai's Soulstealer",
              "pct": 50,
              "winPrc": 100
            }
          ]
        },
        {
          "label": "Optional",
          "options": [
            {
              "id": 2503,
              "name": "Blackfire Torch",
              "pct": 100,
              "winPrc": 100
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 5
        },
        {
          "key": "E",
          "levels": 5
        },
        {
          "key": "R",
          "levels": 3
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8304,
              "name": "Magical Footwear"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    },
    "counters": {
      "best": {
        "name": "Ashe",
        "id": 22,
        "winPrc": 14,
        "games": 7
      },
      "weak": [
        {
          "name": "Ashe",
          "id": 22,
          "winPrc": 14,
          "games": 7
        },
        {
          "name": "Tristana",
          "id": 18,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Xayah",
          "id": 498,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Viktor",
          "id": 112,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Jhin",
          "id": 202,
          "winPrc": 71,
          "games": 7
        },
        {
          "name": "Lucian",
          "id": 236,
          "winPrc": 60,
          "games": 5
        }
      ]
    }
  },
  {
    "id": "Zilean",
    "name": "Zilean",
    "title": "the Chronokeeper",
    "roles": [
      "Support",
      "Mage"
    ],
    "difficulty": 6,
    "blurb": "Once a powerful Icathian mage, Zilean became obsessed with the passage of time after witnessing his homeland's destruction by the Void. Unable to spare even a minute to grieve the catastrophic loss, he called upon ancient temporal magic to divine all...",
    "passive": {
      "name": "Time In A Bottle",
      "text": "Zilean stores time as Experience and can grant it to his allies. When he has enough Experience to finish an ally's level up, he can right-click them to impart it. Zilean receives as much Experience as he gives."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Time Bomb",
        "text": "Tosses a bomb to target area that sticks to units that come near it (prioritizes Champions). It detonates after 3 seconds, dealing area of effect damage. If a Time Bomb is detonated early by another Time Bomb, it also stuns enemies.",
        "dmg": "300 + 90% AP magic damage",
        "cost": "Mana 60/65/70/75/80",
        "cd": "10 → 8s"
      },
      {
        "key": "W",
        "name": "Rewind",
        "text": "Zilean can prepare himself for future confrontations, reducing the cooldowns of his other basic abilities.",
        "cost": "Mana 35",
        "cd": "14 → 6s"
      },
      {
        "key": "E",
        "name": "Time Warp",
        "text": "Zilean bends time around any unit, decreasing an enemy's Move Speed or increasing an ally's Move Speed for a short time.",
        "cost": "Mana 50",
        "cd": "15s"
      },
      {
        "key": "R",
        "name": "Chronoshift",
        "text": "Zilean places a protective time rune on an allied champion, teleporting the champion back in time if they take lethal damage.",
        "cost": "Mana 125/150/175",
        "cd": "120/90/60s"
      }
    ],
    "counters": {
      "best": {
        "name": "Lulu",
        "id": 117,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Lulu",
          "id": 117,
          "winPrc": 25,
          "games": 4
        },
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 40,
          "games": 5
        }
      ],
      "strong": [
        {
          "name": "Lux",
          "id": 99,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Morgana",
          "id": 25,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Blitzcrank",
          "id": 53,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "A",
      "winPrc": 59,
      "pickRate": 1.41,
      "games": 59,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4005,
          "name": "Imperial Mandate"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 6653,
          "name": "Liandry's Torment"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4645,
              "name": "Shadowflame",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Zoe",
    "name": "Zoe",
    "title": "the Aspect of Twilight",
    "roles": [
      "Mage"
    ],
    "difficulty": 5,
    "blurb": "As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon, heralding major events that reshape worlds. Her mere presence warps the arcane mathematics governing realities, sometimes causing cataclysms without...",
    "passive": {
      "name": "More Sparkles!",
      "text": "Zoe's next basic attack after casting a spell deals bonus magic damage."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Paddle Star!",
        "text": "Zoe fires a missile that she can redirect in flight. Deals more damage the longer it flies in a straight line.",
        "dmg": "50 + 60% AP magic damage",
        "cost": "Mana 40/45/50/55/60",
        "cd": "8.5 → 6.5s"
      },
      {
        "key": "W",
        "name": "Spell Thief",
        "text": "Zoe can pick up the remnants of enemy summoner spell and active item casts and cast them once herself. Whenever she casts a summoner spell, she gains 3 missiles that fire at the nearest target.",
        "dmg": "65 + 13.3% AP magic damage",
        "cost": "Health 1",
        "cd": "0.25s"
      },
      {
        "key": "E",
        "name": "Sleepy Trouble Bubble",
        "text": "Causes the target to become drowsy, then fall asleep. While asleep, the target's Magic Resist is reduced. The first source of damage that breaks the sleep is doubled, up to a cap.",
        "dmg": "230 + 45% AP magic damage",
        "cost": "Mana 80",
        "cd": "16 → 12s"
      },
      {
        "key": "R",
        "name": "Portal Jump",
        "text": "Blink to a nearby position for 1 second. Then blink back.",
        "cost": "Mana 40",
        "cd": "11/8/5s"
      }
    ],
    "counters": {
      "best": {
        "name": "Irelia",
        "id": 39,
        "winPrc": 25,
        "games": 4
      },
      "weak": [
        {
          "name": "Irelia",
          "id": 39,
          "winPrc": 25,
          "games": 4
        }
      ],
      "strong": [
        {
          "name": "Ahri",
          "id": 103,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Lux",
          "id": 99,
          "winPrc": 67,
          "games": 3
        }
      ]
    },
    "build": {
      "role": "Mid",
      "tier": "D",
      "winPrc": 35,
      "pickRate": 1.08,
      "games": 46,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 12,
          "name": "Teleport"
        }
      ],
      "startingItems": [
        {
          "id": 1056,
          "name": "Doran's Ring"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 6655,
          "name": "Luden's Echo"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 4645,
          "name": "Shadowflame"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 6653,
              "name": "Liandry's Torment",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "keystone": {
            "id": 8369,
            "name": "First Strike"
          },
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8345,
              "name": "Biscuit Delivery"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "secondary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  },
  {
    "id": "Zyra",
    "name": "Zyra",
    "title": "Rise of the Thorns",
    "roles": [
      "Mage",
      "Support"
    ],
    "difficulty": 7,
    "blurb": "Born in an ancient, sorcerous catastrophe, Zyra is the wrath of nature given form—an alluring hybrid of plant and human, kindling new life with every step. She views the many mortals of Valoran as little more than prey for her seeded progeny, and thinks...",
    "passive": {
      "name": "Garden of Thorns",
      "text": "Seeds spawn around Zyra periodically, becoming faster with level. Zyra can cast Deadly Spines or Grasping Roots near seeds to grow plants, who fight for Zyra."
    },
    "abilities": [
      {
        "key": "Q",
        "name": "Deadly Spines",
        "text": "Thick vines spread through the ground and explode into spines, dealing magic damage to enemies within the area. If cast near a seed, Deadly Spines grows a Thorn Spitter plant, which fires at enemies from afar.",
        "dmg": "220 + 65% AP magic damage",
        "cost": "Mana 55",
        "cd": "7 → 5s"
      },
      {
        "key": "W",
        "name": "Rampant Growth",
        "text": "Zyra plants a seed, lasting up to 60 seconds. Deadly Spines and Grasping Roots cast near seeds will turn them into plants who fight for Zyra. Zyra can store multiple seeds at once, and killing enemies reduces Rampant Growth's recharge time.",
        "cost": "Health 1"
      },
      {
        "key": "E",
        "name": "Grasping Roots",
        "text": "Zyra sends forth vines through the ground to ensnare her target, dealing damage and rooting enemies they come across. If cast near a seed, Grasping Roots grows a Vine Lasher, whose short range attacks reduce enemy Move Speed.",
        "dmg": "200 + 60% AP magic damage",
        "cost": "Mana 70/75/80/85/90",
        "cd": "12s"
      },
      {
        "key": "R",
        "name": "Stranglethorns",
        "text": "Zyra summons a twisted thicket at her target location, dealing damage to enemies as it expands and knocking them airborne as it contracts. Plants within the thicket are enraged.",
        "dmg": "350 + 70% AP magic damage",
        "cost": "Mana 100",
        "cd": "110/100/90s"
      }
    ],
    "counters": {
      "best": {
        "name": "Thresh",
        "id": 412,
        "winPrc": 20,
        "games": 5
      },
      "weak": [
        {
          "name": "Thresh",
          "id": 412,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Vel'Koz",
          "id": 161,
          "winPrc": 20,
          "games": 5
        },
        {
          "name": "Yuumi",
          "id": 350,
          "winPrc": 33,
          "games": 3
        }
      ],
      "strong": [
        {
          "name": "Lux",
          "id": 99,
          "winPrc": 75,
          "games": 4
        },
        {
          "name": "Pyke",
          "id": 555,
          "winPrc": 67,
          "games": 3
        },
        {
          "name": "Leona",
          "id": 89,
          "winPrc": 57,
          "games": 7
        }
      ]
    },
    "build": {
      "role": "Support",
      "tier": "D",
      "winPrc": 44,
      "pickRate": 2.22,
      "games": 93,
      "summonerSpells": [
        {
          "id": 4,
          "name": "Flash"
        },
        {
          "id": 14,
          "name": "Ignite"
        }
      ],
      "startingItems": [
        {
          "id": 3865,
          "name": "World Atlas"
        },
        {
          "id": 2003,
          "name": "Health Potion"
        }
      ],
      "coreItems": [
        {
          "id": 4005,
          "name": "Imperial Mandate"
        },
        {
          "id": 3020,
          "name": "Sorcerer's Shoes"
        },
        {
          "id": 6653,
          "name": "Liandry's Torment"
        }
      ],
      "itemSlots": [
        {
          "label": "4th item",
          "options": [
            {
              "id": 3157,
              "name": "Zhonya's Hourglass",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 4645,
              "name": "Shadowflame",
              "pct": 40,
              "winPrc": null
            }
          ]
        },
        {
          "label": "5th item",
          "options": [
            {
              "id": 3089,
              "name": "Rabadon's Deathcap",
              "pct": 60,
              "winPrc": null
            },
            {
              "id": 3135,
              "name": "Void Staff",
              "pct": 40,
              "winPrc": null
            }
          ]
        }
      ],
      "skillOrder": [
        {
          "key": "Q",
          "levels": 5
        },
        {
          "key": "W",
          "levels": 3
        },
        {
          "key": "E",
          "levels": 3
        },
        {
          "key": "R",
          "levels": 2
        }
      ],
      "runes": {
        "primary": {
          "tree": "Sorcery",
          "treeId": 8200,
          "keystone": {
            "id": 8229,
            "name": "Arcane Comet"
          },
          "minors": [
            {
              "id": 8226,
              "name": "Manaflow Band"
            },
            {
              "id": 8210,
              "name": "Transcendence"
            },
            {
              "id": 8237,
              "name": "Scorch"
            }
          ]
        },
        "secondary": {
          "tree": "Inspiration",
          "treeId": 8300,
          "minors": [
            {
              "id": 8304,
              "name": "Magical Footwear"
            },
            {
              "id": 8347,
              "name": "Cosmic Insight"
            }
          ]
        },
        "statShards": [
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5008,
            "name": "Adaptive Force"
          },
          {
            "id": 5001,
            "name": "Health Scaling"
          }
        ]
      }
    }
  }
];
