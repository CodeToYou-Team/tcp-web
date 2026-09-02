"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function DetailingHero() {
  return (
    <div className="relative px-4 py-28 sm:px-6 lg:flex lg:min-h-[80vh] lg:items-center lg:px-8">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Vehículo con acabado de detailing profesional"
          priority
          width={1080}
          height={720}
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1727229180/tcp-web/2b264e1b-eabd-4b05-b8ff-583ebced3df9_cwlfpm.jpg"
          className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-graffiti-500/40 bg-graffiti-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-graffiti-500">
            <Sparkles className="h-4 w-4" />
            Estética automotriz
          </span>

          <h1 className="w-full text-3xl font-extrabold leading-[1.4] sm:text-5xl sm:leading-[1.3] md:w-3/4">
            Detailing Profesional
            <span className="mx-2 hidden font-light text-zinc-500 sm:inline">
              |
            </span>
            <span className="block text-graffiti-500 sm:inline">
              Estética y Protección para tu Vehículo
            </span>
          </h1>

          <p className="mt-6 w-full text-zinc-200 sm:text-xl/relaxed md:w-2/3">
            Devolvemos el brillo de salón a tu auto con nuestros servicios de
            restauración, limpieza profunda y protección de pintura.
          </p>
        </div>
      </div>
    </div>
  );
}
