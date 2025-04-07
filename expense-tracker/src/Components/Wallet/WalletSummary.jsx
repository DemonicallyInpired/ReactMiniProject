import { useState, useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import Wallet from "./Wallet";
import { DataContext } from "./WalletContext";
import { ADD_EXPENSE, ADD_BALANCE } from "./WalletConstants";
import { useModals } from "../hooks/handelModals";
import TargetModals from "../Forms/BudgetModal";
import BudgetForm from "../Forms/BudgetForm";
import ExpenseForm from "../Forms/ExpenseForm";
import ExpenseSummaryPieChart from "../Charts/Pie";

export default function WalletSummary() {
  const [balance, setBalance] = useState(5000);
  const [expense, setExpense] = useState({
    entertainment: [],
    food: [],
    travel: [],
    entertainmentTotal: 0,
    foodTotal: 0,
    travelTotal: 0,
    total: 0,
  });

  useEffect(() => {
    if (!window.localStorage.getItem("balance")) {
      window.localStorage.setItem("balance", balance);
    } else {
      console.log("balance present");
      setBalance(JSON.parse(window.localStorage.getItem("balance")));
    }
    if (!window.localStorage.getItem("expense")) {
      window.localStorage.setItem("expense", JSON.stringify(expense));
    } else {
      setExpense(JSON.parse(window.localStorage.getItem("expense")));
    }
  }, []);
  const [balanceOpen, expenseOpen, updateModalState] = useModals();

  useEffect(() => {
    window.localStorage.setItem("balance", JSON.stringify(balance));
    window.localStorage.setItem("expense", JSON.stringify(expense));
  }, [balance, expense]);
  const contextvalue = {
    expense,
    balance,
    setBalance,
    setExpense,
    balanceOpen,
    expenseOpen,
    updateModalState,
  };
  const currData = useMemo(() => {
    const data = [];
    for (let key of Object.keys(expense)) {
      const pattern = /total/i;
      if (!key.match(pattern)) {
        data.push({
          name: key,
          value: expense[`${key}Total`],
        });
      }
    }
    return data;
  }, [expense, balance]);
  return (
    <DataContext.Provider value={contextvalue}>
      <Box className="app__summary">
        <Wallet walletType={ADD_BALANCE} />
        <Wallet walletType={ADD_EXPENSE} />
        {expense.total ? <ExpenseSummaryPieChart data={currData} /> : null}
      </Box>
      <Box>
        <TargetModals open={balanceOpen} target={ADD_BALANCE}>
          <BudgetForm />
        </TargetModals>
        <TargetModals open={expenseOpen} target={ADD_EXPENSE}>
          <ExpenseForm />
        </TargetModals>
      </Box>
    </DataContext.Provider>
  );
}
