import React, { useState } from "react";
import { Calendar, Crown } from "lucide-react";


export default function TimeSelector() {
  const [selected, setSelected] = useState("3months");
  const options = [
    { id: "1month", label: "1 Month"},
    { id: "3months", label: "3 Months" , icon: <Crown size={12} className="inline ml-1 text-black-100" /> },
    { id: "1year", label: "1 Year" },
  ];

  return (
    <div className="bg-white rounded-lg border border-purple-300 w-full sm:max-w-md mx-auto p-2 sm:p-4 mb-6">
      <div className="flex flex-wrap items-center text-xs text-gray-400">
        <div className="flex space-x-2 flex-wrap">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`px-3 py-2 rounded-full text-xs font-medium ${
                selected === opt.id ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-600"
              } flex items-center mb-2`}
            >
              {opt.label} {opt.icon}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center space-x-1 p-1 bg-gray-100 text-gray-400 rounded cursor-pointer mt-2 sm:mt-0">
          <Calendar size={14} />
          <span>Custom</span>
        </div>
      </div>
    </div>
  );
}