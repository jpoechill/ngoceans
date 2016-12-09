// ng-MockBackend scripting
app.run(["$httpBackend", function ($httpBackend) {
  var articOcean = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          }
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "James Bay is a large body of water on the southern end of Hudson Bay in Canada. Both bodies of water extend from the Arctic Ocean, of which James Bay is the southernmost part. It borders the provinces of Quebec and Ontario; islands within the bay (the largest of which is Akimiski Island) are part of Nunavut. The James Bay watershed is the site of several major hydroelectric projects, and is also a destination for river-based recreation. Several communities are located near or alongside James Bay, including a number of Aboriginal communities such as the Kashechewan First Nation and nine communities affiliated with the Crees of northern Quebec. As with the rest of Hudson Bay, the waters of James Bay routinely freeze over in winter, although it is the last to freeze over in winter, and conversely the first to thaw in summer. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Baffin Bay, located between Baffin Island and the southwest coast of Greenland, is a marginal sea of the North Atlantic Ocean. It is connected to the Atlantic via Davis Strait and the Labrador Sea. The narrower Nares Strait connects Baffin Bay with the Arctic Ocean. The bay is not navigable most of the year because of the ice cover and high density of floating ice and icebergs in the open areas. However, a polynya of about 80,000 km2 (31,000 sq mi), known as the North Water, opens in summer on the north near Smith Sound. Most of the aquatic life of the bay is concentrated near that region. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Kara Sea is part of the Arctic Ocean north of Siberia. It is separated from the Barents Sea to the west by the Kara Strait and Novaya Zemlya, and the Laptev Sea to the east by the Severnaya Zemlya archipelago. It is named for the Kara River (flowing into Baydaratskaya Bay), which is now relatively insignificant but which played an important role in the Russian conquest of northern Siberia. The word \"kara\" is derived from kara, which in several Turkic languages means \"black\" and also symbolizes \"north\". The Kara Sea's northern limit is marked geographically by a line running from Cape Kohlsaat in Graham Bell Island, Franz Josef Land, to Cape Molotov (Arctic Cape), the northernmost point of Komsomolets Island in Severnaya Zemlya. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Barents Sea is a marginal sea of the Arctic Ocean, located off the northern coasts of Norway and Russia divided between Norwegian and Russian territorial waters. Known among Russians in the Middle Ages as the Murman Sea (\"Norwegian Sea\"), the sea takes its current name from the Dutch navigator Willem Barentsz. It is a rather shallow shelf sea, with an average depth of 230 metres (750 ft), and is an important site for both fishing and hydrocarbon exploration. The Barents Sea is bordered by the Kola Peninsula to the south, the shelf edge towards the Norwegian Sea to the west, and the archipelagos of Svalbard to the northwest, Franz Josef Land to the north east and Novaya Zemlya to the east. Novaya Zemlya, an extension of the northern part of the Ural Mountains, separates the Barents Sea from the Kara Sea. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
  }
  var atlanticOcean = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Davis Strait",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Davis Strait is a northern arm of the Labrador Sea. It lies between mid-western Greenland and Nunavut, Canada's Baffin Island. To the north is Baffin Bay. The strait was named for the English explorer John Davis (1550–1605), who explored the area while seeking a Northwest Passage. By the 1650s it was used for whale hunting. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          }
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Labrador Sea is an arm of the North Atlantic Ocean between the Labrador Peninsula and Greenland. The sea is flanked by continental shelves to the southwest, northwest, and northeast. It connects to the north with Baffin Bay through the Davis Strait. It has been described as a marginal sea of the Atlantic. The sea formed upon separation of the North American Plate and Greenland Plate that started about 60 million years ago and stopped about 40 million years ago. It contains one of the world's largest turbidity current channel systems, the Northwest Atlantic Mid-Ocean Channel (NAMOC), that runs for thousands of kilometers along the sea bottom toward the Atlantic Ocean. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Gulf of Saint Lawrence is the outlet of the North American Great Lakes via the Saint Lawrence River into the Atlantic Ocean. The gulf is a semienclosed sea, covering an area of about 236,000 square kilometres (91,000 sq mi) and containing about 35,000 cubic kilometres (8,400 cu mi) of water, which results in an average depth of 148 metres (486 ft).",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Gulf of Maine is a large gulf of the Atlantic Ocean on the east coast of North America. It is delineated by Cape Cod at the eastern tip of Massachusetts in the southwest and Cape Sable Island at the southern tip of Nova Scotia in the northeast. It includes the entire coastlines of the U.S. states of New Hampshire and Maine, as well as Massachusetts north of Cape Cod, and the southern and western coastlines of the Canadian provinces of New Brunswick and Nova Scotia, respectively. Both Massachusetts Bay and the Bay of Fundy are included within the Gulf of Maine system. As such, the Gulf of Maine is also home to the highest tidal variations on the planet. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Nantucket Sound is a roughly triangular area of the Atlantic Ocean offshore from the U.S. state of Massachusetts. It is 30 miles (48 km) long and 25 miles (40 km) wide, and is enclosed by Cape Cod on the north, Nantucket on the south, and Martha's Vineyard on the west. Between Cape Cod and Martha's Vineyard it is connected to the Vineyard Sound. Ports on Nantucket Sound include Nantucket and Hyannis, Massachusetts. Nantucket Sound possesses significant marine habitat for a diversity of ecologically and economically important species. \"The Sound\" has particular significance for several federally protected species of wildlife and a variety of commercially and recreationally valuable fisheries. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
  }
  var indianOcean = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Andaman Sea",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Andaman Sea is a body of water to the southeast of the Bay of Bengal, south of Myanmar (Burma), west of Thailand, north-west of Malay Peninsula, north of Sumatra and east of the Andaman Islands, India, from which it takes its name; it is part of the Indian Ocean. The sea has been traditionally used for fishery and transportation of goods between the coastal countries and its coral reefs and islands are popular tourist destinations. The fishery and tourist infrastructure was severely damaged by the 2004 Indian Ocean earthquake and tsunami. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          }
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Arabian Sea is a region of the northern Indian Ocean bounded on the north by Pakistan and Iran, on the west by northeastern Somalia and the Arabian Peninsula, and on the east by India. Historically the sea has been known by other names including the Erythraean Sea and the Persian Sea. Its total area is 3,862,000 km2 (1,491,000 sq mi) and its maximum depth is 4,652 metres (15,262 ft). The Gulf of Aden is in the southwest, connecting the Arabian Sea to the Red Sea through the strait of Bab-el-Mandeb, and the Gulf of Oman is in the northwest, connecting it to the Persian Gulf. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Bay of Bengal, the largest bay in the world, forms the northeastern part of the Indian Ocean. Roughly triangular, it is bordered mostly by India and Sri Lanka to the west, Bangladesh to the north, and Myanmar (Burma) and the Andaman and Nicobar Islands to the east. The Bay of Bengal occupies an area of 2,172,000 square kilometres (839,000 sq mi). A number of large rivers – the Ganges and its tributaries such as the Padma and Hooghly, the Brahmaputra and its tributaries such as the Jamuna and Meghna, other rivers such as the Irrawaddy River, Godavari, Mahanadi, Krishna and Kaveri flow into the Bay of Bengal. Among the important ports are Chennai, Chittagong, Kolkata, Mongla, Paradip, Tuticorin, Visakhapatnam and Yangon. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Gulf of Aden is a gulf located in the Arabian Sea between Yemen, on the south coast of the Arabian Peninsula, and Somalia in the Horn of Africa. In the northwest, it connects with the Red Sea through the Bab-el-Mandeb strait, which is more than 20 miles wide. It shares its name with the port city of Aden in Yemen, which forms the northern shore of the gulf. Historically the Gulf of Aden was known as \"The Gulf of Berbera\", named after the ancient Somali port city of Berbera on the south side of the gulf. However, as the city of Aden grew during the colonial era, the name of \"Gulf of Aden\" was popularised. The waterway is part of the important Suez canal shipping route between the Mediterranean Sea and the Arabian Sea in the Indian Ocean with 21,000 ships crossing the gulf annually. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Gulf of Oman or Sea of Oman is a strait (and not an actual gulf) that connects the Arabian Sea with the Strait of Hormuz, which then runs to the Persian Gulf. It is generally included as a branch of the Persian Gulf, not as an arm of the Arabian Sea. The gulf borders Pakistan and Iran on the north, Oman on the south, and the United Arab Emirates on the west. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
  }
  var pacificOcean = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Arafura Sea",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Arafura Sea is bordered by Torres Strait and through that the Coral Sea to the east, the Gulf of Carpentaria to the south, the Timor Sea to the west and the Banda and Ceram seas to the northwest. It is 1,290 kilometres (800 mi) long and 560 kilometres (350 mi) wide. The depth of the sea is primarily 50–80 metres (165–265 feet) with the depth increasing to the west. As a shallow tropical sea, its waters are a breeding ground for tropical cyclones. The sea lies over the Arafura Shelf, part of the Sahul Shelf. When sea levels were low during the last glacial maximum, the Arafura Shelf, the Gulf of Carpentaria and Torres Strait formed a large flat land bridge connecting Australia and New Guinea and easing migration of humans from Asia into Australia. The combined landmass formed the continent of Sahul. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          }
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Banda Sea is a sea in the Maluku Islands of Indonesia, connected to the Pacific Ocean but surrounded by hundreds of islands, as well as the Halmahera and Ceram Seas. It is about 1000 km (600 mi) east to west, and about 500 km (300 mi) north to south. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Bali Sea is the body of water north of the island of Bali and south of Kangean Island in Indonesia. The sea forms the south-west part of the Flores Sea, and the Madura Strait opens into it from the west. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "name" : "The Arafura Sea",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Arafura Sea is bordered by Torres Strait and through that the Coral Sea to the east, the Gulf of Carpentaria to the south, the Timor Sea to the west and the Banda and Ceram seas to the northwest. It is 1,290 kilometres (800 mi) long and 560 kilometres (350 mi) wide. The depth of the sea is primarily 50–80 metres (165–265 feet) with the depth increasing to the west. As a shallow tropical sea, its waters are a breeding ground for tropical cyclones. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Kara Sea is part of the Arctic Ocean north of Siberia. It is separated from the Barents Sea to the west by the Kara Strait and Novaya Zemlya, and the Laptev Sea to the east by the Severnaya Zemlya archipelago. It is named for the Kara River (flowing into Baydaratskaya Bay), which is now relatively insignificant but which played an important role in the Russian conquest of northern Siberia. The word \"kara\" is derived from kara, which in several Turkic languages means \"black\" and also symbolizes \"north\". ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
  }
  var southernOcean = {
    "name" : "Southern Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Amundsen Sea",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Amundsen Sea, an arm of the Southern Ocean off Marie Byrd Land in western Antarctica, lies between Cape Flying Fish (the northwestern tip of Thurston Island) to the east and Cape Dart on Siple Island to the west. Cape Flying Fish marks the boundary between the Amundsen Sea and the Bellingshausen Sea. West of Cape Dart there is no named marginal sea of the Southern Ocean between the Amundsen and Ross Seas. The Norwegian expedition of 1928–1929 under Captain Nils Larsen named the body of water for the Norwegian polar explorer Roald Amundsen while exploring this area in February 1929. The sea is mostly ice-covered, and the Thwaites Ice Tongue protrudes into it. The ice sheet which drains into the Amundsen Sea averages about 3 km (1.9 mi) in thickness; roughly the size of the state of Texas, this area is known as the Amundsen Sea Embayment (ASE); it forms one of the three major ice-drainage basins of the West Antarctic Ice Sheet. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          }
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Bass Strait is a sea strait separating Tasmania from the Australian mainland, specifically the state of Victoria. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "The Bellingshausen Sea is an area along the west side of the Antarctic Peninsula between 57°18'W and 102°20'W, west of Alexander Island, east of Cape Flying Fish on Thurston Island, and south of Peter I Island (there the southern Vostokkysten). In the south are, from west to east, Eights Coast, Bryan Coast and English Coast (west part) of West Antarctica. To the west of Cape Flying Fish joins Amundsen Sea. Bellingshausen Sea has an area of 487,000 km2 (188,000 sq mi) and reaches a maximum depth of 4.5 kilometers (2.8 mi). It contains the undersea plain Bellingshausen Plain. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Cooperation Sea, also called Commonwealth Sea (erratum) or Sodruzhestvo Sea, is a proposed sea name for part of the Southern Ocean, between Enderby Land (the eastern limit of which is 59°34'E) and West Ice Shelf (85°E), off the coast of MacRobertson Land and Princess Elizabeth Land. It would stretch over an area of 258,000 km². It would be bordered by the Davis Sea on the east, and by another Russian proposal to the 2002 International Hydrographic Organization (IHO) draft, a Cosmonauts Sea to the west. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Cosmonauts Sea, sometimes misspelled Cosmonaut Sea, was a proposed sea name as part of the Southern Ocean, off the Prince Olav Coast and Enderby Land, Antarctica, between about 30°E and 50°E.[1] It would have an area of 699,000 km². It would be bordered by two other proposals from a 2002 International Hydrographic Organization (IHO) draft, a Cooperation Sea to the east, and to the west a Riiser-Larsen Sea. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          },
        ],
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
  }
  var account = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
        "togglecomments" : false,
        "followers" : [
          {
            "name" : "Mary",
            "photo" : "img/avatar-thumb-1.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "John",
            "photo" : "img/avatar-thumb-2.png",
            "dateposted" : "01/01/16"
          },
          {
            "name" : "Joe",
            "photo" : "img/avatar-thumb-3.png",
            "dateposted" : "01/01/16"
          }
        ],
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
  }

  // Ignore other .html's
  $httpBackend.whenGET(/\.html$/).passThrough();

  // Local calls
  $httpBackend.whenGET("api/artic").respond(randomize(articOcean));
  $httpBackend.whenGET("api/atlantic").respond(randomize(atlanticOcean));
  $httpBackend.whenGET("api/indian").respond(randomize(indianOcean));
  $httpBackend.whenGET("api/pacific").respond(randomize(pacificOcean));
  $httpBackend.whenGET("api/southern").respond(randomize(southernOcean));
  $httpBackend.whenGET("api/account").respond(randomize(account));

  function randomize (thisSea) {
    for (var i = 0; i < thisSea.seas.length; i = i + 1) {
      var randomIMGNum = Math.floor((Math.random() * 7) + 1);
      var randomDescriptNum = Math.floor((Math.random() * 7) + 1);
      var randomSeaTide = Math.floor((Math.random() * 3) + 1);
      var coordsNumFirst = (Math.random() * 300 - 200).toFixed(2);
      var coordsNumSecond = (Math.random() * 300 - 200).toFixed(2);
      thisSea.seas[i].coords[0] = coordsNumFirst;
      thisSea.seas[i].coords[1] = coordsNumSecond;
      thisSea.seas[i].tide = showTide(randomSeaTide);
      thisSea.seas[i].photo = "img/thumb-" + randomIMGNum + ".png";
    }

    return thisSea;
  };

  function showTide (tideNum) {
    if (tideNum == 1) {
      return "LOW";
    } else if (tideNum == 2) {
      return "MED";
    } else {
      return "HIGH";
    }
  }
}])
