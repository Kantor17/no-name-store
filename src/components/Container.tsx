import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

export default function Container({ children }: { children: React.ReactNode }) {
  return <StyledContainer>{children}</StyledContainer>;
}
