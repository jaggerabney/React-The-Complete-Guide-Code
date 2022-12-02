import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isVisible: false,
  },
  reducers: {
    add(state, action) {
      // add code here
    },
    remove(state, action) {
      // add code here
    },
    toggleVisibility(state) {
      // add code here
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
