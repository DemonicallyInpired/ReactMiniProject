import { CssBaseline, ThemeProvider } from "@mui/material";
import getTheme from "../utils/themeObject";
import { RouterProvider } from "react-router-dom";
import routes from "../utils/routes";
import "./globals.css";
import { ThemeToggleContext } from "../utils/contexts";
import { useState } from "react";

export default function App() {
  const [themeVal, setcurrThemeVal] = useState("light");
  const currTheme = getTheme(themeVal);
  return (
    <ThemeProvider theme={currTheme}>
      <CssBaseline />
      <ThemeToggleContext.Provider
        value={{ toggled: themeVal, setToggled: setcurrThemeVal }}
      >
        <RouterProvider router={routes} />
      </ThemeToggleContext.Provider>
    </ThemeProvider>
  );
}
