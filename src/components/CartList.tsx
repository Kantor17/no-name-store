import styled from "styled-components";
import { useTypedSelector } from "../hooks/reduxHooks";
import CartItem from "./CartItem";

const EmptyMessage = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
`;
const StyledCartList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export default function CartList() {
  const productsIds = useTypedSelector((state) => state.cart.productsIds);
  if (productsIds.length <= 0)
    return (
      <EmptyMessage>
        You have not added any products to your cart yet...
      </EmptyMessage>
    );
  return (
    <StyledCartList>
      {productsIds.map((id) => (
        <CartItem productId={id} key={id} />
      ))}
    </StyledCartList>
  );
}
