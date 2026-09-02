import {
  HondaIcon,
  HyundaiIcon,
  JeepIcon,
  MitsubishiIcon,
  ToyotaIcon,
} from "@/lib/svgs";

export default function Brands() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold leading-8 md:text-3xl">
            Trabajamos con las mejores marcas del mercado
          </h2>
          <p className="mt-4 text-sm text-zinc-400 sm:text-base">
            Escoge el carro que se ajuste a tus necesidades de entre más de 100
            opciones con excelentes marcas y modelos.
          </p>
        </div>
      </div>
      <div className="mt-16 w-full flex flex-wrap justify-center gap-10 md:gap-20">
        <span role="img" aria-label="Toyota">
          <ToyotaIcon />
        </span>
        <span role="img" aria-label="Jeep">
          <JeepIcon />
        </span>
        <span role="img" aria-label="Honda">
          <HondaIcon />
        </span>
        <span role="img" aria-label="Mitsubishi">
          <MitsubishiIcon />
        </span>
        <span role="img" aria-label="Hyundai">
          <HyundaiIcon />
        </span>
      </div>
    </div>
  );
}
