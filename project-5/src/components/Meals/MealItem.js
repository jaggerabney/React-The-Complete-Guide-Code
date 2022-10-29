import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  return (
    <li className={classes.meal}>
      <section>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </section>
      <section>
        <MealItemForm id={props.id} />
      </section>
    </li>
  );
}

export default MealItem;
