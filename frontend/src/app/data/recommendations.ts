import { RecommendationCard } from "@/models/recommendationCard";
import { FaWallet, FaUser, FaChartPie, FaBoxes } from "react-icons/fa";

export const RECOMMENDATIONS: RecommendationCard[] = [
  {
    title: "Good Projected Revenue",
    description:
      "You have consistent revenue growth in the past year. Consider investing more to increase your revenue. Click here to find out our suggestions.",
    icon: FaWallet,
    link: "/deals",
    sentiment: "positive",
  },
  {
    title: "Potential Market Expansion",
    description:
      "Try to explore client generation through direct to consumer channels as your business orients more physically. Some examples are flyers and kiosks. Click to find out more!",
    icon: FaUser,
    link: "/deals",
    sentiment: "neutral",
  },
  {
    title: "Overstocked Inventory",
    description:
      "You have consequtively overstocked inventory and resulted in wastage of perishables and overhoarding. Click here to identify recommendations to remedy this issue!",
    icon: FaBoxes,
    link: "/deals",
    sentiment: "negative",
  },
  {
    title: "Low Profit Margin",
    description:
      "Your profit margin is low. Consider increasing your prices or reducing your costs. Click here to find out our suggestions.",
    icon: FaChartPie,
    link: "/deals",
    sentiment: "negative",
  },
];
