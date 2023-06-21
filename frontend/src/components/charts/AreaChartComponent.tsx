import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Tabs, Select, clsx } from "@mantine/core";
import { useState, useEffect } from "react";
import { FaStore } from "react-icons/fa";

const AreaChartComponent = ({
  data,
  title,
}: {
  data: any[];
  title: string;
}) => {
  const [activeTab, setActiveTab] = useState<string | null>("all");

  useEffect(() => {
    console.log(activeTab);
  });

  return (
    <>
      <div className="mb-2 flex flex-col gap-2 px-4">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">{title}</p>
          <div className="flex gap-4">
            <Select
              placeholder="All Branches"
              data={["All Branches", "Cheras", "Ampang", "Bukit Jalil"]}
              icon={<FaStore size="1rem" />}
            />
            <Select
              placeholder="All Sources"
              data={[
                { value: "all", label: "All Sources" },
                { value: "foodpanda", label: "FoodPanda" },
                { value: "grabfood", label: "GrabFood" },
                { value: "shopeefood", label: "ShopeeFood" },
              ]}
              icon={<FaStore size="1rem" />}
              value={activeTab}
              onChange={setActiveTab}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="text-sm font-medium text-black">
            <Tabs
              color="#004be0e3"
              radius={"md"}
              variant="pills"
              defaultValue="all"
              value={activeTab}
              onTabChange={setActiveTab}
            >
              <Tabs.List position={"right"}>
                <Tabs.Tab value="foodpanda">
                  <span
                    className={clsx("text-sm", {
                      " text-white": activeTab === "foodpanda",
                    })}
                  >
                    FoodPanda
                  </span>
                </Tabs.Tab>
                <Tabs.Tab value="grabfood">
                  <span
                    className={clsx("text-sm", {
                      " text-white": activeTab === "grabfood",
                    })}
                  >
                    GrabFood
                  </span>
                </Tabs.Tab>
                <Tabs.Tab value="shopeefood">
                  <span
                    className={clsx("text-sm", {
                      " text-white": activeTab === "shopeefood",
                    })}
                  >
                    ShopeeFood
                  </span>
                </Tabs.Tab>
                <Tabs.Tab value="all" className="h-3/4">
                  <span
                    className={clsx("text-sm", {
                      "text-white": activeTab === "all",
                    })}
                  >
                    All Sources
                  </span>
                </Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </div>
        </div>
      </div>
      <ResponsiveContainer height={400} width={"99%"}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="foodpanda" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d60665" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#d60665" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grabfood" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00b14f" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00b14f" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="shopeefood" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ee4e2e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ee4e2e" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" className="text-sm" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {(activeTab === "all" || activeTab === "foodpanda") && (
            <Area
              type="monotone"
              dataKey="foodpanda"
              fillOpacity={1}
              fill="url(#foodpanda)"
              stroke="#d60665"
              markerUnits={0}
            />
          )}
          {(activeTab === "all" || activeTab === "grabfood") && (
            <Area
              type="monotone"
              dataKey="grabfood"
              fillOpacity={1}
              fill="url(#grabfood)"
              stroke="#00b14f"
              markerUnits={0}
            />
          )}
          {(activeTab === "all" || activeTab === "shopeefood") && (
            <Area
              type="monotone"
              dataKey="shopeefood"
              fillOpacity={1}
              fill="url(#shopeefood)"
              stroke="#ee4e2e"
              markerUnits={0}
            />
          )}
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaChartComponent;
