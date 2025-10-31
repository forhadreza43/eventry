"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { updateInterest } from "@/actions/actions";

const ActionButtons = ({ fromDetails, eventId }: { fromDetails: boolean, eventId: string }) => {
  const { user } = useAuth();
  const router = useRouter();

  const handleInterest = async() => {
    if (!user) {
      router.push("/login"); 
    } else {
      await updateInterest(user.id!, eventId);
      alert("Thank you for your interest!");
    }
  };
  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      <button
        className="w-full bg-indigo-600 hover:bg-indigo-800 border-indigo-700"
        onClick={handleInterest}
      >
        Interested
      </button>
      <Link
        href={user ? "/payment" : "/login"}
        className=" text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </Link>
    </div>
  );
};

export default ActionButtons;
