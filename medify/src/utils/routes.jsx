import { createBrowserRouter } from "react-router-dom";
import { Bookings, HomePage, Search } from "../Components";
import Layout from "../layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/my-bookings",
        element: <Bookings />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);
