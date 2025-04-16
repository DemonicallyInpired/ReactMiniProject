import Navbar from "../Navbar/Navbar";
import Message from "../Message/Message";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, zIndex: 900 }}>
      <Box>
        <Message />
        <Navbar />
      </Box>
    </Box>
  );
}
