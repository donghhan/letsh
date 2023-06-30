import { QueryFunctionContext } from "@tanstack/react-query";
import { instance } from "./axios";

export const getAllCategories = () =>
  instance.get("categories/").then((response) => response.data);
