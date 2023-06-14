import styled from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";

interface ButtonType {
  $primary?: boolean;
}

interface ButtonProp {
  text: string;
  style?: React.CSSProperties;
}

export default function Button({ text, style }: ButtonProp): JSX.Element {
  return (
    <StyledButton style={style} $primary>
      {text}
      <BsArrowUpRight />
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonType>`
  display: flex;
  align-items: center;
  font-size: 1rem;

  svg {
    margin-left: 0.3em;
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    svg {
      transform: translate3d(0.2em, -0.2em, 0.2em);
      transition: transform 0.2s ease-in-out;
    }
  }
`;
