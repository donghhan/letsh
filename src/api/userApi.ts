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
  instance.post(`users/logout`).then((response) => response.data);

export const refreshAccessToken = async () => {
  const response = await instance.get<AuthGenericResponse>("tokens/refresh/");
  return response.data;
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: any) => {
    const originalRequest = error.config;
    const errorMessage = error.response.data.message as string;

    if (
      errorMessage.includes(
        "No active account found with the given credentials"
      ) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      await refreshAccessToken();
      return instance(originalRequest);
    }

    return Promise.reject(error);
  }
);

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
