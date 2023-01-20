import React, { useState } from "react";

import Todo from "../models/todo";

type TodosContextObject = {
  items: Todo[];
  add: (item: Todo) => void;
  remove: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  add: (item: Todo) => {},
  remove: (id: string) => {},
});

const TodosContextProvider: React.FC = function (props) {
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

  const contextValue = {
    items: todos,
    add: addTodoHandler,
    remove: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
