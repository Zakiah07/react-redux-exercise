import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "Asfdaef3", text: "Default Todo 1", isComplete: false },
    { id: "fgjfgdf", text: "Default Todo 2", isComplete: true },
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
    removeTodo: (state, { payload }) => {
      console.log({ payload });
      const filteredTodo = state.todos.filter((todo) => todo.id !== payload);
      state.todos = filteredTodo;
    },
  },
});

export const { addNewTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
