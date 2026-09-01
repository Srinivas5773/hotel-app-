import React from 'react';
import { Category } from '../types';

interface CategoryBarProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  categoryCounts?: Record<string, number>;
}

export const categoriesList: { id: Category; label: string; icon: string; telugu: string }[] = [
  { id: 'all', label: 'All Items', icon: '🍽️', telugu: 'అన్నీ' },
  { id: 'Tiffins', label: 'Tiffins', icon: '🥞', telugu: 'టిఫిన్స్' },
  { id: 'Meals', label: 'Meals & Thali', icon: '🍱', telugu: 'భోజనం' },
  { id: 'Curries', label: 'Curries & Pulusu', icon: '🥘', telugu: 'కూరలు' },
  { id: 'Biryani', label: 'Biryani', icon: '🍚', telugu: 'బిర్యానీ' },
  { id: 'Snacks', label: 'Snacks & Bajjis', icon: '🍗', telugu: 'స్నాక్స్' },
  { id: 'Beverages', label: 'Coffee & Drinks', icon: '☕', telugu: 'డ్రింక్స్' },
];

export const CategoryBar: React.FC<CategoryBarProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts = {},
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2 px-4 -mx-4 flex gap-2.5 items-center">
      {categoriesList.map((cat) => {
        const isSelected = selectedCategory === cat.id;
        const count = categoryCounts[cat.id];

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl whitespace-nowrap transition-all duration-200 shrink-0 text-xs font-bold border shadow-xs ${
              isSelected
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-orange-600 shadow-md shadow-orange-500/20 scale-[1.02]'
                : 'bg-white text-stone-700 hover:bg-stone-50 border-stone-200/90'
            }`}
          >
            <span className="text-base">{cat.icon}</span>
            <div className="flex flex-col text-left">
              <span className="leading-tight">{cat.label}</span>
              <span
                className={`text-[9px] font-medium font-telugu ${
                  isSelected ? 'text-orange-200' : 'text-stone-400'
                }`}
              >
                {cat.telugu}
              </span>
            </div>
            {typeof count === 'number' && count > 0 && (
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-1 ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-stone-100 text-stone-600'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
