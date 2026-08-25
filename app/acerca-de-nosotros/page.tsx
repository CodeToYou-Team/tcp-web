import CTA from "../layouts/CTA";
import Map from "../layouts/Map";
import Image from "next/image";
import ImagesLayout from "../layouts/ImagesLayout";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { SEO_IMAGE, SITE_URL } from "@/lib/site-config";

export const metadata = {
  title: "Tu Carro Propio - Acerca de nosotros",
  description:
    "Conoce un poco más sobre nuestra empresa, donde encontrarnos, nuestras redes y más.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/acerca-de-nosotros",
    languages: {
      "es-VE": "/es-VE",
    },
  },
  openGraph: {
    images: SEO_IMAGE,
  },
};

export default function About() {
  return (
    <>
      <Map />
      <ImagesLayout />
      <CTA
        title="Contáctanos en nuestras redes sociales"
        description="Visita nuestros enlaces para resolver tus dudas, programar tu cita de venta o compra y más."
        image={
          <Image
            className="mx-auto my-4 w-2/3 max-w-none md:w-1/3"
            src="https://res.cloudinary.com/dkokeszcd/image/upload/w_280,h_500/v1707319734/iphone-whatsapp-ig-mockup_qbrpr1.png"
            alt="Captura de WhatsApp e Instagram de Tu Carro Propio"
            width={1335}
            height={2000}
            loading="lazy"
          />
        }
        link={
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button asChild size="lg">
              <a
                aria-label="Enlace al whatsapp de tu carro propio"
                rel="noopener noreferrer"
                target="_blank"
                href="https://wa.link/07ixay"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                aria-label="Enlace a la cuenta de instagram de tu carro propio"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/tucarropropio/?hl=es-la"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
                Instagram
              </a>
            </Button>
          </div>
        }
      />
    </>
  );
}
