import { Box, Typography } from "@mui/material";
import { ADD_EXPENSE, ADD_BALANCE } from "./WalletConstants";
import { lightGreen, orange } from "@mui/material/colors";
import StyledButton from "../Styled/Button";
import { useContext } from "react";
import { DataContext } from "./WalletContext";

const WalletRenderer = ({ type }) => {
  const { expense, balance, updateModalState } = useContext(DataContext);
  return (
    <Box className="app__wallet">
      <Typography variant="h4">
        {type === ADD_BALANCE ? (
          <>
            Wallet Balance:{" "}
            <span style={{ color: lightGreen[500], fontWeight: "bold" }}>
              &#8377;{balance}
            </span>
          </>
        ) : (
          <>
            Expenses:{" "}
            <span style={{ color: orange[500], fontWeight: "bold" }}>
              &#8377;{expense.total}
            </span>
          </>
        )}
      </Typography>
      {type === ADD_BALANCE ? (
        <StyledButton
          onClick={() =>
            updateModalState({ modalOps: "open", target: ADD_BALANCE })
          }
          variant="balance"
          size="small"
        >
          + Add Income
        </StyledButton>
      ) : (
        <StyledButton
          onClick={() =>
            updateModalState({ modalOps: "open", target: ADD_EXPENSE })
          }
          variant="expense"
          size="small"
        >
          + Add Expense
        </StyledButton>
      )}
    </Box>
  );
};
export default function Wallet({ walletType }) {
  switch (walletType) {
    case ADD_BALANCE: {
      return <WalletRenderer type={walletType} />;
    }
    case ADD_EXPENSE: {
      return <WalletRenderer type={walletType} />;
    }
  }
}
