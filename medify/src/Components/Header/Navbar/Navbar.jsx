import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const navItems = [
  { content: "Find Doctor", route: "#" },
  { content: "Hospitals", route: "#" },
  { content: "Medicine", route: "#" },
  { content: "Surgeries", route: "#" },
  { content: "Sofware for Provider", route: "#" },
  { content: "Facilities", route: "#" },
];
export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const theme = useTheme();
  const currSize = useMediaQuery(theme.breakpoints.up("md"));

  const toggleNavbar = () => {
    setToggled((prevState) => !prevState);
  };

  return (
    <nav className={styles.navbarContainer}>
      <Link to="/">
        <img src="/assets/logo.png" alt="logo-image" />
      </Link>
      <div className={styles.navbarContent}>
        <ul
          style={{
            display: !currSize && toggled ? "flex" : currSize ? "flex" : "none",
            visibility:
              !currSize && toggled
                ? "visible"
                : currSize
                ? "visible"
                : "hidden",
          }}
          className={styles.navbarItems}
        >
          {navItems.map((item, index) => (
            <Link to={item.route} key={`nav-link-${index}`}>
              <Typography color="primary" variant="h6">
                <li key={`navItem-${index}`}>{item.content}</li>
              </Typography>
            </Link>
          ))}
          <Link to="/my-bookings">
            <li>
              <Button size="large">My Bookings</Button>
            </li>
          </Link>
        </ul>
        <Button
          variant="transparent"
          onClick={toggleNavbar}
          id={styles.navbarToggler}
        >
          <MenuIcon color="#000" />
        </Button>
      </div>
    </nav>
  );
}
