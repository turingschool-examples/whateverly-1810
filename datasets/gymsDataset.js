const gyms = [
  {
    "name": "Alchemy365",
    "website": "https://alchemy365.com/lohi/",
    "showers": true,
    "type": ["yoga", "high intensity", "conditioning"],
    "locations": ["2432 W 32nd Ave"]
  },
  {
    "name": "Flywheel",
    "website": "https://www.flywheelsports.com/studio/union-station/stadium-cycling",
    "showers": true,
    "type": ["cardio", "strength"],
    "locations": ["1900 17th Ave"]
  },
  {
    "name": "CorePower Yoga",
    "website": "https://www.corepoweryoga.com/",
    "showers": false,
    "type": ["yoga", "strength"],
    "locations": ["1956 Lawrence St Suite 100", "3041 Zuni Street", "333 E 13th Avenue", "3390 W 32nd Avenue"]
  },
  {
    "name": "Platform Strength",
    "website": "https://www.platformstrength.com/",
    "showers": true,
    "type": ["strength", "conditioning"],
    "locations": ["3198 Blake St"]
  },
  {
    "name": "F45",
    "website": "https://f45training.com/sloanslake/",
    "showers": false,
    "type": ["high intensity"],
    "locations": ["1525 Raleigh St"]
  },
  {
    "name": "The Rebel Workout",
    "website": "http://therebelworkout.com/",
    "showers": false,
    "type": ["high intensity"],
    "locations": ["324 S Broadway"]
  },
  {
    "name": "Fit36",
    "website": "https://fit36.com/lodo",
    "showers": false,
    "type": ["high intensity"],
    "locations": ["2110 Market St"]
  },
  {
    "name": "Planet Fitness",
    "website": "https://www.planetfitness.com/gyms/denver-downtown-co",
    "showers": true,
    "type": ["general fitness"],
    "locations": ["815 16th St Mall"]
  },
  {
    "name": "Tru Fit",
    "website": "https://trufitathleticclubs.com/club/downtown/",
    "showers": true,
    "type": ["general fitness"],
    "locations": ["1849 Curtis St"]
  },
  {
    "name": "Orange Theory",
    "website": "https://lodo-union-station.orangetheoryfitness.com/",
    "showers": false,
    "type": ["high intensity"],
    "locations": ["1400 Wewatta St Suite 110", "450 E 17th Ave Unit 128", "3300 W 32nd Avenue Suite 101"]
  },
  {
    "name": "Transform Colorado",
    "website": "http://www.transformcolorado.com/",
    "showers": false,
    "type": ["high intensity"],
    "locations": ["1840 15th St"]
  },
  {
    "name": "The Barre Code",
    "website": "http://www.thebarrecode.com/studio/downtown-denver/",
    "showers": true,
    "type": ["barre"],
    "locations": ["2252 Larimer St"]
  },
  {
    "name": "Train Fitness Denver",
    "website": "http://www.trainfitnessdenver.com/",
    "showers": true,
    "type": ["high intensity"],
    "locations": ["2151 Larimer St"]
  },
  {
    "name": "Crossfit Lodo",
    "website": "http://crossfitlodo.com/",
    "showers": false,
    "type": ["crossfit"],
    "locations": ["601 W 29th Ave"]
  },
  {
    "name": "Lohi Athletic Club",
    "website": "http://www.lohiathleticclub.com/",
    "showers": false,
    "type": ["general fitness"],
    "locations": ["2010 W 30th Ave"]
  },
  {
    "name": "Fitwall",
    "website": "https://www.fitwall.com/locations/denver_highlands",
    "showers": false,
    "type": ["conditioning"],
    "locations": ["2795 N Speer Blvd Suite 2"]
  },
  {
    "name": "Endorphin",
    "website": "https://www.fitwall.com/locations/denver_highlands",
    "showers": false,
    "type": ["cardio"],
    "locations": ["3170 E Colfax Ave", "2738 S Broadway", "3210 Tejon Street"]
  },
  {
    "name": "Crossfit Jai",
    "website": "https://crossfitjai.com",
    "showers": false,
    "type": ["crossfit"],
    "locations": ["1921 Federal Blvd"]
  },
  {
    "name": "Denver Bikram Yoga",
    "website": "https://denverbikramyoga.com/",
    "showers": false,
    "type": ["yoga"],
    "locations": ["2601 W Frontview Crescent Dr Unit 100A"]
  },
  {
    "name": "9Round",
    "website": "https://www.9round.com/fitness/Denver-CO-x9345",
    "showers": false,
    "type": ["conditioning"],
    "locations": ["310 E 17th Ave"]
  },
  {
    "name": "Downtown Denver YMCA",
    "website": "https://www.denverymca.org/downtown",
    "showers": true,
    "type": ["general fitness"],
    "locations": ["25 East 16th ave Unit B"]
  },
  {
    "name": "720 Athletics",
    "website": "https://www.crossfit720.com/",
    "showers": false,
    "type": ["crossfit"],
    "locations": ["2134 Curtis Street 101"]
  },
  {
    "name": "Gym Uptown",
    "website": "http://www.gymuptown.com/",
    "showers": true,
    "type": ["general fitness"],
    "locations": ["1900 Grant St"]
  },
  {
    "name": "Crossfit Broadway",
    "website": "http://www.crossfitbroadway.com/",
    "showers": false,
    "type": ["crossfit"],
    "locations": ["1025 Acoma St"]
  },
  {
    "name": "Cole Fusion Fitness",
    "website": "http://colefusionfitness.com/",
    "showers": true,
    "type": ["general fitness"],
    "locations": ["1100 Bannock St"]
  },
  {
    "name": "Movement",
    "website": "https://movementgyms.com/",
    "showers": false,
    "type": ["climbing", "general fitness"],
    "locations": ["1155 W 5th Ave", "3201 Walnut St"]
  },
  {
    "name": "Vital Strentgh and Fitness",
    "website": "http://www.vitalstrengthandfitness.com/",
    "showers": false,
    "type": ["strength", "conditioning"],
    "locations": ["800 Lincoln St"]
  },
  {
    "name": "Push",
    "website": "https://pushgym.com/",
    "showers": false,
    "type": ["high intensity"],
    "locations": ["38 E 5th Ave Suite 180"]
  },
  {
    "name": "Awaken Denver",
    "website": "https://www.awakendenver.com/",
    "showers": false,
    "type": ["gymnastics"],
    "locations": ["777 Santa Fe Drive"]
  }
]


const types = {
    "yoga": {
      "article": "https://osteopathic.org/what-is-osteopathic-medicine/benefits-of-yoga/"
    },
    "conditioning": {
      "article": "https://www.westchesterhealth.com/blog/10-important-benefits-of-strengthening-and-conditioning/"
    },
    "strength": {
      "article": "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/strength-training/art-20046670"
    },
    "cardio": {
      "article": "https://health.clevelandclinic.org/head-toe-benefits-cardio-workout-infographic/"
    },
    "high intensity": {
      "article": "https://www.mayoclinic.org/medical-professionals/physical-medicine-rehabilitation/news/sprint-rest-repeat-exploring-the-benefits-of-high-intensity-interval-training/mac-20431116"
    },
    "general fitness": {
      "article": "https://www.sciencedaily.com/releases/2008/01/080104123421.htm"
    },
    "barre": {
      "article": "NA"
    },
    "crossfit": {
      "article": "https://draxe.com/crossfit-workouts/"
    },
    "climbing": {
      "article": "NA"
    },
    "gymnastics": {
      "article": "NA"
    }
  }

  module.exports = {
    gyms, 
    types
  }
