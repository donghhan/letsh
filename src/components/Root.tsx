import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../styles/global";
import Header from "./header/Header";

export const Container = styled.div`
  position: relative;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding: 0 10em;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 0 5em;
  }
`;

export default function Root() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
