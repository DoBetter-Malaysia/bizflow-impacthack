import { IconType } from "react-icons/lib";

type ChangeType = "Increase" | "Decrease" | "None";

export interface DashboardCardProps {
  icon: IconType;
  title: string;
  subtitle?: string;
  valueChange?: number;
  changeType: ChangeType;
  changeMetric?: string;
  isGood?: boolean;
}
