import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  ShoppingBag, 
  Utensils, 
  Settings as SettingsIcon, 
  Plus, 
  LogOut, 
  Search, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  RotateCcw,
  Save,
  TrendingUp,
  Clock,
  AlertCircle,
  Users,
  Phone,
  MessageCircle,
  MapPin,
  Compass,
  ExternalLink
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useMenuStore } from '../store/menuStore';
import { useOrderStore } from '../store/orderStore';
import { useSettingsStore } from '../store/settingsStore';
import { MenuItem, Order, SpiceLevel } from '../types';
import { AdminOrderCard } from '../components/AdminOrderCard';
import { OrderReceipt } from '../components/OrderReceipt';
import { Toast } from '../components/Toast';

export const AdminPage: React.FC = () => {
  const { isAdminAuthenticated, loginAdmin, logoutAdmin, customers, deleteCustomer } = useAuthStore();
  const { items, addItem, updateItem, deleteItem, toggleAvailability, resetToDefaultMenu } = useMenuStore();
  const { orders, updateOrderStatus, clearAllOrders } = useOrderStore();
  const { settings, updateSettings, resetSettings } = useSettingsStore();

  // Admin Auth Form
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'menu' | 'customers' | 'settings'>('dashboard');
  const [customerSearch, setCustomerSearch] = useState('');

  // Orders Filter
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>('all');
  const [orderSearch, setOrderSearch] = useState('');
  const [selectedReceiptOrder, setSelectedReceiptOrder] = useState<Order | null>(null);

  // Menu Search & Modals
  const [menuSearch, setMenuSearch] = useState('');
  const [menuCatFilter, setMenuCatFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  // New/Edit Item Form State
  const [formData, setFormData] = useState({
    name: '',
    nameTelugu: '',
    category: 'Tiffins' as MenuItem['category'],
    price: 60,
    isVeg: true,
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    isSpecial: false,
    isAvailable: true,
    spicyLevel: 'Medium' as SpiceLevel,
    portion: '1 Plate',
    preparationTime: '10-15 mins',
  });

  // Hotel Settings Form State
  const [settingsForm, setSettingsForm] = useState(settings);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Handle Admin Login
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const ok = loginAdmin(adminUser, adminPass);
    if (!ok) {
      setAuthError('Invalid credentials! Default: raju / raju123');
    }
  };

  // Dashboard Stats Calculations
  const totalRevenue = useMemo(() => {
    return orders
      .filter((o) => o.status !== 'cancelled')
      .reduce((sum, o) => sum + o.totalAmount, 0);
  }, [orders]);

  const pendingOrdersCount = orders.filter((o) => o.status === 'pending').length;
  const preparingOrdersCount = orders.filter((o) => o.status === 'preparing').length;
  const deliveredOrdersCount = orders.filter((o) => o.status === 'delivered').length;

  // Most ordered items
  const popularDishes = useMemo(() => {
    const counts: Record<string, { name: string; qty: number; revenue: number }> = {};
    orders.forEach((ord) => {
      if (ord.status !== 'cancelled') {
        ord.items.forEach((item) => {
          if (!counts[item.menuItem.id]) {
            counts[item.menuItem.id] = {
              name: item.menuItem.name,
              qty: 0,
              revenue: 0,
            };
          }
          counts[item.menuItem.id].qty += item.quantity;
          counts[item.menuItem.id].revenue += item.menuItem.price * item.quantity;
        });
      }
    });
    return Object.values(counts)
      .sort((a, b) => b.qty - a.qty)
      .slice(0, 5);
  }, [orders]);

  // Filtered Orders
  const filteredOrders = useMemo(() => {
    return orders.filter((ord) => {
      if (orderStatusFilter !== 'all' && ord.status !== orderStatusFilter) {
        return false;
      }
      if (orderSearch.trim()) {
        const q = orderSearch.toLowerCase();
        const matchNum = ord.orderNumber.toLowerCase().includes(q);
        const matchName = ord.customerName.toLowerCase().includes(q);
        const matchPhone = ord.customerPhone.includes(q);
        return matchNum || matchName || matchPhone;
      }
      return true;
    });
  }, [orders, orderStatusFilter, orderSearch]);

  // Filtered Menu Items
  const filteredMenuItems = useMemo(() => {
    return items.filter((item) => {
      if (menuCatFilter !== 'all' && item.category !== menuCatFilter) {
        return false;
      }
      if (menuSearch.trim()) {
        const q = menuSearch.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          (item.nameTelugu && item.nameTelugu.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [items, menuCatFilter, menuSearch]);

  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.price <= 0) {
      setToastMessage('Dish name and valid price are required');
      return;
    }

    if (editingItem) {
      updateItem(editingItem.id, formData);
      setToastMessage(`Updated ${formData.name}`);
      setEditingItem(null);
    } else {
      addItem(formData);
      setToastMessage(`Added new dish ${formData.name}`);
      setShowAddModal(false);
    }
  };

  const handleOpenEdit = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      nameTelugu: item.nameTelugu || '',
      category: item.category,
      price: item.price,
      isVeg: item.isVeg,
      description: item.description,
      imageUrl: item.imageUrl,
      isSpecial: !!item.isSpecial,
      isAvailable: item.isAvailable,
      spicyLevel: item.spicyLevel || 'Medium',
      portion: item.portion || '1 Plate',
      preparationTime: item.preparationTime || '10-15 mins',
    });
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
    setToastMessage('Hotel settings saved successfully!');
  };

  // If not logged in as Admin, show login form
  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-900 text-white flex items-center justify-center p-4">
        <div className="bg-stone-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-stone-700 space-y-5">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-600 text-white flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-black text-white">
              Hotel Admin Portal
            </h1>
            <p className="text-xs text-amber-400 font-telugu font-semibold mt-0.5">
              రాజు గారి హోటల్ నిర్వహణ లాగిన్
            </p>
          </div>

          <div className="bg-stone-700/60 p-3 rounded-xl border border-stone-600 text-xs text-stone-300">
            <span className="font-bold text-amber-300 block mb-0.5">Default Credentials:</span>
            <span className="font-mono">Username: <strong>raju</strong> | Password: <strong>raju123</strong></span>
          </div>

          {authError && (
            <div className="bg-rose-900/60 text-rose-200 p-3 rounded-xl border border-rose-600 text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleAdminLogin} className="space-y-3.5 text-xs">
            <div>
              <label className="font-bold text-stone-300 block mb-1">Username</label>
              <input
                type="text"
                required
                placeholder="raju"
                value={adminUser}
                onChange={(e) => setAdminUser(e.target.value)}
                className="w-full bg-stone-900 text-white rounded-xl p-3 border border-stone-700 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="font-bold text-stone-300 block mb-1">Password</label>
              <input
                type="password"
                required
                placeholder="raju123"
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
                className="w-full bg-stone-900 text-white rounded-xl p-3 border border-stone-700 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-lg transition-all active:scale-95"
            >
              Sign In as Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-100/70 pb-28 md:pb-16">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      <OrderReceipt
        order={selectedReceiptOrder}
        isOpen={!!selectedReceiptOrder}
        onClose={() => setSelectedReceiptOrder(null)}
      />

      {/* Admin Top Navigation */}
      <header className="sticky top-0 z-40 bg-stone-900 text-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center font-bold text-white shadow">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-black text-sm sm:text-base text-white leading-tight">
                  Admin Dashboard
                </h1>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.2 rounded border border-emerald-400/30">
                  Live Mode
                </span>
              </div>
              <p className="text-[11px] text-stone-400">{settings.name}</p>
            </div>
          </div>

          <button
            onClick={() => {
              logoutAdmin();
              setToastMessage('Logged out from Admin');
            }}
            className="flex items-center gap-1.5 bg-stone-800 hover:bg-rose-900/60 text-stone-300 hover:text-rose-200 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors border border-stone-700"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-5xl mx-auto px-4 flex gap-1 border-t border-stone-800 overflow-x-auto no-scrollbar text-xs font-bold">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`py-2.5 px-3.5 flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'dashboard'
                ? 'border-orange-500 text-orange-400 bg-stone-800/60'
                : 'border-transparent text-stone-400 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`py-2.5 px-3.5 flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'orders'
                ? 'border-orange-500 text-orange-400 bg-stone-800/60'
                : 'border-transparent text-stone-400 hover:text-white'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Live Orders</span>
            {pendingOrdersCount > 0 && (
              <span className="bg-orange-600 text-white text-[10px] px-1.5 rounded-full font-black">
                {pendingOrdersCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('menu')}
            className={`py-2.5 px-3.5 flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'menu'
                ? 'border-orange-500 text-orange-400 bg-stone-800/60'
                : 'border-transparent text-stone-400 hover:text-white'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>Menu ({items.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('customers')}
            className={`py-2.5 px-3.5 flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'customers'
                ? 'border-orange-500 text-orange-400 bg-stone-800/60'
                : 'border-transparent text-stone-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Login Members / Candidates ({customers.length})</span>
          </button>

          <button
            onClick={() => {
              setSettingsForm(settings);
              setActiveTab('settings');
            }}
            className={`py-2.5 px-3.5 flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'settings'
                ? 'border-orange-500 text-orange-400 bg-stone-800/60'
                : 'border-transparent text-stone-400 hover:text-white'
            }`}
          >
            <SettingsIcon className="w-4 h-4" />
            <span>Hotel Settings</span>
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pt-4 space-y-4">
        {/* ================= TAB 1: DASHBOARD ================= */}
        {activeTab === 'dashboard' && (
          <div className="space-y-4">
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-4 rounded-3xl shadow-card border border-stone-200">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <span className="text-2xl font-black text-stone-900 block leading-tight">
                  {orders.length}
                </span>
                <span className="text-xs text-stone-500 font-medium">Total Orders Today</span>
              </div>

              <div className="bg-white p-4 rounded-3xl shadow-card border border-stone-200">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-2xl font-black text-emerald-600 block leading-tight">
                  ₹{totalRevenue}
                </span>
                <span className="text-xs text-stone-500 font-medium">Total Revenue</span>
              </div>

              <div className="bg-white p-4 rounded-3xl shadow-card border border-stone-200">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-2xl font-black text-amber-600 block leading-tight">
                  {pendingOrdersCount + preparingOrdersCount}
                </span>
                <span className="text-xs text-stone-500 font-medium">Orders in Kitchen</span>
              </div>

              <div className="bg-white p-4 rounded-3xl shadow-card border border-stone-200">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-2xl font-black text-blue-600 block leading-tight">
                  {deliveredOrdersCount}
                </span>
                <span className="text-xs text-stone-500 font-medium">Delivered / Done</span>
              </div>
            </div>

            {/* Quick Action Banner */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-5 text-white shadow-warm flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <h3 className="font-extrabold text-base mb-0.5">
                  Incoming Orders Live Feed
                </h3>
                <p className="text-xs text-orange-100">
                  {pendingOrdersCount} orders waiting for kitchen preparation.
                </p>
              </div>

              <button
                onClick={() => setActiveTab('orders')}
                className="bg-white text-stone-900 hover:bg-stone-100 font-extrabold text-xs py-2.5 px-5 rounded-2xl shadow transition-all active:scale-95 shrink-0"
              >
                Manage Live Orders ➔
              </button>
            </div>

            {/* Top Most Ordered Items */}
            <div className="bg-white rounded-3xl p-5 shadow-card border border-stone-200 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Most Ordered Dishes Today • అత్యధికంగా అమ్ముడైన వంటకాలు
              </h3>

              {popularDishes.length === 0 ? (
                <p className="text-xs text-stone-400 py-3">No orders yet today.</p>
              ) : (
                <div className="divide-y divide-stone-100 text-xs">
                  {popularDishes.map((dish, idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 font-black text-xs flex items-center justify-center">
                          #{idx + 1}
                        </span>
                        <span className="font-bold text-stone-900">{dish.name}</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-stone-500">
                          {dish.qty} {dish.qty === 1 ? 'plate' : 'plates'}
                        </span>
                        <span className="font-black text-stone-900">
                          ₹{dish.revenue}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 2: LIVE ORDERS ================= */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {/* Filter and Search Bar */}
            <div className="bg-white p-3.5 rounded-3xl shadow-card border border-stone-200 space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search by order #, customer name or phone..."
                    value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
                    className="w-full bg-stone-50 text-stone-900 text-xs rounded-xl pl-9 pr-3 py-2 border border-stone-200 outline-none focus:bg-white focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={orderStatusFilter}
                    onChange={(e) => setOrderStatusFilter(e.target.value)}
                    className="bg-stone-50 text-stone-900 text-xs rounded-xl px-3 py-2 border border-stone-200 font-semibold outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="all">All Statuses ({orders.length})</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="preparing">Preparing</option>
                    <option value="ready">Ready for Pickup</option>
                    <option value="out_for_delivery">Out for Delivery</option>
                    <option value="delivered">Delivered / Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>

                  <button
                    onClick={() => {
                      if (window.confirm('Clear all orders history?')) {
                        clearAllOrders();
                        setToastMessage('Cleared all orders.');
                      }
                    }}
                    className="text-stone-400 hover:text-rose-600 p-2 text-xs rounded-xl hover:bg-rose-50"
                    title="Clear All Orders"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Orders Feed */}
            {filteredOrders.length === 0 ? (
              <div className="bg-white rounded-3xl p-8 text-center border border-stone-200 shadow-card">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-stone-900">No orders matching filter</h3>
                <p className="text-xs text-stone-400 mt-1">
                  Try changing your status filter or search keywords.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filteredOrders.map((order) => (
                  <AdminOrderCard
                    key={order.id}
                    order={order}
                    onUpdateStatus={updateOrderStatus}
                    onViewReceipt={(ord) => setSelectedReceiptOrder(ord)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: MENU MANAGEMENT ================= */}
        {activeTab === 'menu' && (
          <div className="space-y-4">
            {/* Top Toolbar */}
            <div className="bg-white p-3.5 rounded-3xl shadow-card border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-1 items-center gap-2 w-full">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search menu dishes..."
                    value={menuSearch}
                    onChange={(e) => setMenuSearch(e.target.value)}
                    className="w-full bg-stone-50 text-stone-900 text-xs rounded-xl pl-9 pr-3 py-2 border border-stone-200 outline-none focus:bg-white focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <select
                  value={menuCatFilter}
                  onChange={(e) => setMenuCatFilter(e.target.value)}
                  className="bg-stone-50 text-stone-900 text-xs rounded-xl px-3 py-2 border border-stone-200 font-semibold outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All Categories</option>
                  <option value="Tiffins">Tiffins</option>
                  <option value="Meals">Meals</option>
                  <option value="Curries">Curries</option>
                  <option value="Biryani">Biryani</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Beverages">Beverages</option>
                </select>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    if (window.confirm('Reset all items to default Andhra hotel menu?')) {
                      resetToDefaultMenu();
                      setToastMessage('Reset menu to original items.');
                    }
                  }}
                  className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold flex items-center gap-1"
                  title="Reset Menu"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>

                <button
                  onClick={() => {
                    setEditingItem(null);
                    setFormData({
                      name: '',
                      nameTelugu: '',
                      category: 'Tiffins',
                      price: 60,
                      isVeg: true,
                      description: '',
                      imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
                      isSpecial: false,
                      isAvailable: true,
                      spicyLevel: 'Medium',
                      portion: '1 Plate',
                      preparationTime: '10-15 mins',
                    });
                    setShowAddModal(true);
                  }}
                  className="flex-1 sm:flex-none bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-2 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Add New Dish</span>
                </button>
              </div>
            </div>

            {/* Menu Items Table */}
            <div className="bg-white rounded-3xl shadow-card border border-stone-200 overflow-hidden">
              <div className="divide-y divide-stone-100 text-xs">
                {filteredMenuItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-stone-50/80 transition-colors"
                  >
                    {/* Item details */}
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-100 relative shrink-0 border border-stone-200">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute top-1 left-1 w-2.5 h-2.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-stone-900 text-sm">
                            {item.name}
                          </h4>
                          {item.isSpecial && (
                            <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-1.5 rounded-full">
                              Special
                            </span>
                          )}
                        </div>
                        {item.nameTelugu && (
                          <span className="text-[11px] text-orange-800 font-telugu block">
                            {item.nameTelugu}
                          </span>
                        )}
                        <span className="text-[11px] text-stone-500">
                          {item.category} • ₹{item.price} • {item.portion || '1 Plate'}
                        </span>
                      </div>
                    </div>

                    {/* Controls & In Stock Toggle */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                      {/* In Stock / Sold Out Toggle */}
                      <button
                        onClick={() => toggleAvailability(item.id)}
                        className={`px-3 py-1 rounded-xl font-extrabold text-xs transition-all ${
                          item.isAvailable
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                        }`}
                      >
                        {item.isAvailable ? 'In Stock ✅' : 'Sold Out ❌'}
                      </button>

                      {/* Edit Button */}
                      <button
                        onClick={() => handleOpenEdit(item)}
                        className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold"
                        title="Edit Dish"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete dish "${item.name}"?`)) {
                            deleteItem(item.id);
                            setToastMessage(`Deleted ${item.name}`);
                          }
                        }}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50"
                        title="Delete Dish"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add / Edit Dish Modal */}
            {(showAddModal || editingItem) && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-xs">
                <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-stone-200 text-stone-900 max-h-[90vh] overflow-y-auto">
                  <h3 className="text-base font-black text-stone-900 mb-3">
                    {editingItem ? 'Edit Dish Details' : 'Add New Menu Dish'}
                  </h3>

                  <form onSubmit={handleSaveItem} className="space-y-3 text-xs">
                    <div>
                      <label className="font-bold text-stone-700 block mb-1">
                        Dish Name (English) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-stone-700 block mb-1">
                        Telugu Title (తెలుగు పేరు)
                      </label>
                      <input
                        type="text"
                        value={formData.nameTelugu}
                        onChange={(e) => setFormData({ ...formData, nameTelugu: e.target.value })}
                        className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="font-bold text-stone-700 block mb-1">Category *</label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                          className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 font-semibold outline-none"
                        >
                          <option value="Tiffins">Tiffins</option>
                          <option value="Meals">Meals</option>
                          <option value="Curries">Curries</option>
                          <option value="Biryani">Biryani</option>
                          <option value="Snacks">Snacks</option>
                          <option value="Beverages">Beverages</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-bold text-stone-700 block mb-1">Price (₹) *</label>
                        <input
                          type="number"
                          required
                          min="1"
                          value={formData.price}
                          onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                          className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 font-bold outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="font-bold text-stone-700 block mb-1">Food Type</label>
                        <select
                          value={formData.isVeg ? 'veg' : 'nonveg'}
                          onChange={(e) => setFormData({ ...formData, isVeg: e.target.value === 'veg' })}
                          className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 font-semibold outline-none"
                        >
                          <option value="veg">🟢 Pure Veg</option>
                          <option value="nonveg">🔴 Non-Veg</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-bold text-stone-700 block mb-1">Spicy Level</label>
                        <select
                          value={formData.spicyLevel}
                          onChange={(e) => setFormData({ ...formData, spicyLevel: e.target.value as any })}
                          className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 font-semibold outline-none"
                        >
                          <option value="Mild">Mild</option>
                          <option value="Medium">Medium</option>
                          <option value="Andhra Spicy">Andhra Spicy 🌶️</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-bold text-stone-700 block mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full bg-stone-50 rounded-xl p-2 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-stone-700 block mb-1">Image URL</label>
                      <input
                        type="url"
                        value={formData.imageUrl}
                        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                        className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 outline-none text-[11px]"
                      />
                    </div>

                    <div className="flex items-center gap-4 pt-1">
                      <label className="flex items-center gap-1.5 font-bold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.isSpecial}
                          onChange={(e) => setFormData({ ...formData, isSpecial: e.target.checked })}
                          className="rounded text-orange-600 focus:ring-orange-500"
                        />
                        <span>Today's Special</span>
                      </label>

                      <label className="flex items-center gap-1.5 font-bold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.isAvailable}
                          onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
                          className="rounded text-orange-600 focus:ring-orange-500"
                        />
                        <span>In Stock</span>
                      </label>
                    </div>

                    <div className="flex gap-2 pt-3">
                      <button
                        type="button"
                        onClick={() => {
                          setShowAddModal(false);
                          setEditingItem(null);
                        }}
                        className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-2.5 rounded-xl"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded-xl shadow-md"
                      >
                        {editingItem ? 'Save Updates' : 'Add to Menu'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 4: CUSTOMERS / LOGIN MEMBERS DIRECTORY ================= */}
        {activeTab === 'customers' && (
          <div className="space-y-4">
            {/* Top Search Toolbar */}
            <div className="bg-white p-4 rounded-3xl shadow-card border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex-1 w-full relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search members by name, phone (e.g. 9347671131), or village location..."
                  value={customerSearch}
                  onChange={(e) => setCustomerSearch(e.target.value)}
                  className="w-full bg-stone-50 rounded-2xl pl-10 pr-4 py-2.5 border border-stone-200 outline-none text-xs focus:bg-white focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex items-center gap-2 shrink-0 text-xs text-stone-500 font-bold">
                <span className="bg-orange-50 text-orange-700 px-3 py-1.5 rounded-xl border border-orange-200">
                  Total Members: {customers.length}
                </span>
              </div>
            </div>

            {/* Customers List */}
            {customers.filter((c) => {
              const q = customerSearch.toLowerCase().trim();
              if (!q) return true;
              return (
                c.name.toLowerCase().includes(q) ||
                c.phone.includes(q) ||
                c.location.toLowerCase().includes(q)
              );
            }).length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-stone-200 shadow-card">
                <Users className="w-12 h-12 text-stone-300 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-stone-900">No members found</h3>
                <p className="text-xs text-stone-400 mt-1">
                  Try searching with a different name or mobile number.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {customers
                  .filter((c) => {
                    const q = customerSearch.toLowerCase().trim();
                    if (!q) return true;
                    return (
                      c.name.toLowerCase().includes(q) ||
                      c.phone.includes(q) ||
                      c.location.toLowerCase().includes(q)
                    );
                  })
                  .map((customer) => {
                    const customerOrders = orders.filter(
                      (o) => o.customerPhone.trim() === customer.phone.trim()
                    );
                    const cleanPhone = customer.phone.replace(/[^0-9]/g, '');

                    return (
                      <div
                        key={customer.id}
                        className="bg-white rounded-3xl p-4 sm:p-5 shadow-card border border-stone-200 space-y-3 hover:border-orange-300 transition-all flex flex-col justify-between"
                      >
                        {/* Member Header */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center text-lg font-black shadow-md shrink-0 border border-orange-300">
                              {customer.name ? customer.name.charAt(0).toUpperCase() : '👤'}
                            </div>
                            <div>
                              <h4 className="font-extrabold text-stone-900 text-sm sm:text-base leading-tight">
                                {customer.name}
                              </h4>
                              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 mt-0.5">
                                📞 {customer.phone}
                              </span>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200">
                              {customer.authProvider || 'phone'}
                            </span>
                            {customer.registeredAt && (
                              <span className="text-[10px] text-stone-400 block mt-1">
                                {new Date(customer.registeredAt).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                })}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Location & Google Maps Link */}
                        <div className="bg-stone-50 p-2.5 rounded-2xl text-xs space-y-1.5 border border-stone-200/70">
                          <div className="flex items-center gap-1.5 text-stone-700">
                            <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                            <span className="font-medium truncate">{customer.location || 'Village Area'}</span>
                          </div>

                          {customer.locationUrl && (
                            <div className="flex items-center justify-between pt-1 border-t border-stone-200/60">
                              <span className="text-[10px] text-stone-400 font-medium">GPS Location Link:</span>
                              <a
                                href={customer.locationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                              >
                                <Compass className="w-3 h-3 text-blue-500" />
                                <span>Open in Maps</span>
                                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Orders count & 1-tap Call / WhatsApp Action Bar */}
                        <div className="flex items-center justify-between pt-2 border-t border-stone-100 gap-2">
                          <span className="text-xs font-bold text-stone-600">
                            Total Orders: <strong className="text-orange-600 font-black">{customerOrders.length}</strong>
                          </span>

                          <div className="flex items-center gap-1.5">
                            <a
                              href={`tel:${customer.phone}`}
                              className="p-2 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl text-stone-700 font-bold flex items-center gap-1 transition-colors text-xs border border-stone-200"
                              title="Call Member"
                            >
                              <Phone className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Call</span>
                            </a>

                            <a
                              href={`https://wa.me/91${cleanPhone}?text=${encodeURIComponent(
                                `Namaskaram ${customer.name}! Greetings from Raju Garu Hotel.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl font-bold flex items-center gap-1 transition-colors text-xs border border-emerald-200"
                              title="WhatsApp Member"
                            >
                              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                              <span>WhatsApp</span>
                            </a>

                            <button
                              onClick={() => {
                                if (window.confirm(`Delete member record for ${customer.name}?`)) {
                                  deleteCustomer(customer.id);
                                  setToastMessage(`Deleted ${customer.name}`);
                                }
                              }}
                              className="p-2 hover:bg-rose-50 text-stone-300 hover:text-rose-600 rounded-xl transition-colors"
                              title="Delete Record"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 5: HOTEL SETTINGS ================= */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl p-5 shadow-card border border-stone-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="font-extrabold text-base text-stone-900">
                  Hotel Profile & Delivery Settings
                </h3>
                <p className="text-xs text-stone-500">
                  Update contact, WhatsApp notifications, timings, and delivery fees.
                </p>
              </div>
              <button
                onClick={() => {
                  if (window.confirm('Reset hotel settings to defaults?')) {
                    resetSettings();
                    setSettingsForm(settings);
                    setToastMessage('Reset settings.');
                  }
                }}
                className="text-stone-400 hover:text-stone-700 text-xs font-bold"
              >
                Reset Defaults
              </button>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    value={settingsForm.name}
                    onChange={(e) => setSettingsForm({ ...settingsForm, name: e.target.value })}
                    className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Tagline / Description
                  </label>
                  <input
                    type="text"
                    value={settingsForm.tagline}
                    onChange={(e) => setSettingsForm({ ...settingsForm, tagline: e.target.value })}
                    className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Calling Helpline Number
                  </label>
                  <input
                    type="text"
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    WhatsApp Orders Receiver Number *
                  </label>
                  <input
                    type="text"
                    value={settingsForm.whatsappNumber}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })}
                    className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-bold text-stone-700 block mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    value={settingsForm.address}
                    onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                    className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-bold text-stone-700 block mb-1">
                    Google Maps Link
                  </label>
                  <input
                    type="url"
                    value={settingsForm.googleMapsUrl}
                    onChange={(e) => setSettingsForm({ ...settingsForm, googleMapsUrl: e.target.value })}
                    className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Opening Hours
                  </label>
                  <input
                    type="text"
                    value={settingsForm.openingHours}
                    onChange={(e) => setSettingsForm({ ...settingsForm, openingHours: e.target.value })}
                    className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>



                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Village Delivery Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={settingsForm.deliveryFee}
                    onChange={(e) => setSettingsForm({ ...settingsForm, deliveryFee: Number(e.target.value) })}
                    className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 outline-none font-bold"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Free Delivery on Orders Above (₹)
                  </label>
                  <input
                    type="number"
                    value={settingsForm.minOrderForFreeDelivery}
                    onChange={(e) => setSettingsForm({ ...settingsForm, minOrderForFreeDelivery: Number(e.target.value) })}
                    className="w-full bg-stone-50 rounded-xl p-2.5 border border-stone-200 outline-none font-bold"
                  />
                </div>
              </div>

              <div className="pt-3 border-t">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-sm py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Save All Settings</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};
