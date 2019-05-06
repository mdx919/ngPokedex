export const Pokemons = [
    {
      "id": "base1-1",
      "name": "Alakazam",
      "imageUrl": "https://images.pokemontcg.io/base1/1.png",
      "subtype": "Stage 2",
      "supertype": "Pokémon",
      "level": "42",
      "evolvesFrom": "Kadabra",
      "ability": {
        "name": "Damage Swap",
        "text": "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
        "type": "Pokémon Power"
      },
      "hp": "80",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "1",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Confuse Ray",
          "cost": [
            "Psychic",
            "Psychic",
            "Psychic"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "Flip a coin. If heads, defender is now Confused."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/1_hires.png",
      "nationalPokedexNumber": 65
    },
    {
      "id": "base1-2",
      "name": "Blastoise",
      "imageUrl": "https://images.pokemontcg.io/base1/2.png",
      "subtype": "Stage 2",
      "supertype": "Pokémon",
      "level": "52",
      "evolvesFrom": "Wartortle",
      "ability": {
        "name": "Rain Dance",
        "text": "As often as you like during your turn (before your attack), you may attach 1 Water Energy Card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
        "type": "Pokémon Power"
      },
      "hp": "100",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "2",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Hydro Pump",
          "cost": [
            "Water",
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 3,
          "damage": "40+",
          "text": "Does 40 damage plus 10 more damage for each attached to Blastoise but not used to pay for this attack's Energy cost. Extra Energy after the 2nd doesn't count."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/2_hires.png",
      "nationalPokedexNumber": 9
    },
    {
      "id": "base1-3",
      "name": "Chansey",
      "imageUrl": "https://images.pokemontcg.io/base1/3.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "55",
      "hp": "120",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "3",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Scrunch",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Flip a coin. If heads, prevent all damage done to Chansey during your opponent's next turn. (Any other effects of attacks still happen.)"
        },
        {
          "name": "Double-edge",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "80",
          "text": "Chansey does 80 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/3_hires.png",
      "nationalPokedexNumber": 113,
      "evolvesTo": [
        "Blissey"
      ]
    },
    {
      "id": "base1-4",
      "name": "Charizard",
      "imageUrl": "https://images.pokemontcg.io/base1/4.png",
      "subtype": "Stage 2",
      "supertype": "Pokémon",
      "level": "76",
      "evolvesFrom": "Charmeleon",
      "ability": {
        "name": "Energy Burn",
        "text": "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into R for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
        "type": "Pokémon Power"
      },
      "hp": "120",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "4",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Fire Spin",
          "cost": [
            "Fire",
            "Fire",
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 4,
          "damage": "100",
          "text": "Discard 2 Energy cards attached to Charizard in order to use this attack."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/4_hires.png",
      "nationalPokedexNumber": 6
    },
    {
      "id": "base1-5",
      "name": "Clefairy",
      "imageUrl": "https://images.pokemontcg.io/base1/5.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "14",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "5",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Sing",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Flip a coin. If heads, Defending Pokémon is now Asleep."
        },
        {
          "name": "Metronome",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "",
          "text": "Choose 1 of Defending Pokémon's attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding energy cards. (No matter what type the defender is, Clefairy's type is still Colorless.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/5_hires.png",
      "nationalPokedexNumber": 35,
      "evolvesTo": [
        "Clefable"
      ]
    },
    {
      "id": "base1-6",
      "name": "Gyarados",
      "imageUrl": "https://images.pokemontcg.io/base1/6.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "41",
      "evolvesFrom": "Magikarp",
      "hp": "100",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "6",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Dragon Rage",
          "cost": [
            "Water",
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        },
        {
          "name": "Bubblebeam",
          "cost": [
            "Water",
            "Water",
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 4,
          "damage": "40",
          "text": "Flip a coin. If heads, Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/6_hires.png",
      "nationalPokedexNumber": 130
    },
    {
      "id": "base1-7",
      "name": "Hitmonchan",
      "imageUrl": "https://images.pokemontcg.io/base1/7.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "33",
      "hp": "70",
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "number": "7",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fighting"
      ],
      "attacks": [
        {
          "name": "Jab",
          "cost": [
            "Fighting"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": ""
        },
        {
          "name": "Special Punch",
          "cost": [
            "Fighting",
            "Fighting",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/7_hires.png",
      "nationalPokedexNumber": 107
    },
    {
      "id": "base1-8",
      "name": "Machamp",
      "imageUrl": "https://images.pokemontcg.io/base1/8.png",
      "subtype": "Stage 2",
      "supertype": "Pokémon",
      "level": "67",
      "evolvesFrom": "Machoke",
      "ability": {
        "name": "Strikes Back",
        "text": "Whenever your opponent's attack damages Machamp (even if Machamp is Knoced Out), this power does 10 damage to attacking Pokémon. (Don't apply Weakness and Resistance.) This power can't be used if Machamp is already Asleep, Confused, or Paralyzed when your opponent attacks.",
        "type": "Pokémon Power"
      },
      "hp": "100",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "8",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fighting"
      ],
      "attacks": [
        {
          "name": "Seismic Toss",
          "cost": [
            "Fighting",
            "Fighting",
            "Fighting",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/8_hires.png",
      "nationalPokedexNumber": 68
    },
    {
      "id": "base1-9",
      "name": "Magneton",
      "imageUrl": "https://images.pokemontcg.io/base1/9.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "28",
      "evolvesFrom": "Magnemite",
      "hp": "60",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "9",
      "artist": "Keiji Kinebuchi",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Lightning"
      ],
      "attacks": [
        {
          "name": "Thunder Wave",
          "cost": [
            "Lightning",
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Selfdestruct",
          "cost": [
            "Lightning",
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "80",
          "text": "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magneton does 80 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/9_hires.png",
      "nationalPokedexNumber": 82,
      "evolvesTo": [
        "Magnezone"
      ]
    },
    {
      "id": "base1-10",
      "name": "Mewtwo",
      "imageUrl": "https://images.pokemontcg.io/base1/10.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "53",
      "hp": "60",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "10",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Psychic",
          "cost": [
            "Psychic",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "10+",
          "text": "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon."
        },
        {
          "name": "Barrier",
          "cost": [
            "Psychic",
            "Psychic"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Discard 1 Energy card attached to Mewtwo in order to use this attack. During your opponent's next turn, prevent all effects of attacks, including damage, done to Mewtwo."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/10_hires.png",
      "nationalPokedexNumber": 150
    },
    {
      "id": "base1-11",
      "name": "Nidoking",
      "imageUrl": "https://images.pokemontcg.io/base1/11.png",
      "subtype": "Stage 2",
      "supertype": "Pokémon",
      "level": "23",
      "evolvesFrom": "Nidorino",
      "hp": "90",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "11",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Thrash",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30+",
          "text": "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Nidoking does 10 damage to itself."
        },
        {
          "name": "Toxic",
          "cost": [
            "Grass",
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "The Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned)."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/11_hires.png",
      "nationalPokedexNumber": 34
    },
    {
      "id": "base1-12",
      "name": "Ninetales",
      "imageUrl": "https://images.pokemontcg.io/base1/12.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "32",
      "evolvesFrom": "Vulpix",
      "hp": "80",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "12",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Lure",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon."
        },
        {
          "name": "Fire Blast",
          "cost": [
            "Fire",
            "Fire",
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 4,
          "damage": "80",
          "text": "Discard 1 Energy card attached to Ninetales in order to use this attack."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/12_hires.png",
      "nationalPokedexNumber": 38
    },
    {
      "id": "base1-13",
      "name": "Poliwrath",
      "imageUrl": "https://images.pokemontcg.io/base1/13.png",
      "subtype": "Stage 2",
      "supertype": "Pokémon",
      "level": "48",
      "evolvesFrom": "Poliwhirl",
      "hp": "90",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "13",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Water Gun",
          "cost": [
            "Water",
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30+",
          "text": "Does 30 damage plus 10 more damage for each Energy attached to Poliwrath but not used to pay for this attack's Energy cost. Extra Energy after the 2nd doesn't count."
        },
        {
          "name": "Whirlpool",
          "cost": [
            "Water",
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "40",
          "text": "If the Defending Pokémon has any Energy cards attached to it, choose 1 and discard it."
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/13_hires.png",
      "nationalPokedexNumber": 62
    },
    {
      "id": "base1-14",
      "name": "Raichu",
      "imageUrl": "https://images.pokemontcg.io/base1/14.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "40",
      "evolvesFrom": "Pikachu",
      "hp": "80",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "14",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Lightning"
      ],
      "attacks": [
        {
          "name": "Agility",
          "cost": [
            "Lightning",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "20",
          "text": "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Raichu."
        },
        {
          "name": "Thunder",
          "cost": [
            "Lightning",
            "Lightning",
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60",
          "text": "Flip a coin. If tails, Raichu does 30 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/14_hires.png",
      "nationalPokedexNumber": 26
    },
    {
      "id": "base1-15",
      "name": "Venusaur",
      "imageUrl": "https://images.pokemontcg.io/base1/15.png",
      "subtype": "Stage 2",
      "supertype": "Pokémon",
      "level": "67",
      "evolvesFrom": "Ivysaur",
      "ability": {
        "name": "Energy Trans",
        "text": "As often as you like during your turn (before your attack), you may take 1 Grass Energy card attached to 1 of your Pokémon and attach it to a different one. This power can't be used if Venusaur is Asleep, Confused, or Paralyzed.",
        "type": "Pokémon Power"
      },
      "hp": "100",
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "number": "15",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Solarbeam",
          "cost": [
            "Grass",
            "Grass",
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 4,
          "damage": "60",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/15_hires.png",
      "nationalPokedexNumber": 3
    },
    {
      "id": "base1-16",
      "name": "Zapdos",
      "imageUrl": "https://images.pokemontcg.io/base1/16.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "64",
      "hp": "90",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "16",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Lightning"
      ],
      "attacks": [
        {
          "name": "Thunder",
          "cost": [
            "Lightning",
            "Lightning",
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60",
          "text": "Flip a coin. If tails, Zapdos does 30 damage to itself."
        },
        {
          "name": "Thunderbolt",
          "cost": [
            "Lightning",
            "Lightning",
            "Lightning",
            "Lightning"
          ],
          "convertedEnergyCost": 4,
          "damage": "100",
          "text": "Discard all Energy cards attached to Zapdos in order to use this attack."
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/16_hires.png",
      "nationalPokedexNumber": 145
    },
    {
      "id": "base1-17",
      "name": "Beedrill",
      "imageUrl": "https://images.pokemontcg.io/base1/17.png",
      "subtype": "Stage 2",
      "supertype": "Pokémon",
      "level": "32",
      "evolvesFrom": "Kakuna",
      "hp": "80",
      "convertedRetreatCost": 0,
      "number": "17",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Twineedle",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30×",
          "text": "Flip 2 coins. This attack does 30 damage times the number of heads."
        },
        {
          "name": "Poison Sting",
          "cost": [
            "Grass",
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/17_hires.png",
      "nationalPokedexNumber": 15
    },
    {
      "id": "base1-18",
      "name": "Dragonair",
      "imageUrl": "https://images.pokemontcg.io/base1/18.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "33",
      "evolvesFrom": "Dratini",
      "hp": "80",
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "number": "18",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Slam",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30×",
          "text": "Flip 2 coins. This attack does 30 times number of heads."
        },
        {
          "name": "Hyper Beam",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "20",
          "text": "If the Defending Pokémon has energy cards attached to it, choose 1 of them and discard it."
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/18_hires.png",
      "nationalPokedexNumber": 148,
      "evolvesTo": [
        "Dragonite"
      ]
    },
    {
      "id": "base1-19",
      "name": "Dugtrio",
      "imageUrl": "https://images.pokemontcg.io/base1/19.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "36",
      "evolvesFrom": "Diglett",
      "hp": "70",
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "number": "19",
      "artist": "Keiji Kinebuchi",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fighting"
      ],
      "attacks": [
        {
          "name": "Slash",
          "cost": [
            "Fighting",
            "Fighting",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": ""
        },
        {
          "name": "Earthquake",
          "cost": [
            "Fighting",
            "Fighting",
            "Fighting",
            "Fighting"
          ],
          "convertedEnergyCost": 4,
          "damage": "70",
          "text": "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Lightning",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/19_hires.png",
      "nationalPokedexNumber": 51
    },
    {
      "id": "base1-20",
      "name": "Electabuzz",
      "imageUrl": "https://images.pokemontcg.io/base1/20.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "35",
      "hp": "70",
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "number": "20",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Lightning"
      ],
      "attacks": [
        {
          "name": "Thundershock",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Thunderpunch",
          "cost": [
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30+",
          "text": "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Electabuzz does 10 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/20_hires.png",
      "nationalPokedexNumber": 125,
      "evolvesTo": [
        "Electivire"
      ]
    },
    {
      "id": "base1-21",
      "name": "Electrode",
      "imageUrl": "https://images.pokemontcg.io/base1/21.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "40",
      "evolvesFrom": "Voltorb",
      "ability": {
        "name": "Buzzap",
        "text": "At any time during your turn (before your attack) you may Knock Out Electrode and attach it to 1 of your other Pokémon. If you do, chose a type of Energy. is now an Energy card (instead of a Pokémon) that provides 2 energy of that type. This power can't be used if Electrode is Asleep, Confused, or Paralyzed.",
        "type": "Pokémon Power"
      },
      "hp": "80",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "21",
      "artist": "Keiji Kinebuchi",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Lightning"
      ],
      "attacks": [
        {
          "name": "Electric Shock",
          "cost": [
            "Lightning",
            "Lightning",
            "Lightning"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "Flip a coin. If tails, Electrode does 10 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/21_hires.png",
      "nationalPokedexNumber": 101
    },
    {
      "id": "base1-22",
      "name": "Pidgeotto",
      "imageUrl": "https://images.pokemontcg.io/base1/22.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "36",
      "evolvesFrom": "Pidgey",
      "hp": "60",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "22",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Whirlwind",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)"
        },
        {
          "name": "Mirror Move",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "",
          "text": "If Pidgeotto was attacked last turn, do the final result of that attack on Pidgeotto to the Defending Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/22_hires.png",
      "nationalPokedexNumber": 17,
      "evolvesTo": [
        "Pidgeot"
      ]
    },
    {
      "id": "base1-23",
      "name": "Arcanine",
      "imageUrl": "https://images.pokemontcg.io/base1/23.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "45",
      "evolvesFrom": "Growlithe",
      "hp": "100",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "23",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Flamethrower",
          "cost": [
            "Fire",
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "Discard 1 Energy card attached to Arcanine in order to use this attack."
        },
        {
          "name": "Take Down",
          "cost": [
            "Fire",
            "Fire",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "80",
          "text": "Arcanine does 30 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/23_hires.png",
      "nationalPokedexNumber": 59
    },
    {
      "id": "base1-24",
      "name": "Charmeleon",
      "imageUrl": "https://images.pokemontcg.io/base1/24.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "32",
      "evolvesFrom": "Charmander",
      "hp": "80",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "24",
      "artist": "Mitsuhiro Arita",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Slash",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": ""
        },
        {
          "name": "Flamethrower",
          "cost": [
            "Fire",
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "Discard 1 Energy card attached to Charmeleon in order to use this attack."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/24_hires.png",
      "nationalPokedexNumber": 5,
      "evolvesTo": [
        "Charizard"
      ]
    },
    {
      "id": "base1-25",
      "name": "Dewgong",
      "imageUrl": "https://images.pokemontcg.io/base1/25.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "42",
      "evolvesFrom": "Seel",
      "hp": "80",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "25",
      "artist": "Mitsuhiro Arita",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Aurora Beam",
          "cost": [
            "Water",
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        },
        {
          "name": "Ice Beam",
          "cost": [
            "Water",
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "30",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/25_hires.png",
      "nationalPokedexNumber": 87
    },
    {
      "id": "base1-26",
      "name": "Dratini",
      "imageUrl": "https://images.pokemontcg.io/base1/26.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "10",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "26",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Pound",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/26_hires.png",
      "nationalPokedexNumber": 147,
      "evolvesTo": [
        "Dragonair"
      ]
    },
    {
      "id": "base1-27",
      "name": "Farfetch'd",
      "imageUrl": "https://images.pokemontcg.io/base1/27.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "20",
      "hp": "50",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "27",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Leek Slap",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "30",
          "text": "Flip a coin. If tails, this attack does nothing. Either way, use this attack again as long as Farfetch'd stays in play (even putting Farfech'd on the Bench won't let you use it again.)"
        },
        {
          "name": "Pot Smash",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/27_hires.png",
      "nationalPokedexNumber": 83
    },
    {
      "id": "base1-28",
      "name": "Growlithe",
      "imageUrl": "https://images.pokemontcg.io/base1/28.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "18",
      "hp": "60",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "28",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Flare",
          "cost": [
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/28_hires.png",
      "nationalPokedexNumber": 58,
      "evolvesTo": [
        "Arcanine"
      ]
    },
    {
      "id": "base1-29",
      "name": "Haunter",
      "imageUrl": "https://images.pokemontcg.io/base1/29.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "22",
      "evolvesFrom": "Gastly",
      "hp": "60",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "29",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Hypnosis",
          "cost": [
            "Psychic"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "The Defending Pokémon is now Asleep."
        },
        {
          "name": "Dream Eater",
          "cost": [
            "Psychic",
            "Psychic"
          ],
          "convertedEnergyCost": 2,
          "damage": "50",
          "text": "You can't this attack unless the Defending Pokémon is Asleep."
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/29_hires.png",
      "nationalPokedexNumber": 93,
      "evolvesTo": [
        "Gengar"
      ]
    },
    {
      "id": "base1-30",
      "name": "Ivysaur",
      "imageUrl": "https://images.pokemontcg.io/base1/30.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "20",
      "evolvesFrom": "Barboach",
      "hp": "60",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "30",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Vine Whip",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": ""
        },
        {
          "name": "Poisonpowder",
          "cost": [
            "Grass",
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "The Defending Pokémon is now Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/30_hires.png",
      "nationalPokedexNumber": 2,
      "evolvesTo": [
        "Venusaur"
      ]
    },
    {
      "id": "base1-31",
      "name": "Jynx",
      "imageUrl": "https://images.pokemontcg.io/base1/31.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "23",
      "hp": "70",
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "number": "31",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Doubleslap",
          "cost": [
            "Psychic"
          ],
          "convertedEnergyCost": 1,
          "damage": "10×",
          "text": "Flip 2 coins. This attack does 10 damage times the number of heads."
        },
        {
          "name": "Meditate",
          "cost": [
            "Psychic",
            "Psychic",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "20+",
          "text": "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/31_hires.png",
      "nationalPokedexNumber": 124
    },
    {
      "id": "base1-32",
      "name": "Kadabra",
      "imageUrl": "https://images.pokemontcg.io/base1/32.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "38",
      "evolvesFrom": "Abra",
      "hp": "60",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "32",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Recover",
          "cost": [
            "Psychic",
            "Psychic"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Discard 1 Energy card attached to Kadabra in order use this attack. Remove all damage counters from Kadabra."
        },
        {
          "name": "Super Psy",
          "cost": [
            "Psychic",
            "Psychic",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/32_hires.png",
      "nationalPokedexNumber": 64,
      "evolvesTo": [
        "Alakazam"
      ]
    },
    {
      "id": "base1-33",
      "name": "Kakuna",
      "imageUrl": "https://images.pokemontcg.io/base1/33.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "23",
      "evolvesFrom": "Weedle",
      "hp": "80",
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "number": "33",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Stiffen",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Flip a coin. If heads, prevent all damage done to Kakuna during your opponent's next turn. (Any other effects of attacks still happen.)"
        },
        {
          "name": "Poisonpowder",
          "cost": [
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/33_hires.png",
      "nationalPokedexNumber": 14,
      "evolvesTo": [
        "Beedrill"
      ]
    },
    {
      "id": "base1-34",
      "name": "Machoke",
      "imageUrl": "https://images.pokemontcg.io/base1/34.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "40",
      "evolvesFrom": "Machop",
      "hp": "80",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "34",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fighting"
      ],
      "attacks": [
        {
          "name": "Karate Chop",
          "cost": [
            "Fighting",
            "Fighting",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50-",
          "text": "Does 50 damage minus 10 for each damage counter on Machoke."
        },
        {
          "name": "Submission",
          "cost": [
            "Fighting",
            "Fighting",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "60",
          "text": "Machoke does 20 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/34_hires.png",
      "nationalPokedexNumber": 67,
      "evolvesTo": [
        "Machamp"
      ]
    },
    {
      "id": "base1-35",
      "name": "Magikarp",
      "imageUrl": "https://images.pokemontcg.io/base1/35.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "8",
      "hp": "30",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "35",
      "artist": "Mitsuhiro Arita",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Tackle",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Flail",
          "cost": [
            "Water"
          ],
          "convertedEnergyCost": 1,
          "damage": "10×",
          "text": "Does 10 damage times number of damage counters on Magikarp."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/35_hires.png",
      "nationalPokedexNumber": 129,
      "evolvesTo": [
        "Gyarados"
      ]
    },
    {
      "id": "base1-36",
      "name": "Magmar",
      "imageUrl": "https://images.pokemontcg.io/base1/36.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "24",
      "hp": "50",
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "number": "36",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Fire Punch",
          "cost": [
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        },
        {
          "name": "Flamethrower",
          "cost": [
            "Fire",
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "50",
          "text": "Discard 1 Energy card attached to Magmar in order to use this attack."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/36_hires.png",
      "nationalPokedexNumber": 126,
      "evolvesTo": [
        "Magmortar"
      ]
    },
    {
      "id": "base1-37",
      "name": "Nidorino",
      "imageUrl": "https://images.pokemontcg.io/base1/37.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "25",
      "evolvesFrom": "Nidoran♂",
      "hp": "60",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "37",
      "artist": "Mitsuhiro Arita",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Double Kick",
          "cost": [
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30×",
          "text": "Flip 2 coins. This attack does 30 damage times the number of heads."
        },
        {
          "name": "Horn Drill",
          "cost": [
            "Grass",
            "Grass",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 4,
          "damage": "50",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/37_hires.png",
      "nationalPokedexNumber": 33,
      "evolvesTo": [
        "Nidoking"
      ]
    },
    {
      "id": "base1-38",
      "name": "Poliwhirl",
      "imageUrl": "https://images.pokemontcg.io/base1/38.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "28",
      "evolvesFrom": "Poliwag",
      "hp": "60",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "38",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Amnesia",
          "cost": [
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Choose 1 of defenders attacks. Defender cannot use that attack next turn."
        },
        {
          "name": "Doubleslap",
          "cost": [
            "Water",
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "30×",
          "text": "Flip 2 coins. This attack does 30 damage times number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/38_hires.png",
      "nationalPokedexNumber": 61,
      "evolvesTo": [
        "Poliwrath",
        "Politoed"
      ]
    },
    {
      "id": "base1-39",
      "name": "Porygon",
      "imageUrl": "https://images.pokemontcg.io/base1/39.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "12",
      "hp": "30",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "39",
      "artist": "Tomoaki Imakuni",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Conversion 1",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless."
        },
        {
          "name": "Conversion 2",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Change Porygon's Resistance to a type of your choice other than Colorless."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/39_hires.png",
      "nationalPokedexNumber": 137,
      "evolvesTo": [
        "Porygon2"
      ]
    },
    {
      "id": "base1-40",
      "name": "Raticate",
      "imageUrl": "https://images.pokemontcg.io/base1/40.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "41",
      "evolvesFrom": "Poochyena",
      "hp": "60",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "40",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Bite",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": ""
        },
        {
          "name": "Super Fang",
          "cost": [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "?",
          "text": "Does damage to the Defending Pokémon equal to half the Defending Pokémon's remaining HP (rounded up to the nearest 10)."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/40_hires.png",
      "nationalPokedexNumber": 20
    },
    {
      "id": "base1-41",
      "name": "Seel",
      "imageUrl": "https://images.pokemontcg.io/base1/41.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "12",
      "hp": "60",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "41",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Headbutt",
          "cost": [
            "Water"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/41_hires.png",
      "nationalPokedexNumber": 86,
      "evolvesTo": [
        "Dewgong"
      ]
    },
    {
      "id": "base1-42",
      "name": "Wartortle",
      "imageUrl": "https://images.pokemontcg.io/base1/42.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "22",
      "evolvesFrom": "Squirtle",
      "hp": "70",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "42",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Withdraw",
          "cost": [
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Flip a coin. If heads, prevent all damage done to Wartortle during your opponent's next turn. (Any other effects of attacks still happen.)"
        },
        {
          "name": "Bite",
          "cost": [
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "40",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/42_hires.png",
      "nationalPokedexNumber": 8,
      "evolvesTo": [
        "Blastoise"
      ]
    },
    {
      "id": "base1-43",
      "name": "Abra",
      "imageUrl": "https://images.pokemontcg.io/base1/43.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "10",
      "hp": "30",
      "convertedRetreatCost": 0,
      "number": "43",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Psyshock",
          "cost": [
            "Psychic"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/43_hires.png",
      "nationalPokedexNumber": 63,
      "evolvesTo": [
        "Kadabra"
      ]
    },
    {
      "id": "base1-44",
      "name": "Bulbasaur",
      "imageUrl": "https://images.pokemontcg.io/base1/44.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "13",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "44",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Leech Seed",
          "cost": [
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Unless all damage from this attack is prevented, you may remove 1 damage counter from Bulbasaur."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/44_hires.png",
      "nationalPokedexNumber": 1,
      "evolvesTo": [
        "Ivysaur"
      ]
    },
    {
      "id": "base1-45",
      "name": "Caterpie",
      "imageUrl": "https://images.pokemontcg.io/base1/45.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "13",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "45",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "String Shot",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/45_hires.png",
      "nationalPokedexNumber": 10,
      "evolvesTo": [
        "Metapod"
      ]
    },
    {
      "id": "base1-46",
      "name": "Charmander",
      "imageUrl": "https://images.pokemontcg.io/base1/46.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "10",
      "hp": "50",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "46",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Scratch",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Ember",
          "cost": [
            "Fire",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Discard 1 Energy card attached to Charmander in order to use this attack."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/46_hires.png",
      "nationalPokedexNumber": 4,
      "evolvesTo": [
        "Charmeleon"
      ]
    },
    {
      "id": "base1-47",
      "name": "Diglett",
      "imageUrl": "https://images.pokemontcg.io/base1/47.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "8",
      "hp": "30",
      "convertedRetreatCost": 0,
      "number": "47",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fighting"
      ],
      "attacks": [
        {
          "name": "Dig",
          "cost": [
            "Fighting"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Mud Slap",
          "cost": [
            "Fighting",
            "Fighting"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Lightning",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/47_hires.png",
      "nationalPokedexNumber": 50,
      "evolvesTo": [
        "Dugtrio"
      ]
    },
    {
      "id": "base1-48",
      "name": "Doduo",
      "imageUrl": "https://images.pokemontcg.io/base1/48.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "10",
      "hp": "50",
      "convertedRetreatCost": 0,
      "number": "48",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Fury Attack",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10×",
          "text": "Flip 2 coins. This attack does 10 damage times the number of heads."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/48_hires.png",
      "nationalPokedexNumber": 84,
      "evolvesTo": [
        "Dodrio"
      ]
    },
    {
      "id": "base1-49",
      "name": "Drowzee",
      "imageUrl": "https://images.pokemontcg.io/base1/49.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "10",
      "hp": "50",
      "convertedRetreatCost": 0,
      "number": "49",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Pound",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Confuse Ray",
          "cost": [
            "Psychic",
            "Psychic"
          ],
          "convertedEnergyCost": 2,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Confused."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/49_hires.png",
      "nationalPokedexNumber": 96,
      "evolvesTo": [
        "Hypno"
      ]
    },
    {
      "id": "base1-50",
      "name": "Gastly",
      "imageUrl": "https://images.pokemontcg.io/base1/50.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "8",
      "hp": "30",
      "convertedRetreatCost": 0,
      "number": "50",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Psychic"
      ],
      "attacks": [
        {
          "name": "Sleeping Gas",
          "cost": [
            "Psychic"
          ],
          "convertedEnergyCost": 1,
          "damage": "",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Asleep."
        },
        {
          "name": "Destiny Bond",
          "cost": [
            "Psychic",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Discard 1 Energy card attached to Gastly in order to use this attack. If a Pokémon Knocks Out Gastly during your opponent's next turn, Knock Out that Pokémon."
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/50_hires.png",
      "nationalPokedexNumber": 92,
      "evolvesTo": [
        "Haunter"
      ]
    },
    {
      "id": "base1-51",
      "name": "Koffing",
      "imageUrl": "https://images.pokemontcg.io/base1/51.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "13",
      "hp": "50",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "51",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Foul Gas",
          "cost": [
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 2,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, it is now Confused."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/51_hires.png",
      "nationalPokedexNumber": 109,
      "evolvesTo": [
        "Weezing"
      ]
    },
    {
      "id": "base1-52",
      "name": "Machop",
      "imageUrl": "https://images.pokemontcg.io/base1/52.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "20",
      "hp": "50",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "52",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fighting"
      ],
      "attacks": [
        {
          "name": "Low Kick",
          "cost": [
            "Fighting"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/52_hires.png",
      "nationalPokedexNumber": 66,
      "evolvesTo": [
        "Machoke"
      ]
    },
    {
      "id": "base1-53",
      "name": "Magnemite",
      "imageUrl": "https://images.pokemontcg.io/base1/53.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "13",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "53",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Lightning"
      ],
      "attacks": [
        {
          "name": "Thunder Wave",
          "cost": [
            "Lightning"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Selfdestruct",
          "cost": [
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "40",
          "text": "Does 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magnemite does 40 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/53_hires.png",
      "nationalPokedexNumber": 81,
      "evolvesTo": [
        "Magneton"
      ]
    },
    {
      "id": "base1-54",
      "name": "Metapod",
      "imageUrl": "https://images.pokemontcg.io/base1/54.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "21",
      "evolvesFrom": "Caterpie",
      "hp": "70",
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "number": "54",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Stiffen",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Flip a coin. If heads, prevent all damage done to Metapod during your opponent's next turn. (Any other effects of attacks still happen.)"
        },
        {
          "name": "Stun Spore",
          "cost": [
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/54_hires.png",
      "nationalPokedexNumber": 11,
      "evolvesTo": [
        "Butterfree"
      ]
    },
    {
      "id": "base1-55",
      "name": "Nidoran♂",
      "imageUrl": "https://images.pokemontcg.io/base1/55.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "20",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "55",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Horn Hazard",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "30",
          "text": "Flip a coin. If tails, this attack does nothing."
        }
      ],
      "weaknesses": [
        {
          "type": "Psychic",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/55_hires.png",
      "nationalPokedexNumber": 32,
      "evolvesTo": [
        "Nidorino"
      ]
    },
    {
      "id": "base1-56",
      "name": "Onix",
      "imageUrl": "https://images.pokemontcg.io/base1/56.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "12",
      "hp": "90",
      "retreatCost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 3,
      "number": "56",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fighting"
      ],
      "attacks": [
        {
          "name": "Rock Throw",
          "cost": [
            "Fighting"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Harden",
          "cost": [
            "Fighting",
            "Fighting"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "During opponent's next turn, whenever 30 or less damage is done to Onix (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/56_hires.png",
      "nationalPokedexNumber": 95,
      "evolvesTo": [
        "Steelix"
      ]
    },
    {
      "id": "base1-57",
      "name": "Pidgey",
      "imageUrl": "https://images.pokemontcg.io/base1/57.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "8",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "57",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Whirlwind",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "10",
          "text": "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Fighting",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/57_hires.png",
      "nationalPokedexNumber": 16,
      "evolvesTo": [
        "Pidgeotto"
      ]
    },
    {
      "id": "base1-58",
      "name": "Pikachu",
      "imageUrl": "https://images.pokemontcg.io/base1/58.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "12",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "58",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Lightning"
      ],
      "attacks": [
        {
          "name": "Gnaw",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        },
        {
          "name": "Thunder Jolt",
          "cost": [
            "Lightning",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": "Flip a coin. If tails, Pikachu does 10 damage to itself."
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/58_hires.png",
      "nationalPokedexNumber": 25,
      "evolvesTo": [
        "Raichu"
      ]
    },
    {
      "id": "base1-59",
      "name": "Poliwag",
      "imageUrl": "https://images.pokemontcg.io/base1/59.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "13",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "59",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Water Gun",
          "cost": [
            "Water"
          ],
          "convertedEnergyCost": 1,
          "damage": "10+",
          "text": "Does 10 damage plus 10 damage for each Energy attached to Poliwag but not used to pay for this attack's Energy cost. Extra Energy after the end don't count."
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/59_hires.png",
      "nationalPokedexNumber": 60,
      "evolvesTo": [
        "Poliwhirl"
      ]
    },
    {
      "id": "base1-60",
      "name": "Ponyta",
      "imageUrl": "https://images.pokemontcg.io/base1/60.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "10",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "60",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Smash Kick",
          "cost": [
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": ""
        },
        {
          "name": "Flame Tail",
          "cost": [
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 2,
          "damage": "30",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/60_hires.png",
      "nationalPokedexNumber": 77,
      "evolvesTo": [
        "Rapidash"
      ]
    },
    {
      "id": "base1-61",
      "name": "Rattata",
      "imageUrl": "https://images.pokemontcg.io/base1/61.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "9",
      "hp": "30",
      "convertedRetreatCost": 0,
      "number": "61",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Colorless"
      ],
      "attacks": [
        {
          "name": "Bite",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Psychic",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/61_hires.png",
      "nationalPokedexNumber": 19,
      "evolvesTo": [
        "Raticate"
      ]
    },
    {
      "id": "base1-62",
      "name": "Sandshrew",
      "imageUrl": "https://images.pokemontcg.io/base1/62.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "12",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "62",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fighting"
      ],
      "attacks": [
        {
          "name": "Sand-attack",
          "cost": [
            "Fighting"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing."
        }
      ],
      "weaknesses": [
        {
          "type": "Grass",
          "value": "×2"
        }
      ],
      "resistances": [
        {
          "type": "Lightning",
          "value": "-30"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/62_hires.png",
      "nationalPokedexNumber": 27,
      "evolvesTo": [
        "Sandslash"
      ]
    },
    {
      "id": "base1-63",
      "name": "Squirtle",
      "imageUrl": "https://images.pokemontcg.io/base1/63.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "8",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "63",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Bubble",
          "cost": [
            "Water"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Withdraw",
          "cost": [
            "Water",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Flip a coin. If heads, prevent all damage done to Squirtle during your opponent's next turn. (Any other effects of attacks still happen.)"
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/63_hires.png",
      "nationalPokedexNumber": 7,
      "evolvesTo": [
        "Wartortle"
      ]
    },
    {
      "id": "base1-64",
      "name": "Starmie",
      "imageUrl": "https://images.pokemontcg.io/base1/64.png",
      "subtype": "Stage 1",
      "supertype": "Pokémon",
      "level": "28",
      "evolvesFrom": "Staryu",
      "hp": "60",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "64",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Recover",
          "cost": [
            "Water",
            "Water"
          ],
          "convertedEnergyCost": 2,
          "damage": "",
          "text": "Discard 1 Energy card to Starmie in order to use this attack. Remove all damage counters from Starmie."
        },
        {
          "name": "Star Freeze",
          "cost": [
            "Water",
            "Colorless",
            "Colorless"
          ],
          "convertedEnergyCost": 3,
          "damage": "20",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/64_hires.png",
      "nationalPokedexNumber": 121
    },
    {
      "id": "base1-65",
      "name": "Staryu",
      "imageUrl": "https://images.pokemontcg.io/base1/65.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "15",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "65",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Water"
      ],
      "attacks": [
        {
          "name": "Slap",
          "cost": [
            "Water"
          ],
          "convertedEnergyCost": 1,
          "damage": "20",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/65_hires.png",
      "nationalPokedexNumber": 120,
      "evolvesTo": [
        "Starmie"
      ]
    },
    {
      "id": "base1-66",
      "name": "Tangela",
      "imageUrl": "https://images.pokemontcg.io/base1/66.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "8",
      "hp": "50",
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "convertedRetreatCost": 2,
      "number": "66",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Bind",
          "cost": [
            "Grass",
            "Colorless"
          ],
          "convertedEnergyCost": 2,
          "damage": "20",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
        },
        {
          "name": "Poisonpowder",
          "cost": [
            "Grass",
            "Grass",
            "Grass"
          ],
          "convertedEnergyCost": 3,
          "damage": "30",
          "text": "The Defending Pokémon is now Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/66_hires.png",
      "nationalPokedexNumber": 114,
      "evolvesTo": [
        "Tangrowth"
      ]
    },
    {
      "id": "base1-67",
      "name": "Voltorb",
      "imageUrl": "https://images.pokemontcg.io/base1/67.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "10",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "67",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Lightning"
      ],
      "attacks": [
        {
          "name": "Tackle",
          "cost": [
            "Colorless"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": ""
        }
      ],
      "weaknesses": [
        {
          "type": "Fighting",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/67_hires.png",
      "nationalPokedexNumber": 100,
      "evolvesTo": [
        "Electrode"
      ]
    },
    {
      "id": "base1-68",
      "name": "Vulpix",
      "imageUrl": "https://images.pokemontcg.io/base1/68.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "11",
      "hp": "50",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "68",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Fire"
      ],
      "attacks": [
        {
          "name": "Confuse Ray",
          "cost": [
            "Fire",
            "Fire"
          ],
          "convertedEnergyCost": 2,
          "damage": "10",
          "text": "Flip a coin. If heads, the Defending Pokémon is now Confused."
        }
      ],
      "weaknesses": [
        {
          "type": "Water",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/68_hires.png",
      "nationalPokedexNumber": 37,
      "evolvesTo": [
        "Ninetales"
      ]
    },
    {
      "id": "base1-69",
      "name": "Weedle",
      "imageUrl": "https://images.pokemontcg.io/base1/69.png",
      "subtype": "Basic",
      "supertype": "Pokémon",
      "level": "12",
      "hp": "40",
      "retreatCost": [
        "Colorless"
      ],
      "convertedRetreatCost": 1,
      "number": "69",
      "artist": "Mitsuhiro Arita",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "types": [
        "Grass"
      ],
      "attacks": [
        {
          "name": "Poison Sting",
          "cost": [
            "Grass"
          ],
          "convertedEnergyCost": 1,
          "damage": "10",
          "text": "Flip a coin. If heads, Defending Pokémon is now Poisoned."
        }
      ],
      "weaknesses": [
        {
          "type": "Fire",
          "value": "×2"
        }
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/69_hires.png",
      "nationalPokedexNumber": 13,
      "evolvesTo": [
        "Kakuna"
      ]
    },
    {
      "id": "base1-70",
      "name": "Clefairy Doll",
      "imageUrl": "https://images.pokemontcg.io/base1/70.png",
      "subtype": "",
      "supertype": "Trainer",
      "hp": "10",
      "number": "70",
      "artist": "Keiji Kinebuchi",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Play Clefairy Doll as if it were a Basic Pokémon. While in play, Clefairy Doll counts as a Pokémon (instead of a Trainer card.) Clefairy Doll has no attacks, can't retreat, and can't be Asleep, Confused, Paralyzed, or Poisoned. If Clefairy Doll is Knocked Out, it doesn't count as a Knock Out Pokémon. At any time during tyour turn before your attack, you may discard Clefairy Doll."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/70_hires.png"
    },
    {
      "id": "base1-71",
      "name": "Computer Search",
      "imageUrl": "https://images.pokemontcg.io/base1/71.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "71",
      "artist": "Keiji Kinebuchi",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Discard 2 other cards from your hand in order to search your deck for any card and put it into your hand. Shuffle your deck afterward."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/71_hires.png"
    },
    {
      "id": "base1-72",
      "name": "Devolution Spray",
      "imageUrl": "https://images.pokemontcg.io/base1/72.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "72",
      "artist": "Keiji Kinebuchi",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Choose 1 of your own Pokémon in play and a Stage of Evolution. Discard all Evolution cards of that Stage or higher attached to that Pokémon. That Pokémon is no longer Asleep, Confused, Paralyzed, Poisoned, or anything else that might be the result of an attack (just as if you had evolved it)."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/72_hires.png"
    },
    {
      "id": "base1-73",
      "name": "Impostor Professor Oak",
      "imageUrl": "https://images.pokemontcg.io/base1/73.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "73",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Your opponent shuffles his or her hand into his or her deck, then draws 7 cards."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/73_hires.png"
    },
    {
      "id": "base1-74",
      "name": "Item Finder",
      "imageUrl": "https://images.pokemontcg.io/base1/74.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "74",
      "artist": "Keiji Kinebuchi",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Discard 2 other cards from your hand in order to put a Trainer card from your discard pile into your hand."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/74_hires.png"
    },
    {
      "id": "base1-75",
      "name": "Lass",
      "imageUrl": "https://images.pokemontcg.io/base1/75.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "75",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "You and your opponent show each other your hands, then shuffle all the trainer cards from your hands into your decks."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/75_hires.png"
    },
    {
      "id": "base1-76",
      "name": "Pokémon Breeder",
      "imageUrl": "https://images.pokemontcg.io/base1/76.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "76",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Put a Stage 2 Evolution card from your hand on the matching Basic Pokémon. You can only play this card when you would be allowed to evolve that Pokémon anyway."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/76_hires.png"
    },
    {
      "id": "base1-77",
      "name": "Pokémon Trader",
      "imageUrl": "https://images.pokemontcg.io/base1/77.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "77",
      "artist": "Ken Sugimori",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Trade 1 of the Basic Pokémon or Evolution cards in your hand for 1 of the Basic Pokémon or Evolution cards from your deck. Show both cards to your opponent. Shuffle your deck afterward."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/77_hires.png"
    },
    {
      "id": "base1-78",
      "name": "Scoop Up",
      "imageUrl": "https://images.pokemontcg.io/base1/78.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "78",
      "artist": "Keiji Kinebuchi",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Choose 1 of your own Pokémon in play and return its Basic Pokémon card to your hand. (Discard all cards attached to that card.)"
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/78_hires.png"
    },
    {
      "id": "base1-79",
      "name": "Super Energy Removal",
      "imageUrl": "https://images.pokemontcg.io/base1/79.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "79",
      "artist": "Keiji Kinebuchi",
      "rarity": "Rare",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Discard 1 Energy card attached to 1 of your own Pokémon in order to choose 1 of your opponent's Pokémon and up to 2 Energy cards attached to it. Discard those energy cards."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/79_hires.png"
    },
    {
      "id": "base1-80",
      "name": "Defender",
      "imageUrl": "https://images.pokemontcg.io/base1/80.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "80",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Attach Defender to 1 of your Pokémon. At the end of your opponent's next turn, discard Defender. Damage done to that Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance.)"
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/80_hires.png"
    },
    {
      "id": "base1-81",
      "name": "Energy Retrieval",
      "imageUrl": "https://images.pokemontcg.io/base1/81.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "81",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Trade 1 of other cards in your hand for up to 2 basic Energy cards from your discard pile."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/81_hires.png"
    },
    {
      "id": "base1-82",
      "name": "Full Heal",
      "imageUrl": "https://images.pokemontcg.io/base1/82.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "82",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/82_hires.png"
    },
    {
      "id": "base1-83",
      "name": "Maintenance",
      "imageUrl": "https://images.pokemontcg.io/base1/83.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "83",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Shuffle 2 of the other cards from your hand into your deck in order to draw a card."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/83_hires.png"
    },
    {
      "id": "base1-84",
      "name": "PlusPower",
      "imageUrl": "https://images.pokemontcg.io/base1/84.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "84",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Attach PlusPower to your Active Pokémonn. At the end of your turn, discard PlusPower. If this Pokémon's attack does damage to the defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/84_hires.png"
    },
    {
      "id": "base1-85",
      "name": "Pokémon Center",
      "imageUrl": "https://images.pokemontcg.io/base1/85.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "85",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Remove all damage counters from all of your own Pokémon with damage counters on them, then discard all Energy cards attached to those Pokémon."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/85_hires.png"
    },
    {
      "id": "base1-86",
      "name": "Pokémon Flute",
      "imageUrl": "https://images.pokemontcg.io/base1/86.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "86",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Choose 1 Basic Pokémon card from your opponent's discard pile and put it on his or her Bench. (You can't play Pokémon Flute if your opponent's Bench is full.)"
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/86_hires.png"
    },
    {
      "id": "base1-87",
      "name": "Pokédex",
      "imageUrl": "https://images.pokemontcg.io/base1/87.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "87",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Look at up to 5 cards from the top of your deck and rearrange them as you like."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/87_hires.png"
    },
    {
      "id": "base1-88",
      "name": "Professor Oak",
      "imageUrl": "https://images.pokemontcg.io/base1/88.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "88",
      "artist": "Ken Sugimori",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Discard your hand, then draw 7 cards."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/88_hires.png"
    },
    {
      "id": "base1-89",
      "name": "Revive",
      "imageUrl": "https://images.pokemontcg.io/base1/89.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "89",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Put 1 Basic Pokémon card from your discard pile onto your Bench. Put damage counters on that Pokémon equal to half its (rounded down to the nearest 10). (You can't play Revive if your Bench is full.)"
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/89_hires.png"
    },
    {
      "id": "base1-90",
      "name": "Super Potion",
      "imageUrl": "https://images.pokemontcg.io/base1/90.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "90",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Discard 1 Energy card attached to 1 of your own Pokémon in order to remove up to 4 damage counters from that Pokémon."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/90_hires.png"
    },
    {
      "id": "base1-91",
      "name": "Bill",
      "imageUrl": "https://images.pokemontcg.io/base1/91.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "91",
      "artist": "Ken Sugimori",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Draw 2 cards."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/91_hires.png"
    },
    {
      "id": "base1-92",
      "name": "Energy Removal",
      "imageUrl": "https://images.pokemontcg.io/base1/92.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "92",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/92_hires.png"
    },
    {
      "id": "base1-93",
      "name": "Gust of Wind",
      "imageUrl": "https://images.pokemontcg.io/base1/93.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "93",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Choose 1 of your opponent's Benched Pokémon and switch it with his or her Active Pokémon."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/93_hires.png"
    },
    {
      "id": "base1-94",
      "name": "Potion",
      "imageUrl": "https://images.pokemontcg.io/base1/94.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "94",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Remove up to 2 damage counters from 1 of your Pokémon."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/94_hires.png"
    },
    {
      "id": "base1-95",
      "name": "Switch",
      "imageUrl": "https://images.pokemontcg.io/base1/95.png",
      "subtype": "",
      "supertype": "Trainer",
      "number": "95",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Switch 1 of your Benched Pokémon with your Active Pokémon."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/95_hires.png"
    },
    {
      "id": "base1-96",
      "name": "Double Colorless Energy",
      "imageUrl": "https://images.pokemontcg.io/base1/96.png",
      "subtype": "Special",
      "supertype": "Energy",
      "number": "96",
      "artist": "Keiji Kinebuchi",
      "rarity": "Uncommon",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "text": [
        "Provides energy. Doesn't count as a basic energy card."
      ],
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/96_hires.png"
    },
    {
      "id": "base1-97",
      "name": "Fighting Energy",
      "imageUrl": "https://images.pokemontcg.io/base1/97.png",
      "subtype": "Basic",
      "supertype": "Energy",
      "number": "97",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/97_hires.png"
    },
    {
      "id": "base1-98",
      "name": "Fire Energy",
      "imageUrl": "https://images.pokemontcg.io/base1/98.png",
      "subtype": "Basic",
      "supertype": "Energy",
      "number": "98",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/98_hires.png"
    },
    {
      "id": "base1-99",
      "name": "Grass Energy",
      "imageUrl": "https://images.pokemontcg.io/base1/99.png",
      "subtype": "Basic",
      "supertype": "Energy",
      "number": "99",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/99_hires.png"
    },
    {
      "id": "base1-100",
      "name": "Lightning Energy",
      "imageUrl": "https://images.pokemontcg.io/base1/100.png",
      "subtype": "Basic",
      "supertype": "Energy",
      "number": "100",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/100_hires.png"
    },
    {
      "id": "base1-101",
      "name": "Psychic Energy",
      "imageUrl": "https://images.pokemontcg.io/base1/101.png",
      "subtype": "Basic",
      "supertype": "Energy",
      "number": "101",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/101_hires.png"
    },
    {
      "id": "base1-102",
      "name": "Water Energy",
      "imageUrl": "https://images.pokemontcg.io/base1/102.png",
      "subtype": "Basic",
      "supertype": "Energy",
      "number": "102",
      "artist": "Keiji Kinebuchi",
      "rarity": "Common",
      "series": "Base",
      "set": "Base",
      "setCode": "base1",
      "imageUrlHiRes": "https://images.pokemontcg.io/base1/102_hires.png"
    }
  ]
  