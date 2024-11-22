import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function InvoiceTable() {
  const invoices = [
    {
      id: 1,
      name: "Invoice #007 - Dec 2022",
      status: "Paid",
      date: "Dec 1, 2022",
      amount: "USD $1000",
      plan: "Basic Plan",
    },
    {
      id: 2,
      name: "Invoice #008 - Dec 2022",
      status: "Due",
      date: "Dec 1, 2022",
      amount: "USD $1000",
      plan: "Basic Plan",
    },
    {
      id: 3,
      name: "Invoice #007 - Dec 2022",
      status: "Paid",
      date: "Dec 1, 2022",
      amount: "USD $1000",
      plan: "Basic Plan",
    },
    {
      id: 4,
      name: "Invoice #008 - Dec 2022",
      status: "Due",
      date: "Dec 1, 2022",
      amount: "USD $1000",
      plan: "Basic Plan",
    },
    {
      id: 5,
      name: "Invoice #007 - Dec 2022",
      status: "Paid",
      date: "Dec 1, 2022",
      amount: "USD $1000",
      plan: "Basic Plan",
    },
    {
      id: 6,
      name: "Invoice #008 - Dec 2022",
      status: "Due",
      date: "Dec 1, 2022",
      amount: "USD $1000",
      plan: "Basic Plan",
    },
    {
      id: 7,
      name: "Invoice #007 - Dec 2022",
      status: "Paid",
      date: "Dec 1, 2022",
      amount: "USD $1000",
      plan: "Basic Plan",
    },
    {
      id: 8,
      name: "Invoice #008 - Dec 2022",
      status: "Due",
      date: "Dec 1, 2022",
      amount: "USD $1000",
      plan: "Basic Plan",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 mt-8 ">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Latest Invoices</h2>
          <p className="text-sm text-gray-500">Download your previous plan receipts and usage details.</p>
        </div>
        <Button variant="default" className=" bg-[#0a65cc] text-white">
          <img src="/download-w.svg" alt="download" className="w-6 h-6" />
          Download All
        </Button>
      </div>

      <div className="hidden md:inline w-full overflow-x-auto">
        <table className="w-full border-collapse border-spacing-0 border rounded-lg ">
          <thead className="border-b ">
            <tr>
              <th className="py-2 px-4 text-left">
                <Checkbox className="border-neutral-200" />
              </th>
              <th className="py-2 px-4 text-left text-[#333333] text-base font-semibold">Invoice</th>
              <th className="py-2 px-4 text-left text-[#333333] text-base font-semibold">Status</th>
              <th className="py-2 px-4 text-left text-[#333333] text-base font-semibold">Payment Date</th>
              <th className="py-2 px-4 text-left text-[#333333] text-base font-semibold">Amount</th>
              <th className="py-2 px-4 text-left text-[#333333] text-base font-semibold">Plan</th>
              <th className="py-2 px-4 text-left text-[#333333] text-base font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b text-[#333333] text-base font-normal">
                <td className="py-4 px-4">
                  <Checkbox className="border-neutral-200" />
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <img src="/pdf.svg" alt="pdf" className="w-8 h-8" />
                    <p className="text-[#333333] text-base font-normal">{invoice.name}</p>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge
                    className={
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-700 text-xs font-medium shadow-none"
                        : "bg-red-100 text-red-700 text-xs font-medium shadow-none"
                    }
                  >
                    {invoice.status}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-[#333333] text-base font-normal">{invoice.date}</td>
                <td className="py-4 px-4 text-[#333333] text-base font-normal">{invoice.amount}</td>
                <td className="py-4 px-4 text-[#333333] text-base font-normal">{invoice.plan}</td>
                <td className="py-4 px-4 text-[#333333] text-base font-normal">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <img src="/download.svg" alt="download" className="w-6 h-6" />
                    <span>Download</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="inline md:hidden w-full space-y-4">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex flex-col border rounded-lg p-4 shadow-sm space-y-4 md:space-y-0 md:grid md:grid-cols-6 md:gap-4"
          >
            {/* Checkbox */}
            <div className="flex items-center flex-row md:col-span-1">
              <Checkbox className="border-neutral-200" />

              {/* Invoice Details */}
              <div className="flex items-center space-x-2 md:col-span-2">
                <img src="/pdf.svg" alt="pdf" className="w-8 h-8" />
                <p className="text-[#333333] text-base font-normal">{invoice.name}</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-start md:justify-start md:col-span-1">
                <Badge
                  className={
                    invoice.status === "Paid"
                      ? "bg-green-100 text-green-700 text-xs font-medium shadow-none"
                      : "bg-red-100 text-red-700 text-xs font-medium shadow-none"
                  }
                >
                  {invoice.status}
                </Badge>

                <div>
                  <p className="text-[#333333] text-base font-normal my-2">{invoice.amount}</p>
                </div>
              </div>

              {/* Amount and Plan */}
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col md:items-start md:col-span-1">
                  <p className="text-[#333333] text-base font-normal">{invoice.date}</p>
                  <p className="text-[#333333] text-base font-normal">{invoice.plan}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-start md:justify-end md:col-span-1">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <img src="/download.svg" alt="download" className="w-4 h-4" />
                    <span className="text-xs text-[#0A65CC]">Download</span>
                  </Button>
                </div>
              </div>
            </div>
            {/* Status */}
          </div>
        ))}
      </div>
    </div>
  );
}
