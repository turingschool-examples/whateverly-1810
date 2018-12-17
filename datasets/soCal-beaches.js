const beachCounties = [
    {
      "name": "San Luis Obispo County",
      "beaches": [ "Montaña de Oro State Beach", "Cayucos State Beach", "Pismo State Beach", "William Randolph Hearst Memorial State Beach" ]
    },
    {
      "name": "Santa Barbara County",
      "beaches": [ "Butterfly Beach", "Santa Claus Beach", "Arroyo Burro Beach", "Carpinteria State Beach", "Mesa Lane Beach" ]
    },
    {
      "name": "Ventura County",
      "beaches": [ "Oxnard Beach Park" ]
    },
    {
      "name": "Los Angeles County",
      "beaches": [ "Venice Beach", "Rosie’s Dog Beach", "Santa Monica State Beach", "Leo Carrillo State Park", "El Matador Beach", "Dockweiler State Beach", "Manhattan State Beach" ]
    },
    {
      "name": "Orange County",
      "beaches": [ "Crystal Cove State Park", "Huntington State Beach", "Newport Beach", "Corona Del Mar State Beach", "Salt Creek Beach", "Crescent Bay Beach" ]
    },
    {
      "name": "San Diego County",
      "beaches": [ "Coronado Beach", "Ocean Beach", "La Jolla Shores", "Tourmaline Surfing Park", "Imperial Beach", "Silver Strand State Beach", "Del Mar City Beach" ]
    }
];

const beaches = [
  { "name": "Montaña de Oro State Beach",
    "county": "San Luis Obispo County",
    "water-rating": null,
    "pier": false,
    "pet-friendly": false,
    "food-services": false,
    "facilities": true,
    "camping": true,
    "activities": ["Hiking", "Biking", "Surfing", "Horseback Riding", "Tidepooling", "Fishing", "Snorkeling", "Nature Viewing", "Wildlife Viewing", "Photography"],
    "hours": "6AM-10PM",
    "fire-pits": false
  },
  { "name": "Cayucos State Beach",
    "county": "San Luis Obispo County",
    "water-rating": 5,
    "pier": true,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Fishing", "Swimming", "Surfing", "Boating", "Tidepooling"],
    "hours": "N/A",
    "fire-pits": false
  },
  { "name": "Pismo State Beach",
    "county": "San Luis Obispo County",
    "water-rating": 5,
    "pier": true,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": true,
    "activities": ["Hiking", "Swimming", "Fishing", "Horseback Riding", "Sand Dunes", "Scuba Diving/Snorkeling", "Nature Viewing", "Wildlife Viewing", "Surfing"],
    "hours": "N/A",
    "fire-pits": true
  },
  { "name": "William Randolph Hearst Memorial State Beach",
    "county": "San Luis Obispo County",
    "water-rating": 5,
    "pier": true,
    "pet-friendly": false,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Swimming", "Fishing", "Kayaking", "Boating", "Wildlife Viewing", "Boogie Boarding"],
    "hours": "Dawn to Dusk",
    "fire-pits": false
  },
  { "name": "Butterfly Beach",
    "county": "Santa Barbara County",
    "water-rating": 5,
    "pier": false,
    "pet-friendly": true,
    "food-services": false,
    "facilities": false,
    "camping": false,
    "activities": ["Sunbathing", "Biking", "Fishing", "Beach Walking"],
    "hours": "N/A",
    "fire-pits": false
  },
  { "name": "Santa Claus Beach",
    "county": "Santa Barbara County",
    "water-rating": null,
    "pier": false,
    "pet-friendly": true,
    "food-services": true,
    "facilities": false,
    "camping": false,
    "activities": ["Paddleboarding", "Boogie Boarding", "Swimming", "Surfing", "Sunbathing"],
    "hours": "N/A",
    "fire-pits": false
  },
  { "name": "Arroyo Burro Beach",
    "county": "Santa Barbara County",
    "water-rating": null,
    "pier": false,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Grilling", "Wildlife Viewing", "Horseback Riding", "Fishing", "Surfing", "Swimming"],
    "hours": "8AM to Sunset",
    "fire-pits": false
  },
  { "name": "Carpinteria State Beach",
    "county": "Santa Barbara County",
    "water-rating": null,
    "pier": false,
    "pet-friendly": false,
    "food-services": false,
    "facilities": true,
    "camping": true,
    "activities": ["Hiking", "Biking", "Swimming", "Fishing", "Surfing", "Snorkeling", "Tidepooling"],
    "hours": "7AM to Sunset",
    "fire-pits": false
  },
  { "name": "Mesa Lane Beach",
    "county": "Santa Barbara County",
    "water-rating": null,
    "pier": false,
    "pet-friendly": true,
    "food-services": false,
    "facilities": false,
    "camping": false,
    "activities": ["Surfing", "Paddleboarding", "Swimming", "Sunbathing", "Tidepooling"],
    "hours": "N/A",
    "fire-pits": false
  },
  { "name": "Oxnard Beach Park",
    "county": "Ventura County",
    "water-rating": null,
    "pier": false,
    "pet-friendly": true,
    "food-services": false,
    "facilities": true,
    "camping": false,
    "activities": ["Volleyball", "Swimming", "Surfing", "Sunbathing", "Biking", "Grilling", "Basketball", "Playground"],
    "hours": "N/A",
    "fire-pits": false
  },
  { "name": "Venice Beach",
    "county": "Los Angeles County",
    "water-rating": 5,
    "pier": true,
    "pet-friendly": false,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Surfing", "Shopping", "Swimming", "Skating", "Biking", "Walking", "Street Entertainment", "Exercise"],
    "hours": "6AM-10PM",
    "fire-pits": false
  },
  { "name": "Rosie’s Dog Beach",
    "county": "Los Angeles County",
    "water-rating": 5,
    "pier": false,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Skating", "Biking", "Dog Walking", "Volleyball"],
    "hours": "6AM-8PM",
    "fire-pits": false
  },
  { "name": "Santa Monica State Beach",
    "county": "Los Angeles County",
    "water-rating": 5,
    "pier": true,
    "pet-friendly": false,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Shopping", "Surfing", "Playground", "Amusement Park", "Biking", "Walking", "Sunbathing", "Volleyball", "Paddleboarding", "Exercise", "Fishing", "Aquarium"],
    "hours": "24Hrs",
    "fire-pits": false
  },
  { "name": "Leo Carrillo State Park",
    "county": "Los Angeles County",
    "water-rating": null,
    "pier": false,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": true,
    "activities": ["Swimming", "Surfing", "Fishing", "Tidepooling", "Cave Exploring", "Hiking", "Snorkeling", "Nature Viewing", "Wildlife Viewing", "Boating"],
    "hours": "8AM-10PM",
    "fire-pits": false
  },
  { "name": "El Matador Beach",
    "county": "Los Angeles County",
    "water-rating": 5,
    "pier": false,
    "pet-friendly": false,
    "food-services": false,
    "facilities": true,
    "camping": false,
    "activities": ["Cave Exploring", "Photography", "Swimming", "Nature Viewing", "Wildlife Viewing", "Snorkeling", "Sunbathing"],
    "hours": "8AM to Sunset",
    "fire-pits": false
  },
  { "name": "Dockweiler State Beach",
    "county": "Los Angeles County",
    "water-rating": 5,
    "pier": false,
    "pet-friendly": false,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Boating", "Scuba Diving", "Snorkeling", "Swimming", "Surfing", "Biking"],
    "hours": "Mon-Fri, 9AM-5PM",
    "fire-pits": true
  },
  { "name": "Manhattan State Beach",
    "county": "Los Angeles County",
    "water-rating": null,
    "pier": true,
    "pet-friendly": false,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Swimming with Caution", "Surfing", "Volleyball", "Biking", "Fishing at Pier", "Playground"],
    "hours": "6AM-12AM",
    "fire-pits": false
  },
  { "name": "Crystal Cove State Park",
    "county": "Orange County",
    "water-rating": 5,
    "pier": false,
    "pet-friendly": false,
    "food-services": true,
    "facilities": true,
    "camping": true,
    "activities": ["Surfing", "Nature Viewing", "Wildlife Viewing", "Swimming with Caution", "Kayaking", "Tidepooling", "Hiking", "Biking", "Horseback Riding", "Scuba Diving"],
    "hours": "6AM to Sunset",
    "fire-pits": false
  },
  { "name": "Huntington State Beach",
    "county": "Orange County",
    "water-rating": 5,
    "pier": true,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Swimming with Caution", "Surfing", "Fishing", "Sunbathing", "Volleyball", "Basketball", "Biking", "Wildlife Viewing"],
    "hours": "6AM-10PM",
    "fire-pits": true
  },
  { "name": "Newport Beach",
    "county": "Orange County",
    "water-rating": 5,
    "pier": true,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Surfing", "Swimming with Caution", "Sunbathing", "Volleyball", "Wildlife Viewing", "Biking", "Skating"],
    "hours": "6AM-10PM",
    "fire-pits": false
  },
  { "name": "Corona Del Mar State Beach",
    "county": "Orange County",
    "water-rating": 4,
    "pier": false,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Swimming with Caution", "Surfing", "Volleyball", "Scuba Diving", "Kayaking", "Tidepooling", "Boating", "Wildlife Viewing"],
    "hours": "6AM-10PM",
    "fire-pits": true
  },
  { "name": "Salt Creek Beach",
    "county": "Orange County",
    "water-rating": 5,
    "pier": false,
    "pet-friendly": false,
    "food-services": false,
    "facilities": true,
    "camping": false,
    "activities": ["Swimming with Caution", "Surfing", "Tidepooling", "Grilling", "Wildlife Viewing", "Paddleboarding"],
    "hours": "5AM-12AM",
    "fire-pits": false
  },
  { "name": "Crescent Bay Beach",
    "county": "Orange County",
    "water-rating": 5,
    "pier": false,
    "pet-friendly": false,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Swimming with Caution", "Sunbathing", "Scuba Diving", "Tidepooling", "Kayaking", "Wildlife Viewing"],
    "hours": "6AM-10PM",
    "fire-pits": false
  },
  { "name": "Coronado Beach",
    "county": "San Diego County",
    "water-rating": null,
    "pier": false,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Photography", "Swimming", "Tidepooling", "Shipwreck Exploring", "Surfing", "Skating", "Biking"],
    "hours": "6AM-11PM",
    "fire-pits": true
  },
  { "name": "Ocean Beach",
    "county": "San Diego County",
    "water-rating": 5,
    "pier": true,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Swimming with Caution", "Volleyball", "Nature Viewing", "Tidepooling", "Fishing", "Biking", "Paddleboarding"],
    "hours": "4AM-2AM",
    "fire-pits": true
  },
  { "name": "La Jolla Shores",
    "county": "San Diego County",
    "water-rating": 5,
    "pier": false,
    "pet-friendly": false,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Surfing", "Swimming with Caution", "Scuba Diving", "Snorkeling", "Kayaking", "Tidepooling", "Paddleboarding", "Hiking"],
    "hours": "N/A",
    "fire-pits": false
  },
  { "name": "Tourmaline Surfing Park",
    "county": "San Diego County",
    "water-rating": 5,
    "pier": true,
    "pet-friendly": false,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Surfing", "Swimming with Caution", "Volleyball", "Paddleboarding", "Biking", "Skating", "Snorkeling"],
    "hours": "4AM-2AM",
    "fire-pits": true
  },
  { "name": "Imperial Beach",
    "county": "San Diego County",
    "water-rating": 5,
    "pier": true,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Surfing", "Swimming with Caution", "Fishing"],
    "hours": "7AM to Sunset",
    "fire-pits": false
  },
  { "name": "Silver Strand State Beach",
    "county": "San Diego County",
    "water-rating": null,
    "pier": false,
    "pet-friendly": false,
    "food-services": false,
    "facilities": true,
    "camping": false,
    "activities": ["Wildlife Viewing", "Swimming with Caution", "Fishing", "Volleyball", "Biking"],
    "hours": "8AM - closing time varies",
    "fire-pits": true
  },
  { "name": "Del Mar City Beach",
    "county": "San Diego County",
    "water-rating": 5,
    "pier": false,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Swimming with Caution", "Surfing", "Fishing", "Playground", "Volleyball", "Paddleboarding"],
    "hours": "7:15AM to Sunset",
    "fire-pits": false
  }
];