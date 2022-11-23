import React from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Path } from "./utils/Path";
import theme from "./theme";
import HomeLayout from "./components/pages/Layout";
import AuthLayout from "./components/pages/users/auth/AuthLayout";
import NotFoundPage from "./components/pages/etc/NotFoundPage";
import WelcomePage from "./components/pages/home/WelcomePage";
import LoginPage from "./components/pages/users/auth/Login";

const router = createBrowserRouter([
  {
    path: Path.home,
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
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
