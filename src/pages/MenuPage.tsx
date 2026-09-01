import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Search, 
  X, 
  ShoppingBag, 
  ArrowRight, 
  Flame
} from 'lucide-react';
import { useMenuStore } from '../store/menuStore';
import { useCartStore } from '../store/cartStore';
import { Category } from '../types';
import { CategoryBar } from '../components/CategoryBar';
import { FoodItemCard } from '../components/FoodItemCard';
import { Toast } from '../components/Toast';

export const MenuPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { items } = useMenuStore();
  const { getItemCount, getItemsSubtotal } = useCartStore();

  const categoryParam = (searchParams.get('category') as Category) || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<Category>(categoryParam);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [spiceFilter, setSpiceFilter] = useState<'all' | 'spicy' | 'mild'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync state if URL search param changes
  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    if (initialSearch) setSearchQuery(initialSearch);
  }, [initialSearch]);

  const handleCategoryChange = (cat: Category) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  // Category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: items.length };
    items.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [items]);

  // Filtered dishes
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Veg/Non-Veg filter
      if (vegFilter === 'veg' && !item.isVeg) return false;
      if (vegFilter === 'nonveg' && item.isVeg) return false;

      // Spice filter
      if (spiceFilter === 'spicy' && item.spicyLevel !== 'Andhra Spicy') return false;
      if (spiceFilter === 'mild' && item.spicyLevel !== 'Mild') return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchTel = item.nameTelugu ? item.nameTelugu.toLowerCase().includes(q) : false;
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchCat = item.category.toLowerCase().includes(q);
        return matchName || matchTel || matchDesc || matchCat;
      }

      return true;
    });
  }, [items, selectedCategory, vegFilter, spiceFilter, searchQuery]);

  const itemCount = getItemCount();
  const subtotal = getItemsSubtotal();

  return (
    <div className="min-h-screen bg-stone-100/60 pb-28 md:pb-16">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Top Search & Filter Bar */}
      <div className="sticky top-14 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs px-4 py-3">
        <div className="max-w-4xl mx-auto space-y-2.5">
          {/* Search Box */}
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by dish name, Telugu title, or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-100/80 text-stone-900 placeholder:text-stone-400 text-xs sm:text-sm rounded-xl pl-9 pr-9 py-2 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1 rounded-full text-stone-400 hover:text-stone-700"
                aria-label="Clear Search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Filter Buttons (Veg/Non-Veg & Spice) */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar pt-1 text-xs">
            {/* Veg / Non-Veg Toggles */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setVegFilter(vegFilter === 'veg' ? 'all' : 'veg')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-xl font-bold border transition-all ${
                  vegFilter === 'veg'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 border border-white"></span>
                <span>Pure Veg (శాకాహారం)</span>
              </button>

              <button
                onClick={() => setVegFilter(vegFilter === 'nonveg' ? 'all' : 'nonveg')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-xl font-bold border transition-all ${
                  vegFilter === 'nonveg'
                    ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500 border border-white"></span>
                <span>Non-Veg (మాంసాహారం)</span>
              </button>
            </div>

            {/* Spicy Filter */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setSpiceFilter(spiceFilter === 'spicy' ? 'all' : 'spicy')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-xl font-bold border transition-all ${
                  spiceFilter === 'spicy'
                    ? 'bg-red-600 text-white border-red-600 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                <Flame className="w-3 h-3 text-red-500" />
                <span>Andhra Spicy</span>
              </button>

              {(vegFilter !== 'all' || spiceFilter !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setVegFilter('all');
                    setSpiceFilter('all');
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-stone-500 hover:text-stone-800 text-[11px] font-bold underline px-1"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 pt-3 space-y-4">
        {/* Category Carousel Bar */}
        <CategoryBar
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          categoryCounts={categoryCounts}
        />

        {/* Section Heading & Result count */}
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-base font-extrabold text-stone-900">
              {selectedCategory === 'all'
                ? 'All Dishes • పూర్తి మెనూ'
                : `${selectedCategory} Special Dishes`}
            </h2>
            <p className="text-xs text-stone-500 font-medium">
              Showing {filteredItems.length} delicious home-style items
            </p>
          </div>

          <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Freshly Cooked
          </div>
        </div>

        {/* Dishes Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center border border-stone-200 my-6 shadow-card">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-base font-bold text-stone-900 mb-1">
              No dishes found
            </h3>
            <p className="text-xs text-stone-500 max-w-xs mx-auto mb-4">
              We couldn't find any dishes matching your filters or search term "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setVegFilter('all');
                setSpiceFilter('all');
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredItems.map((item) => (
              <FoodItemCard
                key={item.id}
                item={item}
                onQuickAddToast={(name) => setToastMessage(`Added ${name} to cart!`)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Floating Bottom Cart Bar when items are selected */}
      {itemCount > 0 && (
        <div className="fixed bottom-16 md:bottom-4 left-0 right-0 z-40 px-4 pointer-events-none animate-slideUp">
          <div className="max-w-md mx-auto pointer-events-auto bg-stone-950 text-white rounded-2xl p-3 shadow-2xl flex items-center justify-between border border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-stone-300">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'} added
                </span>
                <span className="text-base font-black text-amber-400 leading-none">
                  ₹{subtotal}
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate('/cart')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm py-2 px-4 rounded-xl shadow-md flex items-center gap-1.5 active:scale-95 transition-all"
            >
              <span>View Cart • ఆర్డర్ చేయండి</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
