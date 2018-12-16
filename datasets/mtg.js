const decks = [
  {
    "deckName": "Bant Spirits",
    "cards": [
      "Breeding Pool",
      "Cavern of Souls",
      "Flooded Strand",
      "Hallowed Fountain",
      "Horizon Canopy",
      "Misty Rainforest",
      "Windswept Heath",
      "Noble Hierarch",
      "Phantasmal Image",
      "Collected Company",
      "Aether Vial"
    ],
    "cardCounts": {
      "Breeding Pool": 1,
      "Cavern of Souls": 1,
      "Flooded Strand": 3,
      "Hallowed Fountain": 1,
      "Horizon Canopy": 3,
      "Misty Rainforest": 2,
      "Windswept Heath": 2,
      "Noble Hierarch": 4,
      "Phantasmal Image": 3,
      "Collected Company": 4,
      "Aether Vial": 3
    }
  },
  {
    "deckName": "Izzet Phoenix",
    "cards": [
      "Polluted Delta",
      "Scalding Tarn",
      "Steam Vents",
      "Arclight Phoenix",
      "Thing in the Ice",
      "Manamorphose"
    ],
    "cardCounts": {
      "Polluted Delta": 1,
      "Scalding Tarn": 4,
      "Steam Vents": 3,
      "Arclight Phoenix": 4,
      "Thing in the Ice": 4,
      "Manamorphose": 4
    }
  },
  {
    "deckName": "Death's Shadow",
    "cards": [
      "Blood Crypt",
      "Bloodstained Mire",
      "Polluted Delta",
      "Scalding Tarn",
      "Steam Vents",
      "Watery Grave",
      "Death's Shadow",
      "Snapcaster Mage",
      "Thoughtseize"
    ],
    "cardCounts": {
      "Blood Crypt": 2,
      "Bloodstained Mire": 4,
      "Polluted Delta": 4,
      "Scalding Tarn": 2,
      "Steam Vents": 1,
      "Watery Grave": 2,
      "Death's Shadow": 4,
      "Snapcaster Mage": 3,
      "Thoughtseize": 4,
    }
  },
  {
    "deckName": "Burn",
    "cards": [
      "Arid Mesa",
      "Bloodstained Mire",
      "Wooded Foothills",
      "Goblin Guide"
    ],
    "cardCounts": {
      "Arid Mesa": 2,
      "Bloodstained Mire": 4,
      "Wooded Foothills": 4,
      "Goblin Guide": 4
    }
  },
  {
    "deckName": "Humans",
    "cards": [
      "Cavern of Souls",
      "Horizon Canopy",
      "Seachrome Coast",
      "Meddling Mage",
      "Noble Hierarch",
      "Phantasmal Image",
      "Aether Vial"
    ],
    "cardCounts": {
      "Cavern of Souls": 4,
      "Horizon Canopy": 4,
      "Seachrome Coast": 1,
      "Meddling Mage": 4,
      "Noble Hierarch": 4,
      "Phantasmal Image": 4,
      "Aether Vial": 4
    }
  },
  {
    "deckName": "Hollow One",
    "cards": [
      "Arid Mesa",
      "Blackcleave Cliffs",
      "Blood Crypt",
      "Bloodstained Mire",
      "Stomping Ground",
      "Wooded Foothills",
      "Bloodghast",
      "Collective Brutality",
      "Goblin Lore"
    ],
    "cardCounts": {
      "Arid Mesa": 2,
      "Blackcleave Cliffs": 3,
      "Blood Crypt": 2,
      "Bloodstained Mire": 4,
      "Stomping Ground": 1,
      "Wooded Foothills": 2,
      "Bloodghast": 4,
      "Collective Brutality": 1,
      "Goblin Lore": 4
    }
  },
  {
    "deckName": "Jund",
    "cards": [
      "Blackcleave Cliffs",
      "Blood Crypt",
      "Bloodstained Mire",
      "Verdant Catacombs",
      "Wooded Foothills",
      "Dark Confidant",
      "Tarmogoyf",
      "Assassin's Trophy",
      "Kolaghan's Command",
      "Liliana of the Veil",
      "Liliana, the Last Hope",
      "Thoughtseize"
    ],
    "cardCounts": {
      "Blackcleave Cliffs": 4,
      "Blood Crypt": 1,
      "Bloodstained Mire": 3,
      "Verdant Catacombs": 4,
      "Wooded Foothills": 1,
      "Dark Confidant": 4,
      "Tarmogoyf": 4,
      "Assassin's Trophy": 3,
      "Kolaghan's Command": 2,
      "Liliana of the Veil": 4,
      "Liliana, the Last Hope": 1,
      "Thoughtseize": 2
    }
  },
  {
    "deckName": "Hardened Scales",
    "cards": [
      "Horizon Canopy",
      "Inkmoth Nexus",
      "Arcbound Ravager",
      "Steel Overseer",
      "Walking Ballista",
      "Mox Opal"
    ],
    "cardCounts": {
      "Horizon Canopy": 2,
      "Inkmoth Nexus": 4,
      "Arcbound Ravager": 4,
      "Steel Overseer": 4,
      "Walking Ballista": 4,
      "Mox Opal": 4
    }
  },
  {
    "deckName": "Affinity",
    "cards": [
      "Inkmoth Nexus",
      "Arcbound Ravager",
      "Steel Overseer",
      "Karn, Scion of Urza",
      "Mox Opal"
    ],
    "cardCounts": {
      "Inkmoth Nexus": 4,
      "Arcbound Ravager": 4,
      "Steel Overseer": 4,
      "Karn, Scion of Urza": 1,
      "Mox Opal": 4
    }
  },
  {
    "deckName": "Bogles",
    "cards": [
      "Dryad Arbor",
      "Horizon Canopy",
      "Windswept Heath",
      "Wooded Foothills"
    ],
    "cardCounts": {
      "Dryad Arbor": 1,
      "Horizon Canopy": 3,
      "Windswept Heath": 4,
      "Wooded Foothills": 1
    }
  },
  {
    "deckName": "Eldrazi Tron",
    "cards": [
      "Ulamog, the Ceaseless Hunger",
      "Walking Ballista",
      "Karn Liberated"
    ],
    "cardCounts": {
      "Ulamog, the Ceaseless Hunger": 1,
      "Walking Ballista": 4,
      "Karn Liberated": 1
    }
  },
  {
    "deckName": "Eldrazi and Taxes",
    "cards": [
      "Cavern of Souls",
      "Gemstone Caverns",
      "Horizon Canopy",
      "Chalice of the Void"
    ],
    "cardCounts": {
      "Cavern of Souls": 1,
      "Gemstone Caverns": 3,
      "Horizon Canopy": 3,
      "Chalice of the Void": 4
    }
  },
  {
    "deckName": "Merfolk",
    "cards": [
      "Phantasmal Image",
      "Aether Vial"
    ],
    "cardCounts": {
      "Phantasmal Image": 2,
      "Aether Vial": 4
    }
  },
  {
    "deckName": "Tron",
    "cards": [
      "Ulamog, the Ceaseless Hunger",
      "Walking Ballista",
      "Wurmcoil Engine",
      "Karn Liberated",
      "Ugin, the Spirit Dragon"
    ],
    "cardCounts": {
      "Ulamog, the Ceaseless Hunger": 2,
      "Walking Ballista": 3,
      "Wurmcoil Engine": 3,
      "Karn Liberated": 4,
      "Ugin, the Spirit Dragon": 2
    }
  },
  {
    "deckName": "UW Control",
    "cards": [
      "Celestial Colonnade",
      "Flooded Strand",
      "Hallowed Fountain",
      "Snapcaster Mage",
      "Vendilion Clique",
      "Cryptic Command",
      "Jace, the Mind Sculptor",
      "Teferi, Hero of Dominaria"
    ],
    "cardCounts": {
      "Celestial Colonnade": 4,
      "Flooded Strand": 4,
      "Hallowed Fountain": 2,
      "Snapcaster Mage": 2,
      "Vendilion Clique": 1,
      "Cryptic Command": 3,
      "Jace, the Mind Sculptor": 3,
      "Teferi, Hero of Dominaria": 2
    }
  },
  {
    "deckName": "Jeskai Control",
    "cards": [
      "Celestial Colonnade",
      "Flooded Strand",
      "Hallowed Fountain",
      "Scalding Tarn",
      "Steam Vents",
      "Sulfur Falls",
      "Snapcaster Mage",
      "Cryptic Command",
      "Jace, the Mind Scuptor",
      "Search for Azcanta",
      "Teferi, Hero of Dominaria"
    ],
    "cardCounts": {
      "Celestial Colonnade": 3,
      "Flooded Strand": 4,
      "Hallowed Fountain": 2,
      "Scalding Tarn": 4,
      "Steam Vents": 2,
      "Sulfur Falls": 1,
      "Snapcaster Mage": 4,
      "Cryptic Command": 3,
      "Jace, the Mind Scuptor": 1,
      "Search for Azcanta": 2,
      "Teferi, Hero of Dominaria": 2
    }
  },
  {
    "deckName": "BG Rock",
    "cards": [
      "Bloodstained Mire",
      "Verdant Catacombs",
      "Dark Confidant",
      "Tarmogoyf",
      "Assassin's Trophy",
      "Collective Brutality",
      "Liliana of the Veil",
      "Liliana, the Last Hope",
      "Thoughtseize"
    ],
    "cardCounts": {
      "Bloodstained Mire": 1,
      "Verdant Catacombs": 4,
      "Dark Confidant": 3,
      "Tarmogoyf": 4,
      "Assassin's Trophy": 4,
      "Collective Brutality": 2,
      "Liliana of the Veil": 3,
      "Liliana, the Last Hope": 2,
      "Thoughtseize": 3
    }
  },
  {
    "deckName": "Ponza",
    "cards": [
      "Misty Rainforest",
      "Stomping Ground",
      "Windswept Heath",
      "Wooded Foothills",
      "Blood Moon",
      "Chandra, Torch of Defiance"
    ],
    "cardCounts": {
      "Misty Rainforest": 1,
      "Stomping Ground": 3,
      "Windswept Heath": 3,
      "Wooded Foothills": 4,
      "Blood Moon": 4,
      "Chandra, Torch of Defiance": 2
    }
  },
  {
    "deckName": "Mardu Pyromancer",
    "cards": [
      "Arid Mesa",
      "Blackcleave Cliffs",
      "Blood Crypt",
      "Bloodstained Mire",
      "Marsh Flats",
      "Blood Moon",
      "Collective Brutality",
      "Kolaghan's Command",
      "Thoughtseize"
    ],
    "cardCounts": {
      "Arid Mesa": 1,
      "Blackcleave Cliffs": 4,
      "Blood Crypt": 2,
      "Bloodstained Mire": 4,
      "Marsh Flats": 3,
      "Blood Moon": 2,
      "Collective Brutality": 2,
      "Kolaghan's Command": 3,
      "Thoughtseize": 3
    }
  },
  {
    "deckName": "Blue Moon",
    "cards": [
      "Misty Rainforest",
      "Scalding Tarn",
      "Steam Vents",
      "Sulfur Falls",
      "Snapcaster Mage",
      "Thing in the Ice",
      "Vendilion Clique",
      "Blood Moon",
      "Cryptic Command",
      "Jace, the Mind Sculptor"
    ],
    "cardCounts": {
      "Misty Rainforest": 1,
      "Scalding Tarn": 4,
      "Steam Vents": 2,
      "Sulfur Falls": 2,
      "Snapcaster Mage": 4,
      "Thing in the Ice": 4,
      "Vendilion Clique": 1,
      "Blood Moon": 2,
      "Cryptic Command": 4,
      "Jace, the Mind Sculptor": 1
    }
  },
  {
    "deckName": "Dredge",
    "cards": [
      "Blood Crypt",
      "Bloodstained Mire",
      "Copperline Gorge",
      "Stomping Ground",
      "Wooded Foothills",
      "Bloodghast",
      "Life from the Loam"
    ],
    "cardCounts": {
      "Blood Crypt": 2,
      "Bloodstained Mire": 3,
      "Copperline Gorge": 4,
      "Stomping Ground": 2,
      "Wooded Foothills": 3,
      "Bloodghast": 4,
      "Life from the Loam": 4
    }
  },
  {
    "deckName": "Titanshift",
    "cards": [
      "Misty Rainforest",
      "Stomping Ground",
      "Valakut, the Molten Pinnacle",
      "Windswept Heath",
      "Wooded Foothills",
      "Prismatic Omen"
    ],
    "cardCounts": {
      "Misty Rainforest": 1,
      "Stomping Ground": 4,
      "Valakut, the Molten Pinnacle": 4,
      "Windswept Heath": 2,
      "Wooded Foothills": 4,
      "Prismatic Omen": 1
    }
  },
  {
    "deckName": "KCI",
    "cards": [
      "Grove of the Burnwillows",
      "Engineered Explosives",
      "Krark-Clan Ironworks",
      "Mox Opal"
    ],
    "cardCounts": {
      "Grove of the Burnwillows": 4,
      "Engineered Explosives": 3,
      "Krark-Clan Ironworks": 4,
      "Mox Opal": 4
    }
  },
  {
    "deckName": "Storm",
    "cards": [
      "Scalding Tarn",
      "Steam Vents",
      "Manamoprhose"
    ],
    "cardCounts": {
      "Scalding Tarn": 1,
      "Steam Vents": 4,
      "Manamoprhose": 4
    }
  },
  {
    "deckName": "Infect",
    "cards": [
      "Breeding Pool",
      "Dryad Arbor",
      "Inkmoth Nexus",
      "Misty Rainforest",
      "Verdant Catacombs",
      "Windswept Heath",
      "Wooded Foothills",
      "Noble Hierarch"
    ],
    "cardCounts": {
      "Breeding Pool": 2,
      "Dryad Arbor": 1,
      "Inkmoth Nexus": 4,
      "Misty Rainforest": 2,
      "Verdant Catacombs": 2,
      "Windswept Heath": 3,
      "Wooded Foothills": 2,
      "Noble Hierarch": 4
    }
  },
  {
    "deckName": "Elves",
    "cards": [
      "Cavern of Souls",
      "Gilt-Leaf Palace",
      "Horizon Canopy",
      "Collected Company"
    ],
    "cardCounts": {
      "Cavern of Souls": 3,
      "Gilt-Leaf Palace": 4,
      "Horizon Canopy": 1,
      "Collected Company": 4
    }
  },
  {
    "deckName": "Amulet Titan",
    "cards": [
      "Cavern of Souls",
      "Vesuva",
      "Azusa, Lost but Seeking",
      "Walking Ballista",
      "Amulet of Vigor",
      "Engineered Explosives"
    ],
    "cardCounts": {
      "Cavern of Souls": 1,
      "Vesuva": 1,
      "Azusa: , Lost but Seeking": 4,
      "Walking Ballista": 1,
      "Amulet of Vigor": 4,
      "Engineered Explosives": 1
    }
  },
  {
    "deckName": "Counters Company",
    "cards": [
      "Dryad Arbor",
      "Horizon Canopy",
      "Misty Rainforest",
      "Overgrown Tomb",
      "Windswept Heath",
      "Noble Hierarch",
      "Walking Ballista",
      "Collected Company"
    ],
    "cardCounts": {
      "Dryad Arbor": 1,
      "Horizon Canopy": 2,
      "Misty Rainforest": 1,
      "Overgrown Tomb": 1,
      "Windswept Heath": 4,
      "Noble Hierarch": 4,
      "Walking Ballista": 1,
      "Collected Company": 3
    }
  },
  {
    "deckName": "Living End",
    "cards": [
      "Blackcleave Cliffs",
      "Blood Crypt",
      "Grove of the Burnwillows",
      "Stomping Ground",
      "Verdant Catacombs",
      "Living End"
    ],
    "cardCounts": {
      "Blackcleave Cliffs": 4,
      "Blood Crypt": 1,
      "Grove of the Burnwillows": 4,
      "Stomping Ground": 1,
      "Verdant Catacombs": 4,
      "Living End": 3
    }
  },
  {
    "deckName": "Grishoalbrand",
    "cards": [
      "Blackcleave Cliffs",
      "Blood Crypt",
      "Bloodstained Mire",
      "Collective Brutality",
      "Goryo's Vengeance",
      "Manamorphose",
      "Through the Breach"
    ],
    "cardCounts": {
      "Blackcleave Cliffs": 1,
      "Blood Crypt": 1,
      "Bloodstained Mire": 3,
      "Collective Brutality": 1,
      "Goryo's Vengeance": 4,
      "Manamorphose": 1,
      "Through the Breach": 4
    }
  }
]