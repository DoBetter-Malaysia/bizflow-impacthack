import React from "react";
import RecommendationCard from "@/components/cards/RecommendationCard";
import { RECOMMENDATIONS, PROBLEMS } from "@/app/data/";
import { FiArrowDown, FiThumbsDown, FiThumbsUp } from "react-icons/fi";

const ArrowIcons = () => {
  return (
    <>
      <div className="col-span-1 flex justify-center">
        <FiArrowDown size={40} />
      </div>
      <div className="col-span-1 flex justify-center">
        <FiArrowDown size={40} />
      </div>
      <div className="col-span-1 flex justify-center">
        <FiArrowDown size={40} />
      </div>
    </>
  );
};

const Recommendation = () => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-lg bg-white px-12 py-8 shadow-md">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">
          <span className="text-[#004be0]">FlowAI </span> Recommendations
        </h2>
        <div className="mt-4 grid h-min w-full grid-cols-3 gap-4">
          <div className="col-span-3 flex justify-center">
            <h3 className="text-2xl font-semibold">
              Here Is What{" "}
              <span className="text-[#38a5ff]">FlowAI Analysed</span>
            </h3>
          </div>
          {PROBLEMS.map((item) => (
            <div className="col-span-1 text-[#004be0]" key={item.title}>
              <RecommendationCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                link={item.link}
                sentiment={item.sentiment}
                ignoreSentiment={false}
              />
            </div>
          ))}
          <ArrowIcons />
          <div className="col-span-3 mt-8 flex justify-center">
            <h3 className="text-2xl font-semibold">
              Here Is What{" "}
              <span className="text-[#004be0]">FlowAI Recommends</span>
            </h3>
          </div>
          {RECOMMENDATIONS.map((item) => (
            <div className="col-span-1 text-[#004be0]" key={item.title}>
              <RecommendationCard
                title={item.title}
                description={item.description}
                icon={item.icon}
                link={item.link}
                sentiment={item.sentiment}
                ignoreSentiment={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
