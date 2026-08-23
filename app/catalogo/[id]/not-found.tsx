import Link from "next/link";
import type { Metadata } from "next";

// Página servida con contenido de "no disponible": excluida de índice.
export const metadata: Metadata = {
  robots: { index: false },
};

export default function VehicleNotFound() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-32">
      <p className="font-display text-6xl uppercase tracking-wide text-graffiti-500">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-zinc-50 md:text-3xl">
        Este vehículo ya no está disponible
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
        El inventario cambia a diario. Mira el catálogo completo o pregúntanos
        por un modelo parecido.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/catalogo"
          className="inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Ver catálogo
        </Link>
        <Link
          href="/ofertas"
          className="inline-flex h-11 items-center rounded-xl border border-input px-6 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Ver ofertas
        </Link>
      </div>
    </div>
  );
}
