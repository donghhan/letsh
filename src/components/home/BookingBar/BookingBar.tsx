import styled from "styled-components";
import BookingInfo from "./BookingInfo";
import Button from "../../button/Button";
import { InfoType } from "./BookingInfo";

export default function BookingBar(): JSX.Element {
  const bookingInfoData = [
    {
      text: "Location",
    },
    {
      text: "Check in",
    },
    {
      text: "Check out",
    },
    {
      text: "Adult",
    },
    {
      text: "Children",
    },
  ];
  return (
    <BookingBarSection>
      {bookingInfoData.map((el) => (
        <BookingInfo text={el.text} />
      ))}
      <Button
        text="Search"
        style={{ border: "1px solid darkgray", padding: "1em 2.5em" }}
      />
    </BookingBarSection>
  );
}

const BookingBarSection = styled.div`
  width: 100%;
  height: 100px;
  max-width: 1000px;
  position: absolute;
  bottom: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.5em;
`;
