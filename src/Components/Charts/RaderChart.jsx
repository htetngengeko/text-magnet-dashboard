import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const isSmallScreen = window.innerWidth <= 1200;

const RaderChart = ({
  RaderData,
  PolarDataKey,
  name1,
  dataKey1,
  name2,
  dataKey2,
}) => {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <RadarChart outerRadius={100} width={750} height={250} data={RaderData}>
        <PolarGrid />
        <PolarAngleAxis dataKey={PolarDataKey} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name={name1}
          dataKey={dataKey1}
          stroke="#00D4B7"
          fill="#00D4B7"
          fillOpacity={0.8}
        />
        <Radar
          name={name2}
          dataKey={dataKey2}
          stroke="#FDEB00"
          fill="#FDEB00"
          fillOpacity={0.8}
        />
        <Tooltip />
        {!isSmallScreen && <Legend />}
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RaderChart;
