import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, UtensilsCrossed, ShoppingBag, User, ShieldCheck } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';

export const BottomNav: React.FC = () => {
  const { getItemCount } = useCartStore();
  const { isAdminAuthenticated } = useAuthStore();
  const itemCount = getItemCount();

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/menu', label: 'Menu', icon: UtensilsCrossed },
    { to: '/cart', label: 'Cart', icon: ShoppingBag, badge: itemCount },
    { to: '/profile', label: 'Orders', icon: User },
    { to: '/admin', label: 'Admin', icon: ShieldCheck, highlight: isAdminAuthenticated },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-nav md:hidden">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative flex flex-col items-center justify-center flex-1 py-1 transition-all ${
                  isActive
                    ? 'text-orange-600 font-bold scale-105'
                    : 'text-stone-500 hover:text-stone-800 font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative">
                    <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                    {typeof item.badge === 'number' && item.badge > 0 && (
                      <span className="absolute -top-1.5 -right-2.5 bg-orange-600 text-white font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow">
                        {item.badge}
                      </span>
                    )}
                    {item.highlight && (
                      <span className="absolute -top-0.5 -right-1 w-2 h-2 bg-emerald-500 rounded-full border border-white"></span>
                    )}
                  </div>
                  <span className="text-[11px] mt-0.5 tracking-tight">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
