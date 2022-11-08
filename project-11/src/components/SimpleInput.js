import { useRef } from "react";

const SimpleInput = (props) => {
  const inputValueRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    console.log(inputValueRef.current.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input ref={inputValueRef} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
