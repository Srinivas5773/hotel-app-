import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Lock,
  Compass,
  UtensilsCrossed,
  Utensils,
  Navigation
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useSettingsStore } from '../store/settingsStore';
import { Toast } from '../components/Toast';

// Popular Acceptable Village Locations for Quick 1-tap Selection
const acceptableLocations = [
  'Near Ramalayam Temple, Main Street',
  'Opposite Old Panchayat Office',
  'Bazaar Center & Market Road',
  'Near ZP High School Road',
  'Bus Stand Chowk / RTC Stop',
  'Agricultural Fields / Farm Delivery (పొలం డెలివరీ)',
  'Main Road Petrol Bunk Area',
  'Raju Garu Hotel Counter (Self-Pickup)',
];

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { loginSimple, loginGoogle, loginGuest, loginAdmin } = useAuthStore();
  const { settings } = useSettingsStore();

  const [activeTab, setActiveTab] = useState<'customer' | 'admin'>('customer');

  // Candidate / Customer Form Fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locationName, setLocationName] = useState('');
  const [locationUrl, setLocationUrl] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  // Admin Form Fields
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [adminError, setAdminError] = useState('');

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Auto detect user GPS Live Location link
  const handleDetectGPS = () => {
    if (!navigator.geolocation) {
      setToastMessage('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`;
        setLocationUrl(mapsLink);
        if (!locationName) {
          setLocationName(`GPS Live Location (${lat.toFixed(4)}, ${lng.toFixed(4)})`);
        }
        setIsLocating(false);
        setToastMessage('Live GPS Location Link captured successfully! 📍');
      },
      () => {
        setIsLocating(false);
        setToastMessage('Could not fetch GPS. Please type your village landmark.');
      },
      { timeout: 10000 }
    );
  };

  const handleSimpleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setToastMessage('Please enter your full name');
      return;
    }
    if (!phone.trim() || phone.trim().length < 10) {
      setToastMessage('Please enter valid 10-digit mobile number');
      return;
    }
    if (!locationName.trim()) {
      setToastMessage('Please provide your village area or location name');
      return;
    }

    loginSimple(name, phone, locationName, locationUrl);
    setToastMessage(`Welcome ${name.trim()} to Raju Garu Hotel!`);
    navigate('/menu');
  };

  const handleGoogleLogin = () => {
    loginGoogle({
      name: 'Srinivasa Varma',
      phone: '9347671131',
      location: 'Near Ramalayam Temple, Main Street',
      locationUrl: 'https://maps.google.com/?q=16.9890,81.7840',
    });
    setToastMessage('Signed in with Google successfully!');
    navigate('/menu');
  };

  const handleGuestLogin = () => {
    loginGuest();
    navigate('/menu');
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdminError('');
    const success = loginAdmin(adminUser, adminPass);
    if (success) {
      setToastMessage('Welcome Admin Raju Garu!');
      navigate('/admin');
    } else {
      setAdminError('Invalid credentials! (Default: raju / raju123)');
    }
  };

  return (
    <div className="min-h-screen bg-stone-100/70 pb-20 pt-4 px-4 flex items-center justify-center">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      <div className="bg-white rounded-3xl p-5 sm:p-7 max-w-md w-full shadow-xl border border-stone-200 space-y-5 my-2">
        {/* Welcome Header */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center shadow-lg mx-auto mb-2.5 border-2 border-orange-400">
            <UtensilsCrossed className="w-8 h-8 stroke-[2.5]" />
          </div>
          <div className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full mb-1">
            <Utensils className="w-3 h-3 text-orange-600" />
            WELCOME • స్వాగతం
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
            {settings.name || 'Raju Garu Hotel'}
          </h1>
          <p className="text-xs text-orange-700 font-telugu font-semibold mt-0.5">
            {settings.tagline} • Est. {settings.sinceYear}
          </p>
          <p className="text-[11px] text-stone-500 mt-1">
            Direct WhatsApp Ordering to <strong className="text-emerald-700 font-bold">{settings.phone}</strong>
          </p>
        </div>

        {/* Tab Toggle (Customer vs Admin) */}
        <div className="grid grid-cols-2 bg-stone-100 p-1 rounded-2xl text-xs font-bold">
          <button
            onClick={() => setActiveTab('customer')}
            className={`py-2 rounded-xl transition-all ${
              activeTab === 'customer'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Customer / Candidate Login
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
              activeTab === 'admin'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Portal</span>
          </button>
        </div>

        {/* CUSTOMER / CANDIDATE LOGIN TAB */}
        {activeTab === 'customer' ? (
          <div className="space-y-4">
            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-stone-50 hover:bg-stone-100 text-stone-800 font-bold text-xs sm:text-sm py-2.5 px-4 rounded-2xl border border-stone-300 shadow-xs flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>Continue with Google (1-Tap Fast Login)</span>
            </button>

            <div className="flex items-center gap-2 text-stone-400 text-xs my-1">
              <div className="flex-1 h-px bg-stone-200" />
              <span>OR ENTER CANDIDATE DETAILS</span>
              <div className="flex-1 h-px bg-stone-200" />
            </div>

            {/* Candidate Form */}
            <form onSubmit={handleSimpleSubmit} className="space-y-3 text-xs">
              {/* Name */}
              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  Candidate / Customer Name / మీ పేరు *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rama Rao / Suresh Varma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-50 text-stone-900 rounded-xl pl-9 pr-3 py-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>

              {/* Mobile Phone */}
              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  Mobile Number / మొబైల్ నంబర్ *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9347671131"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-50 text-stone-900 rounded-xl pl-9 pr-3 py-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>

              {/* Location Name */}
              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  Name of Location / Village Area *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Near Ramalayam Temple, Main Street"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    className="w-full bg-stone-50 text-stone-900 rounded-xl pl-9 pr-3 py-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                {/* Popular Acceptable Locations Chips */}
                <div className="mt-2 space-y-1">
                  <span className="text-[10px] text-stone-400 font-bold uppercase block">
                    Quick Select Acceptable Locations:
                  </span>
                  <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pr-1">
                    {acceptableLocations.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setLocationName(loc)}
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-lg border transition-all text-left truncate max-w-full ${
                          locationName === loc
                            ? 'bg-orange-600 text-white border-orange-600'
                            : 'bg-stone-50 hover:bg-orange-50 text-stone-600 border-stone-200'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location URL / GPS Link */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-bold text-stone-700 block">
                    Location URL / Google Maps Link (GPS)
                  </label>
                  <button
                    type="button"
                    onClick={handleDetectGPS}
                    disabled={isLocating}
                    className="text-[10px] text-emerald-700 hover:text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1 transition-colors"
                  >
                    <Navigation className="w-3 h-3 text-emerald-600" />
                    <span>{isLocating ? 'Detecting...' : '📍 Auto Detect GPS'}</span>
                  </button>
                </div>
                <div className="relative">
                  <Compass className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="url"
                    placeholder="e.g. https://maps.google.com/?q=16.9890,81.7840"
                    value={locationUrl}
                    onChange={(e) => setLocationUrl(e.target.value)}
                    className="w-full bg-stone-50 text-stone-900 rounded-xl pl-9 pr-3 py-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none text-[11px]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-sm py-3 px-4 rounded-2xl shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all mt-3"
              >
                <span>Enter & Start Ordering</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <button
              onClick={handleGuestLogin}
              className="w-full text-center text-xs font-bold text-stone-500 hover:text-stone-800 py-1"
            >
              Skip for now & Browse Menu as Guest ➔
            </button>
          </div>
        ) : (
          /* ADMIN LOGIN TAB */
          <form onSubmit={handleAdminSubmit} className="space-y-3.5 text-xs">
            <div className="bg-amber-50 text-amber-900 p-2.5 rounded-xl border border-amber-200 text-xs">
              <span className="font-bold block">Hotel Admin Credentials:</span>
              <span className="font-mono">Username: <strong>raju</strong> | Password: <strong>raju123</strong></span>
            </div>

            {adminError && (
              <div className="bg-rose-50 text-rose-700 p-2.5 rounded-xl border border-rose-200 font-bold text-xs">
                {adminError}
              </div>
            )}

            <div>
              <label className="font-bold text-stone-700 block mb-1">
                Admin Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="raju"
                  value={adminUser}
                  onChange={(e) => setAdminUser(e.target.value)}
                  className="w-full bg-stone-900 text-white rounded-xl pl-9 pr-3 py-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-stone-700 block mb-1">
                Admin Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  placeholder="raju123"
                  value={adminPass}
                  onChange={(e) => setAdminPass(e.target.value)}
                  className="w-full bg-stone-900 text-white rounded-xl pl-9 pr-3 py-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-stone-900 hover:bg-black text-white font-extrabold text-sm py-3 px-4 rounded-2xl shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Login to Admin Dashboard</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
