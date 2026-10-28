export interface Destination {
  id: string
  name: string
  urduName?: string
  region: string
  province: 'Gilgit-Baltistan' | 'KPK' | 'Azad Kashmir'
  bestSeason: string
  duration: string
  altitude: string
  teaser: string
  description: string
  image: string
  highlights: string[]
  priceStartingFrom: string
  mapCoords: { x: number; y: number } // Percentage on custom northern map
  tag?: string
}

export interface TripType {
  id: string
  title: string
  subtitle: string
  description: string
  badge: string
  accentColor: string
  iconName: string
  features: string[]
  idealFor: string
  popularDestination: string
  image: string
}

export interface InternationalTour {
  id: string
  name: string
  country: string
  tagline: string
  duration: string
  badge: string
  accentColor: string
  image: string
  highlights: string[]
  includes: string[]
  bestFor: string
  visaInfo: string
}

export interface Testimonial {
  id: string
  name: string
  city: string
  trip: string
  date: string
  rating: number
  comment: string
  avatar: string
  verified: boolean
  source?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'booking' | 'safety' | 'pricing' | 'itinerary'
}

export interface GalleryItem {
  id: string
  title: string
  location: string
  category: string
  image: string
  widthClass?: string
}

export interface SiteConfig {
  companyName: string
  tagline: string
  urduTagline: string
  phone: string
  displayPhone: string
  whatsappNumber: string
  whatsappDisplay: string
  whatsappDefaultMessage: string
  email: string
  companyDescription: string
  address: string
  googleMapsUrl?: string
  googleMyBusinessUrl?: string
  googleReviewsUrl?: string
  officeHours: string
  socials: {
    facebook: string
    instagram: string
    tiktok: string
    youtube: string
    whatsapp: string
  }
  sinceYear?: string
  stats: {
    happyTravelers: string
    tripsCompleted: string
    destinationsCount: string
    tripTypesCount?: string
    yearsExperience: string
    satisfactionRate: string
  }
}
