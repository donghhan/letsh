import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../styles/global";
import Navbar from "./navbar/Navbar";

export default function Root() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </>
  );
}
