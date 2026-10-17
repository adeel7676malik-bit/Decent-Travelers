import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, BadgePercent, Bus, Compass, LifeBuoy, Hotel, CheckCircle, HeartHandshake, ArrowRight } from 'lucide-react'
import { whyChooseUsFeatures, siteConfig } from '../data/siteConfig'
import { WhatsAppIcon } from './SocialIcons'

const iconComponents: Record<string, React.ElementType> = {
  ShieldCheck,
  BadgePercent,
  Bus,
  Compass,
  LifeBuoy,
  Hotel,
}

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-10 sm:py-14 lg:py-16 bg-[#070707] text-white overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-teal/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Promise Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-brand-orange/40 text-brand-orange text-xs font-black uppercase tracking-widest mb-4 shadow-lg">
            <HeartHandshake className="w-4 h-4 text-brand-orange" />
            <span>The "Decent" Guarantee</span>
          </div>

          <h2 className="logo-font text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Why Hundreds of Families Trust{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow">
              Decent Travelers
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            In Urdu and Pakistani culture, <strong className="text-white">"Decent"</strong> stands for dignity, respect, wholesome family values, and unquestionable honesty. That is our founding vow on every single tour across Pakistan.
          </p>
        </div>

        {/* Feature Cards Grid (3 Columns, Perfect Alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsFeatures.map((feat, index) => {
            const Icon = iconComponents[feat.icon] || ShieldCheck

            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-neutral-900/90 rounded-3xl p-7 sm:p-8 border-2 border-neutral-800 hover:border-brand-orange shadow-xl hover:shadow-[0_0_30px_rgba(247,134,30,0.25)] transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Icon badge */}
                  <div className="w-14 h-14 rounded-2xl bg-neutral-950 border border-brand-orange/40 text-brand-orange flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:border-brand-orange transition-all">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-brand-orange transition-colors">
                    {feat.title}
                  </h3>

                  <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs font-bold text-brand-aqua">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span>Guaranteed on every booking</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Brand Guarantee Banner */}
        <div className="mt-16 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white rounded-3xl p-8 sm:p-10 border-2 border-brand-orange/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Orange Glow behind */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="px-3 py-1 rounded-full bg-brand-orange text-black font-extrabold text-xs uppercase tracking-wider">
                Family & Corporate Safe
              </span>
              <h3 className="logo-font text-2xl sm:text-3xl md:text-4xl text-white mt-3 leading-tight">
                "No awkward moments, no hidden cuts, no safety compromises."
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                Travel with your mothers, sisters, children, and colleagues with absolute peace of mind. Our coordinators ensure complete respect, punctuality, and verified hotel stays.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3 w-full">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Assalam-o-Alaikum Decent Travelers! I would like to speak to a tour coordinator about family tour safety and custom packages."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow hover:scale-105 active:scale-95 text-black font-black text-sm sm:text-base shadow-[0_0_25px_rgba(247,134,30,0.45)] transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 text-black" />
                <span>Speak to Tour Coordinator</span>
              </a>
              <span className="text-xs text-brand-aqua font-medium text-center">
                Average reply time: under 15 minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
