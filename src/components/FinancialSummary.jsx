import React from "react";

export default function FinancialSummary({ totalEarnings, paymentAwaited, paymentOverdue }) {
  return (
    <div className="bg-white rounded-xl p-6 max-w-md mx-auto mb-6">
        <div>Total Earnings</div>
      <div className="text-xl font-bold text-purple-700 mb-4">{totalEarnings}</div>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div className="bg-purple-50 p-3 rounded">
          <div className="font-semibold">{paymentAwaited}</div>
          <div>Payment Awaited</div>
        </div>
        <div className="bg-purple-50 p-3 rounded">
          <div className="font-semibold">{paymentOverdue}</div>
          <div>Payment Overdue</div>
        </div>
      </div>
    </div>
  );
}
