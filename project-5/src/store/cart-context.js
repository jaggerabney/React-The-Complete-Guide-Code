import React, { useReducer } from "react";

import { DUMMY_MEALS } from "../resources/dummy-meals";

const CartContext = React.createContext({
  items: {},
  totalQuantity: 0,
  totalPrice: 0.0,
  addItem: (item, quantity) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD") {
    console.log(action.item, action.quantity);
  } else if (action.type === "REMOVE") {
    // add code here
  }

  return {};
}

export function CartContextProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalQuantity: 0,
    totalPrice: 0.0,
  });

  function cartAddHandler(event) {
    dispatchCart({
      type: "ADD",
      item: event.item,
      quantity: event.quantity,
    });
  }

  function cartRemoveHandler(event) {
    dispatchCart({
      type: "REMOVE",
      id: event.target.value,
    });
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalQuantity: cartState.totalQuantity,
        totalPrice: cartState.totalPrice,
        addItem: cartAddHandler,
        removeItem: cartRemoveHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
