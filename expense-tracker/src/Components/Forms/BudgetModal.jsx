import BudgetForm from "./BudgetForm";
import { DataContext } from "../Wallet/WalletContext";
import { useContext } from "react";
import { Modal, Fade, Box } from "@mui/material";
import { style } from "./Styles/ModalStyle";
import Backdrop from "@mui/material/Backdrop";
export default function TargetModals({ open, target, children }) {
  const { updateModalState } = useContext(DataContext);

  return (
    <Box>
      <Modal
        aria-labelledby="Balance-Modal"
        aria-describedby="Add Balance"
        open={open}
        onClose={() => updateModalState({ modalOps: "close", target: target })}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </Box>
  );
}
