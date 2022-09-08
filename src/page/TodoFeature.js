import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoInput from "./TodoInput";
import styled from "styled-components";

const Container = styled.div`
  .complete {
    text-decoration: line-through;
    opacity: 0.4;
  }
`;

const TodoFeature = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);

    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoInput edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <Container>
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div>
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </div>
      ))}
    </Container>
  );
};

export default TodoFeature;
