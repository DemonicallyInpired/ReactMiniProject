import {
  Box,
  Typography,
  Avatar,
  useMediaQuery,
  Button,
  useTheme,
  Checkbox,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import {
  ResetContext,
  ThemeToggleContext,
  ToggleContext,
} from "../../../utils/contexts";
import { ThemeContext } from "@emotion/react";
import ToggleButton from "./ToggleButton";
export default function Navbar() {
  const currSize = useMediaQuery("(min-width: 900px)");
  const { setToggle } = useContext(ToggleContext);
  const { toggled, setToggled } = useContext(ThemeToggleContext);
  const { setReset } = useContext(ResetContext);
  const currTheme = useTheme(ThemeContext);
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  const handleResetContext = () => {
    setReset((prevValue) => !prevValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        width: "100%",
        height: "10vh",
        position: "fixed",
        zIndex: 1200,
        backgroundColor:
          currTheme.palette.mode === "light" ? "#fefefe" : "#3C3C3C",
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          display: currSize ? "flex" : "none",
          gap: "1rem",
          alignItems: "center",
          bgcolor: "background.primary",
          padding: "0.5rem",
          width: { xs: "20%", lg: "15%" },
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        <MuiLink to="/" component={RouterLink}>
          <Avatar
            sx={{ border: "2px solid #D7C7F4" }}
            src="/assets/SoulAiProfile.png"
            alt="soul-ai-profile-image"
          />
        </MuiLink>
        <MuiLink to="/" component={RouterLink}>
          <Button
            variant="contained"
            sx={{ display: "flex", alignItems: "center" }}
            color="secondary"
            onClick={handleResetContext}
          >
            <Typography>New Chat</Typography>
            <EditIcon />
          </Button>
        </MuiLink>
      </Box>
      <Button
        disableRipple={true}
        sx={{ display: currSize ? "none" : "block" }}
        onClick={handleToggle}
      >
        <MenuIcon />
      </Button>
      <header>
        <Typography
          fontSize={"2rem"}
          variant="h1"
          fontWeight="bold"
          color="primary"
        >
          Bot AI
        </Typography>
      </header>
      <Box>
        <ToggleButton toggled={toggled} setToggle={setToggled} />
      </Box>
    </Box>
  );
}
