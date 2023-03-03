import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ProductList from "../components/ProductList";
import Sorter from "../components/Sorter";
import Categories from "../components/Categories";

const StyledCatalog = styled.div`
.control-panel {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}
`;

export default function Catalog() {
  return (
    <StyledCatalog>
      <Header />
      <main className="main">
        <Container>
          <div className="control-panel">
            <Categories />
            <Sorter />
          </div>
          <ProductList />
        </Container>
      </main>
      <Footer />
    </StyledCatalog>
  );
}
