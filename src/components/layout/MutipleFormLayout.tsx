import { useState } from "React";
import styled from "styled-components";
import { SectionLayout } from "./lib/style";
import Stepper from "../stepper/StepNavigation";
import Step from "../stepper/Step";
import StepLabel from "../stepper/StepLabel";
import { Outlet } from "react-router-dom";
import Button from "../ui/button/Button";

export default function MultipleFormLayout(): JSX.Element {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNextStep = () => setActiveStep((prev) => prev + 1);
  const handleBeforeStep = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  const steps = [
    "Category",
    "Basic Info",
    "Amenity",
    "Photos",
    "Title",
    "Description",
    "Room Price",
  ];

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return "Category";
      case 1:
        return "Basic Info";
      case 2:
        return "Amenity";
      case 3:
        return "Photos";
      case 4:
        return "Title";
      case 5:
        return "Description";
      case 6:
        return "Room price";
      default:
        return "Unknown";
    }
  };

  return (
    <LayoutSection>
      <Stepper activeStep={activeStep} alternativeLabel={true}>
        {steps.map((label: string) => (
          <Step key={label}>
            <StepLabel label={label} />
          </Step>
        ))}
      </Stepper>
      <Outlet />
      <ButtonWrapper>
        {activeStep === steps.length ? (
          <div>
            <span>All finished</span>
            <Button text="reset" onClick={handleReset} />
          </div>
        ) : (
          <div>
            <div>{getStepContent(activeStep)}</div>
            <div>
              <Button text="back" onClick={handleBeforeStep} disabled={true} />
              <Button
                text={activeStep === steps.length - 1 ? "Finish" : "Next"}
                onClick={handleNextStep}
              />
            </div>
          </div>
        )}
      </ButtonWrapper>
    </LayoutSection>
  );
}

const LayoutSection = styled.section`
  ${SectionLayout}
`;

const ButtonWrapper = styled.div``;
