import { DASHBOARD_CARDS } from "@/app/data/";
import DashboardCard from "@/components/cards/DashboardCard";
import AreaChartComponent from "@/components/charts/AreaChartComponent";
import BarChartComponent from "@/components/charts/BarChartComponent";
import Recommendation from "./Recommendation";

const data: any[] = [
  { name: "12/06/2023", sales: 220.0 },
  { name: "13/06/2023", sales: 530.0 },
  { name: "14/06/2023", sales: 700.0 },
  { name: "15/06/2023", sales: 620.0 },
  { name: "16/06/2023", sales: 830.0 },
  { name: "17/06/2023", sales: 476.0 },
  { name: "18/06/2023", sales: 380.0 },
];

const pizza: any[] = [
  { name: "Hawaiian Pizza", count: 8 },
  { name: "Pepperoni Pizza", count: 7 },
  { name: "Cheese Pizza", count: 2 },
];

const Overview = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-semibold ">
            Welcome Back <span className="text-[#004be0]"> Johns Pizza</span>
          </h3>
          <div className="grid h-min w-full grid-cols-3 gap-8">
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
        <div className="grid h-min w-full grid-cols-8 gap-8">
          <div className="col-span-5 w-full rounded-xl bg-white px-12 py-8 shadow-md outline outline-1 outline-gray-100">
            <AreaChartComponent
              data={data}
              title={"Total Sales Amount(RM) For The Past 7 Days"}
            />
          </div>
          <div className="col-span-3 w-full rounded-xl bg-white px-12 py-8 shadow-md outline outline-1 outline-gray-100">
            <BarChartComponent data={pizza} title={"Top Pizzas Sold Today"} />
          </div>
        </div>
        <div>
          <Recommendation />
        </div>
      </div>
    </div>
  );
};

export default Overview;
