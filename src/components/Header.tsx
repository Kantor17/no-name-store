import { Link } from "react-router-dom";
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
`;

export default function Header() {
  const user = useTypedSelector((state) => state.auth.user);
  return (
    <StyledHeader>
      <Container>
        <div className="navbar">
          <h1 className="logo">
            <Link to={"/"}>NONAME</Link>
          </h1>
          <ul className="navlist">
            <li className="navitem">
              <Link to={"/catalog"}>Catalog</Link>
            </li>
            <li className="navitem">
              <Link to={"/profile"}>Profile</Link>
            </li>
            {user && (
              <li className="navitem">
                <Link to={"/cart"}>Cart</Link>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </StyledHeader>
  );
}
