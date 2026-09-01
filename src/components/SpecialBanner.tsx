import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, Flame } from 'lucide-react';
import { MenuItem } from '../types';

interface SpecialBannerProps {
  specialItems?: MenuItem[];
}

export const SpecialBanner: React.FC<SpecialBannerProps> = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-700 via-amber-700 to-stone-900 text-white p-5 sm:p-6 shadow-warm my-4 border border-orange-500/30">
      {/* Decorative background glows */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1 bg-amber-400 text-stone-950 font-extrabold text-[11px] px-2.5 py-0.5 rounded-full shadow">
            <Award className="w-3.5 h-3.5" />
            TODAY'S SPECIAL • ఈ రోజు ప్రత్యేకం
          </span>
          <span className="bg-red-500/30 text-red-200 border border-red-400/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
            <Flame className="w-2.5 h-2.5 text-red-400" />
            Woodfire Taste
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-white leading-tight mb-1.5">
          Raju Garu Special Natu Kodi & Andhra Bhojanam
        </h2>
        <p className="text-xs sm:text-sm text-orange-100/90 leading-relaxed max-w-lg mb-4">
          Cooked with cold-pressed oils, pure buffalo ghee, and authentic hand-ground Andhra spices. Guaranteed homestyle taste with no artificial colors.
        </p>

        {/* Quick features pill */}
        <div className="grid grid-cols-3 gap-2 mb-4 pt-1 border-t border-white/10 text-center">
          <div className="bg-white/10 backdrop-blur-xs p-2 rounded-xl border border-white/10">
            <span className="block text-base sm:text-lg font-extrabold text-amber-300">100%</span>
            <span className="text-[10px] sm:text-xs text-orange-100 font-medium leading-tight">Home Style</span>
          </div>
          <div className="bg-white/10 backdrop-blur-xs p-2 rounded-xl border border-white/10">
            <span className="block text-base sm:text-lg font-extrabold text-amber-300">Pure Ghee</span>
            <span className="text-[10px] sm:text-xs text-orange-100 font-medium leading-tight">Desi Aroma</span>
          </div>
          <div className="bg-white/10 backdrop-blur-xs p-2 rounded-xl border border-white/10">
            <span className="block text-base sm:text-lg font-extrabold text-amber-300">20 Mins</span>
            <span className="text-[10px] sm:text-xs text-orange-100 font-medium leading-tight">Fast Parcel</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-stone-950 font-extrabold text-sm py-2.5 px-5 rounded-2xl shadow-lg hover:shadow-amber-400/20 active:scale-95 transition-all group"
        >
          <span>Explore Full Menu • మెనూ చూడండి</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
