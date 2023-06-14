import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export type InfoType = "text" | "calendar" | "selection";

interface BookingInfoProps {
  text: string;
  infoType?: InfoType;
}

export default function BookingInfo({
  text,
  infoType,
}: BookingInfoProps): JSX.Element {
  return (
    <BookingInfoWrapper>
      <Title>
        <span>{text}</span>
        <BsChevronDown />
      </Title>
      <ResultBox>
        <span>Result</span>
      </ResultBox>
    </BookingInfoWrapper>
  );
}

const BookingInfoWrapper = styled.div`
  width: 100%;
  max-width: 150px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;

  span {
    margin-right: 0.5em;
  }
`;

const ResultBox = styled.div`
  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color.darkgray};
  }
`;
