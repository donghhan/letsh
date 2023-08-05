import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SectionLayout } from "../../components/layout/lib/style";
import useHostOnly from "../../hooks/useHostOnly";
import StepNavigation from "../../components/stepper/StepNavigation";
import UploadRoomCategoryPage from "./UploadRoomCategoryPage";
import UploadRoomBasicPage from "./UploadRoomBasicPage";
import UploadRoomAddressPage from "./UploadRoomAddressPage";
import UploadRoomTypePage from "./UploadRoomTypePage";
import UploadRoomFinishPage from "./UploadRoomFinishPage";
import UploadRoomAmenitiesPage from "./UploadRoomAmenitiesPage";
import UploadRoomPhotosPage from "./UploadRoomPhotosPage";
import Button from "../../components/ui/button/Button";
import { ActiveStepContext } from "../../context/ActiveStepContext";

export default function UploadRoomPage() {
  useHostOnly();

  const steps = ["Categories", "Basic Info", "Amenities", "Photos", "Finished"];
  const [activeStep, setActiveStep] = useState<number>(0);

  const updateActiveStep = (activeStep: number) => {
    setActiveStep(activeStep);
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <UploadRoomCategoryPage />;
      case 1:
        return <UploadRoomBasicPage />;
      case 2:
        return <UploadRoomAmenitiesPage />;
      case 3:
        return <UploadRoomPhotosPage />;
      default:
        return null;
    }
  };

  const navigate = useNavigate();

  return (
    <ActiveStepContext.Provider value={activeStep}>
      <UploadRoomSection>
        <StepNavigation
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        ></StepNavigation>
        <Container>
          {activeStep === steps.length ? (
            <UploadRoomFinishPage />
          ) : (
            <>{getStepContent(activeStep)}</>
          )}
        </Container>
        <ButtonContainer>
          <Button
            text={activeStep === 0 ? "Go back" : "Previous"}
            $inverted={true}
            style={{ padding: "0.5em 1.5em" }}
            onClick={() => {
              if (activeStep === 0) {
                navigate(-1);
              }
              setActiveStep(activeStep - 1);
            }}
          />
          <Button
            text={activeStep === steps.length ? "Finish" : "Next"}
            $inverted={true}
            style={{ padding: "0.5em 1.5em" }}
            onClick={() => {
              if (activeStep === steps.length) {
                navigate(-1);
              }
              setActiveStep(activeStep + 1);
            }}
          />
        </ButtonContainer>
      </UploadRoomSection>
    </ActiveStepContext.Provider>
  );
}

const UploadRoomSection = styled.section`
  ${SectionLayout}
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  min-height: 40vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
`;
