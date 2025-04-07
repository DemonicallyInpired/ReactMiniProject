import "./Globals/index.scss";
import themeObject from "./Themes/themeObject";
import { ThemeProvider, Box } from "@mui/material";
import { Heading, WalletSummary, SubHeading } from "./Components";
import { SnackbarProvider } from "notistack";
const App = () => {
  return (
    <SnackbarProvider>
      <ThemeProvider theme={themeObject}>
        <Box>
          <Heading>Expense Tracker</Heading>
          <WalletSummary />
          <Box className="app__transaction_section">
            <SubHeading>Recent Transactions</SubHeading>
          </Box>
        </Box>
      </ThemeProvider>
    </SnackbarProvider>
  );
};
export default App;
