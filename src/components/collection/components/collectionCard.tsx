import { CollectionCardType } from "@/types";
import clsx from "clsx";
import Image from "next/image";

export const CollectionCard = ({ imgUrl, title }: CollectionCardType) => {
  return (
    <div className={clsx(`relative w-full h-full `)}>
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
