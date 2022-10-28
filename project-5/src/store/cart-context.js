import React, { useState, useReducer } from "react";

const CartContext = React.createContext({
  items: {},
  totalQuantity: 0,
  totalPrice: 0.0,
  onAdd: (item, quantity) => {},
  onRemove: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD") {
    // add code here
  } else if (action.type === "REMOVE") {
    // add code here
  }

  return null;
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
      value: event.target.value,
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
        onAdd: cartAddHandler,
        onRemove: cartRemoveHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
