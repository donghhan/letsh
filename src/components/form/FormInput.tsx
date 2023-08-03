import { FC, forwardRef } from "react";
import styled from "styled-components";

type InputType = "text" | "password" | "email" | "file";

interface IInputProp {
  placeholder: string;
  id: string;
  type: InputType;
  error?: boolean;
  onChange?: () => void;
}

const FormInput: FC<IInputProp> = forwardRef<HTMLInputElement, IInputProp>(
  ({ placeholder, id, type = "text", error, onChange, ...props }, ref) => {
    return (
      <StyledInput
        placeholder={placeholder}
        id={id}
        type={type}
        {...props}
        ref={ref}
        $error={error}
        onChange={onChange}
      />
    );
  }
);

export default FormInput;

const StyledInput = styled.input<{ $error?: boolean }>`
  border: 1px solid
    ${({ $error, theme }) => ($error ? theme.color.red : theme.color.gray)};
  padding-left: 1em;
  width: 100%;
  min-height: 50px;
  font-size: 1rem;
  margin-bottom: 0.5em;
`;
