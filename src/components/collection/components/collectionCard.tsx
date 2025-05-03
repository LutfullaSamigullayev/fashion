import { CollectionCardType } from "@/types";
import Image from "next/image";

export const CollectionCard = ({ imgUrl, title }: CollectionCardType) => {
  return (
    <div className="relative w-full h-[342px] md:h-[532px]">
      <Image
        src={imgUrl}
        alt="collection"
        width={432}
        height={532}
        className="w-full h-full bg-no-repeat object-cover select-none"
      />
      <p className="absolute bottom-0 p-8" >{title}</p>
    </div>
  );
};
