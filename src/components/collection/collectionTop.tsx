import { collectionTopItems } from "@/data";
import { CollectionCard } from "./components";

export const CollectionTop = () => {
  return (
    <div className="container_ py-8 flex flex-col gap-y-12">
      <div className="p-4 text-black text-xl">
        <p>
          Elevate your lifestyle with a more intelligent, superior wardrobe.
        </p>
        <p>Our range is crafted sustainably with longevity in mind.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 h-fit">
        {collectionTopItems.map((item) => (
          <CollectionCard
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};
