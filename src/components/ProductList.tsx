import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../hooks/reduxHooks";
import { replaceProducts } from "../store/slices/productsSlice";
import styled from "styled-components";
import fetchProducts from "../API/fetchProducts";
import ProductCard from "./ProductCard";
import { Product, SortTypes } from "../types";

const StyledProductList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 16px 0;
`;

export default function ProductList() {
  const dispatch = useTypedDispatch();
  const { products, category } = useTypedSelector((state) => {
    let compareFunc;
    switch (state.products.sortType) {
      case SortTypes.POPULARITY: {
        compareFunc = (a: Product, b: Product) =>
          a.rating.count - b.rating.count;
        break;
      }
      case SortTypes.PRICE_ASCENDING: {
        compareFunc = (a: Product, b: Product) => a.price - b.price;
        break;
      }
      case SortTypes.PRICE_DESCENDING: {
        compareFunc = (a: Product, b: Product) => (a.price > b.price ? -1 : 1);
        break;
      }
    }
    return {
      products: [...state.products.products].sort(compareFunc),
      category: state.products.category,
    };
  });

  useEffect(() => {
    (async () => {
      const res = await fetchProducts(category);
      dispatch(replaceProducts(res));
    })();
  }, [dispatch, category]);

  return (
    <StyledProductList>
      {[...products].map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </StyledProductList>
  );
}
