import React from "react";
import Input from "../UI/Input";

import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <Input />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;
