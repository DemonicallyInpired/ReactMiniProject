import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
export default function ExpenseSummaryPieChart({ data }) {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <PieChart width="100%" height="100%">
        <Pie
          dataKey="value"
          data={data}
          cx={"50%"}
          cy={"50%"}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Legend align="right" verticalAlign="bottom" />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
