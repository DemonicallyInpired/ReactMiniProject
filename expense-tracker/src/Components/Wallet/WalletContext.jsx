import { createContext } from "react";
export const DataContext = createContext({
  expense: {},
  balance: 5000,
  setBalance: null,
  setExpense: null,
  balanceOpen: false,
  expenseOpen: false,
  updateModalState: null,
});
