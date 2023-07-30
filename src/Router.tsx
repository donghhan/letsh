import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "./components/Root";
import HomePage from "./pages/home/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import TopPlacesPage from "./pages/top-places/TopPlacesPage";
import TopPlacesDetailPage from "./pages/top-places/TopPlacesDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import LineConfirm from "./pages/auth/LineConfirm";
import UploadRoomPage from "./pages/room/UploadRoomPage";
import SignupPage from "./pages/auth/SignupPage";
import RoomListPage from "./pages/room/RoomListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
        children: [
          {
            path: ":blogId",
            element: <BlogDetailPage />,
          },
        ],
      },
      {
        path: "rooms/upload",
        element: <UploadRoomPage />,
      },
      {
        path: "top-places",
        element: <TopPlacesPage />,
        children: [
          {
            path: ":topPlacesId",
            element: <TopPlacesDetailPage />,
          },
        ],
      },
      {
        path: "social",
        children: [
          {
            path: "line",
            element: <LineConfirm />,
          },
        ],
      },
    ],
  },
]);
