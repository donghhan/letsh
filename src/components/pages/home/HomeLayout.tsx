import React from "react";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <h1>Home page</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}
