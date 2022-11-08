import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [nameInputValue, setNameInputValue] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);
  const [emailInputValue, setEmailInputValue] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const nameInputValueIsValid = nameInputValue.trim() !== "";
  const nameInputIsInvalid = !nameInputValueIsValid && nameInputTouched;
  const emailInputValueIsValid =
    emailInputValue.trim() !== "" && emailInputValue.includes("@");
  const emailInputIsInvalid = !emailInputValueIsValid && emailInputTouched;
  let formIsValid = false;

  if (nameInputValueIsValid && emailInputValueIsValid) {
    formIsValid = true;
  }

  function submitHandler(event) {
    event.preventDefault();

    if (nameInputValueIsValid && emailInputValueIsValid) {
      setNameInputTouched(false);
      setNameInputValue("");

      setEmailInputTouched(false);
      setEmailInputValue("");
    }
  }

  function inputChangeHandler(event) {
    if (event.target.id === "name") {
      setNameInputValue(event.target.value);
    } else if (event.target.id === "email") {
      setEmailInputValue(event.target.value);
    }
  }

  function inputBlurHandler(event) {
    if (event.target.id === "name") {
      setNameInputTouched(true);
    } else if (event.target.id === "email") {
      setEmailInputTouched(true);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameInputIsInvalid && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
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
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
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
