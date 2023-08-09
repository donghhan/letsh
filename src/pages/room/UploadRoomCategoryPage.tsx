import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../api/categoriesApi";
import { getAllRoomTypes } from "../../api/roomApi";
import Form from "../../components/form/Form";
import FormOptionInput from "../../components/form/FormOptionInput";

interface IRoomTypesAndCategories extends ICategories {}

export default function UploadRoomCategoryPage() {
  const { data: allCategories, isLoading: categoriesLoading } = useQuery<
    ICategories[]
  >(["allCategories"], getAllCategories);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICategories>();

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
                text={i.name.charAt(0).toUpperCase() + i.name.slice(1)}
                icon={i.icon}
                onClick={() => setValue("name", i.name)}
              />
            ))}
          </FormOptionContainer>
          <button>go</button>
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
  grid-template-columns: repeat(3, minmax(200px, auto));
  gap: 3em;
`;
