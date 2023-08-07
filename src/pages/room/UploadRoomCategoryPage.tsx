import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../api/categoriesApi";
import { getAllRoomTypes } from "../../api/roomApi";
import Form from "../../components/form/Form";
import FormOptionInput from "../../components/form/FormOptionInput";

interface IRoomTypesAndCategories extends ICategories, IRoomTypes {}

export default function UploadRoomCategoryPage() {
  const { data: allCategories, isLoading: categoriesLoading } = useQuery<
    ICategories[]
  >(["allCategories"], getAllCategories);

  const { data: allRoomTypes, isLoading: roomTypesLoading } = useQuery<
    IRoomTypes[]
  >(["allRoomTypes"], getAllRoomTypes);

  console.log(allCategories, typeof allCategories);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRoomTypesAndCategories>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormContainer>
      <FormWrapper>
        <Form
          formTitle="Choose your room category"
          onSubmit={handleSubmit(onSubmit)}
        >
          {allCategories?.map((i, index) => (
            <FormOptionInput
              key={i.name}
              name="categories"
              id={i.name}
              value={i.name}
            />
          ))}
        </Form>
      </FormWrapper>
      <FormWrapper>
        <Form
          formTitle="Choose your room type"
          onSubmit={handleSubmit(onSubmit)}
        >
          {allRoomTypes?.map((i) => (
            <FormOptionInput
              key={i.room_type}
              name="room_types"
              id={i.room_type}
              value={i.room_type}
            />
          ))}
        </Form>
      </FormWrapper>
    </FormContainer>
  );
}

const FormContainer = styled.div``;

const FormWrapper = styled.div`
  border: 1px solid red;
`;
