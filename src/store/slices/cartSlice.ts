import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

interface CartState {
  productsIds: number[];
  totalSum: number;
}
const initialState: CartState = JSON.parse(
  localStorage.getItem("cart") || "null"
) || {
  productsIds: [],
  totalSum: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.productsIds.push(action.payload.id);
      state.totalSum += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.productsIds.splice(state.productsIds.indexOf(action.payload.id), 1);
      state.totalSum -= action.payload.price;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;
