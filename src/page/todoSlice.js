import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "Asfdaef3", text: "Default Todo 1", isCompleted: false },
    { id: "Asfdaef3", text: "Default Todo 2", isCompleted: true },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTodo: (state, { payload }) => {
      console.log({ payload });
      //   state.todos = [...state.todos, payload];
      state.todos.push(payload);
    },
  },
});

export const { addNewTodo } = todoSlice.actions;

export default todoSlice.reducer;
