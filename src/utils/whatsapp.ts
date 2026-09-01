import { Order, HotelSettings } from '../types';

/**
 * Builds formatted WhatsApp order notification templates and deep links.
 */
export function buildWhatsAppOrderMessage(order: Order, settings: HotelSettings): string {
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
}

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/91${cleanPhone}?text=${encoded}`;
}
