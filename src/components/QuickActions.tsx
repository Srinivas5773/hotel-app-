import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Share2, Check } from 'lucide-react';
import { useSettingsStore } from '../store/settingsStore';

interface QuickActionsProps {
  onShowToast?: (msg: string) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onShowToast }) => {
  const { settings } = useSettingsStore();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: settings.name,
      text: `${settings.name} - ${settings.tagline}. Order delicious home-style Andhra meals online!`,
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // user cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      if (onShowToast) onShowToast('Link copied to clipboard! Share with family & friends.');
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Namaskaram Raju Garu 🙏 I would like to know today's special menu and order food from ${settings.name}.`
  )}`;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-card border border-stone-200/80 my-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 px-1 flex items-center justify-between">
        <span>Quick Actions • త్వరిత సేవలు</span>
        <span className="text-emerald-600 font-semibold lowercase text-[11px] bg-emerald-50 px-2 py-0.5 rounded-full">
          Live & Fast
        </span>
      </h3>

      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {/* Call Hotel */}
        <a
          href={`tel:${settings.phone}`}
          className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-orange-50 hover:bg-orange-100/80 active:scale-95 transition-all text-center group border border-orange-200/60"
        >
          <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-transform">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-stone-900 leading-tight">Call</span>
          <span className="text-[10px] text-orange-700 font-telugu font-semibold">కాల్ చేయండి</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 active:scale-95 transition-all text-center group border border-emerald-200/60"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-transform">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-stone-900 leading-tight">WhatsApp</span>
          <span className="text-[10px] text-emerald-700 font-telugu font-semibold">వాట్సాప్</span>
        </a>

        {/* Directions */}
        <a
          href={settings.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100/80 active:scale-95 transition-all text-center group border border-blue-200/60"
        >
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-transform">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-stone-900 leading-tight">Directions</span>
          <span className="text-[10px] text-blue-700 font-telugu font-semibold">రూట్ మ్యాప్</span>
        </a>

        {/* Share */}
        <button
          onClick={handleShare}
          className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100/80 active:scale-95 transition-all text-center group border border-amber-200/60"
        >
          <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-transform">
            {copied ? <Check className="w-4 h-4 text-white" /> : <Share2 className="w-4 h-4" />}
          </div>
          <span className="text-xs font-bold text-stone-900 leading-tight">
            {copied ? 'Copied!' : 'Share'}
          </span>
          <span className="text-[10px] text-amber-700 font-telugu font-semibold">షేర్ చేయండి</span>
        </button>
      </div>
    </div>
  );
};
