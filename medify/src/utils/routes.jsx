import { createBrowserRouter } from "react-router-dom";
import { Layout, HomePage, Bookings } from "../Components";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/my-bookings",
        element: <Bookings />,
      },
    ],
  },
]);
export default routes;
