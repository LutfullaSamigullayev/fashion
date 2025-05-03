"use client";

import { instagramItems } from "@/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export const InstagramSwiper = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={3}>
      {instagramItems.map((item) => (
        <SwiperSlide>
          <Image
            key={item.id}
            src={item.bgUrl}
            alt={item.bgUrl}
            width={100}
            height={100}
            className="w-[100px] h-[100px] bg-no-repeat object-cover select-none"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
