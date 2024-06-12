import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const isSmallScreen = window.innerWidth <= 1200;

const ComposedComponent = ({
  data,
  dataKey,
  AreaDataKey,
  BarDataKey,
  LineDataKey,
}) => {
  return (
    // <ResponsiveContainer width="100%" height="90%">
    <ComposedChart width={730} height={250} data={data}>
      <XAxis dataKey={dataKey} />
      <YAxis />
      <Tooltip />
      {!isSmallScreen && <Legend />}
      <CartesianGrid stroke="#f5f5f5" />
      <Area
        type="monotone"
        dataKey={AreaDataKey}
        fill="#8884d8"
        stroke="#8884d8"
      />
      <Bar dataKey={BarDataKey} barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey={LineDataKey} stroke="#ff7300" />
    </ComposedChart>
    // </ResponsiveContainer>
  );
};

export default ComposedComponent;
