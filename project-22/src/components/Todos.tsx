import React, { useContext } from "react";

import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

const Todos: React.FC = function (props) {
  const todosContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemove={todosContext.remove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
