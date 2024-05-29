"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";

type SwiperProps = {
  children: React.ReactNode;
  slidesNumber?: number;
  between?: number;
  loop?: boolean;
  effect?: string;
  autoplay?: number;
  pagination?: boolean;
  className?: string;
};

const CustomSwiper = ({
  children,
  slidesNumber = 2,
  between = 10,
  loop = false,
  effect = "slide",
  autoplay,
  pagination = false,
}: SwiperProps) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      slidesPerView={slidesNumber}
      spaceBetween={between}
      loop={!!loop}
      effect={effect}
      autoplay={!!autoplay && { delay: autoplay, disableOnInteraction: false }}
      pagination={pagination && { clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        disabledClass: "swiper-button-disabled",
      }}
      breakpoints={{
        340: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
      }}
    >
      {React.Children.map(children, child => (
        <SwiperSlide className="py-5">{child}</SwiperSlide>
      ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
};

export default CustomSwiper;
