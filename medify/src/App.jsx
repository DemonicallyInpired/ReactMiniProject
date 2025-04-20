import { RouterProvider } from "react-router-dom";
import { routes } from "./utils/routes";
import themeObject from "./utils/themeObject";
import { ThemeProvider } from "@emotion/react";
import { SnackbarProvider } from "notistack";
export default function App() {
  return (
    <SnackbarProvider>
      <ThemeProvider theme={themeObject}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </SnackbarProvider>
  );
}
