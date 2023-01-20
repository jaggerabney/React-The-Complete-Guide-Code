import React from "react";

import Todos from "./components/Todos";

function App() {
  return (
    <Todos items={["Learn React!", "Learn TypeScript!", "Attend stand up!"]} />
  );
}

export default App;
