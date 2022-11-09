import { useState } from "react";

function useInput(validationFunction) {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputValueIsValid = validationFunction(inputValue);
  const hasError = !inputValueIsValid && isTouched;

  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }

  function inputBlurHandler(event) {
    setIsTouched(true);
  }

  function reset() {
    setInputValue("");
    setIsTouched(false);
  }

  return {
    value: inputValue,
    isValid: inputValueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
