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
  await delay(3000);
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
    <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-4 p-4">
      {data.map((obj: character) => (
        <div key={obj.id} className="  mt-2 mb-2 rounded-md">
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
