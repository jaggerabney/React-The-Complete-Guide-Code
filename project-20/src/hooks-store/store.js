import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export function useStore() {
  const [state, setState] = useState(globalState);

  function dispatch(actionId) {
    const newState = actions[actionId](globalState);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  }

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, []);

  return [globalState, dispatch];
}

export function initStore(userActions, initialState) {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
}
