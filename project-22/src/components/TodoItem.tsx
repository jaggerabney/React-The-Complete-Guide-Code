import React from "react";

const TodoItem: React.FC<{ text: string }> = function (props) {
  return <li>{props.text}</li>;
};

export default TodoItem;
