import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    setInputValue("");
  }

  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          onChange={inputChangeHandler}
          value={inputValue}
          type="text"
          id="name"
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
