import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchCategories from "../API/fetchCategories";
import { CategoryTypes } from "../types";
import Category from "./Category";
import Loader from "../ui/Loader";
import ModalError from "../ui/ModalError";

const StyledCategories = styled.ul`
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
`;

export default function Categories() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await fetchCategories();
        if (res.length < 1) throw new Error("No categories found.");
        setCategories(res);
      } catch (err) {
        setError(err as Error);
      }
      setIsLoading(false);
    })();
  }, []);

  if (error) return <ModalError closeCb={() => setError(null)} error={error} />;
  if (isLoading) return <Loader />;
  return (
    <StyledCategories>
      {categories.map((category) => (
        <Category type={category} key={category} />
      ))}
    </StyledCategories>
  );
}
