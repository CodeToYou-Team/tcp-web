"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="relative px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        {/* Image component as background */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Hero Background"
            priority
            width={1080}
            height={720}
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1709090693/corolla-hero_i9hays.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 w-full md:w-1/2">
          <div className="flex flex-col items-center text-center w-full md:items-start md:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl w-full md:w-2/3">
              Los mejores precios en{" "}
              <strong className="text-graffiti-500">autos.</strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed w-full md:w-2/3">
              Te ofrecemos la mejor experiencia de compra y venta de autos en
              Caracas.
            </p>

            <div className="mt-8 flex gap-4 w-full justify-center md:justify-start">
              <Link href="/catalogo">
                <Button
                  radius="sm"
                  className="block w-auto px-10 bg-graffiti-500 text-zinc-800"
                >
                  Catálogo
                </Button>
              </Link>
              <Link href="/venta">
                <Button
                  radius="sm"
                  className="block w-auto px-6 bg-zinc-50 text-background"
                >
                  Vende tu auto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
