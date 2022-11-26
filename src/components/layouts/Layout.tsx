import { Global, css } from "@emotion/react";
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
`;

export default function Layout() {
  return (
    <>
      <Global styles={reset} />
      <Navbar />
      <>
        <Outlet />
      </>
    </>
  );
}
