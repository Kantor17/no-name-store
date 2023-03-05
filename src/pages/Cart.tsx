import styled from "styled-components";
import CartList from "../components/CartList";
import OrderPanel from "../components/OrderPanel";
import Page from "./Page";

const StyledCart = styled.div`
  .cart-panel {
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
`;

export default function Cart() {
  return (
    <StyledCart className="page-wrapper">
      <Page>
        <div className="cart-panel">
          <CartList />
          <OrderPanel />
        </div>
      </Page>
    </StyledCart>
  );
}
