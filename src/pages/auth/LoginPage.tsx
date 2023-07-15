import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue, useRecoilState } from "recoil";
import useUser from "../../hooks/useUser";
import { authState } from "../../atoms/atom";
import { getMyProfile, login } from "../../api/userApi";
import { BsChevronRight } from "react-icons/bs";
import Button from "../../components/ui/button/Button";

interface ILoginForm {
  username: string;
  password: string;
}

export default function LoginPage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  // const location = useLocation();
  // const from = ((location.state as any)?.from.pathname as string) || "/";

  // const loginState = useRecoilValue(authState);

  // const [changedLoginState, setChangedLoginState] = useRecoilState(authState);
  // const query = useQuery(["myProfile"], getMyProfile, {
  //   enabled: false,
  //   select: (data) => data.data.user,
  //   retry: 1,
  //   onSuccess: (data) => {},
  // });

  const { userLoading, user, isLoggedIn } = useUser();
  const queryClient = useQueryClient();
  const mutation = useMutation(login, {
    onMutate: () => {
      console.log("mutation starting");
    },
    onSuccess: (data) => {
      toast.success("Successfully logged in!😝", {
        position: "bottom-right",
        autoClose: 2000,
        closeOnClick: true,
        hideProgressBar: true,
        transition: Bounce,
      });
      queryClient.refetchQueries(["myProfile"]);
    },
    onError: (error) => {
      toast.error("Something went wrong...😰");
    },
  });

  const onSubmit = ({ username, password }: ILoginForm) => {
    mutation.mutate({ username, password });
  };

  return (
    <LoginPageSection>
      <div className="login-form-wrapper">
        <h1 className="title">Login</h1>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required." })}
            />
            {errors.username && (
              <ErrorMessage>{errors.username.message}</ErrorMessage>
            )}
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required." })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </div>
          <Button
            text="Log In"
            $inverted={true}
            style={{
              width: "50%",
              height: "40px",
              marginTop: "1em",
            }}
            isLoading={mutation.isLoading}
          />
          <ExtraMenuWrapper>
            <Link to="/">Forgot your account?</Link>
            <Link to="/register">Not have account yet?</Link>
          </ExtraMenuWrapper>
        </LoginForm>
      </div>
    </LoginPageSection>
  );
}

const LoginPageSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;

  .login-form-wrapper {
    width: 600px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 3rem;
      margin-bottom: 0.6em;
    }
  }
`;

const LoginForm = styled.form`
  width: 100%;
  padding: 0.5em 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  .input-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      display: inline-block;
      align-self: flex-start;
      margin-bottom: 0.5em;
      font-size: 1rem;
    }

    input {
      padding-left: 1em;
      font-size: 1rem;
      width: 100%;
      min-height: 50px;
      border: 1px solid ${({ theme }) => theme.color.darkgray};
      border-radius: 6px;
    }
  }
`;

const ExtraMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1em;

  a {
    font-size: 0.8rem;
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-size: 0.8rem;
  margin-top: 1em;
`;
