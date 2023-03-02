import styled from "styled-components";
import Container from "./Container";

const StyledFooter = styled.footer`
  padding: 10px 0;
  background-color: #26272b;
  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px;
    font-size: 15px;
    color: #ccc;
  }
  .column {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    line-height: 20px;
  }
  .about-column {
    flex-basis: 50%;
  }
  .title {
    font-weight: 700;
    font-size: 20px;
    color: #fff;
  }
`;
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <div className="info">
          <div className="column about-column">
            <h3 className="title">About</h3>
            <p className="about">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              iusto quasi dolorum culpa, eius necessitatibus, optio laborum vel,
              quaerat qui a repudiandae aliquam facere officiis laudantium
              voluptates? Soluta, totam vitae?
            </p>
          </div>
          <div className="column contacts-column">
            <h3 className="title">Contacts</h3>
            <p className="contact">
              <a href="mailto:max.kantor72@gmail.com">E-mail</a>
            </p>
            <p className="contact">
              <a href="https://github.com/Kantor17">Github</a>
            </p>
            <p className="contact">
              <a href="https://t.me/kntr09">Telegram</a>
            </p>
          </div>
          <div className="column address-column">
            <h3 className="title">Address</h3>
            <address className="address">
              Anywhere Street 17, Lviv, Ukraine
            </address>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
}
