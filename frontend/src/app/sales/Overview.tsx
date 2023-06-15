import React from "react";
import { SimpleGrid } from "@mantine/core";
import DashboardCard from "@/components/cards/DashboardCard";
import DynamicDataTable from "@/components/tables/DynamicDataTable";
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
    <div>
      <SimpleGrid cols={3} spacing={"xl"} h={220}>
        {DASHBOARD_CARDS.map((item) => (
          <DashboardCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            valueChange={item.valueChange}
            changeType={item.changeType}
            changeMetric={item.changeMetric}
            isGood={item.isGood}
          />
        ))}
      </SimpleGrid>
      <div className="mt-12">
        <DynamicDataTable
          rows={TRANSACTIONS}
          columns={TRANSACTION_COLUMNS}
          dropDownOptions={dropDownOptions}
        />
      </div>
    </div>
  );
};

export default Overview;
