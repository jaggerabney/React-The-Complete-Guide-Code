import { useReducer } from "react";

const INITIAL_INPUT_STATE = {
  value: "",
  isTouched: false,
};

function inputStateReducer(state, action) {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  } else if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  } else if (action.type === "RESET") {
    return INITIAL_INPUT_STATE;
  }

  return INITIAL_INPUT_STATE;
}

function useInput(validationFunction) {
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    INITIAL_INPUT_STATE
  );

  const inputValueIsValid = validationFunction(inputState.value);
  const hasError = !inputValueIsValid && inputState.isTouched;

  function inputChangeHandler(event) {
    dispatchInput({ type: "INPUT", value: event.target.value });
  }

  function inputBlurHandler(event) {
    dispatchInput({ type: "BLUR" });
  }

  function reset() {
    dispatchInput({ type: "RESET" });
  }

  return {
    value: inputState.value,
    isValid: inputValueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default useInput;
