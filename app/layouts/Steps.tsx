"use client";

import Image from "next/image";
import { CalendarCheck, CheckCircle2, Search } from "lucide-react";
import { Card, CardFooter, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { WHATSAPP_PHONE } from "@/lib/site-config";

const steps = [
  {
    icon: Search,
    title: "Revisa nuestro catálogo",
    description: "Gran variedad de marcas y modelos.",
    cta: { label: "Ver catálogo", href: "/catalogo", kind: "link" as const },
    image:
      "https://res.cloudinary.com/dkokeszcd/image/upload/w_642,h_367/v1709089558/tcp-web/step1-bg_s4blpr.png",
    alt: "Catálogo de vehículos disponibles",
  },
  {
    icon: CalendarCheck,
    title: "Pauta la fecha de inspección",
    description: "¿Quieres programar una cita?",
    cta: {
      label: "WhatsApp",
      href: `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=Buenas,%20estoy%20interesado/a%20en%20coordinar%20una%20cita%20`,
      kind: "external" as const,
    },
    image:
      "https://res.cloudinary.com/dkokeszcd/image/upload/w_642,h_367/v1709089556/tcp-web/step2-bg_slt7no.png",
    alt: "Agenda tu cita de inspección",
  },
  {
    icon: CheckCircle2,
    title: "Concreta tu compra",
    description: "Realiza el papeleo y obtén tu nuevo vehículo.",
    cta: { label: "Más info", href: "/acerca-de-nosotros", kind: "link" as const },
    image:
      "https://res.cloudinary.com/dkokeszcd/image/upload/w_642,h_367/v1709089558/tcp-web/step3-bg_zwkmis.png",
    alt: "Concreta la compra de tu vehículo",
  },
];

export default function Steps() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold leading-8 md:text-3xl">
            ¿Cómo comprar un auto en 3 simples pasos?
          </h2>
          <p className="mt-4 text-sm text-zinc-400 sm:text-base">
            Un proceso claro y acompañado de principio a fin.
          </p>
        </div>

        <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            const ctaClass =
              "bg-graffiti-500 px-6 text-sm font-semibold text-zinc-900 hover:opacity-90";

            const ctaButton = (
              <Button radius="sm" className={ctaClass}>
                {step.cta.label}
              </Button>
            );

            return (
              <Card
                key={step.title}
                className="col-span-1 overflow-hidden border border-zinc-800"
              >
                <div className="relative h-44 w-full">
                  <Image
                    width={800}
                    height={457}
                    alt={step.alt}
                    className="h-full w-full object-cover"
                    src={step.image}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-graffiti-500/90 text-zinc-900 shadow-lg"
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                </div>

                <CardHeader className="flex-row items-center gap-4 p-6 pb-2">
                  <h3 className="text-lg font-semibold leading-6">
                    {step.title}
                  </h3>
                </CardHeader>

                <CardFooter className="flex items-center justify-between gap-4 p-6 pt-2">
                  <span className="text-sm text-zinc-400">
                    {step.description}
                  </span>
                  {step.cta.kind === "external" ? (
                    <a
                      aria-label={`Enlace al WhatsApp para ${step.title}`}
                      rel="noreferrer"
                      target="_blank"
                      href={step.cta.href}
                    >
                      {ctaButton}
                    </a>
                  ) : (
                    <Link href={step.cta.href}>{ctaButton}</Link>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}