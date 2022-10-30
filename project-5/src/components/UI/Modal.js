import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

function ModalContent(props) {
  return <div className={classes.modal}>{props.children}</div>;
}

function ModalBackdrop(props) {
  function clickHandler() {
    props.onClick();
  }

  return <div onClick={clickHandler} className={classes.backdrop} />;
}

function Modal(props) {
  function clickHandler() {
    props.onClose();
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onClick={clickHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalContent>
          <p>bruh</p>
        </ModalContent>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}

export default Modal;
