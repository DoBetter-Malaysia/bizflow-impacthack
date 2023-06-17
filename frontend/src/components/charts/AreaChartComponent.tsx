import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AreaChartComponent = ({
  data,
  title,
}: {
  data: any[];
  title: string;
}) => {
  return (
    <>
      <div className="mb-5">
        <p className="text-xl font-bold">{title}</p>
      </div>
      <ResponsiveContainer height={400} width={"99%"}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="areaChartColour" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor="#2563eb" stopOpacity={0.9} />
              <stop offset="90%" stopColor="#2563eb" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales"
            fillOpacity={1}
            fill="url(#areaChartColour)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaChartComponent;
