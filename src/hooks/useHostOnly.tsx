import { useNavigate } from "react-router-dom";
import useUser from "./useUser";
import { useEffect } from "react";

export default function useHostOnly() {
  const { user, userLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (!user?.is_owner) {
        navigate("/");
      }
    }
  }, [userLoading, user, navigate]);
  return;
}
