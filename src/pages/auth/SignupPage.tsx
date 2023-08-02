import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import FormLayout from "../../components/layout/FormLayout";
import Form from "../../components/form/Form";
import FormInput from "../../components/form/FormInput";
import { checkUser } from "../../api/userApi";
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
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    resolver: yupResolver(validationSchema),
  });

  const handleSingnup = (data: ISignup) => {
    console.log(data);
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
