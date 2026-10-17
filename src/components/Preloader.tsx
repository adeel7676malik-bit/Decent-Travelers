import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '../data/siteConfig'

interface PreloaderProps {
  onComplete?: () => void
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Show award-level intro for 2.6 seconds on first load
    const timer = setTimeout(() => {
      setShow(false)
      if (onComplete) onComplete()
    }, 2400)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden select-none"
        >
          {/* Ambient background glowing sun */}
          <motion.div
            initial={{ scale: 0.3, opacity: 0, y: 100 }}
            animate={{ scale: 1.2, opacity: 0.85, y: -20 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-brand-orange via-brand-amber to-brand-yellow blur-3xl opacity-60"
          />

          {/* Layered mountain silhouette in background */}
          <div className="absolute bottom-0 inset-x-0 h-48 opacity-40 pointer-events-none">
            <svg viewBox="0 0 1200 300" className="w-full h-full object-cover text-[#141414] fill-current">
              <path d="M0 300 L0 180 L180 80 L350 210 L520 60 L720 220 L920 40 L1100 190 L1200 120 L1200 300 Z" />
            </svg>
          </div>

          {/* Central Logo & Badge animation */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md">
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -4 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.2, type: 'spring', bounce: 0.4 }}
              className="relative p-2"
            >
              <img
                src="/images/logo/decent-travelers-white.webp"
                alt="Decent Travelers"
                className="w-56 sm:w-64 h-auto drop-shadow-[0_15px_30px_rgba(247,134,30,0.4)]"
              />
            </motion.div>

            {/* Urdu Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-3 text-brand-aqua text-sm sm:text-base font-semibold tracking-wide"
            >
              چلو پاکستان کی خوبصورتی دیکھنے
            </motion.p>

            {/* English Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-xs sm:text-sm text-slate-300 font-medium tracking-widest uppercase mt-1"
            >
              {siteConfig.tagline}
            </motion.p>

            {/* Progress loading bar styled as highway road */}
            <div className="w-48 sm:w-64 h-1.5 bg-neutral-800 rounded-full mt-6 overflow-hidden relative border border-neutral-700">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-brand-teal via-brand-orange to-brand-yellow rounded-full shadow-[0_0_10px_#F7861E]"
              />
            </div>
          </div>

          {/* Animated bus passing along the bottom */}
          <div className="absolute bottom-6 inset-x-0 h-10 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ x: '-150%' }}
              animate={{ x: '120vw' }}
              transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.2 }}
              className="w-24 flex items-center gap-1"
            >
              {/* Bus icon / illustration */}
              <div className="bg-brand-teal text-white p-1.5 rounded-lg border-2 border-white shadow-lg flex items-center gap-1 text-[11px] font-bold">
                <span>🚌</span>
                <span>DECENT</span>
              </div>
            </motion.div>
            {/* Road divider */}
            <div className="absolute bottom-0 inset-x-0 border-b border-dashed border-neutral-700" />
          </div>

          {/* Quick Skip button */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-6 right-6 text-xs text-neutral-400 hover:text-white uppercase tracking-wider py-1 px-3 rounded-full border border-neutral-800 hover:border-neutral-600 transition-colors"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
