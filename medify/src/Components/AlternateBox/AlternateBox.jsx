import { styled } from "@mui/material";
import { Box } from "@mui/material";

const AltBox = styled(Box, { name: "MuiAlternateBox", slot: "root" })(
  ({ theme }) => ({
    background: theme.palette.background.light,
  }),
);

export default function AlternateBox({ ref, children, ...rest }) {
  return (
    <AltBox ref={ref} {...rest}>
      {children}
    </AltBox>
  );
}
