import React, { Fragment } from "react";

import Wrapper from "../Helpers/Wrapper";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <Wrapper>
      <div className={classes.backdrop} onClick={props.onClose} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClose}>Okay</Button>
        </footer>
      </Card>
    </Wrapper>
  );
}

export default ErrorModal;
