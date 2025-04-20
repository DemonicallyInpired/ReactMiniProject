import { createBrowserRouter } from "react-router-dom";
import { Bookings, HomePage, Search } from "../Components";
import Layout from "../layout";
import SearchList from "../Components/Search/SearchList";
import SearchPage from "../Components/Search/SearchPage";

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
        element: <SearchPage />,
      },
    ],
  },
]);
