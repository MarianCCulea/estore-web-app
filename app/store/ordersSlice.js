'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchOrders = createAsyncThunk(
  'users/getAllOrders',
  async (token) => {
    const res = await fetch('http://localhost:3005/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return data;
  }
);

const initialState = {
  orders: [],
  selectedOrder: null,
  status: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.status = false;
    });

    builder.addCase(fetchOrders.pending, (state, action) => {
      state.status = true;
    });
  },
});

export const selectOrders = (state) => state.orders.orders;
export const selectOrdersSize = (state) => state.orders.orders.length;
export const selectOrderById = (state, orderId) =>
  state.orders.find((order) => order._id === orderId); // new selector added

export default ordersSlice.reducer;
