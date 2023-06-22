import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { clsx } from "@mantine/core";

const RecentTopTracksBarChart = ({
  data,
  title,
}: {
  data: any[];
  title: string;
}) => {
  return (
    <>
      <div className="mb-5 px-4">
        <p className="text-xl font-semibold">{title}</p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="barChartColour" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#004be0" stopOpacity={0.75} />
              <stop offset="90%" stopColor="#004be0" stopOpacity={0.15} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} className="text-xs" />
          <YAxis />
          <Bar
            dataKey="large"
            fill="#f7cde0"
            stackId={"count"}
            stroke="#d60665"
          />
          <Bar
            dataKey="regular"
            fill="#ccefdc"
            stackId={"count"}
            stroke="#00b14f"
          />
          <Bar
            dataKey="personal"
            fill="#fcdcd5"
            stackId={"count"}
            stroke="#ee4e2e"
          />
          <Tooltip
            cursor={{
              fill: "gray",
              fillOpacity: 0.1,
            }}
            labelFormatter={(value) => {
              return <p className="font-semibold">{value}</p>;
            }}
            formatter={(value, name, props) => {
              return (
                <p
                  className={clsx("flex font-semibold", {
                    "text-[#d60665]": name === "large",
                    "text-[#00b14f]": name === "regular",
                    "text-[#ee4e2e]": name === "personal",
                  })}
                >
                  {" "}
                  {value}
                </p>
              );
            }}
            itemStyle={{
              color: "black",
              display: "flex",
              gap: "5px",
            }}
          />
          <Legend
            formatter={(value, entry, index) => {
              return (
                <span
                  className={clsx("font-medium", {
                    "text-[#d60665]": value === "large",
                    "text-[#00b14f]": value === "regular",
                    "text-[#ee4e2e]": value === "personal",
                  })}
                >
                  {value}
                </span>
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default RecentTopTracksBarChart;
