import Header from "../components/Header";
import styled from "styled-components";
import Banner from "../components/Banner";
import clothingImg from "../assets/clothing.jpg";
import electronicsImg from "../assets/electronics.jpg";
import womenClothingImg from "../assets/women-clothing.jpg";
import jeweleryImg from "../assets/jewelery.jpg";
import Footer from "../components/Footer";
import Main from "../components/Main";

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
    <StyledHome className="page">
      <Header />
      <Main>
        <section className="section">
          <Banner
            category="men's clothing"
            title="New Men's Clothing Arrivals"
            isBig
            bgImg={clothingImg}
          />
        </section>
        <section className="section">
          <h2 className="heading">Other categories</h2>
          <ul className="banner-list">
            <Banner category="women's clothing" bgImg={womenClothingImg} />
            <Banner category="jewelery" bgImg={jeweleryImg} />
            <Banner category="electronics" bgImg={electronicsImg} />
          </ul>
        </section>{" "}
      </Main>
      <Footer />
    </StyledHome>
  );
}
