"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const sendOrder = createAsyncThunk(
  "users/getAllUsers",
  async (thunkApi) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=5"
    );
    const data = await response.json();
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
      state.items = [...state.items, action.payload];
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
  state.cart.items.reduce((total, item) => total + item.price, 0);
export const selectCartSize = (state) => state.cart.items.length;

export default cartSlice.reducer;
