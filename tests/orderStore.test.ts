import { describe, it, expect, beforeEach } from 'vitest';
import { useOrderStore } from '../src/store/orderStore';

describe('OrderStore Workflow & Status Progression', () => {
  beforeEach(() => {
    useOrderStore.getState().clearAllOrders();
  });

  it('creates an order with pending status and order number', () => {
    const order = useOrderStore.getState().createOrder({
      customerName: 'Suresh Varma',
      customerPhone: '9848022338',
      customerLocation: 'Near Ramalayam Temple',
      orderType: 'delivery',
      items: [],
      itemsSubtotal: 240,
      packagingFee: 0,
      deliveryFee: 20,
      totalAmount: 260,
      status: 'pending',
      paymentMethod: 'cod',
      isPaid: false,
    });

    expect(order.id).toBeDefined();
    expect(order.orderNumber).toMatch(/^#RGH-/);
    expect(order.status).toBe('pending');
    expect(order.customerName).toBe('Suresh Varma');
  });

  it('updates order status through kitchen progression', () => {
    const order = useOrderStore.getState().createOrder({
      customerName: 'Kalyan',
      customerPhone: '9988776655',
      customerLocation: 'Main Bazaar',
      orderType: 'delivery',
      items: [],
      itemsSubtotal: 190,
      packagingFee: 0,
      deliveryFee: 0,
      totalAmount: 190,
      status: 'pending',
      paymentMethod: 'cod',
      isPaid: false,
    });

    // 1. Confirm
    useOrderStore.getState().updateOrderStatus(order.id, 'confirmed');
    expect(useOrderStore.getState().getOrderById(order.id)?.status).toBe('confirmed');

    // 2. Cooking / Preparing
    useOrderStore.getState().updateOrderStatus(order.id, 'preparing');
    expect(useOrderStore.getState().getOrderById(order.id)?.status).toBe('preparing');

    // 3. Out for delivery
    useOrderStore.getState().updateOrderStatus(order.id, 'out_for_delivery');
    expect(useOrderStore.getState().getOrderById(order.id)?.status).toBe('out_for_delivery');

    // 4. Delivered
    useOrderStore.getState().updateOrderStatus(order.id, 'delivered');
    expect(useOrderStore.getState().getOrderById(order.id)?.status).toBe('delivered');
  });
});
