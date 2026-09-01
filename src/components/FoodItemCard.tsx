import React, { useState } from 'react';
import { Plus, Minus, Flame, Clock, Star, Award } from 'lucide-react';
import { MenuItem } from '../types';
import { useCartStore } from '../store/cartStore';

interface FoodItemCardProps {
  item: MenuItem;
  onQuickAddToast?: (itemName: string) => void;
}

export const FoodItemCard: React.FC<FoodItemCardProps> = ({ item, onQuickAddToast }) => {
  const { items, addItem, updateQuantity } = useCartStore();
  const [imgLoaded, setImgLoaded] = useState(true);

  const cartItem = items.find((ci) => ci.menuItem.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!item.isAvailable) return;
    addItem(item);
    if (onQuickAddToast) {
      onQuickAddToast(item.name);
    }
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQuantity(item.id, 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQuantity(item.id, -1);
  };

  // Spicy indicator visual
  const getSpiceBadge = () => {
    if (!item.spicyLevel) return null;
    if (item.spicyLevel === 'Andhra Spicy') {
      return (
        <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
          <Flame className="w-2.5 h-2.5 fill-red-500 text-red-500" />
          Andhra Spicy 🌶️
        </span>
      );
    }
    if (item.spicyLevel === 'Medium') {
      return (
        <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
          Medium Spicy
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
        Mild
      </span>
    );
  };

  return (
    <div
      className={`relative bg-white rounded-2xl p-3.5 border transition-all duration-200 shadow-card flex gap-3.5 items-start ${
        !item.isAvailable
          ? 'opacity-60 bg-stone-50 border-stone-200'
          : 'hover:shadow-md border-stone-200/80 hover:border-orange-200'
      }`}
    >
      {/* Left content details */}
      <div className="flex-1 min-w-0">
        {/* Badges row: Veg/Non-Veg + Special + Spicy */}
        <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
          {/* Veg / Non-Veg Indicator */}
          <div
            className={`w-4 h-4 rounded-sm flex items-center justify-center border ${
              item.isVeg ? 'border-emerald-600 bg-emerald-50' : 'border-rose-600 bg-rose-50'
            }`}
            title={item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
              }`}
            />
          </div>

          {item.isSpecial && (
            <span className="inline-flex items-center gap-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full shadow-xs">
              <Award className="w-2.5 h-2.5" />
              Chef Special
            </span>
          )}

          {getSpiceBadge()}
        </div>

        {/* Dish Title & Telugu Subtitle */}
        <h3 className="font-bold text-stone-900 text-base leading-snug truncate">
          {item.name}
        </h3>
        {item.nameTelugu && (
          <p className="text-xs font-semibold text-orange-800/80 font-telugu mb-1">
            {item.nameTelugu}
          </p>
        )}

        {/* Description */}
        <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-2.5">
          {item.description}
        </p>

        {/* Portion, Time, and Price */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-stone-900 leading-none">
              ₹{item.price}
            </span>
            {item.portion && (
              <span className="text-[10px] text-stone-400 font-medium mt-0.5">
                {item.portion}
              </span>
            )}
          </div>

          {item.preparationTime && (
            <span className="inline-flex items-center gap-1 text-[11px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md font-medium">
              <Clock className="w-3 h-3 text-stone-400" />
              {item.preparationTime}
            </span>
          )}
        </div>
      </div>

      {/* Right side Image & Add button container */}
      <div className="flex flex-col items-center shrink-0 w-28 relative">
        <div className="w-28 h-24 rounded-xl overflow-hidden bg-stone-100 relative shadow-inner border border-stone-200/60">
          {item.imageUrl && imgLoaded ? (
            <img
              src={item.imageUrl}
              alt={item.name}
              onError={() => setImgLoaded(false)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-orange-100/50 text-3xl">
              🍛
            </div>
          )}

          {item.rating && (
            <div className="absolute top-1.5 right-1.5 bg-stone-900/80 backdrop-blur-xs text-amber-300 font-bold text-[10px] px-1.5 py-0.5 rounded-md flex items-center gap-0.5 shadow">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              {item.rating}
            </div>
          )}

          {!item.isAvailable && (
            <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-[1px] flex items-center justify-center p-1">
              <span className="bg-rose-600 text-white font-bold text-[11px] px-2 py-0.5 rounded-md shadow">
                Sold Out
              </span>
            </div>
          )}
        </div>

        {/* Action Button: Add or Stepper */}
        <div className="mt-2 w-full">
          {!item.isAvailable ? (
            <button
              disabled
              className="w-full py-1.5 text-center text-xs font-semibold text-stone-400 bg-stone-100 rounded-lg cursor-not-allowed border border-stone-200"
            >
              Unavailable
            </button>
          ) : quantity === 0 ? (
            <button
              onClick={handleAdd}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs py-1.5 px-3 rounded-xl shadow-md hover:shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-1 border border-orange-400/30"
            >
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
              ADD
            </button>
          ) : (
            <div className="w-full flex items-center justify-between bg-stone-900 text-white rounded-xl px-1.5 py-1 shadow-md border border-stone-700">
              <button
                onClick={handleDecrement}
                className="w-6 h-6 rounded-lg bg-stone-800 hover:bg-rose-600 flex items-center justify-center text-white transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5 stroke-[3]" />
              </button>
              <span className="font-extrabold text-xs text-amber-400 px-1">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="w-6 h-6 rounded-lg bg-stone-800 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
