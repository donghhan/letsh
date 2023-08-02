import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import useProtect from "../../hooks/useProtect";
import { signup } from "../../api/userApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import FormLayout from "../../components/layout/FormLayout";
import Form from "../../components/form/Form";
import FormInput from "../../components/form/FormInput";
import FormOption from "../../components/form/FormOption";
import Button from "../../components/ui/button/Button";
import ErrorMessage from "../../components/form/ErrorMessage";
import SignupThumbnail from "../../assets/auth/signup_thumbnail.jpg";

interface ISignup {
  username: string;
  password: string;
  confirmPassword: string;
  phoneNumber?: string;
  email: string;
  profilePicture?: string;
  firstName: string;
  lastName?: string;
}

export default function SignupPage() {
  const {
    register,
    reset,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    resolver: yupResolver<ISignup>(validationSchema),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation(signup, {
    onMutate: () => {
      console.log("Signup mutation is starting");
    },
    onSuccess: (data) => {
      queryClient.refetchQueries(["my-profile"]);
      toast.success("Successfully signed up!😝", {
        position: "bottom-right",
        autoClose: 2000,
        closeOnClick: true,
        hideProgressBar: true,
        transition: Bounce,
      });
      reset();
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong...😰");
    },
  });

  useProtect();
  const navigate = useNavigate();

  const handleSingnup = (data: ISignup) => {
    mutation.mutate(data);
    navigate(-2);
  };

  return (
    <FormLayout bgimage={SignupThumbnail}>
      <Form onSubmit={handleSubmit(handleSingnup)} formTitle="Signup">
        <FormInput
          placeholder="Username*"
          id="username"
          type="text"
          error={errors.username ? true : false}
          {...register("username")}
        />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}
        <FormInput
          placeholder="E-mail*"
          id="email"
          type="email"
          error={errors.email ? true : false}
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <FormInput
          placeholder="First Name*"
          id="first-name"
          type="text"
          error={errors.firstName ? true : false}
          {...register("firstName")}
        />
        {errors.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}
        <FormInput
          placeholder="Last Name"
          id="last-name"
          type="text"
          error={errors.lastName ? true : false}
          {...register("lastName")}
        />
        {errors.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}
        <FormInput
          placeholder="Password*"
          id="password"
          type="password"
          error={errors.password ? true : false}
          {...register("password")}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <FormInput
          placeholder="Confirm Password*"
          id="confirm"
          type="password"
          error={errors.confirmPassword ? true : false}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
        )}
        <FormInput
          placeholder="Phone Number (Only numbers)"
          id="phone-number"
          type="text"
          error={errors.phoneNumber ? true : false}
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
        )}
        <FormInput placeholder="Profile Picture" id="profile" type="file" />
        <FormOption></FormOption>
        <Button
          text="Sign Up"
          $inverted={true}
          style={{ width: "100%", minHeight: "50px" }}
          onClick={() => {
            trigger([
              "username",
              "email",
              "firstName",
              "lastName",
              "password",
              "confirmPassword",
            ]);
          }}
        />
      </Form>
    </FormLayout>
  );
}
