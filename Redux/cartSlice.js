"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

const initialState = {
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
      state.loading = false;
    });

    builder.addCase(sendOrder.pending, (state, action) => {});
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
export const selectCartSize = (state) => {
  var total = 0;
  for (const element of state.cart.items) {
    total = total + element.quantity;
  }
  return total;
};

export default cartSlice.reducer;
