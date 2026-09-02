"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/Card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Map() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 text-2xl font-semibold leading-8 md:text-3xl">
            Visítanos en nuestro showroom
          </h2>
        </div>

        <Card className="mt-12 border-zinc-800 bg-zinc-900 mx-auto w-full max-w-5xl overflow-hidden">
          <CardBody className="overflow-visible p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37324.71682257169!2d-66.8614628956423!3d10.478770969768863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59941ef561e3%3A0x35ac16d11c66514d!2sTucarropropio!5e0!3m2!1ses!2sve!4v1727221685449!5m2!1ses!2sve"
              title="Ubicación TUCARROPROPIO en Google Maps"
              className="w-full"
              height={400}
              loading="lazy"
              frameBorder="0"
            />
          </CardBody>
          <div className="grid grid-cols-1 divide-y divide-zinc-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-start gap-3 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-graffiti-500/10 text-graffiti-500">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Dirección
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                  Carretera El Cafetal, El alto hatillo, Subida de Los Naranjos,
                  Caracas 1083, Miranda
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-graffiti-500/10 text-graffiti-500">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Email
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                  tucarropropiove@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-graffiti-500/10 text-graffiti-500">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Teléfono
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                  +58 424-1504459
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
