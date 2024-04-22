import { configureStore } from "@reduxjs/toolkit";
import favorite from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    favorite,
  },
});
