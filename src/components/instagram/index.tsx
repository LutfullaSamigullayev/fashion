import { instagramItems } from "@/data";
import Image from "next/image";

export const Instagram = () => {
  return (
    <div className="container_ flex flex-col gap-y-12 py-8">
      <h4 className="p-4 text-xl text-center text-black">Shop Instagram</h4>
      <div className="h-[250px] flex gap-x-5">
        {instagramItems.map((item) => (
          <Image
            key={item.id}
            src={item.bgUrl}
            alt={item.bgUrl}
            width={250}
            height={250}
            className="w-full h-full bg-no-repeat object-cover select-none"
          />
        ))}
      </div>
    </div>
  );
};
