import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, MessageSquareQuote, CreditCard, Smile, ArrowRight, CheckCircle2 } from 'lucide-react'
import { howItWorksSteps, siteConfig } from '../data/siteConfig'

const stepIcons: Record<string, React.ElementType> = {
  MapPin,
  MessageSquareQuote,
  CreditCard,
  Smile,
}

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-10 sm:py-14 lg:py-16 bg-[#0A0A0A] overflow-hidden text-white">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <span>Seamless Booking Process</span>
          </div>
          <h2 className="logo-font text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            How It <span className="text-brand-orange">Works</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            From your first message to stepping into the majestic valleys of Northern Pakistan in 4 effortless steps.
          </p>
        </div>

        {/* Mountain Road Timeline */}
        <div className="relative">
          {/* Desktop Connecting Highway Road Line (Through center of milestone circles) */}
          <div className="hidden lg:block absolute top-10 left-16 right-16 -translate-y-1/2 h-2.5 bg-neutral-800 rounded-full z-0 overflow-hidden">
            <div className="h-full bg-repeat-x bg-[linear-gradient(90deg,#FFE500_0px,#FFE500_15px,transparent_15px,transparent_30px)] road-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {howItWorksSteps.map((step, idx) => {
              const Icon = stepIcons[step.icon] || MapPin

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step Milestone Circle */}
                  <div className="relative mb-6">
                    {/* Glowing outer shadow ring */}
                    <div className="w-20 h-20 rounded-full bg-neutral-900 border-4 border-brand-orange flex items-center justify-center text-white shadow-[0_0_25px_rgba(247,134,30,0.4)] group-hover:scale-110 group-hover:border-brand-yellow transition-all duration-300 relative">
                      <Icon className="w-8 h-8 text-brand-orange group-hover:text-brand-yellow transition-colors" />

                      {/* Number badge */}
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-tr from-brand-orange to-brand-yellow text-black font-black text-xs flex items-center justify-center shadow-md">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Step Card Content */}
                  <div className="p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 group-hover:border-brand-orange/40 transition-colors w-full flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-center gap-1.5 text-[11px] text-brand-aqua font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Instant confirmation</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-14 text-center">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              "Hello Decent Travelers! I want a free custom quote for my upcoming trip."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow text-black font-extrabold text-sm shadow-[0_0_25px_rgba(247,134,30,0.5)] hover:scale-105 active:scale-95 transition-all"
          >
            <span>Start Step 1: Request Free Itinerary</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
