import styled from "styled-components";
import { ICarouselRoomProp } from "../../../api/interfaces/rooms.interface";
import notFound from "../../../assets/image_not_found.png";
import LinkButton from "../../ui/button/LinkButton";

interface CarouselCardButtonProp extends ICarouselRoomProp {
  to: string;
}

export default function CarouselCard({
  room_type,
  thumbnail,
  total_rooms,
  to,
}: CarouselCardButtonProp): JSX.Element {
  return (
    <CardWrapper>
      <ImageWrapper>
        {thumbnail ? (
          <img src={thumbnail} alt="Room Type Thumbnail" />
        ) : (
          <img src={notFound} alt="Not Found" />
        )}
      </ImageWrapper>
      <TextWrapper>
        <LinkButton
          to={to}
          text={room_type.charAt(0).toUpperCase() + room_type.slice(1)}
        />
        <PropertyNumber>
          {total_rooms?.toLocaleString("en-US")} {room_type}s
        </PropertyNumber>
      </TextWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  min-width: 390px;
  min-height: 500px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.only("md")} {
    min-width: 300px;
    min-height: 300px;
  }

  ${({ theme }) => theme.breakpoints.between("xs", "md")} {
    min-width: 250px;
    min-height: 200px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* min-height: 400px; */

  img {
    width: 100%;
    pointer-events: none;
  }

  ${({ theme }) => theme.breakpoints.between("xs", "md")} {
    min-height: 200px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5em;

  a {
    font-size: 1.5rem;
  }

  ${({ theme }) => theme.breakpoints.only("md")} {
    margin-top: 1em;
  }
`;

const PropertyNumber = styled.span`
  margin-top: 0.5em;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.darkgray};
  font-family: ${({ theme }) => theme.fontFamily.robotoMono};
`;
