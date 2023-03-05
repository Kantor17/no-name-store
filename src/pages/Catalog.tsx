import styled from "styled-components";
import ProductList from "../components/ProductList";
import Sorter from "../components/Sorter";
import Categories from "../components/Categories";
import Page from "./Page";

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
    <StyledCatalog className="page-wrapper">
      <Page>
        <>
          <div className="control-panel">
            <Categories />
            <Sorter />
          </div>
          <ProductList />
        </>
      </Page>
    </StyledCatalog>
  );
}
