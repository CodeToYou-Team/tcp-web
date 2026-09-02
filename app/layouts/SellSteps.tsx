"use client";

import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  Camera,
  Database,
  DollarSign,
  FileText,
  Search,
  WashingMachine,
} from "lucide-react";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { sellSteps, consignationSteps } from "@/lib/data";

const stepIcons: Record<string, LucideIcon> = {
  wash: WashingMachine,
  search: Search,
  database: Database,
  docs: FileText,
  camera: Camera,
  price: DollarSign,
  calendar: CalendarCheck,
};

export default function SellSteps() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold leading-8 md:text-3xl">
              Pasos para vender tu auto
            </h2>
            <p className="mt-4 text-sm text-zinc-400 sm:text-base">
              Es importante que agendes una cita con nosotros para la inspección
              del vehículo. La cita es rápida y sencilla de programar, escríbenos
              vía WhatsApp para coordinar la fecha y hora.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sellSteps.map((step) => {
              const Icon = stepIcons[step.icon] ?? FileText;

              return (
                <Card
                  key={step.name}
                  className="border border-zinc-800 transition-colors"
                >
                  <CardHeader className="flex-row items-center gap-4 p-6 pb-0">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-graffiti-500/10 text-graffiti-500"
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-semibold leading-6">
                      {step.name}
                    </h3>
                  </CardHeader>
                  <CardBody className="p-6 pt-3">
                    <p className="text-sm leading-6 text-zinc-400">
                      {step.description}
                    </p>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold leading-8 md:text-3xl">
              Consignación
            </h2>
            <p className="mt-4 text-sm text-zinc-400 sm:text-base">
              Consignar tu vehículo con nosotros es totalmente gratis. Nos
              encargamos de acondicionarlo para la venta y resguardarlo en
              nuestras instalaciones las 24 horas, gestionando toda la
              documentación necesaria.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consignationSteps.map((step) => (
              <Card
                key={step.name}
                className="border border-zinc-800 transition-colors"
              >
                <CardBody className="p-6">
                  <p className="text-sm leading-6 text-zinc-200">{step.name}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}