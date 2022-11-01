import React, { useState, useCallback, useMemo } from "react";

import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);

  // const toggleParagraphHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prevState) => !prevState);
  //   }
  // }, [allowToggle]);

  // function allowToggleHandler() {
  //   setAllowToggle(true);
  // }

  // console.log("App running!");

  const [listTitle, setListTitle] = useState("My List");

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
