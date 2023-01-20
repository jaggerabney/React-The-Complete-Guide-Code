import React, { useRef } from "react";

import Todo from "../models/todo";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAdd: (item: Todo) => void }> = function (props) {
  const inputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = inputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    props.onAdd(new Todo(enteredText!));
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
