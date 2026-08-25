"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_PHONE } from "@/lib/site-config";

// Receta única para los tres pasos: encabezado sobre la foto y pie frosteado oscuro.
const cardHeaderClass = "absolute left-0 top-0 z-10 flex-col items-start";
const stepTitleClass = "text-lg font-medium leading-snug sm:text-xl";
const cardFooterClass =
  "absolute bottom-0 left-0 z-10 w-full items-center justify-between gap-3 border-t border-border bg-background/85 p-3 backdrop-blur";

export default function Steps() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl uppercase tracking-wide md:text-4xl">
          ¿Cómo comprar un auto en 3 simples pasos?
        </h2>

        <div className="mt-12 grid grid-cols-12 gap-6">
          <Card className="col-span-12 md:col-span-6 lg:col-span-4 h-fit">
            <CardHeader className={cardHeaderClass}>
              <span className={stepTitleClass}>
                Revisa nuestro catálogo
              </span>
            </CardHeader>
            <Image
              width={800}
              height={457}
              alt="Paso 1: revisa nuestro catálogo de autos"
              className="z-0 h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/w_642,h_367/v1709089558/tcp-web/step1-bg_s4blpr.png"
              loading="lazy"
            />
            <CardFooter className={cardFooterClass}>
              <span className="text-sm text-foreground">
                Gran variedad de marcas y modelos.
              </span>
              <Button asChild size="sm">
                <Link href="/catalogo">Ver catálogo</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="col-span-12 md:col-span-6 lg:col-span-4 h-fit">
            <CardHeader className={cardHeaderClass}>
              <span className={stepTitleClass}>
                Pauta la fecha de inspección
              </span>
            </CardHeader>
            <Image
              width={800}
              height={457}
              alt="Paso 2: pauta la fecha de inspección del auto"
              className="z-0 h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/w_642,h_367/v1709089556/tcp-web/step2-bg_slt7no.png"
              loading="lazy"
            />
            <CardFooter className={cardFooterClass}>
              <span className="text-sm text-foreground">
                ¿Quieres programar una cita?
              </span>
              <Button asChild size="sm">
                <a
                  aria-label="Enlace al whatsapp de tu carro propio"
                  rel="noreferrer"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=Buenas,%20estoy%20interesado/a%20en%20coordinar%20una%20cita%20`}
                >
                  WhatsApp
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="col-span-12 md:col-span-6 lg:col-span-4 h-fit">
            <CardHeader className={cardHeaderClass}>
              <span className={stepTitleClass}>Concreta tu compra</span>
            </CardHeader>
            <Image
              width={800}
              height={457}
              alt="Paso 3: concreta tu compra y obtén tu nuevo vehículo"
              className="z-0 h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/w_642,h_367/v1709089558/tcp-web/step3-bg_zwkmis.png"
              loading="lazy"
            />
            <CardFooter className={cardFooterClass}>
              <span className="text-sm text-foreground">
                Realiza el papeleo y obtén tu nuevo vehículo.
              </span>
              <Button asChild size="sm">
                <Link href="/acerca-de-nosotros">Más info</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
