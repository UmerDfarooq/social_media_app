import React from "react";

const delay = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

const getCharachters = async () => {
  await delay(2000);
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/1,183,2,5,37,9,120,10,11,12,15"
  );
  const data = await response.json();
  return data;
};
async function page() {
  const data = await getCharachters();
  console.log(data);
  return (
    <div className="min-h-screen  overflow-auto bg-blue-500 items-center justify-center flex flex-col">
      {data.map((obj, index) => (
        <div
          key={obj.id}
          className="bg-white p-2 mt-2 mb-2 rounded-md flex items-center flex-col h-60"
        >
          <span>{obj.name}</span>
          <img className="h-3/4" src={obj.image as string} />
        </div>
      ))}
    </div>
  );
}

export default page;
