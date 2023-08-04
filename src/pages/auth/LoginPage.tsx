import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, Bounce } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkUsernameExists } from "./validation/loginValidationSchema";
import { login } from "../../api/userApi";
import { loginValidationSchema } from "./validation/loginValidationSchema";
import useProtect from "../../hooks/useProtect";
import FormLayout from "../../components/layout/FormLayout";
import Form from "../../components/form/Form";
import FormInput from "../../components/form/FormInput";
import ErrorMessage from "../../components/form/ErrorMessage";
import LoginThumbnail from "../../assets/auth/login_thumbnail.jpg";
import Button from "../../components/ui/button/Button";

export interface ILoginForm {
  username: string;
  password: string;
}

export default function LoginPage(): JSX.Element {
  useProtect();

  const queryClient = useQueryClient();
  const mutation = useMutation(login, {
    onMutate: () => {
      console.log("mutation starting");
    },
    onSuccess: (data) => {
      queryClient.refetchQueries(["my-profile"]);
      toast.success("Successfully logged in!😝", {
        position: "bottom-right",
        autoClose: 2000,
        closeOnClick: true,
        hideProgressBar: true,
        transition: Bounce,
      });
      reset();
    },
    onError: (error) => {
      toast.error("Something went wrong...😰");
    },
  });

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    watch,
    setError,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginValidationSchema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const handleLogin = ({ username, password }: ILoginForm) => {
    mutation.mutate({ username, password });
    navigate(-1);
  };

  return (
    <FormLayout bgimage={LoginThumbnail}>
      <Form onSubmit={handleSubmit(handleLogin)} formTitle="Login">
        <FormInput
          placeholder="username"
          id="username"
          type="text"
          error={errors.username ? true : false}
          onChange
          {...register("username", { validate: checkUsernameExists || "NO" })}
        />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}
        <FormInput
          placeholder="password"
          id="password"
          type="password"
          error={errors.password ? true : false}
          {...register("password")}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <Button
          text="Log in"
          $inverted={true}
          style={{ width: "100%", minHeight: "50px" }}
          onClick={() => {
            trigger(["username", "password"]);
          }}
        />
      </Form>
    </FormLayout>
  );
}
