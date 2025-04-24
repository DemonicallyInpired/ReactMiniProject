import { Stack, Box, Button, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useEffect, useContext } from "react";
import { ResetContext, ToggleContext } from "../../../utils/contexts";
import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { ThemeContext } from "@emotion/react";
export default function SideBar() {
  const currSize = useMediaQuery("(min-width : 900px)");
  const { toggle, setToggle } = useContext(ToggleContext);
  const { setReset } = useContext(ResetContext);
  const currTheme = useTheme(ThemeContext);
  const handleClose = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  useEffect(() => {
    setToggle(() => currSize && true);
  }, [currSize, setToggle]);
  const handleResetContext = () => {
    setReset((prevValue) => !prevValue);
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <Stack
      direction="column"
      sx={{
        display: currSize ? "block" : toggle ? "block" : "none",
        width: { md: "15vw", xs: "60vw" },
        padding: "0.5rem",
        backgroundColor:
          currTheme.palette.mode === "light" ? "#fefefe" : "#3C3C3C",
        height: "100%",
        position: "fixed",
        left: 0,
        top: "10%",
        zIndex: 100,
      }}
    >
      <Stack direction="column">
        <Stack direction="row" justifyContent="space-between">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "1rem",
            }}
          >
            <MuiLink to="/history" component={RouterLink}>
              <Button
                sx={{
                  bgcolor: "secondary.main",
                  padding: "0.5rem",
                  borderRadius: "10px",
                  color: "primary.contrastText",
                }}
              >
                Past Conversations
              </Button>
            </MuiLink>
            {!currSize && (
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
            )}
          </Box>

          {!currSize && (
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
