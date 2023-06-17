import React from "react";
import RecommendationCard from "@/components/cards/RecommendationCard";
import ChatAccordion from "@/components/accordion/ChatAccordion";
import { RECOMMENDATIONS } from "@/app/data/";

const Recommendation = () => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-lg bg-white p-12 shadow-lg">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">FlowAI Recommendations</h2>
        <div className="grid h-min w-full grid-cols-4 gap-8">
          {RECOMMENDATIONS.map((item) => (
            <div className="col-span-1" key={item.title}>
              <RecommendationCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                link={item.link}
                sentiment={item.sentiment}
              />
            </div>
          ))}
        </div>
        {/* <div className="w-full">
          <ChatAccordion />
        </div> */}
      </div>
    </div>
  );
};

export default Recommendation;
