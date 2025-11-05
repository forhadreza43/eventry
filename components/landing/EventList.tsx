import React from "react";
import EventCard from "./EventCard";
import { getAllEvents } from "@/db/queries";
import { SerializedEvent } from "@/definition/definition";

export default async function EventList({ searchParams }: { searchParams: string }) {
  // console.log(`Search Query: ${searchParams}`);
  const events: SerializedEvent[] = await getAllEvents(searchParams);

  if (events.length === 0) {
    return (
      <div className="text-center py-12 mt-10">
        <h2 className="text-lg font-semibold">No events found</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
