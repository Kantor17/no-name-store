import styled from "styled-components";

const StyledLoader = styled.div<LoaderProps>`
  position: relative;
  height: 100%;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => (props.inverted ? "#dddddd" : "#26272b")};
    animation: bouncing 0.6s infinite alternate;
  }
  .dot-2 {
    animation-delay: 0.2s;
  }
  .dot-3 {
    animation-delay: 0.4s;
  }
  @keyframes bouncing {
    to {
      opacity: 0.3;
      transform: translateY(-8px);
    }
  }
`;

interface LoaderProps {
  inverted?: boolean;
}
export default function Loader({ inverted }: LoaderProps) {
  return (
    <StyledLoader inverted={inverted}>
      <div className="dot dot-1" />
      <div className="dot dot-2" />
      <div className="dot dot-3" />
    </StyledLoader>
  );
}
