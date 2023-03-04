import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryTypes, Product, ProductsState, SortTypes } from "../../types";

const initialState: ProductsState = {
  products: [],
  sortType: SortTypes.POPULARITY,
  category: "electronics",
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    replaceProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    changeSorting: (state, action: PayloadAction<SortTypes>) => {
      state.sortType = action.payload;
    },
    changeCategory: (state, action: PayloadAction<CategoryTypes>) => {
      state.category = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const { replaceProducts, changeSorting, changeCategory } =
  productsSlice.actions;
