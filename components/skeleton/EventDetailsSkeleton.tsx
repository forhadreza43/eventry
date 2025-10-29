import React from "react";

export default function EventDetailsSkeleton() {
  return (
    <div>
      <section className="container mx-auto animate-pulse">
        {/* Image Skeleton */}
        <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
          <div className="h-[450px] w-full bg-slate-300/20 rounded-xl" />
        </div>

        {/* Event Info Skeleton */}
        <div className="flex items-end mt-6">
          <div className="flex-auto py-4">
            {/* Event Title */}
            <div className="h-6 bg-slate-400/30 w-2/3 rounded-md" />
            {/* Location */}
            <div className="h-4 bg-slate-400/20 w-1/3 rounded-md mt-3" />
            {/* Interested / Going */}
            <div className="flex items-center gap-3 mt-4">
              <div className="h-3 w-20 bg-slate-400/20 rounded-md" />
              <div className="h-3 w-3 bg-slate-400/20 rounded-full" />
              <div className="h-3 w-20 bg-slate-400/20 rounded-md" />
            </div>
          </div>

          {/* Action Buttons Placeholder */}
          <div className="flex gap-3">
            <div className="h-10 w-24 bg-slate-400/20 rounded-lg" />
            <div className="h-10 w-24 bg-slate-400/20 rounded-lg" />
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="grid grid-cols-5 gap-12 my-12">
          <div className="col-span-3 animate-pulse">
            <div className="w-full h-full bg-[#242526] p-6 rounded-lg">
              {/* Header */}
              <div className="h-6 w-32 bg-slate-500/30 rounded-md mb-4" />

              {/* Paragraph Skeleton */}
              <div className="space-y-3">
                <div className="h-4 w-full bg-slate-400/20 rounded-md" />
                <div className="h-4 w-5/6 bg-slate-400/20 rounded-md" />
                <div className="h-4 w-2/3 bg-slate-400/20 rounded-md" />
              </div>

              {/* List Skeleton */}
              <div className="mt-6 space-y-2">
                <div className="h-4 w-1/2 bg-slate-400/20 rounded-md" />
                <div className="h-4 w-3/5 bg-slate-400/20 rounded-md" />
                <div className="h-4 w-2/3 bg-slate-400/20 rounded-md" />
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg col-span-2 bg-[#242526] animate-pulse">
            {/* Map Placeholder */}
            <div className="w-full">
              <div className="h-[450px] w-full bg-slate-500/20" />
            </div>

            {/* Location Placeholder */}
            <div className="p-4">
              <div className="h-4 w-1/3 bg-slate-400/20 rounded-md mt-2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
