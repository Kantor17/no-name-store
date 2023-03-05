import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import fetchProduct from "../API/fetchProduct";
import ProductDetails from "../components/ProductDetails";
import { useTypedDispatch } from "../hooks/reduxHooks";
import { setModal } from "../store/slices/modalSlice";
import { Product } from "../types";
import Loader from "../ui/Loader";
import Page from "./Page";

const StyledProductPage = styled.div``;

export default function ProductPage() {
  const [product, setProduct] = useState<Product>();

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const param = useParams().id;
  const productId = param?.slice(1, param.length);

  useEffect(() => {
    if (!productId) {
      dispatch(
        setModal({
          error: new Error("Can't find the product."),
          closeCb: () => navigate(-1),
        })
      );
      return;
    }
    (async () => {
      try {
        const res = fetchProduct(productId);
        setProduct(await res);
      } catch (err) {
        dispatch(
          setModal({ error: err as Error, closeCb: () => navigate(-1) })
        );
      }
    })();
  }, [productId, dispatch, navigate]);

  return (
    <StyledProductPage className="page-wrapper">
      <Page>{product ? <ProductDetails product={product} /> : <Loader />}</Page>
    </StyledProductPage>
  );
}
