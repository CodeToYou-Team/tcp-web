"use client";

import { useState } from "react";

import { ChevronRight, ChevronLeft, Dot } from "lucide-react";
import ImageZoom from "react-image-zooom";

export const getProduct = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT}/inventory/${id}`
  );
  const product = await res.json();

  return product;
};

const ImageSlider = ({ product }) => {
  const slides = product?.images && [...product.images];
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
      <div className="px-4 rounded-lg">
        <div className="lg:col-span-4  relative">
          {slides?.length > 0 ? (
            <ImageZoom
              className="overflow-hidden rounded-lg"
              src={slides[currentIndex]}
              alt="car-img"
            />
          ) : (
            []
          )}

          <div className="flex absolute top-[90%] justify-center w-full z-10">
            {slides &&
              slides.map((slide, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  value={slide}
                >
                  {slideIndex === currentIndex ? (
                    <Dot
                      size={42}
                      className="text-graffiti-500 cursor-pointer"
                    />
                  ) : (
                    <Dot size={42} className="text-zinc-900 cursor-pointer" />
                  )}
                </button>
              ))}
          </div>
          <div className="z-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 md:left-3 rounded-full p-2 bg-transparent cursor-pointer">
            <ChevronLeft
              className="text-zinc-900 active:scale-125 "
              onClick={prevSlide}
              size={50}
            />
          </div>
          <div className="z-10 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 md:right-3 rounded-full p-2 bg-transparent cursor-pointer">
            <ChevronRight
              className="text-zinc-900 active:scale-125 "
              onClick={nextSlide}
              size={50}
            />
          </div>

          {product?.discount !== 0 ? (
            <span className="bg-red-500 text-white text-sm tracking-wider font-semibold uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
              -{product?.discount}%
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
