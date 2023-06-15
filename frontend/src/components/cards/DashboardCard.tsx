import React from "react";
import { IconType } from "react-icons/lib";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { MdTrendingFlat } from "react-icons/md";
import { DashboardCardProps } from "@/models/dashboardCard";

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
    <div className="w-full rounded-xl bg-white drop-shadow-lg">
      <div className="flex items-center p-12">
        <div className="grid w-full grid-cols-3 gap-4 ">
          <div className=" col-span-1 flex items-center justify-center text-indigo-300">
            {icon({ size: 100 })}
          </div>
          <div className="col-span-2 grow py-2">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold">{title}</h3>
              <h4 className="text-lg text-gray-400">{subtitle}</h4>
            </div>
          </div>
          {changeType === "None" ? (
            <div className="col-span-3 flex items-center justify-center text-gray-400">
              <MdTrendingFlat size={20} />
              <p className="pl-4 font-semibold">
                {`No Change Since Last Month`}
              </p>
            </div>
          ) : isGood ? (
            <div className="col-span-3 flex items-center justify-center text-green-400">
              <FiTrendingUp size={20} />
              <p className="pl-4 font-semibold">
                {`${valueChange}${changeMetric} ${changeType} Since Last Month`}
              </p>
            </div>
          ) : (
            <div className="col-span-3 flex items-center justify-center text-red-400">
              <FiTrendingDown size={20} />
              <p className="pl-4 font-semibold">
                {`${valueChange}${changeMetric} ${changeType} Since Last Month`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
