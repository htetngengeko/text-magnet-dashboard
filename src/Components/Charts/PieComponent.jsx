import React from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const isSmallScreen = window.innerWidth <= 1200;

const PieComponent = ({ data }) => {
  return (
    <PieChart width={350} height={220}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      {!isSmallScreen && (
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          wrapperStyle={{
            paddingLeft: 20,
          }}
        />
      )}
    </PieChart>
  );
};

export default PieComponent;
