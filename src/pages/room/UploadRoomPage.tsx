import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import useHostOnly from "../../hooks/useHostOnly";
import Form from "../../components/form/Form";
import FormInput from "../../components/form/FormInput";
import { uploadRoom } from "../../api/roomApi";
import Button from "../../components/ui/button/Button";
import ErrorMessage from "../../components/form/ErrorMessage";
import { uploadRoomValidationSchema } from "./validation/uploadRoomValidation";
import UploadRoomCategoryPage from "./UploadRoomCategoryPage";
import { useState } from "react";

interface IUploadRoom {
  name: string;
  price_per_night: number;
  room_type: string;
  guest: number;
  bedroom: number;
  bathroom: number;
  wifi: boolean;
  description?: string;
}

export default function UploadRoomPage() {
  useHostOnly();

  const [activeStep, setActiveStep] = useState<number>(0);

  const mutation = useMutation(uploadRoom, {
    onSuccess: () => {},
    onError: () => {},
  });

  const steps = ["name", "price"];

  const getActiveStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <UploadRoomCategoryPage />;
    }
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUploadRoom>();
  const onSubmit = (data: IUploadRoom) => console.log(data);

  return (
    <UploadRoomSection>
      {activeStep === steps.length ? (
        <div>done</div>
      ) : (
        <div>{getActiveStepContent(activeStep)}</div>
      )}
    </UploadRoomSection>
  );
}

const UploadRoomSection = styled.section`
  width: 100%;
  height: fit-content;
  padding-top: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
`;
