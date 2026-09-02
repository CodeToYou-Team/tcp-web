"use client";

import Image from "next/image";
import { Tag } from "lucide-react";

export default function SellHero() {
  return (
    <div className="relative px-4 py-12 sm:px-6 lg:flex lg:min-h-[80vh] lg:items-center lg:px-8">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Vehículo en venta"
          priority
          width={1080}
          height={720}
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1727228986/tcp-web/e0cd017f-983d-4206-8843-7072c6f94a1c_mvsg3e.jpg"
          className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-graffiti-500/40 bg-graffiti-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-graffiti-500">
            <Tag aria-hidden="true" className="h-4 w-4" />
            Vende tu auto
          </span>

          <h1 className="w-full text-3xl font-extrabold leading-[1.4] sm:text-5xl sm:leading-[1.3] md:w-3/4">
            Vende tu vehículo
            <span
              aria-hidden="true"
              className="mx-2 hidden font-light text-zinc-500 sm:inline"
            >
              |
            </span>
            <span className="block text-graffiti-500 sm:inline">
              Rápido, seguro y sin complicaciones
            </span>
          </h1>

          <p className="mt-6 w-full text-zinc-200 sm:text-xl/relaxed md:w-2/3">
            Nos encargamos de todo el proceso: avalúo, documentación, fotografía
            profesional y exposición en nuestras plataformas para encontrar al
            comprador ideal.
          </p>
        </div>
      </div>
    </div>
  );
}
