import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";
import EventListSkeleton from "@/components/skeleton/EventListSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="container mx-auto">
      <Header />
      <Suspense fallback={<EventListSkeleton />}>
        <EventList />
      </Suspense>
    </section>
  );
}
