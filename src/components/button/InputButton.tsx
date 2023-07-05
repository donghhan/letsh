import styled from "styled-components";
import { ButtonProp } from "./Button";

export default function InputButton({
  text,
  animation,
  style,
}: ButtonProp): JSX.Element {
  return (
    <InputButtonWrapper $animation={animation}>
      <StyledInputButton type="button" />
    </InputButtonWrapper>
  );
}

const InputButtonWrapper = styled.div<{ $animation?: boolean }>``;

const StyledInputButton = styled.input``;
