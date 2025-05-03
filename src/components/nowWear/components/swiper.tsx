"use client";

import { nowWearItems } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { WearCard } from "./wearCard";

export const WearSwiper = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={1.8}>
      {nowWearItems.map((item) => (
        <SwiperSlide>
          <WearCard
            key={item.id}
            title={item.title}
            imgUrl={item.imgUrl}
            price={item.price}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
