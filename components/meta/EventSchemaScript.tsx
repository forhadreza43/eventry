import { SerializedEvent } from "@/definition/definition";

const EventSchemaScript = ({ event }: { event: SerializedEvent }) => {
  const eventName = encodeURIComponent(event?.name);

  const formattedData = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: eventName,
    startDate: new Date(),
    endDate: new Date(),
    description: event?.details,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event?.location,
    },
    image: [event?.imageUrl],
    organizer: {
      "@type": "Organization",
      name: "Reza",
      url: "https://forhadreza.vercel.app/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(formattedData),
        }}
      />
    </>
  );
};

export default EventSchemaScript;
