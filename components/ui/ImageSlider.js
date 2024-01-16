"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { useRef } from "react";
import { Image } from "@nextui-org/react";

const ImageSlider = ({ vehicle }) => {
  const slides = vehicle?.images && [...vehicle.images];
  const swiperRef = useRef(null);

  return (
    <>
      <div className="mx-auto w-11/12 md:w-10/12 relative text-graffiti-500">
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
                  src={slide}
                  alt={`car-img-${slideIndex}`}
                  className="gap-4"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {vehicle?.discount !== 0 ? (
          <span className="bg-red-500 text-white text-sm tracking-wider font-semibold uppercase rounded-br-lg rounded-tl-lg absolute left-0 top-0 px-3 py-1.5">
            -{vehicle?.discount}%
          </span>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ImageSlider;
