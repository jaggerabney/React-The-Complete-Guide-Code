import { createStore } from "redux";

function counterReducer(state = { counter: 0, showCounter: true }, action) {
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - action.value,
      showCounter: state.showCounter,
    };
  } else if (action.type === "TOGGLE") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;
