import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const NoResults = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="grid items-center gap-8 sm:grid-cols-2">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <p
            aria-hidden="true"
            className="font-display text-5xl uppercase tracking-wide text-graffiti-500 md:text-6xl"
          >
            Oops
          </p>
          <h1 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
            Tu búsqueda no obtuvo resultados
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Prueba quitando algún filtro o buscando con otros parámetros.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
            <Button asChild className="h-11 px-6">
              <Link href="/catalogo">Ver todo el catálogo</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md sm:max-w-none">
          <Image
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1704758823/tcp-web/no-results-tcp_ojl5jx.png"
            width={1000}
            height={1000}
            alt="Sin resultados de búsqueda"
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default NoResults;
