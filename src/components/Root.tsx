import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../styles/global";

export default function Root() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}
