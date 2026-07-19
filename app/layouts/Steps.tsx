"use client";

import Image from "next/image";
import { Card, CardHeader, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Steps() {
  return (
    <div className="py-12 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl md:text-3xl font-semibold leading-8">
            ¿Cómo comprar un auto en 3 simples pasos?
          </h2>
        </div>
        <div className=" w-full mt-24 gap-8 grid grid-cols-12">
          <Card className="col-span-12  md:col-span-6  lg:col-span-4 h-fit">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <span className="text-background font-medium text-lg sm:text-xl">
                Revisa nuestro catálogo
              </span>
            </CardHeader>
            <Image
              width={800}
              height={457}
              alt="Card example background"
              className="z-0 h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/w_642,h_367/v1709089558/tcp-web/step1-bg_s4blpr.png"
              loading="eager"
            />
            <CardFooter className="absolute bg-white/50 bottom-0 z-10 justify-between backdrop-blur">
              <div>
                <span className="text-background text-sm mx-1">
                  Gran variedad de marcas y modelos.
                </span>
              </div>
              <Link href="/catalogo">
                <Button
                  className="text-xs font-medium bg-graffiti-500 text-background"
                  radius="sm"
                  size="lg"
                >
                  Ver catálogo
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="col-span-12  md:col-span-6  lg:col-span-4 h-fit">
            <CardHeader className="absolute z-10 top-0 flex-col items-start">
              <span className="text-background font-medium text-lg sm:text-xl leading-4">
                Pauta la fecha de inspección
              </span>
            </CardHeader>
            <Image
              width={800}
              height={457}
              alt="Card example background"
              className="z-0 h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/w_642,h_367/v1709089556/tcp-web/step2-bg_slt7no.png"
              loading="eager"
            />
            <CardFooter className="absolute bg-white/50 bottom-0 z-10 justify-between backdrop-blur">
              <div>
                <span className="text-background text-sm mx-1">
                  ¿Quieres programar una cita?
                </span>
              </div>
              <a
                aria-label="Enlace al whatsapp de tu carro propio"
                rel="noreferrer"
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=+584241504459&text=Buenas,%20estoy%20interesado/a%20en%20coordinar%20una%20cita%20`}
              >
                <Button
                  className="text-xs font-medium bg-graffiti-500 text-background"
                  radius="sm"
                  size="lg"
                >
                  Whatsapp
                </Button>
              </a>
            </CardFooter>
          </Card>
          <Card className="col-span-12  md:col-span-6  lg:col-span-4 h-fit">
            <CardHeader className="absolute z-10 top-0 flex-col items-start">
              <span className="text-background font-medium text-lg sm:text-xl">
                Concreta tu compra
              </span>
            </CardHeader>
            <Image
              width={800}
              height={457}
              alt="Card example background"
              className="z-0 h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/w_642,h_367/v1709089558/tcp-web/step3-bg_zwkmis.png"
              loading="eager"
            />
            <CardFooter className="absolute bg-white/50 bottom-0 z-10 justify-between backdrop-blur">
              <div>
                <span className="text-background text-sm mx-1">
                  Realiza el papeleo y obtén tu nuevo vehículo.
                </span>
              </div>
              <Link href="/acerca-de-nosotros">
                <Button
                  className="text-xs px-2 font-medium bg-graffiti-500 text-background"
                  radius="sm"
                  size="lg"
                >
                  Más info
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
