import { Phone, Sparkles } from 'lucide-react'
import { WhatsAppIcon } from './SocialIcons'
import { siteConfig } from '../data/siteConfig'

export const MobileStickyBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Assalam-o-Alaikum Decent Travelers! I am visiting your website on my mobile and would like to inquire about tour packages and custom quotes."
  )}`

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t-2 border-brand-orange/40 p-2.5 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2">
        {/* Call Now Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-bold text-xs active:scale-95 transition-all shadow-md group"
          aria-label="Call 24/7 Helpline"
        >
          <div className="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center animate-pulse">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="truncate">Call Now</span>
        </a>

        {/* WhatsApp Us Button (Primary conversion) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] text-white font-extrabold text-xs active:scale-95 transition-all shadow-[0_0_18px_rgba(37,211,102,0.6)]"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0 text-white" />
          <span className="truncate">WhatsApp Us</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
        </a>

        {/* Quick Quote Anchor */}
        <a
          href="#contact"
          className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-brand-aqua flex items-center justify-center active:scale-95 transition-all"
          aria-label="Quick Quote Form"
          title="Quick Quote"
        >
          <Sparkles className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
