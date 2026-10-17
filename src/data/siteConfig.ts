import { SiteConfig, Destination, TripType, Testimonial, FAQItem, GalleryItem } from '../types'

/**
 * ==============================================================================
 * DECENT TRAVELERS - MASTER SITE CONFIGURATION
 * ==============================================================================
 * Edit any contact info, social links, stats, destinations or trips right here.
 * All changes will automatically reflect across the entire website!
 */

export const siteConfig: SiteConfig = {
  companyName: "Decent Travelers",
  tagline: "Explore Pakistan's Paradise with Decent Travelers",
  urduTagline: "چلو پاکستان کی خوبصورتی دیکھنے | Chalein Pakistan Ki Khoobsurti Dekhne",
  
  // EDITABLE: Contact & WhatsApp details
  phone: "+923000477721",
  displayPhone: "0300 0477721",
  whatsappNumber: "923000477721", // Format without '+' or spaces for wa.me links
  whatsappDisplay: "0300 0477721",
  whatsappDefaultMessage: "Assalam-o-Alaikum Decent Travelers! I want to plan a trip with you to Northern Pakistan. Please share details and quotes.",
  email: "Adeelmalik7865@gmail.com",
  companyDescription: "Decent Travelers is a professional and reliable tourism company offering memorable travel experiences across the beautiful Northern Areas of Pakistan. We provide a wide range of services, including Group Tours, Customized Tours, Corporate Tours, Family Trips, and Honeymoon Packages — all designed for comfort, safety, and an unforgettable journey. Plan your next adventure with Decent Travelers and explore the beauty of Pakistan with professionalism, comfort, and care.",
  address: "Ground floor office no 9, jalal center, Kashmir Block Allama Iqbal Town, Lahore, 54000",
  googleMapsUrl: "https://share.google/cPBmtPDHOAfmIMM50",
  googleMyBusinessUrl: "https://share.google/cPBmtPDHOAfmIMM50",
  googleReviewsUrl: "https://share.google/Y7lMCQIM8pKxPX8EL",
  officeHours: "Mon - Sat: 9:00 AM - 9:00 PM (24/7 Helpline available on tour)",

  // EDITABLE: Social media links
  socials: {
    facebook: "https://www.facebook.com/Decenttravelandtour001/",
    instagram: "https://www.instagram.com/decenttravelers/?hl=en",
    tiktok: "https://tiktok.com/@decenttravelers",
    youtube: "https://youtube.com/@decenttravelers",
    whatsapp: "https://wa.me/923000477721"
  },

  // EDITABLE: Foundation year placeholder
  sinceYear: "2018",

  // EDITABLE: Hero & Trust statistics (numbers shown with animated count-up)
  stats: {
    happyTravelers: "500", // Displays as 500+ Happy Travelers
    destinationsCount: "9", // Displays as 9 Destinations
    tripTypesCount: "5", // Displays as 5 Trip Types
    tripsCompleted: "480",
    yearsExperience: "8",
    satisfactionRate: "99.4"
  }
}

/**
 * THE 9 SIGNATURE DESTINATIONS
 */
export const destinations: Destination[] = [
  {
    id: "hunza",
    name: "Hunza Valley",
    urduName: "وادی ہنزہ",
    region: "Gilgit-Baltistan",
    province: "Gilgit-Baltistan",
    bestSeason: "April - November (Blossom & Autumn)",
    duration: "5 to 8 Days",
    altitude: "2,438 m",
    teaser: "Ancient fairy-tale kingdoms, turquoise Attabad Lake & majestic Passu Cones.",
    description: "Hunza is the crown jewel of Northern Pakistan. Travel along the Karakoram Highway to discover 900-year-old Baltit & Altit forts, boat on the crystal turquoise Attabad Lake, walk the Passu suspension bridge, and watch golden sunsets illuminate Rakaposhi and Ladyfinger Peak.",
    image: "https://images.unsplash.com/photo-1640881193563-b5f0bf20019a?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Attabad Lake Boating & Jetski", "Passu Cones & Glacier Trek", "Historic Altit & Baltit Forts", "Eagle's Nest Sunset Viewpoint"],
    priceStartingFrom: "PKR 38,000",
    mapCoords: { x: 58, y: 22 },
    tag: "Most Popular"
  },
  {
    id: "skardu",
    name: "Skardu & Deosai",
    urduName: "سکردو اور دیوسائی",
    region: "Gilgit-Baltistan",
    province: "Gilgit-Baltistan",
    bestSeason: "May - October",
    duration: "6 to 9 Days",
    altitude: "2,230 m - 4,114 m",
    teaser: "Gateway to K2, the mysterious Cold Desert dunes, and the Land of Giants.",
    description: "Skardu is the ultimate wilderness adventure. Experience the rare cold desert sand dunes of Katpana under starry skies, sail across the heart-shaped Lower Kachura (Shangrila) Lake, explore ancient Kharpocho Fort, and ascend into Deosai — the world's second-highest plateau alive with wild flowers and Himalayan brown bears.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Deosai Plains & Sheosar Lake", "Shangrila & Upper Kachura Lake", "Katpana Cold Desert Camping", "Basho Valley & Manthal Buddha Rock"],
    priceStartingFrom: "PKR 45,000",
    mapCoords: { x: 74, y: 35 },
    tag: "Bucket List"
  },
  {
    id: "swat",
    name: "Swat (Kalam & Malam Jabba)",
    urduName: "سوات وادی",
    region: "Khyber Pakhtunkhwa",
    province: "KPK",
    bestSeason: "All Year (Skiing in Winter, Lush in Summer)",
    duration: "3 to 5 Days",
    altitude: "1,980 m",
    teaser: "The Switzerland of the East with lush pine valleys, ski resorts & crystal trout rivers.",
    description: "Famous for its emerald green meadows, pine-clad mountain peaks and welcoming Pashtun hospitality. Glide on the chairlift and ski down slopes at Malam Jabba, safari through the dense cedar forest of Ushu, and hire a 4x4 jeep to reach pristine Mahodand Lake teeming with cold glacier streams.",
    image: "https://images.unsplash.com/photo-1649279585660-b29ab13b93a8?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Malam Jabba Ski Resort & Zipline", "Kalam Valley & Ushu Cedar Forest", "Off-road Safari to Mahodand Lake", "Fizagat Riverside Trout Dining"],
    priceStartingFrom: "PKR 24,000",
    mapCoords: { x: 34, y: 44 },
    tag: "Family Favorite"
  },
  {
    id: "kumrat",
    name: "Kumrat Valley",
    urduName: "وادی کمراٹ",
    region: "Upper Dir, KPK",
    province: "KPK",
    bestSeason: "May - October",
    duration: "4 to 6 Days",
    altitude: "2,400 m",
    teaser: "Dense fragrant deodar forests, rushing Panjkora river, and magical Jahaz Banda.",
    description: "Kumrat is nature untouched. Wander through towering virgin pine woods where sunlight filters like golden dust, camp beside the roaring turquoise Panjkora river, and trek up to the alpine meadow of Jahaz Banda and the mystic emerald waters of Katora Lake.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Virgin Deodar Pine Forest Walks", "Jahaz Banda Meadows Trek", "Katora Lake Trekking Expedition", "Riverside Bonfire & Stargazing"],
    priceStartingFrom: "PKR 27,000",
    mapCoords: { x: 30, y: 34 },
    tag: "Untamed Nature"
  },
  {
    id: "naran",
    name: "Naran & Kaghan",
    urduName: "ناران کاغان",
    region: "KPK",
    province: "KPK",
    bestSeason: "June - October",
    duration: "3 to 5 Days",
    altitude: "2,409 m",
    teaser: "Fairy-tale Lake Saif-ul-Malook, Babusar Pass clouds, and Kunhar river rafting.",
    description: "The classic heart of Pakistani tourism. Ascend in open-top 4x4 jeeps to Lake Saif-ul-Malook where legend says fairies descend on full-moon nights. Drive over the dramatic 13,700-ft Babusar Top, pause by the glassy waters of Lulusar Lake, and enjoy white-water rafting on the Kunhar River.",
    image: "https://images.unsplash.com/photo-1626685516371-a0ee93a0f370?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Legendary Lake Saif-ul-Malook", "Babusar Pass Panoramic Crest", "Lulusar & Dudipatsar Lakes", "Kunhar River White Water Rafting"],
    priceStartingFrom: "PKR 22,000",
    mapCoords: { x: 48, y: 46 },
    tag: "Classic Tour"
  },
  {
    id: "kashmir",
    name: "Azad Kashmir (Arang Kel & Taobat)",
    urduName: "آزاد کشمیر",
    region: "Neelum Valley, AJK",
    province: "Azad Kashmir",
    bestSeason: "April - November",
    duration: "4 to 6 Days",
    altitude: "2,554 m",
    teaser: "Vibrant emerald terraced fields, wooden houses, and the roaring Neelum River.",
    description: "Often described as heaven on earth. Cross the cable-car lift over the river and hike into the fairy village of Arang Kel perched high on a green plateau. Travel deeper to Taobat, the last village on the Line of Control, where wooden chalets meet untouched crystal streams.",
    image: "https://images.unsplash.com/photo-1659553761498-6a8728fbf281?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Cable car to Arang Kel Plateau", "Last Frontier Village of Taobat", "Dhani & Kutton Waterfalls", "Sharda Ancient Buddhist University"],
    priceStartingFrom: "PKR 26,000",
    mapCoords: { x: 62, y: 56 },
    tag: "Paradise on Earth"
  },
  {
    id: "shogran",
    name: "Shogran & Siri Paye",
    urduName: "شوگران اور سری پائے",
    region: "Kaghan Valley, KPK",
    province: "KPK",
    bestSeason: "May - November",
    duration: "2 to 3 Days",
    altitude: "2,362 m - 3,058 m",
    teaser: "Rolling high-altitude pastures where clouds float right at your feet.",
    description: "Just 4 hours from Islamabad, Shogran is the perfect quick escape. Stay in cozy pine lodges atop the ridge, take a thrilling 4x4 jeep ride up to Siri Paye meadows, horse ride across lush green hills, and marvel at the mighty snow-clad Makra Peak rising in the backdrop.",
    image: "https://images.unsplash.com/photo-1565180044702-e2355668e302?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Siri Paye Meadows & Lake", "Makra Peak Alpine Panorama", "Horseback Riding on Green Ridges", "Forest Lawn BBQ & Bonfires"],
    priceStartingFrom: "PKR 18,000",
    mapCoords: { x: 44, y: 53 },
    tag: "Quick Weekend"
  },
  {
    id: "sharan",
    name: "Sharan Forest & Pods",
    urduName: "شیران فارسٹ",
    region: "Kaghan Valley, KPK",
    province: "KPK",
    bestSeason: "June - September",
    duration: "2 to 3 Days",
    altitude: "2,425 m",
    teaser: "Hidden eco-forest haven with wooden camping pods and undisturbed silence.",
    description: "An off-beat sanctuary hidden deep inside the Manshi National Park. Accessible by rugged 4x4 jeeps, Sharan offers pristine wooden glamping pods surrounded by towering pine trees, singing birds, clean mountain springs, and complete digital detox away from commercial crowds.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Glamping in Wooden Eco-Pods", "Manshi Top Hiking Trail", "Untouched Wilderness & Birds", "Pure Tranquility & Stargazing"],
    priceStartingFrom: "PKR 21,000",
    mapCoords: { x: 42, y: 58 },
    tag: "Hidden Gem"
  },
  {
    id: "chitral",
    name: "Chitral & Kalash Valleys",
    urduName: "چترال اور کیلاش",
    region: "Hindukush, KPK",
    province: "KPK",
    bestSeason: "May - October (Festivals: Chilam Joshi & Uchal)",
    duration: "6 to 8 Days",
    altitude: "1,500 m - 7,708 m (Tirich Mir)",
    teaser: "The mysterious indigenous Kalash culture in the shadows of mighty Tirich Mir.",
    description: "Immerse yourself in one of the world's most unique surviving cultures. Witness the vibrant traditional attire, music and dances of the animist Kalash people in Bumburet, Rumbur and Birir. Visit the historic Chitral Fort, the royal Shahi Mosque, and cross the Lowari Tunnel into the rugged Hindukush.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Kalash Indigenous Cultural Villages", "Chitral Royal Fort & Shahi Mosque", "Views of Tirich Mir (7,708m)", "Ayun Valley Orchards & Hospitality"],
    priceStartingFrom: "PKR 35,000",
    mapCoords: { x: 22, y: 28 },
    tag: "Cultural Wonder"
  }
]

/**
 * 5 SIGNATURE TRIP TYPES
 */
export const tripTypes: TripType[] = [
  {
    id: "family",
    title: "Family Holidays",
    subtitle: "Safe, Relaxed & Family-Approved",
    description: "Carefully calibrated itineraries with gentle driving times, verified child-safe hotels, spacious seating, and wholesome family-first environments with zero awkward moments.",
    badge: "100% Family Safe",
    accentColor: "border-brand-teal text-brand-teal",
    iconName: "Users",
    features: [
      "Exclusive Toyota Hiace Grand Cabin or Coaster",
      "Spacious family suites & baby-friendly stays",
      "Flexible schedule for kids and elderly parents",
      "Clean washroom stops verified beforehand",
      "Vetted, respectful drivers & tour coordinators"
    ],
    idealFor: "Families, children, parents & multi-generational groups",
    popularDestination: "Hunza, Swat & Shogran",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "corporate",
    title: "Corporate Retreats",
    subtitle: "High-Impact Team Building & Executive Retreats",
    description: "Designed for modern Pakistani startups, multinational firms, and banking executives. Seamless logistics, conference facilities in the mountains, leadership activities, and executive catering.",
    badge: "Executive Standard",
    accentColor: "border-brand-orange text-brand-orange",
    iconName: "Briefcase",
    features: [
      "Luxury Saloon Coaster & 4x4 Prado backup",
      "4-star & 5-star mountain resort bookings",
      "Branded gear, photo/video team coverage",
      "Evening bonfire, acoustic nights & BBQ setups",
      "Formal corporate invoicing & NTN tax compliance"
    ],
    idealFor: "Tech companies, banks, sales kick-offs & executive boards",
    popularDestination: "Skardu, Malam Jabba & Hunza",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "honeymoon",
    title: "Honeymoon Packages",
    subtitle: "Romance Amidst Majestic Snow Peaks",
    description: "Create unforgettable beginnings in the serene valleys of Hunza, Skardu, or Neelum. Private vehicle, candlelit dinners beside roaring rivers, luxury suites with panoramic balcony views, and surprise arrangements.",
    badge: "Romantic Escape",
    accentColor: "border-rose-500 text-rose-400",
    iconName: "Heart",
    features: [
      "Private dedicated 4x4 Prado or Toyota Corolla",
      "Deluxe river-facing or snow-view suites",
      "Floral bed decor & welcome cake upon arrival",
      "Romantic candle-light dinner arrangement",
      "Complete privacy & curated couple photography"
    ],
    idealFor: "Newlyweds & couples celebrating anniversaries",
    popularDestination: "Hunza Valley & Shangrila Skardu",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "educational",
    title: "Educational & Student Trips",
    subtitle: "Adventure, Field Learning & Safe Camaraderie",
    description: "Economical, safe, and immensely enriching group excursions for colleges, universities, and school batches. Supervised by trained safety marshals with complete risk-assessment protocols.",
    badge: "Safe Student Expeditions",
    accentColor: "border-brand-aqua text-brand-aqua",
    iconName: "GraduationCap",
    features: [
      "Air-conditioned luxury group buses",
      "Budget-friendly yet clean hotel dorms & camps",
      "Geographical, historical & cultural workshops",
      "Full safety kit & first-aid certified staff",
      "Institution administration coordination & reporting"
    ],
    idealFor: "Universities, colleges, student societies & youth clubs",
    popularDestination: "Swat, Kumrat & Naran",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "international",
    title: "Overseas & Foreign Travelers",
    subtitle: "Airport-to-Airport VIP Hospitality in Pakistan",
    description: "Tailored for Overseas Pakistanis visiting home and foreign tourists seeking the world's most dramatic mountain ranges. Dedicated English-fluent guides, SIM card setup, security briefings, and visa support.",
    badge: "International Standard",
    accentColor: "border-amber-400 text-amber-300",
    iconName: "Globe",
    features: [
      "Islamabad airport meet & greet with private transfer",
      "Customized private English-speaking tour guide",
      "Assistance with local SIM cards & mobile data",
      "Visa invitation letters (LOI) provided",
      "Secure online international payment options"
    ],
    idealFor: "Diaspora families from UK, USA, Gulf & foreign tourists",
    popularDestination: "Karakoram Highway, Hunza & Skardu",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
  }
]

/**
 * WHY CHOOSE DECENT TRAVELERS ("Decent" Brand Promise)
 */
export const whyChooseUsFeatures = [
  {
    title: "True 'Decent' Family Ethics",
    description: "We strictly uphold a family-friendly environment with zero alcohol tolerance, vetted courteous staff, and respectful conduct so you feel completely at home.",
    icon: "ShieldCheck",
    color: "from-brand-orange to-brand-amber"
  },
  {
    title: "100% Transparent Pricing",
    description: "No sudden roadside fuel charges, no surprise hotel downgrade gimmicks. Everything included in your quote is delivered honestly in writing.",
    icon: "BadgePercent",
    color: "from-brand-teal to-brand-aqua"
  },
  {
    title: "Comfortable Mountain-Grade Fleet",
    description: "Well-maintained Toyota Grand Cabins, Saloon Coasters, and 4x4 Prados driven by experienced mountain drivers who know every turn of the KHH.",
    icon: "Bus",
    color: "from-brand-amber to-brand-yellow"
  },
  {
    title: "Native Guides & Local Insight",
    description: "Our tour captains are passionate locals who show you hidden viewpoints, secret apricot orchards, and authentic trout spots ordinary tourists miss.",
    icon: "Compass",
    color: "from-brand-teal to-emerald-400"
  },
  {
    title: "24/7 Ground Ops & Emergency Support",
    description: "Continuous real-time communication with our Islamabad operations base, ready medical first-aid kits, and instant contingency protocols.",
    icon: "LifeBuoy",
    color: "from-brand-orange to-rose-500"
  },
  {
    title: "Handpicked Premium Mountain Stays",
    description: "We personally inspect every hotel, resort, and glamping pod for hot water availability, cleanliness, panoramic views, and hearty dining.",
    icon: "Hotel",
    color: "from-brand-aqua to-blue-500"
  }
]

/**
 * HOW IT WORKS - 4 SIMPLE STEPS
 */
export const howItWorksSteps = [
  {
    step: "01",
    title: "Pick Your Dream Valley",
    description: "Choose from Hunza, Skardu, Swat, Kumrat or Kashmir — or tell us your preferred dates and budget for a custom route.",
    icon: "MapPin"
  },
  {
    step: "02",
    title: "Get Fast WhatsApp Quote",
    description: "Within 15 minutes, our tour specialist shares a detailed day-wise itinerary with vehicle and hotel options customized for your group.",
    icon: "MessageSquareQuote"
  },
  {
    step: "03",
    title: "Confirm with Small Advance",
    description: "Secure your booking with an easy online bank transfer, Raast, or JazzCash. You receive a digital booking voucher immediately.",
    icon: "CreditCard"
  },
  {
    step: "04",
    title: "Board & Enjoy Northern Paradise",
    description: "Hop on our comfortable tour vehicle at Islamabad or Lahore. Relax, enjoy majestic landscapes, and let us take care of everything!",
    icon: "Smile"
  }
]

/**
 * CURATED PHOTO GALLERY
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Attabad Lake Turquoise Waters",
    location: "Hunza, Gilgit-Baltistan",
    category: "Hunza",
    image: "https://images.unsplash.com/photo-1640881193563-b5f0bf20019a?auto=format&fit=crop&w=1000&q=80",
    widthClass: "col-span-12 md:col-span-6 lg:col-span-4"
  },
  {
    id: "g2",
    title: "Passu Cones Cathedral Peaks",
    location: "Upper Hunza",
    category: "Hunza",
    image: "https://images.unsplash.com/photo-1646514323421-094bb563cd37?auto=format&fit=crop&w=1000&q=80",
    widthClass: "col-span-12 md:col-span-6 lg:col-span-8"
  },
  {
    id: "g3",
    title: "Shangrila Resort Lake",
    location: "Lower Kachura, Skardu",
    category: "Skardu",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    widthClass: "col-span-12 md:col-span-6 lg:col-span-4"
  },
  {
    id: "g4",
    title: "Katpana Cold Desert at Sunset",
    location: "Skardu, Gilgit-Baltistan",
    category: "Skardu",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80",
    widthClass: "col-span-12 md:col-span-6 lg:col-span-4"
  },
  {
    id: "g5",
    title: "Mahodand Alpine Lake",
    location: "Kalam Valley, Swat",
    category: "Swat",
    image: "https://images.unsplash.com/photo-1649279585660-b29ab13b93a8?auto=format&fit=crop&w=1000&q=80",
    widthClass: "col-span-12 md:col-span-6 lg:col-span-4"
  },
  {
    id: "g6",
    title: "Jahaz Banda High Meadows",
    location: "Kumrat Valley, Upper Dir",
    category: "Kumrat",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80",
    widthClass: "col-span-12 md:col-span-6 lg:col-span-6"
  },
  {
    id: "g7",
    title: "Arang Kel Fairy Tale Village",
    location: "Neelum Valley, Azad Kashmir",
    category: "Kashmir",
    image: "https://images.unsplash.com/photo-1659553761498-6a8728fbf281?auto=format&fit=crop&w=1000&q=80",
    widthClass: "col-span-12 md:col-span-6 lg:col-span-6"
  },
  {
    id: "g8",
    title: "Legendary Lake Saif-ul-Malook",
    location: "Naran, Kaghan Valley",
    category: "Naran",
    image: "https://images.unsplash.com/photo-1626685516371-a0ee93a0f370?auto=format&fit=crop&w=1000&q=80",
    widthClass: "col-span-12 md:col-span-6 lg:col-span-6"
  },
  {
    id: "g9",
    title: "Siri Paye High Pastures & Makra Peak",
    location: "Shogran, Kaghan Valley",
    category: "Shogran",
    image: "https://images.unsplash.com/photo-1565180044702-e2355668e302?auto=format&fit=crop&w=1000&q=80",
    widthClass: "col-span-12 md:col-span-6 lg:col-span-6"
  }
]

/**
 * CLIENT REVIEWS / TESTIMONIALS (Clearly editable)
 */
export const testimonials: Testimonial[] = [
  {
    id: "gmb1",
    name: "Dr. Hammad Tariq & Family",
    city: "Lahore",
    trip: "7-Day Hunza & Khunjerab Pass Family Tour",
    date: "1 month ago",
    rating: 5,
    comment: "Decent Travelers truly lived up to their name! Booked our trip from their Lahore office in Allama Iqbal Town. Traveling with elderly parents and two kids, my biggest worry was road safety and clean hotels. The Grand Cabin was spotlessly clean, the driver Uncle Aslam was gentle and respectful, and every hotel had 24-hour hot water. Best tour company in Pakistan!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    verified: true,
    source: "Google Review"
  },
  {
    id: "gmb2",
    name: "Malik Usman Ali",
    city: "Lahore",
    trip: "5-Day Swat & Kalam Corporate Group",
    date: "2 weeks ago",
    rating: 5,
    comment: "Excellent service and 100% professional staff. We traveled from Lahore to Swat and Kalam. The arrangements at Fizagat and Malam Jabba were extraordinary. Very decent environment suitable for families and corporates. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    verified: true,
    source: "Google Review"
  },
  {
    id: "gmb3",
    name: "Ayesha & Bilal Khan",
    city: "Karachi",
    trip: "Honeymoon Tour - Skardu & Shangrila",
    date: "3 weeks ago",
    rating: 5,
    comment: "Decent Travelers made our honeymoon in Skardu magical! From our private Prado pickup to the flower decor and candlelit dinner beside Lower Kachura Lake, everything felt like a dream. Genuine 5-star experience without any hidden charges.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    verified: true,
    source: "Google Review"
  },
  {
    id: "gmb4",
    name: "Saad Rehman (HR Director, TechPulse)",
    city: "Islamabad",
    trip: "Corporate Retreat - 42 Engineers to Malam Jabba",
    date: "2 months ago",
    rating: 5,
    comment: "Managing 42 software engineers on a winter tour is tough, but Decent Travelers handled logistics flawlessly. The Coasters were top notch, meals were warm and on time, and the bonfire musical night in Kalam was the highlight of our year.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    verified: true,
    source: "Google Review"
  },
  {
    id: "gmb5",
    name: "Zainab Mir & Friends",
    city: "Rawalpindi",
    trip: "5-Day Kumrat Valley & Jahaz Banda Girls Group",
    date: "1 month ago",
    rating: 5,
    comment: "We were a group of 6 female friends visiting Kumrat. The tour captain was extremely protective, professional and respectful. Zero awkwardness or hassle. Thank you for proving that girls can safely explore Northern Pakistan with Decent Travelers!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    verified: true,
    source: "Google Review"
  },
  {
    id: "gmb6",
    name: "Chaudhry Farhan",
    city: "Gujranwala / Lahore",
    trip: "Neelum Valley & Arang Kel Expedition",
    date: "3 weeks ago",
    rating: 5,
    comment: "One of the most trusted tourism agencies in Punjab. Smooth transport, honest commitments and respectful staff. If you are looking for safe and memorable northern trips with family, Decent Travelers is the right choice.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    verified: true,
    source: "Google Review"
  }
]

/**
 * FAQ ACCORDION ITEMS
 */
export const faqItems: FAQItem[] = [
  {
    id: "faq1",
    category: "booking",
    question: "How do I book a trip with Decent Travelers?",
    answer: "Booking is simple! Click any 'Book on WhatsApp' or 'Get Quote' button, or fill out the quick inquiry form below. Our tour coordinator will send you a complete day-wise itinerary, vehicle choice, and exact price quote. Once approved, pay a 25% to 30% advance via online bank transfer, Raast, or JazzCash to confirm."
  },
  {
    id: "faq2",
    category: "safety",
    question: "Is it safe for families, children and female travelers?",
    answer: "Safety and decency are the cornerstone of our company ('Decent Travelers'). We only hire vetted, disciplined mountain drivers who maintain calm speeds, carry satellite emergency contacts, and never compromise passenger safety. Our tours have a zero-tolerance policy for alcohol and inappropriate behavior."
  },
  {
    id: "faq3",
    category: "itinerary",
    question: "Can you customize private tours according to our dates and budget?",
    answer: "Yes, 100%! While we run scheduled group departures every weekend, over 70% of our tours are customized private family, honeymoon and corporate trips. You choose your pickup point (Islamabad, Rawalpindi, or Lahore), start dates, hotel standard (3★, 4★, or luxury resorts), and vehicle preference (Corolla, Prado, Grand Cabin, or Coaster)."
  },
  {
    id: "faq4",
    category: "pricing",
    question: "What is included in the package price?",
    answer: "Standard packages include: Dedicated tourist vehicle with all fuel, highway tolls & mountain driver expenses; 3★/4★ verified hotel accommodation; daily hearty breakfast & dinner; 4x4 off-road jeeps for points like Saif-ul-Malook, Deosai or Siri Paye; first-aid support and professional tour coordinator. Personal shopping, lunch and optional activities like jet-skiing or zipline are separate."
  },
  {
    id: "faq5",
    category: "booking",
    question: "What is your cancellation and refund policy?",
    answer: "If you notify us at least 7 days before departure, your advance is 100% refundable or transferable to any future trip. For cancellations between 3 to 6 days, a 50% refund applies. In case of unexpected weather road blocks or natural acts, we adjust routes safely without loss of hotel credits."
  },
  {
    id: "faq6",
    category: "itinerary",
    question: "What should we pack for Northern Pakistan trips?",
    answer: "Even in summer (June to August), nights in Hunza, Skardu and Babusar Top can get chilly (10°C to 15°C). Bring comfortable joggers/hiking shoes, warm jackets/shawls, sunblock, sunglasses, power banks, and original CNIC/passports for security checkpoints."
  }
]
