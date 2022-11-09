import { useState, useEffect } from "react";
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

  // const [nameInputValue, setNameInputValue] = useState("");
  // const [nameInputTouched, setNameInputTouched] = useState(false);
  const [emailInputValue, setEmailInputValue] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  // const nameInputValueIsValid = nameInputValue.trim() !== "";
  // const nameInputIsInvalid = !nameInputValueIsValid && nameInputTouched;
  const emailInputValueIsValid =
    emailInputValue.trim() !== "" && emailInputValue.includes("@");
  const emailInputIsInvalid = !emailInputValueIsValid && emailInputTouched;
  let formIsValid = false;

  if (nameInputValueIsValid && emailInputValueIsValid) {
    formIsValid = true;
  }

  function submitHandler(event) {
    event.preventDefault();

    if (formIsValid) {
      nameReset();

      setEmailInputTouched(false);
      setEmailInputValue("");
    }
  }

  function emailChangeHandler(event) {
    setEmailInputValue(event.target.value);
  }

  function emailBlurHandler() {
    setEmailInputTouched(true);
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
