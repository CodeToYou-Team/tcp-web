import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:h-screen lg:px-8">
      {/* Foto de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          priority
          width={1080}
          height={720}
          alt=""
          src="https://res.cloudinary.com/dkokeszcd/image/upload/v1709090693/corolla-hero_i9hays.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex w-full flex-col items-center text-center md:w-2/3 md:items-start md:text-left">
          <h1 className="font-display text-4xl uppercase leading-tight tracking-wide sm:text-6xl">
            Los mejores precios en{" "}
            <span className="text-graffiti-500">autos.</span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-zinc-200 sm:text-lg md:text-xl">
            Te ofrecemos la mejor experiencia de compra y venta de autos en
            Caracas.
          </p>

          <div className="mt-8 flex w-full flex-wrap justify-center gap-4 md:justify-start">
            <Button asChild size="lg">
              <Link href="/catalogo">Ver catálogo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/venta">Vende tu auto</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
