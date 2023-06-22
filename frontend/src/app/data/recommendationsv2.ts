import { RecommendationCardv2 } from "@/models/recommendationCardv2";
import { FaBoxes, FaChartPie, FaPeopleArrows, FaWallet } from "react-icons/fa";

export const RECOMMENDATIONSV2: RecommendationCardv2[] = [
  {
    icon: FaWallet,
    link: "/consult",
    title: "Good Projected Revenue",
    problem:
      "Your revenue has been growing steadily for the past 3 quarters. It shows solid performance of your business.",
    solution:
      "Consider allocating funds for future marketing campaigns to enhance brand visibility and increase sales. Click here to find out more.",
    sentiment: "positive",
    numberOfRecommendations: 2,
  },
  // {
  //   icon: FaPeopleArrows,
  //   link: "/consult",
  //   title: "Focused Customer Segments",
  //   problem:
  //     "Your frequent visiting customers that generate the most sales are mainly from the Cheras and Ampang area.",
  //   solution:
  //     "Consider expanding your business to Bukit Jalil and Puchong areas as they show a high demand. Develop a strategic plan to establish a presence in the new market now!",
  //   sentiment: "positive",
  //   numberOfRecommendations: 4,
  // },
  {
    icon: FaBoxes,
    link: "/consult",
    title: "Overstocked Inventory",
    problem:
      "Cheddar, Mozeralla, and Parmesan cheese has been identified as an overstocked product category.",
    solution:
      "Consider creating new food items that revolve around cheese to attract more customers. Click here to find out more.",
    sentiment: "positive",
    numberOfRecommendations: 5,
  },
  {
    icon: FaChartPie,
    link: "/consult",
    title: "Low Profit Margin For Desserts",
    problem:
      "Banana Split, Chocolate Lava Cake, and Tiramisu have been identified as low profit margin products that just about breaks even with cost.",
    solution:
      "Consider increasing your prices, reducing costs, or innovate new menu items. Click here to find out our suggestions.",
    sentiment: "positive",
    numberOfRecommendations: 3,
  },
];
