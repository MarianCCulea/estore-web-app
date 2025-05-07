"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discountCode: "SAVE10",
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    addDiscount: (state, action) => {
      state.discountCode = action.payload;
    },
    removeDiscount: (state, action) => {
      state.discountCode = "";

    },
  },
});

export const { addDiscount, removeDiscount } = discountSlice.actions;

export const selectDiscount = (state) => state.discountCode;

export default discountSlice.reducer;
