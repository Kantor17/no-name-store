import styled from "styled-components";
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
  return (
    <StyledHeader>
      <Container>
        <div className="navbar">
          <h1 className="logo">
            <a href="/">NONAME</a>
          </h1>
          <ul className="navlist">
            <li className="navitem">
              <a href="#">Catalog</a>
            </li>
            <li className="navitem">
              <a href="#">Profile</a>
            </li>
            <li className="navitem">
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
      </Container>
    </StyledHeader>
  );
}
