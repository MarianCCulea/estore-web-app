'use client';

import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import ordersSlice from './ordersSlice';
import userReducer from './userSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      cart: cartSlice,
      orders: ordersSlice,
    },
  });
}

export const store = makeStore();
