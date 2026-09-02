"use client";

import type { LucideIcon } from "lucide-react";
import { Armchair, Cog, Sparkles, Sun, WashingMachine } from "lucide-react";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { detailingServices, detailingWhatsappLink } from "@/lib/data";

const serviceIcons: Record<string, LucideIcon> = {
  polish: Sparkles,
  interior: Armchair,
  engine: Cog,
  wash: WashingMachine,
  tint: Sun,
};

export default function DetailingServices() {
  return (
    <div id="servicios-detailing" className="scroll-mt-20 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold leading-8 md:text-3xl">
            Nuestros servicios de detailing
          </h2>
          <p className="mt-4 text-sm text-zinc-400 sm:text-base">
            Cada tratamiento se adapta al estado y al uso de tu vehículo.
            Escríbenos y te recomendamos el paquete ideal.
          </p>
        </div>

        <div className="mt-16 grid w-full grid-cols-12 gap-6">
          {detailingServices.map((service) => {
            const Icon = serviceIcons[service.icon] ?? Sparkles;

            return (
              <Card
                key={service.name}
                className="col-span-12 border border-zinc-800 transition-colors  md:col-span-6 lg:col-span-4"
              >
                <CardHeader className="flex-row items-center gap-4 p-6 pb-0">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-graffiti-500/10 text-graffiti-500"
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold leading-6">
                    {service.name}
                  </h3>
                </CardHeader>
                <CardBody className="p-6 pt-3">
                  <p className="text-sm leading-6 text-zinc-400">
                    {service.description}
                  </p>
                </CardBody>
              </Card>
            );
          })}

          <Card className="col-span-12 border border-graffiti-500/30 bg-graffiti-500/5 md:col-span-6 lg:col-span-4">
            <CardBody className="items-start justify-center gap-4 p-6">
              <h3 className="text-lg font-semibold leading-6">
                ¿No sabes cuál elegir?
              </h3>
              <p className="text-sm leading-6 text-zinc-400">
                Cuéntanos el modelo y el estado de tu auto y te preparamos una
                cotización a la medida.
              </p>
              <a
                aria-label="Cotizar servicio de detailing por whatsapp"
                rel="noopener noreferrer"
                target="_blank"
                href={detailingWhatsappLink}
              >
                <Button
                  radius="sm"
                  variant="outline"
                  className="border-graffiti-500/40 hover:bg-graffiti-500/10 px-6 text-sm font-semibold text-graffiti-500"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Cotizar Servicio
                </Button>
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
