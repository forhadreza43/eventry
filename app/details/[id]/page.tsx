import EventDetails from "@/components/details/EventDetails";
import EventDetailsSkeleton from "@/components/skeleton/EventDetailsSkeleton";
import React, { Suspense } from "react";

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
