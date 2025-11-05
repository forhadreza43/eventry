import PaymentForm from "@/components/payments/PaymentForm";
import { getEventById } from "@/db/queries";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const eventDoc = await getEventById(eventId);

  if (!eventDoc) {
    return {
      title: "Event not found",
      description: "The requested event could not be found.",
    };
  }
  return {
    title: `Payment | ${eventDoc.name}`,
    description: eventDoc.details,
    openGraph: {
      images: [eventDoc.imageUrl || ""],
    },
  };
}

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const event = await getEventById(eventId);

  if (!event) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl">Event not found</h2>
      </div>
    );
  }

  return (
    <section className="container mx-auto">
      <div className="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
        <h2 className="font-bold text-xl mb-8">Payment Details</h2>
        <PaymentForm eventId={eventId} event={event} />
      </div>
    </section>
  );
}
