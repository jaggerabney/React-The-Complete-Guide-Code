import React from "react";
import useInput from "../../hooks/use-input";

import classes from "./CheckoutInput.module.css";

function CheckoutInput(props) {
  const inputState = useInput(props.validationFunction);

  console.log(inputState.hasError);

  return (
    <div
      className={`${classes.control} ${inputState.hasError && classes.invalid}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onChange={inputState.inputChangeHandler}
        onBlur={inputState.inputBlurHandler}
        type={props.type}
        id={props.id}
      />
      {inputState.hasError && (
        <p className={classes["error-text"]}>{props.errorMessage}</p>
      )}
    </div>
  );
}

export default CheckoutInput;
