// all "height" is listed in feet for use of numbers as a data type

const Deities = [
  {
    "name": "Zeus",
    "gender": "male",
    "godOf": ["thunder", "sky", "lightning", "law", "order", "justice"],
    "parents": ["Chronus", "Rhea"],
    "siblings": ["Poseidon", "Hades", "Hera", "Hestia", "Demeter", "Chiron"],
    "children": ["Aeacus", "Agdistis", "Angelos", "Aphrodite", "Apollo", "Ares", "Artemis", "Athena", "Apollo", "Artemis", "Dionysus", "Eileithyia", "Enyo", "Epaphus Eris", "Ersa", "Hebe", "Helen of Troy", "Hephaestus", "Heracles", "Hermes", "Lacedaemon Minos", "Pandia", "Persephone", "Perseus", "Rhadamanthus", "The Graces", "The Horae", "The Litae", "The Muses", "The Moirai"],
    "olympian": true,
    "temples": [
      {
        "name": "Temple of Zeus",
        "location": "Olympia, Greece",
        "height": 68
      },
      {
        "name": "Temple of Olympian Zeus",
        "location": "Athens, Greece",
        "height": 57
      }
    ],
    "symbols": ["Thunderbolt", "Eagle", "Bull", "Oak"],
    "romanName": "Jupiter",
    "funFact": "His father, Cronus, sired several children and ate them all, having heard a prophecy that he would be overthrown by his heir. His mother, Rhea, saved him by handing Cronus a rock to eat instead of the baby."
  },
  {
    "name": "Poseidon",
    "gender": "male",
    "godOf": ["sea", "earthquakes", "soil", "storms", "horses"],
    "parents": ["Chronus", "Rhea"],
    "siblings": ["Hades", "Zeus", "Demeter", "Hestia", "Hera", "Chiron"],
    "children": ["Theseus", "Triton", "Polyphemus", "Orion", "Belus", "Agenor", "Neleus", "Atlas"],
    "olympian": true,
    "temples": [
      {
        "name": "Temple of Poseidon",
        "location": "Sounion, Greece",
        "height": 200
      }
    ],
    "symbols": ["Trident", "fish", "dolphin", "horse", "bull"],
    "romanName": "Neptune",
    "funFact":"Homer calls his sons cyclops and describes them as a group of mortal herdsmen. Other myths attribute cyclops to making his trident."
  },
  {
    "name": "Hades",
    "gender": "male",
    "godOf": ["the Dead", "Underworld", "Subterranean Regions", "Night Dreams", "Curses", "Death", "Darkness", "the Earth", "Fertility", "Riches", "Afterlife", "Metals"],
    "parents": ["Chronus", "Rhea"],
    "siblings": ["Hades", "Zeus", "Demeter", "Hestia", "Hera", "Chiron"],
    "children": ["Zagreus", "Macaria", "Plutus"],
    "olympian": true,
    "temples": [
      {
        "name": "Necromanteion",
        "location": "Epirus, Ephyra",
        "height": "unknown"
      }
    ],
    "symbols": ["Cerberus", "Cornucopia", "Sceptre", "Cypress", "Narcissus", "Keys", "Serpents"],
    "romanName": "Pluto",
    "funFact":"His temple is said to be the entrance to the Underworld, located on the banks of the rivers Acheron, Pyriphlegethon, and Cocytus or 'joyless', 'burning coals', and 'lament' rivers."
  },
  {
    "name": "Athena",
    "gender": "female",
    "godOf": ["wisdom", "handicraft", "war"],
    "parents": ["Zeus"],
    "siblings": ["Aeacus", "Angelos", "Aphrodite", "Apollo", "Ares", "Artemis", "Dionysus", "Eris", "Hebe", "Helen of Troy", "Hephaestus", "Heracles", "Hermes", "Minos", "Persephone", "Perseus", "the Muses", "the Moirai"],
    "children": null,
    "olympian": true,
    "temples": [
      {
        "name": "Temple of Athena Nike",
        "location": "Athens, Greece",
        "height": "unknown"
      },
      {
        "name": "The Parthenon",
        "location": "Athens, Greece",
        "height": 45
      }
    ],
    "symbols": ["Owls", "Olive trees", "Snakes", "Aegis", "Armour", "Helmets", "Spears"],
    "romanName": "Minerva",
    "funFact":"Zeus experienced a terrible headache, and asked someone to cleave his head open. When they did so, she was born fully armed from his head."
  },
  {
    "name": "Hermes",
    "gender": "male",
    "godOf": ["Messenger of the Gods", "Trade", "Theives", "Travelers", "Sports", "Athletes", "Border Crossings", "Guide to the Underworld"],
    "parents": ["Zeus", "Maia"],
    "siblings": ["Aeacus", "Angelos", "Aphrodite", "Apollo", "Ares", "Artemis", "Dionysus", "Eris", "Hebe", "Helen of Troy", "Hephaestus", "Heracles", "Hermes", "Minos", "Persephone", "Perseus", "the Muses", "the Moirai"],
    "children": ["Pan", "Hermaphroditus", "Abderus", "Autolycus", "Eudorus", "Angelia", "Myrtilus"],
    "olympian": true,
    "temples": [
      {
        "name": "Mount Cyllene",
        "location": "Arcadia, Greece",
        "height": 7795
      }
    ],
    "symbols": ["Talaria", "Caduceus", "Tortoise", "Lyre", "Rooster", "Petasos"],
    "romanName": "Mercury",
    "funFact":"During the Trojan War, he transported King Priam past the lines of the Greeks so the king could ask Achilles for the body of his son, Hector, back."
  },
  {
    "name": "Dionysus",
    "gender": "male",
    "godOf": ["Vine", "Grape harvest", "Wine-making", "Wine", "Fertility", "Ritual Madness", "Religious Ecstasy", "Theatre"],
    "parents": ["Zeus", "Semele"],
    "siblings": ["Aeacus", "Angelos", "Aphrodite", "Apollo", "Ares", "Artemis", "Dionysus", "Eris", "Hebe", "Helen of Troy", "Hephaestus", "Heracles", "Hermes", "Minos", "Persephone", "Perseus", "the Muses", "the Moirai"],
    "children": ["Priapus", "Hymen", "Thoas", "Staphylus", "Oenopion", "Comus", "Phthonus", "The Graces", "Deianira"],
    "olympian": true,
    "temples": [
      {
        "name": "Temple of Dionysus",
        "location": "Naxos, Cyclades",
        "height": null
      },
      {
        "name": "Theatre of Dionysus",
        "location": "Athens, Greece",
        "height": "n/a"
      },
      {
        "name": "Theatre of Dionysus Lysios",
        "location": "Thebes, Greece",
        "height": null
      }
    ],
    "symbols": ["Thyrsus", "Grapevine", "Bull", "Panthers"],
    "romanName": "Bacchus",
    "funFact": "There was a large festival named for him which usually lasted for days and was split into two, smaller festivals."
  },
  {
    "name": "Demeter",
    "gender": "female",
    "godOf": ["Agriculture", "Harvest", "Fertility", "Sacred Law"],
    "parents": ["Chronus", "Rhea"],
    "siblings": ["Hestia", "Hera", "Hades", "Poseidon", "Zeus", "Chiron"],
    "children": ["Persephone", "Despoina", "Arion", "Plutus", "Philomelus", "Eubuleus", "Chrysothemis"],
    "olympian": true,
    "temples": [
      {
        "name": "Temple of Demeter",
        "location": "Naxos, Greece",
        "height": 21
      }
    ],
    "symbols": ["Cornucopia", "Wheat", "Torch", "Bread"],
    "romanName": "Ceres",
    "funFact":"She was so upset by her daughter's disappearance, the Greeks used this as the reason for the cold of winter and the death of the crops."
  },
  {
    "name": "Apollo",
    "gender": "male",
    "godOf": ["Music", "Poetry", "Arts", "Oracles", "Archery", "Herds and Flocks", "Diseases", "Healing", "Light", "Sun", "Knowledge", "Protection of Young"],
    "parents": ["Zeus", "Leta"],
    "siblings": ["Artemis", "Angelos", "Aphrodite", "Ares", "Athena", "Dionysus", "Hebe", "Helen of Troy", "Hephaestus", "Heracles", "Hermes", "Persephone", "Perseus", "The Muses", "The Moirai"],
    "children": ["Asclepius", "Troilus", "Aristaeus", "Orpheus"],
    "olympian": true,
    "temples": [
      {
        "name": "Apollo Ismenius",
        "location": "Thebes, Greece",
        "height": "unknown"
      },
      {
        "name": "Apollo Daphnephoros",
        "location": "Eretria, Greece",
        "height": "n/a"
      },
      {
        "name": "Apollo Delphinios",
        "location": "Dreros, Crete",
        "height": "n/a"
      },
      {
        "name": "Pythian Apollo",
        "location": "Gortyn, Crete",
        "height": "n/a"
      },
      {
        "name": "Apollo Thermios",
        "location": "Dreros, Crete",
        "height": "n/a"
      },
      {
        "name": "Temple of Alcmeonidae",
        "location": "Delphi, Crete",
        "height": "n/a"
      }
    ],
    "symbols": ["Lyre", "Laurel Wreath", "Python", "Raven", "Swan", "Bow and Arrows"],
    "romanName": "Apollo",
    "funFact":"As the god of disease, he can bring death with his arrows. His son is the god of medicine."
  },
  {
    "name": "Artemis",
    "gender": "female",
    "godOf": ["Hunt", "Forests", "Hills", "the Moon", "Archery"],
    "parents": ["Zeus", "Leta"],
    "siblings": ["Apollo", "Angelos", "Aphrodite", "Ares", "Athena", "Dionysus", "Hebe", "Helen of Troy", "Hephaestus", "Heracles", "Hermes", "Persephone", "Perseus", "The Muses", "The Moirai"],
    "children": null,
    "olympian": true,
    "temples": [
      {
        "name": "Temple of Artemis",
        "location": "Ephesus, Ionia",
        "height": 59
      }
    ],
    "symbols": ["Bows and Arrows", "Stags", "Moon", "Hunting Dogs"],
    "romanName": "Diana",
    "funFact": "She demanded the heart of young Iphigenia as trade for the Greek's safe voyage to Troy, but then saved the girl due to her bravery."
  },
  {
    "name": "Ares",
    "gender": "male",
    "godOf": ["War"],
    "parents": ["Zeus", "Hera"],
    "siblings": ["Aphrodite", "Apollo", "Artemis", "Athena", "Dionysus", "Hebe", "Helen of Troy", "Hephaestus", "Hermes", "Heracles", "Persephone", "Perseus", "The Muses", "The Moirai"],
    "children": ["Erotes", "Phobos", "Deimos", "Phlegyas", "Harmonia", "Enyalios", "Thrax", "Oenomaus", "Amazons", "Adrestia"],
    "olympian": true,
    "temples": [
      {
        "name": "Temple of Ares",
        "location": "Athens, Greece",
        "height": null
      }
    ],
    "symbols": ["Sword", "Spear", "Sheild", "Helmet", "Chariot", "Flaming Torch", "Dog", "Boar", "Vulture"],
    "romanName": "Mars",
    "funFact":"During the Trojan War, this God fought for both sides because of his love for the fight."
  },
  {
    "name": "Hephaestus",
    "gender": "male",
    "godOf": ["Fire", "Metalworking", "Stone Masonry", "Forges", "Sculpture", "Blacksmiths"],
    "parents": ["Zeus", "Hera"],
    "siblings": ["Aphrodite", "Apollo", "Ares", "Artemis", "Athena", "Dionysus", "Hebe", "Helen of Troy", "Hermes", "Heracles", "Persephone", "Perseus", "The Muses", "The Moirai"],
    "children": ["Thalia", "Eucleia", "Eupheme", "Philophrosyne", "Cabeiri", "Euthenia"],
    "olympian": true,
    "temples": [
      {
        "name": "Temple of Hephaestus",
        "location": "Athens, Greece",
        "height": 34
      }
    ],
    "symbols": ["Hammer", "Anvil", "Tongs", "Volcano"],
    "romanName": "Vulcan",
    "funFact": "This god has his own workshop on Mount Olympus and has made the weapons of all Gods on Olympus and even forged Achilles's sheild."
  },
  {
    "name": "Hera",
    "gender": "female",
    "godOf": ["Marriage", "Family", "Women", "Childbirth"],
    "parents": ["Cronus", "Rhea"],
    "siblings": ["Poseidon", "Hades", "Demeter", "Hestia", "Zeus", "Chiron"],
    "children": ["Angelos", "Ares", "Eileithyia", "Enyo", "Eris", "Hebe", "Hephaestus"],
    "olympian": true,
    "temples": [
      {
        "name": "Temple of Hera",
        "location": "Olympia, Greece",
        "height": 50
      }
    ],
    "symbols": ["Pomegranate", "Peacock Feather", "Diadem", "Cow", "Lily", "Lotus", "Cuckoo", "Panther", "Scepter", "Throne", "Lion"],
    "romanName": "Juno",
    "funFact": "There is a common misconception about her stepson, who is seemingly named for her, but his name is in jest."
  },
  {
    "name": "Aphrodite",
    "gender": "female",
    "godOf": ["Love", "Beauty", "Sexuality"],
    "parents": ["Uranus"],
    "siblings": ["Aeacus", "Angelos", "Apollo", "Artemis", "Ares", "Athena", "Dionysus", "Eileithyia", "Enyo", "Eris", "Ersa", "Hebe", "Helen of Troy", "Hephaestus", "Heracles", "Hermes", "Minos", "Pandia", "Persephone", "Perseus", "Rhadamanthus", "The Graces", "The Horae", "The Litae", "The Muses", "The Moirai", "The Cyclopes", "The Meliae", "The Erinyes", "The Giants", "The Hekatonkheires"],
    "children": ["Eros", "Phobos", "Deimos", "Harmonia", "Pothos", "antheros", "Himeros", "Hermaphroditus", "Rhodos", "Eryx", "Peitho", "the Graces", "Priapus"],
    "olympian": true,
    "temples": [
      {
        "name": "Temple of Aphrodite, Knidos",
        "location": "Knidos, Greece",
        "height": null
      }
    ],
    "symbols": ["Dolphin", "Rose", "Scallop Shell", "Myrtle", "Dove", "Sparrow", "Girdle", "Mirror", "Pearl", "Swan"],
    "romanName": "Venus",
    "funFact":"She is the cause of Paris's affection towards Helen of Troy. Including this one, three goddesses asked Paris who was the prettiest. Given his answer, Paris was promised the most beautiful woman around."
  },
  {
    "name": "Hestia",
    "gender": "female",
    "godOf": ["Hearth", "Home", "Domesticity", "Family", "State"],
    "parents": ["Chronus", "Rhea"],
    "siblings": ["Demeter", "Hera", "Hades", "Poseidon", "Zeus", "Chiron"],
    "children": null,
    "olympian": true,
    "temples": [
      {
        "name": "Temple of Hestia",
        "location": "Ermioni, Greece",
        "height": null
      }
    ],
    "symbols": ["Hearth and fire"],
    "romanName": "Vesta",
    "funFact": "Whenever food is cooked or burnt, this goddess has her share of the honor."
  },
  {
    "name": "Tyche",
    "gender": "female",
    "godOf": ["Chance", "Prosperity and Destiny of a City", "Good Fortune", "Luck"],
    "parents": ["Zeus", "Aphrodite"],
    "siblings": [],
    "children": null,
    "olympian": false,
    "temples": [
      {
        "name": "Tychaeon",
        "location": "Alexandria, Egypt",
        "height": null
      },
      {
        "name": "Tyche Protogeneia",
        "location": "Itanos, Crete",
        "height": null
      },
    ],
    "symbols": ["Horn of Amalthea"],
    "romanName": "Fortuna",
    "funFact": "Greek historians believed that when no cause can be attributed to events like floods, draughts, or frosts, they may be caused by this goddess."
  },
  {
    "name": "Nemesis",
    "gender": "female",
    "godOf": ["Retribution"],
    "parents": ["Nyx"],
    "siblings": ["Achlys", "Apate", "Dolos", "Eleos", "Elpis", "Epiphron", "Eris", "Geras", "Hesperides", "Hybris", "Ker", "The Moirai", "Momus", "Moros", "Oizys", "Oneiroi", "Philotes", "Sophrosyne", "Thanatos", "The Oceanides", "The Potamoi"],
    "children": ["Helen of Troy", "The Telchines"],
    "olympian": false,
    "temples": [
      {
        "name": "Rhamnous",
        "location": "Attica, Greece",
        "height": null
      }
    ],
    "symbols": ["Sword", "Lash", "Dagger", "Measuring Rod", "Scales", "Bridle"],
    "romanName": "Nemesis",
    "funFact": "This Goddess brought sorrow to Narcissus, a beautiful man who fell in love with his own reflection and was unable to realize it was only an image."
  },
  {
    "name": "Nyx",
    "gender": "female",
    "godOf": ["Night"],
    "parents": ["Chaos"],
    "siblings": ["Erebus"],
    "children": ["Aether", "Hemera", "Moros", "Apate", "Dolos", "Nemesis", "Keres", "The Moirai", "The Hesperides", "Oizys", "Momus", "The Oneiroi", "Hypnos", "Thanatos", "Philotes", "Geras", "Eris"],
    "olympian": false,
    "temples": null,
    "symbols": ["Crescent Moon"],
    "romanName": "Nox",
    "funFact": "This Goddess didn't have any temples of her own but was worshipped in cults in nearly every acropolis within Greece."
  },
  {
    "name": "Uranus",
    "gender": "male",
    "godOf": ["Sky"],
    "parents": ["Gaia", "Nyx", "Aether", "Hemera"],
    "siblings": null,
    "children": ["The Titans", "The Cyclopes", "The Meliae", "The Erinyes", "The Giants", "The Hekatonkheires", "Aphrodite"],
    "olympian": false,
    "temples": null,
    "symbols": ["Zodiac Wheel"],
    "romanName": "Caelus",
    "funFact": "This god is said to have many parents according to different retellings of the myth, at times Gaia, sometimes Nyx, other times Aether and Hemera."
  },
  {
    "name": "Achlys",
    "gender": "female",
    "godOf": ["Death Mist", "Misery", "Sadness", "Deadly Poisons"],
    "parents": ["Nyx"],
    "siblings": null,
    "children": null,
    "olympian": false,
    "temples": null,
    "symbols": null,
    "romanName": null,
    "funFact": "This goddess is said to be the eternal night before chaos."
  },
  {
    "name": "Erebus",
    "gender": "male",
    "godOf": ["Darkness"],
    "parents": ["Chaos"],
    "siblings": ["Gaia", "Tartarus", "Eros", "Nyx"],
    "children": ["Thanatos", "Apate", "Aether", "Hemera", "The Keres", "Moros", "The Moirai", "The Hesperides", "Dolos", "Nemesis", "Oizys", "Oneiroi", "Momus", "Philotes", "Eris", "Geras"],
    "olympian": false,
    "temples": null,
    "symbols": null,
    "romanName": null,
    "funFact": "There is a place in the Underworld which shares a name with this God, it is where the dead pass immediately after dying."
  },
  {
    "name": "Hypnos",
    "gender": "male",
    "godOf": ["Sleep"],
    "parents": ["Nyx", "Erebus"],
    "siblings": ["Thanatos", "Nemesis", "Eris", "Keres", "Oneiroi", "Apate", "Clotho", "Lachesis", "Atropos", "Oizys"],
    "children": [],
    "olympian": false,
    "temples": null,
    "symbols": ["Poppy", "River Lethe", "Cottonwood"],
    "romanName": "Somnus",
    "funFact": "The English word for a sleep-like state is derived from this God's name."
  },
  {
    "name": "Persephone",
    "gender": "female",
    "godOf": ["the Underworld", "Springtime", "Flowers", "Vegetation"],
    "parents": ["Zeus", "Demeter"],
    "siblings": ["Aeacus", "Angelos", "Aphrodite", "Apollo", "Ares", "Arion", "Artemis", "Athena", "Chrysothemis", "Despoina", "Dionysus", "Eileithyia", "Enyo", "Eris", "Ersa", "Eubuleus", "Hebe", "Helen of Troy", "Hephaestus", "Heracles", "Hermes", "Minos", "Pandia", "Philomelus", "Plutus", "Perseus", "Rhadamanthus", "the Graces", "the Horae", "the Litae", "the Muses", "the Moirai"],
    "children": ["Melinoie", "Zagreus"],
    "olympian": true,
    "temples": 
        {
          "name": "Necromanteion",
          "location": "Epirus, Ephyra",
          "height": "unknown"
        },
    "symbols": ["Pomegranate", "Seeds of Grain", "Torch", "Flowers and Deer"],
    "romanName": "Prosperina",
    "funFact": "This Goddess was tricked into eating pomegranate seeds in the Underworld, which prevented her from leaving."
  },
  {
    "name": "Ariadne",
    "gender": "female",
    "godOf": ["Labyrinth", "Vegetation", "Mazes", "Paths", "Fertility", "Wine", "Snakes", "Passion"],
    "parents": ["Minos", "Pasiphaë"],
    "siblings": ["Phaedra", "Catreus", "Deucalion", "Glaucus", "Androgeus", "the Minotaur"],
    "children": ["Staphylus", "Oenopion"],
    "olympian": false,
    "temples": null,
    "symbols": ["String", "Thread", "Serpent", "Bull"],
    "romanName": null,
    "funFact": "This Goddess is a princess from Crete and is in charge of the Labyrinth."
  },
  {
    "name": "Nike",
    "gender": "female",
    "godOf": ["Victory"],
    "parents": ["Pallas", "Styx"],
    "siblings": ["Kratos", "Bia", "Zelus"],
    "children": null,
    "olympian": false,
    "temples": 
    {
      "name": "Temple of Athena Nike",
      "location": "Athens, Greece",
      "height": "unknown"
    },
    "symbols": ["Golden Sandals", "Wings", "Wreaths"],
    "romanName": "Victoria",
    "funFact": "This goddess flew around battlefields rewarding victors with glory and fame."
  },
  {
    "name": "the Moirai",
    "gender": "female(s)",
    "godOf": ["Fate"],
    "parents": ["Nyx"],
    "siblings": ["Clotho", "Lachesis", "Atropos"],
    "children": null,
    "olympian": false,
    "temples": null,
    "symbols": null,
    "romanName": "the Parcae",
    "funFact": "These three goddesses, often depicted as weavers, dictated every mortal and god's life with their threads. Even gods had to abide them."
  },
  {
    "name": "the Erinyes",
    "gender": "females",
    "godOf": 
    {
      "punisherOf": ["murderers", "infidelity", "oath breakers", "theft", "mortal crimes"]
    },
    "parents": ["Uranus"],
    "siblings": ["Alecto", "Megaera", "Tisiphone"],
    "children": null,
    "olympian": false,
    "temples": null,
    "symbols": null,
    "romanName": "the Dirae",
    "funFact": "These goddesses are typically depicted with snakes for hair, dog's heads, coal black bodies, bat's wings, and blood shot eyes."
  },
  {
    "name": "Chaos",
    "gender": "male",
    "godOf": null,
    "parents": null,
    "siblings": null,
    "children": ["Nyx", "Erebus"],
    "olympian": false,
    "temples": null,
    "symbols": null,
    "romanName": "Chaos",
    "funFact": "This being was the first that came to be, and is said to be the nothingness from which all else sprang."
  },
  {
    "name": "Circe",
    "gender": "female",
    "godOf": ["Magic"],
    "parents": ["Helios", "Perse"],
    "siblings": ["Pasiphaë", "Perseus"],
    "children": ["Agrius", "Latinus", "Telegonus"],
    "olympian": false,
    "temples": null,
    "symbols": ["Potions", "Herbs", "Staffs"],
    "romanName": null,
    "funFact": "This goddess transformed enemies into wild boars with the use of her magic. One of these enemies she tried to trick was Odysseus on his way home from the Trojan War. He resisted her tricks but his crew did not."
  },
  {
    "name": "Hecate",
    "gender": "female",
    "godOf": ["Magic", "Crossroads", "Ghosts", "Necromany"],
    "parents": ["Perses", "Asteria"],
    "siblings": null,
    "children": ["Scylla", "Aeëtes", "Circe", "Pasiphaë", "Empusa"],
    "olympian": false,
    "temples": [
    {
      "name": "Temple of Hecate",
      "location": "Lagina",
      "height": null
    },
    {
      "name": "Temple of Hecate",
      "location": "Argolis, Greece",
      "height": null
    }],
    "symbols": ["Paired Torches", "Dogs", "Serpents", "Keys", "Polecat", "Daggers", "Hecate's Wheel"],
    "romanName": "Diana Trivia",
    "funFact": "This goddess was thought to have given instruction in the arts of medicines and poisons."
  },
  {
    "name": "Hebe",
    "gender": "female",
    "godOf": ["Eternal Youth", "Prime of Life", "Forgiveness"],
    "parents": ["Zeus", "Hera"],
    "siblings": ["Aeacus", "Angelos", "Apollo", "Ares", "Artemis", "Athena", "Dionysus", "Eileithyia", "Enyo", "Ersa", "Helen of Troy", "Heracles", "Hermes", "Minos", "Pandia", "Persephone", "Perseus", "Rhadamanthus", "the Graces", "the Muses", "the Horae", "the Litae", "the Moirai"],
    "children": ["Alexiares", "Anicetus"],
    "olympian": false,
    "temples": [
      {
      "name": "Temple of Hebe",
      "location": "Sicyon, Greece",
      "height": null
      }],
    "symbols": ["Wine Cup", "Eagle", "Ivy", "Fountain of Youth", "Wings"],
    "romanName": "Juventas",
    "funFact": "This goddess was the youngest of the gods and was responsible for keeping them young."
  }
]

const heroes = [
  {
    "name": "Heracles",
    "gender": "male",
    "family": [
      {
        "name": "Zeus",
        "relation": "father",
        "god": true
      },
      {
        "name": "Alcmene",
        "relation": "mother",
        "god": true
      }
    ],
    "born": "Thebes, Greece",
    "adventures": ["The Argonauts", "Twelve Labors of Heracles"],
    "symbols": ["Club", "Nemean Lion", "Bow and Arrows"],
    "funFact": "This hero is responsible for the death of his wife and two children, which happened while he was temporarily insane."
  },
  {
    "name": "Perseus",
    "gender": "male",
    "family": [
      {
        "name": "Zeus",
        "relation": "father",
        "god": true
      },
      {
        "name": "Danaë",
        "relation": "mother",
        "god": false
      }
    ],
    "born": "Argos",
    "adventures": ["Slay the Gorgon"],
    "symbols": ["Medusa's Head"],
    "funFact": "This hero is the half-brother and great-grandfather of Heracles."
  },
  {
    "name": "Thesus",
    "gender": "male",
    "family": [
      {
        "name": "Aegeus",
        "relation": "father",
        "god": false
      },
      {
        "name": "Aethra",
        "relation": "mother",
        "god": false
      }
    ],
    "born": "Athens",
    "adventures": ["Medea and the Marathonian Bull", "Minotaur", "Underworld"],
    "symbols": ["Club"],
    "funFact": "This hero's step-mother tried to have him killed because he could potentially overthrow the throne."
  },
  {
    "name": "Hippolyta",
    "gender": "female",
    "family": [
      {
        "name": "Ares",
        "relation": "father",
        "god": true
      }
    ],
    "born": "Amazon",
    "adventures": ["9th Labor of Heracles", "Marriage to Theseus"],
    "symbols": ["Girdle"],
    "funFact": "This heroine's name comes from Greek roots meaning 'horse' and 'let loose'"
  },
  {
    "name": "Achilles",
    "gender": "male",
    "family": [
      {
        "name": "Thetis",
        "relation": "mother",
        "god": true
      },
      {
        "name": "Peleus",
        "relation": "father",
        "god": false
      }
    ],
    "born": "Thessaly",
    "adventures": ["Hiding on Skyros", "the Trojan War"],
    "symbols": ["Shield"],
    "funFact": "This heros's shield was so intricate that it is said to have shown all aspects of life."
  },
  {
    "name": "Orpheus",
    "gender": "male",
    "family": [
      {
        "name": "Eurydice",
        "relation": "wife",
        "god": false
      },
      {
        "name": "Calliope",
        "relation": "mother",
        "god": false
      },
      {
        "name": "Apollo",
        "relation": "father",
        "god": true
      }
    ],
    "born": "Pimpleia",
    "adventures": ["Underworld Wife Rescue"],
    "symbols": ["Lyre"],
    "funFact": "This hero once descended into the Underworld to save his loved one, but was told he must wait to reach the surface before turning around to glance at her. Just before they made it out, he glanced back and his loved one was lost to Hades forever."
  },
  {
    "name": "Helen of Troy",
    "gender": "female",
    "family": [
      {
        "name": "Leda",
        "relation": "mother",
        "god": false
      },
      {
        "name": "Zeus",
        "relation": "father",
        "god": true
      }
    ],
    "born": "Sparta",
    "adventures": ["the Trojan War"],
    "symbols": null,
    "funFact": "It is said that this heroine was born from an egg after her father's relations with her mother."
  },
  {
    "name": "Dedalus",
    "gender": "male",
    "family": [
      {
        "name": "Icarus",
        "relation": "son",
        "god": false
      },
      {
        "name": "Iapyx",
        "relation": "son",
        "god": false
      }
    ],
    "born": "Athens",
    "adventures": ["Labyrinth"],
    "symbols": ["Labyrinth"],
    "funFact": "This hero constructed wings for his son, hoping to allow him to fly closer to the moon. The sun melted the wings and the boy was lost."
  },
  {
    "name": "Odysseus",
    "gender": "male",
    "family": [
      {
        "name": "Laërtes",
        "relation": "father",
        "god": false
      },
      {
        "name": "Anticlea",
        "relation": "mother",
        "god": false
      },
      {
        "name": "Hermes",
        "relation": "Great-Grandfather",
        "god": true
      }
    ],
    "born": "Ithaca",
    "adventures": ["Odyssey", "Trojan War", "Argonauts"],
    "symbols": null,
    "funFact": "It took this hero ten years to arrive home after the Trojan War. He came back home to find suitors fighting for his wife."
  },
  {
    "name": "Aeneas",
    "gender": "male",
    "family": [
      {
        "name": "Aphrodite",
        "relation": "mother",
        "god": true
      },
      {
        "name": "Anchises",
        "relation": "father",
        "god": false
      }
    ],
    "born": "Troy",
    "adventures": ["Wander to Italy"],
    "symbols": null,
    "funFact": "After the Trojan War, this hero fled to Italy and fathered the founders of Rome."
  },
  {
    "name": "Jason",
    "gender": "male",
    "family": [
      {
        "name": "Aeson",
        "relation": "father",
        "god": false
      },
      {
        "name": "Hermes",
        "relation": "Great-Grandson",
        "god": true
      }
    ],
    "born": "Iolcos",
    "adventures": ["Argonauts"],
    "symbols": ["Golden Fleece"],
    "funFact": "After the Trojan War, this hero fled to Italy and fathered the founders of Rome."
  }
]