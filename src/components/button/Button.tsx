import React from "react";
import styled from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";

export interface ButtonProp {
  text: string;
  style?: React.CSSProperties;
  animation?: boolean;
  as?: React.ElementType;
}

export default function Button({
  text,
  as,
  style,
  animation,
}: ButtonProp): JSX.Element {
  return (
    <StyledButton style={style} $animation={animation} as={as}>
      {text}
      <BsArrowUpRight />
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $animation?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1rem;
  opacity: ${(props) => props.$animation && "0.5"};

  svg {
    margin-left: 0.3em;
    transition: transform 0.2s ease-in-out;
    visibility: ${(props) => props.$animation && "hidden"};
  }

  &:hover {
    opacity: ${(props) => props.$animation && "inherit"};

    svg {
      transform: translate3d(0.2em, -0.2em, 0.2em);
      transition: transform 0.2s ease-in-out;
      visibility: ${(props) => props.$animation && "visible"};
    }
  }
`;
