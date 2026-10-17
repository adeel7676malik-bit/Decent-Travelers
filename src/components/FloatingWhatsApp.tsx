import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { WhatsAppIcon } from './SocialIcons'

export { WhatsAppIcon }

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true)

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`

  return (
    <aside
      aria-label="Quick contact channels"
      className="fixed bottom-20 md:bottom-7 right-4 sm:right-7 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Subtle speech bubble tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-[#0A0A0A]/95 border border-brand-orange/40 text-white p-3 rounded-2xl shadow-2xl max-w-[210px] text-xs relative backdrop-blur-xl mb-1"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 right-1.5 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-1.5 text-brand-orange font-bold text-[11px] mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Tour Specialist Online</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-tight">
              Planning a trip? Call helpline or message on WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. FLOATING CALL BUTTON (Directly Above WhatsApp) */}
      <div className="relative group flex items-center">
        {/* Desktop Hover Label */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-neutral-900/95 border border-brand-orange/40 text-white text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-md hidden sm:block">
          Call Helpline: {siteConfig.displayPhone}
        </span>

        <motion.a
          href={`tel:${siteConfig.phone}`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-gradient-to-tr from-brand-orange via-brand-amber to-brand-yellow text-black shadow-[0_0_25px_rgba(247,134,30,0.55)] border-2 border-white focus:outline-none transition-all cursor-pointer group"
          aria-label={`Call Decent Travelers Helpline at ${siteConfig.displayPhone}`}
          title={`Call 24/7 Helpline: ${siteConfig.displayPhone}`}
        >
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-black group-hover:scale-110 group-hover:rotate-12 transition-transform" />

          {/* Soft pulsing glow ring */}
          <span className="absolute -inset-1 rounded-full border-2 border-brand-orange animate-ping opacity-40 pointer-events-none" />

          {/* 24/7 Badge */}
          <span className="absolute -top-1 -left-1 px-1.5 py-0.5 rounded-full bg-[#0A0A0A] border border-brand-orange text-[9px] font-black text-brand-yellow shadow-md pointer-events-none">
            24/7
          </span>
        </motion.a>
      </div>

      {/* 2. FLOATING WHATSAPP BUTTON */}
      <div className="relative group flex items-center">
        {/* Desktop Hover Label */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-neutral-900/95 border border-emerald-500/40 text-emerald-300 text-xs font-bold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-md hidden sm:block">
          WhatsApp Chat
        </span>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_25px_rgba(37,211,102,0.55)] border-2 border-white focus:outline-none transition-all cursor-pointer group"
          aria-label="Chat with Decent Travelers on WhatsApp"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />

          {/* Soft pulsing glow ring */}
          <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] animate-ping opacity-40 pointer-events-none" />

          {/* Online Indicator Badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-brand-yellow border-2 border-neutral-950" />
        </motion.a>
      </div>
    </aside>
  )
}
