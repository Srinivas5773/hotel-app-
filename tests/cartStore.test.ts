import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from '../src/store/cartStore';
import { MenuItem } from '../src/types';

const mockItem: MenuItem = {
  id: 'test-1',
  name: 'Special Biryani',
  category: 'Biryani',
  price: 200,
  isVeg: false,
  description: 'Test Biryani',
  imageUrl: 'https://test.com/img.jpg',
  isAvailable: true,
};

describe('CartStore Calculations & Management', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });

  it('adds item to cart and updates subtotal', () => {
    useCartStore.getState().addItem(mockItem, 2);
    expect(useCartStore.getState().items.length).toBe(1);
    expect(useCartStore.getState().getItemsSubtotal()).toBe(400);
  });

  it('calculates free delivery when subtotal exceeds threshold', () => {
    useCartStore.getState().addItem(mockItem, 2); // 400
    const deliveryFee = useCartStore.getState().getDeliveryFee(200, 20);
    expect(deliveryFee).toBe(0);
  });

  it('applies delivery fee when subtotal is below threshold', () => {
    useCartStore.getState().addItem(mockItem, 1); // 200
    const deliveryFee = useCartStore.getState().getDeliveryFee(300, 20);
    expect(deliveryFee).toBe(20);
  });
});
