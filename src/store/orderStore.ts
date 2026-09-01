import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Order, OrderStatus } from '../types';

interface OrderState {
  orders: Order[];
  createOrder: (orderData: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt' | 'statusTimeline'>) => Order;
  updateOrderStatus: (orderId: string, status: OrderStatus, note?: string) => void;
  getOrderById: (orderId: string) => Order | undefined;
  getUserOrders: (userPhone: string) => Order[];
  deleteOrder: (orderId: string) => void;
  clearAllOrders: () => void;
}

const sampleOrders: Order[] = [
  {
    id: 'ord-1001',
    orderNumber: '#RGH-7821',
    customerName: 'Suresh Varma',
    customerPhone: '9848022338',
    customerLocation: 'Near Water Tank, Gandhi Chowk, Village',
    locationUrl: 'https://maps.google.com/?q=16.9890,81.7840',
    orderType: 'delivery',
    items: [
      {
        menuItem: {
          id: 'bir-1',
          name: 'Raju Garu Special Natu Kodi Biryani',
          nameTelugu: 'రాజు గారి నాటుకోడి బిర్యానీ',
          category: 'Biryani',
          price: 240,
          isVeg: false,
          description: 'Aromatic basmati rice with woodfire cooked country chicken.',
          imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
          isSpecial: true,
          isAvailable: true,
        },
        quantity: 2,
      },
      {
        menuItem: {
          id: 'bev-2',
          name: 'Cold Spiced Masala Buttermilk',
          category: 'Beverages',
          price: 25,
          isVeg: true,
          description: 'Refreshing buttermilk.',
          imageUrl: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80',
          isAvailable: true,
        },
        quantity: 2,
      },
    ],
    itemsSubtotal: 530,
    packagingFee: 0,
    deliveryFee: 0,
    totalAmount: 530,
    status: 'preparing',
    paymentMethod: 'cod',
    isPaid: false,
    cookingInstruction: 'Make it extra spicy and send more gravy.',
    createdAt: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    statusTimeline: [
      {
        status: 'pending',
        timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
        note: 'Order placed via Web App',
      },
      {
        status: 'confirmed',
        timestamp: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
        note: 'Order accepted by Raju Garu Hotel',
      },
      {
        status: 'preparing',
        timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
        note: 'Cooking in progress on woodfire',
      },
    ],
  },
  {
    id: 'ord-1002',
    orderNumber: '#RGH-7822',
    customerName: 'Kalyan Chakravarthy',
    customerPhone: '9988776655',
    customerLocation: 'Raju Garu Hotel Counter (Takeaway)',
    locationUrl: 'https://maps.google.com/?q=16.9910,81.7820',
    orderType: 'pickup',
    items: [
      {
        menuItem: {
          id: 'mls-1',
          name: 'Raju Garu Andhra Bhojanam (Veg)',
          nameTelugu: 'రాజు గారి ఆంధ్ర వెజ్ భోజనం',
          category: 'Meals',
          price: 120,
          isVeg: true,
          description: 'Signature unlimited meal pack with Mudda Pappu, Ghee, Avakaya & Curd.',
          imageUrl: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
          isSpecial: true,
          isAvailable: true,
        },
        quantity: 3,
      },
      {
        menuItem: {
          id: 'cur-1',
          name: 'Gongura Chicken Curry',
          category: 'Curries',
          price: 160,
          isVeg: false,
          description: 'Tender chicken with sour gongura leaves.',
          imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
          isAvailable: true,
        },
        quantity: 1,
      },
    ],
    itemsSubtotal: 520,
    packagingFee: 0,
    deliveryFee: 0,
    totalAmount: 520,
    status: 'ready',
    paymentMethod: 'cod',
    isPaid: true,
    cookingInstruction: 'Pack sambar and rasam in leakproof containers.',
    createdAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    statusTimeline: [
      {
        status: 'pending',
        timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
      },
      {
        status: 'confirmed',
        timestamp: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
      },
      {
        status: 'preparing',
        timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
      },
      {
        status: 'ready',
        timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
        note: 'Parcel packed and ready at counter',
      },
    ],
  },
  {
    id: 'ord-1003',
    orderNumber: '#RGH-7819',
    customerName: 'Anasuya Devi',
    customerPhone: '9440123456',
    customerLocation: 'Bazaar Street, Opposite Post Office',
    locationUrl: 'https://maps.google.com/?q=16.9880,81.7850',
    orderType: 'delivery',
    items: [
      {
        menuItem: {
          id: 'tif-1',
          name: 'Pesarattu Upma',
          category: 'Tiffins',
          price: 70,
          isVeg: true,
          description: 'Green gram dosa with ghee upma.',
          imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80',
          isAvailable: true,
        },
        quantity: 2,
      },
      {
        menuItem: {
          id: 'bev-1',
          name: 'Kumbakonam Degree Filter Coffee',
          category: 'Beverages',
          price: 30,
          isVeg: true,
          description: 'Brewed filter coffee.',
          imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
          isAvailable: true,
        },
        quantity: 2,
      },
    ],
    itemsSubtotal: 200,
    packagingFee: 0,
    deliveryFee: 0,
    totalAmount: 200,
    status: 'delivered',
    paymentMethod: 'cod',
    isPaid: true,
    createdAt: new Date(Date.now() - 120 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
    statusTimeline: [
      {
        status: 'pending',
        timestamp: new Date(Date.now() - 120 * 60 * 1000).toISOString(),
      },
      {
        status: 'confirmed',
        timestamp: new Date(Date.now() - 115 * 60 * 1000).toISOString(),
      },
      {
        status: 'out_for_delivery',
        timestamp: new Date(Date.now() - 100 * 60 * 1000).toISOString(),
      },
      {
        status: 'delivered',
        timestamp: new Date(Date.now() - 90 * 60 * 1000).toISOString(),
        note: 'Delivered by Delivery Partner Ramesh',
      },
    ],
  },
];

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: sampleOrders,
      createOrder: (orderData) => {
        const id = 'ord-' + Date.now();
        const randNum = Math.floor(1000 + Math.random() * 9000);
        const orderNumber = `#RGH-${randNum}`;
        const now = new Date().toISOString();

        const newOrder: Order = {
          ...orderData,
          id,
          orderNumber,
          createdAt: now,
          updatedAt: now,
          statusTimeline: [
            {
              status: orderData.status || 'pending',
              timestamp: now,
              note: 'Order placed via Web App',
            },
          ],
        };

        set((state) => ({
          orders: [newOrder, ...state.orders],
        }));

        return newOrder;
      },
      updateOrderStatus: (orderId, status, note) => {
        const now = new Date().toISOString();
        set((state) => ({
          orders: state.orders.map((ord) => {
            if (ord.id !== orderId) return ord;
            return {
              ...ord,
              status,
              updatedAt: now,
              isPaid: status === 'delivered' ? true : ord.isPaid,
              statusTimeline: [
                ...ord.statusTimeline,
                {
                  status,
                  timestamp: now,
                  note: note || `Status updated to ${status.replace('_', ' ')}`,
                },
              ],
            };
          }),
        }));
      },
      getOrderById: (orderId) => {
        return get().orders.find((ord) => ord.id === orderId);
      },
      getUserOrders: (userPhone) => {
        if (!userPhone) return [];
        return get().orders.filter(
          (ord) => ord.customerPhone.trim() === userPhone.trim()
        );
      },
      deleteOrder: (orderId) => {
        set((state) => ({
          orders: state.orders.filter((ord) => ord.id !== orderId),
        }));
      },
      clearAllOrders: () => set({ orders: [] }),
    }),
    {
      name: 'raju_garu_orders_storage',
    }
  )
);

// Real-time cross-tab & cross-window live storage synchronizer
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === 'raju_garu_orders_storage' && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        if (parsed?.state?.orders) {
          useOrderStore.setState({ orders: parsed.state.orders });
        }
      } catch (err) {
        console.error('Storage sync error:', err);
      }
    }
  });
}
