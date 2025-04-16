import { createTheme } from "@mui/material";

let themeObject = createTheme({
  white: "#fff",
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
    fontFamily: '"Poppins", sans-serif',
    h1: { fontSize: "6rem" },
    h2: { fontSize: "5rem" },
    h3: { fontSize: "4rem" },
    h4: { fontSize: "3rem" },
    h5: { fontSize: "2rem" },
    h6: { fontSize: "1rem" },
    body1: {
      fontSize: "1rem",
      fontWeight: "400",
      color: "gray",
    },
    body2: { fontSize: "0.25rem" },
    button: {
      fontFamily: '"Poppins", sans-serif',
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#2AA7FF",
      dark: "#2AB8EB",
      light:
        "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#2AA8FF",
          color: "#fefefe",
          border: "none",
          textWrap: "nowrap",
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "#2AAFDD",
          },
        },
      },
      variants: [
        {
          props: { variant: "transparent" },
          style: {
            background: "none",
            color: "#000",
            "&:hover": {
              backgroundColor: "inherit",
            },
          },
        },
      ],
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: () => null, // Removes dropdown arrow
      },
      styleOverrides: {
        root: {
          position: "relative",
        },
        select: {
          paddingLeft: "40px", // Space for the left icon
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          position: "relative",
          "&::before": { display: "none" },
          "&::after": { display: "none" },
          "& .MuiInputBase-input": {
            paddingLeft: "40px", // Pushes text right
          },
          "& .MuiInputBase-searchIcon": {
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "20px",
            height: "20px",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='gray' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            pointerEvents: "none",
          },
        },
      },
    },
  },
});
themeObject = createTheme(themeObject, {
  components: {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
            border: `1px solid rgba(0, 0, 0, 0.12)`,
          },
          "& .MuiToggleButtonGroup-grouped:nth-of-type(3)": {
            color: themeObject.palette.primary.main,
            border: `2px solid ${themeObject.palette.primary.main}`,
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "2rem",
          textTransform: "capitalize",
        },
      },
    },
  },
});
export default themeObject;
