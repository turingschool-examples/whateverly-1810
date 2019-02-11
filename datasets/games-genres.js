const games =
    [
        {
            "name": "The Last of Us",
            "platforms": ["Playstation 3", "Playstation 4"],
            "genre": ["Action", "Adventure", "Horror"],
            "multiplayer": true,
            "metaScore": 95,
            "img": "https://i.ebayimg.com/images/g/ZX4AAOSw1vlUrlTm/s-l300.jpg"
        },
        {
            "name": "Super Smash Bros. Ultimate",
            "platforms": ["Switch"],
            "genre": ["Beat-'Em-Up", "Fighting"],
            "multiplayer": true,
            "metaScore": 93,
            "img": "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg"
        },
        {
            "name": "The Binding of Isaac: Rebirth",
            "platforms": ["PC", "Playstation 4", "Xbox One"],
            "genre": ["Rouge-like", "Horror", "Strategy"],
            "multiplayer": false,
            "metaScore": 83,
            "img": "https://static.giantbomb.com/uploads/scale_small/8/87790/2768049-box_tobir.jpg"
        },
        {
            "name": "Dark Souls",
            "platforms": ["PC", "Playstation 4", "Xbox One"],
            "genre": ["Action", "Adventure", "RPG", "Fantasy"],
            "multiplayer": true,
            "metaScore": 64,
            "img": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Dark_Souls_Cover_Art.jpg/220px-Dark_Souls_Cover_Art.jpg"
        },
        {
            "name": "Dark Souls II",
            "platforms": ["PC", "Playstation 4", "Xbox One"],
            "genre": ["Action", "Adventure", "RPG", "Fantasy"],
            "multiplayer": true,
            "metaScore": 73,
            "img": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Dark_Souls_II_cover.jpg/220px-Dark_Souls_II_cover.jpg"
        },
        {
            "name": "Bloodborne",
            "platforms": ["Playstation 4"],
            "genre": ["Action", "Adventure", "RPG", "Fantasy"],
            "multiplayer": true,
            "metaScore": 92,
            "img": "https://media.playstation.com/is/image/SCEA/bloodborne-two-column-02-ps4-us-04jun14?$MediaCarousel_Original$"
        },
        {
            "name": "Darkest Dungeon",
            "platforms": ["PC", "Playstation 4", "Xbox One"],
            "genre": ["Turn-based", "Strategy", "Horror", "RPG", "Rouge-like"],
            "multiplayer": false,
            "metaScore": 84,
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRTecp6vKa4Blo4o0s84iBWN-rvXLJltJ-rvgRUacvtekQ4o7"
        },
        {
            "name": "Hunt: Showdown",
            "platforms": ["PC"],
            "genre": ["Battle-royal", "Horror", "Survival", "FPS"],
            "multiplayer": true,
            "metaScore": 70,
            "img": "https://www.instant-gaming.com/images/products/2464/271x377/2464.jpg"
        },
        {
            "name": "World of Warcraft",
            "platforms": ["PC"],
            "genre": ["MMO", "RPG", "Fantasy"],
            "multiplayer": true,
            "metaScore": 93,
            "img": "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/WoW_Box_Art1.jpg/220px-WoW_Box_Art1.jpg"
        },
        {
            "name": "Final Fantasy VII",
            "platforms": ["PC", "Playstation 4", "Xbox One"],
            "genre": ["Turn-based", "RPG", "Fantasy"],
            "multiplayer": false,
            "metaScore": 92,
            "img": "https://www.instant-gaming.com/images/products/1683/271x377/1683.jpg"
        },
        {
            "name": "Final Fantasy VIII",
            "platforms": ["Playstation", "PC"],
            "genre": ["Turn-based", "RPG", "Fantasy"],
            "multiplayer": false,
            "metaScore": 90,
            "img": "https://ips.pepitastore.com/storefront/img/resized/squareenix-store-v2/FFVIII_Packshot_01_ESRB_620_KR.jpg"
        },
        {
            "name": "The Elder Scrolls V: Skyrim",
            "platforms": ["PC", "Playstation 3", "Playstation 4", "Xbox 360", "Xbox One"],
            "genre": ["Action", "Adventure", "RPG", "Fantasy"],
            "multiplayer": false,
            "metaScore": 94,
            "img": "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png"
        },
        {
            "name": "Tom Clancy's Rainbow Six Siege",
            "platforms": ["PC", "Playstation 4", "Xbox One"],
            "genre": ["FPS", "Strategy"],
            "multiplayer": true,
            "metaScore": 74,
            "img": "https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Rainbow_Six_Siege_cover_art.jpg"
        },
        {
            "name": "Slender: The Eight Pages",
            "platforms": ["PC"],
            "genre": ["Horror", "Survival"],
            "multiplayer": false,
            "metaScore": 93,
            "img": "https://static.giantbomb.com/uploads/scale_small/15/155745/2290330-slender_cover_art.jpg"
        },
        {
            "name": "Diablo III",
            "platforms": ["PC", "Playstation 3", "Playstation 4", "Xbox 360", "Xbox One", "Switch"],
            "genre": ["Action", "RPG", "Hack-n-Slash", "Fantasy"],
            "multiplayer": true,
            "metaScore": 88,
            "img": "https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png"
        },
        {
            "name": "Borderlands",
            "platforms": ["PC", "Playstation 3", "Playstation 4", "Xbox 360", "Xbox One"],
            "genre": ["Action", "Adventure", "FPS", "RPG"],
            "multiplayer": true,
            "metaScore": 84,
            "img": "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Borderlandscover.jpg/220px-Borderlandscover.jpg"
        },
        {
            "name": "Borderlands 2",
            "platforms": ["PC", "Playstation 3", "Playstation 4", "Xbox 360", "Xbox One"],
            "genre": ["Action", "Adventure", "FPS", "RPG"],
            "multiplayer": true,
            "metaScore": 89,
            "img": "https://upload.wikimedia.org/wikipedia/en/7/77/Borderlands2boxart3.jpg"
        },
        {
            "name": "Borderlands: The Pre-Sequel",
            "platforms": ["PC", "Playstation 3", "Playstation 4", "Xbox 360", "Xbox One"],
            "genre": ["Action", "Adventure", "FPS", "RPG"],
            "multiplayer": true,
            "metaScore": 74,
            "img": "https://upload.wikimedia.org/wikipedia/en/6/62/Borderlands_The_Pre-Sequel_box_art.jpg"
        },
        {
            "name": "Red Dead Redemption",
            "platforms": ["Playstation 3", "Xbox 360"],
            "genre": ["Action", "Adventure"],
            "multiplayer": true,
            "metaScore": 89,
            "img": "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
        },
        {
            "name": "FTL: Faster Than Light",
            "platforms": ["PC"],
            "genre": ["Rouge-like", "Tile-based", "Strategy"],
            "multiplayer": false,
            "metaScore": 84,
            "img": "http://draftpromocodefreeentry.com/wp-content/uploads/2018/07/the-galactic-federation-of-light-lovely-ftl-faster-than-light-game-giant-bomb-of-the-galactic-federation-of-light.jpg"
        },
        {
            "name": "Outlast",
            "platforms": ["PC", "Xbox One", "Playstation 4", "Switch"],
            "genre": ["Horror", "Survival"],
            "multiplayer": false,
            "metaScore": 80,
            "img": "https://static.giantbomb.com/uploads/scale_small/8/87790/2958612-box_outlast.png"
        },
        {
            "name": "Sonic the Hedgehog",
            "platforms": ["Sega", "PC", "Xbox 360", "Xbox One", "Playstation 3", "Playstation 4"],
            "genre": ["Platformer"],
            "multiplayer": false,
            "metaScore": 88,
            "img": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg/220px-Sonic_the_Hedgehog_1_Genesis_box_art.jpg"
        },
        {
            "name": "Streets of Rage",
            "platforms": ["Sega", "PC", "Playstation 3", "Xbox 360"],
            "genre": ["Action", "Beat-'Em-Up"],
            "multiplayer": false,
            "metaScore": 84,
            "img": "https://i.ebayimg.com/12/!!e!T6DQB2M~$(KGrHqJ,!i4E0FlSuh8tBNP2i!Drdg~~_1.JPG?set_id=89040003C1"
        },
        {
            "name": "Resident Evil 4",
            "platforms": ["GameCube", "PC", "Playstation 3", "Playstation 4", "Playstation 2", "Xbox 360", "Xbox One", "Switch"],
            "genre": ["Survival", "Horror"],
            "multiplayer": false,
            "metaScore": 96,
            "img": "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcI_SHUnYfpXKFYMJD810IWw42qIAh4BWKmggm0sxHteUMxm5p8H1g.e6ES7H5ogT7HMhJWahH6Fd8a0Lc9B8MzXubQW.iJzKpn_j01n4EHC_fdX8K14Ylkj70QD8uMq4juh56KApf_3ag1G1OJfT.1xbF.bHth.S96GYewwBpBuI-&h=225&w=150&format=jpg"
        },
        {
            "name": "Resident Evil 5",
            "platforms": ["PC", "Playstation 3", "Playstation 4", "Xbox 360", "Xbox One"],
            "genre": ["Survival", "Horror"],
            "multiplayer": true,
            "metaScore": 74,
            "img": "https://upload.wikimedia.org/wikipedia/en/5/58/Resident_Evil_5_Box_Artwork.jpg"
        },
        {
            "name": "Five Nights at Freddy's",
            "platforms": ["PC"],
            "genre": ["Horror"],
            "multiplayer": false,
            "metaScore": 78,
            "img": "http://static.arcadespot.com/wp-content/uploads/2015/10/five-nights-at-freddys-2.jpg"
        },
        {
            "name": "The Evil Within",
            "platforms": ["PC", "Playstation 3", "Playstation 4", "Xbox 360", "Xbox One"],
            "genre": ["Action", "Adventure", "Survival", "Horror"],
            "multiplayer": false,
            "metaScore": 75,
            "img": "https://upload.wikimedia.org/wikipedia/en/5/56/The_Evil_Within_boxart.jpg"
        },
        {
            "name": "SOCOM II",
            "platforms": ["Playstation 2"],
            "genre": ["Strategy"],
            "multiplayer": true,
            "metaScore": 87,
            "img": "https://upload.wikimedia.org/wikipedia/en/d/d0/Socom_2_Box_Art.jpg"
        },
        {
            "name": "Call of Duty: Modern Warfare 2",
            "platforms": ["PC", "Playstation 3", "Xbox 360"],
            "genre": ["FPS", "Action", "Adventure"],
            "multiplayer": true,
            "metaScore": 94,
            "img": "https://upload.wikimedia.org/wikipedia/en/d/db/Modern_Warfare_2_cover.PNG"
        },
        {
            "name": "P.T.",
            "platforms": ["Playstation 4"],
            "genre": ["Horror", "Demo", "Survival"],
            "multiplayer": true,
            "metaScore": 86,
            "img": "https://media.playstation.com/is/image/SCEA/pt-screenshot-01-ps4-us-12aug14?$TwoColumn_Image$"
        }
    ]

const genres = [
    {
        "genre": "Action",
        "description": "The action game is a video game genre that emphasizes physical challenges, including hand–eye coordination and reaction-time."
    },
    {
        "genre": "Adventure",
        "description": "An adventure game is a video game in which the player assumes the role of protagonist in an interactive story driven by exploration and puzzle-solving."
    },
    {
        "genre": "Horror",
        "description": "The Horror game genre that focuses on survival of the character as the game tries to frighten players with either horror graphics or scary ambience."
    },
    {
        "genre": "Beat-'Em-Up",
        "description": "Beat 'em up (also known as brawler) is a video game genre featuring hand-to-hand combat between the protagonist and an improbably large number of opponents."
    },
    {
        "genre": "Fighting",
        "description": "Fighting games are a type of action game where two on-screen characters fight each other."
    },
    {
        "genre": "Rouge-like",
        "description": "Roguelike is a video game genre characterized by a dungeon crawl through procedurally generated levels, turn-based gameplay, tile-based graphics, and permanent death of the player character."
    },
    {
        "genre": "RPG",
        "description": "A role-playing video game (commonly referred to as simply a role-playing game or an RPG as well as a computer role-playing game or a CRPG) is a video game genre where the player controls the actions of a character (and/or several party members) immersed in some well-defined world."
    },
    {
        "genre": "Fantasy",
        "description": "Fantasy is a genre of speculative fiction set in a fictional universe, often without any locations, events, or people referencing the real world."
    },
    {
        "genre": "Turn-based",
        "description": "A turn-based game is a strategy game where players take turns when playing."
    },
    {
        "genre": "Battle-royal",
        "description": "A battle royale game is a video game genre that blends the survival, exploration and scavenging elements of a survival game with last-man-standing gameplay."
    },
    {
        "genre": "Survival",
        "description": "Survival games are set in a hostile, intense, open-world environment, where players generally begin with minimal equipment and are required to collect resources, craft tools, weapons, and shelter, and survive as long as possible."
    },
    {
        "genre": "FPS",
        "description": "A first person shooter (FPS) is a genre of action video game that is played from the point of view of the protagonist."
    },
    {
        "genre": "MMO",
        "description": "A massively multiplayer online game (MMOG, or more commonly, MMO) is an online game with large numbers of players, typically from hundreds to thousands, on the same server."
    },
    {
        "genre": "Hack-n-Slash",
        "description": "Hack and slash refers to a type of gameplay that emphasizes combat."
    },
    {
        "genre": "Tile-based",
        "description": "Tile-based games are not a distinct video game genre; rather, the term refers to the technology a game engine uses for its visual representation."
    },
    {
        "genre": "Platformer",
        "description": "Platformer gameplay is about jumping between platforms or over obstacles."
    },
    {
        "genre": "Strategy",
        "description": "A strategy game is typically larger in scope, and their main emphasis is on the player's ability to outthink their opponent."
    },
    {
        "genre": "Demo",
        "description": "A demo is a limited version of a game intended to let interested gamers try it before purchase."
    }
]

module.exports = {
    games,
    genres
  }