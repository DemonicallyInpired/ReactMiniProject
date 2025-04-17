import { Box, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  console.log(theme.typography.fontFamily);
  return <Box>Footer</Box>;
}
