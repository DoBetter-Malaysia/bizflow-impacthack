import { DashboardCardProps } from "@/models/dashboardCard";
import { FaWarehouse } from "react-icons/fa";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

export const DASHBOARD_CARDS: DashboardCardProps[] = [
  {
    icon: FaWarehouse,
    title: "RM 206,407",
    subtitle: "Total Assets (MYR)",
    valueChange: 2,
    changeType: "Increase",
    changeMetric: "%",
    isGood: true,
  },
  {
    icon: GiPayMoney,
    title: "RM 120,422",
    subtitle: "Total Cash Out (MYR)",
    valueChange: 10,
    changeType: "Decrease",
    changeMetric: "%",
    isGood: true,
  },
  {
    icon: GiReceiveMoney,
    title: "RM 163,234",
    subtitle: "Total Cash In (MYR)",
    valueChange: 5,
    changeType: "Decrease",
    changeMetric: "%",
    isGood: false,
  },
];
