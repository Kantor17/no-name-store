import styled from "styled-components";
import { useTypedDispatch, useTypedSelector } from "../hooks/reduxHooks";
import { changeCategory } from "../store/slices/productsSlice";
import { CategoryTypes } from "../types";

const StyledCategory = styled.li<{type: CategoryTypes, currentCategory: CategoryTypes}>`
  .category-btn {
    background-color: #26272b;
    width: 160px;
    height: 25px;
    font-size: 18px;
    text-transform: capitalize;
    color: ${(props) => props.currentCategory ===  props.type? '#fff' : '#ccc'};
    font-weight: ${(props) => props.currentCategory ===  props.type? 700 : 400};
  }
`;

export default function Category({ type }: { type: CategoryTypes }) {
  const currentCategory = useTypedSelector((state) => state.products.category);
  const dispatch = useTypedDispatch();
  return (
    <StyledCategory type={type} currentCategory={currentCategory}>
      <button
        className="category-btn"
        value={type}
        onClick={() => dispatch(changeCategory(type))}
      >
        {type}
      </button>
    </StyledCategory>
  );
}
