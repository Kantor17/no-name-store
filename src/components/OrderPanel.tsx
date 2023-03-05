import styled from "styled-components";
import { useTypedDispatch, useTypedSelector } from "../hooks/reduxHooks";
import { setModal } from "../store/slices/modalSlice";
import Button from "../ui/Button";

const StyledOrderPanel = styled.div`
  .total-sum {
    font-weight: 500;
  }
  .sum {
    font-weight: 700;
  }
`;

export default function OrderPanel() {
  const dispatch = useTypedDispatch();
  const {productsIds, totalSum} = useTypedSelector((state) => state.cart);
  if(productsIds.length <= 0) return null;
  return (
    <StyledOrderPanel>
      <h3 className="total-sum">
        Total sum: <span className="sum">{totalSum}$</span>
      </h3>
      <Button
        onClick={() =>
          dispatch(
            setModal({
              message: "Your order has been sent for processing! (It wasn't)",
            })
          )
        }
      >
        Order
      </Button>
    </StyledOrderPanel>
  );
}
