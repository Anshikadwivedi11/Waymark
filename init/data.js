const sampleListings = [
  
  {
    title: "Chic Loft near Canal Saint-Martin",
    description: "Bright, industrial loft apartment within walking distance of Parisian bistros and classic art galleries.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    },
    price: 9500,
    location: "Paris",
    country: "France",
    category: "iconic-cities",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] }
  },
  {
    title: "Skylight Penthouse in Lower Manhattan",
    description: "SoHo penthouse featuring exposed red brick, steel columns, and panoramic sunset views over the skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    },
    price: 18000,
    location: "New York",
    country: "United States",
    category: "iconic-cities",
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] }
  },
  {
    title: "Modern Shinjuku Studio Retreat",
    description: "Minimalist Japanese urban studio steps away from premier dining and quiet garden shrines.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
    },
    price: 8200,
    location: "Tokyo",
    country: "Japan",
    category: "iconic-cities",
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] }
  },
  {
    title: "Colonial Townhouse near Victoria Memorial",
    description: "High ceilings, restored heritage teak furniture, and an inner courtyard sanctuary in South Kolkata.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
    },
    price: 4500,
    location: "Kolkata",
    country: "India",
    category: "iconic-cities",
    geometry: { type: "Point", coordinates: [88.3639, 22.5726] }
  },
  {
    title: "Duomo View Terrace Apartment",
    description: "Historic terracotta-tiled apartment with private terrace views of Renaissance domes and rooftops.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1200&q=80"
    },
    price: 11200,
    location: "Florence",
    country: "Italy",
    category: "iconic-cities",
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] }
  },

  // ================= 2. LAKEFRONT (5) =================
  {
    title: "Serene Lake Como Stone Villa",
    description: "Direct water access with a private boat dock, manicured cypress gardens, and quiet mountain reflections.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    },
    price: 14500,
    location: "Lake Como",
    country: "Italy",
    category: "lakefront",
    geometry: { type: "Point", coordinates: [9.2625, 45.986] }
  },
  {
    title: "Dal Lake Heritage Cedar Houseboat",
    description: "Carved walnut wood interiors, Kashmiri carpet floorings, and early morning shikara rides on tranquil waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
    },
    price: 5200,
    location: "Srinagar",
    country: "India",
    category: "lakefront",
    geometry: { type: "Point", coordinates: [74.837, 34.0837] }
  },
  {
    title: "Lake Tahoe Timber Waterfront",
    description: "Spacious pine residence with private pebble beach, outdoor firepit, and pristine crystal-clear swimming water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    },
    price: 13000,
    location: "Lake Tahoe",
    country: "United States",
    category: "lakefront",
    geometry: { type: "Point", coordinates: [-120.0324, 39.0968] }
  },
  {
    title: "Pichola View Courtyard Haveli",
    description: "Traditional arches overlooking Lake Pichola with golden hour sunset terraces and royal Rajput dining.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    },
    price: 7800,
    location: "Udaipur",
    country: "India",
    category: "lakefront",
    geometry: { type: "Point", coordinates: [73.6835, 24.5764] }
  },
  {
    title: "Lake Hallstatt Boathouse Studio",
    description: "Wake up over the glassy alpine waters surrounded by Austrian peak reflections and morning mist.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80"
    },
    price: 10500,
    location: "Hallstatt",
    country: "Austria",
    category: "lakefront",
    geometry: { type: "Point", coordinates: [13.6493, 47.5622] }
  },

  // ================= 3. BEACH (5) =================
  {
    title: "Palolem Beachfront Coconut Cottage",
    description: "Steps from the Arabian Sea, enjoy sea breezes under swaying palms and fresh caught seafood dining.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
    },
    price: 4800,
    location: "Goa",
    country: "India",
    category: "beach",
    geometry: { type: "Point", coordinates: [74.0232, 15.0101] }
  },
  {
    title: "Boutique Cliff Villa in Uluwatu",
    description: "Perched over azure breakers with outdoor infinity pool and private path directly down to white surf sands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    },
    price: 11000,
    location: "Bali",
    country: "Indonesia",
    category: "beach",
    geometry: { type: "Point", coordinates: [115.0884, -8.8149] }
  },
  {
    title: "Varkala Cliff Sunset Bungalow",
    description: "Perched high on the famous red laterite cliffs of Varkala overlooking the continuous Arabian Sea horizon.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    },
    price: 3600,
    location: "Varkala",
    country: "India",
    category: "beach",
    geometry: { type: "Point", coordinates: [76.7163, 8.7379] }
  },
  {
    title: "Tulum Beach Eco-Chic Casita",
    description: "Open-air limestone casita shaded by wild palms with private plunge pool and soft Caribbean powder sand.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    },
    price: 16500,
    location: "Tulum",
    country: "Mexico",
    category: "beach",
    geometry: { type: "Point", coordinates: [-87.4654, 20.2114] }
  },
  {
    title: "Mirissa Palm Cove Villa",
    description: "Golden sand beach directly outside your door with seasonal whale-watching and quiet lagoon snorkeling.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80"
    },
    price: 6400,
    location: "Mirissa",
    country: "Sri Lanka",
    category: "beach",
    geometry: { type: "Point", coordinates: [80.4552, 5.9483] }
  },

  // ================= 4. MOUNTAINS (5) =================
  {
    title: "Cedar A-Frame Alpine Home",
    description: "Panoramic Himalayan cedar forest views with wood-burning stove and glass walls facing snow-capped peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    },
    price: 5600,
    location: "Manali",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [77.1892, 32.2432] }
  },
  {
    title: "Zermatt Matterhorn Chalet",
    description: "Modern alpine architecture with sauna, heated stone floors, and straight views toward the iconic Matterhorn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80"
    },
    price: 21000,
    location: "Zermatt",
    country: "Switzerland",
    category: "mountains",
    geometry: { type: "Point", coordinates: [7.7491, 45.9765] }
  },
  {
    title: "Munnar Tea Valley Mountain Lodge",
    description: "Quiet bungalow perched high on misty mountain ridges overlooking miles of rolling emerald tea plantations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    },
    price: 4900,
    location: "Munnar",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [77.0595, 10.0889] }
  },
  {
    title: "Banff Glacial Peak Retreat",
    description: "Spacious timber cabin surrounded by Rocky Mountain wildlife corridors and pristine pine valleys.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80"
    },
    price: 15500,
    location: "Banff",
    country: "Canada",
    category: "mountains",
    geometry: { type: "Point", coordinates: [-115.5708, 51.1784] }
  },
  {
    title: "Leh Mountain Valley Homestay",
    description: "Traditional Ladakhi mud-brick architecture framed against rugged high-altitude Himalayan mountain passes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80"
    },
    price: 3200,
    location: "Leh",
    country: "India",
    category: "mountains",
    geometry: { type: "Point", coordinates: [77.5771, 34.1526] }
  },

  // ================= 5. CABINS (5) =================
  {
    title: "Nordic Glass Forest Cabin",
    description: "Minimalist Scandinavian timber dwelling with expansive roof windows for watching the forest canopy.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80"
    },
    price: 7200,
    location: "Oslo",
    country: "Norway",
    category: "cabins",
    geometry: { type: "Point", coordinates: [10.7522, 59.9139] }
  },
  {
    title: "Jibhi Riverside Wooden Cabin",
    description: "Handcrafted deodar wood cabin resting on the edge of a rushing mountain stream in Tirthan Valley.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80"
    },
    price: 3800,
    location: "Jibhi",
    country: "India",
    category: "cabins",
    geometry: { type: "Point", coordinates: [77.3486, 31.6366] }
  },
  {
    title: "Pacific Northwest Redwood Cabin",
    description: "Tucked deep under old-growth redwoods, complete with cedar deck, wood stove, and outdoor warm tub.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
    },
    price: 9800,
    location: "Oregon",
    country: "United States",
    category: "cabins",
    geometry: { type: "Point", coordinates: [-122.6784, 45.5152] }
  },
  {
    title: "Wayanad Rainforest Tree Cabin",
    description: "Elevated wooden cabin built high above the coffee plantations and tropical tree canopy of Wayanad.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    },
    price: 5100,
    location: "Wayanad",
    country: "India",
    category: "cabins",
    geometry: { type: "Point", coordinates: [76.132, 11.6854] }
  },
  {
    title: "Smoky Mountains Log Cabin",
    description: "Classic hand-hewn log lodge featuring wraparound rocking porch and quiet misty hollow views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
    },
    price: 8900,
    location: "Gatlinburg",
    country: "United States",
    category: "cabins",
    geometry: { type: "Point", coordinates: [-83.5102, 35.7143] }
  },

  // ================= 6. CASTLES (5) =================
  {
    title: "Scottish Highlands Stone Keep",
    description: "Authentic 16th-century fortified estate featuring grand stone hearths, spiral staircases, and historic armory.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=1200&q=80"
    },
    price: 24000,
    location: "Inverness",
    country: "United Kingdom",
    category: "castles",
    geometry: { type: "Point", coordinates: [-4.2247, 57.4778] }
  },
  {
    title: "Neemrana Heritage Fort Palace Suite",
    description: "Terraced 15th-century palace built directly into ancient Aravalli hill slopes with sunset amphitheaters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
    },
    price: 13500,
    location: "Neemrana",
    country: "India",
    category: "castles",
    geometry: { type: "Point", coordinates: [76.3869, 27.9892] }
  },
  {
    title: "Loire Valley Renaissance Chateau",
    description: "Historic French chateau set across private rose gardens, manicured vineyards, and candlelit wine cellars.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    },
    price: 28000,
    location: "Amboise",
    country: "France",
    category: "castles",
    geometry: { type: "Point", coordinates: [0.9831, 47.4132] }
  },
  {
    title: "Bavarian Alpine Castle View Suite",
    description: "Turreted romantic estate tucked under forested Bavarian peaks offering classical European royal hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    },
    price: 19500,
    location: "Füssen",
    country: "Germany",
    category: "castles",
    geometry: { type: "Point", coordinates: [10.7017, 47.5696] }
  },
  {
    title: "Bikaner Royal Fortress Suite",
    description: "Ornate sandstone carvings, antique brass chandeliers, and private courtyards inside historic royal ramparts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
    },
    price: 12000,
    location: "Bikaner",
    country: "India",
    category: "castles",
    geometry: { type: "Point", coordinates: [73.3119, 28.0229] }
  },

  // ================= 7. ISLANDS (5) =================
  {
    title: "Overwater Lagoon Bungalow",
    description: "Stilted thatch villa over turquoise lagoons with glass floor viewports and direct ladder into coral reefs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80"
    },
    price: 26000,
    location: "Malé Atoll",
    country: "Maldives",
    category: "islands",
    geometry: { type: "Point", coordinates: [73.5093, 4.1755] }
  },
  {
    title: "Havelock Island Coral Villa",
    description: "Secluded island hideaway tucked inside ancient tropical mahogany trees next to Radhanagar Beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    },
    price: 7500,
    location: "Havelock Island",
    country: "India",
    category: "islands",
    geometry: { type: "Point", coordinates: [92.9806, 11.9761] }
  },
  {
    title: "Santorini Cliffside Cave House",
    description: "Whitewashed Cycladic architecture perched high on the caldera edge overlooking the deep Aegean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80"
    },
    price: 18500,
    location: "Santorini",
    country: "Greece",
    category: "islands",
    geometry: { type: "Point", coordinates: [25.4615, 36.3932] }
  },
  {
    title: "Koh Samui Private Coconut Estate",
    description: "Oceanfront island sanctuary featuring private open-air sala, infinity pool, and unbroken sunset panoramas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80"
    },
    price: 12800,
    location: "Koh Samui",
    country: "Thailand",
    category: "islands",
    geometry: { type: "Point", coordinates: [100.0136, 9.512] }
  },
  {
    title: "Maui Oceanfront Palm Villa",
    description: "Watch humpback whales directly from your private lanai surrounded by fragrant hibiscus and trade winds.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
    },
    price: 22000,
    location: "Maui",
    country: "United States",
    category: "islands",
    geometry: { type: "Point", coordinates: [-156.3319, 20.7984] }
  },

  // ================= 8. FARMS (5) =================
  {
    title: "Tuscan Olive Grove Farmhouse",
    description: "Restored 18th-century stone farm villa set amidst rolling cypress hills, lavender fields, and olive orchards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80"
    },
    price: 8800,
    location: "Siena",
    country: "Italy",
    category: "farms",
    geometry: { type: "Point", coordinates: [11.3308, 43.3188] }
  },
  {
    title: "Coorg Organic Coffee Plantation Estate",
    description: "Stay inside an active spice and coffee estate; wake to birdsong, misty plantations, and freshly roasted brews.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    },
    price: 4300,
    location: "Coorg",
    country: "India",
    category: "farms",
    geometry: { type: "Point", coordinates: [75.7382, 12.3375] }
  },
  {
    title: "Cotswolds Thatched Farm Cottage",
    description: "Historic English limestone farmstead with heirloom vegetable gardens, free-range chickens, and exposed beams.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
    },
    price: 9400,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "farms",
    geometry: { type: "Point", coordinates: [-1.7833, 51.8333] }
  },
  {
    title: "Punjab Mustard Fields Farmstay",
    description: "Traditional Punjabi brick farmhouse experience with organic dairy, tractor rides, and hearty home-cooked tandoori meals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80"
    },
    price: 3100,
    location: "Amritsar",
    country: "India",
    category: "farms",
    geometry: { type: "Point", coordinates: [74.8723, 31.634] }
  },
  {
    title: "Provence Lavender Farm Barn",
    description: "Rustic French country stone barn bordered by fragrant purple lavender rows and open pastoral views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1200&q=80"
    },
    price: 8200,
    location: "Aix-en-Provence",
    country: "France",
    category: "farms",
    geometry: { type: "Point", coordinates: [5.4474, 43.5297] }
  },

  // ================= 9. CAMPING (5) =================
  {
    title: "Desert Luxury Stargazing Dome",
    description: "Geodesic glass glamping dome set deep in the quiet golden sand dunes with unobstructed night skies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80"
    },
    price: 3900,
    location: "Jaisalmer",
    country: "India",
    category: "camping",
    geometry: { type: "Point", coordinates: [70.916, 26.9157] }
  },
  {
    title: "Wadi Rum Martian Bedouin Camp",
    description: "Futuristic geodesic pod amidst dramatic red sandstone cliffs, including evening campfires and Bedouin feast.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80"
    },
    price: 6800,
    location: "Wadi Rum",
    country: "Jordan",
    category: "camping",
    geometry: { type: "Point", coordinates: [35.4337, 29.5734] }
  },
  {
    title: "Rishikesh Riverside Safari Tents",
    description: "Canvas luxury safari glamping tents pitched right beside the rushing Ganga river with nightly bonfire circles.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80"
    },
    price: 2900,
    location: "Rishikesh",
    country: "India",
    category: "camping",
    geometry: { type: "Point", coordinates: [78.2676, 30.0869] }
  },
  {
    title: "Yosemite Meadow Canvas Lodge",
    description: "Custom wall tent with plush bedding and wood deck, located minutes away from granite climbing walls and waterfalls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200&q=80"
    },
    price: 5400,
    location: "Yosemite",
    country: "United States",
    category: "camping",
    geometry: { type: "Point", coordinates: [-119.5383, 37.8651] }
  },
  {
    title: "Spiti High Altitude Yurt Camp",
    description: "Hand-insulated yurt camp located at 12,000 feet, surrounded by barren Himalayan mountains and brilliant Milky Way views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
    },
    price: 3400,
    location: "Kaza",
    country: "India",
    category: "camping",
    geometry: { type: "Point", coordinates: [78.0416, 32.2276] }
  },

  // ================= 10. ARCTIC (5) =================
  {
    title: "Lapland Aurora Glass Igloo",
    description: "Heated thermal glass ceiling allowing you to watch the Northern Lights dancing across the night sky directly from bed.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80"
    },
    price: 24500,
    location: "Rovaniemi",
    country: "Finland",
    category: "arctic",
    geometry: { type: "Point", coordinates: [25.7294, 66.5039] }
  },
  {
    title: "Tromsø Fjord Snow Lodge",
    description: "Perched along icy Scandinavian fjords with outdoor wood-heated sauna, husky trails, and polar night views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80"
    },
    price: 19800,
    location: "Tromsø",
    country: "Norway",
    category: "arctic",
    geometry: { type: "Point", coordinates: [18.9553, 69.6492] }
  },
  {
    title: "Gulmarg Alpine Snow Chalet",
    description: "Ski-in, ski-out timber lodge buried in deep powdery snow beside the world's highest gondola lines.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
    },
    price: 8500,
    location: "Gulmarg",
    country: "India",
    category: "arctic",
    geometry: { type: "Point", coordinates: [74.3805, 34.0484] }
  },
  {
    title: "Reykjavik Geothermal Glass Villa",
    description: "Modern architectural estate heated by natural volcanic steam springs amidst volcanic snow-swept plains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80"
    },
    price: 16000,
    location: "Reykjavik",
    country: "Iceland",
    category: "arctic",
    geometry: { type: "Point", coordinates: [-21.9426, 64.1466] }
  },
  {
    title: "Lofoten Red Fisherman Rorbu",
    description: "Traditional red stilt cabin on frozen arctic ocean bays backed by dramatic sheer granite peaks dusted in snow.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80"
    },
    price: 14200,
    location: "Lofoten",
    country: "Norway",
    category: "arctic",
    geometry: { type: "Point", coordinates: [13.6074, 68.1664] }
  }
];

module.exports = { data: sampleListings };