import { nowWearItems } from "@/data";
import { WearCard } from "./components";

export const NowWear = () => {
  return (
    <div className="container_">
      <div className="px-4 py-8 text-black text-xl">
        <p>What to Wear Now</p>
      </div>
      <div className="h-fit flex gap-x-5">
        {nowWearItems.map((item) => (
          <WearCard
            key={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
