import { styled } from "@mui/material";
import { grey, lightGreen, yellow, deepOrange } from "@mui/material/colors";
const sizeMapping = {
  small: 2,
  medium: 2.5,
  large: 3,
};
const btnvaraints = {
  balance: { backgroundColor: lightGreen[500], color: grey["A100"] },
  expense: { backgroundColor: deepOrange["A700"], color: grey["A100"] },
  warning: { backgroundColor: yellow[800], color: grey["A100"] },
};
const StyledButton = styled("button")(({ variant, size }) => {
  return {
    minWidth: size
      ? sizeMapping[size]
        ? `${sizeMapping[size]}rem`
        : "1rem"
      : "1rem",
    backgroundColor: variant
      ? btnvaraints[variant]["backgroundColor"]
      : grey[500],
    fontSize: size
      ? sizeMapping[size]
        ? `${sizeMapping[size] * 0.5}rem`
        : "1.5rem"
      : "1.5rem",
    color: variant ? btnvaraints[variant]["color"] : grey["A100"],
    padding: size
      ? size === "small"
        ? "0.5rem 1rem"
        : "1rem 2rem"
      : "0.5rem 1rem",
    border: "none",
    appearance: "none",
    cursor: "pointer",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    textWrap: "nowrap",
    textAlign: "center",
  };
});
export default StyledButton;
