import {
  Typography,
  useMediaQuery,
  Box,
  Button,
  Link as MuiLink,
} from "@mui/material";
import "./Navbar.css";
import { Link as RouterLink, useLocation } from "react-router-dom";
import AlternateBox from "../AlternateBox/AlternateBox";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const navItems = [
  "Find Doctors",
  "Hospital",
  "Medicine",
  "Surgeries",
  "Software for Provider",
  "Facilities",
];

const Navbar = () => {
  const largeScreenBreakpoint = useMediaQuery("(min-width : 1200px)");
  const [toggled, setToggled] = useState(false);
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <AlternateBox>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          maxWidth: !isSearchPage ? "100vw" : "90vw",
          margin: "auto",
          backgroundColor: !isSearchPage ? "#fefefe" : "inherit",
        }}
      >
        <Box>
          <RouterLink to="/">
            <img src="/assets/logo.png" alt="logoImage" />
          </RouterLink>
        </Box>
        <Box
          className={
            !largeScreenBreakpoint && toggled
              ? "transition-fade"
              : largeScreenBreakpoint
              ? "transition-fade"
              : "transition-fade-hidden "
          }
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: !largeScreenBreakpoint
              ? "flex-start"
              : "space-between",
            alignItems: !largeScreenBreakpoint ? "flex-start" : "center",
            gap: !largeScreenBreakpoint ? "1rem" : "0rem",
            position: !largeScreenBreakpoint ? "fixed" : "static",
            flexDirection: !largeScreenBreakpoint ? "column" : "row",
            height: !largeScreenBreakpoint ? "100vh" : "fit-content",
            backgroundColor: !largeScreenBreakpoint
              ? "secondary.main"
              : "inherit",
            right: 0,
            top: 0,
            padding: !largeScreenBreakpoint ? "4rem 1rem 0rem" : "0rem",
            zIndex: 100,
          }}
        >
          {navItems.map((item, index) => (
            <Typography
              className="navbarLinks"
              key={`navItems-${index}`}
              component="span"
            >
              <MuiLink
                component={RouterLink}
                to={item === "Hospital" ? "/search" : "#"}
                variant={
                  !largeScreenBreakpoint && toggled ? "primary" : "secondary"
                }
                underline="none"
                onClick={handleToggle}
              >
                {item}
              </MuiLink>
            </Typography>
          ))}
          <Button className="navbarLinks" variant="contained">
            <MuiLink
              component={RouterLink}
              to="/my-bookings"
              variant="primary"
              underline="none"
              onClick={handleToggle}
            >
              My Bookings
            </MuiLink>
          </Button>
        </Box>

        <Button
          sx={{
            display: !largeScreenBreakpoint ? "inline-block" : "none",
            position: !toggled ? "static" : "fixed",
            top: 10,
            right: 10,
            zIndex: 200,
          }}
          variant="transparent"
          onClick={handleToggle}
          color={toggled ? "secondary" : "primary"}
          disableRipple={true}
        >
          {toggled ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </nav>
    </AlternateBox>
  );
};

export default Navbar;
