const placesToVisit = [
{
  name:"xian",
  country:"china",
  budgetperDay: "$10",
  activities:["sightseeing", "cycling","bustours"],
  accommodation: "$1.50 per night",
  continent: "Asia",
  bestSeason:"october"
},
{
  name:"Sihanoukville",
  country:"Cambodia",
  budgetperDay: "$15",
  accommodation: "$2.50 per night",
  activities:["snorkelling", "dirt bike tours", "private boat trip"],
  continent: "Asia",
  bestSeason:"september"
},
{
  name:"Lisbon",
  country:"Portugal",
  budgetperDay: "$15",
  accommodation: "$3.50 per night",
  activities:["Historic Sites", "science mueseums", "water sports","sunset cruise"],
  continent: "Europe",
  bestSeason:"october"
},
{
  name:"Kuta, Bali",
  country:"Indonesia",
  budgetperDay: "$15",
  accommodation: "$7 per night",
  activities:["water sports", "beach tours","rafting"],
  continent: "Asia",
  bestSeason:"september"
},
{
  name:"Phuket",
  country:"Thailand",
  budgetperDay: "$15",
  accommodation: "$7.5",
  activities:["Jungle trek","monkey hill","biking tours"],
  continent: "Asia"
  bestSeason:"january"
},
{
  name:"Nadi",
  country:"Fiji",
  budgetperDay: "$15",
  accommodation:"$7",
  activities:["cruises", "water sports","cultural tours"],
  continent: "Oceania",
  bestSeason:"february"
},
{
  name:"Mandalay",
  country:"Myanmar",
  budgetperDay: "$15",
  accommodation:"$8",
  activities:["water tours", "monastery tours"],
  continent: "Asia",
  bestSeason:"December"
},
{
  name:"Budapest",
  country:"Hungary",
  budgetperDay: "$15",
  accommodation: "$7",
  activities:["river cruise", "nightclubs", "caving adventure"],
  continent: "Europe",
  bestSeason:"october"
},
{
  name:"Montego Bay",
  country:"Jamaica",
  budgetperDay: "$15",
  accommodation: "$8",
  activities:["snorkelling", "scuba diving","food and drinks"],
  continent: "North America",
  bestSeason:"october"
},
{
  name:"San Juan",
  country:"Puerto Rico",
  budgetperDay: "$15",
  accommodation: "$10",
  activities:["Historic tours", "cuisine tours","mosquito bay"],
  continent: "North America",
  bestSeason:"october"
},
{
  name:"Edinburgh",
  country:"Scotland",
  budgetperDay: "$20",
  accommodation: "$10",
  activities:["castle tours", "distillery tours","nature tours"],
  continent: "Europe",
  bestSeason:"october"
},
{
  name:"Canary Islands",
  country:"china",
  budgetperDay: "$20",
  accommodation: "$8",
  activities:["whale watching", "volcano tours","sunset cruises"],
  continent: "Europe",
  bestSeason:"october"
},
{
  name:"Mykonos",
  country:"Greece",
  budgetperDay: "$20",
  accommodation: "$9",
  activities:["yatch cruise", "sunset cruise","beach tours"],
  continent: "Europe",
  bestSeason:"october"
},
{
  name:"Córdoba",
  country:"Spain",
  budgetperDay: "$20",
  accommodation: "$10",
  activities:["cathedral tours", "wine tours","shopping"],
  continent: "Europe",
  bestSeason:"March"
},
{
  name:"San Miguel de Allende",
  country:"Mexico",
  budgetperDay: "$15",
  accommodation: "$8",
  activities:["Horse ride tours", "religious tours","cultural tours"],
  continent: "South America",
  bestSeason:"December"
},
{
  name:"Zanzibar",
  country:"Tanzania",
  budgetperDay: "$15",
  accommodation: "$8",
  activities:["wildlife tours", "food tours","island tours"],
  continent: "Africa",
  bestSeason:"october"
},
{
  name:"Yelapa",
  country:"Mexico",
  budgetperDay: "$15",
  accommodation: "$7",
  activities:["beach tours", "sunset cruise","food and drinks tour"],
  continent: "South America",
  bestSeason:"December"
},
{
  name:"Kathmandu",
  country:"Nepal",
  budgetperDay: "$15",
  accommodation: "$5",
  activities:["Historic sites", "hiking", "helicopter tours"],
  continent: "Asia",
  bestSeason:"october"
},
{
  name:"Manali",
  country:"India",
  budgetperDay: "$15",
  accommodation: "$4",
  activities:["hiking", "trance parties","village tours"],
  bestSeason:"october"
},
{
  name:"Managua",
  country:"Nicaragua",
  accommodation: "$10",
  budgetperDay: "$20",
  activities:["Island trips", "coffee tours","volcano tours"],
  continent: "North America",
  bestSeason:"october"
},
{
  name:"Saranda",
  country:"Albania",
  accommodation: "$7",
  budgetperDay: "$15",
  activities:["Beach tours", "food tours"],
  continent: "Europe",
  bestSeason:"February"
},
{
  name:"La Paz",
  country:"Bolivia",
  accommodation: "$4",
  budgetperDay: "$15",
  activities:["city tours", "mountain bike tours","archaeological sites"],
  continent: "South America",
  bestSeason:"october"
},
{
  name:"Mindo",
  country:"Ecuador",
  budgetperDay: "$15",
  accommodation: "$7",
  activities:["butterfly tours", "cloud forest tours", "frog concert tours"],
  continent: "South America",
  bestSeason:"November"
},
{
  name:"Galle",
  country:"Srilanka",
  budgetperDay: "$10",
  accommodation: "$5",
  activities:["Historic tours", "Local arts", "beach tours"],
  continent: "Asia",
  bestSeason:"August"
},
{
  name:"Easter Island",
  country:"Chile",
  budgetperDay: "$20",
  accommodation: "$10",
  activities:["ancient ruins tour","national park tours", "fishing"],
  continent: "South America",
  bestSeason:"April"
},
{
  name:"Jodhpur",
  country:"India",
  budgetperDay: "$20",
  accommodation: "$10",
  activities:["historical tours", "camel rides","indian food tours"],
  continent: "Asia",
  bestSeason:"June"
},
{
  name:"Albufeira",
  country:"Portugal",
  budgetperDay: "$30",
  accommodation: "$13",
  activities:["beach tours", "historical sites"],
  continent: "Europe",
  bestSeason:"December"
},
{
  name:"Dubrovnik",
  country:"Croatia",
  budgetperDay: "$30",
  accommodation: "$16",
  activities:["wine tours", "biking"],
  continent: "Europe",
  bestSeason:"october"
},
{
  name:"Bukhara",
  country:"Uzbekistan",
  budgetperDay: "$20",
  accommodation: "$9",
  activities:["mosque tours", "cuisine tours","old city tours"],
  continent: "Asia",
  bestSeason:"November"
},
{
  name:"Trujillo",
  country:"Peru",
  budgetperDay: "$20",
  accommodation: "$10",
  activities:["mayan ruins tours", "ayahuasca tours", "hiking"],
  continent: "South America",
  bestSeason:"october"
},
{
  name:"Lviv",
  country:"Ukraine",
  budgetperDay: "$30",
  accommodation: "$13",
  activities:["historic tours", "wine tours", "old city tours"],
  continent: "South America",
  bestSeason:"october"
}
];


const tourOperators = [
{
  name: "ABC tours",
  destination: ["Europe", "Asia"],
  tourMonth: "December",
  pricePerDay: "$10"
},
{
  name: "Enchanting tours",
  destination: ["South America", "Asia", "Europe"],
  tourMonth: "November",
  pricePerDay: "$15"
},
{
  name: "Horizon tours",
  destination: ["Africa", "Asia"],
  tourMonth: "October",
  pricePerDay: "$15"
},
{
  name: "Global tours",
  destination: ["South America"],
  tourMonth: "December",
  pricePerDay: "$15"
},
{
  name: "Holy Tours",
  destination: ["Europe", "Asia", "Africa"],
  tourMonth: "December",
  pricePerDay: "$15"
},
]


