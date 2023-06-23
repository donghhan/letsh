import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getAllRoomTypes } from "../../../api/rooms/roomApi";
import { IRoomType } from "../../../api/interfaces/rooms.interface";
import ImageNotFound from "../../../assets/image_not_found.png";
import CarouselCard from "./CarouselCard";

export default function RoomCarousel(): JSX.Element {
  const { isLoading, data } = useQuery<IRoomType[]>(
    ["roomsInfoForHomePage"],
    getAllRoomTypes
  );

  return (
    <SliderWrapper>
      <div className="inner-carousel">
        {data?.map((i) => (
          <CarouselCard
            key={i.name}
            name={i.name}
            to={i.name.toLocaleLowerCase()}
            cover_image={i.cover_image ? i.cover_image : ImageNotFound}
          />
        ))}
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
