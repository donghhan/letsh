import { useForm } from "react-hook-form";
import styled from "styled-components";
import useHostOnly from "../../hooks/useHostOnly";
import Form from "../../components/form/Form";
import FormInput from "../../components/form/FormInput";

interface IUploadRoom {
  name: string;
  price_per_night: number;
  room_type: string;
  guest: number;
  bedroom: number;
  bathroom: number;
  wifi: boolean;
  description: string;
}

export default function UploadRoomPage() {
  useHostOnly();

  const { handleSubmit } = useForm<IUploadRoom>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <UploadRoomSection>
      <Form
        formTitle="Fill out your information"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput placeholder="Room name" type="text" id="name" />
        <FormInput placeholder="Price per night" type="text" id="price" />
        <FormInput placeholder="Guest (in number)" type="number" id="guest" />
        <FormInput
          placeholder="Bedroom (in number)"
          type="number"
          id="bedroom"
        />
        <FormInput
          placeholder="Bathroom (in number)"
          type="number"
          id="bathroom"
        />
        <div>
          <label htmlFor="wifi">Wifi</label>
          <input type="checkbox" />
        </div>
        <FormInput placeholder="Description" type="text" id="description" />
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
