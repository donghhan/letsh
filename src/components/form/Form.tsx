import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";

interface IForm {
  children: React.ReactNode;
  onSubmit: () => void;
  formTitle: string;
}

export default function Form({ children, onSubmit, formTitle }: IForm) {
  const methods = useForm();
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>{formTitle}</FormTitle>
        {children}
      </StyledForm>
    </FormProvider>
  );
}

const StyledForm = styled.form`
  & + div {
    margin-bottom: 0.5em;
  }

  ${({ theme }) => theme.breakpoints.between("xs", "lg")} {
    min-width: 40vw;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 450px;
  }
`;

const FormTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1em;
`;
