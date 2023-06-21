import { DASHBOARD_CARDS } from "@/app/data/";
import DashboardCard from "@/components/cards/DashboardCard";
import AreaChartComponent from "@/components/charts/AreaChartComponent";
import BarChartComponent from "@/components/charts/BarChartComponent";
import Recommendationv2 from "./Recommendationv2";
import Checklist from "./Checklist";

const data = [
  { name: "12/06/2023", foodpanda: 220.0, shopeefood: 130.0, grabfood: 180.0 },
  { name: "13/06/2023", foodpanda: 530.0, shopeefood: 160.0, grabfood: 330.0 },
  { name: "14/06/2023", foodpanda: 300.0, shopeefood: 200.0, grabfood: 250.0 },
  { name: "15/06/2023", foodpanda: 320.0, shopeefood: 220.0, grabfood: 270.0 },
  { name: "16/06/2023", foodpanda: 200.0, shopeefood: 110.0, grabfood: 246.0 },
  { name: "17/06/2023", foodpanda: 476.0, shopeefood: 230.0, grabfood: 411.0 },
  { name: "18/06/2023", foodpanda: 380.0, shopeefood: 300.0, grabfood: 400.0 },
];

const pizza = [
  { name: "Hawaiian Pizza", count: 8 },
  { name: "Pepperoni Pizza", count: 7 },
  { name: "Cheese Pizza", count: 2 },
];

const Overview = () => {
  return (
    <div className="grid w-full grid-cols-12 gap-4">
      <div className="col-span-12 flex flex-col space-y-4">
        <div className="flex flex-col gap-2">
          <div className="grid h-min w-full grid-cols-4 gap-4">
            {DASHBOARD_CARDS.map((item) => (
              <div className="col-span-1" key={item.title}>
                <DashboardCard
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  valueChange={item.valueChange}
                  changeType={item.changeType}
                  changeMetric={item.changeMetric}
                  isGood={item.isGood}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-9 flex flex-col space-y-4">
        <div className="grid h-min w-full grid-cols-8 gap-4">
          <div className="col-span-5 w-full rounded-xl bg-white px-4 py-6 shadow-md outline outline-1 outline-gray-100">
            <AreaChartComponent
              data={data}
              title={"Total Sales - Past 7 Days"}
            />
          </div>
          <div className="col-span-3 w-full rounded-xl bg-white px-4 py-6 shadow-md outline outline-1 outline-gray-100">
            <BarChartComponent data={pizza} title={"Top Products Sold Today"} />
          </div>
        </div>
      </div>
      <div className="col-span-3 rounded-xl bg-white px-4 py-6 shadow-md outline outline-1 outline-gray-100">
        <Checklist />
      </div>
      <div className="col-span-12 mt-8">
        <h2 className="py-4 text-3xl font-semibold">
          <span className="text-[#004be0]">FlowAI </span> Recommendations
        </h2>
        <Recommendationv2 />
      </div>
    </div>
  );
};

export default Overview;
