import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartItemsTotal = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(cartActions.toggleVisibility());
  }

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsTotal}</span>
    </button>
  );
};

export default CartButton;
