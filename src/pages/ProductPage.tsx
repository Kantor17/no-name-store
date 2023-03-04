import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import fetchProduct from "../API/fetchProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import ProductDetails from "../components/ProductDetails";
import { Product } from "../types";
import Loader from "../ui/Loader";
import ModalError from "../ui/ModalError";

const StyledProductPage = styled.div``;

export default function ProductPage() {
  const [error, setError] = useState<Error | null>(null);
  const [product, setProduct] = useState<Product>();

  const param = useParams().id;
  const productId = param?.slice(1, param.length);

  useEffect(() => {
    if (!productId) {
      setError(new Error("Can't find the product."));
      return;
    }
    (async () => {
      try {
        const res = fetchProduct(productId);
        setProduct(await res);
      } catch (err) {
        setError(err as Error);
      }
    })();
  }, [productId]);

  const navigate = useNavigate();
  return (
    <StyledProductPage>
      <Header />
      <Main>
        {error ? (
          <ModalError error={error} closeCb={() => navigate(-1)} />
        ) : product ? (
          <ProductDetails product={product} />
        ) : (
          <Loader />
        )}
      </Main>
      <Footer />
    </StyledProductPage>
  );
}
