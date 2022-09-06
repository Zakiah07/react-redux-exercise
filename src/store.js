import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    // add more reducers here
    theme: themeReducer,
  },
});
