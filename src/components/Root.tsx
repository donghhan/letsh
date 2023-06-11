import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../styles/global";
import Navbar from "./navbar/Navbar";

export const Container = styled.div`
  position: relative;

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0 5em;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 0 1em;
  }
`;

export default function Root() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
