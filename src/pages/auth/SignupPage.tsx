import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import FormLayout from "../../components/layout/FormLayout";
import Form from "../../components/form/Form";
import FormInput from "../../components/form/FormInput";
import FormOption from "../../components/form/FormOption";
import InputButton from "../../components/ui/button/InputButton";
import SignupThumbnail from "../../assets/auth/signup_thumbnail.jpg";

interface ISignup {
  username: string;
  password: string;
  confirmPassword: string;
  phoneNumber?: string;
  email: string;
  profilePicture?: string;
}

export default function SignupPage() {
  const handleSingnup = () => {
    console.log();
  };

  return (
    <FormLayout bgimage={SignupThumbnail}>
      <Form onSubmit={handleSingnup} formTitle="Signup">
        <FormInput placeholder="username" id="username" type="text" />
        <FormInput placeholder="E-mail" id="email" type="email" />
        <HorizontalInputWrapper>
          <FormInput placeholder="First Name" id="first" type="text" />
          <FormInput placeholder="Last Name" id="last" type="text" />
        </HorizontalInputWrapper>
        <HorizontalInputWrapper>
          <FormInput placeholder="Password" id="password" type="password" />
          <FormInput
            placeholder="Confirm Password"
            id="confirm"
            type="password"
          />
        </HorizontalInputWrapper>
        <FormInput placeholder="Phone Number" id="phone" type="text" />
        <FormInput placeholder="Profile Picture" id="profile" type="file" />
        <FormOption></FormOption>
        <InputButton text="Register" />
      </Form>
    </FormLayout>
  );
}

const HorizontalInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
