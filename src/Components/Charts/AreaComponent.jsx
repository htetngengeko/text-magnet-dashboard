import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const isSmallScreen = window.innerWidth <= 1200;

const AreaComponent = ({ AreaData, XDataKey, dataKey1, dataKey2 }) => {
  return (
    <AreaChart
      width={1000}
      height={300}
      data={AreaData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey={XDataKey} />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      {!isSmallScreen && <Legend />}
      <Area
        type="linear"
        dataKey={dataKey1}
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="linear"
        dataKey={dataKey2}
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};

export default AreaComponent;
