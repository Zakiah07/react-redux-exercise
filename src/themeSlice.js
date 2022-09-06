import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTheme: "pink",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  // function to mutate (change) the state
  reducers: {
    toggleTheme: (state, { payload }) => {
      console.log({ payload });
      state.activeTheme = payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
