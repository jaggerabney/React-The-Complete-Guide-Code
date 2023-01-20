import React from "react";

import TodoItem from "./TodoItem";
import Todo from "../models/todo";

import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> =
  function (props) {
    return (
      <ul className={classes.todos}>
        {props.items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onRemove={props.onRemove.bind(null, item.id)}
          />
        ))}
      </ul>
    );
  };

export default Todos;
