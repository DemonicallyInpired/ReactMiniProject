import { useContext } from "react";
import { SubHeading } from "../Styled/Header";
import { DataContext } from "../Wallet/WalletContext";

export default function Transcations() {
  const { expenses } = useContext(DataContext);

  return (
    <Box>
      <SubHeading>Recent Transactions</SubHeading>
    </Box>
  );
}
