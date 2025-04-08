import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabels = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {percent * 100 !== 0 ? `${(percent * 100).toFixed(0)}%` : ""}
    </text>
  );
};
export default function ExpenseSummaryPieChart({ data }) {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <PieChart width="50%" height="100%">
        <Pie
          dataKey="value"
          data={data}
          cx={"50%"}
          cy={"50%"}
          outerRadius={80}
          fill="#8884d8"
          legendType="square"
          labelLine={false}
          label={renderCustomizedLabels}
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
