const gems = [
  {
    "Name" : "Aquamarine",
    "Color": ["Blue"],
    "Family": "Beryl",
    "Moh's scale": [7.5 , 8]
  },
  {
    "Name": "Bixbite",
    "Color": ["Red"],
    "Family": "Beryl",
    "Moh's scale": [7.5 , 8]
  },
  {
    "Name" : "Emerald",
    "Color": ["Green"],
    "Family": "Beryl",
    "Moh's scale": [7.5 , 8]
  },
  {
    "Name" : "Goshenite",
    "Color": ["White"],
    "Family": "Beryl",
    "Moh's scale": [7.5 , 8]
  },
  {
    "Name": "Heliodor",   
    "Color": ["Yellow"],
    "Family": "Beryl",
    "Moh's scale": [7.5 , 8]
  },
  {
    "Name": "Maxixe", 
    "Color": ["Yellow"],
    "Family": "Beryl",
    "Moh's scale": [7.5 , 8]
  },
  {
    "Name": "Morganite",
    "Color": ["Pink"],
    "Family": "Beryl",
     "Moh's scale": [7.5 , 8]
  },
  {
    "Name":"Ruby",  
    "Color": ["Red"],
    "Family": "Corundum",
    "Moh's scale": [9]
  },
  {
    "Name": "Saphire",  
    "Color": ["Yellow", "Green", "Blue", "Purple", "Pink", "White", "Black", "Brown"],
    "Family": "Corundum",
    "Moh's scale": [9]
  },
  {
    "Name": "Padparadscha",
    "Color": ["Orange", "Pink"],
    "Family": "Corundum",
    "Moh's scale": [9]
  },
  {
    "Name": "Diamond",
    "Color": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "White", "Black", "Grey", "Brown"],
    "Family": "Diamond",
    "Moh's scale": [10]
  },
  {
    "Name" : "MoonStone",
    "Color": ["White"],
    "Family": "Feldspar",
    "Moh's scale": [6, 6.5]
  },
  {
    "Name" : "Almandine",
    "Color": ["Red"],
    "Family": "Garnet",
    "Moh's scale": [6.5, 8.5]
  },
  {
    "Name": "Hessonite", 
    "Color": ["Orange"],
    "Family": "Garnet",
    "Moh's scale": [6.5, 8.5]
  },
  {
    "Name": "Pyrope",
    "Color": ["Red", "Purple"],
    "Family": "Garnet",
    "Moh's scale": [6.5, 8.5]
  },
  {
    "Name": "Rhodalite",  
    "Color": ["Red", "Pink"],
    "Family": "Garnet",
    "Moh's scale": [6.5, 8.5]
  },
  {
    "Name": "Tsavorite",
    "Color": ["Green"],
    "Family": "Garnet",
    "Moh's scale": [6.5, 8.5]
  },
  { 
    "Name": "Jadeite",
    "Color": ["Green", "Blue", "Purple"],
    "Family": "Jade",
    "Moh's scale": [6, 7]
  },
  {
    "Name": "Nephrite",
    "Color": ["Yellow", "Green", "Blue", "Purple", "White", "Black", "Grey", "Brown" ],
    "Family": "Jade",
    "Moh's scale": [6, 7]
  },
  {
    "Name": "Fire Opal",
    "Color": ["Red", "Orange", "Yellow"],
    "Family": "Jade",
    "Moh's scale": [5.5, 6.5]
  },
  {
    "Name": "Opal",
    "Color": ["Blue", "Purple", "Pink", "White", "Black", "Brown"],
    "Family": "Jade",
    "Moh's scale": [5.5, 6.5]
  },
  {
    "Name": "Pearl",
    "Color": ["Orange", "Yellow", "Green", "Blue", "Pink", "White", "Black", "Grey", "Brown"],
    "Family": "Pearl",
    "Moh's scale": [2.5, 4.5]
  },
  {
    "Name": "Peridot",
    "Color": ["Green"],
    "Family": "Peridot",
    "Moh's scale": [7]
  },
  {
    "Name": "Amethyst",
    "Color": ["Purple"],
    "Family": "Quartz",
    "Moh's scale": [7]
  },
  {
    "Name": "Carnelian",
    "Color": ["Red", "Orange"],
    "Family": "Quartz",
    "Moh's scale": [7]
  },
  {
    "Name": "Citrine",
    "Color": ["Yellow"],
    "Family": "Quartz",
    "Moh's scale": [7]
  },
  {
    "Name": "Onyx",
    "Color": ["Black"],
    "Family": "Quartz",
    "Moh's scale": [7]
  },
  {
    "Name": "Prasiolite",
    "Color": ["Green"],
    "Family": "Quartz",
    "Moh's scale": [7]
  },
  {
    "Name": "Rose Quartz"
    "Color": ["Green"],
    "Family": "Quartz",
    "Moh's scale": [7]
  },
  {
    "Name": "Smoky Quartz",
      "Color": ["Green"],
      "Family": "Quartz",
      "Moh's scale": [7]
  },
  {
    "Name": "Almandine Spinel",
    "Color": ["Purple"],
    "Family": "Spinel",
    "Moh's scale": [7.5, 8.0]
  },
  {
    "Name": "Gahnospinel",
    "Color": ["Green"],
    "Family": "Spinel",
    "Moh's scale": [7.5, 8.0]
  },
  {
    "Name": "Peridotite",
    "Color": ["Green"],
    "Family": "Spinel",
    "Moh's scale": [7.5, 8.0]
  },
  {
    "Name": "Rubicelle"
    "Color": ["Red"],
    "Family": "Spinel",
    "Moh's scale": [7.5, 8.0]
  },
  {
    "Name": "Spinel",
    "Color": ["Blue", "Pink", "White", "Black", "Brown"],
    "Family": "Spinel",
    "Moh's scale": [7.5, 8.0]
  },
  {
    "Name" : "Topaz",
    "Color": ["Red", "Orange", "Yellow", "Green", "Blue", "Pink", "White", "Brown" ],
    "Family": "Topaz",
    "Moh's scale": [8]
  },
  {
    "Name": "Achroite",
    "Color": ["White"],
    "Family": "Tourmaline",
    "Moh's scale": [7, 7.5]
  },
  {
    "Name": "Chrome Tourmaline" 
    "Color": ["Green"],
    "Family": "Tourmaline",
    "Moh's scale": [7, 7.5]
  },
  {
    "Name": "Dravite",
    "Color": ["Black", "Brown"],
    "Family": "Tourmaline",
    "Moh's scale": [7, 7.5]
  },
  {
    "Name": "Elbaite",
    "Color": ["Green"],
    "Family": "Tourmaline",
    "Moh's scale": [7, 7.5]
  },
  {    
    "Name": "Indicolite"
    "Color": ["Blue"],
    "Family": "Tourmaline",
    "Moh's scale": [7, 7.5]
  },
  {
    "Name": "Rubellite",
    "Color": ["Red","Pink"],
    "Family": "Tourmaline",
    "Moh's scale": [7, 7.5]
  },
  {
    "Name": "Schorl",
    "Color": ["Green"],
    "Family": "Tourmaline",
    "Moh's scale": [7, 7.5]
  },
  {
    "Name" : "Siberite",
    "Color": ["Purple"],
    "Family": "Tourmaline",
    "Moh's scale": [7, 7.5]
  },
  {
    "Name" : "Verdelite",
    "Color": ["Green"],
    "Family": "Tourmaline",
    "Moh's scale": [7, 7.5]
  },
  {
    "Name": "Watermelon Tourmaline", 
    "Color": ["Red", "Green", "Pink"],
    "Family": "Tourmaline",
    "Moh's scale": [7, 7.5]
  },
  {
    "Name": "Turquoise",
    "Color": ["Green", "Blue"],
    "Family": "Turquoise",
    "Moh's scale": [5, 6]
  },
  {
    "Name" : "Zircon", 
    "Color": ["Red", "Yellow", "Green", "Blue", "White", "Grey", "Brown"],
    "Family": "Zircon",
    "Moh's scale": [7.5]
  }
]

const metals = [
  {
    "Name" : "Gold",
      "Color": ["Yellow", "Pink", "Green"],
      "Makeup": ["Gold", "Silver", "Copper"],
      "Durable": "True", 
      "Resizeable": "True"
  },
  {
    "Name" : "White Gold",
    "Color": ["White"],
    "Makeup": ["Gold", "Silver", "Rhodium-Plated"],
    "Durable": "True",
    "Resizeable": "True"
  },
  {
    "Name": "Palladium",
    "Color": ["White"],
    "Makeup": ["Platinum-group"],
    "Durable": "True", 
    "Resizeable": "True"
  },
  {
    "Name": "Platinum", 
    "Color": ["White"],
    "Makeup": ["Platinum-group"],
    "Durable": "True", 
    "Resizeable": "True"
  },
  {
    "Name" : "Silver",
    "Color": ["White"],
    "Makeup": ["Silver"],
    "Durable": "False", 
    "Resizeable": "True"
  },
  {
    "Name": "Steel",
    "Color": ["White"],
    "Makeup": ["Iron"],
    "Durable": "True",
    "Resizeable": "False"
  },
  {
    "Name" : "Titanium",
    "Color": ["White"],
    "Makeup": ["Titanium"],
    "Durable": "True",
    "Resizeable": "False"
  },
  {
    "Name" : "Tungsten",
    "Color": ["White"],
    "Makeup": ["Tungsten"],
    "Durable": "True",
    "Resizeable": "False"
  }
]

module.exports = {
  gems,
  metals
}
