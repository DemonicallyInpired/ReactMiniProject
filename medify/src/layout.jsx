import { Outlet } from "react-router-dom";
import { Footer, Navbar, Message } from "./Components";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <Box>
      <Message />
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}
