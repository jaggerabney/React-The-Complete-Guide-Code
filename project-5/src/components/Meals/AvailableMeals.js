import React from "react";

import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card.js";
import MealItem from "./MealItem.js";

function AvailableMeals(props) {
  return (
    <Card className={classes.meals}>
      <ul>
        <MealItem
          name="Sushi"
          description="Finest fish and veggies"
          price="$22.99"
        />
      </ul>
    </Card>
  );
}

export default AvailableMeals;
