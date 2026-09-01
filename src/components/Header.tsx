import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, ShoppingBag, ShieldCheck, User as UserIcon, UtensilsCrossed } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useSettingsStore } from '../store/settingsStore';
import { useAuthStore } from '../store/authStore';

export const Header: React.FC = () => {
  const { settings } = useSettingsStore();
  const { getItemCount, getItemsSubtotal } = useCartStore();
  const { isAdminAuthenticated, user } = useAuthStore();
  const navigate = useNavigate();

  const itemCount = getItemCount();
  const subtotal = getItemsSubtotal();

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white shadow-md">
      {/* Top micro notification */}
      <div className="bg-orange-950/40 px-3 py-1 text-xs text-orange-100 flex items-center justify-between border-b border-orange-500/20">
        <div className="flex items-center gap-1.5 truncate">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-emerald-300">Open Now</span>
          <span className="text-orange-200/70 hidden sm:inline">•</span>
          <span className="truncate hidden sm:inline">{settings.openingHours}</span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${settings.phone}`}
            className="flex items-center gap-1 text-orange-200 hover:text-white font-medium transition-colors"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span className="text-[11px] font-bold">{settings.phone}</span>
          </a>
          {isAdminAuthenticated && (
            <Link
              to="/admin"
              className="flex items-center gap-0.5 bg-amber-500/30 text-amber-200 px-1.5 py-0.5 rounded text-[10px] font-semibold border border-amber-400/30"
            >
              <ShieldCheck className="w-3 h-3" />
              Admin
            </Link>
          )}
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between gap-2">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-white text-orange-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0 border border-orange-200">
            <UtensilsCrossed className="w-5 h-5 text-orange-600 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg md:text-xl font-black tracking-tight text-white leading-tight">
                {settings.name || 'Raju Garu Hotel'}
              </h1>
              <span className="bg-amber-400/20 text-amber-200 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-amber-300/30 hidden xs:inline">
                Est. {settings.sinceYear}
              </span>
            </div>
            <p className="text-xs text-orange-100/90 font-medium truncate max-w-[220px] sm:max-w-md">
              {settings.tagline}
            </p>
          </div>
        </Link>

        {/* Right side quick actions */}
        <div className="flex items-center gap-2">
          {/* Cart button */}
          <button
            onClick={() => navigate('/cart')}
            className={`relative flex items-center gap-2 px-3 py-1.5 rounded-xl font-bold text-xs transition-all shadow-sm ${
              itemCount > 0
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white animate-pulse-subtle'
                : 'bg-white/15 hover:bg-white/25 text-white'
            }`}
            aria-label="View Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {itemCount > 0 && (
              <span className="bg-white text-emerald-800 font-extrabold text-[11px] px-1.5 py-0.2 rounded-full min-w-[18px] text-center shadow">
                {itemCount}
              </span>
            )}
            {itemCount > 0 && (
              <span className="font-bold text-emerald-100 hidden md:inline">
                ₹{subtotal}
              </span>
            )}
          </button>

          {/* User Profile Button (Clean human icon, no robo avatar) */}
          <Link
            to={user?.isLoggedIn ? '/profile' : '/login'}
            className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 px-2.5 py-1.5 rounded-xl transition-colors border border-white/20 text-white shadow-xs"
            title={user?.isLoggedIn ? user.name : 'Sign In'}
          >
            <div className="w-6 h-6 rounded-lg bg-orange-800/80 text-orange-100 flex items-center justify-center font-bold text-xs">
              {user?.isLoggedIn && user?.name ? (
                user.name.charAt(0).toUpperCase()
              ) : (
                <UserIcon className="w-3.5 h-3.5" />
              )}
            </div>
            <span className="text-xs font-bold hidden sm:inline max-w-[85px] truncate text-white">
              {user?.isLoggedIn ? user.name.split(' ')[0] : 'Login'}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
