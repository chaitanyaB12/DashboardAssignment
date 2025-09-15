import React from "react";
import InvoiceItem from "./InvoiceItem";

export default function InvoiceList({ invoices }) {
  return (
    <div className="mb-6">
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} data={invoice} />
      ))}
    </div>
  );
}
