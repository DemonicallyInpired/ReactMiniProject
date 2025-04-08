import { useContext } from "react";
import { SubHeading } from "../Styled/Header";
import { DataContext } from "../Wallet/WalletContext";
import { Box, Divider, Grid } from "@mui/material";
import { IoFastFood } from "react-icons/io5";
import { MdEmojiTransportation, MdDelete, MdEdit } from "react-icons/md";
import { RiMovie2AiFill } from "react-icons/ri";
import { orange } from "@mui/material/colors";
const imageMapping = new Map([
  ["Food", <IoFastFood />],
  ["Travel", <MdEmojiTransportation />],
  ["Entertainment", <RiMovie2AiFill />],
  ["deleteAction", <MdDelete />],
  ["editAction", <MdEdit />],
]);
export default function TransactionList() {
  const { expense } = useContext(DataContext);
  const data = expense.expense || [];
  console.log("data", data);
  return (
    <>
      <Grid size={{ xs: 12, md: 7.2 }}>
        <SubHeading>Top Expenses</SubHeading>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "10px",
          }}
        >
          {data.map((item, index) => {
            const { category, date, price, title } = item;
            return (
              <>
                <Box className="list-item">
                  <Box className="content">
                    <Box>{imageMapping.get(category)}</Box>
                    <Box className="details">
                      <Box>{title}</Box>
                      <Box>{date}</Box>
                    </Box>
                  </Box>
                  <Box className="actions">
                    <Box>
                      <span style={{ color: orange[500] }}>
                        &#8377;
                        {price}
                      </span>
                    </Box>
                    <Box>
                      <button type="button" disabled>
                        {imageMapping.get("deleteAction")}
                      </button>
                    </Box>
                    <Box>
                      <button type="button" disabled>
                        {imageMapping.get("editAction")}
                      </button>
                    </Box>
                  </Box>
                </Box>
                <Divider variant="fullWidth" />
              </>
            );
          })}
        </Box>
      </Grid>
    </>
  );
}
