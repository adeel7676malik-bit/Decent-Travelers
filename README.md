# 🏔️ Decent Travelers - Award-Level Northern Pakistan Travel Website

An award-winning, responsive, single-page travel web application crafted for **Decent Travelers**, a Pakistani tour operator running premium trips across Northern Pakistan (Gilgit-Baltistan, Khyber Pakhtunkhwa, and Azad Kashmir).

Derived directly from the official **Decent Travelers** emblem, featuring sunset orange, radiant amber-yellow sun gradients, turquoise/teal mountain accents, rich dark modes, and sticker/badge styling.

---

## ⚡ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom brand tokens, badge stickers, and glassmorphic utilities
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (parallax mountains, floating elements, smooth entry preloader, micro-interactions)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactions**: Interactive illustrated map of Northern Pakistan, Confetti celebration (`canvas-confetti`), WhatsApp booking generator, and custom glowing orange cursor

---

## 🚀 Quick Start

1. **Install dependencies** (already installed in this repository):
   ```bash
   npm install
   ```

2. **Run local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at: `http://localhost:5173/`

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🎨 Brand Identity & Logos

The logos are located in `public/images/logo/`:
1. `decent-travelers-white.webp` — Used in the Sticky Navbar, Hero, Intro Preloader, and Footer.
2. `decent-travelers-black.webp` — Used for high-contrast sticker badges and light background elements.

### Color Tokens:
- **Base Deep Black**: `#0A0A0A`
- **Sunset Orange (Primary)**: `#F7861E`
- **Sun Gradient**: `#FF8A00` → `#FFE500`
- **Teal & Soft Aqua**: `#18A999` & `#7ED6D3`
- **Card Surfaces**: `#121212` & `#1A1A1A`

---

## 📂 Project Structure

```
e:/Decent Trevelers/
├── public/
│   └── images/
│       └── logo/
│           ├── decent-travelers-white.webp
│           └── decent-travelers-black.webp
├── src/
│   ├── components/
│   │   ├── Preloader.tsx        # Award-level sun & bus page-load intro
│   │   ├── CustomCursor.tsx     # Desktop orange glowing cursor with hover physics
│   │   ├── Navbar.tsx           # Sticky glassmorphic nav + mobile drawer
│   │   ├── Hero.tsx             # Parallax mountains, glowing sun, animated highway bus, stats
│   │   ├── Destinations.tsx     # 9 signature valleys + bento grid + quote triggers
│   │   ├── PakistanMap.tsx      # Interactive illustrated map with synced pins
│   │   ├── TripTypes.tsx        # Family, Corporate, Honeymoon, Educational, Overseas
│   │   ├── WhyUs.tsx            # "Decent" brand promise (safe, respectful, transparent)
│   │   ├── HowItWorks.tsx       # 4-step mountain road animated timeline
│   │   ├── Gallery.tsx          # Masonry with lightbox & destination filter
│   │   ├── Testimonials.tsx     # Client review slider (clearly editable)
│   │   ├── FAQ.tsx              # Comprehensive expandable accordion
│   │   ├── ContactBooking.tsx   # Instant WhatsApp inquiry form + direct channels
│   │   ├── Footer.tsx           # Logo, Urdu motto, quick links & socials
│   │   ├── FloatingWhatsApp.tsx # Floating WhatsApp chat launcher with notification
│   │   └── MountainDivider.tsx  # Organic mountain ridge SVG dividers
│   ├── data/
│   │   └── siteConfig.ts        # ⭐ SINGLE FILE TO EDIT ALL BUSINESS & TOUR DATA
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── App.tsx                  # One-page application assembling all sections
│   ├── index.css                # Tailwind directives & design tokens
│   └── main.tsx                 # Entry point
├── index.html                   # SEO tags, Google Fonts, JSON-LD TravelAgency schema
├── tailwind.config.js           # Extended theme configuration
├── vite.config.ts               # Vite configuration
└── package.json
```

---

## 🛠️ How to Edit Details (Single-File Configuration)

Open `src/data/siteConfig.ts` to edit everything without touching React components:

### 1. Change WhatsApp & Phone Numbers:
```typescript
export const siteConfig = {
  phone: "+923001234567",
  displayPhone: "+92 300 1234567",
  whatsappNumber: "923001234567", // without '+' or spaces
  whatsappDisplay: "+92 300 1234567",
  email: "info@decenttravelers.com",
  address: "Office #14, 2nd Floor, Executive Heights, Blue Area, Islamabad, Pakistan",
  // ...
}
```

### 2. Update Stats Counter Numbers:
```typescript
stats: {
  happyTravelers: "12500", // Displays as 12,500+ with scroll count-up
  tripsCompleted: "480",
  destinationsCount: "9",
  yearsExperience: "8",
  satisfactionRate: "99.4"
}
```

### 3. Add or Modify Destinations:
Inside `destinations`:
```typescript
{
  id: "hunza",
  name: "Hunza Valley",
  urduName: "وادی ہنزہ",
  region: "Gilgit-Baltistan",
  province: "Gilgit-Baltistan",
  bestSeason: "April - November",
  teaser: "Ancient fairy-tale kingdoms, turquoise Attabad Lake...",
  image: "https://your-image-url-here.jpg",
  highlights: ["Attabad Lake", "Passu Cones", "Altit Fort"],
  priceStartingFrom: "PKR 38,000",
  mapCoords: { x: 58, y: 22 }
}
```

### 4. Edit Reviews / Testimonials:
Inside `testimonials` in `siteConfig.ts`:
```typescript
{
  id: "t1",
  name: "Dr. Hammad Tariq & Family",
  city: "Lahore",
  trip: "7-Day Hunza & Khunjerab Pass Family Tour",
  rating: 5,
  comment: "Your review text here..."
}
```

---

## 📱 Mobile Responsiveness & Performance

- **Mobile First**: Tested and optimized for WhatsApp/Instagram referral traffic on mobile viewports.
- **Lazy Loaded Images**: High-resolution imagery loads with native lazy loading.
- **Fast First Paint**: Instant preloader animation keeps users engaged while assets load smoothly.
- **SEO & Social Sharing**: Complete Open Graph metadata and structured JSON-LD TravelAgency markup for Google search.
