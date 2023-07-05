import styled from "styled-components";
import { Calendar as OriginalCalendar } from "react-calendar";

export default function Calendar(): JSX.Element {
  return <StyledCalendar />;
}

const StyledCalendar = styled(OriginalCalendar)``;
