import { createSlice } from "@reduxjs/toolkit";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

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
    toggleTodo: (state, { payload }) => {
      console.log({ payload });
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === payload) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      state.todos = updatedTodos;
    },
    updateTodo: (state, { payload }) => {
      console.log({ payload });
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === payload.todoId) {
          return { ...todo, text: payload.newText };
        }
        return todo;
      });
      state.todos = updatedTodos;
    },
  },
});

export const { addNewTodo, removeTodo, toggleTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
