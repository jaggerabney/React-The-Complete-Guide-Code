import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input ref={ref} type="number" min="0" step="1" defaultValue="1" />
    </div>
  );
});

export default Input;
