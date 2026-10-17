import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Eye, ExternalLink, Layers, Sparkles } from 'lucide-react'
import { Destination } from '../types'

interface PakistanMapProps {
  destinations: Destination[]
  activeId: string | null
  onSelect: (id: string) => void
}

const mapLocationQueries: Record<string, { query: string; zoom: number; altitude: string }> = {
  hunza: {
    query: 'Hunza+Valley+Karimabad+Gilgit+Baltistan+Pakistan',
    zoom: 11,
    altitude: '2,438m',
  },
  skardu: {
    query: 'Skardu+Shangrila+Deosai+Pakistan',
    zoom: 10,
    altitude: '2,228m',
  },
  swat: {
    query: 'Swat+Valley+Kalam+Malam+Jabba+Pakistan',
    zoom: 11,
    altitude: '1,950m',
  },
  'fairy-meadows': {
    query: 'Fairy+Meadows+Nanga+Parbat+View+Point+Pakistan',
    zoom: 12,
    altitude: '3,300m',
  },
  naran: {
    query: 'Naran+Kaghan+Valley+Lake+Saif+ul+Malook+Pakistan',
    zoom: 11,
    altitude: '2,409m',
  },
  kumrat: {
    query: 'Kumrat+Valley+Upper+Dir+KPK+Pakistan',
    zoom: 11,
    altitude: '2,450m',
  },
  neelum: {
    query: 'Neelum+Valley+Kutton+Keran+Sharda+Azad+Kashmir+Pakistan',
    zoom: 11,
    altitude: '1,615m',
  },
  chitral: {
    query: 'Chitral+Kalash+Valley+Bumburet+Pakistan',
    zoom: 10,
    altitude: '1,494m',
  },
  gwadar: {
    query: 'Gwadar+Hammerhead+Port+Balochistan+Pakistan',
    zoom: 11,
    altitude: 'Sea Level',
  },
}

export const PakistanMap: React.FC<PakistanMapProps> = ({
  destinations,
  activeId,
  onSelect,
}) => {
  const [mapType, setMapType] = useState<'k' | 'p' | 'm'>('k') // 'k' = satellite, 'p' = terrain, 'm' = roadmap

  const activeDestination =
    destinations.find((d) => d.id === activeId) || destinations[0]

  const locInfo = mapLocationQueries[activeDestination.id] || {
    query: `${activeDestination.name}+Pakistan`,
    zoom: 11,
    altitude: 'Northern Pakistan',
  }

  const mapEmbedUrl = `https://maps.google.com/maps?q=${locInfo.query}&t=${mapType}&z=${locInfo.zoom}&ie=UTF8&iwloc=&output=embed`
  const externalGoogleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    activeDestination.name + ' Northern Pakistan'
  )}`

  return (
    <div className="relative w-full bg-neutral-900 rounded-3xl p-4 sm:p-5 border-2 border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
      {/* Map Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3 mb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-brand-orange animate-ping" />
          <div>
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white flex items-center gap-2">
              <span>Google Maps Northern Pakistan Explorer</span>
            </h4>
            <p className="text-[11px] text-neutral-400">
              Live Satellite & Topographic view · Select any valley to inspect terrain
            </p>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setMapType('k')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 ${
              mapType === 'k'
                ? 'bg-brand-orange text-black shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Satellite Imagery with Mountain Snow & Glaciers"
          >
            <Eye className="w-3 h-3" />
            <span>Satellite</span>
          </button>

          <button
            onClick={() => setMapType('p')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 ${
              mapType === 'p'
                ? 'bg-brand-orange text-black shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Topographic Terrain"
          >
            <Layers className="w-3 h-3" />
            <span>Terrain</span>
          </button>

          <button
            onClick={() => setMapType('m')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 ${
              mapType === 'm'
                ? 'bg-brand-orange text-black shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Standard Roads & Highway"
          >
            <Navigation className="w-3 h-3" />
            <span>Roads</span>
          </button>
        </div>
      </div>

      {/* Quick Destination Navigation Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-3 scrollbar-thin scrollbar-thumb-neutral-700">
        {destinations.map((dest) => {
          const isSelected = dest.id === activeDestination.id
          return (
            <button
              key={dest.id}
              onClick={() => onSelect(dest.id)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
                isSelected
                  ? 'bg-gradient-to-r from-brand-orange to-brand-amber text-black border-transparent shadow-[0_0_12px_rgba(247,134,30,0.4)] scale-105'
                  : 'bg-neutral-950/80 text-neutral-300 border-neutral-800 hover:border-neutral-600 hover:text-white'
              }`}
            >
              <MapPin className={`w-3 h-3 ${isSelected ? 'text-black' : 'text-brand-orange'}`} />
              <span>{dest.name}</span>
            </button>
          )
        })}
      </div>

      {/* Google Map Frame */}
      <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-inner group">
        <iframe
          key={`${activeDestination.id}-${mapType}`}
          title={`Google Map - ${activeDestination.name}`}
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          className="w-full h-full border-0 filter contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Info Overlay on Map (Top Left) */}
        <div className="absolute top-3 left-3 pointer-events-auto">
          <div className="bg-black/85 backdrop-blur-md border border-white/20 p-2.5 sm:p-3 rounded-xl shadow-xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-orange/20 border border-brand-orange/50 text-brand-orange flex items-center justify-center font-black text-sm">
              🏔️
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h5 className="text-xs sm:text-sm font-black text-white">{activeDestination.name}</h5>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-brand-teal/20 text-brand-aqua border border-brand-teal/30">
                  {activeDestination.province}
                </span>
              </div>
              <p className="text-[11px] text-neutral-300">
                Elevation: <span className="text-brand-yellow font-bold">{locInfo.altitude}</span> · Best:{' '}
                <span className="text-slate-200">{activeDestination.bestSeason}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Open in Google Maps Full App (Top Right) */}
        <a
          href={externalGoogleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-black/85 hover:bg-black text-white border border-white/20 text-[11px] font-bold flex items-center gap-1.5 shadow-xl transition-all hover:scale-105 pointer-events-auto"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3 h-3 text-brand-orange" />
        </a>

        {/* Route Info Badge (Bottom Left) */}
        <div className="absolute bottom-3 left-3 right-3 pointer-events-none hidden sm:flex items-center justify-between">
          <div className="bg-black/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-[11px] text-slate-300 flex items-center gap-2">
            <span className="text-brand-orange font-bold">Recommended:</span>
            <span>{activeDestination.duration} tour · Departure from Lahore/Islamabad</span>
          </div>
        </div>
      </div>
    </div>
  )
}
