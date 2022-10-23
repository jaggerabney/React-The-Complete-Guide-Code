import React from "react";

import classes from "./Input.module.css";

function Input(props) {
  function inputChangeHandler(event) {
    props.onChange(event);
  }

  function inputValidationHandler(event) {
    props.onBlur(event);
  }

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={inputChangeHandler}
        onBlur={inputValidationHandler}
      />
    </div>
  );
}

export default Input;
