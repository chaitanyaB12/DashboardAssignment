import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Header({ title, onBack }) {
  return (
    <div className="flex items-center justify-between bg-purple-300 sticky rounded-b-3xl top-0 z-10">
      <button onClick={onBack} className="p-4 ml-3 rounded hover:bg-purple-200 transition">
       <ArrowLeft className="float-left pt-1"/> Back 
      </button>
      <h1 className="text-lg pr-4 font-semibold">{title}</h1>
      <img
        src="https://images.unsplash.com/photo-1756672146911-d9925093e726?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOTh8fHxlbnwwfHx8fHw%3D"
        alt="User Avatar"
        className="w-10 h-10 rounded-full mr-4 border-2 border-purple-600"
      />
    </div>
  );
}
