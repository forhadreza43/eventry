import React from 'react'
import HeroSection from './HeroSection';
import EventDescription from './EventDescription';
import EventVenue from './EventVenue';
import { getEventById } from '@/db/queries';

export default async function EventDetails({id}: {id: string}) {
  const event = await getEventById(id);
  return (
    <>
      <HeroSection event={event} />
      <section className="container mx-auto">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDescription event={event} />
          <EventVenue event={event} />
        </div>
      </section>
    </>
  );
}
