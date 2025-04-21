import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { AppState } from '../store/store';

interface CartTotal {
  subtotal: number;
  itemCount: number;
  total: number;
}

export const useCartTotal = (): CartTotal => {
  const { items } = useSelector(
    (state: AppState) => state.cart
  );

  const { discountCode } = useSelector(
    (state: AppState) => state.discount
  );


  return useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const discountPercentage = discountCode === 'SAVE10' ? 0.1 : 1;
    const total = subtotal - subtotal * discountPercentage;
    
    const itemCount = items.reduce(
      (count, item) => count + item.quantity, 
      0
    );

    return {
      subtotal: parseFloat(subtotal.toFixed(2)),
      itemCount,
      total: parseFloat(total.toFixed(2)),
    };
  }, [items, discountCode]);
};