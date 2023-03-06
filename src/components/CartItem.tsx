import styled from "styled-components";
import { Product } from "../types";
import removeIcon from "../assets/remove.svg";
import { useEffect, useState } from "react";
import fetchProduct from "../API/fetchProduct";
import Loader from "../ui/Loader";
import { useTypedDispatch } from "../hooks/reduxHooks";
import { setModal } from "../store/slices/modalSlice";
import { removeFromCart } from "../store/slices/cartSlice";
import { Link } from "react-router-dom";

const StyledCartItem = styled.li`
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  padding: 10px;
  border-radius: 8px;
  .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 4px;
  }
  .right-column {
    align-items: flex-end;
  }
  .image {
    width: 200px;
    height: 150px;
  }
  .price {
    font-weight: 700;
    font-size: 20px;
  }
  .remove-btn {
    width: 30px;
    height: 30px;
  }
`;

export default function CartItem({ productId }: { productId: number }) {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<Product>();

  const dispatch = useTypedDispatch();

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const fetchedProduct = await fetchProduct(productId);
        setProduct(fetchedProduct);
      } catch (err) {
        dispatch(
          setModal({
            error: err as Error,
            message: "An error occurred while loading cart products.",
          })
        );
      }
      setIsLoading(false);
    })();
  }, [productId, dispatch]);

  if (isLoading) return <Loader />;
  if (product)
    return (
      <StyledCartItem>
        <div className="column">
          <div className="image">
            <Link to={`/products/:${productId}`} replace>
              <img src={product.image} alt={product.title} />
            </Link>
          </div>
          <h4 className="name">{product.title}</h4>
        </div>
        <div className="column right-column">
          <div className="price">{product.price}$</div>
          <button
            className="remove-btn"
            onClick={() => dispatch(removeFromCart(product))}
          >
            <img src={removeIcon} alt="remove" />
          </button>
        </div>
      </StyledCartItem>
    );
  return null;
}
