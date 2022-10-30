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

  return (
    <Fragment>
      <ul className={classes["cart-items"]}>
        {cartContext.items.map((meal) => (
          <CartItem
            key={meal.item.id}
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
      <div className={classes.actions}>
        <button>Cancel</button>
        <button className={classes.button}>Order</button>
      </div>
    </Fragment>
  );
}

export default Cart;
