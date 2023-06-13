import React from "react";
import DashboardCard, {
  DashboardCardProps,
} from "@/components/cards/DashboardCard";
import { SimpleGrid } from "@mantine/core";
import { FaWarehouse } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

const data: DashboardCardProps[] = [
  {
    icon: FaWarehouse,
    title: "$ 999,999",
    subtitle: "Total Assets (MYR)",
    valueChange: 2,
    changeType: "Increase",
    changeMetric: "%",
    isGood: true,
  },
  {
    icon: GiPayMoney,
    title: "$ 69,420",
    subtitle: "Cash Out (MYR)",
    valueChange: 10,
    changeType: "Decrease",
    changeMetric: "%",
    isGood: true,
  },
  {
    icon: GiReceiveMoney,
    title: "$ 200,000",
    subtitle: "Cash In (MYR)",
    valueChange: 5,
    changeType: "Decrease",
    changeMetric: "%",
    isGood: false,
  },
];

const Overview = () => {
  return (
    <div>
      <SimpleGrid cols={3} spacing={"xl"} h={220}>
        {data.map((item) => (
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
    </div>
  );
};

export default Overview;
