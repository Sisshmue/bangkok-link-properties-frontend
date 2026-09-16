import { Project, District } from '@/types';

export const fallbackProjects: Project[] = [
  {
    id: "blp-01",
    slug: "the-crown-residences-sukhumvit-39",
    title: "The Crown Residences Sukhumvit 39",
    tagline: "Ultra-Luxury High-Rise Sanctuary in the Epicenter of Phrom Phong",
    developer: "Bangkok Link Development",
    district: "Sukhumvit",
    subDistrict: "Phrom Phong",
    address: "88 Soi Sukhumvit 39, Khlong Tan Nuea, Watthana, Bangkok 10110",
    status: "Ready to Move In",
    statusBadge: "Ready to Move In",
    propertyType: "High-Rise Condominium",
    tenure: "Freehold",
    priceTHB: 16800000,
    priceUSD: 480000,
    priceEUR: 445000,
    pricePerSqmTHB: 310000,
    completionYear: "2027",
    completionQuarter: "Q3 2027",
    constructionProgress: 38,
    constructionStage: "Substructure & Basement Levels Completed",
    totalFloors: 45,
    totalUnits: 188,
    parkingPercentage: "140% Automated & EV Superchargers",
    transitProximity: "350m from BTS Phrom Phong & The EmDistrict",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        title: "Iconic Tower Facade",
        category: "Exterior"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        title: "Double-Height Grand Living Salon",
        category: "Interior"
      },
      {
        url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80",
        title: "360° Cantilever Sky Pool & Daybeds",
        category: "Facilities"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
        title: "Gourmet Marble Kitchen with Poliform Fittings",
        category: "Interior"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        title: "Master Suite with Walk-In Dressing Gallery",
        category: "Interior"
      }
    ],
    description: "The Crown Residences Sukhumvit 39 redefines Bangkok's skyline with timeless architectural grandeur. Conceived for discerning homeowners and international investors, this iconic 45-storey residential landmark boasts private elevators for all residences, floor-to-ceiling triple-glazed insulated acoustic glass, and bespoke Italian interior curation. Situated within the golden quadrant of Phrom Phong, residents enjoy direct stroll access to EmQuartier, Michelin-starred culinary institutions, and tranquil Benchasiri Park.",
    highlights: [
      "Private High-Speed Elevator Lobby for every single unit",
      "Over 3,000 sq.m of 6-star private wellness & lifestyle club spaces",
      "Prime Golden Quadrant location: 350m to BTS Phrom Phong",
      "Unobstructed views over Benchasiri Park and skyline",
      "140% Conventional & Automated EV-ready parking"
    ],
    amenities: [
      "50m Cantilever Infinity Sky Pool",
      "Private Japanese Hinoki & Salt Onsen Suite",
      "Sky Cigar & Wine Sommelier Vault",
      "Technogym Artis Private Fitness Studio",
      "Private Sky Dining Salon with Chef's Prep Kitchen",
      "24-Hour International White-Glove Concierge",
      "Executive Boardroom & High-Tech Pods",
      "Pet-Friendly Sky Garden & Grooming Lounge"
    ],
    unitTypes: [
      {
        id: "crown-1br",
        name: "1-Bedroom Deluxe Sanctuary",
        size: "54.5 sq.m",
        bedrooms: 1,
        bathrooms: 1.5,
        priceTHB: 16800000,
        priceUSD: 480000,
        floorPlan: "Open-plan layout with built-in Italian wardrobes, en-suite spa bath, and private foyer.",
        status: "Available"
      },
      {
        id: "crown-2br",
        name: "2-Bedroom Grand Residence",
        size: "102.0 sq.m",
        bedrooms: 2,
        bathrooms: 2.5,
        priceTHB: 31500000,
        priceUSD: 900000,
        floorPlan: "Corner residence featuring wrap-around balcony, dual vanity ensuite, and show kitchen.",
        status: "Available"
      },
      {
        id: "crown-3br",
        name: "3-Bedroom Horizon Suite",
        size: "176.0 sq.m",
        bedrooms: 3,
        bathrooms: 3.5,
        priceTHB: 56000000,
        priceUSD: 1600000,
        floorPlan: "Expansive formal dining, separate wet/dry kitchens, helper's quarters, and park vistas.",
        status: "Last 3 Units"
      },
      {
        id: "crown-ph",
        name: "The Crown Duplex Penthouse",
        size: "348.0 sq.m",
        bedrooms: 4,
        bathrooms: 5,
        priceTHB: 128000000,
        priceUSD: 3657000,
        floorPlan: "Two-level sky mansion with private plunge pool, private internal lift, and 270° panorama.",
        status: "By Private Appointment"
      }
    ],
    nearbyLandmarks: [
      { name: "BTS Phrom Phong Station", distance: "350m", category: "Transit" },
      { name: "The EmQuartier & EmSphere", distance: "400m", category: "Shopping" },
      { name: "Benchasiri Park", distance: "450m", category: "Nature" },
      { name: "Samitivej Sukhumvit Hospital", distance: "1.2km", category: "Hospital" },
      { name: "Bangkok Prep International School", distance: "900m", category: "Education" }
    ],
    stats: {
      expectedRentalYield: "5.4%",
      capitalAppreciationForecast: "6.8% p.a.",
      foreignQuotaAvailable: true
    }
  },
  {
    id: "blp-02",
    slug: "riverfront-grand-charoenkrung",
    title: "Riverfront Grand Charoenkrung",
    tagline: "Prestigious Waterfront Living along the Majestic Chao Phraya River",
    developer: "Bangkok Link Residences & Heritage Group",
    district: "Riverside",
    subDistrict: "Charoenkrung",
    address: "240 Charoenkrung Road, Wat Phraya Krai, Bang Kho Laem, Bangkok 10120",
    status: "Ready to Move In",
    statusBadge: "Ready to Move In",
    propertyType: "Riverside Branded Residence",
    tenure: "Freehold",
    priceTHB: 24500000,
    priceUSD: 700000,
    priceEUR: 650000,
    pricePerSqmTHB: 345000,
    completionYear: "2026",
    completionQuarter: "Q4 2026",
    constructionProgress: 65,
    constructionStage: "Superstructure Topped Out, Facade Glazing Ongoing",
    totalFloors: 52,
    totalUnits: 142,
    parkingPercentage: "160% EV-Equipped Reserved Spaces",
    transitProximity: "Private River Shuttle to BTS Saphan Taksin & ICONSIAM",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        title: "Riverside Facade with Sunset Reflection",
        category: "Exterior"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
        title: "Riverview Grand Salon with Panoramic Glass",
        category: "Interior"
      },
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
        title: "Private Marina & Riverfront Infinity Boardwalk",
        category: "Facilities"
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
        title: "Master Ensuite with Freestanding River Tub",
        category: "Interior"
      }
    ],
    description: "Rising serenely on the historic banks of the Chao Phraya River, Riverfront Grand Charoenkrung embodies the quintessential romanticism of Bangkok's river of kings combined with state-of-the-art contemporary architecture. All residences are angled to capture panoramic river bends and sunset horizons. With its own private luxury speed-catamaran shuttle and dedicated yacht mooring privileges, this development sets an unprecedented standard for waterfront exclusivity.",
    highlights: [
      "Every single residence enjoys direct, unobstructed Chao Phraya River views",
      "Private air-conditioned electric river shuttle to BTS Saphan Taksin & ICONSIAM",
      "Lowest density tower on Charoenkrung with only 142 ultra-exclusive residences",
      "Full 5-star hotel concierge and in-residence dining services",
      "Completed superstructure on track for Q4 2026 delivery"
    ],
    amenities: [
      "Waterfront Horizon Infinity Pool & River Cabanas",
      "Private Yacht Mooring Jetty",
      "Riverview Tea Lounge & Library",
      "Hydrotherapy Thermal Spa & Steam Suites",
      "Rooftop Observatory Bar on Level 52",
      "Private Screening Room & Dolby Atmos Theater",
      "Chauffeur Waiting Quarters & Valet",
      "Lush Botanical River Gardens"
    ],
    unitTypes: [
      {
        id: "rf-2br",
        name: "2-Bedroom Riverfront Oasis",
        size: "98.0 sq.m",
        bedrooms: 2,
        bathrooms: 2,
        priceTHB: 24500000,
        priceUSD: 700000,
        floorPlan: "Direct river-facing master and guest suites with extended sunrise breakfast terrace.",
        status: "Available"
      },
      {
        id: "rf-3br",
        name: "3-Bedroom River Grand Suite",
        size: "168.0 sq.m",
        bedrooms: 3,
        bathrooms: 3.5,
        priceTHB: 43500000,
        priceUSD: 1242000,
        floorPlan: "Panoramic corner living hall with Sub-Zero wine chiller and double river frontage.",
        status: "Available"
      },
      {
        id: "rf-villa",
        name: "River Villa Sky Duplex",
        size: "310.0 sq.m",
        bedrooms: 4,
        bathrooms: 4.5,
        priceTHB: 88000000,
        priceUSD: 2514000,
        floorPlan: "Private sky garden, personal heated plunge pool overlooking Chao Phraya River.",
        status: "Last 1 Unit"
      }
    ],
    nearbyLandmarks: [
      { name: "ICONSIAM Luxury Mall", distance: "5 mins via River Shuttle", category: "Shopping" },
      { name: "Four Seasons Hotel & Capella", distance: "600m", category: "Hospitality" },
      { name: "Shrewsbury International School", distance: "900m", category: "Education" },
      { name: "BTS Saphan Taksin", distance: "7 mins via Boat", category: "Transit" },
      { name: "Asiatique The Riverfront", distance: "450m", category: "Lifestyle" }
    ],
    stats: {
      expectedRentalYield: "5.8%",
      capitalAppreciationForecast: "7.2% p.a.",
      foreignQuotaAvailable: true
    }
  },
  {
    id: "blp-03",
    slug: "celeste-skyline-asoke",
    title: "Celeste Skyline Asoke",
    tagline: "Move-In Ready Architectural Icon in the Vibrant Asoke CBD Interchange",
    developer: "Bangkok Link Urban Living",
    district: "Asoke",
    subDistrict: "Sukhumvit 21",
    address: "128 Asoke Montri Road, Khlong Toei Nuea, Watthana, Bangkok 10110",
    status: "Ready to Move In",
    statusBadge: "Ready to Move In - Immediate Yield",
    propertyType: "High-Rise Condominium",
    tenure: "Freehold",
    priceTHB: 12900000,
    priceUSD: 368000,
    priceEUR: 341000,
    pricePerSqmTHB: 285000,
    completionYear: "2025",
    completionQuarter: "Completed",
    constructionProgress: 100,
    constructionStage: "Fully Completed & Ready for Immediate Handover",
    totalFloors: 42,
    totalUnits: 260,
    parkingPercentage: "100% Automated Mechanical Parking",
    transitProximity: "180m to MRT Sukhumvit & BTS Asoke Interchange",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1600&q=80",
        title: "Futuristic Glass Tower in Asoke CBD",
        category: "Exterior"
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
        title: "Scandinavian Modern Living Room",
        category: "Interior"
      },
      {
        url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=80",
        title: "Level 40 Sky Cloud Pool & Deck",
        category: "Facilities"
      },
      {
        url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80",
        title: "Smart Home Integrated Master Bedroom",
        category: "Interior"
      }
    ],
    description: "Strategically located at the intersection of Bangkok's primary transit nodes (BTS Asoke and MRT Sukhumvit), Celeste Skyline Asoke is the pinnacle of urban connectivity and cosmopolitan prestige. This newly completed development offers immediate rental returns for savvy investors and zero construction waiting time for residents.",
    highlights: [
      "Immediate handover & keys ready — earn rental returns from day one",
      "Only 180 meters to BTS Asoke and MRT Sukhumvit dual-transit hub",
      "Surrounded by Fortune 500 corporate headquarters & Terminal 21",
      "High tenant demand among Japanese, European, and multinational expats",
      "Smart-living ready with app-controlled climate, lighting, and security"
    ],
    amenities: [
      "Level 40 Glass-Edged Cloud Pool",
      "24/7 Co-Working Sky Lab with High-Speed Fiber",
      "Private Soundproof Podcast & Stream Studio",
      "Sky Cinema & Entertainment Deck",
      "Steam & Himalayan Rock Sauna",
      "Rooftop Zen Meditation Deck",
      "Grab & Go Gourmet Café in Lobby",
      "Amazon & Deliveries Parcel Smart Lockers"
    ],
    unitTypes: [
      {
        id: "celeste-1br",
        name: "1-Bedroom Smart Executive",
        size: "42.5 sq.m",
        bedrooms: 1,
        bathrooms: 1,
        priceTHB: 12900000,
        priceUSD: 368000,
        floorPlan: "Optimized layout with multi-functional sliding acoustic partitions and smart storage.",
        status: "Available"
      },
      {
        id: "celeste-2br",
        name: "2-Bedroom City Skyline",
        size: "72.0 sq.m",
        bedrooms: 2,
        bathrooms: 2,
        priceTHB: 20500000,
        priceUSD: 585000,
        floorPlan: "Dual-aspect glass facade with panoramic views of Asoke skyline and Queen Sirikit Park.",
        status: "Available"
      },
      {
        id: "celeste-ph",
        name: "Crown Penthouse Suite",
        size: "145.0 sq.m",
        bedrooms: 3,
        bathrooms: 3,
        priceTHB: 45000000,
        priceUSD: 1285000,
        floorPlan: "Top floor residence with 3.8m ceiling heights and private outdoor barbecue patio.",
        status: "Last 2 Units"
      }
    ],
    nearbyLandmarks: [
      { name: "BTS Asoke & MRT Sukhumvit", distance: "180m", category: "Transit" },
      { name: "Terminal 21 Shopping Mall", distance: "250m", category: "Shopping" },
      { name: "Exchange Tower & Interchange 21", distance: "200m", category: "Business" },
      { name: "Bumrungrad International Hospital", distance: "1.5km", category: "Hospital" },
      { name: "Benchakitti Forest Park", distance: "600m", category: "Nature" }
    ],
    stats: {
      expectedRentalYield: "6.2%",
      capitalAppreciationForecast: "5.5% p.a.",
      foreignQuotaAvailable: true
    }
  },
  {
    id: "blp-04",
    slug: "the-atelier-thonglor-13",
    title: "The Atelier Thonglor 13",
    tagline: "Boutique Architectural Masterpiece nestled in Bangkok's Trendiest Enclave",
    developer: "Bangkok Link Signature Properties",
    district: "Thong Lor",
    subDistrict: "Sukhumvit 55",
    address: "55/13 Thonglor Soi 13, Khlong Tan Nuea, Watthana, Bangkok 10110",
    status: "Ready to Move In",
    statusBadge: "Ready to Move In",
    propertyType: "Low-Rise Luxury Boutique",
    tenure: "Freehold",
    priceTHB: 21500000,
    priceUSD: 614000,
    priceEUR: 570000,
    pricePerSqmTHB: 330000,
    completionYear: "2027",
    completionQuarter: "Q1 2027",
    constructionProgress: 20,
    constructionStage: "Piling & Foundation Works in Progress",
    totalFloors: 8,
    totalUnits: 58,
    parkingPercentage: "200% Supercar & EV Friendly (2 lots/unit)",
    transitProximity: "Shuttle Service to BTS Thong Lo & The Commons",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        title: "Modernist Travertine & Bronze Facade",
        category: "Exterior"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        title: "Warm Minimalist Living Room with Courtyard View",
        category: "Interior"
      },
      {
        url: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=80",
        title: "Japanese Courtyard Garden & Reflection Pond",
        category: "Facilities"
      }
    ],
    description: "Designed for those who crave absolute privacy without sacrificing the vibrant lifestyle of Thong Lor. The Atelier Thonglor 13 comprises just 58 bespoke residences set within a tranquil residential soi steps away from Bangkok's best cafes, concept stores, and omakase restaurants.",
    highlights: [
      "Ultra-low density: only 58 private residences in total",
      "200% parking allocation (2 parking bays included per residence)",
      "Steps away from The Commons Thonglor and J Avenue",
      "Full Gaggenau kitchen appliance package included in presale",
      "Private tranquil garden oasis hidden in the heart of Thonglor"
    ],
    amenities: [
      "Heated Saltwater Courtyard Lap Pool",
      "Private Teppanyaki & Omakase Chef's Kitchen",
      "Resident's Wine Cellar & Tasting Lounge",
      "Technogym Kinesis Wellness Studio",
      "24-Hour Private Valet & Security",
      "EV Supercharger Bays for Every Residence",
      "Secret Bamboo Reading Pavilion"
    ],
    unitTypes: [
      {
        id: "atelier-1br-plus",
        name: "1-Bedroom + Study Atelier",
        size: "65.0 sq.m",
        bedrooms: 1.5,
        bathrooms: 2,
        priceTHB: 21500000,
        priceUSD: 614000,
        floorPlan: "Private foyer, flexible executive study or guest room, custom walk-in wardrobe.",
        status: "Available"
      },
      {
        id: "atelier-2br",
        name: "2-Bedroom Courtyard Suite",
        size: "115.0 sq.m",
        bedrooms: 2,
        bathrooms: 2.5,
        priceTHB: 37800000,
        priceUSD: 1080000,
        floorPlan: "Generous dual master suites, private balcony overlooking bamboo courtyard.",
        status: "Available"
      },
      {
        id: "atelier-villa",
        name: "Duplex Garden Villa",
        size: "220.0 sq.m",
        bedrooms: 3,
        bathrooms: 3.5,
        priceTHB: 72500000,
        priceUSD: 2071000,
        floorPlan: "Private ground-floor garden, direct private lift access, double-height ceiling.",
        status: "Last 1 Unit"
      }
    ],
    nearbyLandmarks: [
      { name: "The Commons Thonglor", distance: "220m", category: "Dining" },
      { name: "J Avenue Thonglor", distance: "300m", category: "Shopping" },
      { name: "BTS Thong Lo", distance: "1.1km", category: "Transit" },
      { name: "Samitivej Sukhumvit Hospital", distance: "450m", category: "Hospital" },
      { name: "8 Thonglor Complex", distance: "500m", category: "Lifestyle" }
    ],
    stats: {
      expectedRentalYield: "5.6%",
      capitalAppreciationForecast: "7.5% p.a.",
      foreignQuotaAvailable: true
    }
  },
  {
    id: "blp-05",
    slug: "luxe-horizon-sathorn",
    title: "Luxe Horizon Sathorn",
    tagline: "Commanding Financial District Landmark with Sweeping Bang Krachao Views",
    developer: "Bangkok Link Properties & Capital Land",
    district: "Sathorn",
    subDistrict: "Chong Nonsi",
    address: "77 South Sathorn Road, Thung Maha Mek, Sathon, Bangkok 10120",
    status: "Ready to Move In",
    statusBadge: "Ready to Move In - Prime Sathorn",
    propertyType: "High-Rise Condominium",
    tenure: "Freehold",
    priceTHB: 18500000,
    priceUSD: 528000,
    priceEUR: 490000,
    pricePerSqmTHB: 295000,
    completionYear: "2025",
    completionQuarter: "Completed",
    constructionProgress: 100,
    constructionStage: "Move-In Ready & Registered Freehold Title Deeds",
    totalFloors: 48,
    totalUnits: 196,
    parkingPercentage: "125% Parking Spaces",
    transitProximity: "220m to BTS Saint Louis & BTS Chong Nonsi",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        title: "Sathorn Financial District Skyline",
        category: "Exterior"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        title: "Executive Residence Living Area",
        category: "Interior"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
        title: "Level 46 Horizon Sky Deck",
        category: "Facilities"
      }
    ],
    description: "Towering above South Sathorn Road, Luxe Horizon Sathorn combines corporate prestige with serene sanctuary living. Just steps from multinational financial institutions, embassies, and top-ranked international schools.",
    highlights: [
      "Prestigious Sathorn financial district address",
      "Immediate handover: move in today or place with elite corporate tenants",
      "Sweeping views over Bang Krachao green reserve and Chao Phraya",
      "220m from BTS Saint Louis & BTS Chong Nonsi",
      "High foreign investment interest with ready freehold title"
    ],
    amenities: [
      "Level 45 Heated Panoramic Infinity Pool",
      "Executive Sky Club & Private Meeting Chambers",
      "Sky Gymnasium with Pilates Reformers",
      "Sauna & Steam Therapy Suites",
      "24-Hour Concierge & Security Services",
      "Automated EV Charging Superchargers",
      "Private Library & Whisky Lounge"
    ],
    unitTypes: [
      {
        id: "luxe-1br",
        name: "1-Bedroom Executive Haven",
        size: "52.0 sq.m",
        bedrooms: 1,
        bathrooms: 1,
        priceTHB: 18500000,
        priceUSD: 528000,
        floorPlan: "Floor-to-ceiling glass, Italian marble bathroom, concealed storage.",
        status: "Available"
      },
      {
        id: "luxe-2br",
        name: "2-Bedroom Sathorn Vista",
        size: "89.0 sq.m",
        bedrooms: 2,
        bathrooms: 2,
        priceTHB: 28500000,
        priceUSD: 814000,
        floorPlan: "Dual-wing layout for privacy, expansive sunset living area.",
        status: "Available"
      },
      {
        id: "luxe-3br",
        name: "3-Bedroom Horizon Sky Residence",
        size: "155.0 sq.m",
        bedrooms: 3,
        bathrooms: 3.5,
        priceTHB: 52000000,
        priceUSD: 1485000,
        floorPlan: "Private lift entry, maid quarters, wrap-around Bang Krachao vistas.",
        status: "Last 2 Units"
      }
    ],
    nearbyLandmarks: [
      { name: "BTS Saint Louis / Chong Nonsi", distance: "220m", category: "Transit" },
      { name: "Empire Tower & Sathorn Square", distance: "300m", category: "Business" },
      { name: "King Power Mahanakhon", distance: "450m", category: "Lifestyle" },
      { name: "BNH Hospital", distance: "750m", category: "Hospital" },
      { name: "Lumpini Park", distance: "1.4km", category: "Nature" }
    ],
    stats: {
      expectedRentalYield: "5.5%",
      capitalAppreciationForecast: "6.0% p.a.",
      foreignQuotaAvailable: true
    }
  },
  {
    id: "blp-06",
    slug: "aria-sanctuary-ari",
    title: "Aria Sanctuary Ari",
    tagline: "Eco-Conscious Boutique Residences in Bangkok's Most Charming Neighborhood",
    developer: "Bangkok Link Sustainable Living",
    district: "Ari",
    subDistrict: "Phahonyothin 7",
    address: "32 Soi Ari 4 (North), Phahonyothin Road, Phaya Thai, Bangkok 10400",
    status: "Ready to Move In",
    statusBadge: "Ready to Move In",
    propertyType: "Boutique Condominium",
    tenure: "Freehold",
    priceTHB: 9800000,
    priceUSD: 280000,
    priceEUR: 260000,
    pricePerSqmTHB: 235000,
    completionYear: "2026",
    completionQuarter: "Q3 2026",
    constructionProgress: 50,
    constructionStage: "Structural Framework 50% Completed",
    totalFloors: 8,
    totalUnits: 72,
    parkingPercentage: "110% Underground Automated Parking",
    transitProximity: "450m from BTS Ari Station",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        title: "Biophilic Facade with Hanging Greenery",
        category: "Exterior"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
        title: "Sunlit Natural Oak Living Suite",
        category: "Interior"
      },
      {
        url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=80",
        title: "Rooftop Forest Pool & Herb Garden",
        category: "Facilities"
      }
    ],
    description: "Nestled quietly within Ari Soi 4, Aria Sanctuary Ari is an architectural ode to mindful urban living. Combining sustainable timber screening, solar roof panels, and natural cross-ventilation, this 8-storey sanctuary offers a haven of calm while being only 450m from Ari BTS and its celebrated artisan cafes, craft bakeries, and indie boutiques.",
    highlights: [
      "Low-rise biophilic architectural design with lush vertical greenery",
      "LEED Gold certified energy-efficient construction",
      "450m easy walk to BTS Ari and La Villa community mall",
      "High rental demand among creative professionals and diplomats",
      "Underground automated parking with solar charging"
    ],
    amenities: [
      "Rooftop Canopy Swimming Pool",
      "Community Organic Herb Garden & Tea Patio",
      "Glasshouse Co-Working Pavilion",
      "State-of-the-Art Wellness & Yoga Loft",
      "Pet-Friendly Courtyard & Grooming Bay",
      "24/7 Smart Security & Keycard Access"
    ],
    unitTypes: [
      {
        id: "aria-1br",
        name: "1-Bedroom Forest View",
        size: "38.0 sq.m",
        bedrooms: 1,
        bathrooms: 1,
        priceTHB: 9800000,
        priceUSD: 280000,
        floorPlan: "Natural timber finishes, built-in study nook, private plant balcony.",
        status: "Available"
      },
      {
        id: "aria-2br",
        name: "2-Bedroom Sanctuary Suite",
        size: "68.0 sq.m",
        bedrooms: 2,
        bathrooms: 2,
        priceTHB: 16900000,
        priceUSD: 482000,
        floorPlan: "Dual balcony, master suite with deep soaking bathtub, green garden view.",
        status: "Available"
      }
    ],
    nearbyLandmarks: [
      { name: "BTS Ari Station", distance: "450m", category: "Transit" },
      { name: "La Villa Ari Shopping Mall", distance: "480m", category: "Shopping" },
      { name: "GUMP's Ari Community Space", distance: "350m", category: "Lifestyle" },
      { name: "Vichaiyut Hospital", distance: "1.3km", category: "Hospital" },
      { name: "Phrom Phong / Siam (Direct BTS)", distance: "12 mins", category: "Transit" }
    ],
    stats: {
      expectedRentalYield: "5.9%",
      capitalAppreciationForecast: "6.5% p.a.",
      foreignQuotaAvailable: true
    }
  }
];

export const fallbackDistricts: District[] = [
  {
    id: "sukhumvit",
    name: "Sukhumvit",
    tag: "Expat Epicenter & Luxury Lifestyle",
    description: "Bangkok's premier lifestyle spine featuring Phrom Phong, Thong Lor, and Ekkamai. Home to high-end malls like EmDistrict, world-class hospitals, and international schools.",
    projectCount: 2,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "riverside",
    name: "Riverside",
    tag: "Historic Grandeur & Riverfront Prestige",
    description: "The Chao Phraya riverfront is Bangkok's most prestigious and limited luxury land strip. Iconic for branded 5-star hotel residences, private yacht access, and ICONSIAM.",
    projectCount: 1,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asoke",
    name: "Asoke",
    tag: "Central Interchange & Corporate Hub",
    description: "The epicenter where BTS and MRT lines cross. Highly sought-after by corporate leaders, financial executives, and institutional investors seeking premier liquidity and yields.",
    projectCount: 1,
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "thong-lor",
    name: "Thong Lor",
    tag: "Trendsetter Haven & Elite Nightlife",
    description: "Thailand's Beverly Hills. Known for Michelin-guide dining, artisanal coffee roasters, Japanese omakase enclaves, and low-density boutique residential masterpieces.",
    projectCount: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sathorn",
    name: "Sathorn",
    tag: "Wall Street of Bangkok & Embassy Row",
    description: "The commanding corporate power district hosting international embassies, Grade-A office towers, and sky-high dining venues with views toward Bang Krachao.",
    projectCount: 1,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ari",
    name: "Ari",
    tag: "Chic Greenery & Artisan Community",
    description: "A charismatic tree-lined neighborhood that fuses peaceful residential streets with chic lifestyle cafes and government headquarters. Loved for relaxed charm.",
    projectCount: 1,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
  }
];
