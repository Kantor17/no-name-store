import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import authSlice from "./slices/authSlice";
import cartSlice, { addProductId, removeProductId } from "./slices/cartSlice";
import modalSlice from "./slices/modalSlice";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(addProductId, removeProductId),
  effect: (action, listenerAPI) => {
    localStorage.setItem(
      "cartProductsIds",
      JSON.stringify((listenerAPI.getState() as RootState).cart.productsIds)
    );
  },
});

const store = configureStore({
  reducer: {
    products: productsSlice,
    auth: authSlice,
    cart: cartSlice,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).prepend(
      listenerMiddleware.middleware
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
