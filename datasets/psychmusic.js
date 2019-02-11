const psychMusic = [
  { 
   genre: "neoPsychedelia",
   origination: 1970,
   characteristics: [
   "psychedelic pop", 
   "jangly guitar rock", 
   "heavily distorted",
   "free form jams",
   "recording experiments"
    ]
   },
  { 
   genre: "stonerRock",
   origination: 1990,
   characteristics: [
   "slow tempo", 
   "bass heavy sound", 
   "melodic vocals",
   "retro production",
   "groove laden"
    ]
   },
  { 
   genre: "shoegazing",
   origination: 1980,
   characteristics: [
   "guitar distortion", 
   "delay effects", 
   "obscured vocals",
   "ethereal layers",
   "reverb"
    ]
   }
];

const bands = [
{
  name: "Sparklehorse",
  origin: "Richmond Virginia",
  members: [
  "Mark Linkous",
  "Scott Minor"
],
  active: false,
  label: "Slow River",
  sideProjects: [
  "Danger Mouse",
  "Sol Seppy",
  "David Lynch",
  "Angela Faye Martin"
  ]
},
{
  name: "Quest for Fire",
  origin: "Toronto Canada",
  members: [
  "Andrew Moszynski",
  "Chad Ross",
  "Mike Maxymuik",
  "Josh Bauman"
],
  active: false,
  label: "Tee Pee",
  sideProjects: [
  "The Deadly Snakes",
  "Cursed",
  "Comet Control"
  ]
},
{
  name: "The Dream Syndicate",
  origin: "Los Angeles California",
  members: [
  "Steve Wynn",
  "Dennis Duck",
  "Mark Walton",
  "Jason Victor"
],
  active: true,
  label: "Big Time",
  sideProjects: [
  "Grave", 
  "Continental Drifters", 
  "Steve Wynn and the Miracle Three", 
  "Gutterball"
  ]
},
{
  name: "Ozric Tentacles",
  origin: "Somerset England",
  members: [
  "Ed Wynne",
  "Brandi Wynne",
  "Silas Neptune",
  "Balazs Szende"
],
  active: true,
  label: "Magna Carta",
  sideProjects: [
  "Eat Static", 
  "Nodens Ictus", 
  "Here and Now", 
  "Invisible System"
  ]
},
{
  name: "Stardeath and the White Dwarfs",
  origin: "Oklahoma City Oklahoma",
  members: [
  "Dennis Coyne",
  "Casey Joseph",
  "Matt Duckworth",
  "Ford Chastain"
],
  active: true,
  label: "Warner Bros",
  sideProjects: [
  "The Flaming Lips",
  "New Fumes", 
  "Linear Downfall",
  "Spaceface"
  ]
},
{
  name: "The Black Angels",
  origin: "Austin TX",
  members: [
  "Stephanie Bailey",
  "Christian Bland",
  "Alex Maas",
  "Kyle Hunt",
  "Jake Garcia"
],
  active: true,
  label: "Light in the Attic",
  sideProjects: [
  "Mien",
  "The Viet Minh",
  "Christian Bland and The Revelators"
  "The UFO Club",
  "Sweet Tea"
  ]
},
{
  name: "Spacemen 3",
  origin: "Warwickshire England",
  members: [
  "Peter Kember",
  "Jason Pierce",
  "Tim Morris",
  "Pete Bain",
  "Natty Brooker",
  "Sterling Roswell",
  "Will Carruthers",
  "Jonny Mattock",
  "Mark Refoy"
],
  active: false,
  label: "Dedicated Records",
  sideProjects: [
  "Spectrum",
  "Spiritualized",
  "Darkside"
  ]
},
{
  name: "The Teardrops",
  origin: "Liverpool England",
  members: [
  "Julian Cope",
  "Mick Finkler",
  "Gary Dwyer",
  "Paul Simpson",
  "Ged Quinn",
  "David Balfe",
  "Alan Gill",
  "Alfie Agius",
  "Jeff Hammer",
  "Troy Tate",
  "Ronnie Francois",
  "Ted Emmett",
  "Andy Radek"
],
  active: false,
  label: "Zoo Records",
  sideProjects: [
  "Julian Cope",
  "Crucial Three",
  "Big In Japan",
  "Dalek I Love You",
  "The Wild Swans"
  ]
},
{
  name: "Spindrift",
  origin: "Los Angeles CA",
  members: [
  "Kirpatrick Thomas",
  "James Acton",
  "Daniel Allaire",
  "Joe Baluta",
  "Bobby Bones",
  "Becca Davidson",
  "Julie Patterson"
],
  active: true,
  label: "Tee Pee Records",
  sideProjects: [
  "Brian Jonestown Massacre",
  "The Warlocks",
  "Crooked Cowboy"
  ]
},
{
  name: "Echo and the Bunnymen",
  origin: "Liverpool England",
  members: [
  "Ian McCulloch",
  "Will Sergeant"
],
  active: true,
  label: "Warner Bros",
  sideProjects: [
  "Electrafixion",
  "Youth"
  ]
},
{
  name: "The Church",
  origin: "Sydney Australia",
  members: [
  "Steve Kilbey",
  "Peter Koppes",
  "Tim Powles",
  "Ian Haug"
],
  active: true,
  label: "Capitol",
  sideProjects: [
  "Tactics",
  "The Crystal Set",
  "The Reels",
  "Hex",
  "The Well"
  ]
},
{
  name: "Acid King",
  origin: "San Francisco California",
  members: [
  "Lori S",
  "Rafa Martinez",
  "Bil Bowman"
],
  active: true,
  label: "Leaf Hound",
  sideProjects: [
 "Altamont", 
 "Black Cobra", 
 "Goatsnake", 
 "The Obsessed"
  ]
},
{
  name: "Boris",
  origin: "Tokyo Japan",
  members: [
  "Atsuo",
  "Takeshi",
  "Wata"
],
  active: true,
  label: "Southern Lord",
  sideProjects: [
  "Merzbow",
  "Keiji",
  "Haino",
  "Torche",
  "Doomriders"
  ]
},
{
  name: "Dead Meadow",
  origin: "Washington DC",
  members: [
  "Jason Simon",
  "Steve Kille",
  "Mark Laughlin"
],
  active: true,
  label: "Matador",
  sideProjects: [
 "Old Testament",
 "The Brian Jonestown Massacre"
  ]
},
{
  name: "Acrimony",
  origin: "Wales United Kingdom",
  members: [
  "Dorian Walters",
  "Stuart OHara",
  "Matthew Lee Davies",
  "Darren Ivey",
  "Paul Bidmead"
],
  active: false,
  label: "Godhead Records",
  sideProjects: [
  "Iron Monkey", 
  "Black Eye Riot", 
  "Dukes of Nothing", 
  "Helvis", 
  "Lifer", 
  "Sigiryia"
  ]
},
{
  name: "Sleep",
  origin: "San Jose California",
  members: [
  "Al Cisneros",
  "Matt Pike",
  "Jason Roeder"
],
  active: true,
  label: "Third Man Records",
  sideProjects: [
  "Om", 
  "High on Fire", 
  "Neurosis", 
  "Shrinebuilder", 
  "Asbestosdeath", 
  "The Sabians", 
  "Kalas"
  ]
},
{
  name: "Orange Goblin",
  origin: "London England",
  members: [
  "Ben Ward",
  "Joe Hoare",
  "Martyn Millard",
  "Chris Turner"
],
  active: true,
  label: "Sanctuary",
  sideProjects: [
 "Ravens Creed", 
 "Electric Wizard", 
 "Capricorns", 
 "Dukes of Nothing"
  ]
},
{
  name: "Melvins",
  origin: "Montesano Washington",
  members: [
  "Buzz Osborne",
  "Dale Crover",
  "Steven Shane McDonald",
  "Jeff Pinkus"
],
  active: true,
  label: "Your Choice",
  sideProjects: [
  "Altamont",
  "Crystal Fairy",
  "Fantomas",
  "Mudhoney",
  "Clown Alley",
  "Thrones",
  "Big Business",
  "Jello Biafra",
  "Nirvana",
  "Fecal Matter",
  "Tool",
  "Butthole Surfers"
  ]
},
{
  name: "Electric Wizard",
  origin: "Dorset England",
  members: [
  "Jus Oborn",
  "Liz Buckingham",
  "Clayton Burgess",
  "Simon Poole"
],
  active: true,
  label: "Rise Above",
  sideProjects: [
 "Ramesses",
 "Sourvein",
 "Iron Monkey",
 "Teeth of Lions",
 "Rule the Divine",
 "Crippled Black Phoenix",
 "With the Dead"
  ]
},
{
  name: "Alcian Blue",
  origin: "Takoma Park Maryland",
  members: [
  "Sam Chintha",
  "Jake Reid",
  "Clark Stacy",
  "Matt Welch",
  "Kim Reid"
],
  active: false,
  label: "Safranin Sound",
  sideProjects: [
  "Screen Vinyl Image", 
  "Vacuole Eyes", 
  "The Antiques", 
  "Torsion Fields"
  ]
},
{
  name: "Slowdive",
  origin: "Berkshire England",
  members: [
  "Nick Chaplin",
  "Rachel Goswell",
  "Neil Halstead",
  "Christian Savill",
  "Simon Scott"
],
  active: true,
  label: "Dead Oceans",
  sideProjects: [
  "The Pumpkin Fairies", 
  "Eternal", 
  "The Colour Mary", 
  "The Charlottes", 
  "Zurich", 
  "Televise", 
  "Lowgold", 
  "The Sight Below", 
  "Monster Movie", 
  "Black Hearted Brother", 
  "Minor Victories"
  ]
},
{
  name: "Adorable",
  origin: "Coventry England",
  members: [
  "Pete Fijalkowski",
  "Robert Dillam",
  "Stephen Williams",
  "Kevin Gritton"
],
  active: false,
  label: "Creation",
  sideProjects: [
  "Polak", 
  "The Balloon Farm", 
  "The Zephyrs", 
  "The Bardots", 
  "The Candy Thieves"
  ]
},
{
  name: "My Bloody Valentine",
  origin: "Dublin Ireland",
  members: [    
  "Kevin Shields",
  "Colm O Ciosoig",
  "Debbie Googe",
  "Bilinda Butcher"
],
  active: true,
  label: "Island",
  sideProjects: [
  "The Complex", 
  "A Life in the Day", 
  "Primal Scream", 
  "Patti Smith"
  ]
},
{
  name: "Bardo Pond",
  origin: "Philadelphia Pennsylvania",
  members: [
  "John Gibbons",
  "Michael Gibbons",
  "Isobel Sollenberger",
  "Clint Takeda",
  "Jason Kourkounis"
],
  active: true,
  label: "Matador",
  sideProjects: [
  "Prairie Dog Flesh",
  "Third Troll",
  "Baikal",
  "Vapour Theories" 
  ]
},
{
  name: "The Brian Jonestown Massacre",
  origin: "San Francisco California",
  members: [
  "Anton Newcombe",
  "Collin Hegna",
  "Ricky Maymi",
  "Daniel Allaire",
  "Joel Gion",
  "Rob Campanella",
  "Ryan Van Kriedt"
],
  active: true,
  label: "Tee Pee",
  sideProjects: [
  "Black Rebel Motorcycle Club",
  "The Dandy Warhols",
  "The Warlocks",
  "The Lovetones"
  ]
},
{
  name: "Bowery Electric",
  origin: "New York City New York",
  members: [
  "Lawrence Chandler",
  "Martha Schwendener"
],
  active: false,
  label: "Happy Go Lucky",
  sideProjects: [
  "Echostar", 
  "Happy Families"
  ]
},
{
  name: "Amesoeurs",
  origin: "Bagnols sur Ceze France",
  members: [
  "Neige",
  "Audrey Sylvain",
  "Fursy Teyssier",
  "Winterhalter"
],
  active: false,
  label: "Profound Lore",
  sideProjects: [
  "Alcest", 
  "Les Discrets", 
  "Peste Noire", 
  "Empyrium"
  ]
},
{
  name: "Beach Fossils",
  origin: "Brooklyn New York",
  members: [
  "Dustin Payseur",
  "Jack Doyle Smith",
  "Tommy Davidson",
  "Anton Hochheim"
],
  active: true,
  label: "Captured Tracks",
  sideProjects: [
  "Heavenly Beat", 
  "DIIV", 
  "Wild Nothing"
  ]
},
{
  name: "A Place to Bury Strangers",
  origin: "Brooklyn New York",
  members: [
  "Oliver Ackermann",
  "Dion Lunadon",
  "Lia Simone Braswell"
],
  active: true,
  label: "Dead Oceans",
  sideProjects: [
  "Skywave",
  "MOFO",
  "My Best Fiend",
  "Black Acid",
  "Ceremony"
  ]
},
{
  name: "Ride",
  origin: "Oxford England",
  members: [
  "Andy Bell",
  "Laurence Colbert",
  "Mark Gardener",
  "Steve Queralt"
],
  active: true,
  label: "Creation",
  sideProjects: [
  "Oasis",
  "Beady Eye",
  "The Jesus and Mary Chain",
  "Gay Dad",
  "The Animalhouse",
  "Infinite Cassette"
  ]
}
];

module.exports = {
  psychMusic,
  bands
}