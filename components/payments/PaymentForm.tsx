"use client";
import { addToGoing } from "@/actions/actions";
import { useAuth } from "@/hooks/useAuth";
import { SerializedEvent } from "@/definition/definition";
import { useTransition } from "react";

const PaymentForm = ({
  eventId,
  event,
}: {
  eventId: string;
  event: SerializedEvent;
}) => {
  const { user } = useAuth();
  const isGoing = user && event.going_ids.includes(user.id!);
  const [isPending, startTransition] = useTransition();
  return (
    <form action={() => startTransition(() => addToGoing(user!, eventId))}>
      <div className="my-4 space-y-2">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        />
      </div>
      <div className="my-4 space-y-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        />
      </div>
      <div className="my-4 space-y-2">
        <label htmlFor="card" className="block">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        />
      </div>
      <div className="my-4 space-y-2">
        <label htmlFor="expiry" className="block">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiry"
          className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        />
      </div>
      <div className="my-4 space-y-2">
        <label htmlFor="cvv" className="block">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        />
      </div>
      <button
        type="submit"
        className={`w-full my-8 bg-indigo-600 hover:bg-indigo-800 border border-indigo-800 py-2 rounded-md ${
          isGoing ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={isGoing!}
      >
        {isPending ? "Processing..." : isGoing ? "Already Going" : "Pay Now"}
      </button>
    </form>
  );
};

export default PaymentForm;
