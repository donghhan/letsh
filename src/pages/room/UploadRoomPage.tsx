import { useState } from "react";
import styled from "styled-components";
import { SectionLayout } from "../../components/layout/lib/style";
import { useRecoilValue } from "recoil";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getAllAmenities } from "../../api/roomApi";
import { getAllCategories } from "../../api/categoriesApi";
import useHostOnly from "../../hooks/useHostOnly";
import StepNavigation from "../../components/stepper/StepNavigation";
import Step from "../../components/stepper/Step";
import UploadRoomCategoryPage from "./UploadRoomCategoryPage";
import UploadRoomBasicPage from "./UploadRoomBasicPage";
import { activeStepState } from "../../atoms/atom";
import { Outlet } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import { ActiveStepContext } from "../../context/ActiveStepContext";

export default function UploadRoomPage() {
  useHostOnly();

  const labels = ["Step1", "Step 2", "Step 3"];
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <UploadRoomSection>
      <StepNavigation labels={labels}></StepNavigation>
      <div>Current step: {activeStep}</div>
    </UploadRoomSection>
  );
}

const UploadRoomSection = styled.section`
  ${SectionLayout}
`;
