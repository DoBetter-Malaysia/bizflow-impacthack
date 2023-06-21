import React from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { MdTrendingFlat } from "react-icons/md";
import { DashboardCardProps } from "@/models/dashboardCard";
import { clsx } from "@mantine/core";

const DashboardCard = ({
  icon,
  title,
  subtitle,
  valueChange,
  changeType,
  changeMetric,
  isGood,
}: DashboardCardProps) => {
  return (
    <div className="bg-blue-white h-full w-full rounded-xl bg-white shadow-md outline outline-1 outline-gray-100">
      <div className="flex items-center px-4 py-6">
        <div className="grid w-full grid-cols-3 gap-1 ">
          <div
            className={clsx(
              "col-span-1 flex items-center justify-center"
              // {
              //   "text-green-500": isGood,
              //   "text-red-500": !isGood,
              // }
            )}
          >
            {icon({ size: 76 })}
          </div>
          <div className="col-span-2 grow py-2">
            <div className="flex flex-col">
              <h3
                className={clsx("text-xl font-bold", {
                  "text-green-500": isGood,
                  "text-red-500": !isGood,
                })}
              >
                {title}
              </h3>
              <h4 className="text-md text-gray-600">{subtitle}</h4>
              <div
                className={clsx("col-span-3 flex items-center justify-start", {
                  "text-gray-500": changeType === "None",
                  "text-green-500": isGood,
                  "text-red-500": !isGood,
                })}
              >
                {changeType === "None" && <MdTrendingFlat size={20} />}
                {isGood && <FiTrendingUp size={20} />}
                {!isGood && <FiTrendingDown size={20} />}
                <p className="pl-2 text-xs font-semibold">
                  {changeType === "None"
                    ? `No Change Since Last Month`
                    : `${valueChange}${changeMetric} ${changeType}`}
                  {/* {changeType !== "None" && (
                    <span className="text-gray-500"> Since last month</span>
                  )} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
