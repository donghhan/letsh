import { useState, useEffect, useRef, MutableRefObject } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { getAllRoomTypes } from "../../../api/rooms/roomApi";
import { IRoomType } from "../../../api/interfaces/rooms.interface";
import ImageNotFound from "../../../assets/image_not_found.png";
import CarouselCard from "./CarouselCard";

export default function RoomCarousel(): JSX.Element {
  const { isLoading, data } = useQuery<IRoomType[]>(
    ["roomsInfoForHomePage"],
    getAllRoomTypes
  );

  // Image Carousel left constraint
  const [width, setWidth] = useState<number>(0);
  const sliderWrapper = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    setWidth(
      sliderWrapper.current.scrollWidth - sliderWrapper.current.offsetWidth
    );
  }, []);

  const bounceTransition = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  const dragTransition = {
    bounceStiffness: 500,
    bounceDamping: 10,
  };

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
              key={i.name}
              name={i.name}
              to={i.name.toLocaleLowerCase()}
              cover_image={
                i.cover_image
                  ? `http://127.0.0.1:8000/${i.cover_image}`
                  : ImageNotFound
              }
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
