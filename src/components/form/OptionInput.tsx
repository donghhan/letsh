import styled from "styled-components";

interface IOption {
  value: string;
  name: string;
  id: string;
}

export default function OptionInput({ value, id }: IOption): JSX.Element {
  return <StyledOption value={value} id={id} type="radio" />;
}

const StyledOption = styled.input``;
