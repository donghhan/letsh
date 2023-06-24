import axios from "axios";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: false,
});

export const API_BASE_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_DEV_BASE_URL
    : import.meta.env.VITE_API_PROD_BASE_URL;
console.log(API_BASE_URL);
