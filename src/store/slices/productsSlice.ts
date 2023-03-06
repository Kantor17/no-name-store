import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchProducts from "../../API/fetchProducts";
import { CategoryTypes, Product, SortTypes } from "../../types";

interface ProductsState {
  products: Product[];
  sortType: SortTypes;
  status: "pending" | "rejected" | "fulfilled";
  error: Error | null;
}
const initialState: ProductsState = {
  products: [],
  sortType: SortTypes.POPULARITY,
  status: "fulfilled",
  error: null,
};

export const replaceProducts = createAsyncThunk(
  "replace-products",
  async (category?: CategoryTypes) => {
    const products = await fetchProducts(category);
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeSorting: (state, action: PayloadAction<SortTypes>) => {
      state.sortType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(replaceProducts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(replaceProducts.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error as Error;
    });
    builder.addCase(replaceProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;

export const { changeSorting } = productsSlice.actions;
