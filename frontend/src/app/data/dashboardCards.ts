import { DashboardCardProps } from "@/models/dashboardCard";
import { FaWarehouse } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

export const DASHBOARD_CARDS: DashboardCardProps[] = [
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
