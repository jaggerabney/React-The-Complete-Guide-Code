import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalQuantity: 0,
  totalPrice: 0.0,
  addItem: (item, quantity) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD") {
    const mealIDs = state.items.map((meal) => meal.item.id);
    const actionMealID = action.item.id;
    let newItems;

    if (mealIDs.includes(actionMealID)) {
      const actionMealIDIndex = mealIDs.indexOf(actionMealID);
      newItems = state.items;

      newItems[actionMealIDIndex] = {
        item: action.item,
        quantity:
          Number(state.items[actionMealIDIndex].quantity) +
          Number(action.quantity),
      };
    } else {
      newItems = [
        ...state.items,
        {
          item: action.item,
          quantity: Number(action.quantity),
        },
      ];
    }

    return { ...state, items: newItems };
  } else if (action.type === "REMOVE") {
    // add code here
  }

  return state;
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

  console.log(cartState);

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
