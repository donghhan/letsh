import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

export const reset = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Roboto", sans-serif;
    position: relative;
  }

  a {
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
  }

  /* signature color */
  .text-signature-color {
    color: rgba(255, 143, 0, 1);
  }

  .bg-signature-color {
    color: rgba(255, 143, 0, 1);
  }
`;

const MainLayout = styled.main`
  margin-top: 80px;
  padding: 0 5em;
`;

export default function Layout() {
  return (
    <>
      <Global styles={reset} />
      <Navbar />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}
