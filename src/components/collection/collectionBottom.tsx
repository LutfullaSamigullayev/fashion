import { collectionBottomItems } from "@/data";
import { CollectionCard } from "./components";

export const CollectionBottom = () => {
  return (
    <div className="container_ py-8">
      <div className="flex flex-col md:flex-row gap-5 h-[719px]">
        {collectionBottomItems.map((item) => (
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
