import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/reduxHooks";
import Container from "./Container";

const StyledHeader = styled.header`
  padding: 10px 0;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    letter-spacing: 0.2em;
  }
  .navlist {
    display: flex;
    column-gap: 12px;
    align-items: center;
  }
  .navlink.active {
    font-weight: 700;
  }
`;

export default function Header() {
  const user = useTypedSelector((state) => state.auth.user);
  return (
    <StyledHeader>
      <Container>
        <div className="navbar">
          <h1 className="logo">
            <NavLink className="link navlink" to={"/"}>
              NONAME
            </NavLink>
          </h1>
          <ul className="navlist">
            <li className="navitem">
              <NavLink className="link navlink" to={"/catalog"}>
                Catalog
              </NavLink>
            </li>
            <li className="navitem">
              <NavLink className="link navlink" to={"/profile"}>
                Profile
              </NavLink>
            </li>
            {user && (
              <li className="navitem">
                <NavLink className="link navlink" to={"/cart"}>
                  Cart
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </StyledHeader>
  );
}
