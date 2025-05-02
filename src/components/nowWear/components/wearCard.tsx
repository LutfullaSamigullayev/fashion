import { WearCardType } from "@/types";
import Image from "next/image";

export const WearCard = ({ imgUrl, title, price }: WearCardType) => {
  return (
    <div className="w-full max-h-[348px] flex flex-col text-black">
      <div className="relative w-full h-[280px]">
        <Image
          src={imgUrl}
          alt={title}
          width={250}
          height={280}
          className="w-full h-full bg-no-repeat object-cover select-none"
        />
        <div className="w-full absolute bottom-0 flex justify-end p-3">
          <button className=" py-1 px-2 text-xl">+</button>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 py-3">
        <p>{title}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};
