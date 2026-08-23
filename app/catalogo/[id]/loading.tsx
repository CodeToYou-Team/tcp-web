export default function LoadingVehicle() {
  return (
    <div
      role="status"
      aria-busy="true"
      className="mx-auto w-full max-w-7xl animate-pulse px-4 sm:px-6 lg:px-8"
    >
      <span className="sr-only">Cargando vehículo…</span>

      <div className="mt-4 h-3 w-48 rounded bg-zinc-800" />

      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] md:gap-x-10">
        <div className="aspect-[4/3] w-full rounded-lg bg-zinc-800 sm:aspect-[16/10]" />

        <div className="flex flex-col gap-5">
          <div className="h-9 w-full max-w-sm rounded bg-zinc-800" />
          <div className="h-6 w-40 rounded bg-graffiti-500/30" />
          <div className="h-4 w-56 rounded bg-zinc-800" />
          <div className="h-11 w-64 max-w-full rounded-xl bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}
