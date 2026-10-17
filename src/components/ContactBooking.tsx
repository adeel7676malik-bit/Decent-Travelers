import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Sparkles, ShieldCheck, Share2, ArrowUpRight } from 'lucide-react'
import confetti from 'canvas-confetti'
import { siteConfig, destinations, tripTypes } from '../data/siteConfig'
import { WhatsAppIcon, FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon, GoogleIcon } from './SocialIcons'

export const ContactBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: destinations[0].name,
    tripType: tripTypes[0].title,
    travelDate: '',
    travelers: '2-4 Persons',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F7861E', '#FF8A00', '#FFE500', '#18A999', '#FFFFFF']
      })
    } catch {
      // Confetti fallback if restricted
    }

    // Format WhatsApp message
    const waText = `*NEW TRIP INQUIRY - DECENT TRAVELERS*
---------------------------------------
👤 *Name:* ${formData.name || 'Traveler'}
📱 *Phone:* ${formData.phone}
🏔️ *Destination:* ${formData.destination}
🎒 *Trip Type:* ${formData.tripType}
📅 *Preferred Dates:* ${formData.travelDate || 'Flexible'}
👥 *Travelers:* ${formData.travelers}
💬 *Message/Notes:* ${formData.message || 'Please send customized package details.'}
---------------------------------------
(Sent via Decent Travelers Website)`

    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(waText)}`

    setSubmitted(true)

    // Open WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank')
    }, 600)
  }

  return (
    <section id="contact" className="relative py-10 sm:py-14 lg:py-16 bg-[#0A0A0A] overflow-hidden text-white">
      {/* Background glow highlights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-orange/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-teal/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Instant Trip Planner</span>
          </div>

          <h2 className="logo-font text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Plan Your <span className="text-brand-orange">Dream Journey</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Fill out this quick form to generate your WhatsApp booking inquiry. Our tour specialist will respond within 15 minutes with customized rates.
          </p>
        </div>

        {/* Symmetrical Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* =========================================================================
              LEFT COLUMN: Custom Tour Planner & Form
              ========================================================================= */}
          <div className="bg-neutral-900/90 rounded-3xl p-6 sm:p-8 lg:p-9 border border-neutral-800 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
            {/* Top orange gradient rim */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow" />

            {/* Card Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-orange" />
                  <span>Custom Tour Inquiry</span>
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill in your preferences for an instant personalized quote
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-[11px] font-bold text-brand-orange">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                15-Min Response
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-4 my-auto"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(37,211,102,0.55)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white">Inquiry Created Successfully!</h3>
                <p className="mt-3 text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  WhatsApp is opening now with your details pre-filled. If it didn't open automatically, click the button below:
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(37,211,102,0.6)] transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Open WhatsApp Now</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Hammad Tariq"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                        WhatsApp Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0300 0477721"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Destination & Trip Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Destination Valley
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-sm transition-colors"
                      >
                        {destinations.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name} ({d.region})
                          </option>
                        ))}
                        <option value="Multi-Valley Custom Tour">Custom Multi-Valley Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Trip Type
                      </label>
                      <select
                        value={formData.tripType}
                        onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-sm transition-colors"
                      >
                        {tripTypes.map((t) => (
                          <option key={t.id} value={t.title}>
                            {t.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Travel Dates & Group Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Approximate Travel Date
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Next month / June 15"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                        Number of Travelers
                      </label>
                      <select
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-sm transition-colors"
                      >
                        <option value="Couple (2 Persons)">Couple (2 Persons)</option>
                        <option value="Family (3-5 Persons)">Family (3-5 Persons)</option>
                        <option value="Family Group (6-12 Persons)">Family Group (6-12 Persons)</option>
                        <option value="Corporate / Group (15-30 Persons)">Corporate / Group (15-30 Persons)</option>
                        <option value="Large Batch (30+ Persons)">Large Batch (30+ Persons)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message / Special Requests */}
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-1.5">
                      Special Requests (Hotel Standard, Pickup City, Elders)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need luxury 4-star hotel in Hunza with river view and pickup from Islamabad Airport..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange text-sm resize-none transition-colors"
                    />
                  </div>
                </div>

                {/* Submit & Call Actions */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-black bg-gradient-to-r from-brand-orange via-brand-amber to-brand-yellow hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_25px_rgba(247,134,30,0.45)] flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Send className="w-4 h-4 fill-black group-hover:translate-x-0.5 transition-transform" />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-[11px] text-neutral-400">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="font-bold text-brand-teal hover:underline flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Prefer call? Helpline: {siteConfig.displayPhone}</span>
                    </a>
                    <span>🔒 Privacy Guaranteed · Zero Spam</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Direct Channels, Lahore Head Office & Google Map
              ========================================================================= */}
          <div className="bg-neutral-900/90 rounded-3xl p-6 sm:p-8 lg:p-9 border border-neutral-800 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
            {/* Top teal gradient rim */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-teal via-brand-aqua to-brand-yellow" />

            {/* Card Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-teal" />
                  <span>Head Office & Direct Support</span>
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Official tourism desk, verified channels & office visit
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/15 border border-brand-teal/40 text-[11px] font-bold text-brand-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                Lahore Office
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-between space-y-5">
              
              {/* 2x2 Symmetric Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* 1. Phone Helpline */}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-brand-orange/60 hover:bg-neutral-900 transition-all flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-black border border-brand-orange/40 text-brand-orange flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                      24/7 Helpline
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-brand-orange transition-colors truncate block mt-0.5">
                      {siteConfig.displayPhone}
                    </span>
                    <span className="text-[10px] text-brand-teal block">Voice & WhatsApp</span>
                  </div>
                </a>

                {/* 2. WhatsApp Support */}
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/60 hover:bg-neutral-900 transition-all flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-600/40 text-[#25D366] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(37,211,102,0.2)] group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                      WhatsApp Chat
                    </span>
                    <span className="text-sm font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors truncate block mt-0.5">
                      {siteConfig.whatsappDisplay}
                    </span>
                    <span className="text-[10px] text-neutral-400 block">Avg reply: &lt; 15 mins</span>
                  </div>
                </a>

                {/* 3. Official Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-brand-teal/60 hover:bg-neutral-900 transition-all flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-black border border-brand-teal/40 text-brand-teal flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                      Official Email
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-teal transition-colors truncate block mt-0.5">
                      {siteConfig.email}
                    </span>
                    <span className="text-[10px] text-neutral-400 block">Corporate inquiries</span>
                  </div>
                </a>

                {/* 4. Timings */}
                <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black border border-white/20 text-brand-yellow flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                      Office Timings
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white truncate block mt-0.5">
                      {siteConfig.officeHours}
                    </span>
                    <span className="text-[10px] text-brand-yellow block">Monday to Sunday</span>
                  </div>
                </div>

              </div>

              {/* Office Address & Interactive Google Map */}
              <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 truncate">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                    <span className="text-xs text-slate-200 font-semibold truncate">
                      {siteConfig.address}
                    </span>
                  </div>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-brand-orange hover:text-black border border-white/10 text-[11px] text-brand-orange font-bold transition-all shrink-0 flex items-center gap-1"
                  >
                    <span>Directions</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Google Maps Embed iframe */}
                <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden border border-white/10 bg-black">
                  <iframe
                    title="Decent Travelers Lahore Office Google Map"
                    src="https://maps.google.com/maps?q=Jalal+Center+Kashmir+Block+Allama+Iqbal+Town+Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    className="w-full h-full border-0 filter contrast-[1.05]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                    <div className="bg-black/85 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-lg text-[10px] text-slate-300 flex items-center justify-between">
                      <span className="truncate">📍 Office #9, Jalal Center, Lahore</span>
                      <a
                        href={siteConfig.googleMyBusinessUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-yellow font-bold hover:underline shrink-0 pointer-events-auto ml-2"
                      >
                        GMB Profile ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Social Channels & Reviews Row */}
              <div className="pt-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Follow Decent Travelers & Reviews</span>
                  </span>
                  <a
                    href={siteConfig.googleReviewsUrl || siteConfig.googleMyBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-extrabold text-brand-yellow hover:underline"
                  >
                    ★ 5.0 on Google
                  </a>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {/* Facebook */}
                  <a
                    href={siteConfig.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-[#1877F2] hover:bg-[#1877F2]/15 flex items-center justify-center transition-all group"
                    title="Facebook Official Page"
                  >
                    <FacebookIcon className="w-4 h-4 text-white group-hover:text-[#1877F2] transition-colors" />
                  </a>

                  {/* Instagram */}
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-pink-500 hover:bg-pink-500/15 flex items-center justify-center transition-all group"
                    title="Instagram Photos & Reels"
                  >
                    <InstagramIcon className="w-4 h-4 text-white group-hover:text-pink-400 transition-colors" />
                  </a>

                  {/* TikTok */}
                  <a
                    href={siteConfig.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-brand-aqua hover:bg-white/10 flex items-center justify-center transition-all group"
                    title="TikTok Travel Vlogs"
                  >
                    <TikTokIcon className="w-4 h-4 text-white group-hover:text-brand-aqua transition-colors" />
                  </a>

                  {/* YouTube */}
                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-[#FF0000] hover:bg-[#FF0000]/15 flex items-center justify-center transition-all group"
                    title="YouTube Tour Videos"
                  >
                    <YouTubeIcon className="w-4 h-4 text-white group-hover:text-[#FF0000] transition-colors" />
                  </a>

                  {/* Google Reviews */}
                  <a
                    href={siteConfig.googleReviewsUrl || siteConfig.googleMyBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-[#4285F4] hover:bg-[#4285F4]/15 flex items-center justify-center transition-all group"
                    title="Google 5.0 Star Reviews"
                  >
                    <GoogleIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>

                  {/* WhatsApp Direct */}
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-[#25D366] hover:bg-[#25D366]/15 flex items-center justify-center transition-all group"
                    title="Chat on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white group-hover:text-[#25D366] transition-colors" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
