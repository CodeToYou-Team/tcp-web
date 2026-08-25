import { cn } from "@/lib/utils";

// Hueso base: superficie neutra con onda shimmer diagonal.
// La animación vive en un overlay para poder respetar motion-reduce.
function Bone({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-white/[0.07]", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/[0.06] to-transparent motion-reduce:animate-none"
      />
    </div>
  );
}

// Calco del VehicleCard real: misma barra de información en dos columnas,
// misma zona de foto y mismos breakpoints de grilla, para que el swap
// al cargar sea imperceptible.
const SkeletonCard = () => {
  return (
    <div
      aria-hidden="true"
      className="col-span-12 min-[500px]:col-span-6 sm:col-span-6 lg:col-span-4 h-fit"
    >
      <div className="flex aspect-[4/5] flex-col gap-3 rounded-[14px] bg-zinc-800 p-4">
        {/* Barra superior: info principal a la izquierda, condición a la derecha */}
        <div className="flex justify-between">
          <div className="flex flex-col items-start gap-2">
            <Bone className="h-4 w-28 rounded-md" />
            <Bone className="h-3 w-14 rounded-md" />
            <Bone className="h-5 w-24 rounded-md" />
          </div>
          <div className="flex flex-col items-end gap-2">
            <Bone className="h-3 w-12 rounded-md" />
            <Bone className="h-3 w-16 rounded-md" />
            <Bone className="h-3 w-16 rounded-md" />
          </div>
        </div>

        {/* Zona de foto */}
        <Bone className="min-h-0 flex-1 rounded-xl" />
      </div>
    </div>
  );
};

export default SkeletonCard;
