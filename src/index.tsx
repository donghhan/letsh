import React from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomeLayout from "./components/pages/home/HomeLayout";
import AuthLayout from "./components/pages/users/auth/AuthLayout";
import NotFoundPage from "./components/pages/etc/NotFoundPage";
import WelcomePage from "./components/pages/home/WelcomePage";
import LoginPage from "./components/pages/users/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <WelcomePage />,
      },
    ],
  },
]);

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
