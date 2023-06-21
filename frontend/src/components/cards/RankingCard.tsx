import React from "react";
import { clsx } from "@mantine/core";

export interface RankingCardProps {
  rank: number;
  type: string;
  isRank: boolean;
}

const RankingCard = ({ rank, type, isRank }: RankingCardProps) => {
  return (
    <div className="flex h-28 w-full items-center rounded-lg bg-white shadow-md">
      <div className="flex items-center justify-start">
        <div
          className={clsx(
            "h-16 w-3 rounded-br-lg rounded-tr-lg",
            { "bg-[#38a5ff]": isRank },
            { "bg-[#004be0]": !isRank }
          )}
        />
        <div className="flex flex-col space-y-2 pl-8">
          <div className=" flex flex-col text-black">
            <div className="flex items-end">
              {isRank && <span className="mr-2 text-sm">#</span>}
              <span className="text-3xl font-semibold">{rank}</span>
            </div>
            <span className="text-sm text-gray-600">{type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingCard;
