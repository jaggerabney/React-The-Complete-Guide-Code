import React, { useContext } from "react";

import classes from "./Cart.module.css";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartContext = useContext(CartContext);

  return (
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
  );
}

export default Cart;
