import { Outlet } from "react-router-dom";
import { Footer, Navbar, Message } from "./Components";
import DownloadApp from "./Components/DownloadApp/Download";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { GET_STATE } from "./hooks/constants";
import { useState } from "react";
import useFetch from "./hooks/fetchData";
import { SearchPageContext } from "./utils/ContextData";

import { useSearchParams } from "react-router-dom";

export default function Layout() {
  const [state, setState] = useState([]);
  const fetcher = useFetch();

  useEffect(() => {
    fetcher(setState, GET_STATE);
  }, []);
  return (
    <Box>
      <Message />
      <Navbar />
      <Outlet context={{ state: state }} />

      <DownloadApp />
      <Footer />
    </Box>
  );
}
