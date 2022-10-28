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
        <MealItem
          name="Schnitzel"
          description="A German specialty!"
          price="$16.50"
        />
        <MealItem
          name="Barbeque Burger"
          description="American, raw, meaty"
          price="$12.99"
        />
        <MealItem
          name="Green Bowl"
          description="Healthy...and green..."
          price="$18.99"
        />
      </ul>
    </Card>
  );
}

export default AvailableMeals;
