"use client";

import Image from "next/image";
import { Briefcase } from "lucide-react";

export default function AboutHero() {
  return (
    <div className="relative px-4 py-28 sm:px-6 lg:flex lg:min-h-[80vh] lg:items-center lg:px-8">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Showroom TUCARROPROPIO"
          priority
          width={1080}
          height={720}
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1727228641/tcp-web/0694f89d-a97e-4d4d-99d5-1d6038900b94_wbupkw.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-graffiti-500/40 bg-graffiti-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-graffiti-500">
            <Briefcase aria-hidden="true" className="h-3.5 w-3.5" />
            Acerca de Nosotros
          </span>

          <h1 className="w-full text-3xl font-extrabold leading-[1.4] sm:text-5xl sm:leading-[1.3] md:w-3/4">
            Tu Aliado de <span className="text-graffiti-500">Confianza</span> en
            el Mundo Automotriz
          </h1>

          <p className="mt-6 w-full text-zinc-200 sm:text-xl/relaxed md:w-2/3">
            Más que un concesionario: facilitamos la compra, venta e inversión
            de tu vehículo con total seguridad, respaldo y servicios de alta
            gama.
          </p>
        </div>
      </div>
    </div>
  );
}
