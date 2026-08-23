"use client";
import type { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import type { Vehicle } from "@/lib/types";

const ImageSlider = ({ vehicle }: { vehicle: Vehicle }) => {
  const slides = vehicle?.images && [...vehicle.images];

  const vehicleName = [vehicle?.brand, vehicle?.model, vehicle?.version]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="relative w-5/6 mx-6 md:w-5/7 text-graffiti-500">
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#fcf744",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": "0.45",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-navigation-color": "#fcf744",
          } as CSSProperties
        }
        navigation={true}
        pagination={{ clickable: true }}
        zoom={true}
        loop={true}
        grabCursor={true}
        className="rounded-lg overflow-hidden text-graffiti-500"
        modules={[Navigation, Pagination, Zoom]}
      >
        {slides?.map((slide, slideIndex) => (
          <SwiperSlide className="cursor-grab" key={slideIndex}>
            <div className="swiper-zoom-container aspect-auto w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${slide}`}
                alt={`Foto ${slideIndex + 1} de ${vehicleName || "el vehículo"}`}
                className="h-full w-full object-cover"
                loading={slideIndex === 0 ? "eager" : "lazy"}
                fetchPriority={slideIndex === 0 ? "high" : "auto"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
