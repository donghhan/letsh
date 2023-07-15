import React from "react";
import styled from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";

export interface ButtonProp {
  text: string;
  style?: React.CSSProperties;
  animation?: boolean;
  as?: React.ElementType;
  isLoading?: boolean;
  $inverted?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  as,
  style,
  animation,
  $inverted,
}: ButtonProp): JSX.Element {
  return (
    <StyledButton
      style={style}
      $animation={animation}
      as={as}
      $inverted={$inverted}
    >
      {text}
      <BsArrowUpRight />
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  $animation?: boolean;
  $isLoading?: boolean;
  $inverted?: boolean;
}>`
  display: flex;
  height: 100%;
  justify-content: center;
  background-color: ${({ $inverted, theme }) =>
    $inverted ? theme.color.black : theme.color.white};
  color: ${({ $inverted, theme }) =>
    $inverted ? theme.color.white : theme.color.black};
  align-items: center;
  font-size: 1rem;
  opacity: ${({ $animation, $isLoading }) =>
    $animation ? ".5" : $isLoading ? ".5" : "1"};

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
