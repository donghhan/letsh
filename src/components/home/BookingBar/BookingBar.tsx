import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import InputButton from "../../ui/button/InputButton";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Button from "../../ui/button/Button";
import Popover from "../../ui/Popover";
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
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<BookingBarInputInterface>();
  const onSubmit: SubmitHandler<BookingBarInputInterface> = (inputData) =>
    console.log(inputData);
  const onError = (errors: FieldErrors<BookingBarInputInterface>) => {
    console.log(errors);
  };

  const [location, setLocation] = useState<string>();
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [guest, setGuest] = useState<number>(2);

  return (
    <BookingBarForm onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="location-input">
        <input
          id="location"
          type="text"
          placeholder="Search your location"
          {...register("location", { required: "Please choose location" })}
        />
        {errors.location && <Popover text={errors.location.message} />}
      </div>
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
      <Button
        text="Search"
        style={{
          padding: ".5em 1em",
          border: "1px solid darkgray",
        }}
        onClick={() => clearErrors()}
      />
    </BookingBarForm>
  );
}

const GridStyle = css`
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5em;
  grid-template-areas:
    "location location"
    "check-in check-out"
    "guest guest"
    "button button";

  .location-input {
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

  button {
    grid-area: button;
  }
`;

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
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 50px;
    font-size: 1.125rem;

    &::placeholder {
      color: ${({ theme }) => theme.color.darkgray};
      font-size: 1.125rem;
    }
  }

  .location-input {
    width: 100%;
    position: relative;
  }

  ${({ theme }) => theme.breakpoints.only("md")} {
    max-width: 650px;
    bottom: 30px;
    ${GridStyle}
  }

  ${({ theme }) => theme.breakpoints.between("xs", "md")} {
    width: 90%;
    ${GridStyle}
  }
`;
