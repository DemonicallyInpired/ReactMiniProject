import { CssBaseline, ThemeProvider } from "@mui/material";
import getTheme from "../utils/themeObject";
import { RouterProvider } from "react-router-dom";
import routes from "../utils/routes";
import "./globals.css";
export default function App() {
  const currTheme = getTheme("light");
  return (
    <ThemeProvider theme={currTheme}>
      <CssBaseline />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
