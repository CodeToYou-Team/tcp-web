import Image from "next/image";

export default function Brands() {
  return (
    <div className="py-24 sm:py-26 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-semibold leading-8">
            Trabajamos con las mejores marcas del mercado
          </h2>
          <p className="mt-6 text-md leading-6 text-center">
            Escoge el carro que se ajuste a tus necesidades de entre más de 100
            opciones con excelentes marcas y modelos.
          </p>
        </div>
        <div className=" mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1709090366/tcp-web/toyota-logo_gmzs71.png"
            alt="toyota-logo"
            width={600}
            height={431}
            priority={true}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1709090130/tcp-web/jeep-logo_fz7enb.png"
            alt="jeep-logo"
            width={600}
            height={242}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1709090132/tcp-web/honda-logo_ehv4iu.png"
            alt="honda-logo"
            width={600}
            height={382}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1709090131/tcp-web/mitsubishi-logo_oazz51.png"
            alt="mitsubishi-logo"
            width={600}
            height={516}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1709090409/tcp-web/hyundai-logo_zmsml2.png"
            alt="hyundai-logo"
            width={600}
            height={338}
          />
        </div>
      </div>
    </div>
  );
}
