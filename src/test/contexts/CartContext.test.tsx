import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from '../../contexts/CartContext';
import { CartItem } from '../../types';

const mockCartItem: CartItem = {
  productId: '1',
  variantId: 'variant-1',
  quantity: 1,
  title: 'Test Product',
  price: 29.99,
  image: 'test-image.jpg',
};

describe('CartContext', () => {
  it('provides initial empty cart state', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current.state.items).toEqual([]);
    expect(result.current.state.currency).toBe('USD');
  });

  it('adds item to cart', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(mockCartItem);
    });

    expect(result.current.state.items).toHaveLength(1);
    expect(result.current.state.items[0]).toEqual(mockCartItem);
  });

  it('updates item quantity when adding existing item', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result } = renderHook(() => useCart(), { wrapper });

    // Add item first time
    act(() => {
      result.current.addItem(mockCartItem);
    });

    // Add same item again
    act(() => {
      result.current.addItem(mockCartItem);
    });

    expect(result.current.state.items).toHaveLength(1);
    expect(result.current.state.items[0].quantity).toBe(2);
  });

  it('removes item from cart', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result } = renderHook(() => useCart(), { wrapper });

    // Add item first
    act(() => {
      result.current.addItem(mockCartItem);
    });

    expect(result.current.state.items).toHaveLength(1);

    // Remove item
    act(() => {
      result.current.removeItem(mockCartItem.variantId);
    });

    expect(result.current.state.items).toHaveLength(0);
  });

  it('updates item quantity', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result } = renderHook(() => useCart(), { wrapper });

    // Add item first
    act(() => {
      result.current.addItem(mockCartItem);
    });

    // Update quantity
    act(() => {
      result.current.updateQuantity(mockCartItem.variantId, 3);
    });

    expect(result.current.state.items[0].quantity).toBe(3);
  });

  it('calculates total items correctly', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result } = renderHook(() => useCart(), { wrapper });

    // Add items with different quantities
    act(() => {
      result.current.addItem({ ...mockCartItem, productId: '1', quantity: 2 });
      result.current.addItem({ ...mockCartItem, productId: '2', quantity: 3 });
    });

    expect(result.current.getTotalItems()).toBe(5);
  });

  it('calculates total price correctly', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result } = renderHook(() => useCart(), { wrapper });

    // Add items with different prices
    act(() => {
      result.current.addItem({ ...mockCartItem, productId: '1', price: 10, quantity: 2 });
      result.current.addItem({ ...mockCartItem, productId: '2', price: 15, quantity: 1 });
    });

    expect(result.current.getTotalPrice()).toBe(35); // (10 * 2) + (15 * 1)
  });

  it('clears cart', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result } = renderHook(() => useCart(), { wrapper });

    // Add items
    act(() => {
      result.current.addItem(mockCartItem);
      result.current.addItem({ ...mockCartItem, productId: '2' });
    });

    expect(result.current.state.items).toHaveLength(2);

    // Clear cart
    act(() => {
      result.current.clearCart();
    });

    expect(result.current.state.items).toHaveLength(0);
  });
});
