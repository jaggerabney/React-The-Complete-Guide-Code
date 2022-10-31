import React, { useContext } from "react";

import CartContext from "../../store/cart-context";

import classes from "./CartItem.module.css";

function CartItem(props) {
  const cartContext = useContext(CartContext);

  const formattedPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(props.price);

  function addHandler() {
    cartContext.addItem({
      item: {
        id: props.id,
        name: props.title,
        description: props.description,
        price: Number(props.price),
      },
      quantity: 1,
    });
  }

  function removeHandler() {}

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.title}</h2>
        <div className={classes.summary}>
          <div className={classes.price}>{formattedPrice}</div>
          <div className={classes.amount}>{props.amount}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={addHandler}>+</button>
        <button onClick={removeHandler}>-</button>
      </div>
    </li>
  );
}

export default CartItem;
