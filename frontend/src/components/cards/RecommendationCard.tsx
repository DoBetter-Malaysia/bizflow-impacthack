import { RecommendationCard, Sentiment } from "@/models/recommendationCard";
import { IconType } from "react-icons/lib";
import { clsx } from "@mantine/core";

const RecommendationCard = ({
  title,
  description,
  icon,
  link,
  sentiment,
}: RecommendationCard) => {
  return (
    <div
      className={clsx(
        "h-full w-full rounded-lg",
        { "bg-orange-300": sentiment === "neutral" },
        { "bg-green-300": sentiment === "positive" },
        { "bg-red-300": sentiment === "negative" }
      )}
    >
      <div className="flex flex-col items-center justify-center gap-4 align-middle">
        <div className="flex flex-col gap-4 p-4 text-gray-800">
          <div className="flex items-center justify-center py-4 align-middle">
            {icon({ size: 80 })}
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">{title}</h3>
          </div>
          <div className="pb-2">
            <p className="text-center text-sm text-gray-600">{description}</p>
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
