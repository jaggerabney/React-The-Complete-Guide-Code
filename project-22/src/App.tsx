import React, { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

import Todo from "./models/todo";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn React!"),
    new Todo("Learn TypeScript!"),
    new Todo("Attend stand up!"),
  ]);

  function addTodoHandler(item: Todo) {
    setTodos((state) => [item, ...state]);
  }

  function removeTodoHandler(id: string) {
    setTodos((state) => state.filter((item) => item.id !== id));
  }

  return (
    <>
      <NewTodo onAdd={addTodoHandler} />
      <Todos items={todos} onRemove={removeTodoHandler} />
    </>
  );
}
