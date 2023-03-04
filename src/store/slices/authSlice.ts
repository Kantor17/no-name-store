import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { AuthState } from "../../types";

const initialState: AuthState = {
  user: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
