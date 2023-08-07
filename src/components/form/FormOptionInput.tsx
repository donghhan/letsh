import styled from "styled-components";

interface IFormOptionInput {
  name: string;
  id: string;
  value: string;
}

export default function FormOptionInput({
  name,
  id,
}: IFormOptionInput): JSX.Element {
  return (
    <FormOptionList>
      <RadioInput type="radio" name={name} id={id} value={name} />
      <RadioInputLabel htmlFor={name}>{name}</RadioInputLabel>
    </FormOptionList>
  );
}

const FormOptionList = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const InputWrapper = styled.div`
  border: 1px solid red;
`;

const RadioInput = styled.input``;

const RadioInputLabel = styled.label``;
