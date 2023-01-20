import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import TodosContextProvider from "./store/todos-context";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>
);
