import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)<NavLinkProps>`
  &.active {
    font-weight: 700;
  }
`;

export default function AppNavLink({ to, children, ...props }: NavLinkProps) {
  return (
    <StyledNavLink to={to} {...props}>
      {children}
    </StyledNavLink>
  );
}
