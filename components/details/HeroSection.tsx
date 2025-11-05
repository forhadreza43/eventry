import Image from "next/image";
import ActionButtons from "../ActionButtons";
import { SerializedEvent } from "@/definition/definition";
import { getBlurData } from "@/utils/blur-generator";

const HeroSection = async ({event}:{event: SerializedEvent}) => {
  const { base64 } = await getBlurData(event?.imageUrl);
  return (
    <section className="container mx-auto">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={event?.imageUrl}
          alt="Event 1"
          className="h-[450px] mx-auto object-cover"
          width={1200}
          height={450}
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>

      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{event?.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">
            {event?.location}
          </p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{event?.interested_ids?.length} Interested</span>
            <span className="mx-2">|</span>
            <span>{event?.going_ids.length} Going</span>
          </div>
        </div>

        <ActionButtons fromDetails={true} eventId={event?.id} interested_ids={event?.interested_ids} going_ids={event?.going_ids} />
      </div>
    </section>
  );
};

export default HeroSection;
