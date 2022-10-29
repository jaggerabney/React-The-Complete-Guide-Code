import React, { useRef } from "react";
import Input from "../UI/Input";

import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const inputValue = useRef();

  function submitHandler(event) {
    event.preventDefault();
    props.onAdd(inputValue.current.value);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input ref={inputValue} />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;
