import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { WhatsAppIcon } from './SocialIcons'
import { siteConfig } from '../data/siteConfig'

// Animated CountUp helper
const CountUp: React.FC<{ end: number; suffix?: string; duration?: number }> = ({
  end,
  suffix = '',
  duration = 1800,
}) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(step)
  }, [hasStarted, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Floating destination chips data
const destinationChips = [
  { name: 'Hunza Valley', region: 'GB', x: '72%', y: '26%', delay: 0 },
  { name: 'Skardu & Deosai', region: 'GB', x: '82%', y: '40%', delay: 0.2 },
  { name: 'Swat & Kalam', region: 'KPK', x: '68%', y: '52%', delay: 0.4 },
  { name: 'Kumrat Forest', region: 'KPK', x: '85%', y: '62%', delay: 0.6 },
  { name: 'Neelum Kashmir', region: 'AJK', x: '74%', y: '74%', delay: 0.8 },
]

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Parallax on scroll
  const ySun = useTransform(scrollY, [0, 600], [0, -60])
  const yLayer1 = useTransform(scrollY, [0, 600], [0, 40])
  const yLayer2 = useTransform(scrollY, [0, 600], [0, 80])
  const yLayer3 = useTransform(scrollY, [0, 600], [0, 120])
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0.25])

  // Desktop mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 30, stiffness: 100 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  const layer1X = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8])
  const layer2X = useTransform(mouseXSpring, [-0.5, 0.5], [-16, 16])
  const layer3X = useTransform(mouseXSpring, [-0.5, 0.5], [-24, 24])

  useEffect(() => {
    // Only on fine pointers
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX / innerWidth) - 0.5)
      mouseY.set((e.clientY / innerHeight) - 0.5)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Assalam-o-Alaikum Decent Travelers! I want to plan my dream trip to Northern Pakistan. Please share packages and details."
  )}`

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 overflow-hidden bg-[#070707] select-none"
    >
      {/* =========================================================================
          BACKGROUND CINEMATIC STACK
          ========================================================================= */}

      {/* 1. Deep Atmospheric Gradient Sky */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sky gradient: deep black to midnight teal-blue to warm horizon glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-[#05161A] to-[#120E08]" />

        {/* Faint high-res mountain background photo with atmospheric tint */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-luminosity bg-cover bg-center filter blur-[1px] scale-105"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=2000&q=80)',
          }}
        />

        {/* Star speckles in the upper sky */}
        <div className="absolute inset-x-0 top-0 h-2/3 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />

        {/* Horizon Warm Golden-Hour Ambient Flare */}
        <div className="absolute -bottom-20 right-0 w-[600px] h-[400px] bg-gradient-to-t from-brand-orange/30 via-brand-amber/15 to-transparent rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* 2. Smaller Glowing Sun (Light Source behind ridges, right of center) */}
      <motion.div
        style={{ y: ySun }}
        className="absolute right-[12%] sm:right-[20%] lg:right-[24%] bottom-[28%] sm:bottom-[32%] pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [-8, 8, -8], scale: [1, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          {/* Sun Bloom Halo */}
          <div className="absolute -inset-16 rounded-full bg-gradient-to-tr from-brand-orange via-brand-amber to-brand-yellow opacity-40 blur-3xl animate-pulse-slow" />
          
          {/* Sun Core Disc (220px to 280px) */}
          <div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-gradient-to-t from-brand-amber via-brand-yellow to-[#FFFDF0] shadow-[0_0_60px_rgba(255,138,0,0.8),0_0_120px_rgba(255,229,0,0.4)]" />

          {/* Soft atmospheric sun rays */}
          <div className="absolute inset-0 rounded-full bg-brand-yellow/30 blur-xl" />
        </motion.div>
      </motion.div>

      {/* 3. 4 LAYERS OF MOUNTAIN SILHOUETTES WITH LIVING MOTION ILLUSION */}
      
      {/* Mountain Layer 1: Farthest sharp peaks drifting slowly */}
      <motion.div
        style={{ y: yLayer1, x: layer1X }}
        className="absolute inset-x-0 bottom-14 sm:bottom-20 h-72 sm:h-88 md:h-[420px] pointer-events-none z-10 opacity-70"
      >
        <motion.div
          animate={{ x: [-14, 14, -14], y: [0, -5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          <svg
            viewBox="0 0 1440 380"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            {/* Subtle amber rim stroke on highest peaks */}
            <path
              d="M0,380 L0,220 L160,150 L320,240 L490,110 L640,220 L820,70 L980,190 L1180,95 L1350,230 L1440,170 L1440,380 Z"
              fill="#09181B"
              stroke="url(#rimLight)"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
            <defs>
              <linearGradient id="rimLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="30%" stopColor="#18A999" stopOpacity="0.2" />
                <stop offset="60%" stopColor="#FF8A00" stopOpacity="0.8" />
                <stop offset="85%" stopColor="#FFE500" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#F7861E" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      {/* Mountain Layer 2: Mid-distance mountain crests with drifting fog band */}
      <motion.div
        style={{ y: yLayer2, x: layer2X }}
        className="absolute inset-x-0 bottom-10 sm:bottom-14 h-64 sm:h-80 md:h-[360px] pointer-events-none z-20"
      >
        {/* Soft living drifting fog band between mountain layers */}
        <motion.div
          animate={{ x: ['-20%', '20%', '-20%'], opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 inset-x-0 h-24 bg-gradient-to-r from-transparent via-brand-teal/20 via-brand-amber/25 to-transparent blur-3xl pointer-events-none"
        />

        <motion.div
          animate={{ x: [16, -16, 16], y: [-3, 4, -3] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          <svg
            viewBox="0 0 1440 340"
            className="w-full h-full object-cover fill-[#071316]"
            preserveAspectRatio="none"
          >
            <path d="M0,340 L0,180 L120,120 L280,210 L440,90 L600,190 L760,60 L920,180 L1090,75 L1260,190 L1390,120 L1440,150 L1440,340 Z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Mountain Layer 3: Midground dark peaks with gentle sway */}
      <motion.div
        style={{ y: yLayer3, x: layer3X }}
        className="absolute inset-x-0 bottom-6 sm:bottom-8 h-56 sm:h-72 md:h-[300px] pointer-events-none z-20"
      >
        <motion.div
          animate={{ x: [-10, 10, -10], y: [0, -4, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          <svg
            viewBox="0 0 1440 300"
            className="w-full h-full object-cover fill-[#080B0C]"
            preserveAspectRatio="none"
          >
            <path d="M0,300 L0,140 L150,70 L300,170 L480,45 L660,160 L840,40 L1010,150 L1190,55 L1340,140 L1440,100 L1440,300 Z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Mountain Layer 4: Foreground rugged mountain ridge */}
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 md:h-32 pointer-events-none z-30">
        <motion.div
          animate={{ x: [5, -5, 5] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          <svg
            viewBox="0 0 1440 220"
            className="w-full h-full object-cover fill-[#070707]"
            preserveAspectRatio="none"
          >
            {/* Rugged foreground mountain ridge */}
            <path d="M0,220 L0,110 L180,60 L360,130 L550,50 L750,120 L940,40 L1140,105 L1320,50 L1440,85 L1440,220 Z" />
          </svg>
        </motion.div>
      </div>

      {/* Dark Scrim on the Left: Guarantees 100% AA contrast for headline & text */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#070707] via-[#070707]/90 md:via-[#070707]/75 to-transparent pointer-events-none z-20" />

      {/* Floating Golden Particles in the ambient air */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-brand-yellow/60 blur-[1px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-brand-orange/40 blur-[1px] animate-float" />
        <div className="absolute top-2/5 right-1/3 w-1.5 h-1.5 rounded-full bg-brand-amber/50 blur-[1px] animate-pulse-slow" />
      </div>

      {/* =========================================================================
          HERO CONTENT (Left-Aligned Desktop, Centered Mobile, Max-Width 680px)
          ========================================================================= */}
      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center"
      >
        <div className="max-w-[680px] text-center lg:text-left mx-auto lg:mx-0">
          

          {/* Headline: Clean, bold, NO wavy underlines, sitting on dark */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="logo-font text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight text-white leading-[1.12] sm:leading-[1.08] drop-shadow-2xl"
          >
            Explore Pakistan's Paradise with{' '}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow drop-shadow-[0_4px_24px_rgba(247,134,30,0.45)]">
              Decent Travelers
            </span>
          </motion.h1>

          {/* Subline: Muted white at 70%, max 2 lines */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3.5 sm:mt-4 text-xs sm:text-base md:text-lg text-white/75 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Family, corporate, educational and honeymoon trips across Skardu, Hunza, Swat, Kumrat & Kashmir. Safe, respectful and transparent.
          </motion.p>

          {/* CTAs: Sleek, compact on mobile, expansive on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto"
          >
            {/* 1. Primary Pill: Plan My Trip on WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[260px] sm:max-w-none sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4.5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-base font-extrabold sm:font-black text-black bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow hover:from-brand-amber hover:to-brand-yellow hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(247,134,30,0.4)] border border-white/20 group"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:rotate-12 transition-transform shrink-0" />
              <span>Plan My Trip on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            {/* 2. Secondary Glass Pill: Explore Destinations with gentle bob down-arrow */}
            <a
              href="#destinations"
              className="w-full max-w-[260px] sm:max-w-none sm:w-auto inline-flex items-center justify-center gap-2 px-4.5 sm:px-6 py-2 sm:py-3.5 rounded-full text-xs sm:text-base font-semibold sm:font-bold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-teal transition-all duration-300 backdrop-blur-md hover:scale-105 group"
            >
              <span>Explore Destinations</span>
              <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-teal group-hover:translate-y-1 transition-transform animate-bounce shrink-0" />
            </a>
          </motion.div>

          {/* Trust Row: Glass Strip with 3 Animated Counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/10 flex justify-center lg:justify-start"
          >
            <div className="w-full sm:w-auto inline-flex items-center justify-around sm:justify-start gap-3 sm:gap-10 p-2.5 sm:p-4 rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-md border border-white/10 shadow-xl">
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-brand-orange logo-font">
                  <CountUp end={parseInt(siteConfig.stats.happyTravelers)} suffix="+" />
                </span>
                <span className="text-[11px] text-neutral-400 font-medium">Happy Travelers</span>
              </div>

              <div className="w-px h-8 bg-white/10" />

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-brand-yellow logo-font">
                  <CountUp end={parseInt(siteConfig.stats.destinationsCount)} />
                </span>
                <span className="text-[11px] text-neutral-400 font-medium">Destinations</span>
              </div>

              <div className="w-px h-8 bg-white/10" />

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-brand-teal logo-font">
                  <CountUp end={parseInt(siteConfig.stats.tripTypesCount || '5')} />
                </span>
                <span className="text-[11px] text-neutral-400 font-medium">Trip Types</span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* =========================================================================
          FLOATING DESTINATION CHIPS ON THE RIGHT (Desktop Only)
          ========================================================================= */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
        {destinationChips.map((chip, idx) => (
          <motion.div
            key={chip.name}
            style={{ left: chip.x, top: chip.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
            animate={{ y: [-5, 5, -5] }}
            transition={{
              duration: 4.5 + idx * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: idx * 0.4,
            }}
          >
            <motion.a
              href="#destinations"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + chip.delay }}
              whileHover={{ scale: 1.1 }}
              className="block"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0A0A]/85 hover:bg-neutral-900 border border-white/15 hover:border-brand-orange text-white text-xs font-semibold backdrop-blur-md shadow-xl transition-all duration-300 group">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange group-hover:scale-125 transition-transform" />
                <span>{chip.name}</span>
                <span className="text-[10px] text-brand-aqua uppercase font-bold px-1.5 py-0.5 rounded bg-white/5">
                  {chip.region}
                </span>
              </div>
            </motion.a>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
