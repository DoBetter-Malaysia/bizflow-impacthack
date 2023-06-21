import { RecommendationCardv2, Sentiment } from "@/models/recommendationCardv2";
import { IconType } from "react-icons/lib";
import { clsx, Divider } from "@mantine/core";

const RecommendationCardv2 = ({
  icon,
  link,
  title,
  problem,
  solution,
  sentiment,
  ignoreSentiment,
  numberOfRecommendations,
}: RecommendationCardv2) => {
  return (
    <div
      className={clsx(
        "h-full w-full rounded-lg bg-white p-4 text-[#004be0] shadow-md"
        // { "text-green-600": sentiment === "positive" && !ignoreSentiment },
        // { "text-red-600": sentiment === "negative" && !ignoreSentiment }
        // { "text-[#38a5ff]": !ignoreSentiment },
        // { "text-[#004be0]": ignoreSentiment }
      )}
    >
      <div className="flex h-full flex-col justify-start gap-4 px-4 py-2">
        <div className="flex items-center gap-8">
          {icon({ size: 40 })}
          <span className="text-lg font-semibold">{title}</span>
        </div>
        <div>
          <span className="text-justify text-sm font-semibold text-black">
            {problem}
          </span>
        </div>
        <div className="flex-1">
          <span className="text-justify text-sm font-medium text-gray-600">
            {solution}
          </span>
        </div>
        <div className="py-2">
          <Divider />
        </div>
        <div className="flex justify-center">
          <span className="font-normal text-[#004be0]">
            VIEW {numberOfRecommendations} RECOMMENDATIONS
          </span>
        </div>
      </div>
    </div>
  );
};

const ColoredIcon = ({
  sentiment,
  icon,
}: {
  sentiment: Sentiment;
  icon: IconType;
}) => {
  let className: string = "flex items-center justify-center align-middle ";
  if (sentiment === "positive") {
    className += "text-green-400";
  } else if (sentiment === "negative") {
    className += "text-red-400";
  } else {
    className += "text-orange-400";
  }

  return <div className={className}>{icon({ size: 80 })}</div>;
};

export default RecommendationCardv2;
