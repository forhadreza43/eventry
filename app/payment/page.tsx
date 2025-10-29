import PaymentForm from "@/components/payments/PaymentForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Payment Page",
  description: "Complete your payment for the event",
};

export default function PaymentPage() {
  return (
    <section className="container mx-auto">
      <div className="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
        <h2 className="font-bold text-xl mb-8">Payment Details</h2>
        <PaymentForm />
      </div>
    </section>
  );
}
