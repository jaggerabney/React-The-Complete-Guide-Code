import React, { useContext, useRef } from "react";
import Input from "../UI/Input";
import CartContext from "../../store/cart-context";

import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const inputValue = useRef();
  const cartContext = useContext(CartContext);

  function submitHandler(event) {
    event.preventDefault();

    cartContext.addItem({
      item: props.id,
      quantity: inputValue.current.value,
    });
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input ref={inputValue} />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;
