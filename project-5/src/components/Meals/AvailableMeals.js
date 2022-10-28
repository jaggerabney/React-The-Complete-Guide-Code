import React from "react";

import classes from "./AvailableMeals.module.js";

import Card from "../UI/Card.js";

function AvailableMeals(props) {
  return (
    <Card>
      <ul className={classes.meals}></ul>
    </Card>
  );
}

export default AvailableMeals;
