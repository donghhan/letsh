import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import useHostOnly from "../../hooks/useHostOnly";
import Form from "../../components/form/Form";
import FormInput from "../../components/form/FormInput";
import { uploadRoom } from "../../api/roomApi";
import Button from "../../components/ui/button/Button";
import ErrorMessage from "../../components/form/ErrorMessage";

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

  const mutation = useMutation(uploadRoom, {
    onSuccess: () => {},
    onError: () => {},
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUploadRoom>();
  const onSubmit = (data: IUploadRoom) => console.log(data);

  return (
    <UploadRoomSection>
      <Form
        formTitle="Fill out your information"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          placeholder="Room name"
          type="text"
          id="name"
          {...register("name")}
          error={errors.name ? true : false}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        <FormInput
          placeholder="Price per night"
          type="text"
          id="price"
          {...register("price_per_night")}
          error={errors.price_per_night ? true : false}
        />
        <FormInput
          placeholder="Guest (in number)"
          type="number"
          id="guest"
          {...register("guest")}
          error={errors.guest ? true : false}
        />
        <FormInput
          placeholder="Bedroom (in number)"
          type="number"
          id="bedroom"
          {...register("bedroom")}
          error={errors.bedroom ? true : false}
        />
        <FormInput
          placeholder="Bathroom (in number)"
          type="number"
          id="bathroom"
          {...register("bathroom")}
          error={errors.bathroom ? true : false}
        />
        <div>
          <label htmlFor="wifi">Wifi</label>
          <input type="checkbox" />
        </div>
        <FormInput placeholder="Description" type="text" id="description" />
        <Button
          text="Submit"
          $inverted={true}
          style={{ width: "100%", height: "50px" }}
        />
      </Form>
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
