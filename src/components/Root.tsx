import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../styles/global";

const Padding = styled.div`
  padding: 0 100px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 0 70px;
  }
`;

export default function Root() {
  return (
    <>
      <GlobalStyle />
      <Padding>
        <Outlet />
      </Padding>
    </>
  );
}
