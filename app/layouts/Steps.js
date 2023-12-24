import { Image } from "@nextui-org/react";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";

export default function Steps() {
  return (
    <div className="py-12 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold leading-8">
            ¿Cómo comprar un auto en 3 simples pasos?
          </h2>
        </div>
        <div className=" w-full mt-24 gap-2 grid grid-cols-12  px-8">
          <Card
            isFooterBlurred
            className="cursor-default col-span-12 sm:col-span-4 h-[300px]"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-zinc-800 font-medium text-lg sm:text-xl">
                Revisa nuestro catálogo
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/v1700872418/tcp-web/step1-bg_tt2llv.png"
            />
            <CardFooter className="absolute bg-white/50 bottom-0 z-10 justify-between">
              <div>
                <p className="text-zinc-800 text-sm mx-1">
                  Gran variedad de marcas y modelos.
                </p>
              </div>
              <Button
                className="text-xs font-medium bg-graffiti-500"
                radius="sm"
                size="lg"
              >
                Ver catálogo
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="cursor-default col-span-12 sm:col-span-4 h-[300px]"
          >
            <CardHeader className="absolute z-10 top-0 flex-col items-start">
              <h4 className="text-zinc-800 font-medium text-lg sm:text-xl leading-4">
                Pauta la fecha de inspección
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/v1700730640/tcp-web/step2-bg_b2j7fd.png"
            />
            <CardFooter className="absolute bg-white/50 bottom-0 z-10 justify-between">
              <div>
                <p className="text-zinc-800 text-sm mx-1">
                  ¿Quieres programar una cita?
                </p>
              </div>
              <Button
                className="text-xs font-medium bg-graffiti-500"
                radius="sm"
                size="lg"
              >
                Whatsapp
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="cursor-default col-span-12 sm:col-span-4 h-[300px]"
          >
            <CardHeader className="absolute z-10 top-0 flex-col items-start">
              <h4 className="text-zinc-800 font-medium text-lg sm:text-xl">
                Concreta tu compra
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/v1700726897/tcp-web/fortuner-2023_xaeedy.png"
            />
            <CardFooter className="absolute bg-white/50 bottom-0 z-10 justify-between">
              <div>
                <p className="text-zinc-800 text-sm mx-1">
                  Realiza el papeleo y obtén tu nuevo vehículo.
                </p>
              </div>
              <Button
                className="text-xs px-2 font-medium bg-graffiti-500 "
                radius="sm"
                size="lg"
              >
                Más info
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
