import React from "react";

import MyParagraph from "./MyParagraph";

function DemoOutput(props) {
  console.log("DemoOutput running!");

  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
}

export default DemoOutput;
