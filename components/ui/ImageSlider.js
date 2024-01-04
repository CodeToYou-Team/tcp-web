"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Dot } from "lucide-react";
import ImageZoom from "react-image-zooom";

const ImageSlider = ({ vehicle }) => {
  const slides = vehicle?.images && [...vehicle.images];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="mx-auto rounded-lg w-11/12 md:w-full">
        <div className="lg:col-span-4 overflow-hidden relative">
          {slides?.length > 0 ? (
            <ImageZoom
              className="rounded-lg h-4/6"
              src={slides[currentIndex]}
              alt="car-img"
            />
          ) : (
            []
          )}

          <div className="flex top-[95%] md:top-[95%] justify-center z-10 ">
            {slides &&
              slides.map((slide, slideIndex) => (
                <span
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  value={slide}
                  className="cursor-pointer"
                >
                  {slideIndex === currentIndex ? (
                    <Dot size={26} className="text-graffiti-500 " />
                  ) : (
                    <Dot size={26} className="text-zinc-100 " />
                  )}
                </span>
              ))}
          </div>
          <div className="z-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 md:left-1 rounded-full p-1 bg-transparent ">
            <ChevronLeft
              className="text-graffiti-500 active:scale-125 cursor-pointer"
              onClick={prevSlide}
              size={64}
            />
          </div>
          <div className="z-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 md:right-1 rounded-full p-1 bg-transparent">
            <ChevronRight
              className="text-graffiti-500 active:scale-125 cursor-pointer"
              onClick={nextSlide}
              size={64}
            />
          </div>

          {vehicle?.discount !== 0 ? (
            <span className="bg-red-500 text-white text-sm tracking-wider font-semibold uppercase rounded-br-lg rounded-tl-lg absolute left-0 top-0 px-3 py-1.5">
              -{vehicle?.discount}%
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
