import { SetStateAction } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

interface IStyledComponentProp {
  $selected?: boolean;
  $finished?: boolean;
}

interface IStyledComponent {
  className: string;
  children: React.ReactNode;
  $selected?: boolean;
  $finished?: boolean;
}

interface IStep extends IStyledComponentProp {
  label: string;
  index: number;
  setActiveStep: React.Dispatch<SetStateAction<number>>;
}

// Showing step number bubble
export default function Step({
  label,
  index,
  $selected,
  $finished,
}: IStep): JSX.Element {
  return (
    <StepWrapper $selected={$selected}>
      <StepCircleWrapper>
        <StepNumber>{index + 1}</StepNumber>
      </StepCircleWrapper>
      <StepName $selected={$selected}>{label}</StepName>
    </StepWrapper>
  );
}

const StepWrapper = styled.div<IStyledComponentProp>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepCircleWrapper = styled.div<IStyledComponentProp>`
  width: 3rem;
  height: 3rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  border: 1px solid
    ${(props) =>
      props.$finished
        ? props.theme.color.darkgreen
        : props.theme.color.darkgray};
  background-color: ${(props) =>
    props.$selected ? props.theme.color.darkgreen : props.theme.color.darkgray};
`;

const StepNumber = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.black};

  svg {
    color: ${({ theme }) => theme.color.white};
    font-size: 1.5rem;
  }
`;

const StepName = styled.span<IStyledComponentProp>`
  text-transform: uppercase;
  margin-top: 1em;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${(props) =>
    props.$finished ? props.theme.color.darkgreen : props.theme.color.darkgray};
`;
