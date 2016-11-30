// MainController
app.controller('MainController', ['$scope', '$location', function MainController($scope, $location) {
  $scope.articJSON = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
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
            "photo" : "/img/avatar-thumb-3.png",
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

    ]
  }
  $scope.atlanticJSON = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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

    ]
  }
  $scope.indianJSON = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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

    ]
  }
  $scope.pacificJSON = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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

    ]
  }
  $scope.southernJSON = {
    "name" : "Pacific Ocean",
    "description" : "",
    "coords" : [],
    "seas" : [
      {
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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
        "name" : "Amundsen Gulf",
        "id" : 100,
        "coords" : [-13.56, 23.97],
        "description" : "Amundsen Gulf is a gulf located in Canadian Northwest Territories, between Banks Island and Victoria Island and the mainland. It is approximately 250 mi (400 km) in length and about 93 mi (150 km) across where it meets the Beaufort Sea. The Amundsen Gulf was explored by Norwegian explorer Roald Amundsen between 1903 and 1906. The gulf is at the western end of the famous Northwest Passage, a route from the Atlantic Ocean to the Pacific. ",
        "photo" : "/img/thumb-1.png",
        "surface" : "1,175 km",
        "currenttemp" : "40˚ C / 160˚ F",
        "depth" : "1,253 m",
        "volume" : "547,000 km",
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
            "photo" : "/img/avatar-thumb-3.png",
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

    ]
  }

  $scope.showFooter = function () {
    if ($location.path() == '/signup' || $location.path() == '/signin') {
      return false;
    } else {
      return true;
    }
  };

  $scope.isFollows = function (thisSea) {
    var thisFollowerList = $scope.articJSON.seas[thisSea].followers;
    var follower = {
      "name" : "Julian Bishop",
      "photo" : "img/avatar-thumb-4.png",
    };

    if (containsObject(follower, thisFollowerList)) {
      return true;
    } else {
      return false;
    }
  }

  $scope.togglecomments = function (thisSea) {
    console.log("Hello");
    $scope.articJSON.seas[thisSea].togglecomments = !$scope.articJSON.seas[thisSea].togglecomments;
  }

  $scope.addFollowers = function (thisSea) {
    var newFollower = {
      "name" : "Julian Bishop",
      "photo" : "img/avatar-thumb-4.png",
    };

    if (containsObject(newFollower, $scope.articJSON.seas[thisSea].followers) !== true) {
      $scope.articJSON.seas[thisSea].followers.push(newFollower);
    }
  }

  function containsObject(obj, list) {
    for (var i = 0; i < list.length; i++) {
        if (angular.equals(list[i], obj)) {
            return true;
        }
    }

    return false;
  }

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

  for (var i = 0; i < $scope.indianJSON.seas.length; i = i + 1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    var randomDescriptNum = Math.floor((Math.random() * 7) + 1);
    var randomSeaTide = Math.floor((Math.random() * 3) + 1);
    var coordsNumFirst = (Math.random() * 300 - 200).toFixed(2);
    var coordsNumSecond = (Math.random() * 300 - 200).toFixed(2);
    var thisSea = $scope.indianJSON.seas[i];
    thisSea.coords[0] = coordsNumFirst;
    thisSea.coords[1] = coordsNumSecond;
    thisSea.tide = showTide(randomSeaTide);
    thisSea.photo = "/img/thumb-" + randomIMGNum + ".png";
  }

  for (var i = 0; i < $scope.pacificJSON.seas.length; i = i + 1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    var randomDescriptNum = Math.floor((Math.random() * 7) + 1);
    var randomSeaTide = Math.floor((Math.random() * 3) + 1);
    var coordsNumFirst = (Math.random() * 300 - 200).toFixed(2);
    var coordsNumSecond = (Math.random() * 300 - 200).toFixed(2);
    var thisSea = $scope.pacificJSON.seas[i];
    thisSea.coords[0] = coordsNumFirst;
    thisSea.coords[1] = coordsNumSecond;
    thisSea.tide = showTide(randomSeaTide);
    thisSea.photo = "/img/thumb-" + randomIMGNum + ".png";
  }

  for (var i = 0; i < $scope.southernJSON.seas.length; i = i + 1) {
    var randomIMGNum = Math.floor((Math.random() * 7) + 1);
    var randomDescriptNum = Math.floor((Math.random() * 7) + 1);
    var randomSeaTide = Math.floor((Math.random() * 3) + 1);
    var coordsNumFirst = (Math.random() * 300 - 200).toFixed(2);
    var coordsNumSecond = (Math.random() * 300 - 200).toFixed(2);
    var thisSea = $scope.southernJSON.seas[i];
    thisSea.coords[0] = coordsNumFirst;
    thisSea.coords[1] = coordsNumSecond;
    thisSea.tide = showTide(randomSeaTide);
    thisSea.photo = "/img/thumb-" + randomIMGNum + ".png";
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
