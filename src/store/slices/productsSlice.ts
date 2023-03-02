import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsState } from "../../types";

const initialState: ProductsState = {
  products: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    replaceProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const { replaceProducts } = productsSlice.actions;
