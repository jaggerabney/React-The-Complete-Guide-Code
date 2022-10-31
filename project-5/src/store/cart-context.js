import React, { useReducer } from "react";
import { DUMMY_MEALS } from "../resources/dummy-meals";

const CartContext = React.createContext({
  items: [],
  totalQuantity: 0,
  totalPrice: 0.0,
  addItem: ({ item, quantity }) => {},
  removeItem: ({ id, quantity }) => {},
});

function cartReducer(state, action) {
  const mealIDs = state.items.map((meal) => meal.item.id);
  let newItems = [],
    newTotalQuantity = 0,
    newTotalPrice = 0.0;

  if (action.type === "ADD") {
    const actionMealID = action.item.id;

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

    newTotalQuantity = state.totalQuantity + Number(action.quantity);
    newTotalPrice = state.totalPrice + action.item.price * action.quantity;

    return {
      items: newItems,
      totalQuantity: newTotalQuantity,
      totalPrice: newTotalPrice,
    };
  } else if (action.type === "REMOVE") {
    newItems = state.items;

    if (mealIDs.includes(action.id)) {
      const actionMealIDIndex = mealIDs.indexOf(action.id);
      const actionMeal = DUMMY_MEALS.find((meal) => meal.id === action.id);

      newItems[actionMealIDIndex] = {
        item: actionMeal,
        quantity: Math.max(
          0,
          Number(state.items[actionMealIDIndex].quantity) -
            Number(action.quantity)
        ),
      };

      newTotalQuantity = state.totalQuantity - Number(action.quantity);
      newTotalPrice =
        state.totalPrice - actionMeal.price * Number(action.quantity);

      if (newItems[actionMealIDIndex].quantity <= 0) {
        newItems.splice(actionMealIDIndex, 1);
      }

      return {
        items: newItems,
        totalQuantity: newTotalQuantity,
        totalPrice: newTotalPrice,
      };
    }
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
      id: event.id,
      quantity: event.quantity,
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
