import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    'products': productsSlice,
    'auth': authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;