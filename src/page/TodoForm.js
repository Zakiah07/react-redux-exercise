import React, { useState } from "react";
import TodoInput from "./TodoInput";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log({ todo });
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>What's Your Plan This Week ?</h1>
      <TodoInput onSubmit={addTodo} />
    </div>
  );
};

export default TodoForm;
