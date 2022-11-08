import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValueIsValid, setInputValueIsValid] = useState(true);

  function submitHandler(event) {
    event.preventDefault();

    if (inputValue.trim() === "") {
      setInputValueIsValid(false);
      return;
    }

    setInputValueIsValid(true);

    setInputValue("");
  }

  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${inputValueIsValid ? "" : "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={inputChangeHandler}
          value={inputValue}
          type="text"
          id="name"
        />
        {!inputValueIsValid && (
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
