import React from "react";
import EventCardSkeleton from "./EventCardSkeleton";

export default function EventListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <EventCardSkeleton key={index} />
      ))}
    </div>
  );
}
