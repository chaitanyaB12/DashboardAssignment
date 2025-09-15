import React from "react";
import Header from "./components/Header";
import CreateInvoiceCard from "./components/CreateInvoiceCard";
import TimeSelector from "./components/TimeSelector";
import FinancialSummary from "./components/FinancialSummary";
import IncomeTrendChart from "./components/IncomeTrendChart";
import InvoiceList from "./components/InvoiceList";
import Footer from "./components/Footer";


const financialData = {
  totalEarnings: "$1,25,000",
  paymentAwaited: "$25,000",
  paymentOverdue: "$25,000",
};

const chartData = [
  { month: "Jan", income: 3000, growth: 5 },
  { month: "Feb", income: 4200, growth: 40 },
  { month: "Mar", income: 3800, growth: -10 },
  { month: "Apr", income: 5200, growth: 37 },
  { month: "May", income: 6100, growth: 17 },
  { month: "Jun", income: 4800, growth: -21 },

];

const invoices = [
  { id: 1, clientName: "Client Name", amount: "₹1,25,000", dueDate: "2024-06-15", status: "Update" },
  { id: 2, clientName: "Client Name", amount: "₹1,25,000", dueDate: "2024-06-15", status: "Unpaid" },
  { id: 3, clientName: "Income Trend", amount: "₹1,25,000", dueDate: "2024-06-15", status: "Disputed" },
  { id: 4, clientName: "Income Trend", amount: "₹1,25,000", dueDate: "2024-06-15", status: "Paid" },
  { id: 5, clientName: "Income Trend", amount: "₹1,25,000", dueDate: "2024-06-15", status: "Partially" },
  { id: 6, clientName: "Income Trend", amount: "₹1,25,000", dueDate: "2024-06-15", status: "Paid" },
  { id: 7, clientName: "Income Trend", amount: "₹1,25,000", dueDate: "2024-06-15", status: "Overdue" },
  { id: 8, clientName: "Income Trend", amount: "₹1,25,000", dueDate: "2024-06-15", status: "Awaited" },
  { id: 9, clientName: "Income Trend", amount: "₹1,25,000", dueDate: "2024-06-15", status: "Draft" },
  { id: 10, clientName: "Income Trend", amount: "₹1,25,000", dueDate: "2024-06-15", status: "Paid" },
];

export default function App() {
  return (
    <div className="min-h-screen  bg-purple-300">
      <Header title="Dashboard" onBack={() => alert("Back clicked")} />
        <div className=" bg-white w-full min-h-screen rounded-t-4xl  shadow-lg pt-6 ">
          <CreateInvoiceCard />
          <TimeSelector />
          <FinancialSummary {...financialData} />
          <IncomeTrendChart data={chartData} />
          <InvoiceList invoices={invoices} />
          <Footer/>
          </div>  
        </div>
      
  );
}
