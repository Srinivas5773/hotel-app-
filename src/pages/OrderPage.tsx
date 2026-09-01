import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Clock, 
  ArrowRight, 
  Printer, 
  ExternalLink,
  Copy,
  Check,
  MapPin,
  Compass,
  Flame,
  Truck,
  Store
} from 'lucide-react';
import { useOrderStore } from '../store/orderStore';
import { useSettingsStore } from '../store/settingsStore';
import { OrderReceipt } from '../components/OrderReceipt';
import { Toast } from '../components/Toast';

export const OrderPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { orders } = useOrderStore();
  const { settings } = useSettingsStore();

  const [copied, setCopied] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Directly subscribe to orders array so state updates reactively
  const order = orders.find((o) => o.id === orderId);

  // Formatted WhatsApp message sent directly to 9347671131
  const generateWhatsAppMessage = () => {
    if (!order) return '';

    const itemsText = order.items
      .map(
        (i) =>
          `• ${i.menuItem.name} x ${i.quantity} - ₹${
            i.menuItem.price * i.quantity
          }`
      )
      .join('\n');

    return `*NEW ORDER - ${settings.name}*
━━━━━━━━━━━━━━━━━
*Order ID:* ${order.orderNumber}
*Customer Name:* ${order.customerName}
*Customer Phone:* ${order.customerPhone}
*Order Type:* ${order.orderType === 'delivery' ? '🛵 Home Delivery' : '🛍️ Takeaway / Parcel'}
*Location Name:* ${order.customerLocation}
${order.locationUrl ? `*Google Maps Live Location:* ${order.locationUrl}\n` : ''}
*Items Ordered:*
${itemsText}

*Subtotal:* ₹${order.itemsSubtotal}
*Packaging Charges:* ${order.packagingFee === 0 ? 'FREE' : `₹${order.packagingFee}`}
*Delivery Fee:* ${order.deliveryFee === 0 ? 'FREE' : `₹${order.deliveryFee}`}
*Grand Total:* *₹${order.totalAmount}* (Cash on Delivery / Counter)
${order.cookingInstruction ? `*Special Request:* ${order.cookingInstruction}\n` : ''}━━━━━━━━━━━━━━━━━
Namaskaram Raju Garu! Please confirm this order.`;
  };

  const cleanPhone = settings.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappText = encodeURIComponent(generateWhatsAppMessage());
  const whatsappUrl = `https://wa.me/91${cleanPhone}?text=${whatsappText}`;

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setToastMessage('Order details copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-stone-100/60 pb-20 pt-8 px-4 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-card border border-stone-200">
          <div className="text-4xl mb-3">❓</div>
          <h2 className="text-xl font-black text-stone-900 mb-1">
            Order Not Found
          </h2>
          <p className="text-xs text-stone-500 mb-6">
            We couldn't find the requested order details.
          </p>
          <Link
            to="/menu"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2"
          >
            <span>Back to Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // Order status steps
  const steps = [
    { 
      key: 'pending', 
      label: 'Order Placed', 
      tel: 'ఆర్డర్ నమోదైంది',
      desc: 'Received by hotel',
      icon: Clock
    },
    { 
      key: 'confirmed', 
      label: 'Confirmed', 
      tel: 'హోటల్ స్వీకరించింది',
      desc: 'Accepted by Raju Garu Hotel',
      icon: CheckCircle2
    },
    { 
      key: 'preparing', 
      label: 'Cooking & Preparing', 
      tel: 'వంట అవుతోంది',
      desc: 'Fresh cooking on woodfire',
      icon: Flame
    },
    {
      key: order.orderType === 'delivery' ? 'out_for_delivery' : 'ready',
      label: order.orderType === 'delivery' ? 'Out for Delivery' : 'Ready for Pickup',
      tel: order.orderType === 'delivery' ? 'డెలివరీలో ఉంది' : 'పార్శిల్ సిద్ధం',
      desc: order.orderType === 'delivery' ? 'Partner on the way to you' : 'Ready at counter for pickup',
      icon: order.orderType === 'delivery' ? Truck : Store
    },
    { 
      key: 'delivered', 
      label: 'Delivered', 
      tel: 'పూర్తయింది',
      desc: 'Enjoy your delicious meal!',
      icon: Check
    },
  ];

  const getStepIndex = (status: string) => {
    switch (status) {
      case 'pending':
        return 0;
      case 'confirmed':
        return 1;
      case 'preparing':
        return 2;
      case 'ready':
      case 'out_for_delivery':
        return 3;
      case 'delivered':
        return 4;
      case 'cancelled':
        return -1;
      default:
        return 0;
    }
  };

  const currentStepIdx = getStepIndex(order.status);

  // Status visual badge styling
  const getStatusBadge = () => {
    switch (order.status) {
      case 'pending':
        return {
          text: 'PENDING • ఆర్డర్ నమోదైంది',
          bg: 'bg-amber-100 text-amber-900 border-amber-300 animate-pulse',
        };
      case 'confirmed':
        return {
          text: 'CONFIRMED • స్వీకరించబడింది',
          bg: 'bg-blue-100 text-blue-900 border-blue-300',
        };
      case 'preparing':
        return {
          text: 'COOKING / PREPARING • వంట అవుతోంది 🔥',
          bg: 'bg-orange-100 text-orange-950 border-orange-400 animate-pulse',
        };
      case 'ready':
        return {
          text: 'READY FOR PICKUP • పార్శిల్ సిద్ధం 🛍️',
          bg: 'bg-purple-100 text-purple-900 border-purple-300',
        };
      case 'out_for_delivery':
        return {
          text: 'OUT FOR DELIVERY • డెలివరీలో ఉంది 🛵',
          bg: 'bg-indigo-100 text-indigo-900 border-indigo-300 animate-pulse',
        };
      case 'delivered':
        return {
          text: 'DELIVERED • విజయవంతంగా చేరింది 🎉',
          bg: 'bg-emerald-100 text-emerald-950 border-emerald-400 font-black',
        };
      case 'cancelled':
        return {
          text: 'CANCELLED • రద్దు చేయబడింది',
          bg: 'bg-rose-100 text-rose-900 border-rose-300',
        };
      default:
        return {
          text: String(order.status).toUpperCase(),
          bg: 'bg-stone-100 text-stone-900 border-stone-300',
        };
    }
  };

  const badge = getStatusBadge();

  return (
    <div className="min-h-screen bg-stone-100/60 pb-28 md:pb-16 pt-4">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      <OrderReceipt
        order={order}
        isOpen={showReceipt}
        onClose={() => setShowReceipt(false)}
      />

      <main className="max-w-2xl mx-auto px-4 space-y-4">
        {/* Success Banner */}
        <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white rounded-3xl p-6 shadow-warm text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="bg-emerald-800/60 text-emerald-200 text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Order Registered • ఆర్డర్ నమోదైంది
            </span>

            <h1 className="text-2xl font-black text-white mt-1.5 mb-1">
              Order {order.orderNumber}
            </h1>

            <p className="text-xs text-emerald-100 font-medium max-w-sm mx-auto">
              Thank you, <strong className="text-white">{order.customerName}</strong>! Your order is active at {settings.name}.
            </p>
          </div>
        </div>

        {/* WhatsApp Order Dispatch Card (Direct to 9347671131) */}
        <div className="bg-gradient-to-br from-emerald-500 via-green-600 to-emerald-700 rounded-3xl p-5 text-white shadow-xl space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 fill-emerald-600 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                Send Order Directly to Raju Garu's WhatsApp
              </h3>
              <p className="text-[11px] text-emerald-100">
                Receiver Phone: <strong className="font-bold underline">{settings.phone}</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white hover:bg-emerald-50 text-emerald-950 font-black text-xs sm:text-sm py-3 px-4 rounded-2xl shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all text-center"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Send Order to WhatsApp ({settings.phone})</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            <button
              onClick={handleCopyOrder}
              className="bg-emerald-900/60 hover:bg-emerald-900/80 text-white font-bold text-xs py-3 px-4 rounded-2xl border border-white/20 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy Bill'}</span>
            </button>
          </div>
        </div>

        {/* 🌟 LIVE REAL-TIME ORDER TRACKER 🌟 */}
        <div className="bg-white rounded-3xl p-5 shadow-card border-2 border-stone-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <h3 className="text-sm font-black text-stone-900">
                  Live Order Tracker • ప్రత్యక్ష స్థితి
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-500">Current Status:</span>
                <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full border ${badge.bg}`}>
                  {badge.text}
                </span>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] text-stone-400 font-bold uppercase block">
                Estimated Time
              </span>
              <span className="text-xs font-black text-emerald-600 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {order.status === 'delivered' ? 'Completed' : '15 - 25 Mins'}
              </span>
            </div>
          </div>

          {/* Stepper Progress */}
          <div className="space-y-5 relative pl-4 sm:pl-6 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-stone-200">
            {steps.map((st, idx) => {
              const isPassed = currentStepIdx >= idx && currentStepIdx !== -1;
              const isCurrent = currentStepIdx === idx;
              const IconComp = st.icon;

              return (
                <div key={st.key} className="relative flex items-start gap-3">
                  {/* Step Dot */}
                  <div
                    className={`absolute -left-4 sm:-left-6 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-all ${
                      isCurrent
                        ? 'bg-orange-600 text-white border-orange-200 ring-4 ring-orange-100 scale-125 z-10'
                        : isPassed
                        ? 'bg-emerald-600 text-white border-emerald-200'
                        : 'bg-white text-stone-400 border-stone-300'
                    }`}
                  >
                    {isPassed && !isCurrent ? (
                      '✓'
                    ) : isCurrent ? (
                      <IconComp className="w-2.5 h-2.5" />
                    ) : (
                      idx + 1
                    )}
                  </div>

                  <div className="pl-2">
                    <div className="flex items-center gap-1.5">
                      <h4
                        className={`text-xs sm:text-sm font-black ${
                          isCurrent
                            ? 'text-orange-600'
                            : isPassed
                            ? 'text-stone-900'
                            : 'text-stone-400'
                        }`}
                      >
                        {st.label}
                      </h4>
                      {isCurrent && (
                        <span className="bg-orange-100 text-orange-800 text-[10px] font-black px-1.5 py-0.2 rounded-md animate-pulse">
                          Active Now
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-stone-500 font-telugu font-semibold">
                      {st.tel}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location & GPS Badge */}
        <div className="bg-white rounded-2xl p-3.5 shadow-card border border-stone-200 text-xs flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
            <div className="truncate">
              <span className="font-bold text-stone-900 block truncate">{order.customerLocation}</span>
              <span className="text-[10px] text-stone-400">Delivery Address</span>
            </div>
          </div>

          {order.locationUrl && (
            <a
              href={order.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold px-2.5 py-1 rounded-lg border border-blue-200 flex items-center gap-1 shrink-0 text-[11px]"
            >
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>Maps Link</span>
            </a>
          )}
        </div>

        {/* Ordered Items & Bill Summary */}
        <div className="bg-white rounded-3xl p-5 shadow-card border border-stone-200 space-y-3 text-xs">
          <div className="flex items-center justify-between border-b pb-2">
            <span className="font-bold uppercase tracking-wider text-stone-500">
              Order Summary
            </span>
            <button
              onClick={() => setShowReceipt(true)}
              className="text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>View & Print Bill</span>
            </button>
          </div>

          <div className="divide-y divide-stone-100">
            {order.items.map((item, idx) => (
              <div key={idx} className="py-2 flex items-center justify-between">
                <span className="font-semibold text-stone-800">
                  <span className="text-orange-600 font-bold mr-1.5">
                    {item.quantity}x
                  </span>
                  {item.menuItem.name}
                </span>
                <span className="font-extrabold text-stone-900">
                  ₹{item.menuItem.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t pt-2 space-y-1 text-stone-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">₹{order.itemsSubtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Packaging</span>
              <span className="font-semibold">
                {order.packagingFee === 0 ? 'FREE' : `₹${order.packagingFee}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-semibold">
                {order.deliveryFee === 0 ? 'FREE' : `₹${order.deliveryFee}`}
              </span>
            </div>
            <div className="flex justify-between text-sm font-black text-stone-900 border-t pt-1.5">
              <span>Total Payable</span>
              <span className="text-orange-600 text-base">₹{order.totalAmount}</span>
            </div>
          </div>
        </div>

        {/* Direct Call & Assistance */}
        <div className="bg-stone-900 text-white rounded-3xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-amber-400 block">
              Need Instant Help or Special Changes?
            </span>
            <span className="text-[11px] text-stone-300">
              Speak directly with Raju Garu at {settings.phone}.
            </span>
          </div>

          <a
            href={`tel:${settings.phone}`}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call {settings.phone}</span>
          </a>
        </div>

        {/* Bottom Actions */}
        <div className="flex gap-2 pt-2">
          <Link
            to="/menu"
            className="flex-1 bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs py-3 px-4 rounded-2xl border border-stone-300 text-center shadow-xs transition-colors"
          >
            Order More Food
          </Link>
          <Link
            to="/profile"
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs py-3 px-4 rounded-2xl text-center shadow-md transition-colors"
          >
            View Order History
          </Link>
        </div>
      </main>
    </div>
  );
};
