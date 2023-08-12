import React from "react";
import { Sidebar_Items } from "./sidebar-items";
import FarmImage from "@/app/Images/Avatar.jpg";
import Image from "next/image";
const Sidebar = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 mt-6">
        <div className="relative flex justify-center">
          <Image
            className="w-32 h-32 rounded-full"
            src={FarmImage}
            alt="Avatar"
          />
        </div>
        <div className="grid grid-cols-1 mt-6">
          {Sidebar_Items.map((link, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 m-1 text-white transition-colors duration-300 rounded hover:text-white-100 hover:bg-white hover:m-1 hover:rounded hover:font-bold hover:bg-opacity-20"
            >
              <a href="#">{link.name}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
