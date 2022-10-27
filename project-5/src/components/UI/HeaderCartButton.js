import React from "react";

import CartIcon from "../../resources/CartIcon";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <button className={classes.button}>
      <icon className={classes.icon}>
        <CartIcon />
      </icon>
      Your Cart
      <badge className={classes.badge}>0</badge>
    </button>
  );
}

export default HeaderCartButton;
