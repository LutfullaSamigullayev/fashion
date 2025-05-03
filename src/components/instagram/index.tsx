import { instagramItems } from "@/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { InstagramSwiper } from "./components";

export const Instagram = () => {
  return (
    <div className="container_ flex flex-col gap-y-12 py-8">
      <h4 className="p-4 text-xl text-center text-black">Shop Instagram</h4>

      <div className="sm:hidden">
        <InstagramSwiper />
      </div>

      <div className="hidden h-fit sm:flex flex-wrap justify-center gap-5">
        {instagramItems.map((item) => (
          <Image
            key={item.id}
            src={item.bgUrl}
            alt={item.bgUrl}
            width={250}
            height={250}
            className=" sm:w-[250px] sm:h-[250px] bg-no-repeat object-cover select-none"
          />
        ))}
      </div>
    </div>
  );
};
