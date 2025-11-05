import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";
import EventListSkeleton from "@/components/skeleton/EventListSkeleton";
import { Suspense } from "react";

export default async function Home(props: { searchParams?: Promise<{ query?: string }> }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  return (
    <section className="container mx-auto">
      <Header />
      <Suspense fallback={<EventListSkeleton />}>
        <EventList searchParams={query} />
      </Suspense>
    </section>
  );
}
