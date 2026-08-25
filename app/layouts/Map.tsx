import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/Card";

// Receta de etiqueta de dato de contacto (misma familia que InfoBlock).
const contactLabelClass =
  "text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground";

export default function Map() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="flex-col items-start px-4 pt-4 pb-0">
            <h2 className={contactLabelClass}>Dirección</h2>
            <p className="mt-1 break-words">
              Carretera El Cafetal, El alto hatillo, Subida de Los Naranjos,
              Caracas 1083, Miranda
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37324.71682257169!2d-66.8614628956423!3d10.478770969768863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59941ef561e3%3A0x35ac16d11c66514d!2sTucarropropio!5e0!3m2!1ses!2sve!4v1727221685449!5m2!1ses!2sve"
              title="Mapa de la sede de Tu Carro Propio"
              className="w-full rounded-xl border-0"
              height={400}
              loading="lazy"
            ></iframe>
          </CardBody>
          <CardFooter className="flex-col items-start gap-4 px-4 pb-4 lg:flex-row lg:gap-16">
            <div>
              <h2 className={contactLabelClass}>Email</h2>
              <p className="mt-1 leading-relaxed">tucarropropiove@gmail.com</p>
            </div>
            <div>
              <h2 className={contactLabelClass}>Teléfonos</h2>
              <p className="mt-1 leading-relaxed">+58 424-1504459</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
