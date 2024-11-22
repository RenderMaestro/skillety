import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Modal } from "../modal/modal";

function PlanCard() {
  return (
    <div>
      <Card className="w-full h-full sm:w-[664px] sm:h-[239px] bg-white rounded-xl shadow border border-[#333333]/25 mr-4">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center text-[#333333] text-sm font-semibold leading-snug">
                <span>Basic Plan</span>
                <div className="px-3 py-1 bg-[#ebf9ef] rounded flex items-center ml-4">
                  <span className="text-[#04962e] text-xs font-medium">Monthly</span>
                </div>
              </CardTitle>
              <CardDescription className="text-[#333333] text-xs font-normal leading-none mt-2">
                Our most popular plan for small teams.
              </CardDescription>
            </div>
            <div className=" hidden sm:flex sm:flex-row sm:items-end">
              <div className="text-[#333333] text-4xl font-semibold">$9,999</div>
              <div className="text-[#333333] text-xs font-normal leading-none mb-2">per month</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-between mt-6">
            <div className="flex items-start gap-4 my-2">
              <div className="text-[#333333] text-base font-semibold leading-none">350 of 600 CV</div>
            </div>
            <div
              className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                style={{ width: "25%" }}
              ></div>
            </div>
            <div className="sm:hidden flex flex-row items-end my-3">
              <div className="text-[#333333] text-4xl font-semibold">$9,999</div>
              <div className="text-[#333333] text-xs font-normal leading-none mb-2">per month</div>
            </div>
          </div>
        </CardContent>
        <div className="w-full border-t border-[#333333]/25 mt-6"></div>
        <div className="flex justify-end items-center gap-8">
          <button className="text-[#d6615a] text-sm font-normal m-2">Cancel Subscription</button>
          <Modal />
          
        </div>
      </Card>
    </div>
  );
}

export default PlanCard;
