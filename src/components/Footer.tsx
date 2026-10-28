import { Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon, WhatsAppIcon, GoogleIcon } from './SocialIcons'
import { siteConfig, destinations, tripTypes } from '../data/siteConfig'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#070707] text-slate-300 pt-16 pb-12 border-t border-white/10 overflow-hidden">
      {/* Decorative mountain outline in footer */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-teal via-brand-orange to-brand-yellow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block focus:outline-none">
              <img
                src="/images/logo/decent-travelers-white.webp"
                alt="Decent Travelers"
                className="h-16 w-auto object-contain drop-shadow-[0_4px_16px_rgba(247,134,30,0.3)]"
              />
            </a>

            <p className="text-brand-aqua text-sm font-semibold tracking-wide">
              چلو پاکستان کی خوبصورتی دیکھنے
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {siteConfig.companyDescription}
            </p>

            {/* Official Social Icons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {/* Facebook */}
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_18px_rgba(24,119,242,0.6)] hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
                title="Follow Decent Travelers on Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:shadow-[0_0_18px_rgba(225,48,108,0.6)] hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
                title="Follow Decent Travelers on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              {/* TikTok */}
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-black hover:border-brand-aqua hover:shadow-[0_0_18px_rgba(126,214,211,0.6)] hover:scale-110 transition-all duration-200"
                aria-label="TikTok"
                title="Watch Decent Travelers on TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>

              {/* YouTube */}
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] hover:shadow-[0_0_18px_rgba(255,0,0,0.6)] hover:scale-110 transition-all duration-200"
                aria-label="YouTube"
                title="Subscribe to Decent Travelers on YouTube"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>

              {/* Google Business */}
              <a
                href={siteConfig.googleMyBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-slate-300 hover:border-white/50 hover:bg-neutral-800 hover:shadow-lg hover:scale-110 transition-all duration-200"
                aria-label="Google Business Listing"
                title="View Google Business Profile"
              >
                <GoogleIcon className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_18px_rgba(37,211,102,0.5)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-200"
                aria-label="Chat on WhatsApp"
                title="Chat with Decent Travelers on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Signature Destinations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white border-l-2 border-brand-orange pl-2">
              Top Destinations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {destinations.slice(0, 6).map((dest) => (
                <li key={dest.id}>
                  <a
                    href="#destinations"
                    className="hover:text-brand-orange transition-colors flex items-center justify-between group"
                  >
                    <span>{dest.name}</span>
                    <span className="text-[10px] text-neutral-500 group-hover:text-brand-orange transition-colors">
                      {dest.province}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialized Trips (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white border-l-2 border-brand-teal pl-2">
              Trip Packages
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#international-tours" className="text-brand-orange font-bold hover:underline transition-colors flex items-center gap-1.5">
                  <span>✈️ International Tours</span>
                </a>
              </li>
              {tripTypes.map((trip) => (
                <li key={trip.id}>
                  <a href="#trips" className="hover:text-brand-teal transition-colors">
                    {trip.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="hover:text-brand-teal transition-colors">
                  Custom Itinerary
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Contacts & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white border-l-2 border-brand-yellow pl-2">
              Headquarters
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-black bg-gradient-to-r from-brand-orange to-brand-yellow px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                <WhatsAppIcon className="w-4 h-4 text-black" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Decent Travelers. All rights reserved. Made for Northern Pakistan.</p>

          <div className="flex items-center gap-6">
            <a href="#why-us" className="hover:text-white transition-colors">
              Safety Promise
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Terms & Cancellation
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-brand-orange text-white hover:text-brand-orange transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
