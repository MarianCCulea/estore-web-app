"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({ children }) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}
