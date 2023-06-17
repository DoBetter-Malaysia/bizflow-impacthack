import { RecommendationCard } from "@/models/recommendationCard";
import { FaWallet, FaUser, FaChartPie, FaBoxes } from "react-icons/fa";

export const RECOMMENDATIONS: RecommendationCard[] = [
  {
    title: "Projected Revenue Growth",
    description:
      "There will be a significant increase in your revenue for the next quarter. Want to allocate funds for marketing campaigns to enhance brand visibility?",
    icon: FaWallet,
    link: "/deals",
    sentiment: "positive",
  },
  {
    title: "Market Expansion Opportunity",
    description:
      "A promising opportunity for market expansion in a neighboring city with high demand for your products. Develop a strategic plan to establish a presence in the new market now!",
    icon: FaUser,
    link: "/deals",
    sentiment: "neutral",
  },
  {
    title: "Overstocked Inventory",
    description:
      "2 product categories have been identified for low profit margin. Explore various options of optimizing the supply chain to increase your profitability.",
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
