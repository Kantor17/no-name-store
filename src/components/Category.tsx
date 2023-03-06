import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CategoryTypes } from "../types";

const StyledCategory = styled.li`
  .category-link {
    display: block;
    text-align: center;
    background-color: #26272b;
    padding: 3px 5px;
    width: 160px;
    height: 25px;
    font-size: 18px;
    text-transform: capitalize;
    color: #ccc;
    transition: 0.12s;
    &.active {
      font: 700px;
      color: #fff;
    }
    &:hover {
      color: #ddd;
    }
  }
`;

export default function Category({ type }: { type?: CategoryTypes }) {
  return (
    <StyledCategory>
      <NavLink
        to={type ? `/catalog/:${type}` : "/catalog/"}
        className={"category-link"}
      >
        {type || "All"}
      </NavLink>
    </StyledCategory>
  );
}
