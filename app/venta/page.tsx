import SellSteps from "../layouts/SellSteps";
import CTA from "../layouts/CTA";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { SEO_IMAGE, SITE_URL } from "@/lib/site-config";

export const metadata = {
  title: "Tu Carro Propio - Venta",
  description:
    "Descubre como vender tu auto de manera rápida y sencilla con nuestro equipo de ventas",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/venta",
    languages: {
      "es-VE": "/es-VE",
    },
  },
  openGraph: {
    images: SEO_IMAGE,
  },
};

export default function Venta() {
  return (
    <>
      <SellSteps />
      <CTA
        title="Comunícate con nuestro equipo de ventas"
        description="Si ya leíste los pasos para la venta de tu vehículo, sigue el
        enlace a whatsapp y pautaremos tu cita."
        image={
          <Image
            className="mx-auto my-4 w-2/3 max-w-none md:w-1/3"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/v1707316230/iphone-whatsapp-mockup_m06ztd.png"
            alt="Captura del chat de WhatsApp de Tu Carro Propio"
            width={1335}
            height={2000}
            loading="lazy"
          />
        }
        link={
          <Button asChild size="lg">
            <a
              aria-label="Enlace al whatsapp de tu carro propio"
              rel="noopener noreferrer"
              target="_blank"
              href="https://wa.link/07ixay"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Ir a WhatsApp
            </a>
          </Button>
        }
      />
    </>
  );
}
