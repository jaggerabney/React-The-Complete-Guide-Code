import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import Cart from "../Cart/Cart";
import Checkout from "../Cart/Checkout";

import classes from "./Modal.module.css";

function ModalContent(props) {
  const [readyToOrder, setReadyToOrder] = useState(false);
  const [orderIsSubmitting, setOrderIsSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  let content = (
    <>
      <Cart
        showActions={!readyToOrder}
        onClose={props.onClose}
        onConfirm={setReadyToOrder}
      />
      {readyToOrder && (
        <Checkout
          onComplete={setOrderSubmitted}
          onSubmit={setOrderIsSubmitting}
          onCancel={props.onClose}
        />
      )}
    </>
  );

  if (orderIsSubmitting) {
    content = <div className={classes.text}>Submitting order...</div>;
  } else if (orderSubmitted) {
    content = (
      <>
        <div className={classes.text}>Order submitted!</div>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </div>
      </>
    );
  }

  return <div className={classes.modal}>{content}</div>;
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
