import React, { useContext, useRef } from "react";

import { TodosContext } from "../store/todos-context";
import Todo from "../models/todo";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = function (props) {
  const todoContext = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = inputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    todoContext.add(new Todo(enteredText!));
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input ref={inputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
