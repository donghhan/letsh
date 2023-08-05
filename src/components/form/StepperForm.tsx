import { useForm, FormProvider } from "react-hook-form";

interface IStepperFormProp {
  nestedInput: React.ReactNode;
}

export default function StepperForm({
  nestedInput,
}: IStepperFormProp): JSX.Element {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{nestedInput}</form>
    </FormProvider>
  );
}
