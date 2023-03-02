import styled from "styled-components";
import { useTypedDispatch, useTypedSelector } from "../hooks/reduxHooks";
import { changeSorting } from "../store/slices/productsSlice";
import { SortTypes } from "../types";

const StyledSorter = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  .options {
    height: 20px;
    border: 1px solid;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
  }
`;

export default function Sorter() {
  const sortType = useTypedSelector((state) => state.products.sortType);
  const dispatch = useTypedDispatch();

  return (
    <StyledSorter>
      <p className="title">Sort by:</p>
      <select
        name="sortOptions"
        className="options"
        value={sortType}
        onChange={(event) =>
          dispatch(changeSorting(event.target.value as SortTypes))
        }
      >
        <option value={SortTypes.POPULARITY} className="option">
          Popularity
        </option>
        <option value={SortTypes.PRICE_ASCENDING} className="option">
          Price, ascending
        </option>
        <option value={SortTypes.PRICE_DESCENDING} className="option">
          Price, descending
        </option>
      </select>
    </StyledSorter>
  );
}
