import styled from "styled-components";
import { ButtonProp } from "./Button";

export default function InputButton({
  text,
  animation,
  style,
}: ButtonProp): JSX.Element {
  return (
    <InputButtonWrapper $animation={animation}>
      <StyledInputButton type="submit" />
    </InputButtonWrapper>
  );
}

const InputButtonWrapper = styled.div<{ $animation?: boolean }>``;

const StyledInputButton = styled.input`
  background-color: ${({ theme }) => theme.color.black};
  width: 100%;
  min-height: 50px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.color.white};
`;
