"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { Car } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="relative px-4 py-28 sm:px-6 lg:flex lg:min-h-[80vh] lg:items-center lg:px-8">
        {/* Image component as background */}
        <div className="absolute inset-0 z-0">
          <Image
            alt=""
            priority
            width={1080}
            height={720}
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1788308790/4ea2dc77-5cc0-4ede-a22d-e210db994fa4_n4npyc.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/20" />
        </div>

        {/* Content container */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-center text-center w-full md:items-start md:text-left">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-graffiti-500/40 bg-graffiti-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-graffiti-500">
              <Car aria-hidden="true" className="h-4 w-4" />
              Concesionario de autos en Caracas
            </span>

            <h1 className="text-3xl font-extrabold leading-[1.4] sm:text-5xl sm:leading-[1.3] w-full md:w-3/4">
              Los Mejores Precios en{" "}
              <span className="text-graffiti-500">Autos</span>
            </h1>

            <p className="mt-6 sm:text-xl/relaxed text-zinc-200 w-full md:w-2/3">
              Te ofrecemos la mejor experiencia de compra y venta de automóviles
              en Caracas.
            </p>

            <div className="mt-8 flex gap-4 w-full justify-center md:justify-start">
              <Link href="/catalogo">
                <Button
                  radius="sm"
                  className="block w-auto px-10 bg-graffiti-500 text-zinc-800 text-sm"
                >
                  Catálogo
                </Button>
              </Link>
              <Link href="/venta">
                <Button
                  radius="sm"
                  variant="outline"
                  className="w-full border-graffiti-500/40 px-8 text-sm font-medium text-graffiti-500 hover:bg-graffiti-500/10 sm:w-auto"
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
