import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function useProtect() {
  const { isLoggedIn, userLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (isLoggedIn) {
        navigate("/");
      }
    }
  }, [userLoading, isLoggedIn]);

  return;
}
