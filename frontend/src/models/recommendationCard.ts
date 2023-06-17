import { IconType } from "react-icons/lib";

export type Sentiment = "positive" | "negative" | "neutral";

export interface RecommendationCard {
  title: string;
  description: string;
  icon: IconType;
  link: string;
  sentiment: Sentiment;
}
