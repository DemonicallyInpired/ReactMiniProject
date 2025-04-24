import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";
export default function ToggleButton({ toggled, setToggle }) {
  const handleToggle = () => {
    setToggle((prevToggle) => (prevToggle === "light" ? "dark" : "light"));
  };
  return (
    <IconButton onClick={handleToggle}>
      {toggled === "light" ? (
        <WbSunnyIcon sx={{ color: yellow[500] }} />
      ) : (
        <DarkModeIcon sx={{ color: blue[500] }} />
      )}
    </IconButton>
  );
}
