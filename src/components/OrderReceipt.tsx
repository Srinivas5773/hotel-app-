import React from 'react';
import { X, Printer, CheckCircle2, MapPin } from 'lucide-react';
import { Order } from '../types';
import { useSettingsStore } from '../store/settingsStore';

interface OrderReceiptProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderReceipt: React.FC<OrderReceiptProps> = ({ order, isOpen, onClose }) => {
  const { settings } = useSettingsStore();

  if (!isOpen || !order) return null;

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date(order.createdAt).toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-xs">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-stone-200 text-stone-900 relative max-h-[90vh] overflow-y-auto">
        {/* Top actions */}
        <div className="flex items-center justify-between border-b pb-3 mb-4 print:hidden">
          <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Official Order Receipt
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs flex items-center gap-1 transition-colors"
              title="Print Receipt"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Receipt Body */}
        <div className="receipt-content text-left space-y-4">
          {/* Header */}
          <div className="text-center border-b pb-3">
            <h2 className="text-xl font-black text-orange-600 tracking-tight">
              {settings.name}
            </h2>
            <p className="text-xs text-stone-500 font-medium">{settings.tagline}</p>
            <p className="text-[11px] text-stone-400 mt-0.5">{settings.address}</p>
            <p className="text-[11px] text-stone-600 font-semibold">
              Phone: {settings.phone} • WhatsApp: {settings.whatsappNumber}
            </p>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-2 gap-2 text-xs bg-stone-50 p-3 rounded-2xl border border-stone-200/80">
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase block">Order ID</span>
              <span className="font-extrabold text-stone-900 text-sm">{order.orderNumber}</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 font-bold uppercase block">Date & Time</span>
              <span className="font-semibold text-stone-700 text-[11px]">{formattedDate}</span>
            </div>
            <div className="col-span-2 pt-1 border-t border-stone-200/60 flex items-center justify-between">
              <span className="font-semibold text-stone-700">
                Type: <strong className="text-orange-700 uppercase">{order.orderType}</strong>
              </span>
              <span className="font-semibold text-stone-700">
                Status: <strong className="text-emerald-700 uppercase">{order.status.replace('_', ' ')}</strong>
              </span>
            </div>
          </div>

          {/* Customer Details */}
          <div className="text-xs bg-orange-50/50 p-3 rounded-2xl border border-orange-200/50 space-y-1">
            <div className="font-bold text-stone-900">
              Customer: {order.customerName} ({order.customerPhone})
            </div>
            <div className="text-stone-600 flex items-start gap-1 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
              <span>{order.customerLocation}</span>
            </div>
            {order.cookingInstruction && (
              <div className="text-amber-800 text-[11px] font-medium pt-1 italic">
                Note: "{order.cookingInstruction}"
              </div>
            )}
          </div>

          {/* Ordered Items Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Ordered Items
            </h4>
            <div className="divide-y divide-stone-200/80 text-xs">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-2 flex items-center justify-between">
                  <div className="flex-1 pr-2">
                    <div className="font-bold text-stone-800 flex items-center gap-1">
                      <span>{item.menuItem.name}</span>
                      <span className={`text-[9px] px-1 rounded font-bold ${
                        item.menuItem.isVeg ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {item.menuItem.isVeg ? 'VEG' : 'NON-VEG'}
                      </span>
                    </div>
                    {item.menuItem.nameTelugu && (
                      <span className="text-[10px] text-stone-500 font-telugu block">
                        {item.menuItem.nameTelugu}
                      </span>
                    )}
                    <span className="text-[11px] text-stone-500">
                      ₹{item.menuItem.price} × {item.quantity}
                    </span>
                  </div>
                  <span className="font-extrabold text-stone-900">
                    ₹{item.menuItem.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bill Summary */}
          <div className="border-t pt-3 space-y-1.5 text-xs">
            <div className="flex justify-between text-stone-600">
              <span>Items Subtotal</span>
              <span className="font-semibold">₹{order.itemsSubtotal}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Packaging / Parcel Charges</span>
              <span className="font-semibold">
                {order.packagingFee === 0 ? 'FREE' : `₹${order.packagingFee}`}
              </span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Delivery Fee</span>
              <span className="font-semibold">
                {order.deliveryFee === 0 ? 'FREE' : `₹${order.deliveryFee}`}
              </span>
            </div>
            <div className="flex justify-between text-sm font-black text-stone-900 border-t pt-2">
              <span>Grand Total</span>
              <span className="text-orange-600 text-base">₹{order.totalAmount}</span>
            </div>
            <div className="flex justify-between text-[11px] text-stone-500 pt-1">
              <span>Payment Mode</span>
              <span className="font-bold text-stone-800 uppercase">
                Cash on Delivery / Pay at Counter
              </span>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-2 border-t border-dashed border-stone-300">
            <p className="text-xs font-bold text-stone-800">
              Thank You! Visit Again 🙏
            </p>
            <p className="text-[10px] text-stone-400 font-telugu mt-0.5">
              మళ్ళీ రండి! రాజు గారి రుచులను ఆస్వాదించండి.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
