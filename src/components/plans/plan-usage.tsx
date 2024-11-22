import React from "react";
import { plansUsage } from "./card";

function PlanUsage() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header */}
      <h2 className="text-[#333333] text-xl font-semibold font-['Poppins'] leading-normal">Plan usage</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plansUsage.map((plan, index) => (
          <div key={index} className="p-4 bg-white rounded-lg flex flex-col gap-2">
            <div className="flex justify-between">
              <h3 className="text-[#333333]/75 text-base font-normal font-['Poppins']">{plan.title}</h3>
              <p className="text-[#333333] text-base font-semibold font-['Poppins']">
                {plan.used}/{plan.total} used
              </p>
            </div>
            <div
              className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
              role="progressbar"
              aria-valuenow={plan.progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                style={{ width: `${plan.progress}%` }}
              ></div>
            </div>
            <div className="flex">
              <img src="/star.svg" alt="star" className="w-3 h-3 mr-2" />
              <p className="text-[#0a65cc] text-sm font-normal font-['Poppins']">{plan.upgradeMessage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cards */}
    </div>
  );
}

export default PlanUsage;
