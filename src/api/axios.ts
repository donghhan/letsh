import axios from "axios";

export const instance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_DEV_BASE_URL
      : import.meta.env.VITE_API_PROD_BASE_URL,
  withCredentials: true,
});
