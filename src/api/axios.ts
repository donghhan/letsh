import axios from "axios";

export const API_BASE_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_DEV_BASE_URL
    : import.meta.env.VITE_API_PROD_BASE_URL;

export const instance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

instance.defaults.headers.common["Content-Type"] = "application/json";
