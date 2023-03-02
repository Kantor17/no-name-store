import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../hooks/reduxHooks";
import { replaceProducts } from "../store/slices/productsSlice";
import styled from 'styled-components';
import fetchProducts from "../API/fetchProducts";
import ProductCard from "./ProductCard";

const StyledProductList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`
export default function ProductList() {
  const dispatch = useTypedDispatch();
  const { products } = useTypedSelector((state) => state.products);

  useEffect(() => {
    (async() => {
      const res = await fetchProducts();
      dispatch(replaceProducts(res))
    })();
  }, [dispatch]);

  return (
    <StyledProductList>
      {products.map((product) => <ProductCard product={ product } />)}
    </StyledProductList>
  )
}
