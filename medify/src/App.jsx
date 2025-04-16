import "./globals.module.css";
import { RouterProvider } from "react-router-dom";
import routes from "./utils/routes";
import { ThemeProvider } from "@mui/material";
import themeObject from "./utils/ThemeObject";
export default function App() {
  return (
    <ThemeProvider theme={themeObject}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
