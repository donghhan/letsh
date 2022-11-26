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
import HomeLayout from "./components/layouts/Layout";
import AuthLayout from "./pages/users/auth/AuthLayout";
import NotFoundPage from "./pages/etc/NotFoundPage";
import WelcomePage from "./pages/HomePage";
import LoginPage from "./pages/users/auth/Login";

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
