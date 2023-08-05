import { useContext } from "react";
import styled from "styled-components";
import { useFormContext, useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { FormSectionStyle } from "../../styles/common";
import { getAllCategories } from "../../api/categoriesApi";
import { getAllRoomTypes } from "../../api/roomApi";
import { ActiveStepContext } from "../../context/ActiveStepContext";
import StepperForm from "../../components/form/StepperForm";
import FormOption from "../../components/form/FormOption";
import OptionInput from "../../components/form/OptionInput";

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
    <FormSection>
      <form>
        <p>Choose your room category</p>
        {allCategories?.map((i) => (
          <li key={i.pk}>
            <input type="radio" id={i.name} name="categories" value={i.name} />
            <label htmlFor={i.name}>{i.name}</label>
          </li>
        ))}
      </form>
      <form>
        <p>Choose your room type</p>
        {allRoomTypes?.map((i) => (
          <li key={i.id}>
            <input
              type="radio"
              id={i.room_type}
              value={i.room_type}
              name="room_type"
            />
            <label htmlFor={i.room_type}>{i.room_type}</label>
          </li>
        ))}
      </form>
    </FormSection>
  );
}

const FormSection = styled.div`
  ${FormSectionStyle}
`;
