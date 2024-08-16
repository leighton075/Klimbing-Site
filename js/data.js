const locations = [
  {
  latitude: -43.5426941,
  longitude: 172.6463106,
    url: "https://www.google.com/maps/search/?api=1&query=The%20Adventure%20Centre&query_place_id=ChIJIbFlCB2KMW0R9Q65PBWqkPM",
    title: "The Adventure Centre"
  },
  {
    latitude: -43.53907,
    longitude: 172.6549413,
    url: "https://www.google.com/maps/search/?api=1&query=Uprising&query_place_id=ChIJp4SkmGInMm0RY0TwZpSmP0E",
    title: "Uprising"
  },
  {
    latitude: -43.5427161,
    longitude: 172.6464773,
    url: "https://www.google.com/maps/search/?api=1&query=Clip%20'n%20Climb%20Christchurch&query_place_id=ChIJYW2TdeyLMW0RQ75VqdIECg4",
    title: "Clip 'n Climb Christchurch"
  },
  {
    latitude: -41.2929148,
    longitude: 174.7727546,
    url: "https://www.google.com/maps/search/?api=1&query=Faultline%20Climbing%20Gym&query_place_id=ChIJBWBaESOxOG0RSM5ugvvCxvo",
    title: "Faultline Climbing Gym"
  },
  {
    latitude: -36.8112074,
    longitude: 174.6045264,
    url: "https://www.google.com/maps/search/?api=1&query=Boulder%20Co.%20Auckland&query_place_id=ChIJM4An3VIVDW0RFyYmnw4gVb4",
    title: "Boulder Co. Auckland"
  },
  {
    latitude: -36.8910731,
    longitude: 174.8504187,
    url: "https://www.google.com/maps/search/?api=1&query=Extreme%20Edge%20Rock%20Climbing&query_place_id=ChIJsx0PW3lJDW0Rv1sIhH8NSfk",
    title: "Extreme Edge Rock Climbing"
  },
  {
    latitude: -36.7758619,
    longitude: 174.7329933,
    url: "https://www.google.com/maps/search/?api=1&query=Northern%20Rocks&query_place_id=ChIJn61Dsdw5DW0RxVx3oU_SKAU",
    title: "Northern Rocks"
  },
  {
    latitude: -36.8636501,
    longitude: 174.7587203,
    url: "https://www.google.com/maps/search/?api=1&query=Auckland%20Climbing%20Gym&query_place_id=ChIJf6mQtdlHDW0RRfrH4GQt80E",
    title: "Auckland Climbing Gym"
  },
  {
    latitude: -36.908003,
    longitude: 174.6375033,
    url: "https://www.google.com/maps/search/?api=1&query=Vertical%20Adventures%20Indoor%20Climbing%20Glen%20Eden&query_place_id=ChIJXTX3qJpBDW0Rmao9au8zQgk",
    title: "Vertical Adventures Indoor Climbing Glen Eden"
  },
  {
    latitude: -36.8878885,
    longitude: 174.7472666,
    url: "https://www.google.com/maps/search/?api=1&query=Clip%20'N%20Climb&query_place_id=ChIJRXKASklGDW0RKutJrDnYTHQ",
    title: "Clip 'N Climb"
  },
  {
    latitude: -36.7314451,
    longitude: 174.7142672,
    url: "https://www.google.com/maps/search/?api=1&query=Clip%20'N%20Climb%20North%20Shore&query_place_id=ChIJbT2H4cA7DW0R-CunYMug-mk",
    title: "Clip 'N Climb North Shore"
  },
  {
    latitude: -36.8083641,
    longitude: 174.721493,
    url: "https://www.google.com/maps/search/?api=1&query=Birkenhead%20Pool%20and%20Leisure%20Centre&query_place_id=ChIJbb64_PE4DW0RLPjBFnxJabw",
    title: "Birkenhead Pool and Leisure Centre"
  },
  {
    latitude: -41.2137604,
    longitude: 174.8878021,
    url: "https://www.google.com/maps/search/?api=1&query=Hangdog%20Climbing%20Centre&query_place_id=ChIJaV44vaWrOG0RbIX_kmIggpE",
    title: "Hangdog Climbing Centre"
  },
  {
    latitude: -41.2358902,
    longitude: 174.908603,
    url: "https://www.google.com/maps/search/?api=1&query=Clip%20n%20Climb&query_place_id=ChIJe0v1Y2erOG0RDfxrq-fYuHA",
    title: "Clip n Climb"
  },
  {
    latitude: -41.285079,
    longitude: 174.779295,
    url: "https://www.google.com/maps/search/?api=1&query=Fergs%20Kayaks&query_place_id=ChIJm0mffdOvOG0R-Kdif8djPOU",
    title: "Fergs"
  },
  {
    latitude: -37.6572319,
    longitude: 176.1888317,
    url: "https://www.google.com/maps/search/?api=1&query=Rocktopia&query_place_id=ChIJZf7J37PebW0RauhSRFw5bAw",
    title: "Rocktopia"
  },
  {
    latitude: -44.711919,
    longitude: 169.136351,
    url: "https://www.google.com/maps/search/?api=1&query=Basecamp%20Wanaka%20Climbing%20Centre&query_place_id=ChIJQaK2FLZI1akR1jCGWB-BgL0",
    title: "Basecamp Wanaka Climbing Centre"
  },
  {
    latitude: -45.0530797,
    longitude: 168.6144213,
    url: "https://www.google.com/maps/search/?api=1&query=Hero%20Wall%20Rock%20Climbing&query_place_id=ChIJ7URV-sbi1KkRnZ9V00ADJzI",
    title: "Hero Wall Rock Climbing"
  },
  {
    latitude: -45.4160354,
    longitude: 167.7187978,
    url: "https://www.google.com/maps/search/?api=1&query=Fiordland%20Indoor%20Climbing%20Wall&query_place_id=ChIJDQpKTh0P1KkR_-p4hvcyPXk",
    title: "Fiordland Indoor Climbing Wall"
  },
  {
    latitude: -37.069985,
    longitude: 174.9669097,
    url: "https://www.google.com/maps/search/?api=1&query=Redhill%20Community%20Centre&query_place_id=ChIJT5-UOuSscm0ROiBE72WLcLw",
    title: "Redhill Community Centre"
  },
  {
    latitude: -39.0589203,
    longitude: 174.0785162,
    url: "https://www.google.com/maps/search/?api=1&query=The%20Crux%20Climbing%20Gym%20%40%20the%20Y%20Taranaki&query_place_id=ChIJ5XwYBEdOFG0RQU3KAC7gjWc",
    title: "The Crux Climbing Gym @ the Y Taranaki"
  },
  {
    latitude: -39.1746944,
    longitude: 175.4013056,
    url: "https://www.google.com/maps/search/?api=1&query=Indoor%20Climbing%20Wall&query_place_id=ChIJfQOPzPYca20R0ce35VE8knY",
    title: "Indoor Climbing Wall"
  },
  {
    latitude: -45.8753685,
    longitude: 170.5019641,
    url: "https://www.google.com/maps/search/?api=1&query=Resistance%20Climbing%20Gym&query_place_id=ChIJbVKkuHytLqgRYinpWoBwlfI",
    title: "Resistance Climbing Gym"
  },
  {
    latitude: -37.7906734,
    longitude: 175.2605889,
    url: "https://www.google.com/maps/search/?api=1&query=Extreme%20Edge%20Hamilton&query_place_id=ChIJQ9oF4BoibW0RT6uFdGQRIME",
    title: "Extreme Edge Hamilton"
  },
  {
    latitude: -37.7525403,
    longitude: 175.2428234,
    url: "https://www.google.com/maps/search/?api=1&query=Boulder%20Co%20Hamilton&query_place_id=ChIJD8-ocKwjbW0RSOxLd6WH7xs",
    title: "Boulder Co Hamilton"
  },
  {
    latitude: -38.1868777,
    longitude: 175.2105137,
    url: "https://www.google.com/maps/search/?api=1&query=Harvest%20Rock%20Centre&query_place_id=ChIJZ-UL-ufAbG0RcKZ0R5sCERQ",
    title: "Harvest Rock Centre"
  },
  {
    latitude: -37.790733,
    longitude: 175.260241,
    url: "https://www.google.com/maps/search/?api=1&query=Waikato%20Climbing%20Club&query_place_id=ChIJV63EHRsibW0Rxw1kdEpERWc",
    title: "Waikato Climbing Club"
  },
  {
    latitude: -46.4132196,
    longitude: 168.3518077,
    url: "https://www.google.com/maps/search/?api=1&query=YMCA%20South&query_place_id=ChIJH256bZDE0qkRoaX3pTCx0Rw",
    title: "YMCA South"
  },
  {
    latitude: -38.6778362,
    longitude: 176.0938381,
    url: "https://www.google.com/maps/search/?api=1&query=Taup%C5%8D%20Rockwall&query_place_id=ChIJ0-RYWAf6a20RL20t8CeznbM",
    title: "Taupō Rockwall"
  },
  {
    latitude: -38.9888901,
    longitude: 175.8118199,
    url: "https://www.google.com/maps/search/?api=1&query=Turangi%20Climbing%20Gym&query_place_id=ChIJgeInZny8a20RZkjteClJIPc",
    title: "Turangi Climbing Gym"
  },
  {
    latitude: -37.6537269,
    longitude: 176.1916683,
    url: "https://www.google.com/maps/search/?api=1&query=BOPSCA%20Speed%20Wall&query_place_id=ChIJt21so4rfbW0Rim2x67ZBlUg",
    title: "BOPSCA Speed Wall"
  },
  {
    latitude: -39.416849,
    longitude: 175.3989055,
    url: "https://www.google.com/maps/search/?api=1&query=Vertigo%20Climbing%20Ohakune&query_place_id=ChIJE8Yl06Hvam0RJJPnOwn5Oa4",
    title: "Vertigo Climbing Ohakune"
  },
  {
    latitude: -37.7907514,
    longitude: 175.2601431,
    url: "https://www.google.com/maps/search/?api=1&query=Indoor%20Rock%20Climbing&query_place_id=ChIJ5SqbHhsibW0RXq933yp4g1M",
    title: "Indoor Rock Climbing"
  },
  {
    latitude: -38.1381874,
    longitude: 176.2524566,
    url: "https://www.google.com/maps/search/?api=1&query=The%20Wall%20and%20Basement%20Cinema&query_place_id=ChIJ50M4YXwnbG0RyEnFTkehik0",
    title: "The Wall and Basement Cinema"
  },
  {
    latitude: -41.2731972,
    longitude: 173.278404,
    url: "https://www.google.com/maps/search/?api=1&query=Vertical%20Limits%20Indoor%20Climbing%20and%20Adventure%20Centre&query_place_id=ChIJyXGx6BDtO20RZKOZOmDbl6c",
    title: "Vertical Limits Indoor Climbing and Adventure Centre"
  },
  {
    latitude: -39.0589699,
    longitude: 174.0783373,
    url: "https://www.google.com/maps/search/?api=1&query=The%20Y%20Taranaki%20-%20YMCA%20Taranaki&query_place_id=ChIJ032GBkdOFG0RbbSB9TFbtqQ",
    title: "The Y Taranaki - YMCA Taranaki"
  },
  {
    latitude: -44.1476582,
    longitude: 170.1120744,
    url: "https://www.google.com/maps/search/?api=1&query=Pukaki%20Boulder&query_place_id=ChIJ8fM-q28dK20RbYuk8-J3JQ8",
    title: "Pukaki Boulder"
  }]