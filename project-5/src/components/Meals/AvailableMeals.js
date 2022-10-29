import React from "react";

import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card.js";
import MealItem from "./MealItem.js";

function AvailableMeals(props) {
  return (
    <Card className={classes.meals}>
      <ul>
        <MealItem
          id="m1"
          name="Sushi"
          description="Finest fish and veggies"
          price="$22.99"
        />
        <MealItem
          id="m2"
          name="Schnitzel"
          description="A German specialty!"
          price="$16.50"
        />
        <MealItem
          id="m3"
          name="Barbeque Burger"
          description="American, raw, meaty"
          price="$12.99"
        />
        <MealItem
          id="m4"
          name="Green Bowl"
          description="Healthy...and green..."
          price="$18.99"
        />
      </ul>
    </Card>
  );
}

export default AvailableMeals;
