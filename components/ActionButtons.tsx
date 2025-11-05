"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { updateEventInterest } from "@/actions/actions";

const ActionButtons = ({
  fromDetails,
  eventId,
  interested_ids,
}: {
  fromDetails: boolean;
  eventId: string;
  interested_ids: string[];
}) => {
  const { user } = useAuth();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function toggleInterest() {
    if (user) {
      await updateEventInterest(user.id!, eventId);
      router.refresh();
    } else {
      router.push("/login");
    }
  }

  const handleGoing = async () => {
    if (user) {
      router.push("/payment")
    }
    else {
      router.push("/login");
    }
  }

  const isInterested = user && interested_ids.includes(user.id!.toString());

  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      <button
        className={`w-full hover:bg-indigo-800  ${
          isInterested
            ? "bg-indigo-800 border-indigo-700"
            : "bg-[#464849] border-[#5F5F5F]/50"
        } `}
        onClick={() => startTransition(() => toggleInterest())}
      >
        {isPending ? "Processing..." : "Interested"}
      </button>
      <button onClick={handleGoing} className=" text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1">
        Going
      </button>
    </div>
  );
};

export default ActionButtons;
