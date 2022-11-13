import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import Cart from "../Cart/Cart";
import Checkout from "../Cart/Checkout";

import classes from "./Modal.module.css";

function ModalContent(props) {
  const [readyToOrder, setReadyToOrder] = useState(false);

  function confirmHandler() {
    setReadyToOrder(true);
  }

  return (
    <div className={classes.modal}>
      <Cart
        showActions={!readyToOrder}
        onClose={props.onClose}
        onConfirm={confirmHandler}
      />
      {readyToOrder && <Checkout onCancel={props.onClose} />}
    </div>
  );
}

function ModalBackdrop(props) {
  return <div onClick={props.onClick} className={classes.backdrop} />;
}

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalContent onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}

export default Modal;
