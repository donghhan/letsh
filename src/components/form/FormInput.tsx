import styled from "styled-components";
import { useForm, useFormContext } from "react-hook-form";

interface ILabelProp {
  htmlFor?: string;
  labelText?: string;
}

type InputType = "text" | "password" | "email" | "file";

interface IInputProp {
  placeholder: string;
  id: string;
  type: InputType;
  validationSchema?: object;
}

interface IFormProp extends ILabelProp, IInputProp {}

export default function FormInput({
  placeholder,
  id,
  type,
  validationSchema,
}: IFormProp) {
  const methods = useFormContext();

  return (
    <InputWrapper>
      <StyledInput
        required
        placeholder={placeholder}
        id={id}
        type={type}
        {...methods.register(id)}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  margin-bottom: 0.5em;
`;

const StyledInput = styled.input<{ required: boolean }>`
  border: 1px solid ${({ theme }) => theme.color.gray};
  padding-left: 1em;
  width: 100%;
  min-height: 50px;
  font-size: 1rem;
`;
