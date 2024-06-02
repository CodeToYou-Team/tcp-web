import {
  HondaIcon,
  HyundaiIcon,
  JeepIcon,
  MitsubishiIcon,
  ToyotaIcon,
} from "@/lib/svgs";
import Image from "next/image";

export default function Brands() {
  return (
    <div className="py-12 md:py-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl md:text-3xl font-semibold leading-8">
            Trabajamos con las mejores marcas del mercado
          </h2>
          <p className="mt-6 text-md leading-6 text-center">
            Escoge el carro que se ajuste a tus necesidades de entre más de 100
            opciones con excelentes marcas y modelos.
          </p>
        </div>
      </div>
      <div className="mt-16 w-full flex flex-wrap justify-center gap-10 md:gap-20">
        <ToyotaIcon />
        <JeepIcon />
        <HondaIcon />
        <MitsubishiIcon />
        <HyundaiIcon />
      </div>
    </div>
  );
}
