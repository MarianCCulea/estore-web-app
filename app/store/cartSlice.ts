"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendOrder = createAsyncThunk(
  "users/getAllUsers",
  async (order) => {
    const res = await fetch("http://localhost:3005/login", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    return data;
  }
);

interface CartItem {
  id: string;
  quantity: number;
  price: number; 
}

const initialState: {
  items: CartItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
} = {
  items: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        action.payload.quantity = 1;
        state.items = [...state.items, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1);
      }
      state.items = newCart;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(sendOrder.fulfilled, (state, action) => {
      state.status = "succeeded";
    });

    builder.addCase(sendOrder.pending, (state, action) => {});
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state: { cart: { items: CartItem[] } }): CartItem[] => state.cart.items;
export const selectTotal = (state: { cart: { items: CartItem[] } }): number =>
  state.cart.items.reduce(
    (total: number, item: CartItem) => total + item.price * item.quantity,
    0
  );
  
interface RootState {
  cart: {
    items: CartItem[];
  };
}

export const selectCartSize = (state: RootState): number => {
  let total = 0;
  for (const element of state.cart.items) {
    total = total + element.quantity;
  }
  return total;
};

export default cartSlice.reducer;
