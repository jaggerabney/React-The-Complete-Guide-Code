import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";
import DATABASE_URL from "../resources/database-url";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0.0,
    isVisible: false,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      const { items, totalQuantity, totalPrice, isVisible, changed } =
        action.payload;

      state.items = items ? items : [];
      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;
    },
    add(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity += newItem.quantity;
      }

      state.totalQuantity += newItem.quantity;
      state.price += newItem.price * newItem.quantity;
      state.changed = true;
    },
    remove(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem && existingItem.quantity > newItem.quantity) {
        existingItem.quantity -= newItem.quantity;
      } else {
        state.items = state.items.filter((item) => item.id !== newItem.id);
      }

      state.totalQuantity -= newItem.quantity;
      state.price -= newItem.price * newItem.quantity;
      state.changed = true;
    },
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(DATABASE_URL + "cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
}

export function fetchCartData() {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Fetching...",
        message: "Fetching cart data!",
      })
    );

    const fetchData = async () => {
      const response = await fetch(DATABASE_URL + "cart.json");

      if (!response.ok) {
        throw new Error("Fetching cart data failed.");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
}

export const cartActions = cartSlice.actions;

export default cartSlice;
