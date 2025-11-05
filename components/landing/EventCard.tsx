import Image from "next/image";
import React from "react";
import ActionButtons from "../ActionButtons";
import Link from "next/link";
import EventSchemaScript from "../meta/EventSchemaScript";
import { SerializedEvent } from "@/definition/definition";

export default async function EventCard({ event }: { event: SerializedEvent }) {
  const { imageUrl, name, location, interested_ids, going_ids, id } =
    await event;
  return (
    <div className="overflow-hidden rounded-md bg-[#242526] flex flex-col justify-between">
      <EventSchemaScript event={await event} />
      <div>
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={500}
          loading="lazy"
          className="w-full"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHy4lJSAqLiswMy0rLy0xNzc4MS4/RUFEWl1hXV5qcGNwdnhsjY2Q2cDf4Wz/2wBDARUXFygdISAcICBshWRkZGVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="p-3">
          <div>
            <Link href={`/details/${id}`} className="font-bold text-lg">
              {name}
            </Link>
            <p className="text-[#9C9C9C] text-sm mt-1">{location}</p>
            <div className="text-[#737373] text-sm mt-1">
              <span>{interested_ids.length} Interested</span>
              <span>|</span>
              <span>{going_ids.length} Going</span>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="p-3">
        <ActionButtons
          fromDetails={false}
          eventId={id.toString()}
          interested_ids={interested_ids}
          going_ids={going_ids}
        />
      </div>
    </div>
  );
}
