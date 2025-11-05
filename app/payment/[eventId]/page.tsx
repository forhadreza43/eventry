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
  const eventDoc = await getEventById(eventId);

  if (!eventDoc) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl">Event not found</h2>
      </div>
    );
  }

  // Serialize the mongoose document to a plain object
  const event = {
    id: eventDoc._id.toString(),
    name: eventDoc.name,
    details: eventDoc.details,
    location: eventDoc.location,
    imageUrl: eventDoc.imageUrl,
    interested_ids: eventDoc.interested_ids?.map((id: { toString: () => string }) => id.toString()) || [],
    going_ids: eventDoc.going_ids?.map((id: { toString: () => string }) => id.toString()) || [],
    swags: eventDoc.swags || [],
  };

  return (
    <section className="container mx-auto">
      <div className="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
        <h2 className="font-bold text-xl mb-8">Payment Details</h2>
        <PaymentForm eventId={eventId} event={event} />
      </div>
    </section>
  );
}
