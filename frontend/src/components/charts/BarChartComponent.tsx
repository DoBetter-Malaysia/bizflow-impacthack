import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const RecentTopTracksBarChart = ({
  data,
  title,
}: {
  data: any[];
  title: string;
}) => {
  return (
    <>
      <div className="mb-5">
        <p className="text-xl font-medium">{title}</p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          className="bar-chart"
        >
          <defs>
            <linearGradient id="barChartColour" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#004be0" stopOpacity={0.75} />
              <stop offset="90%" stopColor="#004be0" stopOpacity={0.15} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} className="text-sm" />
          <YAxis />
          <Bar
            dataKey="count"
            fill="url(#areaChartColour)"
            stroke="#004be0"
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default RecentTopTracksBarChart;
