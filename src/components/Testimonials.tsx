import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react'
import { testimonials, siteConfig } from '../data/siteConfig'
import { GoogleIcon } from './SocialIcons'

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const nextReview = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevReview = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section id="reviews" className="relative py-10 sm:py-14 lg:py-16 bg-[#0A0A0A] overflow-hidden text-white">
      {/* Sun glow backdrop */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
            <span>Real Traveler Stories</span>
          </div>

          <h2 className="logo-font text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Loved By Over <span className="text-brand-orange">12,500+ Explorers</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Read heartfelt experiences from families, doctors, tech companies and newlyweds who toured Northern Pakistan with Decent Travelers.
          </p>
        </div>

        {/* Big Highlighted Carousel Review */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl bg-neutral-900/90 border-2 border-brand-orange/50 p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-md"
            >
              <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 text-brand-orange/20" />

              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < current.rating
                        ? 'fill-brand-yellow text-brand-yellow drop-shadow-[0_0_8px_rgba(255,229,0,0.6)]'
                        : 'text-neutral-700'
                    }`}
                  />
                ))}
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-neutral-800 border border-white/20 text-brand-aqua flex items-center gap-1">
                    <span className="text-[#4285F4] font-black">G</span>
                    <span>{current.source || 'Google Review'}</span>
                  </span>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                    Verified Trip
                  </span>
                </div>
              </div>

              {/* Comment */}
              <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed italic font-normal">
                "{current.comment}"
              </p>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
                    }}
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-orange shadow-md"
                  />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-1.5">
                      <span>{current.name}</span>
                      {current.verified && (
                        <CheckCircle className="w-4 h-4 text-brand-teal fill-brand-teal/20" />
                      )}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      {current.city} • <span className="text-brand-orange">{current.trip}</span>
                    </p>
                  </div>
                </div>

                <div className="text-xs text-neutral-500 font-medium">
                  {current.date}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlay(false)
                    setCurrentIndex(idx)
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-brand-orange shadow-[0_0_10px_#F7861E]'
                      : 'w-2.5 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevReview}
                className="p-3 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:border-brand-orange hover:text-brand-orange transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="p-3 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:border-brand-orange hover:text-brand-orange transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Google My Business Dual Trust CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* 1. Direct Link to Write / Read Reviews on GMB */}
            <a
              href={siteConfig.googleReviewsUrl || siteConfig.googleMyBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border-2 border-brand-yellow/60 hover:border-brand-yellow text-white text-xs sm:text-sm font-bold shadow-xl transition-all hover:scale-105 group"
            >
              <GoogleIcon className="w-5 h-5 shrink-0" />
              <span className="flex items-center gap-1 text-brand-yellow">
                <Star className="w-3.5 h-3.5 fill-brand-yellow" />
                <Star className="w-3.5 h-3.5 fill-brand-yellow" />
                <Star className="w-3.5 h-3.5 fill-brand-yellow" />
                <Star className="w-3.5 h-3.5 fill-brand-yellow" />
                <Star className="w-3.5 h-3.5 fill-brand-yellow" />
              </span>
              <span>Rate & Review on Google</span>
              <span className="text-brand-orange group-hover:translate-x-1 transition-transform">
                ✍️ Write Review ↗
              </span>
            </a>

            {/* 2. Direct Link to Google Business Profile */}
            <a
              href={siteConfig.googleMyBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-neutral-950 border border-neutral-700 hover:border-white/40 text-slate-300 hover:text-white text-xs font-semibold transition-all hover:scale-105"
            >
              <GoogleIcon className="w-4 h-4 shrink-0" />
              <span>Open Google Business Listing ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
