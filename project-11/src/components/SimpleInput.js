import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: nameInputValue,
    isValid: nameInputValueIsValid,
    hasError: nameInputIsInvalid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInputValue,
    isValid: emailInputValueIsValid,
    hasError: emailInputIsInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;

  if (nameInputValueIsValid && emailInputValueIsValid) {
    formIsValid = true;
  }

  function submitHandler(event) {
    event.preventDefault();

    if (formIsValid) {
      nameReset();
      emailReset();
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameInputIsInvalid && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameInputValue}
          type="text"
          id="name"
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}
      <div className={`form-control ${emailInputIsInvalid && "invalid"}`}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailInputValue}
          type="text"
          id="email"
        />
      </div>
      {emailInputIsInvalid && (
        <p className="error-text">
          Email must not be empty and must contain an @.
        </p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
