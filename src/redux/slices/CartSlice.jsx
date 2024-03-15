import { configureStore } from "@reduxjs/toolkit";

const createSlice = createSlice({
  name: "cart",
  initalState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload.id);
    },
  },
});
export const { addToCart, removeFromCart } = createSlice.actions;
export default createSlice.reducer;
