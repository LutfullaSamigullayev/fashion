import { collectionTopItems } from "@/data";
import { CollectionCard } from "./components";

export const CollectionTop = () => {
  return (
    <div className="container_">
      <div className="px-4 py-8 text-black text-xl">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex gap-x-5 h-[532px]">
        {collectionTopItems.map((item) => (
          <CollectionCard key={item.id} imgUrl={item.imgUrl} title={item.title} />
        ))}
        <div className="bg-[url(/collection/top_1.jpg)]"></div>
      </div>
    </div>
  );
};
