import { nowWearItems } from "@/data";
import { WearCard, WearSwiper } from "./components";

export const NowWear = () => {
  return (
    <div className="container_">
      <div className="px-4 py-8 text-black text-xl">
        <p>What to Wear Now</p>
      </div>
      <div className="md:hidden">
        <WearSwiper />
      </div>
      <div className="h-fit hidden md:flex gap-x-5">
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
