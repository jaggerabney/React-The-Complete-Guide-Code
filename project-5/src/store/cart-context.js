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
    const mealsWithoutQuantities = state.items.filter((meal) => meal.item);
    let newItems;

    if (mealsWithoutQuantities.includes(action.item)) {
      const mealIndex = mealsWithoutQuantities.indexOf(action.item);
      const oldMealItem = state.items[mealIndex].item;
      const oldMealQuantity = state.items[mealIndex].quantity;
      newItems = state.items;

      newItems[mealIndex] = {
        item: oldMealItem,
        quantity: oldMealQuantity + state.quantity,
      };
    } else {
      newItems = [
        ...state.items,
        {
          item: action.item,
          quantity: action.quantity,
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
