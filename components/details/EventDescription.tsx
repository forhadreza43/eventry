import { IEvent } from "@/models/event-models";

export default async function EventDescription({ event }: { event: IEvent }) {
  const { details, swags } = await event;
  return (
    <div className="col-span-3">
      <div className="w-full h-full bg-[#242526] p-6 rounded-lg">
        <h2 className="font-bold text-2xl">Details</h2>
        <div className="my-2 text-[#AEAEAE] space-y-4 prose lg:prose-lg max-w-none">
          <p className="">{details}</p>
          <ul className="">
            {swags &&
              swags?.length > 0 &&
              swags?.map((swag, index) => <li key={index}>🎉{swag}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
