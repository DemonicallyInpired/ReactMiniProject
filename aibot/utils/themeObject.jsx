import { createTheme } from "@mui/material";

const getTheme = (mode) => {
  // Step 1: Create the base theme with palette first
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#9785BA",
        light: "#AF9FCD",
        contrastText: mode === "light" ? "#3C3C3C" : "#FEFEFE",
      },
      secondary: {
        main: "#D7C7F4",
        contrastText: mode === "light" ? "#3C3C3C" : "#FEFEFE",
      },
      background: {
        primary: "#9785BA",
        secondary:
          "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
      },
    },
    typography: {
      allVariants: {
        textTransform: "capitalize",
      },
    },
  });

  return createTheme(
    {
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              margin: 0,
              padding: 0,
              minHeight: "100%",
              background:
                mode === "light"
                  ? theme.palette.background.secondary
                  : "#121212",
              color: mode === "light" ? "#000" : "#fff",
            },
          },
        },
        MuiButton: {
          variants: [
            {
              props: (props) => props.transparent,
              style: {
                backgroundColor: "none",
              },
            },
          ],
        },
      },
    },
    theme
  );
};

export default getTheme;
