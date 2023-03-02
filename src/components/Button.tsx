import styled from "styled-components";

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #fff;
  color: #000;
  border: 2px solid #fff;
  border-radius: 36px;
`;

export default function Button({ children }: { children: React.ReactNode }) {
  return <StyledButton>{children}</StyledButton>;
}
