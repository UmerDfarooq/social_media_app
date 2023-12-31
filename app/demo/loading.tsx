import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-4 p-4">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((index) => (
        <Skeleton
          key={index}
          className="mt-2 mb-2 rounded-md  bg-slate-400 h-96 "
        ></Skeleton>
      ))}
    </div>
  );
}

export default loading;
