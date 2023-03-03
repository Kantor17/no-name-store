import styled from "styled-components";
import { Product } from "../types";
import cartIcon from "../assets/cart.svg";

const StyledProductCard = styled.div`
  display: flex;
  width: 400px;
  height: 230px;
  border-radius: 8px;
  padding: 6px 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  cursor: pointer;
  .cart-btn {
    width: 30px;
    height: 30px;
  }
  .image {
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
  return (
    <StyledProductCard>
      <img src={product.image} alt={product.title} className="image" />
      <div className="info">
        <h4 className="name">{product.title}</h4>
        <div className="row">
          <p className="price">{product.price}$</p>
          <button className="cart-btn">
            <img src={cartIcon} alt="Add to cart" />
          </button>
        </div>
      </div>
    </StyledProductCard>
  );
}
