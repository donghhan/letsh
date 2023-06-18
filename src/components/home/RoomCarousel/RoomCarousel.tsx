import styled from "styled-components";
import CarouselCard from "./CarouselCard";

export default function RoomCarousel(): JSX.Element {
  return (
    <SliderWrapper>
      <div className="inner-carousel">
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </div>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  margin-top: 50px;
  overflow: hidden;
  cursor: grab;

  .inner-carousel {
    display: flex;
    gap: 1em;
  }
`;
