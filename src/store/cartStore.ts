import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, MenuItem, OrderType } from '../types';

interface CartState {
  items: CartItem[];
  orderType: OrderType;
  cookingInstruction: string;
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  setItemQuantity: (itemId: string, quantity: number) => void;
  setOrderType: (type: OrderType) => void;
  setCookingInstruction: (instruction: string) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getItemsSubtotal: () => number;
  getPackagingFee: (minOrderForFreeDelivery?: number, fee?: number) => number;
  getDeliveryFee: (minOrderForFreeDelivery?: number, fee?: number) => number;
  getTotalAmount: (deliveryFee?: number, packagingFee?: number, minFree?: number) => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      orderType: 'delivery',
      cookingInstruction: '',
      addItem: (item: MenuItem) => {
        const { items } = get();
        const existingIndex = items.findIndex((i) => i.menuItem.id === item.id);
        if (existingIndex > -1) {
          const newItems = [...items];
          newItems[existingIndex].quantity += 1;
          set({ items: newItems });
        } else {
          set({ items: [...items, { menuItem: item, quantity: 1 }] });
        }
      },
      removeItem: (itemId: string) => {
        set((state) => ({
          items: state.items.filter((i) => i.menuItem.id !== itemId),
        }));
      },
      updateQuantity: (itemId: string, delta: number) => {
        const { items } = get();
        const existing = items.find((i) => i.menuItem.id === itemId);
        if (!existing) return;

        const newQty = existing.quantity + delta;
        if (newQty <= 0) {
          set({ items: items.filter((i) => i.menuItem.id !== itemId) });
        } else {
          set({
            items: items.map((i) =>
              i.menuItem.id === itemId ? { ...i, quantity: newQty } : i
            ),
          });
        }
      },
      setItemQuantity: (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
        } else {
          set((state) => ({
            items: state.items.map((i) =>
              i.menuItem.id === itemId ? { ...i, quantity } : i
            ),
          }));
        }
      },
      setOrderType: (type: OrderType) => set({ orderType: type }),
      setCookingInstruction: (instruction: string) =>
        set({ cookingInstruction: instruction }),
      clearCart: () => set({ items: [], cookingInstruction: '' }),
      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
      getItemsSubtotal: () => {
        return get().items.reduce(
          (sum, item) => sum + item.menuItem.price * item.quantity,
          0
        );
      },
      getPackagingFee: (minOrderForFree = 200, defaultPackaging = 10) => {
        const subtotal = get().getItemsSubtotal();
        if (subtotal === 0) return 0;
        return subtotal >= minOrderForFree ? 0 : defaultPackaging;
      },
      getDeliveryFee: (minOrderForFree = 200, defaultDelivery = 20) => {
        const { orderType } = get();
        if (orderType === 'pickup') return 0;
        const subtotal = get().getItemsSubtotal();
        if (subtotal === 0) return 0;
        return subtotal >= minOrderForFree ? 0 : defaultDelivery;
      },
      getTotalAmount: (deliveryFee = 20, packagingFee = 10, minFree = 200) => {
        const subtotal = get().getItemsSubtotal();
        if (subtotal === 0) return 0;
        const delivery = get().getDeliveryFee(minFree, deliveryFee);
        const packaging = get().getPackagingFee(minFree, packagingFee);
        return subtotal + delivery + packaging;
      },
    }),
    {
      name: 'raju_garu_cart_storage',
    }
  )
);
