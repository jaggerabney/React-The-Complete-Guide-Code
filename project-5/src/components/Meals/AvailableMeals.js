import React from "react";

import Card from "../UI/Card.js";
import MealItem from "./MealItem.js";

import classes from "./AvailableMeals.module.css";

function AvailableMeals(props) {
  let content;

  if (props.meals.length > 0) {
    content = (
      <ul>
        {props.meals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    );
  } else if (props.loading) {
    content = <p>Loading...</p>;
  } else if (props.error) {
    content = (
      <button className={classes["error-button"]} onClick={props.onFetch}>
        Try loading meals again
      </button>
    );
  }

  return <Card className={classes.meals}>{content}</Card>;
}

export default AvailableMeals;
