import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CategoryTypes } from "../types";

const StyledBannerButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #fff;
  color: #000;
  border: 2px solid #fff;
  border-radius: 36px;
  transition: 0.12s;
  &:hover {
    background-color: #ccc;
    border-color: #ccc;
  }
`;

export default function BannerButton({
  category,
  children,
}: {
  category: CategoryTypes;
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  return (
    <StyledBannerButton onClick={() => navigate(`/catalog/:${category}`)}>
      {children}
    </StyledBannerButton>
  );
}
