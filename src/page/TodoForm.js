import React from "react";
import TodoFeature from "./TodoFeature";
import TodoInput from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, removeTodo, toggleTodo, updateTodo } from "./todoSlice";

const TodoForm = () => {
  const reduxTodo = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const addTodo = (todo) => {
    dispatch(addNewTodo(todo));
    console.log({ todo });
  };

  const handleUpdateTodo = (todoId, newText) => {
    dispatch(updateTodo({ todoId, newText }));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
    console.log(id);
  };

  const handleCompleteTodo = (id) => {
    dispatch(toggleTodo(id));
    console.log(id);
  };

  return (
    <div>
      <h1>What's Your Plan This Week ?</h1>
      <br />
      <TodoInput onSubmit={addTodo} />
      <TodoFeature
        todos={reduxTodo}
        completeTodo={handleCompleteTodo}
        removeTodo={handleRemoveTodo}
        updateTodo={handleUpdateTodo}
      />
    </div>
  );
};

export default TodoForm;
