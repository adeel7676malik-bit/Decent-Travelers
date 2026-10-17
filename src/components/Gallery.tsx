import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Image as ImageIcon, MapPin, X, ZoomIn, ArrowRight } from 'lucide-react'
import { galleryItems, siteConfig } from '../data/siteConfig'
import { GalleryItem } from '../types'
import { WhatsAppIcon } from './SocialIcons'

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null)

  const categories = ['All', 'Hunza', 'Skardu', 'Swat', 'Kumrat', 'Kashmir', 'Naran', 'Shogran']

  const filteredItems = galleryItems.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  )

  const handleBookLocation = (photo: GalleryItem) => {
    const text = `Assalam-o-Alaikum Decent Travelers! I saw this photo of "${photo.title}" in ${photo.location} on your gallery. I want to visit this place! Please share tour options.`
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section id="gallery" className="relative py-10 sm:py-14 lg:py-16 bg-[#0D0D0D] overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-aqua/10 border border-brand-aqua/30 text-brand-aqua text-xs font-bold uppercase tracking-wider mb-3">
              <ImageIcon className="w-4 h-4" />
              <span>Real Traveler Captures</span>
            </div>
            <h2 className="logo-font text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Tour <span className="text-brand-orange">Memories Gallery</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl">
              Breathtaking glacial lakes, golden autumn foliage, and genuine family laughter. Click any image to view in high definition.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-neutral-900 border border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-orange text-black font-extrabold shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid of Photos */}
        <motion.div layout className="grid grid-cols-12 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => setSelectedPhoto(item)}
                className={`${
                  item.widthClass || 'col-span-12 sm:col-span-6 lg:col-span-4'
                } group relative rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer border-2 border-neutral-800 hover:border-brand-orange transition-all duration-300 h-64 sm:h-72 lg:h-80 shadow-lg hover:shadow-[0_0_25px_rgba(247,134,30,0.3)]`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1640881193563-b5f0bf20019a?auto=format&fit=crop&w=1000&q=80'
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

                {/* Location badge */}
                <div className="absolute top-4 left-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-brand-aqua border border-white/20 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Click to expand icon */}
                <div className="absolute top-4 right-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-2 rounded-full bg-brand-orange text-black font-bold flex items-center justify-center shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom title on card */}
                <div className="absolute bottom-4 left-4 right-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-sm sm:text-base font-bold text-white drop-shadow-md">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-brand-yellow font-medium">Tap to view in Lightbox</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-neutral-900 rounded-3xl overflow-hidden border-2 border-brand-orange shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 text-white hover:text-brand-orange border border-white/20 transition-colors focus:outline-none"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Photo Preview */}
              <div className="relative w-full h-[50vh] sm:h-[60vh] bg-black">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1640881193563-b5f0bf20019a?auto=format&fit=crop&w=1200&q=80'
                  }}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Footer Details */}
              <div className="p-5 sm:p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-brand-teal font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedPhoto.location}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {selectedPhoto.title}
                  </h3>
                </div>

                <button
                  onClick={() => handleBookLocation(selectedPhoto)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow text-black font-extrabold text-sm shadow-[0_0_20px_rgba(247,134,30,0.5)] hover:scale-105 active:scale-95 transition-transform"
                >
                  <WhatsAppIcon className="w-4 h-4 text-black" />
                  <span>Book Tour to This Spot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
