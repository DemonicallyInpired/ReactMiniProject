import { createBrowserRouter } from "react-router-dom";
import HomePage from "../src/Components/HomePage/HomePage";
import History from "../src/Components/History/History";
import Layout from "../src/Components/Layout";
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
        path: "/history",
        element: <History />,
      },
    ],
  },
]);
export default routes;
