import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ProductList from "../components/ProductList";

const StyledCatalog = styled.div``;

export default function Catalog() {
  return (
    <StyledCatalog>
      <Header />
      <main className="main">
        <Container>
        <ProductList />
        </Container>
      </main>
      <Footer />
    </StyledCatalog>
  );
}
