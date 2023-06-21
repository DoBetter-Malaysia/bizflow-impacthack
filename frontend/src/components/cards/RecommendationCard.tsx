import { RecommendationCard, Sentiment } from "@/models/recommendationCard";
import { IconType } from "react-icons/lib";
import { clsx } from "@mantine/core";

const RecommendationCard = ({
  title,
  description,
  icon,
  link,
  sentiment,
  ignoreSentiment,
}: RecommendationCard) => {
  return (
    <div
      className={clsx(
        "h-full w-full rounded-lg p-4",
        // { "text-green-600": sentiment === "positive" && !ignoreSentiment },
        // { "text-red-600": sentiment === "negative" && !ignoreSentiment }
        { "text-[#38a5ff]": !ignoreSentiment },
        { "text-[#004be0]": ignoreSentiment }
      )}
    >
      <div className="flex flex-col items-center justify-center gap-4 align-middle">
        <div className="flex flex-col gap-4 px-4 py-0 ">
          <div className="flex items-center justify-center py-4 align-middle ">
            {icon({ size: 82 })}
          </div>
          <div>
            <h3 className="text-center text-xl font-bold">{title}</h3>
          </div>
          <div className="pb-2">
            <p className="text-md text-center text-gray-700">{description}</p>
          </div>
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

export default RecommendationCard;
