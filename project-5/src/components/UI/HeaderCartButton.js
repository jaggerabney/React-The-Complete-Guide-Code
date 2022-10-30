import React, { Fragment, useState } from "react";

import CartIcon from "../../resources/CartIcon";
import Modal from "./Modal";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [cartIsActive, setCartIsActive] = useState(false);

  function clickHandler() {
    setCartIsActive((prevState) => !prevState);
  }

  return (
    <Fragment>
      {cartIsActive && <Modal onClose={clickHandler} />}
      <button onClick={clickHandler} className={classes.button}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={classes.badge}>0</div>
      </button>
    </Fragment>
  );
}

export default HeaderCartButton;
