import { instance } from "./axios";

export const getAllCategories = async () => {
  const response = await instance.get("categories/");
  return response.data;
};
