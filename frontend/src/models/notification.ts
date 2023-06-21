import { IconType } from "react-icons/lib";

export type Priority = "High" | "Medium" | "Low";

export interface Notification {
  title: string;
  description: string;
  date: string;
  priority: Priority;
  type: string;
  icon: IconType;
  isLast?: boolean;
}
