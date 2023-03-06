import styled from "styled-components";
import ProductList from "../components/ProductList";
import Sorter from "../components/Sorter";
import Categories from "../components/Categories";
import Page from "./Page";
import { useParams } from "react-router-dom";
import { CategoryTypes } from "../types";

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
  const param = useParams().category;
  const category = param?.slice(1, param.length) as CategoryTypes;
  return (
    <StyledCatalog className="page-wrapper">
      <Page>
        <>
          <div className="control-panel">
            <Categories />
            <Sorter />
          </div>
          <ProductList category={category} />
        </>
      </Page>
    </StyledCatalog>
  );
}
