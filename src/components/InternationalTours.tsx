import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Globe2, 
  Plane, 
  FileCheck2, 
  Hotel, 
  MapPin, 
  Calendar, 
  Check, 
  ArrowRight, 
  Sparkles, 
  PhoneCall,
  ShieldCheck,
  Compass
} from 'lucide-react'
import { internationalTours, siteConfig } from '../data/siteConfig'
import { InternationalTour } from '../types'
import { WhatsAppIcon } from './SocialIcons'

export const InternationalTours: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'caucasus' | 'asia'>('all')

  const filteredTours = internationalTours.filter((tour) => {
    if (selectedFilter === 'caucasus') {
      return tour.id === 'baku' || tour.id === 'turkey' || tour.id === 'azerbaijan-regions'
    }
    if (selectedFilter === 'asia') {
      return tour.id === 'malaysia' || tour.id === 'singapore' || tour.id === 'bali'
    }
    return true
  })

  const handleWhatsAppInquiry = (tour: InternationalTour) => {
    const text = `Assalam-o-Alaikum Decent Travelers! I am interested in your "${tour.name} (${tour.country})" International Tour Package (${tour.duration}). Please share detailed itinerary, package cost per person/couple, and visa requirements.`
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section 
      id="international-tours" 
      className="relative py-12 sm:py-16 lg:py-20 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background Ambient World Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px]" />
        <div className="w-full h-full bg-[radial-gradient(#18A999_1px,transparent_1px)] [background-size:36px_36px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            SECTION HEADER
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3.5">
            <Globe2 className="w-4 h-4 text-brand-orange animate-spin-slow" />
            <span>Worldwide Journeys & Visa Support</span>
          </div>

          <h2 className="logo-font text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            International <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow">Tours & Vacations</span>
          </h2>

          <p className="mt-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
            Travel beyond borders with the trusted hospitality of Decent Travelers. From the flame-lit boulevards of Baku and fairytale skies of Cappadocia to the futuristic skyline of Singapore and tropical beaches of Bali.
          </p>

          {/* 4 Value Badges */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto text-left">
            <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center shrink-0">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Visa Guidance</p>
                <p className="text-[10px] text-neutral-400">E-Visa & Filing</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-brand-teal/15 text-brand-teal flex items-center justify-center shrink-0">
                <Plane className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Flights Assistance</p>
                <p className="text-[10px] text-neutral-400">Best Route & Fares</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-amber-400/15 text-amber-300 flex items-center justify-center shrink-0">
                <Hotel className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">4★ & 5★ Hotels</p>
                <p className="text-[10px] text-neutral-400">Verified Luxury Stays</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-xl bg-brand-aqua/15 text-brand-aqua flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Family Safe</p>
                <p className="text-[10px] text-neutral-400">Dedicated Chauffeurs</p>
              </div>
            </div>
          </div>

          {/* Destination Category Filter Tabs */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-[#141414] border border-white/10 shadow-lg">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedFilter === 'all'
                  ? 'bg-gradient-to-r from-brand-orange to-brand-amber text-black shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All 6 Destinations
            </button>
            <button
              onClick={() => setSelectedFilter('caucasus')}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedFilter === 'caucasus'
                  ? 'bg-gradient-to-r from-brand-orange to-brand-amber text-black shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Baku & Turkey
            </button>
            <button
              onClick={() => setSelectedFilter('asia')}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedFilter === 'asia'
                  ? 'bg-gradient-to-r from-brand-orange to-brand-amber text-black shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Malaysia, Singapore & Bali
            </button>
          </div>
        </div>

        {/* =========================================================================
            6 INTERNATIONAL DESTINATION CARDS GRID (3x2 on desktop, 1x6 mobile)
            ========================================================================= */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredTours.map((tour, idx) => (
              <motion.div
                key={tour.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-3xl bg-[#121212] border border-white/10 hover:border-brand-orange/60 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(247,134,30,0.18)]"
              >
                {/* Image Cover Container */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={tour.image}
                    alt={`${tour.name}, ${tour.country}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback gradient if offline or link broken
                      e.currentTarget.style.display = 'none'
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.classList.add(
                          'bg-gradient-to-br',
                          'from-brand-orange/30',
                          'via-neutral-900',
                          'to-brand-teal/30'
                        )
                      }
                    }}
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white shadow-lg">
                      <Calendar className="w-3 h-3 text-brand-orange" />
                      <span>{tour.duration}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-orange/90 text-black text-[11px] font-extrabold shadow-lg">
                      <Sparkles className="w-3 h-3 text-black" />
                      <span>{tour.badge}</span>
                    </span>
                  </div>

                  {/* Destination Title on Image Bottom */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-2xl sm:text-3xl font-black text-white logo-font tracking-tight drop-shadow-md">
                        {tour.name}
                      </h3>
                      <span className="text-xs font-bold text-brand-aqua flex items-center gap-1 bg-black/60 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm">
                        <MapPin className="w-3 h-3 text-brand-aqua" />
                        <span>{tour.country}</span>
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 font-medium line-clamp-1 mt-0.5">
                      {tour.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Visa Info Strip */}
                    <div className="mb-4 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <p className="text-[11px] text-slate-300 font-medium leading-tight">
                        <strong className="text-amber-300 font-bold">Visa: </strong> 
                        {tour.visaInfo}
                      </p>
                    </div>

                    {/* Highlights List */}
                    <div className="mb-4">
                      <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold mb-2 flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-brand-orange" />
                        <span>Tour Highlights:</span>
                      </p>
                      <ul className="space-y-1.5">
                        {tour.highlights.slice(0, 4).map((hl, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Package Inclusions Pills */}
                    <div className="mb-5 pt-3 border-t border-white/10">
                      <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                        Included in Package:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {tour.includes.slice(0, 3).map((inc, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] font-medium text-neutral-300 px-2 py-0.5 rounded-md bg-white/5 border border-white/10"
                          >
                            {inc}
                          </span>
                        ))}
                        <span className="text-[10px] font-bold text-brand-teal px-2 py-0.5 rounded-md bg-brand-teal/10 border border-brand-teal/20">
                          + Full Support
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA Row */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-2.5">
                    {/* WhatsApp Inquiry Button */}
                    <button
                      onClick={() => handleWhatsAppInquiry(tour)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow hover:from-brand-amber hover:to-brand-yellow text-black font-black text-xs transition-all duration-300 shadow-md hover:shadow-glow-orange group/btn active:scale-95"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-black group-hover/btn:rotate-12 transition-transform" />
                      <span>Inquire on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Quick Call Icon Button */}
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="w-10 h-10 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors active:scale-95 shrink-0"
                      title={`Call Helpline: ${siteConfig.displayPhone}`}
                      aria-label={`Call helpline for ${tour.name}`}
                    >
                      <PhoneCall className="w-4 h-4 text-brand-teal" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* =========================================================================
            BOTTOM CUSTOM INTERNATIONAL TOUR BANNER
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#141414] via-[#1A1A1A] to-[#141414] border border-white/15 relative overflow-hidden"
        >
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-teal/15 border border-brand-teal/30 text-brand-aqua text-[11px] font-bold uppercase tracking-wider mb-2">
                Custom International Itineraries
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white logo-font">
                Planning a Combo or Custom Overseas Vacation?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Want a Baku + Shahdag combo, a Turkey Istanbul + Cappadocia honeymoon, or a Malaysia + Singapore family tour? Our international travel consultants will prepare custom day-by-day itineraries tailored to your dates, hotel class, and family budget.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Assalam-o-Alaikum Decent Travelers! I want to plan a customized international tour (Baku / Turkey / Malaysia / Singapore / Bali). Please share details."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-black text-black bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow hover:scale-105 active:scale-95 transition-all duration-300 shadow-glow-orange"
              >
                <WhatsAppIcon className="w-4 h-4 text-black" />
                <span>Get 15-Min Custom Quote</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-brand-teal" />
                <span>Call: {siteConfig.displayPhone}</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
