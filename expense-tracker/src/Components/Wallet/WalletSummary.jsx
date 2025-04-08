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
import { Grid } from "@mui/material";
import TransactionList from "../Transactions/Transactions";
import ExpenseBar from "../Charts/Bar";

export default function WalletSummary() {
  const [balance, setBalance] = useState(5000);
  const [expense, setExpense] = useState({
    expense: [],
    EntertainmentTotal: 0,
    FoodTotal: 0,
    TravelTotal: 0,
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
      if (key.match(pattern) && key != "total") {
        data.push({
          name: key.replace(pattern, ""),
          value: expense[key],
        });
      }
    }
    console.log("data", data);
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

      <Grid sx={{ marginTop: "1rem", padding: "1rem" }} container spacing={4}>
        <TransactionList />
        <Grid
          sx={{
            minHeight: "30vh",
          }}
          size={{ xs: 12, md: 4.8 }}
        >
          <ExpenseBar data={currData} />
        </Grid>
      </Grid>
    </DataContext.Provider>
  );
}
