import { RecommendationCard } from "@/models/recommendationCard";
import {
  FaWallet,
  FaUser,
  FaChartPie,
  FaBoxes,
  FaPeopleArrows,
  FaChartLine,
} from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { HiPresentationChartLine } from "react-icons/hi";

export const PROBLEMS: RecommendationCard[] = [
  {
    title: "Good Revenue Growth",
    description:
      "Your revenue has been growing steadily for the past 3 quarters. It shows solid performance of your business. Keep up the good work!",
    icon: FaWallet,
    link: "/deals",
    sentiment: "positive",
    ignoreSentiment: false,
  },
  {
    title: "Focused Customer Segments",
    description:
      "Your frequent visiting customers that generate the most sales are mainly from the Cheras and Ampang area.",
    icon: FaUser,
    link: "/deals",
    sentiment: "positive",
    ignoreSentiment: false,
  },
  {
    title: "Overstocked Inventory",
    description:
      "Cheese has been identified as an overstocked product category. This includes Cheddar, Mozzarella, and Parmesan.",
    icon: FaBoxes,
    link: "/deals",
    sentiment: "negative",
    ignoreSentiment: false,
  },
  // {
  //   title: "Low Profit Margin",
  //   description:
  //     "Your profit margin is low. Consider increasing your prices or reducing your costs. Click here to find out our suggestions.",
  //   icon: FaChartPie,
  //   link: "/deals",
  //   sentiment: "negative",
  //  ignoreSentiment: false
  // },
];

export const RECOMMENDATIONS: RecommendationCard[] = [
  {
    title: "Reinvest in Marketing Campaigns",
    description:
      "Consider allocating funds for future marketing campaigns to enhance brand visibility and increase sales. Click here to find out more.",
    icon: ImPriceTags,
    link: "/deals",
    sentiment: "positive",
    ignoreSentiment: true,
  },
  {
    title: "Market Expansion Opportunity",
    description:
      "Consider expanding your business to Bukit Jalil and Puchong areas as they show a high demand. Develop a strategic plan to establish a presence in the new market now!",
    icon: FaPeopleArrows,
    link: "/deals",
    sentiment: "neutral",
    ignoreSentiment: true,
  },
  {
    title: "Promotional Food Items",
    description:
      "Consider creating new food items that revolve around cheese to attract more customers. Click here to find out more.",
    icon: FaChartLine,
    link: "/deals",
    sentiment: "negative",
    ignoreSentiment: true,
  },
  // {
  //   title: "Low Profit Margin",
  //   description:
  //     "Your profit margin is low. Consider increasing your prices or reducing your costs. Click here to find out our suggestions.",
  //   icon: FaChartPie,
  //   link: "/deals",
  //   sentiment: "negative",
  //   ignoreSentiment: true
  // },
];
