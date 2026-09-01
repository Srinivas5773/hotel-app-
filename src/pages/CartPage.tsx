import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Trash2, 
  Plus, 
  Minus, 
  Truck, 
  Store, 
  MapPin, 
  Phone, 
  User as UserIcon, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Banknote,
  Award,
  Navigation,
  Compass
} from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useOrderStore } from '../store/orderStore';
import { useAuthStore } from '../store/authStore';
import { useSettingsStore } from '../store/settingsStore';
import { Toast } from '../components/Toast';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    items, 
    orderType, 
    setOrderType, 
    updateQuantity, 
    removeItem, 
    clearCart,
    cookingInstruction,
    setCookingInstruction,
    getItemsSubtotal,
    getPackagingFee,
    getDeliveryFee,
    getTotalAmount
  } = useCartStore();

  const { createOrder } = useOrderStore();
  const { user, loginSimple } = useAuthStore();
  const { settings } = useSettingsStore();

  // Form states
  const [customerName, setCustomerName] = useState(user?.name || '');
  const [customerPhone, setCustomerPhone] = useState(user?.phone || '');
  const [customerLocation, setCustomerLocation] = useState(user?.location || '');
  const [locationUrl, setLocationUrl] = useState(user?.locationUrl || '');
  const [isLocating, setIsLocating] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string; location?: string }>({});

  const subtotal = getItemsSubtotal();
  const packagingFee = getPackagingFee(settings.minOrderForFreeDelivery, settings.packagingFee);
  const deliveryFee = getDeliveryFee(settings.minOrderForFreeDelivery, settings.deliveryFee);
  const grandTotal = getTotalAmount(settings.deliveryFee, settings.packagingFee, settings.minOrderForFreeDelivery);

  const handleDetectGPS = () => {
    if (!navigator.geolocation) {
      setToastMessage('Geolocation is not supported on this browser.');
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;
        setLocationUrl(mapsLink);
        if (!customerLocation) {
          setCustomerLocation(`GPS Live Location (${lat.toFixed(4)}, ${lng.toFixed(4)})`);
        }
        setIsLocating(false);
        setToastMessage('Live GPS Location Link attached! 📍');
      },
      () => {
        setIsLocating(false);
        setToastMessage('GPS fetch failed. Please enter your street landmark.');
      }
    );
  };

  const validateForm = () => {
    const errors: { name?: string; phone?: string; location?: string } = {};
    if (!customerName.trim()) {
      errors.name = 'Please enter your name';
    }
    if (!customerPhone.trim() || customerPhone.trim().length < 10) {
      errors.phone = 'Please enter valid 10-digit mobile number';
    }
    if (orderType === 'delivery' && !customerLocation.trim()) {
      errors.location = 'Please enter your village street/landmark address';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) {
      setToastMessage('Please complete the required details.');
      return;
    }

    // Auto-update user profile if logged in/guest
    if (!user || user.isGuest) {
      loginSimple(customerName, customerPhone, customerLocation, locationUrl);
    }

    const newOrder = createOrder({
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerLocation:
        orderType === 'pickup'
          ? 'Raju Garu Hotel Counter (Takeaway)'
          : customerLocation.trim(),
      locationUrl: orderType === 'delivery' ? locationUrl.trim() || undefined : undefined,
      orderType,
      items: [...items],
      itemsSubtotal: subtotal,
      packagingFee,
      deliveryFee,
      totalAmount: grandTotal,
      status: 'pending',
      paymentMethod: 'cod',
      isPaid: false,
      cookingInstruction: cookingInstruction.trim(),
    });

    clearCart();
    navigate(`/order/${newOrder.id}`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-100/60 pb-20 pt-8 px-4 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-card border border-stone-200">
          <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-inner border border-orange-100">
            🛒
          </div>
          <h2 className="text-xl font-black text-stone-900 mb-1">
            Your Cart is Empty
          </h2>
          <p className="text-xs text-stone-500 font-telugu font-semibold mb-2">
            మీ బుట్ట ఖాళీగా ఉంది
          </p>
          <p className="text-xs text-stone-500 mb-6 leading-relaxed">
            Explore our authentic homestyle menu and add hot meals, biryani, or tiffins to your cart.
          </p>
          <Link
            to="/menu"
            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-sm py-3 px-6 rounded-2xl shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <span>Browse Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100/60 pb-28 md:pb-16 pt-4">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      <main className="max-w-3xl mx-auto px-4 space-y-4">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-stone-900 tracking-tight">
              Review Your Order
            </h1>
            <p className="text-xs text-stone-500 font-telugu font-semibold">
              ఆర్డర్ వివరాలు & చెల్లింపు (WhatsApp: {settings.phone})
            </p>
          </div>
          <button
            onClick={() => {
              if (window.confirm('Clear all items from your cart?')) {
                clearCart();
              }
            }}
            className="text-stone-400 hover:text-rose-600 text-xs font-semibold flex items-center gap-1 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Cart</span>
          </button>
        </div>

        {/* 1. Order Mode (Delivery vs Pickup) */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-stone-200">
          <label className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 block">
            Select Order Type • ఆర్డర్ రకం
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => setOrderType('delivery')}
              className={`p-3 rounded-2xl border-2 flex items-center gap-3 transition-all ${
                orderType === 'delivery'
                  ? 'border-orange-600 bg-orange-50/70 text-orange-950 shadow-xs'
                  : 'border-stone-200 hover:bg-stone-50 text-stone-600'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  orderType === 'delivery'
                    ? 'bg-orange-600 text-white'
                    : 'bg-stone-100 text-stone-600'
                }`}
              >
                <Truck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-extrabold text-xs sm:text-sm block leading-tight">
                  Home Delivery
                </span>
                <span className="text-[11px] text-stone-500 font-telugu block">
                  ఇంటికి డెలివరీ (₹{deliveryFee === 0 ? 'FREE' : deliveryFee})
                </span>
              </div>
            </button>

            <button
              onClick={() => setOrderType('pickup')}
              className={`p-3 rounded-2xl border-2 flex items-center gap-3 transition-all ${
                orderType === 'pickup'
                  ? 'border-orange-600 bg-orange-50/70 text-orange-950 shadow-xs'
                  : 'border-stone-200 hover:bg-stone-50 text-stone-600'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  orderType === 'pickup'
                    ? 'bg-orange-600 text-white'
                    : 'bg-stone-100 text-stone-600'
                }`}
              >
                <Store className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-extrabold text-xs sm:text-sm block leading-tight">
                  Takeaway / Parcel
                </span>
                <span className="text-[11px] text-stone-500 font-telugu block">
                  హోటల్ వద్ద పార్శిల్ (0 Fee)
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* 2. Itemized Cart List */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-stone-200 space-y-3">
          <div className="flex items-center justify-between border-b pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Selected Dishes ({items.reduce((s, i) => s + i.quantity, 0)})
            </span>
            <Link
              to="/menu"
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-0.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add More</span>
            </Link>
          </div>

          <div className="divide-y divide-stone-100">
            {items.map((item) => (
              <div key={item.menuItem.id} className="py-3 flex items-center gap-3">
                {/* Thumbnail */}
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-100 relative shrink-0 border border-stone-200">
                  <img
                    src={item.menuItem.imageUrl}
                    alt={item.menuItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-1 left-1 w-2.5 h-2.5 rounded-full ${
                      item.menuItem.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                    }`}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm truncate">
                    {item.menuItem.name}
                  </h4>
                  {item.menuItem.nameTelugu && (
                    <span className="text-[10px] text-orange-800/80 font-telugu block">
                      {item.menuItem.nameTelugu}
                    </span>
                  )}
                  <span className="text-xs font-extrabold text-stone-800">
                    ₹{item.menuItem.price} × {item.quantity} = ₹
                    {item.menuItem.price * item.quantity}
                  </span>
                </div>

                {/* Counter & Delete */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-stone-100 rounded-xl p-1 border border-stone-200">
                    <button
                      onClick={() => updateQuantity(item.menuItem.id, -1)}
                      className="w-6 h-6 rounded-lg bg-white hover:bg-rose-100 text-stone-700 hover:text-rose-700 flex items-center justify-center font-bold text-xs transition-colors shadow-xs"
                      aria-label="Decrease"
                    >
                      <Minus className="w-3 h-3 stroke-[3]" />
                    </button>
                    <span className="w-6 text-center font-black text-xs text-stone-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.menuItem.id, 1)}
                      className="w-6 h-6 rounded-lg bg-white hover:bg-emerald-100 text-stone-700 hover:text-emerald-700 flex items-center justify-center font-bold text-xs transition-colors shadow-xs"
                      aria-label="Increase"
                    >
                      <Plus className="w-3 h-3 stroke-[3]" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.menuItem.id)}
                    className="p-1.5 text-stone-300 hover:text-rose-600 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Special Cooking Instruction */}
          <div className="pt-2 border-t border-stone-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700 mb-1.5">
              <FileText className="w-3.5 h-3.5 text-orange-600" />
              <span>Cooking Notes / Special Requests (ఐచ్ఛికం)</span>
            </div>
            <input
              type="text"
              placeholder="e.g. Extra Gongura chutney, less spicy, pack separately..."
              value={cookingInstruction}
              onChange={(e) => setCookingInstruction(e.target.value)}
              className="w-full bg-stone-50 text-stone-900 placeholder:text-stone-400 text-xs rounded-xl px-3 py-2 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
        </div>

        {/* 3. Customer Details & Delivery Address */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-stone-200 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
            Customer & Delivery Location Information • మీ వివరాలు
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Name */}
            <div>
              <label className="block text-[11px] font-bold text-stone-700 mb-1">
                Your Name / మీ పేరు *
              </label>
              <div className="relative">
                <UserIcon className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="e.g. Rama Rao"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                  }}
                  className={`w-full bg-stone-50 text-stone-900 text-xs rounded-xl pl-9 pr-3 py-2.5 border outline-none ${
                    formErrors.name ? 'border-rose-500 bg-rose-50' : 'border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500'
                  }`}
                />
              </div>
              {formErrors.name && (
                <span className="text-[10px] text-rose-600 font-bold mt-0.5 block">
                  {formErrors.name}
                </span>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-[11px] font-bold text-stone-700 mb-1">
                Mobile Number / ఫోన్ నంబర్ *
              </label>
              <div className="relative">
                <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={customerPhone}
                  onChange={(e) => {
                    setCustomerPhone(e.target.value);
                    if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                  }}
                  className={`w-full bg-stone-50 text-stone-900 text-xs rounded-xl pl-9 pr-3 py-2.5 border outline-none ${
                    formErrors.phone ? 'border-rose-500 bg-rose-50' : 'border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500'
                  }`}
                />
              </div>
              {formErrors.phone && (
                <span className="text-[10px] text-rose-600 font-bold mt-0.5 block">
                  {formErrors.phone}
                </span>
              )}
            </div>

            {/* Address (If Delivery) */}
            {orderType === 'delivery' && (
              <div className="sm:col-span-2 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] font-bold text-stone-700">
                    Village Street / Landmark / Location Name *
                  </label>
                  <button
                    type="button"
                    onClick={handleDetectGPS}
                    disabled={isLocating}
                    className="text-[10px] text-emerald-700 font-bold bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1 transition-colors"
                  >
                    <Navigation className="w-3 h-3 text-emerald-600" />
                    <span>{isLocating ? 'Detecting...' : '📍 Auto Detect GPS'}</span>
                  </button>
                </div>

                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                  <textarea
                    rows={2}
                    placeholder="e.g. Near Ramalayam Temple, Old Post Office Street, Village Center..."
                    value={customerLocation}
                    onChange={(e) => {
                      setCustomerLocation(e.target.value);
                      if (formErrors.location) setFormErrors({ ...formErrors, location: undefined });
                    }}
                    className={`w-full bg-stone-50 text-stone-900 text-xs rounded-xl pl-9 pr-3 py-2 border outline-none resize-none ${
                      formErrors.location ? 'border-rose-500 bg-rose-50' : 'border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500'
                    }`}
                  />
                </div>
                {formErrors.location && (
                  <span className="text-[10px] text-rose-600 font-bold mt-0.5 block">
                    {formErrors.location}
                  </span>
                )}

                {/* Google Maps Location Link */}
                <div className="relative">
                  <Compass className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="url"
                    placeholder="Location Map URL (e.g. https://maps.google.com/?q=...)"
                    value={locationUrl}
                    onChange={(e) => setLocationUrl(e.target.value)}
                    className="w-full bg-stone-50 text-stone-900 text-[11px] rounded-xl pl-9 pr-3 py-2 border border-stone-200 outline-none focus:bg-white focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4. Payment Method: Cash on Delivery / Counter */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-stone-200 space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
            Payment Option • చెల్లింపు పద్ధతి
          </label>

          <div className="p-3.5 rounded-2xl border-2 border-emerald-600 bg-emerald-50/70 text-emerald-950 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Banknote className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-xs sm:text-sm block leading-tight">
                Cash on Delivery / Pay at Counter (నగదు చెల్లింపు)
              </span>
              <span className="text-[11px] text-emerald-800 font-telugu block mt-0.5">
                హోటల్ వద్ద పార్శిల్ తీసుకున్నప్పుడు లేదా ఇంటికి డెలివరీ వచ్చినప్పుడు చెల్లించండి
              </span>
            </div>
          </div>
        </div>

        {/* 5. Bill Summary */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-stone-200 space-y-2 text-xs">
          <span className="font-bold uppercase tracking-wider text-stone-500 block mb-1">
            Bill Summary • బిల్లు వివరాలు
          </span>

          <div className="flex justify-between text-stone-600">
            <span>Items Subtotal</span>
            <span className="font-semibold text-stone-900">₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-stone-600">
            <span>Packaging Charges</span>
            <span className="font-semibold text-stone-900">
              {packagingFee === 0 ? (
                <span className="text-emerald-600 font-bold">FREE</span>
              ) : (
                `₹${packagingFee}`
              )}
            </span>
          </div>

          {orderType === 'delivery' && (
            <div className="flex justify-between text-stone-600">
              <span>Village Delivery Fee</span>
              <span className="font-semibold text-stone-900">
                {deliveryFee === 0 ? (
                  <span className="text-emerald-600 font-bold">FREE</span>
                ) : (
                  `₹${deliveryFee}`
                )}
              </span>
            </div>
          )}

          {subtotal >= settings.minOrderForFreeDelivery && (
            <div className="bg-emerald-50 text-emerald-800 text-[11px] font-bold p-2 rounded-xl border border-emerald-200 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Free Delivery & Packaging applied on orders above ₹{settings.minOrderForFreeDelivery}!</span>
            </div>
          )}

          <div className="border-t pt-2 mt-2 flex justify-between items-center text-sm">
            <div>
              <span className="font-black text-stone-900 block">Total Amount</span>
              <span className="text-[10px] text-stone-400">Inclusive of all local charges</span>
            </div>
            <span className="text-xl font-black text-orange-600">
              ₹{grandTotal}
            </span>
          </div>
        </div>

        {/* Place Order CTA Button */}
        <div className="pt-2">
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <span>Confirm & Place Order (₹{grandTotal})</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-center text-[11px] text-stone-500 font-medium mt-2 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Instant notification sent to Raju Garu on WhatsApp ({settings.phone})!</span>
          </p>
        </div>
      </main>
    </div>
  );
};
