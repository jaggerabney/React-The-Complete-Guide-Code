import React from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

export default function App() {
  return (
    <>
      <NewTodo />
      <Todos />
    </>
  );
}
