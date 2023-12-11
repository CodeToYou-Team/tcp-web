import Image from "next/image";

const steps = [
  {
    name: "Limpia tu vehículo",
    description:
      "Trae tu vehículo limpio, le tomaremos fotografías para su exposición.",
  },
  {
    name: "Documentación",
    description:
      "Debes ser el propietario del carro y debes presentar la documentación el día de la inspección.",
  },
  {
    name: "Avalúo",
    description:
      "Le haremos un avalúo a tu vehículo que incluye revisión mecánica y legal.",
  },

  {
    name: "Fotografía y vídeo",
    description:
      "El proceso tarda un máximo de 20 minutos. Te proporcionamos fotos y vídeos de máxima calidad",
  },
  {
    name: "Registro de datos",
    description:
      "Registraremos los datos de tu vehículo en nuestra base de datos.",
  },
  {
    name: "Precio de venta",
    description:
      "Nuestro equipo te recomendará un precio para tu vehículo, pero tú tienes la última palabra.",
  },
];

export default function SellSteps() {
  return (
    <div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pasos para vender tu auto
          </h2>
          <p className="mt-4">
            Es importante que agendes una cita con nosotros para la inspección
            del vehículo. La cita es rápida y sencilla de programar, escríbenos
            vía whatsapp para coordinar la fecha y hora.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {steps.map((step) => (
              <div key={step.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium ">{step.name}</dt>
                <dd className="mt-2 text-sm ">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            alt="office-1"
            className="rounded-lg"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1687847999/tcp-web/oficina2_m5ikps.jpg"
            width={810}
            height={1080}
          />
          <Image
            alt="office-1"
            className="rounded-lg"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1687847987/tcp-web/oficina_gqwrjj.jpg"
            width={810}
            height={1080}
          />
          <Image
            alt="office-1"
            className="rounded-lg"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1687847999/tcp-web/oficina2_m5ikps.jpg"
            width={810}
            height={1080}
          />
          <Image
            alt="office-1"
            className="rounded-lg"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1687847987/tcp-web/oficina_gqwrjj.jpg"
            width={810}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
}
