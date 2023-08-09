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
          <FormOptionContainer>
            {allCategories?.map((i) => (
              <FormOptionInput
                key={i.pk}
                name="categories"
                buttonText={i.name.charAt(0).toUpperCase() + i.name.slice(1)}
                icon={i.icon}
              />
            ))}
          </FormOptionContainer>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FormOptionContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3em;
`;
