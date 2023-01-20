import React from "react";

import Todos from "./components/Todos";
import Todo from "./models/todo";

const DUMMY_TODOS: Todo[] = [
  new Todo("Learn React!"),
  new Todo("Learn TypeScript!"),
  new Todo("Attend stand up!"),
];

function App() {
  return <Todos items={DUMMY_TODOS} />;
}

export default App;
