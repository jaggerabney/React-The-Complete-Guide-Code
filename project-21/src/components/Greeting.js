import { useState } from "react";

import Output from "./Output";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function changeTextHandler(event) {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed text!</Output>}
      <button onClick={changeTextHandler}>Change text!</button>
    </div>
  );
}
