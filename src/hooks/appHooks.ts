import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/slices/cartSlice";
import { setModal } from "../store/slices/modalSlice";
import { Product } from "../types";
import { useTypedDispatch, useTypedSelector } from "./reduxHooks";

export function useCartHandler(product: Product) {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const user = useTypedSelector((state) => state.auth.user);
  const cartProductsIds = useTypedSelector((state) => state.cart.productsIds);
  const inCart = cartProductsIds.includes(product.id) && user;

  let onCartClick;
  if (!user) {
    onCartClick = () =>
      dispatch(
        setModal({
          message: "You need to log in in order to add products to the cart.",
          buttons: [{ title: "Go to login", action: () => navigate("/login") }],
        })
      );
  } else if (inCart) {
    onCartClick = () => navigate(`/cart`);
  } else {
    onCartClick = () => {
      dispatch(addToCart(product));
    };
  }
  
  return { onCartClick, inCart };
}
