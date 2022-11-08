import { useState } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValueIsValid, setInputValueIsValid] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    setInputTouched(true);

    if (inputValue.trim() === "") {
      setInputValueIsValid(false);
      return;
    }

    setInputValueIsValid(true);

    setInputValue("");
  }

  function inputChangeHandler(event) {
    setInputValue(event.target.value);

    if (event.target.value.trim() !== "") {
      setInputValueIsValid(true);
    }
  }

  function inputBlurHandler(event) {
    setInputTouched(true);

    if (inputValue.trim() === "") {
      setInputValueIsValid(false);
      return;
    }
  }

  const inputIsInvalid = !inputValueIsValid && inputTouched;

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${inputIsInvalid && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          value={inputValue}
          type="text"
          id="name"
        />
        {inputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
