const EventCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526] flex flex-col justify-between animate-pulse">
      <div>
        {/* Image skeleton */}
        <div className="w-full h-[250px] bg-gray-700" />

        <div className="p-3">
          <div>
            {/* Title skeleton */}
            <div className="h-6 bg-gray-700 rounded w-3/4"></div>

            {/* Location skeleton */}
            <div className="h-4 bg-gray-700 rounded w-1/2 mt-2"></div>

            {/* Interested/Going skeleton */}
            <div className="flex gap-2 items-center mt-2">
              <div className="h-4 bg-gray-700 rounded w-24"></div>
              <div className="h-4 bg-gray-700 rounded w-1 mx-1"></div>
              <div className="h-4 bg-gray-700 rounded w-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons skeleton */}
      <div className="p-3 mt-8">
        <div className="flex gap-2">
          <div className="h-9 bg-gray-700 rounded flex-1"></div>
          <div className="h-9 bg-gray-700 rounded flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default EventCardSkeleton;
