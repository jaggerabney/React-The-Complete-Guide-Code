import { useSelector } from "react-redux";

import classes from "./Cart.module.css";

import Card from "../UI/Card";
import CartItem from "./CartItem";

const Cart = (props) => {
  const isVisible = useSelector((state) => state.cart.isVisible);

  return (
    <>
      {isVisible && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem
              item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
            />
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
