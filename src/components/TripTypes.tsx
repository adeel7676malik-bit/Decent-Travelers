import React from 'react'
import { motion } from 'framer-motion'
import { Users, Briefcase, Heart, GraduationCap, Globe, Check, ArrowRight, ShieldCheck, Phone } from 'lucide-react'
import { tripTypes, siteConfig } from '../data/siteConfig'
import { TripType } from '../types'
import { WhatsAppIcon } from './SocialIcons'

const iconMap: Record<string, React.ElementType> = {
  Users,
  Briefcase,
  Heart,
  GraduationCap,
  Globe,
}

export const TripTypes: React.FC = () => {
  const handleInquiry = (trip: TripType) => {
    const text = `Assalam-o-Alaikum Decent Travelers! I am inquiring about your "${trip.title}" (${trip.subtitle}). Please share available packages, vehicle options, and quotation.`
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section id="trips" className="relative py-10 sm:py-14 lg:py-16 bg-[#0D0D0D] overflow-hidden">
      {/* Mountain outline ambient background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#F7861E_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Tailored For Every Traveler</span>
          </div>
          <h2 className="logo-font text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Specialized <span className="text-brand-orange">Trip Categories</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal">
            Whether it's an intimate honeymoon, a fun-filled family vacation, a corporate leadership retreat, or an overseas visit, we craft every journey with precision and warmth.
          </p>
        </div>

        {/* 5 Striking Cards Balanced Grid (Row 1: 3 cards, Row 2: 2 cards centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {tripTypes.map((trip, idx) => {
            const Icon = iconMap[trip.iconName] || Users
            const isHoneymoon = trip.id === 'honeymoon'
            const isCorporate = trip.id === 'corporate'
            const isWideOnDesktop = idx >= 3

            return (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 group border-2 ${
                  isWideOnDesktop
                    ? 'lg:col-span-3'
                    : 'lg:col-span-2'
                } ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-3' : ''
                } ${
                  isHoneymoon
                    ? 'bg-gradient-to-b from-rose-950/30 to-neutral-900 border-rose-500/40 hover:border-rose-400 shadow-[0_0_30px_rgba(244,63,94,0.15)]'
                    : isCorporate
                    ? 'bg-gradient-to-b from-[#141E28]/40 to-neutral-900 border-brand-teal/40 hover:border-brand-teal shadow-[0_0_30px_rgba(24,169,153,0.15)]'
                    : 'bg-neutral-900/90 border-neutral-800 hover:border-brand-orange/60 shadow-xl'
                }`}
              >
                {/* Visual accent top line */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 ${
                    isHoneymoon
                      ? 'bg-gradient-to-r from-rose-500 via-pink-400 to-rose-600'
                      : isCorporate
                      ? 'bg-gradient-to-r from-brand-teal via-brand-aqua to-cyan-500'
                      : 'bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow'
                  }`}
                />

                <div>
                  {/* Photography Cover Image for Trip Category */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-5 bg-neutral-950 border border-white/10 group-hover:border-white/20 transition-colors">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1640881193563-b5f0bf20019a?auto=format&fit=crop&w=800&q=80'
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                    {/* Floating Category Icon & Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div
                        className={`p-2 rounded-xl border-2 shadow-lg backdrop-blur-md ${
                          isHoneymoon
                            ? 'bg-rose-950/80 border-rose-400 text-rose-300'
                            : isCorporate
                            ? 'bg-teal-950/80 border-brand-teal text-brand-aqua'
                            : 'bg-neutral-950/80 border-brand-orange text-brand-orange'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md border ${
                          isHoneymoon
                            ? 'bg-rose-950/80 text-rose-300 border-rose-500/40'
                            : isCorporate
                            ? 'bg-teal-950/80 text-brand-aqua border-teal-500/40'
                            : 'bg-neutral-950/80 text-brand-orange border-brand-orange/40'
                        }`}
                      >
                        {trip.badge}
                      </span>
                    </div>

                    {/* Popular Route Tag */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                      <span className="text-neutral-300 font-medium">Popular:</span>
                      <span className="font-bold text-brand-yellow truncate">{trip.popularDestination}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-black text-white group-hover:text-brand-orange transition-colors">
                    {trip.title}
                  </h3>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">
                    {trip.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {trip.description}
                  </p>

                  {/* Ideal for tag */}
                  <div className="mt-4 p-2.5 rounded-xl bg-black/40 border border-white/5 text-xs text-neutral-300 flex items-center gap-2">
                    <span className="font-bold text-brand-yellow">Ideal For:</span>
                    <span className="truncate">{trip.idealFor}</span>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      What's Included:
                    </span>
                    <ul className="mt-3 space-y-2">
                      {trip.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isHoneymoon
                                ? 'text-rose-400'
                                : isCorporate
                                ? 'text-brand-teal'
                                : 'text-brand-orange'
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3 text-xs text-neutral-400">
                    <span>Popular Route:</span>
                    <span className="font-bold text-white">{trip.popularDestination}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleInquiry(trip)}
                      className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                        isHoneymoon
                          ? 'bg-rose-500 hover:bg-rose-400 text-white shadow-rose-900/40'
                          : isCorporate
                          ? 'bg-brand-teal hover:bg-teal-400 text-black shadow-teal-900/40 font-extrabold'
                          : 'bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow text-black hover:opacity-95'
                      }`}
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" />
                      <span className="truncate">Inquire WhatsApp</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>

                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="p-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-brand-teal hover:text-white border border-neutral-700 transition-colors flex items-center justify-center shrink-0"
                      title={`Call helpline for ${trip.title}`}
                      aria-label={`Call for ${trip.title}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
