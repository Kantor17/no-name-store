import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalInfo } from "../../types";

interface ModalState {
  modal: ModalInfo| null;
}
const initialState: ModalState = {
  modal: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<ModalInfo | null>) => {
      state.modal = action.payload;
    },
  },
});

export default modalSlice.reducer;

export const { setModal } = modalSlice.actions;
