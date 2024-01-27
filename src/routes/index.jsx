import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Home from "~/pages/home";
import MyNetwork from "~/pages/mynetwork";
import NotFound from "~/pages/not-found";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/mynetwork",
        element: <MyNetwork />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
