import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0.0,
    isVisible: false,
  },
  reducers: {
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
    },
    remove(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem && existingItem.quantity > newItem.quantity) {
        existingItem.quantity -= newItem.quantity;
      } else if (existingItem) {
        state.items.pop(existingItem);
      }

      state.totalQuantity -= newItem.quantity;
      state.price -= newItem.price * newItem.quantity;
    },
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
