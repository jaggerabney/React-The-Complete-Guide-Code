import React, { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

function MealItem(props) {
  const cartContext = useContext(CartContext);

  const formattedPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(props.price);

  function addHandler(quantity) {
    cartContext.addItem({
      item: {
        id: props.id,
        name: props.name,
        description: props.description,
        price: Number(props.price),
      },
      quantity: quantity,
    });
  }

  return (
    <li className={classes.meal}>
      <section>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </section>
      <section>
        <MealItemForm onAdd={addHandler} />
      </section>
    </li>
  );
}

export default MealItem;
