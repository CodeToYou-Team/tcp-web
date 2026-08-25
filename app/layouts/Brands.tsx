import {
  HondaIcon,
  HyundaiIcon,
  JeepIcon,
  MitsubishiIcon,
  ToyotaIcon,
} from "@/lib/svgs";

const brandIcons = [
  ToyotaIcon,
  JeepIcon,
  HondaIcon,
  MitsubishiIcon,
  HyundaiIcon,
];

export default function Brands() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl uppercase tracking-wide md:text-4xl">
          Trabajamos con las mejores marcas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
          Escoge el carro que se ajuste a tus necesidades: más de 100 opciones
          con excelentes marcas y modelos.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 md:gap-20">
          {brandIcons.map((BrandIcon, index) => (
            <span
              key={index}
              className="opacity-80 transition-opacity hover:opacity-100 motion-reduce:transition-none"
            >
              <BrandIcon />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
