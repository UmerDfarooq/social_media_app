import ImageCard from "@/components/ImageCard";
import React from "react";

interface character {
  id: string;
  name: string;
  image: string;
}
const delay = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

const getCharachters = async () => {
  await delay(2000);
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10"
  );
  const data = await response.json();
  return data;
};
async function page() {
  const data = await getCharachters();
  console.log(data);
  return (
    <div className="max-h-full  items-center flex flex-col overflow-auto ">
      {data.map((obj: character) => (
        <div
          key={obj.id}
          className="  mt-2 mb-2 rounded-md flex items-center flex-col "
        >
          <ImageCard
            title={obj.id}
            description={obj.name}
            image={obj.image}
            key={obj.id}
          />
        </div>
      ))}
    </div>
  );
}

export default page;
