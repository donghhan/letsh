import { instance } from "./axios";

export const getMyProfile = () =>
  instance.get("users/my-profile/").then((response) => response.data);
