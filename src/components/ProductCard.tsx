import styled from "styled-components";
import { Product } from "../types";
import cartIcon from "../assets/cart.svg";
import inCartIcon from "../assets/in-cart.svg";
import { useTypedSelector } from "../hooks/reduxHooks";
import { useCartHandler } from "../hooks/appHooks";
import { Link } from "react-router-dom";

const StyledProductCard = styled.div`
  display: flex;
  width: 400px;
  height: 230px;
  border-radius: 8px;
  padding: 6px 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  .cart-btn {
    width: 30px;
    height: 30px;
  }
  .img-link {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 55%;
    max-width: 55%;
  }
  .info {
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price {
    font-size: 18px;
    font-weight: 700;
  }
`;

export default function ProductCard({ product }: { product: Product }) {
  const cartProductsIds = useTypedSelector((state) => state.cart.productsIds);
  const inCart = cartProductsIds.includes(product.id);
  const onCartClick = useCartHandler(product.id, inCart);
  return (
    <StyledProductCard>
      <Link to={`/catalog/:${product.id}`} className="img-link">
        <img src={product.image} alt={product.title} className="image" />
      </Link>
      <div className="info">
        <h4 className="name">{product.title}</h4>
        <div className="row">
          <p className="price">{product.price}$</p>
          <button
            className={`cart-btn ${inCart ? "in-cart-btn" : ""}`}
            onClick={onCartClick}
          >
            <img src={inCart ? inCartIcon : cartIcon} alt="Add to cart" />
          </button>
        </div>
      </div>
    </StyledProductCard>
  );
}
