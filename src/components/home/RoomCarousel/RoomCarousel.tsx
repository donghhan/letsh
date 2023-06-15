import styled from "styled-components";
import CarouselCard from "./CarouselCard";

export default function RoomCarousel(): JSX.Element {
  return (
    <SliderWrapper>
      <div className="inner-carousel"></div>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  .inner-carousel {
  }
`;
