"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { updateEventInterest } from "@/actions/actions";

const ActionButtons = ({
  fromDetails,
  eventId,
  interested_ids,
  going_ids,
}: {
  fromDetails: boolean;
  eventId: string;
  interested_ids: string[];
  going_ids: string[];
}) => {
  const { user } = useAuth();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isInterested = user && interested_ids.includes(user.id!.toString());
  const isGoing = user && going_ids.includes(user.id!.toString());

  async function toggleInterest() {
    if (user) {
      await updateEventInterest(user.id!, eventId);
    } else {
      router.push("/login");
    }
  }

  const handleGoing = async () => {
    if (user) {
      router.push(`/payment/${eventId}`);
    } else {
      router.push("/login");
    }
  };

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
      <button
        onClick={handleGoing}
        className={` text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm hover:bg-[#3C3D3D] transition-colors active:translate-y-1 ${
          isGoing ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={user! && isGoing!}
      >
        Going
      </button>
    </div>
  );
};

export default ActionButtons;
