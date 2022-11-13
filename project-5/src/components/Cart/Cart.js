import React, { Fragment, useContext } from "react";

import classes from "./Cart.module.css";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartContext = useContext(CartContext);

  const formattedPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cartContext.totalPrice);

  function orderHandler() {
    props.onConfirm();
  }

  const actions = (
    <div className={classes.actions}>
      <button onClick={props.onClose}>Cancel</button>
      <button onClick={orderHandler} className={classes.button}>
        Order
      </button>
    </div>
  );

  return (
    <Fragment>
      <ul className={classes["cart-items"]}>
        {cartContext.items.map((meal) => (
          <CartItem
            key={meal.item.id}
            id={meal.item.id}
            title={meal.item.name}
            price={meal.item.price}
            amount={meal.quantity}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>{formattedPrice}</div>
      </div>
      {props.showActions && actions}
    </Fragment>
  );
}

export default Cart;
