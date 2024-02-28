import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="relative px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ">
        {/* Image component as background */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Hero Background"
            priority
            width={1080}
            height={720}
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1709090693/corolla-hero_i9hays.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 text-center ltr:sm:text-left rtl:sm:text-right ">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Los mejores precios
            <strong className="block font-extrabold text-graffiti">
              en autos.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Te ofrecemos la mejor experiencia de compra y venta de autos en
            Caracas.
          </p>

          <div className=" mt-8 justify-center flex flex-wrap gap-4 text-center">
            <Link href="/catalogo">
              <Button
                radius="sm"
                className="block w-auto bg-graffiti-500 px-12  text-zinc-800"
              >
                Catálogo
              </Button>
            </Link>
            <Link href="/venta">
              <Button
                radius="sm"
                className="block w-auto  bg-zinc-50 px-12 text-zinc-800 "
              >
                Vende tu auto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
