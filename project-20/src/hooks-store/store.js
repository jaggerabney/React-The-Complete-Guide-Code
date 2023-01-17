import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export function useStore() {
  const [state, setState] = useState(globalState);

  function dispatch(actionId, payload) {
    const newState = actions[actionId](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  }

  console.log(globalState);

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
}

export function initStore(userActions, initialState) {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
}
