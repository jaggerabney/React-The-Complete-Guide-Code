import React from "react";

import classes from "./CheckoutInput.module.css";

function CheckoutInput(props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        type={props.type}
        id={props.id}
      />
      {props.error && (
        <p className={classes["error-text"]}>{props.errorMessage}</p>
      )}
    </div>
  );
}

export default CheckoutInput;
