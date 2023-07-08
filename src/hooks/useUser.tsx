import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../api/userApi";

export default function useUser() {
  const { isLoading, data, isError } = useQuery(["my-profile"], getMyProfile, {
    retry: false,
  });
  return {
    userLoading: isLoading,
    user: data,
    isLoggedIn: !isError,
  };
}
