import { createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.value,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - action.value,
    };
  }

  return state;
}

const store = createStore(counterReducer);

export default store;
