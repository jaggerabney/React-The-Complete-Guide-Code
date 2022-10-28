import React from "react";

import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input type="number" min="0" step="1" value="1" />
    </div>
  );
}

export default Input;
