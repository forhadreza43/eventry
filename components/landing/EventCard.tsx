import Image from "next/image";
import React from "react";
import ActionButtons from "../ActionButtons";
import Link from "next/link";
import EventSchemaScript from "../meta/EventSchemaScript";
import { SerializedEvent } from "@/definition/definition";
import { getBlurData } from "@/utils/blur-generator";

export default async function EventCard({ event }: { event: SerializedEvent }) {
  const { imageUrl, name, location, interested_ids, going_ids, id } =
    await event;
    const { base64 } = await getBlurData(imageUrl);
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
          blurDataURL={base64}
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
