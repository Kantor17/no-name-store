import { useEffect, useState } from "react";
import styled from "styled-components";
import fetchCategories from "../API/fetchCategories";
import { CategoryTypes } from "../types";
import Category from "./Category";
import Loader from "../ui/Loader";
import { useTypedDispatch } from "../hooks/reduxHooks";
import { setModal } from "../store/slices/modalSlice";

const StyledCategories = styled.ul`
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
`;

export default function Categories() {
  const dispatch = useTypedDispatch();
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
        dispatch(setModal({ error: err as Error }));
      }
      setIsLoading(false);
    })();
  }, [dispatch]);

  if (isLoading) return <Loader />;
  return (
    <StyledCategories>
      <Category />
      {categories.map((category) => (
        <Category type={category} key={category} />
      ))}
    </StyledCategories>
  );
}
