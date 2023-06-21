import { Notification } from "@/models/notification";
import { FaWarehouse } from "react-icons/fa";

export const NOTIFICATIONS: Notification[] = [
  {
    title: "New user registered",
    description: "Farhan registered 2 minutes ago",
    date: "2020-01-01",
    priority: "High",
    type: "User",
    icon: FaWarehouse,
  },
];
