'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motorSportsImages } from '@/lib/constants';
import Image from "next/image";

const ImageSlider = () => {
  return (
    <div className="w-full pt-[6.688rem] flex flex-col">
      <div data-aos="fade-down" className="flex justify-center items-center pt-12 lg:p-12">
        <h2 className='my-10 h1 gradient-primary tracking-tight text-center' >About Us</h2>
      </div>
      <div className="flex-grow">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiper"
        >
          {motorSportsImages.map((item) => (
            <SwiperSlide key={item.imgAlt} className="swiper-slide">
              <img
                src={item.img}
                alt={item.imgAlt}
                className="swiper-slide img"
              />
            </SwiperSlide>
          ))}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;