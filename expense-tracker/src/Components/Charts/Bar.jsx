import {
  Bar,
  BarChart,
  Legend,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { lightBlue } from "@mui/material/colors";
import { Box } from "@mui/material";
import { SubHeading } from "../Styled/Header";

export default function ExpenseBar({ data }) {
  console.log("value", data);
  return (
    <Box>
      <SubHeading sx={{ marginBottom: "1rem" }}>Recent Transactions</SubHeading>

      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "10px",
        }}
        width="100%"
        height="20vh"
      >
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 50,
              bottom: 5,
            }}
            layout="vertical"
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="value"
              fill={lightBlue[400]}
              activeBar={<Rectangle fill={lightBlue[600]} stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
