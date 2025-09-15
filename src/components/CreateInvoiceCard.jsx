import React from "react";
import { Plus } from "lucide-react";

export default function CreateInvoiceCard() {
  return (
    <div>
    <div className="bg-gray-100  h-52 w-96  justify-self-center mt-5  rounded-xl p-6 flex flex-col  items-center space-y-3 mb-4">
      <div className="w-14 h-14 bg-purple-200 rounded-full flex items-center justify-center">
        <Plus size={26} className="text-purple-700" />
      </div>
      <h2 className="text-purple-700 font-semibold">Create New Invoice</h2>
      <p className="text-gray-400 text-xs text-center">
        Start by creating and sending new invoice
      </p>
    </div>
      <p className="text-purple-700  text-center text-sm max-w-md mx-auto mb-2 ">Or Upload an existing invoice and set payment reminder</p>
    </div>
  );
}
