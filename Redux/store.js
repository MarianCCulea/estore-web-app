"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartSlice from "./cartSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      cart: cartSlice,
    },
  });
}

export const store = makeStore();
