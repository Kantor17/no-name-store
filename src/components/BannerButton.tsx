import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTypedDispatch } from "../hooks/reduxHooks";
import { changeCategory } from "../store/slices/productsSlice";
import { CategoryTypes } from "../types";

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #fff;
  color: #000;
  border: 2px solid #fff;
  border-radius: 36px;
`;

export default function Button({ category, children }: {category: CategoryTypes, children: React.ReactNode }) {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  function goToCatalog(category: CategoryTypes) {
    dispatch(changeCategory(category));
    navigate('/catalog');
  }
  return <StyledButton onClick={() => goToCatalog(category)}>{children}</StyledButton>;
}
