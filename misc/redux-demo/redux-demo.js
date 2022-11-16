const redux = require("redux");

function counterReducer(state = { counter: 0 }, action) {
  return {
    counter: state.counter + 1,
  };
}

const store = redux.createStore(counterReducer);

function counterSubscriber() {
  const latestState = store.getState();
  console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
