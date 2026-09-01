import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Edit3, 
  Clock, 
  ShoppingBag, 
  ChevronRight, 
  ShieldCheck, 
  LogOut, 
  RefreshCw, 
  ExternalLink,
  CheckCircle2,
  Printer
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useOrderStore } from '../store/orderStore';
import { useCartStore } from '../store/cartStore';
import { useSettingsStore } from '../store/settingsStore';
import { OrderReceipt } from '../components/OrderReceipt';
import { Order } from '../types';
import { Toast } from '../components/Toast';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateProfile, logout } = useAuthStore();
  const { orders } = useOrderStore();
  const { addItem } = useCartStore();
  const { settings } = useSettingsStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [editPhone, setEditPhone] = useState(user?.phone || '');
  const [editLocation, setEditLocation] = useState(user?.location || '');
  const [selectedReceiptOrder, setSelectedReceiptOrder] = useState<Order | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // User's orders (or all latest orders if demo)
  const userOrders = user?.phone
    ? orders.filter(
        (o) =>
          o.customerPhone.trim() === user.phone.trim() ||
          o.customerName.toLowerCase() === user.name.toLowerCase()
      )
    : orders.slice(0, 5);

  const activeOrders = userOrders.filter(
    (o) => o.status !== 'delivered' && o.status !== 'cancelled'
  );
  const pastOrders = userOrders.filter(
    (o) => o.status === 'delivered' || o.status === 'cancelled'
  );

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName.trim() || !editPhone.trim()) {
      setToastMessage('Name and Phone are required.');
      return;
    }
    updateProfile({
      name: editName.trim(),
      phone: editPhone.trim(),
      location: editLocation.trim(),
    });
    setIsEditing(false);
    setToastMessage('Profile updated successfully!');
  };

  const handleReorder = (order: Order) => {
    order.items.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        addItem(item.menuItem);
      }
    });
    setToastMessage('Items added to cart!');
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-stone-100/60 pb-28 md:pb-16 pt-4">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      <OrderReceipt
        order={selectedReceiptOrder}
        isOpen={!!selectedReceiptOrder}
        onClose={() => setSelectedReceiptOrder(null)}
      />

      <main className="max-w-3xl mx-auto px-4 space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-5 shadow-card border border-stone-200 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            {/* Avatar with Initials */}
            <div className="relative">
              {user?.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-orange-500 shadow-md"
                />
              ) : (
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center text-3xl font-black shadow-md border-2 border-orange-400">
                  {user?.name ? user.name.charAt(0).toUpperCase() : '👤'}
                </div>
              )}
              <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full border-2 border-white shadow">
                <CheckCircle2 className="w-3 h-3" />
              </span>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center sm:text-left space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h1 className="text-xl font-black text-stone-900 leading-tight">
                  {user?.name || 'Valued Customer'}
                </h1>
                <button
                  onClick={() => {
                    setEditName(user?.name || '');
                    setEditPhone(user?.phone || '');
                    setEditLocation(user?.location || '');
                    setIsEditing(true);
                  }}
                  className="inline-flex items-center justify-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 bg-orange-50 px-2.5 py-1 rounded-xl border border-orange-200/60 transition-colors self-center sm:self-auto"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Edit Profile</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-stone-500 pt-1">
                <span className="flex items-center gap-1 font-medium bg-stone-100 px-2.5 py-0.5 rounded-lg">
                  <Phone className="w-3 h-3 text-emerald-600" />
                  {user?.phone || 'No Phone Added'}
                </span>
                <span className="flex items-center gap-1 font-medium bg-stone-100 px-2.5 py-0.5 rounded-lg max-w-xs truncate">
                  <MapPin className="w-3 h-3 text-orange-600 shrink-0" />
                  <span className="truncate">{user?.location || 'Village Area'}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-stone-100 text-center text-xs">
            <div className="bg-stone-50 p-2 rounded-xl">
              <span className="text-base font-black text-stone-900 block">
                {userOrders.length}
              </span>
              <span className="text-[11px] text-stone-500 font-medium">Total Orders</span>
            </div>
            <div className="bg-orange-50 p-2 rounded-xl">
              <span className="text-base font-black text-orange-600 block">
                {activeOrders.length}
              </span>
              <span className="text-[11px] text-orange-800 font-medium">Active</span>
            </div>
            <div className="bg-emerald-50 p-2 rounded-xl">
              <span className="text-base font-black text-emerald-600 block">
                {pastOrders.length}
              </span>
              <span className="text-[11px] text-emerald-800 font-medium">Completed</span>
            </div>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {isEditing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-xs">
            <div className="bg-white w-full max-w-sm rounded-3xl p-5 shadow-2xl border border-stone-200">
              <h3 className="text-base font-black text-stone-900 mb-3">
                Update Account Information
              </h3>
              <form onSubmit={handleSaveProfile} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full bg-stone-50 text-stone-900 rounded-xl p-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    className="w-full bg-stone-50 text-stone-900 rounded-xl p-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">Village Address / Landmark</label>
                  <textarea
                    rows={2}
                    value={editLocation}
                    onChange={(e) => setEditLocation(e.target.value)}
                    className="w-full bg-stone-50 text-stone-900 rounded-xl p-2 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-2.5 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded-xl shadow-md"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* 1. Active Orders Section */}
        {activeOrders.length > 0 && (
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange-800 flex items-center gap-1.5 px-1">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping" />
              Active Orders in Kitchen ({activeOrders.length})
            </h3>

            {activeOrders.map((order) => (
              <div
                key={order.id}
                onClick={() => navigate(`/order/${order.id}`)}
                className="bg-white rounded-2xl p-4 shadow-card border-2 border-orange-200/80 hover:border-orange-400 cursor-pointer transition-all space-y-2.5 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-stone-900 text-sm">
                      {order.orderNumber}
                    </span>
                    <span className="bg-orange-100 text-orange-800 font-bold text-[10px] uppercase px-2 py-0.5 rounded-md">
                      {order.status.replace('_', ' ')}
                    </span>
                  </div>
                  <span className="text-xs font-black text-orange-600">
                    ₹{order.totalAmount}
                  </span>
                </div>

                <p className="text-xs text-stone-600 truncate">
                  {order.items.map((i) => `${i.quantity}x ${i.menuItem.name}`).join(', ')}
                </p>

                <div className="flex items-center justify-between text-[11px] text-stone-400 pt-1 border-t border-stone-100">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-orange-500" />
                    {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  <span className="font-bold text-orange-600 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    <span>Track Live</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Order History */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Past Orders History • గత ఆర్డర్లు
            </h3>
            <span className="text-xs text-stone-400 font-medium">
              {pastOrders.length} Orders
            </span>
          </div>

          {pastOrders.length === 0 && activeOrders.length === 0 ? (
            <div className="bg-white rounded-2xl p-6 text-center border border-stone-200 shadow-card">
              <ShoppingBag className="w-10 h-10 text-stone-300 mx-auto mb-2" />
              <p className="text-xs font-bold text-stone-700">No past orders yet</p>
              <p className="text-[11px] text-stone-400 mt-0.5">
                Your completed orders will appear here for 1-click reordering.
              </p>
            </div>
          ) : (
            pastOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl p-4 shadow-card border border-stone-200 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-black text-stone-900 text-xs sm:text-sm">
                      {order.orderNumber}
                    </span>
                    <span className="text-[11px] text-stone-400 block">
                      {new Date(order.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                      order.status === 'delivered'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="bg-stone-50 p-2 rounded-xl text-xs text-stone-700 divide-y divide-stone-200/50">
                  {order.items.map((it, idx) => (
                    <div key={idx} className="py-1 flex justify-between">
                      <span>
                        {it.quantity}x {it.menuItem.name}
                      </span>
                      <span className="font-bold">
                        ₹{it.menuItem.price * it.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="text-xs font-black text-stone-900">
                    Total: <span className="text-orange-600 font-black">₹{order.totalAmount}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedReceiptOrder(order)}
                      className="p-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-lg text-xs flex items-center gap-1 transition-colors"
                      title="View Receipt"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span className="hidden xs:inline">Bill</span>
                    </button>

                    <button
                      onClick={() => handleReorder(order)}
                      className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1 shadow-xs active:scale-95 transition-all"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Re-Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 3. Quick Account Links & Admin Portal Shortcut */}
        <div className="bg-white rounded-2xl p-4 shadow-card border border-stone-200 space-y-2 text-xs">
          <span className="font-bold uppercase tracking-wider text-stone-500 block mb-1">
            Account & Support
          </span>

          <Link
            to="/admin"
            className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-950 font-bold border border-amber-200 transition-colors"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
              <span>Hotel Admin Portal (రక్షణ నిర్వహణ)</span>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-600" />
          </Link>

          <a
            href={`tel:${settings.phone}`}
            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-50 text-stone-700 font-semibold transition-colors"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Helpline: {settings.phone}</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
          </a>

          <button
            onClick={() => {
              logout();
              navigate('/login');
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-rose-50 text-rose-700 font-bold transition-colors"
          >
            <div className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              <span>Switch User / Log Out</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
};
