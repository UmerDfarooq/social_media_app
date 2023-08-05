import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="min-h-screen  overflow-auto bg-blue-500 items-center justify-center flex flex-col">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((index) => (
        <div
          key={index}
          className="bg-white p-2 mt-2 mb-2 rounded-md flex items-center flex-col h-60 w-1/6"
        >
          <Skeleton className="h-6 w-1/2 bg-gray-300"></Skeleton>

          <Skeleton className="h-3/4 min-w-full bg-gray-300 mt-2"> </Skeleton>
        </div>
      ))}
    </div>
  );
}

export default loading;
