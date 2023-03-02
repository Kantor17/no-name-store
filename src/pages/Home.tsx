import Header from "../components/Header";
import styled from "styled-components";
import Container from "../components/Container";
import Banner from "../components/Banner";
import clothingImg from "../assets/clothing.jpg";
import electronicsImg from "../assets/electronics.jpg";
import womenClothingImg from "../assets/women-clothing.jpg";
import jewelryImg from "../assets/jewelry.jpg";
import Footer from "../components/Footer";

const StyledHome = styled.div`
  .section {
    padding: 15px 0;
  }
  .heading {
    text-align: center;
    font-size: 32px;
    margin-bottom: 10px;
  }
  .banner-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <main className="main">
        <Container>
          <section className="section">
            <Banner
              title="New Men's Clothing Arrivals"
              isBig
              bgImg={clothingImg}
            />
          </section>
          <section className="section">
            <h2 className="heading">Other categories</h2>
            <ul className="banner-list">
              <Banner title="Women's clothing" bgImg={womenClothingImg} />
              <Banner title="Jewelry" bgImg={jewelryImg} />
              <Banner title="Electronics" bgImg={electronicsImg} />
            </ul>
          </section>
        </Container>
      </main>
      <Footer />
    </StyledHome>
  );
}
