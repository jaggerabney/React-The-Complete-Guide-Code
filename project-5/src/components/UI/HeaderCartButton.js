import React from "react";

import CartIcon from "../../resources/CartIcon";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <button className={classes.button}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>0</div>
    </button>
  );
}

export default HeaderCartButton;
