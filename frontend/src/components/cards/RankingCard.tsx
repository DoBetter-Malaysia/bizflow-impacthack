import React from "react";

export type RankType = "Industry" | "Platform";
export interface RankingCardProps {
  rank: number;
  type: string;
  industry?: string;
}

const RankingCard = ({ rank, type, industry }: RankingCardProps) => {
  return (
    <div className="flex h-40 w-full items-center rounded-lg bg-white shadow-md">
      <div className="flex justify-start">
        <div className="h-28 w-3 rounded-br-lg rounded-tr-lg bg-[#004be0]" />
        <div className="pl-8"></div>
      </div>
    </div>
  );
};

export default RankingCard;
