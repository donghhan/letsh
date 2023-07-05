import styled from "styled-components";

interface PopoverProp {
  text: string | undefined;
}

export default function Popover({ text }: PopoverProp): JSX.Element {
  return (
    <PopoverWrapper>
      <span>{text}</span>
    </PopoverWrapper>
  );
}

const PopoverWrapper = styled.div`
  width: 100%;
  max-width: 180px;
  height: fit-content;
  padding: 1.5em 2em;
  background-color: ${({ theme }) => theme.color.red};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: -2px;
    left: 50%;
    width: 15px;
    height: 15px;
    transform: rotate(45deg) translate(-50%);
    background-color: ${({ theme }) => theme.color.red};
  }

  span {
    color: ${({ theme }) => theme.color.white};
    font-size: 0.8rem;
  }
`;
