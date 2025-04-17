import { RouterProvider } from "react-router-dom";
import { routes } from "./utils/routes";
import themeObject from "./utils/themeObject";
import { ThemeProvider } from "@emotion/react";

export default function App() {
  return (
    <ThemeProvider theme={themeObject}>
      <RouterProvider router={routes} />;
    </ThemeProvider>
  );
}
