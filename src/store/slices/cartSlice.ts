import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  productsIds: number[];
  totalSum: number;
}
const initialState: CartState = {
  productsIds: [],
  totalSum: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductId: (state, action: PayloadAction<number>) => {
      state.productsIds.push(action.payload);
    },
    removeProductId: (state, action: PayloadAction<number>) => {
      state.productsIds.splice(state.productsIds.indexOf(action.payload), 1);
    },
    changeTotalSum: (state, action: PayloadAction<number>) => {
      state.totalSum += action.payload;
    },
  },
});

export default cartSlice.reducer;

export const { addProductId, removeProductId, changeTotalSum } = cartSlice.actions;
