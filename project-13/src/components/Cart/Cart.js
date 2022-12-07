import Card from "../UI/Card";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem
            item={{
              key: cartItem.id,
              id: cartItem.id,
              title: cartItem.name,
              quantity: cartItem.quantity,
              price: cartItem.price,
              total: cartItem.price * cartItem.quantity,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
