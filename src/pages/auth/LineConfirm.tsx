import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { lineLogin } from "../../api/userApi";

export default function LineConfirm() {
  const { search } = useLocation();
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      await lineLogin(code);
    }
  };

  useEffect(() => {
    confirmLogin();
  }, []);

  useEffect(() => {}, []);

  return (
    <LineConfirmMessageWrapper>
      <h1>
        Logging you in... <br />
        Please wait...
      </h1>
    </LineConfirmMessageWrapper>
  );
}

const LineConfirmMessageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 2rem;
  }
`;
