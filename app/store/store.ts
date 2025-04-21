'use client';

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import discountSlice from './discountSlice';
import ordersSlice from './ordersSlice';
import userReducer from './userSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      cart: cartSlice,
      orders: ordersSlice,
      discount: discountSlice,
    },
  });
}

export const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;
