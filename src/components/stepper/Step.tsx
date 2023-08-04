import styled from "styled-components";

interface IStep {
  labels: [];
}

// Showing step number bubble
export default function Step({ labels }: IStep): JSX.Element {
  return (
    <>
      <StepWrapper>
        <StepCircle></StepCircle>
      </StepWrapper>
      <span>{labels}</span>
    </>
  );
}

const StepWrapper = styled.div``;

const StepCircle = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border: 2px solid ${({ theme }) => theme.color.darkgray};
  border-radius: 50%;
  position: relative;
`;
