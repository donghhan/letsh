import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../styles/global";
import Navbar from "./navbar/Navbar";
import { useRecoilValue } from "recoil";
import { languageState, currencyState } from "../atoms/atom";

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
  const language = useRecoilValue(languageState);

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
