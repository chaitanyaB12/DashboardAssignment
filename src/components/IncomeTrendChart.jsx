import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label
} from "recharts";

export default function IncomeTrendChart({ data }) {
  return (
    <div className="bg-white rounded-xl p-6 max-w-md mx-auto mb-6">
      <h3 className="text-md font-semibold text-gray-800 mb-4">Income Trend</h3>
      <p className="text-xs text-gray-500 mb-6">
        Your monthly income and growth for the last 6 months.
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data} margin={{ top: 10, right: 40, bottom: 40, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" interval={0} tick={{ fontSize: 12 }}>
            <Label
              value="Months"
              offset={-25}
              position="insideBottom"
              style={{ textAnchor: "middle", fill: "#4B5563", fontWeight: "bold" }}
            />
          </XAxis>

          <YAxis
            yAxisId="left"
            orientation="left"
            tickFormatter={(value) => `$${value / 1000}k`}
            tick={{ fontSize: 12 }}
            label={{
              angle: -90,
              position: "insideLeft",
              fill: "#6B7280",
              fontWeight: "bold",
              offset: 10
            }}
          />

          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[-100, 100]}
            tickFormatter={(value) => `${value}%`}
            tick={{ fontSize: 12 }}
            label={{
              angle: 90,
              position: "insideRight",
              fill: "#6B7280",
              fontWeight: "bold",
              offset: 10
            }}
          />

          <Tooltip formatter={(value, name) => {
              if (name === 'income') return `$${value.toLocaleString()}`;
              return `${value}%`;
            }} />

          <Legend verticalAlign="top" height={36} />

          <Bar yAxisId="left" dataKey="income" name="Income" barSize={30} fill="#8B5CF6" />
          <Line yAxisId="right" type="monotone" dataKey="growth" stroke="#EF4444" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} name="Growth (%)" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
