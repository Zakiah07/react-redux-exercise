import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import todoReducer from "../src/page/todoSlice";

export const store = configureStore({
  reducer: {
    // add more reducers here
    theme: themeReducer,
    todo: todoReducer,
  },
});
