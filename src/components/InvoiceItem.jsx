import React from "react";

const statusColors = {
  Update: "bg-purple-100 text-purple-700",
  Unpaid: "bg-gray-200 text-gray-800",
  Disputed: "bg-red-100 text-red-700",
  Paid: "bg-green-100 text-green-700",
  Partially: "bg-yellow-100 text-yellow-700",
  Overdue: "bg-red-100 text-red-700",
  Awaited: "bg-yellow-100 text-yellow-700",
  Draft: "bg-gray-200 text-gray-800",
};

export default function InvoiceItem({ data }) {
  const statusClass = statusColors[data.status] || statusColors.Draft;

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm mb-3 max-w-md mx-auto">
      <div>
        <p className="font-semibold text-gray-900">{data.clientName}</p>
        <p className="text-xs text-gray-500">{data.amount}, Due: {data.dueDate}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClass}`}>
        {data.status}
      </span>
    </div>
  );
}
