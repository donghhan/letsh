import styled from "styled-components";
import { IRoomType } from "../../../api/interfaces/rooms.interface";
import LinkButton from "../../button/LinkButton";

interface CarouselCardButtonProp extends IRoomType {
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
        <img src={thumbnail} alt="Room Type Thumbnail" />
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
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  min-width: 100%;
  height: 100%;
  min-height: 400px;

  img {
    width: 100%;
    pointer-events: none;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5em;

  a {
    font-size: 1.5rem;
  }
`;

const PropertyNumber = styled.span`
  margin-top: 0.5em;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.darkgray};
  font-family: ${({ theme }) => theme.fontFamily.robotoMono};
`;
