import EventDetails from "@/components/details/EventDetails";
import EventDetailsSkeleton from "@/components/skeleton/EventDetailsSkeleton";
import React, { Suspense } from "react";
import { getEventById } from "@/db/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const eventDoc = await getEventById(id);

  if (!eventDoc) {
    return {
      title: "Event not found",
      description: "The requested event could not be found.",
    };
  }
  return {
    title: eventDoc.name,
    description: eventDoc.details,
    openGraph: {
      images: [eventDoc.imageUrl || ""],
    },
  };
}

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // console.log(id);
  return (
    <Suspense fallback={<EventDetailsSkeleton />}>
      <EventDetails id={id} />
    </Suspense>
  );
}
