import React from "react";

import { DUMMY_MEALS } from "../../resources/dummy-meals";

import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card.js";
import MealItem from "./MealItem.js";

function AvailableMeals(props) {
  return (
    <Card className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </Card>
  );
}

export default AvailableMeals;
