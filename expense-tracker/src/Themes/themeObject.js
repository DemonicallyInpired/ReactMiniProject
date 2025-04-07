import { createTheme } from "@mui/material";

const themeObject = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#4d4d4d",
      light: "#212121",
      dark: "#171717",
      contrastText: "#fefefe",
    },
    secondary: {
      main: "#515b5f",
      light: "#263238",
      dark: "#1a2327",
      contrastText: "#fefefe",
    },
  },
});
export default themeObject;
