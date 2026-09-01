import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Award, 
  Flame, 
  ArrowRight, 
  Star, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Truck, 
  Leaf, 
  ChevronRight 
} from 'lucide-react';
import { useMenuStore } from '../store/menuStore';
import { useSettingsStore } from '../store/settingsStore';
import { QuickActions } from '../components/QuickActions';
import { FoodItemCard } from '../components/FoodItemCard';
import { Toast } from '../components/Toast';

export const HomePage: React.FC = () => {
  const { items } = useMenuStore();
  const { settings } = useSettingsStore();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Specials & Highlights
  const specialItems = items.filter((item) => item.isSpecial && item.isAvailable).slice(0, 4);
  const tiffins = items.filter((i) => i.category === 'Tiffins').slice(0, 2);
  const meals = items.filter((i) => i.category === 'Meals').slice(0, 2);
  const biryanis = items.filter((i) => i.category === 'Biryani').slice(0, 2);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/menu?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/menu');
    }
  };

  return (
    <div className="min-h-screen bg-stone-100/60 pb-16">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-b from-orange-600 via-amber-600 to-orange-700 text-white pt-2 pb-8 px-4 overflow-hidden rounded-b-3xl shadow-warm">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Welcome Tagline */}
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-amber-400 text-stone-950 text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
              100% Home Style Food
            </span>
            <span className="text-orange-100 text-xs font-semibold">
              Serving Since {settings.sinceYear}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-2 leading-tight">
            Authentic Home Style <br className="hidden sm:inline" />
            <span className="text-amber-300">Andhra Meals & Tiffins</span>
          </h1>

          <p className="text-xs sm:text-sm text-orange-100/90 font-medium max-w-xl mb-4 leading-relaxed font-telugu">
            వేడి వేడి నెయ్యి ఆంధ్ర భోజనం, నాటు కోడి బిర్యానీ, పెసరట్టు & ఘుమఘుమలాడే కూరలు.
          </p>

          {/* Quick Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative max-w-lg mb-2">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search Biryani, Meals, Dosa, Chicken..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-stone-900 placeholder:text-stone-400 text-xs sm:text-sm rounded-2xl pl-10 pr-24 py-3 shadow-lg border-0 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-xs"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 -mt-3 space-y-5">
        {/* Quick Action Buttons (Call, WhatsApp, Maps, Share) */}
        <QuickActions onShowToast={(msg) => setToastMessage(msg)} />

        {/* Quick Category Jump Pill Bar */}
        <div className="bg-white p-3.5 rounded-2xl shadow-card border border-stone-200/80">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Browse Categories • మెనూ విభాగాలు
            </h2>
            <Link
              to="/menu"
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-0.5"
            >
              <span>See All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[
              { name: 'Tiffins', icon: '🥞', tel: 'టిఫిన్స్', cat: 'Tiffins' },
              { name: 'Meals', icon: '🍱', tel: 'భోజనం', cat: 'Meals' },
              { name: 'Curries', icon: '🥘', tel: 'కూరలు', cat: 'Curries' },
              { name: 'Biryani', icon: '🍚', tel: 'బిర్యానీ', cat: 'Biryani' },
              { name: 'Snacks', icon: '🍗', tel: 'స్నాక్స్', cat: 'Snacks' },
              { name: 'Beverages', icon: '☕', tel: 'డ్రింక్స్', cat: 'Beverages' },
            ].map((c) => (
              <Link
                key={c.name}
                to={`/menu?category=${c.cat}`}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-stone-50 hover:bg-orange-50/80 active:scale-95 transition-all text-center border border-stone-200/60 group"
              >
                <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                  {c.icon}
                </span>
                <span className="text-xs font-bold text-stone-800 leading-tight">
                  {c.name}
                </span>
                <span className="text-[9px] text-stone-400 font-telugu font-semibold">
                  {c.tel}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Today's Special Highlights */}
        {specialItems.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-1.5">
                <span className="p-1.5 rounded-xl bg-amber-500 text-white shadow-xs">
                  <Award className="w-4 h-4" />
                </span>
                <div>
                  <h2 className="text-base font-extrabold text-stone-900 leading-tight">
                    Today's Specials
                  </h2>
                  <p className="text-[11px] font-semibold text-orange-700 font-telugu">
                    ఈ రోజు ప్రత్యేక వంటకాలు
                  </p>
                </div>
              </div>

              <Link
                to="/menu"
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-0.5 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/60"
              >
                <span>Full Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {specialItems.map((item) => (
                <FoodItemCard
                  key={item.id}
                  item={item}
                  onQuickAddToast={(name) => setToastMessage(`Added ${name} to cart!`)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Popular Dishes Preview */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <div>
              <h2 className="text-base font-extrabold text-stone-900 leading-tight">
                Customer Favorites • అందరూ మెచ్చేవి
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                Most loved homestyle dishes by our daily guests
              </p>
            </div>
            <Link
              to="/menu"
              className="text-xs font-bold text-orange-600 hover:text-orange-700"
            >
              View All (20+)
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[...tiffins, ...biryanis, ...meals].slice(0, 4).map((item) => (
              <FoodItemCard
                key={item.id}
                item={item}
                onQuickAddToast={(name) => setToastMessage(`Added ${name} to cart!`)}
              />
            ))}
          </div>
        </div>

        {/* Value Proposition & Hygiene Highlights */}
        <div className="bg-white rounded-3xl p-5 shadow-card border border-stone-200/80 space-y-4">
          <div className="text-center max-w-md mx-auto">
            <h3 className="text-base font-black text-stone-900 mb-1">
              Why Villagers Love Raju Garu Hotel?
            </h3>
            <p className="text-xs text-stone-500">
              Preserving authentic Godavari & Andhra culinary heritage since 2015.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-amber-50/70 p-3 rounded-2xl text-center border border-amber-200/60">
              <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                <Flame className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-stone-900">Woodfire Cooked</h4>
              <p className="text-[10px] text-stone-500 mt-0.5">Authentic aroma & deep flavor</p>
            </div>

            <div className="bg-emerald-50/70 p-3 rounded-2xl text-center border border-emerald-200/60">
              <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                <Leaf className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-stone-900">100% Pure Ghee</h4>
              <p className="text-[10px] text-stone-500 mt-0.5">Desi buffalo milk butter</p>
            </div>

            <div className="bg-orange-50/70 p-3 rounded-2xl text-center border border-orange-200/60">
              <div className="w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                <Truck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-stone-900">Village Delivery</h4>
              <p className="text-[10px] text-stone-500 mt-0.5">Fast parcel & home delivery</p>
            </div>

            <div className="bg-blue-50/70 p-3 rounded-2xl text-center border border-blue-200/60">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-stone-900">No Food Colors</h4>
              <p className="text-[10px] text-stone-500 mt-0.5">Healthy & hygienic always</p>
            </div>
          </div>
        </div>

        {/* Hotel Information & Timing Card */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-3xl p-5 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-700 pb-3">
            <div>
              <h3 className="text-base font-black text-amber-400 flex items-center gap-1.5">
                <span>📍 {settings.name}</span>
              </h3>
              <p className="text-xs text-stone-300 mt-0.5">{settings.address}</p>
              <p className="text-[11px] text-stone-400">Landmark: {settings.landmark}</p>
            </div>
            <a
              href={settings.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs px-3 py-1.5 rounded-xl transition-colors shrink-0 shadow"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300 pt-1">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Timings:</strong> {settings.openingHours}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Order Helpline:</strong> {settings.phone}</span>
            </div>
          </div>
        </div>

        {/* Local Testimonials */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-stone-200/80">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 px-1">
            Customer Reviews • గ్రామస్తుల అభిప్రాయాలు
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/60 text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-900">Srinivasa Rao (Teacher)</span>
                <div className="flex text-amber-500">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                </div>
              </div>
              <p className="text-stone-600 italic">
                "Raju Garu meals taste exactly like mother's cooking. Pappu, ghee and gongura pulusu are incomparable in our whole mandal."
              </p>
            </div>

            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/60 text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-stone-900">Venkat Reddy (Farmer)</span>
                <div className="flex text-amber-500">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                </div>
              </div>
              <p className="text-stone-600 italic">
                "Natu Kodi Biryani on Sundays is a feast. Hot parcel delivered within 15 minutes to our fields. Very happy with WhatsApp ordering."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
