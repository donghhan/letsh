import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/blog/BlogPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import TopPlacesPage from "./pages/top-places/TopPlacesPage";
import TopPlacesDetailPage from "./pages/top-places/TopPlacesDetailPage";

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
        path: "top-places",
        element: <TopPlacesPage />,
        children: [
          {
            path: ":topPlacesId",
            element: <TopPlacesDetailPage />,
          },
        ],
      },
    ],
  },
]);
