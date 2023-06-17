import React from "react";
import DashboardCard from "@/components/cards/DashboardCard";
import DynamicDataTable from "@/components/tables/DynamicDataTable";
import Recommendation from "./Recommendation";
import {
  TRANSACTIONS,
  TRANSACTION_COLUMNS,
  DASHBOARD_CARDS,
} from "@/app/data/";

const dropDownOptions: any[] = [
  { value: "payment", label: "Payment" },
  { value: "cashout", label: "Cash Out" },
  { value: "cashin", label: "Cash In" },
  { value: "asset", label: "Asset" },
];

const Overview = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 ">
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
        <div>
          <Recommendation />
        </div>
        {/* <div>
          <DynamicDataTable
            rows={TRANSACTIONS}
            columns={TRANSACTION_COLUMNS}
            dropDownOptions={dropDownOptions}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Overview;
