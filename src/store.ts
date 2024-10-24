import { configureStore } from "@reduxjs/toolkit";
import sneakersSlice from "./components/slices/sneakersSlice.ts";
import basketSlice from "./components/slices/basketSlice";
import dataSlice from "./components/slices/dataSlice.ts";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    sneakers: sneakersSlice,
    basket: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;