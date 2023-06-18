import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

interface LinkButtonProp {
  to: string;
  text: string;
}

export default function LinkButton({ to, text }: LinkButtonProp): JSX.Element {
  return (
    <StyledLink to={to}>
      {text}
      <BsArrowUpRight />
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
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
