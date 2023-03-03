import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchCategories from "../API/fetchCategories";
import { CategoryTypes } from "../types";
import Category from "./Category";

const StyledCategories = styled.ul`
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
`;

export default function Categories() {
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  useEffect(() => {
    (async () => {
      const res = await fetchCategories();
      setCategories(res);
    })();
  }, []);

  return (
    <StyledCategories>
      {categories.map((category) => <Category type={category} key={category}/>)}
    </StyledCategories>
  );
}
