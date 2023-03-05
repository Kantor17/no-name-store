import { useNavigate } from "react-router-dom";
import { addProductId } from "../store/slices/cartSlice";
import { setModal } from "../store/slices/modalSlice";
import { useTypedDispatch, useTypedSelector } from "./reduxHooks";

export function useCartHandler(productId: number, inCart: boolean) {
  const user = useTypedSelector((state) => state.auth.user);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  if (!user)
    return () =>
      dispatch(
        setModal({
          message: "You need to log in in order to add products to the cart.",
          buttons: [{ title: "Go to login", action: () => navigate("/login") }],
        })
      );
  if (inCart) return () => navigate(`/cart`);
  return () => dispatch(addProductId(productId));
}
