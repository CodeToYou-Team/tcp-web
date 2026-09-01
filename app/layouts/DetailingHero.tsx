"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { detailingWhatsappLink } from "@/lib/data";

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
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1709090693/corolla-hero_i9hays.jpg"
          className="absolute inset-0 h-full w-full object-cover"
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

          <h1 className="w-full text-3xl font-extrabold leading-tight sm:text-5xl md:w-3/4">
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

          <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              aria-label="Agendar cita de detailing por whatsapp"
              rel="noopener noreferrer"
              target="_blank"
              href={detailingWhatsappLink}
            >
              <Button
                radius="sm"
                size="lg"
                className="w-full bg-graffiti-500 px-8 text-sm font-semibold text-background sm:w-auto"
              >
                Agendar Cita por WhatsApp
              </Button>
            </a>
            <Link href="#servicios-detailing">
              <Button
                radius="sm"
                size="lg"
                variant="outline"
                className="w-full border-zinc-50/40 px-8 text-sm font-semibold text-zinc-50 sm:w-auto"
              >
                Cotizar Servicio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
