import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Compass, ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from './SocialIcons'
import { siteConfig } from '../data/siteConfig'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Trip Types', href: '#trips' },
    { name: 'International', href: '#international-tours' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ]

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* 1. Slim Single-Line Top Bar (Dismissible, Desktop phone & WhatsApp on right) */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#070707]/95 border-b border-white/5 py-1 px-4 text-[11px] sm:text-xs text-neutral-300 backdrop-blur-md overflow-hidden"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
              {/* Left teaser */}
              <div className="flex items-center gap-2 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                <span className="font-semibold text-brand-yellow shrink-0">
                  Northern Pakistan Tours:
                </span>
                <span className="truncate text-slate-300">
                  Spring & Summer 2026 bookings open · Custom itineraries & 15-min WhatsApp quotes
                </span>
              </div>

              {/* Right contacts (Desktop only) & close button */}
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                  title="Call 24/7 Helpline"
                >
                  <Phone className="w-3 h-3 text-brand-teal" />
                  <span>{siteConfig.displayPhone}</span>
                </a>

                <span className="text-neutral-700 hidden md:inline">·</span>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Online</span>
                </a>

                <button
                  onClick={() => setShowAnnouncement(false)}
                  className="text-neutral-500 hover:text-white p-0.5 ml-1 transition-colors"
                  aria-label="Dismiss announcement"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Glass Pill Navbar (Crisp Responsive Logo, Shrinks on Scroll) */}
      <div className="pt-2 sm:pt-3 px-3 sm:px-6 max-w-7xl mx-auto">
        <nav
          className={`mx-auto rounded-full transition-all duration-300 border border-white/10 ${
            isScrolled
              ? 'bg-[#070707]/92 backdrop-blur-xl shadow-2xl py-1.5 sm:py-2 px-3.5 sm:px-6 scale-[0.98]'
              : 'bg-[#070707]/75 backdrop-blur-md shadow-lg py-2 sm:py-2.5 px-3.5 sm:px-7'
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Crisp responsive Logo with explicit height and max-height */}
            <a
              href="#"
              className="flex items-center gap-2 group focus:outline-none shrink-0"
              aria-label="Decent Travelers Home"
            >
              <img
                src="/images/logo/decent-travelers-white.webp"
                alt="Decent Travelers"
                className={`w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_12px_rgba(247,134,30,0.35)] group-hover:scale-105 ${
                  isScrolled 
                    ? 'h-9 sm:h-11 md:h-12 max-h-9 sm:max-h-11 md:max-h-12' 
                    : 'h-10 sm:h-12 md:h-14 max-h-10 sm:max-h-12 md:max-h-14'
                }`}
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-200 hover:text-brand-orange transition-colors duration-200 rounded-full hover:bg-white/5 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </div>

            {/* Right Action: Ghost Phone icon + Highlighted "Book on WhatsApp" CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Ghost Call icon button */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                title={`Call Helpline: ${siteConfig.displayPhone}`}
                aria-label="Call 24/7 Helpline"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
              </a>

              {/* Only Highlighted Button: Book on WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black text-black bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow hover:from-brand-amber hover:to-brand-yellow shadow-[0_0_20px_rgba(247,134,30,0.45)] hover:shadow-[0_0_30px_rgba(247,134,30,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Book on WhatsApp</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                </span>
              </a>
            </div>

            {/* Mobile Actions: WhatsApp quick icon + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-full shadow-md transition-transform active:scale-95"
                aria-label="WhatsApp Us"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-neutral-900/90 border border-neutral-700 text-slate-200 hover:text-brand-orange focus:outline-none transition-colors active:scale-95"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-30 lg:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6"
          >
            <div className="flex flex-col gap-2.5">
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-brand-orange" />
                  <span>Decent Travelers Menu</span>
                </div>
                <span className="text-[10px] text-brand-aqua font-bold">24/7 Available</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-neutral-800/80 active:bg-brand-orange/20 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-brand-orange">→</span>
                </a>
              ))}

              <div className="pt-4 mt-1 border-t border-neutral-800 flex flex-col gap-2.5">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs font-bold"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-teal" />
                  <span>Call Helpline: {siteConfig.displayPhone}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow text-black font-extrabold text-xs shadow-lg"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
