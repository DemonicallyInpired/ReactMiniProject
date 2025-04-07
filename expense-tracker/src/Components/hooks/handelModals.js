import { useState } from "react";
import { ADD_BALANCE, ADD_EXPENSE } from "../Wallet/WalletConstants";

export const useModals = () => {
  const [balanceOpen, setBalanceOpen] = useState(false);
  const [expenseOpen, setExpenseOpen] = useState(false);
  const updateModalState = ({ modalOps, target }) => {
    if (modalOps === undefined) {
      throw new Error(
        "Please provide the modal operation i.e. whether open close",
      );
    } else if (target === undefined) {
      throw new Error(
        `Please provide the target i.e. either ${ADD_EXPENSE} or ${ADD_BALANCE}`,
      );
    }
    switch (target) {
      case ADD_BALANCE: {
        switch (modalOps) {
          case "open": {
            setBalanceOpen(true);
            break;
          }
          case "close": {
            setBalanceOpen(false);
            break;
          }
        }
        break;
      }
      case ADD_EXPENSE: {
        switch (modalOps) {
          case "open": {
            setExpenseOpen(true);
            break;
          }
          case "close": {
            setExpenseOpen(false);
            break;
          }
        }
        break;
      }
    }
  };
  return [balanceOpen, expenseOpen, updateModalState];
};
