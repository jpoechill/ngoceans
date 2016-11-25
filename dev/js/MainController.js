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
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
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
        "description" : "Baffin Bay, located between Baffin Island and the southwest coast of Greenland, is a marginal sea of the North Atlantic Ocean. It is connected to the Atlantic via Davis Strait and the Labrador Sea. The narrower Nares Strait connects Baffin Bay with the Arctic Ocean. The bay is not navigable most of the year because of the ice cover and high density of floating ice and icebergs in the open areas. However, a polynya of about 80,000 km2 (31,000 sq mi), known as the North Water, opens in summer on the north near Smith Sound. Most of the aquatic life of the bay is concentrated near that region. ",
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
        "description" : "The Kara Sea is part of the Arctic Ocean north of Siberia. It is separated from the Barents Sea to the west by the Kara Strait and Novaya Zemlya, and the Laptev Sea to the east by the Severnaya Zemlya archipelago. It is named for the Kara River (flowing into Baydaratskaya Bay), which is now relatively insignificant but which played an important role in the Russian conquest of northern Siberia. The word \"kara\" is derived from kara, which in several Turkic languages means \"black\" and also symbolizes \"north\". ",
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
        "description" : "The Barents Sea is a marginal sea of the Arctic Ocean, located off the northern coasts of Norway and Russia divided between Norwegian and Russian territorial waters. Known among Russians in the Middle Ages as the Murman Sea (\"Norwegian Sea\"), the sea takes its current name from the Dutch navigator Willem Barentsz. It is a rather shallow shelf sea, with an average depth of 230 metres (750 ft), and is an important site for both fishing and hydrocarbon exploration. The Barents Sea is bordered by the Kola Peninsula to the south, the shelf edge towards the Norwegian Sea to the west, and the archipelagos of Svalbard to the northwest, Franz Josef Land to the north east and Novaya Zemlya to the east. Novaya Zemlya, an extension of the northern part of the Ural Mountains, separates the Barents Sea from the Kara Sea. ",
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
        "description" : "The Kara Strait or Kara Gates is a 56 km (35 mi) wide channel of water between the southern end of Novaya Zemlya and the northern tip of Vaygach Island. This strait connects the Kara Sea and the Barents Sea in northern Russia. The Kara Strait was an important waterway in the early exploration of the Northern Sea Route. ",
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
        "description" : "The Beaufort Sea is a marginal sea of the Arctic Ocean, located north of the Northwest Territories, the Yukon, and Alaska, west of Canada's Arctic islands. The sea is named after hydrographer Sir Francis Beaufort. The major Mackenzie River empties into the Canadian part of the sea, west of Tuktoyaktuk, which is one of the few permanent settlements on the sea shores. ",
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
        "description" : "The Laptev Sea is a marginal sea of the Arctic Ocean. It is located between the northern coast of Siberia, the Taimyr Peninsula, Severnaya Zemlya and the New Siberian Islands. Its northern boundary passes from the Arctic Cape to a point with co-ordinates of 79°N and 139°E, and ends at the Anisiy Cape. The Kara Sea lies to the west, the East Siberian Sea to the east. ",
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
        "description" : "The Bering Sea is a marginal sea of the Pacific Ocean. It comprises a deep water basin, which then rises through a narrow slope into the shallower water above the continental shelves. The Bering Sea is separated from the Gulf of Alaska by the Alaska Peninsula. It covers over 2,000,000 square kilometres (770,000 sq mi) and is bordered on the east and northeast by Alaska, on the west by Russian Far East and Kamchatka Peninsula, on the south by the Alaska Peninsula and the Aleutian Islands and on the far north by the Bering Strait, which connects the Bering Sea to the Arctic Ocean's Chukchi Sea. Bristol Bay is the portion of the Bering Sea which separates the Alaska Peninsula from mainland Alaska. The Bering Sea is named for Vitus Bering, a Danish navigator in Russian service, who in 1728 was the first European to systematically explore it, sailing from the Pacific Ocean northward to the Arctic Ocean. ",
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
        "description" : "incoln Sea is a body of water in the Arctic Ocean, stretching from Cape Columbia, Canada, in the west to Cape Morris Jesup, Greenland, in the east. The northern limit is defined as the great circle line between those two headlands. It is covered with sea ice throughout the year, the thickest sea ice in the Arctic Ocean, which can be up to 15 m (49 ft) thick. Water depths range from 100 m (330 ft) to 300 m (980 ft). Water and ice from Lincoln Sea empty into Robeson Channel, the northernmost part of Nares Strait, most of the time. ",
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
        "description" : "Chukchi Sea is a marginal sea of the Arctic Ocean. It is bounded on the west by the Long Strait, off Wrangel Island, and in the east by Point Barrow, Alaska, beyond which lies the Beaufort Sea. The Bering Strait forms its southernmost limit and connects it to the Bering Sea and the Pacific Ocean. The principal port on the Chukchi Sea is Uelen in Russia. The International Date Line crosses the Chukchi Sea from northwest to southeast. It is displaced eastwards to avoid Wrangel Island as well as the Chukotka Autonomous Okrug on the Russian mainland. ",
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
        "description" : "Prince Gustav Adolf Sea is a marginal sea of the Arctic Ocean located in Qikiqtaaluk Region, Nunavut, Canada. It is situated among the islands of the Canadian Arctic Archipelago. The sea is bounded on the west by Borden Island and Mackenzie King Island, and on the east by Ellef Ringnes Island. To the south is Lougheed Island. The sea opens into the Arctic Ocean to the north, and into the Byam Martin Channel and Maclean Strait to the south. ",
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
        "description" : "The East Siberian Sea is a marginal sea in the Arctic Ocean. It is located between the Arctic Cape to the north, the coast of Siberia to the south, the New Siberian Islands to the west and Cape Billings, close to Chukotka, and Wrangel Island to the east. This sea borders on the Laptev Sea to the west and the Chukchi Sea to the east. ",
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
        "description" : "Pechora Sea, is a sea at the northwest of Russia, the southeastern part of the Barents Sea. The western border of the sea is off Kolguyev Island, while the eastern border is the western coasts of Vaygach Island and the Yugorsky Peninsula, and the northern border the southern end of Novaya Zemlya. The Pechora Sea is quite shallow, its average depth being only 6 m. The deepest point reaches 210 m. In the southern part of the sea runs the eastward-flowing Kolguyev Current. There are a few islands close to the coast, the largest of which is Dolgiy Island. The Pechora Sea is blocked by floating ice from November to June. The main river entering the sea is the Pechora. ",
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
        "description" : "The Greenland Sea is a body of water that borders Greenland to the west, the Svalbard archipelago to the east, Fram Strait and the Arctic Ocean to the north, and the Norwegian Sea and Iceland to the south. The Greenland Sea is often defined as part of the Arctic Ocean, sometimes as part of the Atlantic Ocean. However, definitions of the Arctic Ocean and its seas tend to be imprecise or arbitrary. In general usage the term \"Arctic Ocean\" would exclude the Greenland Sea. In oceanographic studies the Greenland Sea is considered part of the Nordic Seas, along with the Norwegian Sea. The Nordic Seas are the main connection between the Arctic and Atlantic oceans and, as such, could be of great significance in a possible shutdown of thermohaline circulation. In oceanography the Arctic Ocean and Nordic Seas are often referred to collectively as the \"Arctic Mediterranean Sea\", a marginal sea of the Atlantic. ",
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
        "description" : "The White Sea is a southern inlet of the Barents Sea located on the northwest coast of Russia. It is surrounded by Karelia to the west, the Kola Peninsula to the north, and the Kanin Peninsula to the northeast. The whole of the White Sea is under Russian sovereignty and considered to be part of the internal waters of Russia. Administratively, it is divided between Arkhangelsk and Murmansk Oblasts and the Republic of Karelia. ",
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
        "description" : "Hudson Bay (sometimes called Hudson's Bay, usually historically) is a large body of saltwater in northeastern Canada with a surface area of 1,230,000 square kilometres (470,000 sq mi). It drains a very large area, about 3,861,400 square kilometres (1,490,900 sq mi),[3] that includes parts of Ontario, Quebec, Saskatchewan, Alberta, most of Manitoba, and southeastern Nunavut, and parts of North Dakota, South Dakota, Minnesota, and Montana. Hudson Bay's southern arm is called James Bay. ",
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
        "description" : "The Andaman Sea is a body of water to the southeast of the Bay of Bengal, south of Myanmar (Burma), west of Thailand, north-west of Malay Peninsula, north of Sumatra and east of the Andaman Islands, India, from which it takes its name; it is part of the Indian Ocean. The sea has been traditionally used for fishery and transportation of goods between the coastal countries and its coral reefs and islands are popular tourist destinations. The fishery and tourist infrastructure was severely damaged by the 2004 Indian Ocean earthquake and tsunami. ",
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
        "description" : "The Arabian Sea is a region of the northern Indian Ocean bounded on the north by Pakistan and Iran, on the west by northeastern Somalia and the Arabian Peninsula, and on the east by India. Historically the sea has been known by other names including the Erythraean Sea and the Persian Sea. Its total area is 3,862,000 km2 (1,491,000 sq mi) and its maximum depth is 4,652 metres (15,262 ft). The Gulf of Aden is in the southwest, connecting the Arabian Sea to the Red Sea through the strait of Bab-el-Mandeb, and the Gulf of Oman is in the northwest, connecting it to the Persian Gulf. ",
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
        "description" : "The Bay of Bengal, the largest bay in the world, forms the northeastern part of the Indian Ocean. Roughly triangular, it is bordered mostly by India and Sri Lanka to the west, Bangladesh to the north, and Myanmar (Burma) and the Andaman and Nicobar Islands to the east. The Bay of Bengal occupies an area of 2,172,000 square kilometres (839,000 sq mi). A number of large rivers – the Ganges and its tributaries such as the Padma and Hooghly, the Brahmaputra and its tributaries such as the Jamuna and Meghna, other rivers such as the Irrawaddy River, Godavari, Mahanadi, Krishna and Kaveri flow into the Bay of Bengal. Among the important ports are Chennai, Chittagong, Kolkata, Mongla, Paradip, Tuticorin, Visakhapatnam and Yangon. ",
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
        "description" : "The Gulf of Aden is a gulf located in the Arabian Sea between Yemen, on the south coast of the Arabian Peninsula, and Somalia in the Horn of Africa. In the northwest, it connects with the Red Sea through the Bab-el-Mandeb strait, which is more than 20 miles wide. It shares its name with the port city of Aden in Yemen, which forms the northern shore of the gulf. Historically the Gulf of Aden was known as \"The Gulf of Berbera\", named after the ancient Somali port city of Berbera on the south side of the gulf. However, as the city of Aden grew during the colonial era, the name of \"Gulf of Aden\" was popularised. ",
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
        "description" : "The Gulf of Oman or Sea of Oman is a strait (and not an actual gulf) that connects the Arabian Sea with the Strait of Hormuz, which then runs to the Persian Gulf. It is generally included as a branch of the Persian Gulf, not as an arm of the Arabian Sea. The gulf borders Pakistan and Iran on the north, Oman on the south, and the United Arab Emirates on the west. ",
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
        "description" : "The Laccadive Sea or Lakshadweep Sea is a body of water bordering India (including its Lakshadweep islands), the Maldives, and Sri Lanka. It is located to the west of Kerala. This warm sea has a stable water temperature through the year and is rich in marine life, with the Gulf of Mannar alone hosting about 3,600 species. Trivandrum, Kochi, Colombo, Quilon and Male are the major cities on the shore of the Laccadive Sea. ",
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
        "description" : "The Mozambique Channel is an arm of the Indian Ocean located between Madagascar and Mozambique. The channel is about 1,600 km (1,000 mi) long and 419 km (260 mi) across at its narrowest point, and reaches a depth of 3,292 m (10,800 ft) about 230 km (143 mi) off the coast of Mozambique. A warm current, the Mozambique Current, flows in a southward direction in the channel, leading into the Agulhas Current off the east coast of South Africa. ",
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
        "description" : "The Persian Gulf is a mediterranean sea in Western Asia. The body of water is an extension of the Indian Ocean (Gulf of Oman) through the Strait of Hormuz and lies between Iran to the northeast and the Arabian Peninsula to the southwest. The Shatt al-Arab river delta forms the northwest shoreline. The Persian Gulf was a battlefield of the 1980–1988 Iran–Iraq War, in which each side attacked the other's oil tankers. It is the namesake of the 1991 Gulf War, the largely air- and land-based conflict that followed Iraq's invasion of Kuwait. The gulf has many fishing grounds, extensive coral reefs, and abundant pearl oysters, but its ecology has been damaged by industrialization and oil spills. The body of water is historically and internationally known as the \"Persian Gulf\". Some Arab governments refer to it as the \"Arabian Gulf\" or \"The Gulf\", but neither term is recognized internationally. The name \"Gulf of Iran (Persian Gulf)\" is used by the International Hydrographic Organization. The Persian Gulf is geologically very young, having been formed around 15,000 years ago. ",
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
        "description" : "The Red Sea (also the Erythraean Sea) is a seawater inlet of the Indian Ocean, lying between Africa and Asia. The connection to the ocean is in the south through the Bab el Mandeb strait and the Gulf of Aden. To the north lie the Sinai Peninsula, the Gulf of Aqaba, and the Gulf of Suez (leading to the Suez Canal). The Red Sea is a Global 200 ecoregion. The sea is underlain by the Red Sea Rift which is part of the Great Rift Valley. The Red Sea has a surface area of roughly 438,000 km2 (169,100 mi2),[1][2] is about 2250 km (1398 mi) long and, at its widest point, 355 km (220.6 mi) wide. It has a maximum depth of 2211 m (7254 ft) in the central median trench, and an average depth of 490 m (1,608 ft). However, there are also extensive shallow shelves, noted for their marine life and corals. The sea is the habitat of over 1,000 invertebrate species, and 200 soft and hard corals. It is the world's northernmost tropical sea. ",
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
        "description" : "The Timor Sea is a relatively shallow sea bounded to the north by the island of Timor, to the east by the Arafura Sea, to the south by Australia and to the west by the Indian Ocean. The sea contains a number of reefs, uninhabited islands and significant hydrocarbon reserves. International disputes emerged after the reserves were discovered resulting in the signing of the Timor Sea Treaty. The Timor Sea was hit by the worst oil spill for 25 years in 2009. It is possible that Australia's first inhabitants crossed the Timor Sea from Indonesia at a time when sea levels were lower. ",
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
        "description" : "The Amundsen Sea, an arm of the Southern Ocean off Marie Byrd Land in western Antarctica, lies between Cape Flying Fish (the northwestern tip of Thurston Island) to the east and Cape Dart on Siple Island to the west. Cape Flying Fish marks the boundary between the Amundsen Sea and the Bellingshausen Sea. West of Cape Dart there is no named marginal sea of the Southern Ocean between the Amundsen and Ross Seas. The Norwegian expedition of 1928–1929 under Captain Nils Larsen named the body of water for the Norwegian polar explorer Roald Amundsen while exploring this area in February 1929. The sea is mostly ice-covered, and the Thwaites Ice Tongue protrudes into it. The ice sheet which drains into the Amundsen Sea averages about 3 km (1.9 mi) in thickness; roughly the size of the state of Texas, this area is known as the Amundsen Sea Embayment (ASE); it forms one of the three major ice-drainage basins of the West Antarctic Ice Sheet. ",
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
        "description" : "Bass Strait is a sea strait separating Tasmania from the Australian mainland, specifically the state of Victoria. ",
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
        "description" : "The Bellingshausen Sea is an area along the west side of the Antarctic Peninsula between 57°18'W and 102°20'W, west of Alexander Island, east of Cape Flying Fish on Thurston Island, and south of Peter I Island (there the southern Vostokkysten). In the south are, from west to east, Eights Coast, Bryan Coast and English Coast (west part) of West Antarctica. To the west of Cape Flying Fish joins Amundsen Sea. Bellingshausen Sea has an area of 487,000 km2 (188,000 sq mi) and reaches a maximum depth of 4.5 kilometers (2.8 mi). It contains the undersea plain Bellingshausen Plain. It takes its name from Admiral Thaddeus Bellingshausen, who explored in the area in 1821. In the late Pliocene Epoch, about 2.15 million years ago, the Eltanin asteroid (about 1-4 km in diameter) impacted at the edge of the Bellingshausen sea (at the South Pacific Ocean). This is the only known impact in a deep-ocean basin in the world. ",
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
        "description" : "Cooperation Sea, also called Commonwealth Sea (erratum) or Sodruzhestvo Sea, is a proposed sea name for part of the Southern Ocean, between Enderby Land (the eastern limit of which is 59°34'E) and West Ice Shelf (85°E), off the coast of MacRobertson Land and Princess Elizabeth Land.[1] It would stretch over an area of 258,000 km². It would be bordered by the Davis Sea on the east, and by another Russian proposal to the 2002 International Hydrographic Organization (IHO) draft, a Cosmonauts Sea to the west. The Cooperation Sea was named in 1962 by the Soviet Antarctic Expedition in honor of international science cooperation in Antarctica. The name first appeared as a proposal to the IHO in the IHO 2002 draft. This draft was never approved by the IHO (or any other organization), and the 1953 IHO document (which does not contain the name) remains currently in force.[2] Leading geographic authorities and atlases do not use the name, including the 2014 10th edition of the World Atlas from the United States' National Geographic Society and the 2014 12th edition of the British Times Atlas of the World. But Soviet and Russian-issued maps do. Davis Station is located on the coast near here. ",
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
        "description" : "Cosmonauts Sea, sometimes misspelled Cosmonaut Sea, was a proposed sea name as part of the Southern Ocean, off the Prince Olav Coast and Enderby Land, Antarctica, between about 30°E and 50°E. It would have an area of 699,000 km². It would be bordered by two other proposals from a 2002 International Hydrographic Organization (IHO) draft, a Cooperation Sea to the east, and to the west a Riiser-Larsen Sea. The Cosmonauts Sea was named in 1962 by the Soviet Antarctic Expedition in honor of the world's first cosmonauts and the beginning of manned space exploration era. The name first appeared as a Russian marriage to the IHO in the IHO 2002 draft. This draft was never approved by the IHO (or any other organization), and the 1953 IHO document remains currently in force.[2] Leading geographic authorities and atlases do not use the name, including the 2014 10th edition World Atlas from the United States' National Geographic Society and the 2014 12th edition of the British Times Atlas of the World, though state-issued maps created by the Soviet Union and the Russian Federation do. The water here is close to freezing throughout the year and is mostly covered by ice. Between 1973 and 1986, several polynyas have occurred in these waters, with the totally enclosed Cosmonaut polynya attaining a maximum size on July 25, 1980, with an open water area of as much as 137,700 km2. This polynya lasted for several weeks before disappearing on August 16, 1980. ",
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
        "description" : "Davis Sea is an area of the sea along the coast of East Antarctica between West Ice Shelf in the west and the Shackleton Ice Shelf in the east, or between 82° and 96°E. The name \"Davis Sea\" appears in most leading geographically authoritative publications such as the 2014 10th edition World Atlas from the National Geographic Society and the 2014 12th edition of the Times Atlas of the World, unlike neighboring proposed water body names such as a Russian proposed \"Cooperation Sea\" name to the west. According to the Great Soviet Encyclopedia, it stretches from 87°E to 98°E, and is up to 1,300 metres deep. Its area is given as only 21,000 km. Other authorities such as National Geographic assign it a much smaller extent. It washes the coast of Princess Elizabeth Land (there only Leopold and Astrid Coast), Kaiser Wilhelm II Land, and Queen Mary Land, all sectors of the Australian Antarctic Territory. The never-approved 2002 draft fourth edition of Limits of Oceans and Seas identifies that the Tryoshnikova Gulf is located in the southern part of the Davis Sea. About 55 km off the coast of Queen Mary Land is Drygalski Island. Russian Mirny Station was built on the coast of Queen Mary Land in 1956. Roscoe Glacier flows into the eastern part of Davis Sea. Close offshore are Bigelow Rock and the Gillies Islands. Discovered by Australian Antarctic Expedition (1911–14) from the Aurora. Named by Sir Douglas Mawson for Captain J.K. Davis, master of the Aurora and second in command of the expedition. ",
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

  for (var i = 0; i < $scope.articJSON.seas.length; i = i + 1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    var randomDescriptNum = Math.floor((Math.random() * 7) + 1);
    var randomSeaTide = Math.floor((Math.random() * 3) + 1);
    var coordsNumFirst = (Math.random() * 300 - 200).toFixed(2);
    var coordsNumSecond = (Math.random() * 300 - 200).toFixed(2);
    $scope.articJSON.seas[i].coords[0] = coordsNumFirst;
    $scope.articJSON.seas[i].coords[1] = coordsNumSecond;
    $scope.articJSON.seas[i].tide = showTide(randomSeaTide);
    $scope.articJSON.seas[i].photo = "/img/thumb-" + randomIMGNum + ".png";
  }

  for (var i = 0; i < $scope.atlanticJSON.seas.length; i=i+1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    var randomDescriptNum = Math.floor((Math.random() * 7) + 1);
    $scope.atlanticJSON.seas[i].photo = "/img/thumb-" + randomIMGNum + ".png";
  }

  for (var i = 0; i < $scope.indianJSON.seas.length; i=i+1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    var randomDescriptNum = Math.floor((Math.random() * 7) + 1);
    $scope.indianJSON.seas[i].photo = "/img/thumb-" + randomIMGNum + ".png";
  }

  for (var i = 0; i < $scope.pacificJSON.seas.length; i=i+1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    var randomDescriptNum = Math.floor((Math.random() * 7) + 1);
    $scope.pacificJSON.seas[i].photo = "/img/thumb-" + randomIMGNum + ".png";
  }

  for (var i = 0; i < $scope.southernJSON.seas.length; i=i+1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    var randomDescriptNum = Math.floor((Math.random() * 7) + 1);
    $scope.southernJSON.seas[i].photo = "/img/thumb-" + randomIMGNum + ".png";
  }

  function showTide (tideNum) {
    if (tideNum == 1) {
      return "LOW";
    } else if (tideNum == 2) {
      return "MED";
    } else {
      return "HIGH";
    }
  }

  $scope.appliedClass = function (tideLevel) {
    if (tideLevel == "LOW") {
      return "sea-data-tide-low";
    } else if (tideLevel == "MED") {
      return "sea-data-tide-med";
    } else {
      return "sea-data-tide-high";
    }
  }

}]);
