import { createTheme } from "@mui/material";

let themeObject = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Poppins , sans-serif",
  },
  palette: {
    background: {
      light:
        "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
    },
    primary: {
      main: "#2AA7FF",
      light: "#2AA7FF",
      dark: "#000",
      contrastText: "#fefefe",
    },
    secondary: {
      main: "#1B3C74",
      light: "#fefefe",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#000",
          fontSize: "3.5rem",
          fontWeight: "700",
        },
        h2: {
          color: "#1B3C74",
          fontSize: "3rem",
          fontWeight: "600",
        },
        h3: {
          color: "#102851",
          fontSize: "1.875rem",
          fontWeight: "500",
        },
        body1: {
          fontWeight: 300,
          fontSize: "1.25rem",
        },
      },
    },
  },
});
themeObject = createTheme(themeObject, {
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          [themeObject.breakpoints.down("sm")]: {
            fontSize: "2rem",
          },
        },
        h2: {
          [themeObject.breakpoints.down("sm")]: {
            fontSize: "2.5rem",
          },
        },
        h3: {
          [themeObject.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: (props) =>
                props.variant === "transparent" && props.color === "primary",
              style: {
                backgroundColor: "none",
                color: "#000",
              },
            },
            {
              props: (props) =>
                props.variant === "transparent" && props.color === "secondary",
              style: {
                backgroundColor: "none",
                color: "#fefefe",
              },
            },
            {
              props: { variant: "contained" },
              style: {
                backgroundColor: themeObject.palette.primary.main,
                color: "#fff",
              },
            },
          ],
          color: "#fff",
        },
      },
    },
    MuiLink: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            color: "#fefefe",
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            color: themeObject.palette.primary.main,
          },
        },
      ],
    },
  },
});

export default themeObject;
