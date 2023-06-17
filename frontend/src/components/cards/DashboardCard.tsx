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
    <div className="bg-blue-white h-full w-full rounded-xl bg-blue-300 shadow-sm">
      <div className="flex items-center p-8">
        <div className="grid w-full grid-cols-3 gap-4 ">
          <div className=" col-span-1 flex items-center justify-center text-gray-800">
            {icon({ size: 80 })}
          </div>
          <div className="col-span-2 grow py-2">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold">{title}</h3>
              <h4 className="text-lg text-gray-800">{subtitle}</h4>

              {changeType === "None" ? (
                <div className="col-span-3 flex items-center justify-start text-gray-800">
                  <MdTrendingFlat size={20} />
                  <p className="pl-2 font-semibold">
                    {`No Change Since Last Month`}
                  </p>
                </div>
              ) : isGood ? (
                <div className="col-span-3 flex items-center justify-start text-green-600">
                  <FiTrendingUp size={20} />
                  <p className="pl-2 font-semibold">
                    {`${valueChange}${changeMetric} ${changeType} Since Last Month`}
                  </p>
                </div>
              ) : (
                <div className="col-span-3 flex items-center justify-start text-red-600">
                  <FiTrendingDown size={20} />
                  <p className="pl-2 font-semibold">
                    {`${valueChange}${changeMetric} ${changeType} Since Last Month`}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
