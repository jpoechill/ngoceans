// MainController
app.controller('MainController', ['$scope', function MainController($scope) {
  $scope.articJSON = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Amundsen Gulf",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "James Bay",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "/img/thumb-2.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Baffin Bay",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-5.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Kara Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-6.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Barents Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-7.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Kara Strait",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-8.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Beaufort Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-9.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Laptev Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-10.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Bering Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-3.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Lincoln Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-3.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Chukchi Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-3.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Prince Gustav Adolf Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-3.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "East Siberian Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-3.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Pechora Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-3.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Greenland Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-12.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "White Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-11.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Hudson Bay",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "/img/thumb-10.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      }
    ]
  };
  $scope.atlanticJSON = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Davis Strait",
        "coords" : [-13.56, 23.97],
        "description" : "The Arafura Sea is bordered by Torres Strait and through that the Coral Sea to the east, the Gulf of Carpentaria to the south, the Timor Sea to the west and the Banda and Ceram seas to the northwest. It is 1,290 kilometres (800 mi) long and 560 kilometres (350 mi) wide. The depth of the sea is primarily 50–80 metres (165–265 feet) with the depth increasing to the west. As a shallow tropical sea, its waters are a breeding ground for tropical cyclones. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Labrador Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Gulf of St. Lawrence",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Gulf of Maine",
        "coords" : [-13.56, 23.97],
        "description" : "The Arafura Sea is bordered by Torres Strait and through that the Coral Sea to the east, the Gulf of Carpentaria to the south, the Timor Sea to the west and the Banda and Ceram seas to the northwest. It is 1,290 kilometres (800 mi) long and 560 kilometres (350 mi) wide. The depth of the sea is primarily 50–80 metres (165–265 feet) with the depth increasing to the west. As a shallow tropical sea, its waters are a breeding ground for tropical cyclones. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Nantucket Sound",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Buzzards Bay",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Narragansett Bay",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Long Island Sound",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "New York Bay",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Chesapeake Bay",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Gulf of Mexico",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Caribbean Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Argentine Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Norwegian Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "North Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Baltic Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "English Channel",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Irish Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Celtic Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Bay of Biscay",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Mediterranean Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Marmara Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Black Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Sea of Azov",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Gulf of Guinea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      }
    ]
  };
  $scope.indianJSON = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Andaman Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Arafura Sea is bordered by Torres Strait and through that the Coral Sea to the east, the Gulf of Carpentaria to the south, the Timor Sea to the west and the Banda and Ceram seas to the northwest. It is 1,290 kilometres (800 mi) long and 560 kilometres (350 mi) wide. The depth of the sea is primarily 50–80 metres (165–265 feet) with the depth increasing to the west. As a shallow tropical sea, its waters are a breeding ground for tropical cyclones. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Arabian Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Bay of Bengal",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Gulf of Aden",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Gulf of Oman",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Laccadive Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Mozambique Channel",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Persian Gulf",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Red Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Timor Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      }
    ]
  };
  $scope.pacificJSON = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Arafura Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Arafura Sea is bordered by Torres Strait and through that the Coral Sea to the east, the Gulf of Carpentaria to the south, the Timor Sea to the west and the Banda and Ceram seas to the northwest. It is 1,290 kilometres (800 mi) long and 560 kilometres (350 mi) wide. The depth of the sea is primarily 50–80 metres (165–265 feet) with the depth increasing to the west. As a shallow tropical sea, its waters are a breeding ground for tropical cyclones. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Bali Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Banda Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Bering Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Bismarck Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Bohai Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Bohol Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Camotes Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Celebes Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Ceram Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Chilean Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Sea of Chiloé",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Coral Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "East China Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Flores Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Gulf of Alaska",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Gulf of California",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Gulf of Carpentaria",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Gulf of Thailand",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Halmahera Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Java Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Koro Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Mar de Grau",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Molucca Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Philippine Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Salish Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Savu Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Sea of Japan",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Sea of Okhotsk",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Seto Inland Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Sibuyan Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Solomon Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "South China Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Sulu Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Tasman Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Visayan Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Yellow Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      }
    ]
  };
  $scope.southernJSON = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Amundsen Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Arafura Sea is bordered by Torres Strait and through that the Coral Sea to the east, the Gulf of Carpentaria to the south, the Timor Sea to the west and the Banda and Ceram seas to the northwest. It is 1,290 kilometres (800 mi) long and 560 kilometres (350 mi) wide. The depth of the sea is primarily 50–80 metres (165–265 feet) with the depth increasing to the west. As a shallow tropical sea, its waters are a breeding ground for tropical cyclones. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Bass Strait",
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Bellingshausen Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Cooperation Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Cosmonauts Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Davis Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "D'Urville Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Drake Passage",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Great Australian Bight",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Gulf St Vincent",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "King Haakon VII Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Lazarev Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Mawson Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Riiser-Larsen Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Ross Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Scotia Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Somov Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Spencer Gulf",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      },
      {
        "name" : "Weddell Sea",
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "tide" : "HIGH",
        "comments" : [
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            },
            {
              "name" : "",
              "img" : "" ,
              "date" : "",
              "comment" : ""
            }
        ]
      }
    ]
  };


  for (var i = 0; i < $scope.articJSON.seas.length; i=i+1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    $scope.articJSON.seas[i].photo = "/img/thumb-" + randomIMGNum + ".png";
  }

  for (var i = 0; i < $scope.atlanticJSON.seas.length; i=i+1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    $scope.atlanticJSON.seas[i].photo = "/img/thumb-" + randomIMGNum + ".png";
  }

  for (var i = 0; i < $scope.indianJSON.seas.length; i=i+1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    $scope.indianJSON.seas[i].photo = "/img/thumb-" + randomIMGNum + ".png";
  }

  for (var i = 0; i < $scope.pacificJSON.seas.length; i=i+1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    $scope.pacificJSON.seas[i].photo = "/img/thumb-" + randomIMGNum + ".png";
  }

  for (var i = 0; i < $scope.southernJSON.seas.length; i=i+1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    $scope.southernJSON.seas[i].photo = "/img/thumb-" + randomIMGNum + ".png";
  }

}]);
