import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Mountain, CheckCircle2, ArrowUpRight, Sparkles, Phone, Compass } from 'lucide-react'
import { destinations, siteConfig } from '../data/siteConfig'
import { PakistanMap } from './PakistanMap'
import { Destination } from '../types'
import { WhatsAppIcon } from './SocialIcons'

export const Destinations: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<string>('All')
  const [activeDestinationId, setActiveDestinationId] = useState<string | null>('hunza')

  const provinces = ['All', 'Gilgit-Baltistan', 'KPK', 'Azad Kashmir']

  const filteredDestinations = destinations.filter((dest) =>
    selectedProvince === 'All' ? true : dest.province === selectedProvince
  )

  const handleGetQuote = (dest: Destination) => {
    const text = `Assalam-o-Alaikum Decent Travelers! I am interested in booking a tour to ${dest.name} (${dest.region}). Best season: ${dest.bestSeason}. Please send me the complete itinerary and pricing details.`
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section id="destinations" className="relative py-10 sm:py-14 lg:py-16 bg-[#0A0A0A] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Signature Valleys & Peaks</span>
            </div>
            <h2 className="logo-font text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              9 Majestic <span className="text-brand-orange">Destinations</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Explore the cold deserts of Skardu, the blossoms of Hunza, and the pine forests of Swat & Kashmir.
              Use the interactive Google Map below to inspect valleys in live satellite mode, or browse tour packages.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800 shrink-0">
            {provinces.map((prov) => (
              <button
                key={prov}
                onClick={() => setSelectedProvince(prov)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedProvince === prov
                    ? 'bg-brand-orange text-black font-extrabold shadow-md shadow-brand-orange/30'
                    : 'text-slate-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {prov}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Full-Width Interactive Google Satellite & Terrain Map */}
        <div className="mb-14">
          <PakistanMap
            destinations={destinations}
            activeId={activeDestinationId}
            onSelect={(id) => setActiveDestinationId(id)}
          />
        </div>

        {/* 2. Symmetric 3-Column Destination Cards Grid */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-neutral-800">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-yellow" />
              <span>Available Tour Packages ({filteredDestinations.length})</span>
            </h3>
            <span className="text-xs text-neutral-400">All packages customizable for private families & groups</span>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredDestinations.map((dest, index) => {
                const isActive = activeDestinationId === dest.id
                return (
                  <motion.div
                    layout
                    key={dest.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    onClick={() => setActiveDestinationId(dest.id)}
                    className={`group relative rounded-3xl overflow-hidden bg-neutral-900 border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                      isActive
                        ? 'border-brand-orange shadow-[0_0_30px_rgba(247,134,30,0.35)] -translate-y-1.5'
                        : 'border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 shadow-lg'
                    }`}
                  >
                    {/* Image Frame with Tilt / Zoom on hover */}
                    <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-neutral-950">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1640881193563-b5f0bf20019a?auto=format&fit=crop&w=1200&q=80'
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-black/75 backdrop-blur-md text-brand-aqua border border-white/20">
                          {dest.province}
                        </span>
                        {dest.tag && (
                          <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-brand-orange text-black shadow-md">
                            {dest.tag}
                          </span>
                        )}
                      </div>

                      {/* Starting Price Overlay */}
                      <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 text-xs font-bold text-brand-yellow">
                        Starting {dest.priceStartingFrom}
                      </div>

                      {/* Map Indicator Pill */}
                      {isActive && (
                        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-xl bg-brand-orange text-black font-extrabold text-[11px] shadow-lg flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                          <span>Active on Map</span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Name and Urdu Title */}
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="text-xl font-black text-white group-hover:text-brand-orange transition-colors">
                            {dest.name}
                          </h4>
                          {dest.urduName && (
                            <span className="text-sm font-semibold text-brand-aqua/80">
                              {dest.urduName}
                            </span>
                          )}
                        </div>

                        {/* Quick specs */}
                        <div className="flex flex-wrap items-center gap-3 mt-2.5 text-xs text-neutral-400">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                            <span>{dest.bestSeason}</span>
                          </div>
                          <span className="text-neutral-700">·</span>
                          <div className="flex items-center gap-1.5">
                            <Mountain className="w-3.5 h-3.5 text-brand-teal" />
                            <span>{dest.altitude}</span>
                          </div>
                        </div>

                        {/* Teaser */}
                        <p className="mt-3 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                          {dest.teaser}
                        </p>

                        {/* Highlights List */}
                        <div className="mt-4 pt-3.5 border-t border-neutral-800">
                          <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                            Key Attractions
                          </span>
                          <ul className="mt-2 space-y-1.5">
                            {dest.highlights.slice(0, 3).map((h, i) => (
                              <li key={i} className="text-xs text-slate-200 flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                                <span className="truncate">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA buttons: WhatsApp & Call */}
                      <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-2.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleGetQuote(dest)
                          }}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-extrabold text-xs sm:text-sm text-black bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md group-hover:shadow-[0_0_22px_rgba(247,134,30,0.5)]"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-black shrink-0" />
                          <span className="truncate">WhatsApp Quote</span>
                          <ArrowUpRight className="w-4 h-4 shrink-0" />
                        </button>

                        <a
                          href={`tel:${siteConfig.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-brand-teal hover:text-white border border-neutral-700 transition-colors flex items-center justify-center shrink-0 shadow-sm"
                          title={`Call helpline for ${dest.name}`}
                          aria-label={`Call helpline for ${dest.name}`}
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
