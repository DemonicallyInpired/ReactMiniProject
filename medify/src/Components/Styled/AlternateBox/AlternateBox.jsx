import { styled, Box } from "@mui/material";
import React from "react";

const AltBox = styled(Box, { name: "AltBox", slot: "root" })(({ theme }) => ({
  background: theme.palette.primary.light,
}));
const AlternateBox = ({ ref, children, ...rest }) => {
  return (
    <AltBox ref={ref} {...rest}>
      {children}
    </AltBox>
  );
};
export default AlternateBox;
