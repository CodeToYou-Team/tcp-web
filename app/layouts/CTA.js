import Image from "next/image";

export default function CTA() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-zinc-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#fcf744" />
                <stop offset={1} stopColor="#fdf97c" />
              </radialGradient>
            </defs>
          </svg> */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
              Contáctanos por whatsapp.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-200">
              Si ya leíste los pasos para la venta de tu vehículo, sigue el
              enlace a whatsapp y coordina tu visita con nosotros.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Whatsapp <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <Image
            className="flex mx-auto w-1/3 max-w-none"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1702273736/tcp-web/iphone-whatsapp-mockup_tjkyco.png"
            alt="App screenshot"
            width={1335}
            height={2000}
          />
        </div>
      </div>
    </div>
  );
}
