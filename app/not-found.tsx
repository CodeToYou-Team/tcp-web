import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
      <p className="font-display text-6xl uppercase tracking-wide text-graffiti-500">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
        Esta página no existe
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        El enlace puede estar desactualizado. Vuelve al inicio o explora el
        catálogo completo.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild className="h-11 px-6">
          <Link href="/">Ir al inicio</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 px-6">
          <Link href="/catalogo">Ver catálogo</Link>
        </Button>
      </div>
    </div>
  );
}
