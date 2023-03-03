import styled from "styled-components";
import { CategoryTypes } from "../types";
import BannerButton from "./BannerButton";

interface BannerProps {
  category: CategoryTypes;
  title?: string;
  isBig?: boolean;
  bgImg?: string;
}

const StyledBanner = styled.div<Pick<BannerProps, "bgImg">>`
  background: ${(props) => (props.bgImg ? `url(${props.bgImg})` : "#C4C4C4")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 340px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  color: #fff;
  .title {
    text-align: center;
    font-size: 28px;
    text-transform: capitalize;
  }
`;

const BigBanner = styled(StyledBanner)`
  width: 100%;
  height: 420px;
  border-radius: 6px;
  .title {
    font-size: 30px;
  }
`;

export default function Banner({ category, title, isBig, bgImg }: BannerProps) {
  if (isBig)
    return (
      <BigBanner bgImg={bgImg}>
        <h2 className="title">{title ? title : category}</h2>
        <BannerButton category={category}>Shop Now</BannerButton>
      </BigBanner>
    );
  return (
    <StyledBanner bgImg={bgImg}>
      <h2 className="title">{title ? title : category}</h2>
      <BannerButton category={category}>Shop Now</BannerButton>
    </StyledBanner>
  );
}
