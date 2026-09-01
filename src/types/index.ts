export type Category = 
  | 'all'
  | 'Tiffins'
  | 'Meals'
  | 'Curries'
  | 'Biryani'
  | 'Snacks'
  | 'Beverages';

export type SpiceLevel = 'Mild' | 'Medium' | 'Andhra Spicy';

export interface MenuItem {
  id: string;
  name: string;
  nameTelugu?: string;
  category: 'Tiffins' | 'Meals' | 'Curries' | 'Biryani' | 'Snacks' | 'Beverages';
  price: number;
  isVeg: boolean;
  description: string;
  imageUrl: string;
  isSpecial?: boolean;
  isAvailable: boolean;
  rating?: number;
  preparationTime?: string; // e.g. "10-15 mins"
  portion?: string; // e.g. "Full Plate", "2 Pcs", "500ml"
  spicyLevel?: SpiceLevel;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  note?: string;
}

export type OrderType = 'delivery' | 'pickup';
export type PaymentMethod = 'cod';
export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerLocation: string;
  locationUrl?: string; // Google Maps live GPS location URL
  orderType: OrderType;
  items: CartItem[];
  itemsSubtotal: number;
  packagingFee: number;
  deliveryFee: number;
  totalAmount: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  isPaid: boolean;
  cookingInstruction?: string;
  createdAt: string; // ISO string
  updatedAt: string;
  statusTimeline: {
    status: OrderStatus;
    timestamp: string;
    note?: string;
  }[];
}

export interface User {
  id: string;
  name: string;
  phone: string;
  location: string;
  locationUrl?: string; // Google Maps URL / GPS coordinates link
  isLoggedIn: boolean;
  isGuest?: boolean;
  authProvider?: 'google' | 'phone' | 'guest';
  avatarUrl?: string;
  registeredAt?: string;
}

export interface HotelSettings {
  name: string;
  tagline: string;
  sinceYear: string;
  phone: string;
  whatsappNumber: string; // Set to 9347671131
  address: string;
  landmark: string;
  googleMapsUrl: string;
  openingHours: string;
  isAcceptingOrders: boolean;
  deliveryFee: number;
  minOrderForFreeDelivery: number;
  packagingFee: number;
  ownerName: string;
}
