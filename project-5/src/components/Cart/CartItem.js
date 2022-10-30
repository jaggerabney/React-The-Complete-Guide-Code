import React from "react";

import classes from "./CartItem.module.css";

function CartItem(props) {
  const formattedPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(props.price);

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
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
}

export default CartItem;
