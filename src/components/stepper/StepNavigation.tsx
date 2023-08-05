import { SetStateAction, useContext, useState } from "react";
import styled from "styled-components";
import Step from "./Step";

interface IStepNavigation {
  steps: string[];
  activeStep: number;
  setActiveStep: React.Dispatch<SetStateAction<number>>;
}

export default function StepNavigation({
  steps,
  activeStep,
  setActiveStep,
}: IStepNavigation): JSX.Element {
  return (
    <StepWrapper>
      {steps.map((item, index) => (
        <Step
          key={index}
          label={item}
          index={index}
          $selected={activeStep === index + 1}
          setActiveStep={setActiveStep}
        />
      ))}
    </StepWrapper>
  );
}

const StepWrapper = styled.div`
  display: flex;
  margin-bottom: 5em;
  gap: 5em;
`;
