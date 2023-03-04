import styled from "styled-components";
import Loader from "./Loader";

const StyledButton = styled.button<ButtonProps>`
  display: block;
  width: 200px;
  font-size: 17px;
  color: #fff;
  height: 35px;
  background-color: #26272b;
  text-transform: uppercase;
  pointer-events: ${props => props.isLoading ? 'none' : 'all'};
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
};

export default function Button({isLoading, children, ...rest }: ButtonProps) {
  return (
    <StyledButton isLoading={isLoading} {...rest}>
      {isLoading ? <Loader inverted/> : children}
    </StyledButton>
  );
}
