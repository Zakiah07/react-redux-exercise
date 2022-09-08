import React from "react";
import TodoFeature from "./TodoFeature";
import TodoInput from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo } from "./todoSlice";

const TodoForm = () => {
  const reduxTodo = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const addTodo = (todo) => {
    dispatch(addNewTodo(todo));
    console.log({ todo });
    // if (!todo.text || /^\s*$/.test(todo.text)) {
    //   return;
    // }
    // const newTodos = [todo, ...todos];
    // setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    // if (!newValue.text || /^\s*$/.test(newValue.text)) {
    //   return;
    // }
    // setTodos((prev) =>
    //   prev.map((item) => (item.id === todoId ? newValue : item))
    // );
  };

  const removeTodo = (id) => {
    // const removeArr = [...todos].filter((todo) => todo.id !== id);
    // setTodos(removeArr);
  };

  const completeTodo = (id) => {
    // let updatedTodos = todos.map((todo) => {
    //   if (todo.id === id) {
    //     todo.isComplete = !todo.isComplete;
    //   }
    //   return todo;
    // });
    // setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's Your Plan This Week ?</h1>
      <br />
      <TodoInput onSubmit={addTodo} />
      <TodoFeature
        todos={reduxTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoForm;
