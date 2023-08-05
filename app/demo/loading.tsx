import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-auto bg-blue-500">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((index) => (
        <div
          key={index}
          className="flex flex-col items-center w-1/6 p-2 mt-2 mb-2 bg-white rounded-md h-60"
        >
          <Skeleton className="w-1/2 h-6 bg-gray-300"></Skeleton>

          <Skeleton className="min-w-full mt-2 bg-gray-300 h-3/4"></Skeleton>
        </div>
      ))}
    </div>
  );
}

export default loading;
