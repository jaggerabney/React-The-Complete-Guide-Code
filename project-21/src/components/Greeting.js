import { useState } from "react";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function changeTextHandler(event) {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed text!</p>}
      <button onClick={changeTextHandler}>Change text!</button>
    </div>
  );
}
