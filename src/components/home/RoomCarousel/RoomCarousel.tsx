import { useState, useEffect, useRef, MutableRefObject } from "react";
import styled from "styled-components";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { getAllRoomTypes } from "../../../api/roomApi";
import { ICarouselRoomProp } from "../../../api/interfaces/rooms.interface";
import ImageNotFound from "../../../assets/image_not_found.png";
import CarouselCard from "./CarouselCard";

export default function RoomCarousel(): JSX.Element {
  const queryClient = useQueryClient();
  const { isLoading, data } = useQuery<ICarouselRoomProp[]>(
    ["roomsInfoForHomePage"],
    getAllRoomTypes,
    { staleTime: Infinity }
  );

  // Image Carousel left constraint
  const [width, setWidth] = useState<number>(0);
  const sliderWrapper = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    queryClient.prefetchQuery(["roomsInfoForHomePage"], getAllRoomTypes);

    if (data) {
      setWidth(
        sliderWrapper.current.scrollWidth - sliderWrapper.current.offsetWidth
      );
    }
  }, [data, queryClient]);

  return (
    <SliderContainer>
      <motion.div
        className="slider-wrapper"
        ref={sliderWrapper}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
        >
          {data?.map((i) => (
            <CarouselCard
              key={i.room_type}
              room_type={i.room_type}
              total_rooms={i.total_rooms}
              thumbnail={i.thumbnail}
              to={i.room_type}
            />
          ))}
        </motion.div>
      </motion.div>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  margin-top: 50px;

  .slider-wrapper {
    cursor: grab;
    overflow: hidden;

    .inner-carousel {
      display: flex;
      gap: 1em;
    }
  }
`;
