import { useState } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputValueIsValid = inputValue.trim() !== "";
  const inputIsInvalid = !inputValueIsValid && inputTouched;

  function submitHandler(event) {
    event.preventDefault();

    if (inputValueIsValid) {
      setInputTouched(false);
      setInputValue("");
    }
  }

  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }

  function inputBlurHandler(event) {
    setInputTouched(true);
  }

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
