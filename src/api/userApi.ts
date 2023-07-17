import Cookie from "js-cookie";
import { instance } from "./axios";
import {
  AuthGenericResponse,
  IUserLoginInput,
} from "./interfaces/users.interface";

export const getMyProfile = async () => {
  const response = await instance.get("users/my-profile/");
  return response.data;
};

export const logout = () =>
  instance
    .post(`users/logout`, null, {
      headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
    })
    .then((response) => response.data);

export const signup = async (user: any) => {
  const response = await instance.post<AuthGenericResponse>(
    "users/signup",
    user
  );
  return response.data;
};

export const login = async ({ username, password }: IUserLoginInput) => {
  const response = await instance.post(
    "users/login/",
    { username, password },
    { headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" } }
  );
  return response.data;
};
