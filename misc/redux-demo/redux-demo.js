const redux = require("redux");

function counterReducer(state, action) {
  return {
    counter: state.counter + 1,
  };
}

const store = redux.createStore(counterReducer);
