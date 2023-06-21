import React from "react";
import RecommendationCardv2 from "@/components/cards/RecommendationCardv2";
import { RECOMMENDATIONSV2 } from "@/app/data/";
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
    <div className="flex w-full flex-col gap-6 rounded-lg ">
      <div className="flex flex-col gap-4">
        <div className="mt-4 grid h-min w-full grid-cols-3 gap-4">
          {RECOMMENDATIONSV2.map((item) => (
            <div className="col-span-1 text-[#004be0]" key={item.problem}>
              <RecommendationCardv2
                icon={item.icon}
                link={item.link}
                title={item.title}
                sentiment={item.sentiment}
                problem={item.problem}
                solution={item.solution}
                numberOfRecommendations={item.numberOfRecommendations}
                ignoreSentiment={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
