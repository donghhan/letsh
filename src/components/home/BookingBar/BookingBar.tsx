import { useState, useEffect } from "react";
import styled from "styled-components";
import InputButton from "../../button/InputButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Calendar from "../../calendar/StyledCalendar";

interface BookingBarInputInterface {
  location: string;
  checkIn: Date;
  checkOut: Date;
  guest: number;
}

export default function BookingBar(): JSX.Element {
  const { i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingBarInputInterface>();
  const onSubmit: SubmitHandler<BookingBarInputInterface> = (inputData) =>
    console.log(inputData);

  const [location, setLocation] = useState<string>();
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState();
  const [guest, setGuest] = useState<number>(2);

  useEffect(() => {
    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month =
      date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const year =
      i18n.language === "en"
        ? date.getFullYear()
        : `${date.getFullYear() + 600}`;
  }, []);

  return (
    <BookingBarForm onSubmit={handleSubmit(onSubmit)}>
      <input
        id="location"
        type="text"
        {...(register("location"), { required: true })}
      />
      <input
        id="check-in"
        type="date"
        {...register("checkIn", { required: true })}
      />
      <input
        id="check-out"
        type="date"
        {...register("checkOut", { required: true })}
      />
      <input
        id="guest"
        defaultValue={2}
        {...register("guest", { required: true })}
      />
    </BookingBarForm>
  );
}

const BookingBarForm = styled.form`
  width: 100%;
  height: fit-content;
  max-width: 900px;
  position: absolute;
  bottom: 40px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-columns: minmax(300px, auto) repeat(4, 1fr);
  align-items: center;
  padding: 1.5em;

  input {
  }

  ${({ theme }) => theme.breakpoints.only("md")} {
    max-width: 650px;
    bottom: 30px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 0.5em;
    grid-template-areas:
      "location location location"
      "check-in check-out guest";

    #location {
      grid-area: location;
    }

    #check-in {
      grid-area: check-in;
    }

    #check-out {
      grid-area: check-out;
    }

    #guest {
      grid-area: guest;
    }
  }
`;
