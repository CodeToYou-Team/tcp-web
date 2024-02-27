import { sellSteps } from "@/lib/data";
import { consignationSteps } from "@/lib/data";

export default function SellSteps() {
  return (
    <>
      <div className="mx-auto w-5/6 grid items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-4xl lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pasos para vender tu auto.
          </h2>
          <p className="mt-4">
            Es importante que agendes una cita con nosotros para la inspección
            del vehículo. La cita es rápida y sencilla de programar, escríbenos
            vía whatsapp para coordinar la fecha y hora.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {sellSteps.map((step) => (
              <div key={step.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium ">{step.name}</dt>
                <dd className="mt-2 text-sm ">{step.description}</dd>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-12">
            Consignación.
          </h2>
          <p className="mt-4">
            Consignar tu vehículo con nosotros es totalmente gratis, nos
            encargaremos de acondicionar su vehículo para la venta con nuestro
            servicio de pulitura y autolavado para que su vehículo sea exhibido
            en óptimas condiciones. Contamos con un espacio seguro en nuestra
            sede del municipio Chacao donde su vehículo quedará resguardado y
            supervisado las 24 horas del día. Su tiempo es importante para
            nosotros, por lo que nos encargamos de gestionar toda la
            documentación pertinente para garantizar una venta eficaz y
            confiable.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {consignationSteps.map((consignationStep) => (
              <div
                key={consignationStep.name}
                className="border-t border-gray-200"
              >
                <h2 className="mt-2 text-md ">{consignationStep.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
