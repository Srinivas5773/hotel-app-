import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Printer, 
  ChevronDown,
  CheckCircle2,
  Flame,
  Truck,
  Store,
  Check
} from 'lucide-react';
import { Order, OrderStatus } from '../types';

interface AdminOrderCardProps {
  order: Order;
  onUpdateStatus: (orderId: string, newStatus: OrderStatus) => void;
  onViewReceipt: (order: Order) => void;
}

const statusOptions: { value: OrderStatus; label: string; color: string }[] = [
  { value: 'pending', label: 'Pending (కొత్త ఆర్డర్)', color: 'bg-amber-100 text-amber-900 border-amber-300' },
  { value: 'confirmed', label: 'Confirmed (స్వీకరించబడింది)', color: 'bg-blue-100 text-blue-900 border-blue-300' },
  { value: 'preparing', label: 'Preparing (వంట అవుతోంది)', color: 'bg-orange-100 text-orange-900 border-orange-300' },
  { value: 'ready', label: 'Ready for Pickup (పార్శిల్ సిద్ధం)', color: 'bg-purple-100 text-purple-900 border-purple-300' },
  { value: 'out_for_delivery', label: 'Out for Delivery (డెలివరీలో ఉంది)', color: 'bg-indigo-100 text-indigo-900 border-indigo-300' },
  { value: 'delivered', label: 'Delivered (పూర్తయింది)', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
  { value: 'cancelled', label: 'Cancelled (రద్దు)', color: 'bg-rose-100 text-rose-900 border-rose-300' },
];

export const AdminOrderCard: React.FC<AdminOrderCardProps> = ({
  order,
  onUpdateStatus,
  onViewReceipt,
}) => {
  const currentStatusObj = statusOptions.find((s) => s.value === order.status) || statusOptions[0];

  const cleanCustomerPhone = order.customerPhone.replace(/[^0-9]/g, '');
  const customerWhatsAppMsg = encodeURIComponent(
    `Hello ${order.customerName}, regarding your Order ${order.orderNumber} at Raju Garu Hotel: Your order is currently *${order.status.replace('_', ' ').toUpperCase()}*. Thank you!`
  );

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-card border-2 border-stone-200 space-y-3.5 hover:border-orange-300 transition-all">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="font-black text-stone-900 text-base">
            {order.orderNumber}
          </span>
          <span
            className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${currentStatusObj.color}`}
          >
            {order.status.replace('_', ' ')}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
              order.orderType === 'delivery'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-amber-50 text-amber-800 border border-amber-200'
            }`}
          >
            {order.orderType === 'delivery' ? '🛵 Delivery' : '🛍️ Takeaway'}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-400">
          <span>
            {new Date(order.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
          <button
            onClick={() => onViewReceipt(order)}
            className="p-1.5 bg-stone-100 hover:bg-orange-50 hover:text-orange-600 rounded-lg text-stone-600 transition-colors"
            title="Print KOT / Bill"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Customer Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div>
          <span className="font-extrabold text-stone-900 block text-sm">
            {order.customerName}
          </span>
          <span className="text-stone-500 font-mono text-[11px]">
            📞 {order.customerPhone}
          </span>
          <div className="flex items-center gap-1 text-stone-600 mt-0.5">
            <MapPin className="w-3 h-3 text-orange-600 shrink-0" />
            <span className="truncate max-w-xs">{order.customerLocation}</span>
          </div>
        </div>

        {/* Quick Customer Contact Actions */}
        <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-center">
          <a
            href={`tel:${order.customerPhone}`}
            className="p-2 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl text-stone-700 font-bold flex items-center gap-1 transition-colors border border-stone-200/60"
            title="Call Customer"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px]">Call</span>
          </a>

          <a
            href={`https://wa.me/91${cleanCustomerPhone}?text=${customerWhatsAppMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl font-bold flex items-center gap-1 transition-colors border border-emerald-200"
            title="WhatsApp Customer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px]">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Ordered Items List */}
      <div className="bg-stone-50 rounded-2xl p-3 text-xs divide-y divide-stone-200/60">
        {order.items.map((item, idx) => (
          <div key={idx} className="py-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-black text-orange-600 min-w-[20px]">
                {item.quantity}x
              </span>
              <span className="font-semibold text-stone-800">
                {item.menuItem.name}
              </span>
            </div>
            <span className="font-bold text-stone-900">
              ₹{item.menuItem.price * item.quantity}
            </span>
          </div>
        ))}

        {order.cookingInstruction && (
          <div className="pt-2 mt-1 text-[11px] text-amber-900 bg-amber-50/60 p-1.5 rounded-lg font-medium border border-amber-200/40">
            <strong>Note:</strong> "{order.cookingInstruction}"
          </div>
        )}
      </div>

      {/* QUICK STATUS ADVANCE BUTTONS (1-Click for Hotel Owner) */}
      <div className="bg-orange-50/60 p-2.5 rounded-2xl border border-orange-200 space-y-2">
        <span className="text-[10px] font-black uppercase text-orange-800 tracking-wider block">
          ⚡ 1-Click Status Action for Kitchen & Delivery
        </span>

        <div className="flex flex-wrap gap-1.5">
          {order.status === 'pending' && (
            <button
              onClick={() => onUpdateStatus(order.id, 'confirmed')}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs py-2 px-3 rounded-xl shadow-sm flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Accept & Confirm Order</span>
            </button>
          )}

          {order.status === 'confirmed' && (
            <button
              onClick={() => onUpdateStatus(order.id, 'preparing')}
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs py-2 px-3 rounded-xl shadow-sm flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Start Cooking / Preparing</span>
            </button>
          )}

          {order.status === 'preparing' && (
            <button
              onClick={() =>
                onUpdateStatus(
                  order.id,
                  order.orderType === 'delivery' ? 'out_for_delivery' : 'ready'
                )
              }
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs py-2 px-3 rounded-xl shadow-sm flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              {order.orderType === 'delivery' ? (
                <>
                  <Truck className="w-3.5 h-3.5" />
                  <span>Send Out for Delivery</span>
                </>
              ) : (
                <>
                  <Store className="w-3.5 h-3.5" />
                  <span>Mark Ready at Counter</span>
                </>
              )}
            </button>
          )}

          {(order.status === 'out_for_delivery' || order.status === 'ready') && (
            <button
              onClick={() => onUpdateStatus(order.id, 'delivered')}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2 px-3 rounded-xl shadow-sm flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Mark as Delivered & Complete</span>
            </button>
          )}

          {order.status === 'delivered' && (
            <div className="w-full bg-emerald-100 text-emerald-800 text-center font-bold text-xs py-1.5 rounded-xl">
              ✓ Order Delivered Successfully
            </div>
          )}
        </div>
      </div>

      {/* Bill & Manual Status Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-stone-100">
        {/* Bill Total */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-500 font-medium">Grand Total:</span>
          <span className="text-base font-black text-orange-600">
            ₹{order.totalAmount}
          </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
              COD / Counter
            </span>
        </div>

        {/* Change Status Dropdown */}
        <div className="relative flex items-center gap-1.5">
          <span className="text-xs font-bold text-stone-500 hidden xs:inline">
            Status:
          </span>
          <div className="relative">
            <select
              value={order.status}
              onChange={(e) => onUpdateStatus(order.id, e.target.value as OrderStatus)}
              className="appearance-none bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs rounded-xl pl-3 pr-8 py-2 border border-stone-300 outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
            >
              {statusOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-stone-500 absolute right-2.5 top-3 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};
