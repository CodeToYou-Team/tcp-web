import { sellSteps, consignationSteps } from "@/lib/data";

export default function SellSteps() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-start gap-x-8 gap-y-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
            Pasos para vender tu auto.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Es importante que agendes una cita con nosotros para la inspección
            del vehículo. La cita es rápida y sencilla de programar, escríbenos
            vía whatsapp para coordinar la fecha y hora.
          </p>

          <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {sellSteps.map((step) => (
              <div key={step.name} className="border-t border-border pt-4">
                <dt className="font-medium">{step.name}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
            Consignación.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
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

          <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {consignationSteps.map((consignationStep) => (
              <div
                key={consignationStep.name}
                className="border-t border-border pt-4"
              >
                <dt className="font-medium">{consignationStep.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
