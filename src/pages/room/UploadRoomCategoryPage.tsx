import { useContext } from "react";
import styled from "styled-components";
import MultipleFormLayout from "../../components/layout/MutipleFormLayout";
import { ActiveStepContext } from "../../context/ActiveStepContext";

export default function UploadRoomCategoryPage() {
  const data = useContext(ActiveStepContext);
  console.log(data);
  return (
    <FormSection>
      <div>Upload Room Category Page</div>
    </FormSection>
  );
}

const FormSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
