import React from "react";

function PaymentMethod({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-white rounded-xl shadow border border-[#333333]/25 p-6 flex flex-col ">
      {/* Header Section */}
      <header>
        <h2 className="text-[#333333] text-sm font-semibold font-['Poppins'] leading-snug">Payment method</h2>
        <p className="text-[#333333] text-xs font-normal font-['Poppins'] leading-none">
          Change how you pay for your plan.
        </p>
      </header>

      {/* Children Content */}
      <section>{children}</section>

      {/* Footer Section */}
      <footer className="flex flex-col md:flex-row justify-between items-center gap-4">
        <button className="text-[#d6615a] text-sm font-normal font-['Poppins']">Remove Payment Method</button>
        <button className="text-[#0a65cc] text-sm font-semibold font-['Poppins']">Add Payment Method</button>
      </footer>
    </div>
  );
}

export default PaymentMethod;
