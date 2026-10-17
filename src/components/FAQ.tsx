import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'
import { faqItems, siteConfig } from '../data/siteConfig'
import { WhatsAppIcon } from './SocialIcons'

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq1')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  const filteredFaqs = faqItems.filter((item) =>
    categoryFilter === 'all' ? true : item.category === categoryFilter
  )

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="relative py-10 sm:py-14 lg:py-16 bg-[#0D0D0D] overflow-hidden text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>

          <h2 className="logo-font text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Everything you need to know about pricing, security, packing, vehicles, and booking terms.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'booking', label: 'Booking & Payment' },
              { id: 'safety', label: 'Safety & Family' },
              { id: 'itinerary', label: 'Itineraries & Packing' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  categoryFilter === cat.id
                    ? 'bg-brand-orange text-black font-extrabold shadow-md'
                    : 'bg-neutral-900 text-slate-300 hover:text-white border border-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-900 border-brand-orange shadow-[0_0_20px_rgba(247,134,30,0.25)]'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-brand-orange text-black rotate-180' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-neutral-800/80 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/80 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white">Have a custom question or specific date?</h4>
            <p className="text-xs text-neutral-400">Our senior tour guide is available 24/7 on WhatsApp</p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              "Assalam-o-Alaikum Decent Travelers! I have a question about planning a trip to Northern Pakistan."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-teal hover:bg-brand-aqua text-black font-extrabold text-xs shadow-md transition-all shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 text-black" />
            <span>Ask Us Directly</span>
          </a>
        </div>
      </div>
    </section>
  )
}
