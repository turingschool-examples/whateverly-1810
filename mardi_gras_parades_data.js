const parades = [
	{
		"name": "Krewe of Little Rascals",
		"location": "Metairie",
		"startTime": "12:00pm",
		"date": "2/17/2019",
		"themes/motifs": ["children", "cars", "family"],
		"numberOfFloats": 85
	},
	{
		"name": "Krewe of Excalibur",
		"location": "Metairie",
		"startTime": "7:00pm",
		"date": "2/22/2019",
		"themes/motifs": ["trucks", "floats", "medieval", "magic"],
		"numberOfFloats": 112
	},
	{
		"name": "Krewe of Babylon",
		"location": "Uptown New Orleans",
		"startTime": "5:30pm",
		"date": "2/28/2019",
		"themes/motifs": ["kings", "knights", "tradition", "legend"],
		"numberOfFloats": 35
	},
	{
		"name": "Krewe of Caesar",
		"location": "Metairie",
		"startTime": "6:30pm",
		"date": "2/23/2019",
		"themes/motifs": ["emperors", "romans", "dancers", "trucks", "gods", "monsters"],
		"numberOfFloats": 45
	},
	{
		"name": "Krewe of Kings",
		"location": "Metairie",
		"startTime": "5:30pm",
		"date": "2/24/2019",
		"themes/motifs": ["kings", "emperors", "trucks", "floats"],
		"numberOfFloats": 17
	},
	{
		"name": "Krewe of Centurions",
		"location": "Metairie",
		"startTime": "7:00pm",
		"date": "3/1/2019",
		"themes/motifs": ["swords", "centurion", "romans", "army", "marching"],
		"numberOfFloats": 40
	},
	{
		"name": "Krewe of Hermes",
		"location": "Uptown New Orleans",
		"startTime": "5:30pm",
		"date": "3/1/2019",
		"themes/motifs": ["greeks", "neon", "horses", "gods"],
		"numberOfFloats": 20
	},
	{
		"name": "Krewe of Isis",
		"location": "Metairie",
		"startTime": "6:00pm",
		"date": "3/2/2019",
		"themes/motifs": ["egyptians", "gods", "maids", "flip-flops", "nature", "magic", "goddess"],
		"numberOfFloats": 21
	},
	{
		"name": "Krewe d'Etat",
		"location": "Uptown New Orleans",
		"startTime": "6:30pm",
		"date": "3/1/2019",
		"themes/motifs": ["horses", "dictator", "skulls", "skeletons"],
		"numberOfFloats": 21
	},
	{
		"name": "Krewe of Athena",
		"location": "Metairie",
		"startTime": "5:30pm",
		"date": "3/3/2019",
		"themes/motifs": ["female-crew", "goddess", "greeks", "justice", "wisdom", "owls"],
		"numberOfFloats": 23
	},
	{
		"name": "Krewe of Pandora",
		"location": "Metairie",
		"startTime": "6:30pm",
		"date": "3/3/2019",
		"themes/motifs": ["greeks", "gods", "goddess", "female-crew", "box"],
		"numberOfFloats": 14
	},
	{
		"name": "Krewe of Argus",
		"location": "Metairie",
		"startTime": "10:00pm",
		"date": "3/5/2019",
		"themes/motifs": ["greeks", "gods", "goddess", "peacock", "marching", "bands"],
		"numberOfFloats": 40
	},
	{
		"name": "Krewe of Elks",
		"location": "Metairie",
		"startTime": "12:00pm",
		"date": "3/5/2019",
		"themes/motifs": ["elks", "trucks", "oldest", "charity"],
		"numberOfFloats": 90
	},
	{
		"name": "Krewe of Jefferson",
		"location": "Metairie",
		"startTime": "2:00pm",
		"date": "3/5/2019",
		"themes/motifs": ["trucks", "last", "marching", "bands"],
		"numberOfFloats": 75
	},
	{
		"name": "Krewe of Morpheus",
		"location": "Uptown New Orleans",
		"startTime": "7:00pm",
		"date": "3/1/2019",
		"themes/motifs": ["greeks", "dreams", "classic", "tradition"],
		"numberOfFloats": 20
	},
	{
		"name": "Krewe of Tucks",
		"location": "Uptown New Orleans",
		"startTime": "11:00am",
		"date": "3/2/2019",
		"themes/motifs": ["students", "irreverence", "satire", "toilet"],
		"numberOfFloats": 13
	},
	{
		"name": "Krewe of Okeanos",
		"location": "Uptown New Orleans",
		"startTime": "11:00am",
		"date": "3/3/2019",
		"themes/motifs": ["greeks", "oceans", "fertility", "masks"],
		"numberOfFloats": 20
	},
	{
		"name": "Krewe of Oshun",
		"location": "Uptown New Orleans",
		"startTime": "6:00pm",
		"date": "2/22/2019",
		"themes/motifs": ["goddess", "yoruba", "floats", "peacock", "kings"],
		"numberOfFloats": 15
	},
	{
		"name": "Krewe of Cleopatra",
		"location": "Uptown New Orleans",
		"startTime": "6:30pm",
		"date": "2/22/2019",
		"themes/motifs": ["female-crew", "beauty", "egyptians", "goddess"],
		"numberOfFloats": 19
	},
	{
		"name": "Krewe of Mid-City",
		"location": "Uptown New Orleans",
		"startTime": "11:45pm",
		"date": "3/3/2019",
		"themes/motifs": ["children", "animation", "horses", "candy"],
		"numberOfFloats": 20
	},
	{
		"name": "Krewe of Pontchartrain",
		"location": "Uptown New Orleans",
		"startTime": "1:00pm",
		"date": "2/23/2019",
		"themes/motifs": ["floats", "fish", "marching", "aquatic", "bands"],
		"numberOfFloats": 19
	},
	{
		"name": "Krewe of Choctaw",
		"location": "Uptown New Orleans",
		"startTime": "2:00pm",
		"date": "2/23/2019",
		"themes/motifs": ["mail", "chief", "wagons", "trucks", "marching"],
		"numberOfFloats": 18
	},
	{
		"name": "Krewe of Freret",
		"location": "Uptown New Orleans",
		"startTime": "2:30pm",
		"date": "2/23/2019",
		"themes/motifs": ["floats", "local", "masks", "youth", "marching"],
		"numberOfFloats": 12
	},
	{
		"name": "Krewe of Thoth",
		"location": "Uptown New Orleans",
		"startTime": "12:00pm",
		"date": "3/3/2019",
		"themes/motifs": ["egyptians", "wisdom", "dice", "children"],
		"numberOfFloats": 50
	},
	{
		"name": "Krewe of King Arthur",
		"location": "Uptown New Orleans",
		"startTime": "1:00pm",
		"date": "2/24/2019",
		"themes/motifs": ["medieval", "kings", "knights", "family", "grails"],
		"numberOfFloats": 55
	},
	{
		"name": "Krewe of Bacchus",
		"location": "Uptown New Orleans",
		"startTime": "5:15pm",
		"date": "3/3/2019",
		"themes/motifs": ["greeks", "gods", "wine", "animation"],
		"numberOfFloats": 31
	},
	{
		"name": "Krewe of Druids",
		"location": "Uptown New Orleans",
		"startTime": "6:30pm",
		"date": "2/27/2019",
		"themes/motifs": ["celtics", "gods", "nature", "masks", "kings"],
		"numberOfFloats": 25
	},
	{
		"name": "Krewe of Nyx",
		"location": "Uptown New Orleans",
		"startTime": "7:00pm",
		"date": "2/27/2019",
		"themes/motifs": ["female-crew", "sisters", "greeks", "goddess", "purses"],
		"numberOfFloats": 27
	},
	{
		"name": "Krewe of Muses",
		"location": "Uptown New Orleans",
		"startTime": "6:30pm",
		"date": "2/28/2019",
		"themes/motifs": ["greeks", "goddess", "muses", "charity", "cups", "masks"],
		"numberOfFloats": 50
	},
	{
		"name": "Krewe of Muses",
		"location": "Uptown New Orleans",
		"startTime": "6:30pm",
		"date": "2/28/2019",
		"themes/motifs": ["greeks", "goddess", "muses", "charity", "cups", "masks"],
		"numberOfFloats": 50
	},
	{
		"name": "Krewe of Zulu",
		"location": "Uptown New Orleans",
		"startTime": "8:00am",
		"date": "3/5/2019",
		"themes/motifs": ["coconut", "warriors", "marching", "floats"],
		"numberOfFloats": 30
	}
]

const restaurants = [
    {
		"name": "Acme Oyster House",
        "location": "Metairie",
		"distance_to_parade": ".5 miles",
        "walk_to_parade": "10 minutes",
		"cuisine": ["seafood", "cajun", "creole", "classics"],
		"rating": 4.5
	},
    {
		"name": "Zea Rotisserie & Bar",
        "location": "Metairie",
		"distance_to_parade": "1.7 miles",
        "walk_to_parade": "35 minutes",
		"cuisine": ["eclectic", "beer", "mediterranean", "teas"],
		"rating": 4.5
	},
    {
		"name": "Bobby Hebert's Cajun Cannon",
        "location": "Metairie",
		"distance_to_parade": "1.3 miles",
        "walk_to_parade": "27 minutes",
		"cuisine": ["sports", "cajun", "creole", "classics", "seafood"],
		"rating": 4.4
	},
    {
		"name": "Bonefish Grill",
        "location": "Metairie",
		"distance_to_parade": "2.1 miles",
        "walk_to_parade": "43 minutes",
		"cuisine": ["seafood", "cajun", "creole", "steaks", "modern"],
		"rating": 4.2
	},
    {
		"name": "The Harbor Bar & Grill",
        "location": "Metairie",
		"distance_to_parade": ".7 miles",
        "walk_to_parade": "14 minutes",
		"cuisine": ["american", "burgers", "fries", "chips"],
		"rating": 4.5
	},
    {
		"name": "Casablanca Restaurant",
        "location": "Metairie",
		"distance_to_parade": ".2 miles",
        "walk_to_parade": "3 minutes",
		"cuisine": ["kosher", "moroccan", "middle-eastern"],
		"rating": 4.3
	},
    {
		"name": "Andrea's Restaurant",
        "location": "Metairie",
		"distance_to_parade": ".6 miles",
        "walk_to_parade": "13 minutes",
		"cuisine": ["italian", "classic", "spaghetti", "lasagna"],
		"rating": 4.0
	},
    {
		"name": "Chef Ron's Gumbo Stop",
        "location": "Metairie",
		"distance_to_parade": "1.5 miles",
        "walk_to_parade": "30 minutes",
		"cuisine": ["seafood", "classic", "creole", "cajun"],
		"rating": 4.7
	},
    {
		"name": "Buffalo Wild Wings",
        "location": "Metairie",
		"distance_to_parade": ".3 miles",
        "walk_to_parade": "5 minutes",
		"cuisine": ["sportsbar", "hamburgers", "chicken", "wings"],
		"rating": 3.7
	},
    {
		"name": "Manny Randazzo King Cakes",
        "location": "Metairie",
		"distance_to_parade": ".6 miles",
        "walk_to_parade": "12 minutes",
		"cuisine": ["dessert", "king-cakes", "sweets", "pastries"],
		"rating": 4.6
	},
    {
		"name": "Lula Restaurant Distillery",
        "location": "Uptown New Orleans",
		"distance_to_parade": ".1 miles",
        "walk_to_parade": "3 minutes",
		"cuisine": ["rustic", "chic", "micro", "distillery"],
		"rating": 4.3
	},
    {
		"name": "Cochon Restaurant",
        "location" : "Uptown New Orleans",
		"distance_to_parade": "1.1 miles",
        "walk_to_parade": "22 minutes",
		"cuisine": ["pork", "cajun", "creole", "rotisserie"],
		"rating": 4.6
	},
    {
		"name": "Peche Seafood Grill",
        "location" : "Uptown New Orleans",
		"distance_to_parade": "1.1 miles",
        "walk_to_parade": "22 minutes",
		"cuisine": ["coal", "grill", "raw", "seafood", "rustic"],
		"rating": 4.6
	},
    {
		"name": "Galliano",
        "location" : "Uptown New Orleans",
		"distance_to_parade": "1.3 miles",
        "walk_to_parade": "27 minutes",
		"cuisine": ["cajun", "modern", "seafood"],
		"rating": 4.5
	},
    {
		"name": "Magazine Pizza",
        "location" : "Uptown New Orleans",
		"distance_to_parade": "1.0 miles",
        "walk_to_parade": "21 minutes",
		"cuisine": ["pizza", "itallian", "creole", "classic"],
		"rating": 4.2
	},
    {
		"name": "Acme Oyster House",
        "location" : "Uptown New Orleans",
		"distance_to_parade": ".5 miles",
        "walk_to_parade": "10 minutes",
		"cuisine": ["seafood", "cajun", "creole", "classics"],
		"rating": 4.5
	},
    {
		"name": "Parasol's",
        "location" : "Uptown New Orleans",
		"distance_to_parade": ".8 miles",
        "walk_to_parade": "15 minutes",
		"cuisine": ["seafood", "poboys", "creole", "fries"],
		"rating": 4.5
	},
    {
		"name": "Poseidon Oyster Sushi Bar",
        "location" : "Uptown New Orleans",
		"distance_to_parade": ".4 miles",
        "walk_to_parade": "8 minutes",
		"cuisine": ["seafood", "cajun", "creole", "asian"],
		"rating": 4.4
	},
    {
		"name": "Surrey's Cafe and Juice Bar",
        "location" : "Uptown New Orleans",
		"distance_to_parade": ".3 miles",
        "walk_to_parade": "5 minutes",
		"cuisine": ["juice", "fruit", "coffee", "smoothies"],
		"rating": 4.7
	},
    {
		"name": "Seed",
        "location" : "Uptown New Orleans",
		"distance_to_parade": ".2 miles",
        "walk_to_parade": "4 minutes",
		"cuisine": ["vegan", "cakes", "desserts", "snacks"],
		"rating": 4.6
	}
]


module.exports = {
  parades,
  restaurants
} 