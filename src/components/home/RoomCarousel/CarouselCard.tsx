import styled from "styled-components";
import { IRoomType } from "../../../api/interfaces/rooms.interface";
import LinkButton from "../../button/LinkButton";

interface CarouselCardButtonProp extends IRoomType {
  to: string;
}

export default function CarouselCard({
  name,
  cover_image,
  to,
}: CarouselCardButtonProp): JSX.Element {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img src={cover_image} alt="Cover image for room_type" />
      </ImageWrapper>
      <TextWrapper>
        <LinkButton to={to} text={name} />
        <PropertyNumber>100 {name}s</PropertyNumber>
      </TextWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  min-width: 380px;
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid green;
`;

const ImageWrapper = styled.div`
  height: 100%;
  min-height: 400px;

  img {
    max-width: 300px;
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
