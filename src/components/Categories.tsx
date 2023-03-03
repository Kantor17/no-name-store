import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchCategories from "../API/fetchCategories";
import { CategoryTypes } from "../types";
import Category from "./Category";
import Loader from "./Loader";

const StyledCategories = styled.ul`
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
`;

export default function Categories() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetchCategories();
      setCategories(res);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledCategories>
          {categories.map((category) => (
            <Category type={category} key={category} />
          ))}
        </StyledCategories>
      )}
    </>
  );
}
