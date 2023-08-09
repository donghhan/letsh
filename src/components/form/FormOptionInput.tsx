import styled from "styled-components";
import { useLocation } from "react-router-dom";

interface IFormOptionInput {
  text: string;
  icon?: string;
  onClick: () => void;
}

export default function FormOptionInput({
  icon,
  text,
  onClick,
}: IFormOptionInput): JSX.Element {
  const location = useLocation();

  return (
    <FormOptionList>
      <button onClick={onClick}>
        <img src={`${location.hash}/${icon}`} alt="Category Icon" />
        {text}
      </button>
    </FormOptionList>
  );
}

const FormOptionList = styled.li`
  img {
    max-width: 30px;
    margin-right: 0.5em;
  }

  button {
    min-width: 150px;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.15rem solid ${({ theme }) => theme.color.gray};
    border-radius: 6px;

    &:focus {
      border: 0.3rem solid ${({ theme }) => theme.color.black};
    }
  }
`;
