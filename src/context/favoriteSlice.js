import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      localStorage.setItem("favorite", state);
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      localStorage.removeItem("favorite", state);
      state.splice(action.payload, 1);
    },
    clearFavorite: (state, action) => {
      state.splice(0, state.length);
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
