const companies = [
  {
    "name": "Atari SA",
    "year-founded": 1972,
    "year-defunct": "N/A",
    "founders": [
    "Nolan Bushnell", 
    "Ted Dabney"
    ],
    "logo": { 
      "name": "Fuji", 
      "designer": "George Opperman", 
      "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Atari_Official_2012_Logo.svg/440px-Atari_Official_2012_Logo.svg.png" 
    },
    "consoles": [
    "Atari 2600", 
    "Atari 800", 
    "Atari 400", 
    "Atari 5200", 
    "Atari 7800", 
    "Atari Lynx", 
    "Atari Jaguar", 
    "Atari VCS"
    ]
  },
  {
    "name": "Bandai Co., Ltd.",
    "year-founded": 1950,
    "year-defunct": "N/A",
    "founders": ["Naoharu Yamashina"],
    "logo": { 
      "name": "Banzai mark", 
      "designer": "N/A", 
      "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/BANDAI.svg/282px-BANDAI.svg.png" 
    },
    "consoles": [
    "Bandai Super Vision 8000", 
    "Bandai Arcadia", 
    "Playdia", 
    "WonderSwan", 
    "WonderSwan Color", 
    "Swan Crystal"
    ]
  },
  {
    "name": "Coleco Industries, Inc.",
    "year-founded": 1932,
    "year-defunct": 1988,
    "founders": ["Maurice Greenberg"],
    "logo": { 
      "name": "N/A", 
      "designer": "N/A", 
      "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Coleco_logo.svg/440px-Coleco_logo.svg.png" 
    },
    "consoles": [
    "Telstar", 
    "Electronic Quarterback", 
    "ColecoVision", 
    "Coleco Gemini", 
    "Coleco Adam"
    ]
  },
  {
    "name": "Magnavox",
    "year-founded": 1917,
    "year-defunct": "N/A",
    "founders": [
    "Edwin Pridham", 
    "Peter L. Jensen"
    ],
    "logo": { 
      "name": "N/A", 
      "designer": "N/A", 
      "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Magnavox_Logo.svg/500px-Magnavox_Logo.svg.png" 
    },
    "consoles": [
    "Magnavox Odyssey", 
    "Odyssey2"
    ]
  },
  {
    "name": "Microsoft Corporation",
    "year-founded": 1975,
    "year-defunct": "N/A",
    "founders": [
    "Bill Gates", 
    "Paul Allen"
    ],
    "logo": { 
      "name": "N/A", 
      "designer": "N/A", 
      "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/440px-Microsoft_logo_%282012%29.svg.png" 
    },
    "consoles": [
    "Xbox", 
    "Xbox 360", 
    "Xbox One"
    ]
  },
  {
    "name": "Nintendo Co., Ltd.",
    "year-founded": 1889,
    "year-defunct": "N/A",
    "founders": ["Fusajiro Yamauchi"],
    "logo": { 
      "name": "N/A", 
      "designer": "N/A", 
      "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/440px-Nintendo.svg.png" 
    },
    "consoles": [
    "Color TV-Game", 
    "Game & Watch", 
    "Nintendo Entertainment System", 
    "Game Boy", 
    "Super Nintendo Entertainment System", 
    "Virtual Boy", 
    "Nintendo 64", 
    "Game Boy Pocket", 
    "Game Boy Color", 
    "Game Boy Advance", 
    "GameCube", 
    "Game Boy Advance SP", 
    "Nintendo DS", 
    "Game Boy Micro", 
    "Nintendo DS Lite", 
    "Nintendo Wii", 
    "Nintendo DSi", 
    "Nintendo DSi XL", 
    "Nintendo 3DS", 
    "Nintendo Wii U", 
    "Nintendo 2DS", 
    "Wii Mini", 
    "Nintendo Switch"
    ]
  },
  {
    "name": "Sony Corporation",
    "year-founded": 1946,
    "year-defunct": "N/A",
    "founders": [
    "Masaru Ibuka", 
    "Akio Morita"
    ],
    "logo": { 
      "name": "N/A", 
      "designer": "N/A", 
      "link": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/440px-Sony_logo.svg.png" 
    },
    "consoles": [
    "PlayStation", 
    "PlayStation 2", 
    "PlayStation 3", 
    "PlayStation Portable", 
    "PlayStation Vita", 
    "PlayStation 4"
    ]
  }
];

const consoles = [
  {
    "name": "Atari 2600",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Atari_2600_logo.svg/300px-Atari_2600_logo.svg.png",
    "manufacturer": "Atari, Inc.",
    "release-date": "September 11th, 1977",
    "release-year": 1977,
    "generation": 2,
    "handheld": false,
    "media-type": "ROM cartridge",
    "best-selling-game": {
      "name": "Pac-Man",
      "designers": ["Tod Frye"],
      "release-date": "March 16th, 1982",
      "release-year": 1982,
      "copies-sold": "7 million"
    }
  },
  {
    "name": "Atari Jaguar",
    "logo": "https://upload.wikimedia.org/wikipedia/en/d/dc/Jaguar_Logo.png",
    "manufacturer": "IBM",
    "release-date": "November 23rd, 1993",
    "release-year": 1993,
    "generation": 5,
    "handheld": false,
    "media-type": "ROM cartridge",
    "best-selling-game": {
      "name": "Alien vs Predator",
      "designers": [
      "Andrew Keim", 
      "Dan McNamee", 
      "Hans Jacobsen"
      ],
      "release-date": "October 21st, 1994",
      "release-year": 1994,
      "copies-sold": "85 thousand"
    }
  },
  {
    "name": "Bandai Super Vision 8000",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Bandai_Super_Vision_8000_Logo.png/500px-Bandai_Super_Vision_8000_Logo.png",
    "manufacturer": "Bandai",
    "release-date": "N/A",
    "release-year": 1979,
    "generation": 2,
    "handheld": false,
    "media-type": "ROM cartridge",
    "best-selling-game": "N/A"
  },
  {
    "name": "WonderSwan",
    "logo": "",
    "manufacturer": "Bandai",
    "release-date": "March 4th, 1999",
    "release-year": 1999,
    "generation": 5,
    "handheld": true,
    "media-type": "ROM cartridge",
    "best-selling-game": {
      "name": "Final Fantasy II",
      "designers": [
      "Hiromichi Tanaka", 
      "Akitoshi Kawazu", 
      "Koichi Ishii"
      ],
      "release-date": "December 17th, 1988",
      "release-year": 1988,
      "copies-sold": "330 thousand"
    }
  },
  {
    "name": "ColecoVision",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/COLECO_VISION_LOGO.svg/500px-COLECO_VISION_LOGO.svg.png",
    "manufacturer": "Coleco Industries, Inc.",
    "release-date": "August 1982",
    "release-year": 1982,
    "generation": 2,
    "handheld": false,
    "media-type": "ROM cartridge",
    "best-selling-game": {
      "name": "Donkey Kong",
      "designers": [
      "Shigeru Miyamoto", 
      "Gunpei Yokoi"
      ],
      "release-date": "July 9th, 1981",
      "release-year": 1981,
      "copies-sold": "N/A"
    }
  },
  {
    "name": "Magnavox Odyssey",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Magnavox_Odyssey_Logo.svg/440px-Magnavox_Odyssey_Logo.svg.png",
    "manufacturer": "Magnavox",
    "release-date": "September 1972",
    "release-year": 1972,
    "generation": 1,
    "handheld": false,
    "media-type": "game-card",
    "best-selling-game": "N/A"
  },
  {
    "name": "Xbox",
    "logo": "https://upload.wikimedia.org/wikipedia/en/2/2a/Xbox_original_logo_black.png",
    "manufacturer": "Flextronics",
    "release-date": "November 15th, 2001",
    "release-year": 2001,
    "generation": 6,
    "handheld": false,
    "media-type": "DVD",
    "best-selling-game": {
      "name": "Halo 2",
      "designers": ["Jason Jones"],
      "release-date": "November 9th, 2004",
      "release-year": 2004,
      "copies-sold": "8.46 million"
    }
  },
  {
    "name": "Xbox 360",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Xbox_360_full_logo.svg/440px-Xbox_360_full_logo.svg.png",
    "manufacturer": "Flextronics",
    "release-date": "November 22, 2005",
    "release-year": 2005,
    "generation": 7,
    "handheld": false,
    "media-type": "DVD",
    "best-selling-game": {
      "name": "Kinect Adventures!",
      "designers": "N/A",
      "release-date": "November 4th, 2010",
      "release-year": 2010,
      "copies-sold": "24 million"
    }
  },
  {
    "name": "Xbox One",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Xbox_One_logo.svg/440px-Xbox_One_logo.svg.png",
    "manufacturer": "Flextronics",
    "release-date": "November 22, 2013",
    "release-year": 2013,
    "generation": 8,
    "handheld": false,
    "media-type": "DVD",
    "best-selling-game": {
      "name": "PlayerUnknowns Battlegrounds",
      "designers": ["Brendan Greene"],
      "release-date": "December 20th, 2017",
      "release-year": 2017,
      "copies-sold": "8 million"
    }
  },
  {
    "name": "Nintendo Entertainment System",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/NES_logo.svg/440px-NES_logo.svg.png",
    "manufacturer": "Nintendo",
    "release-date": "July 15th, 1983",
    "release-year": 1983,
    "generation": 3,
    "handheld": false,
    "media-type": "ROM cartridge",
    "best-selling-game": {
      "name": "Super Mario Bros.",
      "designers": [
      "Shigeru Miyamoto", 
      "Takashi Tezuka"
      ],
      "release-date": "September 13th, 1985",
      "release-year": 1985,
      "copies-sold": "40.24 million"
    }
  },
  {
    "name": "Game Boy",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Gameboy_logo.svg/490px-Gameboy_logo.svg.png",
    "manufacturer": "Nintendo",
    "release-date": "April 21st, 1989",
    "release-year": 1989,
    "generation": 4,
    "handheld": true,
    "media-type": "Game Pak",
    "best-selling-game": {
      "name": "Tetris",
      "designers": "N/A",
      "release-date": "June 14th, 1989",
      "release-year": 1989,
      "copies-sold": "30.26 million"
    }
  },
  {
    "name": "Super Nintendo Entertainment System",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Super_Nintendo_Entertainment_System_logo.svg/360px-Super_Nintendo_Entertainment_System_logo.svg.png",
    "manufacturer": "Nintendo",
    "release-date": "November 21st, 1990",
    "release-year": 1990,
    "generation": 4,
    "handheld": false,
    "media-type": "ROM cartridge",
    "best-selling-game": {
      "name": "Super Mario World",
      "designers": "N/A",
      "release-date": "November 21st, 1990",
      "release-year": 1990,
      "copies-sold": "20.60 million"
    }
  },
  {
    "name": "Virtual Boy",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Virtualboy_logo.svg/400px-Virtualboy_logo.svg.png",
    "manufacturer": "Nintendo",
    "release-date": "July 21st, 1995",
    "release-year": 1995,
    "generation": 5,
    "handheld": true,
    "media-type": "ROM cartridge",
    "best-selling-game": {
      "name": "Mario Tennis",
      "designers": "N/A",
      "release-date": "July 21st, 1995",
      "release-year": 1995,
      "copies-sold": "770 thousand"
    }
  },
  {
    "name": "Nintendo 64",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Nintendo_64_Logo.svg/220px-Nintendo_64_Logo.svg.png",
    "manufacturer": "Nintendo",
    "release-date": "June 23rd, 1996",
    "release-year": 2996,
    "generation": 5,
    "handheld": false,
    "media-type": "Nintendo 64 Game Pak",
    "best-selling-game": {
      "name": "Super Mario 64",
      "designers": "N/A",
      "release-date": "June 23rd, 1996",
      "release-year": 1996,
      "copies-sold": "11.62 million"
    }
  },
  {
    "name": "Game Boy Color",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Game_Boy_Color_logo.svg/440px-Game_Boy_Color_logo.svg.png",
    "manufacturer": "Nintendo",
    "release-date": "October 21st, 1998",
    "release-year": 1998,
    "generation": 5,
    "handheld": true,
    "media-type": "Game Pak",
    "best-selling-game": {
      "name": "Pokemon Gold and Silver",
      "designers": ["Satoshi Tajiri"],
      "release-date": "November 21st, 1999",
      "release-year": 1999,
      "copies-sold": "14.51 million"
    }
  },
  {
    "name": "Game Boy Advance",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gameboy_advance_logo.svg/500px-Gameboy_advance_logo.svg.png",
    "manufacturer": "Nintendo",
    "release-date": "March 21st, 2001",
    "release-year": 2001,
    "generation": 6,
    "handheld": true,
    "media-type": "Game Pak",
    "best-selling-game": {
      "name": "Pokemon Ruby and Sapphire",
      "designers": "GameFreak",
      "release-date": "November 21st, 2002",
      "release-year": 2002,
      "copies-sold": "16 million"
    }
  },
  {
    "name": "GameCube",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Nintendo_Gamecube_Logo.svg/440px-Nintendo_Gamecube_Logo.svg.png",
    "manufacturer": "Foxconn",
    "release-date": "September 14th, 2001",
    "release-year": 2001,
    "generation": 6,
    "handheld": false,
    "media-type": "GameCube game disc",
    "best-selling-game": {
      "name": "Super Smash Bros. Melee",
      "designers": ["Masahiro Sakurai"],
      "release-date": "November 21st, 2001",
      "release-year": 2001,
      "copies-sold": "7.09 million"
    }
  },
  {
    "name": "Game Boy Advance SP",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Gameboy_advance_SP_logo.svg/500px-Gameboy_advance_SP_logo.svg.png",
    "manufacturer": "Nintendo",
    "release-date": "February 14th, 2003",
    "release-year": 2003,
    "generation": 6,
    "handheld": true,
    "media-type": "Game Pak",
    "best-selling-game": {
      "name": "Pokemon Ruby and Sapphire",
      "designers": ["GameFreak"],
      "release-date": "November 21st, 2002",
      "release-year": 2002,
      "copies-sold": "16 million"
    }
  },
  {
    "name": "Nintendo DS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Nintendo_DS_Logo.svg/500px-Nintendo_DS_Logo.svg.png",
    "manufacturer": "Foxconn",
    "release-date": "November 21st, 2004",
    "release-year": 2004,
    "generation": 7,
    "handheld": true,
    "media-type": "Nintendo game card",
    "best-selling-game": {
      "name": "New Super Mario Bros.",
      "designers": ["Masanao Arimoto"],
      "release-date": "May 15th, 2006",
      "release-year": 2006,
      "copies-sold": "30.80 million"
    }
  },
  {
    "name": "Game Boy Micro",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Gameboy_micro_logo.svg/500px-Gameboy_micro_logo.svg.png",
    "manufacturer": "Nintendo",
    "release-date": "September 13th, 2005",
    "release-year": 2005,
    "generation": 6,
    "handheld": true,
    "media-type": "Game Pak",
    "best-selling-game": {
      "name": "Pokemon Ruby and Sapphire",
      "designers": ["GameFreak"],
      "release-date": "November 21st, 2002",
      "release-year": 2002,
      "copies-sold": "16 million"
    }
  },
  {
    "name": "Nintendo Wii",
    "logo": "https://en.wikipedia.org/wiki/File:Wii.svg",
    "manufacturer": "Foxconn",
    "release-date": "November 19th, 2006",
    "release-year": 2006,
    "generation": 7,
    "handheld": false,
    "media-type": "Wii Optical Disc",
    "best-selling-game": {
      "name": "Wii Sports",
      "designers": ["Junji Morii"],
      "release-date": "November 19th, 2006",
      "release-year": 2006,
      "copies-sold": "82.86 million"
    }
  },
  {
    "name": "Nintendo 3DS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Nintendo_3DS_%28logo%29.svg/440px-Nintendo_3DS_%28logo%29.svg.png",
    "manufacturer": "Foxconn",
    "release-date": "February 26th, 2011",
    "release-year": 2011,
    "generation": 8,
    "handheld": true,
    "media-type": "Nintendo 3DS game card",
    "best-selling-game": {
      "name": "Mario Kart 7",
      "designers": [""],
      "release-date": "December 1st, 2011",
      "release-year": 2011,
      "copies-sold": "18.11 million"
    }
  },
  {
    "name": "Nintendo Wii U",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/WiiU.svg/260px-WiiU.svg.png",
    "manufacturer": "Foxconn",
    "release-date": "November 18th, 2012",
    "release-year": 2012,
    "generation": 8,
    "handheld": false,
    "media-type": "Wii U Optical Disc",
    "best-selling-game": {
      "name": "Mario Kart 8",
      "designers": "N/A",
      "release-date": "May 29th, 2014",
      "release-year": 2014,
      "copies-sold": "8.42 million"
    }
  },
  {
    "name": "Nintendo Switch",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nintendo_switch_logo.png/440px-Nintendo_switch_logo.png",
    "manufacturer": "Foxconn",
    "release-date": "March 3rd, 2017",
    "release-year": 2017,
    "generation": 8,
    "handheld": true,
    "media-type": "Nintendo Switch game card",
    "best-selling-game": {
      "name": "Mario Kart 8 Deluxe",
      "designers": "N/A",
      "release-date": "April 28th, 2017",
      "release-year": 2017,
      "copies-sold": "15.02 million"
    }
  },
  {
    "name": "PlayStation",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/150px-Playstation_logo_colour.svg.png",
    "manufacturer": "Sony",
    "release-date": "December 3rd, 1994",
    "release-year": 1994,
    "generation": 5,
    "handheld": false,
    "media-type": "CD-ROM",
    "best-selling-game": {
      "name": "Gran Turismo",
      "designers": [
      "Kazunori Yamauchi", 
      "Takeshi Yokouchi", 
      "Hirotaka Komiyama"
      ],
      "release-date": "December 23rd, 1997",
      "release-year": 1997,
      "copies-sold": "10.85 million"
    }
  },
  {
    "name": "PlayStation 2",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/PlayStation_2_logo.svg/440px-PlayStation_2_logo.svg.png",
    "manufacturer": "Sony",
    "release-date": "March 4th, 2000",
    "release-year": 2000,
    "generation": 6,
    "handheld": false,
    "media-type": "DVD",
    "best-selling-game": {
      "name": "Grand Theft Auto: San Andreas",
      "designers": "N/A",
      "release-date": "October 26th, 2004",
      "release-year": 2004,
      "copies-sold": "17.33 million"
    }
  },
  {
    "name": "PlayStation 3",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/PlayStation_3_Logo_neu.svg/360px-PlayStation_3_Logo_neu.svg.png",
    "manufacturer": "Sony",
    "release-date": "November 11th, 2006",
    "release-year": 2006,
    "generation": 7,
    "handheld": false,
    "media-type": "DVD",
    "best-selling-game": {
      "name": "Grand Theft Auto IV",
      "designers": "N/A",
      "release-date": "April 29th, 2008",
      "release-year": 2008,
      "copies-sold": "25 million"
    }
  },
  {
    "name": "PlayStation Portable",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/PSP_Logo.svg/500px-PSP_Logo.svg.png",
    "manufacturer": "Sony",
    "release-date": "December 12th, 2004",
    "release-year": 2004,
    "generation": 7,
    "handheld": true,
    "media-type": "UMD",
    "best-selling-game": {
      "name": "Grand Theft Auto: Liberty City Stories",
      "designers": ["David Bland"],
      "release-date": "October 24th, 2005",
      "release-year": 2005,
      "copies-sold": "7.6 million"
    }
  },
  {
    "name": "PlayStation Vita",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/PlayStation_Vita_logo_SVG.svg/440px-PlayStation_Vita_logo_SVG.svg.png",
    "manufacturer": "Sony",
    "release-date": "December 17th, 2011",
    "release-year": 2011,
    "generation": 8,
    "handheld": true,
    "media-type": "PS Vita Card",
    "best-selling-game": {
      "name": "Uncharted: Golden Abyss",
      "designers": "N/A",
      "release-date": "December 17th, 2011",
      "release-year": 2011,
      "copies-sold": "400 thousand"
    }
  },
  {
    "name": "PlayStation 4",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PlayStation_4_logo_and_wordmark.svg/440px-PlayStation_4_logo_and_wordmark.svg.png",
    "manufacturer": "Sony",
    "release-date": "November 15, 2013",
    "release-year": 2013,
    "generation": 8,
    "handheld": false,
    "media-type": "DVD",
    "best-selling-game": {
      "name": "Marvels Spider-Man",
      "designers": [
      "Cameron Christian", 
      "James Cooper", 
      "Mike Daly", 
      "Joel Goodsell", 
      "Mark Stuart"
      ],
      "release-date": "September 7th, 2018",
      "release-year": 2018,
      "copies-sold": "9 million"
    }
  }
];

module.exports = {
  companies,
  consoles
}