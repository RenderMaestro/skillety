import Menu from "@/components/menubar/menu";
import PaymentCard from "@/components/plans/payment-card";
import PaymentMethod from "@/components/plans/payment-method";
import PlanCard from "@/components/plans/plan-card";
import SearchBar from "@/components/searchbar/searchbar";
import paymentMethods from "@/components/plans/card";
import PlanUsage from "@/components/plans/plan-usage";
import { InvoiceTable } from "@/components/table/table";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <div className="flex max-w-[100rem] m-auto">
        <Menu />
        <div className="flex flex-col max-w-[100rem] m-2">
          <div className="w-full ml-6">
            <h1 className="text-[#333333] text-xl font-semibold leading-normal">Billing & Invoices</h1>
            <p className="text-[#333333]/50 text-sm font-normal leading-tight">
              Manage your billing and payment details.
            </p>
          </div>
          <div className="flex flex-col justify-between lg:justify-evenly lg:flex-row mt-2">
            <PlanCard />
            <div className="sm:my-0 my-4">
              <PaymentMethod>
                {paymentMethods.map((method, idx) => (
                  <PaymentCard method={method} key={idx} />
                ))}
              </PaymentMethod>
            </div>
          </div>
          <div>
            <PlanUsage />
            <InvoiceTable />
          </div>
        </div>
      </div>
    </div>
  );
}
