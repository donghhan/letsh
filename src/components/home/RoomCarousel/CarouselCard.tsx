import styled from "styled-components";
import { Link } from "react-router-dom";
import carouselExample from "../../../assets/home_carousel.jpg";

export default function CarouselCard(): JSX.Element {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={carouselExample} alt="Example" />
      </ImageWrapper>
      <TextWrapper>
        <span>link</span>
      </TextWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid green;
`;

const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 80%;
  }
`;

const TextWrapper = styled.div`
  align-self: flex-start;
  margin-top: 1em;

  span {
    font-size: 1rem;
  }
`;
