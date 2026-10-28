import React from 'react'
import { Preloader } from './components/Preloader'
import { CustomCursor } from './components/CustomCursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Destinations } from './components/Destinations'
import { TripTypes } from './components/TripTypes'
import { InternationalTours } from './components/InternationalTours'
import { WhyUs } from './components/WhyUs'
import { HowItWorks } from './components/HowItWorks'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { ContactBooking } from './components/ContactBooking'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { MobileStickyBar } from './components/MobileStickyBar'
import { MountainDivider } from './components/MountainDivider'

export function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 flex flex-col font-sans selection:bg-brand-orange selection:text-black">
      {/* 1. Award-level Page Load Preloader */}
      <Preloader />

      {/* 2. Custom Glowing Desktop Cursor */}
      <CustomCursor />

      {/* 3. Sticky Glassmorphic Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: 9 Destinations & Interactive Map */}
        <Destinations />

        {/* Mountain Divider into Trip Types */}
        <MountainDivider fillColor="#0D0D0D" backgroundColor="#0A0A0A" />

        {/* Section 4: Trip Types (Specialized Trip Categories) */}
        <TripTypes />

        {/* Mountain Divider into International Tours */}
        <MountainDivider fillColor="#0A0A0A" backgroundColor="#0D0D0D" />

        {/* Section 5: International Tours (Baku, Azerbaijan, Turkey, Malaysia, Singapore, Bali) */}
        <InternationalTours />

        {/* Mountain Divider into Why Us */}
        <MountainDivider fillColor="#070707" backgroundColor="#0A0A0A" />

        {/* Section 6: Why Choose Us ("Decent" Brand Promise) */}
        <WhyUs />

        {/* Mountain Divider into How It Works */}
        <MountainDivider fillColor="#0A0A0A" backgroundColor="#070707" />

        {/* Section 6: How It Works (Mountain Road Animated Timeline) */}
        <HowItWorks />

        {/* Mountain Divider into Gallery */}
        <MountainDivider fillColor="#0D0D0D" backgroundColor="#0A0A0A" />

        {/* Section 7: Curated Gallery with Lightbox */}
        <Gallery />

        {/* Mountain Divider into Testimonials */}
        <MountainDivider fillColor="#0A0A0A" backgroundColor="#0D0D0D" />

        {/* Section 8: Testimonials / Reviews */}
        <Testimonials />

        {/* Mountain Divider into FAQ */}
        <MountainDivider fillColor="#0D0D0D" backgroundColor="#0A0A0A" />

        {/* Section 9: FAQ Accordion */}
        <FAQ />

        {/* Mountain Divider into Contact & Booking */}
        <MountainDivider fillColor="#0A0A0A" backgroundColor="#0D0D0D" />

        {/* Section 10: Contact & Instant WhatsApp Booking Engine */}
        <ContactBooking />
      </main>

      {/* Section 11: Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingWhatsApp />

      {/* Mobile-Only Persistent Bottom Sticky Bar (Call + WhatsApp + Quick Quote) */}
      <MobileStickyBar />
    </div>
  )
}

export default App
