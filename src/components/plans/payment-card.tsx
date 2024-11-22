import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { PaymentMethod } from "./card";

function PaymentCard({ method }: { method: PaymentMethod }) {
  return (
    <Card
      key={method.id}
      className={`w-full rounded-xl shadow border ${
        method?.isSelected ? "border-[#0a65cc] bg-[#0a65cc]/10" : "border-[#333333]/25"
      } my-4 p-4 flex flex-col md:flex-row md:items-start gap-4`}
    >
      {/* Checkbox */}
      <div className="flex-shrink-0 hidden md:inline">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-sm border border-[#333333]/50 text-[#0a65cc] focus:ring-[#0a65cc] focus:ring-2"
          aria-label={`Select payment method for ${method?.cardType}`}
        />
      </div>

      {/* Card Icon */}
      <div className="flex items-center justify-center w-[50px] sm:w-[66px] sm:h-[34px] bg-white rounded border border-[#333333]/10">
        <img
          src={`/${method.cardType.toLowerCase()}.svg`} 
          alt={method.cardType}
          className="max-h-full"
        />
      </div>

      {/* Card Details */}
      <div className="flex flex-col flex-grow">
        <CardTitle className="text-[#333333] text-xs font-medium font-['Poppins']">
          {method.cardType} {method.cardNumber}
        </CardTitle>
        <CardDescription className="text-[#333333]/50 text-xs font-normal font-['Poppins']">
          Expiry {method.expiry}
        </CardDescription>
        <CardDescription className="text-[#333333]/50 text-xs font-normal font-['Poppins'] mt-5">
          {method.email}
        </CardDescription>
      </div>

      {/* Status Badge */}
      {method.status && (
        <div
          className={`flex items-center justify-center px-3 py-2 rounded ${
            method.statusType === "success"
              ? "bg-[#ebf9ef] text-[#04962e]"
              : method.statusType === "error"
              ? "bg-red-100 text-red-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <span className="text-xs font-medium font-['Poppins']">{method.status}</span>
        </div>
      )}
    </Card>
  );
}

export default PaymentCard;
