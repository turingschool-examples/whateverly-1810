const restaurants = [
  {
    "id": 1,
    "name": "STACK Subs",
    "cuisine": "Sandwiches",
    "address": "Upstairs",
    "distanceFromTuring": "0 miles",
    "priceRange": "$",
    "topChoice": "Italian Sub",
    "hours": "7:00 am - 7:00 pm",
    "linkToSite": "https://www.stacksubs.com/"
  },
  {
    "id": 2,
    "name": "Slice Works",
    "cuisine": "Pizza",
    "address": "1433 17th St, Denver, CO 80202",
    "distanceFromTuring": "0.3 miles",
    "priceRange": "$",
    "topChoice": "Grandma Slice",
    "hours": "10:30 am - 11:00 pm",
    "linkToSite": "http://sliceworks.com/"
  },
  {
    "id": 3,
    "name": "Heidi's Brooklyn Deli",
    "cuisine": "Sandwiches",
    "address": "1225 17th St, Denver, CO 80202",
    "distanceFromTuring": "0.1 miles",
    "priceRange": "$",
    "topChoice": "Pastrami on Rye",
    "hours": "7:00 am - 3:30 pm",
    "linkToSite": "http://heidisbrooklyndeli.com/"
  },
  {
    "id": 4,
    "name": "Chipotle Mexican Grill",
    "cuisine": "Mexican",
    "address": "1480 16th St Mall, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$",
    "topChoice": "Steak Quesadilla",
    "hours": "10:45 am - 9:00 pm",
    "linkToSite": "https://locations.chipotle.com/co/denver/1480-16th-st?utm_source=google&utm_medium=yext&utm_campaign=yext_listings"
  },
  {
    "id": 5,
    "name": "Illegal Pete's",
    "cuisine": "Mexican",
    "address": "1530 16th St Mall #101, Denver, CO 80202",
    "distanceFromTuring": "0.3 miles",
    "priceRange": "$",
    "topChoice": "Burrito Bowl",
    "hours": "7:00 am - 12:00 am",
    "linkToSite": "https://www.illegalpetes.com/"
  },
  {
    "id": 6,
    "name": "Whole Foods",
    "cuisine": "Grocery",
    "address": "1701 Wewatta St, Denver, CO 80202",
    "distanceFromTuring": "0.4 miles",
    "priceRange": "$",
    "topChoice": "Mac & Cheese Bar",
    "hours": "7:00 am - 10:00 pm",
    "linkToSite": "https://www.wholefoodsmarket.com/stores/unionstation"
  },
  {
    "id": 7,
    "name": "7-Eleven",
    "cuisine": "Grocery",
    "address": "1775 Blake St, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$",
    "topChoice": "Taquitos",
    "hours": "24 Hours",
    "linkToSite": "https://www.7-eleven.com/locations/co/denver/1775-blake-st-34570?yext=34570"
  },
  {
    "id": 8,
    "name": "Garbanzo Mediterranean Fresh",
    "cuisine": "Mediterranean",
    "address": "1350 16th St Mall, Denver, CO 80202",
    "distanceFromTuring": "0.1 miles",
    "priceRange": "$",
    "topChoice": "Gyro with Hummus",
    "hours": "10:30 am - 9:00 pm",
    "linkToSite": "http://www.eatgarbanzo.com/"
  },
  {
    "id": 9,
    "name": "The Delectable Egg",
    "cuisine": "Breakfast",
    "address": "1642 Market St, Denver, CO 80202",
    "distanceFromTuring": "0.1 miles",
    "priceRange": "$$",
    "topChoice": "Denver Omelette",
    "hours": "6:30 am - 2:00 pm",
    "linkToSite": "http://www.delectableegg.com/"
  },
  {
    "id": 10,
    "name": "Two Fisted Mario's Pizza",
    "cuisine": "Pizza",
    "address": "1626 Market St, Denver, CO 80202",
    "distanceFromTuring": "0.1 miles",
    "priceRange": "$",
    "topChoice": "Double Pepperoni",
    "hours": "11:00 am - 2:00 am",
    "linkToSite": "http://twofistedmarios.com/"
  },
  {
    "id": 11,
    "name": "Oskar Blues Grill & Bar",
    "cuisine": "American",
    "address": "1624 Market St, Denver, CO 80202",
    "distanceFromTuring": "0.1 miles",
    "priceRange": "$$",
    "topChoice": "Hot Wings",
    "hours": "11:00 am - 12:00 am",
    "linkToSite": "https://oskarbluesfooderies.com/oskar-blues/oskar-blues-denver/"
  },
  {
    "id": 12,
    "name": "Erbert and Gerberts",
    "cuisine": "Sandwiches",
    "address": "1675 Larimer St, Denver, CO 80202",
    "distanceFromTuring": "0.1 miles",
    "priceRange": "$",
    "topChoice": "Turkey with Avocado",
    "hours": "10:30 am - 8:00 pm",
    "linkToSite": "https://www.erbertandgerberts.com/locations/1077/denver-lodo/"
  },
  {
    "id": 13,
    "name": "Panera Bread",
    "cuisine": "Sandwiches",
    "address": "1380 16th St Mall, Denver, CO 80202",
    "distanceFromTuring": "0.1 miles",
    "priceRange": "$",
    "topChoice": "1/2 Soup & Sandwiches",
    "hours": "6:00 am - 7:30 pm",
    "linkToSite": "https://locations.panerabread.com/co/denver/1380-16th-street-mall.html?utm_medium=display-ad&utm_source=paid-digital&utm_campaign=yext&utm_content=local-search"
  },
  {
    "id": 14,
    "name": "Mellow Mushroom",
    "cuisine": "Pizza",
    "address": "1201 16th St Mall #108, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$$",
    "topChoice": "BBQ Chicken Pizza",
    "hours": "11:00 am - 10:00 pm",
    "linkToSite": "https://mellowmushroom.com/location/co-denver-1201-16th-street-suite-108-80202/"
  },
  {
    "id": 15,
    "name": "QDOBA Mexican Eats",
    "cuisine": "Mexican",
    "address": "1533 Market St Ste 100, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$",
    "topChoice": "Chicken Burrito",
    "hours": "10:00 am - 8:00 pm",
    "linkToSite": "https://locations.qdoba.com/us/co/denver/1533-market-st.html?utm_source=Listings"
  },
  {
    "id": 16,
    "name": "The Cheesecake Factory",
    "cuisine": "American",
    "address": "1201 16th St Mall, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$$",
    "topChoice": "Oreo Cheesecake",
    "hours": "11:00 am - 11:00 pm",
    "linkToSite": "http://locations.thecheesecakefactory.com/co/denver-19.html?utm_source=Google&utm_medium=Maps&utm_campaign=Google+Places"
  },
  {
    "id": 17,
    "name": "Lucky Pie Pizza and Taphouse",
    "cuisine": "Pizza",
    "address": "1610 16th St Mall, Denver, CO 80202",
    "distanceFromTuring": "0.3 miles",
    "priceRange": "$",
    "topChoice": "Sausage and Pepperoni",
    "hours": "11:00 am - 10:pm",
    "linkToSite": "https://www.luckypiepizza.com/"
  },  
  {
    "id": 18,
    "name": "Rio Grande Mexican Restaurant",
    "cuisine": "Mexican",
    "address": "1525 Blake St, Denver, CO 80202",
    "distanceFromTuring": "0.3 miles",
    "priceRange": "$$",
    "topChoice": "Chile Con Queso",
    "hours": "11:00 am - 12:00 am",
    "linkToSite": "https://riograndemexican.com/locations/denver/?utm_source=Yext&utm_medium=Local_Listings&utm_campaign=Denver"
  },
  {
    "id": 19,
    "name": "Menya Noodle Bar",
    "cuisine": "Noodles",
    "address": "951 16th St Mall #104, Denver, CO 80202",
    "distanceFromTuring": "0.4 miles",
    "priceRange": "$$",
    "topChoice": "Spicy Chicken",
    "hours": "11:00 am - 9:00 pm",
    "linkToSite": "https://www.menyacolorado.com/"
  },
  {
    "id": 20,
    "name": "Noodles and Company",
    "cuisine": "Noodles",
    "address": "1460 16th St Mall, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$",
    "topChoice": "Pork Adobo",
    "hours": "11:00 am - 9:00 pm",
    "linkToSite": "https://locations.noodles.com/co/denver/1460-16th-street.html"
  },
  {
    "id": 21,
    "name": "Zoe Ma Ma",
    "cuisine": "Asian",
    "address": "1625 Wynkoop St, Denver, CO 80202",
    "distanceFromTuring": "0.3 miles",
    "priceRange": "$",
    "topChoice": "Ma Mas Chicken Noodle",
    "hours": "11:00 am - 10:00 pm",
    "linkToSite": "http://www.zoemama.com/"
  },
  {
    "id": 22,
    "name": "P.F Chang's",
    "cuisine": "Asian",
    "address": "1415 15th St, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$$",
    "topChoice": "Sesame Chicken",
    "hours": "11:00 am - 10:00 pm",
    "linkToSite": "https://www.pfchangs.com/"
  },
  {
    "id": 23,
    "name": "ChoLon",
    "cuisine": "Asian",
    "address": "1555 Blake St #101, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$$$",
    "topChoice": "Pork Belly Buns",
    "hours": "11:00 am - 2:00 pm",
    "linkToSite": "https://www.cholon.com/denver/"
  },
  {
    "id": 24,
    "name": "Cheba Hut Toasted Subs",
    "cuisine": "Sandwiches",
    "address": "1531 Champa St, Denver, CO 80202",
    "distanceFromTuring": "0.5 miles",
    "priceRange": "$",
    "topChoice": "Silver Haze",
    "hours": "10:00 am - 11:00 pm",
    "linkToSite": "https://chebahut.com/"
  },
  {
    "id": 25,
    "name": "Syrup",
    "cuisine": "Breakfast",
    "address": "999 18th St #105, Denver, CO 80202",
    "distanceFromTuring": "0.3 miles",
    "priceRange": "$$",
    "topChoice": "Nutella Stuffed French Toast",
    "hours": "7:00 am - 1:45 pm",
    "linkToSite": "https://www.syruprestaurant.com/"
  },
  {
    "id": 26,
    "name": "bd's Mongolian Grill",
    "cuisine": "Asian",
    "address": "1620 Wazee St, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$$",
    "topChoice": "Stir-Fry",
    "hours": "11:00 am - 10:00 pm",
    "linkToSite": "https://www.gomongo.com/"
  },
  {
    "id": 27,
    "name": "Rocky Mountain Chocolate Factory",
    "cuisine": "Dessert",
    "address": "1512 Larimer St # 44R, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$",
    "topChoice": "Dipped Oreos",
    "hours": "10:00 am - 10:00 pm",
    "linkToSite": "https://www.rmcf.com/"
  },
  {
    "id": 28,
    "name": "Chili's Grill & Bar",
    "cuisine": "American",
    "address": "951 16th St Mall #105, Denver, CO 80202",
    "distanceFromTuring": "0.4 miles",
    "priceRange": "$$",
    "topChoice": "Chicken Crispers",
    "hours": "11:00 am - 10:00 pm",
    "linkToSite": "https://www.chilis.com/locations/us/co/denver/downtown-denver/?utm_source=gpo&utm_medium=local&utm_campaign=gmb"
  },
  {
    "id": 29,
    "name": "Backcountry Delicatessen",
    "cuisine": "Sandwiches",
    "address": "1617 Wazee St, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$",
    "topChoice": "Ridgeline Sandwich",
    "hours": "7:00 am - 6:00 pm",
    "linkToSite": "https://backcountry-deli.com/"
  },
  {
    "id": 30,
    "name": "Anthony's Pizza & Pasta",
    "cuisine": "Pizza",
    "address": "1780 16th St Mall, Denver, CO 80202",
    "distanceFromTuring": "0.4 miles",
    "priceRange": "$",
    "topChoice": "Sausage Calzone",
    "hours": "11:00 am - 9:00 pm",
    "linkToSite": "http://www.anthonyspizzaandpasta.com/"
  },
  {
    "id": 31,
    "name": "Brothers Bar & Grill",
    "cuisine": "American",
    "address": "1920 Market St, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$",
    "topChoice": "$2 Burgers (Thursdays only)",
    "hours": "11:00 am - 2:00 am",
    "linkToSite": "https://www.brothersbar.com/"
  },
  {
    "id": 32,
    "name": "Bruegger's Bagels",
    "cuisine": "Breakfast",
    "address": "817 17th Street Bank Lofts Building, Denver, CO 80202",
    "distanceFromTuring": "0.4 miles",
    "priceRange": "$",
    "topChoice": "Everything with Cream Cheese",
    "hours": "5:30 am - 4:00 pm",
    "linkToSite": "https://www.brueggers.com/"
  },
  {
    "id": 33,
    "name": "Starbucks",
    "cuisine": "Breakfast",
    "address": "1672 Lawrence St, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$",
    "topChoice": "Double Espresso",
    "hours": "6:00 am - 4:00 pm",
    "linkToSite": "https://www.starbucks.com/"
  },
  {
    "id": 34,
    "name": "Marquis Pizza",
    "cuisine": "Pizza",
    "address": "2009 Larimer St, Denver, CO 80205",
    "distanceFromTuring": "0.3 miles",
    "priceRange": "$",
    "topChoice": "Giant Pepperoni Slice",
    "hours": "11:00 am - 12:00 am",
    "linkToSite": "https://marquistogo.com/"
  },
  {
    "id": 35,
    "name": "Subway",
    "cuisine": "Sandwiches",
    "address": "1725 Champa St #101, Denver, CO 80202",
    "distanceFromTuring": "0.4 miles",
    "priceRange": "$",
    "topChoice": "Meatball Sub",
    "hours": "7:00 am - 9:00 pm",
    "linkToSite": "https://www.subway.com/en-us"
  },
  {
    "id": 36,
    "name": "Bonnano Brothers Pizzeria",
    "cuisine": "Pizza",
    "address": "1800 Wazee St, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$$",
    "topChoice": "Four Cheese Pizza",
    "hours": "11:00 am - 10:00 pm",
    "linkToSite": "https://www.denvermilkmarket.com/bonanno-brothers-pizzeria"
  },
  {
    "id": 37,
    "name": "Mano Pastaria",
    "cuisine": "Noodles",
    "address": "1800 Wazee St, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$$",
    "topChoice": "Agnolotti",
    "hours": "11:00 am - 10:00 pm",
    "linkToSite": "https://www.denvermilkmarket.com/mano-pastaria/"
  },
  {
    "id": 38,
    "name": "Lou's",
    "cuisine": "Sandwiches",
    "address": "1800 Wazee St, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$",
    "topChoice": "Mother Clucker",
    "hours": "11:00 am - 10:00 pm",
    "linkToSite": "https://www.denvermilkmarket.com/lous-hot-and-naked"
  },
  {
    "id": 39,
    "name": "Mopoke",
    "cuisine": "Asian",
    "address": "1800 Wazee St, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$",
    "topChoice": "Spicy Tuna Bowl",
    "hours": "11:00 am - 10:00 pm",
    "linkToSite": "https://www.denvermilkmarket.com/mopoke"
  },
  {
    "id": 40,
    "name": "Cornicello",
    "cuisine": "Dessert",
    "address": "1800 Wazee St, Denver, CO 80202",
    "distanceFromTuring": "0.2 miles",
    "priceRange": "$",
    "topChoice": "BYO Sammie",
    "hours": "11:00 am - 10:00 pm",
    "linkToSite": "https://www.denvermilkmarket.com/cornicello"
  }

]

const turing = {
  "name": "Turing School of Software and Design",
  "location": "1331 17th St LL100, Denver, CO 80202",
  "schoolStartTime": "9:00 am",
  "schoolLunchTime": "12:00 pm",
  "schoolEndTime": "4:00 pm",
  "foodOptions": [
    "Sandwiches",
    "Pizza",
    "Mexican",
    "Asian",
    "American",
    "Noodles",
    "Grocery",
    "Dessert",
    "Mediterranean",
    "Breakfast"
  ]
}













