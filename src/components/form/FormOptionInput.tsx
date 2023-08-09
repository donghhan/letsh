import styled from "styled-components";
import { useLocation } from "react-router-dom";

interface IFormOptionInput {
  name: string;
  buttonText: string;
  icon?: string;
}

export default function FormOptionInput({
  name,
  icon,
  buttonText,
}: IFormOptionInput): JSX.Element {
  const location = useLocation();

  return (
    <FormOptionList>
      <RadioButtonWrapper>
        {icon ? (
          <img src={`${location.hash}/${icon}`} alt="Category Icon" />
        ) : null}
        <RadioButton type="button">{buttonText}</RadioButton>
      </RadioButtonWrapper>
    </FormOptionList>
  );
}

const FormOptionList = styled.li`
  display: flex;
  cursor: pointer;
`;

const RadioButtonWrapper = styled.select`
  min-width: 170px;
  min-height: 100px;
  border: 0.1rem solid ${({ theme }) => theme.color.gray};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 30px;
    max-height: 30px;
  }
`;

const RadioButton = styled.input`
  font-size: 1.125rem;
  margin-left: 0.5em;
`;
