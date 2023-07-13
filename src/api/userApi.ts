import { instance } from "./axios";

export const getMyProfile = () =>
  instance.get("users/my-profile/").then((response) => response.data);

export const logout = () =>
  instance.post(`users/logout`).then((response) => response.data);
