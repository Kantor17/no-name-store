import styled from "styled-components";
import { Product } from "../types";
import ratingIcon from "../assets/rating.svg";

const StyledProductDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
  width: 70%;
  margin: 0 auto;
  .image {
    max-height: 500px;
  }
  .info-row {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
  .rating {
    display: flex;
    column-gap: 4px;
  }
  .rate {
    display: flex;
    align-items: center;
    font-size: 18px;
    &::before {
      content: "";
      position: relative;
      top: -1px;
      width: 28px;
      height: 28px;
      background-image: url(${ratingIcon});
      background-size: cover;
    }
  }
  .count {
    display: flex;
    align-items: center;
    column-gap: 3px;
    &::before {
      content: "";
      display: block;
      width: 1px;
      height: 100%;
      background-color: #000;
    }
  }
  .description {
    font-style: italic;
  }
  .price {
    font-size: 20px;
    font-weight: 700;
  }
  .cart-btn {
    display: block;
    width: 200px;
    font-size: 17px;
    color: #fff;
    height: 40px;
    background-color: #26272b;
    text-transform: uppercase;
  }
  .order {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <StyledProductDetails>
      <div className="image-row">
        <img src={product.image} alt={product.title} className="image" />
      </div>
      <div className="info-row">
        <div className="main-info">
          <h2 className="name">{product.title}</h2>
          <p className="description">{product.description}</p>
        </div>
        <div className="rating">
          <p className="rate">{product.rating.rate} / 5.0</p>
          <p className="count">{product.rating.count} reviews</p>
        </div>
        <div className="order">
          <div className="price">{product.price} $</div>
          <button className="cart-btn">Add to cart</button>
        </div>
      </div>
    </StyledProductDetails>
  );
}
