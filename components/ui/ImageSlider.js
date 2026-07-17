"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { useRef } from "react";
import { Image } from "@heroui/react";

const ImageSlider = ({ vehicle }) => {
  const slides = vehicle?.images && [...vehicle.images];
  console.log(vehicle.images[0]);
  const swiperRef = useRef(null);

  return (
    <>
      <div className="mx-auto w-full md:w-10/12 relative text-graffiti-500">
        <Swiper
          style={{
            "--swiper-pagination-color": "#fcf744",
            "--swiper-pagination-bullet-inactive-color": "#18181b",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-navigation-color": "#fcf744",
          }}
          navigation={true}
          pagination={{ clickable: true }}
          zoom={true}
          loop={true}
          className="rounded-lg gap-4 text-graffiti-500"
          modules={[Navigation, Pagination, Zoom]}
          ref={swiperRef}
        >
          {slides?.map((slide, slideIndex) => (
            <SwiperSlide className="px-2 cursor-grab" key={slideIndex}>
              <div className="swiper-zoom-container">
                <Image
                  src={`${slide}`}
                  alt={`car-img-${slideIndex}`}
                  className="gap-4"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageSlider;
