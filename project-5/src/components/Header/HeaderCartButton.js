import React, { Fragment, useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../../resources/CartIcon";
import Modal from "../UI/Modal";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [cartIsActive, setCartIsActive] = useState(false);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const buttonClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) return;

    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext]);

  function clickHandler() {
    setCartIsActive((prevState) => !prevState);
  }

  return (
    <Fragment>
      {cartIsActive && <Modal onClose={clickHandler} />}
      <button onClick={clickHandler} className={buttonClasses}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={classes.badge}>{cartContext.totalQuantity}</div>
      </button>
    </Fragment>
  );
}

export default HeaderCartButton;
