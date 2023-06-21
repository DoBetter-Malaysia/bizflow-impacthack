import { IconType } from "react-icons/lib";

export type Sentiment = "positive" | "negative" | "neutral";

export interface RecommendationCardv2 {
  icon: IconType;
  link: string;
  title: string;
  problem: string;
  solution: string;
  sentiment: Sentiment;
  numberOfRecommendations: number;
  ignoreSentiment?: boolean;
}
