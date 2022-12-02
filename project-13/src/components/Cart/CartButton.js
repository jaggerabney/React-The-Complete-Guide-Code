import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(cartActions.toggleVisibility());
  }

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
