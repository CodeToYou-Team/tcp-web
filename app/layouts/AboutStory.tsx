import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <h2 className="mt-3 text-2xl font-semibold leading-8 md:text-3xl">
              Transformamos la experiencia de{" "}
              <span className="text-graffiti-500">
                comprar, vender y cuidar
              </span>{" "}
              un vehículo
            </h2>
            <p className="mt-6 text-zinc-400 leading-relaxed">
              En TUCARROPROPIO nacimos con una visión clara: transformar la
              experiencia de comprar, vender y cuidar un vehículo. Nos
              especializamos en la comercialización de vehículos nuevos y
              seleccionados, ofreciendo una plataforma segura, transparente y
              eficiente para nuestros clientes e inversionistas.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Contamos con instalaciones de primer nivel, amplias, cómodas y
              acondicionadas con los máximos estándares de seguridad para
              recibir e intervenir vehículos premium. Acompañamos a nuestros
              clientes en cada etapa: desde la gestión de importación y venta,
              hasta el mantenimiento estético en nuestro centro de detailing
              especializado.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Image
              alt="Instalaciones TUCARROPROPIO"
              className="rounded-lg h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/v1727228641/tcp-web/0694f89d-a97e-4d4d-99d5-1d6038900b94_wbupkw.jpg"
              width={1080}
              height={1080}
              loading="eager"
            />
            <Image
              alt="Showroom TUCARROPROPIO"
              className="rounded-lg h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/v1727228707/tcp-web/23187ddf-01ad-4d63-96e8-89cf796fb0bd_jzg9tt.jpg"
              width={1080}
              height={1080}
              loading="eager"
            />
            <Image
              alt="Oficinas TUCARROPROPIO"
              className="rounded-lg h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/v1727228986/tcp-web/e0cd017f-983d-4206-8843-7072c6f94a1c_mvsg3e.jpg"
              width={810}
              height={1080}
              loading="eager"
            />
            <Image
              alt="Sede TUCARROPROPIO"
              className="rounded-lg h-full object-cover"
              src="https://res.cloudinary.com/dkokeszcd/image/upload/v1727229180/tcp-web/2b264e1b-eabd-4b05-b8ff-583ebced3df9_cwlfpm.jpg"
              width={810}
              height={1080}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
