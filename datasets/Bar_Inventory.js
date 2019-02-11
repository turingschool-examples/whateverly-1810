const distributor = [
  {
    "distributor": "RNDC",
    "location": "Denver",
    "contact_name": "Emily",
    "phone_number": 9705317217,
    "delivery_day": "Thursday",
    "inventory": [
      {
        "product": "Deep Eddy",
        "type": "liquor",
        "price": 16.88,
        "size": 33.8,
        "size_amount": "ounces"
      },
      {
        "product": "Fireball",
        "type": "liquor",
        "price": 18.78,
        "size": 33.8,
        "size_amount": "ounces"
      },
      {
        "product": "Jim Beam",
        "type": "liquor",
        "price": 16.99,
        "size": 25.3,
        "size_amount": "ounces"
      },
      {
        "product": "Makers Mark",
        "type": "liquor",
        "price": 36.71,
        "size": 33.8,
        "size_amount": "ounces"
      },
      {
        "product": "Sauza",
        "type": "liquor",
        "price": 11.79,
        "size": 33.8,
        "size_amount": "ounces"
      },
      {
        "product": "Tincup",
        "type": "liquor",
        "price": 23.70,
        "size": 33.8,
        "size_amount": "ounces"
      },
      {
        "product": "Kentucky Deluxe",
        "type": "liquor",
        "price": 11.70,
        "size": 33.8,
        "size_amount": "ounces"
      },
      {
        "product": "PBR",
        "type": "Beer",
        "price": 21.25,
        "size": 24,
        "size_amount": "case"
      },
      {
        "product": "Montucky",
        "type": "Beer",
        "price": 24.22,
        "size": 24,
        "size_amount": "case"
      },
      {
        "product": "Budweiser",
        "type": "Beer",
        "price": 26.45,
        "size": 24,
        "size_amount": "case"
      },
      {
        "product": "Bud Light",
        "type": "Beer",
        "price": 26.45,
        "size": 24,
        "size_amount": "case"
      },
      {
        "product": "Coors Banquet",
        "type": "Beer",
        "price": 25.35,
        "size": 24,
        "size_amount": "case"
      },
      {
        "product": "Coors Light",
        "type": "Beer",
        "price": 23.15,
        "size": 24,
        "size_amount": "case"
      },
      {
        "product": "Miller Light",
        "type": "Beer",
        "price": 24.22,
        "size": 24,
        "size_amount": "case"
      }
    ]
  }
]

const menu = [
  {
    "drink": "Well Whiskey",
    "price_per_drink": 4,
    "ingredients": [
      {
        "liqour": "Kentucky Deluxe",
        "drink_pour_size": 1.5,
        "size_amount": "ounces"
      }
    ]
  },
  {
    "drink": "Whiskey Tincup",
    "price_per_drink": 7,
    "ingredients": [
      {
        "liqour": "Tincup",
        "drink_pour_size": 1.5,
        "size_amount": "ounces"
      }
    ]
  },
  {
    "drink": "Whiskey Makers Mark",
    "price_per_drink": 7,
    "ingredients": [
      {
        "liqour": "Makers Mark",
        "drink_pour_size": 1.25,
        "size_amount": "ounces"
      }
    ]
  },
  {
    "drink": "Fireball Shooter",
    "price_per_drink": 3,
    "ingredients": [
      {
        "liqour": "fireball",
        "drink_pour_size": 1.5,
        "size_amount": "ounces"
      }
    ]
  },
  {
    "drink": "Sauza Shooter",
    "price_per_drink": 5,
    "ingredients": [
      {
        "liqour": "Sauza",
        "drink_pour_size": 1.5,
        "size_amount": "ounces"
      }
    ]
  },
  {
    "drink": "Whiskey Jim Beam",
    "price_per_drink": 5,
    "ingredients": [
      {
        "liqour": "Jim Beam",
        "drink_pour_size": 1.5,
        "size_amount": "ounces"
      }
    ]
  },
  {
    "drink": "PBR Tall Boy",
    "price_per_drink": 3,
    "ingredients": [
      {
        "Beer": "PBR",
        "drink_pour_size": 1,
        "size_amount": "can"
      }
    ]
  },
  {
    "drink": "Montucky Cold Snack",
    "price_per_drink": 4,
    "ingredients": [
      {
        "Beer": "Montucky",
        "drink_pour_size": 1,
        "size_amount": "can"
      }
    ]
  },
  {
    "drink": "Budweiser Bottle",
    "price_per_drink": 4,
    "ingredients": [
      {
        "Beer": "Budweiser",
        "drink_pour_size": 1,
        "size_amount": "bottle"
      }
    ]
  },
  {
    "drink": "Bud Light Bottle",
    "price_per_drink": 4,
    "ingredients": [
      {
        "Beer": "Bud Light",
        "drink_pour_size": 1,
        "size_amount": "bottle"
      }
    ]
  },
  {
    "drink": "Coors Bottle",
    "price_per_drink": 4,
    "ingredients": [
      {
        "Beer": "Budweiser",
        "drink_pour_size": 1,
        "size_amount": "bottle"
      }
    ]
  },
  {
    "drink": "Coors Light Bottle",
    "price_per_drink": 4,
    "ingredients": [
      {
        "Beer": "Coors Light",
        "drink_pour_size": 1,
        "size_amount": "bottle"
      }
    ]
  },
  {
    "drink": "Miller Light Bottle",
    "price_per_drink": 4,
    "ingredients": [
      {
        "Beer": "Miller Light",
        "drink_pour_size": 1,
        "size_amount": "bottle"
      }
    ]
  }
]


module.exports = {
  distributor,
  menu
}
